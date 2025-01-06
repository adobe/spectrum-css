---
"@spectrum-css/colorwheel": major
---

# colorwheel S2 migration

This change migrates the colorwheel component to S2. It adds the `--spectrum-colorwheel-border-color-rgb` and `--spectrum-colorwheel-border-opacity` custom properties. It updates `--spectrum-colorwheel-border-color` to leverage these tokens in an `rgba(...)` function.

This removes the `spectrum-ColorWheel-border` and associated template DOM node as the outside/underlying border are no longer present in the S2 designs.

The following mods have been removed:

```css
--mod-colorwheel-height
--mod-colorwheel-path-borders
--mod-colorwheel-track-width
--mod-colorwheel-width
```

The mod `--mod-colorwheel-track-width` has been added.
