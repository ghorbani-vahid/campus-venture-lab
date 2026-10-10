# Campus Venture Lab

### An interactive business and project investment simulation

Campus Venture Lab turns a spreadsheet-based simulation into a practical web learning activity. Students work through a smart-parking business case, allocate limited funding and explore how their decisions affect product reliability, adoption and financial performance.

Built with **React and JavaScript**, the application runs entirely in the browser. The downloadable version works offline without installation.

---

## The learning activity

A team has a smart-parking concept and must decide how to develop it into a viable campus service. Students complete three stages:

| Stage | Decision focus |
| :--- | :--- |
| **Concept** | Establish demand and invest in the foundations of the service. |
| **Prototype** | Prepare a reliable product and evaluate a limited trial. |
| **Campus pilot** | Balance adoption, reliability and financial viability as the trial expands. |

Each stage provides a funding allocation. Students distribute it across four areas:

- **Customer discovery:** understand commuters and validate demand.
- **Product development:** build the parking prototype.
- **Verification and testing:** improve reliability before deployment.
- **Launch and promotion:** recruit users and communicate the service's value.

The dashboard updates as allocations change. Before submitting a decision, students record a short rationale explaining their priorities and the risks they are addressing.

## What the application provides

| Student simulation | Instructor studio |
| :--- | :--- |
| Interactive budget allocation | Adjustable funding and revenue assumptions |
| Live forecasts of users, revenue and cash | Configurable formative score weights |
| Reliability, adoption and cost-recovery indicators | Transparent calculation rules |
| Three-stage progression and decision journal | Downloadable Excel reference model |
| Reopen the most recent decision | Excel-to-web reference comparisons |
| Export a final decision debrief | Settings for starting a revised activity |

The activity supports discussion of investment prioritisation, risk, project readiness and business viability. Simulation scores provide **formative feedback**, rather than an academic grade. Educators can use students' written rationales to guide discussion and assessment.

## Try the simulation

**Online:** open the project's GitHub Pages.

**Offline:** open `dist/Campus_Venture_Lab.html` in a modern web browser.

1. Choose a strategy or adjust the four investment sliders.
2. Review the forecast and keep the total within the available funding.
3. Explain the reasoning behind the investment mix.
4. Submit the decision and continue to the next stage.
5. Review the final results and download the decision debrief.

Select **Instructor studio** to inspect the model or change activity settings. Applying settings starts a new attempt and clears the current journal.

## How the model works

The default activity provides **AUD 40,000 per stage**. Development and testing increase reliability; discovery and promotion increase adoption potential. Both indicators accumulate across stages and are capped at 100.

Trial participation depends on adoption, reliability and the stage's trial factor. The concept stage produces no revenue. Prototype and pilot stages represent separate trial cohorts and generate revenue using the configured revenue per user.

| Calculation | Rule |
| :--- | :--- |
| Reliability | Previous reliability + development × 1.2 + testing × 1.6, capped at 100 |
| Adoption potential | Previous adoption + discovery × 1.5 + promotion × 1.1, capped at 100 |
| Trial users | 1,000 × adoption proportion × reliability proportion × stage factor, rounded to a whole number |
| Round revenue | Trial users × revenue per user |
| Closing cash | Cumulative funding + cumulative revenue − cumulative investment |
| Cost recovery | Cumulative revenue ÷ cumulative investment, converted to a score capped at 100 |

Investment amounts used in the calculation engine and Excel model are expressed in **AUD thousands**. Trial factors are **0**, **0.4** and **1** for the three stages. Revenue per user defaults to **AUD 120**. The formative score combines reliability, adoption and cost recovery with default weights of **30%, 30% and 40%**.

Unused funding carries into cash, while each subsequent stage retains its own allocation limit. Cost recovery is zero when there has been no investment. The coefficients are illustrative teaching assumptions, rather than empirical forecasts.

## Excel reference and verification

`reference/Campus_Venture_Model.xlsx` contains editable inputs and the corresponding Excel formulas. The instructor view also provides a copy of this workbook.

The automated test suite checks:

- **27 calculated outputs** against recalculated spreadsheet reference values across the three default stages.
- Cash reconciliation, invalid allocations, zero spending and capped outcomes.
- Changes to revenue assumptions and score weights.
- Student progression, required rationales and reopening a decision.
- Instructor settings and the displayed reference comparisons.

Seven automated tests cover the calculation engine and interface interactions. The reference comparisons validate the default balanced strategy; they do not exhaust every possible allocation or setting. Real-browser visual checks and native Microsoft Excel verification remain to be completed.

## Development

**Requirements:** Node.js 22 or later and npm.

```bash
npm ci
npm run build
npm test
```

The build generates a self-contained HTML file with React, styles and the Excel workbook bundled together. Tests use Node's test runner and JSDOM.

| Location | Contents |
| :--- | :--- |
| `src/App.jsx` | Student and instructor interfaces |
| `src/engine.js` | Simulation calculations and stage definitions |
| `src/style.css` | Responsive interface styles |
| `reference/` | Excel model and calculated reference values |
| `tests/` | Calculation and interface tests |
| `dist/` | Standalone offline application |
| `docs/index.html` | GitHub Pages entry point |

After rebuilding, copy `dist/Campus_Venture_Lab.html` to `docs/index.html` to update the published version.

## Publish with GitHub Pages

Upload the project contents to a repository. In **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/docs**, then save. GitHub will display the published site address when deployment completes.

## Data handling

The application does not transmit or persist student records. Decisions remain in browser memory for the current session. The optional JSON export includes the activity settings, allocations, written rationales and calculated results.

## Author

**Vahid Ghorbani**  
[vahid.ghorbani@rmit.edu.au](mailto:vahid.ghorbani@rmit.edu.au)

Campus Venture Lab is an independent educational demonstration, not an official RMIT course activity.
