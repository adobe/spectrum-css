---
"@spectrum-css/card": major
---

BREAKING CHANGE: The card component's default variant now uses the same grey background color behind the cover photo that is used behind the image for the quiet variant. This background was only visible when the image did not take up the entire space. The intended background color of `--spectrum-background-base-color` for non-quiet variants was confirmed by the design team.

This also provides the existing mod custom property `--mod-card-preview-background-color` for customizing this area behind the image for the default variant.
