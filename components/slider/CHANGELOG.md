# Change Log

## 6.0.0-s2-foundations.11

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`b0862e1`](https://github.com/adobe/spectrum-css/commit/b0862e1a5b95c19443fd919c6baf4b4ea9ba79c1) Thanks [@pfulton](https://github.com/pfulton)! - Updated build to set cssnano to discardUnused: false

### Patch Changes

- Updated dependencies [[`b0862e1`](https://github.com/adobe/spectrum-css/commit/b0862e1a5b95c19443fd919c6baf4b4ea9ba79c1)]:
  - @spectrum-css/stepper@7.0.0-s2-foundations.11
  - @spectrum-css/tokens@15.0.0-s2-foundations.12

## 6.0.0-s2-foundations.10

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`0844aad`](https://github.com/adobe/spectrum-css/commit/0844aadba2fefb844a66370ff6e9b4704f6c1543) Thanks [@pfulton](https://github.com/pfulton)! - Fixes to index.css imports to ensure appropriate system mappings get loaded

### Patch Changes

- Updated dependencies [[`0844aad`](https://github.com/adobe/spectrum-css/commit/0844aadba2fefb844a66370ff6e9b4704f6c1543)]:
  - @spectrum-css/stepper@7.0.0-s2-foundations.10
  - @spectrum-css/tokens@15.0.0-s2-foundations.10

## 6.0.0-s2-foundations.9

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`84c8721`](https://github.com/adobe/spectrum-css/commit/84c87212ccb37c887225eaff28e84d9f8e608e09) Thanks [@pfulton](https://github.com/pfulton)! - Push out the latest release to the components

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`0a0dace`](https://github.com/adobe/spectrum-css/commit/0a0dacec163234bc73961ef17826cdc33765d9df) Thanks [@pfulton](https://github.com/pfulton)! - Across the board version update to latest build system state

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`681ba47`](https://github.com/adobe/spectrum-css/commit/681ba478c1259d0bbb183670f3188538ec3bee1d) Thanks [@pfulton](https://github.com/pfulton)! - Doing a widespread release on all packages to ensure the latest compiled CSS is published.

- Updated dependencies [[`681ba47`](https://github.com/adobe/spectrum-css/commit/681ba478c1259d0bbb183670f3188538ec3bee1d), [`84c8721`](https://github.com/adobe/spectrum-css/commit/84c87212ccb37c887225eaff28e84d9f8e608e09), [`0a0dace`](https://github.com/adobe/spectrum-css/commit/0a0dacec163234bc73961ef17826cdc33765d9df)]:
  - @spectrum-css/stepper@7.0.0-s2-foundations.9
  - @spectrum-css/tokens@15.0.0-s2-foundations.9

## 6.0.0-s2-foundations.8

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`2633985`](https://github.com/adobe/spectrum-css/commit/2633985775ef5a8fad929e275e55e99b75b10959) Thanks [@pfulton](https://github.com/pfulton)! - Update system property tooling (splitinator) to leverage the selector parser

### Patch Changes

- Updated dependencies [[`2633985`](https://github.com/adobe/spectrum-css/commit/2633985775ef5a8fad929e275e55e99b75b10959)]:
  - @spectrum-css/stepper@7.0.0-s2-foundations.8
  - @spectrum-css/tokens@15.0.0-s2-foundations.8

## 6.0.0-s2-foundations.7

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`24a51cc`](https://github.com/adobe/spectrum-css/commit/24a51cc3b682a06a5133c4f5bf72c11a2337ee22) Thanks [@pfulton](https://github.com/pfulton)! - Revert themes asset naming to simplify code review; bug fixes in custom property loading from theme assets

### Patch Changes

- Updated dependencies [[`24a51cc`](https://github.com/adobe/spectrum-css/commit/24a51cc3b682a06a5133c4f5bf72c11a2337ee22)]:
  - @spectrum-css/stepper@7.0.0-s2-foundations.7
  - @spectrum-css/tokens@15.0.0-s2-foundations.7

## 6.0.0-s2-foundations.6

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`4d88749`](https://github.com/adobe/spectrum-css/commit/4d887492f98f1f505535680bfb0baa06d24460a0) Thanks [@pfulton](https://github.com/pfulton)! - Inject missing tokens into theme files and adjust logic in the splitinator tool to replace nested variable references to the new system mappings

- Updated dependencies [[`130e137`](https://github.com/adobe/spectrum-css/commit/130e1372b223641efe0a3a23c83ff1d01a70bf1d), [`4d88749`](https://github.com/adobe/spectrum-css/commit/4d887492f98f1f505535680bfb0baa06d24460a0)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.6
  - @spectrum-css/stepper@7.0.0-s2-foundations.6

## 6.0.0-s2-foundations.5

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`de1d39f`](https://github.com/adobe/spectrum-css/commit/de1d39fdedc297032735acf97d0f87b6f2e45f50) Thanks [@pfulton](https://github.com/pfulton)! - Fix to how the system mapped custom property names are generated; adding support for pseudo functions, combinators, and complex selectors

- Updated dependencies [[`de1d39f`](https://github.com/adobe/spectrum-css/commit/de1d39fdedc297032735acf97d0f87b6f2e45f50)]:
  - @spectrum-css/stepper@7.0.0-s2-foundations.5
  - @spectrum-css/tokens@15.0.0-s2-foundations.5

## 6.0.0-s2-foundations.4

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`485128c`](https://github.com/adobe/spectrum-css/commit/485128ca7947acb064f31e4118044a3f7e3f88b5) Thanks [@pfulton](https://github.com/pfulton)! - Corrects a faulty regex that was negatively affecting compilation of custom properties

- Updated dependencies [[`485128c`](https://github.com/adobe/spectrum-css/commit/485128ca7947acb064f31e4118044a3f7e3f88b5)]:
  - @spectrum-css/stepper@7.0.0-s2-foundations.4
  - @spectrum-css/tokens@15.0.0-s2-foundations.4

## 6.0.0-s2-foundations.3

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`6b12d37`](https://github.com/adobe/spectrum-css/commit/6b12d375c12b36f387b331fff42b24bc7c3845df) Thanks [@pfulton](https://github.com/pfulton)! - fixes a compilation issue in the tokens dist artifacts

### Patch Changes

- Updated dependencies [[`6b12d37`](https://github.com/adobe/spectrum-css/commit/6b12d375c12b36f387b331fff42b24bc7c3845df)]:
  - @spectrum-css/stepper@7.0.0-s2-foundations.3
  - @spectrum-css/tokens@15.0.0-s2-foundations.3

## 6.0.0-s2-foundations.2

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`b00388b`](https://github.com/adobe/spectrum-css/commit/b00388b3ab026989f261f7bcdd77699521f45d58) Thanks [@pfulton](https://github.com/pfulton)! - Preserves `themes` folder in `dist` artifacts for easier downstream consumption

### Patch Changes

- Updated dependencies [[`b00388b`](https://github.com/adobe/spectrum-css/commit/b00388b3ab026989f261f7bcdd77699521f45d58)]:
  - @spectrum-css/stepper@7.0.0-s2-foundations.2
  - @spectrum-css/tokens@15.0.0-s2-foundations.2

## 6.0.0-s2-foundations.1

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`39bbd6c`](https://github.com/adobe/spectrum-css/commit/39bbd6cbb7eac7c71515ef2417554cb115eba00e) Thanks [@pfulton](https://github.com/pfulton)! - Fixes an issue where vars.css was not being populated with the correct values

### Patch Changes

- Updated dependencies [[`39bbd6c`](https://github.com/adobe/spectrum-css/commit/39bbd6cbb7eac7c71515ef2417554cb115eba00e)]:
  - @spectrum-css/stepper@7.0.0-s2-foundations.1
  - @spectrum-css/tokens@15.0.0-s2-foundations.1

## 6.0.0-s2-foundations.0

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce) Thanks [@pfulton](https://github.com/pfulton)! - S2 colors + grays foundation

### Patch Changes

- Updated dependencies [[`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce)]:
  - @spectrum-css/stepper@7.0.0-s2-foundations.0
  - @spectrum-css/tokens@15.0.0-s2-foundations.0

## 5.2.4

### Patch Changes

- [#2979](https://github.com/adobe/spectrum-css/pull/2979) [`5954646`](https://github.com/adobe/spectrum-css/commit/5954646c450d5a43e31d77241e806358b3a8883d) Thanks [@lazd](https://github.com/lazd)! - Uses `z-index: 0` (instead of `z-index: 1`) for `spectrum-Slider` so that the slider no longer "floats" over other elements on the page.

## 5.2.3

### Patch Changes

- [#2752](https://github.com/adobe/spectrum-css/pull/2752) [`4465b9a`](https://github.com/adobe/spectrum-css/commit/4465b9a647b1714c70bb4052f4e2440fe055cc08) Thanks [@jawinn](https://github.com/jawinn)! - Fixes the visibility of the handle's outer circle on the ramp variant for high contrast mode. And refactors which custom properties are set in the forced-colors media query.

## 5.2.2

### Patch Changes

- [#2744](https://github.com/adobe/spectrum-css/pull/2744) [`e1ef34f`](https://github.com/adobe/spectrum-css/commit/e1ef34f698a99ddf273c512b23eb8615ddfe780b) Thanks [@mdt2](https://github.com/mdt2)! - Includes similar fixes for both Slider and Radio. Some parsers see `:pseudo:dir` as invalid, so we've changed it so that the pseudo element comes last `:dir :pseudo`.

## 5.2.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/stepper@6.1.2

## 5.2.0

### Minor Changes

- [#2754](https://github.com/adobe/spectrum-css/pull/2754) [`dbf1406`](https://github.com/adobe/spectrum-css/commit/dbf1406822be32aa1dbd2864b097853423bf06d8) Thanks [@jawinn](https://github.com/jawinn)! - Sets the `color` property in parts of some components that were relying on inheriting a color from higher up in the DOM.

## 5.1.1

### Patch Changes

- [#2740](https://github.com/adobe/spectrum-css/pull/2740) [`c0dd6a4`](https://github.com/adobe/spectrum-css/commit/c0dd6a443b410f37f3dc703d75e11c15519fd93e) Thanks [@jawinn](https://github.com/jawinn)! - Build change to remove the `postcss-preset-env` polyfill for the dist output of `:not` selectors containing multiple selectors, to avoid an unintended increase in specificity, which caused some visual regressions.

## 5.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/stepper@>=6
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="5.0.0"></a>

## 5.0.0

🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.3.5...@spectrum-css/slider@5.0.0)

### ✨ Features

\*use storybook v8 ([#2604](https://github.com/adobe/spectrum-css/issues/2604))([166ab23](https://github.com/adobe/spectrum-css/commit/166ab23))

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="4.3.5"></a>

## 4.3.5

🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.3.4...@spectrum-css/slider@4.3.5)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.3.4"></a>

## 4.3.4

🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.3.3...@spectrum-css/slider@4.3.4)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.3.3"></a>

## 4.3.3

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.3.2...@spectrum-css/slider@4.3.3)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.3.2"></a>

## 4.3.2

🗓
2024-02-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.3.1...@spectrum-css/slider@4.3.2)

### 🐛 Bug fixes

- **slider:**high contrast improvements for filled variants ([#2325](https://github.com/adobe/spectrum-css/issues/2325))([b78693c](https://github.com/adobe/spectrum-css/commit/b78693c))

<a name="4.3.1"></a>

## 4.3.1

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.3.0"></a>

## 4.3.0

🗓
2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.2.1...@spectrum-css/slider@4.3.0)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.2.1"></a>

## 4.2.1

🗓
2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.2.0...@spectrum-css/slider@4.2.1)

### 🐛 Bug fixes

\*deprecate logical transform plugin ([#2437](https://github.com/adobe/spectrum-css/issues/2437))([ff5dda6](https://github.com/adobe/spectrum-css/commit/ff5dda6))

<a name="4.2.0"></a>

## 4.2.0

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.19...@spectrum-css/slider@4.2.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="4.1.19"></a>

## 4.1.19

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.18...@spectrum-css/slider@4.1.19)

### 🐛 Bug fixes

- **slider:**correct rtl positioning of focus indicator ([#2342](https://github.com/adobe/spectrum-css/issues/2342))([e4f8292](https://github.com/adobe/spectrum-css/commit/e4f8292))

<a name="4.1.18"></a>

## 4.1.18

🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.17...@spectrum-css/slider@4.1.18)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.1.17"></a>

## 4.1.17

🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.15...@spectrum-css/slider@4.1.17)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.1.16"></a>

## 4.1.16

🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.15...@spectrum-css/slider@4.1.16)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.1.15"></a>

## 4.1.15

🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.14...@spectrum-css/slider@4.1.15)

### 🐛 Bug fixes

- **slider:**focus state matches spec, supports forced-colors ([#2217](https://github.com/adobe/spectrum-css/issues/2217))([7b9c31b](https://github.com/adobe/spectrum-css/commit/7b9c31b))

<a name="4.1.14"></a>

## 4.1.14

🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.13...@spectrum-css/slider@4.1.14)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.1.13"></a>

## 4.1.13

🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.12...@spectrum-css/slider@4.1.13)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.1.12"></a>

## 4.1.12

🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.11...@spectrum-css/slider@4.1.12)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.1.11"></a>

## 4.1.11

🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.10...@spectrum-css/slider@4.1.11)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.1.10"></a>

## 4.1.10

🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.9...@spectrum-css/slider@4.1.10)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.1.9"></a>

## 4.1.9

🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.8...@spectrum-css/slider@4.1.9)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.1.8"></a>

## 4.1.8

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.7...@spectrum-css/slider@4.1.8)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.1.7"></a>

## 4.1.7

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.6...@spectrum-css/slider@4.1.7)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.1.6"></a>

## 4.1.6

🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.5...@spectrum-css/slider@4.1.6)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.1.5"></a>

## 4.1.5

🗓
2023-08-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.4...@spectrum-css/slider@4.1.5)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="4.1.4"></a>

## 4.1.4

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.3...@spectrum-css/slider@4.1.4)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.1.3"></a>

## 4.1.3

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.1...@spectrum-css/slider@4.1.3)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.1.2"></a>

## 4.1.2

🗓
2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.1...@spectrum-css/slider@4.1.2)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.1.1"></a>

## 4.1.1

🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.0...@spectrum-css/slider@4.1.1)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.1.0"></a>

## 4.1.0

🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.19...@spectrum-css/slider@4.1.0)

### ✨ Features

- **slider:**add side label variant ([#2067](https://github.com/adobe/spectrum-css/issues/2067))([0e983d3](https://github.com/adobe/spectrum-css/commit/0e983d3))

<a name="4.0.19"></a>

## 4.0.19

🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.18...@spectrum-css/slider@4.0.19)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.0.18"></a>

## 4.0.18

🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.17...@spectrum-css/slider@4.0.18)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.0.17"></a>

## 4.0.17

🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.16...@spectrum-css/slider@4.0.17)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.0.16"></a>

## 4.0.16

🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.15...@spectrum-css/slider@4.0.16)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.0.15"></a>

## 4.0.15

🗓
2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.14...@spectrum-css/slider@4.0.15)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.0.14"></a>

## 4.0.14

🗓
2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.13...@spectrum-css/slider@4.0.14)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.0.13"></a>

## 4.0.13

🗓
2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.12...@spectrum-css/slider@4.0.13)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.0.12"></a>

## 4.0.12

🗓
2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.11...@spectrum-css/slider@4.0.12)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.0.11"></a>

## 4.0.11

🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.10...@spectrum-css/slider@4.0.11)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.0.10"></a>

## 4.0.10

🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.9...@spectrum-css/slider@4.0.10)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.0.9"></a>

## 4.0.9

🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.8...@spectrum-css/slider@4.0.9)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="4.0.8"></a>

## 4.0.8

🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.7...@spectrum-css/slider@4.0.8)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.0.7"></a>

## 4.0.7

🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.6...@spectrum-css/slider@4.0.7)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.0.6"></a>

## 4.0.6

🗓 2023-05-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.5...@spectrum-css/slider@4.0.6)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.0.5"></a>

## 4.0.5

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.4...@spectrum-css/slider@4.0.5)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.0.4"></a>

## 4.0.4

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.3...@spectrum-css/slider@4.0.4)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.0.3"></a>

## 4.0.3

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.2...@spectrum-css/slider@4.0.3)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.0.2"></a>

## 4.0.2

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.1...@spectrum-css/slider@4.0.2)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.0.1"></a>

## 4.0.1

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.0...@spectrum-css/slider@4.0.1)

**Note:** Version bump only for package @spectrum-css/slider

<a name="4.0.0"></a>

## 4.0.0

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.25...@spectrum-css/slider@4.0.0)

- feat(slider, fieldlabel)!: tokens migration & min-height size adjustments (#1696) ([37724f1](https://github.com/adobe/spectrum-css/commit/37724f1)), closes [#1696](https://github.com/adobe/spectrum-css/issues/1696)

### 🛑 BREAKING CHANGES

- migrates Slider to use `@adobe/spectrum-tokens`.

Additionally, this adds some `min-height` custom properties and adjusts the `min-height` in the FieldLabel to accommodate Slider.

<a name="3.1.25"></a>

## 3.1.25

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.24...@spectrum-css/slider@3.1.25)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.1.24"></a>

## 3.1.24

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.23...@spectrum-css/slider@3.1.24)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.1.23"></a>

## 3.1.23

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.22...@spectrum-css/slider@3.1.23)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.1.22"></a>

## 3.1.22

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.20...@spectrum-css/slider@3.1.22)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.1.21"></a>

## 3.1.21

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.20...@spectrum-css/slider@3.1.21)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.1.20"></a>

## 3.1.20

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.18...@spectrum-css/slider@3.1.20)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.1.19"></a>

## 3.1.19

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.18...@spectrum-css/slider@3.1.19)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.1.18"></a>

## 3.1.18

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.17...@spectrum-css/slider@3.1.18)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.1.17"></a>

## 3.1.17

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.16...@spectrum-css/slider@3.1.17)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.1.16"></a>

## 3.1.16

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.15...@spectrum-css/slider@3.1.16)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.1.15"></a>

## 3.1.15

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.14...@spectrum-css/slider@3.1.15)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.1.14"></a>

## 3.1.14

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.13...@spectrum-css/slider@3.1.14)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.1.13"></a>

## 3.1.13

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.12...@spectrum-css/slider@3.1.13)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.1.12"></a>

## 3.1.12

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.11...@spectrum-css/slider@3.1.12)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.1.11"></a>

## 3.1.11

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.10...@spectrum-css/slider@3.1.11)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.1.10"></a>

## 3.1.10

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.8...@spectrum-css/slider@3.1.10)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.1.9"></a>

## 3.1.9

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.8...@spectrum-css/slider@3.1.9)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.1.8"></a>

## 3.1.8

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.7...@spectrum-css/slider@3.1.8)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.1.7"></a>

## 3.1.7

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.6...@spectrum-css/slider@3.1.7)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.1.6"></a>

## 3.1.6

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.5...@spectrum-css/slider@3.1.6)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.1.5"></a>

## 3.1.5

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.4...@spectrum-css/slider@3.1.5)

### 🐛 Bug fixes

- slider WHCM ([9ff8184](https://github.com/adobe/spectrum-css/commit/9ff8184))

<a name="3.1.4"></a>

## 3.1.4

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.3...@spectrum-css/slider@3.1.4)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.1.3"></a>

## 3.1.3

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.2...@spectrum-css/slider@3.1.3)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.1.2"></a>

## 3.1.2

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.1...@spectrum-css/slider@3.1.2)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.1.1"></a>

## 3.1.1

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.0...@spectrum-css/slider@3.1.1)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.1.0"></a>

## 3.1.0

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.15...@spectrum-css/slider@3.1.0)

### ✨ Features

- fixup other Express Slider color an size changes ([2fa1ce5](https://github.com/adobe/spectrum-css/commit/2fa1ce5))

### 🐛 Bug fixes

- support Express Slider ([bc42722](https://github.com/adobe/spectrum-css/commit/bc42722))
- updated based on design review ([be41d62](https://github.com/adobe/spectrum-css/commit/be41d62))

<a name="3.0.15"></a>

## 3.0.15

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.14...@spectrum-css/slider@3.0.15)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.0.14"></a>

## 3.0.14

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.13...@spectrum-css/slider@3.0.14)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.0.13"></a>

## 3.0.13

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.12...@spectrum-css/slider@3.0.13)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.0.12"></a>

## 3.0.12

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.11...@spectrum-css/slider@3.0.12)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.0.11"></a>

## 3.0.11

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.9...@spectrum-css/slider@3.0.11)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

<a name="3.0.10"></a>

## 3.0.10

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.10-beta.0...@spectrum-css/slider@3.0.10)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.0.10-beta.0"></a>

## 3.0.10-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.9...@spectrum-css/slider@3.0.10-beta.0)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.0.9"></a>

## 3.0.9

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.8...@spectrum-css/slider@3.0.9)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.0.8"></a>

## 3.0.8

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.7...@spectrum-css/slider@3.0.8)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.0.7"></a>

## 3.0.7

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.6...@spectrum-css/slider@3.0.7)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.0.6"></a>

## 3.0.6

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.5...@spectrum-css/slider@3.0.6)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.0.5"></a>

## 3.0.5

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.3-alpha.4...@spectrum-css/slider@3.0.5)

### 🐛 Bug fixes

- don't adjust slider handle width ([f352994](https://github.com/adobe/spectrum-css/commit/f352994))
- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="3.0.4"></a>

## 3.0.4

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.3-alpha.4...@spectrum-css/slider@3.0.4)

### 🐛 Bug fixes

- don't adjust slider handle width ([f352994](https://github.com/adobe/spectrum-css/commit/f352994))
- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="3.0.3"></a>

## 3.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.3-alpha.4...@spectrum-css/slider@3.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="3.0.3-alpha.4"></a>

## 3.0.3-alpha.4

🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.3-alpha.3...@spectrum-css/slider@3.0.3-alpha.4)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.0.3-alpha.3"></a>

## 3.0.3-alpha.3

🗓 2021-07-19 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.3-alpha.2...@spectrum-css/slider@3.0.3-alpha.3)

### 🐛 Bug fixes

- adjust handle sizing broken by border sizing change in tokens ([b926e64](https://github.com/adobe/spectrum-css/commit/b926e64))

<a name="3.0.3-alpha.2"></a>

## 3.0.3-alpha.2

🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.3-alpha.1...@spectrum-css/slider@3.0.3-alpha.2)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.0.3-alpha.1"></a>

## 3.0.3-alpha.1

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.3-alpha.0...@spectrum-css/slider@3.0.3-alpha.1)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.0.3-alpha.0"></a>

## 3.0.3-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.2...@spectrum-css/slider@3.0.3-alpha.0)

### 🐛 Bug fixes

- updated focus ring tokens to assume keyboard focus state ([2db4755](https://github.com/adobe/spectrum-css/commit/2db4755))
- updated missing tokens ([f606b83](https://github.com/adobe/spectrum-css/commit/f606b83))

<a name="3.0.2"></a>

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.1...@spectrum-css/slider@3.0.2)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.0.1"></a>

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.0...@spectrum-css/slider@3.0.1)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.0.0"></a>

## 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.0-beta.5...@spectrum-css/slider@3.0.0)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.0.0-beta.5"></a>

## 3.0.0-beta.5

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.0-beta.4...@spectrum-css/slider@3.0.0-beta.5)

### 🐛 Bug fixes

- correct tick label position to match contribution ([4201733](https://github.com/adobe/spectrum-css/commit/4201733))
- make Slider build again ([fb2b901](https://github.com/adobe/spectrum-css/commit/fb2b901))

<a name="3.0.0-beta.4"></a>

## 3.0.0-beta.4

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.0-beta.3...@spectrum-css/slider@3.0.0-beta.4)

### 🐛 Bug fixes

- make the slider value label less jumpy ([#969](https://github.com/adobe/spectrum-css/issues/969)) ([7c0e2be](https://github.com/adobe/spectrum-css/commit/7c0e2be))
- slider remove cursor pointer and reenable active style ([#967](https://github.com/adobe/spectrum-css/issues/967)) ([8311089](https://github.com/adobe/spectrum-css/commit/8311089)), closes [#965](https://github.com/adobe/spectrum-css/issues/965) [#966](https://github.com/adobe/spectrum-css/issues/966)

### 🛑 BREAKING CHANGES

- update Slider JS to always show active

<a name="3.0.0-beta.3"></a>

## 3.0.0-beta.3

🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.0-beta.2...@spectrum-css/slider@3.0.0-beta.3)

### 🐛 Bug fixes

- ramp slider ([#829](https://github.com/adobe/spectrum-css/issues/829)) ([#923](https://github.com/adobe/spectrum-css/issues/923)) ([c539411](https://github.com/adobe/spectrum-css/commit/c539411)), closes [#850](https://github.com/adobe/spectrum-css/issues/850)
- wip fix more components ([b74dbb8](https://github.com/adobe/spectrum-css/commit/b74dbb8))

### 🛑 BREAKING CHANGES

- Color slider is now a separate component

- docs: Update components/slider/metadata/slider.yml

Co-authored-by: Larry Davis <lawdavis@adobe.com>

<a name="3.0.0-beta.2"></a>

## 3.0.0-beta.2

🗓 2020-05-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.0-beta.1...@spectrum-css/slider@3.0.0-beta.2)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.0.0-beta.1"></a>

## 3.0.0-beta.1

🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.0-beta.0...@spectrum-css/slider@3.0.0-beta.1)

**Note:** Version bump only for package @spectrum-css/slider

<a name="3.0.0-beta.0"></a>

## 3.0.0-beta.0

🗓 2020-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@2.1.0...@spectrum-css/slider@3.0.0-beta.0)

### ✨ Features

- make Slider support RTL ([7892820](https://github.com/adobe/spectrum-css/commit/7892820))

<a name="2.1.0"></a>

## 2.1.0

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@2.0.4...@spectrum-css/slider@2.1.0)

### ✨ Features

- halo focus ring, closes [#112](https://github.com/adobe/spectrum-css/issues/112), closes [#573](https://github.com/adobe/spectrum-css/issues/573) ([#603](https://github.com/adobe/spectrum-css/issues/603)) ([d87e9a5](https://github.com/adobe/spectrum-css/commit/d87e9a5)), closes [#619](https://github.com/adobe/spectrum-css/issues/619)

<a name="2.0.4"></a>

## 2.0.4

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@2.0.3...@spectrum-css/slider@2.0.4)

**Note:** Version bump only for package @spectrum-css/slider

<a name="2.0.3"></a>

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@2.0.2...@spectrum-css/slider@2.0.3)

**Note:** Version bump only for package @spectrum-css/slider

<a name="2.0.2"></a>

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@2.0.1...@spectrum-css/slider@2.0.2)

**Note:** Version bump only for package @spectrum-css/slider

<a name="2.0.1"></a>

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@2.0.0...@spectrum-css/slider@2.0.1)

**Note:** Version bump only for package @spectrum-css/slider

<a name="2.0.0"></a>

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
