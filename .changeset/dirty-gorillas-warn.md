---
"@spectrum-css/clearbutton": minor
"@spectrum-css/assetlist": minor
"@spectrum-css/slider": minor
"@spectrum-css/dial": minor
"@spectrum-css/menu": minor
---

By updating the postcss-preset-env to the latest breaking change version, output for this component no longer injects the `.js-focus-within` and '[focus-within]` selectors for the focus-within polyfill. As this feature is not used in the SWC consumption, risk to the end user for this removal is low.
