# Change Log

## 3.0.0-s2-foundations.6

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`ff8d033`](https://github.com/adobe/spectrum-css/commit/ff8d033f2148e915b7496121b59b680e8d77ca6a) Thanks [@pfulton](https://github.com/pfulton)! - Incorporated a few additional bug fixes found in VRT

- Updated dependencies [[`130e137`](https://github.com/adobe/spectrum-css/commit/130e1372b223641efe0a3a23c83ff1d01a70bf1d), [`ff8d033`](https://github.com/adobe/spectrum-css/commit/ff8d033f2148e915b7496121b59b680e8d77ca6a)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.6

## 3.0.0-s2-foundations.5

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`de1d39f`](https://github.com/adobe/spectrum-css/commit/de1d39fdedc297032735acf97d0f87b6f2e45f50) Thanks [@pfulton](https://github.com/pfulton)! - Fix to how the system mapped custom property names are generated; adding support for pseudo functions, combinators, and complex selectors

- Updated dependencies [[`de1d39f`](https://github.com/adobe/spectrum-css/commit/de1d39fdedc297032735acf97d0f87b6f2e45f50)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.5

## 3.0.0-s2-foundations.4

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`485128c`](https://github.com/adobe/spectrum-css/commit/485128ca7947acb064f31e4118044a3f7e3f88b5) Thanks [@pfulton](https://github.com/pfulton)! - Corrects a faulty regex that was negatively affecting compilation of custom properties

- Updated dependencies [[`485128c`](https://github.com/adobe/spectrum-css/commit/485128ca7947acb064f31e4118044a3f7e3f88b5)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.4

## 3.0.0-s2-foundations.3

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`6b12d37`](https://github.com/adobe/spectrum-css/commit/6b12d375c12b36f387b331fff42b24bc7c3845df) Thanks [@pfulton](https://github.com/pfulton)! - fixes a compilation issue in the tokens dist artifacts

### Patch Changes

- Updated dependencies [[`6b12d37`](https://github.com/adobe/spectrum-css/commit/6b12d375c12b36f387b331fff42b24bc7c3845df)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.3

## 3.0.0-s2-foundations.2

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`b00388b`](https://github.com/adobe/spectrum-css/commit/b00388b3ab026989f261f7bcdd77699521f45d58) Thanks [@pfulton](https://github.com/pfulton)! - Preserves `themes` folder in `dist` artifacts for easier downstream consumption

### Patch Changes

- Updated dependencies [[`b00388b`](https://github.com/adobe/spectrum-css/commit/b00388b3ab026989f261f7bcdd77699521f45d58)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.2

## 3.0.0-s2-foundations.1

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`39bbd6c`](https://github.com/adobe/spectrum-css/commit/39bbd6cbb7eac7c71515ef2417554cb115eba00e) Thanks [@pfulton](https://github.com/pfulton)! - Fixes an issue where vars.css was not being populated with the correct values

### Patch Changes

- Updated dependencies [[`39bbd6c`](https://github.com/adobe/spectrum-css/commit/39bbd6cbb7eac7c71515ef2417554cb115eba00e)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.1

## 3.0.0-s2-foundations.0

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce) Thanks [@pfulton](https://github.com/pfulton)! - S2 colors + grays foundation

### Patch Changes

- Updated dependencies [[`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.0

## 2.1.2

### Patch Changes

- [#2842](https://github.com/adobe/spectrum-css/pull/2842) [`4cd3a15`](https://github.com/adobe/spectrum-css/commit/4cd3a15db914b667f5d606388051ecd2cd318134) Thanks [@castastrophe](https://github.com/castastrophe)! - Updated CSSNano plugin to toggle reduceIdent off to prevent invalid abstractions from breaking named grid templates.

## 2.1.2

### Patch Changes

- [#2842](https://github.com/adobe/spectrum-css/pull/2842) [`4cd3a15`](https://github.com/adobe/spectrum-css/commit/4cd3a15db914b667f5d606388051ecd2cd318134) Thanks [@castastrophe](https://github.com/castastrophe)! - Updated CSSNano plugin to toggle reduceIdent off to prevent invalid abstractions from breaking named grid templates.

## 2.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

## 2.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="2.0.0"></a>

## 2.0.0

🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachindicator@1.1.5...@spectrum-css/coachindicator@2.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="1.1.5"></a>

## 1.1.5

🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachindicator@1.1.4...@spectrum-css/coachindicator@1.1.5)

**Note:** Version bump only for package @spectrum-css/coachindicator

<a name="1.1.4"></a>

## 1.1.4

🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachindicator@1.1.3...@spectrum-css/coachindicator@1.1.4)

**Note:** Version bump only for package @spectrum-css/coachindicator

<a name="1.1.3"></a>

## 1.1.3

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachindicator@1.1.2...@spectrum-css/coachindicator@1.1.3)

**Note:** Version bump only for package @spectrum-css/coachindicator

<a name="1.1.2"></a>

## 1.1.2

🗓
2024-02-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachindicator@1.1.1...@spectrum-css/coachindicator@1.1.2)

### 🐛 Bug fixes

- **coachindicator:**address issues with coach indicator rings position ([#2483](https://github.com/adobe/spectrum-css/issues/2483))([9965188](https://github.com/adobe/spectrum-css/commit/9965188))

<a name="1.1.1"></a>

## 1.1.1

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/coachindicator

<a name="1.1.0"></a>

## 1.1.0

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachindicator@1.0.1...@spectrum-css/coachindicator@1.1.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="1.0.1"></a>

## 1.0.1

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachindicator@1.0.0...@spectrum-css/coachindicator@1.0.1)

**Note:** Version bump only for package @spectrum-css/coachindicator

<a name="1.0.0"></a>

## 1.0.0

🗓
2023-12-04

### ✨ Features

- **coachindicator:**adds new component([8794ddd](https://github.com/adobe/spectrum-css/commit/8794ddd))
