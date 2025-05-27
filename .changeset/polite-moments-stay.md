---
"@spectrum-css/modal": patch
---

In Spectrum 2, elements that would typically be children of a modal (like dialogs, alert dialogs, and tray) have background-color token specs defined. Because modal _also_ had a defined background color, there was some antialiasing bleed-through happening on the corners, since both the modal and its child now had background colors on top of each other. `--spectrum-modal-background-color` is now redefined as `transparent` to avoid these conflicts in S2. `--mod-modal-background-color` is still available to consumers.
