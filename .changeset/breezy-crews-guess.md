---
"@spectrum-css/combobox": patch
---

Fast follow fixes for combobox

- corrects container query for the `--system` reference to "legacy" in the combobox/themes/spectrum.css file
- corrects the border colors for several combobox states including focus, keyboardFocus, focus+hover, disabled, read-only for all themes
- adds `--spectrum-combobox-readonly-input-border-color: var(--spectrum-gray-400);` to express.css theme so that the default border and read-only border colors are the same
