---
"@spectrum-css/menu": major
"@spectrum-css/tokens": patch
---

Removes custom menu item background color tokens: Since `@adobe/spectrum-tokens` has been updated to include many tokens relating to the menu component, including some that replace custom tokens that had previously been added. As such, these custom menu item color tokens that are now available from `@adobe/spectrum-tokens` have been removed.

Spectrum 2 Menu migration:

In addition to small token and minor style changes, there were several new features that were added to this version of menu, including:

- A thumbnail can now be added to the menu item label
- A section description can now be added below the menu section heading
- The actions area previously held value text, action switches for multi-select, and the drill-in for a submenu--in this version, an external link action can now be added
- Menu items now receive corner rounding, which is visible on hover/focus/active states
- The focus indicator has been updated--instead of a blue line on the left (start side) of the menu item, the whole element now receives an outline
- Menu items now have the S2 down state transform

The following mods have been added:

- `--mod-menu-item-corner-rounding`
- `--mod-menu-item-description-font-weight`
- `--mod-menu-item-label-font-weight`
- `--mod-menu-item-thumbnail-height`
- `--mod-menu-item-thumbnail-opacity-disabled`
- `--mod-menu-item-thumbnail-to-label`
- `--mod-menu-item-thumbnail-width`
- `--mod-menu-item-top-to-drillin`
- `--mod-menu-item-top-to-icon`
- `--mod-menu-item-top-to-thumbnail`
- `--mod-menu-linkout-icon-height`
- `--mod-menu-linkout-icon-width`
- `--mod-menu-section-description-color`
- `--mod-menu-section-description-font-size`
- `--mod-menu-section-description-font-weight`
- `--mod-menu-section-description-line-height`
- `--mod-menu-section-description-line-height-cjk`
- `--mod-menu-section-header-to-description`
