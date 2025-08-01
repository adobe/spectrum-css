# Change log

## 10.1.2

### Patch Changes

📝 [#3617](https://github.com/adobe/spectrum-css/pull/3617) [`a02f1d1`](https://github.com/adobe/spectrum-css/commit/a02f1d13d07106465a3236c5bfe3d029f3e64426) Thanks [@marissahuysentruyt](https://github.com/marissahuysentruyt)!

Adds a `::before` pseudo element to properly target the `.spectrum-Checkbox-input:checked + .spectrum-Checkbox-box` element. The selector update, specifically in the invalid+checked+hover state should now get the proper error background color, as opposed to the default background color.

## 10.1.1

### Patch Changes

📝 [#3573](https://github.com/adobe/spectrum-css/pull/3573) [`3caeff3`](https://github.com/adobe/spectrum-css/commit/3caeff3a62220a988e5b64af66c1333e524f1b75) Thanks [@TarunAdobe](https://github.com/TarunAdobe)!

- Updated deselected (default) border color of the box to be neutral content color default in spectrum-two theme

## 10.1.0

### Minor Changes

📝 [`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee) Thanks [@castastrophe](https://github.com/castastrophe)!

## New feature

Minified and gzipped outputs available for all compiled CSS assets.

### Patch Changes

📝 [#3541](https://github.com/adobe/spectrum-css/pull/3541) [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d) Thanks [@castastrophe](https://github.com/castastrophe)!

Dependency alignment across the project.

- Updated dependencies [[`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee), [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d)]:
  - @spectrum-css/icon@9.1.0
  - @spectrum-css/tokens@16.0.1

## 10.0.1

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

## 10.0.0

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
  - @spectrum-css/icon@9.0.0

## 9.3.1

### Patch Changes

📝 [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)!

- Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/icon@8.0.1

## 9.3.0

### Minor Changes

📝 [#3359](https://github.com/adobe/spectrum-css/pull/3359) [`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b) Thanks [@cdransf](https://github.com/cdransf)!

- This resolves our remaining stylelint issues around undefined tokens, rule order, unused values and color syntax.
  - Updates invalid color syntax from `rgba(N, N, N, N)` to `rgba(N N N / N)`.
  - In cases of duplicate properties, preserves the property that would be applied given current code structure.
  - Updates misnamed tokens to use valid tokens (`table/index.css`).

📝 [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)!

- Simplify how the `--system` properties are mapped. By updating the logic in the `postcss-add-theming-layer`, we are now shipping cleaner, more readable `--system` property names. These custom properties are documented as _NOT_ a part of the component API so although these result in a change to the custom property names, it does not impact the properties that are in the API and so do not constitute a breaking change. Expect to see no change to how component theming works or any visual regressions as a result of this change.

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/icon@8.0.0

## 9.2.1

### Patch Changes

📝 [#3328](https://github.com/adobe/spectrum-css/pull/3328) [`a0486b3`](https://github.com/adobe/spectrum-css/commit/a0486b341581c610ebc9b3acd1837be2b66eb348) Thanks [@jawinn](https://github.com/jawinn)!

- This removes some unnecessary read-only styles. Read-only just needs to override disabled styles. Otherwise it uses the normal styles (for both default and emphasized).

## 9.2.0

### Minor Changes

📝 [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/icon@7.2.0

## 9.1.3

### Patch Changes

📝 [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)!

- Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/icon@7.1.4

## 9.1.2

### Patch Changes

📝 [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)!

- Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/icon@7.1.3

## 9.1.1

### Patch Changes

📝 [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)!

- Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/icon@7.1.1

## 9.1.0

### Minor Changes

📝 [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/icon@>=7
  - @spectrum-css/tokens@>=14

## 9.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@8.1.5...@spectrum-css/checkbox@9.0.0)

### ✨ Features

- use storybook v8 ([#2604](https://github.com/adobe/spectrum-css/issues/2604))([166ab23](https://github.com/adobe/spectrum-css/commit/166ab23))

- feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGE

- Removes component-builder & component-builder-simple for script leveraging postcss
- Imports added to index.css and themes/express.css

## 8.1.5

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@8.1.4...@spectrum-css/checkbox@8.1.5)
**Note:** Version bump only for package @spectrum-css/checkbox

## 8.1.4

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@8.1.3...@spectrum-css/checkbox@8.1.4)

**Note:** Version bump only for package @spectrum-css/checkbox

## 8.1.3

🗓 2024-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@8.1.2...@spectrum-css/checkbox@8.1.3)

**Note:** Version bump only for package @spectrum-css/checkbox

## 8.1.2

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@8.1.1...@spectrum-css/checkbox@8.1.2)

**Note:** Version bump only for package @spectrum-css/checkbox

## 8.1.1

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-css/checkbox

## 8.1.0

🗓 2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@8.0.6...@spectrum-css/checkbox@8.1.0)

**Note:** Version bump only for package @spectrum-css/checkbox

## 8.0.6

🗓 2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@8.0.5...@spectrum-css/checkbox@8.0.6)

### 🐛 Bug fixes

- **checkbox:** address typo([174d386](https://github.com/adobe/spectrum-css/commit/174d386))

## 8.0.5

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@8.0.4...@spectrum-css/checkbox@8.0.5)

**Note:** Version bump only for package @spectrum-css/checkbox

## 8.0.4

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@8.0.3...@spectrum-css/checkbox@8.0.4)

**Note:** Version bump only for package @spectrum-css/checkbox

## 8.0.3

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@8.0.2...@spectrum-css/checkbox@8.0.3)

**Note:** Version bump only for package @spectrum-css/checkbox

## 8.0.2

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@8.0.0...@spectrum-css/checkbox@8.0.2)

**Note:** Version bump only for package @spectrum-css/checkbox

## 8.0.1

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@8.0.0...@spectrum-css/checkbox@8.0.1)

**Note:** Version bump only for package @spectrum-css/checkbox

## 8.0.0

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.16...@spectrum-css/checkbox@8.0.0)

- refactor(assetcard)!: token migration (#2229)([a0cf37b](https://github.com/adobe/spectrum-css/commit/a0cf37b)), closes[#2229](https://github.com/adobe/spectrum-css/issues/2229)

### 🛑 BREAKING CHANGE

- migrate asset card to updated token system

## 7.0.16

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.15...@spectrum-css/checkbox@7.0.16)
**Note:** Version bump only for package @spectrum-css/checkbox

## 7.0.15

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.14...@spectrum-css/checkbox@7.0.15)

**Note:** Version bump only for package @spectrum-css/checkbox

## 7.0.14

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.13...@spectrum-css/checkbox@7.0.14)

**Note:** Version bump only for package @spectrum-css/checkbox

## 7.0.13

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.12...@spectrum-css/checkbox@7.0.13)

**Note:** Version bump only for package @spectrum-css/checkbox

## 7.0.12

🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.11...@spectrum-css/checkbox@7.0.12)

**Note:** Version bump only for package @spectrum-css/checkbox

## 7.0.11

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.10...@spectrum-css/checkbox@7.0.11)
**Note:** Version bump only for package @spectrum-css/checkbox

## 7.0.10

🗓 2023-09-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.9...@spectrum-css/checkbox@7.0.10)

**Note:** Version bump only for package @spectrum-css/checkbox

## 7.0.9

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.8...@spectrum-css/checkbox@7.0.9)

**Note:** Version bump only for package @spectrum-css/checkbox

## 7.0.8

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.7...@spectrum-css/checkbox@7.0.8)

**Note:** Version bump only for package @spectrum-css/checkbox

## 7.0.7

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.6...@spectrum-css/checkbox@7.0.7)

### 🔙 Reverts

- gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

## 7.0.6

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.5...@spectrum-css/checkbox@7.0.6)

**Note:** Version bump only for package @spectrum-css/checkbox

## 7.0.5

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.3...@spectrum-css/checkbox@7.0.5)

**Note:** Version bump only for package @spectrum-css/checkbox

## 7.0.4

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.3...@spectrum-css/checkbox@7.0.4)

**Note:** Version bump only for package @spectrum-css/checkbox

## 7.0.3

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.2...@spectrum-css/checkbox@7.0.3)

**Note:** Version bump only for package @spectrum-css/checkbox

## 7.0.2

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.1...@spectrum-css/checkbox@7.0.2)
**Note:** Version bump only for package @spectrum-css/checkbox

## 7.0.1

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.0...@spectrum-css/checkbox@7.0.1)

**Note:** Version bump only for package @spectrum-css/checkbox

## 7.0.0

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.1.10...@spectrum-css/checkbox@7.0.0)

- feat(checkbox)!: add new color aliases and focus color fixes (#2052)([2a0d3c8](https://github.com/adobe/spectrum-css/commit/2a0d3c8)), closes[#2052](https://github.com/adobe/spectrum-css/issues/2052)

### 🛑 BREAKING CHANGE

- prefers `:focus-visible` to `:focus-ring` & updates colors

Additionally:

- refactor(checkbox): add color alias tokens and fix some colors

- Adds new color alias tokens from CSS-472 and implements them. Tokens
  are moved out of spectrum and express specific css.
- Implemented previously commented out focus token.
- Fix some color related bugs in prod: non-emphasized showing blue
  border on focus and hover instead of grey when unchecked, emphasized
  showing blue border on focus and hover when unchecked, and emphasized
  indeterminate showing grey after click. Sorted some specificity issues
  primarily around some indeterminate default styles overriding when
  they shouldn't.
- Changed old :focus-ring spec to :focus-visible (a find replace for the
  generated .focus-ring class was already being done in the SWC version
  of the component, replacing it with :focus-visble). Checkboxes should
  now show their focus indicator when tabbed into in Storybook.

- fix(checkbox): high contrast mode updates and remove deprecated

Update to match previous WHCM behavior after styles update, and some
needed system color updates noticed while looking at that code.

- Focus color update to match with modified styles.
- 'Background' system color is deprecated; replace with Canvas.
- Default text of label should be CanvasText, it is not on top of a
  background with ButtonFace.
- Focus indicator color custom property was repeated in the same style
  rule, and was using FieldText when not on top of a matching `Field`
  background pair. Replaced with CanvasText as this should be appearing
  on top of default Canvas.

## 6.1.10

🗓 2023-07-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.1.9...@spectrum-css/checkbox@6.1.10)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.1.9

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.1.8...@spectrum-css/checkbox@6.1.9)

### 🐛 Bug fixes

- icon sizing in Storybook story templates ([#2037](https://github.com/adobe/spectrum-css/issues/2037))([c90c8a3](https://github.com/adobe/spectrum-css/commit/c90c8a3))

## 6.1.8

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.1.7...@spectrum-css/checkbox@6.1.8)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.1.7

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.1.6...@spectrum-css/checkbox@6.1.7)

### 🐛 Bug fixes

- **actionbutton:** update action button color tokens ([#1982](https://github.com/adobe/spectrum-css/issues/1982))([95e4353](https://github.com/adobe/spectrum-css/commit/95e4353))
- **checkbox:** use language code, not coding language name ([#2005](https://github.com/adobe/spectrum-css/issues/2005))([56c7cfc](https://github.com/adobe/spectrum-css/commit/56c7cfc))

## 6.1.6

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.1.5...@spectrum-css/checkbox@6.1.6)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.1.5

🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.1.4...@spectrum-css/checkbox@6.1.5)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.1.4

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.1.3...@spectrum-css/checkbox@6.1.4)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.1.3

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.1.2...@spectrum-css/checkbox@6.1.3)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.1.2

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.1.1...@spectrum-css/checkbox@6.1.2)

### 🐛 Bug fixes

- restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

## 6.1.1

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.1.0...@spectrum-css/checkbox@6.1.1)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.1.0

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.34...@spectrum-css/checkbox@6.1.0)

### ✨ Features

- add stylelint ([#1787](https://github.com/adobe/spectrum-css/issues/1787))([a450904](https://github.com/adobe/spectrum-css/commit/a450904))

## 6.0.34

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.33...@spectrum-css/checkbox@6.0.34)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.33

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.32...@spectrum-css/checkbox@6.0.33)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.32

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.31...@spectrum-css/checkbox@6.0.32)

### 🐛 Bug fixes

- **checkbox:** rename misspelled mod and add missing mods ([#1882](https://github.com/adobe/spectrum-css/issues/1882)) ([624527a](https://github.com/adobe/spectrum-css/commit/624527a))

## 6.0.31

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.30...@spectrum-css/checkbox@6.0.31)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.30

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.29...@spectrum-css/checkbox@6.0.30)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.29

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.28...@spectrum-css/checkbox@6.0.29)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.28

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.27...@spectrum-css/checkbox@6.0.28)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.27

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.26...@spectrum-css/checkbox@6.0.27)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.26

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.25...@spectrum-css/checkbox@6.0.26)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.25

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.24...@spectrum-css/checkbox@6.0.25)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.24

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.23...@spectrum-css/checkbox@6.0.24)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.23

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.22...@spectrum-css/checkbox@6.0.23)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.22

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.20...@spectrum-css/checkbox@6.0.22)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.21

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.20...@spectrum-css/checkbox@6.0.21)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.20

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.19...@spectrum-css/checkbox@6.0.20)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.19

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.18...@spectrum-css/checkbox@6.0.19)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.18

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.17...@spectrum-css/checkbox@6.0.18)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.17

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.16...@spectrum-css/checkbox@6.0.17)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.16

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.14...@spectrum-css/checkbox@6.0.16)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.15

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.14...@spectrum-css/checkbox@6.0.15)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.14

🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.12...@spectrum-css/checkbox@6.0.14)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.13

🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.12...@spectrum-css/checkbox@6.0.13)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.12

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.11...@spectrum-css/checkbox@6.0.12)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.11

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.10...@spectrum-css/checkbox@6.0.11)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.10

🗓 2023-03-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.9...@spectrum-css/checkbox@6.0.10)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.9

🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.8...@spectrum-css/checkbox@6.0.9)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.8

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.7...@spectrum-css/checkbox@6.0.8)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.7

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.6...@spectrum-css/checkbox@6.0.7)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.6

🗓 2023-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.5...@spectrum-css/checkbox@6.0.6)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.5

🗓 2023-03-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.4...@spectrum-css/checkbox@6.0.5)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.4

🗓 2023-02-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.3...@spectrum-css/checkbox@6.0.4)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.3

🗓 2023-02-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.2...@spectrum-css/checkbox@6.0.3)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.2

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.1...@spectrum-css/checkbox@6.0.2)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.1

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.0...@spectrum-css/checkbox@6.0.1)

**Note:** Version bump only for package @spectrum-css/checkbox

## 6.0.0

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@5.0.11...@spectrum-css/checkbox@6.0.0)

- chore(tokens)!: use latest dependency & fix build error (#1591) ([f2532e7](https://github.com/adobe/spectrum-css/commit/f2532e7)), closes [#1591](https://github.com/adobe/spectrum-css/issues/1591)

### 🛑 BREAKING CHANGE

- uses latest `@adobe/spectrum-tokens` dependency which includes token renames

## 5.0.11

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@5.0.10...@spectrum-css/checkbox@5.0.11)

**Note:** Version bump only for package @spectrum-css/checkbox

## 5.0.10

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@5.0.9...@spectrum-css/checkbox@5.0.10)

**Note:** Version bump only for package @spectrum-css/checkbox

## 5.0.9

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@5.0.8...@spectrum-css/checkbox@5.0.9)

**Note:** Version bump only for package @spectrum-css/checkbox

## 5.0.8

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@5.0.6...@spectrum-css/checkbox@5.0.8)

**Note:** Version bump only for package @spectrum-css/checkbox

## 5.0.7

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@5.0.6...@spectrum-css/checkbox@5.0.7)

**Note:** Version bump only for package @spectrum-css/checkbox

## 5.0.6

🗓 2023-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@5.0.5...@spectrum-css/checkbox@5.0.6)

**Note:** Version bump only for package @spectrum-css/checkbox

## 5.0.5

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@5.0.4...@spectrum-css/checkbox@5.0.5)

**Note:** Version bump only for package @spectrum-css/checkbox

## 5.0.4

🗓 2022-12-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@5.0.3...@spectrum-css/checkbox@5.0.4)

**Note:** Version bump only for package @spectrum-css/checkbox

## 5.0.3

🗓 2022-12-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@5.0.2...@spectrum-css/checkbox@5.0.3)

**Note:** Version bump only for package @spectrum-css/checkbox

## 5.0.2

🗓 2022-11-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@5.0.1...@spectrum-css/checkbox@5.0.2)

### 🐛 Bug fixes

- resolve missing tokens errors due to name changes ([#1555](https://github.com/adobe/spectrum-css/issues/1555)) ([ddae027](https://github.com/adobe/spectrum-css/commit/ddae027))

## 5.0.1

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@5.0.0...@spectrum-css/checkbox@5.0.1)

**Note:** Version bump only for package @spectrum-css/checkbox

## 5.0.0

🗓 2022-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@4.0.2...@spectrum-css/checkbox@5.0.0)

- refactor(checkbox)!: remap core token aliases & rename aliases ([0ccacfe](https://github.com/adobe/spectrum-css/commit/0ccacfe))

### 🛑 BREAKING CHANGE

- remaps existing aliases to new/renamed core token values

- `--spectrum-focus-ring-thickness` renamed to `--spectrum-focus-indicator-thickness`
- `--spectrum-focus-ring-gap` renamed to `--spectrum-focus-indicator-gap`
- `--spectrum-focus-ring-color` renamed to `--spectrum-focus-indicator-color`

## 4.0.2

🗓 2022-10-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@4.0.1...@spectrum-css/checkbox@4.0.2)

### 🐛 Bug fixes

- **checkbox:** whcm focus states ([#1527](https://github.com/adobe/spectrum-css/issues/1527)) ([ddca193](https://github.com/adobe/spectrum-css/commit/ddca193))

## 4.0.1

🗓 2022-10-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@4.0.0...@spectrum-css/checkbox@4.0.1)

**Note:** Version bump only for package @spectrum-css/checkbox

## 4.0.0

🗓 2022-10-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.1.3...@spectrum-css/checkbox@4.0.0)

- feat(checkbox)!: migrate checkbox component to core tokens (CSS-99) (#1465) ([20b5917](https://github.com/adobe/spectrum-css/commit/20b5917)), closes [#1465](https://github.com/adobe/spectrum-css/issues/1465)

### 🛑 BREAKING CHANGE

- migrates Checkbox to core tokens

Co-authored-by: Patrick Fulton <pfulton@adobe.com>
Co-authored-by: Garth Braithwaite <garthdb@gmail.com>

## 3.1.3

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.1.2...@spectrum-css/checkbox@3.1.3)

**Note:** Version bump only for package @spectrum-css/checkbox

## 3.1.2

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.1.1...@spectrum-css/checkbox@3.1.2)

**Note:** Version bump only for package @spectrum-css/checkbox

## 3.1.1

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.1.0...@spectrum-css/checkbox@3.1.1)

**Note:** Version bump only for package @spectrum-css/checkbox

## 3.1.0

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.19...@spectrum-css/checkbox@3.1.0)

### ✨ Features

- **checkbox:** add styles for `readonly` state ([e37b69a](https://github.com/adobe/spectrum-css/commit/e37b69a))

## 3.0.19

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.18...@spectrum-css/checkbox@3.0.19)

**Note:** Version bump only for package @spectrum-css/checkbox

## 3.0.18

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.17...@spectrum-css/checkbox@3.0.18)

**Note:** Version bump only for package @spectrum-css/checkbox

## 3.0.17

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.16...@spectrum-css/checkbox@3.0.17)

**Note:** Version bump only for package @spectrum-css/checkbox

## 3.0.16

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.15...@spectrum-css/checkbox@3.0.16)

**Note:** Version bump only for package @spectrum-css/checkbox

## 3.0.15

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.14...@spectrum-css/checkbox@3.0.15)

**Note:** Version bump only for package @spectrum-css/checkbox

## 3.0.14

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.13...@spectrum-css/checkbox@3.0.14)

**Note:** Version bump only for package @spectrum-css/checkbox

## 3.0.13

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.12...@spectrum-css/checkbox@3.0.13)

**Note:** Version bump only for package @spectrum-css/checkbox

## 3.0.12

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.10...@spectrum-css/checkbox@3.0.12)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

## 3.0.11

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.10...@spectrum-css/checkbox@3.0.11)

**Note:** Version bump only for package @spectrum-css/checkbox

## 3.0.10

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.9...@spectrum-css/checkbox@3.0.10)

**Note:** Version bump only for package @spectrum-css/checkbox

## 3.0.9

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.8...@spectrum-css/checkbox@3.0.9)

**Note:** Version bump only for package @spectrum-css/checkbox

## 3.0.8

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.7...@spectrum-css/checkbox@3.0.8)

**Note:** Version bump only for package @spectrum-css/checkbox

## 3.0.7

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.6...@spectrum-css/checkbox@3.0.7)

**Note:** Version bump only for package @spectrum-css/checkbox

## 3.0.6

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.4...@spectrum-css/checkbox@3.0.6)

**Note:** Version bump only for package @spectrum-css/checkbox

## 3.0.5

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.4...@spectrum-css/checkbox@3.0.5)

**Note:** Version bump only for package @spectrum-css/checkbox

## 3.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.2...@spectrum-css/checkbox@3.0.3)

### 🐛 Bug fixes

- adjust the focus outline ([4692cc1](https://github.com/adobe/spectrum-css/commit/4692cc1))
- high contrast mode for checkbox ([b2ed46c](https://github.com/adobe/spectrum-css/commit/b2ed46c))
- more changes to support indeterminate correctly ([ad32c52](https://github.com/adobe/spectrum-css/commit/ad32c52))
- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.1...@spectrum-css/checkbox@3.0.2)

**Note:** Version bump only for package @spectrum-css/checkbox

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.0...@spectrum-css/checkbox@3.0.1)

**Note:** Version bump only for package @spectrum-css/checkbox

## 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@2.1.0...@spectrum-css/checkbox@3.0.0)

### ✨ Features

- added t-shirt sizes to checkbox ([f4c59bd](https://github.com/adobe/spectrum-css/commit/f4c59bd)), closes [#951](https://github.com/adobe/spectrum-css/issues/951)

### 🛑 BREAKING CHANGE

- a t-shirt size class is now required for checkbox.

## 2.1.0

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@2.0.5...@spectrum-css/checkbox@2.1.0)

### ✨ Features

- halo focus ring, closes [#112](https://github.com/adobe/spectrum-css/issues/112), closes [#573](https://github.com/adobe/spectrum-css/issues/573) ([#603](https://github.com/adobe/spectrum-css/issues/603)) ([d87e9a5](https://github.com/adobe/spectrum-css/commit/d87e9a5)), closes [#619](https://github.com/adobe/spectrum-css/issues/619)

## 2.0.5

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@2.0.4...@spectrum-css/checkbox@2.0.5)

**Note:** Version bump only for package @spectrum-css/checkbox

## 2.0.4

🗓 2020-01-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@2.0.3...@spectrum-css/checkbox@2.0.4)

### 🐛 Bug fixes

- align labels for Radio/Checkbox/Switch/Status light ([#458](https://github.com/adobe/spectrum-css/issues/458)) ([616a1b4](https://github.com/adobe/spectrum-css/commit/616a1b4)), closes [#406](https://github.com/adobe/spectrum-css/issues/406) [#402](https://github.com/adobe/spectrum-css/issues/402) [#403](https://github.com/adobe/spectrum-css/issues/403) [#426](https://github.com/adobe/spectrum-css/issues/426)

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@2.0.2...@spectrum-css/checkbox@2.0.3)

### 🐛 Bug fixes

- text alignment in checkbox, radio, and switch ([#412](https://github.com/adobe/spectrum-css/issues/412)) ([e244b4f](https://github.com/adobe/spectrum-css/commit/e244b4f)), closes [#406](https://github.com/adobe/spectrum-css/issues/406) [#402](https://github.com/adobe/spectrum-css/issues/402) [#403](https://github.com/adobe/spectrum-css/issues/403)

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@2.0.1...@spectrum-css/checkbox@2.0.2)

**Note:** Version bump only for package @spectrum-css/checkbox

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@2.0.0...@spectrum-css/checkbox@2.0.1)

### 🐛 Bug fixes

- revert Checkbox/Radio/Switch color change, fixes [#355](https://github.com/adobe/spectrum-css/issues/355) ([#356](https://github.com/adobe/spectrum-css/issues/356)) ([51477e9](https://github.com/adobe/spectrum-css/commit/51477e9))

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
