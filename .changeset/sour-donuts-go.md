---
"@spectrum-css/meter": major
"@spectrum-css/progressbar": major
---

### S2 Meter Migration

This migration updates the meter component and the progress bar component. Both needed the track to have a full corner radius to make the rounded look. The progress bar's HTML template now includes the help text component but it is only used in the meter.

#### New updates

- Includes `--sizeM` and `--sizeXL`
- Includes help text component for more context
- Shares progress bar's field label typography
- Added help text visual test

#### Removed mods

- `--mod-meter-thickness`
- `--mod-meter-font-size`
- `--mod-meter-spacing-top-to-text`

#### New mods

- `--mod-meter-field-label-progress-bar`
