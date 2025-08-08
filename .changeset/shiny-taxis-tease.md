---
"@spectrum-css/actionbutton": major
"@spectrum-css/colorslider": major
"@spectrum-css/progressbar": major
"@spectrum-css/breadcrumb": major
"@spectrum-css/colorloupe": major
"@spectrum-css/colorwheel": major
"@spectrum-css/pagination": major
"@spectrum-css/accordion": major
"@spectrum-css/assetlist": major
"@spectrum-css/colorarea": major
"@spectrum-css/calendar": major
"@spectrum-css/combobox": major
"@spectrum-css/steplist": major
"@spectrum-css/treeview": major
"@spectrum-css/popover": major
"@spectrum-css/tooltip": major
"@spectrum-css/slider": major
"@spectrum-css/switch": major
"@spectrum-css/radio": major
"@spectrum-css/table": major
"@spectrum-css/menu": major
"@spectrum-css/tabs": major
---

This update removes the `dir` attribute polyfill (served via a PostCSS transform to compiled assets) as the fallback is no longer necessary. The`dir` attribute support is available in all supported browsers and has been tested to correctly inherit inside web component shadow DOMs. This is a breaking change **only** to those relying on the `dir` attribute being present for styling, however, the `:dir` pseudo will correctly inherit values from their containers. To correctly determine the `dir` value of a node using JavaScript, you can use `getComputedStyle(node).direction`.
