---
"@spectrum-css/progressbar": patch
---

Reverts the background-color property to background to support linear-gradients. Gradient support stories were added to the meter and progress bar components within their Chromatic testing previews to ensure we continue to support linear-gradients as necessary.
