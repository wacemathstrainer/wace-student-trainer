// ======================================================================
// ATOMISED PRACTICE — ATOMISED_PROBABILITY
// Topics: Discrete Random Variables, Continuous Random Variables and the Normal Distribution, Interval Estimates for Proportions
// 61 PTs, 69 questions (0 expanded, 61 basic)
// ======================================================================

var ATOMISED_PROBABILITY = {
  questions: [
    // Area Calculations > Determining parameter of PDF using area condition
    {
      pt_id: "CN_001",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "General Continuous Random Variables",
      concept: "Area Calculations",
      pt: "Determining parameter of PDF using area condition",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "CN_001_m01",
          q: "$f(x) = cx$ for $0 \\leq x \\leq 4$. Find $c$.",
          a: "$\\int_0^4 cx dx = c \\cdot 8 = 1 \\Rightarrow c = \\frac{1}{8}$"
        },
      ],
      hard: [
      ],
    },

    // Expected Value > Calculating $E(aX + b)$ using linearity of expectation
    {
      pt_id: "CN_002",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "General Continuous Random Variables",
      concept: "Expected Value",
      pt: "Calculating $E(aX + b)$ using linearity of expectation",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "CN_002_m01",
          q: "Given $E(X) = 4$, find $E(3X - 7)$.",
          a: "$E(3X - 7) = 3(4) - 7 = 5$"
        },
      ],
      hard: [
      ],
    },

    // Expected Value > Calculating expected value of continuous random variabl
    {
      pt_id: "CN_003",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "General Continuous Random Variables",
      concept: "Expected Value",
      pt: "Calculating expected value of continuous random variable by integration",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "algebra_slip", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "CN_003_m01",
          q: "$f(x) = 2x$ for $0 \\leq x \\leq 1$. Find $E(X)$.",
          a: "$E(X) = \\int_0^1 x \\cdot 2x dx = \\int_0^1 2x^2 dx = \\frac{2}{3}$"
        },
        {
          qid: "CN_003_m02",
          q: "$f(x) = \\frac{3}{8}x^2$ for $0 \\leq x \\leq 2$. Find $E(X)$.",
          a: "$E(X) = \\int_0^2 x \\cdot \\frac{3}{8}x^2 dx = \\frac{3}{8} \\cdot \\frac{x^4}{4}\\Big|_0^2 = \\frac{3}{8} \\cdot 4 = \\frac{3}{2}$"
        },
      ],
      hard: [
      ],
    },

    // General/Other > Calculating conditional probability for continuous rand
    {
      pt_id: "CN_004",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "General Continuous Random Variables",
      concept: "General/Other",
      pt: "Calculating conditional probability for continuous random variable",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "algebra_slip", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "CN_004_m01",
          q: "Given $f(x) = 2x$ for $0 \\leq x \\leq 1$, find $P(X > 0.5 | X > 0.3)$.",
          a: "$P(X > 0.5 | X > 0.3) = \\frac{P(X > 0.5)}{P(X > 0.3)} = \\frac{1 - 0.25}{1 - 0.09} = \\frac{0.75}{0.91} \\approx 0.824$"
        },
      ],
      hard: [
      ],
    },

    // General/Other > Finding median by solving integral equation for continu
    {
      pt_id: "CN_005",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "General Continuous Random Variables",
      concept: "General/Other",
      pt: "Finding median by solving integral equation for continuous RV",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "algebra_slip", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "CN_005_m01",
          q: "$f(x) = 2(1-x)$ for $0 \\leq x \\leq 1$. Find the median $m$.",
          a: "$\\int_0^m 2(1-x) dx = 0.5 \\Rightarrow [2x - x^2]_0^m = 0.5 \\Rightarrow 2m - m^2 = 0.5 \\Rightarrow m^2 - 2m + 0.5 = 0 \\Rightarrow m = 1 - \\frac{\\sqrt{2}}{2} \\approx 0.293$"
        },
      ],
      hard: [
      ],
    },

    // Integration Techniques > Calculating probability for continuous random variable 
    {
      pt_id: "CN_006",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "General Continuous Random Variables",
      concept: "Integration Techniques",
      pt: "Calculating probability for continuous random variable by integration",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "algebra_slip", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "CN_006_m01",
          q: "$f(x) = \\frac{3}{8}x^2$ for $0 \\leq x \\leq 2$. Find $P(X \\leq 1)$.",
          a: "$P(X \\leq 1) = \\int_0^1 \\frac{3}{8}x^2 dx = \\frac{3}{8} \\cdot \\frac{1}{3} = \\frac{1}{8} = 0.125$"
        },
        {
          qid: "CN_006_m02",
          q: "$f(x) = \\frac{1}{2}e^{-x/2}$ for $x \\geq 0$. Find $P(1 \\leq X \\leq 3)$.",
          a: "$P = \\int_1^3 \\frac{1}{2}e^{-x/2} dx = [-e^{-x/2}]_1^3 = -e^{-3/2} + e^{-1/2} = e^{-0.5} - e^{-1.5} \\approx 0.383$"
        },
      ],
      hard: [
      ],
    },

    // Integration Techniques > Determining equation of pdf from graph and integrating 
    {
      pt_id: "CN_007",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "General Continuous Random Variables",
      concept: "Integration Techniques",
      pt: "Determining equation of pdf from graph and integrating to find probability",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "CN_007_m01",
          q: "A pdf forms a triangle with vertices at $(0, 0)$, $(4, 0)$, and $(2, 0.5)$. Find $P(X \\leq 2)$.",
          a: "For $0 \\leq x \\leq 2$: $f(x) = \\frac{x}{4}$ (line from origin to peak). $P(X \\leq 2) = \\int_0^2 \\frac{x}{4} dx = \\frac{1}{4} \\cdot \\frac{x^2}{2}\\Big|_0^2 = \\frac{1}{4} \\cdot 2 = 0.5$"
        },
      ],
      hard: [
      ],
    },

    // Uniform Distribution > Calculating mean and variance of continuous uniform dis
    {
      pt_id: "CN_008",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "General Continuous Random Variables",
      concept: "Uniform Distribution",
      pt: "Calculating mean and variance of continuous uniform distribution",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "algebra_slip", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "CN_008_m01",
          q: "$X \\sim U(0, 12)$. Find $E(X)$ and $\\text{Var}(X)$.",
          a: "$E(X) = \\frac{0+12}{2} = 6$. $\\text{Var}(X) = \\frac{(12-0)^2}{12} = 12$."
        },
      ],
      hard: [
      ],
    },

    // Uniform Distribution > Calculating probability for uniform distribution
    {
      pt_id: "CN_009",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "General Continuous Random Variables",
      concept: "Uniform Distribution",
      pt: "Calculating probability for uniform distribution",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "CN_009_m01",
          q: "$X \\sim U(2, 8)$. Find $P(3 \\leq X \\leq 5)$.",
          a: "$P = \\frac{5-3}{8-2} = \\frac{2}{6} = \\frac{1}{3}$"
        },
      ],
      hard: [
      ],
    },

    // Uniform Distribution > Sketching probability density function of uniform distr
    {
      pt_id: "CN_010",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "General Continuous Random Variables",
      concept: "Uniform Distribution",
      pt: "Sketching probability density function of uniform distribution",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "CN_010_m01",
          q: "Sketch the pdf of $X \\sim U(1, 5)$ and state the height of the pdf.",
          a: "Horizontal line from $x = 1$ to $x = 5$ at height $\\frac{1}{5-1} = \\frac{1}{4} = 0.25$. Zero elsewhere."
        },
      ],
      hard: [
      ],
    },

    // Variance Calculations > Calculating $\text{Var}(aX + b)$ using variance propert
    {
      pt_id: "CN_011",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "General Continuous Random Variables",
      concept: "Variance Calculations",
      pt: "Calculating $\\text{Var}(aX + b)$ using variance properties",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "CN_011_m01",
          q: "Given $\\text{Var}(X) = 9$, find $\\text{Var}(2X + 5)$ and $\\text{SD}(2X + 5)$.",
          a: "$\\text{Var}(2X + 5) = 4(9) = 36$. $\\text{SD}(2X + 5) = 6$."
        },
      ],
      hard: [
      ],
    },

    // Variance Calculations > Calculating standard deviation of continuous random var
    {
      pt_id: "CN_012",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "General Continuous Random Variables",
      concept: "Variance Calculations",
      pt: "Calculating standard deviation of continuous random variable using variance formula",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "CN_012_m01",
          q: "$f(x) = 2x$ for $0 \\leq x \\leq 1$. Given $E(X) = \\frac{2}{3}$, find $\\text{SD}(X)$.",
          a: "$E(X^2) = \\int_0^1 x^2 \\cdot 2x dx = \\frac{1}{2}$. $\\text{Var}(X) = \\frac{1}{2} - \\left(\\frac{2}{3}\\right)^2 = \\frac{1}{2} - \\frac{4}{9} = \\frac{1}{18}$. $\\text{SD}(X) = \\frac{1}{3\\sqrt{2}} \\approx 0.236$"
        },
      ],
      hard: [
      ],
    },

    // Expected Value (Normal) > Finding expected value and variance under linear transf
    {
      pt_id: "CN_013",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "Normal Distributions",
      concept: "Expected Value (Normal)",
      pt: "Finding expected value and variance under linear transformation $Y = aX + b$",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "sign_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "CN_013_m01",
          q: "$X \\sim N(100, 16)$. $Y = 2X - 30$. Find the distribution of $Y$.",
          a: "$E(Y) = 2(100) - 30 = 170$. $\\text{Var}(Y) = 4(16) = 64$. So $Y \\sim N(170, 64)$."
        },
      ],
      hard: [
      ],
    },

    // General/Other (Normal) > Comparing probabilities from two different distribution
    {
      pt_id: "CN_014",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "Normal Distributions",
      concept: "General/Other (Normal)",
      pt: "Comparing probabilities from two different distributions to answer contextual question",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "sign_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "CN_014_m01",
          q: "Machine A: $X \\sim N(500, 10^2)$ g. Machine B: $Y \\sim N(498, 8^2)$ g. Which machine is more likely to produce an item under 480 g?",
          a: "$P(X < 480) = P(Z < -2) = 0.0228$. $P(Y < 480) = P(Z < -2.25) = 0.0122$. Machine A is more likely."
        },
      ],
      hard: [
      ],
    },

    // General/Other (Normal) > Determining $\mu$ and $\sigma$ from two given probabili
    {
      pt_id: "CN_015",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "Normal Distributions",
      concept: "General/Other (Normal)",
      pt: "Determining $\\mu$ and $\\sigma$ from two given probabilities using simultaneous equations",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "CN_015_m01",
          q: "$X \\sim N(\\mu, \\sigma^2)$. Given $P(X < 70) = 0.3$ and $P(X < 90) = 0.8$. Find $\\mu$ and $\\sigma$.",
          a: "$\\frac{70-\\mu}{\\sigma} = -0.524$ and $\\frac{90-\\mu}{\\sigma} = 0.842$. From these: $90 - \\mu = 0.842\\sigma$ and $70 - \\mu = -0.524\\sigma$. Subtracting: $20 = 1.366\\sigma \\Rightarrow \\sigma \\approx 14.64$. $\\mu = 90 - 0.842(14.64) \\approx 77.7$."
        },
      ],
      hard: [
      ],
    },

    // Inverse Normal > Finding standard deviation given target probability and
    {
      pt_id: "CN_016",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "Normal Distributions",
      concept: "Inverse Normal",
      pt: "Finding standard deviation given target probability and mean using inverse normal",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "CN_016_m01",
          q: "$X \\sim N(60, \\sigma^2)$ and $P(X > 72) = 0.1$. Find $\\sigma$.",
          a: "$\\frac{72-60}{\\sigma} = 1.282 \\Rightarrow \\sigma = \\frac{12}{1.282} \\approx 9.36$"
        },
      ],
      hard: [
      ],
    },

    // Inverse Normal > Finding value for specified probability using inverse n
    {
      pt_id: "CN_017",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "Normal Distributions",
      concept: "Inverse Normal",
      pt: "Finding value for specified probability using inverse normal",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "CN_017_m01",
          q: "$X \\sim N(200, 25^2)$. Find $k$ such that $P(X < k) = 0.9$.",
          a: "$z = 1.282$ (from tables). $k = 200 + 1.282(25) = 232.05$"
        },
      ],
      hard: [
      ],
    },

    // Normal Probability > Calculating conditional probability for normal distribu
    {
      pt_id: "CN_018",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "Normal Distributions",
      concept: "Normal Probability",
      pt: "Calculating conditional probability for normal distribution using restricted domain",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "CN_018_m01",
          q: "$X \\sim N(50, 10^2)$. Find $P(X > 60 | X > 45)$.",
          a: "$P(X>60|X>45) = \\frac{P(X>60)}{P(X>45)} = \\frac{P(Z>1)}{P(Z>-0.5)} = \\frac{0.1587}{0.6915} \\approx 0.2295$"
        },
      ],
      hard: [
      ],
    },

    // Normal Probability > Calculating normal probability $P(X > k)$ or $P(X < k)$
    {
      pt_id: "CN_019",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "Normal Distributions",
      concept: "Normal Probability",
      pt: "Calculating normal probability $P(X > k)$ or $P(X < k)$",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "sign_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "CN_019_m01",
          q: "$X \\sim N(50, 8^2)$. Find $P(X > 60)$.",
          a: "$Z = \\frac{60-50}{8} = 1.25$. $P(X > 60) = P(Z > 1.25) = 1 - 0.8944 = 0.1056$"
        },
        {
          qid: "CN_019_m02",
          q: "$X \\sim N(100, 15^2)$. Find $P(X < 80)$.",
          a: "$Z = \\frac{80-100}{15} = -1.33$. $P(X < 80) = P(Z < -1.33) = 0.0918$"
        },
      ],
      hard: [
      ],
    },

    // Normal Probability > Calculating normal probability $P(a < X < b)$
    {
      pt_id: "CN_020",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "Normal Distributions",
      concept: "Normal Probability",
      pt: "Calculating normal probability $P(a < X < b)$",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "sign_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "CN_020_m01",
          q: "$X \\sim N(70, 5^2)$. Find $P(65 < X < 80)$.",
          a: "$P\\left(\\frac{65-70}{5} < Z < \\frac{80-70}{5}\\right) = P(-1 < Z < 2) = 0.9772 - 0.1587 = 0.8186$"
        },
      ],
      hard: [
      ],
    },

    // Normal Probability > Calculating percentage using empirical rule (68-95-99.7
    {
      pt_id: "CN_021",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "Normal Distributions",
      concept: "Normal Probability",
      pt: "Calculating percentage using empirical rule (68-95-99.7) for normal distribution",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "CN_021_m01",
          q: "Heights are normally distributed with mean 170 cm and SD 6 cm. What percentage of people are between 158 cm and 182 cm?",
          a: "$158 = 170 - 2(6)$ and $182 = 170 + 2(6)$, i.e. within 2 standard deviations. By the empirical rule, approximately $95\\%$."
        },
      ],
      hard: [
      ],
    },

    // Bernoulli Distribution > Calculating mean and standard deviation of Bernoulli di
    {
      pt_id: "DR_001",
      topic: "Discrete Random Variables",
      subtopic: "Bernoulli Distributions",
      concept: "Bernoulli Distribution",
      pt: "Calculating mean and standard deviation of Bernoulli distribution",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "DR_001_m01",
          q: "$X \\sim \\text{Bernoulli}(0.3)$. Find $E(X)$ and $\\text{SD}(X)$.",
          a: "$E(X) = p = 0.3$. $\\text{Var}(X) = p(1-p) = 0.21$. $\\text{SD}(X) = \\sqrt{0.21} \\approx 0.458$"
        },
      ],
      hard: [
      ],
    },

    // Bernoulli Distribution > Stating Bernoulli distribution from context
    {
      pt_id: "DR_002",
      topic: "Discrete Random Variables",
      subtopic: "Bernoulli Distributions",
      concept: "Bernoulli Distribution",
      pt: "Stating Bernoulli distribution from context",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "DR_002_m01",
          q: "A coin is biased so that $P(\\text{Head}) = 0.6$. Let $X = 1$ if Head, $X = 0$ if Tail. State the distribution of $X$.",
          a: "$X \\sim \\text{Bernoulli}(0.6)$ (or equivalently $X \\sim \\text{Bin}(1, 0.6)$)"
        },
      ],
      hard: [
      ],
    },

    // Binomial Probability > Calculating binomial probability $P(X = k)$
    {
      pt_id: "DR_003",
      topic: "Discrete Random Variables",
      subtopic: "Binomial Distributions",
      concept: "Binomial Probability",
      pt: "Calculating binomial probability $P(X = k)$",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "DR_003_m01",
          q: "$X \\sim \\text{Bin}(8, 0.3)$. Find $P(X = 2)$.",
          a: "$P(X=2) = \\binom{8}{2}(0.3)^2(0.7)^6 = 28 \\times 0.09 \\times 0.117649 = 0.2965$"
        },
      ],
      hard: [
      ],
    },

    // Binomial Probability > Calculating binomial tail probability
    {
      pt_id: "DR_004",
      topic: "Discrete Random Variables",
      subtopic: "Binomial Distributions",
      concept: "Binomial Probability",
      pt: "Calculating binomial tail probability",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "DR_004_m01",
          q: "$X \\sim \\text{Bin}(5, 0.4)$. Find $P(X \\geq 3)$.",
          a: "$P(X \\geq 3) = P(3) + P(4) + P(5) = \\binom{5}{3}(0.4)^3(0.6)^2 + \\binom{5}{4}(0.4)^4(0.6) + (0.4)^5 = 0.2304 + 0.0768 + 0.01024 = 0.3174$"
        },
      ],
      hard: [
      ],
    },

    // Binomial Probability > Calculating expected value and variance of binomial dis
    {
      pt_id: "DR_005",
      topic: "Discrete Random Variables",
      subtopic: "Binomial Distributions",
      concept: "Binomial Probability",
      pt: "Calculating expected value and variance of binomial distribution",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "DR_005_m01",
          q: "$X \\sim \\text{Bin}(50, 0.2)$. Find $E(X)$ and $\\text{SD}(X)$.",
          a: "$E(X) = np = 10$. $\\text{Var}(X) = np(1-p) = 8$. $\\text{SD}(X) = 2\\sqrt{2} \\approx 2.83$"
        },
      ],
      hard: [
      ],
    },

    // Binomial Probability > Calculating negative binomial probability (trials until
    {
      pt_id: "DR_006",
      topic: "Discrete Random Variables",
      subtopic: "Binomial Distributions",
      concept: "Binomial Probability",
      pt: "Calculating negative binomial probability (trials until rth success)",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "DR_006_m01",
          q: "The probability of scoring a goal in any shot is 0.2. Find the probability that the 3rd goal is scored on the 8th shot.",
          a: "Need 2 goals in first 7 shots, then goal on 8th. $P = \\binom{7}{2}(0.2)^2(0.8)^5 \\times 0.2 = 21 \\times 0.04 \\times 0.32768 \\times 0.2 = 0.05505$"
        },
      ],
      hard: [
      ],
    },

    // Binomial Probability > Finding n and p from mean and variance of binomial, the
    {
      pt_id: "DR_007",
      topic: "Discrete Random Variables",
      subtopic: "Binomial Distributions",
      concept: "Binomial Probability",
      pt: "Finding n and p from mean and variance of binomial, then evaluating a probability",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "DR_007_m01",
          q: "$X \\sim \\text{Bin}(n, p)$ with $E(X) = 6$ and $\\text{Var}(X) = 4.2$. Find $n$ and $p$.",
          a: "$np = 6$ and $np(1-p) = 4.2$, so $1-p = 0.7 \\Rightarrow p = 0.3$. Then $n = 20$."
        },
      ],
      hard: [
      ],
    },

    // Binomial Setup > Evaluating validity of binomial distribution assumption
    {
      pt_id: "DR_008",
      topic: "Discrete Random Variables",
      subtopic: "Binomial Distributions",
      concept: "Binomial Setup",
      pt: "Evaluating validity of binomial distribution assumptions in context",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "DR_008_m01",
          q: "A survey asks 50 people from the same workplace if they support a policy. Can $X$ (number who support) be modelled by a binomial distribution? Explain.",
          a: "Potentially not valid because responses from colleagues in the same workplace may not be independent — social influence could affect answers. Also, the probability of support may not be constant across individuals."
        },
      ],
      hard: [
      ],
    },

    // Binomial Setup > Stating assumptions required for binomial distribution 
    {
      pt_id: "DR_009",
      topic: "Discrete Random Variables",
      subtopic: "Binomial Distributions",
      concept: "Binomial Setup",
      pt: "Stating assumptions required for binomial distribution validity",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "DR_009_m01",
          q: "State the conditions required for a binomial distribution to be an appropriate model.",
          a: "(1) Fixed number of trials $n$. (2) Each trial has exactly two outcomes (success/failure). (3) Probability of success $p$ is constant for each trial. (4) Trials are independent."
        },
      ],
      hard: [
      ],
    },

    // Binomial Setup > Stating binomial distribution $X \sim \text{Bin}(n,p)$ 
    {
      pt_id: "DR_010",
      topic: "Discrete Random Variables",
      subtopic: "Binomial Distributions",
      concept: "Binomial Setup",
      pt: "Stating binomial distribution $X \\sim \\text{Bin}(n,p)$ from context",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "DR_010_m01",
          q: "A fair six-sided die is rolled 12 times. Let $X$ be the number of sixes rolled. State the distribution of $X$.",
          a: "$X \\sim \\text{Bin}\\left(12, \\frac{1}{6}\\right)$"
        },
        {
          qid: "DR_010_m02",
          q: "In a class, 70% of students pass. A random sample of 20 students is selected. Let $X$ be the number who pass. State the distribution of $X$.",
          a: "$X \\sim \\text{Bin}(20, 0.7)$"
        },
      ],
      hard: [
      ],
    },

    // DRV Distribution Tables > Constructing probability distribution from frequency da
    {
      pt_id: "DR_011",
      topic: "Discrete Random Variables",
      subtopic: "General Discrete Random Variables",
      concept: "DRV Distribution Tables",
      pt: "Constructing probability distribution from frequency data",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "algebra_slip", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "DR_011_m01",
          q: "A survey of 50 households recorded the number of pets:\n| Pets | 0 | 1 | 2 | 3 |\n|------|---|---|---|---|\n| Freq | 15| 20| 10| 5 |\nConstruct the probability distribution for $X$, the number of pets.",
          a: "$P(X=0) = 0.3$, $P(X=1) = 0.4$, $P(X=2) = 0.2$, $P(X=3) = 0.1$"
        },
      ],
      hard: [
      ],
    },

    // DRV Distribution Tables > Constructing probability distribution table for profit/
    {
      pt_id: "DR_012",
      topic: "Discrete Random Variables",
      subtopic: "General Discrete Random Variables",
      concept: "DRV Distribution Tables",
      pt: "Constructing probability distribution table for profit/loss random variable",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "algebra_slip", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "DR_012_m01",
          q: "A game costs $\\$5$ to play. You roll a die: if you get 6, you win $\\$20$; otherwise you win nothing. Construct the probability distribution for the profit $P$.",
          a: "$P = -5$ (lose) with probability $\\frac{5}{6}$; $P = 15$ (win $20 - 5$) with probability $\\frac{1}{6}$."
        },
      ],
      hard: [
      ],
    },

    // DRV Distribution Tables > Constructing probability distribution table for related
    {
      pt_id: "DR_013",
      topic: "Discrete Random Variables",
      subtopic: "General Discrete Random Variables",
      concept: "DRV Distribution Tables",
      pt: "Constructing probability distribution table for related random variable",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "algebra_slip", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "DR_013_m01",
          q: "$X$ has the distribution:\n| $x$ | 1 | 2 | 3 |\n|-----|---|---|---|\n| $P$ | 0.2 | 0.5 | 0.3 |\nFind the probability distribution of $Y = 2X + 1$.",
          a: "$Y = 3$ with $P = 0.2$, $Y = 5$ with $P = 0.5$, $Y = 7$ with $P = 0.3$."
        },
      ],
      hard: [
      ],
    },

    // DRV Distribution Tables > Probability distribution table problem
    {
      pt_id: "DR_014",
      topic: "Discrete Random Variables",
      subtopic: "General Discrete Random Variables",
      concept: "DRV Distribution Tables",
      pt: "Probability distribution table problem",
      testing: "Testing: Use ΣP = 1 to find unknown",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "algebra_slip", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "DR_014_m01",
          q: "Complete the probability distribution table:\n| $x$ | 1 | 2 | 3 | 4 |\n|-----|---|---|---|---|\n| $P(X=x)$ | 0.1 | 0.3 | $k$ | 0.2 |",
          a: "$0.1 + 0.3 + k + 0.2 = 1 \\Rightarrow k = 0.4$"
        },
      ],
      hard: [
      ],
    },

    // DRV Expected Value > Calculating $E(X)$ for discrete random variable
    {
      pt_id: "DR_015",
      topic: "Discrete Random Variables",
      subtopic: "General Discrete Random Variables",
      concept: "DRV Expected Value",
      pt: "Calculating $E(X)$ for discrete random variable",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "algebra_slip", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "DR_015_m01",
          q: "A random variable $X$ has $P(X = k) = \\frac{k}{10}$ for $k = 1, 2, 3, 4$. Find $E(X)$.",
          a: "$E(X) = 1 \\cdot \\frac{1}{10} + 2 \\cdot \\frac{2}{10} + 3 \\cdot \\frac{3}{10} + 4 \\cdot \\frac{4}{10} = \\frac{1+4+9+16}{10} = 3$"
        },
      ],
      hard: [
      ],
    },

    // DRV Expected Value > Calculating expected value of discrete random variable
    {
      pt_id: "DR_016",
      topic: "Discrete Random Variables",
      subtopic: "General Discrete Random Variables",
      concept: "DRV Expected Value",
      pt: "Calculating expected value of discrete random variable",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "algebra_slip", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "DR_016_m01",
          q: "Find $E(X)$ from the distribution:\n| $x$ | 0 | 1 | 2 | 3 |\n|-----|---|---|---|---|\n| $P$ | 0.1 | 0.4 | 0.3 | 0.2 |",
          a: "$E(X) = 0(0.1) + 1(0.4) + 2(0.3) + 3(0.2) = 0 + 0.4 + 0.6 + 0.6 = 1.6$"
        },
      ],
      hard: [
      ],
    },

    // DRV Probability > Calculating conditional probability P(X=a | X≤b) for di
    {
      pt_id: "DR_017",
      topic: "Discrete Random Variables",
      subtopic: "General Discrete Random Variables",
      concept: "DRV Probability",
      pt: "Calculating conditional probability P(X=a | X≤b) for discrete RV",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "algebra_slip", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "DR_017_m01",
          q: "Given $P(X=1)=0.2$, $P(X=2)=0.3$, $P(X=3)=0.5$. Find $P(X=2 | X \\leq 2)$.",
          a: "$P(X=2|X\\leq 2) = \\frac{P(X=2)}{P(X\\leq 2)} = \\frac{0.3}{0.2+0.3} = \\frac{0.3}{0.5} = 0.6$"
        },
      ],
      hard: [
      ],
    },

    // DRV Probability > Calculating expected profit/loss from discrete random v
    {
      pt_id: "DR_018",
      topic: "Discrete Random Variables",
      subtopic: "General Discrete Random Variables",
      concept: "DRV Probability",
      pt: "Calculating expected profit/loss from discrete random variable with cost structure",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "DR_018_m01",
          q: "A raffle has 100 tickets at $\\$2$ each. One prize of $\\$50$ is awarded. Find the expected profit for a person buying one ticket.",
          a: "$E(\\text{profit}) = \\frac{1}{100}(50-2) + \\frac{99}{100}(-2) = 0.48 - 1.98 = -\\$1.50$"
        },
      ],
      hard: [
      ],
    },

    // DRV Probability > Calculating probability using probability distribution
    {
      pt_id: "DR_019",
      topic: "Discrete Random Variables",
      subtopic: "General Discrete Random Variables",
      concept: "DRV Probability",
      pt: "Calculating probability using probability distribution",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "DR_019_m01",
          q: "Using the distribution above (0.1, 0.4, 0.3, 0.2), find $P(X \\geq 2)$.",
          a: "$P(X \\geq 2) = 0.3 + 0.2 = 0.5$"
        },
        {
          qid: "DR_019_m02",
          q: "Find $P(1 \\leq X < 3)$.",
          a: "$P(1 \\leq X < 3) = P(X=1) + P(X=2) = 0.4 + 0.3 = 0.7$"
        },
      ],
      hard: [
      ],
    },

    // DRV Variance/SD > Calculating Var(X) for discrete random variable
    {
      pt_id: "DR_020",
      topic: "Discrete Random Variables",
      subtopic: "General Discrete Random Variables",
      concept: "DRV Variance/SD",
      pt: "Calculating Var(X) for discrete random variable",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "algebra_slip", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "DR_020_m01",
          q: "Given $E(X) = 2$ and:\n| $x$ | 0 | 1 | 2 | 3 | 4 |\n|-----|---|---|---|---|---|\n| $P$ | 0.1 | 0.2 | 0.3 | 0.3 | 0.1 |\nFind $\\text{Var}(X)$.",
          a: "$E(X^2) = 0 + 0.2 + 1.2 + 2.7 + 1.6 = 5.7$. $\\text{Var}(X) = 5.7 - 2^2 = 1.7$"
        },
      ],
      hard: [
      ],
    },

    // Expected Value (Interpretation) > Determining parameter value to achieve specified expect
    {
      pt_id: "DR_021",
      topic: "Discrete Random Variables",
      subtopic: "General Discrete Random Variables",
      concept: "Expected Value (Interpretation)",
      pt: "Determining parameter value to achieve specified expected value",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "DR_021_m01",
          q: "A game pays $\\$k$ for a six on a die and costs $\\$3$ to play. Find $k$ so the game is fair.",
          a: "$E(\\text{profit}) = \\frac{1}{6}(k-3) + \\frac{5}{6}(-3) = 0 \\Rightarrow \\frac{k-3}{6} = \\frac{15}{6} \\Rightarrow k = 18$"
        },
      ],
      hard: [
      ],
    },

    // Expected Value (Interpretation) > Interpreting expected value to determine long-run profi
    {
      pt_id: "DR_022",
      topic: "Discrete Random Variables",
      subtopic: "General Discrete Random Variables",
      concept: "Expected Value (Interpretation)",
      pt: "Interpreting expected value to determine long-run profitability",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "DR_022_m01",
          q: "A game has $E(\\text{profit}) = -\\$0.50$. Interpret this result.",
          a: "On average, a player will lose $\\$0.50$ per game in the long run. The game is not fair — it favours the operator."
        },
      ],
      hard: [
      ],
    },

    // Variance Calculations > Finding mean and variance under linear transformation $
    {
      pt_id: "DR_023",
      topic: "Discrete Random Variables",
      subtopic: "General Discrete Random Variables",
      concept: "Variance Calculations",
      pt: "Finding mean and variance under linear transformation $Y = aX + b$",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "DR_023_m01",
          q: "Given $E(X) = 5$ and $\\text{Var}(X) = 4$, find $E(3X - 2)$ and $\\text{Var}(3X - 2)$.",
          a: "$E(3X-2) = 3(5) - 2 = 13$. $\\text{Var}(3X-2) = 9(4) = 36$."
        },
        {
          qid: "DR_023_m02",
          q: "Temperatures in °C have mean 20 and SD 3. Convert to °F using $F = 1.8C + 32$. Find the mean and SD in °F.",
          a: "$E(F) = 1.8(20) + 32 = 68$°F. $\\text{SD}(F) = 1.8(3) = 5.4$°F."
        },
      ],
      hard: [
      ],
    },

    // CI Calculation > Calculating CI for proportion from sample data
    {
      pt_id: "IE_001",
      topic: "Interval Estimates for Proportions",
      subtopic: "Confidence Intervals for Proportions",
      concept: "CI Calculation",
      pt: "Calculating CI for proportion from sample data",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IE_001_m01",
          q: "120 out of 400 sampled voters support a policy. Calculate a 95% confidence interval for the true proportion.",
          a: "$\\hat{p} = 0.3$. $z = 1.96$. CI: $0.3 \\pm 1.96\\sqrt{\\frac{0.3 \\times 0.7}{400}} = 0.3 \\pm 1.96(0.02291) = 0.3 \\pm 0.0449 = (0.2551, 0.3449)$"
        },
      ],
      hard: [
      ],
    },

    // CI Calculation > Calculating margin of error from confidence interval
    {
      pt_id: "IE_002",
      topic: "Interval Estimates for Proportions",
      subtopic: "Confidence Intervals for Proportions",
      concept: "CI Calculation",
      pt: "Calculating margin of error from confidence interval",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IE_002_m01",
          q: "A confidence interval is $(0.35, 0.47)$. Find the margin of error and point estimate.",
          a: "ME $= \\frac{0.47 - 0.35}{2} = 0.06$. $\\hat{p} = 0.35 + 0.06 = 0.41$."
        },
      ],
      hard: [
      ],
    },

    // CI Calculation > Determining sample count from confidence interval cente
    {
      pt_id: "IE_003",
      topic: "Interval Estimates for Proportions",
      subtopic: "Confidence Intervals for Proportions",
      concept: "CI Calculation",
      pt: "Determining sample count from confidence interval center",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IE_003_m01",
          q: "A 95% CI for a proportion is $(0.42, 0.58)$, based on a sample of 200. How many successes were observed?",
          a: "$\\hat{p} = \\frac{0.42 + 0.58}{2} = 0.5$. Successes $= 200 \\times 0.5 = 100$."
        },
      ],
      hard: [
      ],
    },

    // CI Calculation > Finding sample proportion and size from confidence inte
    {
      pt_id: "IE_004",
      topic: "Interval Estimates for Proportions",
      subtopic: "Confidence Intervals for Proportions",
      concept: "CI Calculation",
      pt: "Finding sample proportion and size from confidence interval bounds",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IE_004_m01",
          q: "A 95% CI is $(0.22, 0.38)$. Find $\\hat{p}$ and, given $z = 1.96$, find $n$.",
          a: "$\\hat{p} = 0.30$, ME $= 0.08$. $0.08 = 1.96\\sqrt{\\frac{0.3 \\times 0.7}{n}} \\Rightarrow n = \\frac{1.96^2 \\times 0.21}{0.0064} \\approx 126$"
        },
      ],
      hard: [
      ],
    },

    // CI Calculation > Identifying and explaining factors that affect confiden
    {
      pt_id: "IE_005",
      topic: "Interval Estimates for Proportions",
      subtopic: "Confidence Intervals for Proportions",
      concept: "CI Calculation",
      pt: "Identifying and explaining factors that affect confidence interval width",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IE_005_m01",
          q: "Explain how each of the following affects the width of a confidence interval: (a) increasing sample size, (b) increasing confidence level.",
          a: "(a) Increasing $n$ decreases width (narrower interval, more precise). (b) Increasing confidence level increases width (wider interval, less precise but more confident)."
        },
      ],
      hard: [
      ],
    },

    // CI Interpretation > Making inference from CI about claimed/target value
    {
      pt_id: "IE_006",
      topic: "Interval Estimates for Proportions",
      subtopic: "Confidence Intervals for Proportions",
      concept: "CI Interpretation",
      pt: "Making inference from CI about claimed/target value",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IE_006_m01",
          q: "A manufacturer claims 90% of products meet quality standards. A 95% CI from a sample is $(0.83, 0.91)$. Does this support the manufacturer's claim?",
          a: "Since 0.90 lies within the interval $(0.83, 0.91)$, the claim of 90% is plausible at the 95% confidence level. We cannot reject the manufacturer's claim."
        },
        {
          qid: "IE_006_m02",
          q: "A politician claims 60% support. A 95% CI is $(0.52, 0.58)$. Comment.",
          a: "Since 0.60 is not contained in $(0.52, 0.58)$, the data does not support the politician's claim at the 95% confidence level. The true proportion of support appears to be less than 60%."
        },
      ],
      hard: [
      ],
    },

    // Confidence Intervals (Construction) > Constructing confidence interval for population proport
    {
      pt_id: "IE_007",
      topic: "Interval Estimates for Proportions",
      subtopic: "Confidence Intervals for Proportions",
      concept: "Confidence Intervals (Construction)",
      pt: "Constructing confidence interval for population proportion",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IE_007_m01",
          q: "In a sample of 600 adults, 420 use social media daily. Construct a 99% confidence interval for the true proportion.",
          a: "$\\hat{p} = 0.7$, $z = 2.576$. CI: $0.7 \\pm 2.576\\sqrt{\\frac{0.7 \\times 0.3}{600}} = 0.7 \\pm 2.576(0.01871) = 0.7 \\pm 0.0482 = (0.6518, 0.7482)$"
        },
      ],
      hard: [
      ],
    },

    // Margin of Error > Calculating margin of error for specified confidence le
    {
      pt_id: "IE_008",
      topic: "Interval Estimates for Proportions",
      subtopic: "Confidence Intervals for Proportions",
      concept: "Margin of Error",
      pt: "Calculating margin of error for specified confidence level",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IE_008_m01",
          q: "$\\hat{p} = 0.45$, $n = 300$. Find the margin of error for a 90% confidence interval.",
          a: "$z = 1.645$. $ME = 1.645\\sqrt{\\frac{0.45 \\times 0.55}{300}} = 1.645 \\times 0.02872 = 0.0472$"
        },
      ],
      hard: [
      ],
    },

    // Margin of Error > Calculating minimum sample size for specified margin of
    {
      pt_id: "IE_009",
      topic: "Interval Estimates for Proportions",
      subtopic: "Confidence Intervals for Proportions",
      concept: "Margin of Error",
      pt: "Calculating minimum sample size for specified margin of error (worst-case $\\hat{p}=0.5$)",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IE_009_m01",
          q: "Find the minimum sample size for a 95% CI with margin of error no more than 0.03.",
          a: "$n \\geq \\left(\\frac{z}{E}\\right)^2 \\times 0.25 = \\left(\\frac{1.96}{0.03}\\right)^2 \\times 0.25 = 4268.44 \\times 0.25 = 1067.1$. So $n \\geq 1068$."
        },
      ],
      hard: [
      ],
    },

    // Margin of Error > Using calculus to show maximum margin of error occurs a
    {
      pt_id: "IE_010",
      topic: "Interval Estimates for Proportions",
      subtopic: "Confidence Intervals for Proportions",
      concept: "Margin of Error",
      pt: "Using calculus to show maximum margin of error occurs at $\\hat{p} = 0.5$",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IE_010_m01",
          q: "Show that $\\hat{p}(1 - \\hat{p})$ is maximised when $\\hat{p} = 0.5$.",
          a: "Let $g(\\hat{p}) = \\hat{p}(1-\\hat{p}) = \\hat{p} - \\hat{p}^2$. $g'(\\hat{p}) = 1 - 2\\hat{p} = 0 \\Rightarrow \\hat{p} = 0.5$. $g''(\\hat{p}) = -2 < 0$, so maximum. $g(0.5) = 0.25$."
        },
      ],
      hard: [
      ],
    },

    // Sampling Methods > Identifying sources of bias in sampling procedure with 
    {
      pt_id: "IE_011",
      topic: "Interval Estimates for Proportions",
      subtopic: "Random Sampling",
      concept: "Sampling Methods",
      pt: "Identifying sources of bias in sampling procedure with explanation",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IE_011_m01",
          q: "A school surveys student satisfaction by asking students in the library at lunchtime. Identify a source of bias.",
          a: "Selection bias — students who use the library at lunchtime may not be representative of all students. Students who play sport, socialise elsewhere, or leave school may have different satisfaction levels."
        },
        {
          qid: "IE_011_m02",
          q: "An online retailer emails all customers asking for product reviews. Identify a source of bias.",
          a: "Non-response bias — customers with strong opinions (either very satisfied or very dissatisfied) are more likely to respond, while neutral customers may not bother."
        },
      ],
      hard: [
      ],
    },

    // Sample Proportions > Calculating mean and standard deviation of sample propo
    {
      pt_id: "IE_012",
      topic: "Interval Estimates for Proportions",
      subtopic: "Sample Proportions",
      concept: "Sample Proportions",
      pt: "Calculating mean and standard deviation of sample proportion distribution",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IE_012_m01",
          q: "If $p = 0.6$ and $n = 200$, find the mean and standard deviation of $\\hat{P}$.",
          a: "$\\mu_{\\hat{P}} = 0.6$. $\\sigma_{\\hat{P}} = \\sqrt{\\frac{0.6 \\times 0.4}{200}} = \\sqrt{0.0012} \\approx 0.0346$"
        },
      ],
      hard: [
      ],
    },

    // Sample Proportions > Calculating point estimate for population proportion
    {
      pt_id: "IE_013",
      topic: "Interval Estimates for Proportions",
      subtopic: "Sample Proportions",
      concept: "Sample Proportions",
      pt: "Calculating point estimate for population proportion",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IE_013_m01",
          q: "In a sample of 500 voters, 215 support a candidate. What is the point estimate for the population proportion?",
          a: "$\\hat{p} = \\frac{215}{500} = 0.43$"
        },
      ],
      hard: [
      ],
    },

    // Sample Proportions > Calculating sample proportion from frequency data
    {
      pt_id: "IE_014",
      topic: "Interval Estimates for Proportions",
      subtopic: "Sample Proportions",
      concept: "Sample Proportions",
      pt: "Calculating sample proportion from frequency data",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IE_014_m01",
          q: "In a survey of 250 people, 80 said they prefer brand A. Calculate the sample proportion $\\hat{p}$.",
          a: "$\\hat{p} = \\frac{80}{250} = 0.32$"
        },
      ],
      hard: [
      ],
    },

    // Sample Proportions > Stating approximate distribution of sample proportion
    {
      pt_id: "IE_015",
      topic: "Interval Estimates for Proportions",
      subtopic: "Sample Proportions",
      concept: "Sample Proportions",
      pt: "Stating approximate distribution of sample proportion",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IE_015_m01",
          q: "A population has $p = 0.4$ and a sample of $n = 100$ is taken. State the approximate distribution of $\\hat{P}$.",
          a: "$\\hat{P} \\sim N\\left(0.4, \\frac{0.4 \\times 0.6}{100}\\right)$ i.e. $\\hat{P} \\approx N(0.4, 0.0024)$"
        },
      ],
      hard: [
      ],
    },

    // Sample Proportions > Stating condition for normal approximation to sample pr
    {
      pt_id: "IE_016",
      topic: "Interval Estimates for Proportions",
      subtopic: "Sample Proportions",
      concept: "Sample Proportions",
      pt: "Stating condition for normal approximation to sample proportion",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "sign_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IE_016_m01",
          q: "State the conditions for the normal approximation to the sampling distribution of $\\hat{P}$ to be valid.",
          a: "$np \\geq 10$ and $n(1-p) \\geq 10$ (or equivalently $n\\hat{p} \\geq 10$ and $n(1-\\hat{p}) \\geq 10$)."
        },
      ],
      hard: [
      ],
    },

    // Sample Proportions > Using approximate normality of sample proportion distri
    {
      pt_id: "IE_017",
      topic: "Interval Estimates for Proportions",
      subtopic: "Sample Proportions",
      concept: "Sample Proportions",
      pt: "Using approximate normality of sample proportion distribution to calculate probability",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IE_017_m01",
          q: "A poll has $p = 0.55$ and $n = 400$. Find $P(\\hat{P} > 0.6)$.",
          a: "$\\sigma = \\sqrt{\\frac{0.55 \\times 0.45}{400}} = 0.02487$. $Z = \\frac{0.6-0.55}{0.02487} = 2.01$. $P(\\hat{P} > 0.6) = P(Z > 2.01) \\approx 0.0222$"
        },
      ],
      hard: [
      ],
    },
  ]
};
