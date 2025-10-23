---
"@spectrum-css/dialog": major
"@spectrum-css/modal": patch
"@spectrum-css/underlay": patch
---

#### Spectrum 2 Standard dialog migration

This is the migration for standard dialog. The Divider component is no longer supported in S2 dialogs. In addition, some new and updated tokens are in place to update dialog corner rounding, font treatments, spacing/padding, and maximum/minimum widths. There were several new elements implemented as well, including optional header and footer content, hero/cover images, checkbox and text-only options in the footer content area.

The `.spectrum-Dialog--small`, `.spectrum-Dialog--medium`, and `.spectrum-Dialog--large` sizing classes were deprecated and removed from the CSS in favor of the t-shirt sizes. Additionally, the spelling of the `.spectrum-Dialog--dismissable` class was corrected to `.spectrum-Dialog--dismissible`.

Modal and underlay updates

- Modal component now uses the updated corner rounding.
- Underlay has an updated comment that addresses the overlay-color/overlay-opacity tokens.
