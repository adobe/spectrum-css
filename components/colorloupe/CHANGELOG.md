# Change log

## 7.1.0

### Minor Changes

- [`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee) Thanks [@castastrophe](https://github.com/castastrophe)!

## New feature

Minified and gzipped outputs available for all compiled CSS assets.

### Patch Changes

- [#3541](https://github.com/adobe/spectrum-css/pull/3541) [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d) Thanks [@castastrophe](https://github.com/castastrophe)!

Dependency alignment across the project.

- Updated dependencies [[`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d)]:
  - @spectrum-css/tokens@16.0.1

## 7.0.1

### Patch Changes

- [#3534](https://github.com/adobe/spectrum-css/pull/3534) [`68e0057`](https://github.com/adobe/spectrum-css/commit/68e00577156cc32b21bfa768dbd2d35d73563b4c) Thanks [@castastrophe](https://github.com/castastrophe)!

Fixes a bug in the content of the `dist/index-theme.css` file.

Expected `index-theme.css` to include the component selectors with component-level custom properties mapped to the `--system` prefixed ones in order to allow a component to support various contexts.

Expected output example for the index-theme.css:

```css
.spectrum-ActionButton {
  --spectrum-actionbutton-background-color-default: var(--system-action-button-background-color-default);
  --spectrum-actionbutton-background-color-hover: var(--system-action-button-background-color-hover);
```

## 7.0.0

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6) Thanks [@pfulton](https://github.com/pfulton)!

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

- Updated dependencies [[`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6), [`3d08cea`](https://github.com/adobe/spectrum-css/commit/3d08cea0f590c8c2de7252677a6b81b8cc206b9a)]:
  - @spectrum-css/tokens@16.0.0

## 6.0.1

### Patch Changes

- [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)!

- Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0

## 6.0.0

### Major Changes

- [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)!

Remove empty theme references to reduce complexity for components that don't need to define any mappings. This involves removing the source `themes` directories with the empty `spectrum.css` and `express.com` files as well as removing the following empty or unnecessary exports:

- `index-base.css`
- `index-theme.css`
- `themes/spectrum.css`
- `themes/express.css`

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b)]:
  - @spectrum-css/tokens@15.1.0

## 5.3.0

### Minor Changes

- [#3453](https://github.com/adobe/spectrum-css/pull/3453) [`8d2d269`](https://github.com/adobe/spectrum-css/commit/8d2d269a657116d48d9c13d83b76c289f4ac3e8b) Thanks [@marissahuysentruyt](https://github.com/marissahuysentruyt)!

- Color loupes should not be displayed when their color handle is disabled, so this work adds the `.is-disabled` selector to color loupe's CSS, with `opacity: 0`.

## 5.2.0

### Minor Changes

- [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove the storybook assets from the shipped output for components

## 5.1.4

### Patch Changes

- [#3272](https://github.com/adobe/spectrum-css/pull/3272) [`a354b16`](https://github.com/adobe/spectrum-css/commit/a354b166727fb34b17300bcd3a6118a00034e344) Thanks [@cdransf](https://github.com/cdransf)!

- Disables lint violation and moves comment to stylelint-disable description.

## 5.1.3

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)!

- Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

## 5.1.2

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)!

- Improve changeset suggestions by using exports instead of files in component packages

## 5.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)!

- Leveral local workspace versioning to prevent misalignment

## 5.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/tokens@>=14

## 5.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.2.4...@spectrum-css/colorloupe@5.0.0)

- feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGES

- Removes component-builder & component-builder-simple for script leveraging postcss
- Imports added to index.css and themes/express.css

## 4.2.4

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.2.3...@spectrum-css/colorloupe@4.2.4)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.2.3

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.2.2...@spectrum-css/colorloupe@4.2.3)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.2.2

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.2.1...@spectrum-css/colorloupe@4.2.2)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.2.1

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.2.0

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.28...@spectrum-css/colorloupe@4.2.0)

### ✨ Features

- remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

## 4.1.28

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.27...@spectrum-css/colorloupe@4.1.28)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.27

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.26...@spectrum-css/colorloupe@4.1.27)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.26

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.24...@spectrum-css/colorloupe@4.1.26)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.25

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.24...@spectrum-css/colorloupe@4.1.25)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.24

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.23...@spectrum-css/colorloupe@4.1.24)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.23

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.22...@spectrum-css/colorloupe@4.1.23)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.22

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.21...@spectrum-css/colorloupe@4.1.22)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.21

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.20...@spectrum-css/colorloupe@4.1.21)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.20

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.19...@spectrum-css/colorloupe@4.1.20)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.19

🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.18...@spectrum-css/colorloupe@4.1.19)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.18

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.17...@spectrum-css/colorloupe@4.1.18)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.17

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.16...@spectrum-css/colorloupe@4.1.17)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.16

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.15...@spectrum-css/colorloupe@4.1.16)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.15

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.14...@spectrum-css/colorloupe@4.1.15)

### 🔙 Reverts

- gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

## 4.1.14

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.13...@spectrum-css/colorloupe@4.1.14)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.13

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.11...@spectrum-css/colorloupe@4.1.13)
**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.12

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.11...@spectrum-css/colorloupe@4.1.12)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.11

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.10...@spectrum-css/colorloupe@4.1.11)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.10

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.9...@spectrum-css/colorloupe@4.1.10)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.9

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.8...@spectrum-css/colorloupe@4.1.9)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.8

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.7...@spectrum-css/colorloupe@4.1.8)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.7

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.6...@spectrum-css/colorloupe@4.1.7)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.6

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.5...@spectrum-css/colorloupe@4.1.6)
**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.5

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.4...@spectrum-css/colorloupe@4.1.5)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.4

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.3...@spectrum-css/colorloupe@4.1.4)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.3

🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.2...@spectrum-css/colorloupe@4.1.3)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.2

🗓 2023-06-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.1...@spectrum-css/colorloupe@4.1.2)

### 🐛 Bug fixes

- **colorloupe:**border bug ([#1958](https://github.com/adobe/spectrum-css/issues/1958))([559696f](https://github.com/adobe/spectrum-css/commit/559696f))

## 4.1.1

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.1.0...@spectrum-css/colorloupe@4.1.1)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.1.0

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.0.8...@spectrum-css/colorloupe@4.1.0)

### ✨ Features

- update to Storybook v7 ([#1935](https://github.com/adobe/spectrum-css/issues/1935))([6dcf09b](https://github.com/adobe/spectrum-css/commit/6dcf09b))

## 4.0.8

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.0.7...@spectrum-css/colorloupe@4.0.8)

### 🐛 Bug fixes

- restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

## 4.0.7

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.0.6...@spectrum-css/colorloupe@4.0.7)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.0.6

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.0.5...@spectrum-css/colorloupe@4.0.6)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.0.5

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.0.4...@spectrum-css/colorloupe@4.0.5)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.0.4

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.0.3...@spectrum-css/colorloupe@4.0.4)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.0.3

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.0.2...@spectrum-css/colorloupe@4.0.3)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.0.2

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.0.1...@spectrum-css/colorloupe@4.0.2)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.0.1

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@4.0.0...@spectrum-css/colorloupe@4.0.1)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 4.0.0

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@3.0.11...@spectrum-css/colorloupe@4.0.0)

- chore(colorhandle, colorloupe, tokens)!: remove custom tokens (#1826) ([c41af3a](https://github.com/adobe/spectrum-css/commit/c41af3a)), closes [#1826](https://github.com/adobe/spectrum-css/issues/1826)

### 🛑 BREAKING CHANGES

- removes several Color-component related tokens from `@spectrum-css/tokens`

- chore(colorhandle): remove custom tokens
- chore(colorhandle): remove use of custom tokens
- chore(colorloupe): update tokens for colorloupe
- chore(colorhandle, colorloupe): remove comments

## 3.0.11

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@3.0.10...@spectrum-css/colorloupe@3.0.11)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 3.0.10

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@3.0.9...@spectrum-css/colorloupe@3.0.10)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 3.0.9

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@3.0.8...@spectrum-css/colorloupe@3.0.9)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 3.0.8

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@3.0.7...@spectrum-css/colorloupe@3.0.8)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 3.0.7

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@3.0.6...@spectrum-css/colorloupe@3.0.7)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 3.0.6

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@3.0.4...@spectrum-css/colorloupe@3.0.6)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 3.0.5

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@3.0.4...@spectrum-css/colorloupe@3.0.5)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 3.0.4

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@3.0.3...@spectrum-css/colorloupe@3.0.4)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 3.0.3

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@3.0.2...@spectrum-css/colorloupe@3.0.3)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 3.0.2

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@3.0.1...@spectrum-css/colorloupe@3.0.2)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 3.0.1

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@3.0.0...@spectrum-css/colorloupe@3.0.1)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 3.0.0

🗓 2023-04-19 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.20...@spectrum-css/colorloupe@3.0.0)

- feat(colorloupe, colorhandle)!: migrate to core tokens (#1753) ([c72f147](https://github.com/adobe/spectrum-css/commit/c72f147)), closes [#1753](https://github.com/adobe/spectrum-css/issues/1753)

### 🛑 BREAKING CHANGES

- migrates both the ColorLoupe and ColorHandle components to `@adobe/spectrum-tokens`

## 2.0.20

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.18...@spectrum-css/colorloupe@2.0.20)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 2.0.19

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.18...@spectrum-css/colorloupe@2.0.19)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 2.0.18

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.17...@spectrum-css/colorloupe@2.0.18)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 2.0.17

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.16...@spectrum-css/colorloupe@2.0.17)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 2.0.16

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.15...@spectrum-css/colorloupe@2.0.16)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 2.0.15

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.14...@spectrum-css/colorloupe@2.0.15)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 2.0.14

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.13...@spectrum-css/colorloupe@2.0.14)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 2.0.13

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.12...@spectrum-css/colorloupe@2.0.13)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 2.0.12

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.11...@spectrum-css/colorloupe@2.0.12)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 2.0.11

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.9...@spectrum-css/colorloupe@2.0.11)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 2.0.10

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.9...@spectrum-css/colorloupe@2.0.10)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 2.0.9

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.8...@spectrum-css/colorloupe@2.0.9)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 2.0.8

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.7...@spectrum-css/colorloupe@2.0.8)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 2.0.7

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.6...@spectrum-css/colorloupe@2.0.7)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 2.0.6

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.5...@spectrum-css/colorloupe@2.0.6)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 2.0.5

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.4...@spectrum-css/colorloupe@2.0.5)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 2.0.4

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.3...@spectrum-css/colorloupe@2.0.4)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 2.0.3

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.2...@spectrum-css/colorloupe@2.0.3)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 2.0.2

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.1...@spectrum-css/colorloupe@2.0.2)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 2.0.1

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@2.0.0...@spectrum-css/colorloupe@2.0.1)

### 🐛 Bug fixes

- correct loupe outer ([fd9f01c](https://github.com/adobe/spectrum-css/commit/fd9f01c))

## 2.0.0

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.13...@spectrum-css/colorloupe@2.0.0)

### ✨ Features

- add checkerboard for Spectrum ([ec1feaf](https://github.com/adobe/spectrum-css/commit/ec1feaf))
- combine Express and Spectrum SVGs, toggle visibility with vars ([84f4b8b](https://github.com/adobe/spectrum-css/commit/84f4b8b))
- prepare for switcher ([896e1b3](https://github.com/adobe/spectrum-css/commit/896e1b3))
- remove the need to add define hacks ([8c76829](https://github.com/adobe/spectrum-css/commit/8c76829))
- start on Express color loupe ([007bae2](https://github.com/adobe/spectrum-css/commit/007bae2))
- use --spectrum-picked-color for everything ([62e6469](https://github.com/adobe/spectrum-css/commit/62e6469))

### 🐛 Bug fixes

- add shadow for Spectrum, leave room for shadow ([13f579e](https://github.com/adobe/spectrum-css/commit/13f579e))
- center the points of the loupes within their bounding boxes ([9a2a414](https://github.com/adobe/spectrum-css/commit/9a2a414))
- correct checkerboard background color ([dc6c297](https://github.com/adobe/spectrum-css/commit/dc6c297))
- correct checkerboard color, stroke around edges of loupe ([c327261](https://github.com/adobe/spectrum-css/commit/c327261))
- correct markup ([9241121](https://github.com/adobe/spectrum-css/commit/9241121))
- give the Spectrum loupe a stroke ([486b079](https://github.com/adobe/spectrum-css/commit/486b079))

### 📚 Documentation

- add docs for --spectrum-loupe-color ([35704e2](https://github.com/adobe/spectrum-css/commit/35704e2))

### 🛑 BREAKING CHANGES

- You must define --spectrum-picked-color instead of setting background-color
- ColorLoupe now uses --spectrum-loupe-color to set the selected color

## 1.0.13

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.12...@spectrum-css/colorloupe@1.0.13)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 1.0.12

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.11...@spectrum-css/colorloupe@1.0.12)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 1.0.11

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.9...@spectrum-css/colorloupe@1.0.11)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

## 1.0.10

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.9...@spectrum-css/colorloupe@1.0.10)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 1.0.9

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.8...@spectrum-css/colorloupe@1.0.9)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 1.0.8

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.7...@spectrum-css/colorloupe@1.0.8)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 1.0.7

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.6...@spectrum-css/colorloupe@1.0.7)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 1.0.6

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.5...@spectrum-css/colorloupe@1.0.6)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 1.0.5

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.4...@spectrum-css/colorloupe@1.0.5)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

## 1.0.4

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.3...@spectrum-css/colorloupe@1.0.4)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

## 1.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.2...@spectrum-css/colorloupe@1.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

## 1.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.1...@spectrum-css/colorloupe@1.0.2)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 1.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorloupe@1.0.0...@spectrum-css/colorloupe@1.0.1)

**Note:** Version bump only for package @spectrum-css/colorloupe

## 1.0.0

🗓 2021-02-02

- Color Handle/Slider/Area/Wheel ([#673](https://github.com/adobe/spectrum-css/issues/673)) ([bcd2bf1](https://github.com/adobe/spectrum-css/commit/bcd2bf1))
- support high contrast mode in color components ([d4c05cb](https://github.com/adobe/spectrum-css/commit/d4c05cb))
