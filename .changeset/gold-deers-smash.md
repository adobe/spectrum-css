---
"@spectrum-css/fieldgroup": minor
---

The previous display of the read-only state checkboxes did not match up with any guidelines. This update removes the read-only specific styles for checkbox within the fieldgroup component, so that the boxes are still displayed and commas are not appended to the label. This includes the removal of `--spectrum-fieldgroup-readonly-delimiter` as it is no longer needed.
