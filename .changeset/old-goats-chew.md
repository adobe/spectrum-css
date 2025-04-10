---
"@spectrum-css/tokens": patch
---

Adds `--spectrum-corner-radius-1000: 9999px;` to global-vars.css to override value of 0.5. This should ensure our components that use this custom property are properly rounded (i.e. the fully rounded swatch or search field)
