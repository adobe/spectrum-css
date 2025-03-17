---
"@spectrum-css/divider": major
---

# S2 divider migration

This migrates the `divider` component to S2. Custom properties have been remapped and updated per the design spec.

### New properties

```css
--spectrum-divider-horizontal-minimum-width
--spectrum-divider-vertical-minimum-height
```

### New mods

```css
--mod-divider-inline-minimum-size
--mod-divider-block-minimum-size
```

### Removed mods

```css
--mod-divider-background-color-large-static-black
--mod-divider-background-color-large-static-white
--mod-divider-background-color-medium-static-black
--mod-divider-background-color-medium-static-white
--mod-divider-background-color-small-static-black
--mod-divider-background-color-small-static-white
```

### Additions

This adds new minimum width and height tokens for the divider and the `minDimensionValues` arg has been removed in favor of these tokens and the rules with which they're applied.

The default size for the Storybook control has been changed to `medium` (the new default size for the component). All sizes are now displayed for the static color variants in the docs.
