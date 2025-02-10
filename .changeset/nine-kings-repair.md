---
"@spectrum-css/button": major
---

#### Spectrum 2 migration

Button now uses Spectrum 2 tokens and specifications, which includes many color changes to all variants. A few other notable changes:

- Outline buttons are no longer available in accent and negative options — use the filled variant instead.
- Medium size is now the default. The class `.spectrum-Button--sizeM` is now unnecessary for this size, and has been removed.
- The `.spectrum-Button--fill` class is no longer needed and has been removed.

The following `--mod` custom properties have been renamed:

- `--mod-line-height-100` has been renamed to `--mod-button-line-height`
- `--mod-sans-font-family-stack` has been renamed to `--mod-button-font-family`
- `--mod-animation-duration-100` has been renamed to `--mod-button-animation-duration`
- `--mod-bold-font-weight` has been renamed to `--mod-button-font-weight`
