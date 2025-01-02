# Change Log

## 6.0.0-next.0

### Major Changes

- [#3301](https://github.com/adobe/spectrum-css/pull/3301) [`b91a202`](https://github.com/adobe/spectrum-css/commit/b91a2020be7a590a794938546e2f85f3fd9eef3e) Thanks [@rise-erpelding](https://github.com/rise-erpelding)! - Migrates color loupe to Spectrum 2 tokens. Color loupe now uses the new drop shadow tokens `--spectrum-drop-shadow-elevated-x`, `--spectrum-drop-shadow-elevated-y`, `--spectrum-drop-shadow-elevated-blur`, and `--spectrum-drop-shadow-elevated-color` rather than specific color loupe tokens.

### Patch Changes

- Updated dependencies [[`bd934cc`](https://github.com/adobe/spectrum-css/commit/bd934cc9a5a43b2d453710d462a1faaa5046de08)]:
  - @spectrum-css/tokens@14.0.0-next.10

## 6.0.0-s2-foundations.16

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`f6ad55e`](https://github.com/adobe/spectrum-css/commit/f6ad55eea019f2d6c583a71b6652995a1c7c7a55) Thanks [@pfulton](https://github.com/pfulton)! - feat: s2 foundations non-gray-800 colors update

  | Property name               | Context | Old value          | Updated value      |
  | --------------------------- | ------- | ------------------ | ------------------ |
  | `--spectrum-blue-800`       | dark    | rgb(69, 110, 254)  | rgb(64, 105, 253)  |
  | `--spectrum-red-800`        | dark    | rgb(230, 54, 35)   | rgb(223, 52, 34)   |
  | `--spectrum-orange-800`     | dark    | rgb(205, 86, 0)    | rgb(199, 82, 0)    |
  | `--spectrum-yellow-800`     | dark    | rgb(169, 110, 0)   | rgb(164, 106, 0)   |
  | `--spectrum-chartreuse-800` | dark    | rgb(109, 131, 0)   | rgb(106, 127, 0)   |
  | `--spectrum-celery-800`     | dark    | rgb(69, 138, 19)   | rgb(66, 134, 18)   |
  | `--spectrum-green-800`      | dark    | rgb(6, 140, 82)    | rgb(6, 136, 80)    |
  | `--spectrum-seafoam-800`    | dark    | rgb(8, 138, 116)   | rgb(8, 134, 112)   |
  | `--spectrum-cyan-800`       | dark    | rgb(15, 128, 194)  | rgb(13, 125, 186)  |
  | `--spectrum-indigo-800`     | dark    | rgb(119, 97, 252)  | rgb(116, 91, 252)  |
  | `--spectrum-purple-800`     | dark    | rgb(161, 84, 229)  | rgb(157, 78, 228)  |
  | `--spectrum-fuchsia-800`    | dark    | rgb(192, 64, 212)  | rgb(186, 60, 206)  |
  | `--spectrum-magenta-800`    | dark    | rgb(231, 41, 105)  | rgb(224, 38, 101)  |
  | `--spectrum-pink-800`       | dark    | rgb(220, 47, 156)  | rgb(213, 45, 151)  |
  | `--spectrum-turqoise-800`   | dark    | rgb(9, 135, 147)   | rgb(9, 131, 142)   |
  | `--spectrum-brown-800`      | dark    | rgb(148, 118, 73)  | rgb(143, 114, 69)  |
  | `--spectrum-silver-800`     | dark    | rgb(123, 123, 123) | rgb(118, 118, 118) |
  | `--spectrum-cinnamon-800`   | dark    | rgb(179, 103, 64)  | rgb(176, 98, 59)   |

### Patch Changes

- Updated dependencies [[`f6ad55e`](https://github.com/adobe/spectrum-css/commit/f6ad55eea019f2d6c583a71b6652995a1c7c7a55)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.29

## 6.0.0-s2-foundations.15

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`a434c9a`](https://github.com/adobe/spectrum-css/commit/a434c9aa96509427e0faaa0eef4ffc2a21fa9908) Thanks [@pfulton](https://github.com/pfulton)! - Align selectors with the specificity that exists in S1 today

## 6.0.0-s2-foundations.14

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`57709c0`](https://github.com/adobe/spectrum-css/commit/57709c09f7cfddb67125fa96691ae869ff8840ca) Thanks [@pfulton](https://github.com/pfulton)! - Pull in the corner radii updates for S2

### Patch Changes

- Updated dependencies [[`57709c0`](https://github.com/adobe/spectrum-css/commit/57709c09f7cfddb67125fa96691ae869ff8840ca)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.22

## 6.0.0-s2-foundations.13

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`11a0032`](https://github.com/adobe/spectrum-css/commit/11a00323addbf28b9430d27d9cbc5f30bc851b65) Thanks [@pfulton](https://github.com/pfulton)! - Bug fixes to S1 & Express theming across all components

### Patch Changes

- Updated dependencies [[`11a0032`](https://github.com/adobe/spectrum-css/commit/11a00323addbf28b9430d27d9cbc5f30bc851b65)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.21

## 6.0.0-s2-foundations.12

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`5546ec6`](https://github.com/adobe/spectrum-css/commit/5546ec6a508eb249ede78031db22ddf5972e5c05) Thanks [@pfulton](https://github.com/pfulton)! - - Accordion: Flatten sizing variables in theme layer
  - ActionButton: Fix typo in variable name "\*-defaul-selectedt"
  - Move out rtl logical transform from theme to index.css for: calendar, pagination, treeview

### Patch Changes

- Updated dependencies [[`5546ec6`](https://github.com/adobe/spectrum-css/commit/5546ec6a508eb249ede78031db22ddf5972e5c05)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.13

## 6.0.0-s2-foundations.11

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`b0862e1`](https://github.com/adobe/spectrum-css/commit/b0862e1a5b95c19443fd919c6baf4b4ea9ba79c1) Thanks [@pfulton](https://github.com/pfulton)! - Updated build to set cssnano to discardUnused: false

### Patch Changes

- Updated dependencies [[`b0862e1`](https://github.com/adobe/spectrum-css/commit/b0862e1a5b95c19443fd919c6baf4b4ea9ba79c1)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.12

## 6.0.0-s2-foundations.10

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`0844aad`](https://github.com/adobe/spectrum-css/commit/0844aadba2fefb844a66370ff6e9b4704f6c1543) Thanks [@pfulton](https://github.com/pfulton)! - Fixes to index.css imports to ensure appropriate system mappings get loaded

### Patch Changes

- Updated dependencies [[`0844aad`](https://github.com/adobe/spectrum-css/commit/0844aadba2fefb844a66370ff6e9b4704f6c1543)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.10

## 6.0.0-s2-foundations.9

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`84c8721`](https://github.com/adobe/spectrum-css/commit/84c87212ccb37c887225eaff28e84d9f8e608e09) Thanks [@pfulton](https://github.com/pfulton)! - Push out the latest release to the components

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`0a0dace`](https://github.com/adobe/spectrum-css/commit/0a0dacec163234bc73961ef17826cdc33765d9df) Thanks [@pfulton](https://github.com/pfulton)! - Across the board version update to latest build system state

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`681ba47`](https://github.com/adobe/spectrum-css/commit/681ba478c1259d0bbb183670f3188538ec3bee1d) Thanks [@pfulton](https://github.com/pfulton)! - Doing a widespread release on all packages to ensure the latest compiled CSS is published.

- Updated dependencies [[`681ba47`](https://github.com/adobe/spectrum-css/commit/681ba478c1259d0bbb183670f3188538ec3bee1d), [`84c8721`](https://github.com/adobe/spectrum-css/commit/84c87212ccb37c887225eaff28e84d9f8e608e09), [`0a0dace`](https://github.com/adobe/spectrum-css/commit/0a0dacec163234bc73961ef17826cdc33765d9df)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.9

## 6.0.0-s2-foundations.8

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`2633985`](https://github.com/adobe/spectrum-css/commit/2633985775ef5a8fad929e275e55e99b75b10959) Thanks [@pfulton](https://github.com/pfulton)! - Update system property tooling (splitinator) to leverage the selector parser

### Patch Changes

- Updated dependencies [[`2633985`](https://github.com/adobe/spectrum-css/commit/2633985775ef5a8fad929e275e55e99b75b10959)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.8

## 6.0.0-s2-foundations.7

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`24a51cc`](https://github.com/adobe/spectrum-css/commit/24a51cc3b682a06a5133c4f5bf72c11a2337ee22) Thanks [@pfulton](https://github.com/pfulton)! - Revert themes asset naming to simplify code review; bug fixes in custom property loading from theme assets

### Patch Changes

- Updated dependencies [[`24a51cc`](https://github.com/adobe/spectrum-css/commit/24a51cc3b682a06a5133c4f5bf72c11a2337ee22)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.7

## 6.0.0-s2-foundations.6

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`4d88749`](https://github.com/adobe/spectrum-css/commit/4d887492f98f1f505535680bfb0baa06d24460a0) Thanks [@pfulton](https://github.com/pfulton)! - Inject missing tokens into theme files and adjust logic in the splitinator tool to replace nested variable references to the new system mappings

- Updated dependencies [[`130e137`](https://github.com/adobe/spectrum-css/commit/130e1372b223641efe0a3a23c83ff1d01a70bf1d), [`4d88749`](https://github.com/adobe/spectrum-css/commit/4d887492f98f1f505535680bfb0baa06d24460a0)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.6

## 6.0.0-s2-foundations.5

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`de1d39f`](https://github.com/adobe/spectrum-css/commit/de1d39fdedc297032735acf97d0f87b6f2e45f50) Thanks [@pfulton](https://github.com/pfulton)! - Fix to how the system mapped custom property names are generated; adding support for pseudo functions, combinators, and complex selectors

- Updated dependencies [[`de1d39f`](https://github.com/adobe/spectrum-css/commit/de1d39fdedc297032735acf97d0f87b6f2e45f50)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.5

## 6.0.0-s2-foundations.4

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`485128c`](https://github.com/adobe/spectrum-css/commit/485128ca7947acb064f31e4118044a3f7e3f88b5) Thanks [@pfulton](https://github.com/pfulton)! - Corrects a faulty regex that was negatively affecting compilation of custom properties

- Updated dependencies [[`485128c`](https://github.com/adobe/spectrum-css/commit/485128ca7947acb064f31e4118044a3f7e3f88b5)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.4

## 6.0.0-s2-foundations.3

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`6b12d37`](https://github.com/adobe/spectrum-css/commit/6b12d375c12b36f387b331fff42b24bc7c3845df) Thanks [@pfulton](https://github.com/pfulton)! - fixes a compilation issue in the tokens dist artifacts

### Patch Changes

- Updated dependencies [[`6b12d37`](https://github.com/adobe/spectrum-css/commit/6b12d375c12b36f387b331fff42b24bc7c3845df)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.3

## 6.0.0-s2-foundations.2

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`b00388b`](https://github.com/adobe/spectrum-css/commit/b00388b3ab026989f261f7bcdd77699521f45d58) Thanks [@pfulton](https://github.com/pfulton)! - Preserves `themes` folder in `dist` artifacts for easier downstream consumption

### Patch Changes

- Updated dependencies [[`b00388b`](https://github.com/adobe/spectrum-css/commit/b00388b3ab026989f261f7bcdd77699521f45d58)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.2

## 6.0.0-s2-foundations.1

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`39bbd6c`](https://github.com/adobe/spectrum-css/commit/39bbd6cbb7eac7c71515ef2417554cb115eba00e) Thanks [@pfulton](https://github.com/pfulton)! - Fixes an issue where vars.css was not being populated with the correct values

### Patch Changes

- Updated dependencies [[`39bbd6c`](https://github.com/adobe/spectrum-css/commit/39bbd6cbb7eac7c71515ef2417554cb115eba00e)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.1

## 6.0.0-s2-foundations.0

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce) Thanks [@pfulton](https://github.com/pfulton)! - S2 colors + grays foundation

### Patch Changes

- Updated dependencies [[`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.0

## 5.2.0

### Minor Changes

- [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)! - Remove the storybook assets from the shipped output for components

## 5.1.4

### Patch Changes

- [#3272](https://github.com/adobe/spectrum-css/pull/3272) [`a354b16`](https://github.com/adobe/spectrum-css/commit/a354b166727fb34b17300bcd3a6118a00034e344) Thanks [@cdransf](https://github.com/cdransf)! - Disables lint violation and moves comment to stylelint-disable description.

## 5.1.4

### Patch Changes

- [#3272](https://github.com/adobe/spectrum-css/pull/3272) [`a354b16`](https://github.com/adobe/spectrum-css/commit/a354b166727fb34b17300bcd3a6118a00034e344) Thanks [@cdransf](https://github.com/cdransf)! - Disables lint violation and moves comment to stylelint-disable description.

## 5.1.3

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)! - Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

## 5.1.2

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)! - Improve changeset suggestions by using exports instead of files in component packages

## 5.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

## 5.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="5.0.0"></a>

## 5.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.2.4...@spectrum-css/colorloupe@5.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGES

- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="4.2.4"></a>

## 4.2.4

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.2.3...@spectrum-css/colorloupe@4.2.4)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.2.3"></a>

## 4.2.3

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.2.2...@spectrum-css/colorloupe@4.2.3)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.2.2"></a>

## 4.2.2

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.2.1...@spectrum-css/colorloupe@4.2.2)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.2.1"></a>

## 4.2.1

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.2.0"></a>

## 4.2.0

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.28...@spectrum-css/colorloupe@4.2.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="4.1.28"></a>

## 4.1.28

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.27...@spectrum-css/colorloupe@4.1.28)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.27"></a>

## 4.1.27

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.26...@spectrum-css/colorloupe@4.1.27)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.26"></a>

## 4.1.26

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.24...@spectrum-css/colorloupe@4.1.26)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.25"></a>

## 4.1.25

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.24...@spectrum-css/colorloupe@4.1.25)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.24"></a>

## 4.1.24

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.23...@spectrum-css/colorloupe@4.1.24)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.23"></a>

## 4.1.23

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.22...@spectrum-css/colorloupe@4.1.23)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.22"></a>

## 4.1.22

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.21...@spectrum-css/colorloupe@4.1.22)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.21"></a>

## 4.1.21

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.20...@spectrum-css/colorloupe@4.1.21)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.20"></a>

## 4.1.20

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.19...@spectrum-css/colorloupe@4.1.20)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.19"></a>

## 4.1.19

🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.18...@spectrum-css/colorloupe@4.1.19)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.18"></a>

## 4.1.18

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.17...@spectrum-css/colorloupe@4.1.18)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.17"></a>

## 4.1.17

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.16...@spectrum-css/colorloupe@4.1.17)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.16"></a>

## 4.1.16

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.15...@spectrum-css/colorloupe@4.1.16)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.15"></a>

## 4.1.15

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.14...@spectrum-css/colorloupe@4.1.15)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="4.1.14"></a>

## 4.1.14

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.13...@spectrum-css/colorloupe@4.1.14)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.13"></a>

## 4.1.13

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.11...@spectrum-css/colorloupe@4.1.13)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.12"></a>

## 4.1.12

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.11...@spectrum-css/colorloupe@4.1.12)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.11"></a>

## 4.1.11

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.10...@spectrum-css/colorloupe@4.1.11)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.10"></a>

## 4.1.10

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.9...@spectrum-css/colorloupe@4.1.10)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.9"></a>

## 4.1.9

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.8...@spectrum-css/colorloupe@4.1.9)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.8"></a>

## 4.1.8

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.7...@spectrum-css/colorloupe@4.1.8)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.7"></a>

## 4.1.7

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.6...@spectrum-css/colorloupe@4.1.7)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.6"></a>

## 4.1.6

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.5...@spectrum-css/colorloupe@4.1.6)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.5"></a>

## 4.1.5

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.4...@spectrum-css/colorloupe@4.1.5)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.4"></a>

## 4.1.4

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.3...@spectrum-css/colorloupe@4.1.4)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.3"></a>

## 4.1.3

🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.2...@spectrum-css/colorloupe@4.1.3)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.2"></a>

## 4.1.2

🗓 2023-06-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.1...@spectrum-css/colorloupe@4.1.2)

### 🐛 Bug fixes

- **colorloupe:**border bug ([#1958](https://github.com/adobe/spectrum-css/issues/1958))([559696f](https://github.com/adobe/spectrum-css/commit/559696f))

<a name="4.1.1"></a>

## 4.1.1

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.0...@spectrum-css/colorloupe@4.1.1)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.1.0"></a>

## 4.1.0

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.0.8...@spectrum-css/colorloupe@4.1.0)

### ✨ Features

\*update to Storybook v7 ([#1935](https://github.com/adobe/spectrum-css/issues/1935))([6dcf09b](https://github.com/adobe/spectrum-css/commit/6dcf09b))

<a name="4.0.8"></a>

## 4.0.8

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.0.7...@spectrum-css/colorloupe@4.0.8)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="4.0.7"></a>

## 4.0.7

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.0.6...@spectrum-css/colorloupe@4.0.7)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.0.6"></a>

## 4.0.6

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.0.5...@spectrum-css/colorloupe@4.0.6)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.0.5"></a>

## 4.0.5

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.0.4...@spectrum-css/colorloupe@4.0.5)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.0.4"></a>

## 4.0.4

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.0.3...@spectrum-css/colorloupe@4.0.4)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.0.3"></a>

## 4.0.3

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.0.2...@spectrum-css/colorloupe@4.0.3)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.0.2"></a>

## 4.0.2

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.0.1...@spectrum-css/colorloupe@4.0.2)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.0.1"></a>

## 4.0.1

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.0.0...@spectrum-css/colorloupe@4.0.1)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="4.0.0"></a>

## 4.0.0

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@3.0.11...@spectrum-css/colorloupe@4.0.0)

- chore(colorhandle, colorloupe, tokens)!: remove custom tokens (#1826) ([c41af3a](https://github.com/adobe/spectrum-css/commit/c41af3a)), closes [#1826](https://github.com/adobe/spectrum-css/issues/1826)

### 🛑 BREAKING CHANGES

- removes several Color-component related tokens from `@spectrum-css/tokens`

- chore(colorhandle): remove custom tokens
- chore(colorhandle): remove use of custom tokens
- chore(colorloupe): update tokens for colorloupe
- chore(colorhandle, colorloupe): remove comments

<a name="3.0.11"></a>

## 3.0.11

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@3.0.10...@spectrum-css/colorloupe@3.0.11)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="3.0.10"></a>

## 3.0.10

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@3.0.9...@spectrum-css/colorloupe@3.0.10)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="3.0.9"></a>

## 3.0.9

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@3.0.8...@spectrum-css/colorloupe@3.0.9)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="3.0.8"></a>

## 3.0.8

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@3.0.7...@spectrum-css/colorloupe@3.0.8)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="3.0.7"></a>

## 3.0.7

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@3.0.6...@spectrum-css/colorloupe@3.0.7)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="3.0.6"></a>

## 3.0.6

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@3.0.4...@spectrum-css/colorloupe@3.0.6)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="3.0.5"></a>

## 3.0.5

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@3.0.4...@spectrum-css/colorloupe@3.0.5)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="3.0.4"></a>

## 3.0.4

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@3.0.3...@spectrum-css/colorloupe@3.0.4)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="3.0.3"></a>

## 3.0.3

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@3.0.2...@spectrum-css/colorloupe@3.0.3)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="3.0.2"></a>

## 3.0.2

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@3.0.1...@spectrum-css/colorloupe@3.0.2)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="3.0.1"></a>

## 3.0.1

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@3.0.0...@spectrum-css/colorloupe@3.0.1)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="3.0.0"></a>

## 3.0.0

🗓 2023-04-19 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.20...@spectrum-css/colorloupe@3.0.0)

- feat(colorloupe, colorhandle)!: migrate to core tokens (#1753) ([c72f147](https://github.com/adobe/spectrum-css/commit/c72f147)), closes [#1753](https://github.com/adobe/spectrum-css/issues/1753)

### 🛑 BREAKING CHANGES

- migrates both the ColorLoupe and ColorHandle components to `@adobe/spectrum-tokens`

<a name="2.0.20"></a>

## 2.0.20

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.18...@spectrum-css/colorloupe@2.0.20)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="2.0.19"></a>

## 2.0.19

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.18...@spectrum-css/colorloupe@2.0.19)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="2.0.18"></a>

## 2.0.18

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.17...@spectrum-css/colorloupe@2.0.18)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="2.0.17"></a>

## 2.0.17

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.16...@spectrum-css/colorloupe@2.0.17)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="2.0.16"></a>

## 2.0.16

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.15...@spectrum-css/colorloupe@2.0.16)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="2.0.15"></a>

## 2.0.15

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.14...@spectrum-css/colorloupe@2.0.15)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="2.0.14"></a>

## 2.0.14

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.13...@spectrum-css/colorloupe@2.0.14)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="2.0.13"></a>

## 2.0.13

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.12...@spectrum-css/colorloupe@2.0.13)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="2.0.12"></a>

## 2.0.12

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.11...@spectrum-css/colorloupe@2.0.12)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="2.0.11"></a>

## 2.0.11

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.9...@spectrum-css/colorloupe@2.0.11)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="2.0.10"></a>

## 2.0.10

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.9...@spectrum-css/colorloupe@2.0.10)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="2.0.9"></a>

## 2.0.9

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.8...@spectrum-css/colorloupe@2.0.9)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="2.0.8"></a>

## 2.0.8

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.7...@spectrum-css/colorloupe@2.0.8)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="2.0.7"></a>

## 2.0.7

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.6...@spectrum-css/colorloupe@2.0.7)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="2.0.6"></a>

## 2.0.6

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.5...@spectrum-css/colorloupe@2.0.6)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="2.0.5"></a>

## 2.0.5

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.4...@spectrum-css/colorloupe@2.0.5)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="2.0.4"></a>

## 2.0.4

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.3...@spectrum-css/colorloupe@2.0.4)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="2.0.3"></a>

## 2.0.3

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.2...@spectrum-css/colorloupe@2.0.3)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="2.0.2"></a>

## 2.0.2

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.1...@spectrum-css/colorloupe@2.0.2)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="2.0.1"></a>

## 2.0.1

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.0...@spectrum-css/colorloupe@2.0.1)

### 🐛 Bug fixes

- correct loupe outer ([fd9f01c](https://github.com/adobe/spectrum-css/commit/fd9f01c))

<a name="2.0.0"></a>

## 2.0.0

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.13...@spectrum-css/colorloupe@2.0.0)

### ✨ Features

- add checkerboard for Spectrum ([ec1feaf](https://github.com/adobe/spectrum-css/commit/ec1feaf))
- combine Express and Spectrum SVGs, toggle visibility with vars ([84f4b8b](https://github.com/adobe/spectrum-css/commit/84f4b8b))
- prepare for switcher ([896e1b3](https://github.com/adobe/spectrum-css/commit/896e1b3))
- remove the need to add define hacks ([8c76829](https://github.com/adobe/spectrum-css/commit/8c76829))
- start on Express color loupe ([007bae2](https://github.com/adobe/spectrum-css/commit/007bae2))
- use --spectrum-picked-color for everything ([62e6469](https://github.com/adobe/spectrum-css/commit/62e6469))

### 🐛 Bug fixes

- add shadow for Spectrum, leave room for shadow ([13f579e](https://github.com/adobe/spectrum-css/commit/13f579e))
- center the points of the loupes within their bounding boxes ([9a2a414](https://github.com/adobe/spectrum-css/commit/9a2a414))
- correct checkerboard background color ([dc6c297](https://github.com/adobe/spectrum-css/commit/dc6c297))
- correct checkerboard color, stroke around edges of loupe ([c327261](https://github.com/adobe/spectrum-css/commit/c327261))
- correct markup ([9241121](https://github.com/adobe/spectrum-css/commit/9241121))
- give the Spectrum loupe a stroke ([486b079](https://github.com/adobe/spectrum-css/commit/486b079))

### 📚 Documentation

- add docs for --spectrum-loupe-color ([35704e2](https://github.com/adobe/spectrum-css/commit/35704e2))

### 🛑 BREAKING CHANGES

- You must define --spectrum-picked-color instead of setting background-color
- ColorLoupe now uses --spectrum-loupe-color to set the selected color

<a name="1.0.13"></a>

## 1.0.13

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.12...@spectrum-css/colorloupe@1.0.13)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="1.0.12"></a>

## 1.0.12

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.11...@spectrum-css/colorloupe@1.0.12)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="1.0.11"></a>

## 1.0.11

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.9...@spectrum-css/colorloupe@1.0.11)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

<a name="1.0.10"></a>

## 1.0.10

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.10-beta.0...@spectrum-css/colorloupe@1.0.10)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="1.0.10-beta.0"></a>

## 1.0.10-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.9...@spectrum-css/colorloupe@1.0.10-beta.0)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="1.0.9"></a>

## 1.0.9

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.8...@spectrum-css/colorloupe@1.0.9)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="1.0.8"></a>

## 1.0.8

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.7...@spectrum-css/colorloupe@1.0.8)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="1.0.7"></a>

## 1.0.7

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.6...@spectrum-css/colorloupe@1.0.7)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="1.0.6"></a>

## 1.0.6

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.5...@spectrum-css/colorloupe@1.0.6)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="1.0.5"></a>

## 1.0.5

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.3-alpha.3...@spectrum-css/colorloupe@1.0.5)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="1.0.4"></a>

## 1.0.4

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.3-alpha.3...@spectrum-css/colorloupe@1.0.4)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="1.0.3"></a>

## 1.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.3-alpha.3...@spectrum-css/colorloupe@1.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="1.0.3-alpha.3"></a>

## 1.0.3-alpha.3

🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.3-alpha.2...@spectrum-css/colorloupe@1.0.3-alpha.3)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="1.0.3-alpha.2"></a>

## 1.0.3-alpha.2

🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.3-alpha.1...@spectrum-css/colorloupe@1.0.3-alpha.2)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="1.0.3-alpha.1"></a>

## 1.0.3-alpha.1

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.3-alpha.0...@spectrum-css/colorloupe@1.0.3-alpha.1)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="1.0.3-alpha.0"></a>

## 1.0.3-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.2...@spectrum-css/colorloupe@1.0.3-alpha.0)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="1.0.2"></a>

## 1.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.1...@spectrum-css/colorloupe@1.0.2)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="1.0.1"></a>

## 1.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.0...@spectrum-css/colorloupe@1.0.1)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="1.0.0"></a>

## 1.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.0-beta.4...@spectrum-css/colorloupe@1.0.0)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="1.0.0-beta.4"></a>

## 1.0.0-beta.4

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.0-beta.3...@spectrum-css/colorloupe@1.0.0-beta.4)

### 🐛 Bug fixes

- support high contrast mode in color components ([d4c05cb](https://github.com/adobe/spectrum-css/commit/d4c05cb))

<a name="1.0.0-beta.3"></a>

## 1.0.0-beta.3

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.0-beta.2...@spectrum-css/colorloupe@1.0.0-beta.3)

**Note:** Version bump only for package @spectrum-css/colorloupe

<a name="1.0.0-beta.2"></a>

## 1.0.0-beta.2

🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.0-beta.1...@spectrum-css/colorloupe@1.0.0-beta.2)

### 🐛 Bug fixes

- wip fix more components ([b74dbb8](https://github.com/adobe/spectrum-css/commit/b74dbb8))

<a name="1.0.0-beta.1"></a>

## 1.0.0-beta.1

🗓 2020-05-14

### ✨ Features

- Color Handle/Slider/Area/Wheel ([#673](https://github.com/adobe/spectrum-css/issues/673)) ([bcd2bf1](https://github.com/adobe/spectrum-css/commit/bcd2bf1))
