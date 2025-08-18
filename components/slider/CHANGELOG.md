# Change log

## 7.0.0-next.4

### Major Changes

📝 [#3945](https://github.com/adobe/spectrum-css/pull/3945) [`8a39697`](https://github.com/adobe/spectrum-css/commit/8a3969751718d45ff1a4a0656e842cf490a8da94) Thanks [@aramos-adobe](https://github.com/aramos-adobe)!

#### New features

- Emphasized track fill color
- Precision control handle
- Large and thin track heights
- Embedded editable text field component

#### Visual changes

- No longer a gap between slider handle and the track
- Updated dimensions of slider handles for each size variant
- Updated WHCM for all variants

#### New tokens

`--spectrum-slider-control-to-field-label-editable-extra-large`
`--spectrum-slider-control-to-field-label-editable-large`
`--spectrum-slider-control-to-field-label-editable-medium`
`--spectrum-slider-control-to-field-label-editable-small`
`--spectrum-slider-control-to-side-field-label-extra-large`
`--spectrum-slider-control-to-side-field-label-large`
`--spectrum-slider-control-to-side-field-label-medium`
`--spectrum-slider-control-to-side-field-label-small`
`--spectrum-slider-control-to-text-field-extra-large`
`--spectrum-slider-control-to-text-field-large`
`--spectrum-slider-control-to-text-field-medium`
`--spectrum-slider-control-to-text-field-small`
`--spectrum-slider-editable-control-to-field-label`
`--spectrum-slider-editable-control-to-text-field`
`--spectrum-slider-editable-field-inline-size-extra-large`
`--spectrum-slider-editable-field-inline-size-large`
`--spectrum-slider-editable-field-inline-size-medium`
`--spectrum-slider-editable-field-inline-size-small`
`--spectrum-slider-emphasized-track-fill-color`
`--spectrum-slider-precision-handle-height`
`--spectrum-slider-precision-handle-height-extra-large`
`--spectrum-slider-precision-handle-height-large`
`--spectrum-slider-precision-handle-height-medium`
`--spectrum-slider-precision-handle-height-small`
`--spectrum-slider-precision-handle-width`
`--spectrum-slider-handle-extra-large`
`--spectrum-slider-handle-large`
`--spectrum-slider-handle-medium`
`--spectrum-slider-handle-small`

#### New mods

`--mod-slider-editable-control-to-text-field`
`--mod-slider-editable-field-inline-size`
`--mod-slider-disabled-border-color`
`--mod-slider-emphasized-tick-mark-color`
`--mod-slider-emphasized-track-fill-color`
`--mod-slider-inline-size`
`--mod-slider-label-font-style`
`--mod-slider-label-font-weight`
`--mod-slider-ramp-track-fill-color`
`--mod-slider-tick-mark-color-filled-track`
`--mod-slider-track-height-medium`

#### Removed mods

`--mod-disabled-border-color`
`--mod-sectrum-slider-ramp-handle-border-color-active`
`--mod-slider-handle-border-width-down`
`--mod-slider-handle-gap`
`--mod-slider-ramp-handle-background-color`
`--mod-slider-tick-handle-background-color`
`--mod-slider-tick-mark-color-disabled`
`--mod-slider-track-handleoffset`
`--mod-slider-track-margin-offset`
`--mod-slider-track-middle-handleoffset`

## 7.0.0-next.3

### Major Changes

📝 [#4014](https://github.com/adobe/spectrum-css/pull/4014) [`35c066b`](https://github.com/adobe/spectrum-css/commit/35c066b29c311b1bfcf4507075f13b41222ffc84) Thanks [@castastrophe](https://github.com/castastrophe)!

This update removes the `dir` attribute polyfill (served via a PostCSS transform to compiled assets) as the fallback is no longer necessary. The`dir` attribute support is available in all supported browsers and has been tested to correctly inherit inside web component shadow DOMs. This is a breaking change **only** to those relying on the `dir` attribute being present for styling, however, the `:dir` pseudo will correctly inherit values from their containers. To correctly determine the `dir` value of a node using JavaScript, you can use `getComputedStyle(node).direction`.

## 7.0.0-next.2

### Minor Changes

- [#3656](https://github.com/adobe/spectrum-css/pull/3656) [`911c390`](https://github.com/adobe/spectrum-css/commit/911c390b9fa0b43187e5ab535874f2ed1ffeb88d) Thanks [@aramos-adobe](https://github.com/aramos-adobe)! - #### Including the touch action rule for draggable content

  The slider, color slider, color area, color wheel, color handle all deserve to have their touch-action property managed so that trying to set the value of those interfaces doesn't cause page scrolling in touch context.

  Adding `touch-action: none` to a slider or any draggable component is necessary to prevent the browser's default touch behaviors—such as scrolling, pinch-zooming, or double-tap zooming from interfering with the component's intended interaction.

  These components also include `user-select: none` to prevent selection or highlighting of any text elements.

## 7.0.0-next.1

### Patch Changes

- Updated dependencies [[`60a156d`](https://github.com/adobe/spectrum-css/commit/60a156d7c0efcc999bc440274bbbbf586beb274b)]:
  - @spectrum-css/tokens@16.1.0-next.0

## 7.0.0-next.0

### Patch Changes

- Updated dependencies:
  - @spectrum-css/stepper@8.0.0-next.0

## 6.3.0

### Minor Changes

📝 [#3527](https://github.com/adobe/spectrum-css/pull/3527) [`5f1751c`](https://github.com/adobe/spectrum-css/commit/5f1751c82a5fe55ae0d999f5f50cfeca4c8a5c75) Thanks [@castastrophe](https://github.com/castastrophe)!

By updating the postcss-preset-env to the latest breaking change version, output for this component no longer injects the `.js-focus-within` and '[focus-within]` selectors for the focus-within polyfill. As this feature is not used in the SWC consumption, risk to the end user for this removal is low.

## 6.2.0

### Minor Changes

📝 [#3611](https://github.com/adobe/spectrum-css/pull/3611) [`8cb98c6`](https://github.com/adobe/spectrum-css/commit/8cb98c6127a91f902f305faeb800e3c787e97e66) Thanks [@aramos-adobe](https://github.com/aramos-adobe)!

#### Slider: offset variant track fix

The border radius styles were not being applied to the second instance of the `spectrum-Slider-track` when the offset variant is activated. The reason for this bug is because when the `offset` is selected, the template structure changes as `spectrum-Slider-fill` gets added to the slider.

Adding a sibling combinator `&~.spectrum-Slider-track` to `spectrum-Slider-track` when offset is activated resolved the issue.

## 6.1.0

### Minor Changes

📝 [`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee) Thanks [@castastrophe](https://github.com/castastrophe)!

## New feature

Minified and gzipped outputs available for all compiled CSS assets.

### Patch Changes

📝 [#3541](https://github.com/adobe/spectrum-css/pull/3541) [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d) Thanks [@castastrophe](https://github.com/castastrophe)!

Dependency alignment across the project.

- Updated dependencies [[`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee), [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d)]:
  - @spectrum-css/stepper@8.0.0
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
  - @spectrum-css/stepper@7.0.1

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

- Updated dependencies [[`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6), [`3d08cea`](https://github.com/adobe/spectrum-css/commit/3d08cea0f590c8c2de7252677a6b81b8cc206b9a), [`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6)]:
  - @spectrum-css/tokens@16.0.0
  - @spectrum-css/stepper@7.0.0

## 5.6.1

### Patch Changes

📝 [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)!

- Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/stepper@6.4.1

## 5.6.0

### Minor Changes

📝 [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)!

- Simplify how the `--system` properties are mapped. By updating the logic in the `postcss-add-theming-layer`, we are now shipping cleaner, more readable `--system` property names. These custom properties are documented as _NOT_ a part of the component API so although these result in a change to the custom property names, it does not impact the properties that are in the API and so do not constitute a breaking change. Expect to see no change to how component theming works or any visual regressions as a result of this change.

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/stepper@6.4.0
  - @spectrum-css/tokens@15.1.0

## 5.5.1

### Patch Changes

📝 [#3444](https://github.com/adobe/spectrum-css/pull/3444) [`2c66a87`](https://github.com/adobe/spectrum-css/commit/2c66a8795c9792503431b147136bc47547b36c3c) Thanks [@5t3ph](https://github.com/5t3ph)!

- fix(slider): Limit the slider label width to its intrinsic size instead of taking up full-width to prevent accidental activation on mobile.

## 5.5.0

### Minor Changes

📝 [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/stepper@6.3.0

## 5.4.2

### Patch Changes

📝 [#3300](https://github.com/adobe/spectrum-css/pull/3300) [`89797d0`](https://github.com/adobe/spectrum-css/commit/89797d0324bcbf2195a28840ce87ed6959da24a5) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove duplicate references

## 5.4.1

### Patch Changes

📝 [#3298](https://github.com/adobe/spectrum-css/pull/3298) [`07cc324`](https://github.com/adobe/spectrum-css/commit/07cc324af3b1a6240033b6c2f91342373c7234c2) Thanks [@cdransf](https://github.com/cdransf)!

- Resolves violation error by moving todo comment into stylelint disable comment as a description

- Updated dependencies [[`5fa753b`](https://github.com/adobe/spectrum-css/commit/5fa753b34944584576c8d91b8d51460ff0a2e4be)]:
  - @spectrum-css/stepper@6.2.1

## 5.4.0

### Minor Changes

📝 [#3154](https://github.com/adobe/spectrum-css/pull/3154) [`7735155`](https://github.com/adobe/spectrum-css/commit/77351552eac8a28cab316d984fee88dca61dc786) Thanks [@cdransf](https://github.com/cdransf)!

- This applies a flex layout to the spectrum slider controls to consistently align the enclosed handle and ramp, while also removing the margins that might otherwise interfere with alignment. This aims to resolve the issues with the calc-based approach that exhibited variations in vertical alignment.

## 5.3.0

### Minor Changes

📝 [#3119](https://github.com/adobe/spectrum-css/pull/3119) [`df8eee0`](https://github.com/adobe/spectrum-css/commit/df8eee0aa7d69e6bad556ad77d972089e74d9173) Thanks [@cdransf](https://github.com/cdransf)!

- Corrects side label positioning by adding margin-inline-end to provide space between the label and the slider component.

## 5.2.6

### Patch Changes

📝 [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)!

- Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`cf61a13`](https://github.com/adobe/spectrum-css/commit/cf61a130162d181f82163ecbba3f9cc197f27773), [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/stepper@6.2.0

## 5.2.5

### Patch Changes

📝 [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)!

- Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/stepper@6.1.3

## 5.2.4

### Patch Changes

📝 [#2979](https://github.com/adobe/spectrum-css/pull/2979) [`5954646`](https://github.com/adobe/spectrum-css/commit/5954646c450d5a43e31d77241e806358b3a8883d) Thanks [@lazd](https://github.com/lazd)!

- Uses `z-index: 0` (instead of `z-index: 1`) for `spectrum-Slider` so that the slider no longer "floats" over other elements on the page.

## 5.2.3

### Patch Changes

📝 [#2752](https://github.com/adobe/spectrum-css/pull/2752) [`4465b9a`](https://github.com/adobe/spectrum-css/commit/4465b9a647b1714c70bb4052f4e2440fe055cc08) Thanks [@jawinn](https://github.com/jawinn)!

- Fixes the visibility of the handle's outer circle on the ramp variant for high contrast mode. And refactors which custom properties are set in the forced-colors media query.

## 5.2.2

### Patch Changes

📝 [#2744](https://github.com/adobe/spectrum-css/pull/2744) [`e1ef34f`](https://github.com/adobe/spectrum-css/commit/e1ef34f698a99ddf273c512b23eb8615ddfe780b) Thanks [@mdt2](https://github.com/mdt2)!

- Includes similar fixes for both Slider and Radio. Some parsers see `:pseudo:dir` as invalid, so we've changed it so that the pseudo element comes last `:dir :pseudo`.

## 5.2.1

### Patch Changes

📝 [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)!

- Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/stepper@6.1.2

## 5.2.0

### Minor Changes

📝 [#2754](https://github.com/adobe/spectrum-css/pull/2754) [`dbf1406`](https://github.com/adobe/spectrum-css/commit/dbf1406822be32aa1dbd2864b097853423bf06d8) Thanks [@jawinn](https://github.com/jawinn)!

- Sets the `color` property in parts of some components that were relying on inheriting a color from higher up in the DOM.

## 5.1.1

### Patch Changes

📝 [#2740](https://github.com/adobe/spectrum-css/pull/2740) [`c0dd6a4`](https://github.com/adobe/spectrum-css/commit/c0dd6a443b410f37f3dc703d75e11c15519fd93e) Thanks [@jawinn](https://github.com/jawinn)!

- Build change to remove the `postcss-preset-env` polyfill for the dist output of `:not` selectors containing multiple selectors, to avoid an unintended increase in specificity, which caused some visual regressions.

## 5.1.0

### Minor Changes

📝 [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/stepper@>=6
  - @spectrum-css/tokens@>=14

## 5.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.3.5...@spectrum-css/slider@5.0.0)

### ✨ Features

- use storybook v8 ([#2604](https://github.com/adobe/spectrum-css/issues/2604))([166ab23](https://github.com/adobe/spectrum-css/commit/166ab23))

- feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGE

- Removes component-builder & component-builder-simple for script leveraging postcss
- Imports added to index.css and themes/express.css

## 4.3.5

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.3.4...@spectrum-css/slider@4.3.5)

**Note:** Version bump only for package @spectrum-css/slider

## 4.3.4

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.3.3...@spectrum-css/slider@4.3.4)

**Note:** Version bump only for package @spectrum-css/slider

## 4.3.3

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.3.2...@spectrum-css/slider@4.3.3)

**Note:** Version bump only for package @spectrum-css/slider

## 4.3.2

🗓 2024-02-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.3.1...@spectrum-css/slider@4.3.2)

**Note:** Version bump only for package @spectrum-css/slider

## 4.3.1

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-css/slider

## 4.3.0

🗓 2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.2.1...@spectrum-css/slider@4.3.0)

**Note:** Version bump only for package @spectrum-css/slider

## 4.2.1

🗓 2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.2.0...@spectrum-css/slider@4.2.1)

### 🐛 Bug fixes

- deprecate logical transform plugin ([#2437](https://github.com/adobe/spectrum-css/issues/2437))([ff5dda6](https://github.com/adobe/spectrum-css/commit/ff5dda6))

## 4.2.0

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.19...@spectrum-css/slider@4.2.0)

### ✨ Features

- remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

## 4.1.19

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.18...@spectrum-css/slider@4.1.19)

### 🐛 Bug fixes

- **slider:** correct rtl positioning of focus indicator ([#2342](https://github.com/adobe/spectrum-css/issues/2342))([e4f8292](https://github.com/adobe/spectrum-css/commit/e4f8292))

## 4.1.18

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.17...@spectrum-css/slider@4.1.18)

**Note:** Version bump only for package @spectrum-css/slider

## 4.1.17

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.15...@spectrum-css/slider@4.1.17)

**Note:** Version bump only for package @spectrum-css/slider

## 4.1.16

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.15...@spectrum-css/slider@4.1.16)

**Note:** Version bump only for package @spectrum-css/slider

## 4.1.15

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.14...@spectrum-css/slider@4.1.15)

### Migration Guide

#### Indicating focus

Focus must be bubbled up to the parent so descendants siblings can be styled.

Thus, implementations should add the following class to the `.spectrum-Slider` parent class in the following situations:

- `.is-disabled` - when the slider is disabled

Implementations should also bubble the following class to the `.spectrum-Slider-controls` parent class in the following situations:

- `.is-focused` - when the handle input is focused with the mouse or keyboard

## 4.1.14

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.13...@spectrum-css/slider@4.1.14)

**Note:** Version bump only for package @spectrum-css/slider

## 4.1.13

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.12...@spectrum-css/slider@4.1.13)

**Note:** Version bump only for package @spectrum-css/slider

## 4.1.12

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.11...@spectrum-css/slider@4.1.12)

**Note:** Version bump only for package @spectrum-css/slider

## 4.1.11

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.10...@spectrum-css/slider@4.1.11)

**Note:** Version bump only for package @spectrum-css/slider

## 4.1.10

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.9...@spectrum-css/slider@4.1.10)

**Note:** Version bump only for package @spectrum-css/slider

## 4.1.9

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.8...@spectrum-css/slider@4.1.9)

**Note:** Version bump only for package @spectrum-css/slider

## 4.1.8

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.7...@spectrum-css/slider@4.1.8)

**Note:** Version bump only for package @spectrum-css/slider

## 4.1.7

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.6...@spectrum-css/slider@4.1.7)

**Note:** Version bump only for package @spectrum-css/slider

## 4.1.6

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.5...@spectrum-css/slider@4.1.6)

**Note:** Version bump only for package @spectrum-css/slider

## 4.1.5

🗓 2023-08-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.4...@spectrum-css/slider@4.1.5)

### 🔙 Reverts

- gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

## 4.1.4

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.3...@spectrum-css/slider@4.1.4)

**Note:** Version bump only for package @spectrum-css/slider

## 4.1.3

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.1...@spectrum-css/slider@4.1.3)

**Note:** Version bump only for package @spectrum-css/slider

## 4.1.2

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.1...@spectrum-css/slider@4.1.2)

**Note:** Version bump only for package @spectrum-css/slider

## 4.1.1

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.1.0...@spectrum-css/slider@4.1.1)

**Note:** Version bump only for package @spectrum-css/slider

## 4.1.0

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.19...@spectrum-css/slider@4.1.0)

### ✨ Features

- **slider:** add side label variant ([#2067](https://github.com/adobe/spectrum-css/issues/2067))([0e983d3](https://github.com/adobe/spectrum-css/commit/0e983d3))

## 4.0.19

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.18...@spectrum-css/slider@4.0.19)

**Note:** Version bump only for package @spectrum-css/slider

## 4.0.18

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.17...@spectrum-css/slider@4.0.18)

**Note:** Version bump only for package @spectrum-css/slider

## 4.0.17

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.16...@spectrum-css/slider@4.0.17)

## 4.0.16

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.15...@spectrum-css/slider@4.0.16)

**Note:** Version bump only for package @spectrum-css/slider

## 4.0.15

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.14...@spectrum-css/slider@4.0.15)

**Note:** Version bump only for package @spectrum-css/slider

## 4.0.14

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.13...@spectrum-css/slider@4.0.14)

**Note:** Version bump only for package @spectrum-css/slider

## 4.0.13

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.12...@spectrum-css/slider@4.0.13)

**Note:** Version bump only for package @spectrum-css/slider

## 4.0.12

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.11...@spectrum-css/slider@4.0.12)

**Note:** Version bump only for package @spectrum-css/slider

## 4.0.11

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.10...@spectrum-css/slider@4.0.11)

**Note:** Version bump only for package @spectrum-css/slider

## 4.0.10

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.9...@spectrum-css/slider@4.0.10)

**Note:** Version bump only for package @spectrum-css/slider

## 4.0.9

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.8...@spectrum-css/slider@4.0.9)

### 🐛 Bug fixes

- restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

## 4.0.8

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.7...@spectrum-css/slider@4.0.8)

**Note:** Version bump only for package @spectrum-css/slider

## 4.0.7

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.6...@spectrum-css/slider@4.0.7)

**Note:** Version bump only for package @spectrum-css/slider

## 4.0.6

🗓 2023-05-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.5...@spectrum-css/slider@4.0.6)

**Note:** Version bump only for package @spectrum-css/slider

## 4.0.5

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.4...@spectrum-css/slider@4.0.5)

**Note:** Version bump only for package @spectrum-css/slider

## 4.0.4

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.3...@spectrum-css/slider@4.0.4)

**Note:** Version bump only for package @spectrum-css/slider

## 4.0.3

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.2...@spectrum-css/slider@4.0.3)

**Note:** Version bump only for package @spectrum-css/slider

## 4.0.2

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.1...@spectrum-css/slider@4.0.2)

**Note:** Version bump only for package @spectrum-css/slider

## 4.0.1

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@4.0.0...@spectrum-css/slider@4.0.1)

**Note:** Version bump only for package @spectrum-css/slider

## 4.0.0

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.25...@spectrum-css/slider@4.0.0)

- feat(slider, fieldlabel)!: tokens migration & min-height size adjustments (#1696) ([37724f1](https://github.com/adobe/spectrum-css/commit/37724f1)), closes [#1696](https://github.com/adobe/spectrum-css/issues/1696)

### Migration Guide

#### Three Handles is included in the `range` variant

When using a slider with three handles, classify it as a `range` variant to apply correct styling

### 🛑 BREAKING CHANGE

- migrates Slider to use `@adobe/spectrum-tokens`.

Additionally, this adds some `min-height` custom properties and adjusts the `min-height` in the FieldLabel to accommodate Slider.

## 3.1.25

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.24...@spectrum-css/slider@3.1.25)

**Note:** Version bump only for package @spectrum-css/slider

## 3.1.24

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.23...@spectrum-css/slider@3.1.24)

**Note:** Version bump only for package @spectrum-css/slider

## 3.1.23

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.22...@spectrum-css/slider@3.1.23)

**Note:** Version bump only for package @spectrum-css/slider

## 3.1.22

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.20...@spectrum-css/slider@3.1.22)

**Note:** Version bump only for package @spectrum-css/slider

## 3.1.21

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.20...@spectrum-css/slider@3.1.21)

**Note:** Version bump only for package @spectrum-css/slider

## 3.1.20

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.18...@spectrum-css/slider@3.1.20)

**Note:** Version bump only for package @spectrum-css/slider

## 3.1.19

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.18...@spectrum-css/slider@3.1.19)

**Note:** Version bump only for package @spectrum-css/slider

## 3.1.18

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.17...@spectrum-css/slider@3.1.18)

**Note:** Version bump only for package @spectrum-css/slider

## 3.1.17

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.16...@spectrum-css/slider@3.1.17)

**Note:** Version bump only for package @spectrum-css/slider

## 3.1.16

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.15...@spectrum-css/slider@3.1.16)

**Note:** Version bump only for package @spectrum-css/slider

## 3.1.15

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.14...@spectrum-css/slider@3.1.15)

**Note:** Version bump only for package @spectrum-css/slider

## 3.1.14

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.13...@spectrum-css/slider@3.1.14)

**Note:** Version bump only for package @spectrum-css/slider

## 3.1.13

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.12...@spectrum-css/slider@3.1.13)

**Note:** Version bump only for package @spectrum-css/slider

## 3.1.12

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.11...@spectrum-css/slider@3.1.12)

**Note:** Version bump only for package @spectrum-css/slider

## 3.1.11

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.10...@spectrum-css/slider@3.1.11)

**Note:** Version bump only for package @spectrum-css/slider

## 3.1.10

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.8...@spectrum-css/slider@3.1.10)

**Note:** Version bump only for package @spectrum-css/slider

## 3.1.9

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.8...@spectrum-css/slider@3.1.9)

**Note:** Version bump only for package @spectrum-css/slider

## 3.1.8

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.7...@spectrum-css/slider@3.1.8)

**Note:** Version bump only for package @spectrum-css/slider

## 3.1.7

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.6...@spectrum-css/slider@3.1.7)

**Note:** Version bump only for package @spectrum-css/slider

## 3.1.6

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.5...@spectrum-css/slider@3.1.6)

**Note:** Version bump only for package @spectrum-css/slider

## 3.1.5

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.4...@spectrum-css/slider@3.1.5)

### 🐛 Bug fixes

- slider WHCM ([9ff8184](https://github.com/adobe/spectrum-css/commit/9ff8184))

## 3.1.4

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.3...@spectrum-css/slider@3.1.4)

**Note:** Version bump only for package @spectrum-css/slider

## 3.1.3

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.2...@spectrum-css/slider@3.1.3)

**Note:** Version bump only for package @spectrum-css/slider

## 3.1.2

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.1...@spectrum-css/slider@3.1.2)

**Note:** Version bump only for package @spectrum-css/slider

## 3.1.1

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.1.0...@spectrum-css/slider@3.1.1)

**Note:** Version bump only for package @spectrum-css/slider

## 3.1.0

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.15...@spectrum-css/slider@3.1.0)

### ✨ Features

- fixup other Express Slider color an size changes ([2fa1ce5](https://github.com/adobe/spectrum-css/commit/2fa1ce5))

### 🐛 Bug fixes

- support Express Slider ([bc42722](https://github.com/adobe/spectrum-css/commit/bc42722))
- updated based on design review ([be41d62](https://github.com/adobe/spectrum-css/commit/be41d62))

## 3.0.15

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.14...@spectrum-css/slider@3.0.15)

**Note:** Version bump only for package @spectrum-css/slider

## 3.0.14

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.13...@spectrum-css/slider@3.0.14)

**Note:** Version bump only for package @spectrum-css/slider

## 3.0.13

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.12...@spectrum-css/slider@3.0.13)

**Note:** Version bump only for package @spectrum-css/slider

## 3.0.12

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.11...@spectrum-css/slider@3.0.12)

**Note:** Version bump only for package @spectrum-css/slider

## 3.0.11

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.9...@spectrum-css/slider@3.0.11)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

## 3.0.10

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.9...@spectrum-css/slider@3.0.10)

**Note:** Version bump only for package @spectrum-css/slider

## 3.0.9

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.8...@spectrum-css/slider@3.0.9)

**Note:** Version bump only for package @spectrum-css/slider

## 3.0.8

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.7...@spectrum-css/slider@3.0.8)

**Note:** Version bump only for package @spectrum-css/slider

## 3.0.7

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.6...@spectrum-css/slider@3.0.7)

**Note:** Version bump only for package @spectrum-css/slider

## 3.0.6

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.5...@spectrum-css/slider@3.0.6)

**Note:** Version bump only for package @spectrum-css/slider

## 3.0.5

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.4...@spectrum-css/slider@3.0.5)

### 🐛 Bug fixes

- don't adjust slider handle width ([f352994](https://github.com/adobe/spectrum-css/commit/f352994))
- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

## 3.0.4

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.3...@spectrum-css/slider@3.0.4)

### 🐛 Bug fixes

- don't adjust slider handle width ([f352994](https://github.com/adobe/spectrum-css/commit/f352994))
- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

## 3.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.2...@spectrum-css/slider@3.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.1...@spectrum-css/slider@3.0.2)

**Note:** Version bump only for package @spectrum-css/slider

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@3.0.0...@spectrum-css/slider@3.0.1)

**Note:** Version bump only for package @spectrum-css/slider

## 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@2.1.0...@spectrum-css/slider@3.0.0)

### 🐛 Bug fixes

- ramp slider ([#829](https://github.com/adobe/spectrum-css/issues/829)) ([#923](https://github.com/adobe/spectrum-css/issues/923)) ([c539411](https://github.com/adobe/spectrum-css/commit/c539411)), closes [#850](https://github.com/adobe/spectrum-css/issues/850)
- wip fix more components ([b74dbb8](https://github.com/adobe/spectrum-css/commit/b74dbb8))

### Migration Guide

#### Dial is now a separate component

Dial has been moved to the [Dial](dial.html) component.

#### Color slider is now a separate component

-Color slider has been moved to the [Color Slider](colorslider.html) component.
-Replace class names starting with `.spectrum-Slider` with `.spectrum-ColorSlider`.

#### Use class `is-dragged` instead of `u-isGrabbing`

On `spectrum-Slider-handle` when dragging, use `is-dragged` instead of `u-isGrabbing`.

### 🛑 BREAKING CHANGE

- Color slider is now a separate component
- docs: Update components/slider/metadata/slider.yml

Co-authored-by: Larry Davis <lawdavis@adobe.com>

## 2.1.0

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@2.0.4...@spectrum-css/slider@2.1.0)

### ✨ Features

- halo focus ring, closes [#112](https://github.com/adobe/spectrum-css/issues/112), closes [#573](https://github.com/adobe/spectrum-css/issues/573) ([#603](https://github.com/adobe/spectrum-css/issues/603)) ([d87e9a5](https://github.com/adobe/spectrum-css/commit/d87e9a5)), closes [#619](https://github.com/adobe/spectrum-css/issues/619)

## 2.0.4

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@2.0.3...@spectrum-css/slider@2.0.4)

**Note:** Version bump only for package @spectrum-css/slider

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@2.0.2...@spectrum-css/slider@2.0.3)

**Note:** Version bump only for package @spectrum-css/slider

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@2.0.1...@spectrum-css/slider@2.0.2)

**Note:** Version bump only for package @spectrum-css/slider

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/slider@2.0.0...@spectrum-css/slider@2.0.1)

**Note:** Version bump only for package @spectrum-css/slider

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
