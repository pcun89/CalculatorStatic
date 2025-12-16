# Calculator — Add/Subtract/Multiply/Divide/Exponent (Static)

A simple, safe calculator that supports:
- Addition (+)
- Subtraction (−)
- Multiplication (×)
- Division (÷) — division by zero handled
- Exponentiation (^)
- Parentheses and decimal numbers
- Keyboard input and clickable buttons
- Small history of calculations

This is a static site (no backend) and can be hosted on GitHub Pages.

## Files
- `index.html` — UI and structure
- `styles.css` — styling
- `app.js` — safe expression parser/evaluator + UI glue
- `README.md` — instructions

## How it works (brief)
- The app tokenizes your input, converts infix → RPN using the shunting-yard algorithm, then evaluates RPN. This avoids `eval()` and is safer.
- Supported operators: `+ - * / ^` with `^` right-associative and highest precedence.
- Parentheses are supported.

## Data structures used
- **Array** for tokens and RPN output (JavaScript arrays).
- **Stack** (array used as LIFO) for operator stack during shunting-yard and for evaluation stack during RPN evaluation.
- **History**: in-memory array (keeps recent expressions/results).

## Time complexity
- **Tokenization**: O(n) where n = length of expression string.
- **Shunting-yard (infix → RPN)**: O(m) where m = number of tokens.
- **RPN Evaluation**: O(m) — each token processed once.
- Overall evaluation complexity: **O(n + m)** ≈ **O(n)** for typical input.

## Hosting on GitHub Pages
1. Create a GitHub repo and add the four files.
2. Commit & push to `main`.
3. Enable GitHub Pages in repo Settings → Pages → Branch: `main` → `/ (root)`.
4. Visit the published URL to use the calculator.

## Notes & extensions
- You can add persistence to history using `localStorage`.
- To support more functions (sin, cos, log), extend tokenizer, operator precedence, and evaluator.
- This is intentionally small and dependency-free, suitable for embedding in docs or portfolio pages.


