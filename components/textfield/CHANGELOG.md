# Change log

## 8.1.1

### Patch Changes

📝 [#3575](https://github.com/adobe/spectrum-css/pull/3575) [`2e17d10`](https://github.com/adobe/spectrum-css/commit/2e17d109ebec3c2745c32a15840af5c636c8dc5d) Thanks [@TarunAdobe](https://github.com/TarunAdobe)!

- Updated border color on keyboard focus state for textfield in spectrum-two theme.

## 8.1.0

### Minor Changes

📝 [`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee) Thanks [@castastrophe](https://github.com/castastrophe)!

## New feature

Minified and gzipped outputs available for all compiled CSS assets.

### Patch Changes

📝 [#3539](https://github.com/adobe/spectrum-css/pull/3539) [`9b108f7`](https://github.com/adobe/spectrum-css/commit/9b108f7e05df1f55ab315dad96736d3ff4757f8c) Thanks [@rise-erpelding](https://github.com/rise-erpelding)!

- Updates invalid icon spacing to be vertically centered for S2.

📝 [#3541](https://github.com/adobe/spectrum-css/pull/3541) [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d) Thanks [@castastrophe](https://github.com/castastrophe)!

- Dependency alignment across the project.

Set component peerDependencies as optional to reduce console warnings on downstream projects.

- Updated dependencies [[`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee), [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d)]:
  - @spectrum-css/helptext@8.0.0
  - @spectrum-css/tokens@16.0.1

## 8.0.1

### Patch Changes

📝 [#3534](https://github.com/adobe/spectrum-css/pull/3534) [`68e0057`](https://github.com/adobe/spectrum-css/commit/68e00577156cc32b21bfa768dbd2d35d73563b4c) Thanks [@castastrophe](https://github.com/castastrophe)!

Fixes a bug in the content of the `dist/index-theme.css` file.

Expected `index-theme.css` to include the component selectors with component-level custom properties mapped to the `--system` prefixed ones in order to allow a component to support various contexts.

Expected output example for the index-theme.css:

```css
.spectrum-ActionButton {
  --spectrum-actionbutton-background-color-default: var(--system-action-button-background-color-default);
  --spectrum-actionbutton-background-color-hover: var(--system-action-button-background-color-hover);
```

- Updated dependencies [[`68e0057`](https://github.com/adobe/spectrum-css/commit/68e00577156cc32b21bfa768dbd2d35d73563b4c)]:
  - @spectrum-css/helptext@7.0.1

## 8.0.0

### Major Changes

📝 [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6) Thanks [@pfulton](https://github.com/pfulton)!

### 🛑 Breaking change

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

- Updated dependencies [[`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6), [`3d08cea`](https://github.com/adobe/spectrum-css/commit/3d08cea0f590c8c2de7252677a6b81b8cc206b9a), [`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6)]:
  - @spectrum-css/tokens@16.0.0
  - @spectrum-css/helptext@7.0.0

## 7.4.1

### Patch Changes

📝 [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)!

- Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/helptext@6.0.1

## 7.4.0

### Minor Changes

📝 [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)!

- Simplify how the `--system` properties are mapped. By updating the logic in the `postcss-add-theming-layer`, we are now shipping cleaner, more readable `--system` property names. These custom properties are documented as _NOT_ a part of the component API so although these result in a change to the custom property names, it does not impact the properties that are in the API and so do not constitute a breaking change. Expect to see no change to how component theming works or any visual regressions as a result of this change.

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/helptext@6.0.0

## 7.3.0

### Minor Changes

📝 [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/helptext@5.2.0

## 7.2.3

### Patch Changes

📝 [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)!

- Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/helptext@5.1.3

## 7.2.2

### Patch Changes

📝 [#3012](https://github.com/adobe/spectrum-css/pull/3012) [`78c98bf`](https://github.com/adobe/spectrum-css/commit/78c98bf15bfc82656acd14a4a22fc537f722b60d) Thanks [@cdransf](https://github.com/cdransf)!

- Modify the stepper and textfield css to allow the .is-disabled state and class to properly disable the border behavior that would occur when a disabled stepper was hovered. It also leverages the outline state for focused components to align with the state currently used by button components.

## 7.2.1

### Patch Changes

📝 [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)!

- Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/helptext@5.1.2

## 7.2.0

### Minor Changes

📝 [#2771](https://github.com/adobe/spectrum-css/pull/2771) [`81e86b1`](https://github.com/adobe/spectrum-css/commit/81e86b1adc442c891948281f1f66efea795c0447) Thanks [@jawinn](https://github.com/jawinn)!

- Removes some legacy vendor prefixes that are no longer necessary, including some that were for older browsers that are no longer in browser support list for Spectrum CSS. Such as Microsoft Edge before version 79. Includes some cleanup around some of the related normalization styles in the Text field component and the Commons `%spectrum-BaseButton` (used for multiple button components).

## 7.1.3

### Patch Changes

📝 [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)!

- Leverage local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/helptext@5.1.1

## 7.1.2

### Patch Changes

📝 [#2761](https://github.com/adobe/spectrum-css/pull/2761) [`d945c05`](https://github.com/adobe/spectrum-css/commit/d945c05bc42d7c9d46c80d0857181479d73cf4fa) Thanks [@mdt2](https://github.com/mdt2)!

- Fixes an issue in the Quiet variant where hovering over the focus pseudo element was firing pointer events that weren't meant to be seen unless the user hovered over the input element itself.

## 7.1.1

### Patch Changes

📝 [#2759](https://github.com/adobe/spectrum-css/pull/2759) [`9652981`](https://github.com/adobe/spectrum-css/commit/965298128a39ec40543f659480559053b33394e2) Thanks [@castastrophe](https://github.com/castastrophe)!

- fix: when whitespace normalization is done before stylelint fixes, a few selector optimizations were uncovered.

## 7.1.0

### Minor Changes

📝 [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/helptext@>=5
  - @spectrum-css/tokens@>=14

## 7.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.1.6...@spectrum-css/textfield@7.0.0)

### ✨ Features

- use storybook v8 ([#2604](https://github.com/adobe/spectrum-css/issues/2604))([166ab23](https://github.com/adobe/spectrum-css/commit/166ab23))

- feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGE

- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

## 6.1.6

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.1.5...@spectrum-css/textfield@6.1.6)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.1.5

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.1.4...@spectrum-css/textfield@6.1.5)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.1.4

🗓 2024-02-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.1.3...@spectrum-css/textfield@6.1.4)

### 🐛 Bug fixes

- **textfield:** icon positioning with field label ([#2380](https://github.com/adobe/spectrum-css/issues/2380))([468b426](https://github.com/adobe/spectrum-css/commit/468b426))
- **textfield:** remove extra padding on nested label and help ([#2519](https://github.com/adobe/spectrum-css/issues/2519))([0250d0e](https://github.com/adobe/spectrum-css/commit/0250d0e))

## 6.1.3

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.1.2...@spectrum-css/textfield@6.1.3)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.1.2

🗓 2024-02-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.1.1...@spectrum-css/textfield@6.1.2)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.1.1

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-css/textfield

## 6.1.0

🗓 2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.31...@spectrum-css/textfield@6.1.0)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.31

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.30...@spectrum-css/textfield@6.0.31)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.30

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.29...@spectrum-css/textfield@6.0.30)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.29

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.28...@spectrum-css/textfield@6.0.29)

### 🐛 Bug fixes

- **textfield:** focus outline only on keyboard focus([e919679](https://github.com/adobe/spectrum-css/commit/e919679))

## 6.0.28

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.26...@spectrum-css/textfield@6.0.28)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.27

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.26...@spectrum-css/textfield@6.0.27)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.26

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.25...@spectrum-css/textfield@6.0.26)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.25

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.24...@spectrum-css/textfield@6.0.25)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.24

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.23...@spectrum-css/textfield@6.0.24)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.23

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.22...@spectrum-css/textfield@6.0.23)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.22

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.21

🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.20...@spectrum-css/textfield@6.0.21)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.20

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.19...@spectrum-css/textfield@6.0.20)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.19

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.18...@spectrum-css/textfield@6.0.19)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.18

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.17...@spectrum-css/textfield@6.0.18)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.17

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.16...@spectrum-css/textfield@6.0.17)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.16

🗓 2023-08-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.15...@spectrum-css/textfield@6.0.16)

### 🐛 Bug fixes

- **textfield:** add line-height to prevent missing diacritics ([#2123](https://github.com/adobe/spectrum-css/issues/2123))([e44e4f4](https://github.com/adobe/spectrum-css/commit/e44e4f4))

### 🔙 Reverts

- gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

## 6.0.15

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.14...@spectrum-css/textfield@6.0.15)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.14

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.12...@spectrum-css/textfield@6.0.14)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.13

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.12...@spectrum-css/textfield@6.0.13)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.12

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.11...@spectrum-css/textfield@6.0.12)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.11

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.10...@spectrum-css/textfield@6.0.11)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.10

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.9...@spectrum-css/textfield@6.0.10)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.9

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.8...@spectrum-css/textfield@6.0.9)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.8

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.7...@spectrum-css/textfield@6.0.8)

### 🐛 Bug fixes

- icon sizing in Storybook story templates ([#2037](https://github.com/adobe/spectrum-css/issues/2037))([c90c8a3](https://github.com/adobe/spectrum-css/commit/c90c8a3))

## 6.0.7

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.6...@spectrum-css/textfield@6.0.7)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.6

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.5...@spectrum-css/textfield@6.0.6)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.5

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.4...@spectrum-css/textfield@6.0.5)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.4

🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.3...@spectrum-css/textfield@6.0.4)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.3

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.2...@spectrum-css/textfield@6.0.3)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.2

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.1...@spectrum-css/textfield@6.0.2)

**Note:** Version bump only for package @spectrum-css/textfield

## 6.0.1

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@6.0.0...@spectrum-css/textfield@6.0.1)

### 🐛 Bug fixes

- restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

## 6.0.0

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@5.1.11...@spectrum-css/textfield@6.0.0)

- chore(search)!: core tokens migration (#1761)([b54d8ef](https://github.com/adobe/spectrum-css/commit/b54d8ef)), closes[#1761](https://github.com/adobe/spectrum-css/issues/1761)

### 🛑 BREAKING CHANGE

- migrates Search to use `@adobe/spectrum-tokens`

## 5.1.11

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@5.1.10...@spectrum-css/textfield@5.1.11)

**Note:** Version bump only for package @spectrum-css/textfield

## 5.1.10

🗓 2023-05-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@5.1.9...@spectrum-css/textfield@5.1.10)

### 🐛 Bug fixes

- **textfield:** mod name for keyboard focus color ([4d7f170](https://github.com/adobe/spectrum-css/commit/4d7f170))
- **textfield:** valid in storybook - display correct icon size ([37ca676](https://github.com/adobe/spectrum-css/commit/37ca676))

## 5.1.9

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@5.1.8...@spectrum-css/textfield@5.1.9)

**Note:** Version bump only for package @spectrum-css/textfield

## 5.1.8

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@5.1.7...@spectrum-css/textfield@5.1.8)

**Note:** Version bump only for package @spectrum-css/textfield

## 5.1.7

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@5.1.6...@spectrum-css/textfield@5.1.7)

### Features

#### Icons

Icons are now added as SVGs, with `svg.spectrum-Textfield-validationIcon` used for the UI icons that can indicate valid or invalid input.

### 🐛 Bug fixes

- **textfield, stepper:** button padding and focus indicator ([#1863](https://github.com/adobe/spectrum-css/issues/1863)) ([7963b85](https://github.com/adobe/spectrum-css/commit/7963b85))

## 5.1.6

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@5.1.5...@spectrum-css/textfield@5.1.6)

**Note:** Version bump only for package @spectrum-css/textfield

## 5.1.5

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@5.1.4...@spectrum-css/textfield@5.1.5)

**Note:** Version bump only for package @spectrum-css/textfield

## 5.1.4

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@5.1.3...@spectrum-css/textfield@5.1.4)

**Note:** Version bump only for package @spectrum-css/textfield

## 5.1.3

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@5.1.2...@spectrum-css/textfield@5.1.3)

**Note:** Version bump only for package @spectrum-css/textfield

## 5.1.2

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@5.1.1...@spectrum-css/textfield@5.1.2)

### 🐛 Bug fixes

- **stepper:** fix stepper button padding and borders ([#1856](https://github.com/adobe/spectrum-css/issues/1856)) ([55f2b08](https://github.com/adobe/spectrum-css/commit/55f2b08))

## 5.1.1

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@5.1.0...@spectrum-css/textfield@5.1.1)

**Note:** Version bump only for package @spectrum-css/textfield

## 5.1.0

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@5.0.0...@spectrum-css/textfield@5.1.0)

### ✨ Features

- **floatingactionbutton:** add new component ([#1793](https://github.com/adobe/spectrum-css/issues/1793)) ([174f438](https://github.com/adobe/spectrum-css/commit/174f438))

## 5.0.0

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.15...@spectrum-css/textfield@5.0.0)

- fix(textfield, combobox)!: adjust padding calculations (#1803) ([09c1bdc](https://github.com/adobe/spectrum-css/commit/09c1bdc)), closes [#1803](https://github.com/adobe/spectrum-css/issues/1803)

### 🛑 BREAKING CHANGE

- removes `--mod-combobox-icon-size`, `--mod-combobox-spacing-block-start-to-border`, `--mod-combobox-spacing-inline-start-to-textfield`, `--mod-combobox-spacing-block-start-edge-to-textfield`, `--mod-combobox-spacing-block-end-edge-to-textfield`, and `--mod-combobox-spacing-inline-start-edge-to-textfield`.

Additionally:

- fix: exclude border width from padding with text inputs + more fixes

- Textfield and Combobox: exclude border width from padding calculations
  because most of the to-edge tokens include the border, and the values
  were 1px larger than they should have been.
- Textfield and Combobox: fix corner radius of focus indicator when
  using a larger border radius (e.g. try setting a --mod border width
  of 5px; the calculation adding the border width was incorrect)
- Combobox: adjust styles so custom property for border width is
  correctly overriding everything from its sub-components. Previously
  using --mod-combobox-border-width had no effect.
- Combobox: simplify/remove some custom properties related to those
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

## 4.1.15

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.14...@spectrum-css/textfield@4.1.15)

**Note:** Version bump only for package @spectrum-css/textfield

## 4.1.14

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.12...@spectrum-css/textfield@4.1.14)

**Note:** Version bump only for package @spectrum-css/textfield

## 4.1.13

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.12...@spectrum-css/textfield@4.1.13)

**Note:** Version bump only for package @spectrum-css/textfield

## 4.1.12

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.11...@spectrum-css/textfield@4.1.12)

### 🐛 Bug fixes

- **textfield:** fix WHCM focus color ([3b23557](https://github.com/adobe/spectrum-css/commit/3b23557))
- **textfield:** update WHCM focus border colors ([392c16e](https://github.com/adobe/spectrum-css/commit/392c16e))

## 4.1.11

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.10...@spectrum-css/textfield@4.1.11)

**Note:** Version bump only for package @spectrum-css/textfield

## 4.1.10

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.9...@spectrum-css/textfield@4.1.10)

**Note:** Version bump only for package @spectrum-css/textfield

## 4.1.9

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.8...@spectrum-css/textfield@4.1.9)

**Note:** Version bump only for package @spectrum-css/textfield

## 4.1.8

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.7...@spectrum-css/textfield@4.1.8)

**Note:** Version bump only for package @spectrum-css/textfield

## 4.1.7

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.5...@spectrum-css/textfield@4.1.7)

**Note:** Version bump only for package @spectrum-css/textfield

## 4.1.6

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.5...@spectrum-css/textfield@4.1.6)

**Note:** Version bump only for package @spectrum-css/textfield

## 4.1.5

🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.3...@spectrum-css/textfield@4.1.5)

**Note:** Version bump only for package @spectrum-css/textfield

## 4.1.4

🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.3...@spectrum-css/textfield@4.1.4)

**Note:** Version bump only for package @spectrum-css/textfield

## 4.1.3

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.2...@spectrum-css/textfield@4.1.3)

**Note:** Version bump only for package @spectrum-css/textfield

## 4.1.2

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.1...@spectrum-css/textfield@4.1.2)

**Note:** Version bump only for package @spectrum-css/textfield

## 4.1.1

🗓 2023-03-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.0...@spectrum-css/textfield@4.1.1)

**Note:** Version bump only for package @spectrum-css/textfield

## 4.1.0

🗓 2023-03-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.0.3...@spectrum-css/textfield@4.1.0)

### ✨ Features

- **textfield:** remove custom search icon styles ([cc72eca](https://github.com/adobe/spectrum-css/commit/cc72eca))

## 4.0.3

🗓 2023-03-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.0.2...@spectrum-css/textfield@4.0.3)

### 🐛 Bug fixes

- **textfield:** add search icon exception ([#1690](https://github.com/adobe/spectrum-css/issues/1690)) ([dcdec2d](https://github.com/adobe/spectrum-css/commit/dcdec2d))

## 4.0.2

🗓 2023-03-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.0.1...@spectrum-css/textfield@4.0.2)

### 🐛 Bug fixes

- **textfield:** quiet focus indicator on click ([#1685](https://github.com/adobe/spectrum-css/issues/1685)) ([51263fb](https://github.com/adobe/spectrum-css/commit/51263fb))

## 4.0.1

🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.0.0...@spectrum-css/textfield@4.0.1)

**Note:** Version bump only for package @spectrum-css/textfield

## 4.0.0

🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.16...@spectrum-css/textfield@4.0.0)

- refactor(textfield)!: migrate spectrum tokens (#1544) ([1723f01](https://github.com/adobe/spectrum-css/commit/1723f01)), closes [#1544](https://github.com/adobe/spectrum-css/issues/1544)

### 🛑 BREAKING CHANGE

- migrates textfield to spectrum tokens

- Updates to latest tokens package
- WHCM added
- Focus state and dependency fixes
- Leveraging CSS grid for help text placement and character count

- removes placeholder from stepper inputs

- feat(stepper): add hideStepper control to fix border styling issue
- refactor(stepper): adding native pseudo class styles
- refactor(stepper): add support for invalid textfield styling

### Migration guide

#### T-shirt sizes

As of token migration, textfield now has t-shirt sizes. Medium is the default size if no size variant is applied. Icon sizes must match each t-shirt size.

#### Label

As of token migration, textfield must always have a label. Label placement is top or on the side (start).

#### Character Count

As of token migration, textfield now has an optional character count. The character count moves to the side (end) when the label position is on the side (start). This count needs to be read by a screen reader but we cannot just use a live region as that will result in an overly verbose experience Adjust the markup of the character count for optimal accessibility for each API.

#### Help Text

As of token migration, Help text is optional and has only one position below the textfield input. Help text aligns with the input in both standard and side label layouts.

#### Composition

As of spectrum tokens migration, Textfield uses grid to align the label, character count, helptext, and focus indicator in both the default and side label layouts.

Any application using Textarea Grows (Textarea input which automatically resizes vertically to accommodate content that is entered) will need to place the sizer element within the same grid area as the input and focus indicator.

#### Indicating validity and focus

##### Valid Icon

Validation icons are as follows.
Small
`spectrum-Icon spectrum-UIIcon-Checkmark75 spectrum-Textfield-validationIcon`

Medium
`spectrum-Icon spectrum-UIIcon-Checkmark100 spectrum-Textfield-validationIcon`

Large
`spectrum-Icon spectrum-UIIcon-Checkmark200 spectrum-Textfield-validationIcon`

Extra Large
`spectrum-Icon spectrum-UIIcon-Checkmark7300 spectrum-Textfield-validationIcon`

##### Invalid Icon

Uses #spectrum-icon-18-Alert

Small
`spectrum-Icon spectrum-Icon--sizeS spectrum-Textfield-validationIcon`

Medium
`spectrum-Icon spectrum-Icon--sizeM spectrum-Textfield-validationIcon`

Large
`spectrum-Icon spectrum-Icon--sizeL spectrum-Textfield-validationIcon`

Extra Large
`spectrum-Icon spectrum-Icon--sizeXL spectrum-Textfield-validationIcon`

##### Removal of `:valid`, `:invalid`, and `::placeholder`

Textfield no longer supports the CSS pseudo selectors [`:invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid) and [`:value`](https://developer.mozilla.org/en-US/docs/Web/CSS/:valid).

The CSS pseudo-element [`::placeholder`](https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder) has been deprecated due to accessibility. The styling remains for backwards compatibility but it is advised to stop utilizing placeholders moving forward.

## 3.2.16

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.15...@spectrum-css/textfield@3.2.16)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.2.15

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.14...@spectrum-css/textfield@3.2.15)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.2.14

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.13...@spectrum-css/textfield@3.2.14)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.2.13

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.12...@spectrum-css/textfield@3.2.13)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.2.12

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.11...@spectrum-css/textfield@3.2.12)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.2.11

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.10...@spectrum-css/textfield@3.2.11)

### 🐛 Bug fixes

- **textfield,picker:** restore missing vars ([#1607](https://github.com/adobe/spectrum-css/issues/1607)) ([45f36f6](https://github.com/adobe/spectrum-css/commit/45f36f6))

## 3.2.10

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.9...@spectrum-css/textfield@3.2.10)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.2.9

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.8...@spectrum-css/textfield@3.2.9)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.2.8

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.6...@spectrum-css/textfield@3.2.8)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.2.7

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.6...@spectrum-css/textfield@3.2.7)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.2.6

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.5...@spectrum-css/textfield@3.2.6)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.2.5

🗓 2022-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.4...@spectrum-css/textfield@3.2.5)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.2.4

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.3...@spectrum-css/textfield@3.2.4)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.2.3

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.2...@spectrum-css/textfield@3.2.3)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.2.2

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.1...@spectrum-css/textfield@3.2.2)

### 🐛 Bug fixes

- textfield WHCM ([ef76b02](https://github.com/adobe/spectrum-css/commit/ef76b02))

## 3.2.1

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.0...@spectrum-css/textfield@3.2.1)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.2.0

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.1.10...@spectrum-css/textfield@3.2.0)

### ✨ Features

- **textfield:** add read-only state ([f7d0ac3](https://github.com/adobe/spectrum-css/commit/f7d0ac3))

## 3.1.10

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.1.9...@spectrum-css/textfield@3.1.10)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.1.9

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.1.8...@spectrum-css/textfield@3.1.9)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.1.8

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.1.7...@spectrum-css/textfield@3.1.8)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.1.7

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.1.6...@spectrum-css/textfield@3.1.7)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.1.6

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.1.5...@spectrum-css/textfield@3.1.6)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.1.5

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.1.4...@spectrum-css/textfield@3.1.5)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.1.4

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.1.3...@spectrum-css/textfield@3.1.4)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.1.3

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.1.1...@spectrum-css/textfield@3.1.3)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

## 3.1.2

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.1.1...@spectrum-css/textfield@3.1.2)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.1.1

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.1.0...@spectrum-css/textfield@3.1.1)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.1.0

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.7...@spectrum-css/textfield@3.1.0)

### ✨ Features

- make textfield support a halo focus ring for Express ([d2c57b7](https://github.com/adobe/spectrum-css/commit/d2c57b7))

## 3.0.7

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.6...@spectrum-css/textfield@3.0.7)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.0.6

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.5...@spectrum-css/textfield@3.0.6)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.0.5

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.4...@spectrum-css/textfield@3.0.5)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))
- used correct token for textfield quiet underline; closes [#1273](https://github.com/adobe/spectrum-css/issues/1273) ([17a21ef](https://github.com/adobe/spectrum-css/commit/17a21ef))

## 3.0.4

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.3...@spectrum-css/textfield@3.0.4)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))
- used correct token for textfield quiet underline; closes [#1273](https://github.com/adobe/spectrum-css/issues/1273) ([17a21ef](https://github.com/adobe/spectrum-css/commit/17a21ef))

## 3.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.2...@spectrum-css/textfield@3.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.1...@spectrum-css/textfield@3.0.2)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.0...@spectrum-css/textfield@3.0.1)

**Note:** Version bump only for package @spectrum-css/textfield

## 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@2.0.6...@spectrum-css/textfield@3.0.0)

### ✨ Features

- refactor Textfield to be decorated, closes [#142](https://github.com/adobe/spectrum-css/issues/142) ([d34be59](https://github.com/adobe/spectrum-css/commit/d34be59))

### Migration guide

Notes below apply to both text field and text area.

#### Composition

As of 3.0.0, Textfield is now composed the same way a DecoratedTextfield was previously. That is, the outer element `div.spectrum-Textfield` contains a `input.spectrum-Textfield-input`.

#### Icons

The `<svg>` element should appear before the `<input>` element.

#### Indicating validity and focus

Validity and focus must be bubbled up to the parent so adjacent siblings can be styled.

Thus, implementations must add the following classes in the following situations:

- `.spectrum-Textfield.is-focused` - when the input is focused with the mouse
- `.spectrum-Textfield.is-keyboardFocused` - when the input is focused with the keyboard
- `.spectrum-Textfield.is-valid` - when the input has an explicit valid state
- `.spectrum-Textfield.is-invalid` - when the input has an explicit invalid state

#### Removal of `:valid`, `:invalid`, and `::placeholder`

Textfield no longer supports the CSS pseudo selectors [`:invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid) and [`:value`](https://developer.mozilla.org/en-US/docs/Web/CSS/:valid).

Using these selectors is an anti-pattern that complicates form validation techniques by making inputs appear invalid immediately, not after use interaction. Please apply `.is-valid` and `.is-invalid` to the outer `div.spectrum-Textfield` element instead.

#### Variants

Variants must be applied to the parent element, i.e. `.spectrum-Textfield.spectrum-Textfield--quiet` or `.spectrum-Textfield.spectrum-Textfield--multiline`. The `<input>` will be styled appropriately.

### 🛑 BREAKING CHANGE

- remove support for .is-focused on .spectrum-Textfield-input
- remove support for .is-invalid/.is-valid on .spectrum-Textfield-input (must go on parent)
- remove support for .is-disabled on .spectrum-Textfield-input (must go on parent)
- markup changed completely, see migration guide

Co-authored-by: Daniel Lu <dlu@livefyre.com>

## 2.0.6

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@2.0.5...@spectrum-css/textfield@2.0.6)

**Note:** Version bump only for package @spectrum-css/textfield

## 2.0.5

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@2.0.4...@spectrum-css/textfield@2.0.5)

### 🐛 Bug fixes

- alignment of icon in DecoratedTextfield and Textfield, closes [#494](https://github.com/adobe/spectrum-css/issues/494) ([#499](https://github.com/adobe/spectrum-css/issues/499)) ([dcf8587](https://github.com/adobe/spectrum-css/commit/dcf8587))

## 2.0.4

🗓 2020-01-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@2.0.3...@spectrum-css/textfield@2.0.4)

### 🐛 Bug fixes

- correct bottom padding to text alignment issues ([6e782ed](https://github.com/adobe/spectrum-css/commit/6e782ed))
- correct Textfield and Textarea padding, fixes [#454](https://github.com/adobe/spectrum-css/issues/454), fixes [#489](https://github.com/adobe/spectrum-css/issues/489) ([120e502](https://github.com/adobe/spectrum-css/commit/120e502))

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@2.0.2...@spectrum-css/textfield@2.0.3)

### 🐛 Bug fixes

- disable resize functionality when disabled, fixes [#443](https://github.com/adobe/spectrum-css/issues/443) ([#446](https://github.com/adobe/spectrum-css/issues/446)) ([f069c00](https://github.com/adobe/spectrum-css/commit/f069c00))
- make quiet Text area 1 line tall by default, fixes [#442](https://github.com/adobe/spectrum-css/issues/442) ([#447](https://github.com/adobe/spectrum-css/issues/447)) ([be910e8](https://github.com/adobe/spectrum-css/commit/be910e8))

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@2.0.1...@spectrum-css/textfield@2.0.2)

**Note:** Version bump only for package @spectrum-css/textfield

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@2.0.0...@spectrum-css/textfield@2.0.1)

**Note:** Version bump only for package @spectrum-css/textfield

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)

### 🐛 Bug fixes

- use correct token for Textfield border-radius ([ca9c315](https://github.com/adobe/spectrum-css/commit/ca9c315))
