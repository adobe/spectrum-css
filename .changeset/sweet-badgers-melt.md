---
"@spectrum-css/accordion": minor
---

Changes values of `--spectrum-accordion-item-minimum-height` to align more closely with design spec, this affects the minimum height of accordion items for some combinations of size/density by giving them more space.

New accordion minimum heights will use the heights/tokens:

| Size | Compact                     | Regular                     | Spacious                    |
| ---- | --------------------------- | --------------------------- | --------------------------- |
| S    | 24px/`component-height-75`  | 32px/`component-height-100` | 40px/`component-height-200` |
| M    | 32px/`component-height-100` | 40px/`component-height-200` | 48px/`component-height-300` |
| L    | 40px/`component-height-200` | 48px/`component-height-300` | 56px/`component-height-400` |
| XL   | 48px/`component-height-300` | 56px/`component-height-400` | 64px/`component-height-500` |
