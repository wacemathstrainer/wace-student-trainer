// ============================================================================
// COST TRACKER MODULE
// Records Claude API token usage per student and syncs to Firestore.
// Allows the teacher to see per-student API costs over time.
//
// Pricing (claude-sonnet-4-20250514):
//   Input tokens:  $3.00 per 1,000,000 tokens
//   Output tokens: $15.00 per 1,000,000 tokens
//
// Update COST_RATES below if model pricing changes.
// ============================================================================

"use strict";

var CostTracker = {

    // ---- PRICING (USD per token) ----
    COST_RATES: {
        // claude-sonnet-4-20250514
        input:  3.00  / 1_000_000,   // $3.00 per million input tokens
        output: 15.00 / 1_000_000    // $15.00 per million output tokens
    },

    // ---- CURRENCY ----
    USD_TO_AUD: 1 / 0.66,   // 1 AUD = 0.66 USD  =>  1 USD = ~1.515 AUD

    /**
     * Convert a USD amount to AUD.
     */
    toAUD: function(usd) {
        return usd * CostTracker.USD_TO_AUD;
    },

    /**
     * Record a single API call's token usage.
     *
     * Called immediately after a successful Claude API response.
     * Pass the raw `data.usage` object from the Anthropic API response.
     *
     * @param {object} usage          - { input_tokens: number, output_tokens: number }
     * @param {string} context        - Short label, e.g. "study-marking" | "exam-marking"
     */
    record: function(usage, context) {
        if (!usage || typeof usage.input_tokens === "undefined") return;

        var inputTokens  = usage.input_tokens  || 0;
        var outputTokens = usage.output_tokens || 0;
        var costUSD      = (inputTokens  * CostTracker.COST_RATES.input) +
                           (outputTokens * CostTracker.COST_RATES.output);
        var costAUD      = CostTracker.toAUD(costUSD);

        var entry = {
            ts:           new Date().toISOString(),
            context:      context || "marking",
            inputTokens:  inputTokens,
            outputTokens: outputTokens,
            costUSD:      costUSD,
            costAUD:      costAUD
        };

        // Persist locally first (fast, works offline)
        CostTracker._saveLocal(entry);

        // Sync to Firestore (no-op if Firebase not enabled)
        if (typeof FirebaseSync !== "undefined" && FirebaseSync.saveApiCost) {
            FirebaseSync.saveApiCost(entry);
        }
    },

    // ---- LOCAL AGGREGATION (IndexedDB via DB module) ----

    /**
     * Save an entry to local IndexedDB cost store.
     * @private
     */
    _saveLocal: function(entry) {
        if (typeof DB === "undefined") return;
        // Use timestamp as key so entries never overwrite each other
        var key = entry.ts.replace(/[:.]/g, "-");
        DB.put("apiCosts", Object.assign({ id: key }, entry)).catch(function(err) {
            console.warn("CostTracker: Failed to save locally:", err);
        });
    },

    // ---- SUMMARY QUERIES ----

    /**
     * Get all local cost records as an array.
     * Returns a promise resolving to an array of cost entry objects.
     */
    getAllLocal: function() {
        if (typeof DB === "undefined") return Promise.resolve([]);
        return DB.getAll("apiCosts").catch(function() { return []; });
    },

    /**
     * Compute cost summary for a date range.
     *
     * @param {Date} from   - Start of range (inclusive)
     * @param {Date} to     - End of range (inclusive)
     * @returns {Promise<object>} - { calls, inputTokens, outputTokens, costUSD }
     */
    summarise: function(from, to) {
        return CostTracker.getAllLocal().then(function(records) {
            var filtered = records.filter(function(r) {
                var t = new Date(r.ts);
                return t >= from && t <= to;
            });

            var result = { calls: 0, inputTokens: 0, outputTokens: 0, costUSD: 0, costAUD: 0 };
            filtered.forEach(function(r) {
                result.calls        += 1;
                result.inputTokens  += r.inputTokens  || 0;
                result.outputTokens += r.outputTokens || 0;
                result.costUSD      += r.costUSD      || 0;
                result.costAUD      += r.costAUD      || CostTracker.toAUD(r.costUSD || 0);
            });
            return result;
        });
    },

    /**
     * Return summaries for the current week, month, and year.
     * @returns {Promise<{ week, month, year }>}
     */
    summaryByPeriod: function() {
        var now   = new Date();
        var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        // Start of current ISO week (Monday)
        var dow        = today.getDay();           // 0=Sun
        var daysSinMon = (dow + 6) % 7;           // days since Monday
        var weekStart  = new Date(today);
        weekStart.setDate(today.getDate() - daysSinMon);

        var monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        var yearStart  = new Date(now.getFullYear(), 0, 1);
        var future     = new Date(now.getFullYear() + 1, 0, 1); // safely past "now"

        return Promise.all([
            CostTracker.summarise(weekStart,  future),
            CostTracker.summarise(monthStart, future),
            CostTracker.summarise(yearStart,  future)
        ]).then(function(results) {
            return { week: results[0], month: results[1], year: results[2] };
        });
    }
};
