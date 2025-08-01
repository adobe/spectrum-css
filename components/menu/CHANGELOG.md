# Change log

## 9.2.1

### Patch Changes

📝 [#4088](https://github.com/adobe/spectrum-css/pull/4088) [`24d75bf`](https://github.com/adobe/spectrum-css/commit/24d75bfe4d8e627f9d8e019ae379bdd4787712dd) Thanks [@castastrophe](https://github.com/castastrophe)!

Minor linting fix of replacing `rgba` to the `rgb` shorthand syntax.

## 9.2.0

### Minor Changes

- [#3527](https://github.com/adobe/spectrum-css/pull/3527) [`5f1751c`](https://github.com/adobe/spectrum-css/commit/5f1751c82a5fe55ae0d999f5f50cfeca4c8a5c75) Thanks [@castastrophe](https://github.com/castastrophe)! - By updating the postcss-preset-env to the latest breaking change version, output for this component no longer injects the `.js-focus-within` and '[focus-within]` selectors for the focus-within polyfill. As this feature is not used in the SWC consumption, risk to the end user for this removal is low.

## 10.0.0

### Minor Changes

📝 [`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee) Thanks [@castastrophe](https://github.com/castastrophe)!

## New feature

Minified and gzipped outputs available for all compiled CSS assets.

### Patch Changes

📝 [#3541](https://github.com/adobe/spectrum-css/pull/3541) [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d) Thanks [@castastrophe](https://github.com/castastrophe)!

- Dependency alignment across the project.

  Set component peerDependencies as optional to reduce console warnings on downstream projects.

- Updated dependencies [[`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee), [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d)]:
  - @spectrum-css/checkbox@11.0.0
  - @spectrum-css/divider@5.1.0
  - @spectrum-css/icon@9.1.0
  - @spectrum-css/switch@6.1.0
  - @spectrum-css/tray@6.0.0
  - @spectrum-css/tokens@16.0.1

## 9.1.1

### Patch Changes

📝 [#3581](https://github.com/adobe/spectrum-css/pull/3581) [`ccc9b83`](https://github.com/adobe/spectrum-css/commit/ccc9b83f0be645b97b88393edc9785d717dc0f1b) Thanks [@rise-erpelding](https://github.com/rise-erpelding)!

Adjusts RTL mode menu item focus indicator side for S1/Express.

## 9.0.1

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
  - @spectrum-css/checkbox@10.0.1
  - @spectrum-css/divider@5.0.1
  - @spectrum-css/icon@9.0.1
  - @spectrum-css/switch@6.0.1
  - @spectrum-css/tray@5.0.1

## 9.0.0

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

📝 [#3530](https://github.com/adobe/spectrum-css/pull/3530) [`88bfc5b`](https://github.com/adobe/spectrum-css/commit/88bfc5bd7a8de3151ef774dc483aa6a829cb7dd0) Thanks [@castastrophe](https://github.com/castastrophe)!

- By adding additional system mappings for the menu item, we are able to support box-shadow styling for Spectrum 1 and Express, while updating to outline styles for Spectrum 2 (S2) foundations.

  For S2 foundations, a margin is leveraged on the Menu item to leave space for the outline width and outline offset. This is reflected in the padding present for the menu items in the design specifications for S2.

- Updated dependencies [[`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6), [`3d08cea`](https://github.com/adobe/spectrum-css/commit/3d08cea0f590c8c2de7252677a6b81b8cc206b9a), [`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6)]:
  - @spectrum-css/tokens@16.0.0
  - @spectrum-css/checkbox@10.0.0
  - @spectrum-css/divider@5.0.0
  - @spectrum-css/switch@6.0.0
  - @spectrum-css/icon@9.0.0
  - @spectrum-css/tray@5.0.0

## 8.0.1

### Patch Changes

📝 [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)!

- Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/checkbox@9.3.1
  - @spectrum-css/divider@4.0.1
  - @spectrum-css/switch@5.3.1
  - @spectrum-css/icon@8.0.1
  - @spectrum-css/tray@4.0.1

## 8.0.0

### Major Changes

📝 [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove empty theme references to reduce complexity for components that don't need to define any mappings. This involves removing the source `themes` directories with the empty `spectrum.css` and `express.com` files as well as removing the following empty or unnecessary exports:
  - `index-base.css`
  - `index-theme.css`
  - `themes/spectrum.css`
  - `themes/express.css`

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/checkbox@9.3.0
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/divider@4.0.0
  - @spectrum-css/icon@8.0.0
  - @spectrum-css/tray@4.0.0
  - @spectrum-css/switch@5.3.0

## 7.2.0

### Minor Changes

📝 [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/checkbox@9.2.0
  - @spectrum-css/divider@3.2.0
  - @spectrum-css/switch@5.2.0
  - @spectrum-css/icon@7.2.0
  - @spectrum-css/tray@3.2.0

## 7.1.9

### Patch Changes

📝 [#3300](https://github.com/adobe/spectrum-css/pull/3300) [`89797d0`](https://github.com/adobe/spectrum-css/commit/89797d0324bcbf2195a28840ce87ed6959da24a5) Thanks [@castastrophe](https://github.com/castastrophe)!

- Add passthrough markers to prevent unnecessary warnings about unused custom properties

## 7.1.8

### Patch Changes

📝 [#3290](https://github.com/adobe/spectrum-css/pull/3290) [`df4c029`](https://github.com/adobe/spectrum-css/commit/df4c029babe8007a783099f9989af1e2c2e8181e) Thanks [@cdransf](https://github.com/cdransf)!

- Resolves lint violation by removing unused custom property.

## 7.1.7

### Patch Changes

📝 [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)!

- Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/checkbox@9.1.3
  - @spectrum-css/divider@3.1.3
  - @spectrum-css/switch@5.1.3
  - @spectrum-css/icon@7.1.4
  - @spectrum-css/tray@3.1.3

## 7.1.6

### Patch Changes

📝 [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)!

- Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/checkbox@9.1.2
  - @spectrum-css/divider@3.1.2
  - @spectrum-css/switch@5.1.2
  - @spectrum-css/icon@7.1.3
  - @spectrum-css/tray@3.1.2

## 7.1.5

### Patch Changes

📝 [#2980](https://github.com/adobe/spectrum-css/pull/2980) [`4b8e97e`](https://github.com/adobe/spectrum-css/commit/4b8e97e26fe3fc62f0c6686ef313b346c0b7f22f) Thanks [@jawinn](https://github.com/jawinn)!

- Increases the specificity for some icon related selectors, so the inclusion order of the icon component dependency does not affect the styles. Fixes a bug with how the picker displayed on the docs site UI for some components.

## 7.1.4

### Patch Changes

📝 [#2842](https://github.com/adobe/spectrum-css/pull/2842) [`4cd3a15`](https://github.com/adobe/spectrum-css/commit/4cd3a15db914b667f5d606388051ecd2cd318134) Thanks [@castastrophe](https://github.com/castastrophe)!

- Updated CSSNano plugin to toggle reduceIdent off to prevent invalid abstractions from breaking named grid templates.

## 7.1.3

### Patch Changes

📝 [#2757](https://github.com/adobe/spectrum-css/pull/2757) [`e945e26`](https://github.com/adobe/spectrum-css/commit/e945e261171c56a1e598f13915df6b3e71a4a423) Thanks [@rise-erpelding](https://github.com/rise-erpelding)!

- Prevents overlap of checkbox and icon if both are used in a menu item.

  Also reduces a significant number of variants by consolidating menus, includes a refactor to enhance menu item understanding, and expands Chromatic testing coverage.

## 7.1.2

### Patch Changes

📝 [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)!

- Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/checkbox@9.1.1
  - @spectrum-css/divider@3.1.1
  - @spectrum-css/switch@5.1.1
  - @spectrum-css/icon@7.1.1
  - @spectrum-css/tray@3.1.1

## 7.1.1

### Patch Changes

📝 [#2740](https://github.com/adobe/spectrum-css/pull/2740) [`c0dd6a4`](https://github.com/adobe/spectrum-css/commit/c0dd6a443b410f37f3dc703d75e11c15519fd93e) Thanks [@jawinn](https://github.com/jawinn)!

- Build change to remove the `postcss-preset-env` polyfill for the dist output of `:not` selectors containing multiple selectors, to avoid an unintended increase in specificity, which caused some visual regressions.

## 7.1.0

### Minor Changes

📝 [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/checkbox@>=9
  - @spectrum-css/divider@>=3
  - @spectrum-css/icon@>=7
  - @spectrum-css/switch@>=5
  - @spectrum-css/tray@>=3
  - @spectrum-css/tokens@>=14

## 7.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@6.1.5...@spectrum-css/menu@7.0.0)

- feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGE

- Removes component-builder & component-builder-simple for script leveraging postcss
- Imports added to index.css and themes/express.css

## 6.1.5

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@6.1.4...@spectrum-css/menu@6.1.5)

### 🐛 Bug fixes

- **menu:** disabled color for value text and add disabled stories ([#2579](https://github.com/adobe/spectrum-css/issues/2579))([f0fae60](https://github.com/adobe/spectrum-css/commit/f0fae60))

## 6.1.4

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@6.1.3...@spectrum-css/menu@6.1.4)

**Note:** Version bump only for package @spectrum-css/menu

## 6.1.3

🗓 2024-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@6.1.2...@spectrum-css/menu@6.1.3)

**Note:** Version bump only for package @spectrum-css/menu

## 6.1.2

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@6.1.1...@spectrum-css/menu@6.1.2)

**Note:** Version bump only for package @spectrum-css/menu

## 6.1.1

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-css/menu

## 6.1.0

🗓 2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@6.0.0...@spectrum-css/menu@6.1.0)

### 🐛 Bug fixes

- **menu:** use higher specificity to provide correct styling for disabled states([36e0183](https://github.com/adobe/spectrum-css/commit/36e0183))

## 6.0.0

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.2.1...@spectrum-css/menu@6.0.0)

### ✨ Features

- remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

- fix(menu)!: reimplement text truncating (#2299)([9752d02](https://github.com/adobe/spectrum-css/commit/9752d02)), closes[#2299](https://github.com/adobe/spectrum-css/issues/2299)

### 🛑 BREAKING CHANGES

- removes flex-based display, renames classes, reintroduces truncation

Additionally:

- fix(menu): truncating class
- docs(menu): add truncating example
- docs(menu): improve docs
- feat(menu): add truncate example to storybook
- refactor(menu): remove flex from itemLabel
- feat(menu): wip adds truncating to all stories
- refactor(menu): removes uneeded code
- refactor(menu): removes hard coded ellipsis
- docs(menu): improve description
- chore(menu): story indenting
- docs(menu): improve storybook max-width
- refactor(menu): improves story
- docs(menu): adds to migration guide
- fix(menu): post rebase issues

## 5.2.1

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.2.0...@spectrum-css/menu@5.2.1)

**Note:** Version bump only for package @spectrum-css/menu

## 5.2.0

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.1.5...@spectrum-css/menu@5.2.0)

### ✨ Features

- **menu:** tray submenus([042ec45](https://github.com/adobe/spectrum-css/commit/042ec45))

### 🐛 Bug fixes

- **menu:** updated sizing of tray submenu back icon([3a5aebd](https://github.com/adobe/spectrum-css/commit/3a5aebd))

## 5.1.5

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.1.3...@spectrum-css/menu@5.1.5)

**Note:** Version bump only for package @spectrum-css/menu

## 5.1.4

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.1.3...@spectrum-css/menu@5.1.4)

**Note:** Version bump only for package @spectrum-css/menu

## 5.1.3

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.1.2...@spectrum-css/menu@5.1.3)

**Note:** Version bump only for package @spectrum-css/menu

## 5.1.2

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.1.1...@spectrum-css/menu@5.1.2)

### 🐛 Bug fixes

- **menu:** drill-in disabled menu item chevron ([#2199](https://github.com/adobe/spectrum-css/issues/2199))([2dba5d9](https://github.com/adobe/spectrum-css/commit/2dba5d9)), closes[#2176](https://github.com/adobe/spectrum-css/issues/2176)

## 5.1.1

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.1.0...@spectrum-css/menu@5.1.1)

**Note:** Version bump only for package @spectrum-css/menu

## 5.1.0

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.12...@spectrum-css/menu@5.1.0)

### ✨ Features

- **menu:** add multi-select and switch ([#2152](https://github.com/adobe/spectrum-css/issues/2152))([6e95f44](https://github.com/adobe/spectrum-css/commit/6e95f44))

## 5.0.12

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.11...@spectrum-css/menu@5.0.12)

**Note:** Version bump only for package @spectrum-css/menu

## 5.0.11

🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.10...@spectrum-css/menu@5.0.11)

**Note:** Version bump only for package @spectrum-css/menu

## 5.0.10

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.9...@spectrum-css/menu@5.0.10)

**Note:** Version bump only for package @spectrum-css/menu

## 5.0.9

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.8...@spectrum-css/menu@5.0.9)

**Note:** Version bump only for package @spectrum-css/menu

## 5.0.8

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.7...@spectrum-css/menu@5.0.8)

**Note:** Version bump only for package @spectrum-css/menu

## 5.0.7

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.6...@spectrum-css/menu@5.0.7)

### 🔙 Reverts

- gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

## 5.0.6

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.5...@spectrum-css/menu@5.0.6)

**Note:** Version bump only for package @spectrum-css/menu

## 5.0.5

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.3...@spectrum-css/menu@5.0.5)

**Note:** Version bump only for package @spectrum-css/menu

## 5.0.4

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.3...@spectrum-css/menu@5.0.4)

**Note:** Version bump only for package @spectrum-css/menu

## 5.0.3

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.2...@spectrum-css/menu@5.0.3)

**Note:** Version bump only for package @spectrum-css/menu

## 5.0.2

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.1...@spectrum-css/menu@5.0.2)

**Note:** Version bump only for package @spectrum-css/menu

## 5.0.1

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.0...@spectrum-css/menu@5.0.1)

**Note:** Version bump only for package @spectrum-css/menu

## 5.0.0

🗓 2023-08-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.50...@spectrum-css/menu@5.0.0)

### ✨ Features

- **menu:** migrate to spectrum-tokens + add new features ([#1942](https://github.com/adobe/spectrum-css/issues/1942))([d961abd](https://github.com/adobe/spectrum-css/commit/d961abd))

### 🛑 BREAKING CHANGE

- **menu:** migrates the Menu to `@adobe/spectrum-tokens`
- feat(menu)!: migrate to spectrum-tokens
- docs(site): update menu usage in the docs site
- fix(menu): use correct guidelines link in docs
- feat(menu): make medium size styles the default

Make .spectrum-Menu--sizeM the default; move its custom properties to
the parent class, and move sizing styles underneath the parent class
custom property definitions.

- fix(menu): set color property where fill is used

Add color declaration wherever there is 'fill', per SWC request. Because
"using fill to set the colour of icons in the menu css isn't
compatible with the way we process our icons, so the icons aren't
colouring properly or changing depending on the state".

- fix(menu): checkmark margin to fix alignment of selected items

Selected menu items with checkmark were shifting 2 pixels as compared
to the non-selected menu items. Looking over the updated design, the
`text-to-control-*` tokens are used for the space between the checkmark
and the text.

- fix(menu): section heading top and bottom spacing

When a section heading was above menu items, it previously looked
strange because of the lack of space. The sectionHeading also needs
top and bottom padding.

- fix(menu): organize stories under components category

- feat(menu): simplify cjk style rules

Replace unnecessary CJK style rules with a change to the relevant custom
property values.

- refactor(menu): simplify high contrast mode styles with fixes

- Simplify high contrast mode styles. Less custom properties are needed.
- Fix for hover causing things to disappear on collapsible items. Fix
  may need to be replaced later with one that addresses the regular
  styles for children of menu-item being applied to the nested menu
  items in the collapsible variant.
- Remove skin.css as part of tokens migration. Its rules should already
  be handled now by the index.css.

- feat(menu): create new stories and finalize existing stories

Updates the Menu stories to account for additional variants on the docs
and changes to markup. Adds several new stories.

- fix(menu): update for selected states and keyboard focus
- Use state class naming instead of modifier class naming for
  is-selected and is-selectable.
- Show focus indicator line only with :focus-visible for keyboard focus
- Simplify RTL/LTR change of focus indicator with scalar custom prop
- feat(menu): story for drill-in variant

Add story for drill-in variant. Also makes isSelectable false by default
and change some stories to set it to false to better align with docs
examples.

- fix(menu): use child combinator to limit styles applied for nested

In the collapsible variant, style rules applying to children of a menu
item were also applying to the nested menu child items. This was causing
some issues with high contrast hovers and could also be noticed by
changing a mod like --mod-menu-item-label-content-color-hover and then
hovering over the parent menu item in the collapsible variant (this
would also change the color of all the child menu items).

- docs(menu): remove submenu from drill-in example

The displayed submenu for the drill-in example was not how submenus
should be displayed per the guidelines. They need to be positioned, and
are shown as being within another popover. Showing this adjacent menu
like this could cause some confusion as to its usage; the adjacent menu
was not positioned properly and does not have any separate styles within
the CSS for doing so.

- fix(menu): collapsible - remove extra indentation for sub items

For the collapsible variant:
The child menu items under a parent menu item that contains a workflow
icon should not show extra indentation, otherwise it looks like a
different tier when next to a menu item without an icon. Confirmed
with design team.

All sub-items are now indented to after the chevron and the start of the
parent item text/heading.

- feat(menu): add collapsible story

Add Collapsible story to menu in Storybook, based on example from docs
example.

- feat(menu): add t-shirt sizing to storybook

Add control for t-shirt sizing to menu stories. Adds the size class to
various elements.

- fix(menu): fixes for menu usage in docs site search and popovers

Fixes for several issues with the menu that is displayed in the docs
site search results, and theme/scale/direction popovers.

- Makes the adjacentText classes the default margin, allowing them to
  be removed (which fixes checkbox spacing in theme/scale popovers).
- Fixes extra top and bottom margin appearing in menu for docs
  theme/scale popovers. This was showing user agent values for top and
  bottom margin. In production, they were previously set to a popover
  padding token, which added more space than on the design (popover
  component already has padding).
- Fixes search results menu showing incorrectly because of difference in
  the JS created markup related to section headers.

- chore(menu): manual version increase for beta release

- fix(menu): spacing adjustments including divider inline margin

- Includes spacing on left and right of divider to match the same
  spacing used on left and right of menu item labels and heading.
- Remove extra padding on presentational list items used for section
  header and divider examples.
- Simplify rules for padding on sectionHeading. Default inline padding
  and remove inline padding on collapsible variant.

- feat(menu): use top to checkmark token and handle wrapping text

- Use new `spectrum-menu-item-top-to-selected-icon-*` tokens
- Handle alignment of icon and checkmark when text is wrapping, so icons
  are aligned top and not center, and stay in alignment with each other
  with use of new token.
- Updates stories to make sure edge case with selected + icon + wrapping
  text is represented.

- fix(menu): storybook - ensure long text wraps on wide screens

Wrapping text examples need a max-width on the container to ensure that
they are wrapping when stories are viewed at higher resolutions.

Also updates generated mods file.

- refactor(menu): remove two withAdjacentIcon classes

Per PR feedback, these classes appear to be no longer needed as they are
using the same token value.

- chore(menu): new beta release
- fix(menu): remove excess margin from drill-in chevron

Zero out the margin-inline-end for the chevron used at the end
of the drill-in menu items.

- chore(menu): version increase for beta release
- fix(menu): divider margin update and new tokens package version

Update divider margin-block to agree with newly added token for the
divider height. Sets minimum tokens package version to 11.0.2 where this
--spectrum-menu-item-section-divider-height token was added.

- fix(menu): use smaller divider instead of medium

Replace medium divider with small divider in examples and storybook
markup. Updates migration guide to note the change. Removes unnecessary
large divider possibility from CSS, as that should never be used here
according to divider guidelines.

- docs(menu): fix migration guide not appearing and add docs

Fix migration guide section no appearing in docs because it was named
'section' and not 'sections' in the YML.

Adds new standard section about -mod custom properties.

- chore(menu): manual version increase + update tokens dep

## 4.0.50

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.49...@spectrum-css/menu@4.0.50)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.49

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.48...@spectrum-css/menu@4.0.49)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.48

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.47...@spectrum-css/menu@4.0.48)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.47

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.46...@spectrum-css/menu@4.0.47)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.46

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.45...@spectrum-css/menu@4.0.46)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.45

🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.44...@spectrum-css/menu@4.0.45)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.44

🗓 2023-06-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.43...@spectrum-css/menu@4.0.44)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.43

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.42...@spectrum-css/menu@4.0.43)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.42

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.41...@spectrum-css/menu@4.0.42)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.41

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.40...@spectrum-css/menu@4.0.41)

### 🐛 Bug fixes

- restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

## 4.0.40

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.39...@spectrum-css/menu@4.0.40)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.39

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.38...@spectrum-css/menu@4.0.39)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.38

🗓 2023-05-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.37...@spectrum-css/menu@4.0.38)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.37

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.36...@spectrum-css/menu@4.0.37)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.36

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.35...@spectrum-css/menu@4.0.36)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.35

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.34...@spectrum-css/menu@4.0.35)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.34

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.33...@spectrum-css/menu@4.0.34)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.33

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.32...@spectrum-css/menu@4.0.33)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.32

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.31...@spectrum-css/menu@4.0.32)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.31

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.30...@spectrum-css/menu@4.0.31)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.30

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.29...@spectrum-css/menu@4.0.30)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.29

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.28...@spectrum-css/menu@4.0.29)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.28

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.27...@spectrum-css/menu@4.0.28)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.27

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.26...@spectrum-css/menu@4.0.27)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.26

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.25...@spectrum-css/menu@4.0.26)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.25

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.23...@spectrum-css/menu@4.0.25)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.24

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.23...@spectrum-css/menu@4.0.24)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.23

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.22...@spectrum-css/menu@4.0.23)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.22

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.21...@spectrum-css/menu@4.0.22)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.21

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.20...@spectrum-css/menu@4.0.21)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.20

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.19...@spectrum-css/menu@4.0.20)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.19

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.17...@spectrum-css/menu@4.0.19)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.18

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.17...@spectrum-css/menu@4.0.18)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.17

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.16...@spectrum-css/menu@4.0.17)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.16

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.15...@spectrum-css/menu@4.0.16)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.15

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.14...@spectrum-css/menu@4.0.15)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.14

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.13...@spectrum-css/menu@4.0.14)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.13

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.12...@spectrum-css/menu@4.0.13)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.12

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.11...@spectrum-css/menu@4.0.12)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.11

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.10...@spectrum-css/menu@4.0.11)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.10

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.9...@spectrum-css/menu@4.0.10)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.9

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.8...@spectrum-css/menu@4.0.9)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.8

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.6...@spectrum-css/menu@4.0.8)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.7

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.6...@spectrum-css/menu@4.0.7)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.6

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.5...@spectrum-css/menu@4.0.6)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.5

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.4...@spectrum-css/menu@4.0.5)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.4

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.3...@spectrum-css/menu@4.0.4)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.3

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.2...@spectrum-css/menu@4.0.3)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.2

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.1...@spectrum-css/menu@4.0.2)

### 🐛 Bug fixes

- menu WHCM ([feee3be](https://github.com/adobe/spectrum-css/commit/feee3be))

## 4.0.1

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.0...@spectrum-css/menu@4.0.1)

**Note:** Version bump only for package @spectrum-css/menu

## 4.0.0

🗓 2022-04-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.21...@spectrum-css/menu@4.0.0)

### 🐛 Bug fixes

- added margin back for dividers in menu ([e4feb9a](https://github.com/adobe/spectrum-css/commit/e4feb9a))

- fix!: use divider component in menu, closes #1371 ([5c901f1](https://github.com/adobe/spectrum-css/commit/5c901f1)), closes [#1371](https://github.com/adobe/spectrum-css/issues/1371)

### 🛑 BREAKING CHANGE

- Add `.spectrum-Divider` and `spectrum-Divider--sizeM` classes to `spectrum-Menu-divider`

## 3.0.21

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.20...@spectrum-css/menu@3.0.21)

**Note:** Version bump only for package @spectrum-css/menu

## 3.0.20

🗓 2022-03-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.19...@spectrum-css/menu@3.0.20)

**Note:** Version bump only for package @spectrum-css/menu

## 3.0.19

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.18...@spectrum-css/menu@3.0.19)

**Note:** Version bump only for package @spectrum-css/menu

## 3.0.18

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.17...@spectrum-css/menu@3.0.18)

**Note:** Version bump only for package @spectrum-css/menu

## 3.0.17

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.16...@spectrum-css/menu@3.0.17)

**Note:** Version bump only for package @spectrum-css/menu

## 3.0.16

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.15...@spectrum-css/menu@3.0.16)

**Note:** Version bump only for package @spectrum-css/menu

## 3.0.15

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.14...@spectrum-css/menu@3.0.15)

**Note:** Version bump only for package @spectrum-css/menu

## 3.0.14

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.13...@spectrum-css/menu@3.0.14)

**Note:** Version bump only for package @spectrum-css/menu

## 3.0.13

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.12...@spectrum-css/menu@3.0.13)

**Note:** Version bump only for package @spectrum-css/menu

## 3.0.12

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.10...@spectrum-css/menu@3.0.12)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

## 3.0.11

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.100...@spectrum-css/menu@3.0.11)

**Note:** Version bump only for package @spectrum-css/menu

## 3.0.10

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.9...@spectrum-css/menu@3.0.10)

**Note:** Version bump only for package @spectrum-css/menu

## 3.0.9

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.8...@spectrum-css/menu@3.0.9)

**Note:** Version bump only for package @spectrum-css/menu

## 3.0.8

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.7...@spectrum-css/menu@3.0.8)

**Note:** Version bump only for package @spectrum-css/menu

## 3.0.7

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.6...@spectrum-css/menu@3.0.7)

**Note:** Version bump only for package @spectrum-css/menu

## 3.0.6

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.4...@spectrum-css/menu@3.0.6)

**Note:** Version bump only for package @spectrum-css/menu

## 3.0.5

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.4...@spectrum-css/menu@3.0.5)

**Note:** Version bump only for package @spectrum-css/menu

## 3.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.2...@spectrum-css/menu@3.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.1...@spectrum-css/menu@3.0.2)

**Note:** Version bump only for package @spectrum-css/menu

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.0...@spectrum-css/menu@3.0.1)

**Note:** Version bump only for package @spectrum-css/menu

## 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@2.1.5...@spectrum-css/menu@3.0.0)

### 🐛 Bug fixes

- correct Menu icon gap ([e68bc31](https://github.com/adobe/spectrum-css/commit/e68bc31))
- correct Menu left padding ([1ea92ac](https://github.com/adobe/spectrum-css/commit/1ea92ac))
- make Menu work again ([35d1302](https://github.com/adobe/spectrum-css/commit/35d1302))
- update main, resolved conflicts ([d7880a2](https://github.com/adobe/spectrum-css/commit/d7880a2))
- change workflow icon size to medium for most of the examples ([#962](https://github.com/adobe/spectrum-css/issues/962)) ([db7b8b2](https://github.com/adobe/spectrum-css/commit/db7b8b2))
- replacing deprecated tokens from menu ([6281862](https://github.com/adobe/spectrum-css/commit/6281862))
- wip fix more components ([b74dbb8](https://github.com/adobe/spectrum-css/commit/b74dbb8))

### ✨ Features

- make Menu support RTL ([1d3391b](https://github.com/adobe/spectrum-css/commit/1d3391b))

## 2.1.5

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@2.1.4...@spectrum-css/menu@2.1.5)

**Note:** Version bump only for package @spectrum-css/menu

## 2.1.4

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@2.1.3...@spectrum-css/menu@2.1.4)

**Note:** Version bump only for package @spectrum-css/menu

## 2.1.3

🗓 2020-01-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@2.1.2...@spectrum-css/menu@2.1.3)

### 🐛 Bug fixes

- make Menu items wrap correctly, fixes [#451](https://github.com/adobe/spectrum-css/issues/451) ([#482](https://github.com/adobe/spectrum-css/issues/482)) ([03208af](https://github.com/adobe/spectrum-css/commit/03208af))

## 2.1.2

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@2.1.1...@spectrum-css/menu@2.1.2)

### 🐛 Bug fixes

- wrapping on long words in dropdowns, fixes [#451](https://github.com/adobe/spectrum-css/issues/451) ([#452](https://github.com/adobe/spectrum-css/issues/452)) ([8bb2d5b](https://github.com/adobe/spectrum-css/commit/8bb2d5b))

## 2.1.1

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@2.1.0...@spectrum-css/menu@2.1.1)

**Note:** Version bump only for package @spectrum-css/menu

## 2.1.0

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@2.0.0...@spectrum-css/menu@2.1.0)

### ✨ Features

- add menu icon class, closes [#202](https://github.com/adobe/spectrum-css/issues/202) ([#331](https://github.com/adobe/spectrum-css/issues/331)) ([169940a](https://github.com/adobe/spectrum-css/commit/169940a))

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
