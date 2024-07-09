# Change Log

## 6.0.0-s2-foundations.6

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`4d88749`](https://github.com/adobe/spectrum-css/commit/4d887492f98f1f505535680bfb0baa06d24460a0) Thanks [@pfulton](https://github.com/pfulton)! - Inject missing tokens into theme files and adjust logic in the splitinator tool to replace nested variable references to the new system mappings

- Updated dependencies [[`130e137`](https://github.com/adobe/spectrum-css/commit/130e1372b223641efe0a3a23c83ff1d01a70bf1d), [`4d88749`](https://github.com/adobe/spectrum-css/commit/4d887492f98f1f505535680bfb0baa06d24460a0)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.6
  - @spectrum-css/tag@10.0.0-s2-foundations.6

## 6.0.0-s2-foundations.5

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`de1d39f`](https://github.com/adobe/spectrum-css/commit/de1d39fdedc297032735acf97d0f87b6f2e45f50) Thanks [@pfulton](https://github.com/pfulton)! - Fix to how the system mapped custom property names are generated; adding support for pseudo functions, combinators, and complex selectors

- Updated dependencies [[`de1d39f`](https://github.com/adobe/spectrum-css/commit/de1d39fdedc297032735acf97d0f87b6f2e45f50)]:
  - @spectrum-css/tag@10.0.0-s2-foundations.5
  - @spectrum-css/tokens@15.0.0-s2-foundations.5

## 6.0.0-s2-foundations.4

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`485128c`](https://github.com/adobe/spectrum-css/commit/485128ca7947acb064f31e4118044a3f7e3f88b5) Thanks [@pfulton](https://github.com/pfulton)! - Corrects a faulty regex that was negatively affecting compilation of custom properties

- Updated dependencies [[`485128c`](https://github.com/adobe/spectrum-css/commit/485128ca7947acb064f31e4118044a3f7e3f88b5)]:
  - @spectrum-css/tag@10.0.0-s2-foundations.4
  - @spectrum-css/tokens@15.0.0-s2-foundations.4

## 6.0.0-s2-foundations.3

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`6b12d37`](https://github.com/adobe/spectrum-css/commit/6b12d375c12b36f387b331fff42b24bc7c3845df) Thanks [@pfulton](https://github.com/pfulton)! - fixes a compilation issue in the tokens dist artifacts

### Patch Changes

- Updated dependencies [[`6b12d37`](https://github.com/adobe/spectrum-css/commit/6b12d375c12b36f387b331fff42b24bc7c3845df)]:
  - @spectrum-css/tag@10.0.0-s2-foundations.3
  - @spectrum-css/tokens@15.0.0-s2-foundations.3

## 6.0.0-s2-foundations.2

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`b00388b`](https://github.com/adobe/spectrum-css/commit/b00388b3ab026989f261f7bcdd77699521f45d58) Thanks [@pfulton](https://github.com/pfulton)! - Preserves `themes` folder in `dist` artifacts for easier downstream consumption

### Patch Changes

- Updated dependencies [[`b00388b`](https://github.com/adobe/spectrum-css/commit/b00388b3ab026989f261f7bcdd77699521f45d58)]:
  - @spectrum-css/tag@10.0.0-s2-foundations.2
  - @spectrum-css/tokens@15.0.0-s2-foundations.2

## 6.0.0-s2-foundations.1

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`39bbd6c`](https://github.com/adobe/spectrum-css/commit/39bbd6cbb7eac7c71515ef2417554cb115eba00e) Thanks [@pfulton](https://github.com/pfulton)! - Fixes an issue where vars.css was not being populated with the correct values

### Patch Changes

- Updated dependencies [[`39bbd6c`](https://github.com/adobe/spectrum-css/commit/39bbd6cbb7eac7c71515ef2417554cb115eba00e)]:
  - @spectrum-css/tag@10.0.0-s2-foundations.1
  - @spectrum-css/tokens@15.0.0-s2-foundations.1

## 6.0.0-s2-foundations.0

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce) Thanks [@pfulton](https://github.com/pfulton)! - S2 colors + grays foundation

### Patch Changes

- Updated dependencies [[`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce)]:
  - @spectrum-css/tag@10.0.0-s2-foundations.0
  - @spectrum-css/tokens@15.0.0-s2-foundations.0

## 5.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/tag@9.1.1

## 5.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/tag@>=9
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="5.0.0"></a>

## 5.0.0

🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.1.5...@spectrum-css/taggroup@5.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="4.1.5"></a>

## 4.1.5

🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.1.4...@spectrum-css/taggroup@4.1.5)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.1.4"></a>

## 4.1.4

🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.1.3...@spectrum-css/taggroup@4.1.4)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.1.3"></a>

## 4.1.3

🗓
2024-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.1.2...@spectrum-css/taggroup@4.1.3)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.1.2"></a>

## 4.1.2

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.1.1...@spectrum-css/taggroup@4.1.2)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.1.1"></a>

## 4.1.1

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.1.0"></a>

## 4.1.0

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.14...@spectrum-css/taggroup@4.1.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="4.0.14"></a>

## 4.0.14

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.13...@spectrum-css/taggroup@4.0.14)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.13"></a>

## 4.0.13

🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.12...@spectrum-css/taggroup@4.0.13)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.12"></a>

## 4.0.12

🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.10...@spectrum-css/taggroup@4.0.12)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.11"></a>

## 4.0.11

🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.10...@spectrum-css/taggroup@4.0.11)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.10"></a>

## 4.0.10

🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.9...@spectrum-css/taggroup@4.0.10)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.9"></a>

## 4.0.9

🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.8...@spectrum-css/taggroup@4.0.9)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.8"></a>

## 4.0.8

🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.7...@spectrum-css/taggroup@4.0.8)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.7"></a>

## 4.0.7

🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.6...@spectrum-css/taggroup@4.0.7)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.6"></a>

## 4.0.6

🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.5...@spectrum-css/taggroup@4.0.6)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.5"></a>

## 4.0.5

🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.4...@spectrum-css/taggroup@4.0.5)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.4"></a>

## 4.0.4

🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.3...@spectrum-css/taggroup@4.0.4)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.3"></a>

## 4.0.3

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.2...@spectrum-css/taggroup@4.0.3)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.2"></a>

## 4.0.2

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.1...@spectrum-css/taggroup@4.0.2)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.1"></a>

## 4.0.1

🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.0...@spectrum-css/taggroup@4.0.1)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.0"></a>

## 4.0.0

🗓
2023-08-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.64...@spectrum-css/taggroup@4.0.0)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

\*feat(taggroup)!: migrate to spectrum-tokens([531e067](https://github.com/adobe/spectrum-css/commit/531e067))

    	###
    	🛑 BREAKING CHANGES

    		*
    		migrates TagGroup to use `@adobe/spectrum-tokens`

Update build related files to migrate to use of core tokens.

Use new global tokens for margin, and simplify usage. Adds mod prefixed
custom properties and improves docs with mod section and description
text pulled from the tag guidelines.

Updates example markup and migration guide.

fix(taggroup): allow tag items to wrap to the next line

Tag group flex items were not previously wrapping and would overflow and
cut off at smaller screen sizes. This now follows the tag guidelines to
wrap items to the next line. And adds a story that shows wrapping.

CSS-500

<a name="3.3.64"></a>

## 3.3.64

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.63...@spectrum-css/taggroup@3.3.64)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.63"></a>

## 3.3.63

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.61...@spectrum-css/taggroup@3.3.63)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.62"></a>

## 3.3.62

🗓
2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.61...@spectrum-css/taggroup@3.3.62)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.61"></a>

## 3.3.61

🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.60...@spectrum-css/taggroup@3.3.61)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.60"></a>

## 3.3.60

🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.59...@spectrum-css/taggroup@3.3.60)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.59"></a>

## 3.3.59

🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.58...@spectrum-css/taggroup@3.3.59)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.58"></a>

## 3.3.58

🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.57...@spectrum-css/taggroup@3.3.58)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.57"></a>

## 3.3.57

🗓
2023-07-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.56...@spectrum-css/taggroup@3.3.57)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.56"></a>

## 3.3.56

🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.55...@spectrum-css/taggroup@3.3.56)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.55"></a>

## 3.3.55

🗓
2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.54...@spectrum-css/taggroup@3.3.55)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.54"></a>

## 3.3.54

🗓
2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.53...@spectrum-css/taggroup@3.3.54)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.53"></a>

## 3.3.53

🗓
2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.52...@spectrum-css/taggroup@3.3.53)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.52"></a>

## 3.3.52

🗓
2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.51...@spectrum-css/taggroup@3.3.52)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.51"></a>

## 3.3.51

🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.50...@spectrum-css/taggroup@3.3.51)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.50"></a>

## 3.3.50

🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.49...@spectrum-css/taggroup@3.3.50)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.49"></a>

## 3.3.49

🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.48...@spectrum-css/taggroup@3.3.49)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="3.3.48"></a>

## 3.3.48

🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.47...@spectrum-css/taggroup@3.3.48)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.47"></a>

## 3.3.47

🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.46...@spectrum-css/taggroup@3.3.47)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.46"></a>

## 3.3.46

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.45...@spectrum-css/taggroup@3.3.46)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.45"></a>

## 3.3.45

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.44...@spectrum-css/taggroup@3.3.45)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.44"></a>

## 3.3.44

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.43...@spectrum-css/taggroup@3.3.44)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.43"></a>

## 3.3.43

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.42...@spectrum-css/taggroup@3.3.43)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.42"></a>

## 3.3.42

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.41...@spectrum-css/taggroup@3.3.42)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.41"></a>

## 3.3.41

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.40...@spectrum-css/taggroup@3.3.41)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.40"></a>

## 3.3.40

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.39...@spectrum-css/taggroup@3.3.40)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.39"></a>

## 3.3.39

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.38...@spectrum-css/taggroup@3.3.39)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.38"></a>

## 3.3.38

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.37...@spectrum-css/taggroup@3.3.38)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.37"></a>

## 3.3.37

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.36...@spectrum-css/taggroup@3.3.37)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.36"></a>

## 3.3.36

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.35...@spectrum-css/taggroup@3.3.36)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.35"></a>

## 3.3.35

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.33...@spectrum-css/taggroup@3.3.35)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.34"></a>

## 3.3.34

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.33...@spectrum-css/taggroup@3.3.34)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.33"></a>

## 3.3.33

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.32...@spectrum-css/taggroup@3.3.33)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.32"></a>

## 3.3.32

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.31...@spectrum-css/taggroup@3.3.32)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.31"></a>

## 3.3.31

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.30...@spectrum-css/taggroup@3.3.31)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.30"></a>

## 3.3.30

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.29...@spectrum-css/taggroup@3.3.30)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.29"></a>

## 3.3.29

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.27...@spectrum-css/taggroup@3.3.29)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.28"></a>

## 3.3.28

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.27...@spectrum-css/taggroup@3.3.28)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.27"></a>

## 3.3.27

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.26...@spectrum-css/taggroup@3.3.27)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.26"></a>

## 3.3.26

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.25...@spectrum-css/taggroup@3.3.26)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.25"></a>

## 3.3.25

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.24...@spectrum-css/taggroup@3.3.25)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.24"></a>

## 3.3.24

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.23...@spectrum-css/taggroup@3.3.24)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.23"></a>

## 3.3.23

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.22...@spectrum-css/taggroup@3.3.23)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.22"></a>

## 3.3.22

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.21...@spectrum-css/taggroup@3.3.22)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.21"></a>

## 3.3.21

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.20...@spectrum-css/taggroup@3.3.21)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.20"></a>

## 3.3.20

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.19...@spectrum-css/taggroup@3.3.20)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.19"></a>

## 3.3.19

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.18...@spectrum-css/taggroup@3.3.19)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.18"></a>

## 3.3.18

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.16...@spectrum-css/taggroup@3.3.18)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.17"></a>

## 3.3.17

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.16...@spectrum-css/taggroup@3.3.17)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.16"></a>

## 3.3.16

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.15...@spectrum-css/taggroup@3.3.16)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.15"></a>

## 3.3.15

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.14...@spectrum-css/taggroup@3.3.15)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.14"></a>

## 3.3.14

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.13...@spectrum-css/taggroup@3.3.14)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.13"></a>

## 3.3.13

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.12...@spectrum-css/taggroup@3.3.13)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.12"></a>

## 3.3.12

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.11...@spectrum-css/taggroup@3.3.12)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.11"></a>

## 3.3.11

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.10...@spectrum-css/taggroup@3.3.11)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.10"></a>

## 3.3.10

🗓 2022-04-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.9...@spectrum-css/taggroup@3.3.10)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.9"></a>

## 3.3.9

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.8...@spectrum-css/taggroup@3.3.9)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.8"></a>

## 3.3.8

🗓 2022-03-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.7...@spectrum-css/taggroup@3.3.8)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.7"></a>

## 3.3.7

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.6...@spectrum-css/taggroup@3.3.7)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.6"></a>

## 3.3.6

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.5...@spectrum-css/taggroup@3.3.6)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.5"></a>

## 3.3.5

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.4...@spectrum-css/taggroup@3.3.5)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.4"></a>

## 3.3.4

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.3...@spectrum-css/taggroup@3.3.4)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.3"></a>

## 3.3.3

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.2...@spectrum-css/taggroup@3.3.3)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.2"></a>

## 3.3.2

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.1...@spectrum-css/taggroup@3.3.2)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.1"></a>

## 3.3.1

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.0...@spectrum-css/taggroup@3.3.1)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.0"></a>

## 3.3.0

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.1.4...@spectrum-css/taggroup@3.3.0)

### ✨ Features

- break out ClearButton and LogicButton into their own packages ([3cc0a5f](https://github.com/adobe/spectrum-css/commit/3cc0a5f))

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

<a name="3.2.0"></a>

## 3.2.0

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.2.0-beta.0...@spectrum-css/taggroup@3.2.0)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.2.0-beta.0"></a>

## 3.2.0-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.1.4...@spectrum-css/taggroup@3.2.0-beta.0)

### ✨ Features

- break out ClearButton and LogicButton into their own packages ([a2092ab](https://github.com/adobe/spectrum-css/commit/a2092ab))

<a name="3.1.4"></a>

## 3.1.4

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.1.3...@spectrum-css/taggroup@3.1.4)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.1.3"></a>

## 3.1.3

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.1.2...@spectrum-css/taggroup@3.1.3)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.1.2"></a>

## 3.1.2

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.1.1...@spectrum-css/taggroup@3.1.2)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.1.1"></a>

## 3.1.1

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.1.0...@spectrum-css/taggroup@3.1.1)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.1.0"></a>

## 3.1.0

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.0.0...@spectrum-css/taggroup@3.1.0)

### ✨ Features

- make ClearButton build again, unblock CCX ([#1304](https://github.com/adobe/spectrum-css/issues/1304)) ([ae9399a](https://github.com/adobe/spectrum-css/commit/ae9399a))

<a name="3.0.0"></a>

## 3.0.0

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@2.0.1...@spectrum-css/taggroup@3.0.0)

- fix!: avatar needs a div wrapper for to support express border overlay ([f54b645](https://github.com/adobe/spectrum-css/commit/f54b645))

### 🛑 BREAKING CHANGES

- for express to support the transparent border overlay,
  the avatar needs to be wrapped in a div to support pseudo elements.

<a name="2.0.0"></a>

## 2.0.0

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@2.0.0-alpha.3...@spectrum-css/taggroup@2.0.0)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="2.0.0-alpha.3"></a>

## 2.0.0-alpha.3

🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@2.0.0-alpha.2...@spectrum-css/taggroup@2.0.0-alpha.3)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="2.0.0-alpha.2"></a>

## 2.0.0-alpha.2

🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@2.0.0-alpha.1...@spectrum-css/taggroup@2.0.0-alpha.2)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="2.0.0-alpha.1"></a>

## 2.0.0-alpha.1

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@2.0.0-alpha.0...@spectrum-css/taggroup@2.0.0-alpha.1)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="2.0.0-alpha.0"></a>

## 2.0.0-alpha.0

🗓 2021-04-27

### ✨ Features

- align tags with more recent DNA tokens ([0f41e47](https://github.com/adobe/spectrum-css/commit/0f41e47))

### 🐛 Bug fixes

- taggroup to use more dna tokens ([243aad6](https://github.com/adobe/spectrum-css/commit/243aad6))

### 🛑 BREAKING CHANGES

- changed tags to taggroup and broke tag into it's own component

<a name="3.0.2"></a>

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tags@3.0.1...@spectrum-css/tags@3.0.2)

**Note:** Version bump only for package @spectrum-css/tags

<a name="3.0.1"></a>

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tags@3.0.0...@spectrum-css/tags@3.0.1)

**Note:** Version bump only for package @spectrum-css/tags

<a name="3.0.0"></a>

## 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tags@3.0.0-beta.6...@spectrum-css/tags@3.0.0)

**Note:** Version bump only for package @spectrum-css/tags

<a name="3.0.0-beta.6"></a>

## 3.0.0-beta.6

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tags@3.0.0-beta.5...@spectrum-css/tags@3.0.0-beta.6)

### 🐛 Bug fixes

- make default Tags small ([4496cdb](https://github.com/adobe/spectrum-css/commit/4496cdb))
- make Tags build again ([eddb3f5](https://github.com/adobe/spectrum-css/commit/eddb3f5))
- update main, resolved conflicts ([d7880a2](https://github.com/adobe/spectrum-css/commit/d7880a2))

<a name="3.0.0-beta.5"></a>

## 3.0.0-beta.5

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tags@3.0.0-beta.4...@spectrum-css/tags@3.0.0-beta.5)

**Note:** Version bump only for package @spectrum-css/tags

<a name="3.0.0-beta.4"></a>

## 3.0.0-beta.4

🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tags@3.0.0-beta.3...@spectrum-css/tags@3.0.0-beta.4)

### ✨ Features

- tags contributd by rsp@v3 ([a759544](https://github.com/adobe/spectrum-css/commit/a759544))

### 🐛 Bug fixes

- add back the margin-inline-end for the tag has icon or avatar ([ba335a9](https://github.com/adobe/spectrum-css/commit/ba335a9))
- adjust the color to match design for standard tag item ([c3cf3b6](https://github.com/adobe/spectrum-css/commit/c3cf3b6))
- fix some mismatch between impl and design xd ([bb9bab1](https://github.com/adobe/spectrum-css/commit/bb9bab1))
- fix truncation example for tag and fix clear button size ([828e5c0](https://github.com/adobe/spectrum-css/commit/828e5c0))
- implements the background for clearButton ([7bfccfd](https://github.com/adobe/spectrum-css/commit/7bfccfd))
- mix tag with or without icon/avatar ([27d5b3c](https://github.com/adobe/spectrum-css/commit/27d5b3c))
- move border-radius setting to index.css ([0b39aa4](https://github.com/adobe/spectrum-css/commit/0b39aa4))
- remove the margin-left for clearButton ([81f17e8](https://github.com/adobe/spectrum-css/commit/81f17e8))
- removed deprecated tokens from tabs and tags ([1e543e4](https://github.com/adobe/spectrum-css/commit/1e543e4))
- resolving conflicts with main ([8cafffa](https://github.com/adobe/spectrum-css/commit/8cafffa))
- update dna variable for focus-ring and border-size ([d8873f6](https://github.com/adobe/spectrum-css/commit/d8873f6))
- use dna variables for border-shadow and border-size ([4eb1d09](https://github.com/adobe/spectrum-css/commit/4eb1d09))

<a name="3.0.0-beta.3"></a>

## 3.0.0-beta.3

🗓 2020-06-19 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tags@3.0.0-beta.2...@spectrum-css/tags@3.0.0-beta.3)

**Note:** Version bump only for package @spectrum-css/tags

<a name="3.0.0-beta.2"></a>

## 3.0.0-beta.2

🗓 2020-05-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tags@3.0.0-beta.1...@spectrum-css/tags@3.0.0-beta.2)

**Note:** Version bump only for package @spectrum-css/tags

<a name="3.0.0-beta.1"></a>

## 3.0.0-beta.1

🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tags@3.0.0-beta.0...@spectrum-css/tags@3.0.0-beta.1)

**Note:** Version bump only for package @spectrum-css/tags

<a name="3.0.0-beta.0"></a>

## 3.0.0-beta.0

🗓 2020-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tags@2.0.5...@spectrum-css/tags@3.0.0-beta.0)

### ✨ Features

- make Tags support RTL ([503d215](https://github.com/adobe/spectrum-css/commit/503d215))

<a name="2.0.5"></a>

## 2.0.5

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tags@2.0.4...@spectrum-css/tags@2.0.5)

**Note:** Version bump only for package @spectrum-css/tags

<a name="2.0.4"></a>

## 2.0.4

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tags@2.0.3...@spectrum-css/tags@2.0.4)

**Note:** Version bump only for package @spectrum-css/tags

<a name="2.0.3"></a>

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tags@2.0.2...@spectrum-css/tags@2.0.3)

**Note:** Version bump only for package @spectrum-css/tags

<a name="2.0.2"></a>

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tags@2.0.1...@spectrum-css/tags@2.0.2)

**Note:** Version bump only for package @spectrum-css/tags

<a name="2.0.1"></a>

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tags@2.0.0...@spectrum-css/tags@2.0.1)

### 🐛 Bug fixes

- preprocess percentage values and convert them to floats, fixes [#340](https://github.com/adobe/spectrum-css/issues/340) ([a77ac11](https://github.com/adobe/spectrum-css/commit/a77ac11))

<a name="2.0.0"></a>

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
