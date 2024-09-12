---
"@spectrum-css/dialog": major
"@spectrum-css/modal": patch
"@spectrum-css/underlay": patch
---

Spectrum 2 Standard Dialog Migration

To separate itself from another component named "alert dialog," dialog was renamed to "standard dialog." The Divider component is no longer supported in S2 standard dialogs. Checkbox and text-only options are available in the footer content area. In addition, some new and updated tokens are in place to update the standard dialog corner rounding, font treatments, spacing/padding, and maximum/minimum widths. There were several missing elements of the standard dialog implemented, including optional header and footer content, hero/cover images, and supporting fullscreen layouts.

Mod properties are either "new," have been renamed to reflect the "standard dialog" language, or were removed:

_New Mods_
`--mod-standard-dialog-heading-font-size`
`--mod-standard-dialog-max-width`
`--mod-standard-dialog-max-width-large`
`--mod-standard-dialog-max-width-small`
`--mod-standard-dialog-spacing-description-to-footer`
`--mod-standard-dialog-spacing-edge-to-close-button`
`--mod-standard-dialog-spacing-title-to-header-content`
`--mod-standard-dialog-spacing-footer-to-button-group`

_Renamed Mods_
`--mod-dialog-confirm-border-radius` > `--mod-standard-dialog-border-radius`
`--mod-dialog-confirm-description-text-size` > `--mod-standard-dialog-description-font-size`
`--mod-dialog-confirm-description-text-line-height` > `--mod-standard-dialog-description-line-height`
`--mod-dialog-confirm-description-text-color` > `--mod-standard-dialog-description-text-color`
`--mod-dialog-confirm-description-font-weight` > `--mod-standard-dialog-description-font-weight`
`--mod-dialog-heading-font-weight` > `--mod-standard-dialog-heading-font-weight`
`--mod-dialog-confirm-title-text-line-height` > `--mod-standard-dialog-heading-line-height`
`--mod-dialog-confirm-title-text-color` > `--mod-standard-dialog-heading-text-color`
`--mod-dialog-confirm-hero-height` > `--mod-standard-dialog-min-hero-block-size`
`--mod-dialog-min-inline-size` > `--mod-standard-dialog-min-inline-size`
`--mod-dialog-confirm-padding-grid` > `--mod-standard-dialog-spacing-grid-padding`

_Removed Mods_
`--mod-dialog-confirm-buttongroup-padding-top`
`--mod-dialog-confirm-close-button-padding`
`--mod-dialog-confirm-close-button-size`
`--mod-dialog-confirm-description-margin`
`--mod-dialog-confirm-description-padding`
`--mod-dialog-confirm-divider-block-spacing-end`
`--mod-dialog-confirm-divider-block-spacing-start`
`--mod-dialog-confirm-divider-height`
`--mod-dialog-confirm-footer-padding-top`
`--mod-dialog-confirm-gap-size`
`--mod-dialog-confirm-large-width`
`--mod-dialog-confirm-medium-width`
`--mod-dialog-confirm-small-width`
`--mod-dialog-confirm-title-text-size`
`--mod-dialog-fullscreen-header-text-size`

Modal and underlay updates

The Modal component now uses the updated corner rounding found in the standard dialog design specs. Underlay has an updated comment that addresses the overlay-color/overlay-opacity tokens.
