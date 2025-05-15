---
"@spectrum-css/badge": major
---

This migrates the base Badge component to S2 designs, but does not include the "Notification" or "Highlight" types.

- Updated/expanded colors
    - **New colors**:
      - pink
      - turquoise
      - brown
      - cinnamon
      - silver
- New "styles"
  - subtle (lighter version of bg color)
  - outline (border color, only semantic)
- Updated border-radius per size
- Updated border-width
    - updated related padding/margin definitions to account for border-width

## New mods

New mods added for each new color, as well as for the style-related application of each valid color, ex. `--mod-badge-subtle-background-color-accent` and `--mod-badge-outline-border-color-informative`.

Also added for the default `--mod-badge-border-color` and `--mod-badge-border-width`
