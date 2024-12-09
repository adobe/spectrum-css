---
"@spectrum-css/dialog": major
"@spectrum-css/modal": minor
---

S2 Takeover dialog

This is the migration for the fullscreen/fullscreenTakeover dialog stories (in Figma, these stories are called "takeover dialog"). The Divider component support was removed in S2 standard dialog migration ([#2860](https://github.com/adobe/spectrum-css/pull/2860)). New and updated tokens are in place to update dialog corner rounding, some font sizes, spacing/padding, and maximum/minimum widths. Fullscreen/fullscreenTakeover dialogs do not support additional footer content or checkboxes (in comparison to the standard dialog).

_New Mods_
`--mod-takeover-dialog-grid-spacing`
`--mod-takeover-dialog-spacing-header-content-gap`
`--mod-takeover-dialog-title-font-size`

Modal updates

- Modal component now uses the updated margin (window-to-edge) found in the takeover dialog design specs.
