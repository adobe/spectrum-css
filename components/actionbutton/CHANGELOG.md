# Change log

## 7.1.4

### Patch Changes

📝 [#4088](https://github.com/adobe/spectrum-css/pull/4088) [`24d75bf`](https://github.com/adobe/spectrum-css/commit/24d75bfe4d8e627f9d8e019ae379bdd4787712dd) Thanks [@castastrophe](https://github.com/castastrophe)!

Minor linting fix of replacing `rgba` to the `rgb` shorthand syntax.

## 7.1.3

### Patch Changes

- [#3644](https://github.com/adobe/spectrum-css/pull/3644) [`5adef1d`](https://github.com/adobe/spectrum-css/commit/5adef1d15d07516dc9c1aac7bbcf9ac5bdeb9e97) Thanks [@marissahuysentruyt](https://github.com/marissahuysentruyt)! - Fix support for `--mod-actionbutton-border-radius` to make sure it is surfaced to consumers, and properly overwrites the default border radius setting.

## 7.1.2

### Patch Changes

📝 [#3606](https://github.com/adobe/spectrum-css/pull/3606) [`3ec3b46`](https://github.com/adobe/spectrum-css/commit/3ec3b468313cbeb19298b35a2bd80860b83f4734) Thanks [@jawinn](https://github.com/jawinn)!

This updates the colors used in action button for the spectrum two theme, so they are closer aligned with the spectrum 2 spec, per the request in SWC-597. This removes the border by making it transparent and updates the background color tokens that are used.

This also includes a forced-colors/high contrast mode fix for the selected + disabled state. This now shows the disabled colors.

## 7.1.1

### Patch Changes

📝 [#3540](https://github.com/adobe/spectrum-css/pull/3540) [`a8bb0b8`](https://github.com/adobe/spectrum-css/commit/a8bb0b89a5fe1cc9d09edf6a1d2249dde930757a) Thanks [@marissahuysentruyt](https://github.com/marissahuysentruyt)!

- S2 Foundations fixes
  - Adjusts corner rounding for S2 foundations to follow S2 action button corner rounding, particularly to help give additional space to the help/corner triangle icon:
    - corner-radius-medium-size-extra-small
    - corner-radius-medium-size-small
    - corner-radius-medium-size-medium
    - corner-radius-medium-size-large
    - corner-radius-medium-size-extra-large
  - Corrects the `disabled-background-color` and `disabled-static-*-background-color` tokens for the disabled and selected+disabled states

## 7.1.0

### Minor Changes

📝 [`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee) Thanks [@castastrophe](https://github.com/castastrophe)!

## New feature

Minified and gzipped outputs available for all compiled CSS assets.

### Patch Changes

📝 [#3541](https://github.com/adobe/spectrum-css/pull/3541) [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d) Thanks [@castastrophe](https://github.com/castastrophe)!

Dependency alignment across the project.

- Updated dependencies [[`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee), [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d)]:
  - @spectrum-css/icon@9.1.0
  - @spectrum-css/tokens@16.0.1

## 7.0.1

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
  - @spectrum-css/icon@9.0.1

## 7.0.0

### Major Changes

📝 [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6) Thanks [@pfulton](https://github.com/pfulton)!

### 🛑 Breaking change

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
  - @spectrum-css/icon@9.0.0

## 6.3.1

### Patch Changes

📝 [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)!

- Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/icon@8.0.1

## 6.3.0

### Minor Changes

📝 [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)!

- Simplify how the `--system` properties are mapped. By updating the logic in the `postcss-add-theming-layer`, we are now shipping cleaner, more readable `--system` property names. These custom properties are documented as _NOT_ a part of the component API so although these result in a change to the custom property names, it does not impact the properties that are in the API and so do not constitute a breaking change. Expect to see no change to how component theming works or any visual regressions as a result of this change.

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/icon@8.0.0

## 6.2.0

### Minor Changes

📝 [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/icon@7.2.0

## 6.1.4

### Patch Changes

📝 [#3256](https://github.com/adobe/spectrum-css/pull/3256) [`b84b93e`](https://github.com/adobe/spectrum-css/commit/b84b93e64157c7a8288a3ed19f1a637ee609251c) Thanks [@marissahuysentruyt](https://github.com/marissahuysentruyt)!

- Adds line-height on `.spectrum-ActionButton-label` in order to accommodate text with diacritics that may be cut off vertically.

## 6.1.3

### Patch Changes

📝 [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)!

- Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/icon@7.1.4

## 6.1.2

### Patch Changes

📝 [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)!

- Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/icon@7.1.3

## 6.1.1

### Patch Changes

📝 [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)!

- Leverage local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/icon@7.1.1

## 6.1.0

### Minor Changes

📝 [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/icon@>=7
  - @spectrum-css/tokens@>=14

## 6.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.2.6...@spectrum-css/actionbutton@6.0.0)

- feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGE

- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

## 5.2.6

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.2.5...@spectrum-css/actionbutton@5.2.6)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 5.2.5

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.2.4...@spectrum-css/actionbutton@5.2.5)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 5.2.4

🗓 2024-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.2.3...@spectrum-css/actionbutton@5.2.4)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 5.2.3

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.2.2...@spectrum-css/actionbutton@5.2.3)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 5.2.2

🗓 2024-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@5.2.1...@spectrum-css/preview@5.2.2)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 5.2.1

🗓 2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.2.0...@spectrum-css/actionbutton@5.2.1)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 5.2.0

🗓 2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.1.0...@spectrum-css/actionbutton@5.2.0)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 5.1.0

🗓 2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.0.18...@spectrum-css/actionbutton@5.1.0)

### ✨ Features

- **overlay,commons:**deprecate overlay; migrate references to commons ([#2429](https://github.com/adobe/spectrum-css/issues/2429))([7eecd96](https://github.com/adobe/spectrum-css/commit/7eecd96))

### 🐛 Bug fixes

- **commons:** rename and deprecate mods referencing global tokens ([#2423](https://github.com/adobe/spectrum-css/issues/2423))([3a49432](https://github.com/adobe/spectrum-css/commit/3a49432))

- deprecate logical transform plugin ([#2437](https://github.com/adobe/spectrum-css/issues/2437))([ff5dda6](https://github.com/adobe/spectrum-css/commit/ff5dda6))

## 5.0.18

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.0.17...@spectrum-css/actionbutton@5.0.18)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 5.0.17

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.0.16...@spectrum-css/actionbutton@5.0.17)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 5.0.16

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.0.15...@spectrum-css/actionbutton@5.0.16)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 5.0.15

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.0.13...@spectrum-css/actionbutton@5.0.15)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 5.0.14

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.0.13...@spectrum-css/actionbutton@5.0.14)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 5.0.13

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.0.12...@spectrum-css/actionbutton@5.0.13)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 5.0.12

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.0.11...@spectrum-css/actionbutton@5.0.12)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 5.0.11

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.0.10...@spectrum-css/actionbutton@5.0.11)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 5.0.10

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.0.9...@spectrum-css/actionbutton@5.0.10)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 5.0.9

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.0.8...@spectrum-css/actionbutton@5.0.9)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 5.0.8

🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.0.7...@spectrum-css/actionbutton@5.0.8)

### 🐛 Bug fixes

- **actionbutton:** fix min-width for xs size ([#2153](https://github.com/adobe/spectrum-css/issues/2153))([9205ac4](https://github.com/adobe/spectrum-css/commit/9205ac4))

## 5.0.7

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.0.6...@spectrum-css/actionbutton@5.0.7)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 5.0.6

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.0.5...@spectrum-css/actionbutton@5.0.6)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 5.0.5

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.0.4...@spectrum-css/actionbutton@5.0.5)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 5.0.4

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.0.3...@spectrum-css/actionbutton@5.0.4)

### 🔙 Reverts

- gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

## 5.0.3

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.0.2...@spectrum-css/actionbutton@5.0.3)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 5.0.2

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.0.0...@spectrum-css/actionbutton@5.0.2)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 5.0.1

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@5.0.0...@spectrum-css/actionbutton@5.0.1)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 5.0.0

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@4.0.13...@spectrum-css/actionbutton@5.0.0)

### Remove focus-ring class

We've migrated away from the focus-ring class in favor of the native :focus-visible pseudo-class due to changes in browser support.

- refactor(actionbutton)!: replace focus-ring with focus-visible([995a0dd](https://github.com/adobe/spectrum-css/commit/995a0dd))

### 🛑 BREAKING CHANGE

- native focus-visible pseudo class used for styling

## 4.0.13

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@4.0.12...@spectrum-css/actionbutton@4.0.13)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 4.0.12

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@4.0.11...@spectrum-css/actionbutton@4.0.12)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 4.0.11

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@4.0.10...@spectrum-css/actionbutton@4.0.11)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 4.0.10

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@4.0.9...@spectrum-css/actionbutton@4.0.10)

### 🐛 Bug fixes

- icon sizing in Storybook story templates ([#2037](https://github.com/adobe/spectrum-css/issues/2037))([c90c8a3](https://github.com/adobe/spectrum-css/commit/c90c8a3))

## 4.0.9

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@4.0.8...@spectrum-css/actionbutton@4.0.9)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 4.0.8

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@4.0.7...@spectrum-css/actionbutton@4.0.8)

### 🐛 Bug fixes

- **actionbutton:** update action button color tokens ([#1982](https://github.com/adobe/spectrum-css/issues/1982))([95e4353](https://github.com/adobe/spectrum-css/commit/95e4353))

## 4.0.7

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@4.0.6...@spectrum-css/actionbutton@4.0.7)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 4.0.6

🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@4.0.5...@spectrum-css/actionbutton@4.0.6)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 4.0.5

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@4.0.4...@spectrum-css/actionbutton@4.0.5)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 4.0.4

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@4.0.3...@spectrum-css/actionbutton@4.0.4)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 4.0.3

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@4.0.2...@spectrum-css/actionbutton@4.0.3)

### 🐛 Bug fixes

- restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

## 4.0.2

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@4.0.1...@spectrum-css/actionbutton@4.0.2)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 4.0.1

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@4.0.0...@spectrum-css/actionbutton@4.0.1)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 4.0.0

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.45...@spectrum-css/actionbutton@4.0.0)

- feat(dropzone)!: migrate tokens (#1831) ([5216021](https://github.com/adobe/spectrum-css/commit/5216021)), closes [#1831](https://github.com/adobe/spectrum-css/issues/1831)

### 🛑 BREAKING CHANGE

- migrates DropZone to use `@adobe/spectrum-tokens`.

Also updates IllustratedMessage and ActionButton to share `--mod-` properties.

## 3.0.45

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.44...@spectrum-css/actionbutton@3.0.45)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.44

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.43...@spectrum-css/actionbutton@3.0.44)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.43

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.42...@spectrum-css/actionbutton@3.0.43)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.42

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.41...@spectrum-css/actionbutton@3.0.42)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.41

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.40...@spectrum-css/actionbutton@3.0.41)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.40

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.39...@spectrum-css/actionbutton@3.0.40)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.39

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.38...@spectrum-css/actionbutton@3.0.39)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.38

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.37...@spectrum-css/actionbutton@3.0.38)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.37

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.36...@spectrum-css/actionbutton@3.0.37)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.36

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.35...@spectrum-css/actionbutton@3.0.36)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.35

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.34...@spectrum-css/actionbutton@3.0.35)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.34

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.32...@spectrum-css/actionbutton@3.0.34)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.33

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.32...@spectrum-css/actionbutton@3.0.33)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.32

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.31...@spectrum-css/actionbutton@3.0.32)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.31

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.30...@spectrum-css/actionbutton@3.0.31)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.30

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.29...@spectrum-css/actionbutton@3.0.30)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.29

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.28...@spectrum-css/actionbutton@3.0.29)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.28

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.26...@spectrum-css/actionbutton@3.0.28)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.27

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.26...@spectrum-css/actionbutton@3.0.27)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.26

🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.24...@spectrum-css/actionbutton@3.0.26)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.25

🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.24...@spectrum-css/actionbutton@3.0.25)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.24

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.23...@spectrum-css/actionbutton@3.0.24)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.23

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.22...@spectrum-css/actionbutton@3.0.23)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.22

🗓 2023-03-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.21...@spectrum-css/actionbutton@3.0.22)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.21

🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.20...@spectrum-css/actionbutton@3.0.21)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.20

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.19...@spectrum-css/actionbutton@3.0.20)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.19

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.18...@spectrum-css/actionbutton@3.0.19)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.18

🗓 2023-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.17...@spectrum-css/actionbutton@3.0.18)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.17

🗓 2023-03-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.16...@spectrum-css/actionbutton@3.0.17)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.16

🗓 2023-02-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.15...@spectrum-css/actionbutton@3.0.16)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.15

🗓 2023-02-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.14...@spectrum-css/actionbutton@3.0.15)

### 🐛 Bug fixes

- **actionbutton:** fix variable used in documentation ([#1630](https://github.com/adobe/spectrum-css/issues/1630)) ([348f263](https://github.com/adobe/spectrum-css/commit/348f263))

## 3.0.14

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.13...@spectrum-css/actionbutton@3.0.14)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.13

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.12...@spectrum-css/actionbutton@3.0.13)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.12

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.11...@spectrum-css/actionbutton@3.0.12)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.11

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.10...@spectrum-css/actionbutton@3.0.11)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.10

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.9...@spectrum-css/actionbutton@3.0.10)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.9

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.8...@spectrum-css/actionbutton@3.0.9)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.8

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.6...@spectrum-css/actionbutton@3.0.8)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.7

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.6...@spectrum-css/actionbutton@3.0.7)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.6

🗓 2023-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.5...@spectrum-css/actionbutton@3.0.6)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.5

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.4...@spectrum-css/actionbutton@3.0.5)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.4

🗓 2022-12-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.3...@spectrum-css/actionbutton@3.0.4)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.3

🗓 2022-12-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.2...@spectrum-css/actionbutton@3.0.3)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.2

🗓 2022-11-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.1...@spectrum-css/actionbutton@3.0.2)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.1

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@3.0.0...@spectrum-css/actionbutton@3.0.1)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 3.0.0

🗓 2022-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@2.1.8...@spectrum-css/actionbutton@3.0.0)

- refactor(actionbutton)!: remap core token aliases & rename aliases ([5966f9b](https://github.com/adobe/spectrum-css/commit/5966f9b))

### 🛑 BREAKING CHANGE

- remaps existing aliases to new/renamed core token values

- `--spectrum-focus-ring-thickness` renamed to `--spectrum-focus-indicator-thickness`
- `--spectrum-focus-ring-gap` renamed to `--spectrum-focus-indicator-gap`
- `--spectrum-focus-ring-color` renamed to `--spectrum-focus-indicator-color`
- `--spectrum-static-white-focus-ring-color` renamed to `--spectrum-static-white-focus-indicator-color`
- `--spectrum-static-black-focus-ring-color` renamed to `--spectrum-static-black-focus-indicator-color`

## 2.1.8

🗓 2022-09-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@2.1.7...@spectrum-css/actionbutton@2.1.8)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 2.1.7

🗓 2022-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@2.1.6...@spectrum-css/actionbutton@2.1.7)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 2.1.6

🗓 2022-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@2.1.5...@spectrum-css/actionbutton@2.1.6)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 2.1.5

🗓 2022-09-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@2.1.4...@spectrum-css/actionbutton@2.1.5)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 2.1.4

🗓 2022-08-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@2.1.3...@spectrum-css/actionbutton@2.1.4)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 2.1.3

🗓 2022-08-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@2.1.2...@spectrum-css/actionbutton@2.1.3)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 2.1.2

🗓 2022-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@2.1.1...@spectrum-css/actionbutton@2.1.2)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 2.1.1

🗓 2022-08-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@2.1.0...@spectrum-css/actionbutton@2.1.1)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 2.1.0

🗓 2022-07-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@2.0.5...@spectrum-css/actionbutton@2.1.0)

### ✨ Features

- **actionbutton:** adding x-small action-button (CSS-37) ([#1481](https://github.com/adobe/spectrum-css/issues/1481)) ([1f18708](https://github.com/adobe/spectrum-css/commit/1f18708))

## 2.0.5

🗓 2022-07-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@2.0.4...@spectrum-css/actionbutton@2.0.5)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 2.0.4

🗓 2022-07-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@2.0.3...@spectrum-css/actionbutton@2.0.4)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 2.0.3

🗓 2022-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@2.0.2...@spectrum-css/actionbutton@2.0.3)

### 🐛 Bug fixes

- **actionbutton, closebutton, picker:** remove `!important` declarations ([a26c212](https://github.com/adobe/spectrum-css/commit/a26c212))
- **actionbutton:** match peer & dev deps for tokens package ([53df83d](https://github.com/adobe/spectrum-css/commit/53df83d))

## 2.0.2

🗓 2022-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@2.0.1...@spectrum-css/actionbutton@2.0.2)

### 🐛 Bug fixes

- **actionbutton:** adjust icon margin to match spec ([a95785b](https://github.com/adobe/spectrum-css/commit/a95785b))

## 2.0.1

🗓 2022-06-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@2.0.0...@spectrum-css/actionbutton@2.0.1)

### 🐛 Bug fixes

- **actionbutton:** removes unsupported vars, uses new values ([1a351f3](https://github.com/adobe/spectrum-css/commit/1a351f3))
- **actionbutton:** update to latest tokens pkg ([ccd2d65](https://github.com/adobe/spectrum-css/commit/ccd2d65))

## 2.0.0

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.1.14...@spectrum-css/actionbutton@2.0.0)

### ✨ Features

- split things out, combine things ([3a817bc](https://github.com/adobe/spectrum-css/commit/3a817bc))

### 🐛 Bug fixes

- removed theme styling from index.css ([fc3af46](https://github.com/adobe/spectrum-css/commit/fc3af46))
- tweaks after merging in component-builder-simple ([ec8345a](https://github.com/adobe/spectrum-css/commit/ec8345a))
- feat!: implement ActionButton core tokens (#1430) ([e6337d6](https://github.com/adobe/spectrum-css/commit/e6337d6)), closes [#1430](https://github.com/adobe/spectrum-css/issues/1430)
- feat!: implement ActionButton core tokens (#1430) ([774d09e](https://github.com/adobe/spectrum-css/commit/774d09e)), closes [#1430](https://github.com/adobe/spectrum-css/issues/1430)

### 🛑 BREAKING CHANGE

#### Action Button now requires a class on its icon

- .spectrum-ActionButton-icon is now required on icons
- .spectrum--express must be added to support Express ActionButton
- .spectrum-ActionButton-icon is now required on icons
- .spectrum--express must be added to support Express ActionButton

## 1.1.14

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.1.13...@spectrum-css/actionbutton@1.1.14)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 1.1.13

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.1.12...@spectrum-css/actionbutton@1.1.13)

### 🐛 Bug fixes

- actionButton WHCM ([c81913f](https://github.com/adobe/spectrum-css/commit/c81913f))

## 1.1.12

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.1.11...@spectrum-css/actionbutton@1.1.12)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 1.1.11

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.1.10...@spectrum-css/actionbutton@1.1.11)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 1.1.10

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.1.9...@spectrum-css/actionbutton@1.1.10)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 1.1.9

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.1.8...@spectrum-css/actionbutton@1.1.9)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 1.1.8

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.1.7...@spectrum-css/actionbutton@1.1.8)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 1.1.7

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.1.6...@spectrum-css/actionbutton@1.1.7)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 1.1.6

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.1.5...@spectrum-css/actionbutton@1.1.6)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 1.1.5

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.1.4...@spectrum-css/actionbutton@1.1.5)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 1.1.4

🗓 2022-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.1.3...@spectrum-css/actionbutton@1.1.4)

### 🐛 Bug fixes

- correct Actiongroup focus ring ([#1368](https://github.com/adobe/spectrum-css/issues/1368)) ([1c0af74](https://github.com/adobe/spectrum-css/commit/1c0af74))

## 1.1.3

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.1.2...@spectrum-css/actionbutton@1.1.3)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 1.1.2

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.1.0...@spectrum-css/actionbutton@1.1.2)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

## 1.1.1

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.1.0...@spectrum-css/actionbutton@1.1.1)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 1.1.0

🗓 2021-12-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.0.10...@spectrum-css/actionbutton@1.1.0)

### ✨ Features

- add staticColor=white|black for ActionButton ([0c6ae88](https://github.com/adobe/spectrum-css/commit/0c6ae88))

## 1.0.10

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.0.9...@spectrum-css/actionbutton@1.0.10)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 1.0.9

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.0.8...@spectrum-css/actionbutton@1.0.9)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 1.0.8

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.0.7...@spectrum-css/actionbutton@1.0.8)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 1.0.7

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.0.6...@spectrum-css/actionbutton@1.0.7)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 1.0.6

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.0.4...@spectrum-css/actionbutton@1.0.6)

### 🐛 Bug fixes

- high contrast mode for actionButton ([b294b9d](https://github.com/adobe/spectrum-css/commit/b294b9d))

## 1.0.5

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.0.4...@spectrum-css/actionbutton@1.0.5)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 1.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.0.2...@spectrum-css/actionbutton@1.0.3)

### 🐛 Bug fixes

- change disabled buttons to not show selection per spectrum ([37f4fee](https://github.com/adobe/spectrum-css/commit/37f4fee))
- high contrast mode for actionButton ([12028fa](https://github.com/adobe/spectrum-css/commit/12028fa))
- remove comment ([07c5e01](https://github.com/adobe/spectrum-css/commit/07c5e01))
- revise fixes to meet spectrum WHCM definition ([a4f0be4](https://github.com/adobe/spectrum-css/commit/a4f0be4))
- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

## 1.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.0.1...@spectrum-css/actionbutton@1.0.2)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 1.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/actionbutton@1.0.0...@spectrum-css/actionbutton@1.0.1)

**Note:** Version bump only for package @spectrum-css/actionbutton

## 1.0.0

🗓 2021-02-02

### ♻️ Code refactoring

#### Change workflow icon size

Previously, all Action Buttons used `.spectrum-Icon--sizeS.`

#### Change hold icon classnames

Hold icon classnames must be set

- fix padding ([89a6506](https://github.com/adobe/spectrum-css/commit/89a6506))

### ✨ Features

#### T-shirt sizing

Action Button now supports t-shirt sizing and requires that you specify the size by adding a `.spectrum-ActionButton--size*` class.

- fixup padding ([612dd0c](https://github.com/adobe/spectrum-css/commit/612dd0c))
- implement t-shirt sizing for Action Button, closes [#936](https://github.com/adobe/spectrum-css/issues/936) ([1a9ecf6](https://github.com/adobe/spectrum-css/commit/1a9ecf6))
- use postcss-remap vars to get t-shirt sizing ([f24f6b3](https://github.com/adobe/spectrum-css/commit/f24f6b3))

### 🐛 Bug fixes

- correct padding, this one is complicated! ([f535f4b](https://github.com/adobe/spectrum-css/commit/f535f4b))
- correct variable usage ([12d3454](https://github.com/adobe/spectrum-css/commit/12d3454))
- hold icon distance until it's updated in DNA ([046ae8e](https://github.com/adobe/spectrum-css/commit/046ae8e))
- line-height of buttons ([eeb24b0](https://github.com/adobe/spectrum-css/commit/eeb24b0))
- remove hack for broken small min-width ([b8cbfbd](https://github.com/adobe/spectrum-css/commit/b8cbfbd))
- try to fix padding (still wrong for icon + label) ([8a2696e](https://github.com/adobe/spectrum-css/commit/8a2696e))

### 🛑 BREAKING CHANGE

#### Action Button is now a separate component

Action Button has been moved to the [Action Button](https://opensource.adobe.com/spectrum-css/actionbutton.html) component.

- require hold icon to come before workflow icon
- .spectrum-ActionButton is no longer part of the button component, use the actionbutton component
