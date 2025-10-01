---
"@spectrum-css/accordion": major
---

This update removes `--mod-accordion-*` custom property hooks per SWC-1264, see also the RFC for extensible styling.

- Remove all `--mod-accordion-*` custom property hooks.
- Keep existing class selectors and variants (e.g., `.spectrum-Accordion--compact`, `.spectrum-Accordion--spacious`, `.spectrum-Accordion--quiet`, `.is-open`, `.is-disabled`) unchanged.
- Update stories to reflect the removal of the `--mod-accordion-*` override layer.

Breaking change: the `--mod-accordion-*` override layer is removed. Consumers should set `--spectrum-accordion-*` variables directly where customization is needed.
