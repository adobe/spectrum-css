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
"@spectrum-css/page": major
"@spectrum-css/tabs": major
"@spectrum-css/tray": major
"@spectrum-css/well": major
"@spectrum-css/tag": major
---

## Breaking change

This major update creates a bridge between the Spectrum 1 (S1) and Spectrum 2 (S2) designs, dubbed "Spectrum 2 Foundations". These do _NOT_ reflect a fully migrated S2 component. This approach allows consumers to swap the appearance of their components between S1, Express, and S2 by leveraging a "system" layer that remaps the necessary component-level tokens to the appropriate token dataset.

For these components to appear S2, you must load the assets with the `@spectrum-css/tokens` at `v16` or higher.

For S1 or Express, load assets with the `@spectrum-css/tokens` at `v14.x` or `v15.x`.

If you are looking to implement a fully S2 design, please explore the `next` tag releases instead of using this foundations release. **This release is used in Spectrum Web Components 1.x**.

### Deprecations

The `metadata` folder containing the `mods.md` and `metadata.json` assets has been removed from source. To find information about the components including what selectors, modifiers, and passthroughs are used, please see the `dist/metadata.json` asset shipped with every component containing CSS.

The `index-vars.css` asset has been removed in this release as it was previously deprecated and is no longer maintained. Please use the `index.css` or `index-base.css`

### File usage

If you are rendering components and need **only** the S2 Foundations styles, you can make use of the `index.css` asset which contains all the base styles plus the system mappings for S2 Foundations.

If you are using this version to publish **only** an S1 or Express component, you can use the `index-base.css` plus the desired `themes/(spectrum|express).css` file.

To render a component that can be easily swapped between the S2 Foundations, S1, or Express contexts, load `index-base.css` with the `index-theme.css` file and leverage the appropriate context classes (`.spectrum--legacy` for S1 and `.spectrum--express` for Express).
