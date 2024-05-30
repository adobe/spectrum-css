---
"@spectrum-css/ui-icons": major
---

# Breaking change

Iconography in v1 inclued 2 sizes, `medium` and `large`, as well as a single SVG asset that included both versions to be toggled with classes via CSS (found in folder`combined`). Icons in v2 no longer have multiple sizes and all assets are sourced from a single folder`svg` which can be found in the `dist` directory of this workspace. **Raw SVG assets can no longer be sourced from the top-level of the workspace and must be loaded from `@spectrum-css/ui-icons/dist/svg/*.svg` instead.** Please find below an outline of the new, deprecated, and unchanged icons.

| Icon name         | Migration notes |
| ----------------- | --------------- |
| Add50             | **New**         |
| Add75             | **New**         |
| Add100            | **New**         |
| Add200            | **New**         |
| Add300            | **New**         |
| Arrow75           | Deprecated      |
| Arrow100          | -               |
| Arrow200          | Deprecated      |
| Arrow300          | Deprecated      |
| Arrow400          | -               |
| Arrow500          | Deprecated      |
| Arrow600          | Deprecated      |
| Asterisk75        | Deprecated      |
| Asterisk100       | -               |
| Asterisk200       | -               |
| Asterisk300       | -               |
| Checkmark50       | -               |
| Checkmark75       | -               |
| Checkmark100      | -               |
| Checkmark200      | -               |
| Checkmark300      | -               |
| Checkmark400      | -               |
| Checkmark500      | Deprecated      |
| Checkmark600      | Deprecated      |
| Chevron50         | -               |
| Chevron75         | -               |
| Chevron100        | -               |
| Chevron200        | -               |
| Chevron300        | -               |
| Chevron400        | -               |
| Chevron500        | Deprecated      |
| Chevron600        | Deprecated      |
| CornerTriangle75  | -               |
| CornerTriangle100 | -               |
| CornerTriangle200 | -               |
| CornerTriangle300 | -               |
| Cross75           | -               |
| Cross100          | -               |
| Cross200          | -               |
| Cross300          | -               |
| Cross400          | -               |
| Cross500          | -               |
| Cross600          | -               |
| Dash50            | -               |
| Dash75            | -               |
| Dash100           | -               |
| Dash200           | -               |
| Dash300           | -               |
| Dash400           | Deprecated      |
| Dash500           | Deprecated      |
| Dash600           | Deprecated      |
| DragHandle75      | **New**         |
| DragHandle100     | **New**         |
| DragHandle200     | **New**         |
| DragHandle300     | **New**         |
| Gripper100        | **New**         |
| SingleGripper     | Deprecated      |
| DoubleGripper     | Deprecated      |
| TripleGripper     | Deprecated      |
| LinkOut100        | **New**         |
| LinkOut200        | **New**         |
| LinkOut300        | **New**         |
| LinkOut400        | **New**         |
