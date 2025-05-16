---
"@spectrum-css/actionbutton": patch
---

This update aims to simplify `--mod-` access by ensuring local variants and states aren't hooking into those custom properties for overrides. This updates all local variants and states to override the `--spectrum-actionbutton-` properties instead and adjusts the specificity to ensure no regressions in rendered results.

Other changes of note:

- Removes the `.spectrum-ActionButton--sizeM` as unnecessary and duplicate as these styles are applied in the base class.
- Reduces the use of the `:not()` pseudo-class in theme overrides as these selectors are more complex to remap for web component projects.
