---
"@spectrum-css/textfield": patch
"@spectrum-css/stepper": patch
---

Modify the stepper and textfield css to allow the .is-disabled state and class to properly disable the border behavior that would occur when a disabled stepper was hovered. It also leverages the outline state for focused components to align with the state currently used by button components.
