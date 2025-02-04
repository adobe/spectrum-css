# Change Log

## 4.0.1

### Patch Changes

- [#3534](https://github.com/adobe/spectrum-css/pull/3534) [`68e0057`](https://github.com/adobe/spectrum-css/commit/68e00577156cc32b21bfa768dbd2d35d73563b4c) Thanks [@castastrophe](https://github.com/castastrophe)! - Fixes a bug in the content of the `dist/index-theme.css` file.

  Expected `index-theme.css` to include the component selectors with component-level custom properties mapped to the `--system` prefixed ones in order to allow a component to support various contexts.

  Expected output example for the index-theme.css:

  ```
  .spectrum-ActionButton {
   --spectrum-actionbutton-background-color-default: var(--system-action-button-background-color-default);
   --spectrum-actionbutton-background-color-hover: var(--system-action-button-background-color-hover);
  ```

## 4.0.0

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

- Updated dependencies [[`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6), [`3d08cea`](https://github.com/adobe/spectrum-css/commit/3d08cea0f590c8c2de7252677a6b81b8cc206b9a)]:
  - @spectrum-css/tokens@16.0.0

## 3.0.1

### Patch Changes

- [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)! - Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0

## 3.0.0

### Major Changes

- [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)! - Remove empty theme references to reduce complexity for components that don't need to define any mappings. This involves removing the source `themes` directories with the empty `spectrum.css` and `express.com` files as well as removing the following empty or unnecessary exports:

  - `index-base.css`
  - `index-theme.css`
  - `themes/spectrum.css`
  - `themes/express.css`

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b)]:
  - @spectrum-css/tokens@15.1.0

## 2.2.0

### Minor Changes

- [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)! - Remove the storybook assets from the shipped output for components

## 2.1.3

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)! - Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

## 2.1.2

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)! - Improve changeset suggestions by using exports instead of files in component packages

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
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/opacitycheckerboard@1.1.5...@spectrum-css/opacitycheckerboard@2.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="1.1.5"></a>

## 1.1.5

🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/opacitycheckerboard@1.1.4...@spectrum-css/opacitycheckerboard@1.1.5)

**Note:** Version bump only for package @spectrum-css/opacitycheckerboard

<a name="1.1.4"></a>

## 1.1.4

🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/opacitycheckerboard@1.1.3...@spectrum-css/opacitycheckerboard@1.1.4)

**Note:** Version bump only for package @spectrum-css/opacitycheckerboard

<a name="1.1.3"></a>

## 1.1.3

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/opacitycheckerboard@1.1.2...@spectrum-css/opacitycheckerboard@1.1.3)

**Note:** Version bump only for package @spectrum-css/opacitycheckerboard

<a name="1.1.2"></a>

## 1.1.2

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/opacitycheckerboard

<a name="1.1.1"></a>

## 1.1.1

🗓
2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/opacitycheckerboard@1.1.0...@spectrum-css/opacitycheckerboard@1.1.1)

**Note:** Version bump only for package @spectrum-css/opacitycheckerboard

<a name="1.1.0"></a>

## 1.1.0

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/opacitycheckerboard@1.0.9...@spectrum-css/opacitycheckerboard@1.1.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="1.0.9"></a>

## 1.0.9

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/opacitycheckerboard@1.0.8...@spectrum-css/opacitycheckerboard@1.0.9)

**Note:** Version bump only for package @spectrum-css/opacitycheckerboard

<a name="1.0.8"></a>

## 1.0.8

🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/opacitycheckerboard@1.0.7...@spectrum-css/opacitycheckerboard@1.0.8)

**Note:** Version bump only for package @spectrum-css/opacitycheckerboard

<a name="1.0.7"></a>

## 1.0.7

🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/opacitycheckerboard@1.0.5...@spectrum-css/opacitycheckerboard@1.0.7)

**Note:** Version bump only for package @spectrum-css/opacitycheckerboard

<a name="1.0.6"></a>

## 1.0.6

🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/opacitycheckerboard@1.0.5...@spectrum-css/opacitycheckerboard@1.0.6)

**Note:** Version bump only for package @spectrum-css/opacitycheckerboard

<a name="1.0.5"></a>

## 1.0.5

🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/opacitycheckerboard@1.0.4...@spectrum-css/opacitycheckerboard@1.0.5)

### 🐛 Bug fixes

- **opacitycheckerboard:**align token version to latest release ([#2263](https://github.com/adobe/spectrum-css/issues/2263))([140a314](https://github.com/adobe/spectrum-css/commit/140a314))

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="1.0.4"></a>

## 1.0.4

🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/opacitycheckerboard@1.0.3...@spectrum-css/opacitycheckerboard@1.0.4)

**Note:** Version bump only for package @spectrum-css/opacitycheckerboard

<a name="1.0.3"></a>

## 1.0.3

🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/opacitycheckerboard@1.0.2...@spectrum-css/opacitycheckerboard@1.0.3)

**Note:** Version bump only for package @spectrum-css/opacitycheckerboard

<a name="1.0.2"></a>

## 1.0.2

🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/opacitycheckerboard@1.0.1...@spectrum-css/opacitycheckerboard@1.0.2)

### 🐛 Bug fixes

- **opacitycheckboard:**add to component stories ([#2056](https://github.com/adobe/spectrum-css/issues/2056))([a1411f6](https://github.com/adobe/spectrum-css/commit/a1411f6))

<a name="1.0.1"></a>

## 1.0.1

🗓
2023-07-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/opacitycheckerboard@1.0.0...@spectrum-css/opacitycheckerboard@1.0.1)

**Note:** Version bump only for package @spectrum-css/opacitycheckerboard

<a name="1.0.0"></a>

## 1.0.0

🗓
2023-07-24

\*feat(opacitycheckerboard)!: new component (#1916)([24e9f06](https://github.com/adobe/spectrum-css/commit/24e9f06)), closes[#1916](https://github.com/adobe/spectrum-css/issues/1916)

    	###
    	🛑 BREAKING CHANGES

    		*
    		creates new Opacity Checkerboard component and uses it within Swatch, Color Handle, Thumbnail, Color Slider.

- chore(opacitycheckerboard): generate new component

- feat(opacitycheckerboard): adds tokens

- feat(opacitycheckerboard): use in swatch

- feat(opacitycheckerboard): use in colorhandle

- feat(opacitycheckerboard): use in colorslider

- feat(opacitycheckerboard): use in thumbnail

- feat(opacitycheckerboard): adds color variant

- feat(opacitycheckerboard): adds stories

- chore(opacitycheckerboard): whcm show checkerboard

- chore(opacitycheckerboard): removes thumbnail border fix

- chore(opacitycheckerboard): address PR feedback

- fix(opacitycheckerboard): removes example classes

- chore(opacitycheckerboard): add mods

- fix(opacitycheckerboard): spelling

- fix(opacitycheckerboard): add inline styling to storybook

- chore(opacitycheckerboard): use stylemaps

- feat(opacitycheckerboard): use in color slider full example

- chore: update yarn.lock file after rebase
