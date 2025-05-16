---
"@spectrum-css/alertdialog": major
---

#### S2 migration for alert dialog

This migrates the `alert dialog` component to the latest Spectrum 2 designs. Custom properties have been remapped and added per the design specification.

The icon in the dialog header has been moved from the right side to the left.

The dialog divider has been removed.

Primary button style has been updated to filled.

Multiple variants are now supported:

- Confirmation
- Information
- Destructive
- Warning (with `AlertDiamond` icon)
- Error (with `AlertTriangle` icon)

Dialog buttons may be displayed either horizontally or vertically.

##### Removed custom properties

`--spectrum-alert-dialog-body-font-size`
`--spectrum-alert-dialog-description-to-buttons`
`--spectrum-alert-dialog-divider-to-description`
`--spectrum-alert-dialog-padding`
`--spectrum-alert-dialog-title-size`
`--spectrum-alert-dialog-title-to-divider`
`--spectrum-alert-dialog-title-to-icon`

##### New custom properties

`--spectrum-alert-dialog-background-color`
`--spectrum-alert-dialog-corner-radius`
`--spectrum-alert-dialog-description-to-button-group`
`--spectrum-alert-dialog-edge-to-content`
`--spectrum-alert-dialog-minimum-title-to-icon`
`--spectrum-alert-dialog-title-to-description`

##### Removed mods

`--mod-alert-dialog-body-font-size`
`--mod-alert-dialog-description-to-buttons`
`--mod-alert-dialog-divider-to-description`
`--mod-alert-dialog-padding`
`--mod-alert-dialog-title-to-divider`
`--mod-alert-dialog-title-to-icon`

##### New mods

`--mod-alert-dialog-background-color`
`--mod-alert-dialog-corner-radius`
`--mod-alert-dialog-description-size`
`--mod-alert-dialog-description-to-button-group`
`--mod-alert-dialog-edge-to-content`
`--mod-alert-dialog-minimum-title-to-icon`
`--mod-alert-dialog-title-to-description`
