---
"@spectrum-css/rating": major
---

Provides more granular control over the hover behavior of child stars within the rating component to prevent hovering in space adjacent to the component from highlighting all stars.

- `.is-focused` has been renamed to `.is-keyboardFocused` to better reflect its intended use. Clicking the rating component no longer renders the focus ring.
- `.is-hoverSelection` has been added to the rating component and may be leveraged to update the hover and select state of the star icons the component contains.
