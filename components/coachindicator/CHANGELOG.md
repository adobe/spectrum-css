# Change Log

## 3.0.0

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`4be8da9`](https://github.com/adobe/spectrum-css/commit/4be8da99b49b67126017e3aa6b555f90ef2680fa) Thanks [@pfulton](https://github.com/pfulton)! - ## Breaking change

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

- Updated dependencies [[`4be8da9`](https://github.com/adobe/spectrum-css/commit/4be8da99b49b67126017e3aa6b555f90ef2680fa)]:
  - @spectrum-css/tokens@15.0.0

## 2.2.0

### Minor Changes

- [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)! - Remove the storybook assets from the shipped output for components

## 2.1.5

### Patch Changes

- [#3266](https://github.com/adobe/spectrum-css/pull/3266) [`4b818e1`](https://github.com/adobe/spectrum-css/commit/4b818e1062202e404de1350938ce2a19146aa0b0) Thanks [@5t3ph](https://github.com/5t3ph)! - For Coach indicator, marks "light" and "dark" variants for deprecation going into S2, and adds "static white" per direction from design.

- Updated dependencies [[`4b818e1`](https://github.com/adobe/spectrum-css/commit/4b818e1062202e404de1350938ce2a19146aa0b0)]:
  - @spectrum-css/tokens@14.6.0

## 2.1.4

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)! - Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

## 2.1.3

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)! - Improve changeset suggestions by using exports instead of files in component packages

## 2.1.2

### Patch Changes

- [#2842](https://github.com/adobe/spectrum-css/pull/2842) [`4cd3a15`](https://github.com/adobe/spectrum-css/commit/4cd3a15db914b667f5d606388051ecd2cd318134) Thanks [@castastrophe](https://github.com/castastrophe)! - Updated CSSNano plugin to toggle reduceIdent off to prevent invalid abstractions from breaking named grid templates.

## 2.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

## 2.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="2.0.0"></a>

## 2.0.0

🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachindicator@1.1.5...@spectrum-css/coachindicator@2.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="1.1.5"></a>

## 1.1.5

🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachindicator@1.1.4...@spectrum-css/coachindicator@1.1.5)

**Note:** Version bump only for package @spectrum-css/coachindicator

<a name="1.1.4"></a>

## 1.1.4

🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachindicator@1.1.3...@spectrum-css/coachindicator@1.1.4)

**Note:** Version bump only for package @spectrum-css/coachindicator

<a name="1.1.3"></a>

## 1.1.3

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachindicator@1.1.2...@spectrum-css/coachindicator@1.1.3)

**Note:** Version bump only for package @spectrum-css/coachindicator

<a name="1.1.2"></a>

## 1.1.2

🗓
2024-02-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachindicator@1.1.1...@spectrum-css/coachindicator@1.1.2)

### 🐛 Bug fixes

- **coachindicator:**address issues with coach indicator rings position ([#2483](https://github.com/adobe/spectrum-css/issues/2483))([9965188](https://github.com/adobe/spectrum-css/commit/9965188))

<a name="1.1.1"></a>

## 1.1.1

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/coachindicator

<a name="1.1.0"></a>

## 1.1.0

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachindicator@1.0.1...@spectrum-css/coachindicator@1.1.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="1.0.1"></a>

## 1.0.1

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachindicator@1.0.0...@spectrum-css/coachindicator@1.0.1)

**Note:** Version bump only for package @spectrum-css/coachindicator

<a name="1.0.0"></a>

## 1.0.0

🗓
2023-12-04

### ✨ Features

- **coachindicator:**adds new component([8794ddd](https://github.com/adobe/spectrum-css/commit/8794ddd))
