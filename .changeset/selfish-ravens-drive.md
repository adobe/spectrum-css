---
"@spectrum-css/stepper": minor
---

Previously, stepper has some inconsistencies in its hover interactions, particularly when the stepper was in a different state, like focus or keyboardFocus. The changes here should ensure any combination of hovering over a nested stepper sub-components triggers the correct border color changes to all subcomponents. As an example, hovering over the stepper buttons should trigger a border color change in the stepper buttons, AS WELL AS trigger the border color on the stepper textfield.

New mods:
`--mod-stepper-border-color-disabled`

Removed mods:
`--mod-stepper-buttons-border-color`
`--mod-stepper-buttons-border-color-focus`
`--mod-stepper-buttons-border-color-focus-hover`
`--mod-stepper-buttons-border-color-hover`
`--mod-stepper-buttons-border-color-keyboard-focus`
