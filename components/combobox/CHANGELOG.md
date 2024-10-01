# Change Log

## 4.0.0-s2-foundations.17

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`57709c0`](https://github.com/adobe/spectrum-css/commit/57709c09f7cfddb67125fa96691ae869ff8840ca) Thanks [@pfulton](https://github.com/pfulton)! - Pull in the corner radii updates for S2

### Patch Changes

- Updated dependencies [[`57709c0`](https://github.com/adobe/spectrum-css/commit/57709c09f7cfddb67125fa96691ae869ff8840ca)]:
  - @spectrum-css/progresscircle@4.0.0-s2-foundations.14
  - @spectrum-css/pickerbutton@6.0.0-s2-foundations.15
  - @spectrum-css/textfield@8.0.0-s2-foundations.15
  - @spectrum-css/popover@8.0.0-s2-foundations.15
  - @spectrum-css/menu@8.0.0-s2-foundations.14
  - @spectrum-css/tokens@15.0.0-s2-foundations.22

## 4.0.0-s2-foundations.16

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`4e80ae6`](https://github.com/adobe/spectrum-css/commit/4e80ae67ddda329a5ed556b57426623c6f0f13f0) Thanks [@pfulton](https://github.com/pfulton)! - ActionButton:

  - Correct --spectrum-actionbutton-background-color-selected-disabled to be --spectrum-actionbutton-(background|border)-color-disabled-selected

  Combobox:

  - Move --spectrum-combobox-min-inline-size and --spectrum-combobox-button-width to the index.css

  FieldGroup:

  - Swap gap back to margin-inline-end on FieldGroup

  Typography:

  - Remap body size to xs if xxs provided

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`9ae725f`](https://github.com/adobe/spectrum-css/commit/9ae725f10ebbb78b62070c4c477cb41cfc1b1ed6) Thanks [@pfulton](https://github.com/pfulton)! - Combobox moved the quiet min-inline-size property to index.css from theme to pick up the t-shirt sizing for the calc.

  Typography increases specificity for the t-shirt sizing.

  Stepper fixes for the disabled + hovered states as well as regressions fixed for the quiet variant.

## 4.0.0-s2-foundations.15

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`11a0032`](https://github.com/adobe/spectrum-css/commit/11a00323addbf28b9430d27d9cbc5f30bc851b65) Thanks [@pfulton](https://github.com/pfulton)! - Bug fixes to S1 & Express theming across all components

### Patch Changes

- Updated dependencies [[`11a0032`](https://github.com/adobe/spectrum-css/commit/11a00323addbf28b9430d27d9cbc5f30bc851b65)]:
  - @spectrum-css/progresscircle@4.0.0-s2-foundations.13
  - @spectrum-css/pickerbutton@6.0.0-s2-foundations.14
  - @spectrum-css/textfield@8.0.0-s2-foundations.14
  - @spectrum-css/popover@8.0.0-s2-foundations.14
  - @spectrum-css/menu@8.0.0-s2-foundations.13
  - @spectrum-css/tokens@15.0.0-s2-foundations.21

## 4.0.0-s2-foundations.14

### Minor Changes

- [#3036](https://github.com/adobe/spectrum-css/pull/3036) [`96686a5`](https://github.com/adobe/spectrum-css/commit/96686a56e2532bc747985b40686783ddd9b98221) Thanks [@rise-erpelding](https://github.com/rise-erpelding)! - [CSS-890]: adjusts --mods to be applied inside of index.css

### Patch Changes

- Updated dependencies [[`96686a5`](https://github.com/adobe/spectrum-css/commit/96686a56e2532bc747985b40686783ddd9b98221)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.18

## 4.0.0-s2-foundations.13

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`a0d6de4`](https://github.com/adobe/spectrum-css/commit/a0d6de45845c9158ca30da1a34e30461a9d0af31) Thanks [@pfulton](https://github.com/pfulton)! - [SWC-240] Quiet combobox picker button should have transparent borders

## 4.0.0-s2-foundations.12

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`5546ec6`](https://github.com/adobe/spectrum-css/commit/5546ec6a508eb249ede78031db22ddf5972e5c05) Thanks [@pfulton](https://github.com/pfulton)! - - Accordion: Flatten sizing variables in theme layer
  - ActionButton: Fix typo in variable name "\*-defaul-selectedt"
  - Move out rtl logical transform from theme to index.css for: calendar, pagination, treeview

### Patch Changes

- Updated dependencies [[`5546ec6`](https://github.com/adobe/spectrum-css/commit/5546ec6a508eb249ede78031db22ddf5972e5c05)]:
  - @spectrum-css/progresscircle@4.0.0-s2-foundations.12
  - @spectrum-css/pickerbutton@6.0.0-s2-foundations.12
  - @spectrum-css/textfield@8.0.0-s2-foundations.12
  - @spectrum-css/popover@8.0.0-s2-foundations.12
  - @spectrum-css/menu@8.0.0-s2-foundations.12
  - @spectrum-css/tokens@15.0.0-s2-foundations.13

## 4.0.0-s2-foundations.11

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`b0862e1`](https://github.com/adobe/spectrum-css/commit/b0862e1a5b95c19443fd919c6baf4b4ea9ba79c1) Thanks [@pfulton](https://github.com/pfulton)! - Updated build to set cssnano to discardUnused: false

### Patch Changes

- Updated dependencies [[`b0862e1`](https://github.com/adobe/spectrum-css/commit/b0862e1a5b95c19443fd919c6baf4b4ea9ba79c1)]:
  - @spectrum-css/progresscircle@4.0.0-s2-foundations.11
  - @spectrum-css/pickerbutton@6.0.0-s2-foundations.11
  - @spectrum-css/textfield@8.0.0-s2-foundations.11
  - @spectrum-css/popover@8.0.0-s2-foundations.11
  - @spectrum-css/menu@8.0.0-s2-foundations.11
  - @spectrum-css/tokens@15.0.0-s2-foundations.12

## 4.0.0-s2-foundations.10

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`0844aad`](https://github.com/adobe/spectrum-css/commit/0844aadba2fefb844a66370ff6e9b4704f6c1543) Thanks [@pfulton](https://github.com/pfulton)! - Fixes to index.css imports to ensure appropriate system mappings get loaded

### Patch Changes

- Updated dependencies [[`0844aad`](https://github.com/adobe/spectrum-css/commit/0844aadba2fefb844a66370ff6e9b4704f6c1543)]:
  - @spectrum-css/progresscircle@4.0.0-s2-foundations.10
  - @spectrum-css/pickerbutton@6.0.0-s2-foundations.10
  - @spectrum-css/textfield@8.0.0-s2-foundations.10
  - @spectrum-css/popover@8.0.0-s2-foundations.10
  - @spectrum-css/menu@8.0.0-s2-foundations.10
  - @spectrum-css/tokens@15.0.0-s2-foundations.10

## 4.0.0-s2-foundations.9

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`84c8721`](https://github.com/adobe/spectrum-css/commit/84c87212ccb37c887225eaff28e84d9f8e608e09) Thanks [@pfulton](https://github.com/pfulton)! - Push out the latest release to the components

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`0a0dace`](https://github.com/adobe/spectrum-css/commit/0a0dacec163234bc73961ef17826cdc33765d9df) Thanks [@pfulton](https://github.com/pfulton)! - Across the board version update to latest build system state

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`681ba47`](https://github.com/adobe/spectrum-css/commit/681ba478c1259d0bbb183670f3188538ec3bee1d) Thanks [@pfulton](https://github.com/pfulton)! - Doing a widespread release on all packages to ensure the latest compiled CSS is published.

- Updated dependencies [[`681ba47`](https://github.com/adobe/spectrum-css/commit/681ba478c1259d0bbb183670f3188538ec3bee1d), [`84c8721`](https://github.com/adobe/spectrum-css/commit/84c87212ccb37c887225eaff28e84d9f8e608e09), [`da47fa2`](https://github.com/adobe/spectrum-css/commit/da47fa2cb18373e74a6718775f2db90bb25868d4), [`0a0dace`](https://github.com/adobe/spectrum-css/commit/0a0dacec163234bc73961ef17826cdc33765d9df)]:
  - @spectrum-css/progresscircle@4.0.0-s2-foundations.9
  - @spectrum-css/pickerbutton@6.0.0-s2-foundations.9
  - @spectrum-css/textfield@8.0.0-s2-foundations.9
  - @spectrum-css/popover@8.0.0-s2-foundations.9
  - @spectrum-css/menu@8.0.0-s2-foundations.9
  - @spectrum-css/tokens@15.0.0-s2-foundations.9

## 4.0.0-s2-foundations.8

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`2633985`](https://github.com/adobe/spectrum-css/commit/2633985775ef5a8fad929e275e55e99b75b10959) Thanks [@pfulton](https://github.com/pfulton)! - Update system property tooling (splitinator) to leverage the selector parser

### Patch Changes

- Updated dependencies [[`2633985`](https://github.com/adobe/spectrum-css/commit/2633985775ef5a8fad929e275e55e99b75b10959)]:
  - @spectrum-css/progresscircle@4.0.0-s2-foundations.8
  - @spectrum-css/pickerbutton@6.0.0-s2-foundations.8
  - @spectrum-css/textfield@8.0.0-s2-foundations.8
  - @spectrum-css/popover@8.0.0-s2-foundations.8
  - @spectrum-css/menu@8.0.0-s2-foundations.8
  - @spectrum-css/tokens@15.0.0-s2-foundations.8

## 4.0.0-s2-foundations.7

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`24a51cc`](https://github.com/adobe/spectrum-css/commit/24a51cc3b682a06a5133c4f5bf72c11a2337ee22) Thanks [@pfulton](https://github.com/pfulton)! - Revert themes asset naming to simplify code review; bug fixes in custom property loading from theme assets

### Patch Changes

- Updated dependencies [[`24a51cc`](https://github.com/adobe/spectrum-css/commit/24a51cc3b682a06a5133c4f5bf72c11a2337ee22)]:
  - @spectrum-css/progresscircle@4.0.0-s2-foundations.7
  - @spectrum-css/pickerbutton@6.0.0-s2-foundations.7
  - @spectrum-css/textfield@8.0.0-s2-foundations.7
  - @spectrum-css/popover@8.0.0-s2-foundations.7
  - @spectrum-css/menu@8.0.0-s2-foundations.7
  - @spectrum-css/tokens@15.0.0-s2-foundations.7

## 4.0.0-s2-foundations.6

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`4d88749`](https://github.com/adobe/spectrum-css/commit/4d887492f98f1f505535680bfb0baa06d24460a0) Thanks [@pfulton](https://github.com/pfulton)! - Inject missing tokens into theme files and adjust logic in the splitinator tool to replace nested variable references to the new system mappings

- Updated dependencies [[`130e137`](https://github.com/adobe/spectrum-css/commit/130e1372b223641efe0a3a23c83ff1d01a70bf1d), [`4d88749`](https://github.com/adobe/spectrum-css/commit/4d887492f98f1f505535680bfb0baa06d24460a0)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.6
  - @spectrum-css/progresscircle@4.0.0-s2-foundations.6
  - @spectrum-css/pickerbutton@6.0.0-s2-foundations.6
  - @spectrum-css/textfield@8.0.0-s2-foundations.6
  - @spectrum-css/popover@8.0.0-s2-foundations.6
  - @spectrum-css/menu@8.0.0-s2-foundations.6

## 4.0.0-s2-foundations.5

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`de1d39f`](https://github.com/adobe/spectrum-css/commit/de1d39fdedc297032735acf97d0f87b6f2e45f50) Thanks [@pfulton](https://github.com/pfulton)! - Fix to how the system mapped custom property names are generated; adding support for pseudo functions, combinators, and complex selectors

- Updated dependencies [[`de1d39f`](https://github.com/adobe/spectrum-css/commit/de1d39fdedc297032735acf97d0f87b6f2e45f50)]:
  - @spectrum-css/progresscircle@4.0.0-s2-foundations.5
  - @spectrum-css/pickerbutton@6.0.0-s2-foundations.5
  - @spectrum-css/textfield@8.0.0-s2-foundations.5
  - @spectrum-css/popover@8.0.0-s2-foundations.5
  - @spectrum-css/menu@8.0.0-s2-foundations.5
  - @spectrum-css/tokens@15.0.0-s2-foundations.5

## 4.0.0-s2-foundations.4

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`485128c`](https://github.com/adobe/spectrum-css/commit/485128ca7947acb064f31e4118044a3f7e3f88b5) Thanks [@pfulton](https://github.com/pfulton)! - Corrects a faulty regex that was negatively affecting compilation of custom properties

- Updated dependencies [[`485128c`](https://github.com/adobe/spectrum-css/commit/485128ca7947acb064f31e4118044a3f7e3f88b5)]:
  - @spectrum-css/progresscircle@4.0.0-s2-foundations.4
  - @spectrum-css/pickerbutton@6.0.0-s2-foundations.4
  - @spectrum-css/textfield@8.0.0-s2-foundations.4
  - @spectrum-css/popover@8.0.0-s2-foundations.4
  - @spectrum-css/menu@8.0.0-s2-foundations.4
  - @spectrum-css/tokens@15.0.0-s2-foundations.4

## 4.0.0-s2-foundations.3

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`6b12d37`](https://github.com/adobe/spectrum-css/commit/6b12d375c12b36f387b331fff42b24bc7c3845df) Thanks [@pfulton](https://github.com/pfulton)! - fixes a compilation issue in the tokens dist artifacts

### Patch Changes

- Updated dependencies [[`6b12d37`](https://github.com/adobe/spectrum-css/commit/6b12d375c12b36f387b331fff42b24bc7c3845df)]:
  - @spectrum-css/progresscircle@4.0.0-s2-foundations.3
  - @spectrum-css/pickerbutton@6.0.0-s2-foundations.3
  - @spectrum-css/textfield@8.0.0-s2-foundations.3
  - @spectrum-css/popover@8.0.0-s2-foundations.3
  - @spectrum-css/menu@8.0.0-s2-foundations.3
  - @spectrum-css/tokens@15.0.0-s2-foundations.3

## 4.0.0-s2-foundations.2

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`b00388b`](https://github.com/adobe/spectrum-css/commit/b00388b3ab026989f261f7bcdd77699521f45d58) Thanks [@pfulton](https://github.com/pfulton)! - Preserves `themes` folder in `dist` artifacts for easier downstream consumption

### Patch Changes

- Updated dependencies [[`b00388b`](https://github.com/adobe/spectrum-css/commit/b00388b3ab026989f261f7bcdd77699521f45d58)]:
  - @spectrum-css/progresscircle@4.0.0-s2-foundations.2
  - @spectrum-css/pickerbutton@6.0.0-s2-foundations.2
  - @spectrum-css/textfield@8.0.0-s2-foundations.2
  - @spectrum-css/popover@8.0.0-s2-foundations.2
  - @spectrum-css/menu@8.0.0-s2-foundations.2
  - @spectrum-css/tokens@15.0.0-s2-foundations.2

## 4.0.0-s2-foundations.1

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`39bbd6c`](https://github.com/adobe/spectrum-css/commit/39bbd6cbb7eac7c71515ef2417554cb115eba00e) Thanks [@pfulton](https://github.com/pfulton)! - Fixes an issue where vars.css was not being populated with the correct values

### Patch Changes

- Updated dependencies [[`39bbd6c`](https://github.com/adobe/spectrum-css/commit/39bbd6cbb7eac7c71515ef2417554cb115eba00e)]:
  - @spectrum-css/progresscircle@4.0.0-s2-foundations.1
  - @spectrum-css/pickerbutton@6.0.0-s2-foundations.1
  - @spectrum-css/textfield@8.0.0-s2-foundations.1
  - @spectrum-css/popover@8.0.0-s2-foundations.1
  - @spectrum-css/menu@8.0.0-s2-foundations.1
  - @spectrum-css/tokens@15.0.0-s2-foundations.1

## 4.0.0-s2-foundations.0

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce) Thanks [@pfulton](https://github.com/pfulton)! - S2 colors + grays foundation

### Patch Changes

- Updated dependencies [[`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce)]:
  - @spectrum-css/progresscircle@4.0.0-s2-foundations.0
  - @spectrum-css/pickerbutton@6.0.0-s2-foundations.0
  - @spectrum-css/textfield@8.0.0-s2-foundations.0
  - @spectrum-css/popover@8.0.0-s2-foundations.0
  - @spectrum-css/menu@8.0.0-s2-foundations.0
  - @spectrum-css/tokens@15.0.0-s2-foundations.0

## 3.1.4

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)! - Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/progresscircle@3.1.4
  - @spectrum-css/pickerbutton@5.1.3
  - @spectrum-css/textfield@7.2.3
  - @spectrum-css/popover@7.1.6
  - @spectrum-css/menu@7.1.7

## 3.1.3

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)! - Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/progresscircle@3.1.3
  - @spectrum-css/pickerbutton@5.1.2
  - @spectrum-css/textfield@7.2.1
  - @spectrum-css/popover@7.1.5
  - @spectrum-css/menu@7.1.6

## 3.1.2

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/progresscircle@3.1.1
  - @spectrum-css/pickerbutton@5.1.1
  - @spectrum-css/textfield@7.1.3
  - @spectrum-css/popover@7.1.2
  - @spectrum-css/menu@7.1.2

## 3.1.1

### Patch Changes

- [#2740](https://github.com/adobe/spectrum-css/pull/2740) [`c0dd6a4`](https://github.com/adobe/spectrum-css/commit/c0dd6a443b410f37f3dc703d75e11c15519fd93e) Thanks [@jawinn](https://github.com/jawinn)! - Build change to remove the `postcss-preset-env` polyfill for the dist output of `:not` selectors containing multiple selectors, to avoid an unintended increase in specificity, which caused some visual regressions.

## 3.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/menu@>=7
  - @spectrum-css/pickerbutton@>=5
  - @spectrum-css/popover@>=7
  - @spectrum-css/progresscircle@>=3
  - @spectrum-css/textfield@>=7
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="3.0.0"></a>

## 3.0.0

🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.1.6...@spectrum-css/combobox@3.0.0)

### ✨ Features

\*use storybook v8 ([#2604](https://github.com/adobe/spectrum-css/issues/2604))([166ab23](https://github.com/adobe/spectrum-css/commit/166ab23))

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="2.1.6"></a>

## 2.1.6

🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.1.5...@spectrum-css/combobox@2.1.6)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.1.5"></a>

## 2.1.5

🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.1.4...@spectrum-css/combobox@2.1.5)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.1.4"></a>

## 2.1.4

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.1.3...@spectrum-css/combobox@2.1.4)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.1.3"></a>

## 2.1.3

🗓
2024-02-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.1.2...@spectrum-css/combobox@2.1.3)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.1.2"></a>

## 2.1.2

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.1.1"></a>

## 2.1.1

🗓
2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.1.0...@spectrum-css/combobox@2.1.1)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.1.0"></a>

## 2.1.0

🗓
2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.48...@spectrum-css/combobox@2.1.0)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.48"></a>

## 2.0.48

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.47...@spectrum-css/combobox@2.0.48)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.47"></a>

## 2.0.47

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.46...@spectrum-css/combobox@2.0.47)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.46"></a>

## 2.0.46

🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.45...@spectrum-css/combobox@2.0.46)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.45"></a>

## 2.0.45

🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.43...@spectrum-css/combobox@2.0.45)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.44"></a>

## 2.0.44

🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.43...@spectrum-css/combobox@2.0.44)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.43"></a>

## 2.0.43

🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.42...@spectrum-css/combobox@2.0.43)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.42"></a>

## 2.0.42

🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.41...@spectrum-css/combobox@2.0.42)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.41"></a>

## 2.0.41

🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.40...@spectrum-css/combobox@2.0.41)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.40"></a>

## 2.0.40

🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.39...@spectrum-css/combobox@2.0.40)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.39"></a>

## 2.0.39

🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.38...@spectrum-css/combobox@2.0.39)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.38"></a>

## 2.0.38

🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.37...@spectrum-css/combobox@2.0.38)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.37"></a>

## 2.0.37

🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.36...@spectrum-css/combobox@2.0.37)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.36"></a>

## 2.0.36

🗓
2023-09-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.35...@spectrum-css/combobox@2.0.36)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.35"></a>

## 2.0.35

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.34...@spectrum-css/combobox@2.0.35)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.34"></a>

## 2.0.34

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.33...@spectrum-css/combobox@2.0.34)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.33"></a>

## 2.0.33

🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.32...@spectrum-css/combobox@2.0.33)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.32"></a>

## 2.0.32

🗓
2023-08-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.31...@spectrum-css/combobox@2.0.32)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="2.0.31"></a>

## 2.0.31

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.30...@spectrum-css/combobox@2.0.31)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.30"></a>

## 2.0.30

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.28...@spectrum-css/combobox@2.0.30)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.29"></a>

## 2.0.29

🗓
2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.28...@spectrum-css/combobox@2.0.29)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.28"></a>

## 2.0.28

🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.27...@spectrum-css/combobox@2.0.28)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.27"></a>

## 2.0.27

🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.26...@spectrum-css/combobox@2.0.27)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.26"></a>

## 2.0.26

🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.25...@spectrum-css/combobox@2.0.26)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.25"></a>

## 2.0.25

🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.24...@spectrum-css/combobox@2.0.25)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.24"></a>

## 2.0.24

🗓
2023-07-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.23...@spectrum-css/combobox@2.0.24)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.23"></a>

## 2.0.23

🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.22...@spectrum-css/combobox@2.0.23)

### 🐛 Bug fixes

\*icon sizing in Storybook story templates ([#2037](https://github.com/adobe/spectrum-css/issues/2037))([c90c8a3](https://github.com/adobe/spectrum-css/commit/c90c8a3))

<a name="2.0.22"></a>

## 2.0.22

🗓
2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.21...@spectrum-css/combobox@2.0.22)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.21"></a>

## 2.0.21

🗓
2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.20...@spectrum-css/combobox@2.0.21)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.20"></a>

## 2.0.20

🗓
2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.19...@spectrum-css/combobox@2.0.20)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.19"></a>

## 2.0.19

🗓
2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.18...@spectrum-css/combobox@2.0.19)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.18"></a>

## 2.0.18

🗓
2023-06-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.17...@spectrum-css/combobox@2.0.18)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.17"></a>

## 2.0.17

🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.16...@spectrum-css/combobox@2.0.17)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.16"></a>

## 2.0.16

🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.15...@spectrum-css/combobox@2.0.16)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.15"></a>

## 2.0.15

🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.14...@spectrum-css/combobox@2.0.15)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="2.0.14"></a>

## 2.0.14

🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.13...@spectrum-css/combobox@2.0.14)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.13"></a>

## 2.0.13

🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.12...@spectrum-css/combobox@2.0.13)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.12"></a>

## 2.0.12

🗓 2023-05-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.11...@spectrum-css/combobox@2.0.12)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.11"></a>

## 2.0.11

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.10...@spectrum-css/combobox@2.0.11)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.10"></a>

## 2.0.10

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.9...@spectrum-css/combobox@2.0.10)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.9"></a>

## 2.0.9

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.8...@spectrum-css/combobox@2.0.9)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.8"></a>

## 2.0.8

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.7...@spectrum-css/combobox@2.0.8)

### 🐛 Bug fixes

- **textfield, stepper:** button padding and focus indicator ([#1863](https://github.com/adobe/spectrum-css/issues/1863)) ([7963b85](https://github.com/adobe/spectrum-css/commit/7963b85))

<a name="2.0.7"></a>

## 2.0.7

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.6...@spectrum-css/combobox@2.0.7)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.6"></a>

## 2.0.6

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.5...@spectrum-css/combobox@2.0.6)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.5"></a>

## 2.0.5

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.4...@spectrum-css/combobox@2.0.5)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.4"></a>

## 2.0.4

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.3...@spectrum-css/combobox@2.0.4)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.3"></a>

## 2.0.3

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.2...@spectrum-css/combobox@2.0.3)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.2"></a>

## 2.0.2

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.1...@spectrum-css/combobox@2.0.2)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.1"></a>

## 2.0.1

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.0...@spectrum-css/combobox@2.0.1)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="2.0.0"></a>

## 2.0.0

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.16...@spectrum-css/combobox@2.0.0)

- fix(textfield, combobox)!: adjust padding calculations (#1803) ([09c1bdc](https://github.com/adobe/spectrum-css/commit/09c1bdc)), closes [#1803](https://github.com/adobe/spectrum-css/issues/1803)

### 🛑 BREAKING CHANGES

- removes `--mod-combobox-icon-size`, `--mod-combobox-spacing-block-start-to-border`, `--mod-combobox-spacing-inline-start-to-textfield`, `--mod-combobox-spacing-block-start-edge-to-textfield`, `--mod-combobox-spacing-block-end-edge-to-textfield`, and `--mod-combobox-spacing-inline-start-edge-to-textfield`.

Additionally:

- fix: exclude border width from padding with text inputs + more fixes

* Textfield and Combobox: exclude border width from padding calculations
  because most of the to-edge tokens include the border, and the values
  were 1px larger than they should have been.
* Textfield and Combobox: fix corner radius of focus indicator when
  using a larger border radius (e.g. try setting a --mod border width
  of 5px; the calculation adding the border width was incorrect)
* Combobox: adjust styles so custom property for border width is
  correctly overriding everything from its sub-components. Previously
  using --mod-combobox-border-width had no effect.
* Combobox: simplify/remove some custom properties related to those
  fixes and quiet variant.

- fix(combobox): border-radius should not increase for t-shirt sizes

Per design feedback, the border-radius value should not be increasing
for these t-shirt sizes.

- fix(combobox): calculate the button x-offset on quiet

Use a corrected calculation of the x-offset for the picker button on the
quiet variant. Based on design feedback for the component: "The point is
to line up the chevron icon with the end of the component so those
elements are flushed".

- fix(combobox): mods update after changes

Regenerate mods after fixes that have removed and renamed some
properties.

- feat(textfield): add 'size' control to storybook

Add "t-shirt" size control to Textfield stories. The arg was already
there, but it was missing a control for testing.

<a name="1.0.16"></a>

## 1.0.16

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.15...@spectrum-css/combobox@1.0.16)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.15"></a>

## 1.0.15

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.13...@spectrum-css/combobox@1.0.15)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.14"></a>

## 1.0.14

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.13...@spectrum-css/combobox@1.0.14)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.13"></a>

## 1.0.13

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.12...@spectrum-css/combobox@1.0.13)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.12"></a>

## 1.0.12

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.11...@spectrum-css/combobox@1.0.12)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.11"></a>

## 1.0.11

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.10...@spectrum-css/combobox@1.0.11)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.10"></a>

## 1.0.10

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.9...@spectrum-css/combobox@1.0.10)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.9"></a>

## 1.0.9

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.8...@spectrum-css/combobox@1.0.9)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.8"></a>

## 1.0.8

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.6...@spectrum-css/combobox@1.0.8)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.7"></a>

## 1.0.7

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.6...@spectrum-css/combobox@1.0.7)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.6"></a>

## 1.0.6

🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.4...@spectrum-css/combobox@1.0.6)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.5"></a>

## 1.0.5

🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.4...@spectrum-css/combobox@1.0.5)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.4"></a>

## 1.0.4

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.3...@spectrum-css/combobox@1.0.4)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.3"></a>

## 1.0.3

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.2...@spectrum-css/combobox@1.0.3)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.2"></a>

## 1.0.2

🗓 2023-03-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.1...@spectrum-css/combobox@1.0.2)

**Note:** Version bump only for package @spectrum-css/combobox

<a name="1.0.1"></a>

## 1.0.1

🗓 2023-03-28

**Note:** Version bump only for package @spectrum-css/combobox

### Component separated from InputGroup

Combobox was previously a variant style for InputGroup. **InputGroup is deprecated**. The classes listed below containing `InputGroup` have been renamed or removed:

- `.spectrum-InputGroup-textfield` -> `.spectrum-Combobox-textfield`
- `.spectrum-InputGroup-input` -> `.spectrum-Combobox-input`
- `.spectrum-InputGroup-button` -> `.spectrum-Combobox-button`
- `.InputGroup` -> removed
