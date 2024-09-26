---
"@spectrum-css/modal": patch
---

The `-moz-available` prefix as an alias for the block-size: stretch property is not behaving as intended. This removes that prefix and forces FF to fallback to the 100vh property which is aligning as intended.
