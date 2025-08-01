# Change log

## 12.1.0

### Minor Changes

📝 [`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee) Thanks [@castastrophe](https://github.com/castastrophe)!

## New feature

Minified and gzipped outputs available for all compiled CSS assets.

### Patch Changes

📝 [#3541](https://github.com/adobe/spectrum-css/pull/3541) [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d) Thanks [@castastrophe](https://github.com/castastrophe)!

Dependency alignment across the project.

- Updated dependencies [[`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee), [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d)]:
  - @spectrum-css/closebutton@7.0.0
  - @spectrum-css/divider@5.1.0
  - @spectrum-css/modal@7.1.0
  - @spectrum-css/underlay@6.1.0
  - @spectrum-css/tokens@16.0.1

## 12.0.1

### Patch Changes

📝 [#3534](https://github.com/adobe/spectrum-css/pull/3534) [`68e0057`](https://github.com/adobe/spectrum-css/commit/68e00577156cc32b21bfa768dbd2d35d73563b4c) Thanks [@castastrophe](https://github.com/castastrophe)!

Fixes a bug in the content of the `dist/index-theme.css` file.

Expected `index-theme.css` to include the component selectors with component-level custom properties mapped to the `--system` prefixed ones in order to allow a component to support various contexts.

Expected output example for the index-theme.css:

```css
.spectrum-ActionButton {
  --spectrum-actionbutton-background-color-default: var(--system-action-button-background-color-default);
  --spectrum-actionbutton-background-color-hover: var(--system-action-button-background-color-hover);
```

- Updated dependencies [[`68e0057`](https://github.com/adobe/spectrum-css/commit/68e00577156cc32b21bfa768dbd2d35d73563b4c)]:
  - @spectrum-css/closebutton@6.0.1
  - @spectrum-css/divider@5.0.1
  - @spectrum-css/modal@7.0.1
  - @spectrum-css/underlay@6.0.1

## 12.0.0

### Major Changes

📝 [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6) Thanks [@pfulton](https://github.com/pfulton)!

## Breaking change

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
  - @spectrum-css/closebutton@6.0.0
  - @spectrum-css/underlay@6.0.0
  - @spectrum-css/divider@5.0.0
  - @spectrum-css/modal@7.0.0

## 11.0.1

### Patch Changes

📝 [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)!

- Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/closebutton@5.4.1
  - @spectrum-css/underlay@5.0.1
  - @spectrum-css/divider@4.0.1
  - @spectrum-css/modal@6.0.1

## 11.0.0

### Major Changes

📝 [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove empty theme references to reduce complexity for components that don't need to define any mappings. This involves removing the source `themes` directories with the empty `spectrum.css` and `express.com` files as well as removing the following empty or unnecessary exports:
  - `index-base.css`
  - `index-theme.css`
  - `themes/spectrum.css`
  - `themes/express.css`

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/underlay@5.0.0
  - @spectrum-css/modal@6.0.0
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/divider@4.0.0
  - @spectrum-css/closebutton@5.4.0

## 10.2.0

### Minor Changes

📝 [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/closebutton@5.3.0
  - @spectrum-css/underlay@4.2.0
  - @spectrum-css/divider@3.2.0
  - @spectrum-css/modal@5.2.0

## 10.1.5

### Patch Changes

📝 [#3322](https://github.com/adobe/spectrum-css/pull/3322) [`ffc6895`](https://github.com/adobe/spectrum-css/commit/ffc689598122353912b604c7e1a4c121d20a9191) Thanks [@marissahuysentruyt](https://github.com/marissahuysentruyt)!

- Dialog t-shirt sizes

Adds support for t-shirt sizing class names to dialog CSS. `@deprecated` comments were added to communicate that the old class names (`--small`, `--medium`, and `--large`) will be removed in S2.

| old class name          | new class name                                         |
| ----------------------- | ------------------------------------------------------ |
| spectrum-Dialog--small  | spectrum-Dialog--sizeS                                 |
| spectrum-Dialog--medium | spectrum-Dialog (the default, so no size is necessary) |
| spectrum-Dialog--large  | spectrum-Dialog--sizeL                                 |

## 10.1.4

### Patch Changes

📝 [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)!

- Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/closebutton@5.1.3
  - @spectrum-css/underlay@4.1.3
  - @spectrum-css/divider@3.1.3
  - @spectrum-css/modal@5.1.3

## 10.1.3

### Patch Changes

📝 [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)!

- Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/closebutton@5.1.2
  - @spectrum-css/underlay@4.1.2
  - @spectrum-css/divider@3.1.2
  - @spectrum-css/modal@5.1.2

## 10.1.2

### Patch Changes

📝 [#2842](https://github.com/adobe/spectrum-css/pull/2842) [`4cd3a15`](https://github.com/adobe/spectrum-css/commit/4cd3a15db914b667f5d606388051ecd2cd318134) Thanks [@castastrophe](https://github.com/castastrophe)!

- Updated CSSNano plugin to toggle reduceIdent off to prevent invalid abstractions from breaking named grid templates.

## 10.1.1

### Patch Changes

📝 [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)!

- Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/closebutton@5.1.1
  - @spectrum-css/underlay@4.1.1
  - @spectrum-css/divider@3.1.1
  - @spectrum-css/modal@5.1.1

## 10.1.0

### Minor Changes

📝 [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/closebutton@>=5
  - @spectrum-css/divider@>=3
  - @spectrum-css/modal@>=5
  - @spectrum-css/tokens@>=14
  - @spectrum-css/underlay@>=4

## 10.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@9.2.4...@spectrum-css/dialog@10.0.0)

### ✨ Features

- use storybook v8 ([#2604](https://github.com/adobe/spectrum-css/issues/2604))([166ab23](https://github.com/adobe/spectrum-css/commit/166ab23))
- feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGE

- Removes component-builder & component-builder-simple for script leveraging postcss
- Imports added to index.css and themes/express.css

## 9.2.4

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@9.2.3...@spectrum-css/dialog@9.2.4)

**Note:** Version bump only for package @spectrum-css/dialog

## 9.2.3

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@9.2.2...@spectrum-css/dialog@9.2.3)

**Note:** Version bump only for package @spectrum-css/dialog

## 9.2.2

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@9.2.1...@spectrum-css/dialog@9.2.2)

**Note:** Version bump only for package @spectrum-css/dialog

## 9.2.1

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-css/dialog

## 9.2.0

🗓 2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@9.1.0...@spectrum-css/dialog@9.2.0)

### ✨ Features

- **overlay,commons:**deprecate overlay; migrate references to commons ([#2429](https://github.com/adobe/spectrum-css/issues/2429))([7eecd96](https://github.com/adobe/spectrum-css/commit/7eecd96))

## 9.1.0

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@9.0.5...@spectrum-css/dialog@9.1.0)

### ✨ Features

- remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

## 9.0.5

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@9.0.4...@spectrum-css/dialog@9.0.5)

**Note:** Version bump only for package @spectrum-css/dialog

## 9.0.4

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@9.0.3...@spectrum-css/dialog@9.0.4)

**Note:** Version bump only for package @spectrum-css/dialog

## 9.0.3

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@9.0.1...@spectrum-css/dialog@9.0.3)

**Note:** Version bump only for package @spectrum-css/dialog

## 9.0.2

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@9.0.1...@spectrum-css/dialog@9.0.2)

**Note:** Version bump only for package @spectrum-css/dialog

## 9.0.1

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@9.0.0...@spectrum-css/dialog@9.0.1)

**Note:** Version bump only for package @spectrum-css/dialog

## 9.0.0

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@8.0.8...@spectrum-css/dialog@9.0.0)

- feat(dialog)!: migrate to spectrum-tokens (#2168)([0811386](https://github.com/adobe/spectrum-css/commit/0811386)), closes[#2168](https://github.com/adobe/spectrum-css/issues/2168)

### 🛑 BREAKING CHANGE

- migrates to use `@adobe/spectrum-tokens`

Additionally:

- feat(dialog): migrate to use spectrum-tokens BREAKING CHANGE: migrate dialog to use spectrum tokens
- docs(dialog): regenerate mods file

## 8.0.8

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@8.0.7...@spectrum-css/dialog@8.0.8)

**Note:** Version bump only for package @spectrum-css/dialog

## 8.0.7

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@8.0.6...@spectrum-css/dialog@8.0.7)

**Note:** Version bump only for package @spectrum-css/dialog

## 8.0.6

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@8.0.5...@spectrum-css/dialog@8.0.6)

**Note:** Version bump only for package @spectrum-css/dialog

## 8.0.5

🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@8.0.4...@spectrum-css/dialog@8.0.5)

**Note:** Version bump only for package @spectrum-css/dialog

## 8.0.4

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@8.0.3...@spectrum-css/dialog@8.0.4)

**Note:** Version bump only for package @spectrum-css/dialog

## 8.0.3

🗓 2023-09-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@8.0.2...@spectrum-css/dialog@8.0.3)

**Note:** Version bump only for package @spectrum-css/dialog

## 8.0.2

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@8.0.1...@spectrum-css/dialog@8.0.2)

**Note:** Version bump only for package @spectrum-css/dialog

## 8.0.1

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@8.0.0...@spectrum-css/dialog@8.0.1)

**Note:** Version bump only for package @spectrum-css/dialog

## 8.0.0

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@7.0.1...@spectrum-css/dialog@8.0.0)

### 🔙 Reverts

- gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)
- feat(underlay)!: migrate to use spectrum-tokens (#2096)([2e0651a](https://github.com/adobe/spectrum-css/commit/2e0651a)), closes[#2096](https://github.com/adobe/spectrum-css/issues/2096)

### 🛑 BREAKING CHANGE

- migrates Underlay to use `@adobe/spectrum-tokens`

Additionally:

- chore(underlay): add mods
- feat(underlay): add to storybook
- feat(dialog): use underlay in story
- refactor(dialog): story and template
- refactor(underlay): use custom animation tokens
- refactor(dialog): remove unneeded handle
- refactor(underlay): use new token for underlay color
- chore(underlay): remove skin import

## 7.0.1

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@7.0.0...@spectrum-css/dialog@7.0.1)

**Note:** Version bump only for package @spectrum-css/dialog

## 7.0.0

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.67...@spectrum-css/dialog@7.0.0)

- feat(dialog)!: major layout updates([526d505](https://github.com/adobe/spectrum-css/commit/526d505))

### 🛑 BREAKING CHANGE

- Alert variants of Dialog have been removed and placed inside of Alert Dialog

## 6.0.68

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.67...@spectrum-css/dialog@6.0.68)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.67

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.66...@spectrum-css/dialog@6.0.67)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.66

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.65...@spectrum-css/dialog@6.0.66)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.65

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.64...@spectrum-css/dialog@6.0.65)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.64

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.63...@spectrum-css/dialog@6.0.64)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.63

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.62...@spectrum-css/dialog@6.0.63)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.62

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.61...@spectrum-css/dialog@6.0.62)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.61

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.60...@spectrum-css/dialog@6.0.61)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.60

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.59...@spectrum-css/dialog@6.0.60)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.59

🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.58...@spectrum-css/dialog@6.0.59)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.58

🗓 2023-06-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.57...@spectrum-css/dialog@6.0.58)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.57

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.56...@spectrum-css/dialog@6.0.57)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.56

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.55...@spectrum-css/dialog@6.0.56)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.55

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.54...@spectrum-css/dialog@6.0.55)

### 🐛 Bug fixes

- restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

## 6.0.54

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.53...@spectrum-css/dialog@6.0.54)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.53

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.52...@spectrum-css/dialog@6.0.53)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.52

🗓 2023-05-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.51...@spectrum-css/dialog@6.0.52)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.51

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.50...@spectrum-css/dialog@6.0.51)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.50

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.49...@spectrum-css/dialog@6.0.50)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.49

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.48...@spectrum-css/dialog@6.0.49)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.48

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.47...@spectrum-css/dialog@6.0.48)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.47

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.46...@spectrum-css/dialog@6.0.47)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.46

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.45...@spectrum-css/dialog@6.0.46)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.45

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.44...@spectrum-css/dialog@6.0.45)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.44

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.43...@spectrum-css/dialog@6.0.44)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.43

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.42...@spectrum-css/dialog@6.0.43)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.42

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.41...@spectrum-css/dialog@6.0.42)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.41

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.40...@spectrum-css/dialog@6.0.41)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.40

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.39...@spectrum-css/dialog@6.0.40)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.39

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.37...@spectrum-css/dialog@6.0.39)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.38

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.37...@spectrum-css/dialog@6.0.38)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.37

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.36...@spectrum-css/dialog@6.0.37)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.36

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.35...@spectrum-css/dialog@6.0.36)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.35

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.34...@spectrum-css/dialog@6.0.35)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.34

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.33...@spectrum-css/dialog@6.0.34)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.33

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.31...@spectrum-css/dialog@6.0.33)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.32

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.31...@spectrum-css/dialog@6.0.32)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.31

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.30...@spectrum-css/dialog@6.0.31)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.30

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.29...@spectrum-css/dialog@6.0.30)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.29

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.28...@spectrum-css/dialog@6.0.29)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.28

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.27...@spectrum-css/dialog@6.0.28)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.27

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.26...@spectrum-css/dialog@6.0.27)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.26

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.25...@spectrum-css/dialog@6.0.26)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.25

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.24...@spectrum-css/dialog@6.0.25)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.24

🗓 2023-01-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.23...@spectrum-css/dialog@6.0.24)

### 🐛 Bug fixes

- **dialog:** adjust padding and margins to avoid focus indicator clip ([#1593](https://github.com/adobe/spectrum-css/issues/1593)) ([30b854c](https://github.com/adobe/spectrum-css/commit/30b854c))

## 6.0.23

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.22...@spectrum-css/dialog@6.0.23)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.22

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.21...@spectrum-css/dialog@6.0.22)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.21

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.19...@spectrum-css/dialog@6.0.21)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.20

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.19...@spectrum-css/dialog@6.0.20)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.19

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.18...@spectrum-css/dialog@6.0.19)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.18

🗓 2022-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.16...@spectrum-css/dialog@6.0.18)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.17

🗓 2022-12-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.16...@spectrum-css/dialog@6.0.17)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.16

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.15...@spectrum-css/dialog@6.0.16)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.15

🗓 2022-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.14...@spectrum-css/dialog@6.0.15)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.14

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.12...@spectrum-css/dialog@6.0.14)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.13

🗓 2022-06-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.12...@spectrum-css/dialog@6.0.13)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.12

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.11...@spectrum-css/dialog@6.0.12)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.11

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.10...@spectrum-css/dialog@6.0.11)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.10

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.9...@spectrum-css/dialog@6.0.10)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.9

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.8...@spectrum-css/dialog@6.0.9)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.8

🗓 2022-03-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.7...@spectrum-css/dialog@6.0.8)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.7

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.6...@spectrum-css/dialog@6.0.7)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.6

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.5...@spectrum-css/dialog@6.0.6)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.5

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.4...@spectrum-css/dialog@6.0.5)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.4

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.3...@spectrum-css/dialog@6.0.4)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.3

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.2...@spectrum-css/dialog@6.0.3)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.2

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.1...@spectrum-css/dialog@6.0.2)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.1

🗓 2022-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@6.0.0...@spectrum-css/dialog@6.0.1)

**Note:** Version bump only for package @spectrum-css/dialog

## 6.0.0

🗓 2022-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@5.0.1...@spectrum-css/dialog@6.0.0)

### 🐛 Bug fixes

- using close button in dialog. ([6788469](https://github.com/adobe/spectrum-css/commit/6788469))

### 🛑 BREAKING CHANGE

- replace action button with a close button for dialog

## 5.0.1

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@5.0.0...@spectrum-css/dialog@5.0.1)

**Note:** Version bump only for package @spectrum-css/dialog

## 5.0.0

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@3.0.12...@spectrum-css/dialog@5.0.0)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

### 📚 Documentation

- use new Button markup ([886b2cb](https://github.com/adobe/spectrum-css/commit/886b2cb))

### 🛑 BREAKING CHANGE

- Button markup has changed

## 4.0.0

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@3.0.12...@spectrum-css/dialog@4.0.0)

### 📚 Documentation

- use new Button markup ([629bf05](https://github.com/adobe/spectrum-css/commit/629bf05))

### 🛑 BREAKING CHANGE

- Button markup has changed

## 3.0.12

🗓 2021-12-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@3.0.11...@spectrum-css/dialog@3.0.12)

**Note:** Version bump only for package @spectrum-css/dialog

## 3.0.11

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@3.0.10...@spectrum-css/dialog@3.0.11)

**Note:** Version bump only for package @spectrum-css/dialog

## 3.0.10

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@3.0.9...@spectrum-css/dialog@3.0.10)

### 🐛 Bug fixes

- add missing classes to Dialog's ActionButton, fixes [#1314](https://github.com/adobe/spectrum-css/issues/1314) ([96950fe](https://github.com/adobe/spectrum-css/commit/96950fe))

## 3.0.9

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@3.0.8...@spectrum-css/dialog@3.0.9)

**Note:** Version bump only for package @spectrum-css/dialog

## 3.0.8

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@3.0.7...@spectrum-css/dialog@3.0.8)

**Note:** Version bump only for package @spectrum-css/dialog

## 3.0.7

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@3.0.5...@spectrum-css/dialog@3.0.7)

### 🐛 Bug fixes

- **dialog:** apply the same color to footer content as content content ([4eabc72](https://github.com/adobe/spectrum-css/commit/4eabc72))
- remove logical property usage from media queries ([cdeb051](https://github.com/adobe/spectrum-css/commit/cdeb051))

## 3.0.6

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@3.0.5...@spectrum-css/dialog@3.0.6)

### 🐛 Bug fixes

- **dialog:** apply the same color to footer content as content content ([4eabc72](https://github.com/adobe/spectrum-css/commit/4eabc72))

## 3.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@3.0.2...@spectrum-css/dialog@3.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@3.0.1...@spectrum-css/dialog@3.0.2)

**Note:** Version bump only for package @spectrum-css/dialog

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@3.0.0...@spectrum-css/dialog@3.0.1)

**Note:** Version bump only for package @spectrum-css/dialog

## 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@2.0.5...@spectrum-css/dialog@3.0.0)

### ✨ Features

- implement t-shirt sizing for Divider, closes [#972](https://github.com/adobe/spectrum-css/issues/972) ([bb10aa9](https://github.com/adobe/spectrum-css/commit/bb10aa9))

### 🐛 Bug fixes

- add a border to dialogs in high contrast mode ([da602cd](https://github.com/adobe/spectrum-css/commit/da602cd))
- correct dependencies for FieldButton -> ActionButton change ([29d69f8](https://github.com/adobe/spectrum-css/commit/29d69f8))
- correct Dialog content line-height ([e430cfb](https://github.com/adobe/spectrum-css/commit/e430cfb))
- undo Dialog line-height change, it was intentional ([230630b](https://github.com/adobe/spectrum-css/commit/230630b))
- update main, resolved conflicts ([d7880a2](https://github.com/adobe/spectrum-css/commit/d7880a2))
- use new Button markup ([502a1b0](https://github.com/adobe/spectrum-css/commit/502a1b0))

### 🛑 BREAKING CHANGE

- `.spectrum-Divider--size*` is now required
- `.spectrum-Divider--small` is now `.spectrum-Divider--sizeS`, `.spectrum-Divider--medium` is now `.spectrum-Divider--sizeM`, `.spectrum-Divider--large` is now `.spectrum-Divider--sizeL`
- markup has changed and now requires new Button markup (`.spectrum-Button--sizeM`)

## 2.0.5

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@2.0.4...@spectrum-css/dialog@2.0.5)

**Note:** Version bump only for package @spectrum-css/dialog

## 2.0.4

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@2.0.3...@spectrum-css/dialog@2.0.4)

### 🐛 Bug fixes

- correct error Dialog icon position and wrapping fixes [#492](https://github.com/adobe/spectrum-css/issues/492), fixes [#464](https://github.com/adobe/spectrum-css/issues/464) ([#520](https://github.com/adobe/spectrum-css/issues/520)) ([1d56fd9](https://github.com/adobe/spectrum-css/commit/1d56fd9))

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@2.0.2...@spectrum-css/dialog@2.0.3)

**Note:** Version bump only for package @spectrum-css/dialog

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@2.0.1...@spectrum-css/dialog@2.0.2)

**Note:** Version bump only for package @spectrum-css/dialog

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dialog@2.0.0...@spectrum-css/dialog@2.0.1)

### 🐛 Bug fixes

- correct positioning of children of wrapped Dialogs, closes [#389](https://github.com/adobe/spectrum-css/issues/389) ([#393](https://github.com/adobe/spectrum-css/issues/393)) ([05a1161](https://github.com/adobe/spectrum-css/commit/05a1161))

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)

### 🐛 Bug fixes

- use proper DNA tokens for Dialog animations ([b066ed3](https://github.com/adobe/spectrum-css/commit/b066ed3))
