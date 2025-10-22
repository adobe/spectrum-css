---
"@spectrum-css/alertdialog": major
"@spectrum-css/asset": major
"@spectrum-css/assetcard": major
"@spectrum-css/assetlist": major
"@spectrum-css/avatar": major
"@spectrum-css/badge": major
"@spectrum-css/breadcrumb": major
"@spectrum-css/checkbox": major
"@spectrum-css/divider": major
"@spectrum-css/miller": major
"@spectrum-css/page": major
"@spectrum-css/well": major
---

This update removes `--mod-*` custom property hooks per SWC-1264, see also the RFC for extensible styling. In addition, this update cleans up any component-level custom properties that did not rely on the CSS cascade to define the styles; this was done to reduce the number of custom properties that are defined at the component level and trim down the size of the CSS we are shipping to consumers.

- Remove all `--mod-*` custom property hooks.
- Keep existing class selectors and variants unchanged.
- Update stories to reflect the removal of the `--mod-*` override layer.
- Remove any component-level custom properties that did not rely on the CSS cascade to define the styles.
- Remove any high contrast mode styles being used where the default styles are sufficient.

Breaking change: the `--mod-*` override layer is removed. Consumers should set `--spectrum-*` variables directly where customization is needed.
