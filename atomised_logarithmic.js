var ATOMISED_LOGARITHMIC = {
  "topic": "The Logarithmic Function",
  "questions": [
    {
      "pt_id": "LN_001",
      "topic": "The Logarithmic Function",
      "subtopic": "Calculus of the Natural Logarithmic Function",
      "concept": "Integration Techniques",
      "pt": "Integrating $f'(x)/f(x)$ to obtain $\\ln|f(x)|$",
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
          "qid": "LN_001_m01",
          "q": "Find $\\int \\frac{2x}{x^2 + 5} dx$.",
          "a": "$= \\ln|x^2 + 5| + C = \\ln(x^2 + 5) + C$ (since $x^2 + 5 > 0$)"
        },
        {
          "qid": "LN_001_m02",
          "q": "Find $\\int \\frac{3x^2}{x^3 - 1} dx$.",
          "a": "$= \\ln|x^3 - 1| + C$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "LN_002",
      "topic": "The Logarithmic Function",
      "subtopic": "Calculus of the Natural Logarithmic Function",
      "concept": "Integration Techniques",
      "pt": "Integrating $f'(x)/f(x)$ to obtain $\\ln|f(x)|$ with initial condition and log law simplification",
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
          "qid": "LN_002_m01",
          "q": "Given $\\frac{dy}{dx} = \\frac{4}{2x+1}$ and $y(0) = \\ln 3$, find $y(x)$.",
          "a": "$y = 2\\ln|2x+1| + C$. $y(0) = 2\\ln(1) + C = \\ln 3 \\Rightarrow C = \\ln 3$. $y = 2\\ln(2x+1) + \\ln 3 = \\ln[3(2x+1)^2]$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "LN_003",
      "topic": "The Logarithmic Function",
      "subtopic": "Calculus of the Natural Logarithmic Function",
      "concept": "Logarithmic Evaluation (Calculus)",
      "pt": "Finding when derivative equals zero by differentiating function with logarithm",
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
          "qid": "LN_003_m01",
          "q": "Find the stationary point of $f(x) = x - 2\\ln(x)$ for $x > 0$.",
          "a": "$f'(x) = 1 - \\frac{2}{x} = 0 \\Rightarrow x = 2$. $f(2) = 2 - 2\\ln 2$. Point: $(2, 2 - 2\\ln 2)$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "LN_004",
      "topic": "The Logarithmic Function",
      "subtopic": "Calculus of the Natural Logarithmic Function",
      "concept": "Product Rule",
      "pt": "Anti-differentiating $\\ln(x)$ using integration by parts (reverse product rule)",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "sign_error",
        "algebra_slip",
        "missing_chain_factor",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "LN_004_m01",
          "q": "Given that $\\frac{d}{dx}[x\\ln(x)] = \\ln(x) + 1$, find $\\int \\ln(x) dx$.",
          "a": "$\\int [\\ln(x) + 1] dx = x\\ln(x) + C$, so $\\int \\ln(x) dx = x\\ln(x) - x + C$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "LN_005",
      "topic": "The Logarithmic Function",
      "subtopic": "Calculus of the Natural Logarithmic Function",
      "concept": "Product Rule",
      "pt": "Differentiating $x \\cdot \\ln(x)$ using product rule",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "sign_error",
        "algebra_slip",
        "missing_chain_factor",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "LN_005_m01",
          "q": "Differentiate $y = x^2 \\ln(x)$.",
          "a": "$y' = 2x\\ln(x) + x^2 \\cdot \\frac{1}{x} = 2x\\ln(x) + x = x(2\\ln(x) + 1)$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "LN_006",
      "topic": "The Logarithmic Function",
      "subtopic": "Logarithmic Functions",
      "concept": "Logarithmic Equations",
      "pt": "Solving equation involving logarithm to find specific value",
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
          "qid": "LN_006_m01",
          "q": "If $\\log_{10}(x) = 2.5$, find $x$.",
          "a": "$x = 10^{2.5} = 100\\sqrt{10} \\approx 316.2$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "LN_007",
      "topic": "The Logarithmic Function",
      "subtopic": "Logarithmic Functions",
      "concept": "Logarithmic Equations",
      "pt": "Solving exponential equation by isolating $e^{kx}$ and taking logarithms",
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
          "qid": "LN_007_m01",
          "q": "Solve $5e^{2x} = 40$.",
          "a": "$e^{2x} = 8 \\Rightarrow 2x = \\ln 8 \\Rightarrow x = \\frac{3\\ln 2}{2}$"
        },
        {
          "qid": "LN_007_m02",
          "q": "Solve $200e^{-0.1t} = 50$.",
          "a": "$e^{-0.1t} = 0.25 \\Rightarrow -0.1t = \\ln(0.25) \\Rightarrow t = 10\\ln 4 \\approx 13.86$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "LN_008",
      "topic": "The Logarithmic Function",
      "subtopic": "Logarithmic Functions",
      "concept": "Logarithmic Equations",
      "pt": "Solving logarithmic equation for variable using log laws",
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
          "qid": "LN_008_m01",
          "q": "Solve $\\log_2(x+3) + \\log_2(x-1) = 3$.",
          "a": "$\\log_2[(x+3)(x-1)] = 3 \\Rightarrow (x+3)(x-1) = 8 \\Rightarrow x^2 + 2x - 11 = 0 \\Rightarrow x = \\frac{-2 + \\sqrt{48}}{2} = -1 + 2\\sqrt{3}$ (reject negative solution since we need $x > 1$)"
        },
        {
          "qid": "LN_008_m02",
          "q": "Solve $\\ln(x) - \\ln(x-2) = 1$.",
          "a": "$\\ln\\left(\\frac{x}{x-2}\\right) = 1 \\Rightarrow \\frac{x}{x-2} = e \\Rightarrow x = ex - 2e \\Rightarrow x(e-1) = 2e \\Rightarrow x = \\frac{2e}{e-1}$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "LN_009",
      "topic": "The Logarithmic Function",
      "subtopic": "Logarithmic Functions",
      "concept": "Logarithmic Evaluation",
      "pt": "Determining parameters of logarithmic function from two points using simultaneous equations",
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
          "qid": "LN_009_m01",
          "q": "$f(x) = a\\ln(x) + b$ passes through $(1, 3)$ and $(e, 7)$. Find $a$ and $b$.",
          "a": "$f(1) = a(0) + b = 3 \\Rightarrow b = 3$. $f(e) = a(1) + 3 = 7 \\Rightarrow a = 4$. So $f(x) = 4\\ln(x) + 3$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "LN_010",
      "topic": "The Logarithmic Function",
      "subtopic": "Logarithmic Functions",
      "concept": "Logarithmic Evaluation",
      "pt": "Evaluating $\\log_a(x) = b$ by converting to exponential form",
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
          "qid": "LN_010_m01",
          "q": "Find $x$ if $\\log_3(x) = 4$.",
          "a": "$x = 3^4 = 81$"
        },
        {
          "qid": "LN_010_m02",
          "q": "Find $x$ if $\\log_x(32) = 5$.",
          "a": "$x^5 = 32 \\Rightarrow x = 2$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "LN_011",
      "topic": "The Logarithmic Function",
      "subtopic": "Logarithmic Functions",
      "concept": "Logarithmic Evaluation",
      "pt": "Evaluating $a^{kp}$ by using log-exponential inverse relationship",
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
          "qid": "LN_011_m01",
          "q": "Given $\\log_2(5) = p$, evaluate $2^{3p}$.",
          "a": "$2^{3p} = (2^p)^3 = 5^3 = 125$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "LN_012",
      "topic": "The Logarithmic Function",
      "subtopic": "Logarithmic Functions",
      "concept": "Logarithmic Evaluation",
      "pt": "Evaluating logarithmic function at a given input",
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
          "qid": "LN_012_m01",
          "q": "If $f(x) = 3\\log_2(x - 1) + 4$, find $f(5)$.",
          "a": "$f(5) = 3\\log_2(4) + 4 = 3(2) + 4 = 10$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "LN_013",
      "topic": "The Logarithmic Function",
      "subtopic": "Logarithmic Functions",
      "concept": "Logarithmic Graphs",
      "pt": "Comparing quantities using logarithmic scale by taking ratio of exponential forms",
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
          "qid": "LN_013_m01",
          "q": "Sound A has intensity level $L_A = 80$ dB and Sound B has $L_B = 60$ dB, where $L = 10\\log_{10}(I/I_0)$. Find $I_A/I_B$.",
          "a": "$L_A - L_B = 10\\log_{10}(I_A/I_B) = 20 \\Rightarrow \\log_{10}(I_A/I_B) = 2 \\Rightarrow I_A/I_B = 100$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "LN_014",
      "topic": "The Logarithmic Function",
      "subtopic": "Logarithmic Functions",
      "concept": "Logarithmic Graphs",
      "pt": "Determining gradient and intercept of linear log-scale relationship",
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
          "qid": "LN_014_m01",
          "q": "$\\log_{10}(y) = 2x + 3$. Find the gradient and vertical intercept of this linear relationship.",
          "a": "Gradient $= 2$, vertical intercept $= 3$ (on the $\\log_{10}(y)$ vs $x$ graph). In original form: $y = 10^{2x+3} = 1000 \\times 100^x$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "LN_015",
      "topic": "The Logarithmic Function",
      "subtopic": "Logarithmic Functions",
      "concept": "Logarithmic Graphs",
      "pt": "Identifying equations of translated/reflected logarithmic graphs from diagram",
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
          "qid": "LN_015_m01",
          "q": "A logarithmic graph has a vertical asymptote at $x = 2$ and passes through $(3, 0)$. Which of $y = \\ln(x-2)$, $y = \\ln(x+2)$, $y = -\\ln(x-2)$ is its equation?",
          "a": "$y = \\ln(x-2)$: asymptote at $x = 2$ ✓, at $x = 3$: $y = \\ln(1) = 0$ ✓. Answer: $y = \\ln(x-2)$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "LN_016",
      "topic": "The Logarithmic Function",
      "subtopic": "Logarithmic Functions",
      "concept": "Logarithmic Graphs",
      "pt": "Identifying parameter from vertical asymptote of logarithmic graph",
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
          "qid": "LN_016_m01",
          "q": "The graph of $y = \\ln(x - k)$ has a vertical asymptote at $x = 5$. Find $k$.",
          "a": "$k = 5$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "LN_017",
      "topic": "The Logarithmic Function",
      "subtopic": "Logarithmic Functions",
      "concept": "Logarithmic Graphs",
      "pt": "Reading value from logarithmic scale/graph",
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
          "qid": "LN_017_m01",
          "q": "On a Richter scale, magnitude $M = \\log_{10}(I)$ where $I$ is the intensity. If one earthquake has $M = 5$ and another has $M = 7$, how many times more intense is the second?",
          "a": "$I_2/I_1 = 10^7/10^5 = 10^2 = 100$ times more intense."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "LN_018",
      "topic": "The Logarithmic Function",
      "subtopic": "Logarithmic Functions",
      "concept": "Logarithmic Graphs",
      "pt": "Sketching translated and shifted logarithmic graph with key points and asymptote",
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
          "qid": "LN_018_m01",
          "q": "Sketch $y = \\ln(x + 1) - 2$, showing the asymptote, $x$-intercept and $y$-intercept.",
          "a": "Asymptote: $x = -1$. $y$-int: $\\ln(1) - 2 = -2$, so $(0, -2)$. $x$-int: $\\ln(x+1) = 2 \\Rightarrow x = e^2 - 1 \\approx 6.39$. Graph is $\\ln(x)$ shifted left 1 and down 2."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "LN_019",
      "topic": "The Logarithmic Function",
      "subtopic": "Logarithmic Functions",
      "concept": "Logarithmic Laws",
      "pt": "Applying logarithmic laws",
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
          "qid": "LN_019_m01",
          "q": "Simplify $\\log_2(8) + \\log_2(4)$.",
          "a": "$= \\log_2(32) = 5$"
        },
        {
          "qid": "LN_019_m02",
          "q": "Express $2\\ln(3) - \\ln(9) + \\ln(e^2)$ in simplest form.",
          "a": "$= \\ln(9) - \\ln(9) + 2 = 2$"
        },
        {
          "qid": "LN_019_m03",
          "q": "Express $\\log_3(x^2) - \\log_3(\\sqrt{x})$ as a single logarithm.",
          "a": "$= \\log_3\\left(\\frac{x^2}{x^{1/2}}\\right) = \\log_3(x^{3/2}) = \\frac{3}{2}\\log_3(x)$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "LN_020",
      "topic": "The Logarithmic Function",
      "subtopic": "Logarithmic Functions",
      "concept": "Logarithmic Laws",
      "pt": "Evaluating expression using inverse relationship between log and exponential",
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
          "qid": "LN_020_m01",
          "q": "Evaluate $5^{\\log_5(7)}$.",
          "a": "$= 7$ (by the inverse property $a^{\\log_a(x)} = x$)"
        },
        {
          "qid": "LN_020_m02",
          "q": "Evaluate $\\log_3(3^{2x+1})$.",
          "a": "$= 2x + 1$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "LN_021",
      "topic": "The Logarithmic Function",
      "subtopic": "Logarithmic Functions",
      "concept": "Logarithmic Laws",
      "pt": "Expressing $\\log_a(k)$ in terms of a defined variable using log laws",
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
          "qid": "LN_021_m01",
          "q": "If $\\log_2(3) = p$, express $\\log_2(12)$ in terms of $p$.",
          "a": "$\\log_2(12) = \\log_2(4 \\times 3) = \\log_2(4) + \\log_2(3) = 2 + p$"
        },
        {
          "qid": "LN_021_m02",
          "q": "If $\\log_5(2) = a$ and $\\log_5(3) = b$, express $\\log_5(72)$ in terms of $a$ and $b$.",
          "a": "$72 = 8 \\times 9 = 2^3 \\times 3^2$, so $\\log_5(72) = 3a + 2b$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "LN_022",
      "topic": "The Logarithmic Function",
      "subtopic": "Logarithmic Functions",
      "concept": "Logarithmic Laws",
      "pt": "Proving logarithmic identity using log laws (show that)",
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
          "qid": "LN_022_m01",
          "q": "Show that $\\log_a(b) = \\frac{1}{\\log_b(a)}$.",
          "a": "Let $\\log_a(b) = x$, so $a^x = b$. Taking $\\log_b$: $x\\log_b(a) = 1$, so $x = \\frac{1}{\\log_b(a)}$."
        }
      ],
      "hard": []
    }
  ]
};
