# Campus Venture Lab
A React portfolio demonstration by Vahid Ghorbani.

## Review
Open dist/Campus_Venture_Lab.html in a desktop browser. No installation, server or internet connection is needed. Allocate the budget, enter a short rationale, and complete Concept, Prototype and Campus pilot. Visit Instructor studio to adjust funding, revenue per user and formative score weights, inspect formulas, and download the embedded Excel model.

## Academic purpose
Students justify investment priorities, evaluate demand and reliability trade-offs, and interpret financial viability. Three project gates and a decision journal support a classroom discussion. The smart-parking context connects to Vahid's undergraduate project and Systems Engineering teaching. The original model is illustrative; it is not RMIT's supplied workbook or an official course activity. Scores are formative feedback, not academic grades.

## Calculation model
Amounts are AUD thousands. Funding arrives each round; unused funding carries in cash but cannot increase the next round's allocation cap. Demand and reliability accumulate, capped at 100. Users are rounded to whole people. Concept has no revenue; stage trial factors are 0, 0.4, 1. Each stage represents a distinct trial cohort; revenue adds across stages. Revenue per trial user is $120 by default. Cash = cumulative funding + cumulative revenue - cumulative investments. Cost recovery is cumulative revenue/investment capped at 100, with zero when no investment is made. The weighted score combines reliability, adoption and cost recovery. These coefficients are teaching assumptions, not empirical forecasts. A new attempt clears state; no student records are stored or transmitted. Exported JSON contains decisions, rationales, rules and results.

## Build and verification
npm ci
npm run build
npm test

React 19, JavaScript modules, esbuild. Independent engine functions, CSS responsive layouts and JSDOM interaction tests. reference/Campus_Venture_Model.xlsx contains editable inputs and Excel formulas. workbook-results.json contains 27 recalculated reference outputs for all three default rounds, compared against the web engine. This baseline is not exhaustive validation of all possible rules. Seven tests cover formula parity, funding reconciliation, invalid allocations, caps, price/weight changes and student/instructor interactions. Real-browser visual and native Excel checks were not available in this environment; test these before presenting professionally.

