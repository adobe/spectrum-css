---
"@spectrum-css/button": patch
"@spectrum-css/switch": patch
---

### S2 button fixes

This work addresses some regressions noticed in the migrated S2 button. Mainly, the borders were gray where they were not supposed to be. Most of the changes are to ensure that the correct S2 tokens are being used appropriately in the styles and button follows the S2 design specs.

Additionally, there was some missing style support for the `.spectrum-Button--noWrap` option, so this work reimplements a "no wrapping" option for button components, and removes some of the repetitiveness in the no wrap test cases and story.

PRs used as reference:

- [S2 button migration](https://github.com/adobe/spectrum-css/pull/2600)
- [Add text wrapping option](https://github.com/adobe/spectrum-css/pull/3086)
- [PostCSS plugin updates/fixes](https://github.com/adobe/spectrum-css/pull/3502)

### S2 switch fixes

This work addresses some very minor regressions noticed in the migrated S2 switch. We have reimplemented the switch animation durations tokens, and updated their usage within the style definitions correctly.

PRs used as reference:

- [S2 switch migration](https://github.com/adobe/spectrum-css/pull/2651)
