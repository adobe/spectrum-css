# Change log

## 8.1.3

### Patch Changes

📝 [#4088](https://github.com/adobe/spectrum-css/pull/4088) [`24d75bf`](https://github.com/adobe/spectrum-css/commit/24d75bfe4d8e627f9d8e019ae379bdd4787712dd) Thanks [@castastrophe](https://github.com/castastrophe)!

Minor linting fix of replacing `rgba` to the `rgb` shorthand syntax.

## 8.1.2

### Patch Changes

📝 [#3575](https://github.com/adobe/spectrum-css/pull/3575) [`2e17d10`](https://github.com/adobe/spectrum-css/commit/2e17d109ebec3c2745c32a15840af5c636c8dc5d) Thanks [@TarunAdobe](https://github.com/TarunAdobe)!

- Reverts all themes' disabled icon color back to original spectrum-white and border color to black with opacity token `swatch-disabled-icon-border-opacity`.

## 8.1.1

### Patch Changes

📝 [#3547](https://github.com/adobe/spectrum-css/pull/3547) [`45f110c`](https://github.com/adobe/spectrum-css/commit/45f110cbca47e245236bf4316593b0a5b1312241) Thanks [@rise-erpelding](https://github.com/rise-erpelding)!

- Reverts all themes' disabled icon color back to original spectrum-white and border color to black with opacity token `swatch-disabled-icon-border-opacity`.

## 8.1.0

### Minor Changes

📝 [`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee) Thanks [@castastrophe](https://github.com/castastrophe)!

## New feature

Minified and gzipped outputs available for all compiled CSS assets.

### Patch Changes

📝 [#3541](https://github.com/adobe/spectrum-css/pull/3541) [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d) Thanks [@castastrophe](https://github.com/castastrophe)!

Dependency alignment across the project.

📝 [#3543](https://github.com/adobe/spectrum-css/pull/3543) [`7bd5e4b`](https://github.com/adobe/spectrum-css/commit/7bd5e4be4fcd9de7b09f1d90bc590b0af35faee0) Thanks [@rise-erpelding](https://github.com/rise-erpelding)!

- Adjust S2 corner rounding to match S2 spec.

- Updated dependencies [[`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee), [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d)]:
  - @spectrum-css/opacitycheckerboard@4.1.0
  - @spectrum-css/tokens@16.0.1

## 8.0.1

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
  - @spectrum-css/opacitycheckerboard@4.0.1

## 8.0.0

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
  - @spectrum-css/opacitycheckerboard@4.0.0

## 7.0.1

### Patch Changes

📝 [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)!

- Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/opacitycheckerboard@3.0.1

## 7.0.0

### Major Changes

📝 [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove empty theme references to reduce complexity for components that don't need to define any mappings. This involves removing the source `themes` directories with the empty `spectrum.css` and `express.com` files as well as removing the following empty or unnecessary exports:
  - `index-base.css`
  - `index-theme.css`
  - `themes/spectrum.css`
  - `themes/express.css`

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/opacitycheckerboard@3.0.0

## 6.4.1

### Patch Changes

📝 [#3441](https://github.com/adobe/spectrum-css/pull/3441) [`dc1f06e`](https://github.com/adobe/spectrum-css/commit/dc1f06e9ce504864ae044db14d7a9a17064683cd) Thanks [@castastrophe](https://github.com/castastrophe)!

- Allow --spectrum-picked-color to pass in gradient values to swatch [CSS-204]

## 6.4.0

### Minor Changes

📝 [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/opacitycheckerboard@2.2.0

## 6.3.0

### Minor Changes

📝 [#3253](https://github.com/adobe/spectrum-css/pull/3253) [`47f23a7`](https://github.com/adobe/spectrum-css/commit/47f23a762a5c84ffe3c82e7e1b0c4c9d5dc60f86) Thanks [@castastrophe](https://github.com/castastrophe)!

- This update removes tokens defined locally that belonged in the global scope. To ensure no regressions, please upgrade your @spectrum-css/tokens package at the same time so you will pick up the component-level definitions now in the global tokens scope. References to `.spectrum--(light|dark|darkest|medium|large)` have been removed.

### Patch Changes

- Updated dependencies [[`47f23a7`](https://github.com/adobe/spectrum-css/commit/47f23a762a5c84ffe3c82e7e1b0c4c9d5dc60f86)]:
  - @spectrum-css/tokens@14.5.0

## 6.2.2

### Patch Changes

📝 [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)!

- Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/opacitycheckerboard@2.1.3

## 6.2.1

### Patch Changes

📝 [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)!

- Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/opacitycheckerboard@2.1.2

## 6.2.0

### Minor Changes

📝 [#2954](https://github.com/adobe/spectrum-css/pull/2954) [`2d89227`](https://github.com/adobe/spectrum-css/commit/2d892277adbc1d8d5598bdf85130d3499fd31e13) Thanks [@marissahuysentruyt](https://github.com/marissahuysentruyt)!

- Reimplements support for the `spectrum-Swatch--lightBorder` class for swatches specifically in a swatch group.

## 6.1.1

### Patch Changes

📝 [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)!

- Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/opacitycheckerboard@2.1.1

## 6.1.0

### Minor Changes

📝 [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/opacitycheckerboard@>=2
  - @spectrum-css/tokens@>=14

## 6.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.1.5...@spectrum-css/swatch@6.0.0)

- feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGE

- Removes component-builder & component-builder-simple for script leveraging postcss
- Imports added to index.css and themes/express.css

## 5.1.5

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.1.4...@spectrum-css/swatch@5.1.5)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.1.4

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.1.3...@spectrum-css/swatch@5.1.4)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.1.3

🗓 2024-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.1.2...@spectrum-css/swatch@5.1.3)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.1.2

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.1.1...@spectrum-css/swatch@5.1.2)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.1.1

🗓 2024-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.1.0...@spectrum-css/swatch@5.1.1)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.1.0

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.0.22...@spectrum-css/swatch@5.1.0)

### ✨ Features

- remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))
- **swatch:** correct markup ([#2399](https://github.com/adobe/spectrum-css/issues/2399))([3edd7cc](https://github.com/adobe/spectrum-css/commit/3edd7cc))
- **swatch:** icons use display instead of visibility([569bd2e](https://github.com/adobe/spectrum-css/commit/569bd2e))

## 5.0.22

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.0.21...@spectrum-css/swatch@5.0.22)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.0.21

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.0.20...@spectrum-css/swatch@5.0.21)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.0.20

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.0.19...@spectrum-css/swatch@5.0.20)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.0.19

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.0.18...@spectrum-css/swatch@5.0.19)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.0.18

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.0.17...@spectrum-css/swatch@5.0.18)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.0.17

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.0.16...@spectrum-css/swatch@5.0.17)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.0.16

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.0.15...@spectrum-css/swatch@5.0.16)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.0.15

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.0.14...@spectrum-css/swatch@5.0.15)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.0.14

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.0.13...@spectrum-css/swatch@5.0.14)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.0.13

🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.0.12...@spectrum-css/swatch@5.0.13)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.0.12

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.0.11...@spectrum-css/swatch@5.0.12)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.0.11

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.0.10...@spectrum-css/swatch@5.0.11)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.0.10

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.0.9...@spectrum-css/swatch@5.0.10)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.0.9

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.0.8...@spectrum-css/swatch@5.0.9)

### 🔙 Reverts

- gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

## 5.0.8

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.0.7...@spectrum-css/swatch@5.0.8)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.0.7

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.0.5...@spectrum-css/swatch@5.0.7)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.0.6

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.0.5...@spectrum-css/swatch@5.0.6)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.0.5

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.0.4...@spectrum-css/swatch@5.0.5)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.0.4

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.0.3...@spectrum-css/swatch@5.0.4)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.0.3

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.0.2...@spectrum-css/swatch@5.0.3)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.0.2

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.0.1...@spectrum-css/swatch@5.0.2)

### 🐛 Bug fixes

- **opacitycheckboard:** add to component stories ([#2056](https://github.com/adobe/spectrum-css/issues/2056))([a1411f6](https://github.com/adobe/spectrum-css/commit/a1411f6))

## 5.0.1

🗓 2023-07-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@5.0.0...@spectrum-css/swatch@5.0.1)

**Note:** Version bump only for package @spectrum-css/swatch

## 5.0.0

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.31...@spectrum-css/swatch@5.0.0)

- feat(opacitycheckerboard)!: new component (#1916)([24e9f06](https://github.com/adobe/spectrum-css/commit/24e9f06)), closes[#1916](https://github.com/adobe/spectrum-css/issues/1916)

### 🛑 BREAKING CHANGE

- creates new Opacity Checkerboard component and uses it within Swatch, Color Handle, Thumbnail, Color Slider.

- feat(opacitycheckerboard): adds tokens
- feat(opacitycheckerboard): use in swatch
- feat(opacitycheckerboard): use in colorhandle
- feat(opacitycheckerboard): use in colorslider
- feat(opacitycheckerboard): use in thumbnail
- feat(opacitycheckerboard): adds color variant
- feat(opacitycheckerboard): adds stories
- chore(opacitycheckerboard): whcm show checkerboard
- chore(opacitycheckerboard): removes thumbnail border fix
- fix(opacitycheckerboard): removes example classes
- chore(opacitycheckerboard): add mods
- fix(opacitycheckerboard): add inline styling to storybook
- chore(opacitycheckerboard): use stylemaps
- feat(opacitycheckerboard): use in color slider full example

## 4.0.31

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.30...@spectrum-css/swatch@4.0.31)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.30

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.29...@spectrum-css/swatch@4.0.30)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.29

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.28...@spectrum-css/swatch@4.0.29)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.28

🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.27...@spectrum-css/swatch@4.0.28)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.27

🗓 2023-06-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.26...@spectrum-css/swatch@4.0.27)

### 🐛 Bug fixes

- **swatch:** specify forced-color style for disabled swatch borders ([#1980](https://github.com/adobe/spectrum-css/issues/1980))([ef6c016](https://github.com/adobe/spectrum-css/commit/ef6c016))

## 4.0.26

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.25...@spectrum-css/swatch@4.0.26)

### 🐛 Bug fixes

- **swatch:** remove override in WHCM for disabled swatch ([#1955](https://github.com/adobe/spectrum-css/issues/1955))([9492040](https://github.com/adobe/spectrum-css/commit/9492040))

## 4.0.25

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.24...@spectrum-css/swatch@4.0.25)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.24

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.23...@spectrum-css/swatch@4.0.24)

### 🐛 Bug fixes

- restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

## 4.0.23

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.22...@spectrum-css/swatch@4.0.23)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.22

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.21...@spectrum-css/swatch@4.0.22)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.21

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.20...@spectrum-css/swatch@4.0.21)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.20

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.19...@spectrum-css/swatch@4.0.20)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.19

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.18...@spectrum-css/swatch@4.0.19)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.18

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.17...@spectrum-css/swatch@4.0.18)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.17

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.16...@spectrum-css/swatch@4.0.17)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.16

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.15...@spectrum-css/swatch@4.0.16)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.15

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.14...@spectrum-css/swatch@4.0.15)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.14

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.13...@spectrum-css/swatch@4.0.14)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.13

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.12...@spectrum-css/swatch@4.0.13)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.12

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.11...@spectrum-css/swatch@4.0.12)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.11

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.10...@spectrum-css/swatch@4.0.11)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.10

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.8...@spectrum-css/swatch@4.0.10)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.9

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.8...@spectrum-css/swatch@4.0.9)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.8

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.7...@spectrum-css/swatch@4.0.8)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.7

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.6...@spectrum-css/swatch@4.0.7)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.6

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.5...@spectrum-css/swatch@4.0.6)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.5

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.4...@spectrum-css/swatch@4.0.5)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.4

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.2...@spectrum-css/swatch@4.0.4)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.3

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.2...@spectrum-css/swatch@4.0.3)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.2

🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.0...@spectrum-css/swatch@4.0.2)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.1

🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@4.0.0...@spectrum-css/swatch@4.0.1)

**Note:** Version bump only for package @spectrum-css/swatch

## 4.0.0

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@3.0.21...@spectrum-css/swatch@4.0.0)

- fix(tokens)!: rgb transform to split out rgb values from css attributes (#1590) ([b714db4](https://github.com/adobe/spectrum-css/commit/b714db4)), closes [#1590](https://github.com/adobe/spectrum-css/issues/1590)

### 🛑 BREAKING CHANGE

- transforms color tokens to split out their `rgb` values

Co-authored-by: castastrophe <castastrophe@users.noreply.github.com>

## 3.0.21

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@3.0.20...@spectrum-css/swatch@3.0.21)

**Note:** Version bump only for package @spectrum-css/swatch

## 3.0.20

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@3.0.19...@spectrum-css/swatch@3.0.20)

**Note:** Version bump only for package @spectrum-css/swatch

## 3.0.19

🗓 2023-03-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@3.0.18...@spectrum-css/swatch@3.0.19)

**Note:** Version bump only for package @spectrum-css/swatch

## 3.0.18

🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@3.0.17...@spectrum-css/swatch@3.0.18)

**Note:** Version bump only for package @spectrum-css/swatch

## 3.0.17

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@3.0.16...@spectrum-css/swatch@3.0.17)

**Note:** Version bump only for package @spectrum-css/swatch

## 3.0.16

🗓 2023-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@3.0.15...@spectrum-css/swatch@3.0.16)

**Note:** Version bump only for package @spectrum-css/swatch

## 3.0.15

🗓 2023-03-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@3.0.14...@spectrum-css/swatch@3.0.15)

**Note:** Version bump only for package @spectrum-css/swatch

## 3.0.14

🗓 2023-02-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@3.0.13...@spectrum-css/swatch@3.0.14)

**Note:** Version bump only for package @spectrum-css/swatch

## 3.0.13

🗓 2023-02-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@3.0.12...@spectrum-css/swatch@3.0.13)

**Note:** Version bump only for package @spectrum-css/swatch

## 3.0.12

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@3.0.11...@spectrum-css/swatch@3.0.12)

**Note:** Version bump only for package @spectrum-css/swatch

## 3.0.11

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@3.0.10...@spectrum-css/swatch@3.0.11)

**Note:** Version bump only for package @spectrum-css/swatch

## 3.0.10

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@3.0.9...@spectrum-css/swatch@3.0.10)

**Note:** Version bump only for package @spectrum-css/swatch

## 3.0.9

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@3.0.8...@spectrum-css/swatch@3.0.9)

**Note:** Version bump only for package @spectrum-css/swatch

## 3.0.8

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@3.0.7...@spectrum-css/swatch@3.0.8)

**Note:** Version bump only for package @spectrum-css/swatch

## 3.0.7

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@3.0.6...@spectrum-css/swatch@3.0.7)

**Note:** Version bump only for package @spectrum-css/swatch

## 3.0.6

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@3.0.4...@spectrum-css/swatch@3.0.6)

**Note:** Version bump only for package @spectrum-css/swatch

## 3.0.5

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@3.0.4...@spectrum-css/swatch@3.0.5)

**Note:** Version bump only for package @spectrum-css/swatch

## 3.0.4

🗓 2023-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@3.0.3...@spectrum-css/swatch@3.0.4)

**Note:** Version bump only for package @spectrum-css/swatch

## 3.0.3

🗓 2022-12-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@3.0.2...@spectrum-css/swatch@3.0.3)

**Note:** Version bump only for package @spectrum-css/swatch

## 3.0.2

🗓 2022-12-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@3.0.1...@spectrum-css/swatch@3.0.2)

**Note:** Version bump only for package @spectrum-css/swatch

## 3.0.1

🗓 2022-11-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@3.0.0...@spectrum-css/swatch@3.0.1)

**Note:** Version bump only for package @spectrum-css/swatch

## 3.0.0

🗓 2022-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@2.0.0...@spectrum-css/swatch@3.0.0)

- refactor(swatch)!: remap core token aliases & rename aliases ([32df3c9](https://github.com/adobe/spectrum-css/commit/32df3c9))

### 🛑 BREAKING CHANGE

- remaps existing aliases to new/renamed core token values

- `--spectrum-focus-ring-color` renamed to `--spectrum-focus-indicator-color`
- `--spectrum-focus-ring-thickness` renamed to `--spectrum-focus-indicator-thickness`
- `--spectrum-focus-ring-gap` renamed to `--spectrum-focus-indicator-gap`

## 2.0.0

🗓 2022-10-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@1.1.4...@spectrum-css/swatch@2.0.0)

- feat(swatch)!: migrate swatch to core tokens (#1501) ([47b5ec9](https://github.com/adobe/spectrum-css/commit/47b5ec9)), closes [#1501](https://github.com/adobe/spectrum-css/issues/1501)

### 🛑 BREAKING CHANGE

- migrates Swatch to core tokens

Co-authored-by: Patrick Fulton <pfulton@adobe.com>

## 1.1.4

🗓 2022-07-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@1.1.3...@spectrum-css/swatch@1.1.4)

### 🐛 Bug fixes

- swatch high contrast support ([966db0a](https://github.com/adobe/spectrum-css/commit/966db0a))

## 1.1.3

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@1.1.2...@spectrum-css/swatch@1.1.3)

**Note:** Version bump only for package @spectrum-css/swatch

## 1.1.2

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@1.1.1...@spectrum-css/swatch@1.1.2)

**Note:** Version bump only for package @spectrum-css/swatch

## 1.1.1

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/swatch@1.1.0...@spectrum-css/swatch@1.1.1)

**Note:** Version bump only for package @spectrum-css/swatch

## 1.1.0

🗓 2022-04-08

### ✨ Features

- add docs, let stroke/fill of disabled icon be customizable ([94510d0](https://github.com/adobe/spectrum-css/commit/94510d0))
- add more size examples ([eee3fff](https://github.com/adobe/spectrum-css/commit/eee3fff))
- add support for lightBorder, docs for usage in Swatch Group ([cb44131](https://github.com/adobe/spectrum-css/commit/cb44131))
- big progess on swatch ([ce33834](https://github.com/adobe/spectrum-css/commit/ce33834))
- implement is-nothing ([129bfc6](https://github.com/adobe/spectrum-css/commit/129bfc6))
- start on swatch ([4d419c2](https://github.com/adobe/spectrum-css/commit/4d419c2))

### 🐛 Bug fixes

- alignment of checkerboard, XS disabled icon size ([9239f5e](https://github.com/adobe/spectrum-css/commit/9239f5e))
- checkerboard on dark mode ([fb3b698](https://github.com/adobe/spectrum-css/commit/fb3b698))
- corner radius selected ([b8737b7](https://github.com/adobe/spectrum-css/commit/b8737b7))
- correct disabled icon stroke color ([837b392](https://github.com/adobe/spectrum-css/commit/837b392))
- draw border over swatch contents ([a5041d3](https://github.com/adobe/spectrum-css/commit/a5041d3))
- use a 12px disabled icon for XS ([d0634cc](https://github.com/adobe/spectrum-css/commit/d0634cc))
