---
"@spectrum-css/dropzone": major
---

### Spectrum 2 migration

Since dropzone shares a lot of illustrated message's new content tokens (typography and spacing), tons of unused`--mods` were removed.

The component reflects the [new design](https://www.figma.com/design/eoZHKJH9a3LJkHYCGt60Vb/S2-token-specs?node-id=10141-2822&m=dev) of the borders that includes dash length and dash gap.

#### SVG Border

To support the intention of the design, an SVG element is used. There are tokens to adjust the length of dashed lines and the gap between them. It's understood it may be too much to consume an additional element so there's a fallback where the SVG element is not necessary - dropzone will use the standard `border` CSS property.
