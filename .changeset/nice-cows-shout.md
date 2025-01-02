---
"@spectrum-css/coachmark": major
---

# S2 coachmark migration

This migrates the `coachmark` component to S2. Custom properties have been remapped per the design spec.

| Before                                     | After                                           |
| ------------------------------------------ | ----------------------------------------------- |
| --spectrum-heading-sans-serif-font-weight  | --spectrum-title-sans-serif-font-weight         |
| --spectrum-coach-mark-title-size           | --spectrum-coach-mark-title-font-size           |
| --spectrum-heading-line-height             | --spectrum-title-line-height                    |
| --spectrum-coach-mark-body-size            | --spectrum-coach-mark-body-font-size            |
| --spectrum-body-sans-serif-font-style      | --spectrum-body-serif-font-style                |
| --spectrum-coach-mark-pagination-body-size | --spectrum-coach-mark-pagination-body-font-size |

## Additions

Adds `--spectrum-coachmark-media-fixed-height` for fixed `4:3` image variant and an accompanying `--mod-coachmark-media-fixed-height` mod. This variation has been added to the `coachmark` component story as a boolean control labeled as `Image fixed height`. The class is conditionally added within the `hasImage` block and, as such, will only impact rendering when `hasImage` is also `true`.
