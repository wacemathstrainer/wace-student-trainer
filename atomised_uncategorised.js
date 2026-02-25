var ATOMISED_UNCATEGORISED = {
  "topic": "Uncategorised",
  "questions": [
    {
      "pt_id": "XX_001",
      "topic": "Uncategorised",
      "subtopic": "General",
      "concept": "Chain Rule",
      "pt": "Differentiation of composite functions when given separate equations for two related variables",
      "testing": "Testing: Chain rule with related rates / parametric-style",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "XX_001_e01",
          "q": "Given $y = u^2 + 3u$ and $u = 2x - 1$, find $\\frac{dy}{dx}$.",
          "a": "$\\frac{dy}{du} = 2 u + 3$, $\\frac{du}{dx} = 2$. $\\frac{dy}{dx} = 4 u + 6|_{u=2x-1} = 8 x + 2$"
        },
        {
          "qid": "XX_001_e02",
          "q": "Given $y = 3u - u^2$ and $u = x + 2$, find $\\frac{dy}{dx}$.",
          "a": "$\\frac{dy}{du} = 3 - 2 u$, $\\frac{du}{dx} = 1$. $\\frac{dy}{dx} = - 2 x - 1$"
        },
        {
          "qid": "XX_001_e03",
          "q": "Given $y = \\sqrt{u}$ and $u = 3x + 4$, find $\\frac{dy}{dx}$.",
          "a": "$\\frac{dy}{du} = \\frac{1}{2 \\sqrt{u}}$, $\\frac{du}{dx} = 3$. $\\frac{dy}{dx} = \\frac{3}{2 \\sqrt{3 x + 4}}$"
        }
      ],
      "medium": [
        {
          "qid": "XX_001_m01",
          "q": "Given $y = e^u$ and $u = x^2 + 1$, find $\\frac{dy}{dx}$.",
          "a": "$\\frac{dy}{du} = e^{u}$, $\\frac{du}{dx} = 2 x$. $\\frac{dy}{dx} = 2 x e^{x^{2} + 1}$"
        },
        {
          "qid": "XX_001_m02",
          "q": "Given $y = \\frac{1}{u^2}$ and $u = 3x - 2$, find $\\frac{dy}{dx}$.",
          "a": "$\\frac{dy}{du} = - \\frac{2}{u^{3}}$, $\\frac{du}{dx} = 3$. $\\frac{dy}{dx} = - \\frac{6}{\\left(3 x - 2\\right)^{3}}$"
        },
        {
          "qid": "XX_001_m03",
          "q": "Given $y = \\ln(u)$ and $u = x^2 - 3$, find $\\frac{dy}{dx}$.",
          "a": "$\\frac{dy}{du} = \\frac{1}{u}$, $\\frac{du}{dx} = 2 x$. $\\frac{dy}{dx} = \\frac{2 x}{x^{2} - 3}$"
        },
        {
          "qid": "XX_001_m04",
          "q": "Given $y = u^3 + 2u$ and $u = \\sin(x)$, find $\\frac{dy}{dx}$ when $x = \\frac{\\pi}{6}$.",
          "a": "$\\frac{dy}{du} = 3 u^{2} + 2$, $\\frac{du}{dx} = \\cos(x)$. At $x = \\frac{\\pi}{6}$: $u = \\frac{1}{2}$, $\\frac{dy}{dx} = \\frac{11 \\sqrt{3}}{8}$"
        },
        {
          "qid": "XX_001_m05",
          "q": "Given $y = u^2$ and $u = e^x + 1$, find $\\frac{dy}{dx}$ at $x = 0$.",
          "a": "$\\frac{dy}{du} = 2 u$, $\\frac{du}{dx} = e^{x}$. At $x = 0$: $u = 2$, $\\frac{dy}{dx} = 4$"
        }
      ],
      "hard": [
        {
          "qid": "XX_001_h01",
          "q": "Given $y = \\frac{u}{u+1}$ and $u = x^2$, find $\\frac{dy}{dx}$.",
          "a": "$\\frac{dy}{du} = \\frac{1}{\\left(u + 1\\right)^{2}}$, $\\frac{du}{dx} = 2 x$. $\\frac{dy}{dx} = \\frac{2 x}{x^{4} + 2 x^{2} + 1}$"
        },
        {
          "qid": "XX_001_h02",
          "q": "Given $y = \\sin(u)$ and $u = \\ln(x)$, find $\\frac{dy}{dx}$ at $x = 1$.",
          "a": "$\\frac{dy}{du} = \\cos(u)$, $\\frac{du}{dx} = \\frac{1}{x}$. At $x = 1$: $u = 0$, $\\frac{dy}{dx} = \\cos(0) \\cdot 1 = 1$"
        },
        {
          "qid": "XX_001_h03",
          "q": "Given $y = v^2$, $v = u + 1$, and $u = 3x$, find $\\frac{dy}{dx}$.",
          "a": "$\\frac{dy}{dv} = 2v$, $\\frac{dv}{du} = 1$, $\\frac{du}{dx} = 3$. $\\frac{dy}{dx} = 6v = 6(u+1) = 6(3x+1) = 18 x + 6$"
        },
        {
          "qid": "XX_001_h04",
          "q": "Given $y = e^{u^2}$ and $u = 2x + 1$, find $\\frac{dy}{dx}$ at $x = 0$.",
          "a": "$\\frac{dy}{du} = 2 u e^{u^{2}}$, $\\frac{du}{dx} = 2$. At $x=0$: $u = 1$, $\\frac{dy}{dx} = 4 e$"
        },
        {
          "qid": "XX_001_h05",
          "q": "Given $\\frac{dy}{dx} = 6x^2$ and $\\frac{du}{dx} = 2x$, find $\\frac{dy}{du}$ in terms of $x$.",
          "a": "$\\frac{dy}{du} = \\frac{dy/dx}{du/dx} = \\frac{6x^2}{2x} = 3x$"
        }
      ]
    },
    {
      "pt_id": "XX_002",
      "topic": "Uncategorised",
      "subtopic": "General",
      "concept": "Chain Rule",
      "pt": "Differentiation of reciprocal functions requiring chain rule",
      "testing": "Testing: Chain rule on negative powers",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "XX_002_e01",
          "q": "Differentiate $y = \\frac{3}{(x^2 + 1)^2}$.",
          "a": "$y = 3(x^2+1)^{-2}$. $\\frac{dy}{dx} = - \\frac{12 x}{\\left(x^{2} + 1\\right)^{3}}$"
        },
        {
          "qid": "XX_002_e02",
          "q": "Differentiate $y = \\frac{2}{3x - 1}$.",
          "a": "$\\frac{dy}{dx} = - \\frac{6}{\\left(3 x - 1\\right)^{2}}$"
        },
        {
          "qid": "XX_002_e03",
          "q": "Differentiate $y = \\frac{1}{(x + 4)^3}$.",
          "a": "$\\frac{dy}{dx} = - \\frac{3}{\\left(x + 4\\right)^{4}}$"
        }
      ],
      "medium": [
        {
          "qid": "XX_002_m01",
          "q": "Differentiate $y = \\frac{5}{2x^2 - 3}$.",
          "a": "$\\frac{dy}{dx} = - \\frac{20 x}{\\left(2 x^{2} - 3\\right)^{2}}$"
        },
        {
          "qid": "XX_002_m02",
          "q": "Differentiate $y = \\frac{1}{(x^3 + x)^2}$.",
          "a": "$\\frac{dy}{dx} = \\frac{2 \\left(- 3 x^{2} - 1\\right)}{x^{3} \\left(x^{2} + 1\\right)^{3}}$"
        },
        {
          "qid": "XX_002_m03",
          "q": "Differentiate $y = \\frac{4}{\\sqrt{1 - x^2}}$.",
          "a": "$\\frac{dy}{dx} = \\frac{4 x}{\\left(1 - x^{2}\\right)^{\\frac{3}{2}}}$"
        },
        {
          "qid": "XX_002_m04",
          "q": "If $f(x) = \\frac{2}{x^2 + 5}$, find $f'(1)$.",
          "a": "$f'(x) = - \\frac{4 x}{\\left(x^{2} + 5\\right)^{2}}$. $f'(1) = - \\frac{1}{9}$"
        },
        {
          "qid": "XX_002_m05",
          "q": "Differentiate $y = \\frac{3}{e^x + 1}$.",
          "a": "$\\frac{dy}{dx} = - \\frac{3}{4 \\cosh^{2}{\\left(\\frac{x}{2} \\right)}}$"
        }
      ],
      "hard": [
        {
          "qid": "XX_002_h01",
          "q": "Differentiate $y = \\frac{1}{(x^2 + 2x + 5)^{3/2}}$.",
          "a": "$\\frac{dy}{dx} = \\frac{3 \\left(- x - 1\\right)}{\\left(x^{2} + 2 x + 5\\right)^{\\frac{5}{2}}}$"
        },
        {
          "qid": "XX_002_h02",
          "q": "Differentiate $y = \\frac{1}{\\sin(x)}$.",
          "a": "$y = (\\sin x)^{-1}$. $\\frac{dy}{dx} = - \\frac{\\cos{\\left(x \\right)}}{\\sin^{2}{\\left(x \\right)}}$"
        },
        {
          "qid": "XX_002_h03",
          "q": "Differentiate $y = \\frac{1}{\\ln(x)}$ for $x > 1$.",
          "a": "$\\frac{dy}{dx} = - \\frac{1}{x \\log{\\left(x \\right)}^{2}}$"
        },
        {
          "qid": "XX_002_h04",
          "q": "Find the gradient of $y = \\frac{4}{x^2 - 1}$ at $x = 3$.",
          "a": "$\\frac{dy}{dx} = - \\frac{8 x}{\\left(x^{2} - 1\\right)^{2}}$. At $x = 3$: $- \\frac{3}{8}$"
        },
        {
          "qid": "XX_002_h05",
          "q": "Differentiate $y = \\frac{1}{\\left(x + \\frac{1}{x}\\right)^2}$.",
          "a": "$\\frac{dy}{dx} = - \\frac{2 x \\left(x^{2} - 1\\right)}{\\left(x^{2} + 1\\right)^{3}}$"
        }
      ]
    },
    {
      "pt_id": "XX_003",
      "topic": "Uncategorised",
      "subtopic": "General",
      "concept": "Chain Rule",
      "pt": "Differentiation of simple composite functions",
      "testing": "Testing: Apply chain rule $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "XX_003_e01",
          "q": "Differentiate $y = (3x + 1)^5$.",
          "a": "$\\frac{dy}{dx} = 15 \\left(3 x + 1\\right)^{4}$"
        },
        {
          "qid": "XX_003_e02",
          "q": "Differentiate $y = (2x - 3)^4$.",
          "a": "$\\frac{dy}{dx} = 8 \\left(2 x - 3\\right)^{3}$"
        },
        {
          "qid": "XX_003_e03",
          "q": "Differentiate $y = (5 - x)^3$.",
          "a": "$\\frac{dy}{dx} = - 3 \\left(x - 5\\right)^{2}$"
        }
      ],
      "medium": [
        {
          "qid": "XX_003_m01",
          "q": "Differentiate $y = \\sqrt{4 - x^2}$.",
          "a": "$\\frac{dy}{dx} = - \\frac{x}{\\sqrt{4 - x^{2}}}$"
        },
        {
          "qid": "XX_003_m02",
          "q": "Differentiate $y = \\frac{1}{(x^2 + 1)^3}$.",
          "a": "$y = (x^2+1)^{-3}$. $\\frac{dy}{dx} = - \\frac{6 x}{\\left(x^{2} + 1\\right)^{4}}$"
        },
        {
          "qid": "XX_003_m03",
          "q": "Differentiate $y = (3x^2 - 2x + 1)^4$.",
          "a": "$\\frac{dy}{dx} = 8 \\left(3 x - 1\\right) \\left(3 x^{2} - 2 x + 1\\right)^{3}$"
        },
        {
          "qid": "XX_003_m04",
          "q": "Differentiate $y = \\sqrt{1 + x^3}$.",
          "a": "$\\frac{dy}{dx} = \\frac{3 x^{2}}{2 \\sqrt{x^{3} + 1}}$"
        },
        {
          "qid": "XX_003_m05",
          "q": "Differentiate $y = \\frac{1}{(4x - 1)^2}$.",
          "a": "$y = (4x-1)^{-2}$. $\\frac{dy}{dx} = - \\frac{8}{\\left(4 x - 1\\right)^{3}}$"
        }
      ],
      "hard": [
        {
          "qid": "XX_003_h01",
          "q": "Differentiate $y = \\frac{1}{\\sqrt{x^2 - 3x + 2}}$.",
          "a": "$\\frac{dy}{dx} = \\frac{\\frac{3}{2} - x}{\\left(x^{2} - 3 x + 2\\right)^{\\frac{3}{2}}}$"
        },
        {
          "qid": "XX_003_h02",
          "q": "Differentiate $y = \\left(\\frac{2x+1}{x-1}\\right)^3$.",
          "a": "$\\frac{dy}{dx} = - \\frac{9 \\left(2 x + 1\\right)^{2}}{\\left(x - 1\\right)^{4}}$"
        },
        {
          "qid": "XX_003_h03",
          "q": "If $f(x) = (x^3 - 8)^{2/3}$, find $f'(2)$.",
          "a": "$f'(x) = \\frac{2 x^{2}}{\\sqrt[3]{x^{3} - 8}}$. At $x = 2$: $x^3 - 8 = 0$, so $f'(2)$ is undefined (vertical tangent)."
        },
        {
          "qid": "XX_003_h04",
          "q": "Differentiate $y = \\sqrt{5x^2 - 4x}$ and evaluate $\\frac{dy}{dx}$ at $x = 1$.",
          "a": "$\\frac{dy}{dx} = \\frac{5 x - 2}{\\sqrt{x \\left(5 x - 4\\right)}}$. At $x = 1$: $3$"
        },
        {
          "qid": "XX_003_h05",
          "q": "Differentiate $y = \\left(x + \\frac{1}{x}\\right)^2$.",
          "a": "$\\frac{dy}{dx} = 2 x - \\frac{2}{x^{3}}$. Expanded: $2 x - \\frac{2}{x^{3}}$"
        }
      ]
    },
    {
      "pt_id": "XX_004",
      "topic": "Uncategorised",
      "subtopic": "General",
      "concept": "Chain Rule",
      "pt": "Using a table of values or graphs of two functions and their derivatives to calculate the derivative of a composite function at a given point",
      "testing": "Testing: $(f \\circ g)'(a) = f'(g(a)) \\cdot g'(a)$",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "XX_004_e01",
          "q": "Given the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 1   | 3       | 4        | 2       | -1       |\n| 2   | 5       | -2       | 1       | 3        |\n| 3   | 1       | 6        | 3       | 2        |\nFind $\\frac{d}{dx}[f(g(x))]$ at $x = 1$.",
          "a": "$f'(g(1)) \\cdot g'(1) = f'(2) \\cdot (-1) = (-2)(-1) = 2$"
        },
        {
          "qid": "XX_004_e02",
          "q": "Using the table above, find $\\frac{d}{dx}[f(g(x))]$ at $x = 3$.",
          "a": "$f'(g(3)) \\cdot g'(3) = f'(3) \\cdot 2 = 6 \\cdot 2 = 12$"
        },
        {
          "qid": "XX_004_e03",
          "q": "Using the table above, find $\\frac{d}{dx}[g(f(x))]$ at $x = 1$.",
          "a": "$g'(f(1)) \\cdot f'(1) = g'(3) \\cdot 4 = 2 \\cdot 4 = 8$"
        }
      ],
      "medium": [
        {
          "qid": "XX_004_m01",
          "q": "Given the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 1   | 4       | -3       | 3       | 5        |\n| 2   | 1       | 2        | 4       | -1       |\n| 3   | 2       | 7        | 1       | 4        |\n| 4   | 3       | -1       | 2       | 6        |\nFind $\\frac{d}{dx}[f(g(x))]$ at $x = 2$.",
          "a": "$f'(g(2)) \\cdot g'(2) = f'(4) \\cdot (-1) = (-1)(-1) = 1$"
        },
        {
          "qid": "XX_004_m02",
          "q": "Using the table above, find $\\frac{d}{dx}[g(f(x))]$ at $x = 3$.",
          "a": "$g'(f(3)) \\cdot f'(3) = g'(2) \\cdot 7 = (-1)(7) = -7$"
        },
        {
          "qid": "XX_004_m03",
          "q": "Using the table above, find $\\frac{d}{dx}[f(f(x))]$ at $x = 1$.",
          "a": "$f'(f(1)) \\cdot f'(1) = f'(4) \\cdot (-3) = (-1)(-3) = 3$"
        },
        {
          "qid": "XX_004_m04",
          "q": "Using the table above, find $\\frac{d}{dx}[g(g(x))]$ at $x = 4$.",
          "a": "$g'(g(4)) \\cdot g'(4) = g'(2) \\cdot 6 = (-1)(6) = -6$"
        },
        {
          "qid": "XX_004_m05",
          "q": "Using the first table (Q1), explain why $\\frac{d}{dx}[g(f(x))]$ at $x = 2$ cannot be determined.",
          "a": "$g'(f(2)) \\cdot f'(2) = g'(5) \\cdot (-2)$. Since $g'(5)$ is not in the table, this cannot be determined."
        }
      ],
      "hard": [
        {
          "qid": "XX_004_h01",
          "q": "Using the table from Q4, find $\\frac{d}{dx}[f(g(x)) \\cdot g(x)]$ at $x = 3$.",
          "a": "Product rule: $f'(g(3)) \\cdot g'(3) \\cdot g(3) + f(g(3)) \\cdot g'(3) = f'(1) \\cdot 4 \\cdot 1 + f(1) \\cdot 4 = (-3)(4)(1) + (4)(4) = -12 + 16 = 4$"
        },
        {
          "qid": "XX_004_h02",
          "q": "Using the table from Q4, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 1$.",
          "a": "Quotient rule: $\\frac{f'(1)g(1) - f(1)g'(1)}{[g(1)]^2} = \\frac{(-3)(3) - (4)(5)}{9} = \\frac{-29}{9}$"
        },
        {
          "qid": "XX_004_h03",
          "q": "Using the table from Q4, find $\\frac{d}{dx}[f(x)]^2$ at $x = 3$.",
          "a": "$2f(3) \\cdot f'(3) = 2(2)(7) = 28$"
        },
        {
          "qid": "XX_004_h04",
          "q": "Using the table from Q4, find $\\frac{d}{dx}[f(g(g(x)))]$ at $x = 4$.",
          "a": "$f'(g(g(4))) \\cdot g'(g(4)) \\cdot g'(4) = f'(g(2)) \\cdot g'(2) \\cdot 6 = f'(4) \\cdot (-1) \\cdot 6 = (-1)(-1)(6) = 6$"
        },
        {
          "qid": "XX_004_h05",
          "q": "Using the table from Q4, find $\\frac{d}{dx}\\sqrt{f(x)}$ at $x = 1$.",
          "a": "$\\frac{f'(1)}{2\\sqrt{f(1)}} = \\frac{-3}{2\\sqrt{4}} = \\frac{-3}{4}$"
        }
      ]
    },
    {
      "pt_id": "XX_005",
      "topic": "Uncategorised",
      "subtopic": "General",
      "concept": "Product Rule",
      "pt": "Differentiating $x^n \\cdot \\ln(f(x))$ using product rule",
      "testing": "Testing: Product rule where one factor is a logarithmic function",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "sign_error",
        "algebra_slip",
        "missing_chain_factor",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "XX_005_e01",
          "q": "Differentiate $y = x\\ln(x)$.",
          "a": "$u = x$, $v = \\ln(x)$. $u' = 1$, $v' = \\frac{1}{x}$.\n$y' = \\ln(x) + x \\cdot \\frac{1}{x} = \\ln(x) + 1$"
        },
        {
          "qid": "XX_005_e02",
          "q": "Differentiate $y = x^2 \\ln(x)$.",
          "a": "$y' = 2x\\ln(x) + x^2 \\cdot \\frac{1}{x} = 2x\\ln(x) + x = x(2\\ln(x) + 1)$"
        },
        {
          "qid": "XX_005_e03",
          "q": "Differentiate $y = 3x\\ln(x)$.",
          "a": "$y' = 3\\ln(x) + 3x \\cdot \\frac{1}{x} = 3\\ln(x) + 3 = 3(\\ln(x) + 1)$"
        }
      ],
      "medium": [
        {
          "qid": "XX_005_m01",
          "q": "Differentiate $y = x^3 \\ln(x)$.",
          "a": "$y' = 3x^2\\ln(x) + x^3 \\cdot \\frac{1}{x} = 3x^2\\ln(x) + x^2 = x^2(3\\ln(x) + 1)$"
        },
        {
          "qid": "XX_005_m02",
          "q": "Differentiate $y = x^2 \\ln(2x)$.",
          "a": "$u = x^2$, $v = \\ln(2x)$. $u' = 2x$, $v' = \\frac{2}{2x} = \\frac{1}{x}$.\n$y' = 2x\\ln(2x) + x^2 \\cdot \\frac{1}{x} = 2x\\ln(2x) + x = x(2\\ln(2x) + 1)$"
        },
        {
          "qid": "XX_005_m03",
          "q": "Differentiate $y = \\sqrt{x}\\ln(x)$.",
          "a": "$u = x^{1/2}$, $v = \\ln(x)$. $u' = \\frac{1}{2\\sqrt{x}}$, $v' = \\frac{1}{x}$.\n$y' = \\frac{\\ln(x)}{2\\sqrt{x}} + \\frac{\\sqrt{x}}{x} = \\frac{\\ln(x)}{2\\sqrt{x}} + \\frac{1}{\\sqrt{x}} = \\frac{\\ln(x) + 2}{2\\sqrt{x}}$"
        },
        {
          "qid": "XX_005_m04",
          "q": "Differentiate $y = (x + 1)\\ln(x)$.",
          "a": "$y' = \\ln(x) + \\frac{x+1}{x} = \\ln(x) + 1 + \\frac{1}{x}$"
        },
        {
          "qid": "XX_005_m05",
          "q": "Differentiate $y = x\\ln(x^2)$.",
          "a": "**Method 1 (simplify first):** $y = 2x\\ln(x)$, so $y' = 2(\\ln(x) + 1)$\n**Method 2 (direct):** $u = x$, $v = \\ln(x^2)$. $v' = \\frac{2x}{x^2} = \\frac{2}{x}$. $y' = \\ln(x^2) + 2 = 2\\ln(x) + 2$"
        }
      ],
      "hard": [
        {
          "qid": "XX_005_h01",
          "q": "Differentiate $y = x^2 \\ln(3x + 1)$.",
          "a": "$u = x^2$, $v = \\ln(3x+1)$. $u' = 2x$, $v' = \\frac{3}{3x+1}$.\n$y' = 2x\\ln(3x+1) + \\frac{3x^2}{3x+1}$"
        },
        {
          "qid": "XX_005_h02",
          "q": "Differentiate $y = (x^2 - 1)\\ln(x + 1)$.",
          "a": "$u = x^2-1$, $v = \\ln(x+1)$. $u' = 2x$, $v' = \\frac{1}{x+1}$.\n$y' = 2x\\ln(x+1) + \\frac{x^2-1}{x+1} = 2x\\ln(x+1) + \\frac{(x-1)(x+1)}{x+1} = 2x\\ln(x+1) + (x - 1)$"
        },
        {
          "qid": "XX_005_h03",
          "q": "Find the coordinates of the stationary point of $f(x) = x^2\\ln(x)$ for $x > 0$.",
          "a": "$f'(x) = 2x\\ln(x) + x = x(2\\ln(x) + 1)$.\nFor $x > 0$: $2\\ln(x) + 1 = 0 \\Rightarrow \\ln(x) = -\\frac{1}{2} \\Rightarrow x = e^{-1/2} = \\frac{1}{\\sqrt{e}}$.\n$f\\left(\\frac{1}{\\sqrt{e}}\\right) = \\frac{1}{e} \\cdot \\left(-\\frac{1}{2}\\right) = -\\frac{1}{2e}$.\nStationary point: $\\left(\\frac{1}{\\sqrt{e}}, -\\frac{1}{2e}\\right)$"
        },
        {
          "qid": "XX_005_h04",
          "q": "Using the product rule on $y = x^{-1}\\ln(x)$, find $\\frac{dy}{dx}$.",
          "a": "$u = x^{-1}$, $v = \\ln(x)$. $u' = -x^{-2}$, $v' = \\frac{1}{x}$.\n$y' = -x^{-2}\\ln(x) + x^{-1} \\cdot \\frac{1}{x} = \\frac{-\\ln(x)}{x^2} + \\frac{1}{x^2} = \\frac{1 - \\ln(x)}{x^2}$"
        },
        {
          "qid": "XX_005_h05",
          "q": "Differentiate $y = e^x \\ln(x)$.",
          "a": "$u = e^x$, $v = \\ln(x)$. $u' = e^x$, $v' = \\frac{1}{x}$.\n$y' = e^x\\ln(x) + \\frac{e^x}{x} = e^x\\left(\\ln(x) + \\frac{1}{x}\\right)$"
        }
      ]
    },
    {
      "pt_id": "XX_006",
      "topic": "Uncategorised",
      "subtopic": "General",
      "concept": "Product Rule",
      "pt": "Differentiation of a product of functions that requires the use of quotient or chain rule as part of the product rule process",
      "testing": "Testing: Nested rules — product rule with chain rule inside",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "XX_006_e01",
          "q": "Differentiate $y = x(2x + 1)^3$.",
          "a": "$u = x$, $v = (2x+1)^3$. $u' = 1$, $v' = 6(2x+1)^2$.\n$y' = (2x+1)^3 + 6x(2x+1)^2 = (2x+1)^2[(2x+1) + 6x] = (2x+1)^2(8x + 1)$"
        },
        {
          "qid": "XX_006_e02",
          "q": "Differentiate $y = x^2 \\sin(3x)$.",
          "a": "$u = x^2$, $v = \\sin(3x)$. $u' = 2x$, $v' = 3\\cos(3x)$.\n$y' = 2x\\sin(3x) + 3x^2\\cos(3x) = x[2\\sin(3x) + 3x\\cos(3x)]$"
        },
        {
          "qid": "XX_006_e03",
          "q": "Differentiate $y = (x + 1)e^{2x}$.",
          "a": "$u = x+1$, $v = e^{2x}$. $u' = 1$, $v' = 2e^{2x}$.\n$y' = e^{2x} + 2(x+1)e^{2x} = e^{2x}(1 + 2x + 2) = e^{2x}(2x + 3)$"
        }
      ],
      "medium": [
        {
          "qid": "XX_006_m01",
          "q": "Differentiate $y = x^3 \\sin(2x)$.",
          "a": "$y' = 3x^2 \\sin(2x) + x^3 \\cdot 2\\cos(2x) = x^2[3\\sin(2x) + 2x\\cos(2x)]$"
        },
        {
          "qid": "XX_006_m02",
          "q": "Differentiate $y = e^{3x}(x^2 + 1)^4$.",
          "a": "$u = e^{3x}$, $v = (x^2+1)^4$. $u' = 3e^{3x}$, $v' = 8x(x^2+1)^3$.\n$y' = 3e^{3x}(x^2+1)^4 + 8xe^{3x}(x^2+1)^3 = e^{3x}(x^2+1)^3[3(x^2+1) + 8x] = e^{3x}(x^2+1)^3(3x^2 + 8x + 3)$"
        },
        {
          "qid": "XX_006_m03",
          "q": "Differentiate $y = (2x - 3)^2 \\cos(x)$.",
          "a": "$u = (2x-3)^2$, $v = \\cos(x)$. $u' = 4(2x-3)$, $v' = -\\sin(x)$.\n$y' = 4(2x-3)\\cos(x) - (2x-3)^2\\sin(x) = (2x-3)[4\\cos(x) - (2x-3)\\sin(x)]$"
        },
        {
          "qid": "XX_006_m04",
          "q": "Differentiate $y = x\\sqrt{x^2 + 4}$.",
          "a": "$u = x$, $v = (x^2+4)^{1/2}$. $u' = 1$, $v' = \\frac{x}{\\sqrt{x^2+4}}$.\n$y' = \\sqrt{x^2+4} + \\frac{x^2}{\\sqrt{x^2+4}} = \\frac{x^2+4+x^2}{\\sqrt{x^2+4}} = \\frac{2x^2+4}{\\sqrt{x^2+4}}$"
        },
        {
          "qid": "XX_006_m05",
          "q": "Differentiate $y = e^{-x}\\sin(x)$.",
          "a": "$u = e^{-x}$, $v = \\sin(x)$. $u' = -e^{-x}$, $v' = \\cos(x)$.\n$y' = -e^{-x}\\sin(x) + e^{-x}\\cos(x) = e^{-x}(\\cos(x) - \\sin(x))$"
        }
      ],
      "hard": [
        {
          "qid": "XX_006_h01",
          "q": "Differentiate $y = (x^2 + 5\\pi)\\cos(2x)$.",
          "a": "$u = x^2+5\\pi$, $v = \\cos(2x)$. $u' = 2x$, $v' = -2\\sin(2x)$.\n$y' = 2x\\cos(2x) - 2(x^2 + 5\\pi)\\sin(2x)$"
        },
        {
          "qid": "XX_006_h02",
          "q": "Differentiate $y = x^2 e^x \\cos(x)$.",
          "a": "Using extended product rule on three functions:\n$y' = 2xe^x\\cos(x) + x^2 e^x\\cos(x) + x^2 e^x(-\\sin(x))$\n$= xe^x[2\\cos(x) + x\\cos(x) - x\\sin(x)] = xe^x[(2+x)\\cos(x) - x\\sin(x)]$"
        },
        {
          "qid": "XX_006_h03",
          "q": "Differentiate $y = (3x - 1)^4 \\sqrt{2x + 5}$.",
          "a": "$u = (3x-1)^4$, $v = (2x+5)^{1/2}$. $u' = 12(3x-1)^3$, $v' = \\frac{1}{\\sqrt{2x+5}}$.\n$y' = 12(3x-1)^3\\sqrt{2x+5} + \\frac{(3x-1)^4}{\\sqrt{2x+5}}$\n$= \\frac{(3x-1)^3}{\\sqrt{2x+5}}[12(2x+5) + (3x-1)] = \\frac{(3x-1)^3(27x + 59)}{\\sqrt{2x+5}}$"
        },
        {
          "qid": "XX_006_h04",
          "q": "Differentiate $y = x\\sin(x)e^x$.",
          "a": "Using extended product rule:\n$y' = \\sin(x)e^x + x\\cos(x)e^x + x\\sin(x)e^x = e^x[\\sin(x) + x\\cos(x) + x\\sin(x)]$\n$= e^x[(1+x)\\sin(x) + x\\cos(x)]$"
        },
        {
          "qid": "XX_006_h05",
          "q": "Differentiate $y = (x^2 - 4)^3(3x + 1)^2$.",
          "a": "$u = (x^2-4)^3$, $v = (3x+1)^2$. $u' = 6x(x^2-4)^2$, $v' = 6(3x+1)$.\n$y' = 6x(x^2-4)^2(3x+1)^2 + 6(x^2-4)^3(3x+1)$\n$= 6(x^2-4)^2(3x+1)[x(3x+1) + (x^2-4)] = 6(x^2-4)^2(3x+1)(4x^2 + x - 4)$"
        }
      ]
    },
    {
      "pt_id": "XX_007",
      "topic": "Uncategorised",
      "subtopic": "General",
      "concept": "Product Rule",
      "pt": "Product rule differentiation of simple functions",
      "testing": "Testing: $(uv)' = u'v + uv'$ with polynomial/simple functions",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "sign_error",
        "algebra_slip",
        "missing_chain_factor",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "XX_007_e01",
          "q": "Differentiate $y = xe^x$.",
          "a": "$y' = e^x + xe^x = e^x(1 + x)$"
        },
        {
          "qid": "XX_007_e02",
          "q": "Use the product rule to differentiate $y = x^2(x + 3)$.",
          "a": "Let $u = x^2$, $v = x + 3$. Then $u' = 2x$, $v' = 1$.\n$y' = 2x(x+3) + x^2(1) = 2x^2 + 6x + x^2 = 3x^2 + 6x = 3x(x+2)$"
        },
        {
          "qid": "XX_007_e03",
          "q": "Differentiate $y = (2x + 1)e^x$.",
          "a": "$u = 2x+1$, $v = e^x$. $u' = 2$, $v' = e^x$.\n$y' = 2e^x + (2x+1)e^x = e^x(2x + 3)$"
        }
      ],
      "medium": [
        {
          "qid": "XX_007_m01",
          "q": "Differentiate $y = x^2 e^x$.",
          "a": "$y' = 2xe^x + x^2 e^x = xe^x(2 + x)$"
        },
        {
          "qid": "XX_007_m02",
          "q": "Differentiate $y = (3x + 1)(2x - 5)^4$.",
          "a": "$y' = 3(2x-5)^4 + (3x+1) \\cdot 8(2x-5)^3 = (2x-5)^3[3(2x-5) + 8(3x+1)] = (2x-5)^3(30x - 7)$"
        },
        {
          "qid": "XX_007_m03",
          "q": "Differentiate $y = x^3 \\sin(x)$.",
          "a": "$y' = 3x^2 \\sin(x) + x^3 \\cos(x) = x^2[3\\sin(x) + x\\cos(x)]$"
        },
        {
          "qid": "XX_007_m04",
          "q": "Differentiate $y = \\sqrt{x}(x^2 - 1)$.",
          "a": "$u = x^{1/2}$, $v = x^2 - 1$. $u' = \\frac{1}{2\\sqrt{x}}$, $v' = 2x$.\n$y' = \\frac{x^2 - 1}{2\\sqrt{x}} + 2x\\sqrt{x} = \\frac{x^2 - 1 + 4x^2}{2\\sqrt{x}} = \\frac{5x^2 - 1}{2\\sqrt{x}}$"
        },
        {
          "qid": "XX_007_m05",
          "q": "Differentiate $y = (x + 4)e^{-x}$.",
          "a": "$u = x+4$, $v = e^{-x}$. $u' = 1$, $v' = -e^{-x}$.\n$y' = e^{-x} + (x+4)(-e^{-x}) = e^{-x}(1 - x - 4) = -(x+3)e^{-x}$"
        }
      ],
      "hard": [
        {
          "qid": "XX_007_h01",
          "q": "Differentiate $y = (x^2 + 3x)(4x - 1)^3$.",
          "a": "$u = x^2+3x$, $v = (4x-1)^3$. $u' = 2x+3$, $v' = 12(4x-1)^2$.\n$y' = (2x+3)(4x-1)^3 + 12(x^2+3x)(4x-1)^2$\n$= (4x-1)^2[(2x+3)(4x-1) + 12x(x+3)]$\n$= (4x-1)^2(20 x^{2} + 46 x - 3)$"
        },
        {
          "qid": "XX_007_h02",
          "q": "Differentiate $y = x^2 e^{3x}$.",
          "a": "$u = x^2$, $v = e^{3x}$. $u' = 2x$, $v' = 3e^{3x}$.\n$y' = 2xe^{3x} + 3x^2 e^{3x} = xe^{3x}(2 + 3x)$"
        },
        {
          "qid": "XX_007_h03",
          "q": "Differentiate $y = (2x - 1)^3(x + 5)^2$.",
          "a": "$u = (2x-1)^3$, $v = (x+5)^2$. $u' = 6(2x-1)^2$, $v' = 2(x+5)$.\n$y' = 6(2x-1)^2(x+5)^2 + 2(2x-1)^3(x+5)$\n$= 2(2x-1)^2(x+5)[3(x+5) + (2x-1)] = 2(2x-1)^2(x+5)(5x + 14)$"
        },
        {
          "qid": "XX_007_h04",
          "q": "Differentiate $y = \\sqrt{x}\\cos(x)$.",
          "a": "$u = x^{1/2}$, $v = \\cos(x)$. $u' = \\frac{1}{2\\sqrt{x}}$, $v' = -\\sin(x)$.\n$y' = \\frac{\\cos(x)}{2\\sqrt{x}} - \\sqrt{x}\\sin(x) = \\frac{\\cos(x) - 2x\\sin(x)}{2\\sqrt{x}}$"
        },
        {
          "qid": "XX_007_h05",
          "q": "Differentiate $y = (3x^2 - 2)e^{-2x}$.",
          "a": "$u = 3x^2-2$, $v = e^{-2x}$. $u' = 6x$, $v' = -2e^{-2x}$.\n$y' = 6xe^{-2x} - 2(3x^2-2)e^{-2x} = e^{-2x}(6x - 6x^2 + 4) = -2e^{-2x}(3x^2 - 3x - 2)$"
        }
      ]
    },
    {
      "pt_id": "XX_008",
      "topic": "Uncategorised",
      "subtopic": "General",
      "concept": "Product Rule",
      "pt": "Using a table of values or graphs of two functions and their derivatives to calculate the derivative of the product of the two functions at a given point",
      "testing": "Testing: $(fg)'(a) = f'(a)g(a) + f(a)g'(a)$ from table",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "sign_error",
        "algebra_slip",
        "missing_chain_factor",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "XX_008_e01",
          "q": "Given $f(1) = 2$, $f'(1) = 3$, $g(1) = 5$, $g'(1) = 1$, find $\\frac{d}{dx}[f(x)g(x)]$ at $x = 1$.",
          "a": "$(fg)'(1) = f'(1)g(1) + f(1)g'(1) = 3(5) + 2(1) = 15 + 2 = 17$"
        },
        {
          "qid": "XX_008_e02",
          "q": "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 2   | 4       | 0        | 3       | 2        |\nFind $\\frac{d}{dx}[f(x)g(x)]$ at $x = 2$.",
          "a": "$f'(2)g(2) + f(2)g'(2) = 0(3) + 4(2) = 8$"
        },
        {
          "qid": "XX_008_e03",
          "q": "Given $f(0) = 3$, $f'(0) = -2$, $g(0) = 4$, $g'(0) = 5$, find $\\frac{d}{dx}[f(x)g(x)]$ at $x = 0$.",
          "a": "$f'(0)g(0) + f(0)g'(0) = (-2)(4) + 3(5) = -8 + 15 = 7$"
        }
      ],
      "medium": [
        {
          "qid": "XX_008_m01",
          "q": "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 1   | 3       | 4        | 2       | -1       |\n| 2   | 5       | -2       | 1       | 3        |\n| 3   | 1       | 6        | 3       | 2        |\nFind $\\frac{d}{dx}[f(x)g(x)]$ at $x = 3$.",
          "a": "$f'(3)g(3) + f(3)g'(3) = 6(3) + 1(2) = 18 + 2 = 20$"
        },
        {
          "qid": "XX_008_m02",
          "q": "Let $h(x) = f(x)g(x)$. Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 1   | -1      | 2        | 6       | 3        |\n| 4   | 3       | -4       | 2       | 1        |\nFind $h'(1)$ and $h'(4)$.",
          "a": "$h'(1) = f'(1)g(1) + f(1)g'(1) = 2(6) + (-1)(3) = 12 - 3 = 9$\n$h'(4) = f'(4)g(4) + f(4)g'(4) = (-4)(2) + 3(1) = -8 + 3 = -5$"
        },
        {
          "qid": "XX_008_m03",
          "q": "Given $f(2) = \\frac{1}{2}$, $f'(2) = 3$, $g(2) = 4$, $g'(2) = -\\frac{1}{3}$, find $\\frac{d}{dx}[f(x)g(x)]$ at $x = 2$.",
          "a": "$f'(2)g(2) + f(2)g'(2) = 3(4) + \\frac{1}{2} \\cdot \\left(-\\frac{1}{3}\\right) = 12 - \\frac{1}{6} = \\frac{71}{6}$"
        },
        {
          "qid": "XX_008_m04",
          "q": "Let $h(x) = f(x)g(x)$. Given $f(3) = 2$, $f'(3) = k$, $g(3) = 5$, $g'(3) = -1$ and $h'(3) = 13$, find $k$.",
          "a": "$h'(3) = f'(3)g(3) + f(3)g'(3) = 5k + 2(-1) = 5k - 2$\n$5k - 2 = 13 \\Rightarrow 5k = 15 \\Rightarrow k = 3$"
        },
        {
          "qid": "XX_008_m05",
          "q": "Using the table, determine whether $h(x) = f(x)g(x)$ has a stationary point at $x = 2$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 2   | 6       | -3       | 4       | 2        |",
          "a": "$h'(2) = f'(2)g(2) + f(2)g'(2) = (-3)(4) + 6(2) = -12 + 12 = 0$\nSince $h'(2) = 0$, yes, $h(x)$ has a stationary point at $x = 2$."
        }
      ],
      "hard": [
        {
          "qid": "XX_008_h01",
          "q": "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 1   | 3       | 4        | 2       | -1       |\n| 2   | 5       | -2       | 1       | 3        |\nFind $\\frac{d}{dx}[f(x)g(x)]$ at $x = 1$ and $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 1$.",
          "a": "Product: $f'(1)g(1) + f(1)g'(1) = 4(2) + 3(-1) = 8 - 3 = 5$\nQuotient: $\\frac{f'(1)g(1) - f(1)g'(1)}{[g(1)]^2} = \\frac{4(2) - 3(-1)}{4} = \\frac{11}{4}$"
        },
        {
          "qid": "XX_008_h02",
          "q": "Using the values $f(2) = 3$, $f'(2) = -1$, $g(2) = 4$, $g'(2) = 2$, find $\\frac{d}{dx}\\left[[f(x)]^2 \\cdot g(x)\\right]$ at $x = 2$.",
          "a": "$\\frac{d}{dx}[f^2 g] = 2f(x)f'(x)g(x) + [f(x)]^2 g'(x)$\n$= 2(3)(-1)(4) + (3)^2(2) = -24 + 18 = -6$"
        },
        {
          "qid": "XX_008_h03",
          "q": "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ | $h(x)$ | $h'(x)$ |\n|-----|---------|----------|---------|----------|---------|----------|\n| 1   | 2       | -3       | 4       | 1        | 5       | -2       |\nFind $\\frac{d}{dx}[f(x)g(x)h(x)]$ at $x = 1$.",
          "a": "$\\frac{d}{dx}[fgh] = f'gh + fg'h + fgh'$\n$= (-3)(4)(5) + (2)(1)(5) + (2)(4)(-2) = -60 + 10 - 16 = -66$"
        },
        {
          "qid": "XX_008_h04",
          "q": "Using the values $f(1) = 3$, $f'(1) = 2$, $g(1) = -2$, $g'(1) = 4$, find the equation of the tangent to $y = f(x)g(x)$ at $x = 1$.",
          "a": "At $x = 1$: $y = f(1)g(1) = 3(-2) = -6$. Point: $(1, -6)$.\nGradient: $f'(1)g(1) + f(1)g'(1) = 2(-2) + 3(4) = -4 + 12 = 8$\nTangent: $y - (-6) = 8(x - 1)$, i.e. $y = 8x - 14$"
        },
        {
          "qid": "XX_008_h05",
          "q": "Using the table below, determine the value(s) of $x$ for which $\\frac{d}{dx}[f(x)g(x)] > 0$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 0   | 1       | 2        | -3      | 4        |\n| 1   | -2      | 3        | 1       | -5       |\n| 2   | 4       | -1       | 2       | 3        |",
          "a": "$x = 0$: $f'g + fg' = 2(-3) + 1(4) = -2 < 0$ ✗\n$x = 1$: $f'g + fg' = 3(1) + (-2)(-5) = 13 > 0$ ✓\n$x = 2$: $f'g + fg' = (-1)(2) + 4(3) = 10 > 0$ ✓\nSo $(fg)' > 0$ at $x = 1$ and $x = 2$."
        }
      ]
    }
  ]
};
