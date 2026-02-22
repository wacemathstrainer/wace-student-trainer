// teacher-dashboard.js
// Loaded silently alongside the student app.
// Activated only when TEACHER_DASHBOARD_PASSWORD is entered at the access code screen.
// Students see nothing -- this module is completely inert until the password is matched.

"use strict";

var TeacherDashboard = {

    // ---- State ----
    _allStudents: [],   // [{ id, name, code, lastActive, costs:[] }]
    _period:      "week",
    _sortCol:     "cost",
    _sortDir:     "desc",
    _USD_TO_AUD:  1 / 0.66,

    // ---- Lifecycle ----

    open: function() {
        document.getElementById("teacher-dashboard").style.display = "block";
        window.scrollTo(0, 0);
        this._setSyncStatus("loading");
        this.refresh();
    },

    close: function() {
        document.getElementById("teacher-dashboard").style.display = "none";

        // If in teacher mode (logged in via ?teacher), return to the main student app
        if (sessionStorage.getItem("wace_teacher_mode") === "true") {
            document.getElementById("app-container").style.display = "block";
            return;
        }

        // Otherwise, re-show the access code screen (legacy direct-dashboard flow)
        var screen = document.getElementById("access-code-screen");
        var input  = document.getElementById("access-code-input");
        if (screen) screen.style.display = "flex";
        if (input)  { input.value = ""; input.focus(); }
    },

    refresh: function() {
        var self = this;
        this._setSyncStatus("loading");
        this._hideError();

        var db = (typeof firebase !== "undefined" && firebase.apps.length)
            ? firebase.firestore()
            : null;

        if (!db) {
            self._showError("Firebase is not initialised. Make sure FIREBASE_ENABLED is true in firebase-config.js.");
            self._setSyncStatus("off");
            return;
        }

        db.collection("students").get()
            .then(function(snapshot) {
                var docs = [];
                snapshot.forEach(function(doc) {
                    docs.push({ id: doc.id, data: doc.data() });
                });

                if (docs.length === 0) {
                    self._allStudents = [];
                    self._render();
                    self._setSyncStatus("live");
                    return;
                }

                var promises = docs.map(function(s) {
                    return db.collection("students").doc(s.id)
                        .collection("apiCosts").get()
                        .then(function(costSnap) {
                            var costs = [];
                            costSnap.forEach(function(c) { costs.push(c.data()); });
                            return {
                                id:         s.id,
                                name:       (s.data.profile && s.data.profile.name) || s.id,
                                code:       s.id,
                                lastActive: (s.data.profile && s.data.profile.lastActive)
                                            ? s.data.profile.lastActive.toDate() : null,
                                costs:      costs
                            };
                        });
                });

                return Promise.all(promises);
            })
            .then(function(students) {
                if (!students) return;
                self._allStudents = students;
                self._render();
                self._setSyncStatus("live");
            })
            .catch(function(err) {
                self._showError("Failed to load data: " + err.message +
                    ". Check your Firestore security rules allow authenticated reads.");
                self._setSyncStatus("off");
            });
    },

    // ---- Period ----

    setPeriod: function(p) {
        this._period = p;

        // Update tab styles
        var tabs = document.querySelectorAll(".td-period-tab");
        tabs.forEach(function(btn) {
            var active = btn.dataset.period === p;
            btn.style.background    = active ? "#fff"         : "transparent";
            btn.style.color         = active ? "#1a1a2e"      : "#6b6b6b";
            btn.style.fontWeight    = active ? "600"          : "500";
            btn.style.boxShadow     = active ? "0 2px 8px rgba(0,0,0,.05)" : "none";
        });

        var headings = { week:"This Week", month:"This Month", year:"This Year", all:"All Time" };
        var h = document.getElementById("td-period-heading");
        if (h) h.textContent = headings[p] || "This Week";

        this._render();
    },

    // ---- Sorting / filtering ----

    sortBy: function(col) {
        if (this._sortCol === col) {
            this._sortDir = this._sortDir === "asc" ? "desc" : "asc";
        } else {
            this._sortCol = col;
            this._sortDir = "desc";
        }
        this._updateSortIcons();
        this._renderTable();
    },

    filterTable: function() {
        this._renderTable();
    },

    // ---- Helpers ----

    _getPeriodRange: function(p) {
        var now   = new Date();
        var end   = new Date(now.getTime() + 86400000);
        var start;
        if (p === "week") {
            var dow = (now.getDay() + 6) % 7;
            start = new Date(now); start.setHours(0,0,0,0);
            start.setDate(start.getDate() - dow);
        } else if (p === "month") {
            start = new Date(now.getFullYear(), now.getMonth(), 1);
        } else if (p === "year") {
            start = new Date(now.getFullYear(), 0, 1);
        } else {
            start = new Date(0);
        }
        return { start: start, end: end };
    },

    _filterCosts: function(costs, p) {
        var range = this._getPeriodRange(p);
        return costs.filter(function(c) {
            var t = new Date(c.ts || 0);
            return t >= range.start && t < range.end;
        });
    },

    _sumCosts: function(costs) {
        var self = this;
        var out  = { calls:0, inputTokens:0, outputTokens:0, costAUD:0 };
        costs.forEach(function(c) {
            out.calls++;
            out.inputTokens  += c.inputTokens  || 0;
            out.outputTokens += c.outputTokens || 0;
            out.costAUD += (c.costAUD !== undefined)
                ? c.costAUD
                : (c.costUSD || 0) * self._USD_TO_AUD;
        });
        return out;
    },

    _fmtAUD: function(n) {
        if (n === 0)   return "A$0.0000";
        if (n < 0.001) return "A$" + n.toFixed(6);
        if (n < 1)     return "A$" + n.toFixed(4);
        return "A$" + n.toFixed(2);
    },

    _fmtDate: function(d) {
        if (!d) return "\u2014";
        var diff = Math.floor((new Date() - d) / 86400000);
        if (diff === 0) return "Today";
        if (diff === 1) return "Yesterday";
        if (diff < 7)   return diff + " days ago";
        return d.toLocaleDateString("en-AU", { day:"numeric", month:"short" });
    },

    _isRecent: function(d) {
        return d && (new Date() - d) < 7 * 86400000;
    },

    _esc: function(s) {
        return String(s || "")
            .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
    },

    // ---- Render ----

    _render: function() {
        this._renderSummary();
        this._renderTable();
        this._updateSortIcons();
    },

    _renderSummary: function() {
        var self = this;
        var totalAUD = 0, totalCalls = 0, active = 0;

        this._allStudents.forEach(function(s) {
            var filtered = self._filterCosts(s.costs, self._period);
            var sum      = self._sumCosts(filtered);
            if (sum.calls > 0) active++;
            totalAUD   += sum.costAUD;
            totalCalls += sum.calls;
        });

        var avgAUD = active > 0 ? totalAUD / active : 0;
        var total  = this._allStudents.length;

        this._setText("td-sum-cost",         this._fmtAUD(totalAUD));
        this._setText("td-sum-cost-usd",     totalAUD > 0
            ? "US$" + (totalAUD / this._USD_TO_AUD).toFixed(4) + " approx" : "");
        this._setText("td-sum-students",     active);
        this._setText("td-sum-students-sub", "of " + total + " total students");
        this._setText("td-sum-calls",        totalCalls);
        this._setText("td-sum-calls-sub",    active > 0
            ? (totalCalls / active).toFixed(1) + " avg per active student" : "no API calls yet");
        this._setText("td-sum-avg",          this._fmtAUD(avgAUD));
        this._setText("td-sum-avg-sub",      "among " + active + " active student" + (active !== 1 ? "s" : ""));
    },

    _getRows: function() {
        var self   = this;
        var search = (document.getElementById("td-search")
                        ? document.getElementById("td-search").value : "")
                        .toLowerCase().trim();

        var rows = this._allStudents.map(function(s) {
            var filtered = self._filterCosts(s.costs, self._period);
            var sum      = self._sumCosts(filtered);
            return {
                name:       s.name,
                code:       s.code,
                lastActive: s.lastActive,
                calls:      sum.calls,
                costAUD:    sum.costAUD
            };
        });

        if (search) {
            rows = rows.filter(function(r) {
                return r.name.toLowerCase().includes(search) ||
                       r.code.toLowerCase().includes(search);
            });
        }

        var col = this._sortCol, dir = this._sortDir;
        rows.sort(function(a, b) {
            var av, bv;
            if (col === "name") {
                av = a.name.toLowerCase(); bv = b.name.toLowerCase();
                return dir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
            }
            av = col === "calls" ? a.calls
               : col === "last"  ? (a.lastActive ? a.lastActive.getTime() : 0)
               :                   a.costAUD;
            bv = col === "calls" ? b.calls
               : col === "last"  ? (b.lastActive ? b.lastActive.getTime() : 0)
               :                   b.costAUD;
            return dir === "asc" ? av - bv : bv - av;
        });

        return rows;
    },

    _renderTable: function() {
        var self  = this;
        var rows  = this._getRows();
        var tbody = document.getElementById("td-tbody");
        if (!tbody) return;

        if (rows.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding:60px 24px; color:#6b6b6b; font-size:.9rem;">No students found for this period.</td></tr>';
            return;
        }

        var maxCost = 0;
        rows.forEach(function(r) { if (r.costAUD > maxCost) maxCost = r.costAUD; });

        tbody.innerHTML = rows.map(function(r) {
            var pct  = maxCost > 0 ? Math.round((r.costAUD / maxCost) * 100) : 0;
            var barW = Math.max(pct, r.costAUD > 0 ? 2 : 0);
            var dateColor = self._isRecent(r.lastActive) ? "#1a7a4c" : "#6b6b6b";
            var dateFw    = self._isRecent(r.lastActive) ? "500" : "400";

            return "<tr style='border-bottom:1px solid #d4d0c8;'>" +
                "<td style='padding:14px 16px;'>" +
                    "<span style='font-weight:600; color:#1a1a2e; display:block;'>" + self._esc(r.name) + "</span>" +
                    "<span style='font-family:\"JetBrains Mono\",monospace; font-size:.72rem; color:#6b6b6b;'>" + self._esc(r.code) + "</span>" +
                "</td>" +
                "<td style='padding:14px 16px;'>" +
                    "<span style='display:inline-flex; align-items:center; justify-content:center; background:" + (r.calls > 0 ? "#f5ecd7" : "#f4f3f0") + "; color:" + (r.calls > 0 ? "#7a5a06" : "#d4d0c8") + "; border-radius:20px; padding:2px 10px; font-size:.78rem; font-weight:600; font-family:\"JetBrains Mono\",monospace; min-width:36px;'>" + r.calls + "</span>" +
                "</td>" +
                "<td style='padding:14px 16px;'>" +
                    "<span style='font-family:\"JetBrains Mono\",monospace; font-size:.92rem; color:" + (r.costAUD === 0 ? "#d4d0c8" : "#1a1a2e") + ";'>" + self._fmtAUD(r.costAUD) + "</span>" +
                "</td>" +
                "<td style='padding:14px 16px; min-width:120px;'>" +
                    "<div style='height:6px; border-radius:3px; background:#b8860b; width:" + barW + "%; min-width:" + (r.costAUD > 0 ? "4px" : "0") + "; transition:width .5s;'></div>" +
                "</td>" +
                "<td style='padding:14px 16px;'>" +
                    "<span style='font-size:.82rem; color:" + dateColor + "; font-weight:" + dateFw + "; white-space:nowrap;'>" + self._fmtDate(r.lastActive) + "</span>" +
                "</td>" +
            "</tr>";
        }).join("");
    },

    _updateSortIcons: function() {
        var cols = ["name","calls","cost","last"];
        var self = this;
        cols.forEach(function(c) {
            var el = document.getElementById("td-sort-" + c);
            if (!el) return;
            if (c === self._sortCol) {
                el.textContent = self._sortDir === "asc" ? " \u25B2" : " \u25BC";
                el.style.color  = "#b8860b";
            } else {
                el.textContent = " \u21C5";
                el.style.color  = "#d4d0c8";
            }
        });
    },

    // ---- Export CSV ----

    exportCSV: function() {
        var self  = this;
        var rows  = this._getRows();
        var lines = [["Student Name","Access Code","API Calls","Cost (AUD)","Cost (USD)","Last Active"].join(",")];

        rows.forEach(function(r) {
            var usd = r.costAUD / self._USD_TO_AUD;
            lines.push([
                self._csvEsc(r.name),
                self._csvEsc(r.code),
                r.calls,
                r.costAUD.toFixed(6),
                usd.toFixed(6),
                r.lastActive ? r.lastActive.toISOString().slice(0,10) : ""
            ].join(","));
        });

        var blob  = new Blob([lines.join("\n")], { type:"text/csv" });
        var a     = document.createElement("a");
        var label = { week:"Week", month:"Month", year:"Year", all:"AllTime" };
        a.href     = URL.createObjectURL(blob);
        a.download = "API_Costs_" + (label[this._period] || "All") + "_" +
                     new Date().toISOString().slice(0,10) + ".csv";
        a.click();
    },

    _csvEsc: function(s) {
        s = String(s || "");
        return (s.includes(",") || s.includes('"') || s.includes("\n"))
            ? '"' + s.replace(/"/g,'""') + '"' : s;
    },

    // ---- Status helpers ----

    _setSyncStatus: function(state) {
        var dot   = document.getElementById("td-sync-dot");
        var label = document.getElementById("td-sync-label");
        if (!dot || !label) return;
        if (state === "live") {
            dot.style.background = "#4caf50";
            label.textContent    = "Live";
        } else if (state === "loading") {
            dot.style.background = "#b8860b";
            label.textContent    = "Loading\u2026";
        } else {
            dot.style.background = "#aaa";
            label.textContent    = "Offline";
        }
    },

    _showError: function(msg) {
        var el = document.getElementById("td-error");
        if (el) { el.textContent = msg; el.style.display = "block"; }
    },

    _hideError: function() {
        var el = document.getElementById("td-error");
        if (el) el.style.display = "none";
    },

    _setText: function(id, val) {
        var el = document.getElementById(id);
        if (el) el.textContent = val;
    }
};
