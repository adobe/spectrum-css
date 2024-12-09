---
"@spectrum-css/dialog": major
"@spectrum-css/modal": patch
"@spectrum-css/underlay": patch
---

Spectrum 2 Standard Dialog Migration

This is the migration for standard dialog. The Divider component is no longer supported in S2 dialogs. In addition, some new and updated tokens are in place to update dialog corner rounding, font treatments, spacing/padding, and maximum/minimum widths. There were several new elements implemented as well, including optional header and footer content, hero/cover images, checkbox and text-only options in the footer content area.

The `.spectrum-Dialog--small`, `.spectrum-Dialog--medium`, and `.spectrum-Dialog--large` sizing classes were deprecated and removed from the CSS in favor of the t-shirt sizes. Additionally, the spelling of the `.spectrum-Dialog--dismissable` class was corrected to `.spectrum-Dialog--dismissible`.

Mod properties are either "new," have been renamed to reflect the respective dialog language, or were removed:

_New Mods_
`--mod-standard-dialog-spacing-title-to-header-content`
`--mod-standard-dialog-spacing-title-to-description`
`--mod-standard-dialog-header-content-font-size`

_Renamed Mods_
`--mod-dialog-confirm-small-width` > `--mod-standard-dialog-max-width-small`
`--mod-dialog-confirm-medium-width` > `--mod-standard-dialog-max-width`
`--mod-dialog-confirm-large-width` > `--mod-standard-dialog-max-width-large`
`--mod-dialog-confirm-border-radius` > `--mod-standard-dialog-border-radius`
`--mod-dialog-confirm-description-text-size` > `--mod-standard-dialog-description-font-size`
`--mod-dialog-confirm-description-text-line-height` > `--mod-standard-dialog-description-line-height`
`--mod-dialog-confirm-description-text-color` > `--mod-standard-dialog-description-text-color`
`--mod-dialog-confirm-description-font-weight` > `--mod-standard-dialog-description-font-weight`
`--mod-dialog-heading-font-weight` > `--mod-standard-dialog-heading-font-weight`
`--mod-dialog-confirm-title-text-line-height` > `--mod-standard-dialog-heading-line-height`
`--mod-dialog-confirm-title-text-color` > `--mod-standard-dialog-heading-text-color`
`--mod-dialog-confirm-title-text-size` > `--mod-standard-dialog-heading-font-size`
`--mod-dialog-confirm-hero-height` > `--mod-standard-dialog-hero-block-size`
`--mod-dialog-min-inline-size` > `--mod-standard-dialog-min-inline-size`
`--mod-dialog-confirm-padding-grid` > `--mod-standard-dialog-spacing-grid-padding`
`--mod-dialog-confirm-footer-padding-top` > `--mod-standard-dialog-spacing-description-to-footer`
`--mod-dialog-confirm-close-button-padding` > `--mod-standard-dialog-spacing-edge-to-close-button`
`--mod-dialog-confirm-gap-size` > `--mod-standard-dialog-spacing-footer-to-button-group`

_Removed Mods_
`--mod-dialog-confirm-buttongroup-padding-top`
`--mod-dialog-confirm-close-button-size`
`--mod-dialog-confirm-description-margin`
`--mod-dialog-confirm-description-padding`
`--mod-dialog-confirm-divider-block-spacing-end`
`--mod-dialog-confirm-divider-block-spacing-start`
`--mod-dialog-confirm-divider-height`

Modal and underlay updates

- Modal component now uses the updated corner rounding.
- Underlay has an updated comment that addresses the overlay-color/overlay-opacity tokens.
