---
"@spectrum-css/clearbutton": minor
---

Improves the visibility of the clear button disabled variant on static color backgrounds by more closely aligning styles with close button.

- Adds `.spectrum-ClearButton--staticWhite` to the mod declarations associated with `.spectrum-ClearButton--overBackground` in advance of the latter being deprecated. The same class has been added to the `:focus` declaration for `spectrum-ClearButton--overBackground`.
- Adds `--spectrum-clear-button-icon-color-disabled: var(--spectrum-disabled-static-white-content-color);` custom property for `.spectrum-ClearButton--staticWhite`.
- Enables `cursor: pointer` for `.spectrum-ClearButton` when it is not disabled.
- Disables hover, active, focus and focus-within states for `:disabled` `.spectrum-ClearButton` elements.
- Adds color styles for `:disabled` and `.is-disabled` `.spectrum-ClearButton` `:disabled` icons.
