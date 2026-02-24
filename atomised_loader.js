// Global reason library for the misconception picker
var ATOMISED_REASONS = [
  { id: "wrong_rule", label: "I used the wrong method/rule" },
  { id: "missing_chain_factor", label: "I forgot a chain rule factor" },
  { id: "setup_error", label: "I set it up incorrectly" },
  { id: "substitution_error", label: "Method OK but substituted/evaluated wrong" },
  { id: "sign_error", label: "I made a sign error (+/−)" },
  { id: "interpretation_mixup", label: "I misread what was being asked" },
  { id: "algebra_slip", label: "Algebraic simplification error" },
  { id: "not_sure", label: "Not sure / other" },
];


// ======================================================================
// ATOMISED DATA LOADER
// Merges split topic files into a single ATOMISED_DATA object.
// Include AFTER the topic-specific JS files in your HTML.
// ======================================================================

var ATOMISED_DATA = (function() {
  var all = [];
  if (typeof ATOMISED_DIFFERENTIATION !== 'undefined') all = all.concat(ATOMISED_DIFFERENTIATION.questions);
  if (typeof ATOMISED_INTEGRATION !== 'undefined') all = all.concat(ATOMISED_INTEGRATION.questions);
  if (typeof ATOMISED_PROBABILITY !== 'undefined') all = all.concat(ATOMISED_PROBABILITY.questions);

  // Build lookup indexes
  var byPtId = {};
  var byConcept = {};
  var byTopic = {};
  all.forEach(function(pt) {
    byPtId[pt.pt_id] = pt;
    if (!byConcept[pt.concept]) byConcept[pt.concept] = [];
    byConcept[pt.concept].push(pt);
    if (!byTopic[pt.topic]) byTopic[pt.topic] = [];
    byTopic[pt.topic].push(pt);
  });

  return {
    questions: all,
    byPtId: byPtId,
    byConcept: byConcept,
    byTopic: byTopic,

    // Convenience methods
    getPT: function(ptId) { return byPtId[ptId] || null; },
    getForConcept: function(concept) { return byConcept[concept] || []; },
    getForTopic: function(topic) { return byTopic[topic] || []; },
    totalPTs: function() { return all.length; },
    totalQuestions: function() {
      var n = 0;
      all.forEach(function(pt) {
        n += pt.easy.length + pt.medium.length + pt.hard.length;
      });
      return n;
    }
  };
})();
