---
"@spectrum-css/floatingactionbutton": major
"@spectrum-css/opacitycheckerboard": major
"@spectrum-css/illustratedmessage": major
"@spectrum-css/coachindicator": major
"@spectrum-css/contextualhelp": major
"@spectrum-css/progresscircle": major
"@spectrum-css/dropindicator": major
"@spectrum-css/infieldbutton": major
"@spectrum-css/actionbutton": major
"@spectrum-css/pickerbutton": major
"@spectrum-css/actiongroup": major
"@spectrum-css/alertbanner": major
"@spectrum-css/alertdialog": major
"@spectrum-css/buttongroup": major
"@spectrum-css/clearbutton": major
"@spectrum-css/closebutton": major
"@spectrum-css/colorhandle": major
"@spectrum-css/colorslider": major
"@spectrum-css/inlinealert": major
"@spectrum-css/logicbutton": major
"@spectrum-css/progressbar": major
"@spectrum-css/statuslight": major
"@spectrum-css/swatchgroup": major
"@spectrum-css/actionmenu": major
"@spectrum-css/breadcrumb": major
"@spectrum-css/colorloupe": major
"@spectrum-css/colorwheel": major
"@spectrum-css/datepicker": major
"@spectrum-css/fieldgroup": major
"@spectrum-css/fieldlabel": major
"@spectrum-css/pagination": major
"@spectrum-css/typography": major
"@spectrum-css/accordion": major
"@spectrum-css/actionbar": major
"@spectrum-css/assetcard": major
"@spectrum-css/assetlist": major
"@spectrum-css/coachmark": major
"@spectrum-css/colorarea": major
"@spectrum-css/splitview": major
"@spectrum-css/textfield": major
"@spectrum-css/thumbnail": major
"@spectrum-css/calendar": major
"@spectrum-css/checkbox": major
"@spectrum-css/combobox": major
"@spectrum-css/dropzone": major
"@spectrum-css/helptext": major
"@spectrum-css/steplist": major
"@spectrum-css/taggroup": major
"@spectrum-css/treeview": major
"@spectrum-css/underlay": major
"@spectrum-css/commons": major
"@spectrum-css/divider": major
"@spectrum-css/popover": major
"@spectrum-css/sidenav": major
"@spectrum-css/stepper": major
"@spectrum-css/tooltip": major
"@spectrum-css/avatar": major
"@spectrum-css/button": major
"@spectrum-css/dialog": major
"@spectrum-css/miller": major
"@spectrum-css/picker": major
"@spectrum-css/rating": major
"@spectrum-css/search": major
"@spectrum-css/slider": major
"@spectrum-css/swatch": major
"@spectrum-css/switch": major
"@spectrum-css/asset": major
"@spectrum-css/badge": major
"@spectrum-css/meter": major
"@spectrum-css/modal": major
"@spectrum-css/radio": major
"@spectrum-css/table": major
"@spectrum-css/toast": major
"@spectrum-css/card": major
"@spectrum-css/dial": major
"@spectrum-css/form": major
"@spectrum-css/icon": major
"@spectrum-css/link": major
"@spectrum-css/menu": major
"@spectrum-css/tabs": major
"@spectrum-css/tray": major
"@spectrum-css/well": major
"@spectrum-css/tag": major
---

## Breaking change

Welcome Spectrum 2! This update introduces the Spectrum 2 design updates to all components while still maintaining support for Spectrum 1 and Express styles through the same `--system-*` theming layer used previously.

Though components in this update are not completely migrated to the new Spectrum 2 designs, this update introduces color palette updates, corner rounding changes, and a few remappings of component-level values to improve accessibility. Additional information regarding the migration can be found in the [documentation](.storybook/guides/s2_migration.mdx) or in it's [published form](https://pr-2786--spectrum-css.netlify.app/?path=/docs/guides-migration-guide--docs)

Expect all components to ship:

- `index.css`: A Spectrum 2 flavored version of the component with update colors and corner roundings. Does not support alternate themes, only Spectrum 2.
- `metadata.json`: A list of all selectors and available or used custom properties.

For components that require additional component-level mappings for theming, the following files will also be included:

- `index-base.css`: All styles for the component minus the variables used for theme switching (those defined in the `themes/spectrum-two.css` file for example).
- `index-theme.css`: All variables leveraged in theme switching, attached to the root class and mapped to their abstracted `--system` prefixed connector.
- `themes/spectrum-two.css`: All `--system` prefixed connectors required for theme switching, attached to the root class `.spectrum`.
- `themes/spectrum.css`: All `--system` prefixed connectors required for theme switching, attached to the root class `.spectrum--legacy`.
- `themes/express.css`: All `--system` prefixed connectors required for theme switching, attached to the root class `.spectrum--express`.

**Deprecated**: `index-vars.css` was deprecated and is no longer shipped in this release. Additionally, the `metadata/mods.md` asset has been removed in favor of the data being shipped in `metadata.json`.

### New components

Welcome `@spectrum-css/form`! Form styles extracted out of the `@spectrum-css/fieldlabel` component.

Welcome `@spectrum-css/meter`! Meter styles extracted out of the `@spectrum-css/progressbar` component.
