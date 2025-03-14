---
"@spectrum-css/slider": minor
---

# Slider: offset variant track fix

The border radius styles were not being applied to the second instance of the `spectrum-Slider-track` when the offset variant is activated. The reason for this bug is because when the `offset` is selected, the template structure changes as `spectrum-Slider-fill` gets added to the slider.

Adding a sibling combinator `&~.spectrum-Slider-track` to `spectrum-Slider-track` when offset is activated resolved the issue.
