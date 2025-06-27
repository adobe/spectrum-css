---
"@spectrum-css/taggroup": major
---

The Spectrum 2 version of Tag Group is a major change from its Spectrum 1 counterpart.

Major style changes include:

- Use of new tokens and custom properties for spacing tags. The method of spacing between tags has changed. Where previously tags were spaced using tokens to represent inline and block margins on each tag, tags are now spaced by tokens representing the gaps between tags.
- Rather than being a single size, Tag group now comes in t-shirt sizes: Small, medium, and large. These sizes should determine the sizes of the embedded components, but also the spacing between tags.
- Tag group can now accommodate a side label. To do so, it makes use of a grid layout.
- In order to match the layout in the spec, more embedded components besides Tag have been added. Field label, Help text, and Action button (quiet) components have been added to the Storybook implementation, and styles are set for these embedded components within the tag group layout.

In order to support the aforementioned spacing changes, the two mod properties for margin have been removed:

- `--mod-tag-group-item-margin-block`
- `--mod-tag-group-item-margin-inline`

Instead, please customize spacing between tags with:

- `--mod-tag-group-block-tag-spacing`
- `--mod-tag-group-inline-tag-spacing`

These custom properties may need to be set to be double the previous margin values in order to achieve the same spacing.

To support custom spacing of the embedded components, several other new mod properties have been added:

- `--mod-tag-group-block-spacing-label-to-tags`
- `--mod-tag-group-inline-spacing-label-to-tags`
- `--mod-tag-group-spacing-help-text-to-tags`

To support the optional empty state (when there are no tags in the tag group), several passthroughs to modify the body typography text element have been added, including:

- `--mod-body-cjk-line-height`
- `--mod-body-font-size`
- `--mod-body-line-height`
- `--mod-body-margin-end`
- `--mod-body-margin-start`
