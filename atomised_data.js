// ======================================================================
// ATOMISED PRACTICE — COMBINED DATA BUNDLE
// Single-file version (for backward compatibility)
// Prefer split files for production use.
// ======================================================================

var ATOMISED_DATA = {
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

    // Differentiating Basics > Finding the coordinates of a point on the curve where t
    {
      pt_id: "FD_001",
      topic: "Further Differentiation and Applications",
      subtopic: "Basic Differentiation Skills",
      concept: "Differentiating Basics",
      pt: "Finding the coordinates of a point on the curve where the gradient is a given value",
      testing: "Testing: Set derivative equal to value and solve",
      reason_bank: ["wrong_rule", "substitution_error", "sign_error", "algebra_slip", "interpretation_mixup", "not_sure"],
      easy: [
        {
          qid: "FD_001_e01",
          q: "Find the point on $y = x^2 + 6x - 1$ where the gradient is $4$.",
          a: "$y' = 2 x + 6 = 4 \\Rightarrow x = -1$. $y = -6$. Point: $(-1, -6)$"
        },
        {
          qid: "FD_001_e02",
          q: "Find the point on $y = 3x^2 - 12x + 5$ where the gradient is $6$.",
          a: "$y' = 6 x - 12 = 6 \\Rightarrow x = 3$. $y = -4$. Point: $(3, -4)$"
        },
        {
          qid: "FD_001_e03",
          q: "Find the coordinates where the gradient of $y = -2x^2 + 8x + 1$ is zero.",
          a: "$y' = 8 - 4 x = 0 \\Rightarrow x = 2$. $y = 9$. Point: $(2, 9)$"
        },
      ],
      medium: [
        {
          qid: "FD_001_m01",
          q: "Find the point(s) on $y = x^3 - 3x^2 + 1$ where the gradient equals $9$.",
          a: "$y' = 3 x^{2} - 6 x = 9 \\Rightarrow 3(x^2 - 2x - 3) = 0 \\Rightarrow 3(x-3)(x+1) = 0$. Points: $(-1, -3)$, $(3, 1)$"
        },
        {
          qid: "FD_001_m02",
          q: "Find the point on $y = e^{2x} - 5x$ where the gradient equals $3$.",
          a: "$y' = 2 e^{2 x} - 5 = 3 \\Rightarrow e^{2x} = 4 \\Rightarrow x = \\log{\\left(2 \\right)}$. $y = 4 - \\log{\\left(32 \\right)}$. Point: $(\\log{\\left(2 \\right)}, 4 - \\log{\\left(32 \\right)})$"
        },
        {
          qid: "FD_001_m03",
          q: "Find the point on $y = -x^2 + 8x - 3$ where the gradient is $2$.",
          a: "$y' = 8 - 2 x = 2 \\Rightarrow x = 3$. $y = 12$. Point: $(3, 12)$"
        },
        {
          qid: "FD_001_m04",
          q: "Find the point(s) on $y = \\frac{x^3}{3} - 2x^2 + 3x + 1$ where the tangent is parallel to $y = -x$.",
          a: "Gradient $= -1$. $y' = x^{2} - 4 x + 3 = -1 \\Rightarrow (x-2)^2 = 0$. Point: $(2, \\frac{5}{3})$"
        },
        {
          qid: "FD_001_m05",
          q: "Find the point on $y = 4\\sqrt{x} + x$ (for $x > 0$) where the gradient is $3$.",
          a: "$y' = 1 + \\frac{2}{\\sqrt{x}} = 3 \\Rightarrow \\frac{2}{\\sqrt{x}} = 2 \\Rightarrow x = 1$. $y = 5$. Point: $(1, 5)$"
        },
      ],
      hard: [
        {
          qid: "FD_001_h01",
          q: "Find all points on $y = 2x^3 - 9x^2 + 12x - 4$ where the gradient is $12$.",
          a: "$y' = 6 x^{2} - 18 x + 12 = 12 \\Rightarrow 6x(x-3) = 0$. Points: $(0, -4)$, $(3, 5)$"
        },
        {
          qid: "FD_001_h02",
          q: "The gradient of $g(x) = x^3 - 2x$ at $x = 1$ is $m$. Find the point on $y = 2x^2 - 3x + 1$ where the gradient equals $m$.",
          a: "$g'(1) = 1$. $y' = 4 x - 3 = 1 \\Rightarrow x = 1$. Point: $(1, 0)$"
        },
        {
          qid: "FD_001_h03",
          q: "Find the coordinates on $y = x^3 + x^2 - 5x + 3$ where the tangent is parallel to $y = 3x + 1$.",
          a: "Gradient $= 3$. $y' = 3 x^{2} + 2 x - 5 = 3 \\Rightarrow 3x^2 + 2x - 8 = 0$. Points: $\\left(-2, 9\\right)$, $\\left(\\frac{4}{3}, \\frac{13}{27}\\right)$"
        },
        {
          qid: "FD_001_h04",
          q: "Find all points on $y = \\frac{x^4}{4} - 2x^2 + 4$ where the gradient is $-4$.",
          a: "$y' = x^{3} - 4 x = -4 \\Rightarrow x^3 - 4x + 4 = 0$. Points: $(- \\frac{\\sqrt[3]{6 \\sqrt{33} + 54}}{3} - \\frac{4}{\\sqrt[3]{6 \\sqrt{33} + 54}}, - \\frac{\\sqrt[3]{6} \\left(12 + 6^{\\frac{2}{3}} \\left(\\sqrt{33} + 9\\right)^{\\frac{2}{3}}\\right)^{2}}{27 \\left(\\sqrt{33} + 9\\right)^{\\frac{2}{3}}} + 4 + \\frac{\\left(12 + 6^{\\frac{2}{3}} \\left(\\sqrt{33} + 9\\right)^{\\frac{2}{3}}\\right)^{4} \\left(6 \\sqrt{33} + 54\\right)^{\\frac{2}{3}}}{11664 \\left(\\sqrt{33} + 9\\right)^{2}})$"
        },
        {
          qid: "FD_001_h05",
          q: "Find all points on $y = \\frac{2x^3}{3} - x^2 - 4x + 3$ where the gradient is $\\frac{8}{3}$.",
          a: "$y' = 2 x^{2} - 2 x - 4 = \\frac{8}{3}$. Points: $(\\frac{1}{2} - \\frac{\\sqrt{129}}{6}, \\frac{5}{6} + \\frac{19 \\sqrt{129}}{54})$, $(\\frac{1}{2} + \\frac{\\sqrt{129}}{6}, \\frac{5}{6} - \\frac{19 \\sqrt{129}}{54})$"
        },
      ],
    },

    // Differentiating Basics > Finding the equation of a tangent at a given x or y val
    {
      pt_id: "FD_002",
      topic: "Further Differentiation and Applications",
      subtopic: "Basic Differentiation Skills",
      concept: "Differentiating Basics",
      pt: "Finding the equation of a tangent at a given x or y value",
      testing: "Testing: Find gradient via derivative, use point-gradient form",
      reason_bank: ["wrong_rule", "substitution_error", "sign_error", "algebra_slip", "interpretation_mixup", "not_sure"],
      easy: [
        {
          qid: "FD_002_e01",
          q: "Find the equation of the tangent to $y = x^2 - 3x + 1$ at $x = 2$.",
          a: "$y' = 2 x - 3$. At $x=2$: gradient $= 1$, $y = -1$. Tangent: $y = x - 3$"
        },
        {
          qid: "FD_002_e02",
          q: "Find the equation of the tangent to $y = x^3 - 2x$ at $x = 1$.",
          a: "$y' = 3 x^{2} - 2$. At $x=1$: gradient $= 1$, $y = -1$. Tangent: $y = x - 2$"
        },
        {
          qid: "FD_002_e03",
          q: "Find the equation of the tangent to $y = 3x^2 + 2x$ at the origin.",
          a: "$y' = 6 x + 2$. At $x=0$: gradient $= 2$. Tangent: $y = 2 x$"
        },
      ],
      medium: [
        {
          qid: "FD_002_m01",
          q: "Find the equation of the tangent to $y = e^x - x$ at $x = 0$.",
          a: "$y' = e^{x} - 1$. At $x=0$: gradient $= 0$, $y = 1$. Tangent: $y = 1$ (horizontal)"
        },
        {
          qid: "FD_002_m02",
          q: "Find the equation of the tangent to $y = 2x^3 + x^2 - 4x + 3$ at $x = -1$.",
          a: "$y' = 6 x^{2} + 2 x - 4$. At $x=-1$: gradient $= 0$, $y = 6$. Tangent: $y = 6$"
        },
        {
          qid: "FD_002_m03",
          q: "Find the equation of the tangent to $y = 3\\sqrt{x} - x$ at $x = 9$.",
          a: "$y' = -1 + \\frac{3}{2 \\sqrt{x}}$. At $x=9$: gradient $= - \\frac{1}{2}$, $y = 0$. Tangent: $y = \\frac{9}{2} - \\frac{x}{2}$"
        },
        {
          qid: "FD_002_m04",
          q: "Find the equation of the tangent to $y = \\ln(2x)$ at $x = \\frac{e}{2}$.",
          a: "$y' = \\frac{1}{x}$. At $x = \\frac{e}{2}$: gradient $= \\frac{2}{e}$, $y = 1$. Tangent: $y = \\frac{2x}{e}$"
        },
        {
          qid: "FD_002_m05",
          q: "Find the equation of the tangent to $y = x^3 - 4x^2 + 5$ at the $y$-intercept.",
          a: "$y$-intercept: $(0, 5)$. $y' = 3 x^{2} - 8 x$. Gradient $= 0$. Tangent: $y = 5$"
        },
      ],
      hard: [
        {
          qid: "FD_002_h01",
          q: "Find the equation(s) of the tangent to $y = x^2 - 2x + 3$ at the point(s) where $y = 6$.",
          a: "$x^2 - 2x - 3 = 0 \\Rightarrow (x-3)(x+1) = 0$. At $x = -1$: gradient $= -4$, tangent: $y = 2 - 4 x$. At $x = 3$: gradient $= 4$, tangent: $y = 4 x - 6$"
        },
        {
          qid: "FD_002_h02",
          q: "Find the equation(s) of the tangent to $y = x^2$ that pass through the point $(0, -1)$.",
          a: "Tangent at $(a, a^2)$: $y = 2ax - a^2$. Through $(0, -1)$: $-1 = -a^2 \\Rightarrow a = \\pm 1$. Tangents: $y = 2x - 1$ and $y = -2x - 1$"
        },
        {
          qid: "FD_002_h03",
          q: "Find the equation of the tangent to $y = 2e^{x/2} - 1$ at $x = 0$.",
          a: "$y' = e^{\\frac{x}{2}}$. At $x=0$: gradient $= 1$, $y = 1$. Tangent: $y = x + 1$"
        },
        {
          qid: "FD_002_h04",
          q: "Find the equation(s) of the tangent to $y = x^3 - x$ that is perpendicular to $y = -\\frac{x}{2} + 3$.",
          a: "Perpendicular gradient $= 2$. $y' = 3 x^{2} - 1 = 2 \\Rightarrow x = \\pm 1$. At $x = -1$: tangent $y = 2 x + 2$. At $x = 1$: tangent $y = 2 x - 2$"
        },
        {
          qid: "FD_002_h05",
          q: "Find the equation of the **normal** to $y = x^2 + 4x$ at $x = 1$.",
          a: "$y' = 2 x + 4$. At $x=1$: gradient $= 6$, $y = 5$. Normal gradient $= -\\frac{1}{6}$. Normal: $y = \\frac{31}{6} - \\frac{x}{6}$"
        },
      ],
    },

    // Differentiating Basics > Finding the value of a derivative at a given x or y val
    {
      pt_id: "FD_003",
      topic: "Further Differentiation and Applications",
      subtopic: "Basic Differentiation Skills",
      concept: "Differentiating Basics",
      pt: "Finding the value of a derivative at a given x or y value",
      testing: "Testing: Substitute into derivative after differentiating",
      reason_bank: ["wrong_rule", "substitution_error", "sign_error", "algebra_slip", "interpretation_mixup", "not_sure"],
      easy: [
        {
          qid: "FD_003_e01",
          q: "Given $f(x) = 3x^4 - 2x^2 + 5x$, find $f'(2)$.",
          a: "$f'(x) = 12 x^{3} - 4 x + 5$, so $f'(2) = 93$"
        },
        {
          qid: "FD_003_e02",
          q: "Given $f(x) = 2x^3 + x^2 - 7x$, find $f'(-1)$.",
          a: "$f'(x) = 6 x^{2} + 2 x - 7$, so $f'(-1) = -3$"
        },
        {
          qid: "FD_003_e03",
          q: "Given $f(x) = x^5 - 4x^3$, find $f'(1)$.",
          a: "$f'(x) = 5 x^{4} - 12 x^{2}$, so $f'(1) = -7$"
        },
      ],
      medium: [
        {
          qid: "FD_003_m01",
          q: "If $y = \\frac{x^3}{3} - 4\\sqrt{x}$, find $\\frac{dy}{dx}$ when $x = 4$.",
          a: "$\\frac{dy}{dx} = x^{2} - \\frac{2}{\\sqrt{x}}$, so at $x=4$: $15$"
        },
        {
          qid: "FD_003_m02",
          q: "Given $f(x) = 5x^2 - \\frac{3}{x}$, find $f'\\left(\\frac{1}{2}\\right)$.",
          a: "$f'(x) = 10 x + \\frac{3}{x^{2}}$, so $f'(1/2) = 17$"
        },
        {
          qid: "FD_003_m03",
          q: "If $y = 6\\sqrt{x} + x^2 - 3x$, find $\\frac{dy}{dx}$ when $x = 9$.",
          a: "$\\frac{dy}{dx} = 2 x - 3 + \\frac{3}{\\sqrt{x}}$. At $x = 9$: $16$"
        },
        {
          qid: "FD_003_m04",
          q: "Given $f(x) = 4x^3 - x^2 + 2x$, find $f'(-2)$.",
          a: "$f'(x) = 12 x^{2} - 2 x + 2$, so $f'(-2) = 54$"
        },
        {
          qid: "FD_003_m05",
          q: "If $f(x) = 2x^{3/2} - x^{1/3}$, find $f'(8)$.",
          a: "$f'(x) = 3 \\sqrt{x} - \\frac{1}{3 x^{\\frac{2}{3}}}$, so $f'(8) = - \\frac{1}{12} + 6 \\sqrt{2}$"
        },
      ],
      hard: [
        {
          qid: "FD_003_h01",
          q: "The curve $y = x^2 - 4x + 7$ has points where $y = 4$. Find the value(s) of $\\frac{dy}{dx}$ at these points.",
          a: "$y = 4 \\Rightarrow x^2 - 4x + 3 = 0 \\Rightarrow x = 1, 3$. $y' = 2 x - 4$. At $x=1$: $y'=-2$. At $x=3$: $y'=2$"
        },
        {
          qid: "FD_003_h02",
          q: "Given $f(x) = 2x^3 - \\frac{5}{x^2} + \\frac{1}{x}$, find $f'(-1)$.",
          a: "$f'(x) = 6 x^{2} - \\frac{1}{x^{2}} + \\frac{10}{x^{3}}$. $f'(-1) = -5$"
        },
        {
          qid: "FD_003_h03",
          q: "Given $f(x) = ax^2 + 3x$ and $f'(2) = 11$, find the value of $a$.",
          a: "$f'(x) = 2 a x + 3$. $f'(2) = 4 a + 3 = 11 \\Rightarrow a = 2$"
        },
        {
          qid: "FD_003_h04",
          q: "If $y = x\\sqrt{x} + \\frac{4}{\\sqrt{x}}$, find $\\frac{dy}{dx}$ when $x = 4$.",
          a: "Rewrite: $y = x^{3/2} + 4x^{-1/2}$. $y' = \\frac{3 \\sqrt{x}}{2} - \\frac{2}{x^{\\frac{3}{2}}}$. At $x = 4$: $11/4$"
        },
        {
          qid: "FD_003_h05",
          q: "Find the rate of change of $y = \\frac{x^3}{3} - \\frac{5x^2}{2} + 6x - 1$ at $x = 3$.",
          a: "$\\frac{dy}{dx} = x^{2} - 5 x + 6$. At $x = 3$: $\\frac{dy}{dx} = 0$. (Stationary point)"
        },
      ],
    },

    // Product Rule > Using a table of values to calculate the derivative of 
    {
      pt_id: "FD_004",
      topic: "Further Differentiation and Applications",
      subtopic: "Basic Differentiation Skills",
      concept: "Product Rule",
      pt: "Using a table of values to calculate the derivative of the product of two functions at a given point",
      testing: "Testing: $(fg)'(a) = f'(a)g(a) + f(a)g'(a)$ from table",
      reason_bank: ["wrong_rule", "setup_error", "sign_error", "algebra_slip", "missing_chain_factor", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_004_m01",
          q: "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 3   | 2       | -1       | 5       | 4        |\nFind $\\frac{d}{dx}[f(x)g(x)]$ at $x = 3$.",
          a: "$f'(3)g(3) + f(3)g'(3) = (-1)(5) + (2)(4) = -5 + 8 = 3$"
        },
      ],
      hard: [
      ],
    },

    // Quotient Rule > Quotient rule differentiation of simple functions
    {
      pt_id: "FD_005",
      topic: "Further Differentiation and Applications",
      subtopic: "Basic Differentiation Skills",
      concept: "Quotient Rule",
      pt: "Quotient rule differentiation of simple functions",
      testing: "Testing: (u/v)' = (u'v - uv') / v²",
      reason_bank: ["wrong_rule", "setup_error", "sign_error", "algebra_slip", "missing_chain_factor", "not_sure"],
      easy: [
        {
          qid: "FD_005_e01",
          q: "Differentiate $y = \\frac{x^2}{x + 3}$.",
          a: "$\\frac{x \\left(x + 6\\right)}{\\left(x + 3\\right)^{2}}$"
        },
        {
          qid: "FD_005_e02",
          q: "Differentiate $y = \\frac{2x + 1}{x - 1}$.",
          a: "$- \\frac{3}{\\left(x - 1\\right)^{2}}$"
        },
        {
          qid: "FD_005_e03",
          q: "Differentiate $y = \\frac{x^3}{x^2 + 1}$.",
          a: "$\\frac{x^{2} \\left(x^{2} + 3\\right)}{\\left(x^{2} + 1\\right)^{2}}$"
        },
      ],
      medium: [
        {
          qid: "FD_005_m01",
          q: "Differentiate $y = \\frac{e^x}{x^2}$.",
          a: "$\\frac{\\left(x - 2\\right) e^{x}}{x^{3}}$"
        },
        {
          qid: "FD_005_m02",
          q: "Differentiate $y = \\frac{x^2 - 1}{x^2 + 1}$.",
          a: "$\\frac{4 x}{\\left(x^{2} + 1\\right)^{2}}$"
        },
        {
          qid: "FD_005_m03",
          q: "Differentiate $y = \\frac{\\sqrt{x}}{x + 4}$.",
          a: "$\\frac{4 - x}{2 \\sqrt{x} \\left(x + 4\\right)^{2}}$"
        },
        {
          qid: "FD_005_m04",
          q: "Differentiate $y = \\frac{3x + 2}{e^x}$.",
          a: "$\\left(1 - 3 x\\right) e^{- x}$"
        },
        {
          qid: "FD_005_m05",
          q: "Differentiate $y = \\frac{x}{\\sqrt{x + 1}}$.",
          a: "$\\frac{x + 2}{2 \\left(x + 1\\right)^{\\frac{3}{2}}}$"
        },
      ],
      hard: [
        {
          qid: "FD_005_h01",
          q: "Show that $\\frac{d}{dx}\\left(\\frac{\\sin x}{\\cos x}\\right) = \\frac{1}{\\cos^2 x}$.",
          a: "$\\frac{\\cos x \\cdot \\cos x - \\sin x(-\\sin x)}{\\cos^2 x} = \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x}$"
        },
        {
          qid: "FD_005_h02",
          q: "Differentiate $y = \\frac{e^{2x}}{x^2 + 3}$.",
          a: "$\\frac{2 \\left(x^{2} - x + 3\\right) e^{2 x}}{\\left(x^{2} + 3\\right)^{2}}$"
        },
        {
          qid: "FD_005_h03",
          q: "Differentiate $y = \\frac{x^2 + 1}{\\sin x}$.",
          a: "$\\frac{2 x \\sin{\\left(x \\right)} - \\left(x^{2} + 1\\right) \\cos{\\left(x \\right)}}{\\sin^{2}{\\left(x \\right)}}$"
        },
        {
          qid: "FD_005_h04",
          q: "Differentiate $y = \\frac{\\ln x}{x^2}$.",
          a: "$\\frac{1 - 2 \\log{\\left(x \\right)}}{x^{3}}$"
        },
        {
          qid: "FD_005_h05",
          q: "Differentiate $y = \\frac{2x - \\sin x}{x + \\cos x}$.",
          a: "$\\frac{2 x \\sin{\\left(x \\right)} - x \\cos{\\left(x \\right)} + \\sin{\\left(x \\right)} + 2 \\cos{\\left(x \\right)} - 1}{\\left(x + \\cos{\\left(x \\right)}\\right)^{2}}$"
        },
      ],
    },

    // Quotient Rule > Using a table of values to calculate the derivative of 
    {
      pt_id: "FD_006",
      topic: "Further Differentiation and Applications",
      subtopic: "Basic Differentiation Skills",
      concept: "Quotient Rule",
      pt: "Using a table of values to calculate the derivative of the quotient of two functions at a given point",
      testing: "Testing: $\\left(\\frac{f}{g}\\right)'(a) = \\frac{f'(a)g(a) - f(a)g'(a)}{[g(a)]^2}$",
      reason_bank: ["wrong_rule", "setup_error", "sign_error", "algebra_slip", "missing_chain_factor", "not_sure"],
      easy: [
        {
          qid: "FD_006_e01",
          q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 2$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $2$ | $6$ | $3$ | $4$ | $-2$ |",
          a: "$\\frac{(3)(4) - (6)(-2)}{4^2} = \\frac{24}{16} = \\frac{3}{2}$"
        },
        {
          qid: "FD_006_e02",
          q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 1$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $1$ | $4$ | $2$ | $2$ | $1$ |",
          a: "$\\frac{(2)(2) - (4)(1)}{2^2} = \\frac{0}{4} = 0$"
        },
        {
          qid: "FD_006_e03",
          q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 3$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $3$ | $9$ | $6$ | $3$ | $1$ |",
          a: "$\\frac{(6)(3) - (9)(1)}{3^2} = \\frac{9}{9} = 1$"
        },
      ],
      medium: [
        {
          qid: "FD_006_m01",
          q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 0$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $0$ | $-1$ | $4$ | $2$ | $-3$ |",
          a: "$\\frac{(4)(2) - (-1)(-3)}{2^2} = \\frac{5}{4} = \\frac{5}{4}$"
        },
        {
          qid: "FD_006_m02",
          q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = -1$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $-1$ | $3$ | $-2$ | $5$ | $4$ |",
          a: "$\\frac{(-2)(5) - (3)(4)}{5^2} = \\frac{-22}{25} = - \\frac{22}{25}$"
        },
        {
          qid: "FD_006_m03",
          q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 4$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $4$ | $10$ | $-1$ | $2$ | $3$ |",
          a: "$\\frac{(-1)(2) - (10)(3)}{2^2} = \\frac{-32}{4} = -8$"
        },
        {
          qid: "FD_006_m04",
          q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 2$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $2$ | $0$ | $5$ | $-3$ | $2$ |",
          a: "$\\frac{(5)(-3) - (0)(2)}{-3^2} = \\frac{-15}{9} = - \\frac{5}{3}$"
        },
        {
          qid: "FD_006_m05",
          q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 1$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $1$ | $-2$ | $7$ | $4$ | $-1$ |",
          a: "$\\frac{(7)(4) - (-2)(-1)}{4^2} = \\frac{26}{16} = \\frac{13}{8}$"
        },
      ],
      hard: [
        {
          qid: "FD_006_h01",
          q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 3$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $3$ | $-4$ | $5$ | $-2$ | $6$ |",
          a: "$\\frac{(5)(-2) - (-4)(6)}{-2^2} = \\frac{14}{4} = \\frac{7}{2}$"
        },
        {
          qid: "FD_006_h02",
          q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 0$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $0$ | $1$ | $-3$ | $-1$ | $2$ |",
          a: "$\\frac{(-3)(-1) - (1)(2)}{-1^2} = \\frac{1}{1} = 1$"
        },
        {
          qid: "FD_006_h03",
          q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = -2$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $-2$ | $8$ | $-3$ | $4$ | $7$ |",
          a: "$\\frac{(-3)(4) - (8)(7)}{4^2} = \\frac{-68}{16} = - \\frac{17}{4}$"
        },
        {
          qid: "FD_006_h04",
          q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 5$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $5$ | $12$ | $-4$ | $6$ | $1$ |",
          a: "$\\frac{(-4)(6) - (12)(1)}{6^2} = \\frac{-36}{36} = -1$"
        },
        {
          qid: "FD_006_h05",
          q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 1$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $1$ | $-5$ | $10$ | $3$ | $-4$ |",
          a: "$\\frac{(10)(3) - (-5)(-4)}{3^2} = \\frac{10}{9} = \\frac{10}{9}$"
        },
      ],
    },

    // Trigonometric Functions > Differentiation involving the product of functions with
    {
      pt_id: "FD_007",
      topic: "Further Differentiation and Applications",
      subtopic: "Basic Differentiation Skills",
      concept: "Trigonometric Functions",
      pt: "Differentiation involving the product of functions with one including a trigonometric function",
      testing: "Testing: Product rule where one factor is a trigonometric function",
      reason_bank: ["wrong_rule", "setup_error", "sign_error", "algebra_slip", "missing_chain_factor", "not_sure"],
      easy: [
        {
          qid: "FD_007_e01",
          q: "Differentiate $y = x\\sin(x)$.",
          a: "$y' = \\sin(x) + x\\cos(x)$"
        },
        {
          qid: "FD_007_e02",
          q: "Differentiate $y = x^2\\cos(x)$.",
          a: "$y' = 2x\\cos(x) - x^2\\sin(x) = x(2\\cos(x) - x\\sin(x))$"
        },
        {
          qid: "FD_007_e03",
          q: "Differentiate $y = 3x\\cos(x)$.",
          a: "$y' = 3\\cos(x) - 3x\\sin(x) = 3(\\cos(x) - x\\sin(x))$"
        },
      ],
      medium: [
        {
          qid: "FD_007_m01",
          q: "Differentiate $y = x^3\\sin(x)$.",
          a: "$y' = 3x^2\\sin(x) + x^3\\cos(x) = x^2(3\\sin(x) + x\\cos(x))$"
        },
        {
          qid: "FD_007_m02",
          q: "Differentiate $y = e^x\\sin(x)$.",
          a: "$y' = e^x\\sin(x) + e^x\\cos(x) = e^x(\\sin(x) + \\cos(x))$"
        },
        {
          qid: "FD_007_m03",
          q: "Differentiate $y = e^x\\sin(3x)$.",
          a: "$y' = e^x\\sin(3x) + 3e^x\\cos(3x) = e^x(\\sin(3x) + 3\\cos(3x))$"
        },
        {
          qid: "FD_007_m04",
          q: "Differentiate $y = (x+1)\\cos(x)$.",
          a: "$y' = \\cos(x) - (x+1)\\sin(x)$"
        },
        {
          qid: "FD_007_m05",
          q: "Differentiate $y = x\\cos(2x)$.",
          a: "$y' = \\cos(2x) - 2x\\sin(2x)$"
        },
      ],
      hard: [
        {
          qid: "FD_007_h01",
          q: "Differentiate $y = x^2\\sin(x)\\cos(x)$.",
          a: "Using $y = \\frac{x^2}{2}\\sin(2x)$:\n$y' = x\\sin(2x) + x^2\\cos(2x)$"
        },
        {
          qid: "FD_007_h02",
          q: "Differentiate $y = e^x\\cos(x)$.",
          a: "$y' = e^x\\cos(x) - e^x\\sin(x) = e^x(\\cos(x) - \\sin(x))$"
        },
        {
          qid: "FD_007_h03",
          q: "Differentiate $y = \\sqrt{x}\\sin(x)$.",
          a: "$y' = \\frac{\\sin(x)}{2\\sqrt{x}} + \\sqrt{x}\\cos(x) = \\frac{\\sin(x) + 2x\\cos(x)}{2\\sqrt{x}}$"
        },
        {
          qid: "FD_007_h04",
          q: "Differentiate $y = (2x-1)^2\\sin(x)$.",
          a: "$y' = 4(2x-1)\\sin(x) + (2x-1)^2\\cos(x) = (2x-1)(4\\sin(x) + (2x-1)\\cos(x))$"
        },
        {
          qid: "FD_007_h05",
          q: "Differentiate $y = e^{-x}\\sin(2x)$.",
          a: "$y' = -e^{-x}\\sin(2x) + 2e^{-x}\\cos(2x) = e^{-x}(2\\cos(2x) - \\sin(2x))$"
        },
      ],
    },

    // Trigonometric Functions > Differentiation involving the quotient of functions wit
    {
      pt_id: "FD_008",
      topic: "Further Differentiation and Applications",
      subtopic: "Basic Differentiation Skills",
      concept: "Trigonometric Functions",
      pt: "Differentiation involving the quotient of functions with one including a trigonometric function",
      testing: "Testing: Quotient rule where one factor is a trigonometric function",
      reason_bank: ["wrong_rule", "setup_error", "sign_error", "algebra_slip", "missing_chain_factor", "not_sure"],
      easy: [
        {
          qid: "FD_008_e01",
          q: "Differentiate $y = \\frac{\\sin(x)}{x}$.",
          a: "$y' = \\frac{x\\cos(x) - \\sin(x)}{x^2}$"
        },
        {
          qid: "FD_008_e02",
          q: "Differentiate $y = \\frac{x}{\\cos(x)}$.",
          a: "$y' = \\frac{\\cos(x) + x\\sin(x)}{\\cos^2(x)}$"
        },
        {
          qid: "FD_008_e03",
          q: "Differentiate $y = \\frac{\\cos(x)}{x}$.",
          a: "$y' = \\frac{-x\\sin(x) - \\cos(x)}{x^2}$"
        },
      ],
      medium: [
        {
          qid: "FD_008_m01",
          q: "Differentiate $y = \\frac{\\sin(x)}{x + 1}$.",
          a: "$y' = \\frac{(x+1)\\cos(x) - \\sin(x)}{(x+1)^2}$"
        },
        {
          qid: "FD_008_m02",
          q: "Differentiate $y = \\frac{x^2}{\\sin(x)}$.",
          a: "$y' = \\frac{2x\\sin(x) - x^2\\cos(x)}{\\sin^2(x)} = \\frac{x(2\\sin(x) - x\\cos(x))}{\\sin^2(x)}$"
        },
        {
          qid: "FD_008_m03",
          q: "Differentiate $y = \\frac{\\cos(x)}{1 + \\sin(x)}$.",
          a: "$y' = \\frac{-\\sin(x)(1+\\sin(x)) - \\cos^2(x)}{(1+\\sin(x))^2} = \\frac{-\\sin(x) - 1}{(1+\\sin(x))^2} = \\frac{-1}{1+\\sin(x)}$"
        },
        {
          qid: "FD_008_m04",
          q: "Differentiate $y = \\frac{e^x}{\\cos(x)}$.",
          a: "$y' = \\frac{e^x\\cos(x) + e^x\\sin(x)}{\\cos^2(x)} = \\frac{e^x(\\cos(x) + \\sin(x))}{\\cos^2(x)}$"
        },
        {
          qid: "FD_008_m05",
          q: "Differentiate $y = \\frac{\\sin(x)}{e^x}$.",
          a: "$y' = \\frac{e^x\\cos(x) - e^x\\sin(x)}{e^{2x}} = \\frac{\\cos(x) - \\sin(x)}{e^x}$"
        },
      ],
      hard: [
        {
          qid: "FD_008_h01",
          q: "Show that $\\frac{d}{dx}(\\frac{\\sin(x)}{\\cos(x)}) = \\frac{1}{\\cos^2(x)}$.",
          a: "$\\frac{\\cos(x) \\cdot \\cos(x) - \\sin(x)(-\\sin(x))}{\\cos^2(x)} = \\frac{\\cos^2(x) + \\sin^2(x)}{\\cos^2(x)} = \\frac{1}{\\cos^2(x)}$ $\\checkmark$"
        },
        {
          qid: "FD_008_h02",
          q: "Differentiate $y = \\frac{x\\sin(x)}{\\cos(x)}$.",
          a: "$y = x\\tan(x)$. Using product rule on $x\\tan(x)$:\n$y' = \\tan(x) + \\frac{x}{\\cos^2(x)}$"
        },
        {
          qid: "FD_008_h03",
          q: "Differentiate $y = \\frac{\\sin(2x)}{x^2 + 1}$.",
          a: "$y' = \\frac{2(x^2+1)\\cos(2x) - 2x\\sin(2x)}{(x^2+1)^2}$"
        },
        {
          qid: "FD_008_h04",
          q: "Show that $\\frac{d}{dx}(\\frac{\\cos(x)}{\\sin(x)}) = -\\frac{1}{\\sin^2(x)}$.",
          a: "$\\frac{-\\sin^2(x) - \\cos^2(x)}{\\sin^2(x)} = \\frac{-1}{\\sin^2(x)}$ $\\checkmark$"
        },
        {
          qid: "FD_008_h05",
          q: "Differentiate $y = \\frac{1 + \\cos(x)}{\\sin(x)}$.",
          a: "$y' = \\frac{-\\sin^2(x) - (1+\\cos(x))\\cos(x)}{\\sin^2(x)} = \\frac{-\\sin^2(x) - \\cos(x) - \\cos^2(x)}{\\sin^2(x)} = \\frac{-1 - \\cos(x)}{\\sin^2(x)}$"
        },
      ],
    },

    // Trigonometric Functions > Differentiation of composite functions — trigonometric 
    {
      pt_id: "FD_009",
      topic: "Further Differentiation and Applications",
      subtopic: "Basic Differentiation Skills",
      concept: "Trigonometric Functions",
      pt: "Differentiation of composite functions — trigonometric function as inside function",
      testing: "Testing: Chain rule with trig on the inside, e.g. $f(\\sin(x))$",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
        {
          qid: "FD_009_e01",
          q: "Differentiate $y = e^{\\sin(x)}$.",
          a: "$y' = \\cos(x) \\cdot e^{\\sin(x)}$"
        },
        {
          qid: "FD_009_e02",
          q: "Differentiate $y = \\cos^3(x)$.",
          a: "$y' = -3\\cos^2(x)\\sin(x)$"
        },
        {
          qid: "FD_009_e03",
          q: "Differentiate $y = \\sin^4(x)$.",
          a: "$y' = 4\\sin^3(x)\\cos(x)$"
        },
      ],
      medium: [
        {
          qid: "FD_009_m01",
          q: "Differentiate $y = \\sqrt{\\sin(x)}$.",
          a: "$y' = \\frac{\\cos(x)}{2\\sqrt{\\sin(x)}}$"
        },
        {
          qid: "FD_009_m02",
          q: "Differentiate $y = \\ln(\\cos(x))$.",
          a: "$y' = -\\frac{\\sin(x)}{\\cos(x)} = -\\tan(x)$"
        },
        {
          qid: "FD_009_m03",
          q: "Differentiate $y = e^{\\cos(x)}$.",
          a: "$y' = -\\sin(x) \\cdot e^{\\cos(x)}$"
        },
        {
          qid: "FD_009_m04",
          q: "Differentiate $y = \\frac{1}{\\cos(x)}$.",
          a: "$y = (\\cos(x))^{-1}$. $y' = \\frac{\\sin(x)}{\\cos^2(x)}$"
        },
        {
          qid: "FD_009_m05",
          q: "Differentiate $y = \\ln(\\sin(x))$.",
          a: "$y' = \\frac{\\cos(x)}{\\sin(x)} = \\cot(x)$"
        },
      ],
      hard: [
        {
          qid: "FD_009_h01",
          q: "Differentiate $y = \\frac{1}{\\sin^2(x)}$.",
          a: "$y = (\\sin(x))^{-2}$. $y' = -2\\sin^{-3}(x)\\cos(x) = \\frac{-2\\cos(x)}{\\sin^3(x)}$"
        },
        {
          qid: "FD_009_h02",
          q: "Differentiate $y = e^{\\tan(x)}$.",
          a: "$y' = \\frac{e^{\\tan(x)}}{\\cos^2(x)}$"
        },
        {
          qid: "FD_009_h03",
          q: "Differentiate $y = \\cos^3(2x)$.",
          a: "$y' = 3\\cos^2(2x) \\cdot (-2\\sin(2x)) = -6\\cos^2(2x)\\sin(2x)$"
        },
        {
          qid: "FD_009_h04",
          q: "Differentiate $y = \\sqrt{1 + \\sin(x)}$.",
          a: "$y' = \\frac{\\cos(x)}{2\\sqrt{1 + \\sin(x)}}$"
        },
        {
          qid: "FD_009_h05",
          q: "Differentiate $y = \\ln(\\sin^2(x) + 1)$.",
          a: "$y' = \\frac{2\\sin(x)\\cos(x)}{\\sin^2(x) + 1} = \\frac{\\sin(2x)}{\\sin^2(x) + 1}$"
        },
      ],
    },

    // Trigonometric Functions > Differentiation of composite functions — trigonometric 
    {
      pt_id: "FD_010",
      topic: "Further Differentiation and Applications",
      subtopic: "Basic Differentiation Skills",
      concept: "Trigonometric Functions",
      pt: "Differentiation of composite functions — trigonometric function as outside function",
      testing: "Testing: Chain rule with trig on the outside, e.g. $\\sin(f(x))$",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
        {
          qid: "FD_010_e01",
          q: "Differentiate $y = \\sin(3x + 2)$.",
          a: "$y' = 3\\cos(3x + 2)$"
        },
        {
          qid: "FD_010_e02",
          q: "Differentiate $y = \\cos(x^2)$.",
          a: "$y' = -2x\\sin(x^2)$"
        },
        {
          qid: "FD_010_e03",
          q: "Differentiate $y = \\sin(5x - 1)$.",
          a: "$y' = 5\\cos(5x - 1)$"
        },
      ],
      medium: [
        {
          qid: "FD_010_m01",
          q: "Differentiate $y = \\sin(x^3)$.",
          a: "$y' = 3x^2\\cos(x^3)$"
        },
        {
          qid: "FD_010_m02",
          q: "Differentiate $y = \\cos(e^x)$.",
          a: "$y' = -e^x\\sin(e^x)$"
        },
        {
          qid: "FD_010_m03",
          q: "Differentiate $y = \\sin(\\sqrt{x})$.",
          a: "$y' = \\frac{\\cos(\\sqrt{x})}{2\\sqrt{x}}$"
        },
        {
          qid: "FD_010_m04",
          q: "Differentiate $y = \\cos(2x^2 - x)$.",
          a: "$y' = -(4x - 1)\\sin(2x^2 - x)$"
        },
        {
          qid: "FD_010_m05",
          q: "Differentiate $y = \\sin(\\ln(x))$.",
          a: "$y' = \\frac{\\cos(\\ln(x))}{x}$"
        },
      ],
      hard: [
        {
          qid: "FD_010_h01",
          q: "Differentiate $y = \\sin(\\frac{1}{x})$.",
          a: "$y' = -\\frac{\\cos(1/x)}{x^2}$"
        },
        {
          qid: "FD_010_h02",
          q: "Differentiate $y = \\cos(\\sin(x))$.",
          a: "$y' = -\\cos(x)\\sin(\\sin(x))$"
        },
        {
          qid: "FD_010_h03",
          q: "Differentiate $y = \\sin(x^2 + 3x)$.",
          a: "$y' = (2x + 3)\\cos(x^2 + 3x)$"
        },
        {
          qid: "FD_010_h04",
          q: "Differentiate $y = \\cos((2x+1)^3)$.",
          a: "$y' = -6(2x+1)^2\\sin((2x+1)^3)$"
        },
        {
          qid: "FD_010_h05",
          q: "Differentiate $y = \\sin(e^{2x})$.",
          a: "$y' = 2e^{2x}\\cos(e^{2x})$"
        },
      ],
    },

    // Trigonometric Functions > Differentiation of simple trigonometric functions
    {
      pt_id: "FD_011",
      topic: "Further Differentiation and Applications",
      subtopic: "Basic Differentiation Skills",
      concept: "Trigonometric Functions",
      pt: "Differentiation of simple trigonometric functions",
      testing: "Testing: Derivatives of $\\sin$, $\\cos$, $\\tan$ with chain rule",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
        {
          qid: "FD_011_e01",
          q: "Differentiate $y = 2 \\sin(3 x)$.",
          a: "$y' = 6 \\cos(3 x)$"
        },
        {
          qid: "FD_011_e02",
          q: "Differentiate $y = \\sin(x) + \\cos(2 x)$.",
          a: "$y' = - 2 \\sin(2 x) + \\cos(x)$"
        },
        {
          qid: "FD_011_e03",
          q: "Differentiate $y = - 3 \\sin(x) + 5 \\cos(x)$.",
          a: "$y' = - 5 \\sin(x) - 3 \\cos(x)$"
        },
      ],
      medium: [
        {
          qid: "FD_011_m01",
          q: "Differentiate $y = 3 \\sin(2 x) + \\cos(5 x)$.",
          a: "$y' = - 5 \\sin(5 x) + 6 \\cos(2 x)$"
        },
        {
          qid: "FD_011_m02",
          q: "Differentiate $y = \\tan(3x + 1)$.",
          a: "$y' = \\frac{3}{\\cos^2(3x+1)}$"
        },
        {
          qid: "FD_011_m03",
          q: "Differentiate $y = 4 \\sin(\\frac{x}{2}) - \\cos(3 x)$.",
          a: "$y' = 3 \\sin(3 x) + 2 \\cos(\\frac{x}{2})$"
        },
        {
          qid: "FD_011_m04",
          q: "Differentiate $y = \\sin^2(x)$.",
          a: "$y' = 2\\sin(x)\\cos(x) = \\sin(2x)$"
        },
        {
          qid: "FD_011_m05",
          q: "Differentiate $y = 2\\tan(x) - \\sin(4x)$.",
          a: "$y' = \\frac{2}{\\cos^2(x)} - 4\\cos(4x)$"
        },
      ],
      hard: [
        {
          qid: "FD_011_h01",
          q: "Differentiate $y = \\cos^2(x) + \\sin^2(x)$.",
          a: "Since $\\cos^2(x) + \\sin^2(x) = 1$, we have $y' = 0$"
        },
        {
          qid: "FD_011_h02",
          q: "Differentiate $y = \\sin(2x)\\cos(2x)$.",
          a: "**Method 1:** Use identity $y = \\frac{1}{2}\\sin(4x)$, so $y' = 2\\cos(4x)$\n**Method 2 (product rule):** $y' = 2\\cos(2x)\\cos(2x) + \\sin(2x)(-2\\sin(2x)) = 2\\cos^2(2x) - 2\\sin^2(2x) = 2\\cos(4x)$"
        },
        {
          qid: "FD_011_h03",
          q: "Differentiate $y = x + \\sin(x)\\cos(x)$.",
          a: "$y' = 1 + \\cos^2(x) - \\sin^2(x) = 1 + \\cos(2x) = 2\\cos^2(x)$"
        },
        {
          qid: "FD_011_h04",
          q: "Differentiate $y = \\sin^2(3x)$.",
          a: "$y' = 2\\sin(3x) \\cdot 3\\cos(3x) = 6\\sin(3x)\\cos(3x) = 3\\sin(6x)$"
        },
        {
          qid: "FD_011_h05",
          q: "Differentiate $y = \\tan(x^2)$.",
          a: "$y' = \\frac{2x}{\\cos^2(x^2)}$"
        },
      ],
    },

    // Trigonometric Functions > Finding value of a trigonometric function at a given po
    {
      pt_id: "FD_012",
      topic: "Further Differentiation and Applications",
      subtopic: "Basic Differentiation Skills",
      concept: "Trigonometric Functions",
      pt: "Finding value of a trigonometric function at a given point",
      testing: "Testing: Evaluate trig derivative at specific $x$",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
        {
          qid: "FD_012_e01",
          q: "If $f(x) = \\sin(x)$, find $f'(\\frac{\\pi}{6})$.",
          a: "$f'(x) = \\cos(x)$. $f'(\\pi/6) = \\cos(\\pi/6) = \\frac{\\sqrt{3}}{2}$"
        },
        {
          qid: "FD_012_e02",
          q: "If $f(x) = 2\\cos(x)$, find $f'(\\frac{\\pi}{4})$.",
          a: "$f'(x) = -2\\sin(x)$. $f'(\\pi/4) = -2 \\cdot \\frac{\\sqrt{2}}{2} = -\\sqrt{2}$"
        },
        {
          qid: "FD_012_e03",
          q: "If $f(x) = \\sin(2x)$, find $f'(\\frac{\\pi}{3})$.",
          a: "$f'(x) = 2\\cos(2x)$. $f'(\\pi/3) = 2\\cos(2\\pi/3) = 2 \\cdot (-\\frac{1}{2}) = -1$"
        },
      ],
      medium: [
        {
          qid: "FD_012_m01",
          q: "If $f(x) = 2\\sin(3x) - \\cos(x)$, find $f'(\\frac{\\pi}{6})$.",
          a: "$f'(x) = 6\\cos(3x) + \\sin(x)$. $f'(\\pi/6) = 6\\cos(\\pi/2) + \\sin(\\pi/6) = 0 + \\frac{1}{2} = \\frac{1}{2}$"
        },
        {
          qid: "FD_012_m02",
          q: "If $f(x) = x\\sin(x)$, find $f'(\\pi)$.",
          a: "$f'(x) = \\sin(x) + x\\cos(x)$. $f'(\\pi) = \\sin(\\pi) + \\pi\\cos(\\pi) = 0 + \\pi(-1) = -\\pi$"
        },
        {
          qid: "FD_012_m03",
          q: "If $f(x) = \\cos^2(x)$, find $f'(\\frac{\\pi}{4})$.",
          a: "$f'(x) = -2\\cos(x)\\sin(x) = -\\sin(2x)$. $f'(\\pi/4) = -\\sin(\\pi/2) = -1$"
        },
        {
          qid: "FD_012_m04",
          q: "If $f(x) = \\sin(x) + \\cos(2x)$, find $f'(\\frac{\\pi}{2})$.",
          a: "$f'(x) = \\cos(x) - 2\\sin(2x)$. $f'(\\pi/2) = \\cos(\\pi/2) - 2\\sin(\\pi) = 0 - 0 = 0$"
        },
        {
          qid: "FD_012_m05",
          q: "If $f(x) = 3\\cos(\\frac{x}{2})$, find $f'(\\pi)$.",
          a: "$f'(x) = -\\frac{3}{2}\\sin(\\frac{x}{2})$. $f'(\\pi) = -\\frac{3}{2}\\sin(\\pi/2) = -\\frac{3}{2}$"
        },
      ],
      hard: [
        {
          qid: "FD_012_h01",
          q: "If $f(x) = e^x\\cos(x)$, find $f'(0)$.",
          a: "$f'(x) = e^x(\\cos(x) - \\sin(x))$. $f'(0) = e^0(1 - 0) = 1$"
        },
        {
          qid: "FD_012_h02",
          q: "If $f(x) = \\frac{\\sin(x)}{x}$, find $f'(\\pi)$.",
          a: "$f'(x) = \\frac{x\\cos(x) - \\sin(x)}{x^2}$. $f'(\\pi) = \\frac{\\pi(-1) - 0}{\\pi^2} = -\\frac{1}{\\pi}$"
        },
        {
          qid: "FD_012_h03",
          q: "If $f(x) = x^2\\cos(x)$, find $f'(\\frac{\\pi}{2})$.",
          a: "$f'(x) = 2x\\cos(x) - x^2\\sin(x)$. $f'(\\pi/2) = 2 \\cdot \\frac{\\pi}{2} \\cdot 0 - \\frac{\\pi^2}{4} \\cdot 1 = -\\frac{\\pi^2}{4}$"
        },
        {
          qid: "FD_012_h04",
          q: "The displacement of a particle is $s(t) = 4\\sin(2t) + \\cos(t)$ metres. Find the velocity at $t = \\frac{\\pi}{4}$.",
          a: "$v(t) = s'(t) = 8\\cos(2t) - \\sin(t)$. $v(\\pi/4) = 8\\cos(\\pi/2) - \\sin(\\pi/4) = 0 - \\frac{\\sqrt{2}}{2} = -\\frac{\\sqrt{2}}{2}$ m/s"
        },
        {
          qid: "FD_012_h05",
          q: "If $f(x) = \\sin(x)\\cos(x)$, find $f'(\\frac{\\pi}{3})$.",
          a: "$f'(x) = \\cos^2(x) - \\sin^2(x) = \\cos(2x)$. $f'(\\pi/3) = \\cos(2\\pi/3) = -\\frac{1}{2}$"
        },
      ],
    },

    // e Functions > Differentiation involving the product of functions with
    {
      pt_id: "FD_013",
      topic: "Further Differentiation and Applications",
      subtopic: "Basic Differentiation Skills",
      concept: "e Functions",
      pt: "Differentiation involving the product of functions with one including an e function",
      testing: "Testing: Product rule with exponential factor",
      reason_bank: ["wrong_rule", "setup_error", "sign_error", "algebra_slip", "missing_chain_factor", "not_sure"],
      easy: [
        {
          qid: "FD_013_e01",
          q: "Differentiate $y = xe^x$.",
          a: "$y' = e^x + xe^x = e^x(1 + x)$"
        },
        {
          qid: "FD_013_e02",
          q: "Differentiate $y = x^2 e^x$.",
          a: "$y' = 2xe^x + x^2 e^x = xe^x(2 + x)$"
        },
        {
          qid: "FD_013_e03",
          q: "Differentiate $y = (x+3)e^{-x}$.",
          a: "$y' = e^{-x} - (x+3)e^{-x} = e^{-x}(1 - x - 3) = -(x+2)e^{-x}$"
        },
      ],
      medium: [
        {
          qid: "FD_013_m01",
          q: "Differentiate $y = x^3 e^{-x}$.",
          a: "$y' = 3x^2 e^{-x} - x^3 e^{-x} = x^2 e^{-x}(3 - x)$"
        },
        {
          qid: "FD_013_m02",
          q: "Differentiate $y = (2x+1)e^{4x}$.",
          a: "$y' = 2e^{4x} + 4(2x+1)e^{4x} = e^{4x}(8x + 6) = 2e^{4x}(4x + 3)$"
        },
        {
          qid: "FD_013_m03",
          q: "Differentiate $y = (x^2 - 1)e^{2x}$.",
          a: "$y' = 2xe^{2x} + 2(x^2-1)e^{2x} = 2e^{2x}(x^2 + x - 1)$"
        },
        {
          qid: "FD_013_m04",
          q: "Differentiate $y = \\sqrt{x} \\cdot e^x$.",
          a: "$y' = \\frac{e^x}{2\\sqrt{x}} + \\sqrt{x} \\cdot e^x = e^x(\\frac{1}{2\\sqrt{x}} + \\sqrt{x}) = \\frac{e^x(2x + 1)}{2\\sqrt{x}}$"
        },
        {
          qid: "FD_013_m05",
          q: "Differentiate $y = (3x - 2)e^{-3x}$.",
          a: "$y' = 3e^{-3x} - 3(3x-2)e^{-3x} = e^{-3x}(3 - 9x + 6) = 3e^{-3x}(3 - 3x) = 9(1-x)e^{-3x}$"
        },
      ],
      hard: [
        {
          qid: "FD_013_h01",
          q: "Differentiate $y = xe^{x^2}$.",
          a: "$y' = e^{x^2} + 2x^2 e^{x^2} = e^{x^2}(1 + 2x^2)$"
        },
        {
          qid: "FD_013_h02",
          q: "Find the gradient of $y = x^2 e^{3x}$ at $x = 0$.",
          a: "$y' = 2xe^{3x} + 3x^2 e^{3x} = xe^{3x}(2 + 3x)$. At $x = 0$: $y' = 0$"
        },
        {
          qid: "FD_013_h03",
          q: "Find the coordinates of the stationary point of $y = xe^{-x}$.",
          a: "$y' = e^{-x} - xe^{-x} = e^{-x}(1 - x) = 0 \\Rightarrow x = 1$. $y(1) = e^{-1}$. Stationary point: $(1, e^{-1})$"
        },
        {
          qid: "FD_013_h04",
          q: "Differentiate $y = (x^2 + 2x)e^{-x}$.",
          a: "$y' = (2x+2)e^{-x} - (x^2+2x)e^{-x} = e^{-x}(2x + 2 - x^2 - 2x) = e^{-x}(2 - x^2)$"
        },
        {
          qid: "FD_013_h05",
          q: "Differentiate $y = e^x\\ln(x)$.",
          a: "$y' = e^x\\ln(x) + \\frac{e^x}{x} = e^x(\\ln(x) + \\frac{1}{x})$"
        },
      ],
    },

    // e Functions > Differentiation involving the quotient of functions wit
    {
      pt_id: "FD_014",
      topic: "Further Differentiation and Applications",
      subtopic: "Basic Differentiation Skills",
      concept: "e Functions",
      pt: "Differentiation involving the quotient of functions with one including an e function",
      testing: "Testing: Quotient rule with exponential in numerator or denominator",
      reason_bank: ["wrong_rule", "setup_error", "sign_error", "algebra_slip", "missing_chain_factor", "not_sure"],
      easy: [
        {
          qid: "FD_014_e01",
          q: "Differentiate $y = \\frac{e^x}{x}$.",
          a: "$y' = \\frac{xe^x - e^x}{x^2} = \\frac{e^x(x - 1)}{x^2}$"
        },
        {
          qid: "FD_014_e02",
          q: "Differentiate $y = \\frac{x}{e^x}$.",
          a: "$y' = \\frac{e^x - xe^x}{e^{2x}} = \\frac{1 - x}{e^x}$"
        },
        {
          qid: "FD_014_e03",
          q: "Differentiate $y = \\frac{e^x}{x + 1}$.",
          a: "$y' = \\frac{(x+1)e^x - e^x}{(x+1)^2} = \\frac{xe^x}{(x+1)^2}$"
        },
      ],
      medium: [
        {
          qid: "FD_014_m01",
          q: "Differentiate $y = \\frac{e^{2x}}{x+1}$.",
          a: "$y' = \\frac{2(x+1)e^{2x} - e^{2x}}{(x+1)^2} = \\frac{e^{2x}(2x+1)}{(x+1)^2}$"
        },
        {
          qid: "FD_014_m02",
          q: "Differentiate $y = \\frac{e^x}{x^2}$.",
          a: "$y' = \\frac{x^2 e^x - 2xe^x}{x^4} = \\frac{e^x(x-2)}{x^3}$"
        },
        {
          qid: "FD_014_m03",
          q: "Differentiate $y = \\frac{3x+2}{e^x}$.",
          a: "$y' = \\frac{3e^x - (3x+2)e^x}{e^{2x}} = \\frac{1 - 3x}{e^x}$"
        },
        {
          qid: "FD_014_m04",
          q: "Differentiate $y = \\frac{x^2 - 1}{e^x}$.",
          a: "$y' = \\frac{2xe^x - (x^2-1)e^x}{e^{2x}} = \\frac{2x - x^2 + 1}{e^x} = \\frac{-(x^2 - 2x - 1)}{e^x}$"
        },
        {
          qid: "FD_014_m05",
          q: "Differentiate $y = \\frac{e^x}{x^2 + 1}$.",
          a: "$y' = \\frac{(x^2+1)e^x - 2xe^x}{(x^2+1)^2} = \\frac{e^x(x^2 - 2x + 1)}{(x^2+1)^2} = \\frac{e^x(x-1)^2}{(x^2+1)^2}$"
        },
      ],
      hard: [
        {
          qid: "FD_014_h01",
          q: "Differentiate $y = \\frac{e^{2x}}{x^2 + 3}$.",
          a: "$y' = \\frac{2(x^2+3)e^{2x} - 2xe^{2x}}{(x^2+3)^2} = \\frac{2e^{2x}(x^2 - x + 3)}{(x^2+3)^2}$"
        },
        {
          qid: "FD_014_h02",
          q: "Differentiate $y = \\frac{xe^x}{x + 1}$.",
          a: "Using quotient rule with $u = xe^x$, $v = x+1$:\n$u' = e^x + xe^x = e^x(1+x)$\n$y' = \\frac{e^x(1+x)(x+1) - xe^x}{(x+1)^2} = \\frac{e^x(x^2 + 2x + 1 - x)}{(x+1)^2} = \\frac{e^x(x^2 + x + 1)}{(x+1)^2}$"
        },
        {
          qid: "FD_014_h03",
          q: "Find the stationary point of $y = \\frac{e^x}{x^2}$ for $x > 0$.",
          a: "$y' = \\frac{e^x(x-2)}{x^3} = 0 \\Rightarrow x = 2$. $y(2) = \\frac{e^2}{4}$. Stationary point: $(2, \\frac{e^2}{4})$"
        },
        {
          qid: "FD_014_h04",
          q: "Differentiate $y = \\frac{e^{-x}}{x + 2}$.",
          a: "$y' = \\frac{-(x+2)e^{-x} - e^{-x}}{(x+2)^2} = \\frac{-e^{-x}(x+3)}{(x+2)^2}$"
        },
        {
          qid: "FD_014_h05",
          q: "Differentiate $y = \\frac{\\ln(x)}{e^x}$.",
          a: "$y' = \\frac{\\frac{1}{x} \\cdot e^x - \\ln(x) \\cdot e^x}{e^{2x}} = \\frac{1 - x\\ln(x)}{xe^x}$"
        },
      ],
    },

    // e Functions > Differentiation of $e^x$ or $e^{g(x)}$
    {
      pt_id: "FD_015",
      topic: "Further Differentiation and Applications",
      subtopic: "Basic Differentiation Skills",
      concept: "e Functions",
      pt: "Differentiation of $e^x$ or $e^{g(x)}$",
      testing: "Testing: Chain rule with exponential function",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
        {
          qid: "FD_015_e01",
          q: "Differentiate $y = e^{3x}$.",
          a: "$y' = 3e^{3x}$"
        },
        {
          qid: "FD_015_e02",
          q: "Differentiate $y = e^{-2x}$.",
          a: "$y' = -2e^{-2x}$"
        },
        {
          qid: "FD_015_e03",
          q: "Differentiate $y = 4e^{x/2}$.",
          a: "$y' = 2e^{x/2}$"
        },
      ],
      medium: [
        {
          qid: "FD_015_m01",
          q: "Differentiate $y = e^{3x^2 - x}$.",
          a: "$y' = (6x - 1)e^{3x^2 - x}$"
        },
        {
          qid: "FD_015_m02",
          q: "Differentiate $y = 5e^{-2x} + e^{\\sqrt{x}}$.",
          a: "$y' = -10e^{-2x} + \\frac{e^{\\sqrt{x}}}{2\\sqrt{x}}$"
        },
        {
          qid: "FD_015_m03",
          q: "Differentiate $y = e^{x^2 + 1}$.",
          a: "$y' = 2xe^{x^2 + 1}$"
        },
        {
          qid: "FD_015_m04",
          q: "Differentiate $y = e^{1/x}$.",
          a: "$y' = -\\frac{e^{1/x}}{x^2}$"
        },
        {
          qid: "FD_015_m05",
          q: "Differentiate $y = 3e^{2x} - e^{-x}$.",
          a: "$y' = 6e^{2x} + e^{-x}$"
        },
      ],
      hard: [
        {
          qid: "FD_015_h01",
          q: "Differentiate $y = e^{x^3 - 2x}$.",
          a: "$y' = (3x^2 - 2)e^{x^3 - 2x}$"
        },
        {
          qid: "FD_015_h02",
          q: "Differentiate $y = e^{\\sin(x)}$.",
          a: "$y' = \\cos(x) \\cdot e^{\\sin(x)}$"
        },
        {
          qid: "FD_015_h03",
          q: "Differentiate $y = e^{e^x}$.",
          a: "$y' = e^x \\cdot e^{e^x}$"
        },
        {
          qid: "FD_015_h04",
          q: "Differentiate $y = e^{(\\ln(x))^2}$.",
          a: "$y' = \\frac{2\\ln(x)}{x} \\cdot e^{(\\ln(x))^2}$"
        },
        {
          qid: "FD_015_h05",
          q: "If $f(x) = e^{x^2 - 4x}$, find $f'(2)$.",
          a: "$f'(x) = (2x - 4)e^{x^2 - 4x}$. $f'(2) = 0 \\cdot e^{-4} = 0$. (Stationary point)"
        },
      ],
    },

    // e Functions > Differentiation of composite functions — e function as 
    {
      pt_id: "FD_016",
      topic: "Further Differentiation and Applications",
      subtopic: "Basic Differentiation Skills",
      concept: "e Functions",
      pt: "Differentiation of composite functions — e function as outside function",
      testing: "Testing: Chain rule with $e^{f(x)}$ where $f$ is non-linear",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
        {
          qid: "FD_016_e01",
          q: "Differentiate $y = e^{\\cos(x)}$.",
          a: "$y' = -\\sin(x) \\cdot e^{\\cos(x)}$"
        },
        {
          qid: "FD_016_e02",
          q: "Differentiate $y = e^{x^2}$.",
          a: "$y' = 2x \\cdot e^{x^2}$"
        },
        {
          qid: "FD_016_e03",
          q: "Differentiate $y = e^{3x+1}$.",
          a: "$y' = 3e^{3x+1}$"
        },
      ],
      medium: [
        {
          qid: "FD_016_m01",
          q: "Differentiate $y = e^{\\sin(x)}$.",
          a: "$y' = \\cos(x) \\cdot e^{\\sin(x)}$"
        },
        {
          qid: "FD_016_m02",
          q: "Differentiate $y = e^{\\sqrt{x}}$.",
          a: "$y' = \\frac{e^{\\sqrt{x}}}{2\\sqrt{x}}$"
        },
        {
          qid: "FD_016_m03",
          q: "Differentiate $y = e^{x^2 - 3x}$.",
          a: "$y' = (2x - 3)e^{x^2 - 3x}$"
        },
        {
          qid: "FD_016_m04",
          q: "Differentiate $y = e^{\\ln(x)}$ and explain your answer.",
          a: "Since $e^{\\ln(x)} = x$, we have $y' = 1$. Alternatively, by chain rule: $y' = \\frac{1}{x} \\cdot e^{\\ln(x)} = \\frac{x}{x} = 1$"
        },
        {
          qid: "FD_016_m05",
          q: "Differentiate $y = e^{1/(x+1)}$.",
          a: "$y' = -\\frac{e^{1/(x+1)}}{(x+1)^2}$"
        },
      ],
      hard: [
        {
          qid: "FD_016_h01",
          q: "Differentiate $y = e^{\\tan(x)}$.",
          a: "$y' = \\frac{e^{\\tan(x)}}{\\cos^2(x)}$"
        },
        {
          qid: "FD_016_h02",
          q: "Differentiate $y = e^{e^x}$.",
          a: "$y' = e^x \\cdot e^{e^x}$"
        },
        {
          qid: "FD_016_h03",
          q: "Differentiate $y = e^{x\\sin(x)}$.",
          a: "Inner function: $u = x\\sin(x)$, $u' = \\sin(x) + x\\cos(x)$.\n$y' = (\\sin(x) + x\\cos(x))e^{x\\sin(x)}$"
        },
        {
          qid: "FD_016_h04",
          q: "Find the $x$-coordinate(s) where $y = e^{-x^2}$ has a stationary point.",
          a: "$y' = -2xe^{-x^2} = 0$. Since $e^{-x^2} > 0$ always, we need $x = 0$. Stationary point at $x = 0$."
        },
        {
          qid: "FD_016_h05",
          q: "If $f(x) = e^{x^2 + 2x - 3}$, find $f'(1)$.",
          a: "$f'(x) = (2x + 2)e^{x^2 + 2x - 3}$. $f'(1) = 4e^{1+2-3} = 4e^0 = 4$"
        },
      ],
    },

    // Modelling Continuous Exponential Growth and Decay > Determining decay constant k from given half-life using
    {
      pt_id: "FD_017",
      topic: "Further Differentiation and Applications",
      subtopic: "Exponential Growth and Decay",
      concept: "Modelling Continuous Exponential Growth and Decay",
      pt: "Determining decay constant k from given half-life using logarithms",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_017_m01",
          q: "A radioactive isotope has a half-life of 12 days. If it decays according to $N(t) = N_0 e^{kt}$, find $k$.",
          a: "$\\frac{N_0}{2} = N_0 e^{12k} \\Rightarrow k = \\frac{\\ln(0.5)}{12} = \\frac{-\\ln 2}{12} \\approx -0.0578$ per day"
        },
      ],
      hard: [
      ],
    },

    // Modelling Continuous Exponential Growth and Decay > Determining half-lives or other percentage of initial v
    {
      pt_id: "FD_018",
      topic: "Further Differentiation and Applications",
      subtopic: "Exponential Growth and Decay",
      concept: "Modelling Continuous Exponential Growth and Decay",
      pt: "Determining half-lives or other percentage of initial values",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_018_m01",
          q: "A radioactive substance decays according to $N(t) = N_0 e^{-0.02t}$. Find the half-life.",
          a: "$\\frac{N_0}{2} = N_0 e^{-0.02t} \\Rightarrow -0.02t = \\ln(0.5) \\Rightarrow t = \\frac{\\ln 2}{0.02} = 34.66$ units"
        },
      ],
      hard: [
      ],
    },

    // Modelling Continuous Exponential Growth and Decay > Determining initial value of exponential model
    {
      pt_id: "FD_019",
      topic: "Further Differentiation and Applications",
      subtopic: "Exponential Growth and Decay",
      concept: "Modelling Continuous Exponential Growth and Decay",
      pt: "Determining initial value of exponential model",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_019_m01",
          q: "After 6 years, an investment is worth $\\$15,000$. If it grew at a continuous rate of 4% p.a., find the initial investment.",
          a: "$15000 = A_0 e^{0.04 \\times 6} \\Rightarrow A_0 = 15000 e^{-0.24} \\approx \\$11,799$"
        },
      ],
      hard: [
      ],
    },

    // Modelling Continuous Exponential Growth and Decay > Determining parameters of exponential model from two da
    {
      pt_id: "FD_020",
      topic: "Further Differentiation and Applications",
      subtopic: "Exponential Growth and Decay",
      concept: "Modelling Continuous Exponential Growth and Decay",
      pt: "Determining parameters of exponential model from two data points",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_020_m01",
          q: "A population $P(t) = Ae^{kt}$ satisfies $P(0) = 200$ and $P(5) = 350$. Find $A$ and $k$.",
          a: "$A = 200$. $350 = 200e^{5k} \\Rightarrow k = \\frac{1}{5}\\ln\\left(\\frac{350}{200}\\right) = \\frac{\\ln(1.75)}{5} \\approx 0.1119$"
        },
      ],
      hard: [
      ],
    },

    // Modelling Continuous Exponential Growth and Decay > Determining rate of growth or decay by using derivative
    {
      pt_id: "FD_021",
      topic: "Further Differentiation and Applications",
      subtopic: "Exponential Growth and Decay",
      concept: "Modelling Continuous Exponential Growth and Decay",
      pt: "Determining rate of growth or decay by using derivative of e function",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_021_m01",
          q: "The temperature of a cooling object is $T(t) = 25 + 75e^{-0.1t}$ °C. Find the rate of cooling at $t = 5$ minutes.",
          a: "$T'(t) = -7.5e^{-0.1t}$. $T'(5) = -7.5e^{-0.5} \\approx -4.55$ °C/min"
        },
      ],
      hard: [
      ],
    },

    // Modelling Continuous Exponential Growth and Decay > Determining the time when the value of the exponential 
    {
      pt_id: "FD_022",
      topic: "Further Differentiation and Applications",
      subtopic: "Exponential Growth and Decay",
      concept: "Modelling Continuous Exponential Growth and Decay",
      pt: "Determining the time when the value of the exponential model equals a given value",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_022_m01",
          q: "A substance decays according to $M(t) = 80e^{-0.05t}$ grams. Find when only 20 g remains.",
          a: "$20 = 80e^{-0.05t} \\Rightarrow e^{-0.05t} = 0.25 \\Rightarrow -0.05t = \\ln(0.25) \\Rightarrow t = \\frac{-\\ln(0.25)}{0.05} = \\frac{\\ln 4}{0.05} \\approx 27.7$ years"
        },
      ],
      hard: [
      ],
    },

    // Modelling Continuous Exponential Growth and Decay > Determining the value of the exponential model as t bec
    {
      pt_id: "FD_023",
      topic: "Further Differentiation and Applications",
      subtopic: "Exponential Growth and Decay",
      concept: "Modelling Continuous Exponential Growth and Decay",
      pt: "Determining the value of the exponential model as t becomes large",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_023_m01",
          q: "A drug concentration is modelled by $C(t) = 50(1 - e^{-0.3t})$ mg/L. What is the limiting concentration?",
          a: "As $t \\to \\infty$, $e^{-0.3t} \\to 0$, so $C \\to 50$ mg/L."
        },
      ],
      hard: [
      ],
    },

    // Modelling Continuous Exponential Growth and Decay > Determining the value of the exponential model at a giv
    {
      pt_id: "FD_024",
      topic: "Further Differentiation and Applications",
      subtopic: "Exponential Growth and Decay",
      concept: "Modelling Continuous Exponential Growth and Decay",
      pt: "Determining the value of the exponential model at a given time",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_024_m01",
          q: "A population is modelled by $P(t) = 500e^{0.03t}$ where $t$ is in years. Find the population after 10 years.",
          a: "$P(10) = 500e^{0.3} = 500 \\times 1.3499 \\approx 675$"
        },
      ],
      hard: [
      ],
    },

    // Modelling Continuous Exponential Growth and Decay > Find the derivative (or rate of change) at a given popu
    {
      pt_id: "FD_025",
      topic: "Further Differentiation and Applications",
      subtopic: "Exponential Growth and Decay",
      concept: "Modelling Continuous Exponential Growth and Decay",
      pt: "Find the derivative (or rate of change) at a given population/value of the function",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_025_m01",
          q: "Given $P(t) = 1000e^{0.02t}$ and $\\frac{dP}{dt} = 0.02P$, find the rate of change when $P = 1500$.",
          a: "$\\frac{dP}{dt} = 0.02 \\times 1500 = 30$ per unit time."
        },
      ],
      hard: [
      ],
    },

    // Modelling Continuous Exponential Growth and Decay > Identifying or determining k (the percentage rate of gr
    {
      pt_id: "FD_026",
      topic: "Further Differentiation and Applications",
      subtopic: "Exponential Growth and Decay",
      concept: "Modelling Continuous Exponential Growth and Decay",
      pt: "Identifying or determining k (the percentage rate of growth or decay)",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_026_m01",
          q: "A quantity doubles every 8 years following $A(t) = A_0 e^{kt}$. Find $k$.",
          a: "$2A_0 = A_0 e^{8k} \\Rightarrow \\ln 2 = 8k \\Rightarrow k = \\frac{\\ln 2}{8} \\approx 0.0866$"
        },
      ],
      hard: [
      ],
    },

    // Modelling Continuous Exponential Growth and Decay > Interpreting derivative's units or interpreting derivat
    {
      pt_id: "FD_027",
      topic: "Further Differentiation and Applications",
      subtopic: "Exponential Growth and Decay",
      concept: "Modelling Continuous Exponential Growth and Decay",
      pt: "Interpreting derivative's units or interpreting derivative value of a function of e",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_027_m01",
          q: "The volume of water in a tank is $V(t) = 200e^{-0.05t}$ litres where $t$ is in hours. If $V'(3) = -8.61$, interpret this value.",
          a: "At $t = 3$ hours, the volume of water is decreasing at a rate of 8.61 litres per hour."
        },
      ],
      hard: [
      ],
    },

    // Solving Optimisation Problems > Deriving objective function from constraint (show that)
    {
      pt_id: "FD_028",
      topic: "Further Differentiation and Applications",
      subtopic: "Optimisation Problems",
      concept: "Solving Optimisation Problems",
      pt: "Deriving objective function from constraint (show that)",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_028_m01",
          q: "A box with a square base and open top has surface area 48 cm². Show that the volume is $V = 12x - \\frac{x^3}{4}$ where $x$ is the side length of the base.",
          a: "$SA = x^2 + 4xh = 48 \\Rightarrow h = \\frac{48 - x^2}{4x}$. $V = x^2 h = x^2 \\cdot \\frac{48 - x^2}{4x} = \\frac{x(48-x^2)}{4} = 12x - \\frac{x^3}{4}$"
        },
      ],
      hard: [
      ],
    },

    // Solving Optimisation Problems > Determining optimised result using first and second der
    {
      pt_id: "FD_029",
      topic: "Further Differentiation and Applications",
      subtopic: "Optimisation Problems",
      concept: "Solving Optimisation Problems",
      pt: "Determining optimised result using first and second derivative tests",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_029_m01",
          q: "A farmer has 200 m of fencing to enclose a rectangular paddock against a straight river (no fence needed along the river). Find the dimensions that maximise the area.",
          a: "Let width $= x$, length $= 200 - 2x$. $A = x(200 - 2x) = 200x - 2x^2$. $A'(x) = 200 - 4x = 0 \\Rightarrow x = 50$. $A''(x) = -4 < 0$ (max). Dimensions: $50$ m × $100$ m, area = $5000$ m²."
        },
        {
          qid: "FD_029_m02",
          q: "A cylindrical can must hold 500 cm³. Find the radius that minimises the surface area.",
          a: "$V = \\pi r^2 h = 500 \\Rightarrow h = \\frac{500}{\\pi r^2}$. $SA = 2\\pi r^2 + 2\\pi r h = 2\\pi r^2 + \\frac{1000}{r}$. $\\frac{dSA}{dr} = 4\\pi r - \\frac{1000}{r^2} = 0 \\Rightarrow r^3 = \\frac{250}{\\pi} \\Rightarrow r = \\left(\\frac{250}{\\pi}\\right)^{1/3} \\approx 4.30$ cm."
        },
      ],
      hard: [
      ],
    },

    // Calculating Second Derivatives > Calculation and interpretation of second derivative in 
    {
      pt_id: "FD_030",
      topic: "Further Differentiation and Applications",
      subtopic: "Second Derivatives",
      concept: "Calculating Second Derivatives",
      pt: "Calculation and interpretation of second derivative in real-world context",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_030_m01",
          q: "The height of a ball is given by $h(t) = 20t - 5t^2$ metres. Find $h''(t)$ and explain what it represents.",
          a: "$h'(t) = 20 - 10t$ (velocity), $h''(t) = -10$ m/s². This represents the constant downward acceleration due to gravity."
        },
      ],
      hard: [
      ],
    },

    // Calculating Second Derivatives > Calculation of second derivative
    {
      pt_id: "FD_031",
      topic: "Further Differentiation and Applications",
      subtopic: "Second Derivatives",
      concept: "Calculating Second Derivatives",
      pt: "Calculation of second derivative",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_031_m01",
          q: "Find $f''(x)$ if $f(x) = x^4 - 3x^3 + 2x$.",
          a: "$f'(x) = 4x^3 - 9x^2 + 2$, $f''(x) = 12x^2 - 18x$"
        },
        {
          qid: "FD_031_m02",
          q: "Find $\\frac{d^2y}{dx^2}$ if $y = e^{2x} \\sin(x)$.",
          a: "$y' = 2e^{2x}\\sin(x) + e^{2x}\\cos(x) = e^{2x}(2\\sin x + \\cos x)$. $y'' = 2e^{2x}(2\\sin x + \\cos x) + e^{2x}(2\\cos x - \\sin x) = e^{2x}(3\\sin x + 4\\cos x)$"
        },
      ],
      hard: [
      ],
    },

    // Locating Critical Points > Deriving simultaneous equations from turning point, inf
    {
      pt_id: "FD_032",
      topic: "Further Differentiation and Applications",
      subtopic: "Second Derivatives",
      concept: "Locating Critical Points",
      pt: "Deriving simultaneous equations from turning point, inflection point, and function value conditions",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_032_m01",
          q: "The cubic $f(x) = ax^3 + bx^2 + cx$ has a stationary point at $x = 1$ and an inflection point at $x = 2$. Find $a$ and $b$.",
          a: "$f'(x) = 3ax^2 + 2bx + c = 0$ at $x=1$: $3a + 2b + c = 0$. $f''(x) = 6ax + 2b = 0$ at $x=2$: $12a + 2b = 0 \\Rightarrow b = -6a$. From first equation: $3a - 12a + c = 0 \\Rightarrow c = 9a$."
        },
      ],
      hard: [
      ],
    },

    // Locating Critical Points > Determine the values for which a curve has a given conc
    {
      pt_id: "FD_033",
      topic: "Further Differentiation and Applications",
      subtopic: "Second Derivatives",
      concept: "Locating Critical Points",
      pt: "Determine the values for which a curve has a given concavity",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_033_m01",
          q: "For $f(x) = x^3 - 6x^2 + 9x$, find where the curve is concave up.",
          a: "$f''(x) = 6x - 12 > 0 \\Rightarrow x > 2$. Concave up for $x > 2$."
        },
      ],
      hard: [
      ],
    },

    // Locating Critical Points > Determining concavity of a curve at a given point
    {
      pt_id: "FD_034",
      topic: "Further Differentiation and Applications",
      subtopic: "Second Derivatives",
      concept: "Locating Critical Points",
      pt: "Determining concavity of a curve at a given point",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_034_m01",
          q: "Determine whether $f(x) = x \\ln(x)$ is concave up or concave down at $x = 1$.",
          a: "$f'(x) = \\ln(x) + 1$, $f''(x) = \\frac{1}{x}$. $f''(1) = 1 > 0$, so concave up at $x = 1$."
        },
      ],
      hard: [
      ],
    },

    // Locating Critical Points > Determining nature of stationary or inflection points u
    {
      pt_id: "FD_035",
      topic: "Further Differentiation and Applications",
      subtopic: "Second Derivatives",
      concept: "Locating Critical Points",
      pt: "Determining nature of stationary or inflection points using second derivative tests",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_035_m01",
          q: "Classify the stationary points of $f(x) = x^3 - 3x + 2$.",
          a: "$f'(x) = 3x^2 - 3 = 0 \\Rightarrow x = \\pm 1$. $f''(x) = 6x$. At $x = -1$: $f''(-1) = -6 < 0$ (local max). At $x = 1$: $f''(1) = 6 > 0$ (local min)."
        },
      ],
      hard: [
      ],
    },

    // Locating Critical Points > Finding $x$ and/or $y$ intercepts
    {
      pt_id: "FD_036",
      topic: "Further Differentiation and Applications",
      subtopic: "Second Derivatives",
      concept: "Locating Critical Points",
      pt: "Finding $x$ and/or $y$ intercepts",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_036_m01",
          q: "Find the $x$ and $y$ intercepts of $f(x) = xe^{-x}$.",
          a: "$y$-intercept: $f(0) = 0$. $x$-intercept: $xe^{-x} = 0 \\Rightarrow x = 0$ (since $e^{-x} \\neq 0$). Only intercept: $(0, 0)$."
        },
      ],
      hard: [
      ],
    },

    // Locating Critical Points > Finding locations of stationary and/or inflection point
    {
      pt_id: "FD_037",
      topic: "Further Differentiation and Applications",
      subtopic: "Second Derivatives",
      concept: "Locating Critical Points",
      pt: "Finding locations of stationary and/or inflection points",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_037_m01",
          q: "Find all stationary points of $f(x) = 2x^3 - 9x^2 + 12x - 4$.",
          a: "$f'(x) = 6x^2 - 18x + 12 = 6(x-1)(x-2) = 0$, so $x = 1$ and $x = 2$. Points: $(1, 1)$ and $(2, 0)$."
        },
        {
          qid: "FD_037_m02",
          q: "Find the inflection point(s) of $f(x) = x^4 - 6x^2 + 8x$.",
          a: "$f'(x) = 4x^3 - 12x + 8$, $f''(x) = 12x^2 - 12 = 12(x^2 - 1) = 0$ at $x = \\pm 1$. Points: $(1, 3)$ and $(-1, -13)$."
        },
      ],
      hard: [
      ],
    },

    // Locating Critical Points > Finding where maximal rate of change occurs by finding 
    {
      pt_id: "FD_038",
      topic: "Further Differentiation and Applications",
      subtopic: "Second Derivatives",
      concept: "Locating Critical Points",
      pt: "Finding where maximal rate of change occurs by finding vertical inflection point",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_038_m01",
          q: "The number of bacteria in a culture is modelled by $N(t) = \\frac{1000}{1 + 9e^{-0.5t}}$. Find the time when the rate of growth is greatest.",
          a: "The maximum rate of change occurs at the inflection point. Since this is a logistic curve, inflection occurs when $N = 500$. Solving: $500 = \\frac{1000}{1+9e^{-0.5t}} \\Rightarrow 9e^{-0.5t} = 1 \\Rightarrow t = \\frac{\\ln 9}{0.5} = 2\\ln 9 \\approx 4.39$"
        },
      ],
      hard: [
      ],
    },

    // Sketching of Graphs > Sketching graphs of function based on values of functio
    {
      pt_id: "FD_039",
      topic: "Further Differentiation and Applications",
      subtopic: "Second Derivatives",
      concept: "Sketching of Graphs",
      pt: "Sketching graphs of function based on values of function, derivatives, second derivatives from calculations",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_039_m01",
          q: "Sketch the graph of $f(x) = x^3 - 3x^2$ by finding all intercepts, stationary points (and their nature), and inflection points.",
          a: "$x$-int: $x = 0, 3$. $y$-int: $0$. $f'(x) = 3x^2 - 6x = 3x(x-2) = 0$ at $x = 0$ (local max, $y = 0$) and $x = 2$ (local min, $y = -4$). $f''(x) = 6x - 6 = 0$ at $x = 1$ (inflection at $(1, -2)$). Graph rises to $(0,0)$, falls to $(2,-4)$, then rises."
        },
      ],
      hard: [
      ],
    },

    // Sketching of Graphs > Sketching graphs of function based on values of functio
    {
      pt_id: "FD_040",
      topic: "Further Differentiation and Applications",
      subtopic: "Second Derivatives",
      concept: "Sketching of Graphs",
      pt: "Sketching graphs of function based on values of function, derivatives, second derivatives from given table",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_040_m01",
          q: "The following information is known about $f(x)$:\n- $f(0) = 2$, $f(3) = -1$, $f(5) = 4$\n- $f'(x) < 0$ for $0 < x < 3$, $f'(x) > 0$ for $x > 3$, $f'(3) = 0$\n- $f''(x) < 0$ for $x < 1$, $f''(x) > 0$ for $x > 1$\nSketch a possible graph of $f(x)$ for $x \\geq 0$.",
          a: "Starts at $(0, 2)$, decreasing and concave down until inflection near $x = 1$, continues decreasing but concave up, reaches minimum at $(3, -1)$, then increases through $(5, 4)$."
        },
      ],
      hard: [
      ],
    },

    // Basic Use of Small Increments Formula > Comparing incremental estimate to true value and explai
    {
      pt_id: "FD_041",
      topic: "Further Differentiation and Applications",
      subtopic: "Small Increments",
      concept: "Basic Use of Small Increments Formula",
      pt: "Comparing incremental estimate to true value and explaining limitation of linear approximation",
      testing: "",
      reason_bank: ["wrong_rule", "substitution_error", "sign_error", "algebra_slip", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_041_m01",
          q: "For $f(x) = x^3$, use the increments formula to estimate $f(2.1)$ and compare with the true value. Explain any difference.",
          a: "$f'(x) = 3x^2$. Estimate: $f(2.1) \\approx f(2) + 3(4)(0.1) = 8 + 1.2 = 9.2$. True value: $2.1^3 = 9.261$. The linear approximation underestimates because the function is concave up ($f'' > 0$), so the tangent line lies below the curve."
        },
      ],
      hard: [
      ],
    },

    // Basic Use of Small Increments Formula > Using increments formula to approximate change
    {
      pt_id: "FD_042",
      topic: "Further Differentiation and Applications",
      subtopic: "Small Increments",
      concept: "Basic Use of Small Increments Formula",
      pt: "Using increments formula to approximate change",
      testing: "$\\delta y \\approx \\frac{dy}{dx} \\cdot \\delta x$",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "FD_042_m01",
          q: "Use the increments formula to approximate the change in the area of a circle when the radius increases from 5 cm to 5.02 cm.",
          a: "$A = \\pi r^2$, $\\frac{dA}{dr} = 2\\pi r$. At $r = 5$: $\\frac{dA}{dr} = 10\\pi$. $\\delta A \\approx 10\\pi \\times 0.02 = 0.2\\pi \\approx 0.628$ cm²."
        },
        {
          qid: "FD_042_m02",
          q: "If $f(x) = \\sqrt{x}$, use the increments formula to approximate $\\sqrt{36.5}$.",
          a: "$f'(x) = \\frac{1}{2\\sqrt{x}}$. At $x = 36$: $f(36) = 6$, $f'(36) = \\frac{1}{12}$. $f(36.5) \\approx 6 + \\frac{1}{12}(0.5) = 6.0417$"
        },
      ],
      hard: [
      ],
    },

    // Chain Rule (Reverse) > Evaluating definite integral of composite polynomial fu
    {
      pt_id: "IN_001",
      topic: "Integrals",
      subtopic: "Anti-differentiation",
      concept: "Chain Rule (Reverse)",
      pt: "Evaluating definite integral of composite polynomial function using reverse chain rule",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_001_m01",
          q: "Evaluate $\\int_0^1 3x^2(x^3 + 1)^4 dx$.",
          a: "Let $u = x^3 + 1$, $du = 3x^2 dx$. When $x=0$, $u=1$; $x=1$, $u=2$. $\\int_1^2 u^4 du = \\left[\\frac{u^5}{5}\\right]_1^2 = \\frac{32-1}{5} = \\frac{31}{5}$"
        },
      ],
      hard: [
      ],
    },

    // Chain Rule (Reverse) > Reverse chain rule integration from prior derivative (h
    {
      pt_id: "IN_002",
      topic: "Integrals",
      subtopic: "Anti-differentiation",
      concept: "Chain Rule (Reverse)",
      pt: "Reverse chain rule integration from prior derivative (hence integrate)",
      testing: "Testing: Use a derivative result to \"hence\" find an integral",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_002_m01",
          q: "Given that $\\frac{d}{dx}[x\\sin(x)] = \\sin(x) + x\\cos(x)$, hence find $\\int x\\cos(x) dx$.",
          a: "$\\int [\\sin(x) + x\\cos(x)] dx = x\\sin(x) + C$. So $\\int x\\cos(x) dx = x\\sin(x) - \\int \\sin(x) dx = x\\sin(x) + \\cos(x) + C$.\nAlternatively: rearranging the derivative identity directly: $\\int x\\cos(x) dx = x\\sin(x) - \\int \\sin(x) dx = x\\sin(x) + \\cos(x) + C$"
        },
      ],
      hard: [
      ],
    },

    // Differentiation (then Integrate) > Differentiate a function; integrate the resulting ident
    {
      pt_id: "IN_003",
      topic: "Integrals",
      subtopic: "Anti-differentiation",
      concept: "Differentiation (then Integrate)",
      pt: "Differentiate a function; integrate the resulting identity to hence find the antiderivative",
      testing: "",
      reason_bank: ["wrong_rule", "sign_error", "missing_chain_factor", "algebra_slip", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_003_m01",
          q: "(a) Differentiate $y = x^2 e^x$. (b) Hence find $\\int x^2 e^x dx$.",
          a: "(a) $y' = 2xe^x + x^2e^x = e^x(x^2 + 2x)$. (b) $\\int e^x(x^2 + 2x) dx = x^2 e^x + C$, so $\\int x^2 e^x dx = x^2 e^x - \\int 2xe^x dx = x^2 e^x - 2xe^x + 2e^x + C = e^x(x^2 - 2x + 2) + C$"
        },
      ],
      hard: [
      ],
    },

    // Integration Techniques > Anti-differentiation with initial condition
    {
      pt_id: "IN_004",
      topic: "Integrals",
      subtopic: "Anti-differentiation",
      concept: "Integration Techniques",
      pt: "Anti-differentiation with initial condition",
      testing: "Testing: Integrate then use given point to find C",
      reason_bank: ["wrong_rule", "sign_error", "missing_chain_factor", "algebra_slip", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_004_m01",
          q: "Given $f'(x) = 3x^2 - 4x + 1$ and $f(1) = 5$, find $f(x)$.",
          a: "$f(x) = x^3 - 2x^2 + x + C$. $f(1) = 1 - 2 + 1 + C = 5 \\Rightarrow C = 5$. $f(x) = x^3 - 2x^2 + x + 5$"
        },
        {
          qid: "IN_004_m02",
          q: "Given $\\frac{dy}{dx} = 4e^{2x}$ and $y = 3$ when $x = 0$, find $y$.",
          a: "$y = 2e^{2x} + C$. $3 = 2e^0 + C \\Rightarrow C = 1$. $y = 2e^{2x} + 1$"
        },
      ],
      hard: [
      ],
    },

    // Integration Techniques > Integrating $f'(x)/f(x)$ form with trigonometric functi
    {
      pt_id: "IN_005",
      topic: "Integrals",
      subtopic: "Anti-differentiation",
      concept: "Integration Techniques",
      pt: "Integrating $f'(x)/f(x)$ form with trigonometric functions",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_005_m01",
          q: "Find $\\int \\frac{\\cos(x)}{\\sin(x)} dx$.",
          a: "$\\ln|\\sin(x)| + C$"
        },
        {
          qid: "IN_005_m02",
          q: "Find $\\int \\frac{\\sin(x)}{1 + \\cos(x)} dx$.",
          a: "$= -\\int \\frac{-\\sin(x)}{1+\\cos(x)} dx = -\\ln|1+\\cos(x)| + C$"
        },
      ],
      hard: [
      ],
    },

    // Integration Techniques > Solving for parameter using integration and percentage 
    {
      pt_id: "IN_006",
      topic: "Integrals",
      subtopic: "Anti-differentiation",
      concept: "Integration Techniques",
      pt: "Solving for parameter using integration and percentage condition",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_006_m01",
          q: "The probability density function $f(x) = kx^2$ for $0 \\leq x \\leq 3$. Find $k$.",
          a: "$\\int_0^3 kx^2 dx = 1 \\Rightarrow k\\left[\\frac{x^3}{3}\\right]_0^3 = 1 \\Rightarrow 9k = 1 \\Rightarrow k = \\frac{1}{9}$"
        },
      ],
      hard: [
      ],
    },

    // Area Calculations > Calculating area between curve and line using integrati
    {
      pt_id: "IN_007",
      topic: "Integrals",
      subtopic: "Applications of Integration",
      concept: "Area Calculations",
      pt: "Calculating area between curve and line using integration",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_007_m01",
          q: "Find the area enclosed between $y = x^2$ and $y = 2x$.",
          a: "Intersection: $x^2 = 2x \\Rightarrow x(x-2) = 0$, so $x = 0, 2$. Area $= \\int_0^2 (2x - x^2) dx = [x^2 - \\frac{x^3}{3}]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$"
        },
      ],
      hard: [
      ],
    },

    // Area Calculations > Calculating area between two curves by splitting at int
    {
      pt_id: "IN_008",
      topic: "Integrals",
      subtopic: "Applications of Integration",
      concept: "Area Calculations",
      pt: "Calculating area between two curves by splitting at intersection point",
      testing: "",
      reason_bank: ["setup_error", "sign_error", "wrong_rule", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_008_m01",
          q: "Find the area between $y = x$ and $y = x^2 - 2$ for $-1 \\leq x \\leq 2$.",
          a: "Intersection: $x = x^2 - 2 \\Rightarrow x^2 - x - 2 = 0 \\Rightarrow (x-2)(x+1) = 0$, so $x = -1, 2$. For $-1 < x < 2$: $x > x^2 - 2$. Area $= \\int_{-1}^{2} [x - (x^2 - 2)] dx = \\int_{-1}^{2} (-x^2 + x + 2) dx = [-\\frac{x^3}{3} + \\frac{x^2}{2} + 2x]_{-1}^{2} = \\frac{10}{3} + \\frac{7}{6} = \\frac{9}{2}$"
        },
      ],
      hard: [
      ],
    },

    // Area Calculations > Calculating area bounded by curve, x-axis, and vertical
    {
      pt_id: "IN_009",
      topic: "Integrals",
      subtopic: "Applications of Integration",
      concept: "Area Calculations",
      pt: "Calculating area bounded by curve, x-axis, and vertical lines using definite integral",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_009_m01",
          q: "Find the area bounded by $y = x^2 - 4$, the $x$-axis, $x = 0$ and $x = 3$.",
          a: "$y = 0$ at $x = 2$. Area $= \\left|\\int_0^2 (x^2-4) dx\\right| + \\int_2^3 (x^2-4) dx = \\left|\\left[\\frac{x^3}{3}-4x\\right]_0^2\\right| + \\left[\\frac{x^3}{3}-4x\\right]_2^3 = \\left|-\\frac{16}{3}\\right| + \\frac{-3-(-\\frac{16}{3})}{1} = \\frac{16}{3} + \\frac{7}{3} = \\frac{23}{3}$"
        },
      ],
      hard: [
      ],
    },

    // Area Calculations > Solving for upper limit k when definite integral equals
    {
      pt_id: "IN_010",
      topic: "Integrals",
      subtopic: "Applications of Integration",
      concept: "Area Calculations",
      pt: "Solving for upper limit k when definite integral equals given value",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_010_m01",
          q: "Find $k > 0$ such that $\\int_0^k 2x dx = 18$.",
          a: "$[x^2]_0^k = k^2 = 18 \\Rightarrow k = 3\\sqrt{2}$"
        },
      ],
      hard: [
      ],
    },

    // Calculates Total Change from Rate of Change > Calculates total change from rate of change
    {
      pt_id: "IN_011",
      topic: "Integrals",
      subtopic: "Applications of Integration",
      concept: "Calculates Total Change from Rate of Change",
      pt: "Calculates total change from rate of change",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_011_m01",
          q: "Water flows into a tank at a rate of $R(t) = 4t - t^2$ L/min for $0 \\leq t \\leq 4$. Find the total volume that enters the tank.",
          a: "$V = \\int_0^4 (4t - t^2) dt = [2t^2 - \\frac{t^3}{3}]_0^4 = 32 - \\frac{64}{3} = \\frac{32}{3} \\approx 10.67$ L"
        },
      ],
      hard: [
      ],
    },

    // Calculates Total Change from Rate of Change > Calculates total change from rate of change with initia
    {
      pt_id: "IN_012",
      topic: "Integrals",
      subtopic: "Applications of Integration",
      concept: "Calculates Total Change from Rate of Change",
      pt: "Calculates total change from rate of change with initial condition",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_012_m01",
          q: "A population changes at rate $\\frac{dP}{dt} = 100e^{0.02t}$. If $P(0) = 5000$, find $P(10)$.",
          a: "$P(10) = 5000 + \\int_0^{10} 100e^{0.02t} dt = 5000 + [5000e^{0.02t}]_0^{10} = 5000 + 5000(e^{0.2} - 1) = 5000e^{0.2} \\approx 6107$"
        },
      ],
      hard: [
      ],
    },

    // Volume Calculations > Calculating volume using integration
    {
      pt_id: "IN_013",
      topic: "Integrals",
      subtopic: "Applications of Integration",
      concept: "Volume Calculations",
      pt: "Calculating volume using integration",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_013_m01",
          q: "Find the volume of the solid formed when $y = \\sqrt{x}$ for $0 \\leq x \\leq 4$ is rotated about the $x$-axis.",
          a: "$V = \\pi \\int_0^4 (\\sqrt{x})^2 dx = \\pi \\int_0^4 x dx = \\pi [\\frac{x^2}{2}]_0^4 = 8\\pi$"
        },
        {
          qid: "IN_013_m02",
          q: "Find the volume when $y = e^x$ for $0 \\leq x \\leq 1$ is rotated about the $x$-axis.",
          a: "$V = \\pi \\int_0^1 e^{2x} dx = \\pi [\\frac{e^{2x}}{2}]_0^1 = \\frac{\\pi(e^2 - 1)}{2}$"
        },
      ],
      hard: [
      ],
    },

    // Area Calculations (from graphs) > Evaluating definite integral using geometric area of ci
    {
      pt_id: "IN_014",
      topic: "Integrals",
      subtopic: "Definite Integrals",
      concept: "Area Calculations (from graphs)",
      pt: "Evaluating definite integral using geometric area of circular segments",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_014_m01",
          q: "The graph of $f(x) = \\sqrt{9 - x^2}$ is a semicircle of radius 3. Find $\\int_0^3 f(x) dx$.",
          a: "This is a quarter circle of radius 3. Area $= \\frac{1}{4}\\pi(3)^2 = \\frac{9\\pi}{4}$"
        },
      ],
      hard: [
      ],
    },

    // Area Calculations (from graphs) > Evaluating definite integral using signed areas from gr
    {
      pt_id: "IN_015",
      topic: "Integrals",
      subtopic: "Definite Integrals",
      concept: "Area Calculations (from graphs)",
      pt: "Evaluating definite integral using signed areas from graph",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_015_m01",
          q: "The graph of $f(x)$ encloses an area of 6 units² above the $x$-axis between $x = 0$ and $x = 3$, and an area of 2 units² below the $x$-axis between $x = 3$ and $x = 5$. Find $\\int_0^5 f(x) dx$.",
          a: "$\\int_0^5 f(x) dx = 6 + (-2) = 4$"
        },
        {
          qid: "IN_015_m02",
          q: "From a graph, $\\int_0^4 f(x) dx = 7$ and $\\int_0^2 f(x) dx = 3$. Find $\\int_2^4 f(x) dx$.",
          a: "$\\int_2^4 f(x) dx = 7 - 3 = 4$"
        },
      ],
      hard: [
      ],
    },

    // Area Calculations (from graphs) > Finding upper limit where definite integral equals zero
    {
      pt_id: "IN_016",
      topic: "Integrals",
      subtopic: "Definite Integrals",
      concept: "Area Calculations (from graphs)",
      pt: "Finding upper limit where definite integral equals zero using signed areas",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_016_m01",
          q: "Given the graph of $f(x)$ where $\\int_0^3 f(x) dx = 5$ and $f(x) < 0$ for $x > 3$ with $f(x) = -(x - 3)$ for $x > 3$, find $k > 3$ such that $\\int_0^k f(x) dx = 0$.",
          a: "$\\int_3^k -(x-3) dx = -\\frac{(k-3)^2}{2}$. Need $5 - \\frac{(k-3)^2}{2} = 0 \\Rightarrow (k-3)^2 = 10 \\Rightarrow k = 3 + \\sqrt{10}$"
        },
      ],
      hard: [
      ],
    },

    // General/Other > Evaluating definite integral of transformed function us
    {
      pt_id: "IN_017",
      topic: "Integrals",
      subtopic: "Definite Integrals",
      concept: "General/Other",
      pt: "Evaluating definite integral of transformed function using linearity",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_017_m01",
          q: "Given $\\int_0^3 f(x) dx = 8$, find $\\int_0^3 [2f(x) + 3] dx$.",
          a: "$= 2\\int_0^3 f(x) dx + \\int_0^3 3 dx = 2(8) + 3(3) = 16 + 9 = 25$"
        },
        {
          qid: "IN_017_m02",
          q: "Given $\\int_1^5 f(x) dx = 10$ and $\\int_1^5 g(x) dx = 4$, find $\\int_1^5 [3f(x) - 2g(x)] dx$.",
          a: "$= 3(10) - 2(4) = 30 - 8 = 22$"
        },
      ],
      hard: [
      ],
    },

    // Graph Sketching > Shading region on graph corresponding to a given defini
    {
      pt_id: "IN_018",
      topic: "Integrals",
      subtopic: "Definite Integrals",
      concept: "Graph Sketching",
      pt: "Shading region on graph corresponding to a given definite integral",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_018_m01",
          q: "On a sketch of $y = x^2$, shade the region that represents $\\int_1^3 x^2 dx$.",
          a: "Shade the area between the curve $y = x^2$, the $x$-axis, and the vertical lines $x = 1$ and $x = 3$."
        },
      ],
      hard: [
      ],
    },

    // Numerical Integration > Bounding a definite integral using upper and lower rect
    {
      pt_id: "IN_019",
      topic: "Integrals",
      subtopic: "Definite Integrals",
      concept: "Numerical Integration",
      pt: "Bounding a definite integral using upper and lower rectangle sums with explanation",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_019_m01",
          q: "Using strips of width 1, find the upper and lower rectangle sums for $\\int_1^4 \\frac{1}{x} dx$.",
          a: "For decreasing $f(x) = \\frac{1}{x}$: Lower sum (right endpoints) $= 1 \\cdot (\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4}) = \\frac{13}{12}$. Upper sum (left endpoints) $= 1 \\cdot (1 + \\frac{1}{2} + \\frac{1}{3}) = \\frac{11}{6}$."
        },
      ],
      hard: [
      ],
    },

    // Numerical Integration > Estimating integral using average of upper and lower re
    {
      pt_id: "IN_020",
      topic: "Integrals",
      subtopic: "Definite Integrals",
      concept: "Numerical Integration",
      pt: "Estimating integral using average of upper and lower rectangle sums",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_020_m01",
          q: "Given upper sum = 2.8 and lower sum = 2.2 for $\\int_a^b f(x) dx$, estimate the integral.",
          a: "Estimate $= \\frac{2.8 + 2.2}{2} = 2.5$"
        },
      ],
      hard: [
      ],
    },

    // Numerical Integration > Suggesting methods to improve rectangle approximation o
    {
      pt_id: "IN_021",
      topic: "Integrals",
      subtopic: "Definite Integrals",
      concept: "Numerical Integration",
      pt: "Suggesting methods to improve rectangle approximation of area",
      testing: "",
      reason_bank: ["setup_error", "sign_error", "wrong_rule", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_021_m01",
          q: "A student used 4 rectangles to approximate $\\int_0^2 x^2 dx$. Suggest how they could improve their approximation.",
          a: "Increase the number of rectangles (use narrower strips), or use the trapezoidal rule instead of rectangles for a better approximation."
        },
      ],
      hard: [
      ],
    },

    // Differentiating Integrals > Differentiating integral with variable bound using fund
    {
      pt_id: "IN_022",
      topic: "Integrals",
      subtopic: "Fundamental Theorem",
      concept: "Differentiating Integrals",
      pt: "Differentiating integral with variable bound using fundamental theorem",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_022_m01",
          q: "Find $\\frac{d}{dx} \\int_0^x \\sin(t^2) dt$.",
          a: "$\\sin(x^2)$ (by the fundamental theorem)"
        },
        {
          qid: "IN_022_m02",
          q: "Find $\\frac{d}{dx} \\int_0^{x^2} e^t dt$.",
          a: "$= e^{x^2} \\cdot 2x = 2xe^{x^2}$ (chain rule with FTC)"
        },
      ],
      hard: [
      ],
    },

    // Fundamental Theorem > Applying fundamental theorem of calculus
    {
      pt_id: "IN_023",
      topic: "Integrals",
      subtopic: "Fundamental Theorem",
      concept: "Fundamental Theorem",
      pt: "Applying fundamental theorem of calculus",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_023_m01",
          q: "Evaluate $\\int_1^4 (2x - 3) dx$.",
          a: "$= [x^2 - 3x]_1^4 = (16 - 12) - (1 - 3) = 4 + 2 = 6$"
        },
        {
          qid: "IN_023_m02",
          q: "Evaluate $\\int_0^{\\pi/2} \\cos(x) dx$.",
          a: "$= [\\sin(x)]_0^{\\pi/2} = 1 - 0 = 1$"
        },
      ],
      hard: [
      ],
    },

    // Fundamental Theorem > Applying fundamental theorem to evaluate integral of de
    {
      pt_id: "IN_024",
      topic: "Integrals",
      subtopic: "Fundamental Theorem",
      concept: "Fundamental Theorem",
      pt: "Applying fundamental theorem to evaluate integral of derivative",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_024_m01",
          q: "Given $f'(x) = 3x^2 - 1$ and $f(1) = 4$, find $f(3)$.",
          a: "$f(3) = f(1) + \\int_1^3 f'(x) dx = 4 + [x^3 - x]_1^3 = 4 + (24 - 0) = 28$"
        },
      ],
      hard: [
      ],
    },

    // Fundamental Theorem > Evaluating definite integral using linearity and interv
    {
      pt_id: "IN_025",
      topic: "Integrals",
      subtopic: "Fundamental Theorem",
      concept: "Fundamental Theorem",
      pt: "Evaluating definite integral using linearity and interval properties",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_025_m01",
          q: "Given $\\int_0^5 f(x) dx = 12$ and $\\int_0^2 f(x) dx = 5$, find $\\int_2^5 f(x) dx$.",
          a: "$\\int_2^5 f(x) dx = \\int_0^5 f(x) dx - \\int_0^2 f(x) dx = 12 - 5 = 7$"
        },
      ],
      hard: [
      ],
    },

    // Fundamental Theorem > Finding maximum of accumulation function using $F'(x) =
    {
      pt_id: "IN_026",
      topic: "Integrals",
      subtopic: "Fundamental Theorem",
      concept: "Fundamental Theorem",
      pt: "Finding maximum of accumulation function using $F'(x) = f(x)$",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_026_m01",
          q: "Let $F(x) = \\int_0^x (4 - t^2) dt$. Find the value of $x$ where $F(x)$ is maximised.",
          a: "$F'(x) = 4 - x^2 = 0 \\Rightarrow x = 2$ (taking positive value). $F''(x) = -2x$, so $F''(2) = -4 < 0$ (max). Maximum at $x = 2$."
        },
      ],
      hard: [
      ],
    },

    // Graph Sketching > Sketching accumulation function from graph of f
    {
      pt_id: "IN_027",
      topic: "Integrals",
      subtopic: "Fundamental Theorem",
      concept: "Graph Sketching",
      pt: "Sketching accumulation function from graph of f",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "IN_027_m01",
          q: "Given that $f(x) > 0$ for $0 < x < 3$, $f(x) < 0$ for $x > 3$, and $f(3) = 0$, describe the shape of $A(x) = \\int_0^x f(t) dt$.",
          a: "$A(x)$ is increasing for $0 < x < 3$ (since $f > 0$), has a maximum at $x = 3$ (since $f(3) = 0$ and $f$ changes sign), and is decreasing for $x > 3$."
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

    // Kinematics Calculations > Evaluating acceleration at given value for t
    {
      pt_id: "KN_001",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Differentiation",
      concept: "Kinematics Calculations",
      pt: "Evaluating acceleration at given value for t",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_001_m01",
          q: "Given $v(t) = 6t^2 - 4t + 1$, find the acceleration at $t = 2$.",
          a: "$a(t) = v'(t) = 12t - 4$. $a(2) = 20$ m/s²"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Calculations > Evaluating displacement at given value for t
    {
      pt_id: "KN_002",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Differentiation",
      concept: "Kinematics Calculations",
      pt: "Evaluating displacement at given value for t",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_002_m01",
          q: "Given $x(t) = t^3 - 6t^2 + 9t + 2$, find the displacement at $t = 3$.",
          a: "$x(3) = 27 - 54 + 27 + 2 = 2$ units"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Calculations > Evaluating speed at given value for t
    {
      pt_id: "KN_003",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Differentiation",
      concept: "Kinematics Calculations",
      pt: "Evaluating speed at given value for t",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_003_m01",
          q: "Given $v(t) = t^2 - 5t + 4$, find the speed at $t = 3$.",
          a: "$v(3) = 9 - 15 + 4 = -2$ m/s. Speed $= |v(3)| = 2$ m/s."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Calculations > Evaluating velocity at given value for t
    {
      pt_id: "KN_004",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Differentiation",
      concept: "Kinematics Calculations",
      pt: "Evaluating velocity at given value for t",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_004_m01",
          q: "Given $x(t) = 4t - t^2$, find the velocity at $t = 1$.",
          a: "$v(t) = x'(t) = 4 - 2t$. $v(1) = 2$ m/s"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Differentiation > Determining speeding up or slowing down from signs of v
    {
      pt_id: "KN_005",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Differentiation",
      concept: "Kinematics Differentiation",
      pt: "Determining speeding up or slowing down from signs of velocity and acceleration",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_005_m01",
          q: "At time $t = 2$, $v(2) = -3$ m/s and $a(2) = -5$ m/s². Is the particle speeding up or slowing down?",
          a: "Since $v$ and $a$ have the same sign (both negative), the particle is **speeding up** (speed is increasing)."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Differentiation > Finding acceleration function by differentiating veloci
    {
      pt_id: "KN_006",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Differentiation",
      concept: "Kinematics Differentiation",
      pt: "Finding acceleration function by differentiating velocity function",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_006_m01",
          q: "Given $v(t) = 5\\sin(2t)$, find the acceleration function.",
          a: "$a(t) = v'(t) = 10\\cos(2t)$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Differentiation > Finding maximum/minimum displacement or velocity using 
    {
      pt_id: "KN_007",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Differentiation",
      concept: "Kinematics Differentiation",
      pt: "Finding maximum/minimum displacement or velocity using calculus",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_007_m01",
          q: "A particle has velocity $v(t) = 6t - t^2$ for $t \\geq 0$. Find the maximum velocity.",
          a: "$a(t) = 6 - 2t = 0 \\Rightarrow t = 3$. $a'(t) = -2 < 0$ (max). $v_{max} = v(3) = 18 - 9 = 9$ m/s."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Differentiation > Finding velocity function by differentiating displaceme
    {
      pt_id: "KN_008",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Differentiation",
      concept: "Kinematics Differentiation",
      pt: "Finding velocity function by differentiating displacement function",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_008_m01",
          q: "A particle's displacement is $x(t) = 3t^2 - 2t + 5$. Find the velocity function.",
          a: "$v(t) = x'(t) = 6t - 2$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Differentiation > Finding when displacement function has stationary point
    {
      pt_id: "KN_009",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Differentiation",
      concept: "Kinematics Differentiation",
      pt: "Finding when displacement function has stationary point (velocity = 0)",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_009_m01",
          q: "Given $x(t) = t^3 - 12t + 5$, find when the particle is momentarily at rest.",
          a: "$v(t) = 3t^2 - 12 = 0 \\Rightarrow t^2 = 4 \\Rightarrow t = 2$ (taking $t > 0$)"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Differentiation > Finding when velocity function has stationary point (ac
    {
      pt_id: "KN_010",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Differentiation",
      concept: "Kinematics Differentiation",
      pt: "Finding when velocity function has stationary point (acceleration = 0)",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "interpretation_mixup", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_010_m01",
          q: "Given $v(t) = t^3 - 6t^2 + 9t$, find when acceleration is zero.",
          a: "$a(t) = 3t^2 - 12t + 9 = 3(t-1)(t-3) = 0$. So $t = 1$ and $t = 3$."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Differentiation > Interpreting acceleration graph to describe velocity be
    {
      pt_id: "KN_011",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Differentiation",
      concept: "Kinematics Differentiation",
      pt: "Interpreting acceleration graph to describe velocity behaviour",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_011_m01",
          q: "An acceleration-time graph shows $a(t) > 0$ for $0 < t < 3$ and $a(t) < 0$ for $t > 3$. If $v(0) = 0$, describe the velocity behaviour.",
          a: "Velocity increases from 0 for $0 < t < 3$ (since $a > 0$), reaches its maximum at $t = 3$, then decreases for $t > 3$ (since $a < 0$)."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Anti-differentiating $e^{ax}$ with initial condition to
    {
      pt_id: "KN_012",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Anti-differentiating $e^{ax}$ with initial condition to find function value",
      testing: "",
      reason_bank: ["wrong_rule", "sign_error", "missing_chain_factor", "algebra_slip", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_012_m01",
          q: "Given $f'(x) = 4e^{-2x}$ and $f(0) = 1$, find $f(1)$.",
          a: "$f(x) = -2e^{-2x} + C$. $f(0) = -2 + C = 1 \\Rightarrow C = 3$. $f(1) = -2e^{-2} + 3 \\approx 2.729$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Anti-differentiating polynomial
    {
      pt_id: "KN_013",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Anti-differentiating polynomial",
      testing: "",
      reason_bank: ["wrong_rule", "sign_error", "missing_chain_factor", "algebra_slip", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_013_m01",
          q: "Find $\\int (6x^2 - 4x + 3) dx$.",
          a: "$2x^3 - 2x^2 + 3x + C$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Anti-differentiating trigonometric function with linear
    {
      pt_id: "KN_014",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Anti-differentiating trigonometric function with linear argument and initial condition",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_014_m01",
          q: "Given $f'(x) = 3\\cos(2x)$ and $f(0) = 5$, find $f(x)$.",
          a: "$f(x) = \\frac{3}{2}\\sin(2x) + C$. $f(0) = 0 + C = 5$, so $C = 5$. $f(x) = \\frac{3}{2}\\sin(2x) + 5$."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Assessing appropriateness of normal model from histogra
    {
      pt_id: "KN_015",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Assessing appropriateness of normal model from histogram shape",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_015_m01",
          q: "A histogram of test scores shows a strong right skew. Is a normal distribution appropriate? Explain.",
          a: "No. The normal distribution is symmetric and bell-shaped. A right-skewed distribution has a longer tail to the right, so the normal model would be a poor fit. It would underestimate probabilities in the right tail and overestimate near the mode."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Assessing normality of sampling distribution
    {
      pt_id: "KN_016",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Assessing normality of sampling distribution",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_016_m01",
          q: "$n = 15$ and $\\hat{p} = 0.1$. Can we use the normal approximation for $\\hat{P}$? Explain.",
          a: "$n\\hat{p} = 15 \\times 0.1 = 1.5 < 10$. The condition $n\\hat{p} \\geq 10$ is not met, so the normal approximation is **not** appropriate. The sample size is too small relative to how rare the event is."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Calculating P(a ≤ X ≤ b) from CDF
    {
      pt_id: "KN_017",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Calculating P(a ≤ X ≤ b) from CDF",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_017_m01",
          q: "Using the CDF above, find $P(2 \\leq X \\leq 3)$.",
          a: "$P(2 \\leq X \\leq 3) = F(3) - F(1) = 0.85 - 0.20 = 0.65$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Calculating area bounded by derivative curve and x-axis
    {
      pt_id: "KN_018",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Calculating area bounded by derivative curve and x-axis using absolute value",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_018_m01",
          q: "The derivative of $f(x)$ is $f'(x) = x^2 - 1$ for $0 \\leq x \\leq 2$. Find the area between $y = f'(x)$ and the $x$-axis.",
          a: "$f'(x) = 0$ at $x = 1$. Area $= \\left|\\int_0^1 (x^2-1) dx\\right| + \\int_1^2 (x^2-1) dx = \\frac{2}{3} + \\frac{4}{3} = 2$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Calculating area under curve using definite integral wi
    {
      pt_id: "KN_019",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Calculating area under curve using definite integral with ln function",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_019_m01",
          q: "Find the area under $y = \\frac1x$ from $x = 1$ to $x = e^2$.",
          a: "$\\int_1^{e^2} \\frac{1}{x} dx = [\\ln(x)]_1^{e^2} = 2 - 0 = 2$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Calculating average speed over a time interval
    {
      pt_id: "KN_020",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Calculating average speed over a time interval",
      testing: "Average speed = total distance travelled / time",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_020_m01",
          q: "A particle has velocity $v(t) = 2t - 4$ m/s. Find the average speed over $0 \\leq t \\leq 6$.",
          a: "$v = 0$ when $t = 2$. Distance $= \\left|\\int_0^2 (2t-4)dt\\right| + \\int_2^6 (2t-4)dt = |-4| + 16 = 20$ m. Average speed $= \\frac{20}{6} = \\frac{10}{3} \\approx 3.33$ m/s."
        },
        {
          qid: "KN_020_m02",
          q: "A particle has velocity $v(t) = t^2 - 4t + 3$ m/s. Find the average speed over $0 \\leq t \\leq 4$.",
          a: "$v = 0$ at $t = 1, 3$. Distance $= \\left|\\int_0^1 v\\,dt\\right| + \\left|\\int_1^3 v\\,dt\\right| + \\int_3^4 v\\,dt = \\frac{4}{3} + \\frac{4}{3} + \\frac{4}{3} = 4$ m. Average speed $= \\frac{4}{4} = 1$ m/s."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Calculating average velocity over a time interval
    {
      pt_id: "KN_021",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Calculating average velocity over a time interval",
      testing: "Average velocity = change in displacement / change in time",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_021_m01",
          q: "A particle has displacement $x(t) = t^3 - 6t$ metres. Find the average velocity over the interval $1 \\leq t \\leq 3$.",
          a: "$x(3) = 27-18 = 9$, $x(1) = 1-6 = -5$. Average velocity $= \\frac{x(3)-x(1)}{3-1} = \\frac{9-(-5)}{2} = 7$ m/s"
        },
        {
          qid: "KN_021_m02",
          q: "A particle has displacement $x(t) = 4\\sin(t)$ metres. Find the average velocity over $0 \\leq t \\leq \\pi$.",
          a: "$x(\\pi) = 0$, $x(0) = 0$. Average velocity $= \\frac{0-0}{\\pi} = 0$ m/s. (The particle returns to its starting position.)"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Calculating change in displacement between two specific
    {
      pt_id: "KN_022",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Calculating change in displacement between two specific times using displacement function",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_022_m01",
          q: "A particle has displacement $x(t) = 2t^2 - 5t + 1$ metres. Find the displacement during the 3rd second (i.e. from $t = 2$ to $t = 3$).",
          a: "$x(3) = 18 - 15 + 1 = 4$, $x(2) = 8 - 10 + 1 = -1$. Displacement $= 4 - (-1) = 5$ m."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Calculating complementary binomial probability
    {
      pt_id: "KN_023",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Calculating complementary binomial probability",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_023_m01",
          q: "$X \\sim \\text{Bin}(10, 0.3)$. Find $P(X \\geq 1)$.",
          a: "$P(X \\geq 1) = 1 - P(X = 0) = 1 - 0.7^{10} = 1 - 0.0282 \\approx 0.9718$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Calculating maximum margin of error for given sample si
    {
      pt_id: "KN_024",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Calculating maximum margin of error for given sample size and confidence level",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_024_m01",
          q: "For $n = 400$ and 95% confidence, find the maximum possible margin of error.",
          a: "Maximum ME occurs at $\\hat{p} = 0.5$: $ME = 1.96\\sqrt{\\frac{0.25}{400}} = 1.96 \\times 0.025 = 0.049$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Calculating probability from histogram by summing relat
    {
      pt_id: "KN_025",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Calculating probability from histogram by summing relative frequencies",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_025_m01",
          q: "From the histogram above, find $P(X \\geq 2)$.",
          a: "$P(X \\geq 2) = 0.5 + 0.2 = 0.7$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Calculating probability involving transformation of uni
    {
      pt_id: "KN_026",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Calculating probability involving transformation of uniform random variable",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_026_m01",
          q: "$X \\sim U(0, 4)$. Find $P(X^2 > 9)$.",
          a: "$X^2 > 9 \\Rightarrow X > 3$ (since $X \\geq 0$). $P(X > 3) = \\frac{4-3}{4-0} = \\frac{1}{4}$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Calculating probability of confidence interval coverage
    {
      pt_id: "KN_027",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Calculating probability of confidence interval coverage using binomial distribution",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_027_m01",
          q: "20 independent 90% confidence intervals are constructed. Find the probability that all 20 contain the true proportion.",
          a: "Each CI has 0.9 probability of covering. $P(\\text{all 20}) = 0.9^{20} \\approx 0.1216$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Calculating probability of independent events using mul
    {
      pt_id: "KN_028",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Calculating probability of independent events using multiplication rule (complement)",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_028_m01",
          q: "Two machines operate independently. Machine A fails with probability 0.05, Machine B with probability 0.08. Find the probability that at least one fails.",
          a: "$P(\\text{at least one}) = 1 - P(\\text{neither}) = 1 - (0.95)(0.92) = 1 - 0.874 = 0.126$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Calculating probability using geometric area from conti
    {
      pt_id: "KN_029",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Calculating probability using geometric area from continuous distribution",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_029_m01",
          q: "A pdf is triangular with $f(x) = x$ for $0 \\leq x \\leq 1$ and $f(x) = 2 - x$ for $1 < x \\leq 2$. Find $P(X > 1.5)$ using geometry.",
          a: "For $1.5 \\leq x \\leq 2$: this is a triangle with base $0.5$ and height $f(1.5) = 0.5$. Area $= \\frac{1}{2}(0.5)(0.5) = 0.125$."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Calculating total change in displacement between two va
    {
      pt_id: "KN_030",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Calculating total change in displacement between two values for t using integration of velocity",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_030_m01",
          q: "Given $v(t) = 3t^2 - 6t$, find the change in displacement from $t = 0$ to $t = 4$.",
          a: "$\\int_0^4 (3t^2 - 6t) dt = [t^3 - 3t^2]_0^4 = 64 - 48 = 16$ units"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Calculating total change in velocity using integration 
    {
      pt_id: "KN_031",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Calculating total change in velocity using integration of acceleration",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_031_m01",
          q: "Given $a(t) = 2\\cos(t)$, find the change in velocity from $t = 0$ to $t = \\frac{\\pi}{2}$.",
          a: "$\\Delta v = \\int_0^{\\pi/2} 2\\cos(t) dt = [2\\sin(t)]_0^{\\pi/2} = 2$ m/s"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Calculating total distance travelled using integration 
    {
      pt_id: "KN_032",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Calculating total distance travelled using integration of velocity",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_032_m01",
          q: "Given $v(t) = t^2 - 4$ for $0 \\leq t \\leq 3$. Find the total distance travelled.",
          a: "$v = 0$ at $t = 2$. Distance $= \\left|\\int_0^2 (t^2-4) dt\\right| + \\int_2^3 (t^2-4) dt = \\left|\\frac{8}{3} - 8\\right| + \\left(9 - 12 - \\frac{8}{3} + 8\\right) = \\frac{16}{3} + \\frac{7}{3} = \\frac{23}{3}$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Calculating variance of uniform distribution by integra
    {
      pt_id: "KN_033",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Calculating variance of uniform distribution by integration",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_033_m01",
          q: "Verify that $\\text{Var}(X) = \\frac{(b-a)^2}{12}$ for $X \\sim U(0, 6)$ using integration.",
          a: "$E(X) = \\int_0^6 \\frac{x}{6} dx = 3$. $E(X^2) = \\int_0^6 \\frac{x^2}{6} dx = 12$. $\\text{Var}(X) = 12 - 9 = 3$. Formula: $\\frac{(6-0)^2}{12} = 3$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Calculating volume by integration (finding bounds from 
    {
      pt_id: "KN_034",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Calculating volume by integration (finding bounds from curve equation)",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_034_m01",
          q: "Find the volume when $y = 4 - x^2$ (for $y \\geq 0$) is rotated about the $x$-axis.",
          a: "$y = 0$ when $x = \\pm 2$. $V = \\pi\\int_{-2}^{2} (4-x^2)^2 dx = \\pi\\int_{-2}^{2} (16 - 8x^2 + x^4) dx = \\pi[16x - \\frac{8x^3}{3} + \\frac{x^5}{5}]_{-2}^{2} = \\frac{512\\pi}{15}$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Completing cumulative distribution table
    {
      pt_id: "KN_035",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Completing cumulative distribution table",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_035_m01",
          q: "Given:\n| $x$ | 1 | 2 | 3 | 4 |\n|-----|---|---|---|---|\n| $P(X=x)$ | 0.2 | 0.3 | 0.35 | 0.15 |\nComplete the CDF table.",
          a: ""
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Completing probability distribution table for sum of tw
    {
      pt_id: "KN_036",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Completing probability distribution table for sum of two dice",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_036_m01",
          q: "Two fair dice are rolled. Let $X$ be the sum. Find $P(X = 7)$ and $P(X = 11)$.",
          a: "$P(X=7) = \\frac{6}{36} = \\frac{1}{6}$ (ways: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1). $P(X=11) = \\frac{2}{36} = \\frac{1}{18}$ (ways: 5+6, 6+5)."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Completing table of function values for rectangle appro
    {
      pt_id: "KN_037",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Completing table of function values for rectangle approximation",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_037_m01",
          q: "Complete the table for $f(x) = \\frac{1}{x+1}$ to approximate $\\int_0^4 f(x) dx$ using 4 rectangles of width 1:\n| $x$ | 0 | 1 | 2 | 3 | 4 |\n|-----|---|---|---|---|---|\n| $f(x)$ | ? | ? | ? | ? | ? |",
          a: "$f(0) = 1$, $f(1) = \\frac{1}{2}$, $f(2) = \\frac{1}{3}$, $f(3) = \\frac{1}{4}$, $f(4) = \\frac{1}{5}$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Constructing sample space table for sum of discrete ran
    {
      pt_id: "KN_038",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Constructing sample space table for sum of discrete random variables",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_038_m01",
          q: "$X$ takes values 1, 2 and $Y$ takes values 1, 2, 3. Both are uniform. Construct the sample space table for $S = X + Y$.",
          a: ""
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Converting confidence interval for proportion to range 
    {
      pt_id: "KN_039",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Converting confidence interval for proportion to range for expected count",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_039_m01",
          q: "A 95% CI for the proportion of defective items is $(0.03, 0.07)$. In a batch of 500, how many defective items would you expect?",
          a: "Expected count range: $500 \\times 0.03 = 15$ to $500 \\times 0.07 = 35$ defective items."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Describing systematic sampling method and suggesting ra
    {
      pt_id: "KN_040",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Describing systematic sampling method and suggesting random alternative",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_040_m01",
          q: "A factory produces 5000 items per day. Describe how to select a systematic sample of 100 items. What is one advantage over simple random sampling?",
          a: "Calculate interval: $k = 5000/100 = 50$. Randomly select a starting item between 1 and 50, then select every 50th item. Advantage: it spreads the sample evenly across the production run, capturing any time-dependent variation (e.g. machine warm-up effects) that simple random sampling might miss."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Determining confidence level from given confidence inte
    {
      pt_id: "KN_041",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Determining confidence level from given confidence interval",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_041_m01",
          q: "A sample gives $\\hatp = 0.4$, $n = 100$. The CI is $(0.3265, 0.4735)$. What confidence level was used?",
          a: "$ME = 0.4735 - 0.4 = 0.0735$. $SE = \\sqrt{\\frac{0.4 \\times 0.6}{100}} = 0.04899$. $z = \\frac{0.0735}{0.04899} \\approx 1.50$. From $z$-tables, $P(-1.5 < Z < 1.5) \\approx 0.8664$. The confidence level is approximately $86.6\\%$."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Determining count from sample proportion given standard
    {
      pt_id: "KN_042",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Determining count from sample proportion given standard deviations from mean",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_042_m01",
          q: "$\\hat{P} \\sim N(0.6, \\sigma^2)$ where $\\sigma = 0.03$. In a sample of $n = 200$, how many successes correspond to $\\hat{p}$ being 2 SDs above the mean?",
          a: "$\\hat{p} = 0.6 + 2(0.03) = 0.66$. Count $= 200 \\times 0.66 = 132$."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Determining function from integral equation using funda
    {
      pt_id: "KN_043",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Determining function from integral equation using fundamental theorem and solving ODE",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_043_m01",
          q: "If $F(x) = \\int_0^x (3t^2 - 2) dt + 5$, find $F(2)$.",
          a: "$F(2) = [t^3 - 2t]_0^2 + 5 = (8-4) + 5 = 9$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Determining parameters of linear transformation from gi
    {
      pt_id: "KN_044",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Determining parameters of linear transformation from given distribution properties",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_044_m01",
          q: "$X$ has mean 10 and SD 3. Find $a$ and $b$ so that $Y = aX + b$ has mean 0 and SD 1.",
          a: "$E(Y) = aE(X) + b = 10a + b = 0$ and $\\text{SD}(Y) = |a| \\cdot \\text{SD}(X) = 3a = 1$ (taking $a > 0$). So $a = \\frac{1}{3}$ and $b = -\\frac{10}{3}$. ($Y = \\frac{X - 10}{3}$, the standardisation formula.)"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Determining parameters of logarithmic model from initia
    {
      pt_id: "KN_045",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Determining parameters of logarithmic model from initial conditions",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_045_m01",
          q: "At $t = 0$, $N = 100$ and $\\frac{dN}{dt} = 5$ for the model $N(t) = a\\ln(t+1) + b$. Find $a$ and $b$.",
          a: "$N(0) = a\\ln(1) + b = b = 100$. $N'(t) = \\frac{a}{t+1}$, $N'(0) = a = 5$. So $a = 5$, $b = 100$."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Determining polynomial coefficients from turning point 
    {
      pt_id: "KN_046",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Determining polynomial coefficients from turning point and area condition",
      testing: "",
      reason_bank: ["setup_error", "sign_error", "wrong_rule", "interpretation_mixup", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_046_m01",
          q: "$f(x) = ax^2 + bx$ has a turning point at $x = 2$ and $\\int_0^4 f(x) dx = 16$. Find $a$ and $b$.",
          a: "$f'(x) = 2ax + b = 0$ at $x=2$: $4a + b = 0$ ①. $\\int_0^4 (ax^2 + bx) dx = \\frac{64a}{3} + 8b = 16$ ②. From ①: $b = -4a$. Sub into ②: $\\frac{64a}{3} - 32a = 16 \\Rightarrow -\\frac{32a}{3} = 16 \\Rightarrow a = -\\frac{3}{2}$, $b = 6$. Check: $\\int_0^4 (-\\frac{3}{2}x^2 + 6x)dx = [-\\frac{x^3}{2} + 3x^2]_0^4 = -32 + 48 = 16$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Differentiation of a quotient of functions requiring ne
    {
      pt_id: "KN_047",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Differentiation of a quotient of functions requiring nested rules",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "sign_error", "algebra_slip", "missing_chain_factor", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_047_m01",
          q: "Differentiate $y = \\frac{\\sin(x)}{(x+1)^2}$.",
          a: "$y' = \\frac{\\cos(x)(x+1)^2 - \\sin(x) \\cdot 2(x+1)}{(x+1)^4} = \\frac{\\cos(x)(x+1) - 2\\sin(x)}{(x+1)^3}$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Estimating expected value from histogram using interval
    {
      pt_id: "KN_048",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Estimating expected value from histogram using interval midpoints",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_048_m01",
          q: "A histogram shows:\n| Interval | [0,2) | [2,4) | [4,6) |\n|---|---|---|---|\n| Relative freq | 0.3 | 0.5 | 0.2 |\nEstimate $E(X)$.",
          a: "Using midpoints: $E(X) \\approx 1(0.3) + 3(0.5) + 5(0.2) = 0.3 + 1.5 + 1.0 = 2.8$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Evaluating assumptions of binomial model in context
    {
      pt_id: "KN_049",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Evaluating assumptions of binomial model in context",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_049_m01",
          q: "200 people are surveyed from a city of 5000. Is a binomial model reasonable for the number who support a policy? Discuss.",
          a: "The sampling fraction is $200/5000 = 4\\%$, which is less than 10%, so independence is approximately satisfied despite sampling without replacement. If $p$ is constant (same probability for each person), then $X \\sim \\text{Bin}(200, p)$ is a reasonable approximation."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Evaluating definite integral of transformed trigonometr
    {
      pt_id: "KN_050",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Evaluating definite integral of transformed trigonometric function",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_050_m01",
          q: "Given $\\int_0^{\\pi} \\sin(x) dx = 2$, evaluate $\\int_0^{\\pi} [3\\sin(x) + 1] dx$.",
          a: "$3\\int_0^{\\pi} \\sin(x) dx + \\int_0^{\\pi} 1 \\, dx = 3(2) + \\pi = 6 + \\pi \\approx 9.142$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Evaluating distance from origin at given value for $t$
    {
      pt_id: "KN_051",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Evaluating distance from origin at given value for $t$",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_051_m01",
          q: "A particle's displacement from the origin is $x(t) = t^2 - 6t + 5$ metres. Find its distance from the origin at $t = 4$.",
          a: "$x(4) = 16 - 24 + 5 = -3$. Distance from origin $= |{-3}| = 3$ m."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Evaluating exponential model $Ae^{kt}$ at specific time
    {
      pt_id: "KN_052",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Evaluating exponential model $Ae^{kt}$ at specific time",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_052_m01",
          q: "A bacteria population is modelled by $N(t) = 300e^{0.15t}$. Find $N(4)$.",
          a: "$N(4) = 300e^{0.6} \\approx 300 \\times 1.822 = 546.6 \\approx 547$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Evaluating logarithmic model at a given input
    {
      pt_id: "KN_053",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Evaluating logarithmic model at a given input",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_053_m01",
          q: "The loudness in decibels is $L = 10\\log_{10}\\left(\\frac{I}{I_0}\\right)$ where $I_0 = 10^{-12}$. Find $L$ when $I = 10^{-5}$.",
          a: "$L = 10\\log_{10}\\left(\\frac{10^{-5}}{10^{-12}}\\right) = 10\\log_{10}(10^7) = 10 \\times 7 = 70$ dB."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Explaining inappropriateness of normal model in context
    {
      pt_id: "KN_054",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Explaining inappropriateness of normal model in context",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_054_m01",
          q: "Reaction times are always positive but a normal model with $\\mu = 0.3$ s and $\\sigma = 0.15$ s is proposed. Explain why this may be inappropriate.",
          a: "The normal distribution extends to $-\\infty$, so it assigns positive probability to negative reaction times, which are impossible. With $\\mu = 0.3$ and $\\sigma = 0.15$, $P(X < 0) = P(Z < -2) \\approx 2.3\\%$, a non-trivial probability for an impossible event."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Explaining why a situation cannot be modelled by binomi
    {
      pt_id: "KN_055",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Explaining why a situation cannot be modelled by binomial distribution",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_055_m01",
          q: "Cards are drawn one at a time without replacement from a deck. Let $X$ be the number of hearts in 5 draws. Explain why $X$ is not binomial.",
          a: "The trials are not independent — the probability of drawing a heart changes after each draw because cards are not replaced. Also, $p$ is not constant. (E.g. $P(\\text{heart on 1st}) = \\frac{13}{52}$, but $P(\\text{heart on 2nd | heart on 1st}) = \\frac{12}{51}$.)"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Expressing logarithmic transformation as horizontal dil
    {
      pt_id: "KN_056",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Expressing logarithmic transformation as horizontal dilation using log laws",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_056_m01",
          q: "Show that $y = \\log_{10}(x^3)$ can be written as a vertical dilation of $y = \\log_{10}(x)$.",
          a: "$\\log_{10}(x^3) = 3\\log_{10}(x)$. This is $y = \\log_{10}(x)$ dilated vertically by factor 3."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Expressing logarithmic transformation as vertical trans
    {
      pt_id: "KN_057",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Expressing logarithmic transformation as vertical translation using log laws",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_057_m01",
          q: "Show that $y = \\log_{10}(100x)$ can be written as a vertical translation of $y = \\log_{10}(x)$.",
          a: "$\\log_{10}(100x) = \\log_{10}(100) + \\log_{10}(x) = 2 + \\log_{10}(x)$. This is $y = \\log_{10}(x)$ translated up by 2 units."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Finding break-even price from expected value equation
    {
      pt_id: "KN_058",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Finding break-even price from expected value equation",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_058_m01",
          q: "A game costs $\\$c$ to play. You draw a card: face card wins $\\$10$, ace wins $\\$25$, otherwise nothing. Find $c$ for a fair game.",
          a: "$E(\\text{winnings}) = \\frac{12}{52}(10) + \\frac{4}{52}(25) = \\frac{120+100}{52} = \\frac{220}{52} \\approx \\$4.23$. For fair game: $c = \\$4.23$."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Finding maximum of logarithmic function using calculus
    {
      pt_id: "KN_059",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Finding maximum of logarithmic function using calculus",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_059_m01",
          q: "Find the maximum value of $f(x) = 6\\ln(x) - x^2$ for $x > 0$.",
          a: "$f'(x) = \\frac{6}{x} - 2x = 0 \\Rightarrow 6 = 2x^2 \\Rightarrow x = \\sqrt{3}$. $f''(x) = -\\frac{6}{x^2} - 2 < 0$ (max). $f(\\sqrt{3}) = 6\\ln(\\sqrt{3}) - 3 = 3\\ln(3) - 3 \\approx 0.296$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Finding maximum speed by comparing absolute velocities 
    {
      pt_id: "KN_060",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Finding maximum speed by comparing absolute velocities at critical points",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_060_m01",
          q: "A particle has velocity $v(t) = t^2 - 6t + 5$ for $0 \\leq t \\leq 5$. Find the maximum speed.",
          a: "$a(t) = 2t - 6 = 0 \\Rightarrow t = 3$. Check speeds: $|v(0)| = 5$, $|v(3)| = 4$, $|v(5)| = 0$. Maximum speed is $5$ m/s at $t = 0$."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Finding parameter from initial condition by integrating
    {
      pt_id: "KN_061",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Finding parameter from initial condition by integrating",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_061_m01",
          q: "$v(t) = 4t - 3$. Given $x(0) = 2$, find $x(t)$.",
          a: "$x(t) = 2t^2 - 3t + C$. $x(0) = C = 2$. So $x(t) = 2t^2 - 3t + 2$."
        },
        {
          qid: "KN_061_m02",
          q: "$a(t) = 6t$. Given $v(0) = -4$ and $x(0) = 1$, find $x(t)$.",
          a: "$v(t) = 3t^2 - 4$. $x(t) = t^3 - 4t + 1$."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Finding parameter value to achieve target tail probabil
    {
      pt_id: "KN_062",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Finding parameter value to achieve target tail probability",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_062_m01",
          q: "$X \\sim N(\\mu, 4^2)$. Find $\\mu$ such that $P(X > 30) = 0.1$.",
          a: "$P(X > 30) = 0.1 \\Rightarrow \\frac{30-\\mu}{4} = 1.282 \\Rightarrow \\mu = 30 - 5.128 = 24.87$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Finding value for specified percentage using empirical 
    {
      pt_id: "KN_063",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Finding value for specified percentage using empirical rule",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_063_m01",
          q: "Weights are $N(75, 5^2)$ kg. Below what weight do approximately 84% of people fall?",
          a: "84% corresponds to 1 standard deviation above the mean (50% + 34%). So weight $= 75 + 5 = 80$ kg."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Integrating exponential function over specified bounds
    {
      pt_id: "KN_064",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Integrating exponential function over specified bounds",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_064_m01",
          q: "Evaluate $\\int_0^2 3e^{-x} dx$.",
          a: "$[-3e^{-x}]_0^2 = -3e^{-2} + 3 = 3(1 - e^{-2}) \\approx 2.594$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Interpreting confidence interval coverage and sampling 
    {
      pt_id: "KN_065",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Interpreting confidence interval coverage and sampling variability",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_065_m01",
          q: "If we construct 95% confidence intervals from 200 independent samples, approximately how many would we expect to contain the true proportion?",
          a: "Approximately $200 \\times 0.95 = 190$ of the intervals would contain the true proportion."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Interpreting optimization result in physical context wi
    {
      pt_id: "KN_066",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Interpreting optimization result in physical context with packing constraints",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_066_m01",
          q: "A box made from a 20 cm × 30 cm sheet by cutting squares of side $x$ from each corner has volume $V(x) = x(20-2x)(30-2x)$. Find the maximum volume and state any constraints on $x$.",
          a: "$V'(x) = 12x^2 - 200x + 600 = 0$. By quadratic formula: $x = \\frac{200 \\pm \\sqrt{40000-28800}}{24} = \\frac{200 \\pm \\sqrt{11200}}{24}$. Valid solution (where $0 < x < 10$): $x \\approx 3.92$ cm. $V_{max} \\approx 1056$ cm³. Constraint: $0 < x < 10$."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Interpreting range in terms of standard deviations
    {
      pt_id: "KN_067",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Interpreting range in terms of standard deviations",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_067_m01",
          q: "Heights are $N(170, 6^2)$ cm. A person is 158 cm. How many standard deviations below the mean is this?",
          a: "$z = \\frac{158 - 170}{6} = -2$. The person is 2 standard deviations below the mean."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Inverse volume problem: finding height/level from given
    {
      pt_id: "KN_068",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Inverse volume problem: finding height/level from given volume",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_068_m01",
          q: "A container has cross-sectional area $A(h) = \\pi h$ at height $h$. The volume up to height $H$ is $V = \\int_0^H \\pi h \\, dh$. Find the height when $V = 8\\pi$.",
          a: "$V = \\pi\\left[\\frac{h^2}{2}\\right]_0^H = \\frac{\\pi H^2}{2} = 8\\pi \\Rightarrow H^2 = 16 \\Rightarrow H = 4$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Models where $\frac{dA}{dx} = kA$ are given
    {
      pt_id: "KN_069",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Models where $\\frac{dA}{dx} = kA$ are given",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_069_m01",
          q: "A quantity $Q$ satisfies $\\frac{dQ}{dt} = -0.05Q$. Given $Q(0) = 200$, find $Q(t)$ and evaluate $Q(10)$.",
          a: "$Q(t) = 200e^{-0.05t}$. $Q(10) = 200e^{-0.5} \\approx 121.3$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Numerical integration approximation (trapezoidal rule)
    {
      pt_id: "KN_070",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Numerical integration approximation (trapezoidal rule)",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_070_m01",
          q: "Use the trapezoidal rule with 4 strips to approximate $\\int_0^2 e^{x^2} dx$ given:\n| $x$ | 0 | 0.5 | 1.0 | 1.5 | 2.0 |\n|-----|---|---|---|---|---|\n| $e^{x^2}$ | 1 | 1.284 | 2.718 | 9.488 | 54.598 |",
          a: "$T = \\frac{h}{2}[f(x_0) + 2f(x_1) + 2f(x_2) + 2f(x_3) + f(x_4)] = \\frac{0.5}{2}[1 + 2(1.284) + 2(2.718) + 2(9.488) + 54.598] = 0.25 \\times 82.578 \\approx 20.64$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Other trigonometric calculations
    {
      pt_id: "KN_071",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Other trigonometric calculations",
      testing: "Testing: Using trig identities within differentiation contexts",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_071_m01",
          q: "If $y = \\sin^2(x) + \\cos^2(x)$, find $\\frac{dy}{dx}$.",
          a: "$y = 1$ (Pythagorean identity), so $\\frac{dy}{dx} = 0$."
        },
        {
          qid: "KN_071_m02",
          q: "Simplify $\\frac{d}{dx}[\\sin(2x)]$ using the double angle formula.",
          a: "$\\frac{d}{dx}[\\sin(2x)] = 2\\cos(2x)$. Or: $\\sin(2x) = 2\\sin(x)\\cos(x)$, differentiating by product rule gives $2(\\cos^2(x) - \\sin^2(x)) = 2\\cos(2x)$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Sketching piecewise function involving constant and log
    {
      pt_id: "KN_072",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Sketching piecewise function involving constant and logarithmic components",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_072_m01",
          q: "Sketch $f(x) = \\begin{cases} 2 & x \\leq 1 \\\\ \\ln(x) + 2 & x > 1 \\end{cases}$. State the domain and range.",
          a: "For $x \\leq 1$: horizontal line at $y = 2$. For $x > 1$: logarithmic curve starting at $(1, 2)$ and increasing. The function is continuous at $x = 1$ since $\\ln(1) + 2 = 2$. Domain: all real $x$. Range: $(-\\infty, 2] \\cup (2, \\infty) = \\mathbb{R}$... actually: for $x \\leq 1$, $y = 2$; for $x > 1$, $y > 2$ and increasing. So range is $\\{2\\} \\cup (2, \\infty) = [2, \\infty)$."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Solving inverse probability problem for uniform distrib
    {
      pt_id: "KN_073",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Solving inverse probability problem for uniform distribution in context",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_073_m01",
          q: "A bus arrives at a stop uniformly between 8:00 and 8:20. If you arrive at 8:12, what is the probability the bus has already left?",
          a: "$X \\sim U(0, 20)$. $P(X < 12) = \\frac{12}{20} = 0.6$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Suggesting ways to decrease margin of error
    {
      pt_id: "KN_074",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Suggesting ways to decrease margin of error",
      testing: "",
      reason_bank: ["setup_error", "wrong_rule", "interpretation_mixup", "sign_error", "substitution_error", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_074_m01",
          q: "A researcher obtains a 95% CI of $(0.35, 0.65)$. Suggest two ways to reduce the margin of error.",
          a: "(1) Increase the sample size $n$ — this decreases $\\sqrt{\\hat{p}(1-\\hat{p})/n}$. (2) Decrease the confidence level (e.g. from 95% to 90%) — this decreases the $z$-value. Both reduce the margin of error $ME = z\\sqrt{\\hat{p}(1-\\hat{p})/n}$."
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Using $\lim_{h \to 0} \frac{a^h - 1}{h}$ for $a = e$ in
    {
      pt_id: "KN_075",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Using $\\lim_{h \\to 0} \\frac{a^h - 1}{h}$ for $a = e$ in problem solving",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_075_m01",
          q: "Evaluate $\\lim_{h \\to 0} \\frac{e^{3h} - 1}{h}$.",
          a: "$\\lim_{h \\to 0} \\frac{e^{3h} - 1}{h} = 3 \\cdot \\lim_{h \\to 0} \\frac{e^{3h} - 1}{3h} = 3 \\cdot 1 = 3$"
        },
      ],
      hard: [
      ],
    },

    // Kinematics Integration > Using expected value to evaluate fairness of game
    {
      pt_id: "KN_076",
      topic: "Kinematics (Cross-cutting Differentiation & Integration)",
      subtopic: "Kinematics — Integration",
      concept: "Kinematics Integration",
      pt: "Using expected value to evaluate fairness of game",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "KN_076_m01",
          q: "A game costs $\\$3$. You flip two coins: 2 heads wins $\\$8$, 1 head wins $\\$2$, 0 heads wins nothing. Is the game fair?",
          a: "$E(\\text{winnings}) = \\frac{1}{4}(8) + \\frac{1}{2}(2) + \\frac{1}{4}(0) = 2 + 1 = 3$. $E(\\text{profit}) = 3 - 3 = 0$. The game is fair."
        },
      ],
      hard: [
      ],
    },

    // Integration Techniques > Integrating $f'(x)/f(x)$ to obtain $\ln|f(x)|$
    {
      pt_id: "LN_001",
      topic: "The Logarithmic Function",
      subtopic: "Calculus of the Natural Logarithmic Function",
      concept: "Integration Techniques",
      pt: "Integrating $f'(x)/f(x)$ to obtain $\\ln|f(x)|$",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "LN_001_m01",
          q: "Find $\\int \\frac{2x}{x^2 + 5} dx$.",
          a: "$= \\ln|x^2 + 5| + C = \\ln(x^2 + 5) + C$ (since $x^2 + 5 > 0$)"
        },
        {
          qid: "LN_001_m02",
          q: "Find $\\int \\frac{3x^2}{x^3 - 1} dx$.",
          a: "$= \\ln|x^3 - 1| + C$"
        },
      ],
      hard: [
      ],
    },

    // Integration Techniques > Integrating $f'(x)/f(x)$ to obtain $\ln|f(x)|$ with ini
    {
      pt_id: "LN_002",
      topic: "The Logarithmic Function",
      subtopic: "Calculus of the Natural Logarithmic Function",
      concept: "Integration Techniques",
      pt: "Integrating $f'(x)/f(x)$ to obtain $\\ln|f(x)|$ with initial condition and log law simplification",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "LN_002_m01",
          q: "Given $\\frac{dy}{dx} = \\frac{4}{2x+1}$ and $y(0) = \\ln 3$, find $y(x)$.",
          a: "$y = 2\\ln|2x+1| + C$. $y(0) = 2\\ln(1) + C = \\ln 3 \\Rightarrow C = \\ln 3$. $y = 2\\ln(2x+1) + \\ln 3 = \\ln[3(2x+1)^2]$"
        },
      ],
      hard: [
      ],
    },

    // Logarithmic Evaluation (Calculus) > Finding when derivative equals zero by differentiating 
    {
      pt_id: "LN_003",
      topic: "The Logarithmic Function",
      subtopic: "Calculus of the Natural Logarithmic Function",
      concept: "Logarithmic Evaluation (Calculus)",
      pt: "Finding when derivative equals zero by differentiating function with logarithm",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "LN_003_m01",
          q: "Find the stationary point of $f(x) = x - 2\\ln(x)$ for $x > 0$.",
          a: "$f'(x) = 1 - \\frac{2}{x} = 0 \\Rightarrow x = 2$. $f(2) = 2 - 2\\ln 2$. Point: $(2, 2 - 2\\ln 2)$."
        },
      ],
      hard: [
      ],
    },

    // Product Rule > Anti-differentiating $\ln(x)$ using integration by part
    {
      pt_id: "LN_004",
      topic: "The Logarithmic Function",
      subtopic: "Calculus of the Natural Logarithmic Function",
      concept: "Product Rule",
      pt: "Anti-differentiating $\\ln(x)$ using integration by parts (reverse product rule)",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "sign_error", "algebra_slip", "missing_chain_factor", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "LN_004_m01",
          q: "Given that $\\frac{d}{dx}[x\\ln(x)] = \\ln(x) + 1$, find $\\int \\ln(x) dx$.",
          a: "$\\int [\\ln(x) + 1] dx = x\\ln(x) + C$, so $\\int \\ln(x) dx = x\\ln(x) - x + C$"
        },
      ],
      hard: [
      ],
    },

    // Product Rule > Differentiating $x \cdot \ln(x)$ using product rule
    {
      pt_id: "LN_005",
      topic: "The Logarithmic Function",
      subtopic: "Calculus of the Natural Logarithmic Function",
      concept: "Product Rule",
      pt: "Differentiating $x \\cdot \\ln(x)$ using product rule",
      testing: "",
      reason_bank: ["wrong_rule", "setup_error", "sign_error", "algebra_slip", "missing_chain_factor", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "LN_005_m01",
          q: "Differentiate $y = x^2 \\ln(x)$.",
          a: "$y' = 2x\\ln(x) + x^2 \\cdot \\frac{1}{x} = 2x\\ln(x) + x = x(2\\ln(x) + 1)$"
        },
      ],
      hard: [
      ],
    },

    // Logarithmic Equations > Solving equation involving logarithm to find specific v
    {
      pt_id: "LN_006",
      topic: "The Logarithmic Function",
      subtopic: "Logarithmic Functions",
      concept: "Logarithmic Equations",
      pt: "Solving equation involving logarithm to find specific value",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "LN_006_m01",
          q: "If $\\log_{10}(x) = 2.5$, find $x$.",
          a: "$x = 10^{2.5} = 100\\sqrt{10} \\approx 316.2$"
        },
      ],
      hard: [
      ],
    },

    // Logarithmic Equations > Solving exponential equation by isolating $e^{kx}$ and 
    {
      pt_id: "LN_007",
      topic: "The Logarithmic Function",
      subtopic: "Logarithmic Functions",
      concept: "Logarithmic Equations",
      pt: "Solving exponential equation by isolating $e^{kx}$ and taking logarithms",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "LN_007_m01",
          q: "Solve $5e^{2x} = 40$.",
          a: "$e^{2x} = 8 \\Rightarrow 2x = \\ln 8 \\Rightarrow x = \\frac{3\\ln 2}{2}$"
        },
        {
          qid: "LN_007_m02",
          q: "Solve $200e^{-0.1t} = 50$.",
          a: "$e^{-0.1t} = 0.25 \\Rightarrow -0.1t = \\ln(0.25) \\Rightarrow t = 10\\ln 4 \\approx 13.86$"
        },
      ],
      hard: [
      ],
    },

    // Logarithmic Equations > Solving logarithmic equation for variable using log law
    {
      pt_id: "LN_008",
      topic: "The Logarithmic Function",
      subtopic: "Logarithmic Functions",
      concept: "Logarithmic Equations",
      pt: "Solving logarithmic equation for variable using log laws",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "LN_008_m01",
          q: "Solve $\\log_2(x+3) + \\log_2(x-1) = 3$.",
          a: "$\\log_2[(x+3)(x-1)] = 3 \\Rightarrow (x+3)(x-1) = 8 \\Rightarrow x^2 + 2x - 11 = 0 \\Rightarrow x = \\frac{-2 + \\sqrt{48}}{2} = -1 + 2\\sqrt{3}$ (reject negative solution since we need $x > 1$)"
        },
        {
          qid: "LN_008_m02",
          q: "Solve $\\ln(x) - \\ln(x-2) = 1$.",
          a: "$\\ln\\left(\\frac{x}{x-2}\\right) = 1 \\Rightarrow \\frac{x}{x-2} = e \\Rightarrow x = ex - 2e \\Rightarrow x(e-1) = 2e \\Rightarrow x = \\frac{2e}{e-1}$"
        },
      ],
      hard: [
      ],
    },

    // Logarithmic Evaluation > Determining parameters of logarithmic function from two
    {
      pt_id: "LN_009",
      topic: "The Logarithmic Function",
      subtopic: "Logarithmic Functions",
      concept: "Logarithmic Evaluation",
      pt: "Determining parameters of logarithmic function from two points using simultaneous equations",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "LN_009_m01",
          q: "$f(x) = a\\ln(x) + b$ passes through $(1, 3)$ and $(e, 7)$. Find $a$ and $b$.",
          a: "$f(1) = a(0) + b = 3 \\Rightarrow b = 3$. $f(e) = a(1) + 3 = 7 \\Rightarrow a = 4$. So $f(x) = 4\\ln(x) + 3$."
        },
      ],
      hard: [
      ],
    },

    // Logarithmic Evaluation > Evaluating $\log_a(x) = b$ by converting to exponential
    {
      pt_id: "LN_010",
      topic: "The Logarithmic Function",
      subtopic: "Logarithmic Functions",
      concept: "Logarithmic Evaluation",
      pt: "Evaluating $\\log_a(x) = b$ by converting to exponential form",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "LN_010_m01",
          q: "Find $x$ if $\\log_3(x) = 4$.",
          a: "$x = 3^4 = 81$"
        },
        {
          qid: "LN_010_m02",
          q: "Find $x$ if $\\log_x(32) = 5$.",
          a: "$x^5 = 32 \\Rightarrow x = 2$"
        },
      ],
      hard: [
      ],
    },

    // Logarithmic Evaluation > Evaluating $a^{kp}$ by using log-exponential inverse re
    {
      pt_id: "LN_011",
      topic: "The Logarithmic Function",
      subtopic: "Logarithmic Functions",
      concept: "Logarithmic Evaluation",
      pt: "Evaluating $a^{kp}$ by using log-exponential inverse relationship",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "LN_011_m01",
          q: "Given $\\log_2(5) = p$, evaluate $2^{3p}$.",
          a: "$2^{3p} = (2^p)^3 = 5^3 = 125$"
        },
      ],
      hard: [
      ],
    },

    // Logarithmic Evaluation > Evaluating logarithmic function at a given input
    {
      pt_id: "LN_012",
      topic: "The Logarithmic Function",
      subtopic: "Logarithmic Functions",
      concept: "Logarithmic Evaluation",
      pt: "Evaluating logarithmic function at a given input",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "LN_012_m01",
          q: "If $f(x) = 3\\log_2(x - 1) + 4$, find $f(5)$.",
          a: "$f(5) = 3\\log_2(4) + 4 = 3(2) + 4 = 10$"
        },
      ],
      hard: [
      ],
    },

    // Logarithmic Graphs > Comparing quantities using logarithmic scale by taking 
    {
      pt_id: "LN_013",
      topic: "The Logarithmic Function",
      subtopic: "Logarithmic Functions",
      concept: "Logarithmic Graphs",
      pt: "Comparing quantities using logarithmic scale by taking ratio of exponential forms",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "LN_013_m01",
          q: "Sound A has intensity level $L_A = 80$ dB and Sound B has $L_B = 60$ dB, where $L = 10\\log_{10}(I/I_0)$. Find $I_A/I_B$.",
          a: "$L_A - L_B = 10\\log_{10}(I_A/I_B) = 20 \\Rightarrow \\log_{10}(I_A/I_B) = 2 \\Rightarrow I_A/I_B = 100$"
        },
      ],
      hard: [
      ],
    },

    // Logarithmic Graphs > Determining gradient and intercept of linear log-scale 
    {
      pt_id: "LN_014",
      topic: "The Logarithmic Function",
      subtopic: "Logarithmic Functions",
      concept: "Logarithmic Graphs",
      pt: "Determining gradient and intercept of linear log-scale relationship",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "LN_014_m01",
          q: "$\\log_{10}(y) = 2x + 3$. Find the gradient and vertical intercept of this linear relationship.",
          a: "Gradient $= 2$, vertical intercept $= 3$ (on the $\\log_{10}(y)$ vs $x$ graph). In original form: $y = 10^{2x+3} = 1000 \\times 100^x$."
        },
      ],
      hard: [
      ],
    },

    // Logarithmic Graphs > Identifying equations of translated/reflected logarithm
    {
      pt_id: "LN_015",
      topic: "The Logarithmic Function",
      subtopic: "Logarithmic Functions",
      concept: "Logarithmic Graphs",
      pt: "Identifying equations of translated/reflected logarithmic graphs from diagram",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "LN_015_m01",
          q: "A logarithmic graph has a vertical asymptote at $x = 2$ and passes through $(3, 0)$. Which of $y = \\ln(x-2)$, $y = \\ln(x+2)$, $y = -\\ln(x-2)$ is its equation?",
          a: "$y = \\ln(x-2)$: asymptote at $x = 2$ ✓, at $x = 3$: $y = \\ln(1) = 0$ ✓. Answer: $y = \\ln(x-2)$."
        },
      ],
      hard: [
      ],
    },

    // Logarithmic Graphs > Identifying parameter from vertical asymptote of logari
    {
      pt_id: "LN_016",
      topic: "The Logarithmic Function",
      subtopic: "Logarithmic Functions",
      concept: "Logarithmic Graphs",
      pt: "Identifying parameter from vertical asymptote of logarithmic graph",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "LN_016_m01",
          q: "The graph of $y = \\ln(x - k)$ has a vertical asymptote at $x = 5$. Find $k$.",
          a: "$k = 5$"
        },
      ],
      hard: [
      ],
    },

    // Logarithmic Graphs > Reading value from logarithmic scale/graph
    {
      pt_id: "LN_017",
      topic: "The Logarithmic Function",
      subtopic: "Logarithmic Functions",
      concept: "Logarithmic Graphs",
      pt: "Reading value from logarithmic scale/graph",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "LN_017_m01",
          q: "On a Richter scale, magnitude $M = \\log_{10}(I)$ where $I$ is the intensity. If one earthquake has $M = 5$ and another has $M = 7$, how many times more intense is the second?",
          a: "$I_2/I_1 = 10^7/10^5 = 10^2 = 100$ times more intense."
        },
      ],
      hard: [
      ],
    },

    // Logarithmic Graphs > Sketching translated and shifted logarithmic graph with
    {
      pt_id: "LN_018",
      topic: "The Logarithmic Function",
      subtopic: "Logarithmic Functions",
      concept: "Logarithmic Graphs",
      pt: "Sketching translated and shifted logarithmic graph with key points and asymptote",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "LN_018_m01",
          q: "Sketch $y = \\ln(x + 1) - 2$, showing the asymptote, $x$-intercept and $y$-intercept.",
          a: "Asymptote: $x = -1$. $y$-int: $\\ln(1) - 2 = -2$, so $(0, -2)$. $x$-int: $\\ln(x+1) = 2 \\Rightarrow x = e^2 - 1 \\approx 6.39$. Graph is $\\ln(x)$ shifted left 1 and down 2."
        },
      ],
      hard: [
      ],
    },

    // Logarithmic Laws > Applying logarithmic laws
    {
      pt_id: "LN_019",
      topic: "The Logarithmic Function",
      subtopic: "Logarithmic Functions",
      concept: "Logarithmic Laws",
      pt: "Applying logarithmic laws",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "LN_019_m01",
          q: "Simplify $\\log_2(8) + \\log_2(4)$.",
          a: "$= \\log_2(32) = 5$"
        },
        {
          qid: "LN_019_m02",
          q: "Express $2\\ln(3) - \\ln(9) + \\ln(e^2)$ in simplest form.",
          a: "$= \\ln(9) - \\ln(9) + 2 = 2$"
        },
        {
          qid: "LN_019_m03",
          q: "Express $\\log_3(x^2) - \\log_3(\\sqrt{x})$ as a single logarithm.",
          a: "$= \\log_3\\left(\\frac{x^2}{x^{1/2}}\\right) = \\log_3(x^{3/2}) = \\frac{3}{2}\\log_3(x)$"
        },
      ],
      hard: [
      ],
    },

    // Logarithmic Laws > Evaluating expression using inverse relationship betwee
    {
      pt_id: "LN_020",
      topic: "The Logarithmic Function",
      subtopic: "Logarithmic Functions",
      concept: "Logarithmic Laws",
      pt: "Evaluating expression using inverse relationship between log and exponential",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "LN_020_m01",
          q: "Evaluate $5^{\\log_5(7)}$.",
          a: "$= 7$ (by the inverse property $a^{\\log_a(x)} = x$)"
        },
        {
          qid: "LN_020_m02",
          q: "Evaluate $\\log_3(3^{2x+1})$.",
          a: "$= 2x + 1$"
        },
      ],
      hard: [
      ],
    },

    // Logarithmic Laws > Expressing $\log_a(k)$ in terms of a defined variable u
    {
      pt_id: "LN_021",
      topic: "The Logarithmic Function",
      subtopic: "Logarithmic Functions",
      concept: "Logarithmic Laws",
      pt: "Expressing $\\log_a(k)$ in terms of a defined variable using log laws",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "LN_021_m01",
          q: "If $\\log_2(3) = p$, express $\\log_2(12)$ in terms of $p$.",
          a: "$\\log_2(12) = \\log_2(4 \\times 3) = \\log_2(4) + \\log_2(3) = 2 + p$"
        },
        {
          qid: "LN_021_m02",
          q: "If $\\log_5(2) = a$ and $\\log_5(3) = b$, express $\\log_5(72)$ in terms of $a$ and $b$.",
          a: "$72 = 8 \\times 9 = 2^3 \\times 3^2$, so $\\log_5(72) = 3a + 2b$"
        },
      ],
      hard: [
      ],
    },

    // Logarithmic Laws > Proving logarithmic identity using log laws (show that)
    {
      pt_id: "LN_022",
      topic: "The Logarithmic Function",
      subtopic: "Logarithmic Functions",
      concept: "Logarithmic Laws",
      pt: "Proving logarithmic identity using log laws (show that)",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
      ],
      medium: [
        {
          qid: "LN_022_m01",
          q: "Show that $\\log_a(b) = \\frac{1}{\\log_b(a)}$.",
          a: "Let $\\log_a(b) = x$, so $a^x = b$. Taking $\\log_b$: $x\\log_b(a) = 1$, so $x = \\frac{1}{\\log_b(a)}$."
        },
      ],
      hard: [
      ],
    },

    // Chain Rule > Differentiation of composite functions when given separ
    {
      pt_id: "XX_001",
      topic: "Uncategorised",
      subtopic: "General",
      concept: "Chain Rule",
      pt: "Differentiation of composite functions when given separate equations for two related variables",
      testing: "Testing: Chain rule with related rates / parametric-style",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
        {
          qid: "XX_001_e01",
          q: "Given $y = u^2 + 3u$ and $u = 2x - 1$, find $\\frac{dy}{dx}$.",
          a: "$\\frac{dy}{du} = 2 u + 3$, $\\frac{du}{dx} = 2$. $\\frac{dy}{dx} = 4 u + 6|_{u=2x-1} = 8 x + 2$"
        },
        {
          qid: "XX_001_e02",
          q: "Given $y = 3u - u^2$ and $u = x + 2$, find $\\frac{dy}{dx}$.",
          a: "$\\frac{dy}{du} = 3 - 2 u$, $\\frac{du}{dx} = 1$. $\\frac{dy}{dx} = - 2 x - 1$"
        },
        {
          qid: "XX_001_e03",
          q: "Given $y = \\sqrt{u}$ and $u = 3x + 4$, find $\\frac{dy}{dx}$.",
          a: "$\\frac{dy}{du} = \\frac{1}{2 \\sqrt{u}}$, $\\frac{du}{dx} = 3$. $\\frac{dy}{dx} = \\frac{3}{2 \\sqrt{3 x + 4}}$"
        },
      ],
      medium: [
        {
          qid: "XX_001_m01",
          q: "Given $y = e^u$ and $u = x^2 + 1$, find $\\frac{dy}{dx}$.",
          a: "$\\frac{dy}{du} = e^{u}$, $\\frac{du}{dx} = 2 x$. $\\frac{dy}{dx} = 2 x e^{x^{2} + 1}$"
        },
        {
          qid: "XX_001_m02",
          q: "Given $y = \\frac{1}{u^2}$ and $u = 3x - 2$, find $\\frac{dy}{dx}$.",
          a: "$\\frac{dy}{du} = - \\frac{2}{u^{3}}$, $\\frac{du}{dx} = 3$. $\\frac{dy}{dx} = - \\frac{6}{\\left(3 x - 2\\right)^{3}}$"
        },
        {
          qid: "XX_001_m03",
          q: "Given $y = \\ln(u)$ and $u = x^2 - 3$, find $\\frac{dy}{dx}$.",
          a: "$\\frac{dy}{du} = \\frac{1}{u}$, $\\frac{du}{dx} = 2 x$. $\\frac{dy}{dx} = \\frac{2 x}{x^{2} - 3}$"
        },
        {
          qid: "XX_001_m04",
          q: "Given $y = u^3 + 2u$ and $u = \\sin(x)$, find $\\frac{dy}{dx}$ when $x = \\frac{\\pi}{6}$.",
          a: "$\\frac{dy}{du} = 3 u^{2} + 2$, $\\frac{du}{dx} = \\cos(x)$. At $x = \\frac{\\pi}{6}$: $u = \\frac{1}{2}$, $\\frac{dy}{dx} = \\frac{11 \\sqrt{3}}{8}$"
        },
        {
          qid: "XX_001_m05",
          q: "Given $y = u^2$ and $u = e^x + 1$, find $\\frac{dy}{dx}$ at $x = 0$.",
          a: "$\\frac{dy}{du} = 2 u$, $\\frac{du}{dx} = e^{x}$. At $x = 0$: $u = 2$, $\\frac{dy}{dx} = 4$"
        },
      ],
      hard: [
        {
          qid: "XX_001_h01",
          q: "Given $y = \\frac{u}{u+1}$ and $u = x^2$, find $\\frac{dy}{dx}$.",
          a: "$\\frac{dy}{du} = \\frac{1}{\\left(u + 1\\right)^{2}}$, $\\frac{du}{dx} = 2 x$. $\\frac{dy}{dx} = \\frac{2 x}{x^{4} + 2 x^{2} + 1}$"
        },
        {
          qid: "XX_001_h02",
          q: "Given $y = \\sin(u)$ and $u = \\ln(x)$, find $\\frac{dy}{dx}$ at $x = 1$.",
          a: "$\\frac{dy}{du} = \\cos(u)$, $\\frac{du}{dx} = \\frac{1}{x}$. At $x = 1$: $u = 0$, $\\frac{dy}{dx} = \\cos(0) \\cdot 1 = 1$"
        },
        {
          qid: "XX_001_h03",
          q: "Given $y = v^2$, $v = u + 1$, and $u = 3x$, find $\\frac{dy}{dx}$.",
          a: "$\\frac{dy}{dv} = 2v$, $\\frac{dv}{du} = 1$, $\\frac{du}{dx} = 3$. $\\frac{dy}{dx} = 6v = 6(u+1) = 6(3x+1) = 18 x + 6$"
        },
        {
          qid: "XX_001_h04",
          q: "Given $y = e^{u^2}$ and $u = 2x + 1$, find $\\frac{dy}{dx}$ at $x = 0$.",
          a: "$\\frac{dy}{du} = 2 u e^{u^{2}}$, $\\frac{du}{dx} = 2$. At $x=0$: $u = 1$, $\\frac{dy}{dx} = 4 e$"
        },
        {
          qid: "XX_001_h05",
          q: "Given $\\frac{dy}{dx} = 6x^2$ and $\\frac{du}{dx} = 2x$, find $\\frac{dy}{du}$ in terms of $x$.",
          a: "$\\frac{dy}{du} = \\frac{dy/dx}{du/dx} = \\frac{6x^2}{2x} = 3x$"
        },
      ],
    },

    // Chain Rule > Differentiation of reciprocal functions requiring chain
    {
      pt_id: "XX_002",
      topic: "Uncategorised",
      subtopic: "General",
      concept: "Chain Rule",
      pt: "Differentiation of reciprocal functions requiring chain rule",
      testing: "Testing: Chain rule on negative powers",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
        {
          qid: "XX_002_e01",
          q: "Differentiate $y = \\frac{3}{(x^2 + 1)^2}$.",
          a: "$y = 3(x^2+1)^{-2}$. $\\frac{dy}{dx} = - \\frac{12 x}{\\left(x^{2} + 1\\right)^{3}}$"
        },
        {
          qid: "XX_002_e02",
          q: "Differentiate $y = \\frac{2}{3x - 1}$.",
          a: "$\\frac{dy}{dx} = - \\frac{6}{\\left(3 x - 1\\right)^{2}}$"
        },
        {
          qid: "XX_002_e03",
          q: "Differentiate $y = \\frac{1}{(x + 4)^3}$.",
          a: "$\\frac{dy}{dx} = - \\frac{3}{\\left(x + 4\\right)^{4}}$"
        },
      ],
      medium: [
        {
          qid: "XX_002_m01",
          q: "Differentiate $y = \\frac{5}{2x^2 - 3}$.",
          a: "$\\frac{dy}{dx} = - \\frac{20 x}{\\left(2 x^{2} - 3\\right)^{2}}$"
        },
        {
          qid: "XX_002_m02",
          q: "Differentiate $y = \\frac{1}{(x^3 + x)^2}$.",
          a: "$\\frac{dy}{dx} = \\frac{2 \\left(- 3 x^{2} - 1\\right)}{x^{3} \\left(x^{2} + 1\\right)^{3}}$"
        },
        {
          qid: "XX_002_m03",
          q: "Differentiate $y = \\frac{4}{\\sqrt{1 - x^2}}$.",
          a: "$\\frac{dy}{dx} = \\frac{4 x}{\\left(1 - x^{2}\\right)^{\\frac{3}{2}}}$"
        },
        {
          qid: "XX_002_m04",
          q: "If $f(x) = \\frac{2}{x^2 + 5}$, find $f'(1)$.",
          a: "$f'(x) = - \\frac{4 x}{\\left(x^{2} + 5\\right)^{2}}$. $f'(1) = - \\frac{1}{9}$"
        },
        {
          qid: "XX_002_m05",
          q: "Differentiate $y = \\frac{3}{e^x + 1}$.",
          a: "$\\frac{dy}{dx} = - \\frac{3}{4 \\cosh^{2}{\\left(\\frac{x}{2} \\right)}}$"
        },
      ],
      hard: [
        {
          qid: "XX_002_h01",
          q: "Differentiate $y = \\frac{1}{(x^2 + 2x + 5)^{3/2}}$.",
          a: "$\\frac{dy}{dx} = \\frac{3 \\left(- x - 1\\right)}{\\left(x^{2} + 2 x + 5\\right)^{\\frac{5}{2}}}$"
        },
        {
          qid: "XX_002_h02",
          q: "Differentiate $y = \\frac{1}{\\sin(x)}$.",
          a: "$y = (\\sin x)^{-1}$. $\\frac{dy}{dx} = - \\frac{\\cos{\\left(x \\right)}}{\\sin^{2}{\\left(x \\right)}}$"
        },
        {
          qid: "XX_002_h03",
          q: "Differentiate $y = \\frac{1}{\\ln(x)}$ for $x > 1$.",
          a: "$\\frac{dy}{dx} = - \\frac{1}{x \\log{\\left(x \\right)}^{2}}$"
        },
        {
          qid: "XX_002_h04",
          q: "Find the gradient of $y = \\frac{4}{x^2 - 1}$ at $x = 3$.",
          a: "$\\frac{dy}{dx} = - \\frac{8 x}{\\left(x^{2} - 1\\right)^{2}}$. At $x = 3$: $- \\frac{3}{8}$"
        },
        {
          qid: "XX_002_h05",
          q: "Differentiate $y = \\frac{1}{\\left(x + \\frac{1}{x}\\right)^2}$.",
          a: "$\\frac{dy}{dx} = - \\frac{2 x \\left(x^{2} - 1\\right)}{\\left(x^{2} + 1\\right)^{3}}$"
        },
      ],
    },

    // Chain Rule > Differentiation of simple composite functions
    {
      pt_id: "XX_003",
      topic: "Uncategorised",
      subtopic: "General",
      concept: "Chain Rule",
      pt: "Differentiation of simple composite functions",
      testing: "Testing: Apply chain rule $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
        {
          qid: "XX_003_e01",
          q: "Differentiate $y = (3x + 1)^5$.",
          a: "$\\frac{dy}{dx} = 15 \\left(3 x + 1\\right)^{4}$"
        },
        {
          qid: "XX_003_e02",
          q: "Differentiate $y = (2x - 3)^4$.",
          a: "$\\frac{dy}{dx} = 8 \\left(2 x - 3\\right)^{3}$"
        },
        {
          qid: "XX_003_e03",
          q: "Differentiate $y = (5 - x)^3$.",
          a: "$\\frac{dy}{dx} = - 3 \\left(x - 5\\right)^{2}$"
        },
      ],
      medium: [
        {
          qid: "XX_003_m01",
          q: "Differentiate $y = \\sqrt{4 - x^2}$.",
          a: "$\\frac{dy}{dx} = - \\frac{x}{\\sqrt{4 - x^{2}}}$"
        },
        {
          qid: "XX_003_m02",
          q: "Differentiate $y = \\frac{1}{(x^2 + 1)^3}$.",
          a: "$y = (x^2+1)^{-3}$. $\\frac{dy}{dx} = - \\frac{6 x}{\\left(x^{2} + 1\\right)^{4}}$"
        },
        {
          qid: "XX_003_m03",
          q: "Differentiate $y = (3x^2 - 2x + 1)^4$.",
          a: "$\\frac{dy}{dx} = 8 \\left(3 x - 1\\right) \\left(3 x^{2} - 2 x + 1\\right)^{3}$"
        },
        {
          qid: "XX_003_m04",
          q: "Differentiate $y = \\sqrt{1 + x^3}$.",
          a: "$\\frac{dy}{dx} = \\frac{3 x^{2}}{2 \\sqrt{x^{3} + 1}}$"
        },
        {
          qid: "XX_003_m05",
          q: "Differentiate $y = \\frac{1}{(4x - 1)^2}$.",
          a: "$y = (4x-1)^{-2}$. $\\frac{dy}{dx} = - \\frac{8}{\\left(4 x - 1\\right)^{3}}$"
        },
      ],
      hard: [
        {
          qid: "XX_003_h01",
          q: "Differentiate $y = \\frac{1}{\\sqrt{x^2 - 3x + 2}}$.",
          a: "$\\frac{dy}{dx} = \\frac{\\frac{3}{2} - x}{\\left(x^{2} - 3 x + 2\\right)^{\\frac{3}{2}}}$"
        },
        {
          qid: "XX_003_h02",
          q: "Differentiate $y = \\left(\\frac{2x+1}{x-1}\\right)^3$.",
          a: "$\\frac{dy}{dx} = - \\frac{9 \\left(2 x + 1\\right)^{2}}{\\left(x - 1\\right)^{4}}$"
        },
        {
          qid: "XX_003_h03",
          q: "If $f(x) = (x^3 - 8)^{2/3}$, find $f'(2)$.",
          a: "$f'(x) = \\frac{2 x^{2}}{\\sqrt[3]{x^{3} - 8}}$. At $x = 2$: $x^3 - 8 = 0$, so $f'(2)$ is undefined (vertical tangent)."
        },
        {
          qid: "XX_003_h04",
          q: "Differentiate $y = \\sqrt{5x^2 - 4x}$ and evaluate $\\frac{dy}{dx}$ at $x = 1$.",
          a: "$\\frac{dy}{dx} = \\frac{5 x - 2}{\\sqrt{x \\left(5 x - 4\\right)}}$. At $x = 1$: $3$"
        },
        {
          qid: "XX_003_h05",
          q: "Differentiate $y = \\left(x + \\frac{1}{x}\\right)^2$.",
          a: "$\\frac{dy}{dx} = 2 x - \\frac{2}{x^{3}}$. Expanded: $2 x - \\frac{2}{x^{3}}$"
        },
      ],
    },

    // Chain Rule > Using a table of values or graphs of two functions and 
    {
      pt_id: "XX_004",
      topic: "Uncategorised",
      subtopic: "General",
      concept: "Chain Rule",
      pt: "Using a table of values or graphs of two functions and their derivatives to calculate the derivative of a composite function at a given point",
      testing: "Testing: $(f \\circ g)'(a) = f'(g(a)) \\cdot g'(a)$",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
        {
          qid: "XX_004_e01",
          q: "Given the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 1   | 3       | 4        | 2       | -1       |\n| 2   | 5       | -2       | 1       | 3        |\n| 3   | 1       | 6        | 3       | 2        |\nFind $\\frac{d}{dx}[f(g(x))]$ at $x = 1$.",
          a: "$f'(g(1)) \\cdot g'(1) = f'(2) \\cdot (-1) = (-2)(-1) = 2$"
        },
        {
          qid: "XX_004_e02",
          q: "Using the table above, find $\\frac{d}{dx}[f(g(x))]$ at $x = 3$.",
          a: "$f'(g(3)) \\cdot g'(3) = f'(3) \\cdot 2 = 6 \\cdot 2 = 12$"
        },
        {
          qid: "XX_004_e03",
          q: "Using the table above, find $\\frac{d}{dx}[g(f(x))]$ at $x = 1$.",
          a: "$g'(f(1)) \\cdot f'(1) = g'(3) \\cdot 4 = 2 \\cdot 4 = 8$"
        },
      ],
      medium: [
        {
          qid: "XX_004_m01",
          q: "Given the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 1   | 4       | -3       | 3       | 5        |\n| 2   | 1       | 2        | 4       | -1       |\n| 3   | 2       | 7        | 1       | 4        |\n| 4   | 3       | -1       | 2       | 6        |\nFind $\\frac{d}{dx}[f(g(x))]$ at $x = 2$.",
          a: "$f'(g(2)) \\cdot g'(2) = f'(4) \\cdot (-1) = (-1)(-1) = 1$"
        },
        {
          qid: "XX_004_m02",
          q: "Using the table above, find $\\frac{d}{dx}[g(f(x))]$ at $x = 3$.",
          a: "$g'(f(3)) \\cdot f'(3) = g'(2) \\cdot 7 = (-1)(7) = -7$"
        },
        {
          qid: "XX_004_m03",
          q: "Using the table above, find $\\frac{d}{dx}[f(f(x))]$ at $x = 1$.",
          a: "$f'(f(1)) \\cdot f'(1) = f'(4) \\cdot (-3) = (-1)(-3) = 3$"
        },
        {
          qid: "XX_004_m04",
          q: "Using the table above, find $\\frac{d}{dx}[g(g(x))]$ at $x = 4$.",
          a: "$g'(g(4)) \\cdot g'(4) = g'(2) \\cdot 6 = (-1)(6) = -6$"
        },
        {
          qid: "XX_004_m05",
          q: "Using the first table (Q1), explain why $\\frac{d}{dx}[g(f(x))]$ at $x = 2$ cannot be determined.",
          a: "$g'(f(2)) \\cdot f'(2) = g'(5) \\cdot (-2)$. Since $g'(5)$ is not in the table, this cannot be determined."
        },
      ],
      hard: [
        {
          qid: "XX_004_h01",
          q: "Using the table from Q4, find $\\frac{d}{dx}[f(g(x)) \\cdot g(x)]$ at $x = 3$.",
          a: "Product rule: $f'(g(3)) \\cdot g'(3) \\cdot g(3) + f(g(3)) \\cdot g'(3) = f'(1) \\cdot 4 \\cdot 1 + f(1) \\cdot 4 = (-3)(4)(1) + (4)(4) = -12 + 16 = 4$"
        },
        {
          qid: "XX_004_h02",
          q: "Using the table from Q4, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 1$.",
          a: "Quotient rule: $\\frac{f'(1)g(1) - f(1)g'(1)}{[g(1)]^2} = \\frac{(-3)(3) - (4)(5)}{9} = \\frac{-29}{9}$"
        },
        {
          qid: "XX_004_h03",
          q: "Using the table from Q4, find $\\frac{d}{dx}[f(x)]^2$ at $x = 3$.",
          a: "$2f(3) \\cdot f'(3) = 2(2)(7) = 28$"
        },
        {
          qid: "XX_004_h04",
          q: "Using the table from Q4, find $\\frac{d}{dx}[f(g(g(x)))]$ at $x = 4$.",
          a: "$f'(g(g(4))) \\cdot g'(g(4)) \\cdot g'(4) = f'(g(2)) \\cdot g'(2) \\cdot 6 = f'(4) \\cdot (-1) \\cdot 6 = (-1)(-1)(6) = 6$"
        },
        {
          qid: "XX_004_h05",
          q: "Using the table from Q4, find $\\frac{d}{dx}\\sqrt{f(x)}$ at $x = 1$.",
          a: "$\\frac{f'(1)}{2\\sqrt{f(1)}} = \\frac{-3}{2\\sqrt{4}} = \\frac{-3}{4}$"
        },
      ],
    },

    // Product Rule > Differentiating $x^n \cdot \ln(f(x))$ using product rul
    {
      pt_id: "XX_005",
      topic: "Uncategorised",
      subtopic: "General",
      concept: "Product Rule",
      pt: "Differentiating $x^n \\cdot \\ln(f(x))$ using product rule",
      testing: "Testing: Product rule where one factor is a logarithmic function",
      reason_bank: ["wrong_rule", "setup_error", "sign_error", "algebra_slip", "missing_chain_factor", "not_sure"],
      easy: [
        {
          qid: "XX_005_e01",
          q: "Differentiate $y = x\\ln(x)$.",
          a: "$u = x$, $v = \\ln(x)$. $u' = 1$, $v' = \\frac{1}{x}$.\n$y' = \\ln(x) + x \\cdot \\frac{1}{x} = \\ln(x) + 1$"
        },
        {
          qid: "XX_005_e02",
          q: "Differentiate $y = x^2 \\ln(x)$.",
          a: "$y' = 2x\\ln(x) + x^2 \\cdot \\frac{1}{x} = 2x\\ln(x) + x = x(2\\ln(x) + 1)$"
        },
        {
          qid: "XX_005_e03",
          q: "Differentiate $y = 3x\\ln(x)$.",
          a: "$y' = 3\\ln(x) + 3x \\cdot \\frac{1}{x} = 3\\ln(x) + 3 = 3(\\ln(x) + 1)$"
        },
      ],
      medium: [
        {
          qid: "XX_005_m01",
          q: "Differentiate $y = x^3 \\ln(x)$.",
          a: "$y' = 3x^2\\ln(x) + x^3 \\cdot \\frac{1}{x} = 3x^2\\ln(x) + x^2 = x^2(3\\ln(x) + 1)$"
        },
        {
          qid: "XX_005_m02",
          q: "Differentiate $y = x^2 \\ln(2x)$.",
          a: "$u = x^2$, $v = \\ln(2x)$. $u' = 2x$, $v' = \\frac{2}{2x} = \\frac{1}{x}$.\n$y' = 2x\\ln(2x) + x^2 \\cdot \\frac{1}{x} = 2x\\ln(2x) + x = x(2\\ln(2x) + 1)$"
        },
        {
          qid: "XX_005_m03",
          q: "Differentiate $y = \\sqrt{x}\\ln(x)$.",
          a: "$u = x^{1/2}$, $v = \\ln(x)$. $u' = \\frac{1}{2\\sqrt{x}}$, $v' = \\frac{1}{x}$.\n$y' = \\frac{\\ln(x)}{2\\sqrt{x}} + \\frac{\\sqrt{x}}{x} = \\frac{\\ln(x)}{2\\sqrt{x}} + \\frac{1}{\\sqrt{x}} = \\frac{\\ln(x) + 2}{2\\sqrt{x}}$"
        },
        {
          qid: "XX_005_m04",
          q: "Differentiate $y = (x + 1)\\ln(x)$.",
          a: "$y' = \\ln(x) + \\frac{x+1}{x} = \\ln(x) + 1 + \\frac{1}{x}$"
        },
        {
          qid: "XX_005_m05",
          q: "Differentiate $y = x\\ln(x^2)$.",
          a: "**Method 1 (simplify first):** $y = 2x\\ln(x)$, so $y' = 2(\\ln(x) + 1)$\n**Method 2 (direct):** $u = x$, $v = \\ln(x^2)$. $v' = \\frac{2x}{x^2} = \\frac{2}{x}$. $y' = \\ln(x^2) + 2 = 2\\ln(x) + 2$"
        },
      ],
      hard: [
        {
          qid: "XX_005_h01",
          q: "Differentiate $y = x^2 \\ln(3x + 1)$.",
          a: "$u = x^2$, $v = \\ln(3x+1)$. $u' = 2x$, $v' = \\frac{3}{3x+1}$.\n$y' = 2x\\ln(3x+1) + \\frac{3x^2}{3x+1}$"
        },
        {
          qid: "XX_005_h02",
          q: "Differentiate $y = (x^2 - 1)\\ln(x + 1)$.",
          a: "$u = x^2-1$, $v = \\ln(x+1)$. $u' = 2x$, $v' = \\frac{1}{x+1}$.\n$y' = 2x\\ln(x+1) + \\frac{x^2-1}{x+1} = 2x\\ln(x+1) + \\frac{(x-1)(x+1)}{x+1} = 2x\\ln(x+1) + (x - 1)$"
        },
        {
          qid: "XX_005_h03",
          q: "Find the coordinates of the stationary point of $f(x) = x^2\\ln(x)$ for $x > 0$.",
          a: "$f'(x) = 2x\\ln(x) + x = x(2\\ln(x) + 1)$.\nFor $x > 0$: $2\\ln(x) + 1 = 0 \\Rightarrow \\ln(x) = -\\frac{1}{2} \\Rightarrow x = e^{-1/2} = \\frac{1}{\\sqrt{e}}$.\n$f\\left(\\frac{1}{\\sqrt{e}}\\right) = \\frac{1}{e} \\cdot \\left(-\\frac{1}{2}\\right) = -\\frac{1}{2e}$.\nStationary point: $\\left(\\frac{1}{\\sqrt{e}}, -\\frac{1}{2e}\\right)$"
        },
        {
          qid: "XX_005_h04",
          q: "Using the product rule on $y = x^{-1}\\ln(x)$, find $\\frac{dy}{dx}$.",
          a: "$u = x^{-1}$, $v = \\ln(x)$. $u' = -x^{-2}$, $v' = \\frac{1}{x}$.\n$y' = -x^{-2}\\ln(x) + x^{-1} \\cdot \\frac{1}{x} = \\frac{-\\ln(x)}{x^2} + \\frac{1}{x^2} = \\frac{1 - \\ln(x)}{x^2}$"
        },
        {
          qid: "XX_005_h05",
          q: "Differentiate $y = e^x \\ln(x)$.",
          a: "$u = e^x$, $v = \\ln(x)$. $u' = e^x$, $v' = \\frac{1}{x}$.\n$y' = e^x\\ln(x) + \\frac{e^x}{x} = e^x\\left(\\ln(x) + \\frac{1}{x}\\right)$"
        },
      ],
    },

    // Product Rule > Differentiation of a product of functions that requires
    {
      pt_id: "XX_006",
      topic: "Uncategorised",
      subtopic: "General",
      concept: "Product Rule",
      pt: "Differentiation of a product of functions that requires the use of quotient or chain rule as part of the product rule process",
      testing: "Testing: Nested rules — product rule with chain rule inside",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
        {
          qid: "XX_006_e01",
          q: "Differentiate $y = x(2x + 1)^3$.",
          a: "$u = x$, $v = (2x+1)^3$. $u' = 1$, $v' = 6(2x+1)^2$.\n$y' = (2x+1)^3 + 6x(2x+1)^2 = (2x+1)^2[(2x+1) + 6x] = (2x+1)^2(8x + 1)$"
        },
        {
          qid: "XX_006_e02",
          q: "Differentiate $y = x^2 \\sin(3x)$.",
          a: "$u = x^2$, $v = \\sin(3x)$. $u' = 2x$, $v' = 3\\cos(3x)$.\n$y' = 2x\\sin(3x) + 3x^2\\cos(3x) = x[2\\sin(3x) + 3x\\cos(3x)]$"
        },
        {
          qid: "XX_006_e03",
          q: "Differentiate $y = (x + 1)e^{2x}$.",
          a: "$u = x+1$, $v = e^{2x}$. $u' = 1$, $v' = 2e^{2x}$.\n$y' = e^{2x} + 2(x+1)e^{2x} = e^{2x}(1 + 2x + 2) = e^{2x}(2x + 3)$"
        },
      ],
      medium: [
        {
          qid: "XX_006_m01",
          q: "Differentiate $y = x^3 \\sin(2x)$.",
          a: "$y' = 3x^2 \\sin(2x) + x^3 \\cdot 2\\cos(2x) = x^2[3\\sin(2x) + 2x\\cos(2x)]$"
        },
        {
          qid: "XX_006_m02",
          q: "Differentiate $y = e^{3x}(x^2 + 1)^4$.",
          a: "$u = e^{3x}$, $v = (x^2+1)^4$. $u' = 3e^{3x}$, $v' = 8x(x^2+1)^3$.\n$y' = 3e^{3x}(x^2+1)^4 + 8xe^{3x}(x^2+1)^3 = e^{3x}(x^2+1)^3[3(x^2+1) + 8x] = e^{3x}(x^2+1)^3(3x^2 + 8x + 3)$"
        },
        {
          qid: "XX_006_m03",
          q: "Differentiate $y = (2x - 3)^2 \\cos(x)$.",
          a: "$u = (2x-3)^2$, $v = \\cos(x)$. $u' = 4(2x-3)$, $v' = -\\sin(x)$.\n$y' = 4(2x-3)\\cos(x) - (2x-3)^2\\sin(x) = (2x-3)[4\\cos(x) - (2x-3)\\sin(x)]$"
        },
        {
          qid: "XX_006_m04",
          q: "Differentiate $y = x\\sqrt{x^2 + 4}$.",
          a: "$u = x$, $v = (x^2+4)^{1/2}$. $u' = 1$, $v' = \\frac{x}{\\sqrt{x^2+4}}$.\n$y' = \\sqrt{x^2+4} + \\frac{x^2}{\\sqrt{x^2+4}} = \\frac{x^2+4+x^2}{\\sqrt{x^2+4}} = \\frac{2x^2+4}{\\sqrt{x^2+4}}$"
        },
        {
          qid: "XX_006_m05",
          q: "Differentiate $y = e^{-x}\\sin(x)$.",
          a: "$u = e^{-x}$, $v = \\sin(x)$. $u' = -e^{-x}$, $v' = \\cos(x)$.\n$y' = -e^{-x}\\sin(x) + e^{-x}\\cos(x) = e^{-x}(\\cos(x) - \\sin(x))$"
        },
      ],
      hard: [
        {
          qid: "XX_006_h01",
          q: "Differentiate $y = (x^2 + 5\\pi)\\cos(2x)$.",
          a: "$u = x^2+5\\pi$, $v = \\cos(2x)$. $u' = 2x$, $v' = -2\\sin(2x)$.\n$y' = 2x\\cos(2x) - 2(x^2 + 5\\pi)\\sin(2x)$"
        },
        {
          qid: "XX_006_h02",
          q: "Differentiate $y = x^2 e^x \\cos(x)$.",
          a: "Using extended product rule on three functions:\n$y' = 2xe^x\\cos(x) + x^2 e^x\\cos(x) + x^2 e^x(-\\sin(x))$\n$= xe^x[2\\cos(x) + x\\cos(x) - x\\sin(x)] = xe^x[(2+x)\\cos(x) - x\\sin(x)]$"
        },
        {
          qid: "XX_006_h03",
          q: "Differentiate $y = (3x - 1)^4 \\sqrt{2x + 5}$.",
          a: "$u = (3x-1)^4$, $v = (2x+5)^{1/2}$. $u' = 12(3x-1)^3$, $v' = \\frac{1}{\\sqrt{2x+5}}$.\n$y' = 12(3x-1)^3\\sqrt{2x+5} + \\frac{(3x-1)^4}{\\sqrt{2x+5}}$\n$= \\frac{(3x-1)^3}{\\sqrt{2x+5}}[12(2x+5) + (3x-1)] = \\frac{(3x-1)^3(27x + 59)}{\\sqrt{2x+5}}$"
        },
        {
          qid: "XX_006_h04",
          q: "Differentiate $y = x\\sin(x)e^x$.",
          a: "Using extended product rule:\n$y' = \\sin(x)e^x + x\\cos(x)e^x + x\\sin(x)e^x = e^x[\\sin(x) + x\\cos(x) + x\\sin(x)]$\n$= e^x[(1+x)\\sin(x) + x\\cos(x)]$"
        },
        {
          qid: "XX_006_h05",
          q: "Differentiate $y = (x^2 - 4)^3(3x + 1)^2$.",
          a: "$u = (x^2-4)^3$, $v = (3x+1)^2$. $u' = 6x(x^2-4)^2$, $v' = 6(3x+1)$.\n$y' = 6x(x^2-4)^2(3x+1)^2 + 6(x^2-4)^3(3x+1)$\n$= 6(x^2-4)^2(3x+1)[x(3x+1) + (x^2-4)] = 6(x^2-4)^2(3x+1)(4x^2 + x - 4)$"
        },
      ],
    },

    // Product Rule > Product rule differentiation of simple functions
    {
      pt_id: "XX_007",
      topic: "Uncategorised",
      subtopic: "General",
      concept: "Product Rule",
      pt: "Product rule differentiation of simple functions",
      testing: "Testing: $(uv)' = u'v + uv'$ with polynomial/simple functions",
      reason_bank: ["wrong_rule", "setup_error", "sign_error", "algebra_slip", "missing_chain_factor", "not_sure"],
      easy: [
        {
          qid: "XX_007_e01",
          q: "Differentiate $y = xe^x$.",
          a: "$y' = e^x + xe^x = e^x(1 + x)$"
        },
        {
          qid: "XX_007_e02",
          q: "Use the product rule to differentiate $y = x^2(x + 3)$.",
          a: "Let $u = x^2$, $v = x + 3$. Then $u' = 2x$, $v' = 1$.\n$y' = 2x(x+3) + x^2(1) = 2x^2 + 6x + x^2 = 3x^2 + 6x = 3x(x+2)$"
        },
        {
          qid: "XX_007_e03",
          q: "Differentiate $y = (2x + 1)e^x$.",
          a: "$u = 2x+1$, $v = e^x$. $u' = 2$, $v' = e^x$.\n$y' = 2e^x + (2x+1)e^x = e^x(2x + 3)$"
        },
      ],
      medium: [
        {
          qid: "XX_007_m01",
          q: "Differentiate $y = x^2 e^x$.",
          a: "$y' = 2xe^x + x^2 e^x = xe^x(2 + x)$"
        },
        {
          qid: "XX_007_m02",
          q: "Differentiate $y = (3x + 1)(2x - 5)^4$.",
          a: "$y' = 3(2x-5)^4 + (3x+1) \\cdot 8(2x-5)^3 = (2x-5)^3[3(2x-5) + 8(3x+1)] = (2x-5)^3(30x - 7)$"
        },
        {
          qid: "XX_007_m03",
          q: "Differentiate $y = x^3 \\sin(x)$.",
          a: "$y' = 3x^2 \\sin(x) + x^3 \\cos(x) = x^2[3\\sin(x) + x\\cos(x)]$"
        },
        {
          qid: "XX_007_m04",
          q: "Differentiate $y = \\sqrt{x}(x^2 - 1)$.",
          a: "$u = x^{1/2}$, $v = x^2 - 1$. $u' = \\frac{1}{2\\sqrt{x}}$, $v' = 2x$.\n$y' = \\frac{x^2 - 1}{2\\sqrt{x}} + 2x\\sqrt{x} = \\frac{x^2 - 1 + 4x^2}{2\\sqrt{x}} = \\frac{5x^2 - 1}{2\\sqrt{x}}$"
        },
        {
          qid: "XX_007_m05",
          q: "Differentiate $y = (x + 4)e^{-x}$.",
          a: "$u = x+4$, $v = e^{-x}$. $u' = 1$, $v' = -e^{-x}$.\n$y' = e^{-x} + (x+4)(-e^{-x}) = e^{-x}(1 - x - 4) = -(x+3)e^{-x}$"
        },
      ],
      hard: [
        {
          qid: "XX_007_h01",
          q: "Differentiate $y = (x^2 + 3x)(4x - 1)^3$.",
          a: "$u = x^2+3x$, $v = (4x-1)^3$. $u' = 2x+3$, $v' = 12(4x-1)^2$.\n$y' = (2x+3)(4x-1)^3 + 12(x^2+3x)(4x-1)^2$\n$= (4x-1)^2[(2x+3)(4x-1) + 12x(x+3)]$\n$= (4x-1)^2(20 x^{2} + 46 x - 3)$"
        },
        {
          qid: "XX_007_h02",
          q: "Differentiate $y = x^2 e^{3x}$.",
          a: "$u = x^2$, $v = e^{3x}$. $u' = 2x$, $v' = 3e^{3x}$.\n$y' = 2xe^{3x} + 3x^2 e^{3x} = xe^{3x}(2 + 3x)$"
        },
        {
          qid: "XX_007_h03",
          q: "Differentiate $y = (2x - 1)^3(x + 5)^2$.",
          a: "$u = (2x-1)^3$, $v = (x+5)^2$. $u' = 6(2x-1)^2$, $v' = 2(x+5)$.\n$y' = 6(2x-1)^2(x+5)^2 + 2(2x-1)^3(x+5)$\n$= 2(2x-1)^2(x+5)[3(x+5) + (2x-1)] = 2(2x-1)^2(x+5)(5x + 14)$"
        },
        {
          qid: "XX_007_h04",
          q: "Differentiate $y = \\sqrt{x}\\cos(x)$.",
          a: "$u = x^{1/2}$, $v = \\cos(x)$. $u' = \\frac{1}{2\\sqrt{x}}$, $v' = -\\sin(x)$.\n$y' = \\frac{\\cos(x)}{2\\sqrt{x}} - \\sqrt{x}\\sin(x) = \\frac{\\cos(x) - 2x\\sin(x)}{2\\sqrt{x}}$"
        },
        {
          qid: "XX_007_h05",
          q: "Differentiate $y = (3x^2 - 2)e^{-2x}$.",
          a: "$u = 3x^2-2$, $v = e^{-2x}$. $u' = 6x$, $v' = -2e^{-2x}$.\n$y' = 6xe^{-2x} - 2(3x^2-2)e^{-2x} = e^{-2x}(6x - 6x^2 + 4) = -2e^{-2x}(3x^2 - 3x - 2)$"
        },
      ],
    },

    // Product Rule > Using a table of values or graphs of two functions and 
    {
      pt_id: "XX_008",
      topic: "Uncategorised",
      subtopic: "General",
      concept: "Product Rule",
      pt: "Using a table of values or graphs of two functions and their derivatives to calculate the derivative of the product of the two functions at a given point",
      testing: "Testing: $(fg)'(a) = f'(a)g(a) + f(a)g'(a)$ from table",
      reason_bank: ["wrong_rule", "setup_error", "sign_error", "algebra_slip", "missing_chain_factor", "not_sure"],
      easy: [
        {
          qid: "XX_008_e01",
          q: "Given $f(1) = 2$, $f'(1) = 3$, $g(1) = 5$, $g'(1) = 1$, find $\\frac{d}{dx}[f(x)g(x)]$ at $x = 1$.",
          a: "$(fg)'(1) = f'(1)g(1) + f(1)g'(1) = 3(5) + 2(1) = 15 + 2 = 17$"
        },
        {
          qid: "XX_008_e02",
          q: "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 2   | 4       | 0        | 3       | 2        |\nFind $\\frac{d}{dx}[f(x)g(x)]$ at $x = 2$.",
          a: "$f'(2)g(2) + f(2)g'(2) = 0(3) + 4(2) = 8$"
        },
        {
          qid: "XX_008_e03",
          q: "Given $f(0) = 3$, $f'(0) = -2$, $g(0) = 4$, $g'(0) = 5$, find $\\frac{d}{dx}[f(x)g(x)]$ at $x = 0$.",
          a: "$f'(0)g(0) + f(0)g'(0) = (-2)(4) + 3(5) = -8 + 15 = 7$"
        },
      ],
      medium: [
        {
          qid: "XX_008_m01",
          q: "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 1   | 3       | 4        | 2       | -1       |\n| 2   | 5       | -2       | 1       | 3        |\n| 3   | 1       | 6        | 3       | 2        |\nFind $\\frac{d}{dx}[f(x)g(x)]$ at $x = 3$.",
          a: "$f'(3)g(3) + f(3)g'(3) = 6(3) + 1(2) = 18 + 2 = 20$"
        },
        {
          qid: "XX_008_m02",
          q: "Let $h(x) = f(x)g(x)$. Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 1   | -1      | 2        | 6       | 3        |\n| 4   | 3       | -4       | 2       | 1        |\nFind $h'(1)$ and $h'(4)$.",
          a: "$h'(1) = f'(1)g(1) + f(1)g'(1) = 2(6) + (-1)(3) = 12 - 3 = 9$\n$h'(4) = f'(4)g(4) + f(4)g'(4) = (-4)(2) + 3(1) = -8 + 3 = -5$"
        },
        {
          qid: "XX_008_m03",
          q: "Given $f(2) = \\frac{1}{2}$, $f'(2) = 3$, $g(2) = 4$, $g'(2) = -\\frac{1}{3}$, find $\\frac{d}{dx}[f(x)g(x)]$ at $x = 2$.",
          a: "$f'(2)g(2) + f(2)g'(2) = 3(4) + \\frac{1}{2} \\cdot \\left(-\\frac{1}{3}\\right) = 12 - \\frac{1}{6} = \\frac{71}{6}$"
        },
        {
          qid: "XX_008_m04",
          q: "Let $h(x) = f(x)g(x)$. Given $f(3) = 2$, $f'(3) = k$, $g(3) = 5$, $g'(3) = -1$ and $h'(3) = 13$, find $k$.",
          a: "$h'(3) = f'(3)g(3) + f(3)g'(3) = 5k + 2(-1) = 5k - 2$\n$5k - 2 = 13 \\Rightarrow 5k = 15 \\Rightarrow k = 3$"
        },
        {
          qid: "XX_008_m05",
          q: "Using the table, determine whether $h(x) = f(x)g(x)$ has a stationary point at $x = 2$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 2   | 6       | -3       | 4       | 2        |",
          a: "$h'(2) = f'(2)g(2) + f(2)g'(2) = (-3)(4) + 6(2) = -12 + 12 = 0$\nSince $h'(2) = 0$, yes, $h(x)$ has a stationary point at $x = 2$."
        },
      ],
      hard: [
        {
          qid: "XX_008_h01",
          q: "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 1   | 3       | 4        | 2       | -1       |\n| 2   | 5       | -2       | 1       | 3        |\nFind $\\frac{d}{dx}[f(x)g(x)]$ at $x = 1$ and $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 1$.",
          a: "Product: $f'(1)g(1) + f(1)g'(1) = 4(2) + 3(-1) = 8 - 3 = 5$\nQuotient: $\\frac{f'(1)g(1) - f(1)g'(1)}{[g(1)]^2} = \\frac{4(2) - 3(-1)}{4} = \\frac{11}{4}$"
        },
        {
          qid: "XX_008_h02",
          q: "Using the values $f(2) = 3$, $f'(2) = -1$, $g(2) = 4$, $g'(2) = 2$, find $\\frac{d}{dx}\\left[[f(x)]^2 \\cdot g(x)\\right]$ at $x = 2$.",
          a: "$\\frac{d}{dx}[f^2 g] = 2f(x)f'(x)g(x) + [f(x)]^2 g'(x)$\n$= 2(3)(-1)(4) + (3)^2(2) = -24 + 18 = -6$"
        },
        {
          qid: "XX_008_h03",
          q: "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ | $h(x)$ | $h'(x)$ |\n|-----|---------|----------|---------|----------|---------|----------|\n| 1   | 2       | -3       | 4       | 1        | 5       | -2       |\nFind $\\frac{d}{dx}[f(x)g(x)h(x)]$ at $x = 1$.",
          a: "$\\frac{d}{dx}[fgh] = f'gh + fg'h + fgh'$\n$= (-3)(4)(5) + (2)(1)(5) + (2)(4)(-2) = -60 + 10 - 16 = -66$"
        },
        {
          qid: "XX_008_h04",
          q: "Using the values $f(1) = 3$, $f'(1) = 2$, $g(1) = -2$, $g'(1) = 4$, find the equation of the tangent to $y = f(x)g(x)$ at $x = 1$.",
          a: "At $x = 1$: $y = f(1)g(1) = 3(-2) = -6$. Point: $(1, -6)$.\nGradient: $f'(1)g(1) + f(1)g'(1) = 2(-2) + 3(4) = -4 + 12 = 8$\nTangent: $y - (-6) = 8(x - 1)$, i.e. $y = 8x - 14$"
        },
        {
          qid: "XX_008_h05",
          q: "Using the table below, determine the value(s) of $x$ for which $\\frac{d}{dx}[f(x)g(x)] > 0$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 0   | 1       | 2        | -3      | 4        |\n| 1   | -2      | 3        | 1       | -5       |\n| 2   | 4       | -1       | 2       | 3        |",
          a: "$x = 0$: $f'g + fg' = 2(-3) + 1(4) = -2 < 0$ ✗\n$x = 1$: $f'g + fg' = 3(1) + (-2)(-5) = 13 > 0$ ✓\n$x = 2$: $f'g + fg' = (-1)(2) + 4(3) = 10 > 0$ ✓\nSo $(fg)' > 0$ at $x = 1$ and $x = 2$."
        },
      ],
    },
  ]
};