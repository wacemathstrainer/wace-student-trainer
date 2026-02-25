var ATOMISED_INTERVAL_ESTIMATES = {
  "topic": "Interval Estimates for Proportions",
  "questions": [
    {
      "pt_id": "IE_001",
      "topic": "Interval Estimates for Proportions",
      "subtopic": "Confidence Intervals for Proportions",
      "concept": "CI Calculation",
      "pt": "Calculating CI for proportion from sample data",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "substitution_error",
        "interpretation_mixup",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IE_001_m01",
          "q": "120 out of 400 sampled voters support a policy. Calculate a 95% confidence interval for the true proportion.",
          "a": "$\\hat{p} = 0.3$. $z = 1.96$. CI: $0.3 \\pm 1.96\\sqrt{\\frac{0.3 \\times 0.7}{400}} = 0.3 \\pm 1.96(0.02291) = 0.3 \\pm 0.0449 = (0.2551, 0.3449)$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IE_002",
      "topic": "Interval Estimates for Proportions",
      "subtopic": "Confidence Intervals for Proportions",
      "concept": "CI Calculation",
      "pt": "Calculating margin of error from confidence interval",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "substitution_error",
        "interpretation_mixup",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IE_002_m01",
          "q": "A confidence interval is $(0.35, 0.47)$. Find the margin of error and point estimate.",
          "a": "ME $= \\frac{0.47 - 0.35}{2} = 0.06$. $\\hat{p} = 0.35 + 0.06 = 0.41$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IE_003",
      "topic": "Interval Estimates for Proportions",
      "subtopic": "Confidence Intervals for Proportions",
      "concept": "CI Calculation",
      "pt": "Determining sample count from confidence interval center",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "substitution_error",
        "interpretation_mixup",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IE_003_m01",
          "q": "A 95% CI for a proportion is $(0.42, 0.58)$, based on a sample of 200. How many successes were observed?",
          "a": "$\\hat{p} = \\frac{0.42 + 0.58}{2} = 0.5$. Successes $= 200 \\times 0.5 = 100$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IE_004",
      "topic": "Interval Estimates for Proportions",
      "subtopic": "Confidence Intervals for Proportions",
      "concept": "CI Calculation",
      "pt": "Finding sample proportion and size from confidence interval bounds",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "substitution_error",
        "interpretation_mixup",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IE_004_m01",
          "q": "A 95% CI is $(0.22, 0.38)$. Find $\\hat{p}$ and, given $z = 1.96$, find $n$.",
          "a": "$\\hat{p} = 0.30$, ME $= 0.08$. $0.08 = 1.96\\sqrt{\\frac{0.3 \\times 0.7}{n}} \\Rightarrow n = \\frac{1.96^2 \\times 0.21}{0.0064} \\approx 126$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IE_005",
      "topic": "Interval Estimates for Proportions",
      "subtopic": "Confidence Intervals for Proportions",
      "concept": "CI Calculation",
      "pt": "Identifying and explaining factors that affect confidence interval width",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "substitution_error",
        "interpretation_mixup",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IE_005_m01",
          "q": "Explain how each of the following affects the width of a confidence interval: (a) increasing sample size, (b) increasing confidence level.",
          "a": "(a) Increasing $n$ decreases width (narrower interval, more precise). (b) Increasing confidence level increases width (wider interval, less precise but more confident)."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IE_006",
      "topic": "Interval Estimates for Proportions",
      "subtopic": "Confidence Intervals for Proportions",
      "concept": "CI Interpretation",
      "pt": "Making inference from CI about claimed/target value",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IE_006_m01",
          "q": "A manufacturer claims 90% of products meet quality standards. A 95% CI from a sample is $(0.83, 0.91)$. Does this support the manufacturer's claim?",
          "a": "Since 0.90 lies within the interval $(0.83, 0.91)$, the claim of 90% is plausible at the 95% confidence level. We cannot reject the manufacturer's claim."
        },
        {
          "qid": "IE_006_m02",
          "q": "A politician claims 60% support. A 95% CI is $(0.52, 0.58)$. Comment.",
          "a": "Since 0.60 is not contained in $(0.52, 0.58)$, the data does not support the politician's claim at the 95% confidence level. The true proportion of support appears to be less than 60%."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IE_007",
      "topic": "Interval Estimates for Proportions",
      "subtopic": "Confidence Intervals for Proportions",
      "concept": "Confidence Intervals (Construction)",
      "pt": "Constructing confidence interval for population proportion",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "substitution_error",
        "interpretation_mixup",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IE_007_m01",
          "q": "In a sample of 600 adults, 420 use social media daily. Construct a 99% confidence interval for the true proportion.",
          "a": "$\\hat{p} = 0.7$, $z = 2.576$. CI: $0.7 \\pm 2.576\\sqrt{\\frac{0.7 \\times 0.3}{600}} = 0.7 \\pm 2.576(0.01871) = 0.7 \\pm 0.0482 = (0.6518, 0.7482)$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IE_008",
      "topic": "Interval Estimates for Proportions",
      "subtopic": "Confidence Intervals for Proportions",
      "concept": "Margin of Error",
      "pt": "Calculating margin of error for specified confidence level",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "substitution_error",
        "interpretation_mixup",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IE_008_m01",
          "q": "$\\hat{p} = 0.45$, $n = 300$. Find the margin of error for a 90% confidence interval.",
          "a": "$z = 1.645$. $ME = 1.645\\sqrt{\\frac{0.45 \\times 0.55}{300}} = 1.645 \\times 0.02872 = 0.0472$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IE_009",
      "topic": "Interval Estimates for Proportions",
      "subtopic": "Confidence Intervals for Proportions",
      "concept": "Margin of Error",
      "pt": "Calculating minimum sample size for specified margin of error (worst-case $\\hat{p}=0.5$)",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "substitution_error",
        "interpretation_mixup",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IE_009_m01",
          "q": "Find the minimum sample size for a 95% CI with margin of error no more than 0.03.",
          "a": "$n \\geq \\left(\\frac{z}{E}\\right)^2 \\times 0.25 = \\left(\\frac{1.96}{0.03}\\right)^2 \\times 0.25 = 4268.44 \\times 0.25 = 1067.1$. So $n \\geq 1068$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IE_010",
      "topic": "Interval Estimates for Proportions",
      "subtopic": "Confidence Intervals for Proportions",
      "concept": "Margin of Error",
      "pt": "Using calculus to show maximum margin of error occurs at $\\hat{p} = 0.5$",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IE_010_m01",
          "q": "Show that $\\hat{p}(1 - \\hat{p})$ is maximised when $\\hat{p} = 0.5$.",
          "a": "Let $g(\\hat{p}) = \\hat{p}(1-\\hat{p}) = \\hat{p} - \\hat{p}^2$. $g'(\\hat{p}) = 1 - 2\\hat{p} = 0 \\Rightarrow \\hat{p} = 0.5$. $g''(\\hat{p}) = -2 < 0$, so maximum. $g(0.5) = 0.25$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IE_011",
      "topic": "Interval Estimates for Proportions",
      "subtopic": "Random Sampling",
      "concept": "Sampling Methods",
      "pt": "Identifying sources of bias in sampling procedure with explanation",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "substitution_error",
        "interpretation_mixup",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IE_011_m01",
          "q": "A school surveys student satisfaction by asking students in the library at lunchtime. Identify a source of bias.",
          "a": "Selection bias — students who use the library at lunchtime may not be representative of all students. Students who play sport, socialise elsewhere, or leave school may have different satisfaction levels."
        },
        {
          "qid": "IE_011_m02",
          "q": "An online retailer emails all customers asking for product reviews. Identify a source of bias.",
          "a": "Non-response bias — customers with strong opinions (either very satisfied or very dissatisfied) are more likely to respond, while neutral customers may not bother."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IE_012",
      "topic": "Interval Estimates for Proportions",
      "subtopic": "Sample Proportions",
      "concept": "Sample Proportions",
      "pt": "Calculating mean and standard deviation of sample proportion distribution",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "substitution_error",
        "interpretation_mixup",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IE_012_m01",
          "q": "If $p = 0.6$ and $n = 200$, find the mean and standard deviation of $\\hat{P}$.",
          "a": "$\\mu_{\\hat{P}} = 0.6$. $\\sigma_{\\hat{P}} = \\sqrt{\\frac{0.6 \\times 0.4}{200}} = \\sqrt{0.0012} \\approx 0.0346$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IE_013",
      "topic": "Interval Estimates for Proportions",
      "subtopic": "Sample Proportions",
      "concept": "Sample Proportions",
      "pt": "Calculating point estimate for population proportion",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "substitution_error",
        "interpretation_mixup",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IE_013_m01",
          "q": "In a sample of 500 voters, 215 support a candidate. What is the point estimate for the population proportion?",
          "a": "$\\hat{p} = \\frac{215}{500} = 0.43$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IE_014",
      "topic": "Interval Estimates for Proportions",
      "subtopic": "Sample Proportions",
      "concept": "Sample Proportions",
      "pt": "Calculating sample proportion from frequency data",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "substitution_error",
        "interpretation_mixup",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IE_014_m01",
          "q": "In a survey of 250 people, 80 said they prefer brand A. Calculate the sample proportion $\\hat{p}$.",
          "a": "$\\hat{p} = \\frac{80}{250} = 0.32$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IE_015",
      "topic": "Interval Estimates for Proportions",
      "subtopic": "Sample Proportions",
      "concept": "Sample Proportions",
      "pt": "Stating approximate distribution of sample proportion",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "substitution_error",
        "interpretation_mixup",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IE_015_m01",
          "q": "A population has $p = 0.4$ and a sample of $n = 100$ is taken. State the approximate distribution of $\\hat{P}$.",
          "a": "$\\hat{P} \\sim N\\left(0.4, \\frac{0.4 \\times 0.6}{100}\\right)$ i.e. $\\hat{P} \\approx N(0.4, 0.0024)$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IE_016",
      "topic": "Interval Estimates for Proportions",
      "subtopic": "Sample Proportions",
      "concept": "Sample Proportions",
      "pt": "Stating condition for normal approximation to sample proportion",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "substitution_error",
        "interpretation_mixup",
        "sign_error",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IE_016_m01",
          "q": "State the conditions for the normal approximation to the sampling distribution of $\\hat{P}$ to be valid.",
          "a": "$np \\geq 10$ and $n(1-p) \\geq 10$ (or equivalently $n\\hat{p} \\geq 10$ and $n(1-\\hat{p}) \\geq 10$)."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IE_017",
      "topic": "Interval Estimates for Proportions",
      "subtopic": "Sample Proportions",
      "concept": "Sample Proportions",
      "pt": "Using approximate normality of sample proportion distribution to calculate probability",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IE_017_m01",
          "q": "A poll has $p = 0.55$ and $n = 400$. Find $P(\\hat{P} > 0.6)$.",
          "a": "$\\sigma = \\sqrt{\\frac{0.55 \\times 0.45}{400}} = 0.02487$. $Z = \\frac{0.6-0.55}{0.02487} = 2.01$. $P(\\hat{P} > 0.6) = P(Z > 2.01) \\approx 0.0222$"
        }
      ],
      "hard": []
    }
  ]
};
