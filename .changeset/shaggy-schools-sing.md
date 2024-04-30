---
"@spectrum-css/search": major
"@spectrum-css/textfield": patch
---

- feat(search): S2 migration
  - Search now uses Spectrum 2 tokens and specifications. The following items have been adjusted:
    - Quiet variant has been deprecated and code removed (including removal of the custom property `--mod-search-quiet-button-offset`).
    - Updates to colors, corner rounding, and spacing.
    - Custom property mod adjustments:
      - Added `--mod-search-edge-to-text`.
      - Added `--mod-search-top-to-icon`.
      - Removed `--mod-workflow-icon-size-100`.
- chore(textfield): add border-color custom property mod
  - Search needed access to the disabled border-color in textfield, so the `--mod-textfield-border-color-disabled` custom property was added.
