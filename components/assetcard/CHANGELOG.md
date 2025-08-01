# Change log

## 5.1.1

### Patch Changes

📝 [#4088](https://github.com/adobe/spectrum-css/pull/4088) [`24d75bf`](https://github.com/adobe/spectrum-css/commit/24d75bfe4d8e627f9d8e019ae379bdd4787712dd) Thanks [@castastrophe](https://github.com/castastrophe)!

Minor linting fix of replacing `rgba` to the `rgb` shorthand syntax.

## 5.1.0

### Minor Changes

📝 [`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee) Thanks [@castastrophe](https://github.com/castastrophe)!

## New feature

Minified and gzipped outputs available for all compiled CSS assets.

### Patch Changes

📝 [#3541](https://github.com/adobe/spectrum-css/pull/3541) [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d) Thanks [@castastrophe](https://github.com/castastrophe)!

Dependency alignment across the project.

- Updated dependencies [[`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee), [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d)]:
  - @spectrum-css/checkbox@11.0.0
  - @spectrum-css/tokens@16.0.1

## 5.0.1

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
  - @spectrum-css/checkbox@10.0.1

## 5.0.0

### Major Changes

📝 [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6) Thanks [@pfulton](https://github.com/pfulton)!

## Breaking change

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
  - @spectrum-css/checkbox@10.0.0

## 4.3.1

### Patch Changes

📝 [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)!

- Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/checkbox@9.3.1

## 4.3.0

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
  - @spectrum-css/checkbox@9.3.0
  - @spectrum-css/tokens@15.1.0

## 4.2.0

### Minor Changes

📝 [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/checkbox@9.2.0

## 4.1.3

### Patch Changes

📝 [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)!

- Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/checkbox@9.1.3

## 4.1.2

### Patch Changes

📝 [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)!

- Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/checkbox@9.1.2

## 4.1.1

### Patch Changes

📝 [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)!

- Leverage local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/checkbox@9.1.1

## 4.1.0

### Minor Changes

📝 [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/checkbox@>=9
  - @spectrum-css/tokens@>=14

## 4.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@3.1.4...@spectrum-css/assetcard@4.0.0)

### ✨ Features

- use storybook v8 ([#2604](https://github.com/adobe/spectrum-css/issues/2604))([166ab23](https://github.com/adobe/spectrum-css/commit/166ab23))

- feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGE

- Removes component-builder & component-builder-simple for script leveraging postcss
- Imports added to index.css and themes/express.css

## 3.1.4

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@3.1.3...@spectrum-css/assetcard@3.1.4)

**Note:** Version bump only for package @spectrum-css/assetcard

## 3.1.3

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@3.1.2...@spectrum-css/assetcard@3.1.3)

**Note:** Version bump only for package @spectrum-css/assetcard

## 3.1.2

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@3.1.1...@spectrum-css/assetcard@3.1.2)

**Note:** Version bump only for package @spectrum-css/assetcard

## 3.1.1

🗓 2024-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@3.1.0...@spectrum-css/assetcard@3.1.1)

**Note:** Version bump only for package @spectrum-css/assetcard

## 3.1.0

🗓 2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@3.0.5...@spectrum-css/assetcard@3.1.0)

**Note:** Version bump only for package @spectrum-css/assetcard

## 3.0.5

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@3.0.4...@spectrum-css/assetcard@3.0.5)

**Note:** Version bump only for package @spectrum-css/assetcard

## 3.0.4

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@3.0.3...@spectrum-css/assetcard@3.0.4)

**Note:** Version bump only for package @spectrum-css/assetcard

## 3.0.3

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@3.0.2...@spectrum-css/assetcard@3.0.3)

**Note:** Version bump only for package @spectrum-css/assetcard

## 3.0.2

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@3.0.0...@spectrum-css/assetcard@3.0.2)

**Note:** Version bump only for package @spectrum-css/assetcard

## 3.0.1

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@3.0.0...@spectrum-css/assetcard@3.0.1)

**Note:** Version bump only for package @spectrum-css/assetcard

## 3.0.0

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.13...@spectrum-css/assetcard@3.0.0)

- refactor(assetcard)!: token migration (#2229)([a0cf37b](https://github.com/adobe/spectrum-css/commit/a0cf37b)), closes[#2229](https://github.com/adobe/spectrum-css/issues/2229)

### 🛑 BREAKING CHANGE

- migrate asset card to updated token system

## 2.0.13

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.12...@spectrum-css/assetcard@2.0.13)

**Note:** Version bump only for package @spectrum-css/assetcard

## 2.0.12

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.11...@spectrum-css/assetcard@2.0.12)

**Note:** Version bump only for package @spectrum-css/assetcard

## 2.0.11

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.10...@spectrum-css/assetcard@2.0.11)

**Note:** Version bump only for package @spectrum-css/assetcard

## 2.0.10

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.9...@spectrum-css/assetcard@2.0.10)

**Note:** Version bump only for package @spectrum-css/assetcard

## 2.0.9

🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.8...@spectrum-css/assetcard@2.0.9)

**Note:** Version bump only for package @spectrum-css/assetcard

## 2.0.8

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.7...@spectrum-css/assetcard@2.0.8)

**Note:** Version bump only for package @spectrum-css/assetcard

## 2.0.7

🗓 2023-09-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.6...@spectrum-css/assetcard@2.0.7)

**Note:** Version bump only for package @spectrum-css/assetcard

## 2.0.6

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.5...@spectrum-css/assetcard@2.0.6)

**Note:** Version bump only for package @spectrum-css/assetcard

## 2.0.5

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.4...@spectrum-css/assetcard@2.0.5)

**Note:** Version bump only for package @spectrum-css/assetcard

## 2.0.4

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.3...@spectrum-css/assetcard@2.0.4)

### 🔙 Reverts

- gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

## 2.0.3

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.2...@spectrum-css/assetcard@2.0.3)

**Note:** Version bump only for package @spectrum-css/assetcard

## 2.0.2

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.0...@spectrum-css/assetcard@2.0.2)

**Note:** Version bump only for package @spectrum-css/assetcard

## 2.0.1

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@2.0.0...@spectrum-css/assetcard@2.0.1)

**Note:** Version bump only for package @spectrum-css/assetcard

## 2.0.0

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.52...@spectrum-css/assetcard@2.0.0)

- refactor(assetcard)!: replace focus-ring with focus-visible([1c6a3e9](https://github.com/adobe/spectrum-css/commit/1c6a3e9))

### 🛑 BREAKING CHANGE

- use native focus-visible pseudo class for focus styling

## 1.1.52

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.51...@spectrum-css/assetcard@1.1.52)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.51

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.50...@spectrum-css/assetcard@1.1.51)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.50

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.49...@spectrum-css/assetcard@1.1.50)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.49

🗓 2023-07-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.48...@spectrum-css/assetcard@1.1.49)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.48

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.47...@spectrum-css/assetcard@1.1.48)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.47

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.46...@spectrum-css/assetcard@1.1.47)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.46

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.45...@spectrum-css/assetcard@1.1.46)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.45

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.44...@spectrum-css/assetcard@1.1.45)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.44

🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.43...@spectrum-css/assetcard@1.1.44)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.43

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.42...@spectrum-css/assetcard@1.1.43)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.42

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.41...@spectrum-css/assetcard@1.1.42)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.41

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.40...@spectrum-css/assetcard@1.1.41)

### 🐛 Bug fixes

- restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

## 1.1.40

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.39...@spectrum-css/assetcard@1.1.40)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.39

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.38...@spectrum-css/assetcard@1.1.39)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.38

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.37...@spectrum-css/assetcard@1.1.38)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.37

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.36...@spectrum-css/assetcard@1.1.37)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.36

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.35...@spectrum-css/assetcard@1.1.36)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.35

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.34...@spectrum-css/assetcard@1.1.35)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.34

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.33...@spectrum-css/assetcard@1.1.34)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.33

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.32...@spectrum-css/assetcard@1.1.33)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.32

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.31...@spectrum-css/assetcard@1.1.32)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.31

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.30...@spectrum-css/assetcard@1.1.31)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.30

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.29...@spectrum-css/assetcard@1.1.30)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.29

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.28...@spectrum-css/assetcard@1.1.29)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.28

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.27...@spectrum-css/assetcard@1.1.28)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.27

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.26...@spectrum-css/assetcard@1.1.27)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.26

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.24...@spectrum-css/assetcard@1.1.26)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.25

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.24...@spectrum-css/assetcard@1.1.25)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.24

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.23...@spectrum-css/assetcard@1.1.24)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.23

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.22...@spectrum-css/assetcard@1.1.23)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.22

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.21...@spectrum-css/assetcard@1.1.22)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.21

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.20...@spectrum-css/assetcard@1.1.21)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.20

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.19...@spectrum-css/assetcard@1.1.20)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.19

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.17...@spectrum-css/assetcard@1.1.19)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.18

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.17...@spectrum-css/assetcard@1.1.18)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.17

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.16...@spectrum-css/assetcard@1.1.17)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.16

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.15...@spectrum-css/assetcard@1.1.16)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.15

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.14...@spectrum-css/assetcard@1.1.15)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.14

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.13...@spectrum-css/assetcard@1.1.14)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.13

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.12...@spectrum-css/assetcard@1.1.13)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.12

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.11...@spectrum-css/assetcard@1.1.12)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.11

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.10...@spectrum-css/assetcard@1.1.11)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.10

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.9...@spectrum-css/assetcard@1.1.10)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.9

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.8...@spectrum-css/assetcard@1.1.9)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.8

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.6...@spectrum-css/assetcard@1.1.8)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.7

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.6...@spectrum-css/assetcard@1.1.7)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.6

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.5...@spectrum-css/assetcard@1.1.6)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.5

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.4...@spectrum-css/assetcard@1.1.5)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.4

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.3...@spectrum-css/assetcard@1.1.4)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.3

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.2...@spectrum-css/assetcard@1.1.3)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.2

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.1...@spectrum-css/assetcard@1.1.2)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.1

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/assetcard@1.1.0...@spectrum-css/assetcard@1.1.1)

**Note:** Version bump only for package @spectrum-css/assetcard

## 1.1.0

🗓 2022-03-22

### ✨ Features

- split-out and Expressify Asset Card ([61a4e96](https://github.com/adobe/spectrum-css/commit/61a4e96))
- start on AssetCard ([7e98f81](https://github.com/adobe/spectrum-css/commit/7e98f81))
- update spectrum-tokens, use new token packages ([10c4a13](https://github.com/adobe/spectrum-css/commit/10c4a13))

### 🐛 Bug fixes

- don't have a little border by default ([fbf1eec](https://github.com/adobe/spectrum-css/commit/fbf1eec))
- don't let the checkbox hide ([e62dda2](https://github.com/adobe/spectrum-css/commit/e62dda2))
- draw border on the inside, not outside ([3e045f8](https://github.com/adobe/spectrum-css/commit/3e045f8))
- have correct border color on selected + down ([ea9d311](https://github.com/adobe/spectrum-css/commit/ea9d311))
- highlight stop hiding ([2bc9bee](https://github.com/adobe/spectrum-css/commit/2bc9bee))
- more design review updates ([b4bfa90](https://github.com/adobe/spectrum-css/commit/b4bfa90))
