---
"@spectrum-css/meter": major
"@spectrum-css/progressbar": major
---

### S2 meter migration with base progress bar updates

This migration updates the meter component and the progress bar component. Both needed the track to have a full corner radius to make the rounded look. The progress bar's HTML template now includes the help text component but it is only used in the meter. Also includes a bug fix for progress bar in order to better support the side label variant.

#### New updates

- Includes `--sizeM` and `--sizeXL` (using progress bar's sizes)
- Includes help text component for more context
- Shares progress bar's field label typography
- Added help text visual test
- Added static black variant
