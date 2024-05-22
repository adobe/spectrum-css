---
"@spectrum-css/textfield": patch
---

Fixes an issue in the Quiet variant where hovering over the focus pseudo element was firing pointer events that weren't meant to be seen unless the user hovered over the input element itself.
