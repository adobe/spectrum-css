---
"@spectrum-css/icon": major
---

Updates the icon component to use the new Spectrum 2 icon sets. The `.spectrum-UIIcon--medium` and `.spectrum-UIIcon--large` classes have been removed, as UI icons are now delivered with a single SVG. The color property also now makes use of the `--iconPrimary` custom property that is defined in some of the SVG files. Storybook has been updated to use and load the new SVGs, whose name format and directories have changed.
