---
"@spectrum-css/checkbox": patch
---

This removes some unnecessary read-only styles. Read-only just needs to override disabled styles. Otherwise it uses the normal styles (for both default and emphasized).
