---
"@spectrum-css/dropzone": major
---

## Dropzone S2 Migration

Since dropzone shares a lot of illustrated message's new content tokens (typography and spacing), tons of unused`--mods` were removed.

The component reflects the [new design](https://www.figma.com/design/eoZHKJH9a3LJkHYCGt60Vb/S2-token-specs?node-id=10141-2822&m=dev) of the borders that includes dash length and dash gap.

### SVG Border

To support the intention of the design, an SVG element is used. There are custom `--mod` tokens to adjust the length of dashed lines and the gap between them. It's understood it may be too much to consume an additional element so there's a fallback where the SVG element is not necessary - dropzone will use the standard `border` CSS property.

### New mods

`--mod-drop-zone-content-height`
`--mod-drop-zone-edge-to-text`
`--mod-drop-zone-title-line-height`
`--mod-drop-zone-border-dash-length`
`--mod-drop-zone-border-dash-gap`

### Removed mods

`--mod-drop-zone-body-color`
`--mod-drop-zone-body-font-family`
`--mod-drop-zone-body-font-style`
`--mod-drop-zone-body-font-weight`
`--mod-drop-zone-body-line-height`
`--mod-drop-zone-content-color`
`--mod-drop-zone-content-edge-to-text`
`--mod-drop-zone-content-font-size`
`--mod-drop-zone-heading-color`
`--mod-drop-zone-heading-font-family`
`--mod-drop-zone-heading-font-size`
`--mod-drop-zone-heading-font-style`
`--mod-drop-zone-heading-font-weight`
`--mod-drop-zone-heading-line-height`
`--mod-drop-zone-heading-to-body` `--mod-drop-zone-illustration-to-heading` `--mod-drop-zone-illustration-to-title`
