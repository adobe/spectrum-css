---
"@spectrum-css/badge": major
---

This migrates the base Badge component to S2 designs, but does not include the "Notification" or "Highlight" types.

- New semantic color: "notice"
- Updated/expanded non-semantic colors
  - **New colors**:
    - pink
    - turquoise
    - brown
    - cinnamon
    - silver
- New "styles" to be used alongside a color choice, such as `spectrum-Badge--accent spectrum-Badge--style-subtle`
  - subtle (lighter version of bg color)
  - outline (border color, only semantic colors)
- Updated border-radius per size
- Updated border-width
  - updated related padding/margin definitions to account for border-width
