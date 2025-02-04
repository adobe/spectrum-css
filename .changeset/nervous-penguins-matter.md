---
"@spectrum-css/infieldbutton": patch
"@spectrum-css/stepper": patch
"@spectrum-css/picker": patch
---

S2 Foundations fixes

- Adjusts the background-color of the infield button components within stepper to use `gray-100` as opposed to `gray-25`.
  - This corresponds to the background-color updates picker has for S2.
- Corrects the border color for the default picker for S2 foundations, using `gray-500` (instead of `gray-800`) to align with other field/form components.
- Refactors the `&.is-keyboardFocused&.is-placeholder` selector to `&.is-keyboardFocused.spectrum-Picker-label.is-placeholder` to avoid unexpectedly targeting the nested placeholder class.
