# Change Log

## 14.0.0-next.7

### Patch Changes

- [#2725](https://github.com/adobe/spectrum-css/pull/2725) [`81edcde`](https://github.com/adobe/spectrum-css/commit/81edcde7fc606acd86b2bdb4379e0d2f96a5e211) Thanks [@jawinn](https://github.com/jawinn)! - #### refactor: remove spectrum-ButtonWithFocusRing placeholder class extend

  Removes the need for the extend from this placeholder class, as the styles it provides have diverged slightly from what is in button and it was causing some unnecessary CSS to override.
  This should not result in any changed visuals or behavior, as the same CSS has been integrated.

## 14.0.0-next.6

### Major Changes

- [#2600](https://github.com/adobe/spectrum-css/pull/2600) [`3559678`](https://github.com/adobe/spectrum-css/commit/35596780a1309dd145fa565461d330ddfaf50e68) Thanks [@jawinn](https://github.com/jawinn)!

#### Spectrum 2 migration

Button now uses Spectrum 2 tokens and specifications, which includes many color changes to all variants. A few other notable changes:

- Outline buttons are no longer available in accent and negative options — use the filled variant instead.
- Medium size is now the default. The class `.spectrum-Button--sizeM` is now unnecessary for this size, and has been removed.
- The `.spectrum-Button--fill` class is no longer needed and has been removed.

The following `--mod` custom properties have been renamed:

- `--mod-line-height-100` has been renamed to `--mod-button-line-height`
- `--mod-sans-font-family-stack` has been renamed to `--mod-button-font-family`
- `--mod-animation-duration-100` has been renamed to `--mod-button-animation-duration`
- `--mod-bold-font-weight` has been renamed to `--mod-button-font-weight`

## 14.0.0-next.5

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/icon@>=7
  - @spectrum-css/progresscircle@>=3
  - @spectrum-css/tokens@>=14

## 14.0.1

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
  - @spectrum-css/progresscircle@5.0.1

## 14.0.0

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
  - @spectrum-css/progresscircle@5.0.0
  - @spectrum-css/icon@9.0.0

## 13.6.1

### Patch Changes

- [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)! - Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/progresscircle@4.0.1
  - @spectrum-css/icon@8.0.1

## 13.6.0

### Minor Changes

- [#3359](https://github.com/adobe/spectrum-css/pull/3359) [`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b) Thanks [@cdransf](https://github.com/cdransf)! - This resolves our remaining stylelint issues around undefined tokens, rule order, unused values and color syntax.

  - Updates invalid color syntax from `rgba(N, N, N, N)` to `rgba(N N N / N)`.
  - In cases of duplicate properties, preserves the property that would be applied given current code structure.
  - Updates misnamed tokens to use valid tokens (`table/index.css`).

- [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)! - Simplify how the `--system` properties are mapped. By updating the logic in the `postcss-add-theming-layer`, we are now shipping cleaner, more readable `--system` property names. These custom properties are documented as _NOT_ a part of the component API so although these result in a change to the custom property names, it does not impact the properties that are in the API and so do not constitute a breaking change. Expect to see no change to how component theming works or any visual regressions as a result of this change.

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/progresscircle@4.0.0
  - @spectrum-css/icon@8.0.0

## 13.5.0

### Minor Changes

- [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)! - Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/progresscircle@3.2.0
  - @spectrum-css/icon@7.2.0

## 13.4.0

### Minor Changes

- [#3197](https://github.com/adobe/spectrum-css/pull/3197) [`1eac198`](https://github.com/adobe/spectrum-css/commit/1eac198754ca1e60f96a64c7cf5e7c7a4758b1f3) Thanks [@cdransf](https://github.com/cdransf)! - Replaces all of occurrences of --spectrum-component-pill-edge-to-text-_ (intended to be used as padding) in the button component with the appropriate corner-radius-_ tokens.

## 13.3.0

### Minor Changes

- [#3086](https://github.com/adobe/spectrum-css/pull/3086) [`d49ea11`](https://github.com/adobe/spectrum-css/commit/d49ea118abbeb0c2195630dcccf64ac64bbcacbc) Thanks [@aramos-adobe](https://github.com/aramos-adobe)! - Adds the ability to disable text wrapping within the button component's label by applying the class `.spectrum-Button--noWrap` to `.spectrum-Button`. If the text overflows the maximum allowed width of the button, an ellipsis `...` indicator will show. Please note that this option is not a part of the design specification and should be used carefully, with consideration of this overflow behavior and the readability of the button's content.

## 13.2.0

### Minor Changes

- [#3078](https://github.com/adobe/spectrum-css/pull/3078) [`06491f3`](https://github.com/adobe/spectrum-css/commit/06491f3a7983bdf0fe0acf350623eed7297ad935) Thanks [@cdransf](https://github.com/cdransf)! - Includes fixes and updates to the colors used in forced-colors / high contrast mode. In Windows high contrast, a different background was showing behind the label text, as a result of extra text readability backplates being rendered. `forced-color-adjust: none` is now applied to the child label element to fix this. The appropriate `ButtonFace`/`ButtonText` system colors are also now defined instead of relying on the default. The existing use of `Highlight` is now paired with `HighlightText` to ensure contrast by using a matching foreground/background pair.

## 13.1.3

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)! - Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/progresscircle@3.1.4
  - @spectrum-css/icon@7.1.4

## 13.1.2

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)! - Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/progresscircle@3.1.3
  - @spectrum-css/icon@7.1.3

## 13.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/progresscircle@3.1.1
  - @spectrum-css/icon@7.1.1

## 13.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

<a name="13.0.0"></a>

## 13.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@12.0.2...@spectrum-css/button@13.0.0)

### ✨ Features

\*use storybook v8 ([#2604](https://github.com/adobe/spectrum-css/issues/2604))([166ab23](https://github.com/adobe/spectrum-css/commit/166ab23))

### 🐛 Bug fixes

-     **button:**pending state width, transition ([#2570](https://github.com/adobe/spectrum-css/issues/2570))([7b67bff](https://github.com/adobe/spectrum-css/commit/7b67bff))

  \*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

      	###
      	🛑 BREAKING CHANGES

      		*
      		- Removes component-builder & component-builder-simple for script leveraging postcss

* Imports added to index.css and themes/express.css

<a name="12.0.2"></a>

## 12.0.2

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@12.0.1...@spectrum-css/button@12.0.2)

**Note:** Version bump only for package @spectrum-css/button

<a name="12.0.1"></a>

## 12.0.1

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@12.0.0...@spectrum-css/button@12.0.1)

**Note:** Version bump only for package @spectrum-css/button

<a name="12.0.0"></a>

## 12.0.0

🗓 2024-02-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@11.3.1...@spectrum-css/button@12.0.0)

### 🐛 Bug fixes

- **button:**support for wrapping text ([#2248](https://github.com/adobe/spectrum-css/issues/2248))([3f14a86](https://github.com/adobe/spectrum-css/commit/3f14a86))

      ###
      🛑 BREAKING CHANGES

      	*
      	**button:** changes vertical flex alignment to start.

Previously when the button had an icon and the text was wrapping, the
icon was vertically aligned center and the text was aligned center.

This fixes this to match with the design spec: for the version of the
button that uses a workflow icon, the icon should stay aligned to the
top, and the text should be aligned left (start). This uses the defined
token for the space between the top of the component and the workflow
icon (--spectrum-component-top-to-workflow-icon-\*).

- docs(button): rename storybook control to layout

Rename Storybook control for stacking buttons to "layout" with specified
options, which is a more appropriate name. The control has also been
made visible.

- fix(button): support any existing use of ui icons

Support any existing use of ui icons with the updated wrapping behavior.
And add Chromatic only testing of them to the Wrapping story.

Workflow icons are intended, with the use of the
spectrum-component-top-to-workflow-icon tokens, but UI icons have not
yet been specifically excluded in guidelines and are currently in use
within SplitButton in this library. This keeps UI icons that are
smaller than the intended workflow icon, better vertically centered
with the text within the button.

- feat(button): mod property for icon margin top

Add a mod property to make it easy to modify the margin-block-start of
the icon, in case of alignment issues with icons that are not the
intended workflow sizes.

<a name="11.3.1"></a>

## 11.3.1

🗓 2024-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@11.3.0...@spectrum-css/button@11.3.1)

**Note:** Version bump only for package @spectrum-css/button

<a name="11.3.0"></a>

## 11.3.0

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@11.2.1...@spectrum-css/button@11.3.0)

### ✨ Features

- **button:**pending state([0b82dd9](https://github.com/adobe/spectrum-css/commit/0b82dd9))

<a name="11.2.1"></a>

## 11.2.1

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-css/button

<a name="11.2.0"></a>

## 11.2.0

🗓 2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@11.1.0...@spectrum-css/button@11.2.0)

**Note:** Version bump only for package @spectrum-css/button

<a name="11.1.0"></a>

## 11.1.0

🗓 2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@11.0.19...@spectrum-css/button@11.1.0)

### ✨ Features

- **overlay,commons:**deprecate overlay; migrate references to commons ([#2429](https://github.com/adobe/spectrum-css/issues/2429))([7eecd96](https://github.com/adobe/spectrum-css/commit/7eecd96))

### 🐛 Bug fixes

- **commons:**rename and deprecate mods referencing global tokens ([#2423](https://github.com/adobe/spectrum-css/issues/2423))([3a49432](https://github.com/adobe/spectrum-css/commit/3a49432))

<a name="11.0.19"></a>

## 11.0.19

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@11.0.18...@spectrum-css/button@11.0.19)

**Note:** Version bump only for package @spectrum-css/button

<a name="11.0.18"></a>

## 11.0.18

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@11.0.17...@spectrum-css/button@11.0.18)

**Note:** Version bump only for package @spectrum-css/button

<a name="11.0.17"></a>

## 11.0.17

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@11.0.16...@spectrum-css/button@11.0.17)

**Note:** Version bump only for package @spectrum-css/button

<a name="11.0.16"></a>

## 11.0.16

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@11.0.14...@spectrum-css/button@11.0.16)

**Note:** Version bump only for package @spectrum-css/button

<a name="11.0.15"></a>

## 11.0.15

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@11.0.14...@spectrum-css/button@11.0.15)

**Note:** Version bump only for package @spectrum-css/button

<a name="11.0.14"></a>

## 11.0.14

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@11.0.13...@spectrum-css/button@11.0.14)

**Note:** Version bump only for package @spectrum-css/button

<a name="11.0.13"></a>

## 11.0.13

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@11.0.12...@spectrum-css/button@11.0.13)

**Note:** Version bump only for package @spectrum-css/button

<a name="11.0.12"></a>

## 11.0.12

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@11.0.11...@spectrum-css/button@11.0.12)

**Note:** Version bump only for package @spectrum-css/button

<a name="11.0.11"></a>

## 11.0.11

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@11.0.10...@spectrum-css/button@11.0.11)

**Note:** Version bump only for package @spectrum-css/button

<a name="11.0.10"></a>

## 11.0.10

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@11.0.9...@spectrum-css/button@11.0.10)

**Note:** Version bump only for package @spectrum-css/button

<a name="11.0.9"></a>

## 11.0.9

🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@11.0.8...@spectrum-css/button@11.0.9)

**Note:** Version bump only for package @spectrum-css/button

<a name="11.0.8"></a>

## 11.0.8

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@11.0.7...@spectrum-css/button@11.0.8)

**Note:** Version bump only for package @spectrum-css/button

<a name="11.0.7"></a>

## 11.0.7

🗓 2023-09-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@11.0.6...@spectrum-css/button@11.0.7)

**Note:** Version bump only for package @spectrum-css/button

<a name="11.0.6"></a>

## 11.0.6

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@11.0.5...@spectrum-css/button@11.0.6)

**Note:** Version bump only for package @spectrum-css/button

<a name="11.0.5"></a>

## 11.0.5

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@11.0.4...@spectrum-css/button@11.0.5)

**Note:** Version bump only for package @spectrum-css/button

<a name="11.0.4"></a>

## 11.0.4

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@11.0.3...@spectrum-css/button@11.0.4)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="11.0.3"></a>

## 11.0.3

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@11.0.2...@spectrum-css/button@11.0.3)

**Note:** Version bump only for package @spectrum-css/button

<a name="11.0.2"></a>

## 11.0.2

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@11.0.0...@spectrum-css/button@11.0.2)

**Note:** Version bump only for package @spectrum-css/button

<a name="11.0.1"></a>

## 11.0.1

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@11.0.0...@spectrum-css/button@11.0.1)

**Note:** Version bump only for package @spectrum-css/button

<a name="11.0.0"></a>

## 11.0.0

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.1.14...@spectrum-css/button@11.0.0)

\*refactor(button)!: replace focus-ring with focus-visible([5ec4849](https://github.com/adobe/spectrum-css/commit/5ec4849))

### 🛑 BREAKING CHANGES

    		*
    		use native focus-visible pseudo class for focus styling on button and basebutton

<a name="10.1.14"></a>

## 10.1.14

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.1.13...@spectrum-css/button@10.1.14)

**Note:** Version bump only for package @spectrum-css/button

<a name="10.1.13"></a>

## 10.1.13

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.1.12...@spectrum-css/button@10.1.13)

**Note:** Version bump only for package @spectrum-css/button

<a name="10.1.12"></a>

## 10.1.12

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.1.11...@spectrum-css/button@10.1.12)

**Note:** Version bump only for package @spectrum-css/button

<a name="10.1.11"></a>

## 10.1.11

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.1.10...@spectrum-css/button@10.1.11)

**Note:** Version bump only for package @spectrum-css/button

<a name="10.1.10"></a>

## 10.1.10

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.1.9...@spectrum-css/button@10.1.10)

**Note:** Version bump only for package @spectrum-css/button

<a name="10.1.9"></a>

## 10.1.9

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.1.8...@spectrum-css/button@10.1.9)

### 🐛 Bug fixes

- **button:**add explicit highcontrast variables for disabled color ([#1985](https://github.com/adobe/spectrum-css/issues/1985))([8697c37](https://github.com/adobe/spectrum-css/commit/8697c37))

<a name="10.1.8"></a>

## 10.1.8

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.1.7...@spectrum-css/button@10.1.8)

**Note:** Version bump only for package @spectrum-css/button

<a name="10.1.7"></a>

## 10.1.7

🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.1.6...@spectrum-css/button@10.1.7)

**Note:** Version bump only for package @spectrum-css/button

<a name="10.1.6"></a>

## 10.1.6

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.1.5...@spectrum-css/button@10.1.6)

**Note:** Version bump only for package @spectrum-css/button

<a name="10.1.5"></a>

## 10.1.5

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.1.4...@spectrum-css/button@10.1.5)

**Note:** Version bump only for package @spectrum-css/button

<a name="10.1.4"></a>

## 10.1.4

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.1.3...@spectrum-css/button@10.1.4)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="10.1.3"></a>

## 10.1.3

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.1.2...@spectrum-css/button@10.1.3)

**Note:** Version bump only for package @spectrum-css/button

<a name="10.1.2"></a>

## 10.1.2

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.1.1...@spectrum-css/button@10.1.2)

**Note:** Version bump only for package @spectrum-css/button

<a name="10.1.1"></a>

## 10.1.1

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.1.0...@spectrum-css/button@10.1.1)

**Note:** Version bump only for package @spectrum-css/button

<a name="10.1.0"></a>

## 10.1.0

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.0.11...@spectrum-css/button@10.1.0)

### ✨ Features

- **alertbanner:** add AlertBanner component ([#1798](https://github.com/adobe/spectrum-css/issues/1798)) ([1610e7a](https://github.com/adobe/spectrum-css/commit/1610e7a))

<a name="10.0.11"></a>

## 10.0.11

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.0.10...@spectrum-css/button@10.0.11)

**Note:** Version bump only for package @spectrum-css/button

<a name="10.0.10"></a>

## 10.0.10

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.0.9...@spectrum-css/button@10.0.10)

**Note:** Version bump only for package @spectrum-css/button

<a name="10.0.9"></a>

## 10.0.9

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.0.8...@spectrum-css/button@10.0.9)

**Note:** Version bump only for package @spectrum-css/button

<a name="10.0.8"></a>

## 10.0.8

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.0.7...@spectrum-css/button@10.0.8)

**Note:** Version bump only for package @spectrum-css/button

<a name="10.0.7"></a>

## 10.0.7

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.0.6...@spectrum-css/button@10.0.7)

**Note:** Version bump only for package @spectrum-css/button

<a name="10.0.6"></a>

## 10.0.6

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.0.5...@spectrum-css/button@10.0.6)

**Note:** Version bump only for package @spectrum-css/button

<a name="10.0.5"></a>

## 10.0.5

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.0.4...@spectrum-css/button@10.0.5)

**Note:** Version bump only for package @spectrum-css/button

<a name="10.0.4"></a>

## 10.0.4

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.0.3...@spectrum-css/button@10.0.4)

**Note:** Version bump only for package @spectrum-css/button

<a name="10.0.3"></a>

## 10.0.3

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.0.2...@spectrum-css/button@10.0.3)

**Note:** Version bump only for package @spectrum-css/button

<a name="10.0.2"></a>

## 10.0.2

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.0.0...@spectrum-css/button@10.0.2)

**Note:** Version bump only for package @spectrum-css/button

<a name="10.0.1"></a>

## 10.0.1

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@10.0.0...@spectrum-css/button@10.0.1)

**Note:** Version bump only for package @spectrum-css/button

<a name="10.0.0"></a>

## 10.0.0

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@9.1.6...@spectrum-css/button@10.0.0)

- fix(button)!: height and accessibility fixes (#1794) ([132576a](https://github.com/adobe/spectrum-css/commit/132576a)), closes [#1794](https://github.com/adobe/spectrum-css/issues/1794)

### 🛑 BREAKING CHANGES

- removes: `--mod-button-padding-label-top` & `--mod-button-padding-label-bottom`. Use: `--mod-button-top-to-text`& `--mod-button-bottom-to-text` instead.

Additional changes:

- fix(button): update aria-labels for icon only variant
- fix(button): remove unneeded isOpen attribute
- fix(button): override icon size for icon only
- fix(button): update line height
- fix(button): update button padding with custom tokens
- fix(button): remove unneeded aria-labels

<a name="9.1.6"></a>

## 9.1.6

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@9.1.5...@spectrum-css/button@9.1.6)

**Note:** Version bump only for package @spectrum-css/button

<a name="9.1.5"></a>

## 9.1.5

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@9.1.4...@spectrum-css/button@9.1.5)

**Note:** Version bump only for package @spectrum-css/button

<a name="9.1.4"></a>

## 9.1.4

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@9.1.3...@spectrum-css/button@9.1.4)

**Note:** Version bump only for package @spectrum-css/button

<a name="9.1.3"></a>

## 9.1.3

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@9.1.1...@spectrum-css/button@9.1.3)

**Note:** Version bump only for package @spectrum-css/button

<a name="9.1.2"></a>

## 9.1.2

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@9.1.1...@spectrum-css/button@9.1.2)

**Note:** Version bump only for package @spectrum-css/button

<a name="9.1.1"></a>

## 9.1.1

🗓 2023-04-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@9.1.0...@spectrum-css/button@9.1.1)

### 🐛 Bug fixes

- **button:** icon only spacing ([#1768](https://github.com/adobe/spectrum-css/issues/1768)) ([dc33b04](https://github.com/adobe/spectrum-css/commit/dc33b04))

<a name="9.1.0"></a>

## 9.1.0

🗓 2023-04-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@9.0.14...@spectrum-css/button@9.1.0)

### ✨ Features

- **button:** add icon only variant ([#1755](https://github.com/adobe/spectrum-css/issues/1755)) ([ec34d58](https://github.com/adobe/spectrum-css/commit/ec34d58))

<a name="9.0.14"></a>

## 9.0.14

🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@9.0.12...@spectrum-css/button@9.0.14)

**Note:** Version bump only for package @spectrum-css/button

<a name="9.0.13"></a>

## 9.0.13

🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@9.0.12...@spectrum-css/button@9.0.13)

**Note:** Version bump only for package @spectrum-css/button

<a name="9.0.12"></a>

## 9.0.12

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@9.0.11...@spectrum-css/button@9.0.12)

**Note:** Version bump only for package @spectrum-css/button

<a name="9.0.11"></a>

## 9.0.11

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@9.0.10...@spectrum-css/button@9.0.11)

**Note:** Version bump only for package @spectrum-css/button

<a name="9.0.10"></a>

## 9.0.10

🗓 2023-03-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@9.0.9...@spectrum-css/button@9.0.10)

**Note:** Version bump only for package @spectrum-css/button

<a name="9.0.9"></a>

## 9.0.9

🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@9.0.8...@spectrum-css/button@9.0.9)

**Note:** Version bump only for package @spectrum-css/button

<a name="9.0.8"></a>

## 9.0.8

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@9.0.7...@spectrum-css/button@9.0.8)

**Note:** Version bump only for package @spectrum-css/button

<a name="9.0.7"></a>

## 9.0.7

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@9.0.6...@spectrum-css/button@9.0.7)

**Note:** Version bump only for package @spectrum-css/button

<a name="9.0.6"></a>

## 9.0.6

🗓 2023-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@9.0.5...@spectrum-css/button@9.0.6)

**Note:** Version bump only for package @spectrum-css/button

<a name="9.0.5"></a>

## 9.0.5

🗓 2023-03-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@9.0.4...@spectrum-css/button@9.0.5)

**Note:** Version bump only for package @spectrum-css/button

<a name="9.0.4"></a>

## 9.0.4

🗓 2023-02-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@9.0.3...@spectrum-css/button@9.0.4)

**Note:** Version bump only for package @spectrum-css/button

<a name="9.0.3"></a>

## 9.0.3

🗓 2023-02-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@9.0.2...@spectrum-css/button@9.0.3)

**Note:** Version bump only for package @spectrum-css/button

<a name="9.0.2"></a>

## 9.0.2

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@9.0.1...@spectrum-css/button@9.0.2)

**Note:** Version bump only for package @spectrum-css/button

<a name="9.0.1"></a>

## 9.0.1

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@9.0.0...@spectrum-css/button@9.0.1)

**Note:** Version bump only for package @spectrum-css/button

<a name="9.0.0"></a>

## 9.0.0

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@8.0.0...@spectrum-css/button@9.0.0)

- chore(tokens)!: use latest dependency & fix build error (#1591) ([f2532e7](https://github.com/adobe/spectrum-css/commit/f2532e7)), closes [#1591](https://github.com/adobe/spectrum-css/issues/1591)

### 🛑 BREAKING CHANGES

- uses latest `@adobe/spectrum-tokens` dependency which includes token renames

<a name="8.0.0"></a>

## 8.0.0

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@6.0.21...@spectrum-css/button@8.0.0)

- feat(button)!: migrating button to core-tokens (CSS-97) (#1479) ([0640be0](https://github.com/adobe/spectrum-css/commit/0640be0)), closes [#1479](https://github.com/adobe/spectrum-css/issues/1479)

### 🛑 BREAKING CHANGES

- migrates the Button to core tokens

<a name="7.0.0"></a>

## 7.0.0

🗓 2023-01-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@7.0.0-beta.6...@spectrum-css/button@7.0.0)

- feat(button)!: migrating button to core-tokens (CSS-97) (#1479) ([0640be0](https://github.com/adobe/spectrum-css/commit/0640be0)), closes [#1479](https://github.com/adobe/spectrum-css/issues/1479)

### 🛑 BREAKING CHANGES

- migrates the Button to core tokens

<a name="7.0.0-beta.5"></a>

## 7.0.0-beta.5

🗓 2023-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@6.0.20...@spectrum-css/button@7.0.0-beta.5)

### ✨ Features

- **button!:** core token migration for button ([28786ab](https://github.com/adobe/spectrum-css/commit/28786ab))
- fix label padding ([9f1517a](https://github.com/adobe/spectrum-css/commit/9f1517a))
- logical padding ([bc7bb10](https://github.com/adobe/spectrum-css/commit/bc7bb10))
- migrating to core tokens v5.0.0 ([6e640ba](https://github.com/adobe/spectrum-css/commit/6e640ba))

<a name="6.0.21"></a>

## 6.0.21

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@6.0.20...@spectrum-css/button@6.0.21)

**Note:** Version bump only for package @spectrum-css/button

<a name="6.0.20"></a>

## 6.0.20

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@6.0.19...@spectrum-css/button@6.0.20)

**Note:** Version bump only for package @spectrum-css/button

<a name="6.0.19"></a>

## 6.0.19

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@6.0.17...@spectrum-css/button@6.0.19)

**Note:** Version bump only for package @spectrum-css/button

<a name="6.0.18"></a>

## 6.0.18

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@6.0.17...@spectrum-css/button@6.0.18)

**Note:** Version bump only for package @spectrum-css/button

<a name="6.0.17"></a>

## 6.0.17

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@6.0.16...@spectrum-css/button@6.0.17)

**Note:** Version bump only for package @spectrum-css/button

<a name="6.0.16"></a>

## 6.0.16

🗓 2022-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@6.0.14...@spectrum-css/button@6.0.16)

**Note:** Version bump only for package @spectrum-css/button

<a name="6.0.15"></a>

## 6.0.15

🗓 2022-12-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@6.0.14...@spectrum-css/button@6.0.15)

**Note:** Version bump only for package @spectrum-css/button

<a name="6.0.14"></a>

## 6.0.14

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@6.0.13...@spectrum-css/button@6.0.14)

**Note:** Version bump only for package @spectrum-css/button

<a name="6.0.13"></a>

## 6.0.13

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@6.0.12...@spectrum-css/button@6.0.13)

**Note:** Version bump only for package @spectrum-css/button

<a name="6.0.12"></a>

## 6.0.12

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@6.0.11...@spectrum-css/button@6.0.12)

**Note:** Version bump only for package @spectrum-css/button

<a name="6.0.11"></a>

## 6.0.11

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@6.0.10...@spectrum-css/button@6.0.11)

### 🐛 Bug fixes

- button WHCM ([495c409](https://github.com/adobe/spectrum-css/commit/495c409))
- button WHCM disabled text ([124f923](https://github.com/adobe/spectrum-css/commit/124f923))
- remove commented lines from button ([3f857b9](https://github.com/adobe/spectrum-css/commit/3f857b9))

<a name="6.0.10"></a>

## 6.0.10

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@6.0.9...@spectrum-css/button@6.0.10)

**Note:** Version bump only for package @spectrum-css/button

<a name="6.0.9"></a>

## 6.0.9

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@6.0.8...@spectrum-css/button@6.0.9)

**Note:** Version bump only for package @spectrum-css/button

<a name="6.0.8"></a>

## 6.0.8

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@6.0.7...@spectrum-css/button@6.0.8)

**Note:** Version bump only for package @spectrum-css/button

<a name="6.0.7"></a>

## 6.0.7

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@6.0.6...@spectrum-css/button@6.0.7)

**Note:** Version bump only for package @spectrum-css/button

<a name="6.0.6"></a>

## 6.0.6

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@6.0.5...@spectrum-css/button@6.0.6)

**Note:** Version bump only for package @spectrum-css/button

<a name="6.0.5"></a>

## 6.0.5

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@6.0.4...@spectrum-css/button@6.0.5)

**Note:** Version bump only for package @spectrum-css/button

<a name="6.0.4"></a>

## 6.0.4

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@6.0.3...@spectrum-css/button@6.0.4)

**Note:** Version bump only for package @spectrum-css/button

<a name="6.0.3"></a>

## 6.0.3

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@6.0.2...@spectrum-css/button@6.0.3)

### 🐛 Bug fixes

- correct focus-ring border-radius, fixes [#1378](https://github.com/adobe/spectrum-css/issues/1378) ([df4ea49](https://github.com/adobe/spectrum-css/commit/df4ea49))

<a name="6.0.2"></a>

## 6.0.2

🗓 2022-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@6.0.1...@spectrum-css/button@6.0.2)

**Note:** Version bump only for package @spectrum-css/button

<a name="6.0.1"></a>

## 6.0.1

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@6.0.0...@spectrum-css/button@6.0.1)

**Note:** Version bump only for package @spectrum-css/button

<a name="6.0.0"></a>

## 6.0.0

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@4.1.4...@spectrum-css/button@6.0.0)

### ✨ Features

- add back component-level variables for Button, fix Accent color in Express ([#1342](https://github.com/adobe/spectrum-css/issues/1342)) ([36bf0c3](https://github.com/adobe/spectrum-css/commit/36bf0c3))
- break out ClearButton and LogicButton into their own packages ([3cc0a5f](https://github.com/adobe/spectrum-css/commit/3cc0a5f))
- new Button API ([e0ee36c](https://github.com/adobe/spectrum-css/commit/e0ee36c))

### 🐛 Bug fixes

- don't override staticWhite/staticBlack with staticNone ([741c0cf](https://github.com/adobe/spectrum-css/commit/741c0cf))
- focus-ring color for staticWhite/staticBlack ([52958d9](https://github.com/adobe/spectrum-css/commit/52958d9))
- unbreak the build ([d595cad](https://github.com/adobe/spectrum-css/commit/d595cad))
- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

### 🛑 BREAKING CHANGES

- CTA was renamed to Accent, Quiet is gone in favor of outline, and Fill is added

<a name="5.0.0"></a>

## 5.0.0

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@5.0.0-beta.0...@spectrum-css/button@5.0.0)

### ✨ Features

- add back component-level variables for Button, fix Accent color in Express ([#1342](https://github.com/adobe/spectrum-css/issues/1342)) ([e8ed59e](https://github.com/adobe/spectrum-css/commit/e8ed59e))

<a name="5.0.0-beta.0"></a>

## 5.0.0-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@4.1.4...@spectrum-css/button@5.0.0-beta.0)

### ✨ Features

- break out ClearButton and LogicButton into their own packages ([a2092ab](https://github.com/adobe/spectrum-css/commit/a2092ab))
- new Button API ([0b9e101](https://github.com/adobe/spectrum-css/commit/0b9e101))

### 🐛 Bug fixes

- don't override staticWhite/staticBlack with staticNone ([5c72803](https://github.com/adobe/spectrum-css/commit/5c72803))
- focus-ring color for staticWhite/staticBlack ([f7bdffe](https://github.com/adobe/spectrum-css/commit/f7bdffe))
- unbreak the build ([123add2](https://github.com/adobe/spectrum-css/commit/123add2))

### 🛑 BREAKING CHANGES

- CTA was renamed to Accent, Quiet is gone in favor of outline, and Fill is added

<a name="4.1.4"></a>

## 4.1.4

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@4.1.3...@spectrum-css/button@4.1.4)

**Note:** Version bump only for package @spectrum-css/button

<a name="4.1.3"></a>

## 4.1.3

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@4.1.2...@spectrum-css/button@4.1.3)

**Note:** Version bump only for package @spectrum-css/button

<a name="4.1.2"></a>

## 4.1.2

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@4.1.1...@spectrum-css/button@4.1.2)

**Note:** Version bump only for package @spectrum-css/button

<a name="4.1.1"></a>

## 4.1.1

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@4.1.0...@spectrum-css/button@4.1.1)

**Note:** Version bump only for package @spectrum-css/button

<a name="4.1.0"></a>

## 4.1.0

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@4.0.0-alpha.2...@spectrum-css/button@4.1.0)

### ✨ Features

- make ClearButton build again, unblock CCX ([#1304](https://github.com/adobe/spectrum-css/issues/1304)) ([ae9399a](https://github.com/adobe/spectrum-css/commit/ae9399a))

### 🐛 Bug fixes

- refine the focus indicator per spectrum ([094e115](https://github.com/adobe/spectrum-css/commit/094e115))
- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))
- windows HCM ([48bc74e](https://github.com/adobe/spectrum-css/commit/48bc74e))

<a name="4.0.1"></a>

## 4.0.1

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@4.0.0-alpha.2...@spectrum-css/button@4.0.1)

### 🐛 Bug fixes

- refine the focus indicator per spectrum ([094e115](https://github.com/adobe/spectrum-css/commit/094e115))
- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="4.0.0"></a>

## 4.0.0

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@4.0.0-alpha.2...@spectrum-css/button@4.0.0)

### 🐛 Bug fixes

- refine the focus indicator per spectrum ([094e115](https://github.com/adobe/spectrum-css/commit/094e115))
- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="4.0.0-alpha.2"></a>

## 4.0.0-alpha.2

🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@4.0.0-alpha.1...@spectrum-css/button@4.0.0-alpha.2)

**Note:** Version bump only for package @spectrum-css/button

<a name="4.0.0-alpha.1"></a>

## 4.0.0-alpha.1

🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@4.0.0-alpha.0...@spectrum-css/button@4.0.0-alpha.1)

### 🐛 Bug fixes

- adjusted button label padding ([2c8ba8c](https://github.com/adobe/spectrum-css/commit/2c8ba8c))
- adjusted left padding in button ([fc655a5](https://github.com/adobe/spectrum-css/commit/fc655a5))

<a name="4.0.0-alpha.0"></a>

## 4.0.0-alpha.0

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@3.0.3-alpha.0...@spectrum-css/button@4.0.0-alpha.0)

### 🐛 Bug fixes

- add missing scale imports for button ([c32a552](https://github.com/adobe/spectrum-css/commit/c32a552))
- renamed `warning` button variant to `negative` ([1e029eb](https://github.com/adobe/spectrum-css/commit/1e029eb))

### 🛑 BREAKING CHANGES

- `.spectrum-Button--warning` is now
  `.spectrum-Button--negative`

<a name="3.0.3-alpha.0"></a>

## 3.0.3-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@3.0.2...@spectrum-css/button@3.0.3-alpha.0)

### 🐛 Bug fixes

- updated focus ring tokens to assume keyboard focus state ([2db4755](https://github.com/adobe/spectrum-css/commit/2db4755))

<a name="3.0.2"></a>

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@3.0.1...@spectrum-css/button@3.0.2)

**Note:** Version bump only for package @spectrum-css/button

<a name="3.0.1"></a>

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@3.0.0...@spectrum-css/button@3.0.1)

**Note:** Version bump only for package @spectrum-css/button

<a name="3.0.0"></a>

## 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@3.0.0-beta.6...@spectrum-css/button@3.0.0)

**Note:** Version bump only for package @spectrum-css/button

<a name="3.0.0-beta.6"></a>

## 3.0.0-beta.6

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@3.0.0-beta.5...@spectrum-css/button@3.0.0-beta.6)

### ✨ Features

- button t-shirt sizing ([643c1bf](https://github.com/adobe/spectrum-css/commit/643c1bf))
- fixup padding ([612dd0c](https://github.com/adobe/spectrum-css/commit/612dd0c))
- implement t-shirt sizing for Action Button, closes [#936](https://github.com/adobe/spectrum-css/issues/936) ([1a9ecf6](https://github.com/adobe/spectrum-css/commit/1a9ecf6))
- remove FieldButton, fix Button ([44026f8](https://github.com/adobe/spectrum-css/commit/44026f8))
- t-shirt sizing for Button, closes [#938](https://github.com/adobe/spectrum-css/issues/938) ([7d9b1d1](https://github.com/adobe/spectrum-css/commit/7d9b1d1))

### 🐛 Bug fixes

- add back missing Button focus-ring ([bfe3692](https://github.com/adobe/spectrum-css/commit/bfe3692))
- correct height of small Button ([2221e0a](https://github.com/adobe/spectrum-css/commit/2221e0a))
- missing token used by SplitButton ([0828cb1](https://github.com/adobe/spectrum-css/commit/0828cb1))
- override Button font-weight while we wait for it to be fixed in DNA ([7ffd05a](https://github.com/adobe/spectrum-css/commit/7ffd05a))
- remove Button font-weight hack ([5261e40](https://github.com/adobe/spectrum-css/commit/5261e40))
- unbreak the build for SplitButton ([7c98dd5](https://github.com/adobe/spectrum-css/commit/7c98dd5))
- update main, resolved conflicts ([d7880a2](https://github.com/adobe/spectrum-css/commit/d7880a2))

### 🛑 BREAKING CHANGES

- .spectrum-FieldButton has been removed, use .spectrum-ActionButton instead
- t-shirt size must be added for button to work (i.e. .spectrum-Button--sizeM)
- .spectrum-ActionButton is no longer part of the button component, use the actionbutton component

<a name="3.0.0-beta.5"></a>

## 3.0.0-beta.5

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@3.0.0-beta.4...@spectrum-css/button@3.0.0-beta.5)

**Note:** Version bump only for package @spectrum-css/button

<a name="3.0.0-beta.4"></a>

## 3.0.0-beta.4

🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@3.0.0-beta.3...@spectrum-css/button@3.0.0-beta.4)

### 🐛 Bug fixes

- actionButton focus-ring active state visual issue [#755](https://github.com/adobe/spectrum-css/issues/755) ([#777](https://github.com/adobe/spectrum-css/issues/777)) ([64af508](https://github.com/adobe/spectrum-css/commit/64af508))
- fix the issues caused by component rename ([#778](https://github.com/adobe/spectrum-css/issues/778)) ([e1d180c](https://github.com/adobe/spectrum-css/commit/e1d180c))
- removed deprecated tokens in button ([281027d](https://github.com/adobe/spectrum-css/commit/281027d))
- resolving conflicts with main ([8cafffa](https://github.com/adobe/spectrum-css/commit/8cafffa))
- wip fix more components ([b74dbb8](https://github.com/adobe/spectrum-css/commit/b74dbb8))
- workflow icon size change to medium ([#917](https://github.com/adobe/spectrum-css/issues/917)) ([a609ee6](https://github.com/adobe/spectrum-css/commit/a609ee6))

<a name="3.0.0-beta.3"></a>

## 3.0.0-beta.3

🗓 2020-06-19 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@3.0.0-beta.2...@spectrum-css/button@3.0.0-beta.3)

### 🐛 Bug fixes

- correct OverBackground ClearButton focus-ring, fixes [#730](https://github.com/adobe/spectrum-css/issues/730) ([#733](https://github.com/adobe/spectrum-css/issues/733)) ([5a34fa4](https://github.com/adobe/spectrum-css/commit/5a34fa4))

<a name="3.0.0-beta.2"></a>

## 3.0.0-beta.2

🗓 2020-05-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@3.0.0-beta.1...@spectrum-css/button@3.0.0-beta.2)

- Button Breaking Changes (#649) ([abf116b](https://github.com/adobe/spectrum-css/commit/abf116b)), closes [#649](https://github.com/adobe/spectrum-css/issues/649) [#519](https://github.com/adobe/spectrum-css/issues/519) [#620](https://github.com/adobe/spectrum-css/issues/620) [#606](https://github.com/adobe/spectrum-css/issues/606)

### 🛑 BREAKING CHANGES

- Tool button has been removed

- fix: interaction on mobile, text select

- feat: add Emphasized Action Button

- docs: add exampes for Quiet Emphasized Action Button

fix: correct Quiet Emphasized Action Button

- feat: button group
- Button group no longer supports Action Button, just normal buttons
- Margins have been removed from adjacent buttons. Use ButtonGroup instead.

<a name="3.0.0-beta.1"></a>

## 3.0.0-beta.1

🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@3.0.0-beta.0...@spectrum-css/button@3.0.0-beta.1)

**Note:** Version bump only for package @spectrum-css/button

<a name="3.0.0-beta.0"></a>

## 3.0.0-beta.0

🗓 2020-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@2.2.0...@spectrum-css/button@3.0.0-beta.0)

### ✨ Features

- make Button support RTL ([0f5aa5c](https://github.com/adobe/spectrum-css/commit/0f5aa5c))

<a name="2.2.0"></a>

## 2.2.0

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@2.1.0...@spectrum-css/button@2.2.0)

### ✨ Features

- halo focus ring, closes [#112](https://github.com/adobe/spectrum-css/issues/112), closes [#573](https://github.com/adobe/spectrum-css/issues/573) ([#603](https://github.com/adobe/spectrum-css/issues/603)) ([d87e9a5](https://github.com/adobe/spectrum-css/commit/d87e9a5)), closes [#619](https://github.com/adobe/spectrum-css/issues/619)

<a name="2.1.0"></a>

## 2.1.0

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@2.0.3...@spectrum-css/button@2.1.0)

### ✨ Features

- adding t-shirt sized typography, fixes [#210](https://github.com/adobe/spectrum-css/issues/210), closes [#416](https://github.com/adobe/spectrum-css/issues/416) ([#408](https://github.com/adobe/spectrum-css/issues/408)) ([3921bcb](https://github.com/adobe/spectrum-css/commit/3921bcb)), closes [#523](https://github.com/adobe/spectrum-css/issues/523)

### 🐛 Bug fixes

- adjust Button text alignment, fixes [#516](https://github.com/adobe/spectrum-css/issues/516) ([7f36619](https://github.com/adobe/spectrum-css/commit/7f36619))

<a name="2.0.3"></a>

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@2.0.2...@spectrum-css/button@2.0.3)

**Note:** Version bump only for package @spectrum-css/button

<a name="2.0.2"></a>

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@2.0.1...@spectrum-css/button@2.0.2)

**Note:** Version bump only for package @spectrum-css/button

<a name="2.0.1"></a>

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/button@2.0.0...@spectrum-css/button@2.0.1)

**Note:** Version bump only for package @spectrum-css/button

<a name="2.0.0"></a>

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
