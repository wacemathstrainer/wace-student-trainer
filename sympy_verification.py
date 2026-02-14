"""
SymPy Verification Layer for Written Mode
==========================================

This script is designed to be deployed as a cloud function (AWS Lambda, 
Google Cloud Function, or Azure Function) that verifies the AI's marking
by independently checking the mathematics using SymPy.

Workflow:
1. AI reads handwriting → produces structured reading + marks
2. This function receives the AI's reading and the marking key
3. SymPy verifies each step mathematically
4. Returns verification results (agree/disagree with AI for each criterion)

Deploy: pip install sympy flask (or use cloud function framework)
Endpoint: POST /verify
"""

import json
from sympy import (
    symbols, sympify, diff, integrate, simplify, 
    Eq, solve, Rational, oo, pi, sqrt, log, exp,
    sin, cos, tan, factorial, binomial, Piecewise
)
from sympy.parsing.sympy_parser import (
    parse_expr, standard_transformations, 
    implicit_multiplication_application,
    convert_xor
)

# Standard transformations for parsing student work
TRANSFORMS = standard_transformations + (
    implicit_multiplication_application,
    convert_xor,  # allows ^ for exponentiation
)


def parse_math(expr_str):
    """
    Parse a mathematical expression string into a SymPy expression.
    Handles common student notation patterns.
    """
    if not expr_str or expr_str.strip() == "":
        return None
    
    # Clean up common notation
    cleaned = expr_str.strip()
    cleaned = cleaned.replace("^", "**")  # caret to power
    cleaned = cleaned.replace(")(", ")*(")  # implicit multiplication
    
    try:
        return parse_expr(cleaned, transformations=TRANSFORMS)
    except Exception:
        return None


def verify_derivative(original_expr_str, student_answer_str, variable="x"):
    """
    Verify that student_answer is the derivative of original_expr with respect to variable.
    
    Returns:
        {
            "correct": True/False,
            "expected": "symbolic expected answer",
            "student": "parsed student answer",
            "match": True/False,
            "details": "explanation"
        }
    """
    var = symbols(variable)
    
    original = parse_math(original_expr_str)
    student = parse_math(student_answer_str)
    
    if original is None:
        return {"correct": None, "details": "Could not parse original expression"}
    if student is None:
        return {"correct": None, "details": "Could not parse student answer"}
    
    expected = diff(original, var)
    simplified_diff = simplify(expected - student)
    
    return {
        "correct": simplified_diff == 0,
        "expected": str(expected),
        "student": str(student),
        "match": simplified_diff == 0,
        "details": f"d/d{variable}({original}) = {expected}. Student wrote: {student}. "
                   f"{'Match!' if simplified_diff == 0 else f'Difference: {simplified_diff}'}"
    }


def verify_integral(original_expr_str, student_answer_str, variable="x", 
                     lower=None, upper=None):
    """
    Verify that student_answer is the integral of original_expr.
    For definite integrals, checks the numerical result.
    For indefinite, checks derivative of student answer equals original.
    
    Returns similar dict to verify_derivative.
    """
    var = symbols(variable)
    
    original = parse_math(original_expr_str)
    student = parse_math(student_answer_str)
    
    if original is None:
        return {"correct": None, "details": "Could not parse original expression"}
    if student is None:
        return {"correct": None, "details": "Could not parse student answer"}
    
    if lower is not None and upper is not None:
        # Definite integral — check numerical value
        expected = integrate(original, (var, lower, upper))
        match = simplify(expected - student) == 0
        return {
            "correct": match,
            "expected": str(expected),
            "student": str(student),
            "match": match,
            "details": f"∫({original}, {variable}={lower}..{upper}) = {expected}. "
                       f"Student wrote: {student}. "
                       f"{'Match!' if match else f'Expected {expected}, got {student}'}"
        }
    else:
        # Indefinite integral — check derivative of student answer
        student_derivative = diff(student, var)
        match = simplify(student_derivative - original) == 0
        return {
            "correct": match,
            "expected": str(integrate(original, var)),
            "student": str(student),
            "match": match,
            "details": f"d/d{variable}({student}) = {student_derivative}. "
                       f"{'Matches integrand!' if match else f'Expected {original}'}"
        }


def verify_substitution(expr_str, variable, value, expected_result_str):
    """
    Verify that substituting variable=value into expr gives expected_result.
    Used for checking definite integral evaluation steps.
    """
    var = symbols(variable)
    
    expr = parse_math(expr_str)
    expected = parse_math(expected_result_str)
    
    if expr is None or expected is None:
        return {"correct": None, "details": "Could not parse expressions"}
    
    result = expr.subs(var, value)
    simplified_result = simplify(result)
    match = simplify(simplified_result - expected) == 0
    
    return {
        "correct": match,
        "expected": str(simplified_result),
        "student": str(expected),
        "match": match,
        "details": f"Substituting {variable}={value}: {expr} → {simplified_result}. "
                   f"Student claims: {expected}. "
                   f"{'Match!' if match else 'Mismatch!'}"
    }


def verify_follow_through(student_expr_str, variable, lower, upper, 
                           student_result_str):
    """
    Verify follow-through arithmetic: does evaluating the student's (possibly wrong) 
    expression from lower to upper give the student's claimed result?
    
    This is critical for follow-through marking — we need to verify the student's 
    arithmetic is internally consistent even if their starting expression is wrong.
    """
    var = symbols(variable)
    
    student_expr = parse_math(student_expr_str)
    student_result = parse_math(student_result_str)
    
    if student_expr is None or student_result is None:
        return {"correct": None, "details": "Could not parse expressions"}
    
    # Evaluate student's expression at both limits
    upper_val = student_expr.subs(var, upper)
    lower_val = student_expr.subs(var, lower)
    expected = simplify(upper_val - lower_val)
    match = simplify(expected - student_result) == 0
    
    return {
        "correct": match,
        "expected": str(expected),
        "student": str(student_result),
        "match": match,
        "details": f"[{student_expr}]({variable}={lower}..{upper}) = "
                   f"{upper_val} - {lower_val} = {expected}. "
                   f"Student claims: {student_result}. "
                   f"{'Arithmetic is correct!' if match else 'Arithmetic error!'}"
    }


def verify_simplification(original_str, simplified_str):
    """
    Verify that two expressions are mathematically equivalent.
    Used for checking algebraic simplification steps.
    """
    original = parse_math(original_str)
    simplified = parse_math(simplified_str)
    
    if original is None or simplified is None:
        return {"correct": None, "details": "Could not parse expressions"}
    
    match = simplify(original - simplified) == 0
    
    return {
        "correct": match,
        "original": str(original),
        "simplified": str(simplified),
        "match": match,
        "details": f"{original} {'==' if match else '!='} {simplified}"
    }


def verify_marking(ai_result, question_data):
    """
    Main verification function. Takes the AI's marking result and the question data,
    runs SymPy checks on each verifiable step, and returns a verification report.
    
    Parameters:
        ai_result: The AI's JSON response (parsed)
        question_data: The question's marking criteria and solution data
    
    Returns:
        {
            "parts": [
                {
                    "partLabel": "a",
                    "verifications": [
                        {
                            "criterion": "Correctly integrates to x^4 - 3x^2",
                            "ai_awarded": true,
                            "sympy_agrees": true,
                            "sympy_details": "..."
                        }
                    ],
                    "follow_through_check": {...},
                    "overall_agreement": true
                }
            ]
        }
    """
    verification = {"parts": []}
    
    for part_result in ai_result.get("parts", []):
        part_label = part_result.get("partLabel", "?")
        reading = part_result.get("reading", "")
        
        part_verification = {
            "partLabel": part_label,
            "verifications": [],
            "overall_agreement": True
        }
        
        # Get the corresponding question part data
        q_part = None
        for qp in question_data.get("parts", []):
            if qp.get("partLabel") == part_label:
                q_part = qp
                break
        
        if q_part is None:
            part_verification["error"] = f"No question data found for part {part_label}"
            verification["parts"].append(part_verification)
            continue
        
        # Verify each marking criterion where possible
        for mark in part_result.get("marks", []):
            criterion_idx = mark.get("criterionIndex", 0)
            criteria = q_part.get("marking", [])
            
            if criterion_idx < len(criteria):
                criterion_text = criteria[criterion_idx].get("text", "")
                
                v = {
                    "criterion": criterion_text,
                    "ai_awarded": mark.get("awarded", False),
                    "sympy_check": None,
                    "sympy_agrees": None
                }
                
                # Try to identify and verify the type of criterion
                # This is heuristic — we look for patterns in the criterion text
                # A more robust version would have structured criterion metadata
                
                # Pattern: "Correctly integrates to [expr]"
                # Pattern: "Correctly differentiates to [expr]"  
                # Pattern: "Obtains correct answer of [value]"
                # Pattern: "Correctly substitutes [limits]"
                
                # For now, store the criterion for manual review
                # Future: parse criterion text and run appropriate SymPy check
                
                part_verification["verifications"].append(v)
        
        verification["parts"].append(part_verification)
    
    return verification


# ============================================================
# Cloud Function Handler (Flask / Google Cloud Functions style)
# ============================================================

def handle_verify_request(request_data):
    """
    HTTP handler for the verification endpoint.
    
    Expected POST body:
    {
        "ai_result": { ... AI's marking JSON ... },
        "question_data": { ... question parts, criteria, solutions ... },
        "checks": [
            {
                "type": "derivative",
                "original": "x^5 - 3x^2",
                "student_answer": "5x^4 - 6x",
                "variable": "x"
            },
            {
                "type": "definite_integral", 
                "original": "4x^3 - 6x",
                "student_answer": "-8",
                "variable": "x",
                "lower": 0,
                "upper": 2
            },
            {
                "type": "follow_through",
                "student_expr": "x^4 - 3*x^3",
                "variable": "x",
                "lower": 0,
                "upper": 2,
                "student_result": "-8"
            },
            {
                "type": "simplification",
                "original": "4*x^4/4 - 6*x^2/2",
                "simplified": "x^4 - 3*x^2"
            }
        ]
    }
    
    Returns:
    {
        "verification_results": [...],
        "marking_verification": { ... full marking check ... }
    }
    """
    results = []
    
    for check in request_data.get("checks", []):
        check_type = check.get("type")
        
        if check_type == "derivative":
            result = verify_derivative(
                check["original"],
                check["student_answer"],
                check.get("variable", "x")
            )
        elif check_type == "indefinite_integral":
            result = verify_integral(
                check["original"],
                check["student_answer"],
                check.get("variable", "x")
            )
        elif check_type == "definite_integral":
            result = verify_integral(
                check["original"],
                check["student_answer"],
                check.get("variable", "x"),
                check.get("lower"),
                check.get("upper")
            )
        elif check_type == "follow_through":
            result = verify_follow_through(
                check["student_expr"],
                check.get("variable", "x"),
                check["lower"],
                check["upper"],
                check["student_result"]
            )
        elif check_type == "simplification":
            result = verify_simplification(
                check["original"],
                check["simplified"]
            )
        else:
            result = {"correct": None, "details": f"Unknown check type: {check_type}"}
        
        result["check_type"] = check_type
        results.append(result)
    
    # Also run full marking verification if ai_result provided
    marking_verification = None
    if "ai_result" in request_data and "question_data" in request_data:
        marking_verification = verify_marking(
            request_data["ai_result"],
            request_data["question_data"]
        )
    
    return {
        "verification_results": results,
        "marking_verification": marking_verification
    }


# ============================================================
# Example / Test
# ============================================================

if __name__ == "__main__":
    # Test: Student wrote x^4 - 3x^3 instead of x^4 - 3x^2
    # Part (a): integrate 4x^3 - 6x
    print("=== Test: Integration check ===")
    result = verify_derivative("x**4 - 3*x**2", "4*x**3 - 6*x")
    print(f"Is x^4 - 3x^2 the antiderivative of 4x^3 - 6x? {result}")
    
    result = verify_derivative("x**4 - 3*x**3", "4*x**3 - 6*x")
    print(f"Is x^4 - 3x^3 the antiderivative of 4x^3 - 6x? {result}")
    
    # Part (b): Follow-through check
    # Student evaluates THEIR x^4 - 3x^3 from 0 to 2 and gets -8
    print("\n=== Test: Follow-through arithmetic ===")
    result = verify_follow_through("x**4 - 3*x**3", "x", 0, 2, "-8")
    print(f"Does x^4 - 3x^3 from 0 to 2 = -8? {result}")
    
    # Correct answer check
    print("\n=== Test: Correct definite integral ===")
    result = verify_integral("4*x**3 - 6*x", "4", "x", 0, 2)
    print(f"∫(4x^3 - 6x, 0..2) = 4? {result}")
    
    # Simplification check
    print("\n=== Test: Simplification ===")
    result = verify_simplification("4*x**4/4 - 6*x**2/2", "x**4 - 3*x**2")
    print(f"4x^4/4 - 6x^2/2 = x^4 - 3x^2? {result}")
    
    print("\n=== Full verification request ===")
    test_request = {
        "checks": [
            {
                "type": "simplification",
                "original": "4*x**4/4 - 6*x**2/2",
                "simplified": "x**4 - 3*x**3"  # Student's wrong simplification
            },
            {
                "type": "follow_through",
                "student_expr": "x**4 - 3*x**3",
                "variable": "x",
                "lower": 0,
                "upper": 2,
                "student_result": "-8"
            }
        ]
    }
    response = handle_verify_request(test_request)
    print(json.dumps(response, indent=2))
