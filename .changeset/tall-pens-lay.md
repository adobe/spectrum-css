---
"@spectrum-css/actionbutton": patch
---

This updates the colors used in action button for the spectrum two theme, so they are closer
aligned with the spectrum 2 spec, per the request in SWC-597. This removes the border by making
it transparent and updates the background color tokens that are used.

This also includes a forced-colors/high contrast mode fix for the selected + disabled state. This
now shows the disabled colors.
