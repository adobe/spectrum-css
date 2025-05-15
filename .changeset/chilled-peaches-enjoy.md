---
"@spectrum-css/actionbutton": major
---

Action button now uses Spectrum 2 tokens and design specifications. A few notable changes:

- Medium is now the default size and `.spectrum-ActionButton--sizeM` has been removed.
- Includes the Spectrum 2 down state transform.
- The component border was not removed and its color was changed to `transparent` in order to continue support for Windows High Contrast / forced colors, which still shows a border. The mod custom properties for border were removed to avoid interference with Windows High Contrast / forced colors accessibility.
- Some selectors to target the icon + text button and the icon-only button have been simplified using `:has`. This removes some overly complex `calc()` functions used for inline spacing, uses the design tokens more directly, and removes the previously documented need for the component's child elements to use a specific source order.
- Background and content colors were updated.
- Mod custom properties have been adjusted:
  - Renamed:
    - `--mod-line-height-100` renamed to `--mod-actionbutton-line-height`.
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
    - `--mod-actionbutton-font-style`
