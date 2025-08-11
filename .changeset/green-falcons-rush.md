---
"@spectrum-css/infieldbutton": patch
---

Remove unused key-focus and border mods. Note that border and key focus styles were previously removed in the migration to Spectrum 2, and the mod removals here do not have any visual impact to the infield button.

Also updates transition to use `background-color` instead of `border-color`.

Also fixes a flash bug in WHCM: when hovered, the infield button was flashing/blinking before changing to the appropriate hover color.
