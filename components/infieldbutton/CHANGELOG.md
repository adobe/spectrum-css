# Change Log

## 6.0.1

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
  - @spectrum-css/icon@9.0.1

## 6.0.0

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
  - @spectrum-css/icon@9.0.0

## 5.3.1

### Patch Changes

- [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)! - Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/icon@8.0.1

## 5.3.0

### Minor Changes

- [#3359](https://github.com/adobe/spectrum-css/pull/3359) [`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b) Thanks [@cdransf](https://github.com/cdransf)! - This resolves our remaining stylelint issues around undefined tokens, rule order, unused values and color syntax.

  - Updates invalid color syntax from `rgba(N, N, N, N)` to `rgba(N N N / N)`.
  - In cases of duplicate properties, preserves the property that would be applied given current code structure.
  - Updates misnamed tokens to use valid tokens (`table/index.css`).

- [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)! - Simplify how the `--system` properties are mapped. By updating the logic in the `postcss-add-theming-layer`, we are now shipping cleaner, more readable `--system` property names. These custom properties are documented as _NOT_ a part of the component API so although these result in a change to the custom property names, it does not impact the properties that are in the API and so do not constitute a breaking change. Expect to see no change to how component theming works or any visual regressions as a result of this change.

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/icon@8.0.0

## 5.2.0

### Minor Changes

- [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)! - Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/icon@7.2.0

## 5.1.4

### Patch Changes

- [#3289](https://github.com/adobe/spectrum-css/pull/3289) [`d05f25f`](https://github.com/adobe/spectrum-css/commit/d05f25f971f2e0123ad0747c53ad0250c7cee707) Thanks [@cdransf](https://github.com/cdransf)! - Resolves lint violation by removing unused custom property.

## 5.1.3

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)! - Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/icon@7.1.4

## 5.1.2

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)! - Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/icon@7.1.3

## 5.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/icon@7.1.1

## 5.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/icon@>=7
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="5.0.0"></a>

## 5.0.0

🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@4.2.4...@spectrum-css/infieldbutton@5.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="4.2.4"></a>

## 4.2.4

🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@4.2.3...@spectrum-css/infieldbutton@4.2.4)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="4.2.3"></a>

## 4.2.3

🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@4.2.2...@spectrum-css/infieldbutton@4.2.3)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="4.2.2"></a>

## 4.2.2

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@4.2.1...@spectrum-css/infieldbutton@4.2.2)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="4.2.1"></a>

## 4.2.1

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="4.2.0"></a>

## 4.2.0

🗓
2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@4.1.0...@spectrum-css/infieldbutton@4.2.0)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="4.1.0"></a>

## 4.1.0

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@4.0.6...@spectrum-css/infieldbutton@4.1.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

### 🐛 Bug fixes

- **infieldbutton:**high contrast mode has a focus outline([d3a131a](https://github.com/adobe/spectrum-css/commit/d3a131a))_
  **infieldbutton:**no outline on focus-visible([a6ed495](https://github.com/adobe/spectrum-css/commit/a6ed495))_
  **stepper:**infieldbutton isnt focusable in stepper([4529874](https://github.com/adobe/spectrum-css/commit/4529874))

<a name="4.0.6"></a>

## 4.0.6

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@4.0.5...@spectrum-css/infieldbutton@4.0.6)

### 🐛 Bug fixes

- **infieldbutton:**focus wont persist after mouse interaction ([#2276](https://github.com/adobe/spectrum-css/issues/2276))([9271456](https://github.com/adobe/spectrum-css/commit/9271456))\*
  **stepper:**no longer touches InfieldButton classes ([#2300](https://github.com/adobe/spectrum-css/issues/2300))([a82b8ad](https://github.com/adobe/spectrum-css/commit/a82b8ad))

<a name="4.0.5"></a>

## 4.0.5

🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@4.0.4...@spectrum-css/infieldbutton@4.0.5)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="4.0.4"></a>

## 4.0.4

🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@4.0.2...@spectrum-css/infieldbutton@4.0.4)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="4.0.3"></a>

## 4.0.3

🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@4.0.2...@spectrum-css/infieldbutton@4.0.3)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="4.0.2"></a>

## 4.0.2

🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@4.0.1...@spectrum-css/infieldbutton@4.0.2)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="4.0.1"></a>

## 4.0.1

🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@4.0.0...@spectrum-css/infieldbutton@4.0.1)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="4.0.0"></a>

## 4.0.0

🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.14...@spectrum-css/infieldbutton@4.0.0)

\*feat(stepper)!: stepper migrate tokens (#1960)([3a4c217](https://github.com/adobe/spectrum-css/commit/3a4c217)), closes[#1960](https://github.com/adobe/spectrum-css/issues/1960)

    	###
    	🛑 BREAKING CHANGES

    		*
    		migrates Stepper to use `@adobe/spectrum-tokens`

Additionally:

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

- refactor(stepper): clean up css

remove duplicate css and use mods

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

<a name="3.0.14"></a>

## 3.0.14

🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.13...@spectrum-css/infieldbutton@3.0.14)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.13"></a>

## 3.0.13

🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.12...@spectrum-css/infieldbutton@3.0.13)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.12"></a>

## 3.0.12

🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.11...@spectrum-css/infieldbutton@3.0.12)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.11"></a>

## 3.0.11

🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.10...@spectrum-css/infieldbutton@3.0.11)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.10"></a>

## 3.0.10

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.9...@spectrum-css/infieldbutton@3.0.10)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.9"></a>

## 3.0.9

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.8...@spectrum-css/infieldbutton@3.0.9)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.8"></a>

## 3.0.8

🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.7...@spectrum-css/infieldbutton@3.0.8)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="3.0.7"></a>

## 3.0.7

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.6...@spectrum-css/infieldbutton@3.0.7)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.6"></a>

## 3.0.6

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.4...@spectrum-css/infieldbutton@3.0.6)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.5"></a>

## 3.0.5

🗓
2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.4...@spectrum-css/infieldbutton@3.0.5)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.4"></a>

## 3.0.4

🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.3...@spectrum-css/infieldbutton@3.0.4)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.3"></a>

## 3.0.3

🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.2...@spectrum-css/infieldbutton@3.0.3)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.2"></a>

## 3.0.2

🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.1...@spectrum-css/infieldbutton@3.0.2)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.1"></a>

## 3.0.1

🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.0...@spectrum-css/infieldbutton@3.0.1)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.0"></a>

## 3.0.0

🗓
2023-07-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.27...@spectrum-css/infieldbutton@3.0.0)

\*feat(infieldbutton)!: migrate to spectrum tokens([5198fe0](https://github.com/adobe/spectrum-css/commit/5198fe0))

    	###
    	🛑 BREAKING CHANGES

    		*
    		updates infield button to use `@adobe/spectrum-tokens`

docs(infieldbutton): remove small stacked variant from docs

<a name="2.0.27"></a>

## 2.0.27

🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.26...@spectrum-css/infieldbutton@2.0.27)

### 🐛 Bug fixes

\*icon sizing in Storybook story templates ([#2037](https://github.com/adobe/spectrum-css/issues/2037))([c90c8a3](https://github.com/adobe/spectrum-css/commit/c90c8a3))

<a name="2.0.26"></a>

## 2.0.26

🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.25...@spectrum-css/infieldbutton@2.0.26)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.25"></a>

## 2.0.25

🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.24...@spectrum-css/infieldbutton@2.0.25)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.24"></a>

## 2.0.24

🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.23...@spectrum-css/infieldbutton@2.0.24)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="2.0.23"></a>

## 2.0.23

🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.22...@spectrum-css/infieldbutton@2.0.23)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.22"></a>

## 2.0.22

🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.21...@spectrum-css/infieldbutton@2.0.22)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.21"></a>

## 2.0.21

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.20...@spectrum-css/infieldbutton@2.0.21)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.20"></a>

## 2.0.20

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.19...@spectrum-css/infieldbutton@2.0.20)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.19"></a>

## 2.0.19

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.18...@spectrum-css/infieldbutton@2.0.19)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.18"></a>

## 2.0.18

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.17...@spectrum-css/infieldbutton@2.0.18)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.17"></a>

## 2.0.17

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.15...@spectrum-css/infieldbutton@2.0.17)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.16"></a>

## 2.0.16

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.15...@spectrum-css/infieldbutton@2.0.16)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.15"></a>

## 2.0.15

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.13...@spectrum-css/infieldbutton@2.0.15)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.14"></a>

## 2.0.14

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.13...@spectrum-css/infieldbutton@2.0.14)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.13"></a>

## 2.0.13

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.12...@spectrum-css/infieldbutton@2.0.13)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.12"></a>

## 2.0.12

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.11...@spectrum-css/infieldbutton@2.0.12)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.11"></a>

## 2.0.11

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.10...@spectrum-css/infieldbutton@2.0.11)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.10"></a>

## 2.0.10

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.9...@spectrum-css/infieldbutton@2.0.10)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.9"></a>

## 2.0.9

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.8...@spectrum-css/infieldbutton@2.0.9)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.8"></a>

## 2.0.8

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.7...@spectrum-css/infieldbutton@2.0.8)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.7"></a>

## 2.0.7

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.6...@spectrum-css/infieldbutton@2.0.7)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.6"></a>

## 2.0.6

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.5...@spectrum-css/infieldbutton@2.0.6)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.5"></a>

## 2.0.5

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.4...@spectrum-css/infieldbutton@2.0.5)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.4"></a>

## 2.0.4

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.2...@spectrum-css/infieldbutton@2.0.4)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.3"></a>

## 2.0.3

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.2...@spectrum-css/infieldbutton@2.0.3)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.2"></a>

## 2.0.2

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.1...@spectrum-css/infieldbutton@2.0.2)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.1"></a>

## 2.0.1

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.0...@spectrum-css/infieldbutton@2.0.1)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.0"></a>

## 2.0.0

🗓 2022-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@1.1.9...@spectrum-css/infieldbutton@2.0.0)

- refactor(infieldbutton,inputgroup,pickerbutton)!: drop loudness api ([c97d40e](https://github.com/adobe/spectrum-css/commit/c97d40e))

### 🛑 BREAKING CHANGES

- remove high loudness selectors from pickerbutton, apply quiet background color from inputgroup, change loudness api to quiet for infieldbutton

<a name="1.1.9"></a>

## 1.1.9

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@1.1.8...@spectrum-css/infieldbutton@1.1.9)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="1.1.8"></a>

## 1.1.8

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@1.1.7...@spectrum-css/infieldbutton@1.1.8)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="1.1.7"></a>

## 1.1.7

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@1.1.6...@spectrum-css/infieldbutton@1.1.7)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="1.1.6"></a>

## 1.1.6

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@1.1.5...@spectrum-css/infieldbutton@1.1.6)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="1.1.5"></a>

## 1.1.5

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@1.1.4...@spectrum-css/infieldbutton@1.1.5)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="1.1.4"></a>

## 1.1.4

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@1.1.3...@spectrum-css/infieldbutton@1.1.4)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="1.1.3"></a>

## 1.1.3

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@1.1.2...@spectrum-css/infieldbutton@1.1.3)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="1.1.2"></a>

## 1.1.2

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@1.1.1...@spectrum-css/infieldbutton@1.1.2)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="1.1.1"></a>

## 1.1.1

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@1.1.0...@spectrum-css/infieldbutton@1.1.1)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="1.1.0"></a>

## 1.1.0

🗓 2022-02-16

### ✨ Features

- add InfieldButton component ([6424bf5](https://github.com/adobe/spectrum-css/commit/6424bf5))

### 🐛 Bug fixes

- correct icon positioning, fix RTL support ([de1e55e](https://github.com/adobe/spectrum-css/commit/de1e55e))
