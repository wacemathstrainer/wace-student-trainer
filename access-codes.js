// access-codes.js -- One-time access code system
// ENCODING: This file MUST be pure ASCII.
//
// Flow:
//   1. Teacher generates unique codes via generate_codes.html (private tool)
//   2. Student visits URL -> sees access code entry screen
//   3. Student enters code + name -> app checks Firebase -> locks code to browser
//   4. Next visit -> auto-recognised, no code needed
//   5. Anyone else trying that code gets rejected
//
// The access code screen is shown BEFORE the normal welcome/app flow.
// Once a code is verified and claimed, initApp() continues normally.

"use strict";

var AccessControl = {
    TOKEN_KEY: "wace_device_token",
    CODE_KEY: "wace_access_code",
    NAME_KEY: "wace_student_name",

    /**
     * Initialise access control. Returns a Promise that resolves with
     * { granted: true } if the student already has a valid claimed code,
     * or shows the access code screen and resolves { granted: false }
     * (initApp will be re-called after successful code entry).
     */
    init: function() {
        // If Firebase is not enabled, skip access control entirely
        if (!FIREBASE_ENABLED || !FIREBASE_CONFIG || !FIREBASE_CONFIG.apiKey) {
            return Promise.resolve({ granted: true });
        }

        // Initialise Firebase if not already done
        if (!firebase.apps.length) {
            firebase.initializeApp(FIREBASE_CONFIG);
        }

        // Check if this browser already has a claimed code
        var existingCode = localStorage.getItem(AccessControl.CODE_KEY);
        var existingToken = localStorage.getItem(AccessControl.TOKEN_KEY);

        if (existingCode && existingToken) {
            // Verify the code is still ours
            return AccessControl._verifyCodeExists(existingCode).then(function(result) {
                if (result.valid && result.alreadyMine) {
                    console.log("AccessControl: Code verified, access granted");
                    return { granted: true };
                }
                // Code was revoked or reassigned -- show code screen
                localStorage.removeItem(AccessControl.CODE_KEY);
                localStorage.removeItem(AccessControl.TOKEN_KEY);
                AccessControl._showCodeScreen();
                return { granted: false };
            });
        }

        // No code stored -- show the access code entry screen
        AccessControl._showCodeScreen();
        return Promise.resolve({ granted: false });
    },

    /**
     * Show the access code entry screen and set up event listeners.
     * @private
     */
    _showCodeScreen: function() {
        var screen = document.getElementById("access-code-screen");
        var input = document.getElementById("access-code-input");
        var btn = document.getElementById("access-code-btn");
        var errorEl = document.getElementById("access-code-error");
        var iconArea = document.getElementById("access-icon-area");

        if (!screen || !input || !btn) {
            console.warn("AccessControl: Code screen elements not found, skipping");
            initApp(); // Fallback -- proceed without access control
            return;
        }

        // Set graduation cap icon
        if (iconArea) iconArea.textContent = "\uD83C\uDF93";

        screen.style.display = "flex";

        // Enable button when input has content
        input.addEventListener("input", function() {
            btn.disabled = input.value.trim().length < 4;
            if (errorEl) errorEl.textContent = "";
        });

        // Handle Enter key
        input.addEventListener("keydown", function(e) {
            if (e.key === "Enter" && !btn.disabled) {
                btn.click();
            }
        });

        // Handle submit
        btn.addEventListener("click", function() {
            var code = input.value.trim().toUpperCase();
            btn.disabled = true;
            btn.textContent = "Checking...";

            AccessControl._verifyCodeExists(code).then(function(result) {
                if (!result.valid) {
                    if (errorEl) errorEl.textContent = result.reason;
                    btn.disabled = false;
                    btn.textContent = "Continue";
                    return;
                }

                if (result.alreadyMine) {
                    // Re-use existing claim
                    localStorage.setItem(AccessControl.CODE_KEY, code);
                    screen.style.display = "none";
                    initApp();
                    return;
                }

                // Generate a device token and store the code
                var token = AccessControl._generateToken();
                localStorage.setItem(AccessControl.TOKEN_KEY, token);
                localStorage.setItem(AccessControl.CODE_KEY, code);

                // Don't claim yet -- wait for the welcome screen name entry
                // The code will be claimed when the student enters their name
                screen.style.display = "none";
                initApp();
            });
        });

        // Focus the input
        setTimeout(function() { input.focus(); }, 100);
    },

    /**
     * Verify a code exists in Firestore and check if it is claimed.
     * @private
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
    },

    /**
     * Claim a code -- mark it as used in Firestore with this device's token.
     */
    claimCode: function(code, studentName) {
        var db = firebase.firestore();
        var token = localStorage.getItem(AccessControl.TOKEN_KEY);

        return db.collection("accessCodes").doc(code.toUpperCase()).update({
            claimed: true,
            deviceToken: token,
            studentName: studentName,
            claimedAt: firebase.firestore.FieldValue.serverTimestamp()
        }).then(function() {
            localStorage.setItem(AccessControl.NAME_KEY, studentName);
            console.log("AccessControl: Code " + code + " claimed by " + studentName);
            return { success: true };
        }).catch(function(err) {
            console.error("AccessControl: Claim failed:", err);
            return { success: false, reason: "Could not register your code. Try again." };
        });
    },

    /**
     * Generate a random device token.
     * @private
     */
    _generateToken: function() {
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var token = "";
        for (var i = 0; i < 32; i++) {
            token += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return token;
    }
};
