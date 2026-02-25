var ATOMISED_FURTHER_DIFFERENTIATION = {
  "topic": "Further Differentiation and Applications",
  "questions": [
    {
      "pt_id": "FD_001",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Basic Differentiation Skills",
      "concept": "Differentiating Basics",
      "pt": "Finding the coordinates of a point on the curve where the gradient is a given value",
      "testing": "Testing: Set derivative equal to value and solve",
      "reason_bank": [
        "wrong_rule",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "interpretation_mixup",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "FD_001_e01",
          "q": "Find the point on $y = x^2 + 6x - 1$ where the gradient is $4$.",
          "a": "$y' = 2 x + 6 = 4 \\Rightarrow x = -1$. $y = -6$. Point: $(-1, -6)$"
        },
        {
          "qid": "FD_001_e02",
          "q": "Find the point on $y = 3x^2 - 12x + 5$ where the gradient is $6$.",
          "a": "$y' = 6 x - 12 = 6 \\Rightarrow x = 3$. $y = -4$. Point: $(3, -4)$"
        },
        {
          "qid": "FD_001_e03",
          "q": "Find the coordinates where the gradient of $y = -2x^2 + 8x + 1$ is zero.",
          "a": "$y' = 8 - 4 x = 0 \\Rightarrow x = 2$. $y = 9$. Point: $(2, 9)$"
        }
      ],
      "medium": [
        {
          "qid": "FD_001_m01",
          "q": "Find the point(s) on $y = x^3 - 3x^2 + 1$ where the gradient equals $9$.",
          "a": "$y' = 3 x^{2} - 6 x = 9 \\Rightarrow 3(x^2 - 2x - 3) = 0 \\Rightarrow 3(x-3)(x+1) = 0$. Points: $(-1, -3)$, $(3, 1)$"
        },
        {
          "qid": "FD_001_m02",
          "q": "Find the point on $y = e^{2x} - 5x$ where the gradient equals $3$.",
          "a": "$y' = 2 e^{2 x} - 5 = 3 \\Rightarrow e^{2x} = 4 \\Rightarrow x = \\log{\\left(2 \\right)}$. $y = 4 - \\log{\\left(32 \\right)}$. Point: $(\\log{\\left(2 \\right)}, 4 - \\log{\\left(32 \\right)})$"
        },
        {
          "qid": "FD_001_m03",
          "q": "Find the point on $y = -x^2 + 8x - 3$ where the gradient is $2$.",
          "a": "$y' = 8 - 2 x = 2 \\Rightarrow x = 3$. $y = 12$. Point: $(3, 12)$"
        },
        {
          "qid": "FD_001_m04",
          "q": "Find the point(s) on $y = \\frac{x^3}{3} - 2x^2 + 3x + 1$ where the tangent is parallel to $y = -x$.",
          "a": "Gradient $= -1$. $y' = x^{2} - 4 x + 3 = -1 \\Rightarrow (x-2)^2 = 0$. Point: $(2, \\frac{5}{3})$"
        },
        {
          "qid": "FD_001_m05",
          "q": "Find the point on $y = 4\\sqrt{x} + x$ (for $x > 0$) where the gradient is $3$.",
          "a": "$y' = 1 + \\frac{2}{\\sqrt{x}} = 3 \\Rightarrow \\frac{2}{\\sqrt{x}} = 2 \\Rightarrow x = 1$. $y = 5$. Point: $(1, 5)$"
        }
      ],
      "hard": [
        {
          "qid": "FD_001_h01",
          "q": "Find all points on $y = 2x^3 - 9x^2 + 12x - 4$ where the gradient is $12$.",
          "a": "$y' = 6 x^{2} - 18 x + 12 = 12 \\Rightarrow 6x(x-3) = 0$. Points: $(0, -4)$, $(3, 5)$"
        },
        {
          "qid": "FD_001_h02",
          "q": "The gradient of $g(x) = x^3 - 2x$ at $x = 1$ is $m$. Find the point on $y = 2x^2 - 3x + 1$ where the gradient equals $m$.",
          "a": "$g'(1) = 1$. $y' = 4 x - 3 = 1 \\Rightarrow x = 1$. Point: $(1, 0)$"
        },
        {
          "qid": "FD_001_h03",
          "q": "Find the coordinates on $y = x^3 + x^2 - 5x + 3$ where the tangent is parallel to $y = 3x + 1$.",
          "a": "Gradient $= 3$. $y' = 3 x^{2} + 2 x - 5 = 3 \\Rightarrow 3x^2 + 2x - 8 = 0$. Points: $\\left(-2, 9\\right)$, $\\left(\\frac{4}{3}, \\frac{13}{27}\\right)$"
        },
        {
          "qid": "FD_001_h04",
          "q": "Find all points on $y = \\frac{x^4}{4} - 2x^2 + 4$ where the gradient is $-4$.",
          "a": "$y' = x^{3} - 4 x = -4 \\Rightarrow x^3 - 4x + 4 = 0$. Points: $(- \\frac{\\sqrt[3]{6 \\sqrt{33} + 54}}{3} - \\frac{4}{\\sqrt[3]{6 \\sqrt{33} + 54}}, - \\frac{\\sqrt[3]{6} \\left(12 + 6^{\\frac{2}{3}} \\left(\\sqrt{33} + 9\\right)^{\\frac{2}{3}}\\right)^{2}}{27 \\left(\\sqrt{33} + 9\\right)^{\\frac{2}{3}}} + 4 + \\frac{\\left(12 + 6^{\\frac{2}{3}} \\left(\\sqrt{33} + 9\\right)^{\\frac{2}{3}}\\right)^{4} \\left(6 \\sqrt{33} + 54\\right)^{\\frac{2}{3}}}{11664 \\left(\\sqrt{33} + 9\\right)^{2}})$"
        },
        {
          "qid": "FD_001_h05",
          "q": "Find all points on $y = \\frac{2x^3}{3} - x^2 - 4x + 3$ where the gradient is $\\frac{8}{3}$.",
          "a": "$y' = 2 x^{2} - 2 x - 4 = \\frac{8}{3}$. Points: $(\\frac{1}{2} - \\frac{\\sqrt{129}}{6}, \\frac{5}{6} + \\frac{19 \\sqrt{129}}{54})$, $(\\frac{1}{2} + \\frac{\\sqrt{129}}{6}, \\frac{5}{6} - \\frac{19 \\sqrt{129}}{54})$"
        }
      ]
    },
    {
      "pt_id": "FD_002",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Basic Differentiation Skills",
      "concept": "Differentiating Basics",
      "pt": "Finding the equation of a tangent at a given x or y value",
      "testing": "Testing: Find gradient via derivative, use point-gradient form",
      "reason_bank": [
        "wrong_rule",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "interpretation_mixup",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "FD_002_e01",
          "q": "Find the equation of the tangent to $y = x^2 - 3x + 1$ at $x = 2$.",
          "a": "$y' = 2 x - 3$. At $x=2$: gradient $= 1$, $y = -1$. Tangent: $y = x - 3$"
        },
        {
          "qid": "FD_002_e02",
          "q": "Find the equation of the tangent to $y = x^3 - 2x$ at $x = 1$.",
          "a": "$y' = 3 x^{2} - 2$. At $x=1$: gradient $= 1$, $y = -1$. Tangent: $y = x - 2$"
        },
        {
          "qid": "FD_002_e03",
          "q": "Find the equation of the tangent to $y = 3x^2 + 2x$ at the origin.",
          "a": "$y' = 6 x + 2$. At $x=0$: gradient $= 2$. Tangent: $y = 2 x$"
        }
      ],
      "medium": [
        {
          "qid": "FD_002_m01",
          "q": "Find the equation of the tangent to $y = e^x - x$ at $x = 0$.",
          "a": "$y' = e^{x} - 1$. At $x=0$: gradient $= 0$, $y = 1$. Tangent: $y = 1$ (horizontal)"
        },
        {
          "qid": "FD_002_m02",
          "q": "Find the equation of the tangent to $y = 2x^3 + x^2 - 4x + 3$ at $x = -1$.",
          "a": "$y' = 6 x^{2} + 2 x - 4$. At $x=-1$: gradient $= 0$, $y = 6$. Tangent: $y = 6$"
        },
        {
          "qid": "FD_002_m03",
          "q": "Find the equation of the tangent to $y = 3\\sqrt{x} - x$ at $x = 9$.",
          "a": "$y' = -1 + \\frac{3}{2 \\sqrt{x}}$. At $x=9$: gradient $= - \\frac{1}{2}$, $y = 0$. Tangent: $y = \\frac{9}{2} - \\frac{x}{2}$"
        },
        {
          "qid": "FD_002_m04",
          "q": "Find the equation of the tangent to $y = \\ln(2x)$ at $x = \\frac{e}{2}$.",
          "a": "$y' = \\frac{1}{x}$. At $x = \\frac{e}{2}$: gradient $= \\frac{2}{e}$, $y = 1$. Tangent: $y = \\frac{2x}{e}$"
        },
        {
          "qid": "FD_002_m05",
          "q": "Find the equation of the tangent to $y = x^3 - 4x^2 + 5$ at the $y$-intercept.",
          "a": "$y$-intercept: $(0, 5)$. $y' = 3 x^{2} - 8 x$. Gradient $= 0$. Tangent: $y = 5$"
        }
      ],
      "hard": [
        {
          "qid": "FD_002_h01",
          "q": "Find the equation(s) of the tangent to $y = x^2 - 2x + 3$ at the point(s) where $y = 6$.",
          "a": "$x^2 - 2x - 3 = 0 \\Rightarrow (x-3)(x+1) = 0$. At $x = -1$: gradient $= -4$, tangent: $y = 2 - 4 x$. At $x = 3$: gradient $= 4$, tangent: $y = 4 x - 6$"
        },
        {
          "qid": "FD_002_h02",
          "q": "Find the equation(s) of the tangent to $y = x^2$ that pass through the point $(0, -1)$.",
          "a": "Tangent at $(a, a^2)$: $y = 2ax - a^2$. Through $(0, -1)$: $-1 = -a^2 \\Rightarrow a = \\pm 1$. Tangents: $y = 2x - 1$ and $y = -2x - 1$"
        },
        {
          "qid": "FD_002_h03",
          "q": "Find the equation of the tangent to $y = 2e^{x/2} - 1$ at $x = 0$.",
          "a": "$y' = e^{\\frac{x}{2}}$. At $x=0$: gradient $= 1$, $y = 1$. Tangent: $y = x + 1$"
        },
        {
          "qid": "FD_002_h04",
          "q": "Find the equation(s) of the tangent to $y = x^3 - x$ that is perpendicular to $y = -\\frac{x}{2} + 3$.",
          "a": "Perpendicular gradient $= 2$. $y' = 3 x^{2} - 1 = 2 \\Rightarrow x = \\pm 1$. At $x = -1$: tangent $y = 2 x + 2$. At $x = 1$: tangent $y = 2 x - 2$"
        },
        {
          "qid": "FD_002_h05",
          "q": "Find the equation of the **normal** to $y = x^2 + 4x$ at $x = 1$.",
          "a": "$y' = 2 x + 4$. At $x=1$: gradient $= 6$, $y = 5$. Normal gradient $= -\\frac{1}{6}$. Normal: $y = \\frac{31}{6} - \\frac{x}{6}$"
        }
      ]
    },
    {
      "pt_id": "FD_003",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Basic Differentiation Skills",
      "concept": "Differentiating Basics",
      "pt": "Finding the value of a derivative at a given x or y value",
      "testing": "Testing: Substitute into derivative after differentiating",
      "reason_bank": [
        "wrong_rule",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "interpretation_mixup",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "FD_003_e01",
          "q": "Given $f(x) = 3x^4 - 2x^2 + 5x$, find $f'(2)$.",
          "a": "$f'(x) = 12 x^{3} - 4 x + 5$, so $f'(2) = 93$"
        },
        {
          "qid": "FD_003_e02",
          "q": "Given $f(x) = 2x^3 + x^2 - 7x$, find $f'(-1)$.",
          "a": "$f'(x) = 6 x^{2} + 2 x - 7$, so $f'(-1) = -3$"
        },
        {
          "qid": "FD_003_e03",
          "q": "Given $f(x) = x^5 - 4x^3$, find $f'(1)$.",
          "a": "$f'(x) = 5 x^{4} - 12 x^{2}$, so $f'(1) = -7$"
        }
      ],
      "medium": [
        {
          "qid": "FD_003_m01",
          "q": "If $y = \\frac{x^3}{3} - 4\\sqrt{x}$, find $\\frac{dy}{dx}$ when $x = 4$.",
          "a": "$\\frac{dy}{dx} = x^{2} - \\frac{2}{\\sqrt{x}}$, so at $x=4$: $15$"
        },
        {
          "qid": "FD_003_m02",
          "q": "Given $f(x) = 5x^2 - \\frac{3}{x}$, find $f'\\left(\\frac{1}{2}\\right)$.",
          "a": "$f'(x) = 10 x + \\frac{3}{x^{2}}$, so $f'(1/2) = 17$"
        },
        {
          "qid": "FD_003_m03",
          "q": "If $y = 6\\sqrt{x} + x^2 - 3x$, find $\\frac{dy}{dx}$ when $x = 9$.",
          "a": "$\\frac{dy}{dx} = 2 x - 3 + \\frac{3}{\\sqrt{x}}$. At $x = 9$: $16$"
        },
        {
          "qid": "FD_003_m04",
          "q": "Given $f(x) = 4x^3 - x^2 + 2x$, find $f'(-2)$.",
          "a": "$f'(x) = 12 x^{2} - 2 x + 2$, so $f'(-2) = 54$"
        },
        {
          "qid": "FD_003_m05",
          "q": "If $f(x) = 2x^{3/2} - x^{1/3}$, find $f'(8)$.",
          "a": "$f'(x) = 3 \\sqrt{x} - \\frac{1}{3 x^{\\frac{2}{3}}}$, so $f'(8) = - \\frac{1}{12} + 6 \\sqrt{2}$"
        }
      ],
      "hard": [
        {
          "qid": "FD_003_h01",
          "q": "The curve $y = x^2 - 4x + 7$ has points where $y = 4$. Find the value(s) of $\\frac{dy}{dx}$ at these points.",
          "a": "$y = 4 \\Rightarrow x^2 - 4x + 3 = 0 \\Rightarrow x = 1, 3$. $y' = 2 x - 4$. At $x=1$: $y'=-2$. At $x=3$: $y'=2$"
        },
        {
          "qid": "FD_003_h02",
          "q": "Given $f(x) = 2x^3 - \\frac{5}{x^2} + \\frac{1}{x}$, find $f'(-1)$.",
          "a": "$f'(x) = 6 x^{2} - \\frac{1}{x^{2}} + \\frac{10}{x^{3}}$. $f'(-1) = -5$"
        },
        {
          "qid": "FD_003_h03",
          "q": "Given $f(x) = ax^2 + 3x$ and $f'(2) = 11$, find the value of $a$.",
          "a": "$f'(x) = 2 a x + 3$. $f'(2) = 4 a + 3 = 11 \\Rightarrow a = 2$"
        },
        {
          "qid": "FD_003_h04",
          "q": "If $y = x\\sqrt{x} + \\frac{4}{\\sqrt{x}}$, find $\\frac{dy}{dx}$ when $x = 4$.",
          "a": "Rewrite: $y = x^{3/2} + 4x^{-1/2}$. $y' = \\frac{3 \\sqrt{x}}{2} - \\frac{2}{x^{\\frac{3}{2}}}$. At $x = 4$: $11/4$"
        },
        {
          "qid": "FD_003_h05",
          "q": "Find the rate of change of $y = \\frac{x^3}{3} - \\frac{5x^2}{2} + 6x - 1$ at $x = 3$.",
          "a": "$\\frac{dy}{dx} = x^{2} - 5 x + 6$. At $x = 3$: $\\frac{dy}{dx} = 0$. (Stationary point)"
        }
      ]
    },
    {
      "pt_id": "FD_004",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Basic Differentiation Skills",
      "concept": "Product Rule",
      "pt": "Using a table of values to calculate the derivative of the product of two functions at a given point",
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
          "qid": "FD_004_e01",
          "q": "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 2   | 3       | 2        | 4       | 1        |\nFind $\\frac{d}{dx}[f(x)g(x)]$ at $x = 2$.",
          "a": "$f'(2)g(2) + f(2)g'(2) = (2)(4) + (3)(1) = 8 + 3 = 11$"
        },
        {
          "qid": "FD_004_e02",
          "q": "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 1   | 5       | 1        | 2       | 3        |\nFind $\\frac{d}{dx}[f(x)g(x)]$ at $x = 1$.",
          "a": "$f'(1)g(1) + f(1)g'(1) = (1)(2) + (5)(3) = 2 + 15 = 17$"
        },
        {
          "qid": "FD_004_e03",
          "q": "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 0   | 4       | 3        | 6       | 2        |\nFind $\\frac{d}{dx}[f(x)g(x)]$ at $x = 0$.",
          "a": "$f'(0)g(0) + f(0)g'(0) = (3)(6) + (4)(2) = 18 + 8 = 26$"
        }
      ],
      "medium": [
        {
          "qid": "FD_004_m01",
          "q": "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 3   | 2       | -1       | 5       | 4        |\nFind $\\frac{d}{dx}[f(x)g(x)]$ at $x = 3$.",
          "a": "$f'(3)g(3) + f(3)g'(3) = (-1)(5) + (2)(4) = -5 + 8 = 3$"
        },
        {
          "qid": "FD_004_m02",
          "q": "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 2   | -3       | 4        | 2       | -5        |\nFind $\\frac{d}{dx}[f(x)g(x)]$ at $x = 2$.",
          "a": "$f'(2)g(2) + f(2)g'(2) = (4)(2) + (-3)(-5) = 8 + 15 = 23$"
        },
        {
          "qid": "FD_004_m03",
          "q": "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 1   | 4       | -2       | 3       | 7        |\n| 4   | -1      | 5        | 6       | -3       |\nFind $\\frac{d}{dx}[f(x)g(x)]$ at $x = 1$ and at $x = 4$.",
          "a": "At $x = 1$: $(-2)(3) + (4)(7) = -6 + 28 = 22$.\nAt $x = 4$: $(5)(6) + (-1)(-3) = 30 + 3 = 33$."
        },
        {
          "qid": "FD_004_m04",
          "q": "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 2   | $\\frac{1}{2}$       | 3        | 4       | $-\\frac{1}{2}$        |\nFind $\\frac{d}{dx}[f(x)g(x)]$ at $x = 2$.",
          "a": "$f'(2)g(2) + f(2)g'(2) = (3)(4) + \\left(\\frac{1}{2}\\right)\\left(-\\frac{1}{2}\\right) = 12 - \\frac{1}{4} = \\frac{47}{4}$"
        },
        {
          "qid": "FD_004_m05",
          "q": "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 5   | 2       | -3        | 7       | 1        |\nFind $\\frac{d}{dx}[3f(x)g(x)]$ at $x = 5$.",
          "a": "$3[f'(5)g(5) + f(5)g'(5)] = 3[(-3)(7) + (2)(1)] = 3[-21 + 2] = 3 \\times -19 = -57$"
        }
      ],
      "hard": [
        {
          "qid": "FD_004_h01",
          "q": "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ | $h(x)$ | $h'(x)$ |\n|-----|---------|----------|---------|----------|---------|----------|\n| 1   | 3       | -2       | 4       | 5        | -1      | 6        |\nFind $\\frac{d}{dx}[f(x)g(x) + h(x)]$ at $x = 1$.",
          "a": "$[f'(1)g(1) + f(1)g'(1)] + h'(1) = [(-2)(4) + (3)(5)] + 6 = [-8 + 15] + 6 = 13$"
        },
        {
          "qid": "FD_004_h02",
          "q": "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ |\n|-----|---------|----------|\n| 3   | -4      | 5        |\nUse the product rule to find $\\frac{d}{dx}[f(x)]^2$ at $x = 3$. *Hint: $[f(x)]^2 = f(x) \\cdot f(x)$*.",
          "a": "$\\frac{d}{dx}[f(x)]^2 = f'(x)f(x) + f(x)f'(x) = 2f(x)f'(x)$. At $x = 3$: $2(-4)(5) = -40$."
        },
        {
          "qid": "FD_004_h03",
          "q": "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ | $h(x)$ | $h'(x)$ |\n|-----|---------|----------|---------|----------|---------|----------|\n| 2   | 1       | 3        | -2      | 4        | 5       | -1       |\nFind $\\frac{d}{dx}[f(x)g(x)h(x)]$ at $x = 2$.",
          "a": "$f'gh + fg'h + fgh' = (3)(-2)(5) + (1)(4)(5) + (1)(-2)(-1) = -30 + 20 + 2 = -8$"
        },
        {
          "qid": "FD_004_h04",
          "q": "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 1   | 6       | -2       | 3       | 4        |\nFind $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 1$.",
          "a": "$\\frac{f'(1)g(1) - f(1)g'(1)}{[g(1)]^2} = \\frac{(-2)(3) - (6)(4)}{3^2} = \\frac{-6 - 24}{9} = \\frac{-30}{9} = -\\frac{10}{3}$"
        },
        {
          "qid": "FD_004_h05",
          "q": "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 0   | 2       | -1       | 5       | 3        |\n| 2   | 4       | 0        | 1       | -2       |\nLet $P(x) = f(x)g(x)$. Find $P'(0)$ and $P'(2)$, and determine whether $P$ is increasing or decreasing at each point.",
          "a": "$P'(0) = (-1)(5) + (2)(3) = -5 + 6 = 1 > 0$ (increasing).\n$P'(2) = (0)(1) + (4)(-2) = 0 - 8 = -8 < 0$ (decreasing)."
        }
      ]
    },
    {
      "pt_id": "FD_005",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Basic Differentiation Skills",
      "concept": "Quotient Rule",
      "pt": "Quotient rule differentiation of simple functions",
      "testing": "Testing: (u/v)' = (u'v - uv') / v²",
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
          "qid": "FD_005_e01",
          "q": "Differentiate $y = \\frac{x^2}{x + 3}$.",
          "a": "$\\frac{x \\left(x + 6\\right)}{\\left(x + 3\\right)^{2}}$"
        },
        {
          "qid": "FD_005_e02",
          "q": "Differentiate $y = \\frac{2x + 1}{x - 1}$.",
          "a": "$- \\frac{3}{\\left(x - 1\\right)^{2}}$"
        },
        {
          "qid": "FD_005_e03",
          "q": "Differentiate $y = \\frac{x^3}{x^2 + 1}$.",
          "a": "$\\frac{x^{2} \\left(x^{2} + 3\\right)}{\\left(x^{2} + 1\\right)^{2}}$"
        }
      ],
      "medium": [
        {
          "qid": "FD_005_m01",
          "q": "Differentiate $y = \\frac{e^x}{x^2}$.",
          "a": "$\\frac{\\left(x - 2\\right) e^{x}}{x^{3}}$"
        },
        {
          "qid": "FD_005_m02",
          "q": "Differentiate $y = \\frac{x^2 - 1}{x^2 + 1}$.",
          "a": "$\\frac{4 x}{\\left(x^{2} + 1\\right)^{2}}$"
        },
        {
          "qid": "FD_005_m03",
          "q": "Differentiate $y = \\frac{\\sqrt{x}}{x + 4}$.",
          "a": "$\\frac{4 - x}{2 \\sqrt{x} \\left(x + 4\\right)^{2}}$"
        },
        {
          "qid": "FD_005_m04",
          "q": "Differentiate $y = \\frac{3x + 2}{e^x}$.",
          "a": "$\\left(1 - 3 x\\right) e^{- x}$"
        },
        {
          "qid": "FD_005_m05",
          "q": "Differentiate $y = \\frac{x}{\\sqrt{x + 1}}$.",
          "a": "$\\frac{x + 2}{2 \\left(x + 1\\right)^{\\frac{3}{2}}}$"
        }
      ],
      "hard": [
        {
          "qid": "FD_005_h01",
          "q": "Show that $\\frac{d}{dx}\\left(\\frac{\\sin x}{\\cos x}\\right) = \\frac{1}{\\cos^2 x}$.",
          "a": "$\\frac{\\cos x \\cdot \\cos x - \\sin x(-\\sin x)}{\\cos^2 x} = \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x}$"
        },
        {
          "qid": "FD_005_h02",
          "q": "Differentiate $y = \\frac{e^{2x}}{x^2 + 3}$.",
          "a": "$\\frac{2 \\left(x^{2} - x + 3\\right) e^{2 x}}{\\left(x^{2} + 3\\right)^{2}}$"
        },
        {
          "qid": "FD_005_h03",
          "q": "Differentiate $y = \\frac{x^2 + 1}{\\sin x}$.",
          "a": "$\\frac{2 x \\sin{\\left(x \\right)} - \\left(x^{2} + 1\\right) \\cos{\\left(x \\right)}}{\\sin^{2}{\\left(x \\right)}}$"
        },
        {
          "qid": "FD_005_h04",
          "q": "Differentiate $y = \\frac{\\ln x}{x^2}$.",
          "a": "$\\frac{1 - 2 \\log{\\left(x \\right)}}{x^{3}}$"
        },
        {
          "qid": "FD_005_h05",
          "q": "Differentiate $y = \\frac{2x - \\sin x}{x + \\cos x}$.",
          "a": "$\\frac{2 x \\sin{\\left(x \\right)} - x \\cos{\\left(x \\right)} + \\sin{\\left(x \\right)} + 2 \\cos{\\left(x \\right)} - 1}{\\left(x + \\cos{\\left(x \\right)}\\right)^{2}}$"
        }
      ]
    },
    {
      "pt_id": "FD_006",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Basic Differentiation Skills",
      "concept": "Quotient Rule",
      "pt": "Using a table of values to calculate the derivative of the quotient of two functions at a given point",
      "testing": "Testing: $\\left(\\frac{f}{g}\\right)'(a) = \\frac{f'(a)g(a) - f(a)g'(a)}{[g(a)]^2}$",
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
          "qid": "FD_006_e01",
          "q": "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 2$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $2$ | $6$ | $3$ | $4$ | $-2$ |",
          "a": "$\\frac{(3)(4) - (6)(-2)}{4^2} = \\frac{24}{16} = \\frac{3}{2}$"
        },
        {
          "qid": "FD_006_e02",
          "q": "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 1$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $1$ | $4$ | $2$ | $2$ | $1$ |",
          "a": "$\\frac{(2)(2) - (4)(1)}{2^2} = \\frac{0}{4} = 0$"
        },
        {
          "qid": "FD_006_e03",
          "q": "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 3$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $3$ | $9$ | $6$ | $3$ | $1$ |",
          "a": "$\\frac{(6)(3) - (9)(1)}{3^2} = \\frac{9}{9} = 1$"
        }
      ],
      "medium": [
        {
          "qid": "FD_006_m01",
          "q": "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 0$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $0$ | $-1$ | $4$ | $2$ | $-3$ |",
          "a": "$\\frac{(4)(2) - (-1)(-3)}{2^2} = \\frac{5}{4} = \\frac{5}{4}$"
        },
        {
          "qid": "FD_006_m02",
          "q": "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = -1$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $-1$ | $3$ | $-2$ | $5$ | $4$ |",
          "a": "$\\frac{(-2)(5) - (3)(4)}{5^2} = \\frac{-22}{25} = - \\frac{22}{25}$"
        },
        {
          "qid": "FD_006_m03",
          "q": "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 4$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $4$ | $10$ | $-1$ | $2$ | $3$ |",
          "a": "$\\frac{(-1)(2) - (10)(3)}{2^2} = \\frac{-32}{4} = -8$"
        },
        {
          "qid": "FD_006_m04",
          "q": "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 2$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $2$ | $0$ | $5$ | $-3$ | $2$ |",
          "a": "$\\frac{(5)(-3) - (0)(2)}{-3^2} = \\frac{-15}{9} = - \\frac{5}{3}$"
        },
        {
          "qid": "FD_006_m05",
          "q": "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 1$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $1$ | $-2$ | $7$ | $4$ | $-1$ |",
          "a": "$\\frac{(7)(4) - (-2)(-1)}{4^2} = \\frac{26}{16} = \\frac{13}{8}$"
        }
      ],
      "hard": [
        {
          "qid": "FD_006_h01",
          "q": "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 3$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $3$ | $-4$ | $5$ | $-2$ | $6$ |",
          "a": "$\\frac{(5)(-2) - (-4)(6)}{-2^2} = \\frac{14}{4} = \\frac{7}{2}$"
        },
        {
          "qid": "FD_006_h02",
          "q": "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 0$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $0$ | $1$ | $-3$ | $-1$ | $2$ |",
          "a": "$\\frac{(-3)(-1) - (1)(2)}{-1^2} = \\frac{1}{1} = 1$"
        },
        {
          "qid": "FD_006_h03",
          "q": "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = -2$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $-2$ | $8$ | $-3$ | $4$ | $7$ |",
          "a": "$\\frac{(-3)(4) - (8)(7)}{4^2} = \\frac{-68}{16} = - \\frac{17}{4}$"
        },
        {
          "qid": "FD_006_h04",
          "q": "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 5$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $5$ | $12$ | $-4$ | $6$ | $1$ |",
          "a": "$\\frac{(-4)(6) - (12)(1)}{6^2} = \\frac{-36}{36} = -1$"
        },
        {
          "qid": "FD_006_h05",
          "q": "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 1$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $1$ | $-5$ | $10$ | $3$ | $-4$ |",
          "a": "$\\frac{(10)(3) - (-5)(-4)}{3^2} = \\frac{10}{9} = \\frac{10}{9}$"
        }
      ]
    },
    {
      "pt_id": "FD_007",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Basic Differentiation Skills",
      "concept": "Trigonometric Functions",
      "pt": "Differentiation involving the product of functions with one including a trigonometric function",
      "testing": "Testing: Product rule where one factor is a trigonometric function",
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
          "qid": "FD_007_e01",
          "q": "Differentiate $y = x\\sin(x)$.",
          "a": "$y' = \\sin(x) + x\\cos(x)$"
        },
        {
          "qid": "FD_007_e02",
          "q": "Differentiate $y = x^2\\cos(x)$.",
          "a": "$y' = 2x\\cos(x) - x^2\\sin(x) = x(2\\cos(x) - x\\sin(x))$"
        },
        {
          "qid": "FD_007_e03",
          "q": "Differentiate $y = 3x\\cos(x)$.",
          "a": "$y' = 3\\cos(x) - 3x\\sin(x) = 3(\\cos(x) - x\\sin(x))$"
        }
      ],
      "medium": [
        {
          "qid": "FD_007_m01",
          "q": "Differentiate $y = x^3\\sin(x)$.",
          "a": "$y' = 3x^2\\sin(x) + x^3\\cos(x) = x^2(3\\sin(x) + x\\cos(x))$"
        },
        {
          "qid": "FD_007_m02",
          "q": "Differentiate $y = e^x\\sin(x)$.",
          "a": "$y' = e^x\\sin(x) + e^x\\cos(x) = e^x(\\sin(x) + \\cos(x))$"
        },
        {
          "qid": "FD_007_m03",
          "q": "Differentiate $y = e^x\\sin(3x)$.",
          "a": "$y' = e^x\\sin(3x) + 3e^x\\cos(3x) = e^x(\\sin(3x) + 3\\cos(3x))$"
        },
        {
          "qid": "FD_007_m04",
          "q": "Differentiate $y = (x+1)\\cos(x)$.",
          "a": "$y' = \\cos(x) - (x+1)\\sin(x)$"
        },
        {
          "qid": "FD_007_m05",
          "q": "Differentiate $y = x\\cos(2x)$.",
          "a": "$y' = \\cos(2x) - 2x\\sin(2x)$"
        }
      ],
      "hard": [
        {
          "qid": "FD_007_h01",
          "q": "Differentiate $y = x^2\\sin(x)\\cos(x)$.",
          "a": "Using $y = \\frac{x^2}{2}\\sin(2x)$:\n$y' = x\\sin(2x) + x^2\\cos(2x)$"
        },
        {
          "qid": "FD_007_h02",
          "q": "Differentiate $y = e^x\\cos(x)$.",
          "a": "$y' = e^x\\cos(x) - e^x\\sin(x) = e^x(\\cos(x) - \\sin(x))$"
        },
        {
          "qid": "FD_007_h03",
          "q": "Differentiate $y = \\sqrt{x}\\sin(x)$.",
          "a": "$y' = \\frac{\\sin(x)}{2\\sqrt{x}} + \\sqrt{x}\\cos(x) = \\frac{\\sin(x) + 2x\\cos(x)}{2\\sqrt{x}}$"
        },
        {
          "qid": "FD_007_h04",
          "q": "Differentiate $y = (2x-1)^2\\sin(x)$.",
          "a": "$y' = 4(2x-1)\\sin(x) + (2x-1)^2\\cos(x) = (2x-1)(4\\sin(x) + (2x-1)\\cos(x))$"
        },
        {
          "qid": "FD_007_h05",
          "q": "Differentiate $y = e^{-x}\\sin(2x)$.",
          "a": "$y' = -e^{-x}\\sin(2x) + 2e^{-x}\\cos(2x) = e^{-x}(2\\cos(2x) - \\sin(2x))$"
        }
      ]
    },
    {
      "pt_id": "FD_008",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Basic Differentiation Skills",
      "concept": "Trigonometric Functions",
      "pt": "Differentiation involving the quotient of functions with one including a trigonometric function",
      "testing": "Testing: Quotient rule where one factor is a trigonometric function",
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
          "qid": "FD_008_e01",
          "q": "Differentiate $y = \\frac{\\sin(x)}{x}$.",
          "a": "$y' = \\frac{x\\cos(x) - \\sin(x)}{x^2}$"
        },
        {
          "qid": "FD_008_e02",
          "q": "Differentiate $y = \\frac{x}{\\cos(x)}$.",
          "a": "$y' = \\frac{\\cos(x) + x\\sin(x)}{\\cos^2(x)}$"
        },
        {
          "qid": "FD_008_e03",
          "q": "Differentiate $y = \\frac{\\cos(x)}{x}$.",
          "a": "$y' = \\frac{-x\\sin(x) - \\cos(x)}{x^2}$"
        }
      ],
      "medium": [
        {
          "qid": "FD_008_m01",
          "q": "Differentiate $y = \\frac{\\sin(x)}{x + 1}$.",
          "a": "$y' = \\frac{(x+1)\\cos(x) - \\sin(x)}{(x+1)^2}$"
        },
        {
          "qid": "FD_008_m02",
          "q": "Differentiate $y = \\frac{x^2}{\\sin(x)}$.",
          "a": "$y' = \\frac{2x\\sin(x) - x^2\\cos(x)}{\\sin^2(x)} = \\frac{x(2\\sin(x) - x\\cos(x))}{\\sin^2(x)}$"
        },
        {
          "qid": "FD_008_m03",
          "q": "Differentiate $y = \\frac{\\cos(x)}{1 + \\sin(x)}$.",
          "a": "$y' = \\frac{-\\sin(x)(1+\\sin(x)) - \\cos^2(x)}{(1+\\sin(x))^2} = \\frac{-\\sin(x) - 1}{(1+\\sin(x))^2} = \\frac{-1}{1+\\sin(x)}$"
        },
        {
          "qid": "FD_008_m04",
          "q": "Differentiate $y = \\frac{e^x}{\\cos(x)}$.",
          "a": "$y' = \\frac{e^x\\cos(x) + e^x\\sin(x)}{\\cos^2(x)} = \\frac{e^x(\\cos(x) + \\sin(x))}{\\cos^2(x)}$"
        },
        {
          "qid": "FD_008_m05",
          "q": "Differentiate $y = \\frac{\\sin(x)}{e^x}$.",
          "a": "$y' = \\frac{e^x\\cos(x) - e^x\\sin(x)}{e^{2x}} = \\frac{\\cos(x) - \\sin(x)}{e^x}$"
        }
      ],
      "hard": [
        {
          "qid": "FD_008_h01",
          "q": "Show that $\\frac{d}{dx}(\\frac{\\sin(x)}{\\cos(x)}) = \\frac{1}{\\cos^2(x)}$.",
          "a": "$\\frac{\\cos(x) \\cdot \\cos(x) - \\sin(x)(-\\sin(x))}{\\cos^2(x)} = \\frac{\\cos^2(x) + \\sin^2(x)}{\\cos^2(x)} = \\frac{1}{\\cos^2(x)}$ $\\checkmark$"
        },
        {
          "qid": "FD_008_h02",
          "q": "Differentiate $y = \\frac{x\\sin(x)}{\\cos(x)}$.",
          "a": "$y = x\\tan(x)$. Using product rule on $x\\tan(x)$:\n$y' = \\tan(x) + \\frac{x}{\\cos^2(x)}$"
        },
        {
          "qid": "FD_008_h03",
          "q": "Differentiate $y = \\frac{\\sin(2x)}{x^2 + 1}$.",
          "a": "$y' = \\frac{2(x^2+1)\\cos(2x) - 2x\\sin(2x)}{(x^2+1)^2}$"
        },
        {
          "qid": "FD_008_h04",
          "q": "Show that $\\frac{d}{dx}(\\frac{\\cos(x)}{\\sin(x)}) = -\\frac{1}{\\sin^2(x)}$.",
          "a": "$\\frac{-\\sin^2(x) - \\cos^2(x)}{\\sin^2(x)} = \\frac{-1}{\\sin^2(x)}$ $\\checkmark$"
        },
        {
          "qid": "FD_008_h05",
          "q": "Differentiate $y = \\frac{1 + \\cos(x)}{\\sin(x)}$.",
          "a": "$y' = \\frac{-\\sin^2(x) - (1+\\cos(x))\\cos(x)}{\\sin^2(x)} = \\frac{-\\sin^2(x) - \\cos(x) - \\cos^2(x)}{\\sin^2(x)} = \\frac{-1 - \\cos(x)}{\\sin^2(x)}$"
        }
      ]
    },
    {
      "pt_id": "FD_009",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Basic Differentiation Skills",
      "concept": "Trigonometric Functions",
      "pt": "Differentiation of composite functions — trigonometric function as inside function",
      "testing": "Testing: Chain rule with trig on the inside, e.g. $f(\\sin(x))$",
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
          "qid": "FD_009_e01",
          "q": "Differentiate $y = e^{\\sin(x)}$.",
          "a": "$y' = \\cos(x) \\cdot e^{\\sin(x)}$"
        },
        {
          "qid": "FD_009_e02",
          "q": "Differentiate $y = \\cos^3(x)$.",
          "a": "$y' = -3\\cos^2(x)\\sin(x)$"
        },
        {
          "qid": "FD_009_e03",
          "q": "Differentiate $y = \\sin^4(x)$.",
          "a": "$y' = 4\\sin^3(x)\\cos(x)$"
        }
      ],
      "medium": [
        {
          "qid": "FD_009_m01",
          "q": "Differentiate $y = \\sqrt{\\sin(x)}$.",
          "a": "$y' = \\frac{\\cos(x)}{2\\sqrt{\\sin(x)}}$"
        },
        {
          "qid": "FD_009_m02",
          "q": "Differentiate $y = \\ln(\\cos(x))$.",
          "a": "$y' = -\\frac{\\sin(x)}{\\cos(x)} = -\\tan(x)$"
        },
        {
          "qid": "FD_009_m03",
          "q": "Differentiate $y = e^{\\cos(x)}$.",
          "a": "$y' = -\\sin(x) \\cdot e^{\\cos(x)}$"
        },
        {
          "qid": "FD_009_m04",
          "q": "Differentiate $y = \\frac{1}{\\cos(x)}$.",
          "a": "$y = (\\cos(x))^{-1}$. $y' = \\frac{\\sin(x)}{\\cos^2(x)}$"
        },
        {
          "qid": "FD_009_m05",
          "q": "Differentiate $y = \\ln(\\sin(x))$.",
          "a": "$y' = \\frac{\\cos(x)}{\\sin(x)} = \\cot(x)$"
        }
      ],
      "hard": [
        {
          "qid": "FD_009_h01",
          "q": "Differentiate $y = \\frac{1}{\\sin^2(x)}$.",
          "a": "$y = (\\sin(x))^{-2}$. $y' = -2\\sin^{-3}(x)\\cos(x) = \\frac{-2\\cos(x)}{\\sin^3(x)}$"
        },
        {
          "qid": "FD_009_h02",
          "q": "Differentiate $y = e^{\\tan(x)}$.",
          "a": "$y' = \\frac{e^{\\tan(x)}}{\\cos^2(x)}$"
        },
        {
          "qid": "FD_009_h03",
          "q": "Differentiate $y = \\cos^3(2x)$.",
          "a": "$y' = 3\\cos^2(2x) \\cdot (-2\\sin(2x)) = -6\\cos^2(2x)\\sin(2x)$"
        },
        {
          "qid": "FD_009_h04",
          "q": "Differentiate $y = \\sqrt{1 + \\sin(x)}$.",
          "a": "$y' = \\frac{\\cos(x)}{2\\sqrt{1 + \\sin(x)}}$"
        },
        {
          "qid": "FD_009_h05",
          "q": "Differentiate $y = \\ln(\\sin^2(x) + 1)$.",
          "a": "$y' = \\frac{2\\sin(x)\\cos(x)}{\\sin^2(x) + 1} = \\frac{\\sin(2x)}{\\sin^2(x) + 1}$"
        }
      ]
    },
    {
      "pt_id": "FD_010",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Basic Differentiation Skills",
      "concept": "Trigonometric Functions",
      "pt": "Differentiation of composite functions — trigonometric function as outside function",
      "testing": "Testing: Chain rule with trig on the outside, e.g. $\\sin(f(x))$",
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
          "qid": "FD_010_e01",
          "q": "Differentiate $y = \\sin(3x + 2)$.",
          "a": "$y' = 3\\cos(3x + 2)$"
        },
        {
          "qid": "FD_010_e02",
          "q": "Differentiate $y = \\cos(x^2)$.",
          "a": "$y' = -2x\\sin(x^2)$"
        },
        {
          "qid": "FD_010_e03",
          "q": "Differentiate $y = \\sin(5x - 1)$.",
          "a": "$y' = 5\\cos(5x - 1)$"
        }
      ],
      "medium": [
        {
          "qid": "FD_010_m01",
          "q": "Differentiate $y = \\sin(x^3)$.",
          "a": "$y' = 3x^2\\cos(x^3)$"
        },
        {
          "qid": "FD_010_m02",
          "q": "Differentiate $y = \\cos(e^x)$.",
          "a": "$y' = -e^x\\sin(e^x)$"
        },
        {
          "qid": "FD_010_m03",
          "q": "Differentiate $y = \\sin(\\sqrt{x})$.",
          "a": "$y' = \\frac{\\cos(\\sqrt{x})}{2\\sqrt{x}}$"
        },
        {
          "qid": "FD_010_m04",
          "q": "Differentiate $y = \\cos(2x^2 - x)$.",
          "a": "$y' = -(4x - 1)\\sin(2x^2 - x)$"
        },
        {
          "qid": "FD_010_m05",
          "q": "Differentiate $y = \\sin(\\ln(x))$.",
          "a": "$y' = \\frac{\\cos(\\ln(x))}{x}$"
        }
      ],
      "hard": [
        {
          "qid": "FD_010_h01",
          "q": "Differentiate $y = \\sin(\\frac{1}{x})$.",
          "a": "$y' = -\\frac{\\cos(1/x)}{x^2}$"
        },
        {
          "qid": "FD_010_h02",
          "q": "Differentiate $y = \\cos(\\sin(x))$.",
          "a": "$y' = -\\cos(x)\\sin(\\sin(x))$"
        },
        {
          "qid": "FD_010_h03",
          "q": "Differentiate $y = \\sin(x^2 + 3x)$.",
          "a": "$y' = (2x + 3)\\cos(x^2 + 3x)$"
        },
        {
          "qid": "FD_010_h04",
          "q": "Differentiate $y = \\cos((2x+1)^3)$.",
          "a": "$y' = -6(2x+1)^2\\sin((2x+1)^3)$"
        },
        {
          "qid": "FD_010_h05",
          "q": "Differentiate $y = \\sin(e^{2x})$.",
          "a": "$y' = 2e^{2x}\\cos(e^{2x})$"
        }
      ]
    },
    {
      "pt_id": "FD_011",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Basic Differentiation Skills",
      "concept": "Trigonometric Functions",
      "pt": "Differentiation of simple trigonometric functions",
      "testing": "Testing: Derivatives of $\\sin$, $\\cos$, $\\tan$ with chain rule",
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
          "qid": "FD_011_e01",
          "q": "Differentiate $y = 2 \\sin(3 x)$.",
          "a": "$y' = 6 \\cos(3 x)$"
        },
        {
          "qid": "FD_011_e02",
          "q": "Differentiate $y = \\sin(x) + \\cos(2 x)$.",
          "a": "$y' = - 2 \\sin(2 x) + \\cos(x)$"
        },
        {
          "qid": "FD_011_e03",
          "q": "Differentiate $y = - 3 \\sin(x) + 5 \\cos(x)$.",
          "a": "$y' = - 5 \\sin(x) - 3 \\cos(x)$"
        }
      ],
      "medium": [
        {
          "qid": "FD_011_m01",
          "q": "Differentiate $y = 3 \\sin(2 x) + \\cos(5 x)$.",
          "a": "$y' = - 5 \\sin(5 x) + 6 \\cos(2 x)$"
        },
        {
          "qid": "FD_011_m02",
          "q": "Differentiate $y = \\tan(3x + 1)$.",
          "a": "$y' = \\frac{3}{\\cos^2(3x+1)}$"
        },
        {
          "qid": "FD_011_m03",
          "q": "Differentiate $y = 4 \\sin(\\frac{x}{2}) - \\cos(3 x)$.",
          "a": "$y' = 3 \\sin(3 x) + 2 \\cos(\\frac{x}{2})$"
        },
        {
          "qid": "FD_011_m04",
          "q": "Differentiate $y = \\sin^2(x)$.",
          "a": "$y' = 2\\sin(x)\\cos(x) = \\sin(2x)$"
        },
        {
          "qid": "FD_011_m05",
          "q": "Differentiate $y = 2\\tan(x) - \\sin(4x)$.",
          "a": "$y' = \\frac{2}{\\cos^2(x)} - 4\\cos(4x)$"
        }
      ],
      "hard": [
        {
          "qid": "FD_011_h01",
          "q": "Differentiate $y = \\cos^2(x) + \\sin^2(x)$.",
          "a": "Since $\\cos^2(x) + \\sin^2(x) = 1$, we have $y' = 0$"
        },
        {
          "qid": "FD_011_h02",
          "q": "Differentiate $y = \\sin(2x)\\cos(2x)$.",
          "a": "**Method 1:** Use identity $y = \\frac{1}{2}\\sin(4x)$, so $y' = 2\\cos(4x)$\n**Method 2 (product rule):** $y' = 2\\cos(2x)\\cos(2x) + \\sin(2x)(-2\\sin(2x)) = 2\\cos^2(2x) - 2\\sin^2(2x) = 2\\cos(4x)$"
        },
        {
          "qid": "FD_011_h03",
          "q": "Differentiate $y = x + \\sin(x)\\cos(x)$.",
          "a": "$y' = 1 + \\cos^2(x) - \\sin^2(x) = 1 + \\cos(2x) = 2\\cos^2(x)$"
        },
        {
          "qid": "FD_011_h04",
          "q": "Differentiate $y = \\sin^2(3x)$.",
          "a": "$y' = 2\\sin(3x) \\cdot 3\\cos(3x) = 6\\sin(3x)\\cos(3x) = 3\\sin(6x)$"
        },
        {
          "qid": "FD_011_h05",
          "q": "Differentiate $y = \\tan(x^2)$.",
          "a": "$y' = \\frac{2x}{\\cos^2(x^2)}$"
        }
      ]
    },
    {
      "pt_id": "FD_012",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Basic Differentiation Skills",
      "concept": "Trigonometric Functions",
      "pt": "Finding value of a trigonometric function at a given point",
      "testing": "Testing: Evaluate trig derivative at specific $x$",
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
          "qid": "FD_012_e01",
          "q": "If $f(x) = \\sin(x)$, find $f'(\\frac{\\pi}{6})$.",
          "a": "$f'(x) = \\cos(x)$. $f'(\\pi/6) = \\cos(\\pi/6) = \\frac{\\sqrt{3}}{2}$"
        },
        {
          "qid": "FD_012_e02",
          "q": "If $f(x) = 2\\cos(x)$, find $f'(\\frac{\\pi}{4})$.",
          "a": "$f'(x) = -2\\sin(x)$. $f'(\\pi/4) = -2 \\cdot \\frac{\\sqrt{2}}{2} = -\\sqrt{2}$"
        },
        {
          "qid": "FD_012_e03",
          "q": "If $f(x) = \\sin(2x)$, find $f'(\\frac{\\pi}{3})$.",
          "a": "$f'(x) = 2\\cos(2x)$. $f'(\\pi/3) = 2\\cos(2\\pi/3) = 2 \\cdot (-\\frac{1}{2}) = -1$"
        }
      ],
      "medium": [
        {
          "qid": "FD_012_m01",
          "q": "If $f(x) = 2\\sin(3x) - \\cos(x)$, find $f'(\\frac{\\pi}{6})$.",
          "a": "$f'(x) = 6\\cos(3x) + \\sin(x)$. $f'(\\pi/6) = 6\\cos(\\pi/2) + \\sin(\\pi/6) = 0 + \\frac{1}{2} = \\frac{1}{2}$"
        },
        {
          "qid": "FD_012_m02",
          "q": "If $f(x) = x\\sin(x)$, find $f'(\\pi)$.",
          "a": "$f'(x) = \\sin(x) + x\\cos(x)$. $f'(\\pi) = \\sin(\\pi) + \\pi\\cos(\\pi) = 0 + \\pi(-1) = -\\pi$"
        },
        {
          "qid": "FD_012_m03",
          "q": "If $f(x) = \\cos^2(x)$, find $f'(\\frac{\\pi}{4})$.",
          "a": "$f'(x) = -2\\cos(x)\\sin(x) = -\\sin(2x)$. $f'(\\pi/4) = -\\sin(\\pi/2) = -1$"
        },
        {
          "qid": "FD_012_m04",
          "q": "If $f(x) = \\sin(x) + \\cos(2x)$, find $f'(\\frac{\\pi}{2})$.",
          "a": "$f'(x) = \\cos(x) - 2\\sin(2x)$. $f'(\\pi/2) = \\cos(\\pi/2) - 2\\sin(\\pi) = 0 - 0 = 0$"
        },
        {
          "qid": "FD_012_m05",
          "q": "If $f(x) = 3\\cos(\\frac{x}{2})$, find $f'(\\pi)$.",
          "a": "$f'(x) = -\\frac{3}{2}\\sin(\\frac{x}{2})$. $f'(\\pi) = -\\frac{3}{2}\\sin(\\pi/2) = -\\frac{3}{2}$"
        }
      ],
      "hard": [
        {
          "qid": "FD_012_h01",
          "q": "If $f(x) = e^x\\cos(x)$, find $f'(0)$.",
          "a": "$f'(x) = e^x(\\cos(x) - \\sin(x))$. $f'(0) = e^0(1 - 0) = 1$"
        },
        {
          "qid": "FD_012_h02",
          "q": "If $f(x) = \\frac{\\sin(x)}{x}$, find $f'(\\pi)$.",
          "a": "$f'(x) = \\frac{x\\cos(x) - \\sin(x)}{x^2}$. $f'(\\pi) = \\frac{\\pi(-1) - 0}{\\pi^2} = -\\frac{1}{\\pi}$"
        },
        {
          "qid": "FD_012_h03",
          "q": "If $f(x) = x^2\\cos(x)$, find $f'(\\frac{\\pi}{2})$.",
          "a": "$f'(x) = 2x\\cos(x) - x^2\\sin(x)$. $f'(\\pi/2) = 2 \\cdot \\frac{\\pi}{2} \\cdot 0 - \\frac{\\pi^2}{4} \\cdot 1 = -\\frac{\\pi^2}{4}$"
        },
        {
          "qid": "FD_012_h04",
          "q": "The displacement of a particle is $s(t) = 4\\sin(2t) + \\cos(t)$ metres. Find the velocity at $t = \\frac{\\pi}{4}$.",
          "a": "$v(t) = s'(t) = 8\\cos(2t) - \\sin(t)$. $v(\\pi/4) = 8\\cos(\\pi/2) - \\sin(\\pi/4) = 0 - \\frac{\\sqrt{2}}{2} = -\\frac{\\sqrt{2}}{2}$ m/s"
        },
        {
          "qid": "FD_012_h05",
          "q": "If $f(x) = \\sin(x)\\cos(x)$, find $f'(\\frac{\\pi}{3})$.",
          "a": "$f'(x) = \\cos^2(x) - \\sin^2(x) = \\cos(2x)$. $f'(\\pi/3) = \\cos(2\\pi/3) = -\\frac{1}{2}$"
        }
      ]
    },
    {
      "pt_id": "FD_013",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Basic Differentiation Skills",
      "concept": "e Functions",
      "pt": "Differentiation involving the product of functions with one including an e function",
      "testing": "Testing: Product rule with exponential factor",
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
          "qid": "FD_013_e01",
          "q": "Differentiate $y = xe^x$.",
          "a": "$y' = e^x + xe^x = e^x(1 + x)$"
        },
        {
          "qid": "FD_013_e02",
          "q": "Differentiate $y = x^2 e^x$.",
          "a": "$y' = 2xe^x + x^2 e^x = xe^x(2 + x)$"
        },
        {
          "qid": "FD_013_e03",
          "q": "Differentiate $y = (x+3)e^{-x}$.",
          "a": "$y' = e^{-x} - (x+3)e^{-x} = e^{-x}(1 - x - 3) = -(x+2)e^{-x}$"
        }
      ],
      "medium": [
        {
          "qid": "FD_013_m01",
          "q": "Differentiate $y = x^3 e^{-x}$.",
          "a": "$y' = 3x^2 e^{-x} - x^3 e^{-x} = x^2 e^{-x}(3 - x)$"
        },
        {
          "qid": "FD_013_m02",
          "q": "Differentiate $y = (2x+1)e^{4x}$.",
          "a": "$y' = 2e^{4x} + 4(2x+1)e^{4x} = e^{4x}(8x + 6) = 2e^{4x}(4x + 3)$"
        },
        {
          "qid": "FD_013_m03",
          "q": "Differentiate $y = (x^2 - 1)e^{2x}$.",
          "a": "$y' = 2xe^{2x} + 2(x^2-1)e^{2x} = 2e^{2x}(x^2 + x - 1)$"
        },
        {
          "qid": "FD_013_m04",
          "q": "Differentiate $y = \\sqrt{x} \\cdot e^x$.",
          "a": "$y' = \\frac{e^x}{2\\sqrt{x}} + \\sqrt{x} \\cdot e^x = e^x(\\frac{1}{2\\sqrt{x}} + \\sqrt{x}) = \\frac{e^x(2x + 1)}{2\\sqrt{x}}$"
        },
        {
          "qid": "FD_013_m05",
          "q": "Differentiate $y = (3x - 2)e^{-3x}$.",
          "a": "$y' = 3e^{-3x} - 3(3x-2)e^{-3x} = e^{-3x}(3 - 9x + 6) = 3e^{-3x}(3 - 3x) = 9(1-x)e^{-3x}$"
        }
      ],
      "hard": [
        {
          "qid": "FD_013_h01",
          "q": "Differentiate $y = xe^{x^2}$.",
          "a": "$y' = e^{x^2} + 2x^2 e^{x^2} = e^{x^2}(1 + 2x^2)$"
        },
        {
          "qid": "FD_013_h02",
          "q": "Find the gradient of $y = x^2 e^{3x}$ at $x = 0$.",
          "a": "$y' = 2xe^{3x} + 3x^2 e^{3x} = xe^{3x}(2 + 3x)$. At $x = 0$: $y' = 0$"
        },
        {
          "qid": "FD_013_h03",
          "q": "Find the coordinates of the stationary point of $y = xe^{-x}$.",
          "a": "$y' = e^{-x} - xe^{-x} = e^{-x}(1 - x) = 0 \\Rightarrow x = 1$. $y(1) = e^{-1}$. Stationary point: $(1, e^{-1})$"
        },
        {
          "qid": "FD_013_h04",
          "q": "Differentiate $y = (x^2 + 2x)e^{-x}$.",
          "a": "$y' = (2x+2)e^{-x} - (x^2+2x)e^{-x} = e^{-x}(2x + 2 - x^2 - 2x) = e^{-x}(2 - x^2)$"
        },
        {
          "qid": "FD_013_h05",
          "q": "Differentiate $y = e^x\\ln(x)$.",
          "a": "$y' = e^x\\ln(x) + \\frac{e^x}{x} = e^x(\\ln(x) + \\frac{1}{x})$"
        }
      ]
    },
    {
      "pt_id": "FD_014",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Basic Differentiation Skills",
      "concept": "e Functions",
      "pt": "Differentiation involving the quotient of functions with one including an e function",
      "testing": "Testing: Quotient rule with exponential in numerator or denominator",
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
          "qid": "FD_014_e01",
          "q": "Differentiate $y = \\frac{e^x}{x}$.",
          "a": "$y' = \\frac{xe^x - e^x}{x^2} = \\frac{e^x(x - 1)}{x^2}$"
        },
        {
          "qid": "FD_014_e02",
          "q": "Differentiate $y = \\frac{x}{e^x}$.",
          "a": "$y' = \\frac{e^x - xe^x}{e^{2x}} = \\frac{1 - x}{e^x}$"
        },
        {
          "qid": "FD_014_e03",
          "q": "Differentiate $y = \\frac{e^x}{x + 1}$.",
          "a": "$y' = \\frac{(x+1)e^x - e^x}{(x+1)^2} = \\frac{xe^x}{(x+1)^2}$"
        }
      ],
      "medium": [
        {
          "qid": "FD_014_m01",
          "q": "Differentiate $y = \\frac{e^{2x}}{x+1}$.",
          "a": "$y' = \\frac{2(x+1)e^{2x} - e^{2x}}{(x+1)^2} = \\frac{e^{2x}(2x+1)}{(x+1)^2}$"
        },
        {
          "qid": "FD_014_m02",
          "q": "Differentiate $y = \\frac{e^x}{x^2}$.",
          "a": "$y' = \\frac{x^2 e^x - 2xe^x}{x^4} = \\frac{e^x(x-2)}{x^3}$"
        },
        {
          "qid": "FD_014_m03",
          "q": "Differentiate $y = \\frac{3x+2}{e^x}$.",
          "a": "$y' = \\frac{3e^x - (3x+2)e^x}{e^{2x}} = \\frac{1 - 3x}{e^x}$"
        },
        {
          "qid": "FD_014_m04",
          "q": "Differentiate $y = \\frac{x^2 - 1}{e^x}$.",
          "a": "$y' = \\frac{2xe^x - (x^2-1)e^x}{e^{2x}} = \\frac{2x - x^2 + 1}{e^x} = \\frac{-(x^2 - 2x - 1)}{e^x}$"
        },
        {
          "qid": "FD_014_m05",
          "q": "Differentiate $y = \\frac{e^x}{x^2 + 1}$.",
          "a": "$y' = \\frac{(x^2+1)e^x - 2xe^x}{(x^2+1)^2} = \\frac{e^x(x^2 - 2x + 1)}{(x^2+1)^2} = \\frac{e^x(x-1)^2}{(x^2+1)^2}$"
        }
      ],
      "hard": [
        {
          "qid": "FD_014_h01",
          "q": "Differentiate $y = \\frac{e^{2x}}{x^2 + 3}$.",
          "a": "$y' = \\frac{2(x^2+3)e^{2x} - 2xe^{2x}}{(x^2+3)^2} = \\frac{2e^{2x}(x^2 - x + 3)}{(x^2+3)^2}$"
        },
        {
          "qid": "FD_014_h02",
          "q": "Differentiate $y = \\frac{xe^x}{x + 1}$.",
          "a": "Using quotient rule with $u = xe^x$, $v = x+1$:\n$u' = e^x + xe^x = e^x(1+x)$\n$y' = \\frac{e^x(1+x)(x+1) - xe^x}{(x+1)^2} = \\frac{e^x(x^2 + 2x + 1 - x)}{(x+1)^2} = \\frac{e^x(x^2 + x + 1)}{(x+1)^2}$"
        },
        {
          "qid": "FD_014_h03",
          "q": "Find the stationary point of $y = \\frac{e^x}{x^2}$ for $x > 0$.",
          "a": "$y' = \\frac{e^x(x-2)}{x^3} = 0 \\Rightarrow x = 2$. $y(2) = \\frac{e^2}{4}$. Stationary point: $(2, \\frac{e^2}{4})$"
        },
        {
          "qid": "FD_014_h04",
          "q": "Differentiate $y = \\frac{e^{-x}}{x + 2}$.",
          "a": "$y' = \\frac{-(x+2)e^{-x} - e^{-x}}{(x+2)^2} = \\frac{-e^{-x}(x+3)}{(x+2)^2}$"
        },
        {
          "qid": "FD_014_h05",
          "q": "Differentiate $y = \\frac{\\ln(x)}{e^x}$.",
          "a": "$y' = \\frac{\\frac{1}{x} \\cdot e^x - \\ln(x) \\cdot e^x}{e^{2x}} = \\frac{1 - x\\ln(x)}{xe^x}$"
        }
      ]
    },
    {
      "pt_id": "FD_015",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Basic Differentiation Skills",
      "concept": "e Functions",
      "pt": "Differentiation of $e^x$ or $e^{g(x)}$",
      "testing": "Testing: Chain rule with exponential function",
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
          "qid": "FD_015_e01",
          "q": "Differentiate $y = e^{3x}$.",
          "a": "$y' = 3e^{3x}$"
        },
        {
          "qid": "FD_015_e02",
          "q": "Differentiate $y = e^{-2x}$.",
          "a": "$y' = -2e^{-2x}$"
        },
        {
          "qid": "FD_015_e03",
          "q": "Differentiate $y = 4e^{x/2}$.",
          "a": "$y' = 2e^{x/2}$"
        }
      ],
      "medium": [
        {
          "qid": "FD_015_m01",
          "q": "Differentiate $y = e^{3x^2 - x}$.",
          "a": "$y' = (6x - 1)e^{3x^2 - x}$"
        },
        {
          "qid": "FD_015_m02",
          "q": "Differentiate $y = 5e^{-2x} + e^{\\sqrt{x}}$.",
          "a": "$y' = -10e^{-2x} + \\frac{e^{\\sqrt{x}}}{2\\sqrt{x}}$"
        },
        {
          "qid": "FD_015_m03",
          "q": "Differentiate $y = e^{x^2 + 1}$.",
          "a": "$y' = 2xe^{x^2 + 1}$"
        },
        {
          "qid": "FD_015_m04",
          "q": "Differentiate $y = e^{1/x}$.",
          "a": "$y' = -\\frac{e^{1/x}}{x^2}$"
        },
        {
          "qid": "FD_015_m05",
          "q": "Differentiate $y = 3e^{2x} - e^{-x}$.",
          "a": "$y' = 6e^{2x} + e^{-x}$"
        }
      ],
      "hard": [
        {
          "qid": "FD_015_h01",
          "q": "Differentiate $y = e^{x^3 - 2x}$.",
          "a": "$y' = (3x^2 - 2)e^{x^3 - 2x}$"
        },
        {
          "qid": "FD_015_h02",
          "q": "Differentiate $y = e^{\\sin(x)}$.",
          "a": "$y' = \\cos(x) \\cdot e^{\\sin(x)}$"
        },
        {
          "qid": "FD_015_h03",
          "q": "Differentiate $y = e^{e^x}$.",
          "a": "$y' = e^x \\cdot e^{e^x}$"
        },
        {
          "qid": "FD_015_h04",
          "q": "Differentiate $y = e^{(\\ln(x))^2}$.",
          "a": "$y' = \\frac{2\\ln(x)}{x} \\cdot e^{(\\ln(x))^2}$"
        },
        {
          "qid": "FD_015_h05",
          "q": "If $f(x) = e^{x^2 - 4x}$, find $f'(2)$.",
          "a": "$f'(x) = (2x - 4)e^{x^2 - 4x}$. $f'(2) = 0 \\cdot e^{-4} = 0$. (Stationary point)"
        }
      ]
    },
    {
      "pt_id": "FD_016",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Basic Differentiation Skills",
      "concept": "e Functions",
      "pt": "Differentiation of composite functions — e function as outside function",
      "testing": "Testing: Chain rule with $e^{f(x)}$ where $f$ is non-linear",
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
          "qid": "FD_016_e01",
          "q": "Differentiate $y = e^{\\cos(x)}$.",
          "a": "$y' = -\\sin(x) \\cdot e^{\\cos(x)}$"
        },
        {
          "qid": "FD_016_e02",
          "q": "Differentiate $y = e^{x^2}$.",
          "a": "$y' = 2x \\cdot e^{x^2}$"
        },
        {
          "qid": "FD_016_e03",
          "q": "Differentiate $y = e^{3x+1}$.",
          "a": "$y' = 3e^{3x+1}$"
        }
      ],
      "medium": [
        {
          "qid": "FD_016_m01",
          "q": "Differentiate $y = e^{\\sin(x)}$.",
          "a": "$y' = \\cos(x) \\cdot e^{\\sin(x)}$"
        },
        {
          "qid": "FD_016_m02",
          "q": "Differentiate $y = e^{\\sqrt{x}}$.",
          "a": "$y' = \\frac{e^{\\sqrt{x}}}{2\\sqrt{x}}$"
        },
        {
          "qid": "FD_016_m03",
          "q": "Differentiate $y = e^{x^2 - 3x}$.",
          "a": "$y' = (2x - 3)e^{x^2 - 3x}$"
        },
        {
          "qid": "FD_016_m04",
          "q": "Differentiate $y = e^{\\ln(x)}$ and explain your answer.",
          "a": "Since $e^{\\ln(x)} = x$, we have $y' = 1$. Alternatively, by chain rule: $y' = \\frac{1}{x} \\cdot e^{\\ln(x)} = \\frac{x}{x} = 1$"
        },
        {
          "qid": "FD_016_m05",
          "q": "Differentiate $y = e^{1/(x+1)}$.",
          "a": "$y' = -\\frac{e^{1/(x+1)}}{(x+1)^2}$"
        }
      ],
      "hard": [
        {
          "qid": "FD_016_h01",
          "q": "Differentiate $y = e^{\\tan(x)}$.",
          "a": "$y' = \\frac{e^{\\tan(x)}}{\\cos^2(x)}$"
        },
        {
          "qid": "FD_016_h02",
          "q": "Differentiate $y = e^{e^x}$.",
          "a": "$y' = e^x \\cdot e^{e^x}$"
        },
        {
          "qid": "FD_016_h03",
          "q": "Differentiate $y = e^{x\\sin(x)}$.",
          "a": "Inner function: $u = x\\sin(x)$, $u' = \\sin(x) + x\\cos(x)$.\n$y' = (\\sin(x) + x\\cos(x))e^{x\\sin(x)}$"
        },
        {
          "qid": "FD_016_h04",
          "q": "Find the $x$-coordinate(s) where $y = e^{-x^2}$ has a stationary point.",
          "a": "$y' = -2xe^{-x^2} = 0$. Since $e^{-x^2} > 0$ always, we need $x = 0$. Stationary point at $x = 0$."
        },
        {
          "qid": "FD_016_h05",
          "q": "If $f(x) = e^{x^2 + 2x - 3}$, find $f'(1)$.",
          "a": "$f'(x) = (2x + 2)e^{x^2 + 2x - 3}$. $f'(1) = 4e^{1+2-3} = 4e^0 = 4$"
        }
      ]
    },
    {
      "pt_id": "FD_017",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Exponential Growth and Decay",
      "concept": "Modelling Continuous Exponential Growth and Decay",
      "pt": "Determining decay constant k from given half-life using logarithms",
      "testing": "",
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
          "qid": "FD_017_e01",
          "q": "A substance decays according to $N(t) = N_0 e^{kt}$. If the half-life is $10$ years, find $k$.",
          "a": "$\\frac{N_0}{2} = N_0 e^{10k} \\Rightarrow 10k = \\ln\\left(\\frac{1}{2}\\right) \\Rightarrow k = \\frac{-\\ln 2}{10} \\approx -0.0693$"
        },
        {
          "qid": "FD_017_e02",
          "q": "A radioactive element has a half-life of $5$ hours. If $N(t) = N_0 e^{kt}$, find $k$.",
          "a": "$\\frac{N_0}{2} = N_0 e^{5k} \\Rightarrow k = \\frac{-\\ln 2}{5} \\approx -0.1386$"
        },
        {
          "qid": "FD_017_e03",
          "q": "A substance decays with half-life $20$ minutes. Given $N(t) = N_0 e^{kt}$, find $k$.",
          "a": "$\\frac{N_0}{2} = N_0 e^{20k} \\Rightarrow k = \\frac{-\\ln 2}{20} \\approx -0.0347$"
        }
      ],
      "medium": [
        {
          "qid": "FD_017_m01",
          "q": "A radioactive isotope has a half-life of 12 days. If it decays according to $N(t) = N_0 e^{kt}$, find $k$.",
          "a": "$\\frac{N_0}{2} = N_0 e^{12k} \\Rightarrow k = \\frac{-\\ln 2}{12} \\approx -0.0578$ per day"
        },
        {
          "qid": "FD_017_m02",
          "q": "Radium-226 has a half-life of $1600$ years. Given $N(t) = N_0 e^{kt}$, find $k$ correct to 6 decimal places.",
          "a": "$\\frac{N_0}{2} = N_0 e^{1600k} \\Rightarrow k = \\frac{-\\ln 2}{1600} \\approx -0.000433$"
        },
        {
          "qid": "FD_017_m03",
          "q": "Iodine-131 has a half-life of $8$ days. If $N(t) = N_0 e^{kt}$, determine the exact value of $k$.",
          "a": "$\\frac{N_0}{2} = N_0 e^{8k} \\Rightarrow k = \\frac{-\\ln 2}{8}$"
        },
        {
          "qid": "FD_017_m04",
          "q": "Carbon-14 has a half-life of $5730$ years. If $N(t) = N_0 e^{kt}$, find $k$ to 6 significant figures.",
          "a": "$k = \\frac{-\\ln 2}{5730} \\approx -0.000121$ per year"
        },
        {
          "qid": "FD_017_m05",
          "q": "A drug has a half-life of $2.5$ hours in the body. Using $C(t) = C_0 e^{kt}$ where $t$ is in minutes, find $k$.",
          "a": "$2.5$ hours $= 150$ minutes. $\\frac{C_0}{2} = C_0 e^{150k} \\Rightarrow k = \\frac{-\\ln 2}{150} \\approx -0.00462$ per minute"
        }
      ],
      "hard": [
        {
          "qid": "FD_017_h01",
          "q": "A radioactive sample decays to $25\\%$ of its original mass in $30$ days. Find the decay constant $k$ and the half-life.",
          "a": "$0.25 N_0 = N_0 e^{30k} \\Rightarrow 30k = \\ln(0.25) = -2\\ln 2 \\Rightarrow k = \\frac{-2\\ln 2}{30} = \\frac{-\\ln 2}{15} \\approx -0.0462$. Half-life $= \\frac{\\ln 2}{0.0462} = 15$ days."
        },
        {
          "qid": "FD_017_h02",
          "q": "Only $10\\%$ of a substance remains after $100$ years. Find $k$ and the half-life.",
          "a": "$0.1 = e^{100k} \\Rightarrow k = \\frac{\\ln(0.1)}{100} = \\frac{-\\ln 10}{100} \\approx -0.02303$. Half-life $= \\frac{\\ln 2}{0.02303} \\approx 30.1$ years."
        },
        {
          "qid": "FD_017_h03",
          "q": "A decaying quantity satisfies $N(2) = 800$ and $N(6) = 500$. Given $N(t) = N_0 e^{kt}$, find $k$ and hence the half-life.",
          "a": "$\\frac{N(6)}{N(2)} = \\frac{500}{800} = e^{4k} \\Rightarrow k = \\frac{1}{4}\\ln\\left(\\frac{5}{8}\\right) \\approx -0.1178$. Half-life $= \\frac{\\ln 2}{0.1178} \\approx 5.88$ years."
        },
        {
          "qid": "FD_017_h04",
          "q": "A substance decays to $\\frac{1}{3}$ of its original amount in $15$ hours. Find $k$ and the half-life.",
          "a": "$\\frac{N_0}{3} = N_0 e^{15k} \\Rightarrow k = \\frac{-\\ln 3}{15} \\approx -0.0732$. Half-life $= \\frac{\\ln 2}{0.0732} \\approx 9.46$ hours."
        },
        {
          "qid": "FD_017_h05",
          "q": "Given $N(t) = N_0 e^{-0.04t}$, find the half-life and the time for $90\\%$ of the substance to decay.",
          "a": "Half-life: $t = \\frac{\\ln 2}{0.04} \\approx 17.33$. For $90\\%$ decay ($10\\%$ remaining): $0.1 = e^{-0.04t} \\Rightarrow t = \\frac{\\ln 10}{0.04} \\approx 57.56$."
        }
      ]
    },
    {
      "pt_id": "FD_018",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Exponential Growth and Decay",
      "concept": "Modelling Continuous Exponential Growth and Decay",
      "pt": "Determining half-lives or other percentage of initial values",
      "testing": "",
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
          "qid": "FD_018_e01",
          "q": "A substance decays according to $N(t) = N_0 e^{-0.1t}$. Find the half-life.",
          "a": "$\\frac{N_0}{2} = N_0 e^{-0.1t} \\Rightarrow t = \\frac{\\ln 2}{0.1} \\approx 6.93$ units"
        },
        {
          "qid": "FD_018_e02",
          "q": "Given $N(t) = 100 e^{-0.05t}$, find the half-life.",
          "a": "$50 = 100 e^{-0.05t} \\Rightarrow -0.05t = \\ln(0.5) \\Rightarrow t = \\frac{\\ln 2}{0.05} \\approx 13.86$ units"
        },
        {
          "qid": "FD_018_e03",
          "q": "A population decreases according to $P(t) = P_0 e^{-0.2t}$. Find the half-life.",
          "a": "$\\frac{P_0}{2} = P_0 e^{-0.2t} \\Rightarrow t = \\frac{\\ln 2}{0.2} \\approx 3.47$ units"
        }
      ],
      "medium": [
        {
          "qid": "FD_018_m01",
          "q": "A radioactive substance decays according to $N(t) = N_0 e^{-0.02t}$. Find the half-life.",
          "a": "$\\frac{N_0}{2} = N_0 e^{-0.02t} \\Rightarrow -0.02t = \\ln(0.5) \\Rightarrow t = \\frac{\\ln 2}{0.02} = 34.66$ units"
        },
        {
          "qid": "FD_018_m02",
          "q": "A substance decays as $N(t) = N_0 e^{-0.03t}$. Find the time for $75\\%$ of the original to remain.",
          "a": "$0.75 N_0 = N_0 e^{-0.03t} \\Rightarrow -0.03t = \\ln(0.75) \\Rightarrow t = \\frac{-\\ln(0.75)}{0.03} \\approx 9.59$ units"
        },
        {
          "qid": "FD_018_m03",
          "q": "A population grows according to $P(t) = P_0 e^{0.06t}$. Find the doubling time.",
          "a": "$2P_0 = P_0 e^{0.06t} \\Rightarrow 0.06t = \\ln 2 \\Rightarrow t = \\frac{\\ln 2}{0.06} \\approx 11.55$ units"
        },
        {
          "qid": "FD_018_m04",
          "q": "Given $M(t) = M_0 e^{-0.04t}$, find the time for only $30\\%$ of the substance to remain.",
          "a": "$0.3 = e^{-0.04t} \\Rightarrow -0.04t = \\ln(0.3) \\Rightarrow t = \\frac{-\\ln(0.3)}{0.04} \\approx 30.10$ units"
        },
        {
          "qid": "FD_018_m05",
          "q": "A colony grows as $N(t) = N_0 e^{0.08t}$. Find the time for the population to triple.",
          "a": "$3N_0 = N_0 e^{0.08t} \\Rightarrow 0.08t = \\ln 3 \\Rightarrow t = \\frac{\\ln 3}{0.08} \\approx 13.73$ units"
        }
      ],
      "hard": [
        {
          "qid": "FD_018_h01",
          "q": "A substance decays as $N(t) = N_0 e^{-0.01t}$. How long until only $1\\%$ remains?",
          "a": "$0.01 N_0 = N_0 e^{-0.01t} \\Rightarrow -0.01t = \\ln(0.01) \\Rightarrow t = \\frac{\\ln 100}{0.01} = \\frac{2\\ln 10}{0.01} \\approx 460.5$ units"
        },
        {
          "qid": "FD_018_h02",
          "q": "A substance has a half-life of $15$ years. How long until $80\\%$ has decayed?",
          "a": "$k = \\frac{-\\ln 2}{15}$. Solve $0.2 = e^{kt}$: $t = \\frac{\\ln(0.2)}{k} = \\frac{15 \\ln 5}{\\ln 2} \\approx 34.83$ years."
        },
        {
          "qid": "FD_018_h03",
          "q": "A population grows as $P(t) = P_0 e^{0.05t}$. Find the time for the population to reach (i) $5$ times and (ii) $10$ times its initial size.",
          "a": "(i) $5 = e^{0.05t} \\Rightarrow t = \\frac{\\ln 5}{0.05} \\approx 32.19$. (ii) $10 = e^{0.05t} \\Rightarrow t = \\frac{\\ln 10}{0.05} \\approx 46.05$ units."
        },
        {
          "qid": "FD_018_h04",
          "q": "Substance A decays as $N_A(t) = N_0 e^{-0.02t}$ and substance B has a half-life of $40$ years. Which decays faster? Justify your answer.",
          "a": "Substance A: half-life $= \\frac{\\ln 2}{0.02} \\approx 34.66$ years. Substance B: half-life $= 40$ years. A has a shorter half-life, so A decays faster."
        },
        {
          "qid": "FD_018_h05",
          "q": "A substance has half-life $T$. Show that after $3T$ time units, $\\frac{1}{8}$ of the original amount remains. What percentage has decayed?",
          "a": "After $3T$: $N = N_0 e^{k \\cdot 3T}$. Since $e^{kT} = \\frac{1}{2}$, we get $N = N_0 \\left(\\frac{1}{2}\\right)^3 = \\frac{N_0}{8}$. So $\\frac{7}{8} = 87.5\\%$ has decayed."
        }
      ]
    },
    {
      "pt_id": "FD_019",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Exponential Growth and Decay",
      "concept": "Modelling Continuous Exponential Growth and Decay",
      "pt": "Determining initial value of exponential model",
      "testing": "",
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
          "qid": "FD_019_e01",
          "q": "After $3$ years at a continuous growth rate of $5\\%$ p.a., an investment is worth $\\$2000$. Find the initial investment.",
          "a": "$2000 = A_0 e^{0.05 \\times 3} \\Rightarrow A_0 = 2000 e^{-0.15} \\approx \\$1722$"
        },
        {
          "qid": "FD_019_e02",
          "q": "A radioactive sample has $500$ grams remaining after $4$ years. If $k = -0.1$, find the original mass.",
          "a": "$500 = N_0 e^{-0.1 \\times 4} \\Rightarrow N_0 = 500 e^{0.4} \\approx 746$ grams"
        },
        {
          "qid": "FD_019_e03",
          "q": "A bacteria population reaches $1500$ after $2$ hours of continuous growth at rate $k = 0.1$. Find the initial population.",
          "a": "$1500 = P_0 e^{0.1 \\times 2} \\Rightarrow P_0 = 1500 e^{-0.2} \\approx 1229$"
        }
      ],
      "medium": [
        {
          "qid": "FD_019_m01",
          "q": "After 6 years, an investment is worth $\\$15,000$. If it grew at a continuous rate of 4% p.a., find the initial investment.",
          "a": "$15000 = A_0 e^{0.04 \\times 6} \\Rightarrow A_0 = 15000 e^{-0.24} \\approx \\$11,799$"
        },
        {
          "qid": "FD_019_m02",
          "q": "After $8$ hours, $120$ mg of a drug remains in the bloodstream. Given $M(t) = M_0 e^{-0.03t}$, find $M_0$.",
          "a": "$120 = M_0 e^{-0.03 \\times 8} \\Rightarrow M_0 = 120 e^{0.24} \\approx 152.5$ mg"
        },
        {
          "qid": "FD_019_m03",
          "q": "A culture grows to $800$ bacteria after $5$ hours with $k = 0.07$. Find the initial count.",
          "a": "$800 = P_0 e^{0.07 \\times 5} \\Rightarrow P_0 = 800 e^{-0.35} \\approx 564$"
        },
        {
          "qid": "FD_019_m04",
          "q": "An investment is worth $\\$25{,}000$ after $12$ years at a continuous rate of $4.5\\%$ p.a. Find the initial investment.",
          "a": "$25000 = A_0 e^{0.045 \\times 12} \\Rightarrow A_0 = 25000 e^{-0.54} \\approx \\$14{,}553$"
        },
        {
          "qid": "FD_019_m05",
          "q": "A sample has $200$ mg remaining after $15$ years with $k = -0.06$. Find the original mass.",
          "a": "$200 = N_0 e^{-0.06 \\times 15} \\Rightarrow N_0 = 200 e^{0.9} \\approx 492$ mg"
        }
      ],
      "hard": [
        {
          "qid": "FD_019_h01",
          "q": "A substance has a half-life of $10$ years. After $25$ years, $150$ g remains. Find the original mass.",
          "a": "$k = \\frac{-\\ln 2}{10}$. $150 = N_0 e^{-\\frac{\\ln 2}{10} \\times 25} = N_0 \\cdot 2^{-2.5}$. $N_0 = 150 \\times 2^{2.5} = 150 \\times 4\\sqrt{2} \\approx 849$ g."
        },
        {
          "qid": "FD_019_h02",
          "q": "A bone sample contains $73\\%$ of the original Carbon-14. Given the half-life of C-14 is $5730$ years, estimate the age of the bone.",
          "a": "$0.73 = e^{kt}$ where $k = \\frac{-\\ln 2}{5730}$. $t = \\frac{\\ln(0.73)}{k} = \\frac{-5730 \\ln(0.73)}{\\ln 2} \\approx 2602$ years."
        },
        {
          "qid": "FD_019_h03",
          "q": "A quantity satisfies $N(3) = 600$ and $N(7) = 350$. Given $N(t) = N_0 e^{kt}$, find $N_0$.",
          "a": "$\\frac{350}{600} = e^{4k} \\Rightarrow k = \\frac{1}{4}\\ln\\left(\\frac{7}{12}\\right) \\approx -0.1335$. $N_0 = 600 e^{-3k} = 600 e^{0.4006} \\approx 896$."
        },
        {
          "qid": "FD_019_h04",
          "q": "A cooling object has temperature $T(t) = A + Be^{-0.1t}$. If $T(0) = 90°$C and the room temperature is $20°$C, find $A$, $B$, and $T(5)$.",
          "a": "As $t \\to \\infty$, $T \\to A = 20$. At $t=0$: $20 + B = 90 \\Rightarrow B = 70$. $T(5) = 20 + 70e^{-0.5} \\approx 62.4°$C."
        },
        {
          "qid": "FD_019_h05",
          "q": "An investment earns $3.5\\%$ p.a. continuous interest. What minimum amount must be invested to have $\\$50{,}000$ after $20$ years?",
          "a": "$50000 = A_0 e^{0.035 \\times 20} = A_0 e^{0.7} \\Rightarrow A_0 = 50000 e^{-0.7} \\approx \\$24{,}833$"
        }
      ]
    },
    {
      "pt_id": "FD_020",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Exponential Growth and Decay",
      "concept": "Modelling Continuous Exponential Growth and Decay",
      "pt": "Determining parameters of exponential model from two data points",
      "testing": "",
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
          "qid": "FD_020_e01",
          "q": "A population follows $P(t) = Ae^{kt}$ with $P(0) = 100$ and $P(3) = 200$. Find $A$ and $k$.",
          "a": "$A = P(0) = 100$. $200 = 100e^{3k} \\Rightarrow e^{3k} = 2 \\Rightarrow k = \\frac{\\ln 2}{3} \\approx 0.2310$"
        },
        {
          "qid": "FD_020_e02",
          "q": "A substance follows $N(t) = Ae^{kt}$ with $N(0) = 500$ and $N(4) = 250$. Find $A$ and $k$.",
          "a": "$A = 500$. $250 = 500e^{4k} \\Rightarrow e^{4k} = 0.5 \\Rightarrow k = \\frac{-\\ln 2}{4} \\approx -0.1733$"
        },
        {
          "qid": "FD_020_e03",
          "q": "Bacteria grow as $P(t) = Ae^{kt}$ with $P(0) = 50$ and $P(10) = 150$. Find $A$ and $k$.",
          "a": "$A = 50$. $150 = 50e^{10k} \\Rightarrow e^{10k} = 3 \\Rightarrow k = \\frac{\\ln 3}{10} \\approx 0.1099$"
        }
      ],
      "medium": [
        {
          "qid": "FD_020_m01",
          "q": "A population $P(t) = Ae^{kt}$ satisfies $P(0) = 200$ and $P(5) = 350$. Find $A$ and $k$.",
          "a": "$A = 200$. $350 = 200e^{5k} \\Rightarrow k = \\frac{1}{5}\\ln\\left(\\frac{350}{200}\\right) = \\frac{\\ln(1.75)}{5} \\approx 0.1119$"
        },
        {
          "qid": "FD_020_m02",
          "q": "A quantity follows $N(t) = Ae^{kt}$. Given $N(2) = 400$ and $N(8) = 100$, find $A$ and $k$.",
          "a": "$\\frac{100}{400} = e^{6k} \\Rightarrow k = \\frac{\\ln(0.25)}{6} = \\frac{-\\ln 4}{6} \\approx -0.2310$. $A = 400 e^{-2k} = 400 e^{\\frac{\\ln 4}{3}} \\approx 635$."
        },
        {
          "qid": "FD_020_m03",
          "q": "A colony satisfies $P(1) = 120$ and $P(4) = 300$ with $P(t) = Ae^{kt}$. Find $A$ and $k$.",
          "a": "$\\frac{300}{120} = e^{3k} \\Rightarrow k = \\frac{\\ln(2.5)}{3} \\approx 0.3054$. $A = 120 e^{-k} \\approx 88.4$."
        },
        {
          "qid": "FD_020_m04",
          "q": "The mass of a substance follows $M(t) = Ae^{kt}$. Given $M(0) = 80$ and $M(5) = 50$, find $A$ and $k$.",
          "a": "$A = 80$. $50 = 80e^{5k} \\Rightarrow k = \\frac{1}{5}\\ln\\left(\\frac{50}{80}\\right) = \\frac{1}{5}\\ln\\left(\\frac{5}{8}\\right) \\approx -0.0941$"
        },
        {
          "qid": "FD_020_m05",
          "q": "A population follows $P(t) = Ae^{kt}$ with $P(3) = 1000$ and $P(9) = 4000$. Find $k$ and $A$.",
          "a": "$\\frac{4000}{1000} = e^{6k} \\Rightarrow k = \\frac{\\ln 4}{6} \\approx 0.2310$. $A = 1000 e^{-3k} = 1000 e^{-\\frac{\\ln 4}{2}} = \\frac{1000}{2} = 500$."
        }
      ],
      "hard": [
        {
          "qid": "FD_020_h01",
          "q": "A population follows $P(t) = Ae^{kt}$. Given $P(4) = 300$ and $P(8) = 1200$, find $A$, $k$, and verify by finding $P(0)$.",
          "a": "$\\frac{1200}{300} = e^{4k} \\Rightarrow k = \\frac{\\ln 4}{4} \\approx 0.3466$. $A = 300 e^{-4k} = 300 \\cdot \\frac{1}{4} = 75$. Check: $P(0) = 75$ ✓"
        },
        {
          "qid": "FD_020_h02",
          "q": "A substance follows $N(t) = Ae^{kt}$ with $N(3) = 450$ and $N(10) = 180$. Find $A$ and $k$.",
          "a": "$\\frac{180}{450} = e^{7k} \\Rightarrow k = \\frac{1}{7}\\ln\\left(\\frac{2}{5}\\right) \\approx -0.1309$. $A = 450 e^{-3k} \\approx 666$."
        },
        {
          "qid": "FD_020_h03",
          "q": "Given $P(2) = 500$ and $P(6) = 2000$ with $P(t) = Ae^{kt}$, find $A$ and $k$. Hence predict $P(10)$.",
          "a": "$\\frac{2000}{500} = e^{4k} \\Rightarrow k = \\frac{\\ln 4}{4} \\approx 0.3466$. $A = 500 e^{-2k} = 250$. $P(10) = 250 e^{10 \\times 0.3466} = 250 \\times 32 = 8000$."
        },
        {
          "qid": "FD_020_h04",
          "q": "A cooling object follows $T(t) = C + Ae^{kt}$. Given $T(0) = 80$, $T(5) = 45$, and the room is $20°$C, find $C$, $A$, $k$, and $T(10)$.",
          "a": "$C = 20$. $T(0) = 20 + A = 80 \\Rightarrow A = 60$. $45 = 20 + 60e^{5k} \\Rightarrow e^{5k} = \\frac{25}{60} \\Rightarrow k = \\frac{1}{5}\\ln\\left(\\frac{5}{12}\\right) \\approx -0.1753$. $T(10) = 20 + 60e^{10k} \\approx 30.4°$C."
        },
        {
          "qid": "FD_020_h05",
          "q": "A population follows $P(t) = Ae^{kt}$ with $P(2) = 300$ and $P(5) = 600$. Find $k$ and the time when $P = 5000$.",
          "a": "$k = \\frac{\\ln 2}{3} \\approx 0.2310$. $A = 300 e^{-\\frac{2\\ln 2}{3}} = 300 \\cdot 2^{-2/3} \\approx 189.0$. $5000 = 189.0 \\cdot e^{0.2310 t} \\Rightarrow t = \\frac{\\ln(26.46)}{0.2310} \\approx 14.2$ units."
        }
      ]
    },
    {
      "pt_id": "FD_021",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Exponential Growth and Decay",
      "concept": "Modelling Continuous Exponential Growth and Decay",
      "pt": "Determining rate of growth or decay by using derivative of e function",
      "testing": "",
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
          "qid": "FD_021_e01",
          "q": "Given $P(t) = 200e^{0.05t}$, find the rate of change at $t = 0$.",
          "a": "$P'(t) = 10e^{0.05t}$. $P'(0) = 10$ per unit time."
        },
        {
          "qid": "FD_021_e02",
          "q": "Given $N(t) = 500e^{-0.1t}$, find the rate of decay at $t = 0$.",
          "a": "$N'(t) = -50e^{-0.1t}$. $N'(0) = -50$ per unit time."
        },
        {
          "qid": "FD_021_e03",
          "q": "The mass of a substance is $M(t) = 100e^{-0.2t}$ grams. Find the rate of decay at $t = 3$.",
          "a": "$M'(t) = -20e^{-0.2t}$. $M'(3) = -20e^{-0.6} \\approx -10.98$ grams per unit time."
        }
      ],
      "medium": [
        {
          "qid": "FD_021_m01",
          "q": "The temperature of a cooling object is $T(t) = 25 + 75e^{-0.1t}$ °C. Find the rate of cooling at $t = 5$ minutes.",
          "a": "$T'(t) = -7.5e^{-0.1t}$. $T'(5) = -7.5e^{-0.5} \\approx -4.55$ °C/min"
        },
        {
          "qid": "FD_021_m02",
          "q": "A population is modelled by $P(t) = 1000e^{0.03t}$. Find the rate of growth when $t = 10$.",
          "a": "$P'(t) = 30e^{0.03t}$. $P'(10) = 30e^{0.3} \\approx 40.50$ per year."
        },
        {
          "qid": "FD_021_m03",
          "q": "The value of a car is $V(t) = 5000e^{-0.08t}$ dollars. Find the rate of depreciation at $t = 6$ years.",
          "a": "$V'(t) = -400e^{-0.08t}$. $V'(6) = -400e^{-0.48} \\approx -\\$247.24$ per year."
        },
        {
          "qid": "FD_021_m04",
          "q": "Given $N(t) = 800e^{-0.04t}$, find the rate of decay at $t = 0$ and $t = 10$. Is the rate of decay increasing or decreasing?",
          "a": "$N'(t) = -32e^{-0.04t}$. $N'(0) = -32$. $N'(10) = -32e^{-0.4} \\approx -21.45$. The magnitude of decay decreases (rate slows down)."
        },
        {
          "qid": "FD_021_m05",
          "q": "A cooling object has $T(t) = 20 + 60e^{-0.15t}$. Find the time when the rate of cooling is $-3°$C/min.",
          "a": "$T'(t) = -9e^{-0.15t} = -3 \\Rightarrow e^{-0.15t} = \\frac{1}{3} \\Rightarrow t = \\frac{\\ln 3}{0.15} \\approx 7.32$ min."
        }
      ],
      "hard": [
        {
          "qid": "FD_021_h01",
          "q": "Given $N(t) = 400e^{-0.05t}$, show that $N'(t) = -0.05 N(t)$. Find the time when the rate of decay is half the initial rate.",
          "a": "$N'(t) = -20e^{-0.05t} = -0.05 \\times 400e^{-0.05t} = -0.05 N(t)$ ✓. Initial rate $= -20$. Half $= -10$: $-20e^{-0.05t} = -10 \\Rightarrow t = \\frac{\\ln 2}{0.05} \\approx 13.86$."
        },
        {
          "qid": "FD_021_h02",
          "q": "Given $P(t) = 600e^{0.04t}$, find (i) the average rate of change over $[0, 10]$ and (ii) the instantaneous rate at $t = 5$.",
          "a": "(i) $\\frac{P(10) - P(0)}{10} = \\frac{600e^{0.4} - 600}{10} = 60(e^{0.4} - 1) \\approx 29.54$. (ii) $P'(5) = 24e^{0.2} \\approx 29.30$."
        },
        {
          "qid": "FD_021_h03",
          "q": "The mass of a substance is $M(t) = 250e^{-0.06t}$ grams. Find $t$ when the rate of decay is $5$ grams per year.",
          "a": "$M'(t) = -15e^{-0.06t}$. Set $|M'(t)| = 5$: $15e^{-0.06t} = 5 \\Rightarrow e^{-0.06t} = \\frac{1}{3} \\Rightarrow t = \\frac{\\ln 3}{0.06} \\approx 18.31$ years."
        },
        {
          "qid": "FD_021_h04",
          "q": "Temperature follows $T(t) = 15 + 40e^{-0.1t} + 30e^{-0.3t}$. Find the rate of cooling at $t = 2$.",
          "a": "$T'(t) = -4e^{-0.1t} - 9e^{-0.3t}$. $T'(2) = -4e^{-0.2} - 9e^{-0.6} \\approx -3.276 - 4.940 = -8.22°$C/min."
        },
        {
          "qid": "FD_021_h05",
          "q": "A cooling body has $T(t) = 22 + 58e^{-0.12t}$. Show that $T'(t) = -0.12(T - 22)$ and find $t$ when $T'(t) = -2$.",
          "a": "$T'(t) = -6.96e^{-0.12t} = -0.12 \\times 58e^{-0.12t} = -0.12(T - 22)$ ✓. $-6.96e^{-0.12t} = -2 \\Rightarrow e^{-0.12t} = \\frac{2}{6.96} \\Rightarrow t = \\frac{-\\ln(2/6.96)}{0.12} \\approx 10.4$ min."
        }
      ]
    },
    {
      "pt_id": "FD_022",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Exponential Growth and Decay",
      "concept": "Modelling Continuous Exponential Growth and Decay",
      "pt": "Determining the time when the value of the exponential model equals a given value",
      "testing": "",
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
          "qid": "FD_022_e01",
          "q": "Find $t$ when $N(t) = 500e^{-0.1t}$ equals $250$.",
          "a": "$250 = 500e^{-0.1t} \\Rightarrow e^{-0.1t} = 0.5 \\Rightarrow t = \\frac{\\ln 2}{0.1} \\approx 6.93$"
        },
        {
          "qid": "FD_022_e02",
          "q": "Find $t$ when $P(t) = 200e^{0.05t}$ reaches $400$.",
          "a": "$400 = 200e^{0.05t} \\Rightarrow e^{0.05t} = 2 \\Rightarrow t = \\frac{\\ln 2}{0.05} \\approx 13.86$"
        },
        {
          "qid": "FD_022_e03",
          "q": "A sample has mass $M(t) = 1000e^{-0.2t}$ grams. Find when $M = 500$ g.",
          "a": "$500 = 1000e^{-0.2t} \\Rightarrow e^{-0.2t} = 0.5 \\Rightarrow t = \\frac{\\ln 2}{0.2} = 3.47$ units"
        }
      ],
      "medium": [
        {
          "qid": "FD_022_m01",
          "q": "A substance decays according to $M(t) = 80e^{-0.05t}$ grams. Find when only 20 g remains.",
          "a": "$20 = 80e^{-0.05t} \\Rightarrow e^{-0.05t} = 0.25 \\Rightarrow -0.05t = \\ln(0.25) \\Rightarrow t = \\frac{-\\ln(0.25)}{0.05} = \\frac{\\ln 4}{0.05} \\approx 27.7$ years"
        },
        {
          "qid": "FD_022_m02",
          "q": "An investment grows as $A(t) = 150e^{0.04t}$. Find when it reaches $\\$600$.",
          "a": "$600 = 150e^{0.04t} \\Rightarrow e^{0.04t} = 4 \\Rightarrow t = \\frac{\\ln 4}{0.04} \\approx 34.66$ years"
        },
        {
          "qid": "FD_022_m03",
          "q": "Given $N(t) = 300e^{-0.03t}$, find when $N = 100$.",
          "a": "$100 = 300e^{-0.03t} \\Rightarrow e^{-0.03t} = \\frac{1}{3} \\Rightarrow t = \\frac{\\ln 3}{0.03} \\approx 36.62$ units"
        },
        {
          "qid": "FD_022_m04",
          "q": "A drug concentration is $C(t) = 50e^{-0.12t}$ mg/L. Find when $C$ drops below $10$ mg/L.",
          "a": "$10 = 50e^{-0.12t} \\Rightarrow e^{-0.12t} = 0.2 \\Rightarrow t = \\frac{\\ln 5}{0.12} \\approx 13.41$ hours"
        },
        {
          "qid": "FD_022_m05",
          "q": "A population follows $P(t) = 2000e^{0.06t}$. How long until it reaches $8000$?",
          "a": "$8000 = 2000e^{0.06t} \\Rightarrow e^{0.06t} = 4 \\Rightarrow t = \\frac{\\ln 4}{0.06} \\approx 23.10$ units"
        }
      ],
      "hard": [
        {
          "qid": "FD_022_h01",
          "q": "A cooling body has $T(t) = 20 + 60e^{-0.08t}$. Find when $T = 35°$C.",
          "a": "$35 = 20 + 60e^{-0.08t} \\Rightarrow 60e^{-0.08t} = 15 \\Rightarrow e^{-0.08t} = 0.25 \\Rightarrow t = \\frac{\\ln 4}{0.08} \\approx 17.33$ min."
        },
        {
          "qid": "FD_022_h02",
          "q": "Drug absorption follows $C(t) = 100(1 - e^{-0.05t})$ mg/L. Find when $C = 80$.",
          "a": "$80 = 100(1 - e^{-0.05t}) \\Rightarrow e^{-0.05t} = 0.2 \\Rightarrow t = \\frac{\\ln 5}{0.05} \\approx 32.19$ min."
        },
        {
          "qid": "FD_022_h03",
          "q": "Given $M(t) = 400e^{-0.04t}$, find the time it takes for $M$ to decrease from $300$ to $200$.",
          "a": "$M = 300$: $t_1 = \\frac{-\\ln(0.75)}{0.04} \\approx 7.19$. $M = 200$: $t_2 = \\frac{\\ln 2}{0.04} \\approx 17.33$. Time $= t_2 - t_1 \\approx 10.14$ units."
        },
        {
          "qid": "FD_022_h04",
          "q": "Two populations grow as $P_1(t) = 500e^{0.03t}$ and $P_2(t) = 800e^{0.01t}$. Find when $P_1 = P_2$.",
          "a": "$500e^{0.03t} = 800e^{0.01t} \\Rightarrow e^{0.02t} = \\frac{8}{5} \\Rightarrow t = \\frac{\\ln(1.6)}{0.02} \\approx 23.5$ units."
        },
        {
          "qid": "FD_022_h05",
          "q": "Given $N(t) = 1200e^{-0.06t}$, find the value of $N$ when the rate of decay is $36$ per year.",
          "a": "$N'(t) = -72e^{-0.06t}$. Set $|N'(t)| = 36$: $72e^{-0.06t} = 36 \\Rightarrow e^{-0.06t} = 0.5 \\Rightarrow t = \\frac{\\ln 2}{0.06}$. $N = 1200 \\times 0.5 = 600$."
        }
      ]
    },
    {
      "pt_id": "FD_023",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Exponential Growth and Decay",
      "concept": "Modelling Continuous Exponential Growth and Decay",
      "pt": "Determining the value of the exponential model as t becomes large",
      "testing": "",
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
          "qid": "FD_023_e01",
          "q": "Find the value of $N(t) = 200e^{-0.1t}$ as $t \\to \\infty$.",
          "a": "As $t \\to \\infty$, $e^{-0.1t} \\to 0$, so $N \\to 0$."
        },
        {
          "qid": "FD_023_e02",
          "q": "Find the limiting value of $T(t) = 15 + 85e^{-0.2t}$ as $t \\to \\infty$.",
          "a": "As $t \\to \\infty$, $e^{-0.2t} \\to 0$, so $T \\to 15$."
        },
        {
          "qid": "FD_023_e03",
          "q": "Find the limiting value of $C(t) = 100(1 - e^{-0.5t})$ as $t \\to \\infty$.",
          "a": "As $t \\to \\infty$, $e^{-0.5t} \\to 0$, so $C \\to 100$."
        }
      ],
      "medium": [
        {
          "qid": "FD_023_m01",
          "q": "A drug concentration is modelled by $C(t) = 50(1 - e^{-0.3t})$ mg/L. What is the limiting concentration?",
          "a": "As $t \\to \\infty$, $e^{-0.3t} \\to 0$, so $C \\to 50$ mg/L."
        },
        {
          "qid": "FD_023_m02",
          "q": "A cooling object has $T(t) = 22 + 48e^{-0.15t}$ °C. State the limiting temperature and explain its significance.",
          "a": "As $t \\to \\infty$, $T \\to 22°$C. This represents the room temperature (ambient temperature)."
        },
        {
          "qid": "FD_023_m03",
          "q": "A learning curve is modelled by $L(t) = 80 - 80e^{-0.1t}$ (score out of 80). What is the maximum possible score according to this model?",
          "a": "As $t \\to \\infty$, $e^{-0.1t} \\to 0$, so $L \\to 80$. The maximum possible score is $80$."
        },
        {
          "qid": "FD_023_m04",
          "q": "A tank fills according to $V(t) = 500(1 - e^{-0.04t})$ litres. Find the limiting volume and the percentage filled at $t = 20$.",
          "a": "Limiting volume $= 500$ L. $V(20) = 500(1 - e^{-0.8}) \\approx 275.3$ L. Percentage $= \\frac{275.3}{500} \\times 100 \\approx 55.1\\%$."
        },
        {
          "qid": "FD_023_m05",
          "q": "Given $C(t) = 200(1 - e^{-0.2t})$, find what fraction of the limiting value has been reached at $t = 10$.",
          "a": "Limiting value $= 200$. $C(10) = 200(1 - e^{-2}) \\approx 172.9$. Fraction $= 1 - e^{-2} \\approx 0.865$ or $86.5\\%$."
        }
      ],
      "hard": [
        {
          "qid": "FD_023_h01",
          "q": "A population follows the logistic model $P(t) = \\frac{1000}{1 + 9e^{-0.2t}}$. Find the limiting population.",
          "a": "As $t \\to \\infty$, $e^{-0.2t} \\to 0$, so $P \\to \\frac{1000}{1+0} = 1000$. The carrying capacity is $1000$."
        },
        {
          "qid": "FD_023_h02",
          "q": "A temperature follows $T(t) = 25 + 30e^{-0.1t} + 15e^{-0.3t}$. Find $T(0)$ and the limiting temperature.",
          "a": "$T(0) = 25 + 30 + 15 = 70°$C. As $t \\to \\infty$, both exponentials $\\to 0$, so $T \\to 25°$C."
        },
        {
          "qid": "FD_023_h03",
          "q": "A model gives $N(t) = 400(1 - 0.6e^{-0.05t})$. Find $N(0)$, the limiting value, and explain whether $N$ is increasing or decreasing.",
          "a": "$N(0) = 400(1 - 0.6) = 160$. As $t \\to \\infty$, $N \\to 400$. Since $N'(t) = 12e^{-0.05t} > 0$, $N$ is always increasing."
        },
        {
          "qid": "FD_023_h04",
          "q": "Model A: $C_A(t) = 60(1 - e^{-0.1t})$. Model B: $C_B(t) = 80(1 - e^{-0.05t})$. Find each limiting value and which reaches $90\\%$ of its limit first.",
          "a": "Limits: $C_A \\to 60$, $C_B \\to 80$. $90\\%$ of $C_A = 54$: $t_A = \\frac{\\ln 10}{0.1} \\approx 23.0$. $90\\%$ of $C_B = 72$: $t_B = \\frac{\\ln 10}{0.05} \\approx 46.1$. Model A reaches $90\\%$ first."
        },
        {
          "qid": "FD_023_h05",
          "q": "Given $V(t) = L(1 - e^{-kt})$ for $k > 0$ and $L > 0$, show algebraically that $V(t) < L$ for all finite $t > 0$ and $V \\to L$ as $t \\to \\infty$.",
          "a": "Since $k > 0$ and $t > 0$, $e^{-kt} > 0$, so $1 - e^{-kt} < 1$, hence $V(t) = L(1 - e^{-kt}) < L$. As $t \\to \\infty$, $e^{-kt} \\to 0$, so $V \\to L(1-0) = L$."
        }
      ]
    },
    {
      "pt_id": "FD_024",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Exponential Growth and Decay",
      "concept": "Modelling Continuous Exponential Growth and Decay",
      "pt": "Determining the value of the exponential model at a given time",
      "testing": "",
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
          "qid": "FD_024_e01",
          "q": "Given $P(t) = 300e^{0.02t}$, find $P(5)$.",
          "a": "$P(5) = 300e^{0.1} \\approx 331.5$"
        },
        {
          "qid": "FD_024_e02",
          "q": "A sample has mass $N(t) = 1000e^{-0.05t}$ grams. Find $N(10)$.",
          "a": "$N(10) = 1000e^{-0.5} \\approx 606.5$ grams"
        },
        {
          "qid": "FD_024_e03",
          "q": "Given $M(t) = 200e^{-0.1t}$, find $M(3)$.",
          "a": "$M(3) = 200e^{-0.3} \\approx 148.2$"
        }
      ],
      "medium": [
        {
          "qid": "FD_024_m01",
          "q": "A population is modelled by $P(t) = 500e^{0.03t}$ where $t$ is in years. Find the population after 10 years.",
          "a": "$P(10) = 500e^{0.3} = 500 \\times 1.3499 \\approx 675$"
        },
        {
          "qid": "FD_024_m02",
          "q": "A cooling body has $T(t) = 20 + 70e^{-0.1t}$ °C. Find the temperature at $t = 8$ minutes.",
          "a": "$T(8) = 20 + 70e^{-0.8} \\approx 20 + 31.45 = 51.5°$C"
        },
        {
          "qid": "FD_024_m03",
          "q": "A drug concentration follows $C(t) = 50(1 - e^{-0.2t})$ mg/L. Find $C(5)$.",
          "a": "$C(5) = 50(1 - e^{-1}) \\approx 50(1 - 0.3679) = 31.6$ mg/L"
        },
        {
          "qid": "FD_024_m04",
          "q": "An investment earns $4.5\\%$ p.a. continuous interest: $A(t) = 10000e^{0.045t}$. Find the value after $15$ years.",
          "a": "$A(15) = 10000e^{0.675} \\approx \\$19{,}643$"
        },
        {
          "qid": "FD_024_m05",
          "q": "A substance decays as $M(t) = 750e^{-0.07t}$ grams. Find the mass remaining after $12$ years.",
          "a": "$M(12) = 750e^{-0.84} \\approx 750 \\times 0.4317 = 323.8$ grams"
        }
      ],
      "hard": [
        {
          "qid": "FD_024_h01",
          "q": "A cooling object has $T(t) = 25 + 55e^{-0.12t}$. Find $T(10)$ and by how many degrees the object has cooled from $t = 0$.",
          "a": "$T(0) = 80$. $T(10) = 25 + 55e^{-1.2} \\approx 41.6°$C. Cooled by $80 - 41.6 = 38.4°$C."
        },
        {
          "qid": "FD_024_h02",
          "q": "Colony A: $P_1(t) = 500e^{0.04t}$. Colony B: $P_2(t) = 300e^{0.07t}$. Which is larger at $t = 20$?",
          "a": "$P_1(20) = 500e^{0.8} \\approx 1114$. $P_2(20) = 300e^{1.4} \\approx 1216$. Colony B is larger at $t = 20$."
        },
        {
          "qid": "FD_024_h03",
          "q": "A population follows $P(t) = \\frac{2000}{1 + 4e^{-0.3t}}$. Find $P(0)$, $P(5)$, and $P(\\infty)$.",
          "a": "$P(0) = \\frac{2000}{1+4} = 400$. $P(5) = \\frac{2000}{1+4e^{-1.5}} \\approx \\frac{2000}{1.893} \\approx 1057$. $P(\\infty) = 2000$."
        },
        {
          "qid": "FD_024_h04",
          "q": "Given $N(t) = 800e^{-0.06t}$, find the percentage of the original remaining at $t = 5$, $t = 10$, and $t = 20$.",
          "a": "$t=5$: $e^{-0.3} \\approx 74.1\\%$. $t=10$: $e^{-0.6} \\approx 54.9\\%$. $t=20$: $e^{-1.2} \\approx 30.1\\%$."
        },
        {
          "qid": "FD_024_h05",
          "q": "A car's value is $V(t) = 15000e^{-0.08t}$. Find $V(3)$, $V(7)$, and the loss in value between $t = 3$ and $t = 7$.",
          "a": "$V(3) = 15000e^{-0.24} \\approx \\$11{,}813$. $V(7) = 15000e^{-0.56} \\approx \\$8{,}569$. Loss $\\approx \\$3{,}244$."
        }
      ]
    },
    {
      "pt_id": "FD_025",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Exponential Growth and Decay",
      "concept": "Modelling Continuous Exponential Growth and Decay",
      "pt": "Find the derivative (or rate of change) at a given population/value of the function",
      "testing": "",
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
          "qid": "FD_025_e01",
          "q": "A population satisfies $\\frac{dP}{dt} = 0.05P$. Find the rate of change when $P = 200$.",
          "a": "$\\frac{dP}{dt} = 0.05 \\times 200 = 10$ per unit time."
        },
        {
          "qid": "FD_025_e02",
          "q": "A substance decays with $\\frac{dN}{dt} = -0.1N$. Find the rate when $N = 300$.",
          "a": "$\\frac{dN}{dt} = -0.1 \\times 300 = -30$ per unit time."
        },
        {
          "qid": "FD_025_e03",
          "q": "The mass decreases according to $\\frac{dM}{dt} = -0.02M$. Find the rate when $M = 500$ g.",
          "a": "$\\frac{dM}{dt} = -0.02 \\times 500 = -10$ g per unit time."
        }
      ],
      "medium": [
        {
          "qid": "FD_025_m01",
          "q": "Given $P(t) = 1000e^{0.02t}$ and $\\frac{dP}{dt} = 0.02P$, find the rate of change when $P = 1500$.",
          "a": "$\\frac{dP}{dt} = 0.02 \\times 1500 = 30$ per unit time."
        },
        {
          "qid": "FD_025_m02",
          "q": "Given $P(t) = 1000e^{0.03t}$, find the rate of change when $P = 2500$.",
          "a": "$\\frac{dP}{dt} = 0.03P = 0.03 \\times 2500 = 75$ per unit time."
        },
        {
          "qid": "FD_025_m03",
          "q": "A cooling object follows $T(t) = 22 + 58e^{-0.1t}$. Show $T'(t) = -0.1(T - 22)$ and find the rate of cooling when $T = 50°$C.",
          "a": "$T'(t) = -5.8e^{-0.1t} = -0.1 \\times 58e^{-0.1t} = -0.1(T-22)$ ✓. When $T=50$: $T' = -0.1(28) = -2.8°$C/min."
        },
        {
          "qid": "FD_025_m04",
          "q": "A substance decays with $\\frac{dN}{dt} = -0.06N$. Find $N$ when the rate of decay is $12$ per unit time.",
          "a": "$-0.06N = -12 \\Rightarrow N = \\frac{12}{0.06} = 200$."
        },
        {
          "qid": "FD_025_m05",
          "q": "Given $P(t) = 400e^{0.04t}$, find $P'(10)$ and express the rate as a function of $P$.",
          "a": "$P'(t) = 16e^{0.04t}$. $P'(10) = 16e^{0.4} \\approx 23.87$. Since $P = 400e^{0.04t}$, $P'(t) = 0.04 \\times P$."
        }
      ],
      "hard": [
        {
          "qid": "FD_025_h01",
          "q": "A population satisfies $\\frac{dP}{dt} = kP$ with $P(0) = 500$ and $P(3) = 650$. Find $k$ and the rate when $P = 1000$.",
          "a": "$k = \\frac{1}{3}\\ln\\left(\\frac{650}{500}\\right) = \\frac{\\ln(1.3)}{3} \\approx 0.0875$. Rate when $P=1000$: $0.0875 \\times 1000 \\approx 87.5$."
        },
        {
          "qid": "FD_025_h02",
          "q": "Given $N(t) = 800e^{-0.05t}$, find (i) the rate of decay when $N = 400$ and (ii) the time when $N = 400$.",
          "a": "(i) $\\frac{dN}{dt} = -0.05 \\times 400 = -20$. (ii) $400 = 800e^{-0.05t} \\Rightarrow t = \\frac{\\ln 2}{0.05} \\approx 13.86$ units."
        },
        {
          "qid": "FD_025_h03",
          "q": "Newton's cooling gives $T'(t) = -0.08(T - 15)$. Find the rate of cooling when $T = 40°$C and interpret it.",
          "a": "$T' = -0.08(40 - 15) = -0.08 \\times 25 = -2°$C/min. The object is cooling at $2°$C per minute."
        },
        {
          "qid": "FD_025_h04",
          "q": "A population satisfies $\\frac{dP}{dt} = 0.04P$. The growth rate increases from $20$ to $40$ per year. Find the corresponding population values.",
          "a": "When rate $= 20$: $P = \\frac{20}{0.04} = 500$. When rate $= 40$: $P = \\frac{40}{0.04} = 1000$. Population doubled as rate doubled."
        },
        {
          "qid": "FD_025_h05",
          "q": "A drug satisfies $C'(t) = -0.15C$ with initial concentration $50$ mg/L. The therapeutic range is $10$–$50$ mg/L. Find the rate of elimination at each boundary and how long the drug stays therapeutic.",
          "a": "At $C=50$: rate $= -7.5$ mg/L/hr. At $C=10$: rate $= -1.5$ mg/L/hr. Time: $10 = 50e^{-0.15t} \\Rightarrow t = \\frac{\\ln 5}{0.15} \\approx 10.73$ hours."
        }
      ]
    },
    {
      "pt_id": "FD_026",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Exponential Growth and Decay",
      "concept": "Modelling Continuous Exponential Growth and Decay",
      "pt": "Identifying or determining k (the percentage rate of growth or decay)",
      "testing": "",
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
          "qid": "FD_026_e01",
          "q": "Given $P(t) = 200e^{0.03t}$, state the value of $k$ and whether the model represents growth or decay.",
          "a": "$k = 0.03 > 0$, so the model represents continuous growth at $3\\%$ per unit time."
        },
        {
          "qid": "FD_026_e02",
          "q": "Given $N(t) = 500e^{-0.08t}$, identify $k$ and state whether this is growth or decay.",
          "a": "$k = -0.08 < 0$, so this represents continuous decay at $8\\%$ per unit time."
        },
        {
          "qid": "FD_026_e03",
          "q": "A quantity doubles every $10$ years. Find the continuous growth rate $k$.",
          "a": "$2 = e^{10k} \\Rightarrow k = \\frac{\\ln 2}{10} \\approx 0.0693$ or about $6.93\\%$ per year."
        }
      ],
      "medium": [
        {
          "qid": "FD_026_m01",
          "q": "A quantity doubles every 8 years following $A(t) = A_0 e^{kt}$. Find $k$.",
          "a": "$2A_0 = A_0 e^{8k} \\Rightarrow \\ln 2 = 8k \\Rightarrow k = \\frac{\\ln 2}{8} \\approx 0.0866$"
        },
        {
          "qid": "FD_026_m02",
          "q": "A population triples every $15$ years. Find $k$.",
          "a": "$3 = e^{15k} \\Rightarrow k = \\frac{\\ln 3}{15} \\approx 0.0732$"
        },
        {
          "qid": "FD_026_m03",
          "q": "A substance loses $25\\%$ of its mass every $5$ years. Find $k$.",
          "a": "$0.75 = e^{5k} \\Rightarrow k = \\frac{\\ln(0.75)}{5} \\approx -0.0575$"
        },
        {
          "qid": "FD_026_m04",
          "q": "A population grows from $1200$ to $1600$ in $4$ years. Given $P(t) = 1200e^{kt}$, find $k$.",
          "a": "$1600 = 1200e^{4k} \\Rightarrow e^{4k} = \\frac{4}{3} \\Rightarrow k = \\frac{1}{4}\\ln\\left(\\frac{4}{3}\\right) \\approx 0.0719$"
        },
        {
          "qid": "FD_026_m05",
          "q": "A car depreciates such that $85\\%$ of its value remains after each year. Find the continuous rate $k$.",
          "a": "$e^k = 0.85 \\Rightarrow k = \\ln(0.85) \\approx -0.1625$"
        }
      ],
      "hard": [
        {
          "qid": "FD_026_h01",
          "q": "An investment grows at $5\\%$ per annum compounded annually. Find the equivalent continuous growth rate.",
          "a": "$e^k = 1.05 \\Rightarrow k = \\ln(1.05) \\approx 0.04879$. The continuous rate is about $4.88\\%$."
        },
        {
          "qid": "FD_026_h02",
          "q": "Given $N(2) = 750$ and $N(5) = 500$, find $k$ for the model $N(t) = Ae^{kt}$.",
          "a": "$\\frac{500}{750} = e^{3k} \\Rightarrow k = \\frac{1}{3}\\ln\\left(\\frac{2}{3}\\right) \\approx -0.1352$"
        },
        {
          "qid": "FD_026_h03",
          "q": "A substance has $k = -0.07$. What percentage of the substance is lost each year?",
          "a": "After 1 year: $e^{-0.07} \\approx 0.9324$. Percentage lost $= (1 - 0.9324) \\times 100 \\approx 6.76\\%$ per year."
        },
        {
          "qid": "FD_026_h04",
          "q": "Population A: $P_1 = 400e^{0.05t}$. Population B: $P_2 = 600e^{0.02t}$. Find when they are equal.",
          "a": "$400e^{0.05t} = 600e^{0.02t} \\Rightarrow e^{0.03t} = \\frac{3}{2} \\Rightarrow t = \\frac{\\ln(1.5)}{0.03} \\approx 13.52$ units."
        },
        {
          "qid": "FD_026_h05",
          "q": "The 'Rule of 70' states that doubling time $\\approx \\frac{70}{r}$ where $r$ is the percentage rate. Derive this from $t_2 = \\frac{\\ln 2}{k}$ where $k = r/100$.",
          "a": "$t_2 = \\frac{\\ln 2}{k} = \\frac{\\ln 2}{r/100} = \\frac{100 \\ln 2}{r} \\approx \\frac{69.3}{r} \\approx \\frac{70}{r}$."
        }
      ]
    },
    {
      "pt_id": "FD_027",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Exponential Growth and Decay",
      "concept": "Modelling Continuous Exponential Growth and Decay",
      "pt": "Interpreting derivative's units or interpreting derivative value of a function of e",
      "testing": "",
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
          "qid": "FD_027_e01",
          "q": "Water leaks from a tank: $V(t) = 500e^{-0.1t}$ litres ($t$ in hours). Find $V'(2)$ and interpret.",
          "a": "$V'(t) = -50e^{-0.1t}$. $V'(2) = -50e^{-0.2} \\approx -40.9$. At $t = 2$ hours, the volume is decreasing at about $40.9$ litres per hour."
        },
        {
          "qid": "FD_027_e02",
          "q": "A population grows as $P(t) = 300e^{0.04t}$ ($t$ in days). Find $P'(0)$ and interpret.",
          "a": "$P'(t) = 12e^{0.04t}$. $P'(0) = 12$. Initially, the population is increasing at $12$ per day."
        },
        {
          "qid": "FD_027_e03",
          "q": "The mass of a substance is $M(t) = 80e^{-0.05t}$ grams ($t$ in years). If $M'(4) \\approx -3.27$, interpret this value.",
          "a": "At $t = 4$ years, the mass is decreasing at approximately $3.27$ grams per year."
        }
      ],
      "medium": [
        {
          "qid": "FD_027_m01",
          "q": "The volume of water in a tank is $V(t) = 200e^{-0.05t}$ litres where $t$ is in hours. If $V'(3) = -8.61$, interpret this value.",
          "a": "At $t = 3$ hours, the volume of water is decreasing at a rate of 8.61 litres per hour."
        },
        {
          "qid": "FD_027_m02",
          "q": "A cooling coffee has $T(t) = 22 + 58e^{-0.12t}$ °C ($t$ in minutes). Find $T'(5)$ and interpret.",
          "a": "$T'(t) = -6.96e^{-0.12t}$. $T'(5) = -6.96e^{-0.6} \\approx -3.82$. At $t = 5$ minutes, the temperature is decreasing at about $3.82°$C per minute."
        },
        {
          "qid": "FD_027_m03",
          "q": "An investment grows as $A(t) = 5000e^{0.045t}$ dollars ($t$ in years). Find $A'(10)$ and explain what it represents.",
          "a": "$A'(t) = 225e^{0.045t}$. $A'(10) = 225e^{0.45} \\approx \\$352.71$. At $t = 10$ years, the investment is growing at about $\\$352.71$ per year."
        },
        {
          "qid": "FD_027_m04",
          "q": "A drug concentration is $C(t) = 40e^{-0.08t}$ mg/L ($t$ in hours). Interpret the sign and magnitude of $C'(t)$.",
          "a": "$C'(t) = -3.2e^{-0.08t}$. Negative sign: concentration is always decreasing. Magnitude decreases over time since $e^{-0.08t}$ decreases, so the drug is eliminated more slowly as concentration drops."
        },
        {
          "qid": "FD_027_m05",
          "q": "Soil moisture is $W(t) = 120e^{-0.03t}$ mm ($t$ in days). Find $W'(10)$ and state its units.",
          "a": "$W'(t) = -3.6e^{-0.03t}$. $W'(10) = -3.6e^{-0.3} \\approx -2.67$ mm per day. The soil is losing about $2.67$ mm of moisture per day at $t = 10$."
        }
      ],
      "hard": [
        {
          "qid": "FD_027_h01",
          "q": "A population follows $P(t) = 500e^{0.03t}$ ($t$ in years). Find $P''(10)$ and explain what it tells us about the growth.",
          "a": "$P'(t) = 15e^{0.03t}$, $P''(t) = 0.45e^{0.03t}$. $P''(10) = 0.45e^{0.3} \\approx 0.607$. Since $P'' > 0$, the rate of growth itself is increasing (the population is accelerating)."
        },
        {
          "qid": "FD_027_h02",
          "q": "Given $N(t) = 800e^{-0.04t}$, compare $N'(5)$ (instantaneous rate) with the average rate of change over $[4, 6]$.",
          "a": "$N'(5) = -32e^{-0.2} \\approx -26.2$. Average $= \\frac{N(6)-N(4)}{2} = \\frac{800e^{-0.24}-800e^{-0.16}}{2} \\approx \\frac{629.0-681.7}{2} = -26.4$. They are very close; the instantaneous rate approximates the average over small intervals."
        },
        {
          "qid": "FD_027_h03",
          "q": "Newton's Law of Cooling gives $\\frac{dT}{dt} = -0.1(T - 20)$ where $T$ is in °C and $t$ in minutes. Interpret this equation and explain why the rate of cooling decreases over time.",
          "a": "The rate of temperature change is proportional to the difference between the object's temperature and the room ($20°$C). As the object cools, $(T - 20)$ decreases, so $|\\frac{dT}{dt}|$ decreases — cooling slows down as the object approaches room temperature."
        },
        {
          "qid": "FD_027_h04",
          "q": "The charge on a capacitor is $Q(t) = Q_0 e^{-t/(RC)}$ coulombs where $R$ (ohms) and $C$ (farads) are constants and $t$ is in seconds. Find $Q'(t)$ and state its units.",
          "a": "$Q'(t) = -\\frac{Q_0}{RC} e^{-t/(RC)}$. The units of $Q'(t)$ are coulombs per second, which equals amperes (A). This is the current flowing through the circuit."
        },
        {
          "qid": "FD_027_h05",
          "q": "For $N(t) = Ae^{kt}$, show that the percentage rate of change $\\frac{N'(t)}{N(t)} \\times 100$ is constant. What is its value?",
          "a": "$N'(t) = kAe^{kt}$. $\\frac{N'(t)}{N(t)} = \\frac{kAe^{kt}}{Ae^{kt}} = k$. So the percentage rate $= 100k\\%$, which is constant regardless of $t$ or the value of $N$."
        }
      ]
    },
    {
      "pt_id": "FD_028",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Optimisation Problems",
      "concept": "Solving Optimisation Problems",
      "pt": "Deriving objective function from constraint (show that)",
      "testing": "",
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
          "qid": "FD_028_e01",
          "q": "A rectangle has perimeter 20 cm. If the width is $x$ cm, show that the area is $A = 10x - x^2$.",
          "a": "Perimeter: $2x + 2l = 20 \\Rightarrow l = 10 - x$. Area: $A = x(10 - x) = 10x - x^2$."
        },
        {
          "qid": "FD_028_e02",
          "q": "An open-top box has a square base of side $x$ cm and height $h$ cm. The total surface area is 75 cm². Show that $h = \\frac{75 - x^2}{4x}$.",
          "a": "Surface area of open box: $x^2 + 4xh = 75$. Rearranging: $4xh = 75 - x^2$, so $h = \\frac{75 - x^2}{4x}$."
        },
        {
          "qid": "FD_028_e03",
          "q": "An isosceles triangle has two equal sides of length $x$ cm and a base of $b$ cm. The perimeter is 30 cm. Show that $b = 30 - 2x$.",
          "a": "Perimeter: $2x + b = 30$. Therefore $b = 30 - 2x$."
        }
      ],
      "medium": [
        {
          "qid": "FD_028_m01",
          "q": "A box with a square base and open top has surface area 48 cm². Show that the volume is $V = 12x - \\frac{x^3}{4}$ where $x$ is the side length of the base.",
          "a": "$SA = x^2 + 4xh = 48 \\Rightarrow h = \\frac{48 - x^2}{4x}$. $V = x^2 h = x^2 \\cdot \\frac{48 - x^2}{4x} = \\frac{x(48-x^2)}{4} = 12x - \\frac{x^3}{4}$"
        },
        {
          "qid": "FD_028_m02",
          "q": "A closed cylinder has volume $100\\pi$ cm³. Show that the total surface area is $S = 2\\pi r^2 + \\frac{200\\pi}{r}$ where $r$ is the radius.",
          "a": "$V = \\pi r^2 h = 100\\pi \\Rightarrow h = \\frac{100}{r^2}$. $S = 2\\pi r^2 + 2\\pi r h = 2\\pi r^2 + 2\\pi r \\cdot \\frac{100}{r^2} = 2\\pi r^2 + \\frac{200\\pi}{r}$."
        },
        {
          "qid": "FD_028_m03",
          "q": "A farmer uses 120 m of fencing to create a rectangular pen divided into two equal sections by a fence parallel to the width. If the width is $x$ m, show that the area is $A = 60x - \\frac{3x^2}{2}$.",
          "a": "Fencing: $2l + 3x = 120 \\Rightarrow l = \\frac{120 - 3x}{2}$. Area: $A = xl = x \\cdot \\frac{120 - 3x}{2} = 60x - \\frac{3x^2}{2}$."
        },
        {
          "qid": "FD_028_m04",
          "q": "A window consists of a rectangle of width $2r$ and height $h$ topped by a semicircle of radius $r$. The perimeter is 10 m. Show that $h = 5 - r - \\frac{\\pi r}{2}$.",
          "a": "Perimeter: $2h + 2r + \\pi r = 10$. Solving: $2h = 10 - 2r - \\pi r$, so $h = 5 - r - \\frac{\\pi r}{2}$."
        },
        {
          "qid": "FD_028_m05",
          "q": "A box is made by cutting squares of side $x$ cm from each corner of a 20 cm × 12 cm sheet and folding up. Show that the volume is $V = 4x^3 - 64x^2 + 240x$.",
          "a": "Dimensions: $(20-2x) \\times (12-2x) \\times x$. $V = x(20-2x)(12-2x) = x(240 - 40x - 24x + 4x^2) = x(4x^2 - 64x + 240) = 4x^3 - 64x^2 + 240x$."
        }
      ],
      "hard": [
        {
          "qid": "FD_028_h01",
          "q": "A cone of radius $r$ and height $h$ is inscribed in a sphere of radius $R = 6$ cm, with the base of the cone a chord of the sphere. Show that $r^2 = 12h - h^2$ and hence $V = \\frac{\\pi h}{3}(12h - h^2)$.",
          "a": "The apex is at the top of the sphere, so the distance from the centre to the base is $6 - h$. By Pythagoras on the cross-section: $r^2 + (6-h)^2 = 36$. So $r^2 = 36 - (6-h)^2 = 36 - 36 + 12h - h^2 = 12h - h^2$. Volume: $V = \\frac{1}{3}\\pi r^2 h = \\frac{\\pi h}{3}(12h - h^2)$."
        },
        {
          "qid": "FD_028_h02",
          "q": "A poster must contain 150 cm² of printed area. It has 3 cm margins on the sides and 4 cm margins top and bottom. If the printed width is $x$ cm, show that the total area of the poster is $A = (x+6)\\left(\\frac{150}{x} + 8\\right)$.",
          "a": "Printed area: $xy = 150 \\Rightarrow y = \\frac{150}{x}$. Poster dimensions: width $= x + 6$, height $= y + 8 = \\frac{150}{x} + 8$. Total area: $A = (x+6)\\left(\\frac{150}{x} + 8\\right)$."
        },
        {
          "qid": "FD_028_h03",
          "q": "A trough is 2 m long with a trapezoidal cross-section. The base is $x$ m wide, the top is $(x + 2h)$ m wide, and the depth is $h$ m. If the total area of the four sides and base is 6 m², show that $h = \\frac{6 - 2x}{2(x + 2)}$.",
          "a": "The cross-section is an isosceles trapezium. Area of base: $2x$. Two end trapezoids: $2 \\times \\frac{1}{2}(x + x + 2h)h = (2x+2h)h$. Wait — reframing: Base: $2x$ m². Two long sides: $2 \\times 2h = 4h$ m². Two short ends: $2 \\times \\frac{1}{2}(x + x + 2h)h = h(2x+2h)$... Actually, for a rectangular trough 2 m long with base width $x$: Base = $2x$, two long sides = $2 \\times 2h = 4h$, total = $2x + 4h + 2xh$... Hmm, let me simplify. For sides: base $= 2x$, two long sides $= 2 \\times 2h$, two short sides $= 2 \\times xh$... Actually given $6 = 2x + 4h + 2xh = 2x + 2h(2+x)$. Rearranging: $2h(x+2) = 6 - 2x$, so $h = \\frac{6 - 2x}{2(x+2)}$."
        },
        {
          "qid": "FD_028_h04",
          "q": "A company sells $x$ items at price $p = 50 - 0.5x$ dollars each. The cost to produce $x$ items is $C = 200 + 10x$. Show that the profit is $P = -0.5x^2 + 40x - 200$.",
          "a": "Revenue: $R = xp = x(50 - 0.5x) = 50x - 0.5x^2$. Profit: $P = R - C = (50x - 0.5x^2) - (200 + 10x) = -0.5x^2 + 40x - 200$."
        },
        {
          "qid": "FD_028_h05",
          "q": "A gutter is formed by folding up equal strips of width $x$ cm on each side of a 30 cm wide metal sheet. Show that the cross-sectional area is $A = 30x - 2x^2$, and state the domain for $x$.",
          "a": "After folding up strips of width $x$ on each side, the base width is $30 - 2x$ and the depth is $x$. Cross-sectional area: $A = x(30 - 2x) = 30x - 2x^2$. Domain: $0 < x < 15$ (base must be positive)."
        }
      ]
    },
    {
      "pt_id": "FD_029",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Optimisation Problems",
      "concept": "Solving Optimisation Problems",
      "pt": "Determining optimised result using first and second derivative tests",
      "testing": "",
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
          "qid": "FD_029_e01",
          "q": "Find the maximum value of $A = 20x - x^2$.",
          "a": "$A' = 20 - 2 x = 0 \\Rightarrow x = 10$. $A'' = -2 < 0$ (maximum). Maximum value: $A(10) = 100$."
        },
        {
          "qid": "FD_029_e02",
          "q": "Find the minimum value of $C = x^2 - 8x + 20$.",
          "a": "$C' = 2 x - 8 = 0 \\Rightarrow x = 4$. $C'' = 2 > 0$ (minimum). Minimum value: $C(4) = 4$."
        },
        {
          "qid": "FD_029_e03",
          "q": "Find the value of $x$ that maximises $y = 12x - 3x^2$ and state the maximum value.",
          "a": "$y' = 12 - 6 x = 0 \\Rightarrow x = 2$. $y'' = -6 < 0$ (max). Maximum value: $y(2) = 12$."
        }
      ],
      "medium": [
        {
          "qid": "FD_029_m01",
          "q": "A farmer has 200 m of fencing to enclose a rectangular paddock against a straight river (no fence needed along the river). Find the dimensions that maximise the area.",
          "a": "Let width $= x$, length $= 200 - 2x$. $A = x(200 - 2x) = 200x - 2x^2$. $A'(x) = 200 - 4x = 0 \\Rightarrow x = 50$. $A''(x) = -4 < 0$ (max). Dimensions: $50$ m × $100$ m, area = $5000$ m²."
        },
        {
          "qid": "FD_029_m02",
          "q": "A cylindrical can must hold 500 cm³. Find the radius that minimises the surface area.",
          "a": "$V = \\pi r^2 h = 500 \\Rightarrow h = \\frac{500}{\\pi r^2}$. $SA = 2\\pi r^2 + 2\\pi r h = 2\\pi r^2 + \\frac{1000}{r}$. $\\frac{dSA}{dr} = 4\\pi r - \\frac{1000}{r^2} = 0 \\Rightarrow r^3 = \\frac{250}{\\pi} \\Rightarrow r = \\left(\\frac{250}{\\pi}\\right)^{1/3} \\approx 4.30$ cm."
        },
        {
          "qid": "FD_029_m03",
          "q": "A box is made by cutting squares of side $x$ cm from each corner of a 20 cm × 12 cm sheet. The volume is $V = 4x^3 - 64x^2 + 240x$. Find the value of $x$ that maximises the volume.",
          "a": "$V' = 12 x^{2} - 128 x + 240 = 0$. Solving: $12 x^{2} - 128 x + 240 = 0$, so $x = \\frac{16}{3} - \\frac{2 \\sqrt{19}}{3}$ or $x = \\frac{2 \\sqrt{19}}{3} + \\frac{16}{3}$. Since $0 < x < 6$, we use $x = \\frac{16}{3} - \\frac{2 \\sqrt{19}}{3}$. $V'' = 24 x - 128$. At $x = \\frac{16}{3} - \\frac{2 \\sqrt{19}}{3}$: $V'' = - 16 \\sqrt{19} < 0$ (max). Max volume $= \\frac{1792}{27} + \\frac{1216 \\sqrt{19}}{27}$ cm³."
        },
        {
          "qid": "FD_029_m04",
          "q": "A company's profit is $P = -0.5x^2 + 40x - 200$ dollars for selling $x$ items. Find the number of items that maximises profit and the maximum profit.",
          "a": "$P' = 40 - x = 0 \\Rightarrow x = 40$. $P'' = -1 < 0$ (max). Maximum profit: $P(40) = 600$ dollars."
        },
        {
          "qid": "FD_029_m05",
          "q": "The cross-sectional area of a gutter is $A = 30x - 2x^2$ cm² where $0 < x < 15$. Find the depth $x$ that maximises the area.",
          "a": "$A' = 30 - 4 x = 0 \\Rightarrow x = \\frac{15}{2}$. $A'' = -4 < 0$ (max). Maximum area: $A(\\frac{15}{2}) = \\frac{225}{2}$ cm²."
        }
      ],
      "hard": [
        {
          "qid": "FD_029_h01",
          "q": "An open-top box with a square base must have volume 32 cm³. The base costs \\$2/cm² and the sides cost \\$1/cm². Find the dimensions that minimise the total cost.",
          "a": "$V = x^2 h = 32 \\Rightarrow h = \\frac{32}{x^2}$. Cost: $C = 2x^2 + 4xh = 2x^2 + \\frac{128}{x}$. $C' = 4x - \\frac{128}{x^2} = 0 \\Rightarrow x^3 = 32 \\Rightarrow x = \\sqrt[3]{32} = 2\\sqrt[3]{4} \\approx 3.17$ cm. $C'' = 4 + \\frac{256}{x^3} > 0$ (min). Height: $h = \\frac{32}{x^2} \\approx 3.17$ cm."
        },
        {
          "qid": "FD_029_h02",
          "q": "Two positive numbers $x$ and $y$ satisfy $x + 3y = 24$. Find the maximum value of $P = xy^2$.",
          "a": "$x = 24 - 3y$, so $P = (24-3y)y^2 = 24y^2 - 3y^3$. $P' = 48y - 9y^2 = 3y(16-3y) = 0 \\Rightarrow y = \\frac{16}{3}$ (since $y > 0$). $P'' = 48 - 18y$. At $y = \\frac{16}{3}$: $P'' = 48 - 96 = -48 < 0$ (max). $x = 24 - 16 = 8$. Maximum $P = 8 \\times \\left(\\frac{16}{3}\\right)^2 = \\frac{2048}{9}$."
        },
        {
          "qid": "FD_029_h03",
          "q": "A poster has 150 cm² of printed area, with 3 cm side margins and 4 cm top/bottom margins. The total area is $A = (x+6)\\left(\\frac{150}{x} + 8\\right)$ where $x$ is the print width. Find the print width that minimises the total poster area.",
          "a": "$A = 150 + 8x + \\frac{900}{x} + 48 = 198 + 8x + \\frac{900}{x}$. $A' = 8 - \\frac{900}{x^2} = 0 \\Rightarrow x^2 = \\frac{900}{8} = 112.5 \\Rightarrow x = \\sqrt{112.5} = \\frac{15\\sqrt{2}}{2} \\approx 10.61$ cm. $A'' = \\frac{1800}{x^3} > 0$ (min)."
        },
        {
          "qid": "FD_029_h04",
          "q": "Find the point on the curve $y = \\sqrt{x}$ that is closest to the point $(3, 0)$.",
          "a": "Distance² = $D = (x-3)^2 + (\\sqrt{x})^2 = (x-3)^2 + x = x^2 - 5x + 9$. $D' = 2x - 5 = 0 \\Rightarrow x = \\frac{5}{2}$. $D'' = 2 > 0$ (min). Closest point: $\\left(\\frac{5}{2}, \\sqrt{\\frac{5}{2}}\\right) = \\left(\\frac{5}{2}, \\frac{\\sqrt{10}}{2}\\right)$."
        },
        {
          "qid": "FD_029_h05",
          "q": "A 1-metre string is cut into two pieces. One piece forms a square and the other forms a circle. Where should the cut be made to minimise the total area enclosed? Let $x$ metres be used for the square.",
          "a": "Square side $= \\frac{x}{4}$, area $= \\frac{x^2}{16}$. Circle circumference $= 1-x$, so $r = \\frac{1-x}{2\\pi}$, area $= \\pi r^2 = \\frac{(1-x)^2}{4\\pi}$. Total: $A = \\frac{x^2}{16} + \\frac{(1-x)^2}{4\\pi}$. $A' = \\frac{x}{8} - \\frac{1-x}{2\\pi} = 0 \\Rightarrow \\frac{x}{8} = \\frac{1-x}{2\\pi} \\Rightarrow \\pi x = 4(1-x) \\Rightarrow x = \\frac{4}{\\pi + 4}$. $A'' = \\frac{1}{8} + \\frac{1}{2\\pi} > 0$ (min). Cut at $x = \\frac{4}{\\pi + 4} \\approx 0.56$ m for the square."
        }
      ]
    },
    {
      "pt_id": "FD_030",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Second Derivatives",
      "concept": "Calculating Second Derivatives",
      "pt": "Calculation and interpretation of second derivative in real-world context",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "substitution_error",
        "sign_error",
        "interpretation_mixup",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "FD_030_e01",
          "q": "The height of a projectile is given by $h(t) = 15t - 5t^2$ metres. Find $h''(t)$.",
          "a": "$h'(t) = 15 - 10 t$, $h''(t) = -10$ m/s²"
        },
        {
          "qid": "FD_030_e02",
          "q": "The total cost of producing $t$ items is $C(t) = 3t^2 + 10t + 50$ dollars. Find $C''(t)$ and state what it tells us about the cost.",
          "a": "$C'(t) = 6 t + 10$, $C''(t) = 6$. Since $C''(t) = 6 > 0$, the marginal cost is increasing — each additional unit costs more to produce."
        },
        {
          "qid": "FD_030_e03",
          "q": "A particle's displacement is $s(t) = t^3 - 6t^2 + 9t$ metres. Find the acceleration $s''(t)$.",
          "a": "$s'(t) = 3 t^{2} - 12 t + 9$ (velocity), $s''(t) = 6 t - 12$ m/s² (acceleration)"
        }
      ],
      "medium": [
        {
          "qid": "FD_030_m01",
          "q": "The height of a ball is given by $h(t) = 20t - 5t^2$ metres. Find $h''(t)$ and explain what it represents.",
          "a": "$h'(t) = 20 - 10t$ (velocity), $h''(t) = -10$ m/s². This represents the constant downward acceleration due to gravity."
        },
        {
          "qid": "FD_030_m02",
          "q": "The population of bacteria (in thousands) is modelled by $P(t) = 2t^3 - 15t^2 + 36t + 100$ where $t$ is in hours. Find $P''(3)$ and interpret the result.",
          "a": "$P'(t) = 6 t^{2} - 30 t + 36$, $P''(t) = 12 t - 30$. $P''(3) = 6$. Since $P''(3) > 0$, the rate of population growth is increasing at $t = 3$ hours."
        },
        {
          "qid": "FD_030_m03",
          "q": "The temperature of a cooling object is $T(t) = 500e^{-0.2t}$ °C. Find $T''(t)$ and evaluate $T''(0)$. Interpret the sign.",
          "a": "$T'(t) = - 100 e^{- \\frac{t}{5}}$, $T''(t) = 20 e^{- \\frac{t}{5}}$. $T''(0) = 20$. Since $T''(0) > 0$, the rate of cooling is slowing down (temperature is concave up)."
        },
        {
          "qid": "FD_030_m04",
          "q": "Monthly revenue is modelled by $R(t) = -\\frac{1}{4}t^4 + 8t^3 - 60t^2 + 200t$ thousand dollars. Find $R''(14)$ and state whether revenue growth is accelerating or decelerating.",
          "a": "$R'(t) = - t^{3} + 24 t^{2} - 120 t + 200$, $R''(t) = - 3 t^{2} + 48 t - 120$. $R''(14) = -36$. Since $R''(14) < 0$, revenue growth is decelerating at $t = 14$."
        },
        {
          "qid": "FD_030_m05",
          "q": "The distance travelled by a boat is $d(t) = 10\\sqrt{t + 1}$ metres. Find $d''(t)$ and evaluate $d''(3)$. Interpret the result.",
          "a": "$d'(t) = \\frac{5}{\\sqrt{t + 1}}$, $d''(t) = - \\frac{5}{2 \\left(t + 1\\right)^{\\frac{3}{2}}}$. $d''(3) = - \\frac{5}{16}$. Since $d''(3) < 0$, the boat is decelerating."
        }
      ],
      "hard": [
        {
          "qid": "FD_030_h01",
          "q": "A particle moves with displacement $s(t) = t^2 e^{-t}$ metres. Find $s''(t)$ and determine the values of $t$ where the acceleration is zero.",
          "a": "$s'(t) = t \\left(2 - t\\right) e^{- t}$. $s''(t) = \\left(t^{2} - 4 t + 2\\right) e^{- t}$. Setting $s''(t) = 0$: $t = 2 - \\sqrt{2}$ or $t = \\sqrt{2} + 2$."
        },
        {
          "qid": "FD_030_h02",
          "q": "The percentage of a task completed after $t$ minutes is $P(t) = \\frac{100t}{t+5}$. Find $P''(t)$, then evaluate $P''(5)$ and $P''(15)$. What do these tell us about the rate of progress?",
          "a": "$P'(t) = \\frac{500}{\\left(t + 5\\right)^{2}}$. $P''(t) = - \\frac{1000}{\\left(t + 5\\right)^{3}}$. $P''(5) = -1$, $P''(15) = - \\frac{1}{8}$. Both are negative, so the rate of progress is always decelerating — gains slow as the task nears completion."
        },
        {
          "qid": "FD_030_h03",
          "q": "The depth of water in a harbour is $D(t) = 5\\sin\\!\\left(\\frac{t}{2}\\right) + 3\\cos(t)$ metres. Find $D''(t)$ and evaluate $D''(\\pi)$. State whether the depth is concave up or down at $t = \\pi$.",
          "a": "$D'(t) = - 3 \\sin{\\left(t \\right)} + \\frac{5 \\cos{\\left(\\frac{t}{2} \\right)}}{2}$. $D''(t) = - \\frac{5 \\sin{\\left(\\frac{t}{2} \\right)}}{4} - 3 \\cos{\\left(t \\right)}$. $D''(\\pi) = \\frac{7}{4}$. Since $D''(\\pi) > 0$, the depth function is concave up at $t = \\pi$ — the rate of change of depth is increasing."
        },
        {
          "qid": "FD_030_h04",
          "q": "The temperature of an oven is $T(t) = 200 - 150e^{-0.1t} - 50e^{-0.5t}$ °C. Find $T''(t)$ and evaluate $T''(0)$. What does this tell us about the heating rate initially?",
          "a": "$T'(t) = 25 e^{- \\frac{t}{2}} + 15 e^{- \\frac{t}{10}}$. $T''(t) = - \\frac{25 e^{- \\frac{t}{2}}}{2} - \\frac{3 e^{- \\frac{t}{10}}}{2}$. $T''(0) = -14$. Since $T''(0) < 0$, the rate of heating is decreasing from the start — the oven heats fastest initially."
        },
        {
          "qid": "FD_030_h05",
          "q": "A rocket's height is $h(t) = -\\frac{1}{3}t^3 + 6t^2 + 12t$ metres. Find the time when the acceleration is zero, and determine the velocity at that instant.",
          "a": "$h'(t) = - t^{2} + 12 t + 12$, $h''(t) = 12 - 2 t$. Setting $h''(t) = 0$: $t = 6$. Velocity at $t = 6$: $h'(6) = 48$ m/s."
        }
      ]
    },
    {
      "pt_id": "FD_031",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Second Derivatives",
      "concept": "Calculating Second Derivatives",
      "pt": "Calculation of second derivative",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "substitution_error",
        "sign_error",
        "interpretation_mixup",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "FD_031_e01",
          "q": "Find $f''(x)$ if $f(x) = 5x^3 - 2x^2 + 7x - 1$.",
          "a": "$f'(x) = 15 x^{2} - 4 x + 7$, $f''(x) = 30 x - 4$"
        },
        {
          "qid": "FD_031_e02",
          "q": "Find $\\frac{d^2y}{dx^2}$ if $y = x^4 + \\frac{3}{x}$.",
          "a": "$y' = 4x^3 - \\frac{3}{x^2}$, $y'' = 12x^2 + \\frac{6}{x^3}$"
        },
        {
          "qid": "FD_031_e03",
          "q": "Find $f''(x)$ if $f(x) = \\frac{1}{2}x^4 - \\frac{3}{2}x^2 + 4$.",
          "a": "$f'(x) = 2x^3 - 3x$, $f''(x) = 6 x^{2} - 3$"
        }
      ],
      "medium": [
        {
          "qid": "FD_031_m01",
          "q": "Find $f''(x)$ if $f(x) = x^4 - 3x^3 + 2x$.",
          "a": "$f'(x) = 4x^3 - 9x^2 + 2$, $f''(x) = 12x^2 - 18x$"
        },
        {
          "qid": "FD_031_m02",
          "q": "Find $\\frac{d^2y}{dx^2}$ if $y = e^{2x} \\sin(x)$.",
          "a": "$y' = 2e^{2x}\\sin(x) + e^{2x}\\cos(x) = e^{2x}(2\\sin x + \\cos x)$. $y'' = 2e^{2x}(2\\sin x + \\cos x) + e^{2x}(2\\cos x - \\sin x) = e^{2x}(3\\sin x + 4\\cos x)$"
        },
        {
          "qid": "FD_031_m03",
          "q": "Find $f''(x)$ if $f(x) = (2x + 1)^4$.",
          "a": "$f'(x) = 8 \\left(2 x + 1\\right)^{3}$, $f''(x) = 48 \\left(2 x + 1\\right)^{2}$"
        },
        {
          "qid": "FD_031_m04",
          "q": "Find $\\frac{d^2y}{dx^2}$ if $y = x^2 e^x$.",
          "a": "$y' = x \\left(x + 2\\right) e^{x}$, $y'' = \\left(x^{2} + 4 x + 2\\right) e^{x}$"
        },
        {
          "qid": "FD_031_m05",
          "q": "Find $f''(x)$ if $f(x) = \\sqrt{4x + 1}$.",
          "a": "$f'(x) = \\frac{2}{\\sqrt{4 x + 1}}$, $f''(x) = - \\frac{4}{\\left(4 x + 1\\right)^{\\frac{3}{2}}}$"
        }
      ],
      "hard": [
        {
          "qid": "FD_031_h01",
          "q": "Find $\\frac{d^2y}{dx^2}$ if $y = x^2\\cos(x)$.",
          "a": "$y' = x \\left(- x \\sin{\\left(x \\right)} + 2 \\cos{\\left(x \\right)}\\right)$. $y'' = - x^{2} \\cos{\\left(x \\right)} - 4 x \\sin{\\left(x \\right)} + 2 \\cos{\\left(x \\right)}$"
        },
        {
          "qid": "FD_031_h02",
          "q": "If $f(x) = \\frac{x}{x^2 + 1}$, find $f''(x)$ and evaluate $f''(1)$.",
          "a": "$f'(x) = \\frac{1 - x^{2}}{x^{4} + 2 x^{2} + 1}$. $f''(x) = \\frac{2 x \\left(x^{2} - 3\\right)}{\\left(x^{2} + 1\\right)^{3}}$. $f''(1) = - \\frac{1}{2}$"
        },
        {
          "qid": "FD_031_h03",
          "q": "Find $f''(x)$ if $f(x) = x^2 \\ln(x)$.",
          "a": "$f'(x) = x \\left(2 \\ln{\\left(x \\right)} + 1\\right)$, $f''(x) = 2 \\ln{\\left(x \\right)} + 3$"
        },
        {
          "qid": "FD_031_h04",
          "q": "Find $\\frac{d^2y}{dx^2}$ if $y = e^{-x^2}$ and evaluate it at $x = 1$.",
          "a": "$y' = - 2 x e^{- x^{2}}$. $y'' = 2 \\left(2 x^{2} - 1\\right) e^{- x^{2}}$. At $x = 1$: $y'' = \\frac{2}{e}$"
        },
        {
          "qid": "FD_031_h05",
          "q": "If $y = \\frac{\\sin(x)}{x}$, find $y''$ and evaluate $y''(\\pi)$.",
          "a": "$y' = \\frac{x \\cos{\\left(x \\right)} - \\sin{\\left(x \\right)}}{x^{2}}$. $y'' = \\frac{- x^{2} \\sin{\\left(x \\right)} - 2 x \\cos{\\left(x \\right)} + 2 \\sin{\\left(x \\right)}}{x^{3}}$. $y''(\\pi) = \\frac{2}{\\pi^{2}}$"
        }
      ]
    },
    {
      "pt_id": "FD_032",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Second Derivatives",
      "concept": "Locating Critical Points",
      "pt": "Deriving simultaneous equations from turning point, inflection point, and function value conditions",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "FD_032_e01",
          "q": "The curve $y = ax^2 + bx$ has a stationary point at $x = 3$. Find an equation relating $a$ and $b$.",
          "a": "$y' = 2ax + b = 0$ at $x = 3$: $6a + b = 0$."
        },
        {
          "qid": "FD_032_e02",
          "q": "The curve $y = x^3 + ax^2 + b$ passes through $(1, 5)$ and has a stationary point at $x = 0$. Find $a$ and $b$.",
          "a": "$y' = 3x^2 + 2ax$. At $x = 0$: $y'(0) = 0$ (always true). Passes through $(1, 5)$: $1 + a + b = 5 \\Rightarrow a + b = 4$. Since the stationary point condition gives no info about $a$, we need another condition — with just these two conditions, $a$ is free."
        },
        {
          "qid": "FD_032_e03",
          "q": "The curve $y = ax^2 + bx + 3$ has a stationary point at $(2, 7)$. Find $a$ and $b$.",
          "a": "$y' = 2ax + b = 0$ at $x = 2$: $4a + b = 0$ … (1). Passes through $(2, 7)$: $4a + 2b + 3 = 7 \\Rightarrow 4a + 2b = 4$ … (2). From (1): $b = -4a$. Sub into (2): $4a - 8a = 4 \\Rightarrow a = -1$, $b = 4$."
        }
      ],
      "medium": [
        {
          "qid": "FD_032_m01",
          "q": "The cubic $f(x) = ax^3 + bx^2 + cx$ has a stationary point at $x = 1$ and an inflection point at $x = 2$. Find $a$ and $b$.",
          "a": "$f'(x) = 3ax^2 + 2bx + c = 0$ at $x=1$: $3a + 2b + c = 0$. $f''(x) = 6ax + 2b = 0$ at $x=2$: $12a + 2b = 0 \\Rightarrow b = -6a$. From first equation: $3a - 12a + c = 0 \\Rightarrow c = 9a$."
        },
        {
          "qid": "FD_032_m02",
          "q": "The curve $y = ax^3 + bx^2$ has a local maximum at $(1, 2)$. Find $a$ and $b$.",
          "a": "$y' = 3ax^2 + 2bx = 0$ at $x = 1$: $3a + 2b = 0$ … (1). Passes through $(1, 2)$: $a + b = 2$ … (2). From (1): $b = -\\frac{3a}{2}$. Sub into (2): $a - \\frac{3a}{2} = 2 \\Rightarrow -\\frac{a}{2} = 2 \\Rightarrow a = -4$, $b = 6$."
        },
        {
          "qid": "FD_032_m03",
          "q": "The curve $y = ax^3 + bx^2 + cx + d$ has stationary points at $x = -1$ and $x = 3$, and passes through the origin. Write down three equations in $a$, $b$, $c$, $d$.",
          "a": "$y' = 3ax^2 + 2bx + c$. At $x = -1$: $3a - 2b + c = 0$ … (1). At $x = 3$: $27a + 6b + c = 0$ … (2). Passes through $(0,0)$: $d = 0$ … (3)."
        },
        {
          "qid": "FD_032_m04",
          "q": "The quartic $y = x^4 + ax^3 + bx^2$ has an inflection point at $x = 1$ where $y = 3$. Find $a$ and $b$.",
          "a": "$y'' = 12x^2 + 6ax + 2b = 0$ at $x = 1$: $12 + 6a + 2b = 0 \\Rightarrow 6a + 2b = -12$ … (1). Passes through $(1, 3)$: $1 + a + b = 3 \\Rightarrow a + b = 2$ … (2). From (2): $b = 2 - a$. Sub into (1): $6a + 4 - 2a = -12 \\Rightarrow 4a = -16 \\Rightarrow a = -4$, $b = 6$."
        },
        {
          "qid": "FD_032_m05",
          "q": "The curve $y = ax^2 + bx + c$ has a maximum value of 10 at $x = 2$ and passes through $(0, 6)$. Find $a$, $b$ and $c$.",
          "a": "$y'(2) = 4a + b = 0$ … (1). $y(2) = 4a + 2b + c = 10$ … (2). $y(0) = c = 6$ … (3). From (3): $c = 6$. From (1): $b = -4a$. Sub into (2): $4a - 8a + 6 = 10 \\Rightarrow -4a = 4 \\Rightarrow a = -1$, $b = 4$."
        }
      ],
      "hard": [
        {
          "qid": "FD_032_h01",
          "q": "The cubic $f(x) = ax^3 + bx^2 + cx + d$ has a local max at $(-1, 6)$ and a local min at $(2, -21)$. Find $a$, $b$, $c$ and $d$.",
          "a": "$f' = 3ax^2 + 2bx + c$. $f'(-1) = 3a - 2b + c = 0$ … (1). $f'(2) = 12a + 4b + c = 0$ … (2). $f(-1) = -a + b - c + d = 6$ … (3). $f(2) = 8a + 4b + 2c + d = -21$ … (4). (2)−(1): $9a + 6b = 0 \\Rightarrow b = -\\frac{3a}{2}$. From (1): $3a + 3a + c = 0 \\Rightarrow c = -6a$. (4)−(3): $9a + 3b + 3c = -27 \\Rightarrow 9a - \\frac{9a}{2} - 18a = -27 \\Rightarrow -\\frac{27a}{2} = -27 \\Rightarrow a = 2$. So $b = -3$, $c = -12$, $d = -1$."
        },
        {
          "qid": "FD_032_h02",
          "q": "A quartic $y = x^4 + ax^3 + bx^2 + cx$ has stationary points at $x = 0$ and $x = 1$, and an inflection point at $x = 2$. Find $a$, $b$ and $c$.",
          "a": "$y' = 4x^3 + 3ax^2 + 2bx + c$. $y'(0) = c = 0$. $y'(1) = 4 + 3a + 2b = 0$ … (1). $y'' = 12x^2 + 6ax + 2b$. $y''(2) = 48 + 12a + 2b = 0$ … (2). From (2): $b = -24 - 6a$. Sub into (1): $4 + 3a - 48 - 12a = 0 \\Rightarrow -9a = 44 \\Rightarrow a = -\\frac{44}{9}$, $b = -24 + \\frac{264}{9} = \\frac{48}{9} = \\frac{16}{3}$."
        },
        {
          "qid": "FD_032_h03",
          "q": "The function $f(x) = ax^3 + bx^2 + cx + 1$ has an inflection point at $(1, 0)$ and $f'(1) = -3$. Find $a$, $b$ and $c$.",
          "a": "$f''(x) = 6ax + 2b$. $f''(1) = 6a + 2b = 0 \\Rightarrow b = -3a$ … (1). $f(1) = a + b + c + 1 = 0 \\Rightarrow a + b + c = -1$ … (2). $f'(1) = 3a + 2b + c = -3$ … (3). From (1): $b = -3a$. (2): $a - 3a + c = -1 \\Rightarrow c = 2a - 1$. (3): $3a - 6a + 2a - 1 = -3 \\Rightarrow -a = -2 \\Rightarrow a = 2$. So $b = -6$, $c = 3$."
        },
        {
          "qid": "FD_032_h04",
          "q": "The curve $y = ax^4 + bx^2 + c$ is symmetric about the $y$-axis, has a maximum at $(0, 5)$, and passes through $(1, 2)$ and $(-1, 2)$. Find $a$, $b$ and $c$.",
          "a": "$y(0) = c = 5$. $y'(0) = 0$ is automatic (even function). $y(1) = a + b + 5 = 2 \\Rightarrow a + b = -3$ … (1). $y'(x) = 4ax^3 + 2bx$. For max at $x=0$: $y''(0) = 2b < 0 \\Rightarrow b < 0$. We need more: since it's a local max, $b < 0$. From (1): $a = -3 - b$. For the function to tend to $+\\infty$ we need $a > 0$, so $b < -3$. Taking the simplest: with given info, $a + b = -3$ and $c = 5$."
        },
        {
          "qid": "FD_032_h05",
          "q": "The cubic $f(x) = 2x^3 + bx^2 + cx + d$ has a stationary point at $x = -1$, passes through $(0, 4)$, and has $f(2) = 0$. Find $b$, $c$ and $d$.",
          "a": "$d = f(0) = 4$. $f'(x) = 6x^2 + 2bx + c$. $f'(-1) = 6 - 2b + c = 0 \\Rightarrow c = 2b - 6$ … (1). $f(2) = 16 + 4b + 2c + 4 = 0 \\Rightarrow 4b + 2c = -20 \\Rightarrow 2b + c = -10$ … (2). Sub (1) into (2): $2b + 2b - 6 = -10 \\Rightarrow 4b = -4 \\Rightarrow b = -1$, $c = -8$."
        }
      ]
    },
    {
      "pt_id": "FD_033",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Second Derivatives",
      "concept": "Locating Critical Points",
      "pt": "Determine the values for which a curve has a given concavity",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "substitution_error",
        "sign_error",
        "interpretation_mixup",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "FD_033_e01",
          "q": "For $f(x) = x^3 - 3x^2$, find where the curve is concave up.",
          "a": "$f''(x) = 6 x - 6$. Concave up when $f''(x) > 0$: $6 x - 6 > 0 \\Rightarrow x > 1$."
        },
        {
          "qid": "FD_033_e02",
          "q": "For $f(x) = -x^3 + 12x$, find where the curve is concave down.",
          "a": "$f''(x) = - 6 x$. Concave down when $f''(x) < 0$: $- 6 x < 0 \\Rightarrow x > 0$."
        },
        {
          "qid": "FD_033_e03",
          "q": "For $f(x) = 2x^3 - 6x^2 + x + 5$, find the values of $x$ for which the curve is concave up.",
          "a": "$f''(x) = 12 x - 12$. Concave up when $12 x - 12 > 0 \\Rightarrow x > 1$."
        }
      ],
      "medium": [
        {
          "qid": "FD_033_m01",
          "q": "For $f(x) = x^3 - 6x^2 + 9x$, find where the curve is concave up.",
          "a": "$f''(x) = 6x - 12 > 0 \\Rightarrow x > 2$. Concave up for $x > 2$."
        },
        {
          "qid": "FD_033_m02",
          "q": "For $f(x) = x^4 - 8x^2$, find the intervals where the curve is concave up.",
          "a": "$f''(x) = 12 x^{2} - 16 = 12 x^{2} - 16$. $f''(x) = 0$ at $x = - \\frac{2 \\sqrt{3}}{3}$ and $x = \\frac{2 \\sqrt{3}}{3}$. Concave up when $f''(x) > 0$: $x < - \\frac{2 \\sqrt{3}}{3}$ or $x > \\frac{2 \\sqrt{3}}{3}$."
        },
        {
          "qid": "FD_033_m03",
          "q": "For $f(x) = xe^{-x}$, find where the curve is concave down.",
          "a": "$f'(x) = \\left(1 - x\\right) e^{- x}$. $f''(x) = \\left(x - 2\\right) e^{- x}$. $f''(x) < 0$ when $x - 2 < 0$, i.e. $x < 2$. Concave down for $x < 2$."
        },
        {
          "qid": "FD_033_m04",
          "q": "For $f(x) = \\frac{\\ln x}{x}$ (where $x > 0$), find where the curve is concave down.",
          "a": "$f'(x) = \\frac{1 - \\ln{\\left(x \\right)}}{x^{2}}$. $f''(x) = \\frac{2 \\ln{\\left(x \\right)} - 3}{x^{3}}$. For $x > 0$: concave down when $2\\ln x - 3 > 0$, i.e. $\\ln x > \\frac{3}{2}$, i.e. $x > e^{3/2}$."
        },
        {
          "qid": "FD_033_m05",
          "q": "For $f(x) = x^3 - 6x^2 + 12x - 3$, find where the curve is concave up and where it is concave down.",
          "a": "$f''(x) = 6 x - 12$. $f''(x) = 0$ at $x = 2$. Concave up for $x > 2$, concave down for $x < 2$."
        }
      ],
      "hard": [
        {
          "qid": "FD_033_h01",
          "q": "For $f(x) = x^4 - 4x^3 + 6x^2$, determine where the curve is concave up.",
          "a": "$f''(x) = 12 x^{2} - 24 x + 12 = 12 \\left(x - 1\\right)^{2}$. Since $12 \\left(x - 1\\right)^{2} = 12(x-1)^2 \\geq 0$ for all $x$, the curve is concave up everywhere (and has an inflection point at $x = 1$ where concavity doesn't change)."
        },
        {
          "qid": "FD_033_h02",
          "q": "For $f(x) = \\sin(x)$, find the intervals on $[0, 2\\pi]$ where the curve is concave down.",
          "a": "$f''(x) = -\\sin(x)$. Concave down when $f''(x) < 0$, i.e. $-\\sin(x) < 0 \\Rightarrow \\sin(x) > 0$. On $[0, 2\\pi]$: concave down for $x \\in (0, \\pi)$."
        },
        {
          "qid": "FD_033_h03",
          "q": "For $f(x) = x^2 e^x$, find the intervals where the curve is concave up.",
          "a": "$f''(x) = \\left(x^{2} + 4 x + 2\\right) e^{x}$. Since $e^x > 0$, sign depends on $x^2 + 4x + 2 = 0 \\Rightarrow x = -2 \\pm \\sqrt{2}$. Concave up for $x < -2 - \\sqrt{2}$ or $x > -2 + \\sqrt{2}$."
        },
        {
          "qid": "FD_033_h04",
          "q": "For $f(x) = \\frac{x}{x^2 + 1}$, find all intervals where the curve is concave up.",
          "a": "$f''(x) = \\frac{2 x \\left(x^{2} - 3\\right)}{\\left(x^{2} + 1\\right)^{3}}$. Since $(x^2+1)^3 > 0$, sign depends on $2x(x^2 - 3) = 0$ at $x = 0, \\pm\\sqrt{3}$. Testing signs: concave up on $(-\\sqrt{3}, 0) \\cup (\\sqrt{3}, \\infty)$."
        },
        {
          "qid": "FD_033_h05",
          "q": "For $f(x) = e^{-x^2/2}$ (the Gaussian bell curve), find where the curve is concave up.",
          "a": "$f''(x) = \\left(x^{2} - 1\\right) e^{- \\frac{x^{2}}{2}}$. Since $e^{-x^2/2} > 0$, concave up when $x^2 - 1 > 0$, i.e. $x < -1$ or $x > 1$."
        }
      ]
    },
    {
      "pt_id": "FD_034",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Second Derivatives",
      "concept": "Locating Critical Points",
      "pt": "Determining concavity of a curve at a given point",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "substitution_error",
        "sign_error",
        "interpretation_mixup",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "FD_034_e01",
          "q": "Determine whether $f(x) = x^3 - 6x + 1$ is concave up or concave down at $x = 2$.",
          "a": "$f''(x) = 6 x$. $f''(2) = 12 > 0$, so concave up at $x = 2$."
        },
        {
          "qid": "FD_034_e02",
          "q": "Determine whether $f(x) = -2x^3 + 3x^2 + 5$ is concave up or concave down at $x = 3$.",
          "a": "$f''(x) = 6 - 12 x$. $f''(3) = -30 < 0$, so concave down at $x = 3$."
        },
        {
          "qid": "FD_034_e03",
          "q": "Is $f(x) = x^4 - 4x^2$ concave up or down at $x = 0$?",
          "a": "$f''(x) = 12 x^{2} - 8$. $f''(0) = -8 < 0$, so concave down at $x = 0$."
        }
      ],
      "medium": [
        {
          "qid": "FD_034_m01",
          "q": "Determine whether $f(x) = x \\ln(x)$ is concave up or concave down at $x = 1$.",
          "a": "$f'(x) = \\ln(x) + 1$, $f''(x) = \\frac{1}{x}$. $f''(1) = 1 > 0$, so concave up at $x = 1$."
        },
        {
          "qid": "FD_034_m02",
          "q": "Determine whether $f(x) = xe^{-x}$ is concave up or concave down at $x = 1$.",
          "a": "$f''(x) = \\left(x - 2\\right) e^{- x}$. $f''(1) = - \\frac{1}{e}$. Since $f''(1) < 0$, concave down at $x = 1$."
        },
        {
          "qid": "FD_034_m03",
          "q": "Determine the concavity of $f(x) = \\sin(x) + \\cos(x)$ at $x = \\frac{\\pi}{4}$.",
          "a": "$f''(x) = - \\sin{\\left(x \\right)} - \\cos{\\left(x \\right)}$. $f''(\\pi/4) = - \\sqrt{2}$. Since $f''(\\pi/4) < 0$, concave down at $x = \\frac{\\pi}{4}$."
        },
        {
          "qid": "FD_034_m04",
          "q": "Determine the concavity of $f(x) = \\frac{x^2}{x + 1}$ at $x = 2$.",
          "a": "$f''(x) = \\frac{2}{x^{3} + 3 x^{2} + 3 x + 1}$. $f''(2) = \\frac{2}{27} > 0$, so concave up at $x = 2$."
        },
        {
          "qid": "FD_034_m05",
          "q": "Determine the concavity of $f(x) = e^x \\cos(x)$ at $x = 0$.",
          "a": "$f''(x) = - 2 e^{x} \\sin{\\left(x \\right)}$. $f''(0) = 0$. Since $f''(0) < 0$, concave down at $x = 0$."
        }
      ],
      "hard": [
        {
          "qid": "FD_034_h01",
          "q": "Determine the concavity of $f(x) = \\ln(x^2 + 1)$ at $x = 0$ and at $x = 2$.",
          "a": "$f''(x) = \\frac{2 \\left(1 - x^{2}\\right)}{\\left(x^{2} + 1\\right)^{2}}$. $f''(0) = 2 > 0$ (concave up). $f''(2) = - \\frac{6}{25} < 0$ (concave down)."
        },
        {
          "qid": "FD_034_h02",
          "q": "Is $f(x) = x^2 \\ln(x)$ concave up or down at $x = \\frac{1}{2}$?",
          "a": "$f''(x) = 2 \\ln{\\left(x \\right)} + 3$. $f''(1/2) = 3 - \\ln{\\left(4 \\right)}$. Since $f''(1/2) > 0$, concave up."
        },
        {
          "qid": "FD_034_h03",
          "q": "Determine the concavity of $f(x) = x\\sin(x)$ at $x = \\pi$.",
          "a": "$f''(x) = - x \\sin{\\left(x \\right)} + 2 \\cos{\\left(x \\right)}$. $f''(\\pi) = -2$. Since $f''(\\pi) > 0$, concave up at $x = \\pi$."
        },
        {
          "qid": "FD_034_h04",
          "q": "For $f(x) = e^{-x^2}$, determine the concavity at $x = 0$ and at $x = 2$.",
          "a": "$f''(x) = 2 \\left(2 x^{2} - 1\\right) e^{- x^{2}}$. $f''(0) = -2 < 0$ (concave down). $f''(2) = \\frac{14}{e^{4}} > 0$ (concave up)."
        },
        {
          "qid": "FD_034_h05",
          "q": "Determine the concavity of $f(x) = (x^2 - 1)e^x$ at $x = -1$.",
          "a": "$f''(x) = \\left(x^{2} + 4 x + 1\\right) e^{x}$. $f''(-1) = - \\frac{2}{e}$. Since $f''(-1) < 0$, concave down at $x = -1$."
        }
      ]
    },
    {
      "pt_id": "FD_035",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Second Derivatives",
      "concept": "Locating Critical Points",
      "pt": "Determining nature of stationary or inflection points using second derivative tests",
      "testing": "",
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
          "qid": "FD_035_e01",
          "q": "Classify the stationary point of $f(x) = x^2 - 6x + 10$.",
          "a": "$f'(x) = 2 x - 6 = 0 \\Rightarrow x = 3$. $f''(x) = 2 > 0$, so local minimum at $(3, 1)$."
        },
        {
          "qid": "FD_035_e02",
          "q": "Classify the stationary point of $f(x) = -x^2 + 4x + 1$.",
          "a": "$f'(x) = 4 - 2 x = 0 \\Rightarrow x = 2$. $f''(x) = -2 < 0$, so local maximum at $(2, 5)$."
        },
        {
          "qid": "FD_035_e03",
          "q": "Classify the stationary points of $f(x) = x^3 - 12x$.",
          "a": "$f'(x) = 3 x^{2} - 12 = 0 \\Rightarrow x = -2$ or $x = 2$. $f''(x) = 6 x$. $f''(-2) = -12 < 0$ (local max). $f''(2) = 12 > 0$ (local min)."
        }
      ],
      "medium": [
        {
          "qid": "FD_035_m01",
          "q": "Classify the stationary points of $f(x) = x^3 - 3x + 2$.",
          "a": "$f'(x) = 3x^2 - 3 = 0 \\Rightarrow x = \\pm 1$. $f''(x) = 6x$. At $x = -1$: $f''(-1) = -6 < 0$ (local max). At $x = 1$: $f''(1) = 6 > 0$ (local min)."
        },
        {
          "qid": "FD_035_m02",
          "q": "Classify the stationary points of $f(x) = 3x^4 - 4x^3$.",
          "a": "$f'(x) = 12 x^{2} \\left(x - 1\\right) = 12 x^{2} \\left(x - 1\\right) = 0 \\Rightarrow x = 0$ or $x = 1$. $f''(x) = 12 x \\left(3 x - 2\\right)$. $f''(0) = 0$ (inconclusive). $f''(1) = 12 > 0$ (local min at $(1, -1)$). At $x = 0$: check sign of $f'$: $f'(-0.1) > 0$, $f'(0.1) < 0$... Actually $f'(x) = 12x^2(x-1)$: for $x$ near $0$, $f'(x) < 0$ on both sides when $x < 1$, so $x = 0$ is an inflection point, not a turning point."
        },
        {
          "qid": "FD_035_m03",
          "q": "Find and classify the stationary point(s) of $f(x) = xe^{-x}$.",
          "a": "$f'(x) = \\left(1 - x\\right) e^{- x} = 0 \\Rightarrow x = 1$. $f''(x) = \\left(x - 2\\right) e^{- x}$. $f''(1) = - \\frac{1}{e} < 0$, so local maximum at $(1, e^{-1})$."
        },
        {
          "qid": "FD_035_m04",
          "q": "Classify the stationary points of $f(x) = x^3 - 3x^2 - 9x + 5$.",
          "a": "$f'(x) = 3 x^{2} - 6 x - 9 = 3 \\left(x - 3\\right) \\left(x + 1\\right) = 0 \\Rightarrow x = -1$ or $x = 3$. $f''(x) = 6 x - 6$. $f''(-1) = -12 < 0$ (local max at $(-1, 10))$. $f''(3) = 12 > 0$ (local min at $(3, -22))$."
        },
        {
          "qid": "FD_035_m05",
          "q": "Find and classify the stationary points of $f(x) = 2x^3 + 3x^2 - 36x + 10$.",
          "a": "$f'(x) = 6 x^{2} + 6 x - 36 = 6 \\left(x - 2\\right) \\left(x + 3\\right) = 0 \\Rightarrow x = -3$ or $x = 2$. $f''(x) = 12 x + 6$. $f''(-3) = -30 < 0$ (local max). $f''(2) = 30 > 0$ (local min)."
        }
      ],
      "hard": [
        {
          "qid": "FD_035_h01",
          "q": "Find and classify all stationary points of $f(x) = x^4 - 4x^3 + 4x^2$.",
          "a": "$f'(x) = 4 x \\left(x^{2} - 3 x + 2\\right) = 4 x \\left(x - 2\\right) \\left(x - 1\\right) = 0 \\Rightarrow x = 0$ or $x = 2$. $f''(x) = 12 x^{2} - 24 x + 8$. $f''(0) = 8 > 0$ (local min at $(0, 0)$). $f''(2) = 8 > 0$ (local min at $(2, 0)$). Check $x = 0$: actually $f'(x) = 4x(x-2)^2$, so $x = 2$ has $f'$ same sign on both sides → not a turning point but an inflection."
        },
        {
          "qid": "FD_035_h02",
          "q": "Find and classify the stationary point(s) of $f(x) = \\frac{e^x}{x}$ for $x > 0$.",
          "a": "$f'(x) = \\frac{\\left(x - 1\\right) e^{x}}{x^{2}} = 0 \\Rightarrow x - 1 = 0 \\Rightarrow x = 1$. $f''(x) = \\frac{\\left(x^{2} - 2 x + 2\\right) e^{x}}{x^{3}}$. $f''(1) = e > 0$, so local minimum at $(1, e)$."
        },
        {
          "qid": "FD_035_h03",
          "q": "Find and classify the stationary point(s) of $f(x) = x^2 \\ln(x)$ for $x > 0$.",
          "a": "$f'(x) = x \\left(2 \\ln{\\left(x \\right)} + 1\\right) = 0$. Since $x > 0$: $2\\ln(x) + 1 = 0 \\Rightarrow \\ln(x) = -\\frac{1}{2} \\Rightarrow x = e^{-1/2} = \\frac{1}{\\sqrt{e}}$. $f''(x) = 2 \\ln{\\left(x \\right)} + 3$. $f''(e^{-1/2}) = 2\\ln(e^{-1/2}) + 3 = -1 + 3 = 2 > 0$ (local min)."
        },
        {
          "qid": "FD_035_h04",
          "q": "Find and classify the stationary points of $f(x) = x^3 e^{-x}$ for $x \\geq 0$.",
          "a": "$f'(x) = x^{2} \\left(3 - x\\right) e^{- x} = 0 \\Rightarrow x^2(3-x) = 0 \\Rightarrow x = 0$ or $x = 3$. $f''(x) = x \\left(x^{2} - 6 x + 6\\right) e^{- x}$. $f''(0) = 0$ (inconclusive — check: $f'(x)$ changes from $0$ through $0$, $x = 0$ is an inflection). $f''(3) = - \\frac{9}{e^{3}} < 0$ (local max at $(3, 27e^{-3})$)."
        },
        {
          "qid": "FD_035_h05",
          "q": "Classify the stationary points of $f(x) = \\sin(x)\\cos(x)$ on $[0, \\pi]$.",
          "a": "$f(x) = \\frac{1}{2}\\sin(2x)$, so $f'(x) = \\cos(2x) = 0 \\Rightarrow 2x = \\frac{\\pi}{2}, \\frac{3\\pi}{2} \\Rightarrow x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}$. $f''(x) = -2\\sin(2x)$. $f''(\\pi/4) = -2 < 0$ (local max). $f''(3\\pi/4) = 2 > 0$ (local min)."
        }
      ]
    },
    {
      "pt_id": "FD_036",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Second Derivatives",
      "concept": "Locating Critical Points",
      "pt": "Finding $x$ and/or $y$ intercepts",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "FD_036_e01",
          "q": "Find the $x$ and $y$ intercepts of $f(x) = x^2 - 4x + 3$.",
          "a": "$y$-intercept: $f(0) = 3$. $x$-intercepts: $\\left(x - 3\\right) \\left(x - 1\\right) = 0 \\Rightarrow x = 1$ or $x = 3$."
        },
        {
          "qid": "FD_036_e02",
          "q": "Find the intercepts of $f(x) = x^3 - x$.",
          "a": "$y$-intercept: $f(0) = 0$. $x$-intercepts: $x^{3} - x = 0 \\Rightarrow x = -1, 0, 1$."
        },
        {
          "qid": "FD_036_e03",
          "q": "Find the intercepts of $f(x) = 2x + 6$.",
          "a": "$y$-intercept: $f(0) = 6$. $x$-intercept: $2x + 6 = 0 \\Rightarrow x = -3$."
        }
      ],
      "medium": [
        {
          "qid": "FD_036_m01",
          "q": "Find the $x$ and $y$ intercepts of $f(x) = xe^{-x}$.",
          "a": "$y$-intercept: $f(0) = 0$. $x$-intercept: $xe^{-x} = 0 \\Rightarrow x = 0$ (since $e^{-x} \\neq 0$). Only intercept: $(0, 0)$."
        },
        {
          "qid": "FD_036_m02",
          "q": "Find the intercepts of $f(x) = x^2 e^x - xe^x$.",
          "a": "$f(x) = xe^x(x - 1)$. $y$-intercept: $f(0) = 0$. $x$-intercepts: $xe^x(x-1) = 0$. Since $e^x \\neq 0$: $x = 0$ or $x = 1$."
        },
        {
          "qid": "FD_036_m03",
          "q": "Find the $x$-intercept(s) of $f(x) = x\\ln(x)$ for $x > 0$.",
          "a": "$x\\ln(x) = 0$. Since $x > 0$: $\\ln(x) = 0 \\Rightarrow x = 1$. Intercept at $(1, 0)$."
        },
        {
          "qid": "FD_036_m04",
          "q": "Find the intercepts of $f(x) = e^x - 4$.",
          "a": "$y$-intercept: $f(0) = 1 - 4 = -3$. $x$-intercept: $e^x = 4 \\Rightarrow x = \\ln(4) = 2\\ln(2)$."
        },
        {
          "qid": "FD_036_m05",
          "q": "Find the intercepts of $f(x) = \\frac{x-1}{x+2}$.",
          "a": "$y$-intercept: $f(0) = \\frac{-1}{2} = -\\frac{1}{2}$. $x$-intercept: $x - 1 = 0 \\Rightarrow x = 1$."
        }
      ],
      "hard": [
        {
          "qid": "FD_036_h01",
          "q": "Find all intercepts of $f(x) = x^3 - 4x^2 + 4x$ and state the multiplicity of each $x$-intercept.",
          "a": "$f(x) = x(x-2)^2$. $y$-intercept: $f(0) = 0$. $x$-intercepts: $x = 0$ (multiplicity 1) and $x = 2$ (multiplicity 2, so the curve touches but doesn't cross)."
        },
        {
          "qid": "FD_036_h02",
          "q": "Find the intercepts of $f(x) = \\ln(x^2 + 1)$.",
          "a": "$y$-intercept: $f(0) = \\ln(1) = 0$. $x$-intercepts: $\\ln(x^2+1) = 0 \\Rightarrow x^2 + 1 = 1 \\Rightarrow x = 0$. Only intercept: $(0, 0)$."
        },
        {
          "qid": "FD_036_h03",
          "q": "Find the $y$-intercept and the $x$-intercepts on $[0, 2\\pi]$ of $f(x) = \\sin(x) + \\cos(x) - 1$.",
          "a": "$y$-intercept: $f(0) = 0 + 1 - 1 = 0$. For $x$-intercepts: $\\sin(x) + \\cos(x) = 1$. Using $R\\sin(x + \\alpha) = 1$ where $R = \\sqrt{2}$, $\\alpha = \\pi/4$: $\\sqrt{2}\\sin(x + \\pi/4) = 1 \\Rightarrow \\sin(x + \\pi/4) = \\frac{1}{\\sqrt{2}}$. So $x + \\pi/4 = \\pi/4$ or $3\\pi/4$. Thus $x = 0$ or $x = \\pi/2$."
        },
        {
          "qid": "FD_036_h04",
          "q": "Find all intercepts of $f(x) = \\frac{x^2 - 9}{x^2 - 4}$.",
          "a": "$y$-intercept: $f(0) = \\frac{-9}{-4} = \\frac{9}{4}$. $x$-intercepts: $x^2 - 9 = 0 \\Rightarrow x = \\pm 3$. Note: $x = \\pm 2$ are vertical asymptotes (excluded)."
        },
        {
          "qid": "FD_036_h05",
          "q": "Find all intercepts of $f(x) = e^x - x - 2$, giving exact values where possible.",
          "a": "$y$-intercept: $f(0) = 1 - 0 - 2 = -1$. $x$-intercepts: $e^x = x + 2$. At $x = 0$: $f(0) = -1 \\neq 0$. Check $f(\\ln 3) = 3 - \\ln 3 - 2 = 1 - \\ln 3 \\approx -0.1$, so root near $x \\approx 1.15$ (numerical). Also $f(-2) = e^{-2} + 0 - 2 < 0$, $f(-1) = e^{-1} - 1 < 0$... By inspection, no neat exact form — roots are approximately $x \\approx -1.84$ and $x \\approx 1.15$."
        }
      ]
    },
    {
      "pt_id": "FD_037",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Second Derivatives",
      "concept": "Locating Critical Points",
      "pt": "Finding locations of stationary and/or inflection points",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "substitution_error",
        "sign_error",
        "interpretation_mixup",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "FD_037_e01",
          "q": "Find the stationary point of $f(x) = x^2 - 4x + 7$.",
          "a": "$f'(x) = 2 x - 4 = 0 \\Rightarrow x = 2$. $f(2) = 3$. Stationary point at $(2, 3)$."
        },
        {
          "qid": "FD_037_e02",
          "q": "Find all stationary points of $f(x) = x^3 - 3x^2$.",
          "a": "$f'(x) = 3 x \\left(x - 2\\right) = 3 x \\left(x - 2\\right) = 0 \\Rightarrow x = 0$ or $x = 2$. Points: $(0, 0)$ and $(2, -4)$."
        },
        {
          "qid": "FD_037_e03",
          "q": "Find the inflection point of $f(x) = x^3 - 6x^2 + 12x$.",
          "a": "$f''(x) = 6 x - 12 = 0 \\Rightarrow x = 2$. $f(2) = 8$. Inflection point at $(2, 8)$."
        }
      ],
      "medium": [
        {
          "qid": "FD_037_m01",
          "q": "Find all stationary points of $f(x) = 2x^3 - 9x^2 + 12x - 4$.",
          "a": "$f'(x) = 6x^2 - 18x + 12 = 6(x-1)(x-2) = 0$, so $x = 1$ and $x = 2$. Points: $(1, 1)$ and $(2, 0)$."
        },
        {
          "qid": "FD_037_m02",
          "q": "Find the inflection point(s) of $f(x) = x^4 - 6x^2 + 8x$.",
          "a": "$f'(x) = 4x^3 - 12x + 8$, $f''(x) = 12x^2 - 12 = 12(x^2 - 1) = 0$ at $x = \\pm 1$. Points: $(1, 3)$ and $(-1, -13)$."
        },
        {
          "qid": "FD_037_m03",
          "q": "Find the stationary point of $f(x) = xe^{-x}$.",
          "a": "$f'(x) = \\left(1 - x\\right) e^{- x} = 0 \\Rightarrow 1 - x = 0 \\Rightarrow x = 1$. $f(1) = e^{-1}$. Stationary point at $(1, e^{-1})$."
        },
        {
          "qid": "FD_037_m04",
          "q": "Find all stationary points and inflection points of $f(x) = x^3 + 3x^2 - 9x + 5$.",
          "a": "$f'(x) = 3 x^{2} + 6 x - 9 = 3 \\left(x - 1\\right) \\left(x + 3\\right) = 0 \\Rightarrow x = -3$ or $x = 1$. Stationary points: $(-3, 32)$ and $(1, 0)$. $f''(x) = 6 x + 6 = 0 \\Rightarrow x = -1$. Inflection at $(-1, 16)$."
        },
        {
          "qid": "FD_037_m05",
          "q": "Find any stationary points of $f(x) = \\ln(x^2 + 4)$.",
          "a": "$f'(x) = \\frac{2 x}{x^{2} + 4} = 0 \\Rightarrow x = 0$. $f(0) = \\ln(4) = 2\\ln(2)$. Stationary point at $(0, 2\\ln 2)$."
        }
      ],
      "hard": [
        {
          "qid": "FD_037_h01",
          "q": "Find all stationary points and inflection points of $f(x) = x^4 - 8x^2 + 3$.",
          "a": "$f'(x) = 4 x \\left(x^{2} - 4\\right) = 4 x \\left(x^{2} - 4\\right) = 0 \\Rightarrow x = 0, \\pm 2$. Points: $(0, 3)$, $(2, -13)$, $(-2, -13)$. $f''(x) = 12 x^{2} - 16 = 0 \\Rightarrow x = \\pm\\frac{2 \\sqrt{3}}{3}$. Inflections at $\\left(\\pm\\frac{2 \\sqrt{3}}{3}, - \\frac{53}{9}\\right)$."
        },
        {
          "qid": "FD_037_h02",
          "q": "Find all stationary and inflection points of $f(x) = x^2 e^{-x}$.",
          "a": "$f'(x) = x \\left(2 - x\\right) e^{- x} = 0 \\Rightarrow x(2-x) = 0 \\Rightarrow x = 0$ or $x = 2$. Stationary points: $(0, 0)$ and $(2, 4e^{-2})$. $f''(x) = \\left(x^{2} - 4 x + 2\\right) e^{- x} = 0 \\Rightarrow x^2 - 4x + 2 = 0 \\Rightarrow x = 2 \\pm \\sqrt{2}$. Two inflection points."
        },
        {
          "qid": "FD_037_h03",
          "q": "Find the inflection points of $f(x) = \\sin(x) + x$ on $[0, 4\\pi]$.",
          "a": "$f''(x) = -\\sin(x) = 0 \\Rightarrow \\sin(x) = 0 \\Rightarrow x = 0, \\pi, 2\\pi, 3\\pi, 4\\pi$. Check concavity change: $f''$ changes sign at each, so inflection points at $x = \\pi, 2\\pi, 3\\pi$ (endpoints excluded). Points: $(\\pi, \\pi)$, $(2\\pi, 2\\pi)$, $(3\\pi, 3\\pi)$."
        },
        {
          "qid": "FD_037_h04",
          "q": "Find all stationary points of $f(x) = (x^2 - 1)^2$ and classify them.",
          "a": "$f'(x) = 4 x \\left(x^{2} - 1\\right) = 4x(x-1)(x+1) = 0 \\Rightarrow x = -1, 0, 1$. $f''(x) = 12 x^{2} - 4$. $f''(-1) = 8 > 0$ (local min, $y=0$). $f''(0) = -4 < 0$ (local max, $y=1$). $f''(1) = 8 > 0$ (local min, $y=0$)."
        },
        {
          "qid": "FD_037_h05",
          "q": "Find all stationary points of $f(x) = \\frac{x}{x^2+1}$.",
          "a": "$f'(x) = \\frac{1 - x^{2}}{x^{4} + 2 x^{2} + 1} = 0 \\Rightarrow 1 - x^2 = 0 \\Rightarrow x = \\pm 1$. $f(1) = \\frac{1}{2}$, $f(-1) = -\\frac{1}{2}$. Stationary points at $\\left(1, \\frac{1}{2}\\right)$ and $\\left(-1, -\\frac{1}{2}\\right)$."
        }
      ]
    },
    {
      "pt_id": "FD_038",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Second Derivatives",
      "concept": "Locating Critical Points",
      "pt": "Finding where maximal rate of change occurs by finding vertical inflection point",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "FD_038_e01",
          "q": "The number of items sold is $N(t) = -t^3 + 6t^2 + 15t$. Find the time when sales are growing fastest.",
          "a": "Rate of growth: $N'(t) = - 3 x^{2} + 12 x + 15$. Max rate when $N''(t) = 12 - 6 x = 0 \\Rightarrow t = 2$. $N'''(t) = -6 < 0$ confirms max. Greatest rate: $N'(2) = 27$ items per unit time."
        },
        {
          "qid": "FD_038_e02",
          "q": "A population is modelled by $P(t) = -t^3 + 9t^2 + 3$. At what time is the population growing most rapidly?",
          "a": "$P'(t) = 3 t \\left(6 - t\\right)$. $P''(t) = 18 - 6 t = 0 \\Rightarrow t = 3$. Max rate at $t = 3$."
        },
        {
          "qid": "FD_038_e03",
          "q": "Revenue is modelled by $R(t) = -2t^3 + 18t^2 + 10t$. Find the time of maximum revenue growth and the growth rate at that time.",
          "a": "$R'(t) = - 6 t^{2} + 36 t + 10$. $R''(t) = 36 - 12 t = 0 \\Rightarrow t = 3$. Maximum growth rate: $R'(3) = 64$."
        }
      ],
      "medium": [
        {
          "qid": "FD_038_m01",
          "q": "The number of bacteria in a culture is modelled by $N(t) = \\frac{1000}{1 + 9e^{-0.5t}}$. Find the time when the rate of growth is greatest.",
          "a": "The maximum rate of change occurs at the inflection point. Since this is a logistic curve, inflection occurs when $N = 500$. Solving: $500 = \\frac{1000}{1+9e^{-0.5t}} \\Rightarrow 9e^{-0.5t} = 1 \\Rightarrow t = \\frac{\\ln 9}{0.5} = 2\\ln 9 \\approx 4.39$"
        },
        {
          "qid": "FD_038_m02",
          "q": "Profit is modelled by $P(t) = -\\frac{1}{4}t^4 + 2t^3 - 3t^2 + 24t$. Find when profit is growing fastest.",
          "a": "$P'(t) = - t^{3} + 6 t^{2} - 6 t + 24$. $P''(t) = - 3 t^{2} + 12 t - 6 = 0$. Solving $- 3 t^{2} + 12 t - 6 = 0$: inflection points at $t = 2 - sqrt(2)$ and $t = sqrt(2) + 2$. $P'''(t) = 12 - 6 t$. $P'''(sqrt(2) + 2) = -6*sqrt(2) < 0$ so max rate at $t = sqrt(2) + 2$."
        },
        {
          "qid": "FD_038_m03",
          "q": "The spread of a rumour is modelled by $R(t) = \\frac{500}{1 + 24e^{-0.3t}}$. At what time is the rumour spreading fastest?",
          "a": "For a logistic model $\\frac{L}{1+Ae^{-kt}}$, the inflection (max rate) occurs when $R = \\frac{L}{2} = 250$. Solving: $250 = \\frac{500}{1+24e^{-0.3t}} \\Rightarrow 24e^{-0.3t} = 1 \\Rightarrow e^{-0.3t} = \\frac{1}{24} \\Rightarrow t = \\frac{\\ln 24}{0.3} \\approx 10.6$."
        },
        {
          "qid": "FD_038_m04",
          "q": "The velocity of fluid flow is $v(t) = 100t^2 e^{-t/2}$. Find the time when the velocity is increasing most rapidly.",
          "a": "We need the max of $v'(t)$, which occurs when $v''(t) = 0$. $v'(t) = 50 t \\left(4 - t\\right) e^{- \\frac{t}{2}}$. $v''(t) = 25 \\left(t^{2} - 8 t + 8\\right) e^{- \\frac{t}{2}} = 0$. Factor: $t^2 - 8t + 4 = 0$ gives $t = 4 \\pm 2\\sqrt{3}$. The maximum rate of increase occurs at $t = 4 - 2\\sqrt{3} \\approx 0.54$ (the earlier inflection where rate goes from increasing to decreasing)."
        },
        {
          "qid": "FD_038_m05",
          "q": "The concentration of a drug is $C(t) = t^3 e^{-t}$ mg/L. Find when the concentration is increasing most rapidly.",
          "a": "$C'(t) = t^{2} \\left(3 - t\\right) e^{- t}$. Max of $C'$ when $C''(t) = 0$. $C''(t) = t \\left(t^{2} - 6 t + 6\\right) e^{- t} = 0$. Since $e^{-t} > 0$ and $t > 0$: $t^2 - 6t + 6 = 0 \\Rightarrow t = 3 - \\sqrt{3} \\approx 1.27$ (taking the value where $C'''(t) < 0$)."
        }
      ],
      "hard": [
        {
          "qid": "FD_038_h01",
          "q": "The number of users of an app is $N(t) = \\frac{10000}{1 + 49e^{-0.4t}}$. Find: (a) the time of fastest growth, (b) the number of users at that time, (c) the rate of growth at that time.",
          "a": "(a) Inflection at $N = 5000$: $5000 = \\frac{10000}{1+49e^{-0.4t}} \\Rightarrow 49e^{-0.4t} = 1 \\Rightarrow t = \\frac{\\ln 49}{0.4} = \\frac{2\\ln 7}{0.4} = 5\\ln 7 \\approx 9.73$. (b) $N = 5000$ users. (c) $N'(t) = \\frac{10000 \\times 49 \\times 0.4 \\times e^{-0.4t}}{(1+49e^{-0.4t})^2}$. At inflection: $e^{-0.4t} = \\frac{1}{49}$, so $N'= \\frac{10000 \\times 0.4 \\times 1}{(1+1)^2} = \\frac{4000}{4} = 1000$ users per unit time."
        },
        {
          "qid": "FD_038_h02",
          "q": "The height of a tree (in metres) is modelled by $H(t) = \\frac{20}{1 + 3e^{-0.2t}}$. Show that the tree is growing fastest when $H = 10$ and find this rate.",
          "a": "Logistic inflection at $H = \\frac{L}{2} = 10$. Solving: $10(1+3e^{-0.2t}) = 20 \\Rightarrow 3e^{-0.2t} = 1 \\Rightarrow t = 5\\ln 3$. Rate: $H'(t) = \\frac{20 \\times 3 \\times 0.2 \\times e^{-0.2t}}{(1+3e^{-0.2t})^2}$. At $t = 5\\ln 3$: $e^{-0.2t} = \\frac{1}{3}$, so $H' = \\frac{20 \\times 0.2 \\times 1}{(1+1)^2} = \\frac{4}{4} = 1$ m per unit time."
        },
        {
          "qid": "FD_038_h03",
          "q": "The speed of a chemical reaction is $v(t) = 50te^{-t/4}$. Find the time at which the speed is increasing most rapidly.",
          "a": "$v'(t) = \\frac{25 \\left(4 - t\\right) e^{- \\frac{t}{4}}}{2}$. $v''(t) = \\frac{25 \\left(t - 8\\right) e^{- \\frac{t}{4}}}{8} = 0$. Since $e^{-t/4} > 0$: $t - 8 = 0$ but we need $v'' = 0$... Actually $v''(t) = \\frac{50e^{-t/4}}{16}(t - 16 + 2 \\cdot 4) = ...$. Properly: the inflection of $v$ needs $v'' = 0$. But we want max of $v$, not max rate of $v$. Actually, the question asks when $v$ increases fastest, i.e. max of $v'$, which is when $v'' = 0$. Solving: $t = 8$."
        },
        {
          "qid": "FD_038_h04",
          "q": "A disease spreads such that the number infected is $I(t) = 5000 - 4800e^{-0.1t} - 200e^{-t}$. Find when the disease is spreading fastest.",
          "a": "$I'(t) = 480e^{-0.1t} + 200e^{-t}$. $I''(t) = -48e^{-0.1t} - 200e^{-t} = 0 \\Rightarrow 48e^{-0.1t} = -200e^{-t}$. Since both terms of $I''$ are negative for $t > 0$, $I''(t) < 0$ always. So $I'$ is strictly decreasing, meaning the disease spreads fastest at $t = 0$ with rate $I'(0) = 480 + 200 = 680$ people per unit time."
        },
        {
          "qid": "FD_038_h05",
          "q": "A company's revenue is $R(t) = -\\frac{3}{4}t^4 + 10t^3 - 36t^2 + 48t$ (in thousands). Find all times at which the rate of revenue growth has a local maximum, and determine which gives the greatest growth rate.",
          "a": "$R'(t) = - 3 t^{3} + 30 t^{2} - 72 t + 48$. $R''(t) = - 9 t^{2} + 60 t - 72 = - 9 t^{2} + 60 t - 72 = 0$. Inflection points of $R$ at $t = 10/3 - 2*sqrt(7)/3$ and $t = 2*sqrt(7)/3 + 10/3$. $R'''(t) = 60 - 18 t$. At $t = 10/3 - 2*sqrt(7)/3$: $R''' = 12*sqrt(7)$ (> 0, local min of rate). At $t = 2*sqrt(7)/3 + 10/3$: $R''' = -12*sqrt(7)$ (< 0, local max of rate). Compare $R'$ values at the local maxima to find the greatest."
        }
      ]
    },
    {
      "pt_id": "FD_039",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Second Derivatives",
      "concept": "Sketching of Graphs",
      "pt": "Sketching graphs of function based on values of function, derivatives, second derivatives from calculations",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "substitution_error",
        "sign_error",
        "interpretation_mixup",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "FD_039_e01",
          "q": "For $f(x) = x^2 - 4x + 3$, find the intercepts, stationary point and its nature, and describe the shape of the graph.",
          "a": "$y$-intercept: $(0, 3)$. $x$-intercepts: $\\left(x - 3\\right) \\left(x - 1\\right) = 0$, so $x = 1$ and $x = 3$. $f'(x) = 2 x - 4 = 0 \\Rightarrow x = 2$. $f(2) = -1$. $f''(x) = 2 > 0$ (local min). Upward parabola with vertex at $(2, -1)$."
        },
        {
          "qid": "FD_039_e02",
          "q": "For $f(x) = x^3 - 3x$, find the intercepts, stationary points and their nature, and the inflection point.",
          "a": "$y$-intercept: $(0, 0)$. $x$-intercepts: $x(x^{2} - 3) = 0$, so $x = 0, \\pm\\sqrt{3}$. $f'(x) = 3 x^{2} - 3 = 0 \\Rightarrow x = -1, 1$. $f''(x) = 6 x$. $f''(-1) = -6 < 0$ (local max at $(-1, 2)$). $f''(1) = 6 > 0$ (local min at $(1, -2)$). Inflection at $x = 0$, point $(0, 0)$."
        },
        {
          "qid": "FD_039_e03",
          "q": "For $f(x) = -x^2 + 6x - 5$, find the intercepts, vertex (stationary point), and describe the graph.",
          "a": "$y$-intercept: $(0, -5)$. $x$-intercepts: $- \\left(x - 5\\right) \\left(x - 1\\right) = 0$, so $x = 1$ and $x = 5$. $f'(x) = 6 - 2 x = 0 \\Rightarrow x = 3$. $f(3) = 4$. $f''(x) = -2 < 0$ (local max). Downward parabola with vertex at $(3, 4)$."
        }
      ],
      "medium": [
        {
          "qid": "FD_039_m01",
          "q": "Sketch the graph of $f(x) = x^3 - 3x^2$ by finding all intercepts, stationary points (and their nature), and inflection points.",
          "a": "$x$-int: $x = 0, 3$. $y$-int: $0$. $f'(x) = 3x^2 - 6x = 3x(x-2) = 0$ at $x = 0$ (local max, $y = 0$) and $x = 2$ (local min, $y = -4$). $f''(x) = 6x - 6 = 0$ at $x = 1$ (inflection at $(1, -2)$). Graph rises to $(0,0)$, falls to $(2,-4)$, then rises."
        },
        {
          "qid": "FD_039_m02",
          "q": "Find all key features and sketch $f(x) = x^3 - 6x^2 + 9x$.",
          "a": "$y$-int: $(0, 0)$. $x$-int: $x \\left(x - 3\\right)^{2} = 0$, so $x = 0$ and $x = 3$ (double root — touches). $f'(x) = 3 x^{2} - 12 x + 9 = 3 \\left(x - 3\\right) \\left(x - 1\\right) = 0 \\Rightarrow x = 1, 3$. $f''(x) = 6 x - 12$. $f''(1) = -6 < 0$ (local max at $(1, 4)$). $f''(3) = 6 > 0$ (local min at $(3, 0)$). Inflection at $x = 2$, point $(2, 2)$."
        },
        {
          "qid": "FD_039_m03",
          "q": "Find all key features and sketch $f(x) = x^4 - 4x^3$.",
          "a": "$y$-int: $(0, 0)$. $x$-int: $x^3(x-4) = 0$, so $x = 0$ (triple root) and $x = 4$. $f'(x) = 4 x^{2} \\left(x - 3\\right) = 4 x^{2} \\left(x - 3\\right) = 0 \\Rightarrow x = 0, 3$. $f''(x) = 12 x \\left(x - 2\\right)$. $f''(0) = 0$ (inconclusive — $f'$ doesn't change sign, so inflection). $f''(3) = 36 > 0$ (local min at $(3, -27)$). Inflection: $12 x \\left(x - 2\\right) = 0 \\Rightarrow x = 0, 2$. As $x \\to \\pm\\infty$, $f \\to +\\infty$."
        },
        {
          "qid": "FD_039_m04",
          "q": "Find all key features and sketch $f(x) = xe^{-x}$ for $x \\geq 0$.",
          "a": "$y$-int: $(0, 0)$. $x$-int: $x = 0$. $f'(x) = \\left(1 - x\\right) e^{- x} = 0 \\Rightarrow x = 1$. $f(1) = e^{-1}$. $f''(x) = \\left(x - 2\\right) e^{- x}$. $f''(1) = -e^{-1} < 0$ (local max at $(1, e^{-1})$). Inflection: $x - 2 = 0 \\Rightarrow x = 2$, point $(2, 2e^{-2})$. As $x \\to \\infty$, $f \\to 0^+$."
        },
        {
          "qid": "FD_039_m05",
          "q": "Find all key features and sketch $f(x) = x^2 - 2x - 8$. Include intercepts, vertex, axis of symmetry, and concavity.",
          "a": "$y$-int: $(0, -8)$. $x$-int: $\\left(x - 4\\right) \\left(x + 2\\right) = 0$, so $x = -2, 4$. $f'(x) = 2 x - 2 = 0 \\Rightarrow x = 1$. Vertex: $(1, -9)$. Axis of symmetry: $x = 1$. $f''(x) = 2 > 0$, concave up everywhere. Upward parabola."
        }
      ],
      "hard": [
        {
          "qid": "FD_039_h01",
          "q": "Find all key features and sketch $f(x) = x^3 - 3x^2 - 9x + 27$.",
          "a": "$y$-int: $(0, 27)$. $x$-int: $\\left(x - 3\\right)^{2} \\left(x + 3\\right) = 0$, so $x = -3$ (double root) and $x = 3$. $f'(x) = 3 x^{2} - 6 x - 9 = 3 \\left(x - 3\\right) \\left(x + 1\\right) = 0 \\Rightarrow x = -1, 3$. $f''(x) = 6 x - 6$. $f''(-1) = -12$ (max at $(-1, 32)$). $f''(3) = 12$ (min at $(3, 0)$). Inflection at $x = 1$, $f(1) = 16$."
        },
        {
          "qid": "FD_039_h02",
          "q": "Find all key features and sketch $f(x) = \\frac{x^2 - 4}{x}$ for $x \\neq 0$. Include asymptotes.",
          "a": "Rewrite: $f(x) = x - \\frac{4}{x}$. No $y$-intercept (undefined at $x = 0$). Vertical asymptote: $x = 0$. Oblique asymptote: $y = x$. $x$-int: $x^2 - 4 = 0 \\Rightarrow x = \\pm 2$. $f'(x) = 1 + \\frac{4}{x^{2}} = 0 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2$. But $f(\\pm 2) = 0$, so stationary points are at the $x$-intercepts. $f''(x) = - \\frac{8}{x^{3}}$. $f''(2) = -1 > 0$ (local min). $f''(-2) = 1 < 0$ (local max). Odd function: symmetric about origin."
        },
        {
          "qid": "FD_039_h03",
          "q": "Find all key features and sketch $f(x) = x^2 e^{-x}$.",
          "a": "$y$-int: $(0, 0)$. $x$-int: $x = 0$ (double root). $f'(x) = x \\left(2 - x\\right) e^{- x} = 0 \\Rightarrow x(2-x) = 0$, so $x = 0, 2$. $f(2) = 4e^{-2}$. $f''(x) = \\left(x^{2} - 4 x + 2\\right) e^{- x}$. $f''(0) = 0$ (inconclusive — check: $f'$ goes from neg to $0$ to pos? No, $f'(x) = x(2-x)e^{-x}$: for small positive $x$, $f' > 0$ so $x=0$ is local min). $f''(2) = (4-8+2)e^{-2} = -2e^{-2} < 0$ (local max at $(2, 4e^{-2})$). Inflections at $x = 2 \\pm \\sqrt{2}$. As $x \\to \\infty$, $f \\to 0^+$."
        },
        {
          "qid": "FD_039_h04",
          "q": "Find all key features and sketch $f(x) = \\frac{\\ln x}{x}$ for $x > 0$.",
          "a": "Domain: $x > 0$. $x$-int: $\\ln x = 0 \\Rightarrow x = 1$. No $y$-int (not defined at $x = 0$). $f'(x) = \\frac{1 - \\ln{\\left(x \\right)}}{x^{2}} = 0 \\Rightarrow 1 - \\ln x = 0 \\Rightarrow x = e$. $f(e) = \\frac{1}{e}$. $f''(x) = \\frac{2 \\ln{\\left(x \\right)} - 3}{x^{3}}$. At $x = e$: numerator $= 2\\ln e - 3 = -1 < 0$ (local max at $(e, 1/e)$). As $x \\to 0^+$, $f \\to -\\infty$. As $x \\to \\infty$, $f \\to 0^+$. Inflection when $2\\ln x - 3 = 0$, i.e. $x = e^{3/2}$."
        },
        {
          "qid": "FD_039_h05",
          "q": "Find all key features and sketch $f(x) = x^4 - 8x^2 + 16$.",
          "a": "$f(x) = (x^2 - 4)^2$. $y$-int: $(0, 16)$. $x$-int: $(x^2-4)^2 = 0 \\Rightarrow x = \\pm 2$ (both double roots — touches axis). $f'(x) = 4 x \\left(x^{2} - 4\\right) = 4x(x-2)(x+2) = 0 \\Rightarrow x = 0, \\pm 2$. $f''(x) = 12 x^{2} - 16$. $f''(0) = -16 < 0$ (local max at $(0, 16)$). $f''(2) = 32 > 0$ (local min at $(2, 0)$). $f''(-2) = 32 > 0$ (local min at $(-2, 0)$). Even function, W-shape."
        }
      ]
    },
    {
      "pt_id": "FD_040",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Second Derivatives",
      "concept": "Sketching of Graphs",
      "pt": "Sketching graphs of function based on values of function, derivatives, second derivatives from given table",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "substitution_error",
        "sign_error",
        "interpretation_mixup",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "FD_040_e01",
          "q": "The following is known about $f(x)$:\n- $f(0) = 1$, $f(2) = 5$, $f(4) = 1$\n- $f'(x) > 0$ for $0 < x < 2$, $f'(x) < 0$ for $x > 2$, $f'(2) = 0$\nSketch a possible graph of $f(x)$ for $x \\geq 0$.",
          "a": "Graph starts at $(0, 1)$, increases to a maximum at $(2, 5)$, then decreases through $(4, 1)$. Smooth hill-shaped curve."
        },
        {
          "qid": "FD_040_e02",
          "q": "The following is known about $g(x)$:\n- $g(0) = -3$, $g(3) = 0$, $g(6) = 9$\n- $g'(x) > 0$ for all $x$\n- $g'(3) = 2$\nSketch a possible graph of $g(x)$.",
          "a": "Graph passes through $(0, -3)$, $(3, 0)$, $(6, 9)$ and is always increasing. The gradient at $x = 3$ is $2$. A smooth increasing curve."
        },
        {
          "qid": "FD_040_e03",
          "q": "The following is known about $h(x)$:\n- $h(-1) = 4$, $h(1) = 0$, $h(3) = 4$\n- $h'(x) < 0$ for $x < 1$, $h'(1) = 0$, $h'(x) > 0$ for $x > 1$\nSketch a possible graph and state the type of stationary point.",
          "a": "Graph decreases from $(-1, 4)$ to a minimum at $(1, 0)$, then increases to $(3, 4)$. The stationary point at $x = 1$ is a local minimum."
        }
      ],
      "medium": [
        {
          "qid": "FD_040_m01",
          "q": "The following information is known about $f(x)$:\n- $f(0) = 2$, $f(3) = -1$, $f(5) = 4$\n- $f'(x) < 0$ for $0 < x < 3$, $f'(x) > 0$ for $x > 3$, $f'(3) = 0$\n- $f''(x) < 0$ for $x < 1$, $f''(x) > 0$ for $x > 1$\nSketch a possible graph of $f(x)$ for $x \\geq 0$.",
          "a": "Starts at $(0, 2)$, decreasing and concave down until inflection near $x = 1$, continues decreasing but concave up, reaches minimum at $(3, -1)$, then increases through $(5, 4)$."
        },
        {
          "qid": "FD_040_m02",
          "q": "A function $f(x)$ has the following properties:\n| $x$ | $f(x)$ | $f'(x)$ | $f''(x)$ |\n|-----|--------|---------|----------|\n| 0   | 3      | 0       | $-2$     |\n| 2   | 1      | $-1$    | 0        |\n| 4   | 0      | 0       | 2        |\nAlso, $f'(x) < 0$ for $0 < x < 4$ and $f'(x) > 0$ for $x > 4$.\nSketch a possible graph.",
          "a": "Local max at $(0, 3)$ (since $f'(0) = 0$, $f''(0) < 0$). Decreasing and concave down until inflection at $x = 2$ where $f = 1$. Then decreasing and concave up to local min at $(4, 0)$ (since $f'(4) = 0$, $f''(4) > 0$). Then increasing."
        },
        {
          "qid": "FD_040_m03",
          "q": "The following sign diagrams apply to $f(x)$:\n- $f'(x)$: positive for $x < -1$, zero at $x = -1$, negative for $-1 < x < 2$, zero at $x = 2$, positive for $x > 2$\n- $f(-1) = 4$, $f(2) = -5$, $f(0) = 0$\nSketch a possible graph.",
          "a": "Increasing to local max at $(-1, 4)$, decreasing through $(0, 0)$ to local min at $(2, -5)$, then increasing. The graph crosses the $x$-axis at $(0, 0)$."
        },
        {
          "qid": "FD_040_m04",
          "q": "A function satisfies:\n- $f(0) = 0$, and as $x \\to \\infty$, $f(x) \\to 3$\n- $f'(x) > 0$ for all $x > 0$\n- $f''(x) > 0$ for $0 < x < 2$, $f''(x) < 0$ for $x > 2$\nSketch a possible graph for $x \\geq 0$.",
          "a": "Starts at origin, always increasing toward horizontal asymptote $y = 3$. Concave up for $0 < x < 2$ (rate of increase accelerating), inflection at $x = 2$, concave down for $x > 2$ (rate of increase decelerating). S-shaped curve approaching $y = 3$."
        },
        {
          "qid": "FD_040_m05",
          "q": "A function $f(x)$ has these properties:\n- $f(-2) = 0$, $f(0) = -4$, $f(2) = 0$\n- $f'(-2) = 0$, $f'(0) = 0$, $f'(2) = 0$\n- $f''(-2) > 0$, $f''(0) < 0$, $f''(2) > 0$\nSketch a possible graph of $f(x)$.",
          "a": "Local min at $(-2, 0)$ (touches $x$-axis). Increases to local max at $(0, -4)$... Wait — $f(0) = -4$ with $f''(0) < 0$ means local max at $(0, -4)$. Then decreases to local min at $(2, 0)$ (touches $x$-axis). W-shape entirely below the $x$-axis, touching it at $x = \\pm 2$."
        }
      ],
      "hard": [
        {
          "qid": "FD_040_h01",
          "q": "A function $f(x)$ has these properties:\n- Domain: $x > 0$\n- $f(1) = 0$, $f(e) = \\frac{1}{e}$\n- As $x \\to 0^+$, $f(x) \\to -\\infty$. As $x \\to \\infty$, $f(x) \\to 0^+$.\n- $f'(e) = 0$, $f'(x) > 0$ for $0 < x < e$, $f'(x) < 0$ for $x > e$\n- $f''(x)$ changes sign at $x = e^{3/2}$\nSketch a possible graph.",
          "a": "The function resembles $\\frac{\\ln x}{x}$. From $x \\to 0^+$ it rises from $-\\infty$, crosses the $x$-axis at $x = 1$, reaches a maximum at $(e, 1/e)$, then decreases toward $0$. Inflection at $x = e^{3/2}$ where concavity changes from down to up."
        },
        {
          "qid": "FD_040_h02",
          "q": "The following information is known about a continuous function $f(x)$:\n| Interval | $f'(x)$ | $f''(x)$ |\n|----------|---------|----------|\n| $x < -2$ | $+$ | $+$ |\n| $x = -2$ | $0$ | $0$ |\n| $-2 < x < 0$ | $-$ | $+$ |\n| $x = 0$ | $0$ | $+$ |\n| $0 < x < 3$ | $+$ | $+$ |\n| $x = 3$ | $+$ | $0$ |\n| $x > 3$ | $+$ | $-$ |\nAlso $f(-2) = 5$, $f(0) = 1$, $f(3) = 10$. Sketch a possible graph.",
          "a": "Increasing and concave up to $x = -2$ where there's a horizontal inflection at $(-2, 5)$. Then decreasing and concave up to local min at $(0, 1)$. Increasing and concave up from $0$ to inflection at $(3, 10)$. Then increasing but concave down for $x > 3$."
        },
        {
          "qid": "FD_040_h03",
          "q": "A function $f(x)$ satisfies:\n- Vertical asymptote at $x = 2$, horizontal asymptote $y = 1$\n- $f(0) = 0$, $f(4) = 2$\n- $f'(x) > 0$ for all $x \\neq 2$\n- $f''(x) > 0$ for $x < 2$, $f''(x) < 0$ for $x > 2$\nSketch a possible graph.",
          "a": "For $x < 2$: starts near $y = 1$ from the left, increasing and concave up, passes through $(0, 0)$, then $f \\to +\\infty$ as $x \\to 2^-$. For $x > 2$: $f$ comes from $-\\infty$ as $x \\to 2^+$, increasing and concave down, passes through $(4, 2)$, approaching $y = 1$ from above. Resembles $\\frac{x}{x-2} + $ adjustment."
        },
        {
          "qid": "FD_040_h04",
          "q": "A function $f(x)$ defined for $x \\geq 0$ has:\n| $x$ | $f(x)$ | $f'(x)$ | $f''(x)$ |\n|-----|--------|---------|----------|\n| 0   | 0      | 0       | 2        |\n| 2   | $4e^{-2}$ | 0  | $-2e^{-2}$ |\nAlso: $f'(x) > 0$ for $0 < x < 2$, $f'(x) < 0$ for $x > 2$, $f(x) \\to 0$ as $x \\to \\infty$.\nSketch the graph and identify the nature of each stationary point.",
          "a": "At $(0, 0)$: $f'(0) = 0$, $f''(0) = 2 > 0$, so local min. At $(2, 4e^{-2})$: $f'(2) = 0$, $f''(2) < 0$, so local max. Graph rises from min at origin to max at $(2, 4e^{-2} \\approx 0.54)$, then decreases toward $0$. This resembles $x^2 e^{-x}$."
        },
        {
          "qid": "FD_040_h05",
          "q": "A function $f(x)$ on $[0, 2\\pi]$ has:\n- $f(0) = 1$, $f(\\pi/2) = 2$, $f(\\pi) = 1$, $f(3\\pi/2) = 0$, $f(2\\pi) = 1$\n- $f'(0) > 0$, $f'(\\pi/2) = 0$, $f'(\\pi) < 0$, $f'(3\\pi/2) = 0$, $f'(2\\pi) > 0$\n- $f''(\\pi/2) < 0$, $f''(3\\pi/2) > 0$\nSketch the graph and describe its shape.",
          "a": "Local max at $(\\pi/2, 2)$ ($f' = 0$, $f'' < 0$). Local min at $(3\\pi/2, 0)$ ($f' = 0$, $f'' > 0$). Graph oscillates: rises from $(0, 1)$ to max $(\\pi/2, 2)$, falls through $(\\pi, 1)$ to min $(3\\pi/2, 0)$, rises to $(2\\pi, 1)$. This resembles $1 + \\sin(x)$ or $1 + \\cos(x - \\pi/2)$."
        }
      ]
    },
    {
      "pt_id": "FD_041",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Small Increments",
      "concept": "Basic Use of Small Increments Formula",
      "pt": "Comparing incremental estimate to true value and explaining limitation of linear approximation",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "interpretation_mixup",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "FD_041_e01",
          "q": "For $f(x) = x^2$, use the increments formula to estimate $f(3.1)$ and compare with the true value.",
          "a": "$f'(x) = 2x$. Estimate: $f(3.1) \\approx f(3) + f'(3)(0.1) = 9 + 6(0.1) = 9.6$. True: $3.1^2 = 9.610000000000001$. Error: $0.010000000000001563$. Underestimate because $f''(x) = 2 > 0$ (concave up)."
        },
        {
          "qid": "FD_041_e02",
          "q": "For $f(x) = x^3$, use the increments formula to estimate $f(2.05)$ and compare with the true value.",
          "a": "$f'(x) = 3x^2$. Estimate: $f(2.05) \\approx f(2) + f'(2)(0.05) = 8 + 12(0.05) = 8.6$. True: $2.05^3 = 8.615124999999997$. Underestimate since $f''(2) = 12 > 0$ (concave up)."
        },
        {
          "qid": "FD_041_e03",
          "q": "For $f(x) = \\frac{1}{x}$, use the increments formula to estimate $f(2.1)$ and compare with the true value.",
          "a": "$f'(x) = -\\frac{1}{x^2}$. Estimate: $f(2.1) \\approx f(2) + f'(2)(0.1) = 0.5 + (-0.25)(0.1) = 0.475$. True: $\\frac{1}{2.1} \\approx 0.4762$. The estimate is slightly less than the true value. This is an underestimate because $f''(x) = \\frac{2}{x^3} > 0$ (concave up), so the tangent line lies below the curve."
        }
      ],
      "medium": [
        {
          "qid": "FD_041_m01",
          "q": "For $f(x) = x^3$, use the increments formula to estimate $f(2.1)$ and compare with the true value. Explain any difference.",
          "a": "$f'(x) = 3x^2$. Estimate: $f(2.1) \\approx f(2) + 3(4)(0.1) = 8 + 1.2 = 9.2$. True value: $2.1^3 = 9.261$. The linear approximation underestimates because the function is concave up ($f'' > 0$), so the tangent line lies below the curve."
        },
        {
          "qid": "FD_041_m02",
          "q": "Use the increments formula to estimate $\\sqrt{26}$ starting from $\\sqrt{25}$. Compare with the true value and explain the direction of error.",
          "a": "$f(x) = \\sqrt{x}$, $f'(x) = \\frac{1}{2\\sqrt{x}}$. At $x = 25$: $f(25) = 5$, $f'(25) = \\frac{1}{10}$. Estimate: $\\sqrt{26} \\approx 5 + \\frac{1}{10}(1) = 5.1$. True: $\\sqrt{26} \\approx 5.0990$. Overestimate because $f''(x) = -\\frac{1}{4x^{3/2}} < 0$ (concave down), so the tangent line lies above the curve."
        },
        {
          "qid": "FD_041_m03",
          "q": "Use the increments formula to estimate $e^{0.1}$ and compare with the true value (to 4 d.p.).",
          "a": "$f(x) = e^x$, $f'(x) = e^x$. At $x = 0$: $f(0) = 1$, $f'(0) = 1$. Estimate: $e^{0.1} \\approx 1 + 1(0.1) = 1.1$. True: $e^{0.1} \\approx 1.1052$. Underestimate because $f''(x) = e^x > 0$ (concave up)."
        },
        {
          "qid": "FD_041_m04",
          "q": "Use the increments formula to estimate $\\sin(0.6)$ using the base point $x = \\frac{\\pi}{6}$ (since $\\frac{\\pi}{6} \\approx 0.5236$). Compare with the true value.",
          "a": "$f(x) = \\sin(x)$, $f'(x) = \\cos(x)$. At $x = \\pi/6$: $f(\\pi/6) = 0.5$, $f'(\\pi/6) = \\frac{\\sqrt{3}}{2} \\approx 0.8660$. $\\delta x = 0.6 - \\pi/6 \\approx 0.0764$. Estimate: $\\sin(0.6) \\approx 0.5 + 0.8660(0.0764) \\approx 0.5662$. True: $\\sin(0.6) \\approx 0.5646$. Slight overestimate since $f''(\\pi/6) = -\\sin(\\pi/6) = -0.5 < 0$ (concave down)."
        },
        {
          "qid": "FD_041_m05",
          "q": "Use the increments formula to estimate $\\ln(1.05)$ and compare with the true value. Explain the direction of error using concavity.",
          "a": "$f(x) = \\ln(x)$, $f'(x) = \\frac{1}{x}$. At $x = 1$: $f(1) = 0$, $f'(1) = 1$. Estimate: $\\ln(1.05) \\approx 0 + 1(0.05) = 0.05$. True: $\\ln(1.05) \\approx 0.04879$. Overestimate because $f''(x) = -\\frac{1}{x^2} < 0$ (concave down), so the tangent lies above the curve."
        }
      ],
      "hard": [
        {
          "qid": "FD_041_h01",
          "q": "Use the increments formula to estimate $\\sqrt[3]{8.3}$ and compare with the calculator value. Calculate the percentage error.",
          "a": "$f(x) = x^{1/3}$, $f'(x) = \\frac{1}{3}x^{-2/3}$. At $x = 8$: $f(8) = 2$, $f'(8) = \\frac{1}{3} \\cdot \\frac{1}{4} = \\frac{1}{12}$. Estimate: $\\sqrt[3]{8.3} \\approx 2 + \\frac{1}{12}(0.3) = 2.025$. True: $8.3^{1/3} \\approx 2.02485$. Error: $|2.025 - 2.02485| = 0.00015$. Percentage error: $\\frac{0.00015}{2.02485} \\times 100 \\approx 0.0074\\%$."
        },
        {
          "qid": "FD_041_h02",
          "q": "For $f(x) = e^{-x^2}$, use the increments formula to estimate $f(1.02)$ from $f(1)$. Compare with the true value and explain the error using $f''(1)$.",
          "a": "$f'(x) = -2xe^{-x^2}$. At $x = 1$: $f(1) = e^{-1} \\approx 0.36788$, $f'(1) = -2e^{-1} \\approx -0.73576$. Estimate: $f(1.02) \\approx 0.36788 + (-0.73576)(0.02) \\approx 0.35317$. True: $e^{-1.0404} \\approx 0.35345$. $f''(1) = (4 \\cdot 1 - 2)e^{-1} = 2e^{-1} > 0$ (concave up), so tangent lies below → underestimate."
        },
        {
          "qid": "FD_041_h03",
          "q": "Use the increments formula to estimate $\\sqrt{4.02}$ using $f(x) = \\sqrt{x}$ at $x = 4$. Then use a second-order correction $\\delta y \\approx f'(a)\\delta x + \\frac{1}{2}f''(a)(\\delta x)^2$ and compare both estimates with the true value.",
          "a": "$f'(x) = \\frac{1}{2\\sqrt{x}}$, $f''(x) = -\\frac{1}{4x^{3/2}}$. At $x = 4$: $f = 2$, $f' = 0.25$, $f'' = -\\frac{1}{32}$. Linear: $\\sqrt{4.02} \\approx 2 + 0.25(0.02) = 2.005$. Quadratic: $2.005 + \\frac{1}{2}(-\\frac{1}{32})(0.02)^2 = 2.005 - 0.00000625 \\approx 2.00499$. True: $\\sqrt{4.02} \\approx 2.00499$. The second-order correction is dramatically more accurate."
        },
        {
          "qid": "FD_041_h04",
          "q": "For $f(x) = x\\ln(x)$, estimate $f(e + 0.1)$ using the increments formula from $x = e$. Compare with the true value and calculate absolute and relative errors.",
          "a": "$f'(x) = \\ln(x) + 1$. At $x = e$: $f(e) = e \\cdot 1 = e \\approx 2.71828$, $f'(e) = 2$. Estimate: $f(e + 0.1) \\approx e + 2(0.1) = e + 0.2 \\approx 2.91828$. True: $(e+0.1)\\ln(e+0.1) \\approx 2.8183 \\times 1.03509 \\approx 2.91721$. Absolute error $\\approx 0.00107$. Relative error $\\approx 0.037\\%$."
        },
        {
          "qid": "FD_041_h05",
          "q": "A sphere has radius $r = 10$ cm, measured with error $\\delta r = \\pm 0.1$ cm. Use the increments formula to estimate the maximum error in the calculated volume, and express this as a percentage of the true volume.",
          "a": "$V = \\frac{4}{3}\\pi r^3$, $\\frac{dV}{dr} = 4\\pi r^2$. At $r = 10$: $\\frac{dV}{dr} = 400\\pi$. $\\delta V \\approx 400\\pi \\times 0.1 = 40\\pi \\approx 125.7$ cm³. True volume: $V = \\frac{4}{3}\\pi(1000) = \\frac{4000\\pi}{3} \\approx 4188.8$ cm³. Percentage error: $\\frac{40\\pi}{4000\\pi/3} \\times 100 = \\frac{40 \\times 3}{4000} \\times 100 = 3\\%$. Note: this equals $3 \\times \\frac{\\delta r}{r} \\times 100 = 3 \\times 1\\% = 3\\%$."
        }
      ]
    },
    {
      "pt_id": "FD_042",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Small Increments",
      "concept": "Basic Use of Small Increments Formula",
      "pt": "Using increments formula to approximate change",
      "testing": "$\\delta y \\approx \\frac{dy}{dx} \\cdot \\delta x$",
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
          "qid": "FD_042_e01",
          "q": "Use the increments formula to approximate the change in $y = x^2$ when $x$ changes from $4$ to $4.03$.",
          "a": "$\\frac{dy}{dx} = 2x$. At $x = 4$: $\\frac{dy}{dx} = 8$. $\\delta y \\approx 8 \\times 0.03 = 0.24$."
        },
        {
          "qid": "FD_042_e02",
          "q": "Use the increments formula to approximate the change in $y = 3x^2 + 2x$ when $x$ increases from $2$ to $2.1$.",
          "a": "$\\frac{dy}{dx} = 6 x + 2$. At $x = 2$: $\\frac{dy}{dx} = 14$. $\\delta y \\approx 14 \\times 0.1 = 1.4000000000000001$."
        },
        {
          "qid": "FD_042_e03",
          "q": "Use the increments formula to approximate the change in $y = x^3$ when $x$ changes from $3$ to $3.02$.",
          "a": "$\\frac{dy}{dx} = 3x^2$. At $x = 3$: $\\frac{dy}{dx} = 27$. $\\delta y \\approx 27 \\times 0.02 = 0.54$."
        }
      ],
      "medium": [
        {
          "qid": "FD_042_m01",
          "q": "Use the increments formula to approximate the change in the area of a circle when the radius increases from 5 cm to 5.02 cm.",
          "a": "$A = \\pi r^2$, $\\frac{dA}{dr} = 2\\pi r$. At $r = 5$: $\\frac{dA}{dr} = 10\\pi$. $\\delta A \\approx 10\\pi \\times 0.02 = 0.2\\pi \\approx 0.628$ cm²."
        },
        {
          "qid": "FD_042_m02",
          "q": "If $f(x) = \\sqrt{x}$, use the increments formula to approximate $\\sqrt{36.5}$.",
          "a": "$f'(x) = \\frac{1}{2\\sqrt{x}}$. At $x = 36$: $f(36) = 6$, $f'(36) = \\frac{1}{12}$. $f(36.5) \\approx 6 + \\frac{1}{12}(0.5) = 6.0417$"
        },
        {
          "qid": "FD_042_m03",
          "q": "Use the increments formula to approximate $e^{-0.02}$ starting from $x = 0$.",
          "a": "$f(x) = e^x$, $f'(x) = e^x$. At $x = 0$: $f(0) = 1$, $f'(0) = 1$. $e^{-0.02} \\approx 1 + 1 \\times (-0.02) = 0.98$. (True value: $e^{-0.02} \\approx 0.9802$)."
        },
        {
          "qid": "FD_042_m04",
          "q": "Use the increments formula to approximate $\\sin(31°)$. Use $\\sin(30°) = 0.5$ and note $\\delta x = 1° = \\frac{\\pi}{180}$ radians.",
          "a": "$f'(x) = \\cos(x)$. At $x = 30°$ ($= \\pi/6$): $\\cos(30°) = \\frac{\\sqrt{3}}{2} \\approx 0.8660$. $\\delta x = \\frac{\\pi}{180} \\approx 0.01745$. $\\sin(31°) \\approx 0.5 + 0.8660 \\times 0.01745 \\approx 0.5151$. (True: $\\sin(31°) \\approx 0.5150$)."
        },
        {
          "qid": "FD_042_m05",
          "q": "Use the increments formula to approximate $\\ln(2.05)$ starting from $\\ln(2)$.",
          "a": "$f'(x) = \\frac{1}{x}$. At $x = 2$: $f'(2) = 0.5$. $\\ln(2.05) \\approx \\ln(2) + 0.5(0.05) = 0.6931 + 0.025 = 0.7181$. (True: $\\ln(2.05) \\approx 0.7178$)."
        }
      ],
      "hard": [
        {
          "qid": "FD_042_h01",
          "q": "The side of a cube is measured as 10 cm with a possible error of $\\pm 0.05$ cm. Use the increments formula to estimate the maximum error in the calculated volume.",
          "a": "$V = x^3$, $\\frac{dV}{dx} = 3x^2$. At $x = 10$: $\\frac{dV}{dx} = 300$. $\\delta V \\approx 300 \\times 0.05 = 15$ cm³. True volume $= 1000$ cm³, so percentage error $\\approx 1.5\\%$."
        },
        {
          "qid": "FD_042_h02",
          "q": "Use the increments formula to approximate the change in $y = \\sqrt{x^2 + 5}$ when $x$ increases from $2$ to $2.04$.",
          "a": "$\\frac{dy}{dx} = \\frac{x}{\\sqrt{x^{2} + 5}}$. At $x = 2$: $\\frac{dy}{dx} = \\frac{2}{\\sqrt{9}} = \\frac{2}{3}$. $\\delta y \\approx \\frac{2}{3} \\times 0.04 = \\frac{0.08}{3} \\approx 0.0267$."
        },
        {
          "qid": "FD_042_h03",
          "q": "A balloon has radius $r = 15$ cm. Air is added causing the radius to increase by $0.2$ cm. Use the increments formula to estimate the change in surface area.",
          "a": "$S = 4\\pi r^2$, $\\frac{dS}{dr} = 8\\pi r$. At $r = 15$: $\\frac{dS}{dr} = 120\\pi$. $\\delta S \\approx 120\\pi \\times 0.2 = 24\\pi \\approx 75.4$ cm²."
        },
        {
          "qid": "FD_042_h04",
          "q": "The temperature of a cooling object is $T = 100e^{-0.1t}$ °C. Use the increments formula to estimate the change in temperature between $t = 5$ and $t = 5.5$.",
          "a": "$\\frac{dT}{dt} = -10e^{-0.1t}$. At $t = 5$: $\\frac{dT}{dt} = -10e^{-0.5} \\approx -6.065$. $\\delta T \\approx -6.065 \\times 0.5 \\approx -3.033$ °C. The temperature drops by approximately $3.03$ °C."
        },
        {
          "qid": "FD_042_h05",
          "q": "The period of a pendulum is $T = 2\\pi\\sqrt{\\frac{l}{g}}$. If the length $l$ is increased by $2\\%$, use the increments formula to estimate the percentage change in the period.",
          "a": "$T = 2\\pi\\sqrt{\\frac{l}{g}} = \\frac{2\\pi}{\\sqrt{g}} \\cdot l^{1/2}$. $\\frac{dT}{dl} = \\frac{2\\pi}{\\sqrt{g}} \\cdot \\frac{1}{2}l^{-1/2} = \\frac{T}{2l}$. So $\\frac{\\delta T}{T} \\approx \\frac{1}{2} \\cdot \\frac{\\delta l}{l} = \\frac{1}{2} \\times 2\\% = 1\\%$. The period increases by approximately $1\\%$."
        }
      ]
    },
    {
      "pt_id": "FD_043",
      "topic": "Further Differentiation and Applications",
      "subtopic": "Small Increments",
      "concept": "Basic Use of Small Increments Formula",
      "pt": "Using increments formula with a fixed or constrained quantity",
      "testing": "Rearrange with fixed quantity as constant, differentiate, apply δy ≈ (dy/dx)·δx",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "FD_043_e01",
          "q": "A rectangle has a fixed area of $60$ cm². When the width is $5$ cm, it increases by $0.2$ cm. Use the increments formula to estimate the change in length.",
          "a": "$A = lw = 60$, so $l = \\frac{60}{w}$. $\\frac{dl}{dw} = -\\frac{60}{w^2}$. At $w = 5$: $\\frac{dl}{dw} = -\\frac{60}{25} = -2.4$. $\\delta l \\approx -2.4 \\times 0.2 = -0.48$ cm. The length decreases by approximately $0.48$ cm."
        },
        {
          "qid": "FD_043_e02",
          "q": "A square has a fixed perimeter of $40$ cm, so the side length is $s = 10$ cm and the area is $A = s^2$. If the perimeter is now measured as $40.8$ cm ($s$ increases by $0.2$ cm), estimate the change in area using the increments formula.",
          "a": "$A = s^2$, $\\frac{dA}{ds} = 2s$. At $s = 10$: $\\frac{dA}{ds} = 20$. $\\delta A \\approx 20 \\times 0.2 = 4$ cm²."
        },
        {
          "qid": "FD_043_e03",
          "q": "A circle has a fixed area of $100\\pi$ cm², so $r = 10$ cm. If the radius increases by $0.1$ cm, use the increments formula to estimate the change in the circumference $C = 2\\pi r$.",
          "a": "$C = 2\\pi r$, $\\frac{dC}{dr} = 2\\pi$. $\\delta C \\approx 2\\pi \\times 0.1 = 0.2\\pi \\approx 0.628$ cm."
        }
      ],
      "medium": [
        {
          "qid": "FD_043_m01",
          "q": "A cylinder has a fixed volume of $200\\pi$ cm³. When the radius is $5$ cm, it increases by $0.1$ cm. Use the increments formula to estimate the change in height.",
          "a": "$V = \\pi r^2 h = 200\\pi$, so $h = \\frac{200}{r^2}$. $\\frac{dh}{dr} = -\\frac{400}{r^3}$. At $r = 5$: $h = 8$ cm, $\\frac{dh}{dr} = -\\frac{400}{125} = -3.2$. $\\delta h \\approx -3.2 \\times 0.1 = -0.32$ cm. The height decreases by approximately $0.32$ cm."
        },
        {
          "qid": "FD_043_m02",
          "q": "A closed cylinder has a fixed height of $12$ cm. Use the increments formula to estimate the change in total surface area when the radius increases from $4$ cm to $4.05$ cm.",
          "a": "$SA = 2\\pi r^2 + 2\\pi r(12) = 2\\pi r^2 + 24\\pi r$. $\\frac{dSA}{dr} = 4\\pi r + 24\\pi$. At $r = 4$: $\\frac{dSA}{dr} = 16\\pi + 24\\pi = 40\\pi$. $\\delta SA \\approx 40\\pi \\times 0.05 = 2\\pi \\approx 6.28$ cm²."
        },
        {
          "qid": "FD_043_m03",
          "q": "A cone has a fixed volume of $48\\pi$ cm³. When the radius is $6$ cm, it increases by $0.2$ cm. Estimate the change in height.",
          "a": "$V = \\frac{1}{3}\\pi r^2 h = 48\\pi$, so $h = \\frac{144}{r^2}$. $\\frac{dh}{dr} = -\\frac{288}{r^3}$. At $r = 6$: $h = 4$ cm, $\\frac{dh}{dr} = -\\frac{288}{216} = -\\frac{4}{3}$. $\\delta h \\approx -\\frac{4}{3} \\times 0.2 = -\\frac{4}{15} \\approx -0.267$ cm."
        },
        {
          "qid": "FD_043_m04",
          "q": "A sphere has a fixed volume of $\\frac{4000\\pi}{3}$ cm³ (so $r = 10$ cm). If the radius increases by $0.05$ cm, estimate the change in surface area.",
          "a": "$SA = 4\\pi r^2$, $\\frac{dSA}{dr} = 8\\pi r$. At $r = 10$: $\\frac{dSA}{dr} = 80\\pi$. $\\delta SA \\approx 80\\pi \\times 0.05 = 4\\pi \\approx 12.57$ cm²."
        },
        {
          "qid": "FD_043_m05",
          "q": "An open-top box has a square base of side $x$ cm and a fixed volume of $500$ cm³. When $x = 10$ cm ($h = 5$ cm), the side increases by $0.3$ cm. Estimate the change in height.",
          "a": "$V = x^2 h = 500$, so $h = \\frac{500}{x^2}$. $\\frac{dh}{dx} = -\\frac{1000}{x^3}$. At $x = 10$: $\\frac{dh}{dx} = -\\frac{1000}{1000} = -1$. $\\delta h \\approx -1 \\times 0.3 = -0.3$ cm. The height decreases by approximately $0.3$ cm."
        }
      ],
      "hard": [
        {
          "qid": "FD_043_h01",
          "q": "A closed cylinder has a fixed total surface area of $130\\pi$ cm². When $r = 5$ cm, the radius increases by $0.1$ cm. Estimate the change in volume.",
          "a": "$SA = 2\\pi r^2 + 2\\pi rh = 130\\pi$, so $h = \\frac{130 - 2r^2}{2r} = \\frac{65}{r} - r$. $V = \\pi r^2 h = \\pi r^2 \\left(\\frac{65}{r} - r\\right) = 65\\pi r - \\pi r^3$. $\\frac{dV}{dr} = 65\\pi - 3\\pi r^2$. At $r = 5$: $\\frac{dV}{dr} = 65\\pi - 75\\pi = -10\\pi$. $\\delta V \\approx -10\\pi \\times 0.1 = -\\pi \\approx -3.14$ cm³."
        },
        {
          "qid": "FD_043_h02",
          "q": "A cone has a fixed slant height of $13$ cm. When the radius is $5$ cm (so $h = 12$ cm), the radius increases by $0.2$ cm. Estimate the change in volume.",
          "a": "$l^2 = r^2 + h^2 = 169$, so $h = \\sqrt{169 - r^2}$. $V = \\frac{1}{3}\\pi r^2 \\sqrt{169 - r^2}$. $\\frac{dV}{dr} = \\frac{\\pi}{3}\\left[2r\\sqrt{169 - r^2} + r^2 \\cdot \\frac{-r}{\\sqrt{169 - r^2}}\\right] = \\frac{\\pi r}{3} \\cdot \\frac{2(169 - r^2) - r^2}{\\sqrt{169 - r^2}} = \\frac{\\pi r(338 - 3r^2)}{3\\sqrt{169 - r^2}}$. At $r = 5$: $\\frac{dV}{dr} = \\frac{5\\pi(338-75)}{3(12)} = \\frac{5\\pi(263)}{36} = \\frac{1315\\pi}{36}$. $\\delta V \\approx \\frac{1315\\pi}{36} \\times 0.2 \\approx 22.93$ cm³."
        },
        {
          "qid": "FD_043_h03",
          "q": "A gas obeys Boyle's Law: $PV = 800$ (constant temperature). When $V = 40$ cm³, the volume increases by $0.5$ cm³. Use the increments formula to estimate the change in pressure.",
          "a": "$P = \\frac{800}{V}$, $\\frac{dP}{dV} = -\\frac{800}{V^2}$. At $V = 40$: $P = 20$, $\\frac{dP}{dV} = -\\frac{800}{1600} = -0.5$. $\\delta P \\approx -0.5 \\times 0.5 = -0.25$ units. Also as a percentage: $\\frac{\\delta P}{P} \\approx \\frac{-0.25}{20} = -1.25\\%$."
        },
        {
          "qid": "FD_043_h04",
          "q": "A rectangle has a fixed perimeter of $40$ cm. When the width is $w = 8$ cm (so length $= 12$ cm), the width increases by $2\\%$. Use the increments formula to estimate the percentage change in area.",
          "a": "$P = 2w + 2l = 40$, so $l = 20 - w$. $A = w(20 - w) = 20w - w^2$. $\\frac{dA}{dw} = 20 - 2w$. At $w = 8$: $A = 96$, $\\frac{dA}{dw} = 4$. $\\delta w = 0.02 \\times 8 = 0.16$. $\\delta A \\approx 4 \\times 0.16 = 0.64$ cm². Percentage change: $\\frac{0.64}{96} \\times 100 = 0.\\overline{6}\\% \\approx 0.67\\%$."
        },
        {
          "qid": "FD_043_h05",
          "q": "A cylinder has a fixed volume $V$. Show that the curved surface area is $CSA = \\frac{2V}{r}$, and hence estimate the percentage change in curved surface area when the radius increases by $3\\%$.",
          "a": "$V = \\pi r^2 h$, so $h = \\frac{V}{\\pi r^2}$. Curved surface area: $CSA = 2\\pi r h = 2\\pi r \\cdot \\frac{V}{\\pi r^2} = \\frac{2V}{r}$. $\\frac{dCSA}{dr} = -\\frac{2V}{r^2}$. Now $\\frac{\\delta CSA}{CSA} \\approx \\frac{-\\frac{2V}{r^2} \\cdot \\delta r}{\\frac{2V}{r}} = -\\frac{\\delta r}{r}$. So a $3\\%$ increase in $r$ gives approximately a $3\\%$ decrease in curved surface area."
        }
      ]
    }
  ]
};
