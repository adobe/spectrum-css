---
"@spectrum-css/infieldbutton": minor
"@spectrum-css/logicbutton": minor
"@spectrum-css/progressbar": minor
"@spectrum-css/colorwheel": minor
"@spectrum-css/assetcard": minor
"@spectrum-css/colorarea": minor
"@spectrum-css/calendar": minor
"@spectrum-css/checkbox": minor
"@spectrum-css/underlay": minor
"@spectrum-css/stepper": minor
"@spectrum-css/button": minor
"@spectrum-css/modal": minor
"@spectrum-css/radio": minor
"@spectrum-css/table": minor
"@spectrum-css/card": minor
"@spectrum-css/site": minor
"@spectrum-css/tokens": minor
---

This resolves our remaining stylelint issues around undefined tokens, rule order, unused values and color syntax.

- Updates invalid color syntax from `rgba(N, N, N, N)` to `rgba(N N N / N)`.
- In cases of duplicate properties, preserves the property that would be applied given current code structure.
- Updates misnamed tokens to use valid tokens (`table/index.css`).
