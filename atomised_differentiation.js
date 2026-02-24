// ======================================================================
// ATOMISED PRACTICE — ATOMISED_DIFFERENTIATION
// Topics: Further Differentiation and Applications, The Logarithmic Function, Uncategorised
// 72 PTs, 492 questions (34 expanded, 38 basic)
// ======================================================================

var ATOMISED_DIFFERENTIATION = {
  questions: [
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


    // Modelling Continuous Exponential Growth and Decay > Determining decay constant k from given half-life using logarithms
    {
      pt_id: "FD_017",
      topic: "Further Differentiation and Applications",
      subtopic: "Exponential Growth and Decay",
      concept: "Modelling Continuous Exponential Growth and Decay",
      pt: "Determining decay constant k from given half-life using logarithms",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
        {
          qid: "FD_017_e01",
          q: "A substance decays according to $N(t) = N_0 e^{kt}$. If the half-life is $10$ years, find $k$.",
          a: "$\\frac{N_0}{2} = N_0 e^{10k} \\Rightarrow 10k = \\ln\\left(\\frac{1}{2}\\right) \\Rightarrow k = \\frac{-\\ln 2}{10} \\approx -0.0693$"
        },
        {
          qid: "FD_017_e02",
          q: "A radioactive element has a half-life of $5$ hours. If $N(t) = N_0 e^{kt}$, find $k$.",
          a: "$\\frac{N_0}{2} = N_0 e^{5k} \\Rightarrow k = \\frac{-\\ln 2}{5} \\approx -0.1386$"
        },
        {
          qid: "FD_017_e03",
          q: "A substance decays with half-life $20$ minutes. Given $N(t) = N_0 e^{kt}$, find $k$.",
          a: "$\\frac{N_0}{2} = N_0 e^{20k} \\Rightarrow k = \\frac{-\\ln 2}{20} \\approx -0.0347$"
        },
      ],
      medium: [
        {
          qid: "FD_017_m01",
          q: "A radioactive isotope has a half-life of 12 days. If it decays according to $N(t) = N_0 e^{kt}$, find $k$.",
          a: "$\\frac{N_0}{2} = N_0 e^{12k} \\Rightarrow k = \\frac{-\\ln 2}{12} \\approx -0.0578$ per day"
        },
        {
          qid: "FD_017_m02",
          q: "Radium-226 has a half-life of $1600$ years. Given $N(t) = N_0 e^{kt}$, find $k$ correct to 6 decimal places.",
          a: "$\\frac{N_0}{2} = N_0 e^{1600k} \\Rightarrow k = \\frac{-\\ln 2}{1600} \\approx -0.000433$"
        },
        {
          qid: "FD_017_m03",
          q: "Iodine-131 has a half-life of $8$ days. If $N(t) = N_0 e^{kt}$, determine the exact value of $k$.",
          a: "$\\frac{N_0}{2} = N_0 e^{8k} \\Rightarrow k = \\frac{-\\ln 2}{8}$"
        },
        {
          qid: "FD_017_m04",
          q: "Carbon-14 has a half-life of $5730$ years. If $N(t) = N_0 e^{kt}$, find $k$ to 6 significant figures.",
          a: "$k = \\frac{-\\ln 2}{5730} \\approx -0.000121$ per year"
        },
        {
          qid: "FD_017_m05",
          q: "A drug has a half-life of $2.5$ hours in the body. Using $C(t) = C_0 e^{kt}$ where $t$ is in minutes, find $k$.",
          a: "$2.5$ hours $= 150$ minutes. $\\frac{C_0}{2} = C_0 e^{150k} \\Rightarrow k = \\frac{-\\ln 2}{150} \\approx -0.00462$ per minute"
        },
      ],
      hard: [
        {
          qid: "FD_017_h01",
          q: "A radioactive sample decays to $25\\%$ of its original mass in $30$ days. Find the decay constant $k$ and the half-life.",
          a: "$0.25 N_0 = N_0 e^{30k} \\Rightarrow 30k = \\ln(0.25) = -2\\ln 2 \\Rightarrow k = \\frac{-2\\ln 2}{30} = \\frac{-\\ln 2}{15} \\approx -0.0462$. Half-life $= \\frac{\\ln 2}{0.0462} = 15$ days."
        },
        {
          qid: "FD_017_h02",
          q: "Only $10\\%$ of a substance remains after $100$ years. Find $k$ and the half-life.",
          a: "$0.1 = e^{100k} \\Rightarrow k = \\frac{\\ln(0.1)}{100} = \\frac{-\\ln 10}{100} \\approx -0.02303$. Half-life $= \\frac{\\ln 2}{0.02303} \\approx 30.1$ years."
        },
        {
          qid: "FD_017_h03",
          q: "A decaying quantity satisfies $N(2) = 800$ and $N(6) = 500$. Given $N(t) = N_0 e^{kt}$, find $k$ and hence the half-life.",
          a: "$\\frac{N(6)}{N(2)} = \\frac{500}{800} = e^{4k} \\Rightarrow k = \\frac{1}{4}\\ln\\left(\\frac{5}{8}\\right) \\approx -0.1178$. Half-life $= \\frac{\\ln 2}{0.1178} \\approx 5.88$ years."
        },
        {
          qid: "FD_017_h04",
          q: "A substance decays to $\\frac{1}{3}$ of its original amount in $15$ hours. Find $k$ and the half-life.",
          a: "$\\frac{N_0}{3} = N_0 e^{15k} \\Rightarrow k = \\frac{-\\ln 3}{15} \\approx -0.0732$. Half-life $= \\frac{\\ln 2}{0.0732} \\approx 9.46$ hours."
        },
        {
          qid: "FD_017_h05",
          q: "Given $N(t) = N_0 e^{-0.04t}$, find the half-life and the time for $90\\%$ of the substance to decay.",
          a: "Half-life: $t = \\frac{\\ln 2}{0.04} \\approx 17.33$. For $90\\%$ decay ($10\\%$ remaining): $0.1 = e^{-0.04t} \\Rightarrow t = \\frac{\\ln 10}{0.04} \\approx 57.56$."
        },
      ],
    },

    // Modelling Continuous Exponential Growth and Decay > Determining half-lives or other percentage of initial values
    {
      pt_id: "FD_018",
      topic: "Further Differentiation and Applications",
      subtopic: "Exponential Growth and Decay",
      concept: "Modelling Continuous Exponential Growth and Decay",
      pt: "Determining half-lives or other percentage of initial values",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
        {
          qid: "FD_018_e01",
          q: "A substance decays according to $N(t) = N_0 e^{-0.1t}$. Find the half-life.",
          a: "$\\frac{N_0}{2} = N_0 e^{-0.1t} \\Rightarrow t = \\frac{\\ln 2}{0.1} \\approx 6.93$ units"
        },
        {
          qid: "FD_018_e02",
          q: "Given $N(t) = 100 e^{-0.05t}$, find the half-life.",
          a: "$50 = 100 e^{-0.05t} \\Rightarrow -0.05t = \\ln(0.5) \\Rightarrow t = \\frac{\\ln 2}{0.05} \\approx 13.86$ units"
        },
        {
          qid: "FD_018_e03",
          q: "A population decreases according to $P(t) = P_0 e^{-0.2t}$. Find the half-life.",
          a: "$\\frac{P_0}{2} = P_0 e^{-0.2t} \\Rightarrow t = \\frac{\\ln 2}{0.2} \\approx 3.47$ units"
        },
      ],
      medium: [
        {
          qid: "FD_018_m01",
          q: "A radioactive substance decays according to $N(t) = N_0 e^{-0.02t}$. Find the half-life.",
          a: "$\\frac{N_0}{2} = N_0 e^{-0.02t} \\Rightarrow -0.02t = \\ln(0.5) \\Rightarrow t = \\frac{\\ln 2}{0.02} = 34.66$ units"
        },
        {
          qid: "FD_018_m02",
          q: "A substance decays as $N(t) = N_0 e^{-0.03t}$. Find the time for $75\\%$ of the original to remain.",
          a: "$0.75 N_0 = N_0 e^{-0.03t} \\Rightarrow -0.03t = \\ln(0.75) \\Rightarrow t = \\frac{-\\ln(0.75)}{0.03} \\approx 9.59$ units"
        },
        {
          qid: "FD_018_m03",
          q: "A population grows according to $P(t) = P_0 e^{0.06t}$. Find the doubling time.",
          a: "$2P_0 = P_0 e^{0.06t} \\Rightarrow 0.06t = \\ln 2 \\Rightarrow t = \\frac{\\ln 2}{0.06} \\approx 11.55$ units"
        },
        {
          qid: "FD_018_m04",
          q: "Given $M(t) = M_0 e^{-0.04t}$, find the time for only $30\\%$ of the substance to remain.",
          a: "$0.3 = e^{-0.04t} \\Rightarrow -0.04t = \\ln(0.3) \\Rightarrow t = \\frac{-\\ln(0.3)}{0.04} \\approx 30.10$ units"
        },
        {
          qid: "FD_018_m05",
          q: "A colony grows as $N(t) = N_0 e^{0.08t}$. Find the time for the population to triple.",
          a: "$3N_0 = N_0 e^{0.08t} \\Rightarrow 0.08t = \\ln 3 \\Rightarrow t = \\frac{\\ln 3}{0.08} \\approx 13.73$ units"
        },
      ],
      hard: [
        {
          qid: "FD_018_h01",
          q: "A substance decays as $N(t) = N_0 e^{-0.01t}$. How long until only $1\\%$ remains?",
          a: "$0.01 N_0 = N_0 e^{-0.01t} \\Rightarrow -0.01t = \\ln(0.01) \\Rightarrow t = \\frac{\\ln 100}{0.01} = \\frac{2\\ln 10}{0.01} \\approx 460.5$ units"
        },
        {
          qid: "FD_018_h02",
          q: "A substance has a half-life of $15$ years. How long until $80\\%$ has decayed?",
          a: "$k = \\frac{-\\ln 2}{15}$. Solve $0.2 = e^{kt}$: $t = \\frac{\\ln(0.2)}{k} = \\frac{15 \\ln 5}{\\ln 2} \\approx 34.83$ years."
        },
        {
          qid: "FD_018_h03",
          q: "A population grows as $P(t) = P_0 e^{0.05t}$. Find the time for the population to reach (i) $5$ times and (ii) $10$ times its initial size.",
          a: "(i) $5 = e^{0.05t} \\Rightarrow t = \\frac{\\ln 5}{0.05} \\approx 32.19$. (ii) $10 = e^{0.05t} \\Rightarrow t = \\frac{\\ln 10}{0.05} \\approx 46.05$ units."
        },
        {
          qid: "FD_018_h04",
          q: "Substance A decays as $N_A(t) = N_0 e^{-0.02t}$ and substance B has a half-life of $40$ years. Which decays faster? Justify your answer.",
          a: "Substance A: half-life $= \\frac{\\ln 2}{0.02} \\approx 34.66$ years. Substance B: half-life $= 40$ years. A has a shorter half-life, so A decays faster."
        },
        {
          qid: "FD_018_h05",
          q: "A substance has half-life $T$. Show that after $3T$ time units, $\\frac{1}{8}$ of the original amount remains. What percentage has decayed?",
          a: "After $3T$: $N = N_0 e^{k \\cdot 3T}$. Since $e^{kT} = \\frac{1}{2}$, we get $N = N_0 \\left(\\frac{1}{2}\\right)^3 = \\frac{N_0}{8}$. So $\\frac{7}{8} = 87.5\\%$ has decayed."
        },
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
        {
          qid: "FD_019_e01",
          q: "After $3$ years at a continuous growth rate of $5\\%$ p.a., an investment is worth $\\$2000$. Find the initial investment.",
          a: "$2000 = A_0 e^{0.05 \\times 3} \\Rightarrow A_0 = 2000 e^{-0.15} \\approx \\$1722$"
        },
        {
          qid: "FD_019_e02",
          q: "A radioactive sample has $500$ grams remaining after $4$ years. If $k = -0.1$, find the original mass.",
          a: "$500 = N_0 e^{-0.1 \\times 4} \\Rightarrow N_0 = 500 e^{0.4} \\approx 746$ grams"
        },
        {
          qid: "FD_019_e03",
          q: "A bacteria population reaches $1500$ after $2$ hours of continuous growth at rate $k = 0.1$. Find the initial population.",
          a: "$1500 = P_0 e^{0.1 \\times 2} \\Rightarrow P_0 = 1500 e^{-0.2} \\approx 1229$"
        },
      ],
      medium: [
        {
          qid: "FD_019_m01",
          q: "After 6 years, an investment is worth $\\$15,000$. If it grew at a continuous rate of 4% p.a., find the initial investment.",
          a: "$15000 = A_0 e^{0.04 \\times 6} \\Rightarrow A_0 = 15000 e^{-0.24} \\approx \\$11,799$"
        },
        {
          qid: "FD_019_m02",
          q: "After $8$ hours, $120$ mg of a drug remains in the bloodstream. Given $M(t) = M_0 e^{-0.03t}$, find $M_0$.",
          a: "$120 = M_0 e^{-0.03 \\times 8} \\Rightarrow M_0 = 120 e^{0.24} \\approx 152.5$ mg"
        },
        {
          qid: "FD_019_m03",
          q: "A culture grows to $800$ bacteria after $5$ hours with $k = 0.07$. Find the initial count.",
          a: "$800 = P_0 e^{0.07 \\times 5} \\Rightarrow P_0 = 800 e^{-0.35} \\approx 564$"
        },
        {
          qid: "FD_019_m04",
          q: "An investment is worth $\\$25{,}000$ after $12$ years at a continuous rate of $4.5\\%$ p.a. Find the initial investment.",
          a: "$25000 = A_0 e^{0.045 \\times 12} \\Rightarrow A_0 = 25000 e^{-0.54} \\approx \\$14{,}553$"
        },
        {
          qid: "FD_019_m05",
          q: "A sample has $200$ mg remaining after $15$ years with $k = -0.06$. Find the original mass.",
          a: "$200 = N_0 e^{-0.06 \\times 15} \\Rightarrow N_0 = 200 e^{0.9} \\approx 492$ mg"
        },
      ],
      hard: [
        {
          qid: "FD_019_h01",
          q: "A substance has a half-life of $10$ years. After $25$ years, $150$ g remains. Find the original mass.",
          a: "$k = \\frac{-\\ln 2}{10}$. $150 = N_0 e^{-\\frac{\\ln 2}{10} \\times 25} = N_0 \\cdot 2^{-2.5}$. $N_0 = 150 \\times 2^{2.5} = 150 \\times 4\\sqrt{2} \\approx 849$ g."
        },
        {
          qid: "FD_019_h02",
          q: "A bone sample contains $73\\%$ of the original Carbon-14. Given the half-life of C-14 is $5730$ years, estimate the age of the bone.",
          a: "$0.73 = e^{kt}$ where $k = \\frac{-\\ln 2}{5730}$. $t = \\frac{\\ln(0.73)}{k} = \\frac{-5730 \\ln(0.73)}{\\ln 2} \\approx 2602$ years."
        },
        {
          qid: "FD_019_h03",
          q: "A quantity satisfies $N(3) = 600$ and $N(7) = 350$. Given $N(t) = N_0 e^{kt}$, find $N_0$.",
          a: "$\\frac{350}{600} = e^{4k} \\Rightarrow k = \\frac{1}{4}\\ln\\left(\\frac{7}{12}\\right) \\approx -0.1335$. $N_0 = 600 e^{-3k} = 600 e^{0.4006} \\approx 896$."
        },
        {
          qid: "FD_019_h04",
          q: "A cooling object has temperature $T(t) = A + Be^{-0.1t}$. If $T(0) = 90°$C and the room temperature is $20°$C, find $A$, $B$, and $T(5)$.",
          a: "As $t \\to \\infty$, $T \\to A = 20$. At $t=0$: $20 + B = 90 \\Rightarrow B = 70$. $T(5) = 20 + 70e^{-0.5} \\approx 62.4°$C."
        },
        {
          qid: "FD_019_h05",
          q: "An investment earns $3.5\\%$ p.a. continuous interest. What minimum amount must be invested to have $\\$50{,}000$ after $20$ years?",
          a: "$50000 = A_0 e^{0.035 \\times 20} = A_0 e^{0.7} \\Rightarrow A_0 = 50000 e^{-0.7} \\approx \\$24{,}833$"
        },
      ],
    },

    // Modelling Continuous Exponential Growth and Decay > Determining parameters of exponential model from two data points
    {
      pt_id: "FD_020",
      topic: "Further Differentiation and Applications",
      subtopic: "Exponential Growth and Decay",
      concept: "Modelling Continuous Exponential Growth and Decay",
      pt: "Determining parameters of exponential model from two data points",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
        {
          qid: "FD_020_e01",
          q: "A population follows $P(t) = Ae^{kt}$ with $P(0) = 100$ and $P(3) = 200$. Find $A$ and $k$.",
          a: "$A = P(0) = 100$. $200 = 100e^{3k} \\Rightarrow e^{3k} = 2 \\Rightarrow k = \\frac{\\ln 2}{3} \\approx 0.2310$"
        },
        {
          qid: "FD_020_e02",
          q: "A substance follows $N(t) = Ae^{kt}$ with $N(0) = 500$ and $N(4) = 250$. Find $A$ and $k$.",
          a: "$A = 500$. $250 = 500e^{4k} \\Rightarrow e^{4k} = 0.5 \\Rightarrow k = \\frac{-\\ln 2}{4} \\approx -0.1733$"
        },
        {
          qid: "FD_020_e03",
          q: "Bacteria grow as $P(t) = Ae^{kt}$ with $P(0) = 50$ and $P(10) = 150$. Find $A$ and $k$.",
          a: "$A = 50$. $150 = 50e^{10k} \\Rightarrow e^{10k} = 3 \\Rightarrow k = \\frac{\\ln 3}{10} \\approx 0.1099$"
        },
      ],
      medium: [
        {
          qid: "FD_020_m01",
          q: "A population $P(t) = Ae^{kt}$ satisfies $P(0) = 200$ and $P(5) = 350$. Find $A$ and $k$.",
          a: "$A = 200$. $350 = 200e^{5k} \\Rightarrow k = \\frac{1}{5}\\ln\\left(\\frac{350}{200}\\right) = \\frac{\\ln(1.75)}{5} \\approx 0.1119$"
        },
        {
          qid: "FD_020_m02",
          q: "A quantity follows $N(t) = Ae^{kt}$. Given $N(2) = 400$ and $N(8) = 100$, find $A$ and $k$.",
          a: "$\\frac{100}{400} = e^{6k} \\Rightarrow k = \\frac{\\ln(0.25)}{6} = \\frac{-\\ln 4}{6} \\approx -0.2310$. $A = 400 e^{-2k} = 400 e^{\\frac{\\ln 4}{3}} \\approx 635$."
        },
        {
          qid: "FD_020_m03",
          q: "A colony satisfies $P(1) = 120$ and $P(4) = 300$ with $P(t) = Ae^{kt}$. Find $A$ and $k$.",
          a: "$\\frac{300}{120} = e^{3k} \\Rightarrow k = \\frac{\\ln(2.5)}{3} \\approx 0.3054$. $A = 120 e^{-k} \\approx 88.4$."
        },
        {
          qid: "FD_020_m04",
          q: "The mass of a substance follows $M(t) = Ae^{kt}$. Given $M(0) = 80$ and $M(5) = 50$, find $A$ and $k$.",
          a: "$A = 80$. $50 = 80e^{5k} \\Rightarrow k = \\frac{1}{5}\\ln\\left(\\frac{50}{80}\\right) = \\frac{1}{5}\\ln\\left(\\frac{5}{8}\\right) \\approx -0.0941$"
        },
        {
          qid: "FD_020_m05",
          q: "A population follows $P(t) = Ae^{kt}$ with $P(3) = 1000$ and $P(9) = 4000$. Find $k$ and $A$.",
          a: "$\\frac{4000}{1000} = e^{6k} \\Rightarrow k = \\frac{\\ln 4}{6} \\approx 0.2310$. $A = 1000 e^{-3k} = 1000 e^{-\\frac{\\ln 4}{2}} = \\frac{1000}{2} = 500$."
        },
      ],
      hard: [
        {
          qid: "FD_020_h01",
          q: "A population follows $P(t) = Ae^{kt}$. Given $P(4) = 300$ and $P(8) = 1200$, find $A$, $k$, and verify by finding $P(0)$.",
          a: "$\\frac{1200}{300} = e^{4k} \\Rightarrow k = \\frac{\\ln 4}{4} \\approx 0.3466$. $A = 300 e^{-4k} = 300 \\cdot \\frac{1}{4} = 75$. Check: $P(0) = 75$ ✓"
        },
        {
          qid: "FD_020_h02",
          q: "A substance follows $N(t) = Ae^{kt}$ with $N(3) = 450$ and $N(10) = 180$. Find $A$ and $k$.",
          a: "$\\frac{180}{450} = e^{7k} \\Rightarrow k = \\frac{1}{7}\\ln\\left(\\frac{2}{5}\\right) \\approx -0.1309$. $A = 450 e^{-3k} \\approx 666$."
        },
        {
          qid: "FD_020_h03",
          q: "Given $P(2) = 500$ and $P(6) = 2000$ with $P(t) = Ae^{kt}$, find $A$ and $k$. Hence predict $P(10)$.",
          a: "$\\frac{2000}{500} = e^{4k} \\Rightarrow k = \\frac{\\ln 4}{4} \\approx 0.3466$. $A = 500 e^{-2k} = 250$. $P(10) = 250 e^{10 \\times 0.3466} = 250 \\times 32 = 8000$."
        },
        {
          qid: "FD_020_h04",
          q: "A cooling object follows $T(t) = C + Ae^{kt}$. Given $T(0) = 80$, $T(5) = 45$, and the room is $20°$C, find $C$, $A$, $k$, and $T(10)$.",
          a: "$C = 20$. $T(0) = 20 + A = 80 \\Rightarrow A = 60$. $45 = 20 + 60e^{5k} \\Rightarrow e^{5k} = \\frac{25}{60} \\Rightarrow k = \\frac{1}{5}\\ln\\left(\\frac{5}{12}\\right) \\approx -0.1753$. $T(10) = 20 + 60e^{10k} \\approx 30.4°$C."
        },
        {
          qid: "FD_020_h05",
          q: "A population follows $P(t) = Ae^{kt}$ with $P(2) = 300$ and $P(5) = 600$. Find $k$ and the time when $P = 5000$.",
          a: "$k = \\frac{\\ln 2}{3} \\approx 0.2310$. $A = 300 e^{-\\frac{2\\ln 2}{3}} = 300 \\cdot 2^{-2/3} \\approx 189.0$. $5000 = 189.0 \\cdot e^{0.2310 t} \\Rightarrow t = \\frac{\\ln(26.46)}{0.2310} \\approx 14.2$ units."
        },
      ],
    },

    // Modelling Continuous Exponential Growth and Decay > Determining rate of growth or decay by using derivative of e function
    {
      pt_id: "FD_021",
      topic: "Further Differentiation and Applications",
      subtopic: "Exponential Growth and Decay",
      concept: "Modelling Continuous Exponential Growth and Decay",
      pt: "Determining rate of growth or decay by using derivative of e function",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
        {
          qid: "FD_021_e01",
          q: "Given $P(t) = 200e^{0.05t}$, find the rate of change at $t = 0$.",
          a: "$P\'(t) = 10e^{0.05t}$. $P\'(0) = 10$ per unit time."
        },
        {
          qid: "FD_021_e02",
          q: "Given $N(t) = 500e^{-0.1t}$, find the rate of decay at $t = 0$.",
          a: "$N\'(t) = -50e^{-0.1t}$. $N\'(0) = -50$ per unit time."
        },
        {
          qid: "FD_021_e03",
          q: "The mass of a substance is $M(t) = 100e^{-0.2t}$ grams. Find the rate of decay at $t = 3$.",
          a: "$M\'(t) = -20e^{-0.2t}$. $M\'(3) = -20e^{-0.6} \\approx -10.98$ grams per unit time."
        },
      ],
      medium: [
        {
          qid: "FD_021_m01",
          q: "The temperature of a cooling object is $T(t) = 25 + 75e^{-0.1t}$ °C. Find the rate of cooling at $t = 5$ minutes.",
          a: "$T\'(t) = -7.5e^{-0.1t}$. $T\'(5) = -7.5e^{-0.5} \\approx -4.55$ °C/min"
        },
        {
          qid: "FD_021_m02",
          q: "A population is modelled by $P(t) = 1000e^{0.03t}$. Find the rate of growth when $t = 10$.",
          a: "$P\'(t) = 30e^{0.03t}$. $P\'(10) = 30e^{0.3} \\approx 40.50$ per year."
        },
        {
          qid: "FD_021_m03",
          q: "The value of a car is $V(t) = 5000e^{-0.08t}$ dollars. Find the rate of depreciation at $t = 6$ years.",
          a: "$V\'(t) = -400e^{-0.08t}$. $V\'(6) = -400e^{-0.48} \\approx -\\$247.24$ per year."
        },
        {
          qid: "FD_021_m04",
          q: "Given $N(t) = 800e^{-0.04t}$, find the rate of decay at $t = 0$ and $t = 10$. Is the rate of decay increasing or decreasing?",
          a: "$N\'(t) = -32e^{-0.04t}$. $N\'(0) = -32$. $N\'(10) = -32e^{-0.4} \\approx -21.45$. The magnitude of decay decreases (rate slows down)."
        },
        {
          qid: "FD_021_m05",
          q: "A cooling object has $T(t) = 20 + 60e^{-0.15t}$. Find the time when the rate of cooling is $-3°$C/min.",
          a: "$T\'(t) = -9e^{-0.15t} = -3 \\Rightarrow e^{-0.15t} = \\frac{1}{3} \\Rightarrow t = \\frac{\\ln 3}{0.15} \\approx 7.32$ min."
        },
      ],
      hard: [
        {
          qid: "FD_021_h01",
          q: "Given $N(t) = 400e^{-0.05t}$, show that $N\'(t) = -0.05 N(t)$. Find the time when the rate of decay is half the initial rate.",
          a: "$N\'(t) = -20e^{-0.05t} = -0.05 \\times 400e^{-0.05t} = -0.05 N(t)$ ✓. Initial rate $= -20$. Half $= -10$: $-20e^{-0.05t} = -10 \\Rightarrow t = \\frac{\\ln 2}{0.05} \\approx 13.86$."
        },
        {
          qid: "FD_021_h02",
          q: "Given $P(t) = 600e^{0.04t}$, find (i) the average rate of change over $[0, 10]$ and (ii) the instantaneous rate at $t = 5$.",
          a: "(i) $\\frac{P(10) - P(0)}{10} = \\frac{600e^{0.4} - 600}{10} = 60(e^{0.4} - 1) \\approx 29.54$. (ii) $P\'(5) = 24e^{0.2} \\approx 29.30$."
        },
        {
          qid: "FD_021_h03",
          q: "The mass of a substance is $M(t) = 250e^{-0.06t}$ grams. Find $t$ when the rate of decay is $5$ grams per year.",
          a: "$M\'(t) = -15e^{-0.06t}$. Set $|M\'(t)| = 5$: $15e^{-0.06t} = 5 \\Rightarrow e^{-0.06t} = \\frac{1}{3} \\Rightarrow t = \\frac{\\ln 3}{0.06} \\approx 18.31$ years."
        },
        {
          qid: "FD_021_h04",
          q: "Temperature follows $T(t) = 15 + 40e^{-0.1t} + 30e^{-0.3t}$. Find the rate of cooling at $t = 2$.",
          a: "$T\'(t) = -4e^{-0.1t} - 9e^{-0.3t}$. $T\'(2) = -4e^{-0.2} - 9e^{-0.6} \\approx -3.276 - 4.940 = -8.22°$C/min."
        },
        {
          qid: "FD_021_h05",
          q: "A cooling body has $T(t) = 22 + 58e^{-0.12t}$. Show that $T\'(t) = -0.12(T - 22)$ and find $t$ when $T\'(t) = -2$.",
          a: "$T\'(t) = -6.96e^{-0.12t} = -0.12 \\times 58e^{-0.12t} = -0.12(T - 22)$ ✓. $-6.96e^{-0.12t} = -2 \\Rightarrow e^{-0.12t} = \\frac{2}{6.96} \\Rightarrow t = \\frac{-\\ln(2/6.96)}{0.12} \\approx 10.4$ min."
        },
      ],
    },

    // Modelling Continuous Exponential Growth and Decay > Determining the time when the value of the exponential model equals a 
    {
      pt_id: "FD_022",
      topic: "Further Differentiation and Applications",
      subtopic: "Exponential Growth and Decay",
      concept: "Modelling Continuous Exponential Growth and Decay",
      pt: "Determining the time when the value of the exponential model equals a given value",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
        {
          qid: "FD_022_e01",
          q: "Find $t$ when $N(t) = 500e^{-0.1t}$ equals $250$.",
          a: "$250 = 500e^{-0.1t} \\Rightarrow e^{-0.1t} = 0.5 \\Rightarrow t = \\frac{\\ln 2}{0.1} \\approx 6.93$"
        },
        {
          qid: "FD_022_e02",
          q: "Find $t$ when $P(t) = 200e^{0.05t}$ reaches $400$.",
          a: "$400 = 200e^{0.05t} \\Rightarrow e^{0.05t} = 2 \\Rightarrow t = \\frac{\\ln 2}{0.05} \\approx 13.86$"
        },
        {
          qid: "FD_022_e03",
          q: "A sample has mass $M(t) = 1000e^{-0.2t}$ grams. Find when $M = 500$ g.",
          a: "$500 = 1000e^{-0.2t} \\Rightarrow e^{-0.2t} = 0.5 \\Rightarrow t = \\frac{\\ln 2}{0.2} = 3.47$ units"
        },
      ],
      medium: [
        {
          qid: "FD_022_m01",
          q: "A substance decays according to $M(t) = 80e^{-0.05t}$ grams. Find when only 20 g remains.",
          a: "$20 = 80e^{-0.05t} \\Rightarrow e^{-0.05t} = 0.25 \\Rightarrow -0.05t = \\ln(0.25) \\Rightarrow t = \\frac{-\\ln(0.25)}{0.05} = \\frac{\\ln 4}{0.05} \\approx 27.7$ years"
        },
        {
          qid: "FD_022_m02",
          q: "An investment grows as $A(t) = 150e^{0.04t}$. Find when it reaches $\\$600$.",
          a: "$600 = 150e^{0.04t} \\Rightarrow e^{0.04t} = 4 \\Rightarrow t = \\frac{\\ln 4}{0.04} \\approx 34.66$ years"
        },
        {
          qid: "FD_022_m03",
          q: "Given $N(t) = 300e^{-0.03t}$, find when $N = 100$.",
          a: "$100 = 300e^{-0.03t} \\Rightarrow e^{-0.03t} = \\frac{1}{3} \\Rightarrow t = \\frac{\\ln 3}{0.03} \\approx 36.62$ units"
        },
        {
          qid: "FD_022_m04",
          q: "A drug concentration is $C(t) = 50e^{-0.12t}$ mg/L. Find when $C$ drops below $10$ mg/L.",
          a: "$10 = 50e^{-0.12t} \\Rightarrow e^{-0.12t} = 0.2 \\Rightarrow t = \\frac{\\ln 5}{0.12} \\approx 13.41$ hours"
        },
        {
          qid: "FD_022_m05",
          q: "A population follows $P(t) = 2000e^{0.06t}$. How long until it reaches $8000$?",
          a: "$8000 = 2000e^{0.06t} \\Rightarrow e^{0.06t} = 4 \\Rightarrow t = \\frac{\\ln 4}{0.06} \\approx 23.10$ units"
        },
      ],
      hard: [
        {
          qid: "FD_022_h01",
          q: "A cooling body has $T(t) = 20 + 60e^{-0.08t}$. Find when $T = 35°$C.",
          a: "$35 = 20 + 60e^{-0.08t} \\Rightarrow 60e^{-0.08t} = 15 \\Rightarrow e^{-0.08t} = 0.25 \\Rightarrow t = \\frac{\\ln 4}{0.08} \\approx 17.33$ min."
        },
        {
          qid: "FD_022_h02",
          q: "Drug absorption follows $C(t) = 100(1 - e^{-0.05t})$ mg/L. Find when $C = 80$.",
          a: "$80 = 100(1 - e^{-0.05t}) \\Rightarrow e^{-0.05t} = 0.2 \\Rightarrow t = \\frac{\\ln 5}{0.05} \\approx 32.19$ min."
        },
        {
          qid: "FD_022_h03",
          q: "Given $M(t) = 400e^{-0.04t}$, find the time it takes for $M$ to decrease from $300$ to $200$.",
          a: "$M = 300$: $t_1 = \\frac{-\\ln(0.75)}{0.04} \\approx 7.19$. $M = 200$: $t_2 = \\frac{\\ln 2}{0.04} \\approx 17.33$. Time $= t_2 - t_1 \\approx 10.14$ units."
        },
        {
          qid: "FD_022_h04",
          q: "Two populations grow as $P_1(t) = 500e^{0.03t}$ and $P_2(t) = 800e^{0.01t}$. Find when $P_1 = P_2$.",
          a: "$500e^{0.03t} = 800e^{0.01t} \\Rightarrow e^{0.02t} = \\frac{8}{5} \\Rightarrow t = \\frac{\\ln(1.6)}{0.02} \\approx 23.5$ units."
        },
        {
          qid: "FD_022_h05",
          q: "Given $N(t) = 1200e^{-0.06t}$, find the value of $N$ when the rate of decay is $36$ per year.",
          a: "$N\'(t) = -72e^{-0.06t}$. Set $|N\'(t)| = 36$: $72e^{-0.06t} = 36 \\Rightarrow e^{-0.06t} = 0.5 \\Rightarrow t = \\frac{\\ln 2}{0.06}$. $N = 1200 \\times 0.5 = 600$."
        },
      ],
    },

    // Modelling Continuous Exponential Growth and Decay > Determining the value of the exponential model as t becomes large
    {
      pt_id: "FD_023",
      topic: "Further Differentiation and Applications",
      subtopic: "Exponential Growth and Decay",
      concept: "Modelling Continuous Exponential Growth and Decay",
      pt: "Determining the value of the exponential model as t becomes large",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
        {
          qid: "FD_023_e01",
          q: "Find the value of $N(t) = 200e^{-0.1t}$ as $t \\to \\infty$.",
          a: "As $t \\to \\infty$, $e^{-0.1t} \\to 0$, so $N \\to 0$."
        },
        {
          qid: "FD_023_e02",
          q: "Find the limiting value of $T(t) = 15 + 85e^{-0.2t}$ as $t \\to \\infty$.",
          a: "As $t \\to \\infty$, $e^{-0.2t} \\to 0$, so $T \\to 15$."
        },
        {
          qid: "FD_023_e03",
          q: "Find the limiting value of $C(t) = 100(1 - e^{-0.5t})$ as $t \\to \\infty$.",
          a: "As $t \\to \\infty$, $e^{-0.5t} \\to 0$, so $C \\to 100$."
        },
      ],
      medium: [
        {
          qid: "FD_023_m01",
          q: "A drug concentration is modelled by $C(t) = 50(1 - e^{-0.3t})$ mg/L. What is the limiting concentration?",
          a: "As $t \\to \\infty$, $e^{-0.3t} \\to 0$, so $C \\to 50$ mg/L."
        },
        {
          qid: "FD_023_m02",
          q: "A cooling object has $T(t) = 22 + 48e^{-0.15t}$ °C. State the limiting temperature and explain its significance.",
          a: "As $t \\to \\infty$, $T \\to 22°$C. This represents the room temperature (ambient temperature)."
        },
        {
          qid: "FD_023_m03",
          q: "A learning curve is modelled by $L(t) = 80 - 80e^{-0.1t}$ (score out of 80). What is the maximum possible score according to this model?",
          a: "As $t \\to \\infty$, $e^{-0.1t} \\to 0$, so $L \\to 80$. The maximum possible score is $80$."
        },
        {
          qid: "FD_023_m04",
          q: "A tank fills according to $V(t) = 500(1 - e^{-0.04t})$ litres. Find the limiting volume and the percentage filled at $t = 20$.",
          a: "Limiting volume $= 500$ L. $V(20) = 500(1 - e^{-0.8}) \\approx 275.3$ L. Percentage $= \\frac{275.3}{500} \\times 100 \\approx 55.1\\%$."
        },
        {
          qid: "FD_023_m05",
          q: "Given $C(t) = 200(1 - e^{-0.2t})$, find what fraction of the limiting value has been reached at $t = 10$.",
          a: "Limiting value $= 200$. $C(10) = 200(1 - e^{-2}) \\approx 172.9$. Fraction $= 1 - e^{-2} \\approx 0.865$ or $86.5\\%$."
        },
      ],
      hard: [
        {
          qid: "FD_023_h01",
          q: "A population follows the logistic model $P(t) = \\frac{1000}{1 + 9e^{-0.2t}}$. Find the limiting population.",
          a: "As $t \\to \\infty$, $e^{-0.2t} \\to 0$, so $P \\to \\frac{1000}{1+0} = 1000$. The carrying capacity is $1000$."
        },
        {
          qid: "FD_023_h02",
          q: "A temperature follows $T(t) = 25 + 30e^{-0.1t} + 15e^{-0.3t}$. Find $T(0)$ and the limiting temperature.",
          a: "$T(0) = 25 + 30 + 15 = 70°$C. As $t \\to \\infty$, both exponentials $\\to 0$, so $T \\to 25°$C."
        },
        {
          qid: "FD_023_h03",
          q: "A model gives $N(t) = 400(1 - 0.6e^{-0.05t})$. Find $N(0)$, the limiting value, and explain whether $N$ is increasing or decreasing.",
          a: "$N(0) = 400(1 - 0.6) = 160$. As $t \\to \\infty$, $N \\to 400$. Since $N\'(t) = 12e^{-0.05t} > 0$, $N$ is always increasing."
        },
        {
          qid: "FD_023_h04",
          q: "Model A: $C_A(t) = 60(1 - e^{-0.1t})$. Model B: $C_B(t) = 80(1 - e^{-0.05t})$. Find each limiting value and which reaches $90\\%$ of its limit first.",
          a: "Limits: $C_A \\to 60$, $C_B \\to 80$. $90\\%$ of $C_A = 54$: $t_A = \\frac{\\ln 10}{0.1} \\approx 23.0$. $90\\%$ of $C_B = 72$: $t_B = \\frac{\\ln 10}{0.05} \\approx 46.1$. Model A reaches $90\\%$ first."
        },
        {
          qid: "FD_023_h05",
          q: "Given $V(t) = L(1 - e^{-kt})$ for $k > 0$ and $L > 0$, show algebraically that $V(t) < L$ for all finite $t > 0$ and $V \\to L$ as $t \\to \\infty$.",
          a: "Since $k > 0$ and $t > 0$, $e^{-kt} > 0$, so $1 - e^{-kt} < 1$, hence $V(t) = L(1 - e^{-kt}) < L$. As $t \\to \\infty$, $e^{-kt} \\to 0$, so $V \\to L(1-0) = L$."
        },
      ],
    },

    // Modelling Continuous Exponential Growth and Decay > Determining the value of the exponential model at a given time
    {
      pt_id: "FD_024",
      topic: "Further Differentiation and Applications",
      subtopic: "Exponential Growth and Decay",
      concept: "Modelling Continuous Exponential Growth and Decay",
      pt: "Determining the value of the exponential model at a given time",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
        {
          qid: "FD_024_e01",
          q: "Given $P(t) = 300e^{0.02t}$, find $P(5)$.",
          a: "$P(5) = 300e^{0.1} \\approx 331.5$"
        },
        {
          qid: "FD_024_e02",
          q: "A sample has mass $N(t) = 1000e^{-0.05t}$ grams. Find $N(10)$.",
          a: "$N(10) = 1000e^{-0.5} \\approx 606.5$ grams"
        },
        {
          qid: "FD_024_e03",
          q: "Given $M(t) = 200e^{-0.1t}$, find $M(3)$.",
          a: "$M(3) = 200e^{-0.3} \\approx 148.2$"
        },
      ],
      medium: [
        {
          qid: "FD_024_m01",
          q: "A population is modelled by $P(t) = 500e^{0.03t}$ where $t$ is in years. Find the population after 10 years.",
          a: "$P(10) = 500e^{0.3} = 500 \\times 1.3499 \\approx 675$"
        },
        {
          qid: "FD_024_m02",
          q: "A cooling body has $T(t) = 20 + 70e^{-0.1t}$ °C. Find the temperature at $t = 8$ minutes.",
          a: "$T(8) = 20 + 70e^{-0.8} \\approx 20 + 31.45 = 51.5°$C"
        },
        {
          qid: "FD_024_m03",
          q: "A drug concentration follows $C(t) = 50(1 - e^{-0.2t})$ mg/L. Find $C(5)$.",
          a: "$C(5) = 50(1 - e^{-1}) \\approx 50(1 - 0.3679) = 31.6$ mg/L"
        },
        {
          qid: "FD_024_m04",
          q: "An investment earns $4.5\\%$ p.a. continuous interest: $A(t) = 10000e^{0.045t}$. Find the value after $15$ years.",
          a: "$A(15) = 10000e^{0.675} \\approx \\$19{,}643$"
        },
        {
          qid: "FD_024_m05",
          q: "A substance decays as $M(t) = 750e^{-0.07t}$ grams. Find the mass remaining after $12$ years.",
          a: "$M(12) = 750e^{-0.84} \\approx 750 \\times 0.4317 = 323.8$ grams"
        },
      ],
      hard: [
        {
          qid: "FD_024_h01",
          q: "A cooling object has $T(t) = 25 + 55e^{-0.12t}$. Find $T(10)$ and by how many degrees the object has cooled from $t = 0$.",
          a: "$T(0) = 80$. $T(10) = 25 + 55e^{-1.2} \\approx 41.6°$C. Cooled by $80 - 41.6 = 38.4°$C."
        },
        {
          qid: "FD_024_h02",
          q: "Colony A: $P_1(t) = 500e^{0.04t}$. Colony B: $P_2(t) = 300e^{0.07t}$. Which is larger at $t = 20$?",
          a: "$P_1(20) = 500e^{0.8} \\approx 1114$. $P_2(20) = 300e^{1.4} \\approx 1216$. Colony B is larger at $t = 20$."
        },
        {
          qid: "FD_024_h03",
          q: "A population follows $P(t) = \\frac{2000}{1 + 4e^{-0.3t}}$. Find $P(0)$, $P(5)$, and $P(\\infty)$.",
          a: "$P(0) = \\frac{2000}{1+4} = 400$. $P(5) = \\frac{2000}{1+4e^{-1.5}} \\approx \\frac{2000}{1.893} \\approx 1057$. $P(\\infty) = 2000$."
        },
        {
          qid: "FD_024_h04",
          q: "Given $N(t) = 800e^{-0.06t}$, find the percentage of the original remaining at $t = 5$, $t = 10$, and $t = 20$.",
          a: "$t=5$: $e^{-0.3} \\approx 74.1\\%$. $t=10$: $e^{-0.6} \\approx 54.9\\%$. $t=20$: $e^{-1.2} \\approx 30.1\\%$."
        },
        {
          qid: "FD_024_h05",
          q: "A car\'s value is $V(t) = 15000e^{-0.08t}$. Find $V(3)$, $V(7)$, and the loss in value between $t = 3$ and $t = 7$.",
          a: "$V(3) = 15000e^{-0.24} \\approx \\$11{,}813$. $V(7) = 15000e^{-0.56} \\approx \\$8{,}569$. Loss $\\approx \\$3{,}244$."
        },
      ],
    },

    // Modelling Continuous Exponential Growth and Decay > Find the derivative (or rate of change) at a given population/value of
    {
      pt_id: "FD_025",
      topic: "Further Differentiation and Applications",
      subtopic: "Exponential Growth and Decay",
      concept: "Modelling Continuous Exponential Growth and Decay",
      pt: "Find the derivative (or rate of change) at a given population/value of the function",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
        {
          qid: "FD_025_e01",
          q: "A population satisfies $\\frac{dP}{dt} = 0.05P$. Find the rate of change when $P = 200$.",
          a: "$\\frac{dP}{dt} = 0.05 \\times 200 = 10$ per unit time."
        },
        {
          qid: "FD_025_e02",
          q: "A substance decays with $\\frac{dN}{dt} = -0.1N$. Find the rate when $N = 300$.",
          a: "$\\frac{dN}{dt} = -0.1 \\times 300 = -30$ per unit time."
        },
        {
          qid: "FD_025_e03",
          q: "The mass decreases according to $\\frac{dM}{dt} = -0.02M$. Find the rate when $M = 500$ g.",
          a: "$\\frac{dM}{dt} = -0.02 \\times 500 = -10$ g per unit time."
        },
      ],
      medium: [
        {
          qid: "FD_025_m01",
          q: "Given $P(t) = 1000e^{0.02t}$ and $\\frac{dP}{dt} = 0.02P$, find the rate of change when $P = 1500$.",
          a: "$\\frac{dP}{dt} = 0.02 \\times 1500 = 30$ per unit time."
        },
        {
          qid: "FD_025_m02",
          q: "Given $P(t) = 1000e^{0.03t}$, find the rate of change when $P = 2500$.",
          a: "$\\frac{dP}{dt} = 0.03P = 0.03 \\times 2500 = 75$ per unit time."
        },
        {
          qid: "FD_025_m03",
          q: "A cooling object follows $T(t) = 22 + 58e^{-0.1t}$. Show $T\'(t) = -0.1(T - 22)$ and find the rate of cooling when $T = 50°$C.",
          a: "$T\'(t) = -5.8e^{-0.1t} = -0.1 \\times 58e^{-0.1t} = -0.1(T-22)$ ✓. When $T=50$: $T\' = -0.1(28) = -2.8°$C/min."
        },
        {
          qid: "FD_025_m04",
          q: "A substance decays with $\\frac{dN}{dt} = -0.06N$. Find $N$ when the rate of decay is $12$ per unit time.",
          a: "$-0.06N = -12 \\Rightarrow N = \\frac{12}{0.06} = 200$."
        },
        {
          qid: "FD_025_m05",
          q: "Given $P(t) = 400e^{0.04t}$, find $P\'(10)$ and express the rate as a function of $P$.",
          a: "$P\'(t) = 16e^{0.04t}$. $P\'(10) = 16e^{0.4} \\approx 23.87$. Since $P = 400e^{0.04t}$, $P\'(t) = 0.04 \\times P$."
        },
      ],
      hard: [
        {
          qid: "FD_025_h01",
          q: "A population satisfies $\\frac{dP}{dt} = kP$ with $P(0) = 500$ and $P(3) = 650$. Find $k$ and the rate when $P = 1000$.",
          a: "$k = \\frac{1}{3}\\ln\\left(\\frac{650}{500}\\right) = \\frac{\\ln(1.3)}{3} \\approx 0.0875$. Rate when $P=1000$: $0.0875 \\times 1000 \\approx 87.5$."
        },
        {
          qid: "FD_025_h02",
          q: "Given $N(t) = 800e^{-0.05t}$, find (i) the rate of decay when $N = 400$ and (ii) the time when $N = 400$.",
          a: "(i) $\\frac{dN}{dt} = -0.05 \\times 400 = -20$. (ii) $400 = 800e^{-0.05t} \\Rightarrow t = \\frac{\\ln 2}{0.05} \\approx 13.86$ units."
        },
        {
          qid: "FD_025_h03",
          q: "Newton\'s cooling gives $T\'(t) = -0.08(T - 15)$. Find the rate of cooling when $T = 40°$C and interpret it.",
          a: "$T\' = -0.08(40 - 15) = -0.08 \\times 25 = -2°$C/min. The object is cooling at $2°$C per minute."
        },
        {
          qid: "FD_025_h04",
          q: "A population satisfies $\\frac{dP}{dt} = 0.04P$. The growth rate increases from $20$ to $40$ per year. Find the corresponding population values.",
          a: "When rate $= 20$: $P = \\frac{20}{0.04} = 500$. When rate $= 40$: $P = \\frac{40}{0.04} = 1000$. Population doubled as rate doubled."
        },
        {
          qid: "FD_025_h05",
          q: "A drug satisfies $C\'(t) = -0.15C$ with initial concentration $50$ mg/L. The therapeutic range is $10$–$50$ mg/L. Find the rate of elimination at each boundary and how long the drug stays therapeutic.",
          a: "At $C=50$: rate $= -7.5$ mg/L/hr. At $C=10$: rate $= -1.5$ mg/L/hr. Time: $10 = 50e^{-0.15t} \\Rightarrow t = \\frac{\\ln 5}{0.15} \\approx 10.73$ hours."
        },
      ],
    },

    // Modelling Continuous Exponential Growth and Decay > Identifying or determining k (the percentage rate of growth or decay)
    {
      pt_id: "FD_026",
      topic: "Further Differentiation and Applications",
      subtopic: "Exponential Growth and Decay",
      concept: "Modelling Continuous Exponential Growth and Decay",
      pt: "Identifying or determining k (the percentage rate of growth or decay)",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
        {
          qid: "FD_026_e01",
          q: "Given $P(t) = 200e^{0.03t}$, state the value of $k$ and whether the model represents growth or decay.",
          a: "$k = 0.03 > 0$, so the model represents continuous growth at $3\\%$ per unit time."
        },
        {
          qid: "FD_026_e02",
          q: "Given $N(t) = 500e^{-0.08t}$, identify $k$ and state whether this is growth or decay.",
          a: "$k = -0.08 < 0$, so this represents continuous decay at $8\\%$ per unit time."
        },
        {
          qid: "FD_026_e03",
          q: "A quantity doubles every $10$ years. Find the continuous growth rate $k$.",
          a: "$2 = e^{10k} \\Rightarrow k = \\frac{\\ln 2}{10} \\approx 0.0693$ or about $6.93\\%$ per year."
        },
      ],
      medium: [
        {
          qid: "FD_026_m01",
          q: "A quantity doubles every 8 years following $A(t) = A_0 e^{kt}$. Find $k$.",
          a: "$2A_0 = A_0 e^{8k} \\Rightarrow \\ln 2 = 8k \\Rightarrow k = \\frac{\\ln 2}{8} \\approx 0.0866$"
        },
        {
          qid: "FD_026_m02",
          q: "A population triples every $15$ years. Find $k$.",
          a: "$3 = e^{15k} \\Rightarrow k = \\frac{\\ln 3}{15} \\approx 0.0732$"
        },
        {
          qid: "FD_026_m03",
          q: "A substance loses $25\\%$ of its mass every $5$ years. Find $k$.",
          a: "$0.75 = e^{5k} \\Rightarrow k = \\frac{\\ln(0.75)}{5} \\approx -0.0575$"
        },
        {
          qid: "FD_026_m04",
          q: "A population grows from $1200$ to $1600$ in $4$ years. Given $P(t) = 1200e^{kt}$, find $k$.",
          a: "$1600 = 1200e^{4k} \\Rightarrow e^{4k} = \\frac{4}{3} \\Rightarrow k = \\frac{1}{4}\\ln\\left(\\frac{4}{3}\\right) \\approx 0.0719$"
        },
        {
          qid: "FD_026_m05",
          q: "A car depreciates such that $85\\%$ of its value remains after each year. Find the continuous rate $k$.",
          a: "$e^k = 0.85 \\Rightarrow k = \\ln(0.85) \\approx -0.1625$"
        },
      ],
      hard: [
        {
          qid: "FD_026_h01",
          q: "An investment grows at $5\\%$ per annum compounded annually. Find the equivalent continuous growth rate.",
          a: "$e^k = 1.05 \\Rightarrow k = \\ln(1.05) \\approx 0.04879$. The continuous rate is about $4.88\\%$."
        },
        {
          qid: "FD_026_h02",
          q: "Given $N(2) = 750$ and $N(5) = 500$, find $k$ for the model $N(t) = Ae^{kt}$.",
          a: "$\\frac{500}{750} = e^{3k} \\Rightarrow k = \\frac{1}{3}\\ln\\left(\\frac{2}{3}\\right) \\approx -0.1352$"
        },
        {
          qid: "FD_026_h03",
          q: "A substance has $k = -0.07$. What percentage of the substance is lost each year?",
          a: "After 1 year: $e^{-0.07} \\approx 0.9324$. Percentage lost $= (1 - 0.9324) \\times 100 \\approx 6.76\\%$ per year."
        },
        {
          qid: "FD_026_h04",
          q: "Population A: $P_1 = 400e^{0.05t}$. Population B: $P_2 = 600e^{0.02t}$. Find when they are equal.",
          a: "$400e^{0.05t} = 600e^{0.02t} \\Rightarrow e^{0.03t} = \\frac{3}{2} \\Rightarrow t = \\frac{\\ln(1.5)}{0.03} \\approx 13.52$ units."
        },
        {
          qid: "FD_026_h05",
          q: "The \'Rule of 70\' states that doubling time $\\approx \\frac{70}{r}$ where $r$ is the percentage rate. Derive this from $t_2 = \\frac{\\ln 2}{k}$ where $k = r/100$.",
          a: "$t_2 = \\frac{\\ln 2}{k} = \\frac{\\ln 2}{r/100} = \\frac{100 \\ln 2}{r} \\approx \\frac{69.3}{r} \\approx \\frac{70}{r}$."
        },
      ],
    },

    // Modelling Continuous Exponential Growth and Decay > Interpreting derivative's units or interpreting derivative value of a 
    {
      pt_id: "FD_027",
      topic: "Further Differentiation and Applications",
      subtopic: "Exponential Growth and Decay",
      concept: "Modelling Continuous Exponential Growth and Decay",
      pt: "Interpreting derivative\'s units or interpreting derivative value of a function of e",
      testing: "",
      reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
      easy: [
        {
          qid: "FD_027_e01",
          q: "Water leaks from a tank: $V(t) = 500e^{-0.1t}$ litres ($t$ in hours). Find $V\'(2)$ and interpret.",
          a: "$V\'(t) = -50e^{-0.1t}$. $V\'(2) = -50e^{-0.2} \\approx -40.9$. At $t = 2$ hours, the volume is decreasing at about $40.9$ litres per hour."
        },
        {
          qid: "FD_027_e02",
          q: "A population grows as $P(t) = 300e^{0.04t}$ ($t$ in days). Find $P\'(0)$ and interpret.",
          a: "$P\'(t) = 12e^{0.04t}$. $P\'(0) = 12$. Initially, the population is increasing at $12$ per day."
        },
        {
          qid: "FD_027_e03",
          q: "The mass of a substance is $M(t) = 80e^{-0.05t}$ grams ($t$ in years). If $M\'(4) \\approx -3.27$, interpret this value.",
          a: "At $t = 4$ years, the mass is decreasing at approximately $3.27$ grams per year."
        },
      ],
      medium: [
        {
          qid: "FD_027_m01",
          q: "The volume of water in a tank is $V(t) = 200e^{-0.05t}$ litres where $t$ is in hours. If $V\'(3) = -8.61$, interpret this value.",
          a: "At $t = 3$ hours, the volume of water is decreasing at a rate of 8.61 litres per hour."
        },
        {
          qid: "FD_027_m02",
          q: "A cooling coffee has $T(t) = 22 + 58e^{-0.12t}$ °C ($t$ in minutes). Find $T\'(5)$ and interpret.",
          a: "$T\'(t) = -6.96e^{-0.12t}$. $T\'(5) = -6.96e^{-0.6} \\approx -3.82$. At $t = 5$ minutes, the temperature is decreasing at about $3.82°$C per minute."
        },
        {
          qid: "FD_027_m03",
          q: "An investment grows as $A(t) = 5000e^{0.045t}$ dollars ($t$ in years). Find $A\'(10)$ and explain what it represents.",
          a: "$A\'(t) = 225e^{0.045t}$. $A\'(10) = 225e^{0.45} \\approx \\$352.71$. At $t = 10$ years, the investment is growing at about $\\$352.71$ per year."
        },
        {
          qid: "FD_027_m04",
          q: "A drug concentration is $C(t) = 40e^{-0.08t}$ mg/L ($t$ in hours). Interpret the sign and magnitude of $C\'(t)$.",
          a: "$C\'(t) = -3.2e^{-0.08t}$. Negative sign: concentration is always decreasing. Magnitude decreases over time since $e^{-0.08t}$ decreases, so the drug is eliminated more slowly as concentration drops."
        },
        {
          qid: "FD_027_m05",
          q: "Soil moisture is $W(t) = 120e^{-0.03t}$ mm ($t$ in days). Find $W\'(10)$ and state its units.",
          a: "$W\'(t) = -3.6e^{-0.03t}$. $W\'(10) = -3.6e^{-0.3} \\approx -2.67$ mm per day. The soil is losing about $2.67$ mm of moisture per day at $t = 10$."
        },
      ],
      hard: [
        {
          qid: "FD_027_h01",
          q: "A population follows $P(t) = 500e^{0.03t}$ ($t$ in years). Find $P\'\'(10)$ and explain what it tells us about the growth.",
          a: "$P\'(t) = 15e^{0.03t}$, $P\'\'(t) = 0.45e^{0.03t}$. $P\'\'(10) = 0.45e^{0.3} \\approx 0.607$. Since $P\'\' > 0$, the rate of growth itself is increasing (the population is accelerating)."
        },
        {
          qid: "FD_027_h02",
          q: "Given $N(t) = 800e^{-0.04t}$, compare $N\'(5)$ (instantaneous rate) with the average rate of change over $[4, 6]$.",
          a: "$N\'(5) = -32e^{-0.2} \\approx -26.2$. Average $= \\frac{N(6)-N(4)}{2} = \\frac{800e^{-0.24}-800e^{-0.16}}{2} \\approx \\frac{629.0-681.7}{2} = -26.4$. They are very close; the instantaneous rate approximates the average over small intervals."
        },
        {
          qid: "FD_027_h03",
          q: "Newton\'s Law of Cooling gives $\\frac{dT}{dt} = -0.1(T - 20)$ where $T$ is in °C and $t$ in minutes. Interpret this equation and explain why the rate of cooling decreases over time.",
          a: "The rate of temperature change is proportional to the difference between the object\'s temperature and the room ($20°$C). As the object cools, $(T - 20)$ decreases, so $|\\frac{dT}{dt}|$ decreases — cooling slows down as the object approaches room temperature."
        },
        {
          qid: "FD_027_h04",
          q: "The charge on a capacitor is $Q(t) = Q_0 e^{-t/(RC)}$ coulombs where $R$ (ohms) and $C$ (farads) are constants and $t$ is in seconds. Find $Q\'(t)$ and state its units.",
          a: "$Q\'(t) = -\\frac{Q_0}{RC} e^{-t/(RC)}$. The units of $Q\'(t)$ are coulombs per second, which equals amperes (A). This is the current flowing through the circuit."
        },
        {
          qid: "FD_027_h05",
          q: "For $N(t) = Ae^{kt}$, show that the percentage rate of change $\\frac{N\'(t)}{N(t)} \\times 100$ is constant. What is its value?",
          a: "$N\'(t) = kAe^{kt}$. $\\frac{N\'(t)}{N(t)} = \\frac{kAe^{kt}}{Ae^{kt}} = k$. So the percentage rate $= 100k\\%$, which is constant regardless of $t$ or the value of $N$."
        },
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
