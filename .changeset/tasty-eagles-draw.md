---
"@spectrum-css/link": major
---

# Link S2 migration

The link component is now updated with S2 specs, colors, and typography.There is a new inline variant which uses the `.spectrum-Link--inline` class and the default variant is the standalone variant.

**Notes**
- Quiet styling does not apply to the inline variant for accessiblity reasons.
- `--mod-spectrum-link-font-weight` can be used to adjust inline variant to match surrounding text. Apply font weights to this mod `inherit` does not apply.

## New tokens

### Color

`spectrum-link-focus-indicator-color`
`spectrum-link-focus-indicator-thickness`
`spectrum-link-focus-indicator-gap`
`spectrum-link-corner-radius`

### Typography

`spectrum-link-line-height`
`spectrum-link-line-height-cjk-100`
`spectrum-link-font-size`
`spectrum-link-font-style`
`spectrum-link-font-weight`
`spectrum-link-text-underline-thickness`
`spectrum-link-text-underline-gap`
