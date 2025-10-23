---
"@spectrum-css/accordion": major
"@spectrum-css/actionbar": major
"@spectrum-css/actiongroup": major
---

This update removes `--mod-*` custom property hooks per SWC-1264, see also the RFC for extensible styling.

- Remove all `--mod-*` custom property hooks.
- Keep existing class selectors and variants unchanged.
- Update stories to reflect the removal of the `--mod-*` override layer.

Breaking change: the `--mod-*` override layer is removed. Consumers should set `--spectrum-*` variables directly where customization is needed.
