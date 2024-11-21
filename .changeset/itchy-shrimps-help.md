---
"@spectrum-css/picker": minor
---

Popover has an additional wrapping element, so this adjusts the selector for picker's popover component with that additional wrapper in mind. It also needs to be able to override the popover default spacing to a source (which is 8px), so this sets the spacing appropriately for t-shirt sized pickers using `--mod-popover-animation-distance`.
