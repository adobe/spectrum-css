---
"@spectrum-css/progressbar": patch
---

Reverts the `background-color` property to `background` to support the use of CSS gradients. Gradient support stories were added to the meter and progress bar components within their Chromatic testing previews to ensure that we continue to support gradients by covering them in our visual regression tests.
