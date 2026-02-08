// access-codes.js -- One-time access code system
// ENCODING: This file MUST be pure ASCII.
//
// How it works:
// 1. Teacher generates codes and uploads them to Firestore (via generate_codes.html)
// 2. Student visits the app -> sees access code screen
// 3. Student enters their code -> app checks Firestore
// 4. If valid and unclaimed: claims it, stores token in localStorage, proceeds to app
// 5. If already claimed by this browser: proceeds to app
// 6. If claimed by someone else: rejected
// 7. Next visit: localStorage token is checked, no code entry needed
//
// Firestore structure:
//   accessCodes/{CODE} = { claimed: false }                    -- unclaimed
//   accessCodes/{CODE} = { claimed: true, claimedBy: "name",  -- claimed
//                          claimedAt: "...", deviceToken: "..." }

"use strict";

var AccessControl = {
    TOKEN_KEY: "wace_access_token",
    CODE_KEY: "wace_access_code",
    NAME_KEY: "wace_student_name",

    /**
     * Check if the user already has a valid access token.
     * Returns a Promise that resolves with { valid: true, code, name }
     * or { valid: false }.
     */
    checkExistingAccess: function() {
        var token = localStorage.getItem(AccessControl.TOKEN_KEY);
        var code = localStorage.getItem(AccessControl.CODE_KEY);
        var name = localStorage.getItem(AccessControl.NAME_KEY);

        if (!token || !code) {
            return Promise.resolve({ valid: false });
        }

        // Verify the token still matches what is in Firestore
        var db = firebase.firestore();
        return db.collection("accessCodes").doc(code.toUpperCase()).get()
            .then(function(doc) {
                if (doc.exists && doc.data().claimed && doc.data().deviceToken === token) {
                    return { valid: true, code: code, name: name || "" };
                } else {
                    // Token no longer valid -- clear it
                    AccessControl.clearLocal();
                    return { valid: false };
                }
            })
            .catch(function(err) {
                console.warn("AccessControl: Could not verify token online:", err.message);
                // If offline but we have a local token, trust it
                // (Firestore offline persistence will handle this too)
                if (token && code) {
                    return { valid: true, code: code, name: name || "" };
                }
                return { valid: false };
            });
    },

    /**
     * Attempt to claim an access code.
     * Returns a Promise that resolves with:
     *   { success: true }
     *   { success: false, reason: "..." }
     */
    claimCode: function(code, studentName) {
        code = code.toUpperCase().trim();
        var db = firebase.firestore();
        var codeRef = db.collection("accessCodes").doc(code);

        // Generate a unique device token
        var deviceToken = AccessControl._generateToken();

        // Use a transaction to prevent race conditions
        return db.runTransaction(function(transaction) {
            return transaction.get(codeRef).then(function(doc) {
                if (!doc.exists) {
                    throw new Error("INVALID_CODE");
                }

                var data = doc.data();

                if (data.claimed) {
                    // Already claimed -- check if it is this device (re-activation)
                    var existingToken = localStorage.getItem(AccessControl.TOKEN_KEY);
                    if (data.deviceToken && data.deviceToken === existingToken) {
                        // Same device re-claiming -- allow it
                        return "ALREADY_MINE";
                    }
                    throw new Error("ALREADY_CLAIMED");
                }

                // Claim it
                transaction.update(codeRef, {
                    claimed: true,
                    claimedBy: studentName,
                    claimedAt: new Date().toISOString(),
                    deviceToken: deviceToken
                });

                return deviceToken;
            });
        }).then(function(result) {
            // Store locally
            if (result === "ALREADY_MINE") {
                // Keep existing token
            } else {
                localStorage.setItem(AccessControl.TOKEN_KEY, result);
            }
            localStorage.setItem(AccessControl.CODE_KEY, code);
            localStorage.setItem(AccessControl.NAME_KEY, studentName);
            return { success: true };
        }).catch(function(err) {
            if (err.message === "INVALID_CODE") {
                return { success: false, reason: "That code is not valid. Check with your teacher." };
            }
            if (err.message === "ALREADY_CLAIMED") {
                return { success: false, reason: "That code has already been used by another student." };
            }
            console.error("AccessControl: Claim failed:", err);
            return { success: false, reason: "Could not verify the code. Check your internet connection." };
        });
    },

    /**
     * Clear local access data (for logout/reset).
     */
    clearLocal: function() {
        localStorage.removeItem(AccessControl.TOKEN_KEY);
        localStorage.removeItem(AccessControl.CODE_KEY);
        localStorage.removeItem(AccessControl.NAME_KEY);
    },

    /**
     * Generate a random device token.
     */
    _generateToken: function() {
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var token = "";
        for (var i = 0; i < 32; i++) {
            token += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return token;
    },

    // ========================================================================
    // UI WIRING (called from initApp)
    // ========================================================================

    /**
     * Show the access code screen and wire up its events.
     * Returns a Promise that resolves when a valid code is entered.
     */
    showCodeScreen: function() {
        return new Promise(function(resolve) {
            // Hide all screens, show access code screen
            var screens = document.querySelectorAll(".screen");
            for (var i = 0; i < screens.length; i++) {
                screens[i].style.display = "none";
            }
            document.getElementById("access-code-screen").style.display = "flex";

            // Set up the icon (reuse graduation cap)
            var iconArea = document.getElementById("access-icon-area");
            if (iconArea) {
                iconArea.textContent = "\uD83D\uDD10"; // locked with key emoji
            }

            var input = document.getElementById("access-code-input");
            var btn = document.getElementById("access-code-btn");
            var errorEl = document.getElementById("access-code-error");

            // Enable button when code is long enough
            input.addEventListener("input", function() {
                var val = input.value.trim();
                btn.disabled = val.length < 6;
                errorEl.style.display = "none";
            });

            // Handle enter key
            input.addEventListener("keydown", function(e) {
                if (e.key === "Enter" && !btn.disabled) {
                    btn.click();
                }
            });

            // Handle verify button
            btn.addEventListener("click", function() {
                var code = input.value.trim().toUpperCase();
                if (!code) return;

                btn.disabled = true;
                btn.textContent = "Verifying...";
                errorEl.style.display = "none";

                // We need a name -- show a quick prompt or use a two-step flow
                // For simplicity, we will proceed to the welcome screen for the name
                // after the code is verified. But we need to verify the code first.

                // Temporarily claim with placeholder name -- will update after welcome screen
                AccessControl._verifyCodeExists(code).then(function(result) {
                    if (result.valid) {
                        // Code exists and is unclaimed (or ours) -- proceed
                        // Store code temporarily, full claim happens after name entry
                        localStorage.setItem(AccessControl.CODE_KEY, code);
                        resolve({ code: code, needsClaim: !result.alreadyMine });
                    } else {
                        errorEl.textContent = result.reason;
                        errorEl.style.display = "block";
                        btn.disabled = false;
                        btn.textContent = "Verify Code";
                    }
                });
            });

            input.focus();
        });
    },

    /**
     * Verify a code exists and is available (without claiming it yet).
     */
    _verifyCodeExists: function(code) {
        var db = firebase.firestore();
        return db.collection("accessCodes").doc(code.toUpperCase()).get()
            .then(function(doc) {
                if (!doc.exists) {
                    return { valid: false, reason: "That code is not valid. Check with your teacher." };
                }
                var data = doc.data();
                if (data.claimed) {
                    // Check if it is ours
                    var existingToken = localStorage.getItem(AccessControl.TOKEN_KEY);
                    if (data.deviceToken && data.deviceToken === existingToken) {
                        return { valid: true, alreadyMine: true };
                    }
                    return { valid: false, reason: "That code has already been used by another student." };
                }
                return { valid: true, alreadyMine: false };
            })
            .catch(function(err) {
                console.error("AccessControl: Verify failed:", err);
                return { valid: false, reason: "Could not verify the code. Check your internet connection." };
            });
    },

    /**
     * Complete the claim after the student enters their name on the welcome screen.
     * This is called from the welcome screen submit handler.
     */
    completeClaim: function(studentName) {
        var code = localStorage.getItem(AccessControl.CODE_KEY);
        if (!code) {
            return Promise.resolve({ success: true }); // No code system in use
        }
        return AccessControl.claimCode(code, studentName);
    }
};
