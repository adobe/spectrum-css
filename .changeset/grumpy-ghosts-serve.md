---
"@spectrum-css/picker": major
---

#### Picker: remove quiet variant

This removes the quiet variant for the picker component based on design feedback. Prior to this change, there was an odd state where the quiet picker scaled with the foundations down state applied.

##### Removed mods

`--mod-picker-background-color-disabled`

**Additionally:** all of the quiet variant mods have been removed.

`--mod-picker-inline-size-quiet`
`--mod-picker-min-inline-size-quiet`
`--mod-picker-spacing-edge-to-disclosure-icon-quiet`
`--mod-picker-spacing-edge-to-text-quiet`
`--mod-picker-spacing-label-to-picker-quiet`
