---
"@spectrum-css/menu": major
---

### Spectrum 2 migration

Menu now uses Spectrum 2 tokens and specifications.

Removes custom menu item background color tokens: `@adobe/spectrum-tokens` has been updated to include many tokens relating to the menu component, including some that replace custom tokens that had previously been added. As such, these custom menu item color tokens that are now available from `@adobe/spectrum-tokens` have been removed.

In addition to other small token and minor style changes, there were several new features that were added to this version of menu, including:

- A thumbnail can now be added instead of an icon
- A section description can now be included below the menu section heading
- The actions area previously held action switches for multi-select, and in this version, an external link action icon can be included in that area

### New mods

- `--mod-menu-item-linkout-icon-height`
- `--mod-menu-item-linkout-icon-width`
- `--mod-menu-item-thumbnail-height`
- `--mod-menu-item-thumbnail-opacity-disabled`
- `--mod-menu-item-thumbnail-to-label`
- `--mod-menu-item-thumbnail-width`
- `--mod-menu-item-top-to-thumbnail`
- `--mod-menu-section-description-color`
- `--mod-menu-section-description-font-size`
- `--mod-menu-section-description-font-weight`
- `--mod-menu-section-description-line-height`
- `--mod-menu-section-description-line-height-cjk`
- `--mod-menu-section-header-to-description`
