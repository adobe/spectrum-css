# Change Log

## 8.0.0-s2-foundations.9

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`84c8721`](https://github.com/adobe/spectrum-css/commit/84c87212ccb37c887225eaff28e84d9f8e608e09) Thanks [@pfulton](https://github.com/pfulton)! - Push out the latest release to the components

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`0a0dace`](https://github.com/adobe/spectrum-css/commit/0a0dacec163234bc73961ef17826cdc33765d9df) Thanks [@pfulton](https://github.com/pfulton)! - Across the board version update to latest build system state

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`681ba47`](https://github.com/adobe/spectrum-css/commit/681ba478c1259d0bbb183670f3188538ec3bee1d) Thanks [@pfulton](https://github.com/pfulton)! - Doing a widespread release on all packages to ensure the latest compiled CSS is published.

- Updated dependencies [[`681ba47`](https://github.com/adobe/spectrum-css/commit/681ba478c1259d0bbb183670f3188538ec3bee1d), [`84c8721`](https://github.com/adobe/spectrum-css/commit/84c87212ccb37c887225eaff28e84d9f8e608e09), [`0a0dace`](https://github.com/adobe/spectrum-css/commit/0a0dacec163234bc73961ef17826cdc33765d9df)]:
  - @spectrum-css/typography@7.0.0-s2-foundations.9
  - @spectrum-css/tokens@15.0.0-s2-foundations.9

## 8.0.0-s2-foundations.8

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`2633985`](https://github.com/adobe/spectrum-css/commit/2633985775ef5a8fad929e275e55e99b75b10959) Thanks [@pfulton](https://github.com/pfulton)! - Update system property tooling (splitinator) to leverage the selector parser

### Patch Changes

- Updated dependencies [[`2633985`](https://github.com/adobe/spectrum-css/commit/2633985775ef5a8fad929e275e55e99b75b10959)]:
  - @spectrum-css/typography@7.0.0-s2-foundations.8
  - @spectrum-css/tokens@15.0.0-s2-foundations.8

## 8.0.0-s2-foundations.7

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`24a51cc`](https://github.com/adobe/spectrum-css/commit/24a51cc3b682a06a5133c4f5bf72c11a2337ee22) Thanks [@pfulton](https://github.com/pfulton)! - Revert themes asset naming to simplify code review; bug fixes in custom property loading from theme assets

### Patch Changes

- Updated dependencies [[`24a51cc`](https://github.com/adobe/spectrum-css/commit/24a51cc3b682a06a5133c4f5bf72c11a2337ee22)]:
  - @spectrum-css/typography@7.0.0-s2-foundations.7
  - @spectrum-css/tokens@15.0.0-s2-foundations.7

## 8.0.0-s2-foundations.6

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`4d88749`](https://github.com/adobe/spectrum-css/commit/4d887492f98f1f505535680bfb0baa06d24460a0) Thanks [@pfulton](https://github.com/pfulton)! - Inject missing tokens into theme files and adjust logic in the splitinator tool to replace nested variable references to the new system mappings

- Updated dependencies [[`130e137`](https://github.com/adobe/spectrum-css/commit/130e1372b223641efe0a3a23c83ff1d01a70bf1d), [`4d88749`](https://github.com/adobe/spectrum-css/commit/4d887492f98f1f505535680bfb0baa06d24460a0)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.6
  - @spectrum-css/typography@7.0.0-s2-foundations.6

## 8.0.0-s2-foundations.5

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`de1d39f`](https://github.com/adobe/spectrum-css/commit/de1d39fdedc297032735acf97d0f87b6f2e45f50) Thanks [@pfulton](https://github.com/pfulton)! - Fix to how the system mapped custom property names are generated; adding support for pseudo functions, combinators, and complex selectors

- Updated dependencies [[`de1d39f`](https://github.com/adobe/spectrum-css/commit/de1d39fdedc297032735acf97d0f87b6f2e45f50)]:
  - @spectrum-css/typography@7.0.0-s2-foundations.5
  - @spectrum-css/tokens@15.0.0-s2-foundations.5

## 8.0.0-s2-foundations.4

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`485128c`](https://github.com/adobe/spectrum-css/commit/485128ca7947acb064f31e4118044a3f7e3f88b5) Thanks [@pfulton](https://github.com/pfulton)! - Corrects a faulty regex that was negatively affecting compilation of custom properties

- Updated dependencies [[`485128c`](https://github.com/adobe/spectrum-css/commit/485128ca7947acb064f31e4118044a3f7e3f88b5)]:
  - @spectrum-css/typography@7.0.0-s2-foundations.4
  - @spectrum-css/tokens@15.0.0-s2-foundations.4

## 8.0.0-s2-foundations.3

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`6b12d37`](https://github.com/adobe/spectrum-css/commit/6b12d375c12b36f387b331fff42b24bc7c3845df) Thanks [@pfulton](https://github.com/pfulton)! - fixes a compilation issue in the tokens dist artifacts

### Patch Changes

- Updated dependencies [[`6b12d37`](https://github.com/adobe/spectrum-css/commit/6b12d375c12b36f387b331fff42b24bc7c3845df)]:
  - @spectrum-css/typography@7.0.0-s2-foundations.3
  - @spectrum-css/tokens@15.0.0-s2-foundations.3

## 8.0.0-s2-foundations.2

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`b00388b`](https://github.com/adobe/spectrum-css/commit/b00388b3ab026989f261f7bcdd77699521f45d58) Thanks [@pfulton](https://github.com/pfulton)! - Preserves `themes` folder in `dist` artifacts for easier downstream consumption

### Patch Changes

- Updated dependencies [[`b00388b`](https://github.com/adobe/spectrum-css/commit/b00388b3ab026989f261f7bcdd77699521f45d58)]:
  - @spectrum-css/typography@7.0.0-s2-foundations.2
  - @spectrum-css/tokens@15.0.0-s2-foundations.2

## 8.0.0-s2-foundations.1

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`39bbd6c`](https://github.com/adobe/spectrum-css/commit/39bbd6cbb7eac7c71515ef2417554cb115eba00e) Thanks [@pfulton](https://github.com/pfulton)! - Fixes an issue where vars.css was not being populated with the correct values

### Patch Changes

- Updated dependencies [[`39bbd6c`](https://github.com/adobe/spectrum-css/commit/39bbd6cbb7eac7c71515ef2417554cb115eba00e)]:
  - @spectrum-css/typography@7.0.0-s2-foundations.1
  - @spectrum-css/tokens@15.0.0-s2-foundations.1

## 8.0.0-s2-foundations.0

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce) Thanks [@pfulton](https://github.com/pfulton)! - S2 colors + grays foundation

### Patch Changes

- Updated dependencies [[`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.0
  - @spectrum-css/typography@7.0.0-s2-foundations.0

## 7.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/typography@6.1.1

## 7.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/typography@>=6
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="7.0.0"></a>

## 7.0.0

🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.1.5...@spectrum-css/illustratedmessage@7.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="6.1.5"></a>

## 6.1.5

🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.1.4...@spectrum-css/illustratedmessage@6.1.5)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.1.4"></a>

## 6.1.4

🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.1.3...@spectrum-css/illustratedmessage@6.1.4)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.1.3"></a>

## 6.1.3

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.1.2...@spectrum-css/illustratedmessage@6.1.3)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.1.2"></a>

## 6.1.2

🗓
2024-02-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.1.1...@spectrum-css/illustratedmessage@6.1.2)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.1.1"></a>

## 6.1.1

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.1.0"></a>

## 6.1.0

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.31...@spectrum-css/illustratedmessage@6.1.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="6.0.31"></a>

## 6.0.31

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.30...@spectrum-css/illustratedmessage@6.0.31)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.30"></a>

## 6.0.30

🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.29...@spectrum-css/illustratedmessage@6.0.30)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.29"></a>

## 6.0.29

🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.27...@spectrum-css/illustratedmessage@6.0.29)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.28"></a>

## 6.0.28

🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.27...@spectrum-css/illustratedmessage@6.0.28)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.27"></a>

## 6.0.27

🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.26...@spectrum-css/illustratedmessage@6.0.27)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.26"></a>

## 6.0.26

🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.25...@spectrum-css/illustratedmessage@6.0.26)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.25"></a>

## 6.0.25

🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.24...@spectrum-css/illustratedmessage@6.0.25)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.24"></a>

## 6.0.24

🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.23...@spectrum-css/illustratedmessage@6.0.24)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.23"></a>

## 6.0.23

🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.22...@spectrum-css/illustratedmessage@6.0.23)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.22"></a>

## 6.0.22

🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.21...@spectrum-css/illustratedmessage@6.0.22)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.21"></a>

## 6.0.21

🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.20...@spectrum-css/illustratedmessage@6.0.21)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.20"></a>

## 6.0.20

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.19...@spectrum-css/illustratedmessage@6.0.20)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.19"></a>

## 6.0.19

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.18...@spectrum-css/illustratedmessage@6.0.19)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.18"></a>

## 6.0.18

🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.17...@spectrum-css/illustratedmessage@6.0.18)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="6.0.17"></a>

## 6.0.17

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.16...@spectrum-css/illustratedmessage@6.0.17)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.16"></a>

## 6.0.16

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.14...@spectrum-css/illustratedmessage@6.0.16)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.15"></a>

## 6.0.15

🗓
2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.14...@spectrum-css/illustratedmessage@6.0.15)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.14"></a>

## 6.0.14

🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.13...@spectrum-css/illustratedmessage@6.0.14)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.13"></a>

## 6.0.13

🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.12...@spectrum-css/illustratedmessage@6.0.13)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.12"></a>

## 6.0.12

🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.11...@spectrum-css/illustratedmessage@6.0.12)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.11"></a>

## 6.0.11

🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.10...@spectrum-css/illustratedmessage@6.0.11)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.10"></a>

## 6.0.10

🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.9...@spectrum-css/illustratedmessage@6.0.10)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.9"></a>

## 6.0.9

🗓
2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.8...@spectrum-css/illustratedmessage@6.0.9)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.8"></a>

## 6.0.8

🗓
2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.7...@spectrum-css/illustratedmessage@6.0.8)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.7"></a>

## 6.0.7

🗓
2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.6...@spectrum-css/illustratedmessage@6.0.7)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.6"></a>

## 6.0.6

🗓
2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.5...@spectrum-css/illustratedmessage@6.0.6)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.5"></a>

## 6.0.5

🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.4...@spectrum-css/illustratedmessage@6.0.5)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.4"></a>

## 6.0.4

🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.3...@spectrum-css/illustratedmessage@6.0.4)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.3"></a>

## 6.0.3

🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.2...@spectrum-css/illustratedmessage@6.0.3)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="6.0.2"></a>

## 6.0.2

🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.1...@spectrum-css/illustratedmessage@6.0.2)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.1"></a>

## 6.0.1

🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@6.0.0...@spectrum-css/illustratedmessage@6.0.1)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="6.0.0"></a>

## 6.0.0

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@5.0.18...@spectrum-css/illustratedmessage@6.0.0)

- feat(dropzone)!: migrate tokens (#1831) ([5216021](https://github.com/adobe/spectrum-css/commit/5216021)), closes [#1831](https://github.com/adobe/spectrum-css/issues/1831)

### 🛑 BREAKING CHANGES

- migrates DropZone to use `@adobe/spectrum-tokens`.

Also updates IllustratedMessage and ActionButton to share `--mod-` properties.

<a name="5.0.18"></a>

## 5.0.18

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@5.0.17...@spectrum-css/illustratedmessage@5.0.18)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="5.0.17"></a>

## 5.0.17

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@5.0.16...@spectrum-css/illustratedmessage@5.0.17)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="5.0.16"></a>

## 5.0.16

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@5.0.15...@spectrum-css/illustratedmessage@5.0.16)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="5.0.15"></a>

## 5.0.15

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@5.0.14...@spectrum-css/illustratedmessage@5.0.15)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="5.0.14"></a>

## 5.0.14

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@5.0.13...@spectrum-css/illustratedmessage@5.0.14)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="5.0.13"></a>

## 5.0.13

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@5.0.12...@spectrum-css/illustratedmessage@5.0.13)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="5.0.12"></a>

## 5.0.12

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@5.0.11...@spectrum-css/illustratedmessage@5.0.12)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="5.0.11"></a>

## 5.0.11

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@5.0.10...@spectrum-css/illustratedmessage@5.0.11)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="5.0.10"></a>

## 5.0.10

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@5.0.9...@spectrum-css/illustratedmessage@5.0.10)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="5.0.9"></a>

## 5.0.9

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@5.0.8...@spectrum-css/illustratedmessage@5.0.9)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="5.0.8"></a>

## 5.0.8

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@5.0.7...@spectrum-css/illustratedmessage@5.0.8)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="5.0.7"></a>

## 5.0.7

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@5.0.5...@spectrum-css/illustratedmessage@5.0.7)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="5.0.6"></a>

## 5.0.6

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@5.0.5...@spectrum-css/illustratedmessage@5.0.6)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="5.0.5"></a>

## 5.0.5

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@5.0.4...@spectrum-css/illustratedmessage@5.0.5)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="5.0.4"></a>

## 5.0.4

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@5.0.3...@spectrum-css/illustratedmessage@5.0.4)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="5.0.3"></a>

## 5.0.3

🗓 2023-04-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@5.0.2...@spectrum-css/illustratedmessage@5.0.3)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="5.0.2"></a>

## 5.0.2

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@5.0.1...@spectrum-css/illustratedmessage@5.0.2)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="5.0.1"></a>

## 5.0.1

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@5.0.0...@spectrum-css/illustratedmessage@5.0.1)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="5.0.0"></a>

## 5.0.0

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@4.0.19...@spectrum-css/illustratedmessage@5.0.0)

- feat(illustratedmessage)!: core tokens migration (#1699) ([3e937a0](https://github.com/adobe/spectrum-css/commit/3e937a0)), closes [#1699](https://github.com/adobe/spectrum-css/issues/1699)

### 🛑 BREAKING CHANGES

- migrates IllustratedMessage to core tokens

- Adds migration guide section to docs with a note about the removal of the CTA variant class.
- Adds high-contrast mode support

<a name="4.0.19"></a>

## 4.0.19

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@4.0.17...@spectrum-css/illustratedmessage@4.0.19)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="4.0.18"></a>

## 4.0.18

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@4.0.17...@spectrum-css/illustratedmessage@4.0.18)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="4.0.17"></a>

## 4.0.17

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@4.0.16...@spectrum-css/illustratedmessage@4.0.17)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="4.0.16"></a>

## 4.0.16

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@4.0.15...@spectrum-css/illustratedmessage@4.0.16)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="4.0.15"></a>

## 4.0.15

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@4.0.14...@spectrum-css/illustratedmessage@4.0.15)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="4.0.14"></a>

## 4.0.14

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@4.0.13...@spectrum-css/illustratedmessage@4.0.14)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="4.0.13"></a>

## 4.0.13

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@4.0.12...@spectrum-css/illustratedmessage@4.0.13)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="4.0.12"></a>

## 4.0.12

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@4.0.11...@spectrum-css/illustratedmessage@4.0.12)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="4.0.11"></a>

## 4.0.11

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@4.0.10...@spectrum-css/illustratedmessage@4.0.11)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="4.0.10"></a>

## 4.0.10

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@4.0.9...@spectrum-css/illustratedmessage@4.0.10)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="4.0.9"></a>

## 4.0.9

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@4.0.7...@spectrum-css/illustratedmessage@4.0.9)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="4.0.8"></a>

## 4.0.8

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@4.0.7...@spectrum-css/illustratedmessage@4.0.8)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="4.0.7"></a>

## 4.0.7

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@4.0.6...@spectrum-css/illustratedmessage@4.0.7)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="4.0.6"></a>

## 4.0.6

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@4.0.5...@spectrum-css/illustratedmessage@4.0.6)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="4.0.5"></a>

## 4.0.5

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@4.0.4...@spectrum-css/illustratedmessage@4.0.5)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="4.0.4"></a>

## 4.0.4

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@4.0.3...@spectrum-css/illustratedmessage@4.0.4)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="4.0.3"></a>

## 4.0.3

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@4.0.2...@spectrum-css/illustratedmessage@4.0.3)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="4.0.2"></a>

## 4.0.2

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@4.0.1...@spectrum-css/illustratedmessage@4.0.2)

### 🐛 Bug fixes

- resolving conflicts with main ([71ec2a2](https://github.com/adobe/spectrum-css/commit/71ec2a2))

<a name="4.0.1"></a>

## 4.0.1

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@4.0.0...@spectrum-css/illustratedmessage@4.0.1)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="4.0.0"></a>

## 4.0.0

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.17...@spectrum-css/illustratedmessage@4.0.0)

- chore(illustratedmessage)!: update colors, weights, sizes ([9f9b730](https://github.com/adobe/spectrum-css/commit/9f9b730)), closes [#1399](https://github.com/adobe/spectrum-css/issues/1399)

### 🛑 BREAKING CHANGES

- changes heading font size, body font-style, heading color, and heading font-weight. Also updates docs example to prefer sentence case over title case.

<a name="3.0.17"></a>

## 3.0.17

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.16...@spectrum-css/illustratedmessage@3.0.17)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="3.0.16"></a>

## 3.0.16

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.15...@spectrum-css/illustratedmessage@3.0.16)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="3.0.15"></a>

## 3.0.15

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.14...@spectrum-css/illustratedmessage@3.0.15)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="3.0.14"></a>

## 3.0.14

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.13...@spectrum-css/illustratedmessage@3.0.14)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="3.0.13"></a>

## 3.0.13

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.12...@spectrum-css/illustratedmessage@3.0.13)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="3.0.12"></a>

## 3.0.12

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.10...@spectrum-css/illustratedmessage@3.0.12)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

<a name="3.0.11"></a>

## 3.0.11

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.11-beta.0...@spectrum-css/illustratedmessage@3.0.11)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="3.0.11-beta.0"></a>

## 3.0.11-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.10...@spectrum-css/illustratedmessage@3.0.11-beta.0)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="3.0.10"></a>

## 3.0.10

🗓 2021-12-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.9...@spectrum-css/illustratedmessage@3.0.10)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="3.0.9"></a>

## 3.0.9

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.8...@spectrum-css/illustratedmessage@3.0.9)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="3.0.8"></a>

## 3.0.8

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.7...@spectrum-css/illustratedmessage@3.0.8)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="3.0.7"></a>

## 3.0.7

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.6...@spectrum-css/illustratedmessage@3.0.7)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="3.0.6"></a>

## 3.0.6

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.5...@spectrum-css/illustratedmessage@3.0.6)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="3.0.5"></a>

## 3.0.5

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.3-alpha.3...@spectrum-css/illustratedmessage@3.0.5)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="3.0.4"></a>

## 3.0.4

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.3-alpha.3...@spectrum-css/illustratedmessage@3.0.4)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="3.0.3"></a>

## 3.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.3-alpha.3...@spectrum-css/illustratedmessage@3.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="3.0.3-alpha.3"></a>

## 3.0.3-alpha.3

🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.3-alpha.2...@spectrum-css/illustratedmessage@3.0.3-alpha.3)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="3.0.3-alpha.2"></a>

## 3.0.3-alpha.2

🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.3-alpha.1...@spectrum-css/illustratedmessage@3.0.3-alpha.2)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="3.0.3-alpha.1"></a>

## 3.0.3-alpha.1

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.3-alpha.0...@spectrum-css/illustratedmessage@3.0.3-alpha.1)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="3.0.3-alpha.0"></a>

## 3.0.3-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.2...@spectrum-css/illustratedmessage@3.0.3-alpha.0)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="3.0.2"></a>

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.1...@spectrum-css/illustratedmessage@3.0.2)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="3.0.1"></a>

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.0...@spectrum-css/illustratedmessage@3.0.1)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="3.0.0"></a>

## 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.0-beta.5...@spectrum-css/illustratedmessage@3.0.0)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="3.0.0-beta.5"></a>

## 3.0.0-beta.5

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.0-beta.4...@spectrum-css/illustratedmessage@3.0.0-beta.5)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="3.0.0-beta.4"></a>

## 3.0.0-beta.4

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.0-beta.3...@spectrum-css/illustratedmessage@3.0.0-beta.4)

- fix!: updated type sizes to use consistent syntax, related to #972 (#1031) ([1a604c4](https://github.com/adobe/spectrum-css/commit/1a604c4)), closes [#972](https://github.com/adobe/spectrum-css/issues/972) [#1031](https://github.com/adobe/spectrum-css/issues/1031)

### 🛑 BREAKING CHANGES

- all typography sizing classes now have --size* instead of --*, see migration guides

<a name="3.0.0-beta.3"></a>

## 3.0.0-beta.3

🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.0-beta.2...@spectrum-css/illustratedmessage@3.0.0-beta.3)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="3.0.0-beta.2"></a>

## 3.0.0-beta.2

🗓 2020-05-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.0-beta.1...@spectrum-css/illustratedmessage@3.0.0-beta.2)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="3.0.0-beta.1"></a>

## 3.0.0-beta.1

🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@3.0.0-beta.0...@spectrum-css/illustratedmessage@3.0.0-beta.1)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="3.0.0-beta.0"></a>

## 3.0.0-beta.0

🗓 2020-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@2.1.1...@spectrum-css/illustratedmessage@3.0.0-beta.0)

### ✨ Features

- make IllustratedMessage support RTL ([3183eff](https://github.com/adobe/spectrum-css/commit/3183eff))

<a name="2.1.1"></a>

## 2.1.1

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@2.1.0...@spectrum-css/illustratedmessage@2.1.1)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="2.1.0"></a>

## 2.1.0

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@2.0.3...@spectrum-css/illustratedmessage@2.1.0)

### ✨ Features

- adding t-shirt sized typography, fixes [#210](https://github.com/adobe/spectrum-css/issues/210), closes [#416](https://github.com/adobe/spectrum-css/issues/416) ([#408](https://github.com/adobe/spectrum-css/issues/408)) ([3921bcb](https://github.com/adobe/spectrum-css/commit/3921bcb)), closes [#523](https://github.com/adobe/spectrum-css/issues/523)

<a name="2.0.3"></a>

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@2.0.2...@spectrum-css/illustratedmessage@2.0.3)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="2.0.2"></a>

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@2.0.1...@spectrum-css/illustratedmessage@2.0.2)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="2.0.1"></a>

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/illustratedmessage@2.0.0...@spectrum-css/illustratedmessage@2.0.1)

**Note:** Version bump only for package @spectrum-css/illustratedmessage

<a name="2.0.0"></a>

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
