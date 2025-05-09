---
`@spectrum-css/swatchgroup`: major
`@spectrum-css/swatch`: major
---

#### S2 migration for Swatch group

This migrates the `swatch` and `swatchgroup` components to the latest Spectrum 2 designs. Custom properties have been remapped and added per the design specification.

An `Add Swatch` variant has been added with the required color tokens and the specified add UI icon.

The `Add Swatch` and `Mixed Value` variants may not be combined with background colors or images. To implement the `Add Swatch` you need to apply the `is-addSwatch` class to the `spectrum-Swatch` element. `Add swatch` keyboard focus may be applied by adding the `is-keyboardFocused` class to this combination of classes.

The `spectrum-Swatch-icon` is used to set the expected color to icons contained within the swatch.

The border should not be set when the swatch is selected as the border conflicts with the display of the selected state.

##### Removed custom properties

`--spectrum-swatch-border-color`
`--spectrum-swatch-dash-icon-color` (replaced by `--spectrum-swatch-icon-color`)

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
`--mod-swatchgroup-border-color`
`--mod-swatch-border-color-rgb`
`--mod-swatch-border-opacity`
