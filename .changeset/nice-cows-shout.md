---
"@spectrum-css/coachmark": major
---

### Spectrum 2 coachmark migration

This migrates the `coachmark` component to S2. Custom properties have been remapped per the design spec.

| Before                                       | After                                             |
| -------------------------------------------- | ------------------------------------------------- |
| `--spectrum-heading-sans-serif-font-weight`  | `--spectrum-title-sans-serif-font-weight`         |
| `--spectrum-coach-mark-title-size`           | `--spectrum-coach-mark-title-font-size`           |
| `--spectrum-heading-line-height`             | `--spectrum-title-line-height`                    |
| `--spectrum-heading-serif-font-style`        | `--spectrum-title-serif-font-style`               |
| `--spectrum-coach-mark-body-size`            | `--spectrum-coach-mark-body-font-size`            |
| `--spectrum-body-sans-serif-font-style`      | `--spectrum-body-serif-font-style`                |
| `--spectrum-coach-mark-pagination-body-size` | `--spectrum-coach-mark-pagination-body-font-size` |

#### New properties

```css
--spectrum-coachmark-media-fixed-height
--spectrum-coachmark-media-min-height
--spectrum-coachmark-menu-display
--spectrum-coachmark-menu-mobile-display
--spectrum-coachmark-min-width
--spectrum-coachmark-padding
--spectrum-coachmark-step-color
--spectrum-coachmark-step-font-size
--spectrum-coachmark-step-font-style
--spectrum-coachmark-step-text-font-weight
--spectrum-coachmark-step-text-line-height
--spectrum-coachmark-step-to-bottom
--spectrum-coachmark-title-color
--spectrum-coachmark-title-font-family
--spectrum-coachmark-title-font-size
--spectrum-coachmark-title-font-style
--spectrum-coachmark-title-text-font-weight
--spectrum-coachmark-title-text-line-height
```

## Additions

Adds `--spectrum-coachmark-media-fixed-height` for fixed `4:3` image variant. This variation has been added to the `coachmark` component story as a boolean control labeled as `Fixed image height`. The class is conditionally added within the `hasImage` block and, as such, will only impact rendering when `hasImage` is also `true`.
