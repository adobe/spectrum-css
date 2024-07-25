---
"@spectrum-css/preview": patch
---

## Minor storybook updates

### Storybook decorators

- Set-up for addition of the S2 context
- Flattened the style injection to make content easier to find during inspection
- New "raw" mode added to view components without tokens
- Comments added and unused functions removed from the helpers in decorators
- Relevant args added to the updateArgs function

### General updates

- Copyrights added to index files
- Package exports include all files not just JS assets
- Remove unused fallbacks in argTypes for global args
- Flag the darkest color as deprecated in the dropdown menu
- Change string "Japanese" to "日本語" in the language dropdown to align with other items in the menu
- Correct invalid useArgs useage at the story-level
- Correct misplaced custom style definition from out of the fallbacks object (calendar)
