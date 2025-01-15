---
"@spectrum-tools/stylelint-no-unknown-custom-properties": patch
"@spectrum-tools/stylelint-no-unused-custom-properties": patch
---

Update package dependencies.

Specific to `stylelint-no-unknown-custom-properties`, the assumption that only CSS files will be parsed is removed to allow support for JSON assets as well. Additionally, this package will now evaluate dependencies beyond just `@spectrum-css`.
