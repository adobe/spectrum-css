---
"@spectrum-css/tokens": patch
"@spectrum-css/well": patch
---

`--spectrum-well-border-color` was mapped to the `-rgb` postfixed value which resolves to a raw rgb number but not a valid color.
