# Change Log

## 5.0.0-s2-foundations.14

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`11a0032`](https://github.com/adobe/spectrum-css/commit/11a00323addbf28b9430d27d9cbc5f30bc851b65) Thanks [@pfulton](https://github.com/pfulton)! - Bug fixes to S1 & Express theming across all components

### Patch Changes

- Updated dependencies [[`11a0032`](https://github.com/adobe/spectrum-css/commit/11a00323addbf28b9430d27d9cbc5f30bc851b65)]:
  - @spectrum-css/checkbox@10.0.0-s2-foundations.16
  - @spectrum-css/tokens@15.0.0-s2-foundations.21

## 5.0.0-s2-foundations.13

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`9df688a`](https://github.com/adobe/spectrum-css/commit/9df688a6a83be5f13bc4e0e732fed294af08bf3f) Thanks [@pfulton](https://github.com/pfulton)! - Replaces raw RGB value/direct token references with abstracted custom properties in theme/spectrum-two.css files

  Asset card

  - removes raw rgb value for box-shadow from `index.css`
  - creates new `--spectrum-assetcard-selectionindicator-box-shadow-color`
    in `themes/spectrum-two.css` with previous rgb value to use instead

  Well

  - removes `--spectrum-gray-800-rgb` for background-color from `index.css`
  - creates new `--spectrum-well-background-color` in `themes/spectrum-two.css`
    with previous `--spectrum-gray-800-rgb` property to use instead

## 5.0.0-s2-foundations.12

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`5546ec6`](https://github.com/adobe/spectrum-css/commit/5546ec6a508eb249ede78031db22ddf5972e5c05) Thanks [@pfulton](https://github.com/pfulton)! - - Accordion: Flatten sizing variables in theme layer
  - ActionButton: Fix typo in variable name "\*-defaul-selectedt"
  - Move out rtl logical transform from theme to index.css for: calendar, pagination, treeview

### Patch Changes

- Updated dependencies [[`5546ec6`](https://github.com/adobe/spectrum-css/commit/5546ec6a508eb249ede78031db22ddf5972e5c05)]:
  - @spectrum-css/checkbox@10.0.0-s2-foundations.12
  - @spectrum-css/tokens@15.0.0-s2-foundations.13

## 5.0.0-s2-foundations.11

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`b0862e1`](https://github.com/adobe/spectrum-css/commit/b0862e1a5b95c19443fd919c6baf4b4ea9ba79c1) Thanks [@pfulton](https://github.com/pfulton)! - Updated build to set cssnano to discardUnused: false

### Patch Changes

- Updated dependencies [[`b0862e1`](https://github.com/adobe/spectrum-css/commit/b0862e1a5b95c19443fd919c6baf4b4ea9ba79c1)]:
  - @spectrum-css/checkbox@10.0.0-s2-foundations.11
  - @spectrum-css/tokens@15.0.0-s2-foundations.12

## 5.0.0-s2-foundations.10

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`0844aad`](https://github.com/adobe/spectrum-css/commit/0844aadba2fefb844a66370ff6e9b4704f6c1543) Thanks [@pfulton](https://github.com/pfulton)! - Fixes to index.css imports to ensure appropriate system mappings get loaded

### Patch Changes

- Updated dependencies [[`0844aad`](https://github.com/adobe/spectrum-css/commit/0844aadba2fefb844a66370ff6e9b4704f6c1543)]:
  - @spectrum-css/checkbox@10.0.0-s2-foundations.10
  - @spectrum-css/tokens@15.0.0-s2-foundations.10

## 5.0.0-s2-foundations.9

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`84c8721`](https://github.com/adobe/spectrum-css/commit/84c87212ccb37c887225eaff28e84d9f8e608e09) Thanks [@pfulton](https://github.com/pfulton)! - Push out the latest release to the components

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`0a0dace`](https://github.com/adobe/spectrum-css/commit/0a0dacec163234bc73961ef17826cdc33765d9df) Thanks [@pfulton](https://github.com/pfulton)! - Across the board version update to latest build system state

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`681ba47`](https://github.com/adobe/spectrum-css/commit/681ba478c1259d0bbb183670f3188538ec3bee1d) Thanks [@pfulton](https://github.com/pfulton)! - Doing a widespread release on all packages to ensure the latest compiled CSS is published.

- Updated dependencies [[`681ba47`](https://github.com/adobe/spectrum-css/commit/681ba478c1259d0bbb183670f3188538ec3bee1d), [`84c8721`](https://github.com/adobe/spectrum-css/commit/84c87212ccb37c887225eaff28e84d9f8e608e09), [`0a0dace`](https://github.com/adobe/spectrum-css/commit/0a0dacec163234bc73961ef17826cdc33765d9df)]:
  - @spectrum-css/checkbox@10.0.0-s2-foundations.9
  - @spectrum-css/tokens@15.0.0-s2-foundations.9

## 5.0.0-s2-foundations.8

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`2633985`](https://github.com/adobe/spectrum-css/commit/2633985775ef5a8fad929e275e55e99b75b10959) Thanks [@pfulton](https://github.com/pfulton)! - Update system property tooling (splitinator) to leverage the selector parser

### Patch Changes

- Updated dependencies [[`2633985`](https://github.com/adobe/spectrum-css/commit/2633985775ef5a8fad929e275e55e99b75b10959)]:
  - @spectrum-css/checkbox@10.0.0-s2-foundations.8
  - @spectrum-css/tokens@15.0.0-s2-foundations.8

## 5.0.0-s2-foundations.7

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`24a51cc`](https://github.com/adobe/spectrum-css/commit/24a51cc3b682a06a5133c4f5bf72c11a2337ee22) Thanks [@pfulton](https://github.com/pfulton)! - Revert themes asset naming to simplify code review; bug fixes in custom property loading from theme assets

### Patch Changes

- Updated dependencies [[`24a51cc`](https://github.com/adobe/spectrum-css/commit/24a51cc3b682a06a5133c4f5bf72c11a2337ee22)]:
  - @spectrum-css/checkbox@10.0.0-s2-foundations.7
  - @spectrum-css/tokens@15.0.0-s2-foundations.7

## 5.0.0-s2-foundations.6

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`4d88749`](https://github.com/adobe/spectrum-css/commit/4d887492f98f1f505535680bfb0baa06d24460a0) Thanks [@pfulton](https://github.com/pfulton)! - Inject missing tokens into theme files and adjust logic in the splitinator tool to replace nested variable references to the new system mappings

- Updated dependencies [[`130e137`](https://github.com/adobe/spectrum-css/commit/130e1372b223641efe0a3a23c83ff1d01a70bf1d), [`4d88749`](https://github.com/adobe/spectrum-css/commit/4d887492f98f1f505535680bfb0baa06d24460a0)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.6
  - @spectrum-css/checkbox@10.0.0-s2-foundations.6

## 5.0.0-s2-foundations.5

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`de1d39f`](https://github.com/adobe/spectrum-css/commit/de1d39fdedc297032735acf97d0f87b6f2e45f50) Thanks [@pfulton](https://github.com/pfulton)! - Fix to how the system mapped custom property names are generated; adding support for pseudo functions, combinators, and complex selectors

- Updated dependencies [[`de1d39f`](https://github.com/adobe/spectrum-css/commit/de1d39fdedc297032735acf97d0f87b6f2e45f50)]:
  - @spectrum-css/checkbox@10.0.0-s2-foundations.5
  - @spectrum-css/tokens@15.0.0-s2-foundations.5

## 5.0.0-s2-foundations.4

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`485128c`](https://github.com/adobe/spectrum-css/commit/485128ca7947acb064f31e4118044a3f7e3f88b5) Thanks [@pfulton](https://github.com/pfulton)! - Corrects a faulty regex that was negatively affecting compilation of custom properties

- Updated dependencies [[`485128c`](https://github.com/adobe/spectrum-css/commit/485128ca7947acb064f31e4118044a3f7e3f88b5)]:
  - @spectrum-css/checkbox@10.0.0-s2-foundations.4
  - @spectrum-css/tokens@15.0.0-s2-foundations.4

## 5.0.0-s2-foundations.3

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`6b12d37`](https://github.com/adobe/spectrum-css/commit/6b12d375c12b36f387b331fff42b24bc7c3845df) Thanks [@pfulton](https://github.com/pfulton)! - fixes a compilation issue in the tokens dist artifacts

### Patch Changes

- Updated dependencies [[`6b12d37`](https://github.com/adobe/spectrum-css/commit/6b12d375c12b36f387b331fff42b24bc7c3845df)]:
  - @spectrum-css/checkbox@10.0.0-s2-foundations.3
  - @spectrum-css/tokens@15.0.0-s2-foundations.3

## 5.0.0-s2-foundations.2

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`b00388b`](https://github.com/adobe/spectrum-css/commit/b00388b3ab026989f261f7bcdd77699521f45d58) Thanks [@pfulton](https://github.com/pfulton)! - Preserves `themes` folder in `dist` artifacts for easier downstream consumption

### Patch Changes

- Updated dependencies [[`b00388b`](https://github.com/adobe/spectrum-css/commit/b00388b3ab026989f261f7bcdd77699521f45d58)]:
  - @spectrum-css/checkbox@10.0.0-s2-foundations.2
  - @spectrum-css/tokens@15.0.0-s2-foundations.2

## 5.0.0-s2-foundations.1

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`39bbd6c`](https://github.com/adobe/spectrum-css/commit/39bbd6cbb7eac7c71515ef2417554cb115eba00e) Thanks [@pfulton](https://github.com/pfulton)! - Fixes an issue where vars.css was not being populated with the correct values

### Patch Changes

- Updated dependencies [[`39bbd6c`](https://github.com/adobe/spectrum-css/commit/39bbd6cbb7eac7c71515ef2417554cb115eba00e)]:
  - @spectrum-css/checkbox@10.0.0-s2-foundations.1
  - @spectrum-css/tokens@15.0.0-s2-foundations.1

## 5.0.0-s2-foundations.0

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce) Thanks [@pfulton](https://github.com/pfulton)! - S2 colors + grays foundation

### Patch Changes

- Updated dependencies [[`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce)]:
  - @spectrum-css/checkbox@10.0.0-s2-foundations.0
  - @spectrum-css/tokens@15.0.0-s2-foundations.0

## 4.1.2

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)! - Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/checkbox@9.1.2

## 4.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/checkbox@9.1.1

## 4.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/checkbox@>=9
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="4.0.0"></a>

## 4.0.0

🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@3.1.4...@spectrum-css/assetcard@4.0.0)

### ✨ Features

\*use storybook v8 ([#2604](https://github.com/adobe/spectrum-css/issues/2604))([166ab23](https://github.com/adobe/spectrum-css/commit/166ab23))

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="3.1.4"></a>

## 3.1.4

🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@3.1.3...@spectrum-css/assetcard@3.1.4)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="3.1.3"></a>

## 3.1.3

🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@3.1.2...@spectrum-css/assetcard@3.1.3)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="3.1.2"></a>

## 3.1.2

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@3.1.1...@spectrum-css/assetcard@3.1.2)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="3.1.1"></a>

## 3.1.1

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="3.1.0"></a>

## 3.1.0

🗓
2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@3.0.5...@spectrum-css/assetcard@3.1.0)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="3.0.5"></a>

## 3.0.5

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@3.0.4...@spectrum-css/assetcard@3.0.5)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="3.0.4"></a>

## 3.0.4

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@3.0.3...@spectrum-css/assetcard@3.0.4)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="3.0.3"></a>

## 3.0.3

🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@3.0.2...@spectrum-css/assetcard@3.0.3)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="3.0.2"></a>

## 3.0.2

🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@3.0.0...@spectrum-css/assetcard@3.0.2)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="3.0.1"></a>

## 3.0.1

🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@3.0.0...@spectrum-css/assetcard@3.0.1)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="3.0.0"></a>

## 3.0.0

🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.13...@spectrum-css/assetcard@3.0.0)

\*refactor(assetcard)!: token migration (#2229)([a0cf37b](https://github.com/adobe/spectrum-css/commit/a0cf37b)), closes[#2229](https://github.com/adobe/spectrum-css/issues/2229)

    	###
    	🛑 BREAKING CHANGES

    		*
    		migrate asset card to updated token system

<a name="2.0.13"></a>

## 2.0.13

🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.12...@spectrum-css/assetcard@2.0.13)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="2.0.12"></a>

## 2.0.12

🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.11...@spectrum-css/assetcard@2.0.12)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="2.0.11"></a>

## 2.0.11

🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.10...@spectrum-css/assetcard@2.0.11)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="2.0.10"></a>

## 2.0.10

🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.9...@spectrum-css/assetcard@2.0.10)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="2.0.9"></a>

## 2.0.9

🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.8...@spectrum-css/assetcard@2.0.9)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="2.0.8"></a>

## 2.0.8

🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.7...@spectrum-css/assetcard@2.0.8)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="2.0.7"></a>

## 2.0.7

🗓
2023-09-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.6...@spectrum-css/assetcard@2.0.7)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="2.0.6"></a>

## 2.0.6

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.5...@spectrum-css/assetcard@2.0.6)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="2.0.5"></a>

## 2.0.5

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.4...@spectrum-css/assetcard@2.0.5)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="2.0.4"></a>

## 2.0.4

🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.3...@spectrum-css/assetcard@2.0.4)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="2.0.3"></a>

## 2.0.3

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.2...@spectrum-css/assetcard@2.0.3)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="2.0.2"></a>

## 2.0.2

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.0...@spectrum-css/assetcard@2.0.2)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="2.0.1"></a>

## 2.0.1

🗓
2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.0...@spectrum-css/assetcard@2.0.1)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="2.0.0"></a>

## 2.0.0

🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.52...@spectrum-css/assetcard@2.0.0)

\*refactor(assetcard)!: replace focus-ring with focus-visible([1c6a3e9](https://github.com/adobe/spectrum-css/commit/1c6a3e9))

    	###
    	🛑 BREAKING CHANGES

    		*
    		use native focus-visible pseudo class for focus styling

<a name="1.1.52"></a>

## 1.1.52

🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.51...@spectrum-css/assetcard@1.1.52)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.51"></a>

## 1.1.51

🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.50...@spectrum-css/assetcard@1.1.51)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.50"></a>

## 1.1.50

🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.49...@spectrum-css/assetcard@1.1.50)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.49"></a>

## 1.1.49

🗓
2023-07-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.48...@spectrum-css/assetcard@1.1.49)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.48"></a>

## 1.1.48

🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.47...@spectrum-css/assetcard@1.1.48)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.47"></a>

## 1.1.47

🗓
2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.46...@spectrum-css/assetcard@1.1.47)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.46"></a>

## 1.1.46

🗓
2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.45...@spectrum-css/assetcard@1.1.46)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.45"></a>

## 1.1.45

🗓
2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.44...@spectrum-css/assetcard@1.1.45)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.44"></a>

## 1.1.44

🗓
2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.43...@spectrum-css/assetcard@1.1.44)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.43"></a>

## 1.1.43

🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.42...@spectrum-css/assetcard@1.1.43)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.42"></a>

## 1.1.42

🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.41...@spectrum-css/assetcard@1.1.42)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.41"></a>

## 1.1.41

🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.40...@spectrum-css/assetcard@1.1.41)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="1.1.40"></a>

## 1.1.40

🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.39...@spectrum-css/assetcard@1.1.40)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.39"></a>

## 1.1.39

🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.38...@spectrum-css/assetcard@1.1.39)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.38"></a>

## 1.1.38

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.37...@spectrum-css/assetcard@1.1.38)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.37"></a>

## 1.1.37

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.36...@spectrum-css/assetcard@1.1.37)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.36"></a>

## 1.1.36

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.35...@spectrum-css/assetcard@1.1.36)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.35"></a>

## 1.1.35

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.34...@spectrum-css/assetcard@1.1.35)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.34"></a>

## 1.1.34

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.33...@spectrum-css/assetcard@1.1.34)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.33"></a>

## 1.1.33

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.32...@spectrum-css/assetcard@1.1.33)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.32"></a>

## 1.1.32

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.31...@spectrum-css/assetcard@1.1.32)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.31"></a>

## 1.1.31

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.30...@spectrum-css/assetcard@1.1.31)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.30"></a>

## 1.1.30

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.29...@spectrum-css/assetcard@1.1.30)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.29"></a>

## 1.1.29

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.28...@spectrum-css/assetcard@1.1.29)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.28"></a>

## 1.1.28

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.27...@spectrum-css/assetcard@1.1.28)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.27"></a>

## 1.1.27

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.26...@spectrum-css/assetcard@1.1.27)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.26"></a>

## 1.1.26

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.24...@spectrum-css/assetcard@1.1.26)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.25"></a>

## 1.1.25

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.24...@spectrum-css/assetcard@1.1.25)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.24"></a>

## 1.1.24

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.23...@spectrum-css/assetcard@1.1.24)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.23"></a>

## 1.1.23

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.22...@spectrum-css/assetcard@1.1.23)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.22"></a>

## 1.1.22

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.21...@spectrum-css/assetcard@1.1.22)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.21"></a>

## 1.1.21

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.20...@spectrum-css/assetcard@1.1.21)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.20"></a>

## 1.1.20

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.19...@spectrum-css/assetcard@1.1.20)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.19"></a>

## 1.1.19

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.17...@spectrum-css/assetcard@1.1.19)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.18"></a>

## 1.1.18

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.17...@spectrum-css/assetcard@1.1.18)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.17"></a>

## 1.1.17

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.16...@spectrum-css/assetcard@1.1.17)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.16"></a>

## 1.1.16

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.15...@spectrum-css/assetcard@1.1.16)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.15"></a>

## 1.1.15

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.14...@spectrum-css/assetcard@1.1.15)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.14"></a>

## 1.1.14

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.13...@spectrum-css/assetcard@1.1.14)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.13"></a>

## 1.1.13

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.12...@spectrum-css/assetcard@1.1.13)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.12"></a>

## 1.1.12

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.11...@spectrum-css/assetcard@1.1.12)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.11"></a>

## 1.1.11

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.10...@spectrum-css/assetcard@1.1.11)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.10"></a>

## 1.1.10

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.9...@spectrum-css/assetcard@1.1.10)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.9"></a>

## 1.1.9

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.8...@spectrum-css/assetcard@1.1.9)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.8"></a>

## 1.1.8

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.6...@spectrum-css/assetcard@1.1.8)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.7"></a>

## 1.1.7

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.6...@spectrum-css/assetcard@1.1.7)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.6"></a>

## 1.1.6

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.5...@spectrum-css/assetcard@1.1.6)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.5"></a>

## 1.1.5

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.4...@spectrum-css/assetcard@1.1.5)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.4"></a>

## 1.1.4

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.3...@spectrum-css/assetcard@1.1.4)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.3"></a>

## 1.1.3

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.2...@spectrum-css/assetcard@1.1.3)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.2"></a>

## 1.1.2

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.1...@spectrum-css/assetcard@1.1.2)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.1"></a>

## 1.1.1

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.0...@spectrum-css/assetcard@1.1.1)

**Note:** Version bump only for package @spectrum-css/assetcard

<a name="1.1.0"></a>

## 1.1.0

🗓 2022-03-22

### ✨ Features

- split-out and Expressify Asset Card ([61a4e96](https://github.com/adobe/spectrum-css/commit/61a4e96))
- start on AssetCard ([7e98f81](https://github.com/adobe/spectrum-css/commit/7e98f81))
- update spectrum-tokens, use new token packages ([10c4a13](https://github.com/adobe/spectrum-css/commit/10c4a13))

### 🐛 Bug fixes

- don't have a little border by default ([fbf1eec](https://github.com/adobe/spectrum-css/commit/fbf1eec))
- don't let the checkbox hide ([e62dda2](https://github.com/adobe/spectrum-css/commit/e62dda2))
- draw border on the inside, not outside ([3e045f8](https://github.com/adobe/spectrum-css/commit/3e045f8))
- have correct border color on selected + down ([ea9d311](https://github.com/adobe/spectrum-css/commit/ea9d311))
- highlight stop hiding ([2bc9bee](https://github.com/adobe/spectrum-css/commit/2bc9bee))
- more design review updates ([b4bfa90](https://github.com/adobe/spectrum-css/commit/b4bfa90))
