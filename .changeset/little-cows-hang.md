---
"@spectrum-css/button": minor
---

Includes fixes and updates to the colors used in forced-colors / high contrast mode. In Windows high contrast, a different background was showing behind the label text, as a result of extra text readability backplates being rendered. `forced-color-adjust: none` is now applied to the child label element to fix this. The appropriate `ButtonFace`/`ButtonText` system colors are also now defined instead of relying on the default. The existing use of `Highlight` is now paired with `HighlightText` to ensure contrast by using a matching foreground/background pair.
