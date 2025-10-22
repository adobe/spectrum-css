---
"@spectrum-css/infieldbutton": major
---

### Spectrum 2 infield button migration

In-field buttons are used to represent actions within input fields. They're currently used inside number field. This component has updated colors, corner radius, and icons compared to the Spectrum 1 version. The "Error" and "Key-focus" variants have been removed, since this now utilizes those states from the parent component.

The position styles and controls have also been removed now that there's a consistent corner radius.

#### New tokens

These new tokens are the inline variant & stepper (number field) use case. The padding changes here.

`--spectrum-in-field-button-side-edge-to-fill-small`
`--spectrum-in-field-button-side-edge-to-fill-medium`
`--spectrum-in-field-button-side-edge-to-fill-large`
`--spectrum-in-field-button-side-edge-to-fill-extra-large`
`--spectrum-field-edge-to-icon-75`
`--spectrum-field-edge-to-icon-100`
`--spectrum-field-edge-to-icon-200`
`--spectrum-field-edge-to-icon-300`
