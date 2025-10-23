---
"@spectrum-css/popover": patch
---

Popover positioning "top-left" and "top-right" were using inline properties which caused the spacings to swap in RTL mode. This was unintended as the "right" and "left" naming conventions are meant to retain their location in LTR or RTL mode.
