---
"@spectrum-css/dialog": major
"@spectrum-css/modal": minor
---

## S2 Takeover dialog

This is the migration for the fullscreen/fullscreenTakeover dialog stories (these stories correspond to the "takeover dialog" in Figma). The Divider component support was removed in S2 standard dialog migration ([#2860](https://github.com/adobe/spectrum-css/pull/2860)). New and updated tokens are in place to update fullscreen/fullscreenTakeover dialog sizing, grid spacing, spacing in the header, and font sizes. Fullscreen/fullscreenTakeover dialogs do not support additional footer content or checkboxes (in comparison to the standard dialog).

Takeover dialogs also support replacing text in the header and body areas with other components. This required an additional `.spectrum-Dialog-headerContentWrapper` element that should center whatever component/content within.

Class names updated to match naming convention (remove hyphens and capitalize second word):
`.spectrum-Dialog-header-content` > `.spectrum-Dialog-headerContent`
`.spectrum-Dialog-footer-content` > `.spectrum-Dialog-footerContent`

_New Mods_
`--mod-takeover-dialog-grid-spacing`
`--mod-takeover-dialog-spacing-header-content-gap`
`--mod-takeover-dialog-title-font-size`

Modal updates

- Modal component now uses the updated margin token (`window-to-edge`) found in the takeover dialog design specs. This work also introduced `--spectrum-modal-takeover-window-to-edge`
