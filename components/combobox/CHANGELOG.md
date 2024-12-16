# Change Log

## 4.0.0-next.0

### Patch Changes

- Updated dependencies [[`bd934cc`](https://github.com/adobe/spectrum-css/commit/bd934cc9a5a43b2d453710d462a1faaa5046de08)]:
  - @spectrum-css/tokens@14.0.0-next.10
  - @spectrum-css/popover@8.0.0-next.0
  - @spectrum-css/pickerbutton@6.0.0-next.0
  - @spectrum-css/menu@8.0.0-next.0

## 4.0.1

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
  - @spectrum-css/menu@9.0.1
  - @spectrum-css/pickerbutton@6.0.1
  - @spectrum-css/popover@8.0.1
  - @spectrum-css/progresscircle@5.0.1
  - @spectrum-css/textfield@8.0.1

## 4.0.0

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
  - @spectrum-css/pickerbutton@6.0.0
  - @spectrum-css/textfield@8.0.0
  - @spectrum-css/popover@8.0.0

## 3.4.1

### Patch Changes

- [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)! - Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/progresscircle@4.0.1
  - @spectrum-css/pickerbutton@5.3.1
  - @spectrum-css/textfield@7.4.1
  - @spectrum-css/popover@7.3.1
  - @spectrum-css/menu@8.0.1

## 3.4.0

### Minor Changes

- [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)! - Simplify how the `--system` properties are mapped. By updating the logic in the `postcss-add-theming-layer`, we are now shipping cleaner, more readable `--system` property names. These custom properties are documented as _NOT_ a part of the component API so although these result in a change to the custom property names, it does not impact the properties that are in the API and so do not constitute a breaking change. Expect to see no change to how component theming works or any visual regressions as a result of this change.

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/progresscircle@4.0.0
  - @spectrum-css/menu@8.0.0
  - @spectrum-css/pickerbutton@5.3.0
  - @spectrum-css/textfield@7.4.0
  - @spectrum-css/popover@7.3.0

## 3.3.0

### Minor Changes

- [#3232](https://github.com/adobe/spectrum-css/pull/3232) [`5d83841`](https://github.com/adobe/spectrum-css/commit/5d83841553b0221d3fb8443a1de861bc6e70db27) Thanks [@aramos-adobe](https://github.com/aramos-adobe)! - Combobox now includes a `read-only` state. Add the `is-readOnly` class to the Combobox to enable this feature. To ensure the intended user experience, please make sure the readonly state in the textfield is enabled by adding the `is-readOnly` class and `readonly` attribute on the input element for this component as well.

## 3.2.0

### Minor Changes

- [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)! - Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/progresscircle@3.2.0
  - @spectrum-css/pickerbutton@5.2.0
  - @spectrum-css/textfield@7.3.0
  - @spectrum-css/popover@7.2.0
  - @spectrum-css/menu@7.2.0

## 3.1.4

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)! - Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/progresscircle@3.1.4
  - @spectrum-css/pickerbutton@5.1.3
  - @spectrum-css/textfield@7.2.3
  - @spectrum-css/popover@7.1.6
  - @spectrum-css/menu@7.1.7

## 3.1.3

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)! - Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/progresscircle@3.1.3
  - @spectrum-css/pickerbutton@5.1.2
  - @spectrum-css/textfield@7.2.1
  - @spectrum-css/popover@7.1.5
  - @spectrum-css/menu@7.1.6

## 3.1.2

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/progresscircle@3.1.1
  - @spectrum-css/pickerbutton@5.1.1
  - @spectrum-css/textfield@7.1.3
  - @spectrum-css/popover@7.1.2
  - @spectrum-css/menu@7.1.2

## 3.1.1

### Patch Changes

- [#2740](https://github.com/adobe/spectrum-css/pull/2740) [`c0dd6a4`](https://github.com/adobe/spectrum-css/commit/c0dd6a443b410f37f3dc703d75e11c15519fd93e) Thanks [@jawinn](https://github.com/jawinn)! - Build change to remove the `postcss-preset-env` polyfill for the dist output of `:not` selectors containing multiple selectors, to avoid an unintended increase in specificity, which caused some visual regressions.

## 3.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/menu@>=7
  - @spectrum-css/pickerbutton@>=5
  - @spectrum-css/popover@>=7
  - @spectrum-css/progresscircle@>=3
  - @spectrum-css/textfield@>=7
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="3.0.0"></a>

## 3.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.1.6...@spectrum-css/combobox@3.0.0)

### ✨ Features

\*use storybook v8 ([#2604](https://github.com/adobe/spectrum-css/issues/2604))([166ab23](https://github.com/adobe/spectrum-css/commit/166ab23))

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGES

- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="2.1.6"></a>

## 2.1.6

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.1.5...@spectrum-css/combobox@2.1.6)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.1.5"></a>

## 2.1.5

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.1.4...@spectrum-css/combobox@2.1.5)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.1.4"></a>

## 2.1.4

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.1.3...@spectrum-css/combobox@2.1.4)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.1.3"></a>

## 2.1.3

🗓 2024-02-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.1.2...@spectrum-css/combobox@2.1.3)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.1.2"></a>

## 2.1.2

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.1.1"></a>

## 2.1.1

🗓 2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.1.0...@spectrum-css/combobox@2.1.1)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.1.0"></a>

## 2.1.0

🗓 2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.48...@spectrum-css/combobox@2.1.0)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.48"></a>

## 2.0.48

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.47...@spectrum-css/combobox@2.0.48)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.47"></a>

## 2.0.47

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.46...@spectrum-css/combobox@2.0.47)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.46"></a>

## 2.0.46

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.45...@spectrum-css/combobox@2.0.46)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.45"></a>

## 2.0.45

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.43...@spectrum-css/combobox@2.0.45)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.44"></a>

## 2.0.44

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.43...@spectrum-css/combobox@2.0.44)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.43"></a>

## 2.0.43

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.42...@spectrum-css/combobox@2.0.43)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.42"></a>

## 2.0.42

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.41...@spectrum-css/combobox@2.0.42)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.41"></a>

## 2.0.41

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.40...@spectrum-css/combobox@2.0.41)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.40"></a>

## 2.0.40

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.39...@spectrum-css/combobox@2.0.40)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.39"></a>

## 2.0.39

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.38...@spectrum-css/combobox@2.0.39)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.38"></a>

## 2.0.38

🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.37...@spectrum-css/combobox@2.0.38)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.37"></a>

## 2.0.37

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.36...@spectrum-css/combobox@2.0.37)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.36"></a>

## 2.0.36

🗓 2023-09-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.35...@spectrum-css/combobox@2.0.36)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.35"></a>

## 2.0.35

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.34...@spectrum-css/combobox@2.0.35)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.34"></a>

## 2.0.34

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.33...@spectrum-css/combobox@2.0.34)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.33"></a>

## 2.0.33

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.32...@spectrum-css/combobox@2.0.33)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.32"></a>

## 2.0.32

🗓 2023-08-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.31...@spectrum-css/combobox@2.0.32)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="2.0.31"></a>

## 2.0.31

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.30...@spectrum-css/combobox@2.0.31)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.30"></a>

## 2.0.30

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.28...@spectrum-css/combobox@2.0.30)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.29"></a>

## 2.0.29

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.28...@spectrum-css/combobox@2.0.29)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.28"></a>

## 2.0.28

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.27...@spectrum-css/combobox@2.0.28)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.27"></a>

## 2.0.27

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.26...@spectrum-css/combobox@2.0.27)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.26"></a>

## 2.0.26

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.25...@spectrum-css/combobox@2.0.26)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.25"></a>

## 2.0.25

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.24...@spectrum-css/combobox@2.0.25)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.24"></a>

## 2.0.24

🗓 2023-07-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.23...@spectrum-css/combobox@2.0.24)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.23"></a>

## 2.0.23

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.22...@spectrum-css/combobox@2.0.23)

### 🐛 Bug fixes

\*icon sizing in Storybook story templates ([#2037](https://github.com/adobe/spectrum-css/issues/2037))([c90c8a3](https://github.com/adobe/spectrum-css/commit/c90c8a3))

<a name="2.0.22"></a>

## 2.0.22

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.21...@spectrum-css/combobox@2.0.22)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.21"></a>

## 2.0.21

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.20...@spectrum-css/combobox@2.0.21)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.20"></a>

## 2.0.20

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.19...@spectrum-css/combobox@2.0.20)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.19"></a>

## 2.0.19

🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.18...@spectrum-css/combobox@2.0.19)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.18"></a>

## 2.0.18

🗓 2023-06-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.17...@spectrum-css/combobox@2.0.18)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.17"></a>

## 2.0.17

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.16...@spectrum-css/combobox@2.0.17)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.16"></a>

## 2.0.16

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.15...@spectrum-css/combobox@2.0.16)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.15"></a>

## 2.0.15

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.14...@spectrum-css/combobox@2.0.15)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="2.0.14"></a>

## 2.0.14

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.13...@spectrum-css/combobox@2.0.14)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.13"></a>

## 2.0.13

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.12...@spectrum-css/combobox@2.0.13)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.12"></a>

## 2.0.12

🗓 2023-05-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.11...@spectrum-css/combobox@2.0.12)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.11"></a>

## 2.0.11

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.10...@spectrum-css/combobox@2.0.11)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.10"></a>

## 2.0.10

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.9...@spectrum-css/combobox@2.0.10)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.9"></a>

## 2.0.9

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.8...@spectrum-css/combobox@2.0.9)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.8"></a>

## 2.0.8

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.7...@spectrum-css/combobox@2.0.8)

### 🐛 Bug fixes

- **textfield, stepper:** button padding and focus indicator ([#1863](https://github.com/adobe/spectrum-css/issues/1863)) ([7963b85](https://github.com/adobe/spectrum-css/commit/7963b85))

<a name="2.0.7"></a>

## 2.0.7

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.6...@spectrum-css/combobox@2.0.7)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.6"></a>

## 2.0.6

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.5...@spectrum-css/combobox@2.0.6)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.5"></a>

## 2.0.5

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.4...@spectrum-css/combobox@2.0.5)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.4"></a>

## 2.0.4

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.3...@spectrum-css/combobox@2.0.4)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.3"></a>

## 2.0.3

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.2...@spectrum-css/combobox@2.0.3)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.2"></a>

## 2.0.2

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.1...@spectrum-css/combobox@2.0.2)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.1"></a>

## 2.0.1

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.0...@spectrum-css/combobox@2.0.1)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.0"></a>

## 2.0.0

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.16...@spectrum-css/combobox@2.0.0)

- fix(textfield, combobox)!: adjust padding calculations (#1803) ([09c1bdc](https://github.com/adobe/spectrum-css/commit/09c1bdc)), closes [#1803](https://github.com/adobe/spectrum-css/issues/1803)

### 🛑 BREAKING CHANGES

- removes `--mod-combobox-icon-size`, `--mod-combobox-spacing-block-start-to-border`, `--mod-combobox-spacing-inline-start-to-textfield`, `--mod-combobox-spacing-block-start-edge-to-textfield`, `--mod-combobox-spacing-block-end-edge-to-textfield`, and `--mod-combobox-spacing-inline-start-edge-to-textfield`.

Additionally:

- fix: exclude border width from padding with text inputs + more fixes

* Textfield and Combobox: exclude border width from padding calculations
  because most of the to-edge tokens include the border, and the values
  were 1px larger than they should have been.
* Textfield and Combobox: fix corner radius of focus indicator when
  using a larger border radius (e.g. try setting a --mod border width
  of 5px; the calculation adding the border width was incorrect)
* Combobox: adjust styles so custom property for border width is
  correctly overriding everything from its sub-components. Previously
  using --mod-combobox-border-width had no effect.
* Combobox: simplify/remove some custom properties related to those
  fixes and quiet variant.

- fix(combobox): border-radius should not increase for t-shirt sizes

Per design feedback, the border-radius value should not be increasing
for these t-shirt sizes.

- fix(combobox): calculate the button x-offset on quiet

Use a corrected calculation of the x-offset for the picker button on the
quiet variant. Based on design feedback for the component: "The point is
to line up the chevron icon with the end of the component so those
elements are flushed".

- fix(combobox): mods update after changes

Regenerate mods after fixes that have removed and renamed some
properties.

- feat(textfield): add 'size' control to storybook

Add "t-shirt" size control to Textfield stories. The arg was already
there, but it was missing a control for testing.

<a name="1.0.16"></a>

## 1.0.16

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.15...@spectrum-css/combobox@1.0.16)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.15"></a>

## 1.0.15

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.13...@spectrum-css/combobox@1.0.15)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.14"></a>

## 1.0.14

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.13...@spectrum-css/combobox@1.0.14)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.13"></a>

## 1.0.13

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.12...@spectrum-css/combobox@1.0.13)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.12"></a>

## 1.0.12

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.11...@spectrum-css/combobox@1.0.12)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.11"></a>

## 1.0.11

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.10...@spectrum-css/combobox@1.0.11)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.10"></a>

## 1.0.10

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.9...@spectrum-css/combobox@1.0.10)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.9"></a>

## 1.0.9

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.8...@spectrum-css/combobox@1.0.9)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.8"></a>

## 1.0.8

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.6...@spectrum-css/combobox@1.0.8)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.7"></a>

## 1.0.7

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.6...@spectrum-css/combobox@1.0.7)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.6"></a>

## 1.0.6

🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.4...@spectrum-css/combobox@1.0.6)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.5"></a>

## 1.0.5

🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.4...@spectrum-css/combobox@1.0.5)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.4"></a>

## 1.0.4

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.3...@spectrum-css/combobox@1.0.4)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.3"></a>

## 1.0.3

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.2...@spectrum-css/combobox@1.0.3)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.2"></a>

## 1.0.2

🗓 2023-03-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.1...@spectrum-css/combobox@1.0.2)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.1"></a>

## 1.0.1

🗓 2023-03-28

**Note:** Version bump only for package @spectrum-css/combobox

### Component separated from InputGroup

Combobox was previously a variant style for InputGroup. **InputGroup is deprecated**. The classes listed below containing `InputGroup` have been renamed or removed:

- `.spectrum-InputGroup-textfield` -> `.spectrum-Combobox-textfield`
- `.spectrum-InputGroup-input` -> `.spectrum-Combobox-input`
- `.spectrum-InputGroup-button` -> `.spectrum-Combobox-button`
- `.InputGroup` -> removed
