# Change log

## 7.2.0

### Minor Changes

- [#3527](https://github.com/adobe/spectrum-css/pull/3527) [`5f1751c`](https://github.com/adobe/spectrum-css/commit/5f1751c82a5fe55ae0d999f5f50cfeca4c8a5c75) Thanks [@castastrophe](https://github.com/castastrophe)! - By updating the postcss-preset-env to the latest breaking change version, output for this component no longer injects the `.js-focus-within` and '[focus-within]` selectors for the focus-within polyfill. As this feature is not used in the SWC consumption, risk to the end user for this removal is low.

## 7.1.0

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
  - @spectrum-css/icon@9.0.1

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
  - @spectrum-css/icon@9.0.0

## 6.5.1

### Patch Changes

📝 [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)!

- Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/icon@8.0.1

## 6.5.0

### Minor Changes

📝 [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)!

- Simplify how the `--system` properties are mapped. By updating the logic in the `postcss-add-theming-layer`, we are now shipping cleaner, more readable `--system` property names. These custom properties are documented as _NOT_ a part of the component API so although these result in a change to the custom property names, it does not impact the properties that are in the API and so do not constitute a breaking change. Expect to see no change to how component theming works or any visual regressions as a result of this change.

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/icon@8.0.0

## 6.4.0

### Minor Changes

📝 [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/icon@7.2.0

## 6.3.0

### Minor Changes

📝 [#3258](https://github.com/adobe/spectrum-css/pull/3258) [`db450d8`](https://github.com/adobe/spectrum-css/commit/db450d8679242cffced38793f8c3f4f458240612) Thanks [@cdransf](https://github.com/cdransf)!

- Improves the visibility of the clear button disabled variant on static color backgrounds by more closely aligning styles with close button.
  - Adds `.spectrum-ClearButton--staticWhite` to the mod declarations associated with `.spectrum-ClearButton--overBackground` in advance of the latter being deprecated. The same class has been added to the `:focus` declaration for `spectrum-ClearButton--overBackground`.
  - Adds `--spectrum-clear-button-icon-color-disabled: var(--spectrum-disabled-static-white-content-color);` custom property for `.spectrum-ClearButton--staticWhite`.
  - Enables `cursor: pointer` for `.spectrum-ClearButton` when it is not disabled.
  - Disables hover, active, focus and focus-within states for `:disabled` `.spectrum-ClearButton` elements.
  - Adds color styles for `:disabled` and `.is-disabled` `.spectrum-ClearButton` `:disabled` icons.

## 6.2.0

### Minor Changes

📝 [#3263](https://github.com/adobe/spectrum-css/pull/3263) [`904d5b0`](https://github.com/adobe/spectrum-css/commit/904d5b0eae5cd62dd1346a2443192aec886e613b) Thanks [@cdransf](https://github.com/cdransf)!

- Removes undefined leading tokens in mods assignments for clearbutton.

### Patch Changes

- Updated dependencies [[`47f23a7`](https://github.com/adobe/spectrum-css/commit/47f23a762a5c84ffe3c82e7e1b0c4c9d5dc60f86)]:
  - @spectrum-css/tokens@14.5.0

## 6.1.3

### Patch Changes

📝 [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)!

- Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/icon@7.1.4

## 6.1.2

### Patch Changes

📝 [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)!

- Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/icon@7.1.3

## 6.1.1

### Patch Changes

📝 [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)!

- Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/icon@7.1.1

## 6.1.0

### Minor Changes

📝 [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/icon@>=7
  - @spectrum-css/tokens@>=14

## 6.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.1.4...@spectrum-css/clearbutton@6.0.0)

- feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGE

- Removes component-builder & component-builder-simple for script leveraging postcss
- Imports added to index.css and themes/express.css

## 5.1.4

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.1.3...@spectrum-css/clearbutton@5.1.4)
**Note:** Version bump only for package @spectrum-css/clearbutton

## 5.1.3

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.1.2...@spectrum-css/clearbutton@5.1.3)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 5.1.2

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.1.1...@spectrum-css/clearbutton@5.1.2)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 5.1.1

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-css/clearbutton

## 5.1.0

🗓 2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.16...@spectrum-css/clearbutton@5.1.0)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 5.0.16

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.15...@spectrum-css/clearbutton@5.0.16)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 5.0.15

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.14...@spectrum-css/clearbutton@5.0.15)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 5.0.14

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.13...@spectrum-css/clearbutton@5.0.14)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 5.0.13

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.11...@spectrum-css/clearbutton@5.0.13)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 5.0.12

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.11...@spectrum-css/clearbutton@5.0.12)
**Note:** Version bump only for package @spectrum-css/clearbutton

## 5.0.11

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.10...@spectrum-css/clearbutton@5.0.11)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 5.0.10

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.9...@spectrum-css/clearbutton@5.0.10)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 5.0.9

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.8...@spectrum-css/clearbutton@5.0.9)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 5.0.8

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.7...@spectrum-css/clearbutton@5.0.8)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 5.0.7

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.6...@spectrum-css/clearbutton@5.0.7)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 5.0.6

🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.5...@spectrum-css/clearbutton@5.0.6)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 5.0.5

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.4...@spectrum-css/clearbutton@5.0.5)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 5.0.4

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.3...@spectrum-css/clearbutton@5.0.4)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 5.0.3

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.2...@spectrum-css/clearbutton@5.0.3)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 5.0.2

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.1...@spectrum-css/clearbutton@5.0.2)

### 🔙 Reverts

- gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

## 5.0.1

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.0...@spectrum-css/clearbutton@5.0.1)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 5.0.0

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@2.0.0...@spectrum-css/clearbutton@5.0.0)

- refactor(clearbutton)!: migrate tokens (#1943)([495198a](https://github.com/adobe/spectrum-css/commit/495198a)), closes[#1943](https://github.com/adobe/spectrum-css/issues/1943)

### 🛑 BREAKING CHANGE

- migrates clear button to use `@adobe/spectrum-tokens`
- update to use infield button tokens release
- migrate css to use tokens
- add quiet variant and whcm styles
- update storybook to include over background story
- fix icon sizing in story, add cursor pointer
- add aria-labels

## 4.0.0

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@2.0.0...@spectrum-css/clearbutton@4.0.0)

- refactor(clearbutton)!: migrate tokens (#1943)([495198a](https://github.com/adobe/spectrum-css/commit/495198a)), closes[#1943](https://github.com/adobe/spectrum-css/issues/1943)

### 🛑 BREAKING CHANGE

- migrates clear button to use `@adobe/spectrum-tokens`
- update to use infield button tokens release
- migrate css to use tokens
- add quiet variant and whcm styles
- update storybook to include over background story
- fix icon sizing in story, add cursor pointer
- add aria-labels

## 3.0.0

**Deprecated tag**: exists solely on npm and does not appear in the git repository. This was an accidental release that went out without a build.

## 2.0.0

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.38...@spectrum-css/clearbutton@2.0.0)

- refactor(clearbutton)!: replace focus-ring with focus-visible([a4fd637](https://github.com/adobe/spectrum-css/commit/a4fd637))

### 🛑 BREAKING CHANGE

- use native focus-visible pseudo class for focus styling

## 1.2.38

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.37...@spectrum-css/clearbutton@1.2.38)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.37

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.36...@spectrum-css/clearbutton@1.2.37)

### 🐛 Bug fixes

- icon sizing in Storybook story templates ([#2037](https://github.com/adobe/spectrum-css/issues/2037))([c90c8a3](https://github.com/adobe/spectrum-css/commit/c90c8a3))

## 1.2.36

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.35...@spectrum-css/clearbutton@1.2.36)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.35

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.34...@spectrum-css/clearbutton@1.2.35)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.34

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.33...@spectrum-css/clearbutton@1.2.34)

### 🐛 Bug fixes

- restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

## 1.2.33

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.32...@spectrum-css/clearbutton@1.2.33)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.32

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.31...@spectrum-css/clearbutton@1.2.32)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.31

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.30...@spectrum-css/clearbutton@1.2.31)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.30

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.29...@spectrum-css/clearbutton@1.2.30)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.29

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.28...@spectrum-css/clearbutton@1.2.29)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.28

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.27...@spectrum-css/clearbutton@1.2.28)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.27

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.25...@spectrum-css/clearbutton@1.2.27)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.26

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.25...@spectrum-css/clearbutton@1.2.26)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.25

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.23...@spectrum-css/clearbutton@1.2.25)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.24

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.23...@spectrum-css/clearbutton@1.2.24)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.23

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.22...@spectrum-css/clearbutton@1.2.23)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.22

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.21...@spectrum-css/clearbutton@1.2.22)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.21

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.20...@spectrum-css/clearbutton@1.2.21)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.20

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.19...@spectrum-css/clearbutton@1.2.20)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.19

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.18...@spectrum-css/clearbutton@1.2.19)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.18

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.17...@spectrum-css/clearbutton@1.2.18)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.17

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.16...@spectrum-css/clearbutton@1.2.17)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.16

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.15...@spectrum-css/clearbutton@1.2.16)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.15

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.13...@spectrum-css/clearbutton@1.2.15)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.14

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.13...@spectrum-css/clearbutton@1.2.14)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.13

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.12...@spectrum-css/clearbutton@1.2.13)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.12

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.11...@spectrum-css/clearbutton@1.2.12)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.11

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.10...@spectrum-css/clearbutton@1.2.11)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.10

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.9...@spectrum-css/clearbutton@1.2.10)

### 🐛 Bug fixes

- clearbutton WHCM ([bc9ccd6](https://github.com/adobe/spectrum-css/commit/bc9ccd6))

## 1.2.9

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.8...@spectrum-css/clearbutton@1.2.9)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.8

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.7...@spectrum-css/clearbutton@1.2.8)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.7

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.6...@spectrum-css/clearbutton@1.2.7)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.6

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.5...@spectrum-css/clearbutton@1.2.6)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.5

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.4...@spectrum-css/clearbutton@1.2.5)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.4

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.3...@spectrum-css/clearbutton@1.2.4)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.3

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.2...@spectrum-css/clearbutton@1.2.3)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.2

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.1...@spectrum-css/clearbutton@1.2.2)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.1

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.0...@spectrum-css/clearbutton@1.2.1)

**Note:** Version bump only for package @spectrum-css/clearbutton

## 1.2.0

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.1.0...@spectrum-css/clearbutton@1.2.0)

### ✨ Features

- break out ClearButton and LogicButton into their own packages ([3cc0a5f](https://github.com/adobe/spectrum-css/commit/3cc0a5f))

### 🐛 Bug fixes

- unbreak the build ([d595cad](https://github.com/adobe/spectrum-css/commit/d595cad))
- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

## 1.1.0

🗓 2022-01-05

### ✨ Features

- break out ClearButton and LogicButton into their own packages ([a2092ab](https://github.com/adobe/spectrum-css/commit/a2092ab))

### 🐛 Bug fixes

- unbreak the build ([123add2](https://github.com/adobe/spectrum-css/commit/123add2))
