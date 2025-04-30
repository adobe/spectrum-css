---
"@spectrum-css/colorhandle": minor
"@spectrum-css/colorslider": minor
"@spectrum-css/colorarea": minor
"@spectrum-css/colorwheel": minor
"@spectrum-css/slider": minor
---

### Including the touch action rule for draggable content

The slider, color slider, color area, color wheel, color handle all deserve to have their touch-action property managed so that trying to set the value of those interfaces doesn't cause page scrolling in touch context.

Adding `touch-action: none` to a slider or any draggable component is necessary to prevent the browser's default touch behaviors—such as scrolling, pinch-zooming, or double-tap zooming from interfering with the component's intended interaction.

These components also include `user-select: none` to prevent selection or highlighting of any text elements.
