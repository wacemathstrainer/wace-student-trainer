// schedule.js -- Taught schedule (teacher creates one per class)
// NOTE: This is a .js file (not .json) so it loads via <script> tag from file://
// ENCODING: This file MUST be pure ASCII. All non-ASCII chars are \uXXXX escaped.

const TAUGHT_SCHEDULE = {
  "className": "12 Methods Per 2 \u2014 2026",
  "teacherName": "Mr Smith",
  "createdDate": "2026-02-01",
  "markEndpoint": "https://australia-southeast1-wace-trainer.cloudfunctions.net/mark",
  "sympyEndpoint": "https://australia-southeast1-wace-trainer.cloudfunctions.net/verify",
  "schedule": [
    {
      "date": "2026-02-03",
      "label": "Week 1 \u2014 Differentiation Rules (Chain, Product, Quotient)",
      "problemTypes": [
        "Chain rule differentiation",
        "Product rule differentiation",
        "Quotient rule differentiation",
        "Differentiation problem",
        "Differentiating polynomial composite function using chain rule",
        "Differentiating square root of linear function",
        "Differentiating $x^n \\cdot e^{f(x)}$ using product rule",
        "Differentiating $x^n \\cdot \\ln(f(x))$ using product rule",
        "Differentiating $x \\cdot e^{x^2}$ using product rule with chain rule",
        "Differentiating a trigonometric quotient using quotient rule",
        "Differentiating polynomial rational function using quotient rule",
        "Differentiating composite function with square root and trigonometric function",
        "Differentiating product of polynomial and trigonometric function using product rule",
        "Differentiating product of exponential and trigonometric function using product rule",
        "Differentiating exponential rational function using quotient rule to find maximum",
        "Differentiating exponential/trigonometric quotient using quotient rule and evaluating"
      ]
    },
    {
      "date": "2026-02-10",
      "label": "Week 2 \u2014 Rates of Change & Derivatives from Graphs/Tables",
      "problemTypes": [
        "Finding rate of change by differentiation",
        "Reading derivative from graph at a point",
        "Evaluating derivative of composition using chain rule with graph values",
        "Evaluating derivative of product using product rule with graph values",
        "Evaluating derivative of quotient using quotient rule with table values",
        "Showing derivative of composite function using chain rule and prior result (hence show that)",
        "Showing derivative of quotient with exponential denominator using quotient rule",
        "Proving trigonometric derivative identity using quotient rule (show that)"
      ]
    },
    {
      "date": "2026-02-17",
      "label": "Week 3 \u2014 Exponential Functions & Models",
      "problemTypes": [
        "Exponential function problem",
        "Exponential model problem",
        "Evaluating exponential model $Ae^{kt}$ at specific time",
        "Finding rate of change by differentiating $Ae^{kt}$",
        "Solving exponential equation $Ae^{kt}$ = target",
        "Determining parameters of exponential model from two data points",
        "Determining parameter from initial condition in exponential rational model",
        "Determining decay constant k from given half-life using logarithms",
        "Finding half-life by solving $Ae^{kt}$ = $A/2$ using logarithms",
        "Calculating change using exponential model",
        "Finding tangent point by solving $f'(x) = m$ and using point-slope form",
        "Determining constant in tangent line equation from point on line",
        "Finding x-intercepts of exponential function by factorizing and solving",
        "Sketching exponential function with tangent line",
        "Interpreting long-term behavior of rate of change in exponential model",
        "Solving exponential decay model with percentage rate change to meet threshold condition",
        "Solving exponential equation with accumulation model B = A/(1-$e^{-kT}$)",
        "Solving for parameter in exponential model with accumulation to meet target condition"
      ]
    },
    {
      "date": "2026-02-24",
      "label": "Week 4 \u2014 Stationary Points & Curve Sketching",
      "problemTypes": [
        "Stationary points problem",
        "Finding and classifying stationary points using first and second derivative tests",
        "Classifying stationary point as maximum or minimum using second derivative test with given values",
        "Identifying stationary points from factored derivative",
        "Showing unique turning point by finding stationary points and verifying coordinates",
        "Proving uniqueness of stationary point by analyzing derivative domain",
        "Finding points of inflection by solving $f''(x) = 0$",
        "Sketching graph",
        "Sketching graph using stationary points and points of inflection",
        "Interpreting second derivative as rate of change of the derivative",
        "Finding rate of change of derivative by differentiating using product rule and evaluating",
        "Finding rate of change of derivative by differentiating rational function using quotient rule and evaluating"
      ]
    },
    {
      "date": "2026-03-03",
      "label": "Week 5 \u2014 Optimization",
      "problemTypes": [
        "Optimization problem",
        "Optimization of area",
        "Optimization of cost",
        "Optimization using calculus (differentiate, solve, verify)",
        "Optimising using calculus (differentiate",
        "Deriving area/objective function from geometric constraint",
        "Deriving area/objective function from geometric constraint (show that)",
        "Deriving surface area function from geometric constraint (show that)",
        "Deriving volume function from geometric constraint with given relationship (show that)",
        "Evaluating function at boundary to find dimension",
        "Finding exact length using Pythagorean theorem in geometric context",
        "Using Pythagorean theorem to express distance then finding minimum",
        "Sketching geometric diagram from given conditions",
        "Interpreting optimization result in physical context with packing constraints"
      ]
    },
    {
      "date": "2026-03-10",
      "label": "Week 6 \u2014 Kinematics (Differentiation)",
      "problemTypes": [
        "Kinematics: differentiation problem",
        "Kinematics: finding velocity by differentiating position",
        "Kinematics: finding when velocity equals zero",
        "Kinematics: calculating total distance travelled",
        "Kinematics: calculating displacement between two specific times",
        "Kinematics: determining speeding up or slowing down from signs of velocity and acceleration",
        "Kinematics: evaluating initial acceleration from acceleration function",
        "Kinematics: finding maximum speed by comparing absolute velocities at critical points",
        "Kinematics: finding maximum using calculus (differentiate, solve, verify)",
        "Kinematics: finding time from acceleration condition and calculating displacement",
        "Kinematics: finding parameter from initial condition by integrating",
        "Kinematics: interpreting acceleration graph to describe velocity behavior",
        "Finding value when function has stationary point (velocity equals zero)",
        "Using increments formula",
        "Using increments formula to approximate change"
      ]
    },
    {
      "date": "2026-03-17",
      "label": "Week 7 \u2014 Trigonometric Calculus",
      "problemTypes": [
        "Trigonometric calculus problem",
        "Calculating rate of change using chain rule with trigonometric related rates",
        "Evaluating a function involving trig at a specific angle (substitution)",
        "Showing derivative of tangent relationship using trigonometric differentiation",
        "Solving trigonometric equation in context",
        "Solving trigonometric equation using CAS"
      ]
    },
    {
      "date": "2026-03-24",
      "label": "Week 8 \u2014 Logarithmic Functions",
      "problemTypes": [
        "Logarithmic evaluation",
        "Logarithmic graph problem",
        "Applying logarithmic laws",
        "Log scale/linearisation problem",
        "Evaluating logarithmic function at a given input",
        "Evaluating logarithmic model at a given input",
        "Evaluating logarithmic expression by substitution",
        "Evaluating $\\log_a(x) = b$ by converting to exponential form $x = a^b$",
        "Evaluating $a^{kp}$ by using log-exponential inverse relationship",
        "Evaluating expression using inverse relationship between log and exponential",
        "Expressing $\\log_a(k)$ in terms of a defined variable using log laws",
        "Expressing log of product in terms of defined variables using log laws",
        "Solving logarithmic equation",
        "Solving logarithmic equation for variable using log laws",
        "Solving equation involving logarithm to find specific value",
        "Solving exponential equation by isolating $e^{kx}$ and taking logarithms",
        "Proving logarithmic identity using log laws (show that)"
      ]
    },
    {
      "date": "2026-03-31",
      "label": "Week 9 \u2014 Logarithmic Graphs, Models & Transformations",
      "problemTypes": [
        "Sketching logarithmic function with appropriate features",
        "Sketching logarithmic function with horizontal translation",
        "Sketching translated and shifted logarithmic graph with key points and asymptote",
        "Sketching piecewise function involving constant and logarithmic components",
        "Identifying equations of translated/reflected logarithmic graphs from diagram",
        "Identifying parameter from vertical asymptote of logarithmic graph",
        "Finding x-intercept of translated and vertically shifted logarithmic function",
        "Interpreting behavior of logarithmic function from equation",
        "Interpreting minimum from graph of logarithmic function in context",
        "Determining parameters of logarithmic function from two points using simultaneous equations",
        "Determining parameters of logarithmic model from initial conditions",
        "Determining parameter from continuity condition in piecewise function",
        "Finding value from logarithmic model and interpreting in context",
        "Comparing parameters of logarithmic models to make contextual interpretation",
        "Expressing logarithmic transformation as horizontal dilation using log laws",
        "Expressing logarithmic transformation as vertical dilation using log laws",
        "Expressing logarithmic transformation as vertical translation using log laws",
        "Deriving linear log relationship and sketching graph",
        "Determining gradient and intercept of linear log-scale relationship",
        "Determining parameter from slope of linear log graph",
        "Reading value from logarithmic scale/graph",
        "Rearranging linear log relationship into $\\log(M/c)$ form using log laws",
        "Comparing quantities using logarithmic scale by taking ratio of exponential forms",
        "Completing table investigating limit definition of derivative for exponential",
        "Identifying e as base where derivative of $a^x$ equals $a^x$ using limit definition",
        "Finding maximum of logarithmic function using calculus (differentiate, solve, verify)",
        "Solving trigonometric equation for parameter"
      ]
    },
    {
      "date": "2026-04-28",
      "label": "Week 10 \u2014 Calculus of the Natural Logarithmic Function",
      "problemTypes": [
        "Differentiating $x \\cdot \\$\\ln(x)$ using product rule",
        "Evaluating derivative of rational function with substitution",
        "Finding and classifying stationary points for function with ln using calculus",
        "Finding when derivative equals zero by differentiating function with logarithm",
        "Finding point where derivative of function with trig and log equals given gradient",
        "Sketching graph of function with ln showing all key features",
        "Explaining anti-derivative of $f'(x)/f(x)$ form",
        "Integrating $f'(x)/f(x)$ to obtain $\\ln|f(x)|$",
        "Integrating $f'(x)/f(x)$ to obtain $\\ln|f(x)|$ with initial condition and log law simplification",
        "Anti-differentiating $\\ln(x)$ using integration by parts (reverse product rule)",
        "Evaluating definite integral using fundamental theorem and interpreting as total change",
        "Solving for time using anti-derivative with initial condition and target value"
      ]
    },
    {
      "date": "2026-05-05",
      "label": "Week 11 \u2014 Anti-differentiation",
      "problemTypes": [
        "Integration technique",
        "Anti-differentiating polynomial",
        "Anti-differentiation with initial condition",
        "Anti-differentiating $e^{ax}$ with initial condition to find function value",
        "Anti-differentiating $xe^{x^2}$ by recognition with initial condition",
        "Anti-differentiating trigonometric function with linear argument and initial condition",
        "Calculating quantity by integration with initial condition",
        "Determining constant in velocity function from distance traveled condition",
        "Evaluating position function at specific time",
        "Integrating $f'(x)/f(x)$ form with trigonometric functions",
        "Reverse chain rule integration from prior derivative (hence integrate)",
        "Solving for parameter using integration and percentage condition",
        "Differentiate a function; integrate the resulting identity to \u0091hence\u0092 find the antiderivative of a related integrand."
      ]
    },
    {
      "date": "2026-05-12",
      "label": "Week 12 \u2014 Definite Integrals",
      "problemTypes": [
        "Evaluating definite integral of transformed function using linearity",
        "Evaluating definite integral of transformed trigonometric function",
        "Evaluating definite integral using geometric area of circular segments",
        "Evaluating definite integral using signed areas from graph",
        "Finding upper limit where definite integral equals zero using signed areas",
        "Shading region on graph corresponding to a given definite integral",
        "Numerical integration approximation",
        "Bounding a definite integral using upper and lower rectangle sums with explanation",
        "Completing table of function values for rectangle approximation",
        "Estimating definite integral using midpoint rule or trapezium rule from table",
        "Estimating integral using average of upper and lower rectangle sums",
        "Suggesting methods to improve rectangle approximation of area"
      ]
    },
    {
      "date": "2026-05-19",
      "label": "Week 13 \u2014 Fundamental Theorem of Calculus",
      "problemTypes": [
        "Applying fundamental theorem of calculus",
        "Applying fundamental theorem to evaluate integral of derivative",
        "Differentiating integral with variable bound using fundamental theorem",
        "Evaluating definite integral of acceleration using fundamental theorem",
        "Evaluating definite integral using linearity and interval properties",
        "Sketching accumulation function A(x) = \u00e2\u0088\u00ab[a to x] f(t)dt from graph of f",
        "Integrating exponential function over specified bounds"
      ]
    },
    {
      "date": "2026-05-26",
      "label": "Week 14 \u2014 Areas by Integration",
      "problemTypes": [
        "Calculating area using integration",
        "Calculating area between curve and line using integration",
        "Calculating area between parabola and line using integration",
        "Calculating area between two curves by splitting at intersection point",
        "Calculating area bounded by curve, x-axis, and vertical lines using definite integral",
        "Calculating area bounded by derivative curve and x-axis using absolute value",
        "Calculating area under curve using definite integral with ln function",
        "Calculating area using complement and result from previous part (hence)",
        "Calculating area using given regions from graph",
        "Deriving area formula using geometry",
        "Deriving area function by integration and simplifying (show that proof)",
        "Explaining equivalence of areas under translation",
        "Generalizing area calculation with parameter using definite integral and complement",
        "Writing definite integral for area using inverse function",
        "Optimising area by differentiation and solving for maximum",
        "Determining polynomial coefficients from turning point and area condition using integration"
      ]
    },
    {
      "date": "2026-06-02",
      "label": "Week 15 \u2014 Volumes & Further Applications of Integration",
      "problemTypes": [
        "Calculating volume using integration",
        "Calculating volume by integration (finding bounds from curve equation, setting up and evaluating integral)",
        "Calculating volume using definite integrals of piecewise function",
        "Inverse volume problem: finding height/level from given volume using integration",
        "Evaluating rate of change $dV/dh$ for volume function at specific height",
        "Interpreting meaning of derivative in practical context",
        "Solving for upper limit k when definite integral equals given value"
      ]
    },
    {
      "date": "2026-06-09",
      "label": "Week 16 \u2014 Kinematics (Integration)",
      "problemTypes": [
        "Kinematics: general problem",
        "Kinematics: integration problem",
        "Kinematics: finding displacement by integrating velocity with initial condition",
        "Kinematics: finding displacement by integrating velocity and evaluating at specific time",
        "Kinematics: integrating velocity to find displacement with initial condition",
        "Kinematics: calculating distance travelled by integrating absolute value of velocity",
        "Kinematics: evaluating definite integral of velocity and interpreting as change in displacement",
        "Kinematics: solving for time when displacement equals target value"
      ]
    },
    {
      "date": "2026-07-21",
      "label": "Week 17 \u2014 Discrete Random Variables",
      "problemTypes": [
        "Probability distribution table problem",
        "Calculating $E(X)$ for discrete random variable",
        "Calculating expected value",
        "Calculating $\\text{Var}(X)$ for discrete random variable",
        "Variance/SD calculation",
        "Calculating probability",
        "Calculating probability using probability distribution",
        "Calculating P(a \u00e2\u0089\u00a4 X \u00e2\u0089\u00a4 b) from CDF",
        "Calculating P(a \u00e2\u0089\u00a4 X \u00e2\u0089\u00a4 b) from probability distribution or CDF",
        "Calculating conditional probability P(X=a | X\u00e2\u0089\u00a4b) for discrete RV",
        "Completing probability distribution and cumulative distribution tables",
        "Completing cumulative distribution table",
        "Completing probability distribution table for sum of two dice",
        "Constructing probability distribution from frequency data",
        "Constructing probability distribution from normal distribution probabilities",
        "Constructing probability distribution table for related random variable",
        "Constructing sample space table for sum of discrete random variables",
        "Describing key features of probability distribution from graph",
        "Determining distribution type from probability properties",
        "Determining parameter value to achieve specified expected value",
        "Comparing probability between modified distribution"
      ]
    },
    {
      "date": "2026-07-28",
      "label": "Week 18 \u2014 Expected Value Applications & Profit/Loss",
      "problemTypes": [
        "Calculating expected profit/loss from discrete random variable with cost structure",
        "Constructing probability distribution table for profit/loss random variable",
        "Interpreting expected value to determine long-run profitability",
        "Using expected value to evaluate fairness of game",
        "Finding break-even price from expected value equation",
        "Calculating probability from combinatorial scratch-ticket setup",
        "Finding mean and variance under linear transformation $Y = aX + b$",
        "Explaining probability calculation for related random variable using context"
      ]
    },
    {
      "date": "2026-08-04",
      "label": "Week 19 \u2014 Bernoulli & Binomial Distributions",
      "problemTypes": [
        "Stating binomial distribution",
        "Stating binomial distribution $X \\sim \\text{Bin}(n,p)$ from context",
        "Stating binomial distribution $X \\sim \\text{Bin}(n$",
        "Stating binomial distribution $X \\sim \\text{Bin}(n,p)$ from context and calculating parameters",
        "Stating Bernoulli distribution from context",
        "Completing probability distribution table for Bernoulli distribution",
        "Calculating mean and standard deviation of Bernoulli distribution",
        "Completing probability distribution table for binomial distribution",
        "Calculating binomial probability",
        "Calculating binomial probability $P(X = k)$",
        "Calculating binomial probability P(X \u00e2\u0089\u00a5 k)",
        "Calculating binomial tail probability",
        "Calculating complementary binomial probability",
        "Calculating expected value and variance of binomial distribution",
        "Probability of independent events",
        "Calculating probability of independent events using multiplication rule (complement)"
      ]
    },
    {
      "date": "2026-08-11",
      "label": "Week 20 \u2014 Further Binomial & Assumptions",
      "problemTypes": [
        "Calculating negative binomial probability (trials until rth success)",
        "Calculating binomial probability after determining p from normal distribution",
        "Calculating binomial probability from normal distribution probability",
        "Finding n and p from mean and variance of binomial, then evaluating a probability",
        "Stating assumptions required for binomial distribution validity",
        "Evaluating validity of binomial distribution assumptions in context",
        "Explaining why a situation cannot be modelled by binomial distribution"
      ]
    },
    {
      "date": "2026-08-18",
      "label": "Week 21 \u2014 Continuous Random Variables",
      "problemTypes": [
        "Continuous random variable probability",
        "Calculating probability for continuous random variable by integration",
        "Calculating probability for uniform distribution",
        "Calculating probability P(X \u00e2\u0089\u00a5 k) by integrating PDF",
        "Calculating probability P(a \u00e2\u0089\u00a4 X \u00e2\u0089\u00a4 b) from histogram",
        "Calculating probability from histogram by summing relative frequencies",
        "Calculating probability involving transformation of uniform random variable",
        "Calculating probability of independent events occurring consecutively",
        "Calculating probability using geometric area from continuous distribution",
        "Calculating conditional probability for continuous random variable",
        "Calculating expected value of continuous random variable by integration",
        "Calculating expected value and variance of continuous random variable with conversion of units",
        "Calculating $E(aX + b)$ using linearity of expectation",
        "Calculating $\\text{Var}(aX + b)$ using variance properties",
        "Calculating standard deviation of continuous random variable using variance formula",
        "Finding median by solving integral equation for continuous RV",
        "Finding probability using complement and piecewise pdf integration"
      ]
    },
    {
      "date": "2026-08-25",
      "label": "Week 22 \u2014 Uniform Distributions & PDF Analysis",
      "problemTypes": [
        "Uniform distribution problem",
        "Calculating mean and variance of continuous uniform distribution",
        "Calculating variance of uniform distribution by integration",
        "Determining parameter of PDF using area condition",
        "Determining parameters and variance of uniform distribution from expected value and endpoint",
        "Determining parameters of linear transformation from given distribution properties",
        "Determining equation of pdf from graph and integrating to find probability",
        "Drawing/completing PDF graph for uniform distribution",
        "Sketching probability density function of uniform distribution",
        "Identifying continuous uniform distribution from probability density function graph",
        "Reading expected value from continuous probability distribution graph",
        "Estimating expected value from histogram using interval midpoints",
        "Comparing continuous distributions to make contextual decision",
        "Solving for parameter using probability density function condition",
        "Solving for parameter using volume formula and probability condition",
        "Solving inverse probability problem for uniform distribution in context",
        "Assessing appropriateness of normal model from histogram shape"
      ]
    },
    {
      "date": "2026-09-01",
      "label": "Week 23 \u2014 Normal Distribution",
      "problemTypes": [
        "Normal distribution probability",
        "Calculating normal probability $P(X > k)$ or $P(X < k)$",
        "Calculating normal probability $P(a < X < b)$",
        "Calculating multiple probabilities for normal distribution with classification thresholds",
        "Calculating percentage using empirical rule (68-95-99.7) for normal distribution",
        "Finding value for specified percentage using empirical rule (68-95-99.7)",
        "Interpreting range in terms of standard deviations using empirical rule",
        "Inverse normal problem",
        "Finding value for specified probability using inverse normal",
        "Finding standard deviation given a probability and the mean using inverse normal",
        "Finding standard deviation given target probability and mean using inverse normal",
        "Determining $\\mu$ and $\\sigma$\u0083 from two given probabilities using simultaneous equations",
        "Finding parameter value to achieve target tail probability",
        "Calculating conditional probability for normal distribution using restricted domain",
        "Calculating conditional proportion for normal distribution with classification",
        "Comparing probabilities from two different distributions to answer contextual question",
        "Explaining inappropriateness of normal model in context",
        "Finding expected value and variance under linear transformation $Y = aX + b$",
        "Finding expected value and variance under linear transformation $Y = aX$"
      ]
    },
    {
      "date": "2026-10-13",
      "label": "Week 24 \u2014 Sample Proportions",
      "problemTypes": [
        "Calculating sample proportion from frequency data",
        "Calculating sample proportion and margin of error from sample data",
        "Calculating mean and standard deviation of sample proportion distribution",
        "Estimating population proportion from sample proportion",
        "Determining count from sample proportion given standard deviations from mean",
        "Stating approximate distribution of sample proportion",
        "Stating condition for normal approximation to sample proportion",
        "Using approximate normality of sample proportion distribution to calculate probability",
        "Evaluating assumptions of binomial model in context",
        "Sample size problem",
        "Describing systematic sampling method and suggesting random alternative",
        "Identifying sources of bias in sampling procedure with explanation"
      ]
    },
    {
      "date": "2026-10-20",
      "label": "Week 25 \u2014 Confidence Intervals for Proportions",
      "problemTypes": [
        "Calculating CI for proportion from sample data",
        "Calculating confidence interval",
        "Calculating confidence interval and making inference about effectiveness of intervention",
        "Calculating margin of error for specified confidence level",
        "Calculating margin of error from confidence interval",
        "Calculating maximum margin of error for given sample size and confidence level",
        "Making inference from CI about claimed/target value",
        "Determining confidence level from given confidence interval",
        "Determining sample count from confidence interval center",
        "Finding sample proportion and size from confidence interval bounds",
        "Identifying confidence level from interval width",
        "Interpreting confidence interval coverage and sampling variability",
        "Converting confidence interval for proportion to range for expected count"
      ]
    },
    {
      "date": "2026-10-27",
      "label": "Week 26 \u2014 Sample Size, Margin of Error & CI Interpretation",
      "problemTypes": [
        "Calculating minimum sample size for specified margin of error (worst-case $\\hat{p}=0.5$)",
        "Calculating sample size from confidence interval bounds",
        "Calculating sample size to achieve specified reduction in margin of error",
        "Calculating probability of confidence interval coverage using binomial distribution",
        "Choosing appropriate confidence level based on trade-off between confidence and precision",
        "Comparing confidence interval widths: explaining effect of different sample sizes",
        "Identifying and explaining factors that affect confidence interval width",
        "Suggesting ways to decrease margin of error",
        "Suggesting further testing methods to verify claim",
        "Using calculus to show maximum margin of error occurs at $\\hat{p}$ = 0.5"
      ]
    }
  ],
  "allowAheadOfSchedule": false
};
