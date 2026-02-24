// ============================================================================
// DYNAMIC COURSE SCRIPT LOADER
// Loads {courseName}_data_bundle.js and {courseName}_schedule.js at runtime.
// ============================================================================

/**
 * Dynamically inject a <script> tag and return a Promise that resolves on load.
 * @param {string} src - Script URL to load.
 * @returns {Promise}
 */
function _loadScript(src) {
    return new Promise(function(resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.onload = function() {
            console.log("Loaded: " + src);
            resolve();
        };
        script.onerror = function() {
            console.error("Failed to load: " + src);
            reject(new Error("Script load failed: " + src));
        };
        document.head.appendChild(script);
    });
}

/**
 * Load both course data bundle and schedule for the given course name.
 * Clears any previously loaded QUESTIONS_DATA / TAUGHT_SCHEDULE globals first.
 * @param {string} courseName - e.g. "12Methods"
 * @returns {Promise}
 */
function loadCourseScripts(courseName) {
    if (!courseName) {
        console.warn("loadCourseScripts: No courseName provided, using default");
        courseName = (typeof DEFAULT_COURSE !== "undefined") ? DEFAULT_COURSE : "12Methods";
    }

    // Clear previous globals so QuestionEngine picks up fresh data
    if (typeof QUESTIONS_DATA !== "undefined") { window.QUESTIONS_DATA = undefined; }
    if (typeof TAXONOMY_DATA !== "undefined") { window.TAXONOMY_DATA = undefined; }
    if (typeof QUESTION_INDEX !== "undefined") { window.QUESTION_INDEX = undefined; }
    if (typeof TAUGHT_SCHEDULE !== "undefined") { window.TAUGHT_SCHEDULE = undefined; }

    var bundleSrc = courseName + "_data_bundle.js";
    var scheduleSrc = courseName + "_schedule.js";

    console.log("Loading course scripts for: " + courseName);

    return _loadScript(bundleSrc).then(function() {
        return _loadScript(scheduleSrc);
    });
}

// ============================================================================
// TEACHER TOOLBAR (injected when teacher logs in via ?teacher URL)
// ============================================================================
function _injectTeacherToolbar() {
    var topBarRight = document.querySelector(".top-bar-right");
    if (!topBarRight) return;

    // Create the teacher menu container
    var teacherMenu = document.createElement("div");
    teacherMenu.id = "teacher-toolbar";
    teacherMenu.className = "teacher-toolbar";
    teacherMenu.innerHTML =
        '<button class="teacher-toolbar-btn" id="teacher-toolbar-toggle">' +
            '<span class="teacher-badge-icon">\uD83C\uDF93</span> Teacher' +
        '</button>' +
        '<div class="teacher-toolbar-dropdown" id="teacher-toolbar-dropdown">' +
            '<div class="teacher-dropdown-item" style="padding:6px 12px;">' +
                '<label style="font-size:0.8rem;color:#6b7280;margin-bottom:4px;display:block;">' +
                    'Course</label>' +
                '<select id="teacher-course-switcher" style="width:100%;padding:6px 8px;' +
                    'border:1px solid #ddd;border-radius:6px;font-size:0.85rem;">' +
                    (typeof AVAILABLE_COURSES !== "undefined" ? AVAILABLE_COURSES : []).map(function(c) {
                        var sel = (typeof AccessControl !== "undefined" &&
                            AccessControl.getCourseName() === c) ? ' selected' : '';
                        return '<option value="' + c + '"' + sel + '>' + c + '</option>';
                    }).join("") +
                '</select>' +
            '</div>' +
            '<div class="teacher-dropdown-divider"></div>' +
            '<button class="teacher-dropdown-item" id="teacher-menu-costs">' +
                '<span class="teacher-dropdown-icon">\uD83D\uDCB0</span> Costs Dashboard' +
            '</button>' +
            '<div class="teacher-dropdown-divider"></div>' +
            '<button class="teacher-dropdown-item teacher-dropdown-exit" id="teacher-menu-exit">' +
                '<span class="teacher-dropdown-icon">\u2190</span> Exit Teacher Mode' +
            '</button>' +
        '</div>';

    // Insert before the student name
    topBarRight.insertBefore(teacherMenu, topBarRight.firstChild);

    // Toggle dropdown
    var toggleBtn = document.getElementById("teacher-toolbar-toggle");
    var dropdown  = document.getElementById("teacher-toolbar-dropdown");

    toggleBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        dropdown.classList.toggle("open");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function() {
        dropdown.classList.remove("open");
    });

    // Costs dashboard
    document.getElementById("teacher-menu-costs").addEventListener("click", function() {
        dropdown.classList.remove("open");
        // Hide the main app, show the teacher dashboard overlay
        document.getElementById("app-container").style.display = "none";
        TeacherDashboard.open();
    });

    // Exit teacher mode
    document.getElementById("teacher-menu-exit").addEventListener("click", function() {
        dropdown.classList.remove("open");
        sessionStorage.removeItem("wace_teacher_mode");
        sessionStorage.removeItem("wace_teacher_course");
        // Go back to the code screen (remove ?teacher param)
        var url = window.location.pathname;
        window.location.href = url;
    });

    // Course switcher
    var courseSwitcher = document.getElementById("teacher-course-switcher");
    if (courseSwitcher) {
        courseSwitcher.addEventListener("change", function() {
            var newCourse = courseSwitcher.value;
            sessionStorage.setItem("wace_teacher_course", newCourse);
            dropdown.classList.remove("open");
            // Reload the page so new course scripts are loaded fresh
            window.location.reload();
        });
    }

    console.log("Teacher toolbar injected");
}

// ============================================================================
// APP INITIALISATION
// ============================================================================
function initApp() {
    console.log("=== WACE Student Study Trainer v" + APP_VERSION + " ===");
    console.log("Initialising...");

    // Step 1: Initialise question engine (loads data from script-tag globals)
    QuestionEngine.init();

    // Step 2: Initialise IndexedDB
    DB.init().then(function() {
        // Step 2b: Initialise Firebase sync (pulls cloud data into IndexedDB)
        if (typeof FirebaseSync !== "undefined") {
            return FirebaseSync.init().then(function() {
                return DB.getAll(STORE_IMPORTED);
            });
        }
        // Step 3: Merge any imported questions
        return DB.getAll(STORE_IMPORTED);
    }).then(function(imported) {
        QuestionEngine.mergeImportedQuestions(imported);

        // Step 4: Get schedule updates from IndexedDB
        return DB.getAll(STORE_SCHEDULE_UPDATES);
    }).then(function(scheduleUpdates) {
        // Step 5: Check config for ahead-of-schedule setting
        return DB.get(STORE_CONFIG, "main").then(function(config) {
            var aheadOfSchedule = config ? !!config.aheadOfScheduleEnabled : false;

            // Step 6: Compute unlocked problem types
            QuestionEngine.computeUnlocked(scheduleUpdates, aheadOfSchedule);

            return config;
        });
    }).then(function(config) {
        // Step 7: Initialise UI event listeners
        UI.init();
        StudyUI.init();
        WrittenMode.init();
        PrintUI.init();
        KeyboardShortcuts.init();

        // Step 8: Show welcome screen or main app
        if (!config) {
            console.log("First run detected - showing welcome screen");
            UI.showWelcomeScreen();
        } else {
            console.log("Returning user: " + config.studentName);
            UI.showMainApp(config);
        }

        // Step 9: Inject teacher toolbar if in teacher mode
        if (sessionStorage.getItem("wace_teacher_mode") === "true") {
            _injectTeacherToolbar();
        }

        console.log("Initialisation complete.");

        // Check MathJax loaded after a delay -- warn user if not
        setTimeout(function() {
            if (typeof MathJax === "undefined" || !MathJax.typesetPromise) {
                console.warn("MathJax not available -- equations will show as raw LaTeX");
                var banner = document.createElement("div");
                banner.className = "mathjax-warning";
                banner.innerHTML = SYMBOLS.CROSS +
                    " <strong>Math rendering not available.</strong> " +
                    "Equations will show as text. " +
                    "To fix: place the MathJax offline bundle in " +
                    "mathjax/ or connect to the internet." +
                    '<button onclick="this.parentNode.remove()" ' +
                    'style="margin-left:12px;cursor:pointer;border:none;' +
                    'background:none;font-size:1.1em;">&times;</button>';
                var topBar = document.getElementById("top-bar");
                if (topBar && topBar.parentNode) {
                    topBar.parentNode.insertBefore(banner, topBar.nextSibling);
                }
            }
        }, 12000);
    }).catch(function(err) {
        console.error("Initialisation failed:", err);
        // Show error with recovery option
        document.body.innerHTML =
            "<div style=\"padding:2em;font-family:sans-serif;max-width:600px;margin:0 auto;\">" +
            "<h1>Error Starting Study Trainer</h1>" +
            "<p>There was a problem initialising the application:</p>" +
            "<pre style=\"background:#f5f5f5;padding:12px;border-radius:6px;overflow-x:auto;\">" +
            (err.message || err) + "</pre>" +
            "<p>Try refreshing the page. If the problem persists, " +
            "try opening in a different browser (Edge or Chrome recommended).</p>" +
            "<p>If refreshing doesn't help, you can reset the app data:</p>" +
            "<button onclick=\"if(confirm('This will erase all your progress. Continue?')){" +
            "var r=indexedDB.deleteDatabase('" + DB_NAME + "');" +
            "r.onsuccess=function(){window.location.reload();};" +
            "r.onerror=function(){alert('Reset failed. Try clearing browser data.');};" +
            "}\" style=\"padding:10px 20px;background:#dc2626;color:white;border:none;" +
            "border-radius:6px;cursor:pointer;font-size:0.95rem;\">Reset App Data</button>" +
            "<p style=\"color:#888;font-size:0.85rem;margin-top:12px;\">" +
            "Warning: resetting will erase all progress, mastery records, and settings.</p>" +
            "</div>";
    });
}

// Start when DOM is ready
window.addEventListener("DOMContentLoaded", function() {
    // Check access control first (shows code screen if needed)
    if (typeof AccessControl !== "undefined") {
        AccessControl.init().then(function(result) {
            if (result.granted) {
                // Determine which course to load
                var courseName = AccessControl.getCourseName();
                console.log("Course resolved: " + courseName);

                // Dynamically load course data bundle + schedule, then init
                loadCourseScripts(courseName).then(function() {
                    initApp();
                }).catch(function(err) {
                    console.error("Failed to load course scripts:", err);
                    document.body.innerHTML =
                        '<div style="padding:2em;font-family:sans-serif;max-width:600px;margin:0 auto;">' +
                        '<h1>Course Data Not Found</h1>' +
                        '<p>Could not load data for course: <strong>' + courseName + '</strong></p>' +
                        '<p>Expected files: <code>' + courseName + '_data_bundle.js</code> and ' +
                        '<code>' + courseName + '_schedule.js</code></p>' +
                        '<p>Check that these files exist in the app folder.</p>' +
                        '</div>';
                });
            }
            // If not granted, _showCodeScreen handles calling initApp after code entry
        });
    } else {
        // AccessControl not loaded (scripts missing), try default course
        loadCourseScripts(DEFAULT_COURSE).then(function() {
            initApp();
        }).catch(function() {
            initApp(); // Proceed anyway, QuestionEngine will warn about missing data
        });
    }
});
