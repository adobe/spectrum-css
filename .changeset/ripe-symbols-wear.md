---
"@spectrum-css/popover": patch
---

Defines the missing `--spectrum-popover-border-width` custom property. The variable was already being used in our style definitions, but its value was lost at some point so it was undefined in the browser. This work should correct that.
