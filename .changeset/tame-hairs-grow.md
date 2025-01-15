---
"@spectrum-css/infieldbutton": minor
"@spectrum-css/actionbutton": minor
"@spectrum-css/pickerbutton": minor
"@spectrum-css/actiongroup": minor
"@spectrum-css/alertbanner": minor
"@spectrum-css/clearbutton": minor
"@spectrum-css/closebutton": minor
"@spectrum-css/datepicker": minor
"@spectrum-css/assetcard": minor
"@spectrum-css/textfield": minor
"@spectrum-css/checkbox": minor
"@spectrum-css/combobox": minor
"@spectrum-css/popover": minor
"@spectrum-css/stepper": minor
"@spectrum-css/tooltip": minor
"@spectrum-css/button": minor
"@spectrum-css/picker": minor
"@spectrum-css/rating": minor
"@spectrum-css/search": minor
"@spectrum-css/slider": minor
"@spectrum-css/switch": minor
"@spectrum-css/radio": minor
"@spectrum-css/toast": minor
"@spectrum-css/tabs": minor
"@spectrum-css/tag": minor
---

Simplify how the `--system` properties are mapped. By updating the logic in the `postcss-add-theming-layer`, we are now shipping cleaner, more readable `--system` property names. These custom properties are documented as _NOT_ a part of the component API so although these result in a change to the custom property names, it does not impact the properties that are in the API and so do not constitute a breaking change. Expect to see no change to how component theming works or any visual regressions as a result of this change.
