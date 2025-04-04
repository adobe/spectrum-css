---
"@spectrum-css/typography": patch
"@spectrum-css/combobox": patch
"@spectrum-css/stepper": patch
---

Combobox moved the quiet min-inline-size property to index.css from theme to pick up the t-shirt sizing for the calc.

Typography increases specificity for the t-shirt sizing.

Stepper fixes for the disabled + hovered states as well as regressions fixed for the quiet variant.
