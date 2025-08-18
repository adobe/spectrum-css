---
"@spectrum-css/dialog": minor
---

Increases flexibility and responsiveness of the dialog header. A container query for the `.spectrum-Dialog` was added, which now triggers the reflow of the `.spectrum-Dialog--fullscreen`/`.spectrum-Dialog--fullscreenTakeover` content grid. This is particularly useful when the component slot is utilized to add other components as additional content in fullscreen/fullscreenTakeover dialogs' header areas by allowing the content to reflow sooner.
