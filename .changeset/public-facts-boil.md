---
"@spectrum-css/taggroup": major
---

### Spectrum 2 Tag Group migration

The Spectrum 2 version of Tag Group is a major change from its Spectrum 1 counterpart.

Major style changes include:

- Use of new tokens and custom properties for spacing tags. The method of spacing between tags has changed. Where previously tags were spaced using tokens to represent inline and block margins on each tag, tags are now spaced by tokens representing the gaps between tags.
- Rather than being a single size, Tag group now comes in t-shirt sizes: Small, medium, and large. These sizes should determine the sizes of the embedded components, but also the spacing between tags.
- Tag group can now accommodate a side label. To do so, it makes use of a grid layout.
- In order to match the layout in the spec, more embedded components besides Tag have been added. Field label, Help text, and Action button (quiet) components have been added to the Storybook implementation, and styles are set for these embedded components within the tag group layout.
