---
"@spectrum-css/infieldbutton": major
---

#### Spectrum 2 migration

In-field buttons are used to represent actions within input fields. They're currently used inside number field. This component has updated colors, corner radius, and icons compared to the Spectrum 1 version. The "Error" and "Key-focus" variants have been removed, since this now utilizes those states from the parent component.

The position styles and controls have also been removed now that there's a consistent corner radius.

##### Removed mods

Due to deprecation of the position variants in the infield button, some spacing and border radius mods have been removed.

`--mod-infield-button-inner-edge-to-fill`
`--mod-infield-button-stacked-border-radius-reset`
`--mod-infield-button-stacked-bottom-border-block-end-width`
`--mod-infield-button-stacked-bottom-border-radius-end-end`
`--mod-infield-button-stacked-bottom-border-radius-end-start`
`--mod-infield-button-stacked-fill-padding-inline`
`--mod-infield-button-stacked-fill-padding-inner`

##### New tokens

These new tokens are the inline variant & stepper (number field) use case. The padding changes here.

`--spectrum-in-field-button-side-edge-to-fill-small`
`--spectrum-in-field-button-side-edge-to-fill-medium`
`--spectrum-in-field-button-side-edge-to-fill-large`
`--spectrum-in-field-button-side-edge-to-fill-extra-large`
`--spectrum-field-edge-to-icon-75`
`--spectrum-field-edge-to-icon-100`
`--spectrum-field-edge-to-icon-200`
`--spectrum-field-edge-to-icon-300`
