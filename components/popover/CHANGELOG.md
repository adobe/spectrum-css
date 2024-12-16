# Change Log

## 8.0.0-next.0

### Patch Changes

- Updated dependencies [[`bd934cc`](https://github.com/adobe/spectrum-css/commit/bd934cc9a5a43b2d453710d462a1faaa5046de08), [`bd934cc`](https://github.com/adobe/spectrum-css/commit/bd934cc9a5a43b2d453710d462a1faaa5046de08)]:
  - @spectrum-css/tokens@14.0.0-next.10
  - @spectrum-css/dialog@11.0.0-next.0
  - @spectrum-css/alertdialog@2.1.1-next.0
  - @spectrum-css/menu@8.0.0-next.0

## 8.0.1

### Patch Changes

- [#3534](https://github.com/adobe/spectrum-css/pull/3534) [`68e0057`](https://github.com/adobe/spectrum-css/commit/68e00577156cc32b21bfa768dbd2d35d73563b4c) Thanks [@castastrophe](https://github.com/castastrophe)! - Fixes a bug in the content of the `dist/index-theme.css` file.

  Expected `index-theme.css` to include the component selectors with component-level custom properties mapped to the `--system` prefixed ones in order to allow a component to support various contexts.

  Expected output example for the index-theme.css:

  ```
  .spectrum-ActionButton {
   --spectrum-actionbutton-background-color-default: var(--system-action-button-background-color-default);
   --spectrum-actionbutton-background-color-hover: var(--system-action-button-background-color-hover);
  ```

- Updated dependencies [[`68e0057`](https://github.com/adobe/spectrum-css/commit/68e00577156cc32b21bfa768dbd2d35d73563b4c)]:
  - @spectrum-css/alertdialog@4.0.1
  - @spectrum-css/dialog@12.0.1
  - @spectrum-css/divider@5.0.1
  - @spectrum-css/menu@9.0.1

## 8.0.0

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6) Thanks [@pfulton](https://github.com/pfulton)! - ## Breaking change

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

### Patch Changes

- Updated dependencies [[`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6), [`88bfc5b`](https://github.com/adobe/spectrum-css/commit/88bfc5bd7a8de3151ef774dc483aa6a829cb7dd0), [`3d08cea`](https://github.com/adobe/spectrum-css/commit/3d08cea0f590c8c2de7252677a6b81b8cc206b9a), [`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6)]:
  - @spectrum-css/tokens@16.0.0
  - @spectrum-css/menu@9.0.0
  - @spectrum-css/alertdialog@4.0.0
  - @spectrum-css/divider@5.0.0
  - @spectrum-css/dialog@12.0.0

## 7.3.1

### Patch Changes

- [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)! - Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/alertdialog@3.0.1
  - @spectrum-css/divider@4.0.1
  - @spectrum-css/dialog@11.0.1
  - @spectrum-css/menu@8.0.1

## 7.3.0

### Minor Changes

- [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)! - Simplify how the `--system` properties are mapped. By updating the logic in the `postcss-add-theming-layer`, we are now shipping cleaner, more readable `--system` property names. These custom properties are documented as _NOT_ a part of the component API so although these result in a change to the custom property names, it does not impact the properties that are in the API and so do not constitute a breaking change. Expect to see no change to how component theming works or any visual regressions as a result of this change.

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/alertdialog@3.0.0
  - @spectrum-css/divider@4.0.0
  - @spectrum-css/dialog@11.0.0
  - @spectrum-css/menu@8.0.0

## 7.2.0

### Minor Changes

- [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)! - Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/alertdialog@2.2.0
  - @spectrum-css/divider@3.2.0
  - @spectrum-css/dialog@10.2.0
  - @spectrum-css/menu@7.2.0

## 7.1.6

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)! - Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/alertdialog@2.1.3
  - @spectrum-css/divider@3.1.3
  - @spectrum-css/dialog@10.1.4
  - @spectrum-css/menu@7.1.7

## 7.1.5

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)! - Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/alertdialog@2.1.2
  - @spectrum-css/divider@3.1.2
  - @spectrum-css/dialog@10.1.3
  - @spectrum-css/menu@7.1.6

## 7.1.4

### Patch Changes

- [#2982](https://github.com/adobe/spectrum-css/pull/2982) [`dffdefa`](https://github.com/adobe/spectrum-css/commit/dffdefaa1ffc39fbf7706e218d261da3a02695b5) Thanks [@castastrophe](https://github.com/castastrophe)! - Remove internal-only --flow-direction variable

## 7.1.3

### Patch Changes

- [#2753](https://github.com/adobe/spectrum-css/pull/2753) [`54faea2`](https://github.com/adobe/spectrum-css/commit/54faea263520857397784d02708ba3b2ff2f9a50) Thanks [@mdt2](https://github.com/mdt2)! - fix(popover): correct left/right tips for RTL

  Includes exposing Start and End tip placement variants in Storybook, and increased VRT coverage for Chromatic.

## 7.1.2

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/alertdialog@2.1.1
  - @spectrum-css/divider@3.1.1
  - @spectrum-css/dialog@10.1.1
  - @spectrum-css/menu@7.1.2

## 7.1.1

### Patch Changes

- [#2745](https://github.com/adobe/spectrum-css/pull/2745) [`2c13cdc`](https://github.com/adobe/spectrum-css/commit/2c13cdc5acdf58fa9622c37cc380abedd596af0f) Thanks [@mdt2](https://github.com/mdt2)! - fix(popover): Adjust selectors to remove duplicate class selectors in the dist output

## 7.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/alertdialog@>=2
  - @spectrum-css/dialog@>=10
  - @spectrum-css/divider@>=3
  - @spectrum-css/menu@>=7
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="7.0.0"></a>

## 7.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.2.5...@spectrum-css/popover@7.0.0)

### ✨ Features

\*use storybook v8 ([#2604](https://github.com/adobe/spectrum-css/issues/2604))([166ab23](https://github.com/adobe/spectrum-css/commit/166ab23))

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGES

- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="6.2.5"></a>

## 6.2.5

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.2.4...@spectrum-css/popover@6.2.5)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.2.4"></a>

## 6.2.4

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.2.3...@spectrum-css/popover@6.2.4)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.2.3"></a>

## 6.2.3

🗓 2024-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.2.2...@spectrum-css/popover@6.2.3)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.2.2"></a>

## 6.2.2

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.2.1...@spectrum-css/popover@6.2.2)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.2.1"></a>

## 6.2.1

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.2.0"></a>

## 6.2.0

🗓 2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.1.0...@spectrum-css/popover@6.2.0)

### ✨ Features

_migrate build packages to postcss v8 ([#2460](https://github.com/adobe/spectrum-css/issues/2460))([bd6c40e](https://github.com/adobe/spectrum-css/commit/bd6c40e))_
**overlay,commons:**deprecate overlay; migrate references to commons ([#2429](https://github.com/adobe/spectrum-css/issues/2429))([7eecd96](https://github.com/adobe/spectrum-css/commit/7eecd96))

<a name="6.1.0"></a>

## 6.1.0

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.84...@spectrum-css/popover@6.1.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="6.0.84"></a>

## 6.0.84

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.83...@spectrum-css/popover@6.0.84)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.83"></a>

## 6.0.83

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.82...@spectrum-css/popover@6.0.83)

### 🐛 Bug fixes

- **popover:**animation transform defined in popover instead of inherited([94077a6](https://github.com/adobe/spectrum-css/commit/94077a6))_
  **popover:**nested storybook example is open, static ([#2314](https://github.com/adobe/spectrum-css/issues/2314))([dbca3e7](https://github.com/adobe/spectrum-css/commit/dbca3e7))_
  **popover:**offset from source, animation distance matches spec([632c668](https://github.com/adobe/spectrum-css/commit/632c668))

<a name="6.0.82"></a>

## 6.0.82

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.80...@spectrum-css/popover@6.0.82)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.81"></a>

## 6.0.81

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.80...@spectrum-css/popover@6.0.81)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.80"></a>

## 6.0.80

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.79...@spectrum-css/popover@6.0.80)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.79"></a>

## 6.0.79

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.78...@spectrum-css/popover@6.0.79)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.78"></a>

## 6.0.78

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.77...@spectrum-css/popover@6.0.78)

### 🐛 Bug fixes

- **popover:**correct use of alert dialog with in popover ([#2179](https://github.com/adobe/spectrum-css/issues/2179))([39e9f04](https://github.com/adobe/spectrum-css/commit/39e9f04))

<a name="6.0.77"></a>

## 6.0.77

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.76...@spectrum-css/popover@6.0.77)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.76"></a>

## 6.0.76

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.75...@spectrum-css/popover@6.0.76)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.75"></a>

## 6.0.75

🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.74...@spectrum-css/popover@6.0.75)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.74"></a>

## 6.0.74

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.73...@spectrum-css/popover@6.0.74)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.73"></a>

## 6.0.73

🗓 2023-09-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.72...@spectrum-css/popover@6.0.73)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.72"></a>

## 6.0.72

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.71...@spectrum-css/popover@6.0.72)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.71"></a>

## 6.0.71

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.70...@spectrum-css/popover@6.0.71)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.70"></a>

## 6.0.70

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.69...@spectrum-css/popover@6.0.70)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="6.0.69"></a>

## 6.0.69

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.68...@spectrum-css/popover@6.0.69)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.68"></a>

## 6.0.68

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.66...@spectrum-css/popover@6.0.68)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.67"></a>

## 6.0.67

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.66...@spectrum-css/popover@6.0.67)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.66"></a>

## 6.0.66

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.65...@spectrum-css/popover@6.0.66)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.65"></a>

## 6.0.65

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.64...@spectrum-css/popover@6.0.65)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.64"></a>

## 6.0.64

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.63...@spectrum-css/popover@6.0.64)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.63"></a>

## 6.0.63

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.62...@spectrum-css/popover@6.0.63)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.62"></a>

## 6.0.62

🗓 2023-07-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.61...@spectrum-css/popover@6.0.62)

### 🐛 Bug fixes

- **popover:**add highcontrast variables and additional height in docs([930e29f](https://github.com/adobe/spectrum-css/commit/930e29f))

<a name="6.0.61"></a>

## 6.0.61

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.60...@spectrum-css/popover@6.0.61)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.60"></a>

## 6.0.60

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.59...@spectrum-css/popover@6.0.60)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.59"></a>

## 6.0.59

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.58...@spectrum-css/popover@6.0.59)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.58"></a>

## 6.0.58

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.57...@spectrum-css/popover@6.0.58)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.57"></a>

## 6.0.57

🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.56...@spectrum-css/popover@6.0.57)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.56"></a>

## 6.0.56

🗓 2023-06-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.55...@spectrum-css/popover@6.0.56)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.55"></a>

## 6.0.55

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.54...@spectrum-css/popover@6.0.55)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.54"></a>

## 6.0.54

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.53...@spectrum-css/popover@6.0.54)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.53"></a>

## 6.0.53

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.52...@spectrum-css/popover@6.0.53)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="6.0.52"></a>

## 6.0.52

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.51...@spectrum-css/popover@6.0.52)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.51"></a>

## 6.0.51

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.50...@spectrum-css/popover@6.0.51)

### 🐛 Bug fixes

- **popover:**keep nested drop shadows from affecting the other ([#1909](https://github.com/adobe/spectrum-css/issues/1909))([f5c206d](https://github.com/adobe/spectrum-css/commit/f5c206d))

<a name="6.0.50"></a>

## 6.0.50

🗓 2023-05-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.49...@spectrum-css/popover@6.0.50)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.49"></a>

## 6.0.49

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.48...@spectrum-css/popover@6.0.49)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.48"></a>

## 6.0.48

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.47...@spectrum-css/popover@6.0.48)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.47"></a>

## 6.0.47

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.46...@spectrum-css/popover@6.0.47)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.46"></a>

## 6.0.46

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.45...@spectrum-css/popover@6.0.46)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.45"></a>

## 6.0.45

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.44...@spectrum-css/popover@6.0.45)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.44"></a>

## 6.0.44

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.43...@spectrum-css/popover@6.0.44)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.43"></a>

## 6.0.43

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.42...@spectrum-css/popover@6.0.43)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.42"></a>

## 6.0.42

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.41...@spectrum-css/popover@6.0.42)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.41"></a>

## 6.0.41

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.40...@spectrum-css/popover@6.0.41)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.40"></a>

## 6.0.40

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.39...@spectrum-css/popover@6.0.40)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.39"></a>

## 6.0.39

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.38...@spectrum-css/popover@6.0.39)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.38"></a>

## 6.0.38

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.37...@spectrum-css/popover@6.0.38)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.37"></a>

## 6.0.37

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.35...@spectrum-css/popover@6.0.37)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.36"></a>

## 6.0.36

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.35...@spectrum-css/popover@6.0.36)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.35"></a>

## 6.0.35

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.34...@spectrum-css/popover@6.0.35)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.34"></a>

## 6.0.34

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.33...@spectrum-css/popover@6.0.34)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.33"></a>

## 6.0.33

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.32...@spectrum-css/popover@6.0.33)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.32"></a>

## 6.0.32

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.31...@spectrum-css/popover@6.0.32)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.31"></a>

## 6.0.31

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.29...@spectrum-css/popover@6.0.31)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.30"></a>

## 6.0.30

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.29...@spectrum-css/popover@6.0.30)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.29"></a>

## 6.0.29

🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.27...@spectrum-css/popover@6.0.29)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.28"></a>

## 6.0.28

🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.27...@spectrum-css/popover@6.0.28)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.27"></a>

## 6.0.27

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.26...@spectrum-css/popover@6.0.27)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.26"></a>

## 6.0.26

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.25...@spectrum-css/popover@6.0.26)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.25"></a>

## 6.0.25

🗓 2023-03-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.24...@spectrum-css/popover@6.0.25)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.24"></a>

## 6.0.24

🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.23...@spectrum-css/popover@6.0.24)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.23"></a>

## 6.0.23

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.22...@spectrum-css/popover@6.0.23)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.22"></a>

## 6.0.22

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.21...@spectrum-css/popover@6.0.22)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.21"></a>

## 6.0.21

🗓 2023-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.20...@spectrum-css/popover@6.0.21)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.20"></a>

## 6.0.20

🗓 2023-03-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.19...@spectrum-css/popover@6.0.20)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.19"></a>

## 6.0.19

🗓 2023-02-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.18...@spectrum-css/popover@6.0.19)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.18"></a>

## 6.0.18

🗓 2023-02-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.17...@spectrum-css/popover@6.0.18)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.17"></a>

## 6.0.17

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.16...@spectrum-css/popover@6.0.17)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.16"></a>

## 6.0.16

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.15...@spectrum-css/popover@6.0.16)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.15"></a>

## 6.0.15

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.14...@spectrum-css/popover@6.0.15)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.14"></a>

## 6.0.14

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.13...@spectrum-css/popover@6.0.14)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.13"></a>

## 6.0.13

🗓 2023-01-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.12...@spectrum-css/popover@6.0.13)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.12"></a>

## 6.0.12

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.11...@spectrum-css/popover@6.0.12)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.11"></a>

## 6.0.11

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.10...@spectrum-css/popover@6.0.11)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.10"></a>

## 6.0.10

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.8...@spectrum-css/popover@6.0.10)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.9"></a>

## 6.0.9

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.8...@spectrum-css/popover@6.0.9)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.8"></a>

## 6.0.8

🗓 2023-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.7...@spectrum-css/popover@6.0.8)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.7"></a>

## 6.0.7

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.6...@spectrum-css/popover@6.0.7)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.6"></a>

## 6.0.6

🗓 2022-12-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.5...@spectrum-css/popover@6.0.6)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.5"></a>

## 6.0.5

🗓 2022-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.3...@spectrum-css/popover@6.0.5)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.4"></a>

## 6.0.4

🗓 2022-12-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.3...@spectrum-css/popover@6.0.4)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.3"></a>

## 6.0.3

🗓 2022-12-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.2...@spectrum-css/popover@6.0.3)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.2"></a>

## 6.0.2

🗓 2022-11-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.1...@spectrum-css/popover@6.0.2)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.1"></a>

## 6.0.1

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@6.0.0...@spectrum-css/popover@6.0.1)

**Note:** Version bump only for package @spectrum-css/popover

<a name="6.0.0"></a>

## 6.0.0

🗓 2022-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@5.0.18...@spectrum-css/popover@6.0.0)

- refactor(popover)!: migrate to core tokens (#1509) ([011e486](https://github.com/adobe/spectrum-css/commit/011e486)), closes [#1509](https://github.com/adobe/spectrum-css/issues/1509)

### 🛑 BREAKING CHANGES

- migrates popover to core tokens

Co-authored-by: Garth Braithwaite <garthdb@gmail.com>
Co-authored-by: Patrick Fulton <pfulton@adobe.com>

<a name="5.0.18"></a>

## 5.0.18

🗓 2022-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@5.0.17...@spectrum-css/popover@5.0.18)

**Note:** Version bump only for package @spectrum-css/popover

<a name="5.0.17"></a>

## 5.0.17

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@5.0.15...@spectrum-css/popover@5.0.17)

**Note:** Version bump only for package @spectrum-css/popover

<a name="5.0.16"></a>

## 5.0.16

🗓 2022-06-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@5.0.15...@spectrum-css/popover@5.0.16)

**Note:** Version bump only for package @spectrum-css/popover

<a name="5.0.15"></a>

## 5.0.15

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@5.0.14...@spectrum-css/popover@5.0.15)

**Note:** Version bump only for package @spectrum-css/popover

<a name="5.0.14"></a>

## 5.0.14

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@5.0.13...@spectrum-css/popover@5.0.14)

**Note:** Version bump only for package @spectrum-css/popover

<a name="5.0.13"></a>

## 5.0.13

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@5.0.12...@spectrum-css/popover@5.0.13)

**Note:** Version bump only for package @spectrum-css/popover

<a name="5.0.12"></a>

## 5.0.12

🗓 2022-04-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@5.0.11...@spectrum-css/popover@5.0.12)

**Note:** Version bump only for package @spectrum-css/popover

<a name="5.0.11"></a>

## 5.0.11

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@5.0.10...@spectrum-css/popover@5.0.11)

**Note:** Version bump only for package @spectrum-css/popover

<a name="5.0.10"></a>

## 5.0.10

🗓 2022-03-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@5.0.9...@spectrum-css/popover@5.0.10)

**Note:** Version bump only for package @spectrum-css/popover

<a name="5.0.9"></a>

## 5.0.9

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@5.0.8...@spectrum-css/popover@5.0.9)

**Note:** Version bump only for package @spectrum-css/popover

<a name="5.0.8"></a>

## 5.0.8

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@5.0.7...@spectrum-css/popover@5.0.8)

**Note:** Version bump only for package @spectrum-css/popover

<a name="5.0.7"></a>

## 5.0.7

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@5.0.6...@spectrum-css/popover@5.0.7)

**Note:** Version bump only for package @spectrum-css/popover

<a name="5.0.6"></a>

## 5.0.6

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@5.0.5...@spectrum-css/popover@5.0.6)

**Note:** Version bump only for package @spectrum-css/popover

<a name="5.0.5"></a>

## 5.0.5

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@5.0.4...@spectrum-css/popover@5.0.5)

**Note:** Version bump only for package @spectrum-css/popover

<a name="5.0.4"></a>

## 5.0.4

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@5.0.3...@spectrum-css/popover@5.0.4)

**Note:** Version bump only for package @spectrum-css/popover

<a name="5.0.3"></a>

## 5.0.3

🗓 2022-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@5.0.2...@spectrum-css/popover@5.0.3)

**Note:** Version bump only for package @spectrum-css/popover

<a name="5.0.2"></a>

## 5.0.2

🗓 2022-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@5.0.1...@spectrum-css/popover@5.0.2)

**Note:** Version bump only for package @spectrum-css/popover

<a name="5.0.1"></a>

## 5.0.1

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@5.0.0...@spectrum-css/popover@5.0.1)

**Note:** Version bump only for package @spectrum-css/popover

<a name="5.0.0"></a>

## 5.0.0

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.11...@spectrum-css/popover@5.0.0)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

### 📚 Documentation

- use new Button markup ([886b2cb](https://github.com/adobe/spectrum-css/commit/886b2cb))

### 🛑 BREAKING CHANGES

- Button markup has changed

<a name="4.0.0"></a>

## 4.0.0

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@4.0.0-beta.0...@spectrum-css/popover@4.0.0)

**Note:** Version bump only for package @spectrum-css/popover

<a name="4.0.0-beta.0"></a>

## 4.0.0-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.11...@spectrum-css/popover@4.0.0-beta.0)

### 📚 Documentation

- use new Button markup ([629bf05](https://github.com/adobe/spectrum-css/commit/629bf05))

### 🛑 BREAKING CHANGES

- Button markup has changed

<a name="3.0.11"></a>

## 3.0.11

🗓 2021-12-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.10...@spectrum-css/popover@3.0.11)

**Note:** Version bump only for package @spectrum-css/popover

<a name="3.0.10"></a>

## 3.0.10

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.9...@spectrum-css/popover@3.0.10)

**Note:** Version bump only for package @spectrum-css/popover

<a name="3.0.9"></a>

## 3.0.9

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.8...@spectrum-css/popover@3.0.9)

**Note:** Version bump only for package @spectrum-css/popover

<a name="3.0.8"></a>

## 3.0.8

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.7...@spectrum-css/popover@3.0.8)

**Note:** Version bump only for package @spectrum-css/popover

<a name="3.0.7"></a>

## 3.0.7

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.6...@spectrum-css/popover@3.0.7)

**Note:** Version bump only for package @spectrum-css/popover

<a name="3.0.6"></a>

## 3.0.6

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.4...@spectrum-css/popover@3.0.6)

**Note:** Version bump only for package @spectrum-css/popover

<a name="3.0.5"></a>

## 3.0.5

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.4...@spectrum-css/popover@3.0.5)

**Note:** Version bump only for package @spectrum-css/popover

<a name="3.0.3"></a>

## 3.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.3-alpha.5...@spectrum-css/popover@3.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="3.0.3-alpha.5"></a>

## 3.0.3-alpha.5

🗓 2021-08-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.3-alpha.4...@spectrum-css/popover@3.0.3-alpha.5)

**Note:** Version bump only for package @spectrum-css/popover

<a name="3.0.3-alpha.4"></a>

## 3.0.3-alpha.4

🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.3-alpha.3...@spectrum-css/popover@3.0.3-alpha.4)

**Note:** Version bump only for package @spectrum-css/popover

<a name="3.0.3-alpha.3"></a>

## 3.0.3-alpha.3

🗓 2021-07-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.3-alpha.2...@spectrum-css/popover@3.0.3-alpha.3)

**Note:** Version bump only for package @spectrum-css/popover

<a name="3.0.3-alpha.2"></a>

## 3.0.3-alpha.2

🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.3-alpha.1...@spectrum-css/popover@3.0.3-alpha.2)

**Note:** Version bump only for package @spectrum-css/popover

<a name="3.0.3-alpha.1"></a>

## 3.0.3-alpha.1

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.3-alpha.0...@spectrum-css/popover@3.0.3-alpha.1)

**Note:** Version bump only for package @spectrum-css/popover

<a name="3.0.3-alpha.0"></a>

## 3.0.3-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.2...@spectrum-css/popover@3.0.3-alpha.0)

**Note:** Version bump only for package @spectrum-css/popover

<a name="3.0.2"></a>

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.1...@spectrum-css/popover@3.0.2)

**Note:** Version bump only for package @spectrum-css/popover

<a name="3.0.1"></a>

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.0...@spectrum-css/popover@3.0.1)

**Note:** Version bump only for package @spectrum-css/popover

<a name="3.0.0"></a>

## 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.0-beta.6...@spectrum-css/popover@3.0.0)

**Note:** Version bump only for package @spectrum-css/popover

<a name="3.0.0-beta.6"></a>

## 3.0.0-beta.6

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.0-beta.5...@spectrum-css/popover@3.0.0-beta.6)

### ✨ Features

- implement t-shirt sizing for Divider, closes [#972](https://github.com/adobe/spectrum-css/issues/972) ([bb10aa9](https://github.com/adobe/spectrum-css/commit/bb10aa9))

### 🐛 Bug fixes

- update main, resolved conflicts ([d7880a2](https://github.com/adobe/spectrum-css/commit/d7880a2))
- use new Button markup ([502a1b0](https://github.com/adobe/spectrum-css/commit/502a1b0))

### 🛑 BREAKING CHANGES

- .spectrum-Divider--size\* is now required
- .spectrum-Divider--small is now .spectrum-Divider--sizeS, .spectrum-Divider--medium is now .spectrum-Divider--sizeM, .spectrum-Divider--large is now .spectrum-Divider--sizeL
- markup has changed and now requires new Button markup (.spectrum-Button--sizeM)

<a name="3.0.0-beta.5"></a>

## 3.0.0-beta.5

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.0-beta.4...@spectrum-css/popover@3.0.0-beta.5)

**Note:** Version bump only for package @spectrum-css/popover

<a name="3.0.0-beta.4"></a>

## 3.0.0-beta.4

🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.0-beta.3...@spectrum-css/popover@3.0.0-beta.4)

### ✨ Features

- RSP V3 Dialog ([#710](https://github.com/adobe/spectrum-css/issues/710)) ([33d6638](https://github.com/adobe/spectrum-css/commit/33d6638)), closes [rsp-v3#517](https://github.com/rsp-v3/issues/517)

### 🐛 Bug fixes

- fix the issues caused by component rename ([#778](https://github.com/adobe/spectrum-css/issues/778)) ([e1d180c](https://github.com/adobe/spectrum-css/commit/e1d180c))

<a name="3.0.0-beta.3"></a>

## 3.0.0-beta.3

🗓 2020-06-19 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.0-beta.2...@spectrum-css/popover@3.0.0-beta.3)

**Note:** Version bump only for package @spectrum-css/popover

<a name="3.0.0-beta.2"></a>

## 3.0.0-beta.2

🗓 2020-05-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.0-beta.1...@spectrum-css/popover@3.0.0-beta.2)

**Note:** Version bump only for package @spectrum-css/popover

<a name="3.0.0-beta.1"></a>

## 3.0.0-beta.1

🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@3.0.0-beta.0...@spectrum-css/popover@3.0.0-beta.1)

**Note:** Version bump only for package @spectrum-css/popover

<a name="3.0.0-beta.0"></a>

## 3.0.0-beta.0

🗓 2020-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@2.0.6...@spectrum-css/popover@3.0.0-beta.0)

### ✨ Features

- make Popover support RTL ([0c25f17](https://github.com/adobe/spectrum-css/commit/0c25f17))

<a name="2.0.6"></a>

## 2.0.6

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@2.0.5...@spectrum-css/popover@2.0.6)

**Note:** Version bump only for package @spectrum-css/popover

<a name="2.0.5"></a>

## 2.0.5

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@2.0.4...@spectrum-css/popover@2.0.5)

### 🐛 Bug fixes

- correct error Dialog icon position and wrapping fixes [#492](https://github.com/adobe/spectrum-css/issues/492), fixes [#464](https://github.com/adobe/spectrum-css/issues/464) ([#520](https://github.com/adobe/spectrum-css/issues/520)) ([1d56fd9](https://github.com/adobe/spectrum-css/commit/1d56fd9))

<a name="2.0.4"></a>

## 2.0.4

🗓 2020-01-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@2.0.3...@spectrum-css/popover@2.0.4)

**Note:** Version bump only for package @spectrum-css/popover

<a name="2.0.3"></a>

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@2.0.2...@spectrum-css/popover@2.0.3)

**Note:** Version bump only for package @spectrum-css/popover

<a name="2.0.2"></a>

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@2.0.1...@spectrum-css/popover@2.0.2)

**Note:** Version bump only for package @spectrum-css/popover

<a name="2.0.1"></a>

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/popover@2.0.0...@spectrum-css/popover@2.0.1)

**Note:** Version bump only for package @spectrum-css/popover

<a name="2.0.0"></a>

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
