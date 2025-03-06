---
"@spectrum-css/radio": major
"@spectrum-css/helptext": minor
---

# Radio S2 Migration

Updates:

- Now has an invalid/error state
- High contrast tokens have been modified
- Typography tokens modified
- Invalid state shows example with help text.

**Note:** Help text needed an update to the validation icon name. `Alert` was displaying a circle. The new icon name is `AlertTriangle` after the new icon set update. Another bug fix is the vertical alignment of the help text. `align-items: center` was simply added to fix it.

## New tokens

`--spectrum-radio-invalid-color-default`
`--spectrum-radio-invalid-color-hover`
`--spectrum-radio-invalid-color-down`
`--spectrum-radio-invalid-color-key-focus`
`--spectrum-radio-border-width`
`--spectrum-radio-text-font-weight`
`--spectrum-radio-text-font-style`

## Modified tokens

`--spectrum-radio-emphasized-accent-color`
`--spectrum-radio-emphasized-accent-color-hover`
`--spectrum-radio-emphasized-accent-color-down`
`--spectrum-radio-emphasized-accent-color-focus`
