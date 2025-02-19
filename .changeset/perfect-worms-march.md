---
"@spectrum-css/popover": minor
---

# Popover overflow bug on Safari browser

`overflow: auto` added to popover without tip and `overflow: visible` to CSS --withTip. The contextual menu and rewrite menu popover component dropshadow disappears when the overflow property is applied and translate3d property is applied to maintain the position of the popover in any direction.
