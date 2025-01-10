# Change Log

## 1.0.0

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`84cf190`](https://github.com/adobe/spectrum-css/commit/84cf19088872bc61c6a479281870eb9b2334e215) Thanks [@pfulton](https://github.com/pfulton)! - ## Breaking change

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

### Patch Changes

- Updated dependencies [[`84cf190`](https://github.com/adobe/spectrum-css/commit/84cf19088872bc61c6a479281870eb9b2334e215), [`84cf190`](https://github.com/adobe/spectrum-css/commit/84cf19088872bc61c6a479281870eb9b2334e215)]:
  - @spectrum-css/tokens@15.0.0
  - @spectrum-css/progressbar@5.0.0
