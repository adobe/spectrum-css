---
"@spectrum-css/progresscircle": major
---

## Progress circle S2 migration

This is the S2 migration of the progress circle. The original markup has changed to an svg and circle element to allow CSS styles such as `stroke-linecap`. This was necessary to match the design. The `--small/--medium/--large` sizing classes have been deprecated in favor of t-shirt classes `--sizeS/--sizeM/--sizeL`

### Animation

`@keyframes spectrum-dashoffset-animation`:
This animation was created by React Spectrum and used to keep the same speed and bezier curve.

### Added tokens

### Removed styles & mods

`--spectrum-progress-circle-track-border-color-over-background`
`--spectrum-progress-circle-fill-border-color-over-background`
`--spectrum-progress-circle-track-border-style`
`--spectrum-progress-circle-track-border-style`
`--highcontrast-progress-circle-track-border-style`
`--mod-progress-circle-track-border-style`
`--spectrum-progress-circle-track-border-style`
