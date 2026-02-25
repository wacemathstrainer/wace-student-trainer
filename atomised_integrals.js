var ATOMISED_INTEGRALS = {
  "topic": "Integrals",
  "questions": [
    {
      "pt_id": "IN_001",
      "topic": "Integrals",
      "subtopic": "Anti-differentiation",
      "concept": "Chain Rule (Reverse)",
      "pt": "Evaluating definite integral of composite polynomial function using reverse chain rule",
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
          "qid": "IN_001_m01",
          "q": "Evaluate $\\int_0^1 3x^2(x^3 + 1)^4 dx$.",
          "a": "Let $u = x^3 + 1$, $du = 3x^2 dx$. When $x=0$, $u=1$; $x=1$, $u=2$. $\\int_1^2 u^4 du = \\left[\\frac{u^5}{5}\\right]_1^2 = \\frac{32-1}{5} = \\frac{31}{5}$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_002",
      "topic": "Integrals",
      "subtopic": "Anti-differentiation",
      "concept": "Chain Rule (Reverse)",
      "pt": "Reverse chain rule integration from prior derivative (hence integrate)",
      "testing": "Testing: Use a derivative result to \"hence\" find an integral",
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
          "qid": "IN_002_m01",
          "q": "Given that $\\frac{d}{dx}[x\\sin(x)] = \\sin(x) + x\\cos(x)$, hence find $\\int x\\cos(x) dx$.",
          "a": "$\\int [\\sin(x) + x\\cos(x)] dx = x\\sin(x) + C$. So $\\int x\\cos(x) dx = x\\sin(x) - \\int \\sin(x) dx = x\\sin(x) + \\cos(x) + C$.\nAlternatively: rearranging the derivative identity directly: $\\int x\\cos(x) dx = x\\sin(x) - \\int \\sin(x) dx = x\\sin(x) + \\cos(x) + C$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_003",
      "topic": "Integrals",
      "subtopic": "Anti-differentiation",
      "concept": "Differentiation (then Integrate)",
      "pt": "Differentiate a function; integrate the resulting identity to hence find the antiderivative",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "sign_error",
        "missing_chain_factor",
        "algebra_slip",
        "substitution_error",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_003_m01",
          "q": "(a) Differentiate $y = x^2 e^x$. (b) Hence find $\\int x^2 e^x dx$.",
          "a": "(a) $y' = 2xe^x + x^2e^x = e^x(x^2 + 2x)$. (b) $\\int e^x(x^2 + 2x) dx = x^2 e^x + C$, so $\\int x^2 e^x dx = x^2 e^x - \\int 2xe^x dx = x^2 e^x - 2xe^x + 2e^x + C = e^x(x^2 - 2x + 2) + C$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_004",
      "topic": "Integrals",
      "subtopic": "Anti-differentiation",
      "concept": "Integration Techniques",
      "pt": "Anti-differentiation with initial condition",
      "testing": "Testing: Integrate then use given point to find C",
      "reason_bank": [
        "wrong_rule",
        "sign_error",
        "missing_chain_factor",
        "algebra_slip",
        "substitution_error",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_004_m01",
          "q": "Given $f'(x) = 3x^2 - 4x + 1$ and $f(1) = 5$, find $f(x)$.",
          "a": "$f(x) = x^3 - 2x^2 + x + C$. $f(1) = 1 - 2 + 1 + C = 5 \\Rightarrow C = 5$. $f(x) = x^3 - 2x^2 + x + 5$"
        },
        {
          "qid": "IN_004_m02",
          "q": "Given $\\frac{dy}{dx} = 4e^{2x}$ and $y = 3$ when $x = 0$, find $y$.",
          "a": "$y = 2e^{2x} + C$. $3 = 2e^0 + C \\Rightarrow C = 1$. $y = 2e^{2x} + 1$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_005",
      "topic": "Integrals",
      "subtopic": "Anti-differentiation",
      "concept": "Integration Techniques",
      "pt": "Integrating $f'(x)/f(x)$ form with trigonometric functions",
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
          "qid": "IN_005_m01",
          "q": "Find $\\int \\frac{\\cos(x)}{\\sin(x)} dx$.",
          "a": "$\\ln|\\sin(x)| + C$"
        },
        {
          "qid": "IN_005_m02",
          "q": "Find $\\int \\frac{\\sin(x)}{1 + \\cos(x)} dx$.",
          "a": "$= -\\int \\frac{-\\sin(x)}{1+\\cos(x)} dx = -\\ln|1+\\cos(x)| + C$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_006",
      "topic": "Integrals",
      "subtopic": "Anti-differentiation",
      "concept": "Integration Techniques",
      "pt": "Solving for parameter using integration and percentage condition",
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
          "qid": "IN_006_m01",
          "q": "The probability density function $f(x) = kx^2$ for $0 \\leq x \\leq 3$. Find $k$.",
          "a": "$\\int_0^3 kx^2 dx = 1 \\Rightarrow k\\left[\\frac{x^3}{3}\\right]_0^3 = 1 \\Rightarrow 9k = 1 \\Rightarrow k = \\frac{1}{9}$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_007",
      "topic": "Integrals",
      "subtopic": "Applications of Integration",
      "concept": "Area Calculations",
      "pt": "Calculating area between curve and line using integration",
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
          "qid": "IN_007_m01",
          "q": "Find the area enclosed between $y = x^2$ and $y = 2x$.",
          "a": "Intersection: $x^2 = 2x \\Rightarrow x(x-2) = 0$, so $x = 0, 2$. Area $= \\int_0^2 (2x - x^2) dx = [x^2 - \\frac{x^3}{3}]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_008",
      "topic": "Integrals",
      "subtopic": "Applications of Integration",
      "concept": "Area Calculations",
      "pt": "Calculating area between two curves by splitting at intersection point",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "sign_error",
        "wrong_rule",
        "interpretation_mixup",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_008_m01",
          "q": "Find the area between $y = x$ and $y = x^2 - 2$ for $-1 \\leq x \\leq 2$.",
          "a": "Intersection: $x = x^2 - 2 \\Rightarrow x^2 - x - 2 = 0 \\Rightarrow (x-2)(x+1) = 0$, so $x = -1, 2$. For $-1 < x < 2$: $x > x^2 - 2$. Area $= \\int_{-1}^{2} [x - (x^2 - 2)] dx = \\int_{-1}^{2} (-x^2 + x + 2) dx = [-\\frac{x^3}{3} + \\frac{x^2}{2} + 2x]_{-1}^{2} = \\frac{10}{3} + \\frac{7}{6} = \\frac{9}{2}$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_009",
      "topic": "Integrals",
      "subtopic": "Applications of Integration",
      "concept": "Area Calculations",
      "pt": "Calculating area bounded by curve, x-axis, and vertical lines using definite integral",
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
          "qid": "IN_009_m01",
          "q": "Find the area bounded by $y = x^2 - 4$, the $x$-axis, $x = 0$ and $x = 3$.",
          "a": "$y = 0$ at $x = 2$. Area $= \\left|\\int_0^2 (x^2-4) dx\\right| + \\int_2^3 (x^2-4) dx = \\left|\\left[\\frac{x^3}{3}-4x\\right]_0^2\\right| + \\left[\\frac{x^3}{3}-4x\\right]_2^3 = \\left|-\\frac{16}{3}\\right| + \\frac{-3-(-\\frac{16}{3})}{1} = \\frac{16}{3} + \\frac{7}{3} = \\frac{23}{3}$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_010",
      "topic": "Integrals",
      "subtopic": "Applications of Integration",
      "concept": "Area Calculations",
      "pt": "Solving for upper limit k when definite integral equals given value",
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
          "qid": "IN_010_m01",
          "q": "Find $k > 0$ such that $\\int_0^k 2x dx = 18$.",
          "a": "$[x^2]_0^k = k^2 = 18 \\Rightarrow k = 3\\sqrt{2}$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_011",
      "topic": "Integrals",
      "subtopic": "Applications of Integration",
      "concept": "Calculates Total Change from Rate of Change",
      "pt": "Calculates total change from rate of change",
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
          "qid": "IN_011_m01",
          "q": "Water flows into a tank at a rate of $R(t) = 4t - t^2$ L/min for $0 \\leq t \\leq 4$. Find the total volume that enters the tank.",
          "a": "$V = \\int_0^4 (4t - t^2) dt = [2t^2 - \\frac{t^3}{3}]_0^4 = 32 - \\frac{64}{3} = \\frac{32}{3} \\approx 10.67$ L"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_012",
      "topic": "Integrals",
      "subtopic": "Applications of Integration",
      "concept": "Calculates Total Change from Rate of Change",
      "pt": "Calculates total change from rate of change with initial condition",
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
          "qid": "IN_012_m01",
          "q": "A population changes at rate $\\frac{dP}{dt} = 100e^{0.02t}$. If $P(0) = 5000$, find $P(10)$.",
          "a": "$P(10) = 5000 + \\int_0^{10} 100e^{0.02t} dt = 5000 + [5000e^{0.02t}]_0^{10} = 5000 + 5000(e^{0.2} - 1) = 5000e^{0.2} \\approx 6107$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_013",
      "topic": "Integrals",
      "subtopic": "Applications of Integration",
      "concept": "Volume Calculations",
      "pt": "Calculating volume using integration",
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
          "qid": "IN_013_m01",
          "q": "Find the volume of the solid formed when $y = \\sqrt{x}$ for $0 \\leq x \\leq 4$ is rotated about the $x$-axis.",
          "a": "$V = \\pi \\int_0^4 (\\sqrt{x})^2 dx = \\pi \\int_0^4 x dx = \\pi [\\frac{x^2}{2}]_0^4 = 8\\pi$"
        },
        {
          "qid": "IN_013_m02",
          "q": "Find the volume when $y = e^x$ for $0 \\leq x \\leq 1$ is rotated about the $x$-axis.",
          "a": "$V = \\pi \\int_0^1 e^{2x} dx = \\pi [\\frac{e^{2x}}{2}]_0^1 = \\frac{\\pi(e^2 - 1)}{2}$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_014",
      "topic": "Integrals",
      "subtopic": "Definite Integrals",
      "concept": "Area Calculations (from graphs)",
      "pt": "Evaluating definite integral using geometric area of circular segments",
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
          "qid": "IN_014_m01",
          "q": "The graph of $f(x) = \\sqrt{9 - x^2}$ is a semicircle of radius 3. Find $\\int_0^3 f(x) dx$.",
          "a": "This is a quarter circle of radius 3. Area $= \\frac{1}{4}\\pi(3)^2 = \\frac{9\\pi}{4}$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_015",
      "topic": "Integrals",
      "subtopic": "Definite Integrals",
      "concept": "Area Calculations (from graphs)",
      "pt": "Evaluating definite integral using signed areas from graph",
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
          "qid": "IN_015_m01",
          "q": "The graph of $f(x)$ encloses an area of 6 units² above the $x$-axis between $x = 0$ and $x = 3$, and an area of 2 units² below the $x$-axis between $x = 3$ and $x = 5$. Find $\\int_0^5 f(x) dx$.",
          "a": "$\\int_0^5 f(x) dx = 6 + (-2) = 4$"
        },
        {
          "qid": "IN_015_m02",
          "q": "From a graph, $\\int_0^4 f(x) dx = 7$ and $\\int_0^2 f(x) dx = 3$. Find $\\int_2^4 f(x) dx$.",
          "a": "$\\int_2^4 f(x) dx = 7 - 3 = 4$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_016",
      "topic": "Integrals",
      "subtopic": "Definite Integrals",
      "concept": "Area Calculations (from graphs)",
      "pt": "Finding upper limit where definite integral equals zero using signed areas",
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
          "qid": "IN_016_m01",
          "q": "Given the graph of $f(x)$ where $\\int_0^3 f(x) dx = 5$ and $f(x) < 0$ for $x > 3$ with $f(x) = -(x - 3)$ for $x > 3$, find $k > 3$ such that $\\int_0^k f(x) dx = 0$.",
          "a": "$\\int_3^k -(x-3) dx = -\\frac{(k-3)^2}{2}$. Need $5 - \\frac{(k-3)^2}{2} = 0 \\Rightarrow (k-3)^2 = 10 \\Rightarrow k = 3 + \\sqrt{10}$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_017",
      "topic": "Integrals",
      "subtopic": "Definite Integrals",
      "concept": "General/Other",
      "pt": "Evaluating definite integral of transformed function using linearity",
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
          "qid": "IN_017_m01",
          "q": "Given $\\int_0^3 f(x) dx = 8$, find $\\int_0^3 [2f(x) + 3] dx$.",
          "a": "$= 2\\int_0^3 f(x) dx + \\int_0^3 3 dx = 2(8) + 3(3) = 16 + 9 = 25$"
        },
        {
          "qid": "IN_017_m02",
          "q": "Given $\\int_1^5 f(x) dx = 10$ and $\\int_1^5 g(x) dx = 4$, find $\\int_1^5 [3f(x) - 2g(x)] dx$.",
          "a": "$= 3(10) - 2(4) = 30 - 8 = 22$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_018",
      "topic": "Integrals",
      "subtopic": "Definite Integrals",
      "concept": "Graph Sketching",
      "pt": "Shading region on graph corresponding to a given definite integral",
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
          "qid": "IN_018_m01",
          "q": "On a sketch of $y = x^2$, shade the region that represents $\\int_1^3 x^2 dx$.",
          "a": "Shade the area between the curve $y = x^2$, the $x$-axis, and the vertical lines $x = 1$ and $x = 3$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_019",
      "topic": "Integrals",
      "subtopic": "Definite Integrals",
      "concept": "Numerical Integration",
      "pt": "Bounding a definite integral using upper and lower rectangle sums with explanation",
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
          "qid": "IN_019_m01",
          "q": "Using strips of width 1, find the upper and lower rectangle sums for $\\int_1^4 \\frac{1}{x} dx$.",
          "a": "For decreasing $f(x) = \\frac{1}{x}$: Lower sum (right endpoints) $= 1 \\cdot (\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4}) = \\frac{13}{12}$. Upper sum (left endpoints) $= 1 \\cdot (1 + \\frac{1}{2} + \\frac{1}{3}) = \\frac{11}{6}$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_020",
      "topic": "Integrals",
      "subtopic": "Definite Integrals",
      "concept": "Numerical Integration",
      "pt": "Estimating integral using average of upper and lower rectangle sums",
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
          "qid": "IN_020_m01",
          "q": "Given upper sum = 2.8 and lower sum = 2.2 for $\\int_a^b f(x) dx$, estimate the integral.",
          "a": "Estimate $= \\frac{2.8 + 2.2}{2} = 2.5$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_021",
      "topic": "Integrals",
      "subtopic": "Definite Integrals",
      "concept": "Numerical Integration",
      "pt": "Suggesting methods to improve rectangle approximation of area",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "sign_error",
        "wrong_rule",
        "interpretation_mixup",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_021_m01",
          "q": "A student used 4 rectangles to approximate $\\int_0^2 x^2 dx$. Suggest how they could improve their approximation.",
          "a": "Increase the number of rectangles (use narrower strips), or use the trapezoidal rule instead of rectangles for a better approximation."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_022",
      "topic": "Integrals",
      "subtopic": "Fundamental Theorem",
      "concept": "Differentiating Integrals",
      "pt": "Differentiating integral with variable bound using fundamental theorem",
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
          "qid": "IN_022_m01",
          "q": "Find $\\frac{d}{dx} \\int_0^x \\sin(t^2) dt$.",
          "a": "$\\sin(x^2)$ (by the fundamental theorem)"
        },
        {
          "qid": "IN_022_m02",
          "q": "Find $\\frac{d}{dx} \\int_0^{x^2} e^t dt$.",
          "a": "$= e^{x^2} \\cdot 2x = 2xe^{x^2}$ (chain rule with FTC)"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_023",
      "topic": "Integrals",
      "subtopic": "Fundamental Theorem",
      "concept": "Fundamental Theorem",
      "pt": "Applying fundamental theorem of calculus",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "substitution_error",
        "sign_error",
        "interpretation_mixup",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_023_m01",
          "q": "Evaluate $\\int_1^4 (2x - 3) dx$.",
          "a": "$= [x^2 - 3x]_1^4 = (16 - 12) - (1 - 3) = 4 + 2 = 6$"
        },
        {
          "qid": "IN_023_m02",
          "q": "Evaluate $\\int_0^{\\pi/2} \\cos(x) dx$.",
          "a": "$= [\\sin(x)]_0^{\\pi/2} = 1 - 0 = 1$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_024",
      "topic": "Integrals",
      "subtopic": "Fundamental Theorem",
      "concept": "Fundamental Theorem",
      "pt": "Applying fundamental theorem to evaluate integral of derivative",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "substitution_error",
        "sign_error",
        "interpretation_mixup",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_024_m01",
          "q": "Given $f'(x) = 3x^2 - 1$ and $f(1) = 4$, find $f(3)$.",
          "a": "$f(3) = f(1) + \\int_1^3 f'(x) dx = 4 + [x^3 - x]_1^3 = 4 + (24 - 0) = 28$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_025",
      "topic": "Integrals",
      "subtopic": "Fundamental Theorem",
      "concept": "Fundamental Theorem",
      "pt": "Evaluating definite integral using linearity and interval properties",
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
          "qid": "IN_025_m01",
          "q": "Given $\\int_0^5 f(x) dx = 12$ and $\\int_0^2 f(x) dx = 5$, find $\\int_2^5 f(x) dx$.",
          "a": "$\\int_2^5 f(x) dx = \\int_0^5 f(x) dx - \\int_0^2 f(x) dx = 12 - 5 = 7$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_026",
      "topic": "Integrals",
      "subtopic": "Fundamental Theorem",
      "concept": "Fundamental Theorem",
      "pt": "Finding maximum of accumulation function using $F'(x) = f(x)$",
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
          "qid": "IN_026_m01",
          "q": "Let $F(x) = \\int_0^x (4 - t^2) dt$. Find the value of $x$ where $F(x)$ is maximised.",
          "a": "$F'(x) = 4 - x^2 = 0 \\Rightarrow x = 2$ (taking positive value). $F''(x) = -2x$, so $F''(2) = -4 < 0$ (max). Maximum at $x = 2$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_027",
      "topic": "Integrals",
      "subtopic": "Fundamental Theorem",
      "concept": "Graph Sketching",
      "pt": "Sketching accumulation function from graph of f",
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
          "qid": "IN_027_m01",
          "q": "Given that $f(x) > 0$ for $0 < x < 3$, $f(x) < 0$ for $x > 3$, and $f(3) = 0$, describe the shape of $A(x) = \\int_0^x f(t) dt$.",
          "a": "$A(x)$ is increasing for $0 < x < 3$ (since $f > 0$), has a maximum at $x = 3$ (since $f(3) = 0$ and $f$ changes sign), and is decreasing for $x > 3$."
        }
      ],
      "hard": []
    }
  ]
};
