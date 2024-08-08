# Change Log

## 15.0.0-s2-foundations.15

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`58a89ea`](https://github.com/adobe/spectrum-css/commit/58a89ea464c387111511271a5f5afce044f11042) Thanks [@pfulton](https://github.com/pfulton)! - [SWC-237] accordion item border height set to 0 for non-first-child elements

## 15.0.0-s2-foundations.14

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`975b4fb`](https://github.com/adobe/spectrum-css/commit/975b4fb631d7203e772c2e879fbec610f933286f) Thanks [@pfulton](https://github.com/pfulton)! - [SWC-238] t-shirt-based calc moved out of theme into base css

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`975b4fb`](https://github.com/adobe/spectrum-css/commit/975b4fb631d7203e772c2e879fbec610f933286f) Thanks [@pfulton](https://github.com/pfulton)! - [SWC-235] meter properties moved out of theme and into index.css

## 15.0.0-s2-foundations.13

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`5546ec6`](https://github.com/adobe/spectrum-css/commit/5546ec6a508eb249ede78031db22ddf5972e5c05) Thanks [@pfulton](https://github.com/pfulton)! - - Accordion: Flatten sizing variables in theme layer
  - ActionButton: Fix typo in variable name "\*-defaul-selectedt"
  - Move out rtl logical transform from theme to index.css for: calendar, pagination, treeview

## 15.0.0-s2-foundations.12

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`b0862e1`](https://github.com/adobe/spectrum-css/commit/b0862e1a5b95c19443fd919c6baf4b4ea9ba79c1) Thanks [@pfulton](https://github.com/pfulton)! - Updated build to set cssnano to discardUnused: false

## 15.0.0-s2-foundations.11

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`4265d20`](https://github.com/adobe/spectrum-css/commit/4265d208b6eb2db923e558fca100b4532b964e45) Thanks [@pfulton](https://github.com/pfulton)! - Fix unsupported variables created in components/actionbutton/themes/spectrum.css

## 15.0.0-s2-foundations.10

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`0844aad`](https://github.com/adobe/spectrum-css/commit/0844aadba2fefb844a66370ff6e9b4704f6c1543) Thanks [@pfulton](https://github.com/pfulton)! - Fixes to index.css imports to ensure appropriate system mappings get loaded

## 15.0.0-s2-foundations.9

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`84c8721`](https://github.com/adobe/spectrum-css/commit/84c87212ccb37c887225eaff28e84d9f8e608e09) Thanks [@pfulton](https://github.com/pfulton)! - Push out the latest release to the components

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`0a0dace`](https://github.com/adobe/spectrum-css/commit/0a0dacec163234bc73961ef17826cdc33765d9df) Thanks [@pfulton](https://github.com/pfulton)! - Across the board version update to latest build system state

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`681ba47`](https://github.com/adobe/spectrum-css/commit/681ba478c1259d0bbb183670f3188538ec3bee1d) Thanks [@pfulton](https://github.com/pfulton)! - Doing a widespread release on all packages to ensure the latest compiled CSS is published.

## 15.0.0-s2-foundations.8

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`2633985`](https://github.com/adobe/spectrum-css/commit/2633985775ef5a8fad929e275e55e99b75b10959) Thanks [@pfulton](https://github.com/pfulton)! - Update system property tooling (splitinator) to leverage the selector parser

## 15.0.0-s2-foundations.7

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`24a51cc`](https://github.com/adobe/spectrum-css/commit/24a51cc3b682a06a5133c4f5bf72c11a2337ee22) Thanks [@pfulton](https://github.com/pfulton)! - Revert themes asset naming to simplify code review; bug fixes in custom property loading from theme assets

## 15.0.0-s2-foundations.6

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`130e137`](https://github.com/adobe/spectrum-css/commit/130e1372b223641efe0a3a23c83ff1d01a70bf1d) Thanks [@pfulton](https://github.com/pfulton)! - This update pre-resolves the bundler assets to make them easier to serve as a single entry point.

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`4d88749`](https://github.com/adobe/spectrum-css/commit/4d887492f98f1f505535680bfb0baa06d24460a0) Thanks [@pfulton](https://github.com/pfulton)! - Inject missing tokens into theme files and adjust logic in the splitinator tool to replace nested variable references to the new system mappings

## 15.0.0-s2-foundations.5

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`de1d39f`](https://github.com/adobe/spectrum-css/commit/de1d39fdedc297032735acf97d0f87b6f2e45f50) Thanks [@pfulton](https://github.com/pfulton)! - Fix to how the system mapped custom property names are generated; adding support for pseudo functions, combinators, and complex selectors

## 15.0.0-s2-foundations.4

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`485128c`](https://github.com/adobe/spectrum-css/commit/485128ca7947acb064f31e4118044a3f7e3f88b5) Thanks [@pfulton](https://github.com/pfulton)! - Corrects a faulty regex that was negatively affecting compilation of custom properties

## 15.0.0-s2-foundations.3

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`6b12d37`](https://github.com/adobe/spectrum-css/commit/6b12d375c12b36f387b331fff42b24bc7c3845df) Thanks [@pfulton](https://github.com/pfulton)! - fixes a compilation issue in the tokens dist artifacts

## 15.0.0-s2-foundations.2

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`b00388b`](https://github.com/adobe/spectrum-css/commit/b00388b3ab026989f261f7bcdd77699521f45d58) Thanks [@pfulton](https://github.com/pfulton)! - Preserves `themes` folder in `dist` artifacts for easier downstream consumption

## 15.0.0-s2-foundations.1

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`39bbd6c`](https://github.com/adobe/spectrum-css/commit/39bbd6cbb7eac7c71515ef2417554cb115eba00e) Thanks [@pfulton](https://github.com/pfulton)! - Fixes an issue where vars.css was not being populated with the correct values

## 15.0.0-s2-foundations.0

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce) Thanks [@pfulton](https://github.com/pfulton)! - S2 colors + grays foundation

## 14.3.1

### Patch Changes

- [#2840](https://github.com/adobe/spectrum-css/pull/2840) [`84a70bb`](https://github.com/adobe/spectrum-css/commit/84a70bb076ac7afd15122d3b53299a4f1ccd1af3) Thanks [@castastrophe](https://github.com/castastrophe)! - Tokens update to correct the background color used in documentation for static black.

  Feature that updates storybook to move shared arg types to the global scope.

## 14.3.0

### Minor Changes

- [#2803](https://github.com/adobe/spectrum-css/pull/2803) [`2c5e5eb`](https://github.com/adobe/spectrum-css/commit/2c5e5ebc4d1dca38f877ad1e31f69315831c5717) Thanks [@castastrophe](https://github.com/castastrophe)! - This feature adds the custom variables for each context (spectrum and express) to the root-named asset (dist/css/express/global-vars.css)

## 14.2.0

### Minor Changes

- [#2766](https://github.com/adobe/spectrum-css/pull/2766) [`8a123ae`](https://github.com/adobe/spectrum-css/commit/8a123ae6dbc75bcab3dfd43d856de408e7eaab1b) Thanks [@dependabot](https://github.com/apps/dependabot)! - New token `--spectrum-accordion-top-to-text-spacious-small` available to be used.

## 14.1.0

### Minor Changes

- [#2742](https://github.com/adobe/spectrum-css/pull/2742) [`1e74ab7`](https://github.com/adobe/spectrum-css/commit/1e74ab7511257efa80f02da7a3115d302093ac6f) Thanks [@castastrophe](https://github.com/castastrophe)! - ### New token output files

  - Adds component-specific theme mappings to the tokens package; this supports SWC offering S1 and S2 in tandem
  - Adds an index file to list all available component-specific files

## 14.1.0-alpha.3

### Minor Changes

- Adding an index file for all new component assets listed in the token package output.

## 14.1.0-alpha.2

### Patch Changes

- [#2742](https://github.com/adobe/spectrum-css/pull/2742) [`336a558`](https://github.com/adobe/spectrum-css/commit/336a558d23b0aa66b5a15e85881b12a261a69bf0) Thanks [@castastrophe](https://github.com/castastrophe)! - Fixed a bug where the bridge tokens were being injected into the express and spectrum component-specific files

## 14.1.0-alpha.1

### Patch Changes

- fix: support full dist output in release

## 14.1.0-alpha.0

### Minor Changes

- feat: adding component-specific theme mappings and new bridge files to support S1 and S2 in tandem

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="14.0.0"></a>

## 14.0.0

🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@13.2.0...@spectrum-css/tokens@14.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="13.2.0"></a>

## 13.2.0

🗓
2024-02-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@13.1.2...@spectrum-css/tokens@13.2.0)

### ✨ Features

- **tokens:**use spectrum-tokens@12.24.0([b20ebb6](https://github.com/adobe/spectrum-css/commit/b20ebb6))

<a name="13.1.2"></a>

## 13.1.2

🗓
2024-02-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@13.1.1...@spectrum-css/tokens@13.1.2)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="13.1.1"></a>

## 13.1.1

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/tokens

<a name="13.1.0"></a>

## 13.1.0

🗓
2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@13.0.9...@spectrum-css/tokens@13.1.0)

### ✨ Features

- **tokens:**add icon xxl and xxs tokens([b2d71bc](https://github.com/adobe/spectrum-css/commit/b2d71bc))

<a name="13.0.9"></a>

## 13.0.9

🗓
2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@13.0.8...@spectrum-css/tokens@13.0.9)

### 🐛 Bug fixes

\*deprecate logical transform plugin ([#2437](https://github.com/adobe/spectrum-css/issues/2437))([ff5dda6](https://github.com/adobe/spectrum-css/commit/ff5dda6))

<a name="13.0.8"></a>

## 13.0.8

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@13.0.7...@spectrum-css/tokens@13.0.8)

### 🐛 Bug fixes

- **tokens:**add compiled token assets to git([916b670](https://github.com/adobe/spectrum-css/commit/916b670))\*
  **tokens:**dependency updates([f9395a3](https://github.com/adobe/spectrum-css/commit/f9395a3))

<a name="13.0.7"></a>

## 13.0.7

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@13.0.6...@spectrum-css/tokens@13.0.7)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="13.0.6"></a>

## 13.0.6

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@13.0.5...@spectrum-css/tokens@13.0.6)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="13.0.5"></a>

## 13.0.5

🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@13.0.4...@spectrum-css/tokens@13.0.5)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="13.0.4"></a>

## 13.0.4

🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@13.0.0...@spectrum-css/tokens@13.0.4)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="13.0.3"></a>

## 13.0.3

🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@13.0.0...@spectrum-css/tokens@13.0.3)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="13.0.0"></a>

## 13.0.0

🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@12.0.0...@spectrum-css/tokens@13.0.0)

### 🐛 Bug fixes

-     **sidenav:**remove temporary custom tokens ([#2256](https://github.com/adobe/spectrum-css/issues/2256))([af0edde](https://github.com/adobe/spectrum-css/commit/af0edde))*
      **tokens:**use latest spectrum-tokens release([e8202b1](https://github.com/adobe/spectrum-css/commit/e8202b1))

  *feat(dropindicator)!: migrate to spectrum tokens (#2198)([da24515](https://github.com/adobe/spectrum-css/commit/da24515)), closes[#2198](https://github.com/adobe/spectrum-css/issues/2198)*refactor(assetcard)!: token migration (#2229)([a0cf37b](https://github.com/adobe/spectrum-css/commit/a0cf37b)), closes[#2229](https://github.com/adobe/spectrum-css/issues/2229)

      	###
      	🛑 BREAKING CHANGES

      		*
      		migrates DropIndicator to use `@adobe/spectrum-tokens`
      		*
      		migrate asset card to updated token system

<a name="12.0.0"></a>

## 12.0.0

🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.4.0...@spectrum-css/tokens@12.0.0)

\*feat(modal)!: diy migration (#2164)([0b83f13](https://github.com/adobe/spectrum-css/commit/0b83f13)), closes[#2164](https://github.com/adobe/spectrum-css/issues/2164)

    	###
    	🛑 BREAKING CHANGES

    		*
    		migrates Modal to use `@adobe/spectrum-tokens`

Additionally:

- feat(modal)!: migrate to spectrum tokens

- chore(tokens): add modal custom tokens

chore(modal): fixed indentation index.css

chore(modal): added mod variables

chore(modal): updated package version

chore(modal): updated css to use custom tokens for animation

chore: updated css properties

- docs(modal): regenerate mods

<a name="11.4.0"></a>

## 11.4.0

🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.3.7...@spectrum-css/tokens@11.4.0)

### ✨ Features

- **tokens:**adds ui icons tokens ([#2186](https://github.com/adobe/spectrum-css/issues/2186))([732e573](https://github.com/adobe/spectrum-css/commit/732e573))

<a name="11.3.7"></a>

## 11.3.7

🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.3.6...@spectrum-css/tokens@11.3.7)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="11.3.6"></a>

## 11.3.6

🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.3.5...@spectrum-css/tokens@11.3.6)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="11.3.5"></a>

## 11.3.5

🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.3.4...@spectrum-css/tokens@11.3.5)

### 🐛 Bug fixes

- **well:**missing semicolons in custom vars ([#2163](https://github.com/adobe/spectrum-css/issues/2163))([814c49e](https://github.com/adobe/spectrum-css/commit/814c49e))

<a name="11.3.4"></a>

## 11.3.4

🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.3.3...@spectrum-css/tokens@11.3.4)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="11.3.3"></a>

## 11.3.3

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.3.2...@spectrum-css/tokens@11.3.3)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="11.3.2"></a>

## 11.3.2

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.3.1...@spectrum-css/tokens@11.3.2)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="11.3.1"></a>

## 11.3.1

🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.3.0...@spectrum-css/tokens@11.3.1)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="11.3.0"></a>

## 11.3.0

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.2.2...@spectrum-css/tokens@11.3.0)

### ✨ Features

- **tokens:**update to spectrum-tokens v12.17.0 ([#2118](https://github.com/adobe/spectrum-css/issues/2118))([57d1d93](https://github.com/adobe/spectrum-css/commit/57d1d93))

<a name="11.2.2"></a>

## 11.2.2

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.2.0...@spectrum-css/tokens@11.2.2)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="11.2.1"></a>

## 11.2.1

🗓
2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.2.0...@spectrum-css/tokens@11.2.1)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="11.2.0"></a>

## 11.2.0

🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.1.0...@spectrum-css/tokens@11.2.0)

### ✨ Features

- **badge,tokens:**add non-semantic colors ([#2077](https://github.com/adobe/spectrum-css/issues/2077))([1bac588](https://github.com/adobe/spectrum-css/commit/1bac588))

### 🐛 Bug fixes

\*revert prettier ([#2074](https://github.com/adobe/spectrum-css/issues/2074))([ebb98df](https://github.com/adobe/spectrum-css/commit/ebb98df))

<a name="11.1.0"></a>

## 11.1.0

🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.0.2...@spectrum-css/tokens@11.1.0)

### ✨ Features

- **tokens:**update to spectrum tokens v12.16.0 ([#2064](https://github.com/adobe/spectrum-css/issues/2064))([75ffb63](https://github.com/adobe/spectrum-css/commit/75ffb63))

<a name="11.0.2"></a>

## 11.0.2

🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.0.1...@spectrum-css/tokens@11.0.2)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="11.0.1"></a>

## 11.0.1

🗓
2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.0.0...@spectrum-css/tokens@11.0.1)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="11.0.0"></a>

## 11.0.0

🗓
2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@10.2.2...@spectrum-css/tokens@11.0.0)

### ✨ Features

-     **tokens:**update to spectrum-tokens 12.4.0 ([#2031](https://github.com/adobe/spectrum-css/issues/2031))([955c8f1](https://github.com/adobe/spectrum-css/commit/955c8f1))

  \*feat(tokens)!: prefer lowercase, hyphenated font names in font stacks (#2007)([e978a3a](https://github.com/adobe/spectrum-css/commit/e978a3a)), closes[#2007](https://github.com/adobe/spectrum-css/issues/2007)

      	###
      	🛑 BREAKING CHANGES

      		*
      		updates the font-family stacks to remove the provided

  value from `@adobe/spectrum-tokens`, and instead use the "older" naming
  syntax that Spectrum CSS had used previously.

<a name="10.2.2"></a>

## 10.2.2

🗓
2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@10.2.1...@spectrum-css/tokens@10.2.2)

### 🐛 Bug fixes

\*revert prettier version bump ([#2004](https://github.com/adobe/spectrum-css/issues/2004))([29b179c](https://github.com/adobe/spectrum-css/commit/29b179c))

<a name="10.2.1"></a>

## 10.2.1

🗓
2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@10.2.0...@spectrum-css/tokens@10.2.1)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="10.2.0"></a>

## 10.2.0

🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@10.1.2...@spectrum-css/tokens@10.2.0)

### ✨ Features

- **tokens:**update to spectrum-tokens v12.12.0([1bf989f](https://github.com/adobe/spectrum-css/commit/1bf989f))

<a name="10.1.2"></a>

## 10.1.2

🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@10.1.1...@spectrum-css/tokens@10.1.2)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="10.1.1"></a>

## 10.1.1

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@10.1.0...@spectrum-css/tokens@10.1.1)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="10.1.0"></a>

## 10.1.0

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@10.0.0...@spectrum-css/tokens@10.1.0)

### ✨ Features

- **alertbanner:** add AlertBanner component ([#1798](https://github.com/adobe/spectrum-css/issues/1798)) ([1610e7a](https://github.com/adobe/spectrum-css/commit/1610e7a))

<a name="10.0.0"></a>

## 10.0.0

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@9.3.0...@spectrum-css/tokens@10.0.0)

- chore(colorhandle, colorloupe, tokens)!: remove custom tokens (#1826) ([c41af3a](https://github.com/adobe/spectrum-css/commit/c41af3a)), closes [#1826](https://github.com/adobe/spectrum-css/issues/1826)

### 🛑 BREAKING CHANGES

- removes several Color-component related tokens from `@spectrum-css/tokens`

- chore(colorhandle): remove custom tokens
- chore(colorhandle): remove use of custom tokens
- chore(colorloupe): update tokens for colorloupe
- chore(colorhandle, colorloupe): remove comments

<a name="9.3.0"></a>

## 9.3.0

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@9.2.0...@spectrum-css/tokens@9.3.0)

### ✨ Features

- **tokens:** use v12.8.0 of @adobe/spectrum-tokens ([#1843](https://github.com/adobe/spectrum-css/issues/1843)) ([19abf2f](https://github.com/adobe/spectrum-css/commit/19abf2f))

<a name="9.2.0"></a>

## 9.2.0

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@9.1.0...@spectrum-css/tokens@9.2.0)

### ✨ Features

- **tokens:** update to latest release ([c775889](https://github.com/adobe/spectrum-css/commit/c775889))

<a name="9.1.0"></a>

## 9.1.0

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@9.0.4...@spectrum-css/tokens@9.1.0)

### ✨ Features

- **tokens:** add custom drop zone rgb background color tokens ([#1834](https://github.com/adobe/spectrum-css/issues/1834)) ([b637006](https://github.com/adobe/spectrum-css/commit/b637006))

<a name="9.0.4"></a>

## 9.0.4

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@9.0.3...@spectrum-css/tokens@9.0.4)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="9.0.3"></a>

## 9.0.3

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@9.0.1...@spectrum-css/tokens@9.0.3)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="9.0.2"></a>

## 9.0.2

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@9.0.1...@spectrum-css/tokens@9.0.2)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="9.0.1"></a>

## 9.0.1

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@9.0.0...@spectrum-css/tokens@9.0.1)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="9.0.0"></a>

## 9.0.0

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@8.1.1...@spectrum-css/tokens@9.0.0)

- chore(tokens)!: use v12.6.0 release of @adobe/spectrum-tokens ([419aa49](https://github.com/adobe/spectrum-css/commit/419aa49))

### 🛑 BREAKING CHANGES

- updates to `@adobe/spectrum-tokens@12.6.0`.

- Includes additions and deprecations from `12.5.0`
- https://github.com/adobe/spectrum-tokens/releases/tag/%40adobe%2Fspectrum-tokens%4012.5.0
- Includes additions, updates, and deprecations from `12.6.0`
- https://github.com/adobe/spectrum-tokens/releases/tag/%40adobe%2Fspectrum-tokens%4012.6.0

<a name="8.1.1"></a>

## 8.1.1

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@8.1.0...@spectrum-css/tokens@8.1.1)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="8.1.0"></a>

## 8.1.0

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@8.0.4...@spectrum-css/tokens@8.1.0)

### ✨ Features

- **tokens:** bring in latest tokens (field, picker) ([#1776](https://github.com/adobe/spectrum-css/issues/1776)) ([19c7474](https://github.com/adobe/spectrum-css/commit/19c7474))

<a name="8.0.4"></a>

## 8.0.4

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@8.0.2...@spectrum-css/tokens@8.0.4)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="8.0.3"></a>

## 8.0.3

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@8.0.2...@spectrum-css/tokens@8.0.3)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="8.0.2"></a>

## 8.0.2

🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@8.0.0...@spectrum-css/tokens@8.0.2)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="8.0.1"></a>

## 8.0.1

🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@8.0.0...@spectrum-css/tokens@8.0.1)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="8.0.0"></a>

## 8.0.0

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@7.7.0...@spectrum-css/tokens@8.0.0)

- fix(tokens)!: rgb transform to split out rgb values from css attributes (#1590) ([b714db4](https://github.com/adobe/spectrum-css/commit/b714db4)), closes [#1590](https://github.com/adobe/spectrum-css/issues/1590)

### 🛑 BREAKING CHANGES

- transforms color tokens to split out their `rgb` values

Co-authored-by: castastrophe <castastrophe@users.noreply.github.com>

<a name="7.7.0"></a>

## 7.7.0

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@7.6.1...@spectrum-css/tokens@7.7.0)

### ✨ Features

- **tokens:** add open type conversion to style-dictionary ([7a423aa](https://github.com/adobe/spectrum-css/commit/7a423aa))

<a name="7.6.1"></a>

## 7.6.1

🗓 2023-03-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@7.6.0...@spectrum-css/tokens@7.6.1)

### 🐛 Bug fixes

- **tokens:** add 'px' to zero length value for combobox ([#1683](https://github.com/adobe/spectrum-css/issues/1683)) ([f17c67e](https://github.com/adobe/spectrum-css/commit/f17c67e))

<a name="7.6.0"></a>

## 7.6.0

🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@7.5.1...@spectrum-css/tokens@7.6.0)

### ✨ Features

- **tokens:** updates accordion, colorhandle, coachmark, menuitem tokens ([#1678](https://github.com/adobe/spectrum-css/issues/1678)) ([d480489](https://github.com/adobe/spectrum-css/commit/d480489))

<a name="7.5.1"></a>

## 7.5.1

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@7.5.0...@spectrum-css/tokens@7.5.1)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="7.5.0"></a>

## 7.5.0

🗓 2023-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@7.4.0...@spectrum-css/tokens@7.5.0)

### ✨ Features

- **tokens:** add medium, large tokens for rating-icon-spacing ([#1664](https://github.com/adobe/spectrum-css/issues/1664)) ([955b2b3](https://github.com/adobe/spectrum-css/commit/955b2b3))

<a name="7.4.0"></a>

## 7.4.0

🗓 2023-03-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@7.3.0...@spectrum-css/tokens@7.4.0)

### ✨ Features

- adds colorwheel custom express tokens ([#1647](https://github.com/adobe/spectrum-css/issues/1647)) ([5d8e671](https://github.com/adobe/spectrum-css/commit/5d8e671))

<a name="7.3.0"></a>

## 7.3.0

🗓 2023-02-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@7.2.0...@spectrum-css/tokens@7.3.0)

### ✨ Features

- **tokens:** adds menu scale and theme tokens ([#1641](https://github.com/adobe/spectrum-css/issues/1641)) ([f477c60](https://github.com/adobe/spectrum-css/commit/f477c60))

<a name="7.2.0"></a>

## 7.2.0

🗓 2023-02-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@7.1.0...@spectrum-css/tokens@7.2.0)

### ✨ Features

- **tokens:** adds colorwheel and colorhandle custom tokens ([#1634](https://github.com/adobe/spectrum-css/issues/1634)) ([e55c35d](https://github.com/adobe/spectrum-css/commit/e55c35d))

<a name="7.1.0"></a>

## 7.1.0

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@7.0.0...@spectrum-css/tokens@7.1.0)

### ✨ Features

- **tokens:** use full v12 release ([#1624](https://github.com/adobe/spectrum-css/issues/1624)) ([b921bb2](https://github.com/adobe/spectrum-css/commit/b921bb2))

<a name="7.0.0"></a>

## 7.0.0

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@6.3.0...@spectrum-css/tokens@7.0.0)

- chore(tokens)!: use latest dependency & fix build error (#1591) ([f2532e7](https://github.com/adobe/spectrum-css/commit/f2532e7)), closes [#1591](https://github.com/adobe/spectrum-css/issues/1591)

### 🛑 BREAKING CHANGES

- uses latest `@adobe/spectrum-tokens` dependency which includes token renames

<a name="6.3.0"></a>

## 6.3.0

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@6.2.2...@spectrum-css/tokens@6.3.0)

### ✨ Features

- **tokens:** adds platform size props for slider ([#1594](https://github.com/adobe/spectrum-css/issues/1594)) ([d889fdf](https://github.com/adobe/spectrum-css/commit/d889fdf))

<a name="6.2.2"></a>

## 6.2.2

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@6.2.0...@spectrum-css/tokens@6.2.2)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="6.2.1"></a>

## 6.2.1

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@6.2.0...@spectrum-css/tokens@6.2.1)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="6.2.0"></a>

## 6.2.0

🗓 2023-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@6.1.0...@spectrum-css/tokens@6.2.0)

### ✨ Features

- **tokens:** adds global animation vars ([#1570](https://github.com/adobe/spectrum-css/issues/1570)) ([0450c28](https://github.com/adobe/spectrum-css/commit/0450c28))

<a name="6.1.0"></a>

## 6.1.0

🗓 2022-12-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@6.0.0...@spectrum-css/tokens@6.1.0)

### ✨ Features

- **tokens:** use spectrum-tokens v12.0.0-beta.63 ([#1566](https://github.com/adobe/spectrum-css/issues/1566)) ([c91d20a](https://github.com/adobe/spectrum-css/commit/c91d20a))

<a name="6.0.0"></a>

## 6.0.0

🗓 2022-12-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@5.0.0...@spectrum-css/tokens@6.0.0)

- feat(tray)!: migrate to core tokens (#1535) ([442c5f6](https://github.com/adobe/spectrum-css/commit/442c5f6)), closes [#1535](https://github.com/adobe/spectrum-css/issues/1535)

### 🛑 BREAKING CHANGES

- migrates the Tray to core tokens

- removes the `375px` breakpoint, which was previously used to apply a `max-width` and border radius to the Tray, and instead this uses an orientation media query to apply these styles when viewport is in landscape orientation or when the width is greater than the height.

Co-authored-by: Patrick Fulton <pfulton@adobe.com>

<a name="5.0.0"></a>

## 5.0.0

🗓 2022-11-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@4.0.0...@spectrum-css/tokens@5.0.0)

- chore(tokens)!: use latest spectrum-tokens release (#1553) ([9ba68a3](https://github.com/adobe/spectrum-css/commit/9ba68a3)), closes [#1553](https://github.com/adobe/spectrum-css/issues/1553)

### 🛑 BREAKING CHANGES

- updates to the latest @adobe/spectrum-tokens release which includes many renamed and deleted tokens.

<a name="4.0.0"></a>

## 4.0.0

🗓 2022-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@3.0.0...@spectrum-css/tokens@4.0.0)

- feat(tokens)!: use latest beta release ([b60a8e7](https://github.com/adobe/spectrum-css/commit/b60a8e7))

### 🛑 BREAKING CHANGES

- removes and renames a number of tokens already being used by consuming packages

feat: adds 114 new tokens
refactor: renames 10 tokens
refactor: updates 14 existing token values
refactor: removes 13 tokens from the system

Full release notes can be found here: https://github.com/adobe/spectrum-tokens/releases/tag/v12.0.0-beta.53

<a name="3.0.0"></a>

## 3.0.0

🗓 2022-09-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@2.0.0...@spectrum-css/tokens@3.0.0)

- feat(switch)!: migrating switch to core-tokens (CSS-42, CSS-100) (#1496) ([aab46c3](https://github.com/adobe/spectrum-css/commit/aab46c3)), closes [#1496](https://github.com/adobe/spectrum-css/issues/1496)

### 🛑 BREAKING CHANGES

- migrates Switch to core tokens

Also, adds t-shirt sizes

<a name="2.0.0"></a>

## 2.0.0

🗓 2022-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@1.0.8...@spectrum-css/tokens@2.0.0)

- chore(tokens)!: use latest core tokens dependency ([0a54a0e](https://github.com/adobe/spectrum-css/commit/0a54a0e))

### 🛑 BREAKING CHANGES

- letter case in `CJK-` tokens is now lower case.

<a name="1.0.8"></a>

## 1.0.8

🗓 2022-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@1.0.7...@spectrum-css/tokens@1.0.8)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="1.0.7"></a>

## 1.0.7

🗓 2022-08-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@1.0.6...@spectrum-css/tokens@1.0.7)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="1.0.6"></a>

## 1.0.6

🗓 2022-08-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@1.0.5...@spectrum-css/tokens@1.0.6)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="1.0.5"></a>

## 1.0.5

🗓 2022-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@1.0.4...@spectrum-css/tokens@1.0.5)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="1.0.4"></a>

## 1.0.4

🗓 2022-08-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@1.0.3...@spectrum-css/tokens@1.0.4)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="1.0.3"></a>

## 1.0.3

🗓 2022-07-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@1.0.2...@spectrum-css/tokens@1.0.3)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="1.0.2"></a>

## 1.0.2

🗓 2022-07-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@1.0.1...@spectrum-css/tokens@1.0.2)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="1.0.1"></a>

## 1.0.1

🗓 2022-06-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@1.0.0...@spectrum-css/tokens@1.0.1)

### 🐛 Bug fixes

- **actionbutton:** update to latest tokens pkg ([ccd2d65](https://github.com/adobe/spectrum-css/commit/ccd2d65))

<a name="1.0.0"></a>

## 1.0.0

🗓 2022-06-16

### ✨ Features

- add core tokens ([f603e16](https://github.com/adobe/spectrum-css/commit/f603e16))
- add core tokens ([d0a07a1](https://github.com/adobe/spectrum-css/commit/d0a07a1))
- add support for switching on --system ([e5a66e4](https://github.com/adobe/spectrum-css/commit/e5a66e4))
- define --system for completeness, don't ignore usage in builder ([cae6252](https://github.com/adobe/spectrum-css/commit/cae6252))
- prefer separate custom-\* files for overrides ([86d7fb3](https://github.com/adobe/spectrum-css/commit/86d7fb3))
- split things out, combine things ([3a817bc](https://github.com/adobe/spectrum-css/commit/3a817bc))

### 🐛 Bug fixes

- tweaks after merging in component-builder-simple ([ec8345a](https://github.com/adobe/spectrum-css/commit/ec8345a))
