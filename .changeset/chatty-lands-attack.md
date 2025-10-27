---
"@spectrum-css/accordion": major
---

### Spectrum 2 migration

Accordion now uses Spectrum 2 tokens and specifications.

New sized tokens are used for corner rounding, the spacing around the disclosure icon, and
the spacing around the content area.

#### New features

- Adds the optional "quiet" style, which does not show dividers between accordion items.
- Adds CSS transition to animate the rotation of the disclosure indicator when expanding and
  collapsing the accordion item.
- Adds no inline padding variant (`.spectrum-Accordion--noInlinePadding`) in which the item
  header does not have padding.
- Per design spec, accordion items have a min-width and default width. Default width should not be smaller than
  `--spectrum-accordion-item-minimum-width`.

#### Markup changes

The HTML markup has changed slightly for the accordion header. The disclosure icon has been moved
from outside the button (`spectrum-Accordion-itemHeader`), to within the button. The extra
element with class `spectrum-Accordion-itemIconContainer`, previously wrapping the icon, has
been removed. A span with class `spectrum-Accordion-itemTitle` has been added around the heading
text.
