---
"@spectrum-css/menu": major
---

### Spectrum 2 migration

Menu now uses Spectrum 2 tokens and specifications.

Removes custom menu item background color tokens: `@adobe/spectrum-tokens` has been updated to include many tokens relating to the menu component, including some that replace custom tokens that had previously been added. As such, these custom menu item color tokens that are now available from `@adobe/spectrum-tokens` have been removed.

In addition to other small token and minor style changes, there were several new features that were added to this version of menu, including:

- A thumbnail can now be used in place of an icon
- A section description can now be included below the menu section heading
- The actions area previously held action switches for multi-select, and in this version, an external link action icon can be included in that area
