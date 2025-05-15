# Change log

## 8.0.0-next.1

### Patch Changes

- Updated dependencies [[`60a156d`](https://github.com/adobe/spectrum-css/commit/60a156d7c0efcc999bc440274bbbbf586beb274b)]:
  - @spectrum-css/tokens@16.1.0-next.0

## 8.0.0-next.0

### Patch Changes

- Updated dependencies [[`a25e0a9`](https://github.com/adobe/spectrum-css/commit/a25e0a99e5a4736ab4e607e00739343101a2633b)]:
  - @spectrum-css/icon@10.0.0-next.0
  - @spectrum-css/actionbutton@8.0.0-next.0
  - @spectrum-css/infieldbutton@7.0.0-next.0
  - @spectrum-css/textfield@9.0.0-next.0

## 7.1.3

### Patch Changes

📝 [#3621](https://github.com/adobe/spectrum-css/pull/3621) [`3aec28a`](https://github.com/adobe/spectrum-css/commit/3aec28aac60bdf32a585fa8ff38559d80b57ff86) Thanks [@marissahuysentruyt](https://github.com/marissahuysentruyt)!

- Updates `--spectrum-stepper-border-color-focus-hover` from `gray-800` to `gray-900`.
- Updates `--spectrum-stepper-buttons-border-color-keyboard-focus` from `gray-900` to `gray-800` to match the rest of the border color on keyboardFocus.

## 7.1.2

### Patch Changes

📝 [#3594](https://github.com/adobe/spectrum-css/pull/3594) [`6200a63`](https://github.com/adobe/spectrum-css/commit/6200a63f2c7dc1d2b0481c33b17c86427726c0bd) Thanks [@TarunAdobe](https://github.com/TarunAdobe)!

- Updates Stepper's key-focus border color (`--spectrum-stepper-border-color-keyboard-focus`) to `--spectrum-gray-800`.

## 7.1.1

### Patch Changes

📝 [#3536](https://github.com/adobe/spectrum-css/pull/3536) [`f77aa72`](https://github.com/adobe/spectrum-css/commit/f77aa72486f98c7b7d4f449c0d54fb6801881b7e) Thanks [@marissahuysentruyt](https://github.com/marissahuysentruyt)!

- S2 Foundations fixes

  - Adjusts the background-color of the infield button components within stepper to use `gray-100` as opposed to `gray-25`.
    - This corresponds to the background-color updates picker has for S2.
  - Corrects the border color for the default picker for S2 foundations, using `gray-500` (instead of `gray-800`) to align with other field/form components.
  - Refactors the `&.is-keyboardFocused&.is-placeholder` selector to `&.is-keyboardFocused.spectrum-Picker-label.is-placeholder` to avoid unexpectedly targeting the nested placeholder class.

## 7.1.0

### Minor Changes

📝 [`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee) Thanks [@castastrophe](https://github.com/castastrophe)!

## New feature

Minified and gzipped outputs available for all compiled CSS assets.

### Patch Changes

📝 [#3541](https://github.com/adobe/spectrum-css/pull/3541) [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d) Thanks [@castastrophe](https://github.com/castastrophe)!

Dependency alignment across the project.

- Updated dependencies [[`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee), [`9b108f7`](https://github.com/adobe/spectrum-css/commit/9b108f7e05df1f55ab315dad96736d3ff4757f8c), [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d)]:
  - @spectrum-css/actionbutton@8.0.0
  - @spectrum-css/icon@9.1.0
  - @spectrum-css/infieldbutton@7.0.0
  - @spectrum-css/textfield@9.0.0
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
  - @spectrum-css/actionbutton@7.0.1
  - @spectrum-css/icon@9.0.1
  - @spectrum-css/infieldbutton@6.0.1
  - @spectrum-css/textfield@8.0.1

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
  - @spectrum-css/infieldbutton@6.0.0
  - @spectrum-css/actionbutton@7.0.0
  - @spectrum-css/textfield@8.0.0
  - @spectrum-css/icon@9.0.0

## 6.4.1

### Patch Changes

📝 [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)!

- Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/infieldbutton@5.3.1
  - @spectrum-css/actionbutton@6.3.1
  - @spectrum-css/textfield@7.4.1
  - @spectrum-css/icon@8.0.1

## 6.4.0

### Minor Changes

📝 [#3359](https://github.com/adobe/spectrum-css/pull/3359) [`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b) Thanks [@cdransf](https://github.com/cdransf)!

- This resolves our remaining stylelint issues around undefined tokens, rule order, unused values and color syntax.

  - Updates invalid color syntax from `rgba(N, N, N, N)` to `rgba(N N N / N)`.
  - In cases of duplicate properties, preserves the property that would be applied given current code structure.
  - Updates misnamed tokens to use valid tokens (`table/index.css`).

📝 [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)!

- Simplify how the `--system` properties are mapped. By updating the logic in the `postcss-add-theming-layer`, we are now shipping cleaner, more readable `--system` property names. These custom properties are documented as _NOT_ a part of the component API so although these result in a change to the custom property names, it does not impact the properties that are in the API and so do not constitute a breaking change. Expect to see no change to how component theming works or any visual regressions as a result of this change.

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/infieldbutton@5.3.0
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/icon@8.0.0
  - @spectrum-css/actionbutton@6.3.0
  - @spectrum-css/textfield@7.4.0

## 6.3.0

### Minor Changes

📝 [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/infieldbutton@5.2.0
  - @spectrum-css/actionbutton@6.2.0
  - @spectrum-css/textfield@7.3.0
  - @spectrum-css/icon@7.2.0

## 6.2.1

### Patch Changes

📝 [#3303](https://github.com/adobe/spectrum-css/pull/3303) [`5fa753b`](https://github.com/adobe/spectrum-css/commit/5fa753b34944584576c8d91b8d51460ff0a2e4be) Thanks [@cdransf](https://github.com/cdransf)!

- Resolves lint violations by removing unused properties and adding comment description.

- Updated dependencies [[`d05f25f`](https://github.com/adobe/spectrum-css/commit/d05f25f971f2e0123ad0747c53ad0250c7cee707)]:
  - @spectrum-css/infieldbutton@5.1.4

## 6.2.0

### Minor Changes

📝 [#3103](https://github.com/adobe/spectrum-css/pull/3103) [`cf61a13`](https://github.com/adobe/spectrum-css/commit/cf61a130162d181f82163ecbba3f9cc197f27773) Thanks [@cdransf](https://github.com/cdransf)!

- This corrects the border color for the stepper component infield buttons by setting the border color property to Highlight when the parent stepper component is invalid.

### Patch Changes

📝 [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)!

- Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/infieldbutton@5.1.3
  - @spectrum-css/actionbutton@6.1.3
  - @spectrum-css/textfield@7.2.3
  - @spectrum-css/icon@7.1.4

## 6.1.4

### Patch Changes

📝 [#3012](https://github.com/adobe/spectrum-css/pull/3012) [`78c98bf`](https://github.com/adobe/spectrum-css/commit/78c98bf15bfc82656acd14a4a22fc537f722b60d) Thanks [@cdransf](https://github.com/cdransf)!

- Modify the stepper and textfield css to allow the .is-disabled state and class to properly disable the border behavior that would occur when a disabled stepper was hovered. It also leverages the outline state for focused components to align with the state currently used by button components.

- Updated dependencies [[`78c98bf`](https://github.com/adobe/spectrum-css/commit/78c98bf15bfc82656acd14a4a22fc537f722b60d)]:
  - @spectrum-css/textfield@7.2.2

## 6.1.3

### Patch Changes

📝 [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)!

- Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/infieldbutton@5.1.2
  - @spectrum-css/actionbutton@6.1.2
  - @spectrum-css/textfield@7.2.1
  - @spectrum-css/icon@7.1.3

## 6.1.2

### Patch Changes

📝 [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)!

- Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/infieldbutton@5.1.1
  - @spectrum-css/actionbutton@6.1.1
  - @spectrum-css/textfield@7.1.3
  - @spectrum-css/icon@7.1.1

## 6.1.1

### Patch Changes

📝 [#2740](https://github.com/adobe/spectrum-css/pull/2740) [`c0dd6a4`](https://github.com/adobe/spectrum-css/commit/c0dd6a443b410f37f3dc703d75e11c15519fd93e) Thanks [@jawinn](https://github.com/jawinn)!

- Build change to remove the `postcss-preset-env` polyfill for the dist output of `:not` selectors containing multiple selectors, to avoid an unintended increase in specificity, which caused some visual regressions.

## 6.1.0

### Minor Changes

📝 [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/actionbutton@>=6
  - @spectrum-css/icon@>=7
  - @spectrum-css/infieldbutton@>=5
  - @spectrum-css/textfield@>=7
  - @spectrum-css/tokens@>=14

## 6.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@5.1.5...@spectrum-css/stepper@6.0.0)

- feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGE

- Removes component-builder & component-builder-simple for script leveraging postcss
- Imports added to index.css and themes/express.css

## 5.1.5

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@5.1.4...@spectrum-css/stepper@5.1.5)

**Note:** Version bump only for package @spectrum-css/stepper

## 5.1.4

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@5.1.3...@spectrum-css/stepper@5.1.4)

**Note:** Version bump only for package @spectrum-css/stepper

## 5.1.3

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@5.1.2...@spectrum-css/stepper@5.1.3)

**Note:** Version bump only for package @spectrum-css/stepper

## 5.1.2

🗓 2024-02-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@5.1.1...@spectrum-css/stepper@5.1.2)

**Note:** Version bump only for package @spectrum-css/stepper

## 5.1.1

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-css/stepper

## 5.1.0

🗓 2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@5.0.7...@spectrum-css/stepper@5.1.0)

**Note:** Version bump only for package @spectrum-css/stepper

## 5.0.7

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@5.0.6...@spectrum-css/stepper@5.0.7)

### 🐛 Bug fixes

- **stepper:** button size + space match infieldbutton spec([6ab77f8](https://github.com/adobe/spectrum-css/commit/6ab77f8))
- **stepper:** express whcm ([#2384](https://github.com/adobe/spectrum-css/issues/2384))([890f469](https://github.com/adobe/spectrum-css/commit/890f469))
- **stepper:** infieldbutton background unchanged on stepper focus([c01d2b6](https://github.com/adobe/spectrum-css/commit/c01d2b6))\_
- **stepper:** invalid hover state border color([4ea4e6c](https://github.com/adobe/spectrum-css/commit/4ea4e6c))
- **stepper:** invalid keyboard focus outline alignment([5b74dfe](https://github.com/adobe/spectrum-css/commit/5b74dfe))
- **stepper:** no longer touches InfieldButton classes([e408272](https://github.com/adobe/spectrum-css/commit/e408272))

## 5.0.6

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@5.0.5...@spectrum-css/stepper@5.0.6)

### 🐛 Bug fixes

- **stepper:** express theme button border ([#2272](https://github.com/adobe/spectrum-css/issues/2272))([97b10b5](https://github.com/adobe/spectrum-css/commit/97b10b5))
- **stepper:** no longer touches InfieldButton classes ([#2300](https://github.com/adobe/spectrum-css/issues/2300))([a82b8ad](https://github.com/adobe/spectrum-css/commit/a82b8ad))

## 5.0.5

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@5.0.4...@spectrum-css/stepper@5.0.5)

**Note:** Version bump only for package @spectrum-css/stepper

## 5.0.4

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@5.0.2...@spectrum-css/stepper@5.0.4)

**Note:** Version bump only for package @spectrum-css/stepper

## 5.0.3

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@5.0.2...@spectrum-css/stepper@5.0.3)

**Note:** Version bump only for package @spectrum-css/stepper

## 5.0.2

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@5.0.1...@spectrum-css/stepper@5.0.2)

**Note:** Version bump only for package @spectrum-css/stepper

## 5.0.1

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@5.0.0...@spectrum-css/stepper@5.0.1)

**Note:** Version bump only for package @spectrum-css/stepper

## 5.0.0

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.59...@spectrum-css/stepper@5.0.0)

- feat(stepper)!: stepper migrate tokens (#1960)([3a4c217](https://github.com/adobe/spectrum-css/commit/3a4c217)), closes[#1960](https://github.com/adobe/spectrum-css/issues/1960)

### Migration Guide

#### Use InFieldButton instead of FieldButton

Stepper now uses InFieldButtons instead of FieldButtons for the up/down buttons.

### 🛑 BREAKING CHANGE

- migrates Stepper to use `@adobe/spectrum-tokens`
- style(infieldbutton!): begin updating css to tokens
- style(infieldbutton): updating css to tokens
- style(infieldbutton): add color styling and spacing
- style(infieldbutton): disabled colors and quiet colors
- feat(infieldbutton): add icon t shirt sizing
- docs(infieldbutton): update mods and remove unneeded file
- refactor(infieldbutton): fix stylelint errors and remove invalid
- chore(infieldbutton): removing dependency for tokens
- fix(infieldbutton): remove dependency from package json
- fix(infieldbutton): reset yarn file to main
- fix(infieldbutton): fix express border radius
- style(infieldbutton): removed disabled background color change on hover
- docs(infieldbutton): update aria labels and remove icon only example
- refactor(infieldbutton): update to utilize tokens that have express values
- style(stepper): get borders for buttons migrated and working
- style(stepper): add additional stepper button tokens
- style(stepper): fixing express button spacing
- docs(stepper): update mods
- chore(stepper): update storybook defaults and remove skin import
- style(stepper): finish invalid and high contrast styling
- fix(stepper): remove border width from padding
- chore(stepper): bump tokens release
- docs(stepper): adding sizing examples
- fix(stepper): fix quiet no-stepper variant from showing border
- fix(icon): updating icon to prevent size overrides
- chore(stepper): fix linter errors

use logical properties
use flex-flow shorthand property
fix max nesting depth

- feat(stepper): use infield button and new small chevron
- fix(stepper): fix express button placement
- chore(stepper): update docs examples to all use infield button
- fix(stepper): update express and quiet styling
- chore(stepper): update storybook stories
- chore(stepper): update story to use number type textfield
- chore(stepper): removing stepUp and stepDown classes
- chore(stepper): remove unused variables
- chore(stepper): manual version increase for beta release
- docs: specify type attribute on button elements

Button elements should specify a type of "button", otherwise they
default to a type of submit if the element happens to be within a form.

- docs(stepper): include value in storybook

Include value to replace the removed placeholder, so visuals with a
value can be compared in VRTs.

- fix(stepper): adjustments for width differences

Using component-height-200 instead of component-height-100 was making
the component too much wider than the original. Now uses the stepper
height token, which is using component-height-100 at medium, and
adjustments for t-shirt sizing. This makes the larger sizes like XL
scale more appropriately in their width as well. Previously the
characters entered in the field would turn to ellipsis after 3 chars at
XL size.

Note: Medium version of component -should- be about 6px wider due to
wider in-field buttons, defined in tokens. Original medium was 72px.

Adjusts usage of some of the width tokens so that usage of
--mod-stepper-width and --mod-stepper-border-width will have the desired
effect.

Also needed to add border width to calc, so that 4 chars appear before
ellipsis at medium size, instead of 3. Was a matter of 1 or 2 pixels.

## 4.0.59

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.58...@spectrum-css/stepper@4.0.59)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.58

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.57...@spectrum-css/stepper@4.0.58)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.57

🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.56...@spectrum-css/stepper@4.0.57)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.56

🗓 2023

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.55

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.54...@spectrum-css/stepper@4.0.55)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.54

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.53...@spectrum-css/stepper4.0.54)

## 4.0.53

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.52...@spectrum-css/stepper@4.0.53)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.52

🗓 2023-08-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.51...@spectrum-css/stepper@4.0.52)

### 🔙 Reverts

- gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

## 4.0.51

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.50...@spectrum-css/stepper@4.0.51)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.50

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.48...@spectrum-css/stepper@4.0.50)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.49

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.48...@spectrum-css/stepper@4.0.49)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.48

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.47...@spectrum-css/stepper@4.0.48)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.47

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.46...@spectrum-css/stepper@4.0.47)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.46

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.45...@spectrum-css/stepper@4.0.46)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.45

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.44...@spectrum-css/stepper@4.0.45)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.44

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.43...@spectrum-css/stepper@4.0.44)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.43

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.42...@spectrum-css/stepper@4.0.43)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.42

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.41...@spectrum-css/stepper@4.0.42)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.41

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.40...@spectrum-css/stepper@4.0.41)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.40

🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.39...@spectrum-css/stepper@4.0.40)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.39

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.38...@spectrum-css/stepper@4.0.39)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.38

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.37...@spectrum-css/stepper@4.0.38)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.37

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.36...@spectrum-css/stepper@4.0.37)

### 🐛 Bug fixes

- restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

## 4.0.36

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.35...@spectrum-css/stepper@4.0.36)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.35

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.34...@spectrum-css/stepper@4.0.35)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.34

🗓 2023-05-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.33...@spectrum-css/stepper@4.0.34)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.33

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.32...@spectrum-css/stepper@4.0.33)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.32

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.31...@spectrum-css/stepper@4.0.32)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.31

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.30...@spectrum-css/stepper@4.0.31)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.30

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.29...@spectrum-css/stepper@4.0.30)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.29

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.28...@spectrum-css/stepper@4.0.29)

### 🐛 Bug fixes

- **textfield, stepper:** button padding and focus indicator ([#1863](https://github.com/adobe/spectrum-css/issues/1863)) ([7963b85](https://github.com/adobe/spectrum-css/commit/7963b85))

## 4.0.28

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.27...@spectrum-css/stepper@4.0.28)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.27

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.26...@spectrum-css/stepper@4.0.27)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.26

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.25...@spectrum-css/stepper@4.0.26)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.25

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.24...@spectrum-css/stepper@4.0.25)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.24

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.23...@spectrum-css/stepper@4.0.24)

### 🐛 Bug fixes

- **stepper:** fix stepper button padding and borders ([#1856](https://github.com/adobe/spectrum-css/issues/1856)) ([55f2b08](https://github.com/adobe/spectrum-css/commit/55f2b08))

## 4.0.23

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.22...@spectrum-css/stepper@4.0.23)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.22

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.21...@spectrum-css/stepper@4.0.22)

### 🐛 Bug fixes

- **stepper:** remove misspelled flex property ([#1840](https://github.com/adobe/spectrum-css/issues/1840)) ([590a0f6](https://github.com/adobe/spectrum-css/commit/590a0f6))

## 4.0.21

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.20...@spectrum-css/stepper@4.0.21)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.20

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.19...@spectrum-css/stepper@4.0.20)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.19

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.18...@spectrum-css/stepper@4.0.19)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.18

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.16...@spectrum-css/stepper@4.0.18)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.17

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.16...@spectrum-css/stepper@4.0.17)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.16

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.15...@spectrum-css/stepper@4.0.16)

### 🐛 Bug fixes

- **stepper:** fix stepper width ([a67293f](https://github.com/adobe/spectrum-css/commit/a67293f))

## 4.0.15

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.14...@spectrum-css/stepper@4.0.15)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.14

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.13...@spectrum-css/stepper@4.0.14)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.13

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.12...@spectrum-css/stepper@4.0.13)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.12

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.11...@spectrum-css/stepper@4.0.12)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.11

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.9...@spectrum-css/stepper@4.0.11)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.10

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.9...@spectrum-css/stepper@4.0.10)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.9

🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.7...@spectrum-css/stepper@4.0.9)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.8

🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.7...@spectrum-css/stepper@4.0.8)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.7

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.6...@spectrum-css/stepper@4.0.7)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.6

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.5...@spectrum-css/stepper@4.0.6)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.5

🗓 2023-03-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.4...@spectrum-css/stepper@4.0.5)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.4

🗓 2023-03-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.3...@spectrum-css/stepper@4.0.4)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.3

🗓 2023-03-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.2...@spectrum-css/stepper@4.0.3)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.2

🗓 2023-03-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.1...@spectrum-css/stepper@4.0.2)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.1

🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@4.0.0...@spectrum-css/stepper@4.0.1)

**Note:** Version bump only for package @spectrum-css/stepper

## 4.0.0

🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.39...@spectrum-css/stepper@4.0.0)

- refactor(textfield)!: migrate spectrum tokens (#1544) ([1723f01](https://github.com/adobe/spectrum-css/commit/1723f01)), closes [#1544](https://github.com/adobe/spectrum-css/issues/1544)

### 🛑 BREAKING CHANGE

- migrates textfield to spectrum tokens

- Updates to latest tokens package
- WHCM added
- Focus state and dependency fixes
- Leveraging CSS grid for help text placement and character count

- removes placeholder from stepper inputs

- feat(stepper): add hideStepper control to fix border styling issue
- refactor(stepper): adding native pseudo class styles
- refactor(stepper): add support for invalid textfield styling

## 3.0.39

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.38...@spectrum-css/stepper@3.0.39)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.38

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.37...@spectrum-css/stepper@3.0.38)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.37

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.36...@spectrum-css/stepper@3.0.37)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.36

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.35...@spectrum-css/stepper@3.0.36)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.35

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.34...@spectrum-css/stepper@3.0.35)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.34

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.33...@spectrum-css/stepper@3.0.34)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.33

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.32...@spectrum-css/stepper@3.0.33)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.32

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.31...@spectrum-css/stepper@3.0.32)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.31

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.29...@spectrum-css/stepper@3.0.31)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.30

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.29...@spectrum-css/stepper@3.0.30)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.29

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.28...@spectrum-css/stepper@3.0.29)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.28

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.27...@spectrum-css/stepper@3.0.28)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.27

🗓 2022-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.26...@spectrum-css/stepper@3.0.27)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.26

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.25...@spectrum-css/stepper@3.0.26)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.25

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.24...@spectrum-css/stepper@3.0.25)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.24

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.23...@spectrum-css/stepper@3.0.24)

### 🐛 Bug fixes

- stepper WHCM ([1b1695a](https://github.com/adobe/spectrum-css/commit/1b1695a))

## 3.0.23

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.22...@spectrum-css/stepper@3.0.23)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.22

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.21...@spectrum-css/stepper@3.0.22)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.21

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.20...@spectrum-css/stepper@3.0.21)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.20

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.19...@spectrum-css/stepper@3.0.20)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.19

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.18...@spectrum-css/stepper@3.0.19)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.18

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.17...@spectrum-css/stepper@3.0.18)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.17

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.16...@spectrum-css/stepper@3.0.17)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.16

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.15...@spectrum-css/stepper@3.0.16)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.15

🗓 2022-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.14...@spectrum-css/stepper@3.0.15)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.14

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.13...@spectrum-css/stepper@3.0.14)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.13

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.11...@spectrum-css/stepper@3.0.13)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

## 3.0.12

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.11...@spectrum-css/stepper@3.0.12)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.11

🗓 2021-12-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.10...@spectrum-css/stepper@3.0.11)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.10

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.9...@spectrum-css/stepper@3.0.10)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.9

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.8...@spectrum-css/stepper@3.0.9)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.8

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.7...@spectrum-css/stepper@3.0.8)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.7

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.6...@spectrum-css/stepper@3.0.7)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.6

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.4...@spectrum-css/stepper@3.0.6)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.5

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.4...@spectrum-css/stepper@3.0.5)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.2...@spectrum-css/stepper@3.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.1...@spectrum-css/stepper@3.0.2)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@3.0.0...@spectrum-css/stepper@3.0.1)

**Note:** Version bump only for package @spectrum-css/stepper

## 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@2.0.6...@spectrum-css/stepper@3.0.0)

### ✨ Features

- replace all FieldButton with ActionButton ([2fcbaaf](https://github.com/adobe/spectrum-css/commit/2fcbaaf))

### 🐛 Bug fixes

- correct dependencies for FieldButton -> ActionButton change ([29d69f8](https://github.com/adobe/spectrum-css/commit/29d69f8))
- make Stepper build again ([afc2ea6](https://github.com/adobe/spectrum-css/commit/afc2ea6))
- update main, resolved conflicts ([d7880a2](https://github.com/adobe/spectrum-css/commit/d7880a2))

### 🛑 BREAKING CHANGE

- markup now requires spectrum-ActionButton where all uses of spectrum-FieldButton were

## 2.0.6

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@2.0.5...@spectrum-css/stepper@2.0.6)

**Note:** Version bump only for package @spectrum-css/stepper

## 2.0.5

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@2.0.4...@spectrum-css/stepper@2.0.5)

**Note:** Version bump only for package @spectrum-css/stepper

## 2.0.4

🗓 2020-01-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@2.0.3...@spectrum-css/stepper@2.0.4)

**Note:** Version bump only for package @spectrum-css/stepper

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@2.0.2...@spectrum-css/stepper@2.0.3)

**Note:** Version bump only for package @spectrum-css/stepper

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@2.0.1...@spectrum-css/stepper@2.0.2)

**Note:** Version bump only for package @spectrum-css/stepper

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/stepper@2.0.0...@spectrum-css/stepper@2.0.1)

**Note:** Version bump only for package @spectrum-css/stepper

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
