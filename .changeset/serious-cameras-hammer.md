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

## New mods

New mods added for each new color, as well as for the style-related application of each valid color, ex. `--mod-badge-subtle-background-color-accent` and `--mod-badge-outline-border-color-informative`. See the full [diff of updates](https://github.com/adobe/spectrum-css/pull/3740/files#diff-d1bfd5593c10aaa98222e6c01ca001131fcde194e824b096673ab02a9ef3874f).

Also added for the default `--mod-badge-border-color` and `--mod-badge-border-width`
