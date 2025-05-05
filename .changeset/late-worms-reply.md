---
"@spectrum-css/floatingactionbutton": patch
---

## S2 floating action button fix

Opts to use the color property as opposed to fill for the icon. This correctly passes the floating action button icon colors to the component, to override the fill property style that is set on the embedded `.spectrum-Icon`.
