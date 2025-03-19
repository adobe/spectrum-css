---
"@spectrum-css/checkbox": patch
---

Adds a `::before` pseudo element to properly target the `.spectrum-Checkbox-input:checked + .spectrum-Checkbox-box` element. The selector update, specifically in the invalid+checked+hover state should now get the proper error background color, as opposed to the default background color.
