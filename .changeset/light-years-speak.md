---
"@spectrum-css/tooltip": major
---

## Spectrum 2 migration

This migration includes updated colors, rounding, a bigger tip, and the removal of variants (only neutral is available in Spectrum 2). As a result of the deprecation of variants, icons have also been removed.

The redesign of the tip, specifically the rounding, required a reworking of how we use clip-path and transform.

Some custom property mods have been removed:

- `--mod-tooltip-background-color-informative`
- `--mod-tooltip-background-color-negative`
- `--mod-tooltip-background-color-positive`
- `--mod-tooltip-icon-spacing-block-start`
- `--mod-tooltip-icon-spacing-inline-end`
- `--mod-tooltip-icon-spacing-inline-start`
- `--mod-tooltip-icon-width`

And one mod has been added:

- `--mod-tooltip-tip-corner-radius`
