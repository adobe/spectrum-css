---
"@spectrum-css/progresscircle": major
---

## Progress circle S2 migration

This is the S2 migration of the progress circle. It has changed to an svg element to allow CSS styles such as `stroke-linecap`. This was necessary to match the design.

### Animation

`@keyframes spectrum-dashoffset-animation`:
This animation was created by React Spectrum and used to keep the same speed and bezier curve.

### Added tokens

`--spectrum-in-field-progress-circle-edge-to-fill`
`--spectrum-in-field-progress-circle-size-75`
`--spectrum-in-field-progress-circle-size-100`
`--spectrum-in-field-progress-circle-size-200`
`--spectrum-in-field-progress-circle-size-300`

### Removed styles & mods

`--spectrum-progress-circle-track-border-color-over-background`
`--spectrum-progress-circle-fill-border-color-over-background`
`--spectrum-progress-circle-track-border-style`
`--spectrum-progress-circle-track-border-style`
`--highcontrast-progress-circle-track-border-style`
`--mod-progress-circle-track-border-style`
`--spectrum-progress-circle-track-border-style`
