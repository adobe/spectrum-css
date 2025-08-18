# Change log

## 7.0.0-next.2

### Major Changes

📝 [#4003](https://github.com/adobe/spectrum-css/pull/4003) [`7f48b7c`](https://github.com/adobe/spectrum-css/commit/7f48b7c6384f8c7d598637226a17aff1c8e8b61c) Thanks [@rise-erpelding](https://github.com/rise-erpelding)!

Tab has now been migrated to Spectrum 2. This migration brings with it several major changes:

- Emphasized variant has been removed
- The divider line has been removed and all variants now resemble what was formerly the quiet variant
- Removal of t-shirt sizes (only one size is available)
- Updated high contrast styles
- The focus indicator's size has changed to accommodate the selection indicator inside of the focus outline

Overflow and vertical variants, aside from what applies from the notes above, remain mostly unchanged and currently are not fully supported in S2. One exception: a bug fix was made to allow density variants to be visible in the overflow variant (previously, the overflow variant was identical for both densities).

A full list of added and removed mods can be found below. However, please note the following mod name changes:

- `--mod-tabs-divider-size` is now `--mod-tabs-selection-indicator-thickness`
- `--mod-tabs-divider-border-radius` is now `--mod-tabs-selection-indicator-border-radius`

Removed mods

- `--mod-tabs-color-hover-emphasized`
- `--mod-tabs-color-key-focus-emphasized`
- `--mod-tabs-color-selected-emphasized`
- `--mod-tabs-divider-background-color`
- `--mod-tabs-divider-border-radius`
- `--mod-tabs-divider-size`
- `--mod-tabs-item-vertical-spacing`
- `--mod-tabs-list-background-direction`
- `--mod-tabs-list-background-direction-vertical`
- `--mod-tabs-list-background-direction-vertical-right`
- `--mod-tabs-selection-indicator-color-emphasized`
- `--mod-tabs-start-to-item-quiet`

Added mods

- `--mod-tabs-color-selected-hover`
- `--mod-tabs-color-selected-key-focus`
- `--mod-tabs-item-border-radius`
- `--mod-tabs-item-horizontal-spacing-compact`
- `--mod-tabs-label-to-selection-indicator`
- `--mod-tabs-label-to-selection-indicator-compact`
- `--mod-tabs-selection-indicator-border-radius`
- `--mod-tabs-selection-indicator-color-disabled`
- `--mod-tabs-selection-indicator-thickness`
- `--mod-tabs-side-to-icon`
- `--mod-tabs-side-to-icon-compact`

📝 [#4014](https://github.com/adobe/spectrum-css/pull/4014) [`35c066b`](https://github.com/adobe/spectrum-css/commit/35c066b29c311b1bfcf4507075f13b41222ffc84) Thanks [@castastrophe](https://github.com/castastrophe)!

This update removes the `dir` attribute polyfill (served via a PostCSS transform to compiled assets) as the fallback is no longer necessary. The`dir` attribute support is available in all supported browsers and has been tested to correctly inherit inside web component shadow DOMs. This is a breaking change **only** to those relying on the `dir` attribute being present for styling, however, the `:dir` pseudo will correctly inherit values from their containers. To correctly determine the `dir` value of a node using JavaScript, you can use `getComputedStyle(node).direction`.

## 7.0.0-next.1

### Patch Changes

- Updated dependencies [[`60a156d`](https://github.com/adobe/spectrum-css/commit/60a156d7c0efcc999bc440274bbbbf586beb274b)]:
  - @spectrum-css/tokens@16.1.0-next.0

## 7.0.0-next.0

### Patch Changes

- Updated dependencies [[`a25e0a9`](https://github.com/adobe/spectrum-css/commit/a25e0a99e5a4736ab4e607e00739343101a2633b)]:
  - @spectrum-css/icon@10.0.0-next.0
  - @spectrum-css/menu@10.0.0-next.0
  - @spectrum-css/picker@10.0.0-next.0

## 7.0.0

### Patch Changes

- Updated dependencies []:
  - @spectrum-css/picker@10.0.0

## 6.1.0

### Minor Changes

📝 [`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee) Thanks [@castastrophe](https://github.com/castastrophe)!

## New feature

Minified and gzipped outputs available for all compiled CSS assets.

### Patch Changes

📝 [#3541](https://github.com/adobe/spectrum-css/pull/3541) [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d) Thanks [@castastrophe](https://github.com/castastrophe)!

Dependency alignment across the project.

- Updated dependencies [[`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee), [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d)]:
  - @spectrum-css/icon@9.1.0
  - @spectrum-css/menu@10.0.0
  - @spectrum-css/picker@10.0.0
  - @spectrum-css/tokens@16.0.1

## 6.0.1

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
  - @spectrum-css/menu@9.0.1
  - @spectrum-css/picker@9.0.1

## 6.0.0

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

- Updated dependencies [[`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6), [`88bfc5b`](https://github.com/adobe/spectrum-css/commit/88bfc5bd7a8de3151ef774dc483aa6a829cb7dd0), [`3d08cea`](https://github.com/adobe/spectrum-css/commit/3d08cea0f590c8c2de7252677a6b81b8cc206b9a), [`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6)]:
  - @spectrum-css/tokens@16.0.0
  - @spectrum-css/menu@9.0.0
  - @spectrum-css/picker@9.0.0
  - @spectrum-css/icon@9.0.0

## 5.3.1

### Patch Changes

📝 [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)!

- Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/picker@8.4.1
  - @spectrum-css/icon@8.0.1
  - @spectrum-css/menu@8.0.1

## 5.3.0

### Minor Changes

📝 [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)!

- Simplify how the `--system` properties are mapped. By updating the logic in the `postcss-add-theming-layer`, we are now shipping cleaner, more readable `--system` property names. These custom properties are documented as _NOT_ a part of the component API so although these result in a change to the custom property names, it does not impact the properties that are in the API and so do not constitute a breaking change. Expect to see no change to how component theming works or any visual regressions as a result of this change.

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/icon@8.0.0
  - @spectrum-css/menu@8.0.0
  - @spectrum-css/picker@8.4.0

## 5.2.0

### Minor Changes

📝 [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/picker@8.3.0
  - @spectrum-css/icon@7.2.0
  - @spectrum-css/menu@7.2.0

## 5.1.4

### Patch Changes

📝 [#3315](https://github.com/adobe/spectrum-css/pull/3315) [`df7c4b1`](https://github.com/adobe/spectrum-css/commit/df7c4b123021c266b1b28d13784ee5e1c74713e3) Thanks [@cdransf](https://github.com/cdransf)!

- Resolves stylelint violation by removing undefined and unused token

## 5.1.3

### Patch Changes

📝 [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)!

- Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/picker@8.1.6
  - @spectrum-css/icon@7.1.4
  - @spectrum-css/menu@7.1.7

## 5.1.2

### Patch Changes

📝 [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)!

- Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/picker@8.1.5
  - @spectrum-css/icon@7.1.3
  - @spectrum-css/menu@7.1.6

## 5.1.1

### Patch Changes

📝 [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)!

- Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/picker@8.1.2
  - @spectrum-css/icon@7.1.1
  - @spectrum-css/menu@7.1.2

## 5.1.0

### Minor Changes

📝 [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/icon@>=7
  - @spectrum-css/menu@>=7
  - @spectrum-css/picker@>=8
  - @spectrum-css/tokens@>=14

## 5.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.1.4...@spectrum-css/tabs@5.0.0)

### 🐛 Bug fixes

- **tabs:** mod typo for font-size ([#2596](https://github.com/adobe/spectrum-css/issues/2596))([acebc16](https://github.com/adobe/spectrum-css/commit/acebc16))

- feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGE

- Removes component-builder & component-builder-simple for script leveraging postcss
- Imports added to index.css and themes/express.css

## 4.1.4

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.1.3...@spectrum-css/tabs@4.1.4)
**Note:** Version bump only for package @spectrum-css/tabs

## 4.1.3

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.1.2...@spectrum-css/tabs@4.1.3)

## 4.1.2

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.1.1...@spectrum-css/tabs@4.1.2)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.1.1

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-css/tabs

## 4.1.0

🗓 2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.28...@spectrum-css/tabs@4.1.0)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.28

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.27...@spectrum-css/tabs@4.0.28)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.27

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.26...@spectrum-css/tabs@4.0.27)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.26

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.25...@spectrum-css/tabs@4.0.26)

### 🐛 Bug fixes

- **tabs:** focus outline only on keyboard focus([ec96da6](https://github.com/adobe/spectrum-css/commit/ec96da6))

## 4.0.25

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.23...@spectrum-css/tabs@4.0.25)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.24

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.23...@spectrum-css/tabs@4.0.24)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.23

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.22...@spectrum-css/tabs@4.0.23)

## 4.0.22

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.21...@spectrum-css/tabs@4.0.22)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.21

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.20...@spectrum-css/tabs@4.0.21)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.20

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.19...@spectrum-css/tabs@4.0.20)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.19

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.18...@spectrum-css/tabs@4.0.19)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.18

🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.17...@spectrum-css/tabs@4.0.18)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.17

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.16...@spectrum-css/tabs@4.0.17)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.16

🗓 2023

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.15

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.14...@spectrum-css/tabs@4.0.15)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.14

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.13...@spectrum-css/tabs@4.0.14)

## 4.0.13

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.12...@spectrum-css/tabs@4.0.13)

### 🔙 Reverts

- gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

## 4.0.12

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.11...@spectrum-css/tabs@4.0.12)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.11

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.9...@spectrum-css/tabs@4.0.11)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.10

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.9...@spectrum-css/tabs@4.0.10)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.9

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.8...@spectrum-css/tabs@4.0.9)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.8

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.7...@spectrum-css/tabs@4.0.8)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.7

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.6...@spectrum-css/tabs@4.0.7)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.6

🗓 2023-08-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.5...@spectrum-css/tabs@4.0.6)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.5

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.4...@spectrum-css/tabs@4.0.5)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.4

🗓 2023-07-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.3...@spectrum-css/tabs@4.0.4)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.3

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.2...@spectrum-css/tabs@4.0.3)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.2

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.1...@spectrum-css/tabs@4.0.2)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.1

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@4.0.0...@spectrum-css/tabs@4.0.1)

**Note:** Version bump only for package @spectrum-css/tabs

## 4.0.0

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.64...@spectrum-css/tabs@4.0.0)

- feat(tabs)!: migrate tokens (#1902)([6d07436](https://github.com/adobe/spectrum-css/commit/6d07436)), closes[#1902](https://github.com/adobe/spectrum-css/issues/1902)

### Migration Guide

#### Compact Tabs

- Compact tabs should not be used without `.spectrum-Tabs--quiet`.

#### 🛑 BREAKING CHANGE

- Migrates the Tabs component to use `@adobe/spectrum-tokens`.

## 3.2.64

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.63...@spectrum-css/tabs@3.2.64)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.63

🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.62...@spectrum-css/tabs@3.2.63)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.62

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.61...@spectrum-css/tabs@3.2.62)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.61

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.60...@spectrum-css/tabs@3.2.61)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.60

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.59...@spectrum-css/tabs@3.2.60)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.59

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.58...@spectrum-css/tabs@3.2.59)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.58

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.57...@spectrum-css/tabs@3.2.58)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.57

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.56...@spectrum-css/tabs@3.2.57)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.56

🗓 2023-05-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.55...@spectrum-css/tabs@3.2.56)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.55

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.54...@spectrum-css/tabs@3.2.55)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.54

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.53...@spectrum-css/tabs@3.2.54)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.53

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.52...@spectrum-css/tabs@3.2.53)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.52

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.51...@spectrum-css/tabs@3.2.52)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.51

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.50...@spectrum-css/tabs@3.2.51)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.50

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.49...@spectrum-css/tabs@3.2.50)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.49

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.48...@spectrum-css/tabs@3.2.49)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.48

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.47...@spectrum-css/tabs@3.2.48)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.47

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.46...@spectrum-css/tabs@3.2.47)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.46

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.45...@spectrum-css/tabs@3.2.46)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.45

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.44...@spectrum-css/tabs@3.2.45)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.44

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.43...@spectrum-css/tabs@3.2.44)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.43

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.42...@spectrum-css/tabs@3.2.43)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.42

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.40...@spectrum-css/tabs@3.2.42)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.41

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.40...@spectrum-css/tabs@3.2.41)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.40

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.39...@spectrum-css/tabs@3.2.40)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.39

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.38...@spectrum-css/tabs@3.2.39)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.38

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.37...@spectrum-css/tabs@3.2.38)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.37

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.36...@spectrum-css/tabs@3.2.37)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.36

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.34...@spectrum-css/tabs@3.2.36)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.35

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.34...@spectrum-css/tabs@3.2.35)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.34

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.33...@spectrum-css/tabs@3.2.34)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.33

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.32...@spectrum-css/tabs@3.2.33)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.32

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.31...@spectrum-css/tabs@3.2.32)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.31

🗓 2023-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.30...@spectrum-css/tabs@3.2.31)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.30

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.29...@spectrum-css/tabs@3.2.30)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.29

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.28...@spectrum-css/tabs@3.2.29)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.28

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.27...@spectrum-css/tabs@3.2.28)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.27

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.26...@spectrum-css/tabs@3.2.27)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.26

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.25...@spectrum-css/tabs@3.2.26)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.25

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.24...@spectrum-css/tabs@3.2.25)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.24

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.22...@spectrum-css/tabs@3.2.24)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.23

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.22...@spectrum-css/tabs@3.2.23)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.22

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.21...@spectrum-css/tabs@3.2.22)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.21

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.20...@spectrum-css/tabs@3.2.21)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.20

🗓 2022-10-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.19...@spectrum-css/tabs@3.2.20)

### 🐛 Bug fixes

- **tabs:** selection indicator scroll overflow border ([#1513](https://github.com/adobe/spectrum-css/issues/1513)) ([3f740ad](https://github.com/adobe/spectrum-css/commit/3f740ad))

## 3.2.19

🗓 2022-07-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.18...@spectrum-css/tabs@3.2.19)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.18

🗓 2022-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.17...@spectrum-css/tabs@3.2.18)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.17

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.15...@spectrum-css/tabs@3.2.17)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.16

🗓 2022-06-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.15...@spectrum-css/tabs@3.2.16)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.15

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.14...@spectrum-css/tabs@3.2.15)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.14

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.13...@spectrum-css/tabs@3.2.14)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.13

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.12...@spectrum-css/tabs@3.2.13)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.12

🗓 2022-04-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.11...@spectrum-css/tabs@3.2.12)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.11

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.10...@spectrum-css/tabs@3.2.11)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.10

🗓 2022-03-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.9...@spectrum-css/tabs@3.2.10)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.9

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.8...@spectrum-css/tabs@3.2.9)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.8

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.7...@spectrum-css/tabs@3.2.8)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.7

🗓 2022-03-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.6...@spectrum-css/tabs@3.2.7)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.6

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.5...@spectrum-css/tabs@3.2.6)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.5

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.4...@spectrum-css/tabs@3.2.5)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.4

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.3...@spectrum-css/tabs@3.2.4)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.3

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.2...@spectrum-css/tabs@3.2.3)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.2

🗓 2022-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.1...@spectrum-css/tabs@3.2.2)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.1

🗓 2022-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.2.0...@spectrum-css/tabs@3.2.1)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.2.0

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.1.9...@spectrum-css/tabs@3.2.0)

### ✨ Features

- **tabs:** add express theme ([b17dc48](https://github.com/adobe/spectrum-css/commit/b17dc48))
- **tabs:** adds emphasized variation and proper vars ([3f966f1](https://github.com/adobe/spectrum-css/commit/3f966f1))
- **tabs:** support WHCM ([5212fd9](https://github.com/adobe/spectrum-css/commit/5212fd9))
- **tabs:** use correct vars for focusring ([972c82e](https://github.com/adobe/spectrum-css/commit/972c82e))
- **tabs:** values now reference correct custom props ([e0a859d](https://github.com/adobe/spectrum-css/commit/e0a859d))

## 3.1.9

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.1.7...@spectrum-css/tabs@3.1.9)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

## 3.1.8

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.1.7...@spectrum-css/tabs@3.1.8)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.1.7

🗓 2021-12-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.1.6...@spectrum-css/tabs@3.1.7)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.1.6

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.1.5...@spectrum-css/tabs@3.1.6)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.1.5

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.1.4...@spectrum-css/tabs@3.1.5)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.1.4

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.1.3...@spectrum-css/tabs@3.1.4)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.1.3

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.1.2...@spectrum-css/tabs@3.1.3)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.1.2

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.1.1...@spectrum-css/tabs@3.1.2)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

## 3.1.1

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.1.0...@spectrum-css/tabs@3.1.1)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

## 3.1.0

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.0.2...@spectrum-css/tabs@3.1.0)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.0.1...@spectrum-css/tabs@3.0.2)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@3.0.0...@spectrum-css/tabs@3.0.1)

**Note:** Version bump only for package @spectrum-css/tabs

## 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@2.1.5...@spectrum-css/tabs@3.0.0)

**Note:** Version bump only for package @spectrum-css/tabs

## 2.1.5

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@2.1.4...@spectrum-css/tabs@2.1.5)

**Note:** Version bump only for package @spectrum-css/tabs

## 2.1.4

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@2.1.3...@spectrum-css/tabs@2.1.4)

**Note:** Version bump only for package @spectrum-css/tabs

## 2.1.3

🗓 2020-01-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@2.1.2...@spectrum-css/tabs@2.1.3)

**Note:** Version bump only for package @spectrum-css/tabs

## 2.1.2

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@2.1.1...@spectrum-css/tabs@2.1.2)

**Note:** Version bump only for package @spectrum-css/tabs

## 2.1.1

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@2.1.0...@spectrum-css/tabs@2.1.1)

**Note:** Version bump only for package @spectrum-css/tabs

## 2.1.0

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tabs@2.0.0...@spectrum-css/tabs@2.1.0)

### ✨ Features

- add menu icon class, closes [#202](https://github.com/adobe/spectrum-css/issues/202) ([#331](https://github.com/adobe/spectrum-css/issues/331)) ([169940a](https://github.com/adobe/spectrum-css/commit/169940a))

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
