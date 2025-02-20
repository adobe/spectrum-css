---
"@spectrum-css/popover": minor
---

# Popover overflow bug on Safari browser

`translateZ` has been added to popover `&.is-open`. This is to prevent clipping of the `filter: drop-shadow` when `overflow` is applied on `spectrum-Popover`. This bug happens on the Safari browser. `translateZ or translate3d` on the `&.is-open` class accelerates the component to the GPU layer maintaining any transformations and animations.

`overflow: visible` applied to CSS `--withTip` so the tip is still visible if `overflow` is applied to the component.
