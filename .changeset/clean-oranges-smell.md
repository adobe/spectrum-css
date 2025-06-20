---
"@spectrum-css/preview": major
---

Updates Storybook to use the latest icon sets for Spectrum 2. Includes changes to the directories that
are used for loading in the sprite sheet and the individual icons, as they have moved.

The global Icon Loader has been updated to apply the existing key name renaming from file names to icon
names. This is now done once at the loader step, rather than each time within the Icon component template.
The loader also now excludes the handful of 22x20 workflow icons, as these are not yet handled within the
design system.
