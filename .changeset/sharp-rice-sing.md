---
"@spectrum-css/assetcard": patch
"@spectrum-css/well": patch
---

Replaces raw RGB value/direct token references with abstracted custom properties in theme/spectrum-two.css files

Asset card

- removes raw rgb value for box-shadow from `index.css`
- creates new `--spectrum-assetcard-selectionindicator-box-shadow-color`
  in `themes/spectrum-two.css` with previous rgb value to use instead

Well

- removes `--spectrum-gray-800-rgb` for background-color from `index.css`
- creates new `--spectrum-well-background-color` in `themes/spectrum-two.css`
  with previous `--spectrum-gray-800-rgb` property to use instead
