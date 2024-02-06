# Change Log

## 15.0.0

### Major Changes

- [#3488](https://github.com/adobe/spectrum-css/pull/3488) [`40c1954`](https://github.com/adobe/spectrum-css/commit/40c1954048f735a07f9edfccf3a568d38164806a) Thanks [@castastrophe](https://github.com/castastrophe)! - ### Breaking change

  This update removes the compiled `components` directory from the token output. Instead, customers are asked to source the theming data from the component's `theme/(express,spectrum,spectrum-two).css` and `index-theme.css`. For example:

  ```
  import "@spectrum-css/actionbutton/dist/index-base.css";
  import "@spectrum-css/actionbutton/dist/index-theme.css";
  import "@spectrum-css/actionbutton/dist/themes/express.css";
  ```

  In addition, the `custom-*-vars.css` files previously shipped in the `spectrum` and `express` folders will no longer be shipped separately. This data already exists in the `*-vars.css` file with a matching name. For example, `spectrum/custom-large-vars.css` already exists within `spectrum/large-vars.css`, concatenated with the token-generated output.

  ### Minor

  Whitespace has been cleaned up in the exported content for readability.

## 14.6.0

### Minor Changes

- [#3266](https://github.com/adobe/spectrum-css/pull/3266) [`4b818e1`](https://github.com/adobe/spectrum-css/commit/4b818e1062202e404de1350938ce2a19146aa0b0) Thanks [@5t3ph](https://github.com/5t3ph)! - For Coach indicator, marks "light" and "dark" variants for deprecation going into S2, and adds "static white" per direction from design.

## 14.5.0

### Minor Changes

- [#3253](https://github.com/adobe/spectrum-css/pull/3253) [`47f23a7`](https://github.com/adobe/spectrum-css/commit/47f23a762a5c84ffe3c82e7e1b0c4c9d5dc60f86) Thanks [@castastrophe](https://github.com/castastrophe)! - Add component-level token overrides from card, contextualhelp, swatch, and typography to ensure valid theme toggling.

  Light/dark/darkest custom overrides added: `--spectrum-card-selected-background-color-rgb`, `--spectrum-swatch-border-color`, `--spectrum-swatch-border-color-light`
  Medium/large custom overrides added: `--spectrum-contextual-help-content-spacing`
  Global custom overrides added: `--spectrum-font-family-ar`, `--spectrum-font-family-he`, `--spectrum-font-family`, `--spectrum-font-style`, `--spectrum-font-size`

## 14.4.0

### Minor Changes

- [#3060](https://github.com/adobe/spectrum-css/pull/3060) [`7d41874`](https://github.com/adobe/spectrum-css/commit/7d418746362e7fe35f47e67e30682d7bf87ecfc7) Thanks [@castastrophe](https://github.com/castastrophe)! - Update build steps for the token rollup to generate the component theming assets instead of relying on component build steps to produce them.

## 14.3.2

### Patch Changes

- [#3137](https://github.com/adobe/spectrum-css/pull/3137) [`b16a159`](https://github.com/adobe/spectrum-css/commit/b16a159bd8b1456b384f13f51ab0cdb318a692e8) Thanks [@castastrophe](https://github.com/castastrophe)! - `--spectrum-well-border-color` was mapped to the `-rgb` postfixed value which resolves to a raw rgb number but not a valid color.

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

* feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

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
