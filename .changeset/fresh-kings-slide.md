---
"@spectrum-css/tabs": major
---

Tab has now been migrated to Spectrum 2. This migration brings with it several major changes:

- Emphasized variant has been removed
- The divider line has been removed and all variants now resemble what was formerly the quiet variant
- Removal of t-shirt sizes (only one size is available)
- Updated high contrast styles
- The focus indicator's size has changed to accommodate the selection indicator inside of the focus outline

Overflow and vertical variants, aside from what applies from the notes above, remain mostly unchanged and currently are not fully supported in S2. One exception: a bug fix was made to allow density variants to be visible in the overflow variant (previously, the overflow variant was identical for both densities).

A full list of added and removed mods can be found below. However, please note the following mod name changes:

- --mod-tabs-divider-size is now --mod-tabs-selection-indicator-thickness
- --mod-tabs-divider-border-radius is now --mod-tabs-selection-indicator-border-radius

Removed mods

- "--mod-tabs-color-hover-emphasized"
- "--mod-tabs-color-key-focus-emphasized"
- "--mod-tabs-color-selected-emphasized"
- "--mod-tabs-divider-background-color"
- "--mod-tabs-divider-border-radius"
- "--mod-tabs-divider-size"
- "--mod-tabs-item-vertical-spacing"
- "--mod-tabs-list-background-direction"
- "--mod-tabs-list-background-direction-vertical"
- "--mod-tabs-list-background-direction-vertical-right"
- "--mod-tabs-selection-indicator-color-emphasized"
- "--mod-tabs-start-to-item-quiet"

Added mods

- "--mod-tabs-color-selected-hover"
- "--mod-tabs-color-selected-key-focus"
- "--mod-tabs-item-border-radius"
- "--mod-tabs-item-horizontal-spacing-compact"
- "--mod-tabs-label-to-selection-indicator"
- "--mod-tabs-label-to-selection-indicator-compact"
- "--mod-tabs-selection-indicator-border-radius"
- "--mod-tabs-selection-indicator-color-disabled"
- "--mod-tabs-selection-indicator-thickness"
- "--mod-tabs-side-to-icon"
- "--mod-tabs-side-to-icon-compact"
