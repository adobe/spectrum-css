# Change log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 7.1.0

### Minor Changes

- [`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee) Thanks [@castastrophe](https://github.com/castastrophe)!

## New feature

Minified and gzipped outputs available for all compiled CSS assets.

### Patch Changes

- [#3541](https://github.com/adobe/spectrum-css/pull/3541) [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d) Thanks [@castastrophe](https://github.com/castastrophe)!

Dependency alignment across the project.

- Updated dependencies [[`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee), [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d)]:
  - @spectrum-css/tag@11.0.0
  - @spectrum-css/tokens@16.0.1

## 7.0.1

### Patch Changes

- [#3534](https://github.com/adobe/spectrum-css/pull/3534) [`68e0057`](https://github.com/adobe/spectrum-css/commit/68e00577156cc32b21bfa768dbd2d35d73563b4c) Thanks [@castastrophe](https://github.com/castastrophe)! - Fixes a bug in the content of the `dist/index-theme.css` file.

  Expected `index-theme.css` to include the component selectors with component-level custom properties mapped to the `--system` prefixed ones in order to allow a component to support various contexts.

  Expected output example for the index-theme.css:

  ```
  .spectrum-ActionButton {
   --spectrum-actionbutton-background-color-default: var(--system-action-button-background-color-default);
   --spectrum-actionbutton-background-color-hover: var(--system-action-button-background-color-hover);
  ```

- Updated dependencies [[`68e0057`](https://github.com/adobe/spectrum-css/commit/68e00577156cc32b21bfa768dbd2d35d73563b4c)]:
  - @spectrum-css/tag@10.0.1

## 7.0.0

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

- Updated dependencies [[`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6), [`3d08cea`](https://github.com/adobe/spectrum-css/commit/3d08cea0f590c8c2de7252677a6b81b8cc206b9a), [`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6)]:
  - @spectrum-css/tokens@16.0.0
  - @spectrum-css/tag@10.0.0

## 6.0.1

### Patch Changes

- [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)! - Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/tag@9.3.1

## 6.0.0

### Major Changes

- [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)! - Remove empty theme references to reduce complexity for components that don't need to define any mappings. This involves removing the source `themes` directories with the empty `spectrum.css` and `express.com` files as well as removing the following empty or unnecessary exports:

  - `index-base.css`
  - `index-theme.css`
  - `themes/spectrum.css`
  - `themes/express.css`

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/tag@9.3.0

## 5.2.0

### Minor Changes

- [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)! - Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/tag@9.2.0

## 5.1.3

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)! - Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/tag@9.1.3

## 5.1.2

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)! - Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/tag@9.1.2

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

<a name="5.0.0"></a>

## 5.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.1.5...@spectrum-css/taggroup@5.0.0)

- feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGES

- Removes component-builder & component-builder-simple for script leveraging postcss
- Imports added to index.css and themes/express.css

<a name="4.1.5"></a>

## 4.1.5

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.1.4...@spectrum-css/taggroup@4.1.5)
**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.1.4"></a>

## 4.1.4

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.1.3...@spectrum-css/taggroup@4.1.4)

🗓 20
<a name="4.1.3"></a>

## 4.1.3

🗓 2024-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.1.2...@spectrum-css/taggroup@4.1.3)

**Note:** Version bump only for package @spectrum-css/taggroup
<a name="4.1.2"></a>

## 4.1.2

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.1.1...@spectrum-css/taggroup@4.1.2)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.1.1"></a>

## 4.1.1

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.1.0"></a>
🗓 20 4.1.0

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.14...@spectrum-css/taggroup@4.1.0)

### ✨ Features

- remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="4.0.14"></a>

## 4.0.14

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.13...@spectrum-css/taggroup@4.0.14)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.13"></a>

## 4.0.13

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.12...@spectrum-css/taggroup@4.0.13)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.12"></a>

## 4.0.12

🗓 20
**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.11"></a>

## 4.0.11

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.10...@spectrum-css/taggroup@4.0.11)
**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.10"></a>

## 4.0.10

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.9...@spectrum-css/taggroup@4.0.10)

🗓 20
<a name="4.0.9"></a>

## 4.0.9

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.8...@spectrum-css/taggroup@4.0.9)

**Note:** Version bump only for package @spectrum-css/taggroup
<a name="4.0.8"></a>

## 4.0.8

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.7...@spectrum-css/taggroup@4.0.8)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.7"></a>

## 4.0.7

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.6...@spectrum-css/taggroup@4.0.7)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.6"></a>
🗓 20 4.0.6

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.5...@spectrum-css/taggroup@4.0.6)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.5"></a>

🗓 20
🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.4...@spectrum-css/taggroup@4.0.5)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.4"></a>

## 4.0.4

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.3...@spectrum-css/taggroup@4.0.4)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.3"></a>

## 4.0.3

🗓 20
**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.2"></a>

## 4.0.2

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.1...@spectrum-css/taggroup@4.0.2)
**Note:** Version bump only for package @spectrum-css/taggroup

<a name="4.0.1"></a>

## 4.0.1

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@4.0.0...@spectrum-css/taggroup@4.0.1)

🗓 20
<a name="4.0.0"></a>

## 4.0.0

🗓 2023-08-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.64...@spectrum-css/taggroup@4.0.0)

### 🔙 Reverts

🗓 20gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

- feat(taggroup)!: migrate to spectrum-tokens([531e067](https://github.com/adobe/spectrum-css/commit/531e067))

### 🛑 BREAKING CHANGES

    		*
    		migrates TagGroup to use `@adobe/spectrum-tokens`

🗓 20date build related files to migrate to use of core tokens.

Use new global tokens for margin, and simplify usage. Adds mod prefixed
custom properties and improves docs with mod section and description
text pulled from the tag guidelines.

Updates example markup and migration guide.

🗓 20
Tag group flex items were not previously wrapping and would overflow and
cut off at smaller screen sizes. This now follows the tag guidelines to
wrap items to the next line. And adds a story that shows wrapping.

CSS-500

<a name="3.3.64"></a>

## 3.3.64

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.63...@spectrum-css/taggroup@3.3.64)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.63"></a>

## 3.3.63

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.61...@spectrum-css/taggroup@3.3.63)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.62"></a>

## 3.3.62

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.61...@spectrum-css/taggroup@3.3.62)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.61"></a>

🗓 20
🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.60...@spectrum-css/taggroup@3.3.61)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.60"></a>

## 3.3.60

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.59...@spectrum-css/taggroup@3.3.60)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.59"></a>

## 3.3.59

🗓 20
**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.58"></a>

## 3.3.58

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.57...@spectrum-css/taggroup@3.3.58)
**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.57"></a>

## 3.3.57

🗓 2023-07-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.56...@spectrum-css/taggroup@3.3.57)

🗓 20
<a name="3.3.56"></a>

## 3.3.56

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.55...@spectrum-css/taggroup@3.3.56)

**Note:** Version bump only for package @spectrum-css/taggroup
<a name="3.3.55"></a>

## 3.3.55

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.54...@spectrum-css/taggroup@3.3.55)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.54"></a>

## 3.3.54

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.53...@spectrum-css/taggroup@3.3.54)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.53"></a>
🗓 20 3.3.53

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.52...@spectrum-css/taggroup@3.3.53)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.52"></a>

🗓 20
🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.51...@spectrum-css/taggroup@3.3.52)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.51"></a>

## 3.3.51

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.50...@spectrum-css/taggroup@3.3.51)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.50"></a>

## 3.3.50

🗓 20
**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.49"></a>

## 3.3.49

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.48...@spectrum-css/taggroup@3.3.49)
🗓 20# 🐛 Bug fixes

- restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="3.3.48"></a>

## 3.3.48

🗓 20
**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.47"></a>

## 3.3.47

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.46...@spectrum-css/taggroup@3.3.47)
**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.46"></a>

## 3.3.46

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.45...@spectrum-css/taggroup@3.3.46)

🗓 20
<a name="3.3.45"></a>

## 3.3.45

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.44...@spectrum-css/taggroup@3.3.45)

**Note:** Version bump only for package @spectrum-css/taggroup
<a name="3.3.44"></a>

## 3.3.44

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/taggroup@3.3.43...@spectrum-css/taggroup@3.3.44)

**Note:** Version bump only for package @spectrum-css/taggroup

<a name="3.3.43"></a>

🗓 20
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

### Migration guide

- **Div wrapper is required for avatar**

  ```
  <div class="spectrum-Avatar spectrum-Avatar--size50">
  		<img class="spectrum-Avatar-image" src="img/example-ava.jpg" alt="Avatar">
  </div>
  ```

- **Icon size changed to small**

  If you use an icon `spectrum-Tag-itemIcon` along with a tag, please replace `.spectrum-Icon--sizeXS` with `.spectrum-Icon--sizeS`.
