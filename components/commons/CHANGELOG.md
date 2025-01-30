# Change Log

## 11.0.0

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

- Updated dependencies [[`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6), [`3d08cea`](https://github.com/adobe/spectrum-css/commit/3d08cea0f590c8c2de7252677a6b81b8cc206b9a)]:
  - @spectrum-css/tokens@16.0.0

## 10.1.1

### Patch Changes

- [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)! - Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0

## 10.1.0

### Minor Changes

- [#2771](https://github.com/adobe/spectrum-css/pull/2771) [`81e86b1`](https://github.com/adobe/spectrum-css/commit/81e86b1adc442c891948281f1f66efea795c0447) Thanks [@jawinn](https://github.com/jawinn)! - Removes some legacy vendor prefixes that are no longer necessary, including some that were for older browsers that are no longer in browser support list for Spectrum CSS. Such as Microsoft Edge before version 79. Includes some cleanup around some of the related normalization styles in the Text field component and the Commons `%spectrum-BaseButton` (used for multiple button components).

## 10.0.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="10.0.0"></a>

## 10.0.0

🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@9.1.2...@spectrum-css/commons@10.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="9.1.2"></a>

## 9.1.2

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@9.1.1...@spectrum-css/commons@9.1.2)

**Note:** Version bump only for package @spectrum-css/commons

<a name="9.1.1"></a>

## 9.1.1

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/commons

<a name="9.1.0"></a>

## 9.1.0

🗓
2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@9.0.2...@spectrum-css/commons@9.1.0)

### ✨ Features

- **overlay,commons:**deprecate overlay; migrate references to commons ([#2429](https://github.com/adobe/spectrum-css/issues/2429))([7eecd96](https://github.com/adobe/spectrum-css/commit/7eecd96))

### 🐛 Bug fixes

- **commons:**rename and deprecate mods referencing global tokens ([#2423](https://github.com/adobe/spectrum-css/issues/2423))([3a49432](https://github.com/adobe/spectrum-css/commit/3a49432))

<a name="9.0.2"></a>

## 9.0.2

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@9.0.1...@spectrum-css/commons@9.0.2)

**Note:** Version bump only for package @spectrum-css/commons

<a name="9.0.1"></a>

## 9.0.1

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@9.0.0...@spectrum-css/commons@9.0.1)

**Note:** Version bump only for package @spectrum-css/commons

<a name="9.0.0"></a>

## 9.0.0

🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@8.0.1...@spectrum-css/commons@9.0.0)

\*feat(overlay)!: migrate to spectrum-tokens (#2165)([0331dae](https://github.com/adobe/spectrum-css/commit/0331dae)), closes[#2165](https://github.com/adobe/spectrum-css/issues/2165)

    	###
    	🛑 BREAKING CHANGES

    		*
    		migrates Overlay to use `@adobe/spectrum-tokens`

- feat(overlay): migrate to use spectrum-tokens BREAKING CHANGE: migrate overlay to use spectrum tokens
- chore(tokens): add custom tokens to overlay component
- docs: regenerate mods

<a name="8.0.1"></a>

## 8.0.1

🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@8.0.0...@spectrum-css/commons@8.0.1)

**Note:** Version bump only for package @spectrum-css/commons

<a name="8.0.0"></a>

## 8.0.0

🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@7.0.8...@spectrum-css/commons@8.0.0)

\*refactor(button)!: replace focus-ring with focus-visible([5ec4849](https://github.com/adobe/spectrum-css/commit/5ec4849))

    	###
    	🛑 BREAKING CHANGES

    		*
    		use native focus-visible pseudo class for focus styling on button and basebutton

<a name="7.0.8"></a>

## 7.0.8

🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@7.0.7...@spectrum-css/commons@7.0.8)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="7.0.7"></a>

## 7.0.7

🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@7.0.6...@spectrum-css/commons@7.0.7)

**Note:** Version bump only for package @spectrum-css/commons

<a name="7.0.6"></a>

## 7.0.6

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@7.0.5...@spectrum-css/commons@7.0.6)

**Note:** Version bump only for package @spectrum-css/commons

<a name="7.0.5"></a>

## 7.0.5

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@7.0.4...@spectrum-css/commons@7.0.5)

**Note:** Version bump only for package @spectrum-css/commons

<a name="7.0.4"></a>

## 7.0.4

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@7.0.2...@spectrum-css/commons@7.0.4)

**Note:** Version bump only for package @spectrum-css/commons

<a name="7.0.3"></a>

## 7.0.3

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@7.0.2...@spectrum-css/commons@7.0.3)

**Note:** Version bump only for package @spectrum-css/commons

<a name="7.0.2"></a>

## 7.0.2

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@7.0.1...@spectrum-css/commons@7.0.2)

**Note:** Version bump only for package @spectrum-css/commons

<a name="7.0.1"></a>

## 7.0.1

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@7.0.0...@spectrum-css/commons@7.0.1)

**Note:** Version bump only for package @spectrum-css/commons

<a name="7.0.0"></a>

## 7.0.0

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@6.0.0...@spectrum-css/commons@7.0.0)

- chore(tokens)!: use latest dependency & fix build error (#1591) ([f2532e7](https://github.com/adobe/spectrum-css/commit/f2532e7)), closes [#1591](https://github.com/adobe/spectrum-css/issues/1591)

### 🛑 BREAKING CHANGES

- uses latest `@adobe/spectrum-tokens` dependency which includes token renames

<a name="6.0.0"></a>

## 6.0.0

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@4.0.2...@spectrum-css/commons@6.0.0)

- feat(button)!: migrating button to core-tokens (CSS-97) (#1479) ([0640be0](https://github.com/adobe/spectrum-css/commit/0640be0)), closes [#1479](https://github.com/adobe/spectrum-css/issues/1479)

### 🛑 BREAKING CHANGES

- migrates the Button to core tokens

<a name="5.0.0"></a>

## 5.0.0

🗓 2023-01-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@5.0.0-beta.0...@spectrum-css/commons@5.0.0)

- feat(button)!: migrating button to core-tokens (CSS-97) (#1479) ([0640be0](https://github.com/adobe/spectrum-css/commit/0640be0)), closes [#1479](https://github.com/adobe/spectrum-css/issues/1479)

### 🛑 BREAKING CHANGES

- migrates the Button to core tokens

<a name="4.1.0-beta.0"></a>

## 4.1.0-beta.0

🗓 2023-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@4.0.2...@spectrum-css/commons@4.1.0-beta.0)

### ✨ Features

- migrating to core tokens v5.0.0 ([6e640ba](https://github.com/adobe/spectrum-css/commit/6e640ba))

<a name="4.0.2"></a>

## 4.0.2

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@4.0.0...@spectrum-css/commons@4.0.2)

**Note:** Version bump only for package @spectrum-css/commons

<a name="4.0.1"></a>

## 4.0.1

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@4.0.0...@spectrum-css/commons@4.0.1)

**Note:** Version bump only for package @spectrum-css/commons

<a name="4.0.0"></a>

## 4.0.0

🗓 2022-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@3.0.6...@spectrum-css/commons@4.0.0)

- refactor(popover)!: migrate to core tokens (#1509) ([011e486](https://github.com/adobe/spectrum-css/commit/011e486)), closes [#1509](https://github.com/adobe/spectrum-css/issues/1509)

### 🛑 BREAKING CHANGES

- migrates popover to core tokens

Co-authored-by: Garth Braithwaite <garthdb@gmail.com>
Co-authored-by: Patrick Fulton <pfulton@adobe.com>

<a name="3.0.6"></a>

## 3.0.6

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@3.0.5...@spectrum-css/commons@3.0.6)

**Note:** Version bump only for package @spectrum-css/commons

<a name="3.0.5"></a>

## 3.0.5

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@3.0.3-alpha.0...@spectrum-css/commons@3.0.5)

### 🐛 Bug fixes

- unbreak the build ([d595cad](https://github.com/adobe/spectrum-css/commit/d595cad))

<a name="3.0.4"></a>

## 3.0.4

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@3.0.4-beta.0...@spectrum-css/commons@3.0.4)

**Note:** Version bump only for package @spectrum-css/commons

<a name="3.0.4-beta.0"></a>

## 3.0.4-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@3.0.3-alpha.0...@spectrum-css/commons@3.0.4-beta.0)

### 🐛 Bug fixes

- unbreak the build ([123add2](https://github.com/adobe/spectrum-css/commit/123add2))

<a name="3.0.3"></a>

## 3.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@3.0.3-alpha.0...@spectrum-css/commons@3.0.3)

**Note:** Version bump only for package @spectrum-css/commons

<a name="3.0.3-alpha.0"></a>

## 3.0.3-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@3.0.2...@spectrum-css/commons@3.0.3-alpha.0)

**Note:** Version bump only for package @spectrum-css/commons

<a name="3.0.2"></a>

## 3.0.2

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@3.0.1...@spectrum-css/commons@3.0.2)

### 🐛 Bug fixes

- re-enable touch scrolling for buttons. ([ad649f9](https://github.com/adobe/spectrum-css/commit/ad649f9))

<a name="3.0.1"></a>

## 3.0.1

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@3.0.0...@spectrum-css/commons@3.0.1)

**Note:** Version bump only for package @spectrum-css/commons

<a name="3.0.0"></a>

## 3.0.0

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@2.1.0...@spectrum-css/commons@3.0.0)

### ✨ Features

- fixup padding ([612dd0c](https://github.com/adobe/spectrum-css/commit/612dd0c))
- implement t-shirt sizing for Action Button, closes [#936](https://github.com/adobe/spectrum-css/issues/936) ([1a9ecf6](https://github.com/adobe/spectrum-css/commit/1a9ecf6))

### 🛑 BREAKING CHANGES

- .spectrum-ActionButton is no longer part of the button component, use the actionbutton component

<a name="2.1.0"></a>

## 2.1.0

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/commons@2.0.0...@spectrum-css/commons@2.1.0)

### ✨ Features

- adding t-shirt sized typography, fixes [#210](https://github.com/adobe/spectrum-css/issues/210), closes [#416](https://github.com/adobe/spectrum-css/issues/416) ([#408](https://github.com/adobe/spectrum-css/issues/408)) ([3921bcb](https://github.com/adobe/spectrum-css/commit/3921bcb)), closes [#523](https://github.com/adobe/spectrum-css/issues/523)

<a name="2.0.0"></a>

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
