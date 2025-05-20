---
"@spectrum-css/picker": major
---

### S2 Picker Component Refactor

- Refactors Picker component to use proper custom property naming conventions
- Adds size-specific animation distances for Popover component
- Improves component structure with proper class by renaming `spectrum-Picker` to `spectrum-Picker-button`
- `spectrum-Picker` now encapsulates help text, label, and popover components
- Adds `flex-shrink` to progress circle for better layout control when truncation and loading is visible
- Updates Popover animation distance to use `spectrum-Picker` custom properties

#### New mods

`--spectrum-picker-popover-animation-distance`
