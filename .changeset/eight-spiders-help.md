---
"@spectrum-css/calendar": patch
"@spectrum-css/combobox": patch
"@spectrum-css/datepicker": patch
"@spectrum-css/menu": patch
"@spectrum-css/picker": patch
"@spectrum-css/slider": patch
"@spectrum-css/stepper": patch
---

Build change to remove the `postcss-preset-env` polyfill for the dist output of `:not` selectors containing multiple selectors, to avoid an unintended increase in specificity, which caused some visual regressions.
