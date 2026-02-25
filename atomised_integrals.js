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
      "easy": [
        {
          "qid": "IN_001_e01",
          "q": "Evaluate $\\int_0^1 2x(x^2 + 1)^3 \\, dx$.",
          "a": "Let $u = x^2 + 1$, $du = 2x \\, dx$. When $x=0$, $u=1$; $x=1$, $u=2$. $\\int_1^2 u^3 \\, du = \\left[\\frac{u^4}{4}\\right]_1^2 = \\frac{16-1}{4} = \\frac{15}{4}$"
        },
        {
          "qid": "IN_001_e02",
          "q": "Evaluate $\\int_0^1 6x^2(x^3 + 2) \\, dx$.",
          "a": "Let $u = x^3 + 2$, $du = 3x^2 \\, dx$, so $6x^2 \\, dx = 2 \\, du$. When $x=0$, $u=2$; $x=1$, $u=3$. $2\\int_2^3 u \\, du = 2\\left[\\frac{u^2}{2}\\right]_2^3 = 9 - 4 = 5$"
        },
        {
          "qid": "IN_001_e03",
          "q": "Evaluate $\\int_1^3 2x(x^2 - 1) \\, dx$.",
          "a": "Let $u = x^2 - 1$, $du = 2x \\, dx$. When $x=1$, $u=0$; $x=3$, $u=8$. $\\int_0^8 u \\, du = \\left[\\frac{u^2}{2}\\right]_0^8 = 32$"
        },
        {
          "qid": "IN_001_e04",
          "q": "Evaluate $\\int_0^{\\pi/3} \\sin(x)\\cos^2(x) \\, dx$.",
          "a": "Let $u = \\cos(x)$, $du = -\\sin(x) \\, dx$. When $x=0$, $u=1$; $x=\\pi/3$, $u=1/2$. $-\\int_1^{1/2} u^2 \\, du = \\int_{1/2}^1 u^2 \\, du = \\left[\\frac{u^3}{3}\\right]_{1/2}^1 = \\frac{1}{3} - \\frac{1}{24} = \\frac{7}{24}$"
        }
      ],
      "medium": [
        {
          "qid": "IN_001_m01",
          "q": "Evaluate $\\int_0^1 3x^2(x^3 + 1)^4 dx$.",
          "a": "Let $u = x^3 + 1$, $du = 3x^2 dx$. When $x=0$, $u=1$; $x=1$, $u=2$. $\\int_1^2 u^4 du = \\left[\\frac{u^5}{5}\\right]_1^2 = \\frac{32-1}{5} = \\frac{31}{5}$"
        },
        {
          "qid": "IN_001_m02",
          "q": "Evaluate $\\int_0^1 4x(x^2 + 1)^5 \\, dx$.",
          "a": "Let $u = x^2 + 1$, $du = 2x \\, dx$, so $4x \\, dx = 2 \\, du$. When $x=0$, $u=1$; $x=1$, $u=2$. $2\\int_1^2 u^5 \\, du = 2\\left[\\frac{u^6}{6}\\right]_1^2 = \\frac{64-1}{3} = 21$"
        },
        {
          "qid": "IN_001_m03",
          "q": "Evaluate $\\int_1^2 6x^2(x^3 - 1)^2 \\, dx$.",
          "a": "Let $u = x^3 - 1$, $du = 3x^2 \\, dx$, so $6x^2 \\, dx = 2 \\, du$. When $x=1$, $u=0$; $x=2$, $u=7$. $2\\int_0^7 u^2 \\, du = 2\\left[\\frac{u^3}{3}\\right]_0^7 = \\frac{686}{3}$"
        },
        {
          "qid": "IN_001_m04",
          "q": "Evaluate $\\int_0^1 8x(2x^2 + 1)^3 \\, dx$.",
          "a": "Let $u = 2x^2 + 1$, $du = 4x \\, dx$, so $8x \\, dx = 2 \\, du$. When $x=0$, $u=1$; $x=1$, $u=3$. $2\\int_1^3 u^3 \\, du = 2\\left[\\frac{u^4}{4}\\right]_1^3 = \\frac{81-1}{2} = 40$"
        },
        {
          "qid": "IN_001_m05",
          "q": "Evaluate $\\int_0^1 12x^3(x^4 + 1)^2 \\, dx$.",
          "a": "Let $u = x^4 + 1$, $du = 4x^3 \\, dx$, so $12x^3 \\, dx = 3 \\, du$. When $x=0$, $u=1$; $x=1$, $u=2$. $3\\int_1^2 u^2 \\, du = 3\\left[\\frac{u^3}{3}\\right]_1^2 = 8 - 1 = 7$"
        },
        {
          "qid": "IN_001_m06",
          "q": "Evaluate $\\int_0^{\\pi/2} 3\\sin^2(x)\\cos(x) \\, dx$.",
          "a": "Let $u = \\sin(x)$, $du = \\cos(x) \\, dx$. When $x=0$, $u=0$; $x=\\pi/2$, $u=1$. $3\\int_0^1 u^2 \\, du = 3\\left[\\frac{u^3}{3}\\right]_0^1 = 1$"
        },
        {
          "qid": "IN_001_m07",
          "q": "Evaluate $\\int_0^1 2xe^{x^2} \\, dx$.",
          "a": "Let $u = x^2$, $du = 2x \\, dx$. When $x=0$, $u=0$; $x=1$, $u=1$. $\\int_0^1 e^u \\, du = [e^u]_0^1 = e - 1$"
        }
      ],
      "hard": [
        {
          "qid": "IN_001_h01",
          "q": "Evaluate $\\int_0^1 x(1 - x^2)^4 \\, dx$.",
          "a": "Let $u = 1 - x^2$, $du = -2x \\, dx$, so $x \\, dx = -\\frac{du}{2}$. When $x=0$, $u=1$; $x=1$, $u=0$. $-\\frac{1}{2}\\int_1^0 u^4 \\, du = \\frac{1}{2}\\int_0^1 u^4 \\, du = \\frac{1}{2} \\cdot \\frac{1}{5} = \\frac{1}{10}$"
        },
        {
          "qid": "IN_001_h02",
          "q": "Evaluate $\\int_{-1}^{1} x^2(x^3 + 1)^5 \\, dx$.",
          "a": "Let $u = x^3 + 1$, $du = 3x^2 \\, dx$, so $x^2 \\, dx = \\frac{du}{3}$. When $x=-1$, $u=0$; $x=1$, $u=2$. $\\frac{1}{3}\\int_0^2 u^5 \\, du = \\frac{1}{3}\\left[\\frac{u^6}{6}\\right]_0^2 = \\frac{64}{18} = \\frac{32}{9}$"
        },
        {
          "qid": "IN_001_h03",
          "q": "Evaluate $\\int_0^2 x^2\\sqrt{x^3 + 8} \\, dx$.",
          "a": "Let $u = x^3 + 8$, $du = 3x^2 \\, dx$. When $x=0$, $u=8$; $x=2$, $u=16$. $\\frac{1}{3}\\int_8^{16} u^{1/2} \\, du = \\frac{1}{3}\\left[\\frac{2u^{3/2}}{3}\\right]_8^{16} = \\frac{2}{9}\\left(64 - 16\\sqrt{2}\\right) = \\frac{128 - 32\\sqrt{2}}{9}$"
        },
        {
          "qid": "IN_001_h04",
          "q": "Evaluate $\\int_0^1 x(x^2 + 1)^4 \\, dx$.",
          "a": "Let $u = x^2 + 1$, $du = 2x \\, dx$, so $x \\, dx = \\frac{du}{2}$. When $x=0$, $u=1$; $x=1$, $u=2$. $\\frac{1}{2}\\int_1^2 u^4 \\, du = \\frac{1}{2}\\left[\\frac{u^5}{5}\\right]_1^2 = \\frac{32-1}{10} = \\frac{31}{10}$"
        },
        {
          "qid": "IN_001_h05",
          "q": "Evaluate $\\int_0^1 x^3(x^4 + 3)^3 \\, dx$.",
          "a": "Let $u = x^4 + 3$, $du = 4x^3 \\, dx$, so $x^3 \\, dx = \\frac{du}{4}$. When $x=0$, $u=3$; $x=1$, $u=4$. $\\frac{1}{4}\\int_3^4 u^3 \\, du = \\frac{1}{4}\\left[\\frac{u^4}{4}\\right]_3^4 = \\frac{256-81}{16} = \\frac{175}{16}$"
        },
        {
          "qid": "IN_001_h06",
          "q": "Evaluate $\\int_1^2 \\frac{4x}{(x^2+1)^2} \\, dx$.",
          "a": "Let $u = x^2+1$, $du = 2x \\, dx$. When $x=1$, $u=2$; $x=2$, $u=5$. $2\\int_2^5 u^{-2} \\, du = 2\\left[-\\frac{1}{u}\\right]_2^5 = 2\\left(-\\frac{1}{5}+\\frac{1}{2}\\right) = \\frac{3}{5}$"
        },
        {
          "qid": "IN_001_h07",
          "q": "Evaluate $\\int_0^{\\pi/4} \\sec^2(x)\\tan^3(x) \\, dx$.",
          "a": "Let $u = \\tan(x)$, $du = \\sec^2(x) \\, dx$. When $x=0$, $u=0$; $x=\\pi/4$, $u=1$. $\\int_0^1 u^3 \\, du = \\left[\\frac{u^4}{4}\\right]_0^1 = \\frac{1}{4}$"
        },
        {
          "qid": "IN_001_h08",
          "q": "Evaluate $\\int_0^{\\ln 3} \\frac{e^x}{(e^x + 1)^3} \\, dx$.",
          "a": "Let $u = e^x + 1$, $du = e^x \\, dx$. When $x=0$, $u=2$; $x=\\ln 3$, $u=4$. $\\int_2^4 u^{-3} \\, du = \\left[-\\frac{1}{2u^2}\\right]_2^4 = -\\frac{1}{32}+\\frac{1}{8} = \\frac{3}{32}$"
        }
      ]
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
      "easy": [
        {
          "qid": "IN_002_e01",
          "q": "Given that $\\frac{d}{dx}\\left[(x^2 + 1)^3\\right] = 6x(x^2 + 1)^2$, hence find $\\int x(x^2 + 1)^2 \\, dx$.",
          "a": "Since $\\frac{d}{dx}\\left[(x^2+1)^3\\right] = 6x(x^2+1)^2$, we have $\\int 6x(x^2+1)^2 \\, dx = (x^2+1)^3 + C$. Dividing by 6: $\\int x(x^2+1)^2 \\, dx = \\frac{(x^2+1)^3}{6} + C$"
        },
        {
          "qid": "IN_002_e02",
          "q": "Given that $\\frac{d}{dx}\\left[\\sin^3(x)\\right] = 3\\sin^2(x)\\cos(x)$, hence find $\\int \\sin^2(x)\\cos(x) \\, dx$.",
          "a": "Since $\\frac{d}{dx}\\left[\\sin^3(x)\\right] = 3\\sin^2(x)\\cos(x)$, we have $\\int 3\\sin^2(x)\\cos(x) \\, dx = \\sin^3(x) + C$. Dividing by 3: $\\int \\sin^2(x)\\cos(x) \\, dx = \\frac{\\sin^3(x)}{3} + C$"
        },
        {
          "qid": "IN_002_e03",
          "q": "Given that $\\frac{d}{dx}\\left[(2x + 1)^4\\right] = 8(2x + 1)^3$, hence find $\\int (2x + 1)^3 \\, dx$.",
          "a": "Since $\\frac{d}{dx}\\left[(2x+1)^4\\right] = 8(2x+1)^3$, we have $\\int 8(2x+1)^3 \\, dx = (2x+1)^4 + C$. Dividing by 8: $\\int (2x+1)^3 \\, dx = \\frac{(2x+1)^4}{8} + C$"
        }
      ],
      "medium": [
        {
          "qid": "IN_002_m01",
          "q": "Given that $\\frac{d}{dx}[x\\sin(x)] = \\sin(x) + x\\cos(x)$, hence find $\\int x\\cos(x) dx$.",
          "a": "$\\int [\\sin(x) + x\\cos(x)] dx = x\\sin(x) + C$. So $\\int x\\cos(x) dx = x\\sin(x) - \\int \\sin(x) dx = x\\sin(x) + \\cos(x) + C$.\nAlternatively: rearranging the derivative identity directly: $\\int x\\cos(x) dx = x\\sin(x) - \\int \\sin(x) dx = x\\sin(x) + \\cos(x) + C$"
        },
        {
          "qid": "IN_002_m02",
          "q": "Given that $\\frac{d}{dx}\\left[(x^3 + 2)^5\\right] = 15x^2(x^3 + 2)^4$, hence find $\\int x^2(x^3 + 2)^4 \\, dx$.",
          "a": "Since $\\frac{d}{dx}\\left[(x^3+2)^5\\right] = 15x^2(x^3+2)^4$, dividing by 15: $\\int x^2(x^3+2)^4 \\, dx = \\frac{(x^3+2)^5}{15} + C$"
        },
        {
          "qid": "IN_002_m03",
          "q": "Given that $\\frac{d}{dx}\\left[\\ln(x^2 + 1)\\right] = \\frac{2x}{x^2 + 1}$, hence find $\\int \\frac{x}{x^2 + 1} \\, dx$.",
          "a": "Since $\\frac{d}{dx}\\left[\\ln(x^2+1)\\right] = \\frac{2x}{x^2+1}$, we have $\\int \\frac{2x}{x^2+1} \\, dx = \\ln(x^2+1) + C$. Dividing by 2: $\\int \\frac{x}{x^2+1} \\, dx = \\frac{\\ln(x^2+1)}{2} + C$"
        },
        {
          "qid": "IN_002_m04",
          "q": "Given that $\\frac{d}{dx}\\left[e^{x^2}\\right] = 2xe^{x^2}$, hence find $\\int xe^{x^2} \\, dx$.",
          "a": "Since $\\frac{d}{dx}\\left[e^{x^2}\\right] = 2xe^{x^2}$, we have $\\int 2xe^{x^2} \\, dx = e^{x^2} + C$. Dividing by 2: $\\int xe^{x^2} \\, dx = \\frac{e^{x^2}}{2} + C$"
        },
        {
          "qid": "IN_002_m05",
          "q": "Given that $\\frac{d}{dx}\\left[\\tan^2(x)\\right] = 2\\sec^2(x)\\tan(x)$, hence find $\\int \\sec^2(x)\\tan(x) \\, dx$.",
          "a": "Since $\\frac{d}{dx}\\left[\\tan^2(x)\\right] = 2\\sec^2(x)\\tan(x)$, we have $\\int 2\\sec^2(x)\\tan(x) \\, dx = \\tan^2(x) + C$. Dividing by 2: $\\int \\sec^2(x)\\tan(x) \\, dx = \\frac{\\tan^2(x)}{2} + C$"
        }
      ],
      "hard": [
        {
          "qid": "IN_002_h01",
          "q": "Given that $\\frac{d}{dx}\\left[\\sin(x^2)\\right] = 2x\\cos(x^2)$, hence find $\\int_0^{\\sqrt{\\pi/2}} x\\cos(x^2) \\, dx$.",
          "a": "Since $\\int 2x\\cos(x^2) \\, dx = \\sin(x^2) + C$, dividing by 2: $\\int x\\cos(x^2) \\, dx = \\frac{\\sin(x^2)}{2} + C$. So $\\int_0^{\\sqrt{\\pi/2}} x\\cos(x^2) \\, dx = \\left[\\frac{\\sin(x^2)}{2}\\right]_0^{\\sqrt{\\pi/2}} = \\frac{\\sin(\\pi/2)}{2} - 0 = \\frac{1}{2}$"
        },
        {
          "qid": "IN_002_h02",
          "q": "Given that $\\frac{d}{dx}\\left[(1 + e^x)^3\\right] = 3e^x(1 + e^x)^2$, hence find $\\int_0^{\\ln 2} e^x(1 + e^x)^2 \\, dx$.",
          "a": "Since $\\int 3e^x(1+e^x)^2 \\, dx = (1+e^x)^3 + C$, dividing by 3: $\\int e^x(1+e^x)^2 \\, dx = \\frac{(1+e^x)^3}{3} + C$. So $\\int_0^{\\ln 2} e^x(1+e^x)^2 \\, dx = \\left[\\frac{(1+e^x)^3}{3}\\right]_0^{\\ln 2} = \\frac{(1+2)^3}{3} - \\frac{(1+1)^3}{3} = 9 - \\frac{8}{3} = \\frac{19}{3}$"
        },
        {
          "qid": "IN_002_h03",
          "q": "Given that $\\frac{d}{dx}\\left[x\\ln(x) - x\\right] = \\ln(x)$, hence find $\\int_1^e \\ln(x) \\, dx$.",
          "a": "$\\int_1^e \\ln(x) \\, dx = \\left[x\\ln(x) - x\\right]_1^e = (e \\cdot 1 - e) - (1 \\cdot 0 - 1) = 0 - (-1) = 1$"
        },
        {
          "qid": "IN_002_h04",
          "q": "Given that $\\frac{d}{dx}\\left[(x^2 + 4x)^3\\right] = 6(x + 2)(x^2 + 4x)^2$, hence find $\\int (x + 2)(x^2 + 4x)^2 \\, dx$.",
          "a": "Since $\\frac{d}{dx}\\left[(x^2+4x)^3\\right] = 6(x+2)(x^2+4x)^2$, dividing by 6: $\\int (x+2)(x^2+4x)^2 \\, dx = \\frac{(x^2+4x)^3}{6} + C$"
        },
        {
          "qid": "IN_002_h05",
          "q": "Given that $\\frac{d}{dx}\\left[\\sin^2(x)\\right] = \\sin(2x)$, hence find $\\int_0^{\\pi/4} \\sin(2x) \\, dx$.",
          "a": "$\\int_0^{\\pi/4} \\sin(2x) \\, dx = \\left[\\sin^2(x)\\right]_0^{\\pi/4} = \\sin^2\\left(\\frac{\\pi}{4}\\right) - \\sin^2(0) = \\frac{1}{2} - 0 = \\frac{1}{2}$. Alternatively: $\\left[-\\frac{\\cos(2x)}{2}\\right]_0^{\\pi/4} = -\\frac{\\cos(\\pi/2)}{2} + \\frac{\\cos(0)}{2} = 0 + \\frac{1}{2} = \\frac{1}{2}$"
        }
      ]
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
      "easy": [
        {
          "qid": "IN_003_e01",
          "q": "(a) Differentiate $y = (2x+3)^5$. (b) Hence find $\\int (2x+3)^4 \\, dx$.",
          "a": "(a) $y' = 10(2x+3)^4$. (b) Since $\\frac{d}{dx}[(2x+3)^5] = 10(2x+3)^4$, dividing by 10: $\\int (2x+3)^4 \\, dx = \\frac{(2x+3)^5}{10} + C$"
        },
        {
          "qid": "IN_003_e02",
          "q": "(a) Differentiate $y = \\sin(3x)$. (b) Hence find $\\int \\cos(3x) \\, dx$.",
          "a": "(a) $y' = 3\\cos(3x)$. (b) Since $\\frac{d}{dx}[\\sin(3x)] = 3\\cos(3x)$, dividing by 3: $\\int \\cos(3x) \\, dx = \\frac{\\sin(3x)}{3} + C$"
        },
        {
          "qid": "IN_003_e03",
          "q": "(a) Differentiate $y = e^{4x}$. (b) Hence find $\\int e^{4x} \\, dx$.",
          "a": "(a) $y' = 4e^{4x}$. (b) Since $\\frac{d}{dx}[e^{4x}] = 4e^{4x}$, dividing by 4: $\\int e^{4x} \\, dx = \\frac{e^{4x}}{4} + C$"
        }
      ],
      "medium": [
        {
          "qid": "IN_003_m01",
          "q": "(a) Differentiate $y = x^2 e^x$. (b) Hence find $\\int x^2 e^x \\, dx$.",
          "a": "(a) $y' = 2xe^x + x^2e^x = e^x(x^2 + 2x)$. (b) $\\int e^x(x^2 + 2x) \\, dx = x^2 e^x + C$, so $\\int x^2 e^x \\, dx = x^2 e^x - \\int 2xe^x \\, dx = x^2 e^x - 2xe^x + 2e^x + C = e^x(x^2 - 2x + 2) + C$"
        },
        {
          "qid": "IN_003_m02",
          "q": "(a) Differentiate $y = x\\ln(x)$. (b) Hence find $\\int \\ln(x) \\, dx$.",
          "a": "(a) $y' = \\ln(x) + 1$. (b) $\\int [\\ln(x) + 1] \\, dx = x\\ln(x) + C$. So $\\int \\ln(x) \\, dx = x\\ln(x) - \\int 1 \\, dx = x\\ln(x) - x + C$"
        },
        {
          "qid": "IN_003_m03",
          "q": "(a) Differentiate $y = x\\sin(x)$. (b) Hence find $\\int x\\cos(x) \\, dx$.",
          "a": "(a) $y' = \\sin(x) + x\\cos(x)$. (b) $\\int [\\sin(x) + x\\cos(x)] \\, dx = x\\sin(x) + C$. So $\\int x\\cos(x) \\, dx = x\\sin(x) - \\int \\sin(x) \\, dx = x\\sin(x) + \\cos(x) + C$"
        },
        {
          "qid": "IN_003_m04",
          "q": "(a) Differentiate $y = x^2\\sin(x)$. (b) Hence evaluate $\\int_0^{\\pi/2} x^2\\cos(x) \\, dx$.",
          "a": "(a) $y' = 2x\\sin(x) + x^2\\cos(x)$. (b) $\\int [2x\\sin(x) + x^2\\cos(x)] \\, dx = x^2\\sin(x) + C$. So $\\int x^2\\cos(x) \\, dx = x^2\\sin(x) - 2\\int x\\sin(x) \\, dx$. Using parts: $\\int x\\sin(x) \\, dx = -x\\cos(x) + \\sin(x) + C$. Therefore $\\int_0^{\\pi/2} x^2\\cos(x) \\, dx = \\left[x^2\\sin(x) + 2x\\cos(x) - 2\\sin(x)\\right]_0^{\\pi/2} = \\frac{\\pi^2}{4} - 2$"
        },
        {
          "qid": "IN_003_m05",
          "q": "(a) Differentiate $y = e^x\\sin(x)$. (b) Hence find $\\int e^x(\\sin(x) + \\cos(x)) \\, dx$.",
          "a": "(a) $y' = e^x\\sin(x) + e^x\\cos(x) = e^x(\\sin(x) + \\cos(x))$. (b) Directly from part (a): $\\int e^x(\\sin(x) + \\cos(x)) \\, dx = e^x\\sin(x) + C$"
        }
      ],
      "hard": [
        {
          "qid": "IN_003_h01",
          "q": "(a) Differentiate $y = xe^{2x}$. (b) Hence evaluate $\\int_0^1 xe^{2x} \\, dx$.",
          "a": "(a) $y' = e^{2x} + 2xe^{2x} = e^{2x}(1+2x)$. (b) $\\int e^{2x}(1+2x) \\, dx = xe^{2x} + C$. So $\\int e^{2x} \\, dx + 2\\int xe^{2x} \\, dx = xe^{2x} + C$, giving $\\int xe^{2x} \\, dx = \\frac{e^{2x}(2x-1)}{4} + C$. Therefore $\\int_0^1 xe^{2x} \\, dx = \\frac{e^2 + 1}{4}$"
        },
        {
          "qid": "IN_003_h02",
          "q": "(a) Show that $\\frac{d}{dx}\\left[x(\\ln x)^2 - 2x\\ln x + 2x\\right] = (\\ln x)^2$. (b) Hence find $\\int (\\ln x)^2 \\, dx$.",
          "a": "(a) $\\frac{d}{dx}[x(\\ln x)^2 - 2x\\ln x + 2x] = (\\ln x)^2 + 2\\ln x \\cdot \\frac{x}{x} - 2\\ln x - 2 + 2 = (\\ln x)^2$. (b) From part (a): $\\int (\\ln x)^2 \\, dx = x(\\ln x)^2 - 2x\\ln x + 2x + C$"
        },
        {
          "qid": "IN_003_h03",
          "q": "(a) Differentiate both $y = e^x\\sin(x)$ and $y = e^x\\cos(x)$. (b) Hence find $\\int e^x\\cos(x) \\, dx$.",
          "a": "(a) $\\frac{d}{dx}[e^x\\sin x] = e^x(\\sin x + \\cos x)$. $\\frac{d}{dx}[e^x\\cos x] = e^x(\\cos x - \\sin x)$. (b) Adding these: $\\frac{d}{dx}[e^x\\sin x + e^x\\cos x] = 2e^x\\cos x$. So $\\int e^x\\cos x \\, dx = \\frac{e^x(\\sin x + \\cos x)}{2} + C$"
        },
        {
          "qid": "IN_003_h04",
          "q": "(a) Show that $\\frac{d}{dx}\\left[(x^2-1)^{3/2}\\right] = 3x\\sqrt{x^2-1}$. (b) Hence evaluate $\\int_1^2 x\\sqrt{x^2-1} \\, dx$.",
          "a": "(a) $\\frac{d}{dx}[(x^2-1)^{3/2}] = \\frac{3}{2}(x^2-1)^{1/2} \\cdot 2x = 3x\\sqrt{x^2-1}$. (b) $\\int x\\sqrt{x^2-1} \\, dx = \\frac{(x^2-1)^{3/2}}{3} + C$. So $\\int_1^2 x\\sqrt{x^2-1} \\, dx = \\left[\\frac{(x^2-1)^{3/2}}{3}\\right]_1^2 = \\frac{3\\sqrt{3}}{3} - 0 = \\sqrt{3}$"
        },
        {
          "qid": "IN_003_h05",
          "q": "(a) Differentiate $y = x\\tan(x)$. (b) Hence find $\\int x\\sec^2(x) \\, dx$.",
          "a": "(a) $y' = \\tan(x) + x\\sec^2(x)$. (b) $\\int [\\tan(x) + x\\sec^2(x)] \\, dx = x\\tan(x) + C$. So $\\int x\\sec^2(x) \\, dx = x\\tan(x) - \\int \\tan(x) \\, dx = x\\tan(x) + \\ln|\\cos(x)| + C$"
        }
      ]
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
      "easy": [
        {
          "qid": "IN_004_e01",
          "q": "Given $f'(x) = 4x - 3$ and $f(1) = 2$, find $f(x)$.",
          "a": "$f(x) = 2x^2 - 3x + C$. $f(1) = 2 - 3 + C = 2 \\Rightarrow C = 3$. $f(x) = 2x^2 - 3x + 3$"
        },
        {
          "qid": "IN_004_e02",
          "q": "Given $f'(x) = 6x^2$ and $f(0) = 4$, find $f(x)$.",
          "a": "$f(x) = 2x^3 + C$. $f(0) = 0 + C = 4 \\Rightarrow C = 4$. $f(x) = 2x^3 + 4$"
        },
        {
          "qid": "IN_004_e03",
          "q": "Given $f'(x) = 2x + 1$ and $f(2) = 7$, find $f(x)$.",
          "a": "$f(x) = x^2 + x + C$. $f(2) = 4 + 2 + C = 7 \\Rightarrow C = 1$. $f(x) = x^2 + x + 1$"
        }
      ],
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
        },
        {
          "qid": "IN_004_m03",
          "q": "Given $f'(x) = \\frac{1}{x^2}$ and $f(1) = 3$, find $f(x)$.",
          "a": "$f(x) = -\\frac{1}{x} + C$. $f(1) = -1 + C = 3 \\Rightarrow C = 4$. $f(x) = -\\frac{1}{x} + 4$"
        },
        {
          "qid": "IN_004_m04",
          "q": "Given $f'(x) = \\cos(x)$ and $f\\left(\\frac{\\pi}{2}\\right) = 3$, find $f(x)$.",
          "a": "$f(x) = \\sin(x) + C$. $f(\\pi/2) = 1 + C = 3 \\Rightarrow C = 2$. $f(x) = \\sin(x) + 2$"
        },
        {
          "qid": "IN_004_m05",
          "q": "Given $f'(x) = 3\\sqrt{x}$ and $f(4) = 20$, find $f(x)$.",
          "a": "$f(x) = 3 \\cdot \\frac{2x^{3/2}}{3} + C = 2x^{3/2} + C$. $f(4) = 2(8) + C = 16 + C = 20 \\Rightarrow C = 4$. $f(x) = 2x^{3/2} + 4$"
        }
      ],
      "hard": [
        {
          "qid": "IN_004_h01",
          "q": "Given $f''(x) = 6x$, $f'(0) = -2$ and $f(0) = 3$, find $f(x)$.",
          "a": "$f'(x) = 3x^2 + C_1$. $f'(0) = C_1 = -2$, so $f'(x) = 3x^2 - 2$. $f(x) = x^3 - 2x + C_2$. $f(0) = C_2 = 3$. $f(x) = x^3 - 2x + 3$"
        },
        {
          "qid": "IN_004_h02",
          "q": "Given $f'(x) = 2e^{-x} + 3$ and $f(0) = 1$, find $f(2)$.",
          "a": "$f(x) = -2e^{-x} + 3x + C$. $f(0) = -2 + 0 + C = 1 \\Rightarrow C = 3$. $f(x) = -2e^{-x} + 3x + 3$. $f(2) = -2e^{-2} + 6 + 3 = 9 - 2e^{-2}$"
        },
        {
          "qid": "IN_004_h03",
          "q": "Given $\\frac{dy}{dx} = 2x + \\frac{1}{x}$ and $y = 4$ when $x = 1$, find $y$ when $x = e$.",
          "a": "$y = x^2 + \\ln(x) + C$. $y(1) = 1 + 0 + C = 4 \\Rightarrow C = 3$. $y = x^2 + \\ln(x) + 3$. At $x = e$: $y = e^2 + 1 + 3 = e^2 + 4$"
        },
        {
          "qid": "IN_004_h04",
          "q": "Given $f'(x) = (2x-1)^3$ and $f(1) = 0$, find $f(x)$.",
          "a": "$f(x) = \\frac{(2x-1)^4}{8} + C$. $f(1) = \\frac{1}{8} + C = 0 \\Rightarrow C = -\\frac{1}{8}$. $f(x) = \\frac{(2x-1)^4}{8} - \\frac{1}{8} = \\frac{(2x-1)^4 - 1}{8}$"
        },
        {
          "qid": "IN_004_h05",
          "q": "Given $f'(x) = 4x^3 - \\frac{6}{x^3}$ and $f(1) = 0$, find $f(x)$.",
          "a": "$f(x) = x^4 + \\frac{3}{x^2} + C$. $f(1) = 1 + 3 + C = 0 \\Rightarrow C = -4$. $f(x) = x^4 + \\frac{3}{x^2} - 4$"
        }
      ]
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
      "easy": [
        {
          "qid": "IN_005_e01",
          "q": "Find $\\int \\tan(x) \\, dx$.",
          "a": "Write as $\\int \\frac{\\sin(x)}{\\cos(x)} \\, dx$. Since numerator $= -\\frac{d}{dx}[\\cos(x)]$: $= -\\ln|\\cos(x)| + C$"
        },
        {
          "qid": "IN_005_e02",
          "q": "Find $\\int \\frac{\\cos(x)}{\\sin(x)} \\, dx$.",
          "a": "Since numerator $= \\frac{d}{dx}[\\sin(x)]$: $= \\ln|\\sin(x)| + C$"
        },
        {
          "qid": "IN_005_e03",
          "q": "Find $\\int \\frac{2x}{x^2 + 1} \\, dx$.",
          "a": "Since $\\frac{d}{dx}[x^2+1] = 2x$: $= \\ln(x^2+1) + C$"
        }
      ],
      "medium": [
        {
          "qid": "IN_005_m01",
          "q": "Find $\\int \\frac{\\cos(x)}{\\sin(x)} \\, dx$.",
          "a": "$\\ln|\\sin(x)| + C$"
        },
        {
          "qid": "IN_005_m02",
          "q": "Find $\\int \\frac{\\sin(x)}{1 + \\cos(x)} \\, dx$.",
          "a": "$= -\\int \\frac{-\\sin(x)}{1+\\cos(x)} \\, dx = -\\ln|1+\\cos(x)| + C$"
        },
        {
          "qid": "IN_005_m03",
          "q": "Find $\\int \\frac{\\sec^2(x)}{\\tan(x)} \\, dx$.",
          "a": "Since $\\frac{d}{dx}[\\tan(x)] = \\sec^2(x)$, this is $\\frac{f'(x)}{f(x)}$ form: $= \\ln|\\tan(x)| + C$"
        },
        {
          "qid": "IN_005_m04",
          "q": "Find $\\int \\frac{e^x}{e^x + 1} \\, dx$.",
          "a": "Since $\\frac{d}{dx}[e^x+1] = e^x$: $= \\ln(e^x+1) + C$"
        },
        {
          "qid": "IN_005_m05",
          "q": "Find $\\int \\frac{3x^2}{x^3 - 5} \\, dx$.",
          "a": "Since $\\frac{d}{dx}[x^3-5] = 3x^2$: $= \\ln|x^3-5| + C$"
        }
      ],
      "hard": [
        {
          "qid": "IN_005_h01",
          "q": "Evaluate $\\int_0^{\\pi/4} \\tan(x) \\, dx$.",
          "a": "$= \\left[-\\ln|\\cos(x)|\\right]_0^{\\pi/4} = -\\ln\\left(\\frac{\\sqrt{2}}{2}\\right) - (-\\ln 1) = \\ln\\sqrt{2} = \\frac{1}{2}\\ln 2$"
        },
        {
          "qid": "IN_005_h02",
          "q": "Find $\\int \\frac{2\\sin(x)\\cos(x)}{\\sin^2(x) + 3} \\, dx$.",
          "a": "Since $\\frac{d}{dx}[\\sin^2(x)+3] = 2\\sin(x)\\cos(x)$, this is $\\frac{f'(x)}{f(x)}$ form: $= \\ln(\\sin^2(x)+3) + C$"
        },
        {
          "qid": "IN_005_h03",
          "q": "Evaluate $\\int_1^e \\frac{1 + \\ln(x)}{x\\ln(x) + x} \\, dx$.",
          "a": "Simplify: $\\frac{1+\\ln(x)}{x(\\ln(x)+1)} = \\frac{1}{x}$. So $\\int_1^e \\frac{1}{x} \\, dx = [\\ln(x)]_1^e = 1$"
        },
        {
          "qid": "IN_005_h04",
          "q": "Find $\\int \\frac{e^x - e^{-x}}{e^x + e^{-x}} \\, dx$.",
          "a": "Since $\\frac{d}{dx}[e^x+e^{-x}] = e^x - e^{-x}$, this is $\\frac{f'(x)}{f(x)}$ form: $= \\ln(e^x+e^{-x}) + C$"
        },
        {
          "qid": "IN_005_h05",
          "q": "Find $\\int \\frac{2x + 3}{x^2 + 3x + 1} \\, dx$.",
          "a": "Since $\\frac{d}{dx}[x^2+3x+1] = 2x+3$, this is $\\frac{f'(x)}{f(x)}$ form: $= \\ln|x^2+3x+1| + C$"
        }
      ]
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
      "easy": [
        {
          "qid": "IN_006_e01",
          "q": "Find $k$ such that $\\int_0^2 kx \\, dx = 6$.",
          "a": "$k\\left[\\frac{x^2}{2}\\right]_0^2 = 2k = 6 \\Rightarrow k = 3$"
        },
        {
          "qid": "IN_006_e02",
          "q": "Find $k$ such that $\\int_0^1 kx^2 \\, dx = 5$.",
          "a": "$k\\left[\\frac{x^3}{3}\\right]_0^1 = \\frac{k}{3} = 5 \\Rightarrow k = 15$"
        },
        {
          "qid": "IN_006_e03",
          "q": "The probability density function $f(x) = k$ for $0 \\leq x \\leq 4$. Find $k$.",
          "a": "$\\int_0^4 k \\, dx = 4k = 1 \\Rightarrow k = \\frac{1}{4}$"
        }
      ],
      "medium": [
        {
          "qid": "IN_006_m01",
          "q": "The probability density function $f(x) = kx^2$ for $0 \\leq x \\leq 3$. Find $k$.",
          "a": "$\\int_0^3 kx^2 \\, dx = 1 \\Rightarrow k\\left[\\frac{x^3}{3}\\right]_0^3 = 1 \\Rightarrow 9k = 1 \\Rightarrow k = \\frac{1}{9}$"
        },
        {
          "qid": "IN_006_m02",
          "q": "The probability density function $f(x) = k(4-x)$ for $0 \\leq x \\leq 4$. Find $k$.",
          "a": "$\\int_0^4 k(4-x) \\, dx = k\\left[4x - \\frac{x^2}{2}\\right]_0^4 = 8k = 1 \\Rightarrow k = \\frac{1}{8}$"
        },
        {
          "qid": "IN_006_m03",
          "q": "Find $k > 0$ such that $\\int_0^k 3x^2 \\, dx = 64$.",
          "a": "$\\left[x^3\\right]_0^k = k^3 = 64 \\Rightarrow k = 4$"
        },
        {
          "qid": "IN_006_m04",
          "q": "The probability density function $f(x) = kx(1-x)$ for $0 \\leq x \\leq 1$. Find $k$.",
          "a": "$\\int_0^1 kx(1-x) \\, dx = k\\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{k}{6} = 1 \\Rightarrow k = 6$"
        },
        {
          "qid": "IN_006_m05",
          "q": "The probability density function $f(x) = ke^{-2x}$ for $x \\geq 0$. Find $k$.",
          "a": "$\\int_0^{\\infty} ke^{-2x} \\, dx = k\\left[-\\frac{e^{-2x}}{2}\\right]_0^{\\infty} = \\frac{k}{2} = 1 \\Rightarrow k = 2$"
        }
      ],
      "hard": [
        {
          "qid": "IN_006_h01",
          "q": "The pdf $f(x) = k(x^2 + 1)$ for $0 \\leq x \\leq 2$. Find $k$, then find $P(X \\leq 1)$.",
          "a": "$\\int_0^2 k(x^2+1) \\, dx = k\\left[\\frac{x^3}{3}+x\\right]_0^2 = \\frac{14k}{3} = 1 \\Rightarrow k = \\frac{3}{14}$. $P(X \\leq 1) = \\frac{3}{14}\\int_0^1 (x^2+1) \\, dx = \\frac{3}{14} \\cdot \\frac{4}{3} = \\frac{2}{7}$"
        },
        {
          "qid": "IN_006_h02",
          "q": "Find $k > 1$ such that $\\int_1^k \\frac{6}{x^2} \\, dx = 4$.",
          "a": "$\\left[-\\frac{6}{x}\\right]_1^k = -\\frac{6}{k} + 6 = 4 \\Rightarrow \\frac{6}{k} = 2 \\Rightarrow k = 3$"
        },
        {
          "qid": "IN_006_h03",
          "q": "The pdf $f(x) = kx^2(2-x)$ for $0 \\leq x \\leq 2$. Find $k$.",
          "a": "$\\int_0^2 kx^2(2-x) \\, dx = k\\left[\\frac{2x^3}{3} - \\frac{x^4}{4}\\right]_0^2 = k\\left(\\frac{16}{3} - 4\\right) = \\frac{4k}{3} = 1 \\Rightarrow k = \\frac{3}{4}$"
        },
        {
          "qid": "IN_006_h04",
          "q": "Find $k > 0$ such that $\\int_0^k (4x - x^2) \\, dx = 9$.",
          "a": "$\\left[2x^2 - \\frac{x^3}{3}\\right]_0^k = 2k^2 - \\frac{k^3}{3} = 9$. So $6k^2 - k^3 = 27$, giving $k^3 - 6k^2 + 27 = 0$. Testing $k = 3$: $27 - 54 + 27 = 0$ \\checkmark. $k = 3$"
        },
        {
          "qid": "IN_006_h05",
          "q": "The pdf $f(x) = k\\sin(x)$ for $0 \\leq x \\leq \\pi$. Find $k$, then find $P\\left(X \\leq \\frac{\\pi}{2}\\right)$.",
          "a": "$\\int_0^{\\pi} k\\sin(x) \\, dx = k[-\\cos(x)]_0^{\\pi} = 2k = 1 \\Rightarrow k = \\frac{1}{2}$. $P\\left(X \\leq \\frac{\\pi}{2}\\right) = \\frac{1}{2}\\int_0^{\\pi/2} \\sin(x) \\, dx = \\frac{1}{2}[-\\cos(x)]_0^{\\pi/2} = \\frac{1}{2}(0+1) = \\frac{1}{2}$"
        }
      ]
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
      "easy": [
        {
          "qid": "IN_007_e01",
          "q": "Find the area enclosed between $y = x^2$ and $y = x$ for $0 \\leq x \\leq 1$.",
          "a": "For $0 < x < 1$, $x > x^2$. Area $= \\int_0^1 (x - x^2) \\, dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$"
        },
        {
          "qid": "IN_007_e02",
          "q": "Find the area enclosed between $y = x^2$ and $y = 4$.",
          "a": "Intersection: $x^2 = 4 \\Rightarrow x = \\pm 2$. Area $= \\int_{-2}^{2} (4 - x^2) \\, dx = \\left[4x - \\frac{x^3}{3}\\right]_{-2}^{2} = \\frac{32}{3}$"
        },
        {
          "qid": "IN_007_e03",
          "q": "Find the area between $y = 4 - x^2$ and the $x$-axis.",
          "a": "Roots: $4 - x^2 = 0 \\Rightarrow x = \\pm 2$. Area $= \\int_{-2}^{2} (4 - x^2) \\, dx = \\left[4x - \\frac{x^3}{3}\\right]_{-2}^{2} = \\frac{32}{3}$"
        }
      ],
      "medium": [
        {
          "qid": "IN_007_m01",
          "q": "Find the area enclosed between $y = x^2$ and $y = 2x$.",
          "a": "Intersection: $x^2 = 2x \\Rightarrow x(x-2) = 0$, so $x = 0, 2$. Area $= \\int_0^2 (2x - x^2) \\, dx = \\left[x^2 - \\frac{x^3}{3}\\right]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$"
        },
        {
          "qid": "IN_007_m02",
          "q": "Find the area enclosed between $y = x^2$ and $y = x + 2$.",
          "a": "Intersection: $x^2 = x + 2 \\Rightarrow x^2 - x - 2 = 0 \\Rightarrow (x-2)(x+1) = 0$, so $x = -1, 2$. Area $= \\int_{-1}^{2} (x+2-x^2) \\, dx = \\left[\\frac{x^2}{2}+2x-\\frac{x^3}{3}\\right]_{-1}^{2} = \\frac{9}{2}$"
        },
        {
          "qid": "IN_007_m03",
          "q": "Find the area enclosed between $y = 6x - x^2$ and $y = x$.",
          "a": "Intersection: $6x - x^2 = x \\Rightarrow x^2 - 5x = 0 \\Rightarrow x(x-5) = 0$, so $x = 0, 5$. Area $= \\int_0^5 (5x - x^2) \\, dx = \\left[\\frac{5x^2}{2} - \\frac{x^3}{3}\\right]_0^5 = \\frac{125}{6}$"
        },
        {
          "qid": "IN_007_m04",
          "q": "Find the area enclosed between $y = \\sqrt{x}$ and $y = \\frac{x}{2}$.",
          "a": "Intersection: $\\sqrt{x} = \\frac{x}{2} \\Rightarrow x = \\frac{x^2}{4} \\Rightarrow x^2 - 4x = 0 \\Rightarrow x = 0, 4$. Area $= \\int_0^4 \\left(\\sqrt{x} - \\frac{x}{2}\\right) dx = \\left[\\frac{2x^{3/2}}{3} - \\frac{x^2}{4}\\right]_0^4 = \\frac{16}{3} - 4 = \\frac{4}{3}$"
        },
        {
          "qid": "IN_007_m05",
          "q": "Find the area bounded by $y = 6x - x^2$ and the $x$-axis.",
          "a": "Roots: $6x - x^2 = 0 \\Rightarrow x(6-x) = 0$, so $x = 0, 6$. Area $= \\int_0^6 (6x - x^2) \\, dx = \\left[3x^2 - \\frac{x^3}{3}\\right]_0^6 = 108 - 72 = 36$"
        }
      ],
      "hard": [
        {
          "qid": "IN_007_h01",
          "q": "Find the total area enclosed between $y = x^3$ and $y = x$.",
          "a": "Intersection: $x^3 = x \\Rightarrow x(x^2-1) = 0$, so $x = -1, 0, 1$. For $-1 < x < 0$: $x^3 > x$. For $0 < x < 1$: $x > x^3$. Area $= \\int_{-1}^{0} (x^3 - x) \\, dx + \\int_0^1 (x - x^3) \\, dx = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$"
        },
        {
          "qid": "IN_007_h02",
          "q": "Find the area enclosed between $y = x^2 - 4x$ and $y = x - 4$.",
          "a": "Intersection: $x^2 - 4x = x - 4 \\Rightarrow x^2 - 5x + 4 = 0 \\Rightarrow (x-1)(x-4) = 0$. For $1 < x < 4$: $(x-4) > (x^2-4x)$. Area $= \\int_1^4 [(x-4)-(x^2-4x)] \\, dx = \\int_1^4 (5x - 4 - x^2) \\, dx = \\frac{9}{2}$"
        },
        {
          "qid": "IN_007_h03",
          "q": "Find the area enclosed between $y = e^x$, the line $y = e$, and the $y$-axis.",
          "a": "$e^x = e$ at $x = 1$. For $0 \\leq x \\leq 1$: $e > e^x$. Area $= \\int_0^1 (e - e^x) \\, dx = \\left[ex - e^x\\right]_0^1 = (e - e) - (0 - 1) = 1$"
        },
        {
          "qid": "IN_007_h04",
          "q": "Find the area enclosed between $y = x^2$ and $y = 2x + 3$.",
          "a": "Intersection: $x^2 = 2x + 3 \\Rightarrow x^2 - 2x - 3 = 0 \\Rightarrow (x-3)(x+1) = 0$. Area $= \\int_{-1}^{3} (2x+3-x^2) \\, dx = \\left[x^2+3x-\\frac{x^3}{3}\\right]_{-1}^{3} = \\frac{32}{3}$"
        },
        {
          "qid": "IN_007_h05",
          "q": "Find the area enclosed between $y = x^2 - 1$ and $y = 3 - x^2$.",
          "a": "Intersection: $x^2 - 1 = 3 - x^2 \\Rightarrow 2x^2 = 4 \\Rightarrow x = \\pm\\sqrt{2}$. Area $= \\int_{-\\sqrt{2}}^{\\sqrt{2}} (4 - 2x^2) \\, dx = \\left[4x - \\frac{2x^3}{3}\\right]_{-\\sqrt{2}}^{\\sqrt{2}} = \\frac{16\\sqrt{2}}{3}$"
        }
      ]
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
      "easy": [
        {
          "qid": "IN_008_e01",
          "q": "Find the area between $y = x$ and the $x$-axis for $-1 \\leq x \\leq 2$.",
          "a": "Split at $x = 0$. Area $= \\int_{-1}^{0} |x| \\, dx + \\int_0^2 x \\, dx = \\frac{1}{2} + 2 = \\frac{5}{2}$"
        },
        {
          "qid": "IN_008_e02",
          "q": "Find the area between $y = x^2 - 1$ and the $x$-axis for $0 \\leq x \\leq 2$.",
          "a": "$x^2 - 1 = 0$ at $x = 1$. For $0 < x < 1$: curve below axis. For $1 < x < 2$: above. Area $= \\int_0^1 (1-x^2) \\, dx + \\int_1^2 (x^2-1) \\, dx = \\frac{2}{3} + \\frac{4}{3} = 2$"
        },
        {
          "qid": "IN_008_e03",
          "q": "Find the total area between $y = \\sin(x)$ and the $x$-axis for $0 \\leq x \\leq 2\\pi$.",
          "a": "Split at $x = \\pi$. Area $= \\int_0^{\\pi} \\sin(x) \\, dx + \\int_{\\pi}^{2\\pi} |\\sin(x)| \\, dx = 2 + 2 = 4$"
        }
      ],
      "medium": [
        {
          "qid": "IN_008_m01",
          "q": "Find the area between $y = x$ and $y = x^2 - 2$ for $-1 \\leq x \\leq 2$.",
          "a": "Intersection: $x = x^2 - 2 \\Rightarrow x^2 - x - 2 = 0 \\Rightarrow (x-2)(x+1) = 0$, so $x = -1, 2$. For $-1 < x < 2$: $x > x^2 - 2$. Area $= \\int_{-1}^{2} [x - (x^2 - 2)] \\, dx = \\int_{-1}^{2} (-x^2 + x + 2) \\, dx = \\frac{9}{2}$"
        },
        {
          "qid": "IN_008_m02",
          "q": "Find the total area between $y = x^3$ and the $x$-axis for $-1 \\leq x \\leq 2$.",
          "a": "Split at $x = 0$. Area $= \\left|\\int_{-1}^{0} x^3 \\, dx\\right| + \\int_0^2 x^3 \\, dx = \\frac{1}{4} + 4 = \\frac{17}{4}$"
        },
        {
          "qid": "IN_008_m03",
          "q": "Find the total area between $y = \\cos(x)$ and $y = \\sin(x)$ for $0 \\leq x \\leq \\pi$.",
          "a": "Equal at $x = \\frac{\\pi}{4}$. For $0 < x < \\frac{\\pi}{4}$: $\\cos x > \\sin x$. For $\\frac{\\pi}{4} < x < \\pi$: $\\sin x > \\cos x$. Area $= \\int_0^{\\pi/4} (\\cos x - \\sin x) \\, dx + \\int_{\\pi/4}^{\\pi} (\\sin x - \\cos x) \\, dx = (\\sqrt{2}-1) + (\\sqrt{2}+1) = 2\\sqrt{2}$"
        },
        {
          "qid": "IN_008_m04",
          "q": "Find the area enclosed between $y = 2x - x^2$ and $y = x^2 - 4x$.",
          "a": "Intersection: $2x - x^2 = x^2 - 4x \\Rightarrow 2x^2 - 6x = 0 \\Rightarrow 2x(x-3) = 0$, so $x = 0, 3$. For $0 < x < 3$: $(2x-x^2) > (x^2-4x)$. Area $= \\int_0^3 (6x - 2x^2) \\, dx = \\left[3x^2 - \\frac{2x^3}{3}\\right]_0^3 = 27 - 18 = 9$"
        },
        {
          "qid": "IN_008_m05",
          "q": "Find the total area between $y = e^x - 1$ and the $x$-axis for $-1 \\leq x \\leq 1$.",
          "a": "$e^x - 1 = 0$ at $x = 0$. For $-1 < x < 0$: below axis. For $0 < x < 1$: above. Area $= \\int_{-1}^{0} (1-e^x) \\, dx + \\int_0^1 (e^x-1) \\, dx = e^{-1} + (e-2) = e^{-1} + e - 2$"
        }
      ],
      "hard": [
        {
          "qid": "IN_008_h01",
          "q": "Find the total area between $y = x^3 - x$ and the $x$-axis for $-1 \\leq x \\leq 2$.",
          "a": "Roots: $x(x-1)(x+1) = 0$ at $x = -1, 0, 1$. For $-1 < x < 0$: positive. For $0 < x < 1$: negative. For $1 < x < 2$: positive. Area $= \\int_{-1}^{0}(x^3-x)\\,dx + \\int_0^1(x-x^3)\\,dx + \\int_1^2(x^3-x)\\,dx = \\frac{1}{4} + \\frac{1}{4} + \\frac{9}{4} = \\frac{11}{4}$"
        },
        {
          "qid": "IN_008_h02",
          "q": "Find the total area between $y = \\sin(x)$ and $y = \\cos(x)$ for $0 \\leq x \\leq 2\\pi$.",
          "a": "Equal at $x = \\frac{\\pi}{4}$ and $x = \\frac{5\\pi}{4}$. Area $= \\int_0^{\\pi/4}(\\cos x - \\sin x)\\,dx + \\int_{\\pi/4}^{5\\pi/4}(\\sin x - \\cos x)\\,dx + \\int_{5\\pi/4}^{2\\pi}(\\cos x - \\sin x)\\,dx = 4\\sqrt{2}$"
        },
        {
          "qid": "IN_008_h03",
          "q": "Find the total area between $y = x^2 - 2x$ and $y = x$ for $-1 \\leq x \\leq 3$.",
          "a": "Intersection: $x^2 - 2x = x \\Rightarrow x^2 - 3x = 0 \\Rightarrow x(x-3) = 0$. For $-1 < x < 0$: $x^2-2x > x$. For $0 < x < 3$: $x > x^2-2x$. Area $= \\int_{-1}^{0}(x^2-3x)\\,dx + \\int_0^3(3x-x^2)\\,dx = \\frac{11}{6} + \\frac{9}{2} = \\frac{19}{3}$"
        },
        {
          "qid": "IN_008_h04",
          "q": "Find the area between $y = |x^2 - 4|$ and the $x$-axis for $0 \\leq x \\leq 3$.",
          "a": "For $0 \\leq x \\leq 2$: $|x^2-4| = 4-x^2$. For $2 \\leq x \\leq 3$: $|x^2-4| = x^2-4$. Area $= \\int_0^2 (4-x^2)\\,dx + \\int_2^3 (x^2-4)\\,dx = \\frac{16}{3} + \\frac{7}{3} = \\frac{23}{3}$"
        },
        {
          "qid": "IN_008_h05",
          "q": "Find the total area between $y = x^3 - 4x$ and the $x$-axis.",
          "a": "Roots: $x(x-2)(x+2) = 0$ at $x = -2, 0, 2$. For $-2 < x < 0$: positive. For $0 < x < 2$: negative. By symmetry, each region has area $\\int_0^2 |x^3-4x| \\, dx = \\left|\\left[\\frac{x^4}{4}-2x^2\\right]_0^2\\right| = 4$. Total area $= 4 + 4 = 8$"
        }
      ]
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
      "easy": [
        {
          "qid": "IN_009_e01",
          "q": "Find the area under $y = x^2$ from $x = 0$ to $x = 3$.",
          "a": "$\\int_0^3 x^2 \\, dx = \\left[\\frac{x^3}{3}\\right]_0^3 = 9$"
        },
        {
          "qid": "IN_009_e02",
          "q": "Find the area under $y = 2x + 1$ from $x = 1$ to $x = 3$.",
          "a": "$\\int_1^3 (2x+1) \\, dx = \\left[x^2+x\\right]_1^3 = 12 - 2 = 10$"
        },
        {
          "qid": "IN_009_e03",
          "q": "Find the area under $y = \\cos(x)$ from $x = 0$ to $x = \\frac{\\pi}{2}$.",
          "a": "$\\int_0^{\\pi/2} \\cos(x) \\, dx = \\left[\\sin(x)\\right]_0^{\\pi/2} = 1$"
        }
      ],
      "medium": [
        {
          "qid": "IN_009_m01",
          "q": "Find the area bounded by $y = x^2 - 4$, the $x$-axis, $x = 0$ and $x = 3$.",
          "a": "$y = 0$ at $x = 2$. Area $= \\left|\\int_0^2 (x^2-4) \\, dx\\right| + \\int_2^3 (x^2-4) \\, dx = \\frac{16}{3} + \\frac{7}{3} = \\frac{23}{3}$"
        },
        {
          "qid": "IN_009_m02",
          "q": "Find the area under $y = e^x$ from $x = 0$ to $x = 2$.",
          "a": "$\\int_0^2 e^x \\, dx = \\left[e^x\\right]_0^2 = e^2 - 1$"
        },
        {
          "qid": "IN_009_m03",
          "q": "Find the area under $y = \\frac{1}{x}$ from $x = 1$ to $x = 4$.",
          "a": "$\\int_1^4 \\frac{1}{x} \\, dx = \\left[\\ln(x)\\right]_1^4 = \\ln 4$"
        },
        {
          "qid": "IN_009_m04",
          "q": "Find the area under $y = \\sin(x)$ from $x = 0$ to $x = \\pi$.",
          "a": "$\\int_0^{\\pi} \\sin(x) \\, dx = \\left[-\\cos(x)\\right]_0^{\\pi} = 1 + 1 = 2$"
        },
        {
          "qid": "IN_009_m05",
          "q": "Find the area bounded by $y = 6x - x^2$, the $x$-axis, $x = 0$ and $x = 6$.",
          "a": "Curve is above axis for $0 < x < 6$. Area $= \\int_0^6 (6x - x^2) \\, dx = \\left[3x^2 - \\frac{x^3}{3}\\right]_0^6 = 108 - 72 = 36$"
        }
      ],
      "hard": [
        {
          "qid": "IN_009_h01",
          "q": "Find the area bounded by $y = x^3 - 6x^2 + 8x$, the $x$-axis, $x = 0$ and $x = 5$.",
          "a": "Roots: $x(x-2)(x-4) = 0$. Positive for $0<x<2$ and $4<x<5$; negative for $2<x<4$. Area $= \\int_0^2 (x^3-6x^2+8x)\\,dx + \\left|\\int_2^4 (x^3-6x^2+8x)\\,dx\\right| + \\int_4^5 (x^3-6x^2+8x)\\,dx = 4 + 4 + \\frac{25}{4} = \\frac{57}{4}$"
        },
        {
          "qid": "IN_009_h02",
          "q": "Find the area bounded by $y = x^2 - 3x + 2$, the $x$-axis, $x = -1$ and $x = 3$.",
          "a": "Roots: $(x-1)(x-2) = 0$. Positive for $x<1$ and $x>2$; negative for $1<x<2$. Area $= \\int_{-1}^{1}(x^2-3x+2)\\,dx + \\left|\\int_1^2(x^2-3x+2)\\,dx\\right| + \\int_2^3(x^2-3x+2)\\,dx$. Computing each part and summing gives the total area."
        },
        {
          "qid": "IN_009_h03",
          "q": "Find the area under $y = \\sqrt{x}$ from $x = 0$ to $x = 9$.",
          "a": "$\\int_0^9 \\sqrt{x} \\, dx = \\left[\\frac{2x^{3/2}}{3}\\right]_0^9 = \\frac{2 \\cdot 27}{3} = 18$"
        },
        {
          "qid": "IN_009_h04",
          "q": "Find the area under $y = xe^{-x}$ from $x = 0$ to $x = 2$.",
          "a": "Using integration by parts: $\\int xe^{-x} \\, dx = -xe^{-x} - e^{-x} + C$. Area $= \\left[-xe^{-x} - e^{-x}\\right]_0^2 = (-2e^{-2} - e^{-2}) - (0 - 1) = 1 - 3e^{-2}$"
        },
        {
          "qid": "IN_009_h05",
          "q": "Find the total area bounded by $y = \\ln(x)$, the $x$-axis, $x = \\frac{1}{e}$ and $x = e$.",
          "a": "$\\ln(x) = 0$ at $x = 1$. For $\\frac{1}{e} < x < 1$: below axis. For $1 < x < e$: above. Area $= \\int_{1/e}^{1} |\\ln(x)| \\, dx + \\int_1^e \\ln(x) \\, dx$. Using $\\int \\ln(x) \\, dx = x\\ln(x) - x$: Area $= (2/e - 0) + 1 = 2 - \\frac{2}{e}$"
        }
      ]
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
      "easy": [
        {
          "qid": "IN_010_e01",
          "q": "Find $k > 0$ such that $\\int_0^k 3 \\, dx = 12$.",
          "a": "$[3x]_0^k = 3k = 12 \\Rightarrow k = 4$"
        },
        {
          "qid": "IN_010_e02",
          "q": "Find $k > 0$ such that $\\int_0^k 4x \\, dx = 32$.",
          "a": "$[2x^2]_0^k = 2k^2 = 32 \\Rightarrow k^2 = 16 \\Rightarrow k = 4$"
        },
        {
          "qid": "IN_010_e03",
          "q": "Find $k$ such that $\\int_1^k 2 \\, dx = 6$.",
          "a": "$[2x]_1^k = 2k - 2 = 6 \\Rightarrow k = 4$"
        }
      ],
      "medium": [
        {
          "qid": "IN_010_m01",
          "q": "Find $k > 0$ such that $\\int_0^k 2x \\, dx = 18$.",
          "a": "$[x^2]_0^k = k^2 = 18 \\Rightarrow k = 3\\sqrt{2}$"
        },
        {
          "qid": "IN_010_m02",
          "q": "Find $k > 1$ such that $\\int_1^k 3x^2 \\, dx = 63$.",
          "a": "$[x^3]_1^k = k^3 - 1 = 63 \\Rightarrow k^3 = 64 \\Rightarrow k = 4$"
        },
        {
          "qid": "IN_010_m03",
          "q": "Find $k > 0$ such that $\\int_0^k (4x + 2) \\, dx = 12$.",
          "a": "$[2x^2 + 2x]_0^k = 2k^2 + 2k = 12 \\Rightarrow k^2 + k - 6 = 0 \\Rightarrow (k+3)(k-2) = 0$. Since $k > 0$: $k = 2$"
        },
        {
          "qid": "IN_010_m04",
          "q": "Find $k > 0$ such that $\\int_0^k x^2 \\, dx = 9$.",
          "a": "$\\left[\\frac{x^3}{3}\\right]_0^k = \\frac{k^3}{3} = 9 \\Rightarrow k^3 = 27 \\Rightarrow k = 3$"
        },
        {
          "qid": "IN_010_m05",
          "q": "Find $k$ such that $\\int_0^k e^x \\, dx = 3$.",
          "a": "$[e^x]_0^k = e^k - 1 = 3 \\Rightarrow e^k = 4 \\Rightarrow k = \\ln 4$"
        }
      ],
      "hard": [
        {
          "qid": "IN_010_h01",
          "q": "Find $k$ such that $\\int_1^k \\frac{1}{x} \\, dx = 2$.",
          "a": "$[\\ln(x)]_1^k = \\ln(k) = 2 \\Rightarrow k = e^2$"
        },
        {
          "qid": "IN_010_h02",
          "q": "Find $k > 0$ such that $\\int_0^k \\sqrt{x} \\, dx = 18$.",
          "a": "$\\left[\\frac{2x^{3/2}}{3}\\right]_0^k = \\frac{2k^{3/2}}{3} = 18 \\Rightarrow k^{3/2} = 27 \\Rightarrow k = 9$"
        },
        {
          "qid": "IN_010_h03",
          "q": "Find the smallest $k > 0$ such that $\\int_0^k \\cos(x) \\, dx = \\frac{1}{2}$.",
          "a": "$[\\sin(x)]_0^k = \\sin(k) = \\frac{1}{2}$. Smallest positive solution: $k = \\frac{\\pi}{6}$"
        },
        {
          "qid": "IN_010_h04",
          "q": "Find $k > 1$ such that $\\int_1^k \\frac{2}{x^2} \\, dx = \\frac{3}{2}$.",
          "a": "$\\left[-\\frac{2}{x}\\right]_1^k = -\\frac{2}{k} + 2 = \\frac{3}{2} \\Rightarrow \\frac{2}{k} = \\frac{1}{2} \\Rightarrow k = 4$"
        },
        {
          "qid": "IN_010_h05",
          "q": "Find $k > 2$ such that $\\int_2^k (x-2)^2 \\, dx = 9$.",
          "a": "$\\left[\\frac{(x-2)^3}{3}\\right]_2^k = \\frac{(k-2)^3}{3} = 9 \\Rightarrow (k-2)^3 = 27 \\Rightarrow k - 2 = 3 \\Rightarrow k = 5$"
        }
      ]
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
      "easy": [
        {
          "qid": "IN_011_e01",
          "q": "Water flows into a tank at a constant rate of $5$ L/min for $0 \\leq t \\leq 6$ minutes. Find the total volume that enters the tank.",
          "a": "$V = \\int_0^6 5 \\, dt = [5t]_0^6 = 30$ L"
        },
        {
          "qid": "IN_011_e02",
          "q": "An object moves with velocity $v(t) = 3t$ m/s. Find the total distance travelled from $t = 0$ to $t = 4$.",
          "a": "$d = \\int_0^4 3t \\, dt = \\left[\\frac{3t^2}{2}\\right]_0^4 = 24$ m"
        },
        {
          "qid": "IN_011_e03",
          "q": "A factory produces items at a rate of $R(t) = 100 - 10t$ items/hour for $0 \\leq t \\leq 5$. Find the total items produced.",
          "a": "$N = \\int_0^5 (100-10t) \\, dt = \\left[100t - 5t^2\\right]_0^5 = 500 - 125 = 375$ items"
        }
      ],
      "medium": [
        {
          "qid": "IN_011_m01",
          "q": "Water flows into a tank at a rate of $R(t) = 4t - t^2$ L/min for $0 \\leq t \\leq 4$. Find the total volume that enters the tank.",
          "a": "$V = \\int_0^4 (4t - t^2) \\, dt = \\left[2t^2 - \\frac{t^3}{3}\\right]_0^4 = 32 - \\frac{64}{3} = \\frac{32}{3} \\approx 10.67$ L"
        },
        {
          "qid": "IN_011_m02",
          "q": "Bugs are removed from a crop at a rate of $R(t) = 200e^{-0.5t}$ per day. Find the total number removed in the first 4 days.",
          "a": "$N = \\int_0^4 200e^{-0.5t} \\, dt = \\left[-400e^{-0.5t}\\right]_0^4 = -400e^{-2} + 400 = 400(1 - e^{-2}) \\approx 346$"
        },
        {
          "qid": "IN_011_m03",
          "q": "A company's rate of profit is $P'(t) = 6t^2 - 2t + 100$ dollars/day. Find the total profit over the first 10 days.",
          "a": "$P = \\int_0^{10} (6t^2 - 2t + 100) \\, dt = \\left[2t^3 - t^2 + 100t\\right]_0^{10} = 2000 - 100 + 1000 = \\$2900$"
        },
        {
          "qid": "IN_011_m04",
          "q": "Water leaks from a tank at a rate of $R(t) = \\frac{3}{(t+1)^2}$ L/min. Find the total volume leaked in the first 5 minutes.",
          "a": "$V = \\int_0^5 \\frac{3}{(t+1)^2} \\, dt = \\left[-\\frac{3}{t+1}\\right]_0^5 = -\\frac{1}{2} + 3 = \\frac{5}{2}$ L"
        },
        {
          "qid": "IN_011_m05",
          "q": "A particle moves with velocity $v(t) = t^2 - 4t + 3$ m/s for $0 \\leq t \\leq 3$. Find the total distance travelled.",
          "a": "$v = 0$ at $t = 1, 3$. For $0 < t < 1$: $v > 0$; for $1 < t < 3$: $v < 0$. Distance $= \\int_0^1 (t^2-4t+3) \\, dt + \\left|\\int_1^3 (t^2-4t+3) \\, dt\\right| = \\frac{4}{3} + \\frac{4}{3} = \\frac{8}{3}$ m"
        },
        {
          "qid": "IN_011_m06",
          "q": "A particle has acceleration $a(t) = 6$ m/s² and initial velocity $v(0) = 2$ m/s. Find the displacement over $0 \\leq t \\leq 3$.",
          "a": "$v(t) = v(0) + \\int_0^t 6 \\, ds = 2 + 6t$. Displacement $= \\int_0^3 (2+6t) \\, dt = [2t+3t^2]_0^3 = 6 + 27 = 33$ m"
        }
      ],
      "hard": [
        {
          "qid": "IN_011_h01",
          "q": "Water flows into a reservoir at $R(t) = 50\\sin\\left(\\frac{\\pi t}{6}\\right)$ L/hr for $0 \\leq t \\leq 6$ hours. Find the total volume.",
          "a": "$V = \\int_0^6 50\\sin\\left(\\frac{\\pi t}{6}\\right) dt = 50\\left[-\\frac{6}{\\pi}\\cos\\left(\\frac{\\pi t}{6}\\right)\\right]_0^6 = \\frac{300}{\\pi}[-\\cos(\\pi)+\\cos(0)] = \\frac{600}{\\pi}$ L"
        },
        {
          "qid": "IN_011_h02",
          "q": "A substance dissolves at a rate of $R(t) = te^{-t/2}$ kg/min for $0 \\leq t \\leq 4$. Find the total mass dissolved.",
          "a": "By parts: $\\int te^{-t/2} \\, dt = -2te^{-t/2} - 4e^{-t/2} + C$. Total $= \\left[-2te^{-t/2} - 4e^{-t/2}\\right]_0^4 = (-8e^{-2} - 4e^{-2}) - (-4) = 4 - 12e^{-2}$ kg"
        },
        {
          "qid": "IN_011_h03",
          "q": "Water flows into a tank at $10$ L/min and out at $t$ L/min. Find the net volume gained after 8 minutes.",
          "a": "Net rate $= 10 - t$. $V = \\int_0^8 (10 - t) \\, dt = \\left[10t - \\frac{t^2}{2}\\right]_0^8 = 80 - 32 = 48$ L"
        },
        {
          "qid": "IN_011_h04",
          "q": "Temperature changes at $\\frac{dT}{dt} = -3e^{-0.1t}$ °C/min. Find the total temperature change over $0 \\leq t \\leq 10$.",
          "a": "$\\Delta T = \\int_0^{10} -3e^{-0.1t} \\, dt = \\left[30e^{-0.1t}\\right]_0^{10} = 30e^{-1} - 30 = 30(e^{-1} - 1) \\approx -18.96$ °C"
        },
        {
          "qid": "IN_011_h05",
          "q": "A particle has velocity $v(t) = 6t - t^2$ m/s for $0 \\leq t \\leq 8$. Find the total distance travelled.",
          "a": "$v = 0$ at $t = 0, 6$. For $0 < t < 6$: $v > 0$; for $6 < t < 8$: $v < 0$. Distance $= \\int_0^6 (6t-t^2) \\, dt + \\left|\\int_6^8 (6t-t^2) \\, dt\\right| = 36 + \\frac{44}{3} = \\frac{152}{3}$ m"
        },
        {
          "qid": "IN_011_h06",
          "q": "A particle has acceleration $a(t) = 4 - 2t$ m/s² and $v(0) = 0$ m/s. Find the total distance over $0 \\leq t \\leq 4$.",
          "a": "$v(t) = \\int_0^t (4-2s) \\, ds = 4t - t^2 = t(4-t)$. Since $v \\geq 0$ for $0 \\leq t \\leq 4$, distance $= \\int_0^4 (4t-t^2) \\, dt = \\left[2t^2-\\frac{t^3}{3}\\right]_0^4 = \\frac{32}{3}$ m"
        },
        {
          "qid": "IN_011_h07",
          "q": "A particle has acceleration $a(t) = 6t - 6$ m/s² and $v(0) = 0$. Find the total distance over $0 \\leq t \\leq 3$.",
          "a": "$v(t) = 3t^2 - 6t = 3t(t-2)$. $v = 0$ at $t = 0, 2$. For $0 < t < 2$: $v < 0$; for $2 < t < 3$: $v > 0$. Distance $= \\left|\\int_0^2 (3t^2-6t) \\, dt\\right| + \\int_2^3 (3t^2-6t) \\, dt = 4 + 4 = 8$ m"
        }
      ]
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
      "easy": [
        {
          "qid": "IN_012_e01",
          "q": "A population grows at a constant rate of 50 per year. If $P(0) = 200$, find $P(6)$.",
          "a": "$P(6) = 200 + \\int_0^6 50 \\, dt = 200 + 300 = 500$"
        },
        {
          "qid": "IN_012_e02",
          "q": "A tank leaks at $3$ L/min. If it starts with $60$ L, find the volume after $10$ minutes.",
          "a": "$V(10) = 60 + \\int_0^{10} (-3) \\, dt = 60 - 30 = 30$ L"
        },
        {
          "qid": "IN_012_e03",
          "q": "A particle moves at $v(t) = 4$ m/s with $s(0) = 10$ m. Find $s(5)$.",
          "a": "$s(5) = 10 + \\int_0^5 4 \\, dt = 10 + 20 = 30$ m"
        }
      ],
      "medium": [
        {
          "qid": "IN_012_m01",
          "q": "A population changes at rate $\\frac{dP}{dt} = 100e^{0.02t}$. If $P(0) = 5000$, find $P(10)$.",
          "a": "$P(10) = 5000 + \\int_0^{10} 100e^{0.02t} \\, dt = 5000 + \\left[5000e^{0.02t}\\right]_0^{10} = 5000 + 5000(e^{0.2} - 1) = 5000e^{0.2} \\approx 6107$"
        },
        {
          "qid": "IN_012_m02",
          "q": "A particle has velocity $v(t) = 3t^2$ m/s and $s(0) = 5$ m. Find $s(4)$.",
          "a": "$s(4) = 5 + \\int_0^4 3t^2 \\, dt = 5 + [t^3]_0^4 = 5 + 64 = 69$ m"
        },
        {
          "qid": "IN_012_m03",
          "q": "Membership grows at $\\frac{dN}{dt} = 200 - 4t$ per month. If $N(0) = 1000$, find $N(20)$.",
          "a": "$N(20) = 1000 + \\int_0^{20} (200-4t) \\, dt = 1000 + \\left[200t - 2t^2\\right]_0^{20} = 1000 + 4000 - 800 = 4200$"
        },
        {
          "qid": "IN_012_m04",
          "q": "Temperature cools at $\\frac{dT}{dt} = -2e^{-0.5t}$ with $T(0) = 80$°C. Find $T(4)$.",
          "a": "$T(4) = 80 + \\int_0^4 -2e^{-0.5t} \\, dt = 80 + \\left[4e^{-0.5t}\\right]_0^4 = 80 + 4e^{-2} - 4 = 76 + 4e^{-2} \\approx 76.54$°C"
        },
        {
          "qid": "IN_012_m05",
          "q": "Sales grow at $\\frac{dS}{dt} = \\frac{50}{t+1}$ per month. If $S(0) = 0$, find sales after 3 months.",
          "a": "$S(3) = \\int_0^3 \\frac{50}{t+1} \\, dt = 50[\\ln(t+1)]_0^3 = 50\\ln 4 \\approx 69.3$"
        }
      ],
      "hard": [
        {
          "qid": "IN_012_h01",
          "q": "A particle has velocity $v(t) = 6t - t^2$ m/s and $s(0) = 10$ m. Find $s(4)$ and the total distance for $0 \\leq t \\leq 4$.",
          "a": "$s(4) = 10 + \\int_0^4 (6t-t^2) \\, dt = 10 + \\left[3t^2-\\frac{t^3}{3}\\right]_0^4 = 10 + \\frac{80}{3} = \\frac{110}{3}$ m. Since $v > 0$ on $[0,4]$ (as $v = 0$ only at $t = 0, 6$), total distance $= \\frac{80}{3}$ m."
        },
        {
          "qid": "IN_012_h02",
          "q": "A population grows at $\\frac{dP}{dt} = \\frac{60t}{t^2+9}$ with $P(0) = 500$. Find $P(4)$.",
          "a": "$P(4) = 500 + \\int_0^4 \\frac{60t}{t^2+9} \\, dt = 500 + 30[\\ln(t^2+9)]_0^4 = 500 + 30(\\ln 25 - \\ln 9) = 500 + 30\\ln\\frac{25}{9} \\approx 530.6$"
        },
        {
          "qid": "IN_012_h03",
          "q": "Water flows in at $10$ L/min, out at $(2+t)$ L/min. If $V(0) = 100$ L, find $V(6)$.",
          "a": "$V(6) = 100 + \\int_0^6 [10-(2+t)] \\, dt = 100 + \\int_0^6 (8-t) \\, dt = 100 + \\left[8t - \\frac{t^2}{2}\\right]_0^6 = 100 + 48 - 18 = 130$ L"
        },
        {
          "qid": "IN_012_h04",
          "q": "A particle has $v(t) = t^2 - 4t$ m/s and $s(0) = 0$. Find the total distance for $0 \\leq t \\leq 6$.",
          "a": "$v = 0$ at $t = 0, 4$. For $0 < t < 4$: $v < 0$; for $4 < t < 6$: $v > 0$. Distance $= \\left|\\int_0^4 (t^2-4t) \\, dt\\right| + \\int_4^6 (t^2-4t) \\, dt = \\frac{32}{3} + \\frac{32}{3} = \\frac{64}{3}$ m"
        },
        {
          "qid": "IN_012_h05",
          "q": "Bacteria grow at $\\frac{dN}{dt} = 500e^{0.1t}$. If $N(0) = 2000$, find the time $T$ when $N = 10000$.",
          "a": "$N(T) = 2000 + \\int_0^T 500e^{0.1t} \\, dt = 2000 + 5000(e^{0.1T}-1)$. Set $= 10000$: $5000e^{0.1T} = 13000 \\Rightarrow e^{0.1T} = 2.6 \\Rightarrow T = 10\\ln\\frac{13}{5} \\approx 9.56$"
        }
      ]
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
      "easy": [
        {
          "qid": "IN_013_e01",
          "q": "Find the volume when $y = 2$ for $0 \\leq x \\leq 3$ is rotated about the $x$-axis.",
          "a": "$V = \\pi \\int_0^3 4 \\, dx = 4\\pi[x]_0^3 = 12\\pi$"
        },
        {
          "qid": "IN_013_e02",
          "q": "Find the volume when $y = x$ for $0 \\leq x \\leq 2$ is rotated about the $x$-axis.",
          "a": "$V = \\pi \\int_0^2 x^2 \\, dx = \\pi\\left[\\frac{x^3}{3}\\right]_0^2 = \\frac{8\\pi}{3}$"
        },
        {
          "qid": "IN_013_e03",
          "q": "Find the volume when $y = 3$ for $1 \\leq x \\leq 4$ is rotated about the $x$-axis.",
          "a": "$V = \\pi \\int_1^4 9 \\, dx = 9\\pi[x]_1^4 = 27\\pi$"
        }
      ],
      "medium": [
        {
          "qid": "IN_013_m01",
          "q": "Find the volume of the solid formed when $y = \\sqrt{x}$ for $0 \\leq x \\leq 4$ is rotated about the $x$-axis.",
          "a": "$V = \\pi \\int_0^4 (\\sqrt{x})^2 \\, dx = \\pi \\int_0^4 x \\, dx = \\pi \\left[\\frac{x^2}{2}\\right]_0^4 = 8\\pi$"
        },
        {
          "qid": "IN_013_m02",
          "q": "Find the volume when $y = e^x$ for $0 \\leq x \\leq 1$ is rotated about the $x$-axis.",
          "a": "$V = \\pi \\int_0^1 e^{2x} \\, dx = \\pi \\left[\\frac{e^{2x}}{2}\\right]_0^1 = \\frac{\\pi(e^2 - 1)}{2}$"
        },
        {
          "qid": "IN_013_m03",
          "q": "Find the volume when $y = \\frac{1}{x}$ for $1 \\leq x \\leq 3$ is rotated about the $x$-axis.",
          "a": "$V = \\pi \\int_1^3 \\frac{1}{x^2} \\, dx = \\pi \\left[-\\frac{1}{x}\\right]_1^3 = \\pi\\left(-\\frac{1}{3}+1\\right) = \\frac{2\\pi}{3}$"
        },
        {
          "qid": "IN_013_m04",
          "q": "Find the volume when $y = x^2$ for $0 \\leq x \\leq 2$ is rotated about the $x$-axis.",
          "a": "$V = \\pi \\int_0^2 x^4 \\, dx = \\pi \\left[\\frac{x^5}{5}\\right]_0^2 = \\frac{32\\pi}{5}$"
        },
        {
          "qid": "IN_013_m05",
          "q": "Find the volume when $y = \\sin(x)$ for $0 \\leq x \\leq \\pi$ is rotated about the $x$-axis.",
          "a": "$V = \\pi \\int_0^{\\pi} \\sin^2(x) \\, dx = \\pi \\int_0^{\\pi} \\frac{1-\\cos(2x)}{2} \\, dx = \\pi\\left[\\frac{x}{2} - \\frac{\\sin(2x)}{4}\\right]_0^{\\pi} = \\frac{\\pi^2}{2}$"
        }
      ],
      "hard": [
        {
          "qid": "IN_013_h01",
          "q": "Find the volume when $y = \\sqrt{4-x^2}$ for $-2 \\leq x \\leq 2$ is rotated about the $x$-axis.",
          "a": "$V = \\pi \\int_{-2}^{2} (4-x^2) \\, dx = \\pi\\left[4x - \\frac{x^3}{3}\\right]_{-2}^{2} = \\frac{32\\pi}{3}$. (This is a sphere of radius 2: $V = \\frac{4}{3}\\pi(2)^3 = \\frac{32\\pi}{3}$ \\checkmark)"
        },
        {
          "qid": "IN_013_h02",
          "q": "Find the volume when the region between $y = x^2$ and $y = x$ (for $0 \\leq x \\leq 1$) is rotated about the $x$-axis.",
          "a": "$V = \\pi \\int_0^1 [x^2 - (x^2)^2] \\, dx = \\pi \\int_0^1 (x^2 - x^4) \\, dx = \\pi\\left[\\frac{x^3}{3} - \\frac{x^5}{5}\\right]_0^1 = \\frac{2\\pi}{15}$"
        },
        {
          "qid": "IN_013_h03",
          "q": "Find the volume when $y = e^x$ for $0 \\leq x \\leq 2$ is rotated about the $x$-axis.",
          "a": "$V = \\pi \\int_0^2 e^{2x} \\, dx = \\pi\\left[\\frac{e^{2x}}{2}\\right]_0^2 = \\frac{\\pi(e^4-1)}{2}$"
        },
        {
          "qid": "IN_013_h04",
          "q": "Find the volume when $y = x + \\frac{1}{x}$ for $1 \\leq x \\leq 2$ is rotated about the $x$-axis.",
          "a": "$V = \\pi \\int_1^2 \\left(x+\\frac{1}{x}\\right)^2 dx = \\pi \\int_1^2 \\left(x^2+2+\\frac{1}{x^2}\\right) dx = \\pi\\left[\\frac{x^3}{3}+2x-\\frac{1}{x}\\right]_1^2 = \\pi\\left(\\frac{8}{3}+4-\\frac{1}{2}-\\frac{1}{3}-2+1\\right) = \\frac{29\\pi}{6}$"
        },
        {
          "qid": "IN_013_h05",
          "q": "Find the volume when $y = 2x - x^2$ for $0 \\leq x \\leq 2$ is rotated about the $x$-axis.",
          "a": "$V = \\pi \\int_0^2 (2x-x^2)^2 \\, dx = \\pi \\int_0^2 (4x^2 - 4x^3 + x^4) \\, dx = \\pi\\left[\\frac{4x^3}{3} - x^4 + \\frac{x^5}{5}\\right]_0^2 = \\pi\\left(\\frac{32}{3} - 16 + \\frac{32}{5}\\right) = \\frac{16\\pi}{15}$"
        }
      ]
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
      "easy": [
        {
          "qid": "IN_014_e01",
          "q": "Evaluate $\\int_0^4 3 \\, dx$ using a geometric argument.",
          "a": "This is the area of a rectangle with width 4 and height 3. $\\int_0^4 3 \\, dx = 4 \\times 3 = 12$"
        },
        {
          "qid": "IN_014_e02",
          "q": "Evaluate $\\int_0^6 x \\, dx$ using a geometric argument.",
          "a": "The graph of $y = x$ from $0$ to $6$ forms a triangle with base 6 and height 6. Area $= \\frac{1}{2}(6)(6) = 18$"
        },
        {
          "qid": "IN_014_e03",
          "q": "The graph of $f(x) = \\sqrt{4 - x^2}$ is a semicircle of radius 2. Find $\\int_{-2}^{2} f(x) \\, dx$.",
          "a": "This is the area of a semicircle of radius 2: $\\frac{\\pi(2)^2}{2} = 2\\pi$"
        }
      ],
      "medium": [
        {
          "qid": "IN_014_m01",
          "q": "The graph of $f(x) = \\sqrt{9 - x^2}$ is a semicircle of radius 3. Find $\\int_0^3 f(x) \\, dx$.",
          "a": "This is a quarter circle of radius 3. Area $= \\frac{1}{4}\\pi(3)^2 = \\frac{9\\pi}{4}$"
        },
        {
          "qid": "IN_014_m02",
          "q": "Find $\\int_{-5}^{5} \\sqrt{25 - x^2} \\, dx$ using a geometric argument.",
          "a": "This is the area of a semicircle of radius 5: $\\frac{\\pi(5)^2}{2} = \\frac{25\\pi}{2}$"
        },
        {
          "qid": "IN_014_m03",
          "q": "Find $\\int_{-1}^{1} \\sqrt{1 - x^2} \\, dx$ using a geometric argument.",
          "a": "This is the area of a semicircle of radius 1: $\\frac{\\pi(1)^2}{2} = \\frac{\\pi}{2}$"
        },
        {
          "qid": "IN_014_m04",
          "q": "Find $\\int_0^4 \\sqrt{16 - x^2} \\, dx$ using a geometric argument.",
          "a": "This is a quarter circle of radius 4: $\\frac{\\pi(4)^2}{4} = 4\\pi$"
        },
        {
          "qid": "IN_014_m05",
          "q": "Find $\\int_{-3}^{3} \\left(2 + \\sqrt{9 - x^2}\\right) dx$.",
          "a": "$\\int_{-3}^{3} 2 \\, dx + \\int_{-3}^{3} \\sqrt{9-x^2} \\, dx = 12 + \\frac{9\\pi}{2}$ (rectangle + semicircle)"
        }
      ],
      "hard": [
        {
          "qid": "IN_014_h01",
          "q": "Find $\\int_{-3}^{0} \\sqrt{9 - x^2} \\, dx$ using a geometric argument.",
          "a": "This is a quarter circle of radius 3 (the left quarter of the semicircle): $\\frac{\\pi(3)^2}{4} = \\frac{9\\pi}{4}$"
        },
        {
          "qid": "IN_014_h02",
          "q": "Find $\\int_{-3}^{3} \\left(x + \\sqrt{9-x^2}\\right) dx$.",
          "a": "$\\int_{-3}^{3} x \\, dx = 0$ (odd function, symmetric interval). $\\int_{-3}^{3} \\sqrt{9-x^2} \\, dx = \\frac{9\\pi}{2}$. Total $= \\frac{9\\pi}{2}$"
        },
        {
          "qid": "IN_014_h03",
          "q": "Find $\\int_0^2 \\left(\\sqrt{4-x^2} + x\\right) dx$.",
          "a": "$\\int_0^2 \\sqrt{4-x^2} \\, dx = \\pi$ (quarter circle, radius 2). $\\int_0^2 x \\, dx = 2$. Total $= \\pi + 2$"
        },
        {
          "qid": "IN_014_h04",
          "q": "Find $\\int_{-2}^{2} \\left(|x| + \\sqrt{4-x^2}\\right) dx$.",
          "a": "$\\int_{-2}^{2} |x| \\, dx = 2\\int_0^2 x \\, dx = 4$ (two triangles). $\\int_{-2}^{2} \\sqrt{4-x^2} \\, dx = 2\\pi$ (semicircle). Total $= 4 + 2\\pi$"
        },
        {
          "qid": "IN_014_h05",
          "q": "Find the area between $y = \\sqrt{4-x^2}$ and $y = 2-x$ for $0 \\leq x \\leq 2$.",
          "a": "Quarter circle area $= \\int_0^2 \\sqrt{4-x^2} \\, dx = \\pi$. Triangle area $= \\int_0^2 (2-x) \\, dx = 2$. Both curves pass through $(0,2)$ and $(2,0)$. Area between $= \\pi - 2$"
        }
      ]
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
      "easy": [
        {
          "qid": "IN_015_e01",
          "q": "The graph of $f(x)$ encloses an area of $8$ units² above the $x$-axis and $3$ units² below. Find $\\int f(x) \\, dx$ over this region.",
          "a": "$\\int f(x) \\, dx = 8 + (-3) = 5$"
        },
        {
          "qid": "IN_015_e02",
          "q": "Given $\\int_0^6 f(x) \\, dx = 10$ and $\\int_0^3 f(x) \\, dx = 4$, find $\\int_3^6 f(x) \\, dx$.",
          "a": "$\\int_3^6 f(x) \\, dx = \\int_0^6 f(x) \\, dx - \\int_0^3 f(x) \\, dx = 10 - 4 = 6$"
        },
        {
          "qid": "IN_015_e03",
          "q": "From a graph, $\\int_0^4 f(x) \\, dx = -2$. What does this tell us about the areas above and below the $x$-axis?",
          "a": "The area below the $x$-axis exceeds the area above by 2 units². The signed integral is negative because more area lies below the axis."
        }
      ],
      "medium": [
        {
          "qid": "IN_015_m01",
          "q": "The graph of $f(x)$ encloses an area of 6 units² above the $x$-axis between $x = 0$ and $x = 3$, and an area of 2 units² below the $x$-axis between $x = 3$ and $x = 5$. Find $\\int_0^5 f(x) \\, dx$.",
          "a": "$\\int_0^5 f(x) \\, dx = 6 + (-2) = 4$"
        },
        {
          "qid": "IN_015_m02",
          "q": "From a graph, $\\int_0^4 f(x) \\, dx = 7$ and $\\int_0^2 f(x) \\, dx = 3$. Find $\\int_2^4 f(x) \\, dx$.",
          "a": "$\\int_2^4 f(x) \\, dx = 7 - 3 = 4$"
        },
        {
          "qid": "IN_015_m03",
          "q": "Given $\\int_0^5 f(x) \\, dx = 12$ and $\\int_0^3 f(x) \\, dx = 8$, find $\\int_3^5 f(x) \\, dx$.",
          "a": "$\\int_3^5 f(x) \\, dx = 12 - 8 = 4$"
        },
        {
          "qid": "IN_015_m04",
          "q": "From a graph, $f(x)$ encloses 10 units² above the axis for $0 \\leq x \\leq 4$, and 3 units² below for $4 \\leq x \\leq 7$. Find both $\\int_0^7 f(x) \\, dx$ and the total area.",
          "a": "$\\int_0^7 f(x) \\, dx = 10 - 3 = 7$. Total area $= 10 + 3 = 13$"
        },
        {
          "qid": "IN_015_m05",
          "q": "Given $\\int_0^8 f(x) \\, dx = 6$ and $\\int_0^5 f(x) \\, dx = 9$, find $\\int_5^8 f(x) \\, dx$.",
          "a": "$\\int_5^8 f(x) \\, dx = 6 - 9 = -3$"
        },
        {
          "qid": "IN_015_m06",
          "q": "The function $f$ is even on $[-3, 3]$ and $\\int_0^3 f(x) \\, dx = 7$. Find $\\int_{-3}^{3} f(x) \\, dx$.",
          "a": "Since $f$ is even: $\\int_{-3}^{3} f(x) \\, dx = 2\\int_0^3 f(x) \\, dx = 2(7) = 14$"
        }
      ],
      "hard": [
        {
          "qid": "IN_015_h01",
          "q": "From a graph: $\\int_0^3 f(x) \\, dx = 5$, $\\int_3^6 f(x) \\, dx = -2$, $\\int_6^8 f(x) \\, dx = 4$. Find $\\int_0^8 f(x) \\, dx$ and the total area enclosed.",
          "a": "$\\int_0^8 f(x) \\, dx = 5 + (-2) + 4 = 7$. Total area $= 5 + 2 + 4 = 11$"
        },
        {
          "qid": "IN_015_h02",
          "q": "Given $\\int_0^6 f(x) \\, dx = 0$ and $\\int_0^3 f(x) \\, dx = 4$, find $\\int_3^6 f(x) \\, dx$ and the total area.",
          "a": "$\\int_3^6 f(x) \\, dx = 0 - 4 = -4$. Total area $= 4 + |-4| = 8$"
        },
        {
          "qid": "IN_015_h03",
          "q": "Given $\\int_0^4 2f(x) \\, dx = 16$, find $\\int_0^4 f(x) \\, dx$.",
          "a": "$\\int_0^4 2f(x) \\, dx = 2\\int_0^4 f(x) \\, dx = 16 \\Rightarrow \\int_0^4 f(x) \\, dx = 8$"
        },
        {
          "qid": "IN_015_h04",
          "q": "The function $f$ is odd on $[-2, 2]$ and $\\int_0^2 f(x) \\, dx = 5$. Find $\\int_{-2}^0 f(x) \\, dx$.",
          "a": "Since $f$ is odd, $\\int_{-2}^{2} f(x) \\, dx = 0$. So $\\int_{-2}^0 f(x) \\, dx = 0 - 5 = -5$"
        },
        {
          "qid": "IN_015_h05",
          "q": "Given $\\int_0^5 f(x) \\, dx = 10$ and $\\int_0^5 g(x) \\, dx = 3$, find $\\int_0^5 [f(x) - g(x)] \\, dx$.",
          "a": "$\\int_0^5 [f(x) - g(x)] \\, dx = \\int_0^5 f(x) \\, dx - \\int_0^5 g(x) \\, dx = 10 - 3 = 7$"
        },
        {
          "qid": "IN_015_h06",
          "q": "From a graph: $\\int_0^2 f(x) \\, dx = 5$, $\\int_2^4 f(x) \\, dx = -3$, $\\int_4^6 f(x) \\, dx = -2$. Find $\\int_0^6 f(x) \\, dx$ and the total area enclosed. Is there a value $c \\in [0,6]$ where $\\int_0^c f(x) \\, dx = 0$?",
          "a": "$\\int_0^6 f(x) \\, dx = 5 + (-3) + (-2) = 0$. Total area $= 5 + 3 + 2 = 10$. Since $\\int_0^6 = 0$ and $\\int_0^2 = 5 > 0$, the accumulation function starts positive and ends at 0, so by IVT there must be some $c \\in (2, 6)$ where $\\int_0^c f(x) \\, dx = 0$ as the function returns to zero."
        }
      ]
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
      "easy": [
        {
          "qid": "IN_016_e01",
          "q": "Find $k > 0$ such that $\\int_0^k (2 - x) \\, dx = 0$.",
          "a": "$\\left[2x - \\frac{x^2}{2}\\right]_0^k = 2k - \\frac{k^2}{2} = 0 \\Rightarrow k(4-k) = 0$. Since $k > 0$: $k = 4$"
        },
        {
          "qid": "IN_016_e02",
          "q": "Find $k > 0$ such that $\\int_0^k (x - 3) \\, dx = 0$.",
          "a": "$\\left[\\frac{x^2}{2} - 3x\\right]_0^k = \\frac{k^2}{2} - 3k = 0 \\Rightarrow k(k-6) = 0$. Since $k > 0$: $k = 6$"
        },
        {
          "qid": "IN_016_e03",
          "q": "Find $k > 0$ such that $\\int_{-2}^k x \\, dx = 0$.",
          "a": "$\\left[\\frac{x^2}{2}\\right]_{-2}^k = \\frac{k^2}{2} - 2 = 0 \\Rightarrow k^2 = 4 \\Rightarrow k = 2$"
        }
      ],
      "medium": [
        {
          "qid": "IN_016_m01",
          "q": "Given the graph of $f(x)$ where $\\int_0^3 f(x) \\, dx = 5$ and $f(x) = -(x - 3)$ for $x > 3$, find $k > 3$ such that $\\int_0^k f(x) \\, dx = 0$.",
          "a": "$\\int_3^k -(x-3) \\, dx = -\\frac{(k-3)^2}{2}$. Need $5 - \\frac{(k-3)^2}{2} = 0 \\Rightarrow (k-3)^2 = 10 \\Rightarrow k = 3 + \\sqrt{10}$"
        },
        {
          "qid": "IN_016_m02",
          "q": "Find $k > 0$ such that $\\int_0^k (x^2 - 4) \\, dx = 0$.",
          "a": "$\\left[\\frac{x^3}{3} - 4x\\right]_0^k = \\frac{k^3}{3} - 4k = 0 \\Rightarrow k\\left(\\frac{k^2}{3}-4\\right) = 0 \\Rightarrow k^2 = 12 \\Rightarrow k = 2\\sqrt{3}$"
        },
        {
          "qid": "IN_016_m03",
          "q": "Find $k > 1$ such that $\\int_{-1}^k (1 - x^2) \\, dx = 0$.",
          "a": "$\\left[x - \\frac{x^3}{3}\\right]_{-1}^k = \\left(k - \\frac{k^3}{3}\\right) - \\left(-\\frac{2}{3}\\right) = 0$. So $k - \\frac{k^3}{3} + \\frac{2}{3} = 0$, giving $k^3 - 3k - 2 = 0 \\Rightarrow (k+1)^2(k-2) = 0$. Since $k > 1$: $k = 2$"
        },
        {
          "qid": "IN_016_m04",
          "q": "Find the smallest $k > 0$ such that $\\int_0^k \\sin(x) \\, dx = 0$.",
          "a": "$[-\\cos(x)]_0^k = 1 - \\cos(k) = 0 \\Rightarrow \\cos(k) = 1$. Smallest positive solution: $k = 2\\pi$"
        },
        {
          "qid": "IN_016_m05",
          "q": "Find the largest $k > 0$ for which $\\int_0^k (6x - x^2 - 5) \\, dx = 0$.",
          "a": "Note $6x-x^2-5 = -(x-1)(x-5)$, which is positive for $1 < x < 5$. $\\int_0^k (6x-x^2-5) \\, dx = \\left[3x^2-\\frac{x^3}{3}-5x\\right]_0^k = 0$, so $k\\left(3k-\\frac{k^2}{3}-5\\right) = 0$, giving $k^2-9k+15 = 0 \\Rightarrow k = \\frac{9+\\sqrt{21}}{2}$"
        }
      ],
      "hard": [
        {
          "qid": "IN_016_h01",
          "q": "Find $k > 0$ such that $\\int_0^k (x^3 - 4x) \\, dx = 0$.",
          "a": "$\\left[\\frac{x^4}{4} - 2x^2\\right]_0^k = \\frac{k^4}{4} - 2k^2 = 0 \\Rightarrow k^2(k^2-8) = 0 \\Rightarrow k = 2\\sqrt{2}$"
        },
        {
          "qid": "IN_016_h02",
          "q": "Given $\\int_0^4 f(x) \\, dx = 12$ and $f(x) = -(x-4)^2$ for $x > 4$, find $k > 4$ such that $\\int_0^k f(x) \\, dx = 0$.",
          "a": "$\\int_4^k -(x-4)^2 \\, dx = -\\frac{(k-4)^3}{3}$. Need $12 - \\frac{(k-4)^3}{3} = 0 \\Rightarrow (k-4)^3 = 36 \\Rightarrow k = 4 + \\sqrt[3]{36}$"
        },
        {
          "qid": "IN_016_h03",
          "q": "Find $k > 0$ such that $\\int_0^k e^x(e^x - 4) \\, dx = 0$.",
          "a": "$\\int_0^k (e^{2x}-4e^x) \\, dx = \\left[\\frac{e^{2x}}{2}-4e^x\\right]_0^k = \\frac{e^{2k}}{2}-4e^k+\\frac{7}{2} = 0$. Let $u = e^k$: $u^2 - 8u + 7 = 0 \\Rightarrow (u-1)(u-7) = 0$. Since $k > 0$: $u = 7$, so $k = \\ln 7$"
        },
        {
          "qid": "IN_016_h04",
          "q": "Find $k > 1$ such that $\\int_{-1}^k (x^2 - 1) \\, dx = 0$.",
          "a": "$\\left[\\frac{x^3}{3}-x\\right]_{-1}^k = \\left(\\frac{k^3}{3}-k\\right)-\\left(-\\frac{1}{3}+1\\right) = \\frac{k^3}{3}-k-\\frac{2}{3} = 0$. So $k^3-3k-2 = 0 \\Rightarrow (k+1)^2(k-2) = 0$. Since $k > 1$: $k = 2$"
        },
        {
          "qid": "IN_016_h05",
          "q": "Find $k > 1$ such that $\\int_1^k (3x^2 - 12) \\, dx = 0$.",
          "a": "$[x^3-12x]_1^k = (k^3-12k)-(-11) = k^3-12k+11 = 0$. Factor: $(k-1)(k^2+k-11) = 0$. Since $k > 1$: $k = \\frac{-1+\\sqrt{45}}{2} = \\frac{-1+3\\sqrt{5}}{2}$"
        }
      ]
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
      "easy": [
        {
          "qid": "IN_017_e01",
          "q": "Given $\\int_0^4 f(x) \\, dx = 6$, find $\\int_0^4 3f(x) \\, dx$.",
          "a": "$= 3 \\int_0^4 f(x) \\, dx = 3(6) = 18$"
        },
        {
          "qid": "IN_017_e02",
          "q": "Given $\\int_1^3 f(x) \\, dx = 5$, find $\\int_1^3 [f(x) + 2] \\, dx$.",
          "a": "$= \\int_1^3 f(x) \\, dx + \\int_1^3 2 \\, dx = 5 + 2(2) = 9$"
        },
        {
          "qid": "IN_017_e03",
          "q": "Given $\\int_0^2 f(x) \\, dx = 8$ and $\\int_0^2 g(x) \\, dx = 3$, find $\\int_0^2 [f(x) + g(x)] \\, dx$.",
          "a": "$= \\int_0^2 f(x) \\, dx + \\int_0^2 g(x) \\, dx = 8 + 3 = 11$"
        }
      ],
      "medium": [
        {
          "qid": "IN_017_m01",
          "q": "Given $\\int_0^3 f(x) \\, dx = 8$, find $\\int_0^3 [2f(x) + 3] \\, dx$.",
          "a": "$= 2\\int_0^3 f(x) \\, dx + \\int_0^3 3 \\, dx = 2(8) + 3(3) = 16 + 9 = 25$"
        },
        {
          "qid": "IN_017_m02",
          "q": "Given $\\int_1^5 f(x) \\, dx = 10$ and $\\int_1^5 g(x) \\, dx = 4$, find $\\int_1^5 [3f(x) - 2g(x)] \\, dx$.",
          "a": "$= 3(10) - 2(4) = 30 - 8 = 22$"
        },
        {
          "qid": "IN_017_m03",
          "q": "Given $\\int_0^4 f(x) \\, dx = 7$, find $\\int_0^4 [5 - f(x)] \\, dx$.",
          "a": "$= \\int_0^4 5 \\, dx - \\int_0^4 f(x) \\, dx = 20 - 7 = 13$"
        },
        {
          "qid": "IN_017_m04",
          "q": "Given $\\int_0^6 f(x) \\, dx = 15$ and $\\int_0^6 g(x) \\, dx = 9$, find $\\int_0^6 [f(x) + g(x) - 1] \\, dx$.",
          "a": "$= 15 + 9 - \\int_0^6 1 \\, dx = 15 + 9 - 6 = 18$"
        },
        {
          "qid": "IN_017_m05",
          "q": "Given $\\int_2^5 [f(x)]^2 \\, dx = 10$, find $\\int_2^5 [2f(x)]^2 \\, dx$.",
          "a": "$[2f(x)]^2 = 4[f(x)]^2$. So $\\int_2^5 4[f(x)]^2 \\, dx = 4 \\times 10 = 40$"
        },
        {
          "qid": "IN_017_m06",
          "q": "Given $\\int_0^{\\pi} f(x) \\, dx = 4$, find $\\int_0^{\\pi} [f(x) - \\sin(x)] \\, dx$.",
          "a": "$= \\int_0^{\\pi} f(x) \\, dx - \\int_0^{\\pi} \\sin(x) \\, dx = 4 - [-\\cos(x)]_0^{\\pi} = 4 - 2 = 2$"
        }
      ],
      "hard": [
        {
          "qid": "IN_017_h01",
          "q": "Given $\\int_0^3 f(x) \\, dx = 8$ and $\\int_3^5 f(x) \\, dx = -2$, find $\\int_0^5 [4f(x) + 1] \\, dx$.",
          "a": "$\\int_0^5 f(x) \\, dx = 8 + (-2) = 6$. So $\\int_0^5 [4f(x)+1] \\, dx = 4(6) + 5 = 29$"
        },
        {
          "qid": "IN_017_h02",
          "q": "Given $\\int_0^4 f(x) \\, dx = 10$ and $\\int_0^4 g(x) \\, dx = 6$, find $\\int_0^4 [f(x) - g(x) + x] \\, dx$.",
          "a": "$= 10 - 6 + \\int_0^4 x \\, dx = 4 + \\left[\\frac{x^2}{2}\\right]_0^4 = 4 + 8 = 12$"
        },
        {
          "qid": "IN_017_h03",
          "q": "Given $\\int_0^a f(x) \\, dx = a^2$ for all $a > 0$, find $\\int_0^a [f(x) + 2x] \\, dx$.",
          "a": "$= \\int_0^a f(x) \\, dx + \\int_0^a 2x \\, dx = a^2 + [x^2]_0^a = a^2 + a^2 = 2a^2$"
        },
        {
          "qid": "IN_017_h04",
          "q": "Given $\\int_0^6 f(x) \\, dx = 10$, $\\int_0^2 f(x) \\, dx = 3$, and $\\int_4^6 f(x) \\, dx = 5$. Find $\\int_2^4 [2f(x) - 1] \\, dx$.",
          "a": "$\\int_2^4 f(x) \\, dx = 10 - 3 - 5 = 2$. So $\\int_2^4 [2f(x)-1] \\, dx = 2(2) - (4-2) = 4 - 2 = 2$"
        },
        {
          "qid": "IN_017_h05",
          "q": "If $f$ is an odd function on $[-a, a]$ and $\\int_0^a f(x) \\, dx = 7$, find $\\int_{-a}^{a} [f(x) + 3] \\, dx$.",
          "a": "$\\int_{-a}^{a} f(x) \\, dx = 0$ (odd function). $\\int_{-a}^{a} 3 \\, dx = 6a$. Total $= 6a$"
        },
        {
          "qid": "IN_017_h06",
          "q": "Given $\\int_0^2 f(x) \\, dx = 5$, find $\\int_0^2 [f(x) + x^2] \\, dx$.",
          "a": "$= \\int_0^2 f(x) \\, dx + \\int_0^2 x^2 \\, dx = 5 + \\left[\\frac{x^3}{3}\\right]_0^2 = 5 + \\frac{8}{3} = \\frac{23}{3}$"
        }
      ]
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
      "easy": [
        {
          "qid": "IN_018_e01",
          "q": "On a sketch of $y = x$, shade the region that represents $\\int_0^3 x \\, dx$.",
          "a": "Shade the triangle under $y = x$ from $x = 0$ to $x = 3$, bounded below by the $x$-axis. Area $= \\frac{1}{2}(3)(3) = \\frac{9}{2}$"
        },
        {
          "qid": "IN_018_e02",
          "q": "On a sketch of $y = 4$, shade the region that represents $\\int_1^5 4 \\, dx$.",
          "a": "Shade the rectangle under $y = 4$ from $x = 1$ to $x = 5$, bounded below by the $x$-axis. Area $= 4 \\times 4 = 16$"
        },
        {
          "qid": "IN_018_e03",
          "q": "On a sketch of $y = 2x$, shade the region that represents $\\int_0^2 2x \\, dx$.",
          "a": "Shade the triangle under $y = 2x$ from $x = 0$ to $x = 2$, bounded below by the $x$-axis. Area $= \\frac{1}{2}(2)(4) = 4$"
        }
      ],
      "medium": [
        {
          "qid": "IN_018_m01",
          "q": "On a sketch of $y = x^2$, shade the region that represents $\\int_1^3 x^2 \\, dx$.",
          "a": "Shade the region under the parabola $y = x^2$ from $x = 1$ to $x = 3$, bounded below by the $x$-axis and by the vertical lines $x = 1$ and $x = 3$. $\\int_1^3 x^2 \\, dx = \\frac{26}{3}$"
        },
        {
          "qid": "IN_018_m02",
          "q": "On a sketch of $y = \\sin(x)$, shade the region that represents $\\int_0^{\\pi} \\sin(x) \\, dx$.",
          "a": "Shade the region under one arch of the sine curve from $x = 0$ to $x = \\pi$, bounded below by the $x$-axis. $\\int_0^{\\pi} \\sin(x) \\, dx = 2$"
        },
        {
          "qid": "IN_018_m03",
          "q": "On a sketch of $y = e^x$, shade the region that represents $\\int_0^1 e^x \\, dx$.",
          "a": "Shade the region under the exponential curve from $x = 0$ to $x = 1$, bounded below by the $x$-axis and by the vertical lines $x = 0$ and $x = 1$. $\\int_0^1 e^x \\, dx = e - 1$"
        },
        {
          "qid": "IN_018_m04",
          "q": "On a sketch of $y = \\frac{1}{x}$, shade the region that represents $\\int_1^3 \\frac{1}{x} \\, dx$.",
          "a": "Shade the region under the hyperbola from $x = 1$ to $x = 3$, bounded below by the $x$-axis. $\\int_1^3 \\frac{1}{x} \\, dx = \\ln 3$"
        },
        {
          "qid": "IN_018_m05",
          "q": "On a sketch of $y = \\sqrt{x}$, shade the region that represents $\\int_0^4 \\sqrt{x} \\, dx$.",
          "a": "Shade the region under $y = \\sqrt{x}$ from $x = 0$ to $x = 4$, bounded below by the $x$-axis. $\\int_0^4 \\sqrt{x} \\, dx = \\frac{16}{3}$"
        }
      ],
      "hard": [
        {
          "qid": "IN_018_h01",
          "q": "Sketch $y = x^2 - 4$ and shade the region(s) representing $\\int_0^3 (x^2 - 4) \\, dx$. Explain why parts of the shading are below the $x$-axis.",
          "a": "The curve crosses the $x$-axis at $x = 2$. For $0 < x < 2$: $y < 0$ (shade below axis, negative contribution). For $2 < x < 3$: $y > 0$ (shade above axis, positive). $\\int_0^3 (x^2-4) \\, dx = [x^3/3-4x]_0^3 = 9 - 12 = -3$. The integral is negative because the below-axis region is larger."
        },
        {
          "qid": "IN_018_h02",
          "q": "Sketch $y = \\sin(x)$ for $0 \\leq x \\leq 2\\pi$. Shade and label the regions representing $\\int_0^{2\\pi} \\sin(x) \\, dx$. Why is the integral zero?",
          "a": "For $0 < x < \\pi$: $\\sin(x) > 0$ (region A above axis, area $= 2$). For $\\pi < x < 2\\pi$: $\\sin(x) < 0$ (region B below axis, area $= 2$). The integral $= 2 + (-2) = 0$ because the positive and negative regions have equal area."
        },
        {
          "qid": "IN_018_h03",
          "q": "Sketch $y = x(x-2)(x-4)$ and shade the region representing $\\int_0^4 x(x-2)(x-4) \\, dx$.",
          "a": "Roots at $x = 0, 2, 4$. For $0 < x < 2$: $y < 0$. For $2 < x < 4$: $y > 0$. By symmetry of the cubic about $x = 2$, the areas are equal, so $\\int_0^4 x(x-2)(x-4) \\, dx = 0$."
        },
        {
          "qid": "IN_018_h04",
          "q": "Sketch $y = e^{-x}$ and shade the region between $y = e^{-x}$, the $x$-axis, and the lines $x = 0$ and $x = 2$. What does $\\int_0^2 e^{-x} \\, dx$ represent?",
          "a": "Shade the region under the decreasing exponential from $x = 0$ (height 1) to $x = 2$ (height $e^{-2}$). $\\int_0^2 e^{-x} \\, dx = [-e^{-x}]_0^2 = 1 - e^{-2}$. It represents the area under the curve."
        },
        {
          "qid": "IN_018_h05",
          "q": "Sketch $y = x^2$ and $y = x$ on the same axes. Shade the region representing $\\int_0^1 (x - x^2) \\, dx$ and explain its geometric meaning.",
          "a": "The curves intersect at $x = 0$ and $x = 1$. For $0 < x < 1$: $x > x^2$, so $x - x^2 > 0$. The shaded region is between the line and parabola. $\\int_0^1 (x-x^2) \\, dx = [x^2/2 - x^3/3]_0^1 = \\frac{1}{6}$. This is the area enclosed between the two curves."
        }
      ]
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
      "easy": [
        {
          "qid": "IN_019_e01",
          "q": "Using strips of width 1, find the upper and lower rectangle sums for $\\int_0^3 x^2 \\, dx$.",
          "a": "$f(x) = x^2$ is increasing on $[0,3]$. Lower sum (left endpoints): $1[f(0)+f(1)+f(2)] = 0+1+4 = 5$. Upper sum (right endpoints): $1[f(1)+f(2)+f(3)] = 1+4+9 = 14$. Actual value $= 9$."
        },
        {
          "qid": "IN_019_e02",
          "q": "Using 2 strips of equal width, find the upper and lower rectangle sums for $\\int_0^4 2x \\, dx$.",
          "a": "Width $= 2$. $f(x) = 2x$ is increasing. Lower (left): $2[f(0)+f(2)] = 2[0+4] = 8$. Upper (right): $2[f(2)+f(4)] = 2[4+8] = 24$. Actual value $= 16$."
        },
        {
          "qid": "IN_019_e03",
          "q": "Using strips of width 1, find the upper and lower rectangle sums for $\\int_1^4 x \\, dx$.",
          "a": "$f(x) = x$ is increasing. Lower (left): $1[f(1)+f(2)+f(3)] = 1+2+3 = 6$. Upper (right): $1[f(2)+f(3)+f(4)] = 2+3+4 = 9$. Actual value $= \\frac{9}{2}$."
        }
      ],
      "medium": [
        {
          "qid": "IN_019_m01",
          "q": "Using strips of width 1, find the upper and lower rectangle sums for $\\int_1^4 \\frac{1}{x} \\, dx$.",
          "a": "$f(x) = 1/x$ is decreasing. Upper (left endpoints): $1[f(1)+f(2)+f(3)] = 1+\\frac{1}{2}+\\frac{1}{3} = \\frac{11}{6}$. Lower (right endpoints): $1[f(2)+f(3)+f(4)] = \\frac{1}{2}+\\frac{1}{3}+\\frac{1}{4} = \\frac{13}{12}$. Actual $= \\ln 4 \\approx 1.386$."
        },
        {
          "qid": "IN_019_m02",
          "q": "Using strips of width 1, find the upper and lower rectangle sums for $\\int_1^4 \\sqrt{x} \\, dx$.",
          "a": "$f(x) = \\sqrt{x}$ is increasing. Lower: $1[\\sqrt{1}+\\sqrt{2}+\\sqrt{3}] = 1+\\sqrt{2}+\\sqrt{3} \\approx 3.146$. Upper: $1[\\sqrt{2}+\\sqrt{3}+\\sqrt{4}] = \\sqrt{2}+\\sqrt{3}+2 \\approx 4.146$. Actual $= \\frac{14}{3} \\approx 4.667$."
        },
        {
          "qid": "IN_019_m03",
          "q": "Using strips of width $0.5$, find the upper and lower rectangle sums for $\\int_0^2 e^x \\, dx$.",
          "a": "$e^x$ is increasing. Strips at $0, 0.5, 1, 1.5, 2$. Lower: $0.5[e^0+e^{0.5}+e^1+e^{1.5}] \\approx 0.5[1+1.649+2.718+4.482] \\approx 4.924$. Upper: $0.5[e^{0.5}+e^1+e^{1.5}+e^2] \\approx 0.5[1.649+2.718+4.482+7.389] \\approx 8.119$. Actual $= e^2-1 \\approx 6.389$."
        },
        {
          "qid": "IN_019_m04",
          "q": "Explain why, for a decreasing function, the upper rectangle sum uses left endpoints and the lower sum uses right endpoints.",
          "a": "For a decreasing function, the function value is greatest at the left end of each strip and smallest at the right end. Using left endpoints gives rectangles that overshoot the curve (upper sum), while right endpoints give rectangles that undershoot (lower sum)."
        },
        {
          "qid": "IN_019_m05",
          "q": "Using strips of width 1, find the upper and lower rectangle sums for $\\int_0^3 (9-x^2) \\, dx$.",
          "a": "$f(x) = 9-x^2$ is decreasing on $[0,3]$. Upper (left): $1[f(0)+f(1)+f(2)] = 9+8+5 = 22$. Lower (right): $1[f(1)+f(2)+f(3)] = 8+5+0 = 13$. Actual $= [9x-x^3/3]_0^3 = 18$."
        }
      ],
      "hard": [
        {
          "qid": "IN_019_h01",
          "q": "Using strips of width 1, find the upper and lower rectangle sums for $\\int_1^5 \\frac{1}{x} \\, dx$.",
          "a": "$f = 1/x$ decreasing. Upper (left): $1+\\frac{1}{2}+\\frac{1}{3}+\\frac{1}{4} = \\frac{25}{12} \\approx 2.083$. Lower (right): $\\frac{1}{2}+\\frac{1}{3}+\\frac{1}{4}+\\frac{1}{5} = \\frac{77}{60} \\approx 1.283$. Actual $= \\ln 5 \\approx 1.609$."
        },
        {
          "qid": "IN_019_h02",
          "q": "For $\\int_0^2 x^3 \\, dx$, find upper and lower sums using strips of width 0.5. Compare with the exact value.",
          "a": "$x^3$ increasing on $[0,2]$. Lower: $0.5[0^3+0.5^3+1^3+1.5^3] = 0.5[0+0.125+1+3.375] = 2.25$. Upper: $0.5[0.5^3+1^3+1.5^3+2^3] = 0.5[0.125+1+3.375+8] = 6.25$. Exact $= 4$."
        },
        {
          "qid": "IN_019_h03",
          "q": "Show that for $\\int_0^n 1 \\cdot dx = n$, the upper and lower sums with any strip width are both equal to $n$. Why?",
          "a": "For $f(x) = 1$ (constant), the function value at every point in each strip is the same: 1. Both the upper and lower sums equal $\\sum(\\text{width}) \\times 1 = n$. A constant function has no variation, so upper and lower sums coincide exactly with the integral."
        },
        {
          "qid": "IN_019_h04",
          "q": "Using 4 strips, find upper and lower sums for $\\int_0^{\\pi} \\sin(x) \\, dx$. The function increases on $[0, \\pi/2]$ and decreases on $[\\pi/2, \\pi]$.",
          "a": "Width $= \\pi/4$. Values: $f(0)=0$, $f(\\pi/4)=\\frac{\\sqrt{2}}{2}$, $f(\\pi/2)=1$, $f(3\\pi/4)=\\frac{\\sqrt{2}}{2}$, $f(\\pi)=0$. Upper: $\\frac{\\pi}{4}[\\frac{\\sqrt{2}}{2}+1+1+\\frac{\\sqrt{2}}{2}] = \\frac{\\pi}{4}(2+\\sqrt{2}) \\approx 2.682$. Lower: $\\frac{\\pi}{4}[0+\\frac{\\sqrt{2}}{2}+\\frac{\\sqrt{2}}{2}+0] = \\frac{\\pi\\sqrt{2}}{4} \\approx 1.111$. Exact $= 2$."
        },
        {
          "qid": "IN_019_h05",
          "q": "For $\\int_0^1 e^{-x^2} dx$, use 4 strips of width 0.25 to find upper and lower sums. This integral has no closed form.",
          "a": "$e^{-x^2}$ is decreasing on $[0,1]$. Upper (left): $0.25[e^0+e^{-0.0625}+e^{-0.25}+e^{-0.5625}] \\approx 0.25[1+0.9394+0.7788+0.5698] \\approx 0.822$. Lower (right): $0.25[e^{-0.0625}+e^{-0.25}+e^{-0.5625}+e^{-1}] \\approx 0.25[0.9394+0.7788+0.5698+0.3679] \\approx 0.664$. True value $\\approx 0.7468$."
        }
      ]
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
      "easy": [
        {
          "qid": "IN_020_e01",
          "q": "Upper sum $= 14$, lower sum $= 10$. Estimate the integral.",
          "a": "Average $= \\frac{14 + 10}{2} = 12$"
        },
        {
          "qid": "IN_020_e02",
          "q": "Upper sum $= 20$, lower sum $= 16$. Estimate the integral.",
          "a": "Average $= \\frac{20 + 16}{2} = 18$"
        },
        {
          "qid": "IN_020_e03",
          "q": "Upper sum $= 7.5$, lower sum $= 5.5$. Estimate the integral.",
          "a": "Average $= \\frac{7.5 + 5.5}{2} = 6.5$"
        }
      ],
      "medium": [
        {
          "qid": "IN_020_m01",
          "q": "Given upper sum = 2.8 and lower sum = 2.2 for $\\int_a^b f(x) \\, dx$, estimate the integral.",
          "a": "Average $= \\frac{2.8 + 2.2}{2} = 2.5$"
        },
        {
          "qid": "IN_020_m02",
          "q": "For $\\int_0^3 x^2 \\, dx$, the upper sum (width 1) is 14 and the lower sum is 5. Find the average estimate and compare with the exact value.",
          "a": "Average $= \\frac{14 + 5}{2} = 9.5$. Exact value $= 9$. The estimate is close but slightly over."
        },
        {
          "qid": "IN_020_m03",
          "q": "Upper sum $= \\frac{11}{6}$, lower sum $= \\frac{13}{12}$ for $\\int_1^4 \\frac{1}{x} \\, dx$. Estimate the integral.",
          "a": "Average $= \\frac{1}{2}\\left(\\frac{11}{6} + \\frac{13}{12}\\right) = \\frac{1}{2} \\cdot \\frac{35}{12} = \\frac{35}{24} \\approx 1.458$. Exact $= \\ln 4 \\approx 1.386$."
        },
        {
          "qid": "IN_020_m04",
          "q": "Explain why the average of the upper and lower sums gives a better estimate than either sum alone.",
          "a": "The upper sum overestimates and the lower sum underestimates the true area. The true value lies between them: lower $\\leq \\int \\leq$ upper. The average splits the difference, cancelling some of the over- and under-estimation, typically giving a closer approximation."
        },
        {
          "qid": "IN_020_m05",
          "q": "The upper and lower sums for an integral are 22 and 13. Find the average estimate and the maximum possible error.",
          "a": "Average $= \\frac{22 + 13}{2} = 17.5$. Maximum error $= \\frac{22-13}{2} = 4.5$. The true value is within $\\pm 4.5$ of the estimate."
        }
      ],
      "hard": [
        {
          "qid": "IN_020_h01",
          "q": "For $\\int_1^5 \\frac{1}{x} \\, dx$, upper sum (width 1) $= \\frac{25}{12}$ and lower sum $= \\frac{77}{60}$. Find the average estimate and percentage error from the exact value $\\ln 5$.",
          "a": "Average $= \\frac{1}{2}\\left(\\frac{25}{12}+\\frac{77}{60}\\right) = \\frac{1}{2}\\cdot\\frac{202}{60} = \\frac{101}{60} \\approx 1.683$. Exact $= \\ln 5 \\approx 1.609$. Error $\\approx \\frac{0.074}{1.609} \\approx 4.6\\%$."
        },
        {
          "qid": "IN_020_h02",
          "q": "A student uses 4 rectangles for $\\int_0^2 e^x \\, dx$ and gets upper sum $= 8.119$ and lower sum $= 4.924$. Find the average and compare with the exact value $e^2-1$.",
          "a": "Average $= \\frac{8.119+4.924}{2} \\approx 6.522$. Exact $= e^2-1 \\approx 6.389$. Error $\\approx 0.133$, which is $\\approx 2.1\\%$."
        },
        {
          "qid": "IN_020_h03",
          "q": "For a function with upper sum $U_n$ and lower sum $L_n$ using $n$ rectangles, prove that $L_n \\leq \\int_a^b f(x) \\, dx \\leq U_n$.",
          "a": "In each strip, the minimum value $m_i \\leq f(x) \\leq M_i$ (maximum). So $m_i \\cdot \\Delta x \\leq \\int_{x_i}^{x_{i+1}} f(x) \\, dx \\leq M_i \\cdot \\Delta x$. Summing over all strips: $\\sum m_i \\Delta x \\leq \\int_a^b f(x) \\, dx \\leq \\sum M_i \\Delta x$, i.e., $L_n \\leq \\int \\leq U_n$."
        },
        {
          "qid": "IN_020_h04",
          "q": "Upper and lower sums with 5 strips give $18.4$ and $15.2$. With 10 strips they give $17.5$ and $16.1$. Estimate the integral from each, and explain why more strips helps.",
          "a": "5 strips: average $= \\frac{18.4+15.2}{2} = 16.8$, gap $= 3.2$. 10 strips: average $= \\frac{17.5+16.1}{2} = 16.8$, gap $= 1.4$. More strips reduce the gap between upper and lower bounds, giving a tighter estimate with smaller maximum error."
        },
        {
          "qid": "IN_020_h05",
          "q": "For $\\int_0^{\\pi} \\sin(x) \\, dx$ with 4 strips, upper sum $\\approx 2.682$ and lower sum $\\approx 1.111$. Calculate the average estimate and maximum error. How many strips would be needed to halve the gap?",
          "a": "Average $\\approx \\frac{2.682+1.111}{2} \\approx 1.897$. Gap $= 1.571$, max error $= 0.786$. Exact $= 2$. To halve the gap, approximately double the strips to 8, as the error for Riemann sums typically decreases proportionally to $1/n$."
        }
      ]
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
      "easy": [
        {
          "qid": "IN_021_e01",
          "q": "A student used 3 rectangles to estimate $\\int_0^3 x \\, dx$. How could they improve their estimate?",
          "a": "Use more, narrower rectangles (e.g., 6 or 12 strips). More rectangles reduce the gap between upper and lower sums, giving a closer approximation to the true area."
        },
        {
          "qid": "IN_021_e02",
          "q": "Explain why using more rectangles generally improves a rectangle approximation of an integral.",
          "a": "Narrower rectangles follow the curve more closely, reducing the area between the rectangle tops and the actual curve. The 'excess' or 'deficit' in each strip is smaller, so the total error decreases."
        },
        {
          "qid": "IN_021_e03",
          "q": "A student estimates $\\int_0^4 x^2 \\, dx$ using 2 rectangles and gets 40 (upper) or 8 (lower). What is wrong with using so few strips?",
          "a": "With only 2 strips (width 2 each), the rectangles are very wide and poorly approximate the curved shape of $x^2$. The gap between upper (40) and lower (8) is huge. The exact answer is $\\frac{64}{3} \\approx 21.3$, far from either bound. More strips would narrow this gap."
        }
      ],
      "medium": [
        {
          "qid": "IN_021_m01",
          "q": "A student used 4 rectangles to approximate $\\int_0^2 x^2 \\, dx$. Suggest how they could improve their approximation.",
          "a": "Use more rectangles (e.g., 8 or 16). They could also use the trapezoidal rule (average of left and right endpoint values in each strip), which generally gives better accuracy than rectangles alone. Taking the average of upper and lower sums is another improvement."
        },
        {
          "qid": "IN_021_m02",
          "q": "Compare the accuracy of using left-endpoint rectangles vs the trapezoidal rule for estimating $\\int_0^2 x^2 \\, dx$ with 2 strips.",
          "a": "Width $= 1$. Left rectangles: $1[0+1] = 1$. Trapezoidal: $\\frac{1}{2}[f(0)+2f(1)+f(2)] = \\frac{1}{2}[0+2+4] = 3$. Exact $= \\frac{8}{3} \\approx 2.667$. The trapezoidal estimate ($3$) is much closer than the left sum ($1$)."
        },
        {
          "qid": "IN_021_m03",
          "q": "Why does the trapezoidal rule generally give a better estimate than rectangle sums?",
          "a": "Trapezoids use a straight line connecting function values at both endpoints of each strip, approximating the curve linearly. Rectangles use only one endpoint (a horizontal line), ignoring the function's slope. This makes trapezoids better at capturing the curve's shape between endpoints."
        },
        {
          "qid": "IN_021_m04",
          "q": "A student doubled the number of rectangles from 4 to 8 but their estimate barely changed. What could explain this?",
          "a": "The function may be nearly linear on the interval, so even 4 rectangles gave a good estimate. Alternatively, the function could be constant (where all estimates are exact). For well-behaved functions, improvements diminish as accuracy increases — each doubling gives smaller gains."
        },
        {
          "qid": "IN_021_m05",
          "q": "Explain two different strategies to improve a rectangle approximation of an integral.",
          "a": "Strategy 1: Increase the number of strips — narrower rectangles reduce error. Strategy 2: Use midpoint values instead of endpoints — the midpoint rule often has half the error of left/right endpoint sums. Both can be combined: more strips with midpoint evaluation."
        }
      ],
      "hard": [
        {
          "qid": "IN_021_h01",
          "q": "For a concave-up function like $e^x$, the trapezoidal rule overestimates the integral. Explain why, and suggest a better approach.",
          "a": "For concave-up curves, the straight line connecting endpoints lies above the curve, creating excess area. The midpoint rule underestimates for concave-up functions. A better approach: average the trapezoidal and midpoint estimates (Simpson's rule uses $\\frac{1}{3}$ trapezoidal $+ \\frac{2}{3}$ midpoint), which accounts for curvature."
        },
        {
          "qid": "IN_021_h02",
          "q": "A student uses $n$ rectangles for $\\int_0^1 x^2 \\, dx$. The error is approximately $\\frac{1}{2n}$. How many rectangles are needed for error less than 0.001?",
          "a": "$\\frac{1}{2n} < 0.001 \\Rightarrow n > 500$. They need at least 501 rectangles. This shows why more efficient methods (trapezoidal, Simpson's) are preferred — they achieve the same accuracy with far fewer strips."
        },
        {
          "qid": "IN_021_h03",
          "q": "Simpson's rule uses $\\frac{\\Delta x}{3}[f(x_0) + 4f(x_1) + f(x_2)]$ over two strips. Apply this to estimate $\\int_0^2 e^x \\, dx$.",
          "a": "$\\Delta x = 1$. Simpson's $= \\frac{1}{3}[e^0 + 4e^1 + e^2] = \\frac{1}{3}[1 + 4(2.718) + 7.389] = \\frac{1}{3}(19.261) \\approx 6.420$. Exact $= e^2 - 1 \\approx 6.389$. Error $\\approx 0.031$, much better than rectangle or trapezoidal estimates with the same strips."
        },
        {
          "qid": "IN_021_h04",
          "q": "Explain why the midpoint rule is generally more accurate than the left or right endpoint rules with the same number of strips.",
          "a": "The midpoint value balances overestimation and underestimation within each strip. Where the function curves upward in one half of the strip, it curves downward in the other, and the midpoint captures this balance. Mathematically, the midpoint rule's error is $O(1/n^2)$ compared to $O(1/n)$ for endpoint rules."
        },
        {
          "qid": "IN_021_h05",
          "q": "A function has $f''(x) > 0$ everywhere on $[a,b]$. Rank these estimates from smallest to largest: left-endpoint sum, right-endpoint sum, trapezoidal estimate, midpoint estimate.",
          "a": "Since $f'' > 0$, the function is concave up and increasing. Order (smallest to largest): left-endpoint sum $<$ midpoint estimate $<$ exact integral $<$ trapezoidal estimate $<$ right-endpoint sum. The midpoint underestimates (tangent line below curve), while trapezoids overestimate (chord above curve) for concave-up functions."
        }
      ]
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
      "easy": [
        {
          "qid": "IN_022_e01",
          "q": "Find $\\frac{d}{dx} \\int_0^x t^2 \\, dt$.",
          "a": "By the Fundamental Theorem of Calculus: $\\frac{d}{dx} \\int_0^x t^2 \\, dt = x^2$"
        },
        {
          "qid": "IN_022_e02",
          "q": "Find $\\frac{d}{dx} \\int_0^x \\cos(t) \\, dt$.",
          "a": "By the FTC: $\\frac{d}{dx} \\int_0^x \\cos(t) \\, dt = \\cos(x)$"
        },
        {
          "qid": "IN_022_e03",
          "q": "Find $\\frac{d}{dx} \\int_1^x (3t + 1) \\, dt$.",
          "a": "By the FTC: $\\frac{d}{dx} \\int_1^x (3t+1) \\, dt = 3x + 1$"
        }
      ],
      "medium": [
        {
          "qid": "IN_022_m01",
          "q": "Find $\\frac{d}{dx} \\int_0^x \\sin(t^2) \\, dt$.",
          "a": "By the FTC: $\\frac{d}{dx} \\int_0^x \\sin(t^2) \\, dt = \\sin(x^2)$"
        },
        {
          "qid": "IN_022_m02",
          "q": "Find $\\frac{d}{dx} \\int_0^{x^2} e^t \\, dt$.",
          "a": "By the FTC with chain rule: $\\frac{d}{dx} \\int_0^{x^2} e^t \\, dt = e^{x^2} \\cdot \\frac{d}{dx}(x^2) = 2xe^{x^2}$"
        },
        {
          "qid": "IN_022_m03",
          "q": "Find $\\frac{d}{dx} \\int_1^x \\ln(t) \\, dt$.",
          "a": "By the FTC: $\\frac{d}{dx} \\int_1^x \\ln(t) \\, dt = \\ln(x)$"
        },
        {
          "qid": "IN_022_m04",
          "q": "Find $\\frac{d}{dx} \\int_0^{x^3} \\sqrt{t} \\, dt$.",
          "a": "By the FTC with chain rule: $= \\sqrt{x^3} \\cdot 3x^2 = x^{3/2} \\cdot 3x^2 = 3x^{7/2}$"
        },
        {
          "qid": "IN_022_m05",
          "q": "Find $\\frac{d}{dx} \\int_x^5 t^3 \\, dt$.",
          "a": "$\\int_x^5 = -\\int_5^x$, so $\\frac{d}{dx} \\int_x^5 t^3 \\, dt = -\\frac{d}{dx}\\int_5^x t^3 \\, dt = -x^3$"
        }
      ],
      "hard": [
        {
          "qid": "IN_022_h01",
          "q": "Find $\\frac{d}{dx} \\int_0^{\\sin x} t^2 \\, dt$.",
          "a": "By the FTC with chain rule: $= (\\sin x)^2 \\cdot \\cos x = \\sin^2(x)\\cos(x)$"
        },
        {
          "qid": "IN_022_h02",
          "q": "Find $\\frac{d}{dx} \\int_1^{e^x} \\ln(t) \\, dt$.",
          "a": "By the FTC with chain rule: $= \\ln(e^x) \\cdot e^x = x \\cdot e^x = xe^x$"
        },
        {
          "qid": "IN_022_h03",
          "q": "Find $\\frac{d}{dx} \\int_x^{x^2} t \\, dt$.",
          "a": "Split: $\\int_x^{x^2} t \\, dt = \\int_0^{x^2} t \\, dt - \\int_0^x t \\, dt$. Differentiate: $x^2 \\cdot 2x - x \\cdot 1 = 2x^3 - x$"
        },
        {
          "qid": "IN_022_h04",
          "q": "Find $\\frac{d}{dx} \\int_0^{\\sqrt{x}} e^{t^2} \\, dt$.",
          "a": "By the FTC with chain rule: $= e^{(\\sqrt{x})^2} \\cdot \\frac{1}{2\\sqrt{x}} = \\frac{e^x}{2\\sqrt{x}}$"
        },
        {
          "qid": "IN_022_h05",
          "q": "Find $\\frac{d}{dx} \\int_{2x}^{3x} \\frac{1}{t} \\, dt$.",
          "a": "$\\int_{2x}^{3x} \\frac{1}{t} \\, dt = \\ln(3x) - \\ln(2x) = \\ln\\frac{3}{2}$ (constant). Therefore $\\frac{d}{dx} \\int_{2x}^{3x} \\frac{1}{t} \\, dt = 0$"
        }
      ]
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
      "easy": [
        {
          "qid": "IN_023_e01",
          "q": "Evaluate $\\int_0^3 2x \\, dx$.",
          "a": "$[x^2]_0^3 = 9 - 0 = 9$"
        },
        {
          "qid": "IN_023_e02",
          "q": "Evaluate $\\int_1^4 3 \\, dx$.",
          "a": "$[3x]_1^4 = 12 - 3 = 9$"
        },
        {
          "qid": "IN_023_e03",
          "q": "Evaluate $\\int_0^2 x^2 \\, dx$.",
          "a": "$\\left[\\frac{x^3}{3}\\right]_0^2 = \\frac{8}{3}$"
        }
      ],
      "medium": [
        {
          "qid": "IN_023_m01",
          "q": "Evaluate $\\int_1^4 (2x - 3) \\, dx$.",
          "a": "$[x^2 - 3x]_1^4 = (16-12) - (1-3) = 4+2 = 6$"
        },
        {
          "qid": "IN_023_m02",
          "q": "Evaluate $\\int_0^{\\pi/2} \\cos(x) \\, dx$.",
          "a": "$[\\sin(x)]_0^{\\pi/2} = 1 - 0 = 1$"
        },
        {
          "qid": "IN_023_m03",
          "q": "Evaluate $\\int_1^4 3\\sqrt{x} \\, dx$.",
          "a": "$3\\left[\\frac{2x^{3/2}}{3}\\right]_1^4 = [2x^{3/2}]_1^4 = 2(8) - 2(1) = 14$"
        },
        {
          "qid": "IN_023_m04",
          "q": "Evaluate $\\int_0^1 (e^x + 1) \\, dx$.",
          "a": "$[e^x + x]_0^1 = (e+1) - (1+0) = e$"
        },
        {
          "qid": "IN_023_m05",
          "q": "Evaluate $\\int_1^e \\frac{2}{x} \\, dx$.",
          "a": "$[2\\ln x]_1^e = 2(1) - 2(0) = 2$"
        }
      ],
      "hard": [
        {
          "qid": "IN_023_h01",
          "q": "Evaluate $\\int_0^{\\pi} (\\sin x + \\cos x) \\, dx$.",
          "a": "$[-\\cos x + \\sin x]_0^{\\pi} = (1+0) - (-1+0) = 2$"
        },
        {
          "qid": "IN_023_h02",
          "q": "Evaluate $\\int_1^4 \\left(x + \\frac{1}{\\sqrt{x}}\\right) dx$.",
          "a": "$\\left[\\frac{x^2}{2} + 2\\sqrt{x}\\right]_1^4 = (8+4) - (\\frac{1}{2}+2) = 12 - \\frac{5}{2} = \\frac{19}{2}$"
        },
        {
          "qid": "IN_023_h03",
          "q": "Evaluate $\\int_1^e \\left(x + \\frac{1}{x}\\right) dx$.",
          "a": "$\\left[\\frac{x^2}{2} + \\ln x\\right]_1^e = \\left(\\frac{e^2}{2}+1\\right) - \\left(\\frac{1}{2}+0\\right) = \\frac{e^2+1}{2}$"
        },
        {
          "qid": "IN_023_h04",
          "q": "Evaluate $\\int_0^{\\pi/3} \\sec^2(x) \\, dx$.",
          "a": "$[\\tan(x)]_0^{\\pi/3} = \\tan\\frac{\\pi}{3} - \\tan 0 = \\sqrt{3}$"
        },
        {
          "qid": "IN_023_h05",
          "q": "Evaluate $\\int_1^8 x^{-2/3} \\, dx$.",
          "a": "$\\left[3x^{1/3}\\right]_1^8 = 3(2) - 3(1) = 3$"
        }
      ]
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
      "easy": [
        {
          "qid": "IN_024_e01",
          "q": "Given $f'(x) = 2x$ and $f(0) = 3$, find $f(2)$.",
          "a": "$f(2) = f(0) + \\int_0^2 2x \\, dx = 3 + [x^2]_0^2 = 3 + 4 = 7$"
        },
        {
          "qid": "IN_024_e02",
          "q": "Given $f'(x) = 4$ and $f(1) = 5$, find $f(4)$.",
          "a": "$f(4) = f(1) + \\int_1^4 4 \\, dx = 5 + 12 = 17$"
        },
        {
          "qid": "IN_024_e03",
          "q": "Given $f'(x) = 3x^2$ and $f(0) = 1$, find $f(2)$.",
          "a": "$f(2) = 1 + \\int_0^2 3x^2 \\, dx = 1 + [x^3]_0^2 = 1 + 8 = 9$"
        }
      ],
      "medium": [
        {
          "qid": "IN_024_m01",
          "q": "Given $f'(x) = 3x^2 - 1$ and $f(1) = 4$, find $f(3)$.",
          "a": "$f(3) = 4 + \\int_1^3 (3x^2-1) \\, dx = 4 + [x^3-x]_1^3 = 4 + (24-0) = 28$"
        },
        {
          "qid": "IN_024_m02",
          "q": "Given $f'(x) = \\cos(x)$ and $f(0) = 2$, find $f(\\pi/2)$.",
          "a": "$f(\\pi/2) = 2 + \\int_0^{\\pi/2} \\cos(x) \\, dx = 2 + [\\sin x]_0^{\\pi/2} = 2 + 1 = 3$"
        },
        {
          "qid": "IN_024_m03",
          "q": "Given $f'(x) = e^x$ and $f(0) = 0$, find $f(2)$.",
          "a": "$f(2) = \\int_0^2 e^x \\, dx = [e^x]_0^2 = e^2 - 1$"
        },
        {
          "qid": "IN_024_m04",
          "q": "Given $f'(x) = \\frac{1}{x}$ and $f(1) = 5$, find $f(e)$.",
          "a": "$f(e) = 5 + \\int_1^e \\frac{1}{x} \\, dx = 5 + [\\ln x]_1^e = 5 + 1 = 6$"
        },
        {
          "qid": "IN_024_m05",
          "q": "Given $f'(x) = 4x - 6$ and $f(2) = 1$, find $f(5)$.",
          "a": "$f(5) = 1 + \\int_2^5 (4x-6) \\, dx = 1 + [2x^2-6x]_2^5 = 1 + (20) - (-4) = 25$"
        }
      ],
      "hard": [
        {
          "qid": "IN_024_h01",
          "q": "Given $f'(x) = x^2 - 4x + 3$ and $f(0) = 2$, find $f(3)$.",
          "a": "$f(3) = 2 + \\int_0^3 (x^2-4x+3) \\, dx = 2 + \\left[\\frac{x^3}{3}-2x^2+3x\\right]_0^3 = 2 + (9-18+9) = 2$"
        },
        {
          "qid": "IN_024_h02",
          "q": "Given $f'(x) = 2e^x - 1$ and $f(0) = 3$, find $f(\\ln 2)$.",
          "a": "$f(\\ln 2) = 3 + \\int_0^{\\ln 2} (2e^x-1) \\, dx = 3 + [2e^x-x]_0^{\\ln 2} = 3 + (4-\\ln 2) - 2 = 5 - \\ln 2$"
        },
        {
          "qid": "IN_024_h03",
          "q": "Given $f'(x) = \\sin(x) + \\cos(x)$ and $f(0) = 0$, find $f(\\pi)$.",
          "a": "$f(\\pi) = \\int_0^{\\pi} (\\sin x + \\cos x) \\, dx = [-\\cos x + \\sin x]_0^{\\pi} = (1+0) - (-1+0) = 2$"
        },
        {
          "qid": "IN_024_h04",
          "q": "Given $\\int_1^4 f'(x) \\, dx = 7$ and $f(1) = -3$, find $f(4)$.",
          "a": "By the FTC: $\\int_1^4 f'(x) \\, dx = f(4) - f(1)$. So $7 = f(4) - (-3)$, giving $f(4) = 4$"
        },
        {
          "qid": "IN_024_h05",
          "q": "Given $f'(x) = 6x^2 + \\frac{2}{x^3}$ and $f(1) = 5$, find $f(2)$.",
          "a": "$f(2) = 5 + \\int_1^2 \\left(6x^2+2x^{-3}\\right) dx = 5 + \\left[2x^3-\\frac{1}{x^2}\\right]_1^2 = 5 + (16-\\frac{1}{4}) - (2-1) = \\frac{79}{4}$"
        }
      ]
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
      "easy": [
        {
          "qid": "IN_025_e01",
          "q": "Given $\\int_0^5 f(x) \\, dx = 10$ and $\\int_0^3 f(x) \\, dx = 6$, find $\\int_3^5 f(x) \\, dx$.",
          "a": "$\\int_3^5 f(x) \\, dx = \\int_0^5 f(x) \\, dx - \\int_0^3 f(x) \\, dx = 10 - 6 = 4$"
        },
        {
          "qid": "IN_025_e02",
          "q": "Given $\\int_1^7 f(x) \\, dx = 8$ and $\\int_1^4 f(x) \\, dx = 3$, find $\\int_4^7 f(x) \\, dx$.",
          "a": "$\\int_4^7 f(x) \\, dx = 8 - 3 = 5$"
        },
        {
          "qid": "IN_025_e03",
          "q": "Given $\\int_0^2 f(x) \\, dx = 4$ and $\\int_2^5 f(x) \\, dx = 6$, find $\\int_0^5 f(x) \\, dx$.",
          "a": "$\\int_0^5 f(x) \\, dx = \\int_0^2 f(x) \\, dx + \\int_2^5 f(x) \\, dx = 4 + 6 = 10$"
        }
      ],
      "medium": [
        {
          "qid": "IN_025_m01",
          "q": "Given $\\int_0^5 f(x) \\, dx = 12$ and $\\int_0^2 f(x) \\, dx = 5$, find $\\int_2^5 f(x) \\, dx$.",
          "a": "$\\int_2^5 f(x) \\, dx = 12 - 5 = 7$"
        },
        {
          "qid": "IN_025_m02",
          "q": "Given $\\int_1^3 f(x) \\, dx = 8$, find $\\int_3^1 f(x) \\, dx$.",
          "a": "Reversing limits changes the sign: $\\int_3^1 f(x) \\, dx = -\\int_1^3 f(x) \\, dx = -8$"
        },
        {
          "qid": "IN_025_m03",
          "q": "Given $\\int_0^4 f(x) \\, dx = 8$, find $\\int_0^4 3f(x) \\, dx$.",
          "a": "$\\int_0^4 3f(x) \\, dx = 3 \\int_0^4 f(x) \\, dx = 3(8) = 24$"
        },
        {
          "qid": "IN_025_m04",
          "q": "Given $\\int_0^8 f(x) \\, dx = 15$, $\\int_0^3 f(x) \\, dx = 4$, and $\\int_5^8 f(x) \\, dx = 5$. Find $\\int_3^5 f(x) \\, dx$.",
          "a": "$\\int_3^5 f(x) \\, dx = \\int_0^8 - \\int_0^3 - \\int_5^8 = 15 - 4 - 5 = 6$"
        },
        {
          "qid": "IN_025_m05",
          "q": "Given $\\int_0^6 f(x) \\, dx = 10$ and $\\int_0^6 g(x) \\, dx = 4$, find $\\int_0^6 [2f(x) - g(x)] \\, dx$.",
          "a": "$= 2(10) - 4 = 16$"
        },
        {
          "qid": "IN_025_m06",
          "q": "Given $\\int_2^5 f(x) \\, dx = 9$, find $\\int_5^2 f(x) \\, dx$ and $\\int_2^5 \\frac{f(x)}{3} \\, dx$.",
          "a": "Reversing limits: $\\int_5^2 f(x) \\, dx = -9$. Scaling: $\\int_2^5 \\frac{f(x)}{3} \\, dx = \\frac{1}{3}(9) = 3$"
        }
      ],
      "hard": [
        {
          "qid": "IN_025_h01",
          "q": "Given $\\int_0^6 f(x) \\, dx = 10$, $\\int_0^2 f(x) \\, dx = 3$, $\\int_4^6 f(x) \\, dx = 5$. Find $\\int_2^4 f(x) \\, dx$.",
          "a": "$\\int_2^4 f(x) \\, dx = 10 - 3 - 5 = 2$"
        },
        {
          "qid": "IN_025_h02",
          "q": "$f$ is odd on $[-2,2]$ and $\\int_0^2 f(x) \\, dx = 5$. Find $\\int_{-2}^0 f(x) \\, dx$.",
          "a": "Since $f$ is odd: $\\int_{-2}^2 f(x) \\, dx = 0$. So $\\int_{-2}^0 f(x) \\, dx = 0 - 5 = -5$"
        },
        {
          "qid": "IN_025_h03",
          "q": "Given $\\int_0^4 f(x) \\, dx = 7$ and $\\int_0^4 g(x) \\, dx = 3$, find $\\int_0^4 [f(x) - g(x)] \\, dx$.",
          "a": "$= 7 - 3 = 4$"
        },
        {
          "qid": "IN_025_h04",
          "q": "Given $\\int_a^b f(x) \\, dx = A$ and $\\int_a^b g(x) \\, dx = B$, express $\\int_a^b [cf(x) + dg(x) + k] \\, dx$ in terms of $A$, $B$, $a$, $b$, $c$, $d$, $k$.",
          "a": "$= c \\int_a^b f(x) \\, dx + d \\int_a^b g(x) \\, dx + \\int_a^b k \\, dx = cA + dB + k(b-a)$"
        },
        {
          "qid": "IN_025_h05",
          "q": "Given $\\int_0^3 f(x) \\, dx = 9$, $\\int_3^5 f(x) \\, dx = -4$, and $\\int_5^7 f(x) \\, dx = 6$, find $\\int_0^7 |f(x)| \\, dx$ if $f(x) \\geq 0$ on $[0,3]$ and $[5,7]$, and $f(x) \\leq 0$ on $[3,5]$.",
          "a": "$\\int_0^7 |f(x)| \\, dx = \\int_0^3 f(x) \\, dx + \\left|\\int_3^5 f(x) \\, dx\\right| + \\int_5^7 f(x) \\, dx = 9 + 4 + 6 = 19$"
        },
        {
          "qid": "IN_025_h06",
          "q": "Given $\\int_0^{10} f(x) \\, dx = 20$, $\\int_0^3 f(x) \\, dx = 4$, $\\int_3^6 f(x) \\, dx = 7$, and $\\int_8^{10} f(x) \\, dx = 3$. Find $\\int_6^8 f(x) \\, dx$.",
          "a": "$\\int_6^8 f(x) \\, dx = \\int_0^{10} - \\int_0^3 - \\int_3^6 - \\int_8^{10} = 20 - 4 - 7 - 3 = 6$"
        }
      ]
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
      "easy": [
        {
          "qid": "IN_026_e01",
          "q": "Let $F(x) = \\int_0^x (6 - 2t) \\, dt$. Find the value of $x$ where $F(x)$ is maximised.",
          "a": "$F'(x) = 6 - 2x = 0 \\Rightarrow x = 3$. $F''(x) = -2 < 0$, confirming a maximum at $x = 3$."
        },
        {
          "qid": "IN_026_e02",
          "q": "Let $F(x) = \\int_0^x (4 - t) \\, dt$. Find the value of $x$ where $F(x)$ is maximised.",
          "a": "$F'(x) = 4 - x = 0 \\Rightarrow x = 4$. $F''(x) = -1 < 0$, confirming a maximum at $x = 4$."
        },
        {
          "qid": "IN_026_e03",
          "q": "Let $F(x) = \\int_0^x (3 - 3t) \\, dt$. Find the value of $x$ where $F(x)$ is maximised.",
          "a": "$F'(x) = 3 - 3x = 0 \\Rightarrow x = 1$. $F''(x) = -3 < 0$, confirming a maximum at $x = 1$."
        }
      ],
      "medium": [
        {
          "qid": "IN_026_m01",
          "q": "Let $F(x) = \\int_0^x (4 - t^2) \\, dt$. Find the value of $x$ where $F(x)$ is maximised.",
          "a": "$F'(x) = 4 - x^2 = 0 \\Rightarrow x = 2$ (taking $x > 0$). $F''(x) = -2x$, so $F''(2) = -4 < 0$. Maximum at $x = 2$."
        },
        {
          "qid": "IN_026_m02",
          "q": "Let $F(x) = \\int_0^x \\cos(t) \\, dt$. Find the smallest $x > 0$ where $F(x)$ is maximised.",
          "a": "$F'(x) = \\cos(x) = 0 \\Rightarrow x = \\frac{\\pi}{2}$. $F''(x) = -\\sin(x)$, so $F''(\\pi/2) = -1 < 0$. Maximum at $x = \\frac{\\pi}{2}$, with $F(\\pi/2) = 1$."
        },
        {
          "qid": "IN_026_m03",
          "q": "Let $F(x) = \\int_0^x (6t - t^2 - 8) \\, dt$. Find any critical points and classify them.",
          "a": "$F'(x) = 6x-x^2-8 = -(x-2)(x-4) = 0$ at $x = 2, 4$. $F''(x) = 6-2x$: $F''(2) = 2 > 0$ (min), $F''(4) = -2 < 0$ (max). Maximum at $x = 4$."
        },
        {
          "qid": "IN_026_m04",
          "q": "Let $F(x) = \\int_0^x (3 - e^t) \\, dt$. Find the value of $x$ where $F(x)$ is maximised.",
          "a": "$F'(x) = 3 - e^x = 0 \\Rightarrow e^x = 3 \\Rightarrow x = \\ln 3$. $F''(x) = -e^x < 0$ for all $x$, confirming maximum at $x = \\ln 3$."
        },
        {
          "qid": "IN_026_m05",
          "q": "Let $F(x) = \\int_1^x (t - t^3) \\, dt$ for $x > 0$. Find the value of $x$ where $F(x)$ is maximised.",
          "a": "$F'(x) = x - x^3 = x(1-x)(1+x) = 0$. For $x > 0$: $x = 1$. $F''(x) = 1-3x^2$, $F''(1) = -2 < 0$. Maximum at $x = 1$."
        }
      ],
      "hard": [
        {
          "qid": "IN_026_h01",
          "q": "Let $F(x) = \\int_0^x \\sin(t) \\, dt$ on $[0, 2\\pi]$. Find the maximum value of $F$.",
          "a": "$F'(x) = \\sin(x) = 0$ at $x = \\pi, 2\\pi$. $F''(x) = \\cos(x)$: $F''(\\pi) = -1 < 0$ (max), $F''(2\\pi) = 1 > 0$ (min). $F(\\pi) = [-\\cos t]_0^{\\pi} = 1+1 = 2$. Maximum value is 2."
        },
        {
          "qid": "IN_026_h02",
          "q": "Let $F(x) = \\int_0^x (4t - t^3) \\, dt$. Find the maximum value of $F$ for $x > 0$.",
          "a": "$F'(x) = 4x - x^3 = x(4-x^2) = 0 \\Rightarrow x = 2$ (for $x > 0$). $F''(x) = 4-3x^2$, $F''(2) = -8 < 0$. $F(2) = [2t^2-t^4/4]_0^2 = 8-4 = 4$. Maximum value is 4."
        },
        {
          "qid": "IN_026_h03",
          "q": "Let $F(x) = \\int_0^x (9 - t^2) \\, dt$. Find the maximum value of $F$ for $x > 0$.",
          "a": "$F'(x) = 9-x^2 = 0 \\Rightarrow x = 3$. $F''(3) = -6 < 0$. $F(3) = [9t-t^3/3]_0^3 = 27-9 = 18$. Maximum value is 18."
        },
        {
          "qid": "IN_026_h04",
          "q": "Let $F(x) = \\int_0^x (2 - e^t) \\, dt$. Find the maximum value of $F$.",
          "a": "$F'(x) = 2 - e^x = 0 \\Rightarrow x = \\ln 2$. $F''(x) = -e^x < 0$. $F(\\ln 2) = [2t-e^t]_0^{\\ln 2} = (2\\ln 2-2) - (0-1) = 2\\ln 2 - 1 \\approx 0.386$."
        },
        {
          "qid": "IN_026_h05",
          "q": "Let $F(x) = \\int_0^x t(4 - t^2) \\, dt$. Find the maximum value of $F$ for $x > 0$.",
          "a": "$F'(x) = x(4-x^2) = 0 \\Rightarrow x = 2$ (for $x > 0$). $F''(x) = 4-3x^2$, $F''(2) = -8 < 0$. $F(2) = [2t^2-t^4/4]_0^2 = 8-4 = 4$. Maximum value is 4."
        }
      ]
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
      "easy": [
        {
          "qid": "IN_027_e01",
          "q": "If $f(x) > 0$ for all $x$ in $[0, 5]$, describe the behaviour of $A(x) = \\int_0^x f(t) \\, dt$.",
          "a": "Since $f(x) > 0$, we have $A'(x) = f(x) > 0$. So $A(x)$ is strictly increasing on $[0, 5]$, starting from $A(0) = 0$."
        },
        {
          "qid": "IN_027_e02",
          "q": "If $f(x) < 0$ for all $x$ in $[0, 4]$, describe the behaviour of $A(x) = \\int_0^x f(t) \\, dt$.",
          "a": "Since $f(x) < 0$, $A'(x) = f(x) < 0$. So $A(x)$ is strictly decreasing on $[0, 4]$, starting from $A(0) = 0$ and becoming increasingly negative."
        },
        {
          "qid": "IN_027_e03",
          "q": "If $f(x) = 3$ (constant) for all $x$, describe and sketch $A(x) = \\int_0^x 3 \\, dt$.",
          "a": "$A(x) = 3x$. This is a straight line through the origin with gradient 3. It is always increasing."
        }
      ],
      "medium": [
        {
          "qid": "IN_027_m01",
          "q": "Given that $f(x) > 0$ for $0 < x < 3$, $f(x) < 0$ for $x > 3$, and $f(3) = 0$, describe the behaviour of $A(x) = \\int_0^x f(t) \\, dt$.",
          "a": "$A'(x) = f(x)$. For $0 < x < 3$: $A' > 0$, so $A$ is increasing. At $x = 3$: $A' = 0$ and changes from positive to negative, so $A$ has a local maximum. For $x > 3$: $A' < 0$, so $A$ is decreasing."
        },
        {
          "qid": "IN_027_m02",
          "q": "Let $f(x) = x - 2$. Sketch $A(x) = \\int_0^x (t - 2) \\, dt$ for $0 \\leq x \\leq 5$.",
          "a": "$A(x) = \\frac{x^2}{2} - 2x$. Key points: $A(0) = 0$, $A(2) = -2$ (minimum, since $f(2) = 0$ changes sign), $A(4) = 0$. The graph is an upward parabola with vertex at $(2, -2)$."
        },
        {
          "qid": "IN_027_m03",
          "q": "If $f(x)$ has a local maximum at $x = c$, what feature does $A(x) = \\int_0^x f(t) \\, dt$ have at $x = c$?",
          "a": "$A'(x) = f(x)$ and $A''(x) = f'(x)$. At a local max of $f$: $f'(c) = 0$ so $A''(c) = 0$. This means $A$ has an inflection point at $x = c$ (where the accumulation rate changes from increasing to decreasing)."
        },
        {
          "qid": "IN_027_m04",
          "q": "The graph of $f$ crosses the $x$-axis at $x = 1$ and $x = 4$, with $f > 0$ on $(1, 4)$ and $f < 0$ elsewhere. Where does $A(x) = \\int_0^x f(t) \\, dt$ have its local minimum and maximum?",
          "a": "$A' = f$. At $x = 1$: $f$ changes from negative to positive, so $A$ has a local minimum. At $x = 4$: $f$ changes from positive to negative, so $A$ has a local maximum."
        },
        {
          "qid": "IN_027_m05",
          "q": "Let $f(x) = \\sin(x)$. Describe the key features of $A(x) = \\int_0^x \\sin(t) \\, dt$ on $[0, 2\\pi]$.",
          "a": "$A(x) = 1 - \\cos(x)$. $A(0) = 0$, $A(\\pi) = 2$ (maximum, where $\\sin(\\pi) = 0$ changes sign), $A(2\\pi) = 0$. The graph oscillates, reaching its peak at $x = \\pi$."
        }
      ],
      "hard": [
        {
          "qid": "IN_027_h01",
          "q": "The graph of $f$ is a triangle: $f(0)=0$, $f(2)=4$, $f(4)=0$. Sketch $A(x) = \\int_0^x f(t) \\, dt$ and find $A(4)$.",
          "a": "For $0 \\leq x \\leq 2$: $f(t) = 2t$, so $A(x) = x^2$ (parabola). For $2 \\leq x \\leq 4$: $f(t) = 8-2t$, so $A(x) = A(2) + \\int_2^x (8-2t) \\, dt = 4 + 8(x-2)-(x^2-4) = -x^2+8x-8$. $A(4) = -16+32-8 = 8$. The graph is two parabolic arcs forming a smooth curve."
        },
        {
          "qid": "IN_027_h02",
          "q": "Sketch $A(x) = \\int_0^x (t^2 - 4) \\, dt$ for $0 \\leq x \\leq 3$. Identify all key features.",
          "a": "$A(x) = \\frac{x^3}{3} - 4x$. $A(0)=0$. $A'(x) = x^2-4 = 0$ at $x = 2$. $A''(x)=2x$, $A''(2)=4>0$ → min at $x=2$. $A(2) = \\frac{8}{3}-8 = -\\frac{16}{3}$. $A(3) = 9-12 = -3$. Inflection at $A''=0$: none on $[0,3]$ (since $2x=0$ only at $x=0$). The function decreases to a min at $(2, -16/3)$ then increases."
        },
        {
          "qid": "IN_027_h03",
          "q": "Given $f(x) > 0$ on $(0,2)$, $f(x) < 0$ on $(2,5)$, with $\\int_0^2 f(x) \\, dx = 6$ and $\\int_2^5 f(x) \\, dx = -6$. Sketch $A(x) = \\int_0^x f(t) \\, dt$ and find where $A(x) = 0$ (besides $x = 0$).",
          "a": "$A$ increases from 0 to $A(2) = 6$ (max), then decreases. $A(5) = 6 + (-6) = 0$. So $A(x) = 0$ at $x = 5$. The graph starts at 0, rises to 6, then returns to 0, like an arch."
        },
        {
          "qid": "IN_027_h04",
          "q": "If $f$ is an even function and $A(x) = \\int_0^x f(t) \\, dt$, show that $A$ is an odd function.",
          "a": "$A(-x) = \\int_0^{-x} f(t) \\, dt$. Substitute $u = -t$: $= \\int_0^{x} f(-u)(-du) = -\\int_0^x f(u) \\, du = -A(x)$ (using $f(-u) = f(u)$ since $f$ is even). So $A(-x) = -A(x)$, confirming $A$ is odd."
        },
        {
          "qid": "IN_027_h05",
          "q": "Let $f(x) = \\cos(x)$ on $[0, 4\\pi]$. Describe the behaviour of $A(x) = \\int_0^x \\cos(t) \\, dt$, including all turning points and zeros.",
          "a": "$A(x) = \\sin(x)$. Zeros at $x = 0, \\pi, 2\\pi, 3\\pi, 4\\pi$. $A'(x) = \\cos(x) = 0$ at $x = \\pi/2, 3\\pi/2, 5\\pi/2, 7\\pi/2$. Maxima ($A = 1$) at $\\pi/2, 5\\pi/2$; minima ($A = -1$) at $3\\pi/2, 7\\pi/2$. The accumulation function oscillates as a sine wave."
        }
      ]
    }
  ]
};
