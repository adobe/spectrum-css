---
"@spectrum-css/textfield": major
---

#### Migrate to Spectrum 2

- Default styles are used for medium
- Removal of quiet variant
- Style adjustments to match design spec:
  - Spacing start/end edge to value for XL component should use `component-edge-to-text-300`, not `-200`
  - Spacing top edge to value should change with size, now uses different spacing tokens for each component tshirt size according to spec (`component-top-to-text-75`, `-100`, `-200`, and `-300`)
  - Spacing bottom edge to value should change with size, now uses different spacing tokens for each component tshirt size according to spec (`component-bottom-to-text-75`, `-100`, `-200`, and `-300`)
  - Border thickness has been increased to 2px, and border colors have been updated to match spec
  - Adjust side label inline spacing to field, should be `spacing-200` for all tshirt sizes
  - Change disabled background color to `gray-25`
  - Change disabled-border-color from transparent to `disabled-border-color`
- Use new and updated tokens:
  - use tokens for textfield width (`field-default-width-small`, `-medium`, `-large`, `-extra-large`)
  - use updated corner radius tokens
  - use different component-bottom-to-text tokens for character-count-spacing-block
  - update tokens for alert icon block spacing
  - update tokens for alert and invalid inline-start spacing
  - update font tokens

Adds mods:

- `--mod-textfield-character-count-color`
- `--mod-textfield-character-count-font-style`
- `--mod-textfield-character-count-line-height`
- `--mod-textfield-character-count-line-height-cjk`
- `--mod-textfield-font-style`
- `--mod-textfield-line-height` (used for multiline only)
- `--mod-textfield-line-height-cjk`

Removes mods:

- `--mod-text-area-min-block-size-quiet`
- `--mod-textfield-character-count-spacing-block-quiet`
- `--mod-textfield-icon-spacing-inline-end-quiet-invalid`
- `--mod-textfield-icon-spacing-inline-end-quiet-valid`
- `--mod-textfield-label-spacing-block-quiet`
- `--mod-textfield-spacing-block-quiet`
- `--mod-textfield-spacing-inline-quiet`

Changed mods:

- `--mod-texfield-animation-duration` --> `--mod-textfield-animation-duration`
- `--mod-texfield-placeholder-font-size` --> `--mod-texfield-placeholder-font-size`
