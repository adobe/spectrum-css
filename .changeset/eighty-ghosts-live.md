---
"@spectrum-css/card": patch
---

The property `block-size: 100%` had been removed accidentally from `.spectrum-Card–gallery` and `.spectrum-Card–quiet`, and put on the `.spectrum-Card` parent card. This patch correctly reapplies `block-size: 100%` to the gallery and quiet variants.
