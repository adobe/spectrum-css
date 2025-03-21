---
"@spectrum-css/actionbutton": major
---

feat(actionbutton): S2 migration

Action button now uses Spectrum 2 tokens and design specifications. A few notable changes:

- Medium is now the default size and `.spectrum-Switch--sizeM` has been removed.
- Includes the Spectrum 2 down state transform.
- The component border was not removed and its color was changed to `transparent` in order to continue support for Windows High Contrast / forced colors, which still shows a border. The mod custom properties for border were removed to avoid interference with Windows High Contrast / forced colors accessibility.
- Background and content colors were updated.
- Mod custom properties have been adjusted:
  - Renamed:
    - `--mod-line-height-100` renamed to `--mod-button-line-height`.
    - `--mod-sans-font-family-stack` renamed to `--mod-button-font-family`.
    - `--mod-animation-duration-100` renamed to `--mod-button-animation-duration`.
  - Removed:
    - `--mod-actionbutton-border-color-default`
    - `--mod-actionbutton-border-color-disabled`
    - `--mod-actionbutton-border-color-down`
    - `--mod-actionbutton-border-color-focus`
    - `--mod-actionbutton-border-color-hover`
    - `--mod-actionbutton-border-width`
    - `--mod-actionbutton-static-content-color`
  - New:
    - `--mod-actionbutton-font-weight`
