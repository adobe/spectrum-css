# Change Log

## 9.0.1

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
  - @spectrum-css/helptext@7.0.1
  - @spectrum-css/icon@9.0.1
  - @spectrum-css/menu@9.0.1
  - @spectrum-css/popover@8.0.1
  - @spectrum-css/progresscircle@5.0.1

## 9.0.0

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
  - @spectrum-css/progresscircle@5.0.0
  - @spectrum-css/helptext@7.0.0
  - @spectrum-css/popover@8.0.0
  - @spectrum-css/icon@9.0.0

## 8.4.1

### Patch Changes

- [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)! - Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/progresscircle@4.0.1
  - @spectrum-css/helptext@6.0.1
  - @spectrum-css/popover@7.3.1
  - @spectrum-css/icon@8.0.1
  - @spectrum-css/menu@8.0.1

## 8.4.0

### Minor Changes

- [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)! - Simplify how the `--system` properties are mapped. By updating the logic in the `postcss-add-theming-layer`, we are now shipping cleaner, more readable `--system` property names. These custom properties are documented as _NOT_ a part of the component API so although these result in a change to the custom property names, it does not impact the properties that are in the API and so do not constitute a breaking change. Expect to see no change to how component theming works or any visual regressions as a result of this change.

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/progresscircle@4.0.0
  - @spectrum-css/helptext@6.0.0
  - @spectrum-css/icon@8.0.0
  - @spectrum-css/menu@8.0.0
  - @spectrum-css/popover@7.3.0

## 8.3.0

### Minor Changes

- [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)! - Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/progresscircle@3.2.0
  - @spectrum-css/helptext@5.2.0
  - @spectrum-css/popover@7.2.0
  - @spectrum-css/icon@7.2.0
  - @spectrum-css/menu@7.2.0

## 8.2.0

### Minor Changes

- [#3220](https://github.com/adobe/spectrum-css/pull/3220) [`b28e1d4`](https://github.com/adobe/spectrum-css/commit/b28e1d4bae705c014134fd66310ada32ef17cf65) Thanks [@cdransf](https://github.com/cdransf)! - Applies flex-shrink to validation icons to prevent icon from resizing when label is long enough to be truncated.

## 8.1.6

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)! - Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/progresscircle@3.1.4
  - @spectrum-css/helptext@5.1.3
  - @spectrum-css/popover@7.1.6
  - @spectrum-css/icon@7.1.4
  - @spectrum-css/menu@7.1.7

## 8.1.5

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)! - Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/progresscircle@3.1.3
  - @spectrum-css/helptext@5.1.2
  - @spectrum-css/popover@7.1.5
  - @spectrum-css/icon@7.1.3
  - @spectrum-css/menu@7.1.6

## 8.1.4

### Patch Changes

- [#2914](https://github.com/adobe/spectrum-css/pull/2914) [`3c3e7da`](https://github.com/adobe/spectrum-css/commit/3c3e7dadf4094a18e175b8bfefee01866172a4d4) Thanks [@rise-erpelding](https://github.com/rise-erpelding)! - Changes picker margin to padding in order to accommodate text with diacritics that may be cut off vertically.

## 8.1.3

### Patch Changes

- [#2737](https://github.com/adobe/spectrum-css/pull/2737) [`3278f88`](https://github.com/adobe/spectrum-css/commit/3278f885f8e76962d41bc2452be4069e7a263060) Thanks [@jawinn](https://github.com/jawinn)! - Fixes an issue where colors could change when hovering over the Picker in the disabled state and disabled + invalid state.

## 8.1.2

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/progresscircle@3.1.1
  - @spectrum-css/helptext@5.1.1
  - @spectrum-css/popover@7.1.2
  - @spectrum-css/icon@7.1.1
  - @spectrum-css/menu@7.1.2

## 8.1.1

### Patch Changes

- [#2740](https://github.com/adobe/spectrum-css/pull/2740) [`c0dd6a4`](https://github.com/adobe/spectrum-css/commit/c0dd6a443b410f37f3dc703d75e11c15519fd93e) Thanks [@jawinn](https://github.com/jawinn)! - Build change to remove the `postcss-preset-env` polyfill for the dist output of `:not` selectors containing multiple selectors, to avoid an unintended increase in specificity, which caused some visual regressions.

## 8.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/helptext@>=5
  - @spectrum-css/icon@>=7
  - @spectrum-css/menu@>=7
  - @spectrum-css/popover@>=7
  - @spectrum-css/progresscircle@>=3
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="8.0.0"></a>

## 8.0.0

🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.2.7...@spectrum-css/picker@8.0.0)

### ✨ Features

\*use storybook v8 ([#2604](https://github.com/adobe/spectrum-css/issues/2604))([166ab23](https://github.com/adobe/spectrum-css/commit/166ab23))

### 🐛 Bug fixes

-     **logicbutton,picker:**add missing commons devDep ([#2631](https://github.com/adobe/spectrum-css/issues/2631))([49057ca](https://github.com/adobe/spectrum-css/commit/49057ca))*
      **picker:**spinner position in RTL direction ([#2567](https://github.com/adobe/spectrum-css/issues/2567))([770fd5a](https://github.com/adobe/spectrum-css/commit/770fd5a))

  \*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

      	###
      	🛑 BREAKING CHANGES

      		*
      		- Removes component-builder & component-builder-simple for script leveraging postcss

* Imports added to index.css and themes/express.css

<a name="7.2.7"></a>

## 7.2.7

🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.2.6...@spectrum-css/picker@7.2.7)

**Note:** Version bump only for package @spectrum-css/picker

<a name="7.2.6"></a>

## 7.2.6

🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.2.5...@spectrum-css/picker@7.2.6)

**Note:** Version bump only for package @spectrum-css/picker

<a name="7.2.5"></a>

## 7.2.5

🗓
2024-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.2.4...@spectrum-css/picker@7.2.5)

**Note:** Version bump only for package @spectrum-css/picker

<a name="7.2.4"></a>

## 7.2.4

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.2.3...@spectrum-css/picker@7.2.4)

**Note:** Version bump only for package @spectrum-css/picker

<a name="7.2.3"></a>

## 7.2.3

🗓
2024-02-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.2.2...@spectrum-css/picker@7.2.3)

### 🐛 Bug fixes

- **picker:**quiet side label picker positioning ([#2465](https://github.com/adobe/spectrum-css/issues/2465))([537f0b8](https://github.com/adobe/spectrum-css/commit/537f0b8))

<a name="7.2.2"></a>

## 7.2.2

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/picker

<a name="7.2.1"></a>

## 7.2.1

🗓
2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.2.0...@spectrum-css/picker@7.2.1)

**Note:** Version bump only for package @spectrum-css/picker

<a name="7.2.0"></a>

## 7.2.0

🗓
2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.1.0...@spectrum-css/picker@7.2.0)

**Note:** Version bump only for package @spectrum-css/picker

<a name="7.1.0"></a>

## 7.1.0

🗓
2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.0.19...@spectrum-css/picker@7.1.0)

### ✨ Features

- **overlay,commons:**deprecate overlay; migrate references to commons ([#2429](https://github.com/adobe/spectrum-css/issues/2429))([7eecd96](https://github.com/adobe/spectrum-css/commit/7eecd96))

### 🐛 Bug fixes

- **commons:**rename and deprecate mods referencing global tokens ([#2423](https://github.com/adobe/spectrum-css/issues/2423))([3a49432](https://github.com/adobe/spectrum-css/commit/3a49432))\*
  **picker:**rename is-focused class to is-keyboardFocused ([#2377](https://github.com/adobe/spectrum-css/issues/2377))([60b44bb](https://github.com/adobe/spectrum-css/commit/60b44bb))

<a name="7.0.19"></a>

## 7.0.19

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.0.18...@spectrum-css/picker@7.0.19)

### 🐛 Bug fixes

- **picker:**express border width values ([#2367](https://github.com/adobe/spectrum-css/issues/2367))([4932f12](https://github.com/adobe/spectrum-css/commit/4932f12))\*
  **picker:**high contrast and other color fixes ([#2326](https://github.com/adobe/spectrum-css/issues/2326))([c80bbd6](https://github.com/adobe/spectrum-css/commit/c80bbd6))

<a name="7.0.18"></a>

## 7.0.18

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.0.17...@spectrum-css/picker@7.0.18)

**Note:** Version bump only for package @spectrum-css/picker

<a name="7.0.17"></a>

## 7.0.17

🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.0.16...@spectrum-css/picker@7.0.17)

**Note:** Version bump only for package @spectrum-css/picker

<a name="7.0.16"></a>

## 7.0.16

🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.0.14...@spectrum-css/picker@7.0.16)

**Note:** Version bump only for package @spectrum-css/picker

<a name="7.0.15"></a>

## 7.0.15

🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.0.14...@spectrum-css/picker@7.0.15)

**Note:** Version bump only for package @spectrum-css/picker

<a name="7.0.14"></a>

## 7.0.14

🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.0.13...@spectrum-css/picker@7.0.14)

**Note:** Version bump only for package @spectrum-css/picker

<a name="7.0.13"></a>

## 7.0.13

🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.0.12...@spectrum-css/picker@7.0.13)

**Note:** Version bump only for package @spectrum-css/picker

<a name="7.0.12"></a>

## 7.0.12

🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.0.11...@spectrum-css/picker@7.0.12)

**Note:** Version bump only for package @spectrum-css/picker

<a name="7.0.11"></a>

## 7.0.11

🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.0.10...@spectrum-css/picker@7.0.11)

**Note:** Version bump only for package @spectrum-css/picker

<a name="7.0.10"></a>

## 7.0.10

🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.0.9...@spectrum-css/picker@7.0.10)

**Note:** Version bump only for package @spectrum-css/picker

<a name="7.0.9"></a>

## 7.0.9

🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.0.8...@spectrum-css/picker@7.0.9)

**Note:** Version bump only for package @spectrum-css/picker

<a name="7.0.8"></a>

## 7.0.8

🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.0.7...@spectrum-css/picker@7.0.8)

**Note:** Version bump only for package @spectrum-css/picker

<a name="7.0.7"></a>

## 7.0.7

🗓
2023-09-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.0.6...@spectrum-css/picker@7.0.7)

**Note:** Version bump only for package @spectrum-css/picker

<a name="7.0.6"></a>

## 7.0.6

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.0.5...@spectrum-css/picker@7.0.6)

**Note:** Version bump only for package @spectrum-css/picker

<a name="7.0.5"></a>

## 7.0.5

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.0.4...@spectrum-css/picker@7.0.5)

**Note:** Version bump only for package @spectrum-css/picker

<a name="7.0.4"></a>

## 7.0.4

🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.0.3...@spectrum-css/picker@7.0.4)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="7.0.3"></a>

## 7.0.3

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.0.2...@spectrum-css/picker@7.0.3)

**Note:** Version bump only for package @spectrum-css/picker

<a name="7.0.2"></a>

## 7.0.2

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.0.0...@spectrum-css/picker@7.0.2)

**Note:** Version bump only for package @spectrum-css/picker

<a name="7.0.1"></a>

## 7.0.1

🗓
2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@7.0.0...@spectrum-css/picker@7.0.1)

**Note:** Version bump only for package @spectrum-css/picker

<a name="7.0.0"></a>

## 7.0.0

🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@6.0.2...@spectrum-css/picker@7.0.0)

\*refactor(picker)!: remove focus-ring([e37b430](https://github.com/adobe/spectrum-css/commit/e37b430))

### 🛑 BREAKING CHANGES

#### Remove `focus-ring` class

We've migrated away from the `focus-ring` class in favor of the native `:focus-visible` pseudo-class due to changes in browser support.

<a name="6.0.2"></a>

## 6.0.2

🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@6.0.1...@spectrum-css/picker@6.0.2)

### 🐛 Bug fixes

- **picker:**add separate mod for label font-weight ([#2079](https://github.com/adobe/spectrum-css/issues/2079))([1f8e486](https://github.com/adobe/spectrum-css/commit/1f8e486))

<a name="6.0.1"></a>

## 6.0.1

🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@6.0.0...@spectrum-css/picker@6.0.1)

**Note:** Version bump only for package @spectrum-css/picker

<a name="6.0.0"></a>

## 6.0.0

🗓
2023-08-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@5.0.1...@spectrum-css/picker@6.0.0)

### 🐛 Bug fixes

-     **picker:**add side label variant ([#1991](https://github.com/adobe/spectrum-css/issues/1991))([d812ac2](https://github.com/adobe/spectrum-css/commit/d812ac2))

  \*style(picker)!: add missing tokens (#2063)([c724c73](https://github.com/adobe/spectrum-css/commit/c724c73)), closes[#2063](https://github.com/adobe/spectrum-css/issues/2063)

      	###
      	🛑 BREAKING CHANGES

      		*
      		removes `.spectrum-Picker--sizeM` and makes "medium" the default style.

Additionally:

- style(picker): add missing tokens

* Added inline-size for new field-width token
* Removed medium size vars as they were set by default
* Added spacing tokens for the label, validation icon, and progress circle
* Removed margin-inline for quiet picker popovers

- docs: update mods

<a name="5.0.1"></a>

## 5.0.1

🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@5.0.0...@spectrum-css/picker@5.0.1)

**Note:** Version bump only for package @spectrum-css/picker

<a name="5.0.0"></a>

## 5.0.0

🗓
2023-07-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@4.0.22...@spectrum-css/picker@5.0.0)

\*feat(pickerbutton)!: migrate to use spectrum tokens (#1940)([ad6051d](https://github.com/adobe/spectrum-css/commit/ad6051d)), closes[#1940](https://github.com/adobe/spectrum-css/issues/1940)

    	###
    	🛑 BREAKING CHANGES

    		*
    		migrates the Picker Button component to use `@adobe/spectrum-tokens`

- feat(pickerbutton)!: update to use tokens

- feat(pickerbutton): updating tokens

- chore(pickerbutton): move css from generated to index

- feat(pickerbutton): updating with tokens

- docs(pickerbutton): update docs html to correct icon sizes

- refactor(pickerbutton): fixing variable names and tokens

- chore(pickerbutton): update story

- chore(pickerbutton): update storybook controls and template

- chore(pickerbutton): adding more storybook stories for express, quiet etc

- fix(pickerbutton): fixing icon color

- chore(pickerbutton): reset yarn file

- chore: reset yarn file

- refactor(pickerbutton): fix button fill padding calculations

- chore(pickerbutton): remove invalid and isKeyboardFocused variants

- chore(pickerbutton): prevent focused and open when disabled

- fix(pickerbutton): fix disabled hover

update mods

- fix(searchwithin): pass through mod for picker button border color

- chore(pickerbutton): bumping up tokens release

- chore(pickerbutton): update token peer dependency

- fix(searchwithin): update searchwithin story to match docs site

use picker instead of pickerbutton
remove extra border

- chore(pickerbutton): manual version increase for beta release

- chore(pickerbutton): remove pickerbutton-generated css

- fix(pickerbutton): remove icononly class and remove padding from uiicononly

removes padding from uiicononly class to allow for larger icons in slots

- fix(pickerbutton): explicitly add box-sizing border-box

- fix(pickerbutton): fix icon size

- chore(pickerbutton): manual version increase for beta release

<a name="4.0.22"></a>

## 4.0.22

🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@4.0.21...@spectrum-css/picker@4.0.22)

### 🐛 Bug fixes

\*icon sizing in Storybook story templates ([#2037](https://github.com/adobe/spectrum-css/issues/2037))([c90c8a3](https://github.com/adobe/spectrum-css/commit/c90c8a3))

<a name="4.0.21"></a>

## 4.0.21

🗓
2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@4.0.20...@spectrum-css/picker@4.0.21)

**Note:** Version bump only for package @spectrum-css/picker

<a name="4.0.20"></a>

## 4.0.20

🗓
2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@4.0.19...@spectrum-css/picker@4.0.20)

**Note:** Version bump only for package @spectrum-css/picker

<a name="4.0.19"></a>

## 4.0.19

🗓
2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@4.0.18...@spectrum-css/picker@4.0.19)

**Note:** Version bump only for package @spectrum-css/picker

<a name="4.0.18"></a>

## 4.0.18

🗓
2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@4.0.17...@spectrum-css/picker@4.0.18)

**Note:** Version bump only for package @spectrum-css/picker

<a name="4.0.17"></a>

## 4.0.17

🗓
2023-06-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@4.0.16...@spectrum-css/picker@4.0.17)

**Note:** Version bump only for package @spectrum-css/picker

<a name="4.0.16"></a>

## 4.0.16

🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@4.0.15...@spectrum-css/picker@4.0.16)

**Note:** Version bump only for package @spectrum-css/picker

<a name="4.0.15"></a>

## 4.0.15

🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@4.0.14...@spectrum-css/picker@4.0.15)

**Note:** Version bump only for package @spectrum-css/picker

<a name="4.0.14"></a>

## 4.0.14

🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@4.0.13...@spectrum-css/picker@4.0.14)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="4.0.13"></a>

## 4.0.13

🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@4.0.12...@spectrum-css/picker@4.0.13)

**Note:** Version bump only for package @spectrum-css/picker

<a name="4.0.12"></a>

## 4.0.12

🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@4.0.11...@spectrum-css/picker@4.0.12)

**Note:** Version bump only for package @spectrum-css/picker

<a name="4.0.11"></a>

## 4.0.11

🗓 2023-05-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@4.0.10...@spectrum-css/picker@4.0.11)

**Note:** Version bump only for package @spectrum-css/picker

<a name="4.0.10"></a>

## 4.0.10

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@4.0.9...@spectrum-css/picker@4.0.10)

**Note:** Version bump only for package @spectrum-css/picker

<a name="4.0.9"></a>

## 4.0.9

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@4.0.8...@spectrum-css/picker@4.0.9)

**Note:** Version bump only for package @spectrum-css/picker

<a name="4.0.8"></a>

## 4.0.8

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@4.0.7...@spectrum-css/picker@4.0.8)

**Note:** Version bump only for package @spectrum-css/picker

<a name="4.0.7"></a>

## 4.0.7

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@4.0.6...@spectrum-css/picker@4.0.7)

**Note:** Version bump only for package @spectrum-css/picker

<a name="4.0.6"></a>

## 4.0.6

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@4.0.5...@spectrum-css/picker@4.0.6)

**Note:** Version bump only for package @spectrum-css/picker

<a name="4.0.5"></a>

## 4.0.5

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@4.0.4...@spectrum-css/picker@4.0.5)

**Note:** Version bump only for package @spectrum-css/picker

<a name="4.0.4"></a>

## 4.0.4

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@4.0.3...@spectrum-css/picker@4.0.4)

**Note:** Version bump only for package @spectrum-css/picker

<a name="4.0.3"></a>

## 4.0.3

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@4.0.2...@spectrum-css/picker@4.0.3)

**Note:** Version bump only for package @spectrum-css/picker

<a name="4.0.2"></a>

## 4.0.2

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@4.0.1...@spectrum-css/picker@4.0.2)

### 🐛 Bug fixes

- **picker:** resolve missing var keyword ([#1857](https://github.com/adobe/spectrum-css/issues/1857)) ([1d85f90](https://github.com/adobe/spectrum-css/commit/1d85f90)), closes [#1852](https://github.com/adobe/spectrum-css/issues/1852)

<a name="4.0.1"></a>

## 4.0.1

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@4.0.0...@spectrum-css/picker@4.0.1)

**Note:** Version bump only for package @spectrum-css/picker

<a name="4.0.0"></a>

## 4.0.0

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@3.0.12...@spectrum-css/picker@4.0.0)

- fix(picker)!: update spacing tokens and storybook (#1804) ([1097b23](https://github.com/adobe/spectrum-css/commit/1097b23)), closes [#1804](https://github.com/adobe/spectrum-css/issues/1804)

### 🛑 BREAKING CHANGES

- removes `--mod-picker-min-inline-size`

Additionally:

- chore(picker,pickerbutton): update stories - update stories to include label
- chore(picker,pickerbutton): add loading state to stories
- chore(picker): update icon size in stories
- chore(picker): fixing label padding for story
- style(picker): update spacing tokens
- feat(picker): update spacing tokens
- chore(picker): update storybook to match docs
- fix(pickerbutton): undo changes to pickerbutton
- chore(picker): get defaults set for storybook
- chore(picker): updating stories to include express specific styling - adding express and spectrum specific styling to storybook - fixing loading spacing
- chore(picker): update storybook - add invalid story - add click functionality
- chore(picker): add focused story and fix icon focus color
- docs(picker): update mods file

<a name="3.0.12"></a>

## 3.0.12

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@3.0.11...@spectrum-css/picker@3.0.12)

**Note:** Version bump only for package @spectrum-css/picker

<a name="3.0.11"></a>

## 3.0.11

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@3.0.10...@spectrum-css/picker@3.0.11)

**Note:** Version bump only for package @spectrum-css/picker

<a name="3.0.10"></a>

## 3.0.10

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@3.0.8...@spectrum-css/picker@3.0.10)

**Note:** Version bump only for package @spectrum-css/picker

<a name="3.0.9"></a>

## 3.0.9

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@3.0.8...@spectrum-css/picker@3.0.9)

**Note:** Version bump only for package @spectrum-css/picker

<a name="3.0.8"></a>

## 3.0.8

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@3.0.7...@spectrum-css/picker@3.0.8)

**Note:** Version bump only for package @spectrum-css/picker

<a name="3.0.7"></a>

## 3.0.7

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@3.0.6...@spectrum-css/picker@3.0.7)

**Note:** Version bump only for package @spectrum-css/picker

<a name="3.0.6"></a>

## 3.0.6

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@3.0.5...@spectrum-css/picker@3.0.6)

**Note:** Version bump only for package @spectrum-css/picker

<a name="3.0.5"></a>

## 3.0.5

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@3.0.4...@spectrum-css/picker@3.0.5)

**Note:** Version bump only for package @spectrum-css/picker

<a name="3.0.4"></a>

## 3.0.4

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@3.0.2...@spectrum-css/picker@3.0.4)

### 🐛 Bug fixes

- **picker:** update border colors ([#1763](https://github.com/adobe/spectrum-css/issues/1763)) ([8932811](https://github.com/adobe/spectrum-css/commit/8932811))

<a name="3.0.3"></a>

## 3.0.3

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@3.0.2...@spectrum-css/picker@3.0.3)

### 🐛 Bug fixes

- **picker:** update border colors ([#1763](https://github.com/adobe/spectrum-css/issues/1763)) ([8932811](https://github.com/adobe/spectrum-css/commit/8932811))

<a name="3.0.2"></a>

## 3.0.2

🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@3.0.0...@spectrum-css/picker@3.0.2)

**Note:** Version bump only for package @spectrum-css/picker

<a name="3.0.1"></a>

## 3.0.1

🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@3.0.0...@spectrum-css/picker@3.0.1)

**Note:** Version bump only for package @spectrum-css/picker

<a name="3.0.0"></a>

## 3.0.0

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@2.0.11...@spectrum-css/picker@3.0.0)

- fix(tokens)!: rgb transform to split out rgb values from css attributes (#1590) ([b714db4](https://github.com/adobe/spectrum-css/commit/b714db4)), closes [#1590](https://github.com/adobe/spectrum-css/issues/1590)

### 🛑 BREAKING CHANGES

- transforms color tokens to split out their `rgb` values

Co-authored-by: castastrophe <castastrophe@users.noreply.github.com>

<a name="2.0.11"></a>

## 2.0.11

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@2.0.10...@spectrum-css/picker@2.0.11)

**Note:** Version bump only for package @spectrum-css/picker

<a name="2.0.10"></a>

## 2.0.10

🗓 2023-03-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@2.0.9...@spectrum-css/picker@2.0.10)

**Note:** Version bump only for package @spectrum-css/picker

<a name="2.0.9"></a>

## 2.0.9

🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@2.0.8...@spectrum-css/picker@2.0.9)

**Note:** Version bump only for package @spectrum-css/picker

<a name="2.0.8"></a>

## 2.0.8

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@2.0.7...@spectrum-css/picker@2.0.8)

**Note:** Version bump only for package @spectrum-css/picker

<a name="2.0.7"></a>

## 2.0.7

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@2.0.6...@spectrum-css/picker@2.0.7)

**Note:** Version bump only for package @spectrum-css/picker

<a name="2.0.6"></a>

## 2.0.6

🗓 2023-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@2.0.5...@spectrum-css/picker@2.0.6)

**Note:** Version bump only for package @spectrum-css/picker

<a name="2.0.5"></a>

## 2.0.5

🗓 2023-03-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@2.0.4...@spectrum-css/picker@2.0.5)

**Note:** Version bump only for package @spectrum-css/picker

<a name="2.0.4"></a>

## 2.0.4

🗓 2023-02-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@2.0.3...@spectrum-css/picker@2.0.4)

**Note:** Version bump only for package @spectrum-css/picker

<a name="2.0.3"></a>

## 2.0.3

🗓 2023-02-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@2.0.2...@spectrum-css/picker@2.0.3)

### 🐛 Bug fixes

- **picker:** resolve font-style, focus-ring, border issues ([#1618](https://github.com/adobe/spectrum-css/issues/1618)) ([c8f7c3b](https://github.com/adobe/spectrum-css/commit/c8f7c3b))

<a name="2.0.2"></a>

## 2.0.2

🗓 2023-02-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@2.0.1...@spectrum-css/picker@2.0.2)

**Note:** Version bump only for package @spectrum-css/picker

<a name="2.0.1"></a>

## 2.0.1

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@2.0.0...@spectrum-css/picker@2.0.1)

**Note:** Version bump only for package @spectrum-css/picker

<a name="2.0.0"></a>

## 2.0.0

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.2.21...@spectrum-css/picker@2.0.0)

- refactor(picker)!: use spectrum tokens (#1528) ([7cdbad2](https://github.com/adobe/spectrum-css/commit/7cdbad2)), closes [#1528](https://github.com/adobe/spectrum-css/issues/1528)

### 🛑 BREAKING CHANGES

- migrates Picker to new tokens system

<a name="1.2.21"></a>

## 1.2.21

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.2.20...@spectrum-css/picker@1.2.21)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.2.20"></a>

## 1.2.20

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.2.19...@spectrum-css/picker@1.2.20)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.2.19"></a>

## 1.2.19

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.2.18...@spectrum-css/picker@1.2.19)

### 🐛 Bug fixes

- **textfield,picker:** restore missing vars ([#1607](https://github.com/adobe/spectrum-css/issues/1607)) ([45f36f6](https://github.com/adobe/spectrum-css/commit/45f36f6))

<a name="1.2.18"></a>

## 1.2.18

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.2.17...@spectrum-css/picker@1.2.18)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.2.17"></a>

## 1.2.17

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.2.16...@spectrum-css/picker@1.2.17)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.2.16"></a>

## 1.2.16

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.2.14...@spectrum-css/picker@1.2.16)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.2.15"></a>

## 1.2.15

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.2.14...@spectrum-css/picker@1.2.15)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.2.14"></a>

## 1.2.14

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.2.13...@spectrum-css/picker@1.2.14)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.2.13"></a>

## 1.2.13

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.2.12...@spectrum-css/picker@1.2.13)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.2.12"></a>

## 1.2.12

🗓 2022-07-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.2.11...@spectrum-css/picker@1.2.12)

### 🐛 Bug fixes

- picker high contrast support ([4d2f6fc](https://github.com/adobe/spectrum-css/commit/4d2f6fc))

<a name="1.2.11"></a>

## 1.2.11

🗓 2022-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.2.10...@spectrum-css/picker@1.2.11)

### 🐛 Bug fixes

- **actionbutton, closebutton, picker:** remove `!important` declarations ([a26c212](https://github.com/adobe/spectrum-css/commit/a26c212))
- **picker:** use proper colors for express quiet variant ([b54f299](https://github.com/adobe/spectrum-css/commit/b54f299))

<a name="1.2.10"></a>

## 1.2.10

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.2.8...@spectrum-css/picker@1.2.10)

### 🐛 Bug fixes

- removed unused actionbutton from picker ([0812f91](https://github.com/adobe/spectrum-css/commit/0812f91))

<a name="1.2.9"></a>

## 1.2.9

🗓 2022-06-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.2.8...@spectrum-css/picker@1.2.9)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.2.8"></a>

## 1.2.8

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.2.7...@spectrum-css/picker@1.2.8)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.2.7"></a>

## 1.2.7

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.2.6...@spectrum-css/picker@1.2.7)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.2.6"></a>

## 1.2.6

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.2.5...@spectrum-css/picker@1.2.6)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.2.5"></a>

## 1.2.5

🗓 2022-04-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.2.4...@spectrum-css/picker@1.2.5)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.2.4"></a>

## 1.2.4

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.2.3...@spectrum-css/picker@1.2.4)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.2.3"></a>

## 1.2.3

🗓 2022-03-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.2.2...@spectrum-css/picker@1.2.3)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.2.2"></a>

## 1.2.2

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.2.1...@spectrum-css/picker@1.2.2)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.2.1"></a>

## 1.2.1

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.2.0...@spectrum-css/picker@1.2.1)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.2.0"></a>

## 1.2.0

🗓 2022-03-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.1.14...@spectrum-css/picker@1.2.0)

### ✨ Features

- add support for express picker; closes [#1245](https://github.com/adobe/spectrum-css/issues/1245) ([b07bb3d](https://github.com/adobe/spectrum-css/commit/b07bb3d))

### 🐛 Bug fixes

- put back selector I removed accidentally ([6ded29e](https://github.com/adobe/spectrum-css/commit/6ded29e))

<a name="1.1.14"></a>

## 1.1.14

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.1.13...@spectrum-css/picker@1.1.14)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.1.13"></a>

## 1.1.13

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.1.12...@spectrum-css/picker@1.1.13)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.1.12"></a>

## 1.1.12

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.1.11...@spectrum-css/picker@1.1.12)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.1.11"></a>

## 1.1.11

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.1.10...@spectrum-css/picker@1.1.11)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.1.10"></a>

## 1.1.10

🗓 2022-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.1.9...@spectrum-css/picker@1.1.10)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.1.9"></a>

## 1.1.9

🗓 2022-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.1.8...@spectrum-css/picker@1.1.9)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.1.8"></a>

## 1.1.8

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.1.7...@spectrum-css/picker@1.1.8)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.1.7"></a>

## 1.1.7

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.1.5...@spectrum-css/picker@1.1.7)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

<a name="1.1.6"></a>

## 1.1.6

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.1.6-beta.0...@spectrum-css/picker@1.1.6)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.1.6-beta.0"></a>

## 1.1.6-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.1.5...@spectrum-css/picker@1.1.6-beta.0)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.1.5"></a>

## 1.1.5

🗓 2021-12-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.1.4...@spectrum-css/picker@1.1.5)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.1.4"></a>

## 1.1.4

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.1.3...@spectrum-css/picker@1.1.4)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.1.3"></a>

## 1.1.3

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.1.2...@spectrum-css/picker@1.1.3)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.1.2"></a>

## 1.1.2

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.1.1...@spectrum-css/picker@1.1.2)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.1.1"></a>

## 1.1.1

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.1.0...@spectrum-css/picker@1.1.1)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.1.0"></a>

## 1.1.0

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.0.4...@spectrum-css/picker@1.1.0)

### ✨ Features

- make ClearButton build again, unblock CCX ([#1304](https://github.com/adobe/spectrum-css/issues/1304)) ([ae9399a](https://github.com/adobe/spectrum-css/commit/ae9399a))

<a name="1.0.5"></a>

## 1.0.5

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.0.4...@spectrum-css/picker@1.0.5)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.0.3"></a>

## 1.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.0.3-alpha.5...@spectrum-css/picker@1.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="1.0.3-alpha.5"></a>

## 1.0.3-alpha.5

🗓 2021-08-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.0.3-alpha.4...@spectrum-css/picker@1.0.3-alpha.5)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.0.3-alpha.4"></a>

## 1.0.3-alpha.4

🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.0.3-alpha.3...@spectrum-css/picker@1.0.3-alpha.4)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.0.3-alpha.3"></a>

## 1.0.3-alpha.3

🗓 2021-07-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.0.3-alpha.2...@spectrum-css/picker@1.0.3-alpha.3)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.0.3-alpha.2"></a>

## 1.0.3-alpha.2

🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.0.3-alpha.1...@spectrum-css/picker@1.0.3-alpha.2)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.0.3-alpha.1"></a>

## 1.0.3-alpha.1

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.0.3-alpha.0...@spectrum-css/picker@1.0.3-alpha.1)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.0.3-alpha.0"></a>

## 1.0.3-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.0.2...@spectrum-css/picker@1.0.3-alpha.0)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.0.2"></a>

## 1.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.0.1...@spectrum-css/picker@1.0.2)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.0.1"></a>

## 1.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.0.0...@spectrum-css/picker@1.0.1)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.0.0"></a>

## 1.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.0.0-beta.3...@spectrum-css/picker@1.0.0)

### ✨ Features

- added t-shirt sizes to picker ([35bf08f](https://github.com/adobe/spectrum-css/commit/35bf08f)), closes [#940](https://github.com/adobe/spectrum-css/issues/940)

### 🐛 Bug fixes

- correct icononly Picker width ([b165e11](https://github.com/adobe/spectrum-css/commit/b165e11))
- updated icon sizes for picker examples ([ad054f6](https://github.com/adobe/spectrum-css/commit/ad054f6))

### Migration guide

#### Component renamed

Dropdown is now known as Picker. Replace all `.spectrum-Dropdown*` classnames with `.spectrum-Picker*`.

#### Markup change

The outer `<div>` is now gone and `.spectrum-FieldButton` is no longer used. Instead, the outer tag is now `<button>` with the `.spectrum-Picker` classname.

Additionally, `.spectrum-Picker` should not contain the `.spectrum-Popover` that it opens.

In order to use a side label with a Picker, add the `spectrum-Picker--sideLabel` class to the Picker.

#### Icon classname changes

Each of the 3 possible icons now has its own specific classname:

| Previous icon classname       | Workflow icon classname           |
| ----------------------------- | --------------------------------- |
| `.spectrum-Picker-icon`       | `.spectrum-Picker-menuIcon`       |
| `.spectrum-Icon` (workflow)   | `.spectrum-Picker-icon`           |
| `.spectrum-Icon` (validation) | `.spectrum-Picker-validationIcon` |

#### `.is-selected` is now `.is-open`

In order to more accurately reflect what's going on, you should add `.is-open` to `.spectrum-Picker` when the menu is shown.

#### Change workflow icon size to medium

If you use a `.spectrum-Picker-icon` in your markup, please replace `.spectrum-Icon--sizeS` with `.spectrum-Icon--sizeM`.

#### T-shirt sizing

Picker now supports t-shirt sizing and requires that you specify the size by adding a `.spectrum-Picker--size*` class.
Using the classes `.spectrum-Picker .spectrum-Picker--sizeM` will get result in the previous default picker size.

Also, use the correct icon size for chevron icons:

| T-shirt Size              | Icon Size                      |
| ------------------------- | ------------------------------ |
| `spectrum-Picker--sizeS`  | `spectrum-css-icon-Chevron75`  |
| `spectrum-Picker--sizeM`  | `spectrum-css-icon-Chevron100` |
| `spectrum-Picker--sizeL`  | `spectrum-css-icon-Chevron200` |
| `spectrum-Picker--sizeXL` | `spectrum-css-icon-Chevron300` |

<a name="1.0.0-beta.3"></a>

## 1.0.0-beta.3

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.0.0-beta.2...@spectrum-css/picker@1.0.0-beta.3)

### ✨ Features

- change all instances of .is-selected to .is-open ([e28af42](https://github.com/adobe/spectrum-css/commit/e28af42))
- migrate Picker from FieldButton to Picker... button ([6fbc452](https://github.com/adobe/spectrum-css/commit/6fbc452))
- replace all FieldButton with ActionButton ([2fcbaaf](https://github.com/adobe/spectrum-css/commit/2fcbaaf))

### 🐛 Bug fixes

- correct chevron icon size, closes [#1045](https://github.com/adobe/spectrum-css/issues/1045) ([#1056](https://github.com/adobe/spectrum-css/issues/1056)) ([12fb3cc](https://github.com/adobe/spectrum-css/commit/12fb3cc))
- correct dependencies for FieldButton -> ActionButton change ([29d69f8](https://github.com/adobe/spectrum-css/commit/29d69f8))
- correct margin between icons and text ([0d7453b](https://github.com/adobe/spectrum-css/commit/0d7453b))
- correct Thumbnail indentation for Picker ([93602c2](https://github.com/adobe/spectrum-css/commit/93602c2))
- make Picker build again ([dc541b9](https://github.com/adobe/spectrum-css/commit/dc541b9))
- make Picker work again ([91f6e09](https://github.com/adobe/spectrum-css/commit/91f6e09))
- quiet width, alignment of menu icon when it's alone, margin bits ([98d06e1](https://github.com/adobe/spectrum-css/commit/98d06e1))
- remove useless state ([e442338](https://github.com/adobe/spectrum-css/commit/e442338))
- update main, resolved conflicts ([d7880a2](https://github.com/adobe/spectrum-css/commit/d7880a2))

### 🛑 BREAKING CHANGES

- Use .is-open to indicate the popover is shown, not .is-selected
- Picker markup changed completely
- markup now requires spectrum-ActionButton where all uses of spectrum-FieldButton were

<a name="1.0.0-beta.2"></a>

## 1.0.0-beta.2

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/picker@1.0.0-beta.1...@spectrum-css/picker@1.0.0-beta.2)

**Note:** Version bump only for package @spectrum-css/picker

<a name="1.0.0-beta.1"></a>

## 1.0.0-beta.1

🗓 2020-09-23

### ✨ Features

- renamed dropdown to picker ([#540](https://github.com/adobe/spectrum-css/issues/540)) ([d1081f0](https://github.com/adobe/spectrum-css/commit/d1081f0))

### 🐛 Bug fixes

- renamed dropdown to picker ([6fc60cb](https://github.com/adobe/spectrum-css/commit/6fc60cb))
- wip fix more components ([b74dbb8](https://github.com/adobe/spectrum-css/commit/b74dbb8))

<a name="3.0.0-beta.3"></a>

## 3.0.0-beta.3

🗓 2020-06-19 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dropdown@3.0.0-beta.2...@spectrum-css/dropdown@3.0.0-beta.3)

**Note:** Version bump only for package @spectrum-css/dropdown

<a name="3.0.0-beta.2"></a>

## 3.0.0-beta.2

🗓 2020-05-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dropdown@3.0.0-beta.1...@spectrum-css/dropdown@3.0.0-beta.2)

**Note:** Version bump only for package @spectrum-css/dropdown

<a name="3.0.0-beta.1"></a>

## 3.0.0-beta.1

🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dropdown@3.0.0-beta.0...@spectrum-css/dropdown@3.0.0-beta.1)

**Note:** Version bump only for package @spectrum-css/dropdown

<a name="3.0.0-beta.0"></a>

## 3.0.0-beta.0

🗓 2020-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dropdown@2.1.5...@spectrum-css/dropdown@3.0.0-beta.0)

### ✨ Features

- make Dropdown support RTL ([b580068](https://github.com/adobe/spectrum-css/commit/b580068))

<a name="2.1.5"></a>

## 2.1.5

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dropdown@2.1.4...@spectrum-css/dropdown@2.1.5)

**Note:** Version bump only for package @spectrum-css/dropdown

<a name="2.1.4"></a>

## 2.1.4

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dropdown@2.1.3...@spectrum-css/dropdown@2.1.4)

**Note:** Version bump only for package @spectrum-css/dropdown

<a name="2.1.3"></a>

## 2.1.3

🗓 2020-01-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dropdown@2.1.2...@spectrum-css/dropdown@2.1.3)

### 🐛 Bug fixes

- fix Quiet Dropdown width in large scale, fixes [#477](https://github.com/adobe/spectrum-css/issues/477) ([a36f3bf](https://github.com/adobe/spectrum-css/commit/a36f3bf))
- make Menu items wrap correctly, fixes [#451](https://github.com/adobe/spectrum-css/issues/451) ([#482](https://github.com/adobe/spectrum-css/issues/482)) ([03208af](https://github.com/adobe/spectrum-css/commit/03208af))

<a name="2.1.2"></a>

## 2.1.2

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dropdown@2.1.1...@spectrum-css/dropdown@2.1.2)

**Note:** Version bump only for package @spectrum-css/dropdown

<a name="2.1.1"></a>

## 2.1.1

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dropdown@2.1.0...@spectrum-css/dropdown@2.1.1)

**Note:** Version bump only for package @spectrum-css/dropdown

<a name="2.1.0"></a>

## 2.1.0

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dropdown@2.0.0...@spectrum-css/dropdown@2.1.0)

### ✨ Features

- add menu icon class, closes [#202](https://github.com/adobe/spectrum-css/issues/202) ([#331](https://github.com/adobe/spectrum-css/issues/331)) ([169940a](https://github.com/adobe/spectrum-css/commit/169940a))

<a name="2.0.0"></a>

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
