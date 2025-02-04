---
"@spectrum-css/accordion": patch
"@spectrum-css/actionbar": patch
"@spectrum-css/actionbutton": patch
"@spectrum-css/actiongroup": patch
"@spectrum-css/alertbanner": patch
"@spectrum-css/alertdialog": patch
"@spectrum-css/asset": patch
"@spectrum-css/assetcard": patch
"@spectrum-css/assetlist": patch
"@spectrum-css/avatar": patch
"@spectrum-css/badge": patch
"@spectrum-css/breadcrumb": patch
"@spectrum-css/button": patch
"@spectrum-css/buttongroup": patch
"@spectrum-css/calendar": patch
"@spectrum-css/card": patch
"@spectrum-css/checkbox": patch
"@spectrum-css/clearbutton": patch
"@spectrum-css/closebutton": patch
"@spectrum-css/coachindicator": patch
"@spectrum-css/coachmark": patch
"@spectrum-css/colorarea": patch
"@spectrum-css/colorhandle": patch
"@spectrum-css/colorloupe": patch
"@spectrum-css/colorslider": patch
"@spectrum-css/colorwheel": patch
"@spectrum-css/combobox": patch
"@spectrum-css/contextualhelp": patch
"@spectrum-css/datepicker": patch
"@spectrum-css/dial": patch
"@spectrum-css/dialog": patch
"@spectrum-css/divider": patch
"@spectrum-css/dropindicator": patch
"@spectrum-css/dropzone": patch
"@spectrum-css/fieldgroup": patch
"@spectrum-css/fieldlabel": patch
"@spectrum-css/floatingactionbutton": patch
"@spectrum-css/form": patch
"@spectrum-css/helptext": patch
"@spectrum-css/icon": patch
"@spectrum-css/illustratedmessage": patch
"@spectrum-css/infieldbutton": patch
"@spectrum-css/inlinealert": patch
"@spectrum-css/link": patch
"@spectrum-css/logicbutton": patch
"@spectrum-css/menu": patch
"@spectrum-css/meter": patch
"@spectrum-css/miller": patch
"@spectrum-css/modal": patch
"@spectrum-css/opacitycheckerboard": patch
"@spectrum-css/page": patch
"@spectrum-css/pagination": patch
"@spectrum-css/picker": patch
"@spectrum-css/pickerbutton": patch
"@spectrum-css/popover": patch
"@spectrum-css/progressbar": patch
"@spectrum-css/progresscircle": patch
"@spectrum-css/radio": patch
"@spectrum-css/rating": patch
"@spectrum-css/search": patch
"@spectrum-css/sidenav": patch
"@spectrum-css/slider": patch
"@spectrum-css/splitview": patch
"@spectrum-css/statuslight": patch
"@spectrum-css/steplist": patch
"@spectrum-css/stepper": patch
"@spectrum-css/swatch": patch
"@spectrum-css/swatchgroup": patch
"@spectrum-css/switch": patch
"@spectrum-css/table": patch
"@spectrum-css/tabs": patch
"@spectrum-css/tag": patch
"@spectrum-css/taggroup": patch
"@spectrum-css/textfield": patch
"@spectrum-css/thumbnail": patch
"@spectrum-css/toast": patch
"@spectrum-css/tooltip": patch
"@spectrum-css/tray": patch
"@spectrum-css/treeview": patch
"@spectrum-css/typography": patch
"@spectrum-css/underlay": patch
"@spectrum-css/well": patch
---

Fixes a bug in the content of the `dist/index-theme.css` file.

Expected `index-theme.css` to include the component selectors with component-level custom properties mapped to the `--system` prefixed ones in order to allow a component to support various contexts.

Expected output example for the index-theme.css:

```
.spectrum-ActionButton {
 --spectrum-actionbutton-background-color-default: var(--system-action-button-background-color-default);
 --spectrum-actionbutton-background-color-hover: var(--system-action-button-background-color-hover);
```
