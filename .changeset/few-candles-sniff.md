---
"@spectrum-css/pickerbutton": major
---

The picker button component has been migrated to Spectrum 2. The picker button uses the same design spec as infield button and in some cases may be able to be used interchangeably with it. Its updated features include:

- Corner rounding updates - corner rounding differs by the component's t-shirt size, but otherwise is a standard size. This means that the rounded variant of picker button with increased corner rounding and the position variants of picker button that helped the picker button fit snugly within either side of an input have been removed.
- Color and spacing updates to match S2 spec
- Added WHCM support
- Updated S2 down state
- Removed focus styles: there are no spec'd focus styles in S2, therefore these styles have been removed.
- The label variant of picker button has been removed.
- Removal of `.spectrum-PickerButton--uiicononly`, `.spectrum-PickerButton--icononly`, and `.spectrum-PickerButton--textuiicon` classes:
  - The picker button featuring a UI icon is the default variant, so no additional `.spectrum-PickerButton--uiicononly` class needs to be applied.
  - The `.spectrum-PickerButton--icononly` class has been renamed to `.spectrum-PickerButton--workflowicon` to clarify when it should be used. Applying `.spectrum-PickerButton--workflowicon` when using a workflow icon instead is recommended, but probably not required.
  - Because the picker button no longer supports a label, there is no need for a `--textuiicon` variant which is why that class has been removed.
- The `.is-open` state can continue to be used as before.

Added mod custom properties:

- `"--mod-picker-button-background-color-quiet-disabled"`

Removed mod custom properties:

- `"--mod-picker-button-background-color-key-focus"`
- `"--mod-picker-button-background-color-key-focus-quiet"`
- `"--mod-picker-button-border-color"`
- `"--mod-picker-button-border-color-disabled"`
- `"--mod-picker-button-border-color-quiet"`
- `"--mod-picker-button-border-radius-rounded"`
- `"--mod-picker-button-border-radius-rounded-sided"`
- `"--mod-picker-button-border-radius-sided"`
- `"--mod-picker-button-border-width"`
- `"--mod-picker-button-font-color"`
- `"--mod-picker-button-font-color-disabled"`
- `"--mod-picker-button-font-color-down"`
- `"--mod-picker-button-font-color-down-disabled"`
- `"--mod-picker-button-font-color-hover"`
- `"--mod-picker-button-font-color-hover-disabled"`
- `"--mod-picker-button-font-color-key-focus"`
- `"--mod-picker-button-font-family"`
- `"--mod-picker-button-font-size"`
- `"--mod-picker-button-font-style"`
- `"--mod-picker-button-font-weight"`
- `"--mod-picker-button-gap"`
- `"--mod-picker-button-icon-color-key-focus"`
- `"--mod-picker-button-label-padding"`
