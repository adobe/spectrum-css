---
`@spectrum-css/swatchgroup`: major
`@spectrum-css/swatch`: major
---

#### S2 migration swatchgroup

This migrates the `rating` component to S2. Custom properties have been remapped and added per the design specification.

An `Add Swatch` variant has been added with the required color tokens and the specified add UI icon.

##### Removed custom properties

`--spectrum-swatch-border-color`
`--spectrum-swatch-dash-icon-color`

##### New custom properties

`--spectrum-swatch-border-color-rgb`
`--spectrum-swatch-border-opacity`
`--spectrum-corner-radius-full`
`--spectrum-corner-radius-none`
`--spectrum-swatch-disabled-icon-border-opacity`
`--spectrum-swatch-icon-color`
`--spectrum-swatch-rectangle-width-multiplier`

##### New mods

`--mod-add-button-background`
`--mod-add-button-background-down`
`--mod-add-button-background-hover`
`--mod-add-button-background-keyboard-focus`
`--mod-corner-radius-full`
`--mod-mixed-button-background`
`--mod-swatch-border-color-rgb`
`--mod-swatch-border-opacity`
