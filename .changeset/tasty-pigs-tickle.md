---
"@spectrum-css/preview": major
---

Update the Chromatic add-on to the currently maintained package:

- from "@chromaui/addon-visual-tests": "^1.0.0"
- to "@chromatic-com/storybook": "^3.2.3"

This requires an update to the chromatic.config.json settings, removal of the generic argTypesRegex from the preview config, and a stricter import in the doc blocks.

To support a successful build, our test command must maintain the autodocs and mdx syntax.
