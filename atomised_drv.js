var ATOMISED_DRV = {
  "topic": "Discrete Random Variables",
  "questions": [
    {
      "pt_id": "DR_001",
      "topic": "Discrete Random Variables",
      "subtopic": "Bernoulli Distributions",
      "concept": "Bernoulli Distribution",
      "pt": "Calculating mean and standard deviation of Bernoulli distribution",
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
          "qid": "DR_001_m01",
          "q": "$X \\sim \\text{Bernoulli}(0.3)$. Find $E(X)$ and $\\text{SD}(X)$.",
          "a": "$E(X) = p = 0.3$. $\\text{Var}(X) = p(1-p) = 0.21$. $\\text{SD}(X) = \\sqrt{0.21} \\approx 0.458$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "DR_002",
      "topic": "Discrete Random Variables",
      "subtopic": "Bernoulli Distributions",
      "concept": "Bernoulli Distribution",
      "pt": "Stating Bernoulli distribution from context",
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
          "qid": "DR_002_m01",
          "q": "A coin is biased so that $P(\\text{Head}) = 0.6$. Let $X = 1$ if Head, $X = 0$ if Tail. State the distribution of $X$.",
          "a": "$X \\sim \\text{Bernoulli}(0.6)$ (or equivalently $X \\sim \\text{Bin}(1, 0.6)$)"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "DR_003",
      "topic": "Discrete Random Variables",
      "subtopic": "Binomial Distributions",
      "concept": "Binomial Probability",
      "pt": "Calculating binomial probability $P(X = k)$",
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
          "qid": "DR_003_m01",
          "q": "$X \\sim \\text{Bin}(8, 0.3)$. Find $P(X = 2)$.",
          "a": "$P(X=2) = \\binom{8}{2}(0.3)^2(0.7)^6 = 28 \\times 0.09 \\times 0.117649 = 0.2965$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "DR_004",
      "topic": "Discrete Random Variables",
      "subtopic": "Binomial Distributions",
      "concept": "Binomial Probability",
      "pt": "Calculating binomial tail probability",
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
          "qid": "DR_004_m01",
          "q": "$X \\sim \\text{Bin}(5, 0.4)$. Find $P(X \\geq 3)$.",
          "a": "$P(X \\geq 3) = P(3) + P(4) + P(5) = \\binom{5}{3}(0.4)^3(0.6)^2 + \\binom{5}{4}(0.4)^4(0.6) + (0.4)^5 = 0.2304 + 0.0768 + 0.01024 = 0.3174$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "DR_005",
      "topic": "Discrete Random Variables",
      "subtopic": "Binomial Distributions",
      "concept": "Binomial Probability",
      "pt": "Calculating expected value and variance of binomial distribution",
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
          "qid": "DR_005_m01",
          "q": "$X \\sim \\text{Bin}(50, 0.2)$. Find $E(X)$ and $\\text{SD}(X)$.",
          "a": "$E(X) = np = 10$. $\\text{Var}(X) = np(1-p) = 8$. $\\text{SD}(X) = 2\\sqrt{2} \\approx 2.83$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "DR_006",
      "topic": "Discrete Random Variables",
      "subtopic": "Binomial Distributions",
      "concept": "Binomial Probability",
      "pt": "Calculating negative binomial probability (trials until rth success)",
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
          "qid": "DR_006_m01",
          "q": "The probability of scoring a goal in any shot is 0.2. Find the probability that the 3rd goal is scored on the 8th shot.",
          "a": "Need 2 goals in first 7 shots, then goal on 8th. $P = \\binom{7}{2}(0.2)^2(0.8)^5 \\times 0.2 = 21 \\times 0.04 \\times 0.32768 \\times 0.2 = 0.05505$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "DR_007",
      "topic": "Discrete Random Variables",
      "subtopic": "Binomial Distributions",
      "concept": "Binomial Probability",
      "pt": "Finding n and p from mean and variance of binomial, then evaluating a probability",
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
          "qid": "DR_007_m01",
          "q": "$X \\sim \\text{Bin}(n, p)$ with $E(X) = 6$ and $\\text{Var}(X) = 4.2$. Find $n$ and $p$.",
          "a": "$np = 6$ and $np(1-p) = 4.2$, so $1-p = 0.7 \\Rightarrow p = 0.3$. Then $n = 20$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "DR_008",
      "topic": "Discrete Random Variables",
      "subtopic": "Binomial Distributions",
      "concept": "Binomial Setup",
      "pt": "Evaluating validity of binomial distribution assumptions in context",
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
          "qid": "DR_008_m01",
          "q": "A survey asks 50 people from the same workplace if they support a policy. Can $X$ (number who support) be modelled by a binomial distribution? Explain.",
          "a": "Potentially not valid because responses from colleagues in the same workplace may not be independent — social influence could affect answers. Also, the probability of support may not be constant across individuals."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "DR_009",
      "topic": "Discrete Random Variables",
      "subtopic": "Binomial Distributions",
      "concept": "Binomial Setup",
      "pt": "Stating assumptions required for binomial distribution validity",
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
          "qid": "DR_009_m01",
          "q": "State the conditions required for a binomial distribution to be an appropriate model.",
          "a": "(1) Fixed number of trials $n$. (2) Each trial has exactly two outcomes (success/failure). (3) Probability of success $p$ is constant for each trial. (4) Trials are independent."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "DR_010",
      "topic": "Discrete Random Variables",
      "subtopic": "Binomial Distributions",
      "concept": "Binomial Setup",
      "pt": "Stating binomial distribution $X \\sim \\text{Bin}(n,p)$ from context",
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
          "qid": "DR_010_m01",
          "q": "A fair six-sided die is rolled 12 times. Let $X$ be the number of sixes rolled. State the distribution of $X$.",
          "a": "$X \\sim \\text{Bin}\\left(12, \\frac{1}{6}\\right)$"
        },
        {
          "qid": "DR_010_m02",
          "q": "In a class, 70% of students pass. A random sample of 20 students is selected. Let $X$ be the number who pass. State the distribution of $X$.",
          "a": "$X \\sim \\text{Bin}(20, 0.7)$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "DR_011",
      "topic": "Discrete Random Variables",
      "subtopic": "General Discrete Random Variables",
      "concept": "DRV Distribution Tables",
      "pt": "Constructing probability distribution from frequency data",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "substitution_error",
        "algebra_slip",
        "interpretation_mixup",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "DR_011_m01",
          "q": "A survey of 50 households recorded the number of pets:\n| Pets | 0 | 1 | 2 | 3 |\n|------|---|---|---|---|\n| Freq | 15| 20| 10| 5 |\nConstruct the probability distribution for $X$, the number of pets.",
          "a": "$P(X=0) = 0.3$, $P(X=1) = 0.4$, $P(X=2) = 0.2$, $P(X=3) = 0.1$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "DR_012",
      "topic": "Discrete Random Variables",
      "subtopic": "General Discrete Random Variables",
      "concept": "DRV Distribution Tables",
      "pt": "Constructing probability distribution table for profit/loss random variable",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "substitution_error",
        "algebra_slip",
        "interpretation_mixup",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "DR_012_m01",
          "q": "A game costs $\\$5$ to play. You roll a die: if you get 6, you win $\\$20$; otherwise you win nothing. Construct the probability distribution for the profit $P$.",
          "a": "$P = -5$ (lose) with probability $\\frac{5}{6}$; $P = 15$ (win $20 - 5$) with probability $\\frac{1}{6}$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "DR_013",
      "topic": "Discrete Random Variables",
      "subtopic": "General Discrete Random Variables",
      "concept": "DRV Distribution Tables",
      "pt": "Constructing probability distribution table for related random variable",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "substitution_error",
        "algebra_slip",
        "interpretation_mixup",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "DR_013_m01",
          "q": "$X$ has the distribution:\n| $x$ | 1 | 2 | 3 |\n|-----|---|---|---|\n| $P$ | 0.2 | 0.5 | 0.3 |\nFind the probability distribution of $Y = 2X + 1$.",
          "a": "$Y = 3$ with $P = 0.2$, $Y = 5$ with $P = 0.5$, $Y = 7$ with $P = 0.3$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "DR_014",
      "topic": "Discrete Random Variables",
      "subtopic": "General Discrete Random Variables",
      "concept": "DRV Distribution Tables",
      "pt": "Probability distribution table problem",
      "testing": "Testing: Use ΣP = 1 to find unknown",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "substitution_error",
        "algebra_slip",
        "interpretation_mixup",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "DR_014_m01",
          "q": "Complete the probability distribution table:\n| $x$ | 1 | 2 | 3 | 4 |\n|-----|---|---|---|---|\n| $P(X=x)$ | 0.1 | 0.3 | $k$ | 0.2 |",
          "a": "$0.1 + 0.3 + k + 0.2 = 1 \\Rightarrow k = 0.4$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "DR_015",
      "topic": "Discrete Random Variables",
      "subtopic": "General Discrete Random Variables",
      "concept": "DRV Expected Value",
      "pt": "Calculating $E(X)$ for discrete random variable",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "substitution_error",
        "algebra_slip",
        "interpretation_mixup",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "DR_015_m01",
          "q": "A random variable $X$ has $P(X = k) = \\frac{k}{10}$ for $k = 1, 2, 3, 4$. Find $E(X)$.",
          "a": "$E(X) = 1 \\cdot \\frac{1}{10} + 2 \\cdot \\frac{2}{10} + 3 \\cdot \\frac{3}{10} + 4 \\cdot \\frac{4}{10} = \\frac{1+4+9+16}{10} = 3$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "DR_016",
      "topic": "Discrete Random Variables",
      "subtopic": "General Discrete Random Variables",
      "concept": "DRV Expected Value",
      "pt": "Calculating expected value of discrete random variable",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "substitution_error",
        "algebra_slip",
        "interpretation_mixup",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "DR_016_m01",
          "q": "Find $E(X)$ from the distribution:\n| $x$ | 0 | 1 | 2 | 3 |\n|-----|---|---|---|---|\n| $P$ | 0.1 | 0.4 | 0.3 | 0.2 |",
          "a": "$E(X) = 0(0.1) + 1(0.4) + 2(0.3) + 3(0.2) = 0 + 0.4 + 0.6 + 0.6 = 1.6$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "DR_017",
      "topic": "Discrete Random Variables",
      "subtopic": "General Discrete Random Variables",
      "concept": "DRV Probability",
      "pt": "Calculating conditional probability P(X=a | X≤b) for discrete RV",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "substitution_error",
        "algebra_slip",
        "interpretation_mixup",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "DR_017_m01",
          "q": "Given $P(X=1)=0.2$, $P(X=2)=0.3$, $P(X=3)=0.5$. Find $P(X=2 | X \\leq 2)$.",
          "a": "$P(X=2|X\\leq 2) = \\frac{P(X=2)}{P(X\\leq 2)} = \\frac{0.3}{0.2+0.3} = \\frac{0.3}{0.5} = 0.6$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "DR_018",
      "topic": "Discrete Random Variables",
      "subtopic": "General Discrete Random Variables",
      "concept": "DRV Probability",
      "pt": "Calculating expected profit/loss from discrete random variable with cost structure",
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
          "qid": "DR_018_m01",
          "q": "A raffle has 100 tickets at $\\$2$ each. One prize of $\\$50$ is awarded. Find the expected profit for a person buying one ticket.",
          "a": "$E(\\text{profit}) = \\frac{1}{100}(50-2) + \\frac{99}{100}(-2) = 0.48 - 1.98 = -\\$1.50$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "DR_019",
      "topic": "Discrete Random Variables",
      "subtopic": "General Discrete Random Variables",
      "concept": "DRV Probability",
      "pt": "Calculating probability using probability distribution",
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
          "qid": "DR_019_m01",
          "q": "Using the distribution above (0.1, 0.4, 0.3, 0.2), find $P(X \\geq 2)$.",
          "a": "$P(X \\geq 2) = 0.3 + 0.2 = 0.5$"
        },
        {
          "qid": "DR_019_m02",
          "q": "Find $P(1 \\leq X < 3)$.",
          "a": "$P(1 \\leq X < 3) = P(X=1) + P(X=2) = 0.4 + 0.3 = 0.7$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "DR_020",
      "topic": "Discrete Random Variables",
      "subtopic": "General Discrete Random Variables",
      "concept": "DRV Variance/SD",
      "pt": "Calculating Var(X) for discrete random variable",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "substitution_error",
        "algebra_slip",
        "interpretation_mixup",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "DR_020_m01",
          "q": "Given $E(X) = 2$ and:\n| $x$ | 0 | 1 | 2 | 3 | 4 |\n|-----|---|---|---|---|---|\n| $P$ | 0.1 | 0.2 | 0.3 | 0.3 | 0.1 |\nFind $\\text{Var}(X)$.",
          "a": "$E(X^2) = 0 + 0.2 + 1.2 + 2.7 + 1.6 = 5.7$. $\\text{Var}(X) = 5.7 - 2^2 = 1.7$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "DR_021",
      "topic": "Discrete Random Variables",
      "subtopic": "General Discrete Random Variables",
      "concept": "Expected Value (Interpretation)",
      "pt": "Determining parameter value to achieve specified expected value",
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
          "qid": "DR_021_m01",
          "q": "A game pays $\\$k$ for a six on a die and costs $\\$3$ to play. Find $k$ so the game is fair.",
          "a": "$E(\\text{profit}) = \\frac{1}{6}(k-3) + \\frac{5}{6}(-3) = 0 \\Rightarrow \\frac{k-3}{6} = \\frac{15}{6} \\Rightarrow k = 18$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "DR_022",
      "topic": "Discrete Random Variables",
      "subtopic": "General Discrete Random Variables",
      "concept": "Expected Value (Interpretation)",
      "pt": "Interpreting expected value to determine long-run profitability",
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
          "qid": "DR_022_m01",
          "q": "A game has $E(\\text{profit}) = -\\$0.50$. Interpret this result.",
          "a": "On average, a player will lose $\\$0.50$ per game in the long run. The game is not fair — it favours the operator."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "DR_023",
      "topic": "Discrete Random Variables",
      "subtopic": "General Discrete Random Variables",
      "concept": "Variance Calculations",
      "pt": "Finding mean and variance under linear transformation $Y = aX + b$",
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
          "qid": "DR_023_m01",
          "q": "Given $E(X) = 5$ and $\\text{Var}(X) = 4$, find $E(3X - 2)$ and $\\text{Var}(3X - 2)$.",
          "a": "$E(3X-2) = 3(5) - 2 = 13$. $\\text{Var}(3X-2) = 9(4) = 36$."
        },
        {
          "qid": "DR_023_m02",
          "q": "Temperatures in °C have mean 20 and SD 3. Convert to °F using $F = 1.8C + 32$. Find the mean and SD in °F.",
          "a": "$E(F) = 1.8(20) + 32 = 68$°F. $\\text{SD}(F) = 1.8(3) = 5.4$°F."
        }
      ],
      "hard": []
    }
  ]
};
