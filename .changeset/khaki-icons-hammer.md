---
"@spectrum-css/tag": major
---

Tag now uses Spectrum 2 tokens and specifications:

- The invalid variant has been removed.
- Borders remain in high contrast but are otherwise transparent.
- Thumbnail has been added as a visual option.
- Tag now has a max-inline-size.
- Read-only tags are now supported.
- Passthroughs for clear button have been updated to match the current spec.
- Default t-shirt size for tag is small.
- Clear button has accessibly sized target.
- Emphasized tags have accent coloring only when they are selected.

Changed mods:

- "--mod-tag-avatar-spacing-inline-end" --> "--mod-tag-visual-spacing-inline-end",
- "--mod-tag-icon-spacing-inline-end" --> "--mod-tag-visual-spacing-inline-end",
- "--mod-tag-spacing-inline-start" --> "--mod-tag-label-spacing-inline",
- "--mod-tag-label-spacing-inline-end" --> "--mod-tag-label-spacing-inline"
- "--mod-tag-clear-button-spacing-inline-start" --> "--mod-tag-label-to-clear-icon",
- "--mod-tag-clear-button-spacing-inline-end" --> "--mod-tag-edge-to-clear-icon"

Added mods:

- "--mod-tag-avatar-size",
- "--mod-tag-clear-button-size",
- "--mod-tag-label-font-family",
- "--mod-tag-label-font-style",
- "--mod-tag-label-line-height-cjk",
- "--mod-tag-maximum-width-multiplier",
- "--mod-tag-min-inline-size",
- "--mod-tag-thumbnail-size",
- "--mod-tag-visual-spacing-inline-start"

Removed mods:

- "--mod-tag-background-color-invalid-selected",
- "--mod-tag-background-color-invalid-selected-active",
- "--mod-tag-background-color-invalid-selected-focus",
- "--mod-tag-background-color-invalid-selected-hover",
- "--mod-tag-border-color-emphasized-active",
- "--mod-tag-border-color-emphasized-focus",
- "--mod-tag-border-color-emphasized-hover",
- "--mod-tag-border-color-invalid",
- "--mod-tag-border-color-invalid-active",
- "--mod-tag-border-color-invalid-focus",
- "--mod-tag-border-color-invalid-hover",
- "--mod-tag-border-color-invalid-selected",
- "--mod-tag-border-color-invalid-selected-active",
- "--mod-tag-border-color-invalid-selected-focus",
- "--mod-tag-border-color-invalid-selected-hover",
- "--mod-tag-border-color-selected-active",
- "--mod-tag-border-color-selected-focus",
- "--mod-tag-border-color-selected-hover",
- "--mod-tag-content-color-invalid",
- "--mod-tag-content-color-invalid-active",
- "--mod-tag-content-color-invalid-focus",
- "--mod-tag-content-color-invalid-hover",
- "--mod-tag-content-color-invalid-selected",
