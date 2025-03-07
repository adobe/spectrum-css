---
"@spectrum-css/colorwheel": major
---

# colorwheel S2 migration

This change migrates the colorwheel component to S2. It adds the `--spectrum-colorwheel-border-color-rgb` and `--spectrum-colorwheel-border-opacity` custom properties. It updates `--spectrum-colorwheel-border-color` to leverage these tokens in an `rgba(...)` function.

This removes the `spectrum-ColorWheel-border` and associated template DOM node as the outside/underlying border are no longer present in the S2 designs. `::before` and `::after` pseudo elements are now used to draw the exterior and interior borders that overlay the exterior and interior edges of the color wheel.

Support is provided for the `240px` and `192px` sizes outlined in the design requirements.

The `forced-colors` media query has been moved to the bottom of the file consistent with our other component implementations.

Stories, tests and documentation have been updated to be consistent with these changes.

The following mods have been removed:

```css
--mod-colorwheel-height
--mod-colorwheel-width
--mod-colorwheel-min-width
--mod-colorwheel-path-borders
--mod-colorwheel-colorarea-margin
--mod-colorwheel-border-width
```
