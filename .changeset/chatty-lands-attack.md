---
"@spectrum-css/accordion": major
---

#### Spectrum 2 migration

Accordion now uses Spectrum 2 tokens and specifications.

New sized tokens are used for corner rounding, the spacing around the disclosure icon, and
the spacing around the content area.

##### New features

- Adds the optional "quiet" style, which does not show dividers between accordion items.
- Adds CSS transition to animate the rotation of the disclosure indicator when expanding and
  collapsing the accordion item.

##### Markup changes

The HTML markup has changed slightly for the accordion header. The disclosure icon has been moved
from outside the the button (`spectrum-Accordion-itemHeader`), to within the button. The extra
element with class `spectrum-Accordion-itemIconContainer`, previously wrapping the icon, has
been removed. A span with class `spectrum-Accordion-itemTitle` has been added around the heading
text.

###### Mod changes

The following `--mod` custom properties have been renamed to better reflect how they are used:

- `--mod-accordion-item-height` has been renamed to `--mod-accordion-item-minimum-height`
- `--mod-accordion-item-width` has been renamed to `--mod-accordion-item-minimum-width`
- `--mod-accordion-min-block-size` has been renamed to `--mod-accordion-item-min-block-size`
- `--mod-accordion-component-edge-to-text` has been renamed to `--mod-accordion-content-padding-inline`
