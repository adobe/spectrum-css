---
"@spectrum-css/actionbutton": major
---

Action button now uses Spectrum 2 tokens and design specifications. A few notable changes:

- Medium is now the default size and `.spectrum-ActionButton--sizeM` has been removed.
- Includes the Spectrum 2 down state transform.
- The component border was not removed and its color was changed to `transparent` in order to continue support for Windows High Contrast / forced colors, which still shows a border.
- Some selectors to target the icon + text button and the icon-only button have been simplified using `:has`. This removes some overly complex `calc()` functions used for inline spacing, uses the design tokens more directly, and removes the previously documented need for the component's child elements to use a specific source order.
- Background and content colors were updated.
