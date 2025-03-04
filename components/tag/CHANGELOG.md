# Change log

## 10.1.0

### Minor Changes

- [`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee) Thanks [@castastrophe](https://github.com/castastrophe)!

## New feature

Minified and gzipped outputs available for all compiled CSS assets.

### Patch Changes

- [#3541](https://github.com/adobe/spectrum-css/pull/3541) [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d) Thanks [@castastrophe](https://github.com/castastrophe)!

Dependency alignment across the project.

- Updated dependencies [[`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee), [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d)]:
  - @spectrum-css/avatar@9.1.0
  - @spectrum-css/clearbutton@8.0.0
  - @spectrum-css/icon@9.1.0
  - @spectrum-css/tokens@16.0.1

## 10.0.1

### Patch Changes

- [#3534](https://github.com/adobe/spectrum-css/pull/3534) [`68e0057`](https://github.com/adobe/spectrum-css/commit/68e00577156cc32b21bfa768dbd2d35d73563b4c) Thanks [@castastrophe](https://github.com/castastrophe)!

Fixes a bug in the content of the `dist/index-theme.css` file.

Expected `index-theme.css` to include the component selectors with component-level custom properties mapped to the `--system` prefixed ones in order to allow a component to support various contexts.

Expected output example for the index-theme.css:

```css
.spectrum-ActionButton {
  --spectrum-actionbutton-background-color-default: var(--system-action-button-background-color-default);
  --spectrum-actionbutton-background-color-hover: var(--system-action-button-background-color-hover);
```

- Updated dependencies [[`68e0057`](https://github.com/adobe/spectrum-css/commit/68e00577156cc32b21bfa768dbd2d35d73563b4c)]:
  - @spectrum-css/avatar@9.0.1
  - @spectrum-css/clearbutton@7.0.1
  - @spectrum-css/icon@9.0.1

## 10.0.0

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6) Thanks [@pfulton](https://github.com/pfulton)!

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
  - @spectrum-css/clearbutton@7.0.0
  - @spectrum-css/avatar@9.0.0
  - @spectrum-css/icon@9.0.0

## 9.3.1

### Patch Changes

- [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)!

- Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/clearbutton@6.5.1
  - @spectrum-css/avatar@8.0.1
  - @spectrum-css/icon@8.0.1

## 9.3.0

### Minor Changes

- [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)!

- Simplify how the `--system` properties are mapped. By updating the logic in the `postcss-add-theming-layer`, we are now shipping cleaner, more readable `--system` property names. These custom properties are documented as _NOT_ a part of the component API so although these result in a change to the custom property names, it does not impact the properties that are in the API and so do not constitute a breaking change. Expect to see no change to how component theming works or any visual regressions as a result of this change.

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/avatar@8.0.0
  - @spectrum-css/icon@8.0.0
  - @spectrum-css/clearbutton@6.5.0

## 9.2.0

### Minor Changes

- [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)!
- Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/clearbutton@6.4.0
  - @spectrum-css/avatar@7.3.0
  - @spectrum-css/icon@7.2.0

## 9.1.4

### Patch Changes

- [#3307](https://github.com/adobe/spectrum-css/pull/3307) [`25ddd5e`](https://github.com/adobe/spectrum-css/commit/25ddd5e62a19a8040f6c08549e447e19c0788af3) Thanks [@cdransf](https://github.com/cdransf)!
- Reorder rules and custom properties to resolve lint violations.

## 9.1.3

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)!
- Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/clearbutton@6.1.3
  - @spectrum-css/avatar@7.1.3
  - @spectrum-css/icon@7.1.4

## 9.1.2

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)!
- Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/clearbutton@6.1.2
  - @spectrum-css/avatar@7.1.2
  - @spectrum-css/icon@7.1.3

## 9.1.1

### 🛑 BREAKING CHANGES

- Leverage local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/clearbutton@6.1.1
  - @spectrum-css/avatar@7.1.1
  - @spectrum-css/icon@7.1.1

## 9.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:

## 9.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@8.1.5...@spectrum-css/tag@9.0.0)

- feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGES

- Removes component-builder & component-builder-simple for script leveraging postcss
- Imports added to index.css and themes/express.css

## 8.1.5

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@8.1.4...@spectrum-css/tag@8.1.5)

**Note:** Version bump only for package @spectrum-css/tag

## 8.1.3

🗓 2024-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@8.1.2...@spectrum-css/tag@8.1.3)

**Note:** Version bump only for package @spectrum-css/tag

## 8.1.2

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@8.1.1...@spectrum-css/tag@8.1.2)

**Note:** Version bump only for package @spectrum-css/tag

## 8.1.1

🗓 2024-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@8.1.0...@spectrum-css/tag@8.1.1)

**Note:** Version bump only for package @spectrum-css/tag

## 8.1.0

🗓 2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@8.0.17...@spectrum-css/tag@8.1.0)

### 🐛 Bug fixes

- **tag:**higher specificity for color definition in hover states([fa8cd37](https://github.com/adobe/spectrum-css/commit/fa8cd37))

## 8.0.17

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@8.0.16...@spectrum-css/tag@8.0.17)

**Note:** Version bump only for package @spectrum-css/tag

## 8.0.16

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@8.0.15...@spectrum-css/tag@8.0.16)

**Note:** Version bump only for package @spectrum-css/tag

## 8.0.15

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@8.0.14...@spectrum-css/tag@8.0.15)

**Note:** Version bump only for package @spectrum-css/tag

## 8.0.14

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@8.0.12...@spectrum-css/tag@8.0.14)

**Note:** Version bump only for package @spectrum-css/tag

## 8.0.13

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@8.0.12...@spectrum-css/tag@8.0.13)

**Note:** Version bump only for package @spectrum-css/tag

## 8.0.12

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@8.0.11...@spectrum-css/tag@8.0.12)

**Note:** Version bump only for package @spectrum-css/tag

## 8.0.11

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@8.0.10...@spectrum-css/tag@8.0.11)

**Note:** Version bump only for package @spectrum-css/tag

## 8.0.10

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@8.0.9...@spectrum-css/tag@8.0.10)

**Note:** Version bump only for package @spectrum-css/tag

## 8.0.9

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@8.0.8...@spectrum-css/tag@8.0.9)

**Note:** Version bump only for package @spectrum-css/tag

## 8.0.8

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@8.0.7...@spectrum-css/tag@8.0.8)

**Note:** Version bump only for package @spectrum-css/tag

## 8.0.7

- 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@8.0.6...@spectrum-css/tag@8.0.7)

**Note:** Version bump only for package @spectrum-css/tag

## 8.0.6

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@8.0.5...@spectrum-css/tag@8.0.6)

**Note:** Version bump only for package @spectrum-css/tag

## 8.0.5

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@8.0.4...@spectrum-css/tag@8.0.5)

**Note:** Version bump only for package @spectrum-css/tag

## 8.0.4

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@8.0.3...@spectrum-css/tag@8.0.4)

**Note:** Version bump only for package @spectrum-css/tag

## 8.0.3

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@8.0.2...@spectrum-css/tag@8.0.3)

**Note:** Version bump only for package @spectrum-css/tag

## 8.0.2

🗓 2023-08-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@8.0.1...@spectrum-css/tag@8.0.2)

### 🔙 Reverts

- gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

## 8.0.1

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@8.0.0...@spectrum-css/tag@8.0.1)

**Note:** Version bump only for package @spectrum-css/tag

## 8.0.0

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@6.0.1...@spectrum-css/tag@8.0.0)

- refactor(clearbutton)!: migrate tokens (#1943)([495198a](https://github.com/adobe/spectrum-css/commit/495198a)), closes[#1943](https://github.com/adobe/spectrum-css/issues/1943)

### 🛑 BREAKING CHANGES

- migrates clear button to use `@adobe/spectrum-tokens`

## 7.0.0

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@6.0.1...@spectrum-css/tag@7.0.0)

- refactor(clearbutton)!: migrate tokens (#1943)([495198a](https://github.com/adobe/spectrum-css/commit/495198a)), closes[#1943](https://github.com/adobe/spectrum-css/issues/1943)

### 🛑 BREAKING CHANGES

- migrates clear button to use `@adobe/spectrum-tokens`

## 6.0.1

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@6.0.0...@spectrum-css/tag@6.0.1)

**Note:** Version bump only for package @spectrum-css/tag

## 6.0.0

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.46...@spectrum-css/tag@6.0.0)

- fix(tag)!: update color tokens, rename classes to be singular (#2039)([bb60ff4](https://github.com/adobe/spectrum-css/commit/bb60ff4)), closes[#2039](https://github.com/adobe/spectrum-css/issues/2039)

### 🛑 BREAKING CHANGES

- renames class name instances of `--spectrum-Tags-*` to be `--spectrum-Tag-*`

Additionally:

- chore(tag): use new selected bg colors
- chore(tag): update stories
- fix(tag): storybook icon avatar toggle

## 5.0.46

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.45...@spectrum-css/tag@5.0.46)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.45

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.44...@spectrum-css/tag@5.0.45)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.44

🗓 2023-07-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.43...@spectrum-css/tag@5.0.44)

### 🐛 Bug fixes

- **tag:**update whcm focus ring color ([#2043](https://github.com/adobe/spectrum-css/issues/2043))([e581fbc](https://github.com/adobe/spectrum-css/commit/e581fbc))

## 5.0.43

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.42...@spectrum-css/tag@5.0.43)

### 🐛 Bug fixes

- icon sizing in Storybook story templates ([#2037](https://github.com/adobe/spectrum-css/issues/2037))([c90c8a3](https://github.com/adobe/spectrum-css/commit/c90c8a3))

## 5.0.42

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.41...@spectrum-css/tag@5.0.42)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.41

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.40...@spectrum-css/tag@5.0.41)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.40

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.39...@spectrum-css/tag@5.0.40)

### 🐛 Bug fixes

- tag focus issue solved ([#1983](https://github.com/adobe/spectrum-css/issues/1983))([37baa4c](https://github.com/adobe/spectrum-css/commit/37baa4c))

## 5.0.39

🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.38...@spectrum-css/tag@5.0.39)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.38

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.37...@spectrum-css/tag@5.0.38)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.37

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.36...@spectrum-css/tag@5.0.37)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.36

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.35...@spectrum-css/tag@5.0.36)

### 🐛 Bug fixes

- restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

## 5.0.35

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.34...@spectrum-css/tag@5.0.35)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.34

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.33...@spectrum-css/tag@5.0.34)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.33

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.32...@spectrum-css/tag@5.0.33)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.32

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.31...@spectrum-css/tag@5.0.32)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.31

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.30...@spectrum-css/tag@5.0.31)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.30

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.29...@spectrum-css/tag@5.0.30)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.29

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.28...@spectrum-css/tag@5.0.29)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.28

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.27...@spectrum-css/tag@5.0.28)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.27

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.26...@spectrum-css/tag@5.0.27)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.26

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.25...@spectrum-css/tag@5.0.26)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.25

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.24...@spectrum-css/tag@5.0.25)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.24

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.23...@spectrum-css/tag@5.0.24)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.23

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.22...@spectrum-css/tag@5.0.23)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.22

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.20...@spectrum-css/tag@5.0.22)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.21

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.20...@spectrum-css/tag@5.0.21)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.20

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.19...@spectrum-css/tag@5.0.20)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.19

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.18...@spectrum-css/tag@5.0.19)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.18

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.17...@spectrum-css/tag@5.0.18)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.17

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.16...@spectrum-css/tag@5.0.17)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.16

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.14...@spectrum-css/tag@5.0.16)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.15

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.14...@spectrum-css/tag@5.0.15)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.14

🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.12...@spectrum-css/tag@5.0.14)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.13

🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.12...@spectrum-css/tag@5.0.13)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.12

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.11...@spectrum-css/tag@5.0.12)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.11

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.10...@spectrum-css/tag@5.0.11)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.10

🗓 2023-03-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.9...@spectrum-css/tag@5.0.10)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.9

🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.8...@spectrum-css/tag@5.0.9)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.8

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.7...@spectrum-css/tag@5.0.8)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.7

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.6...@spectrum-css/tag@5.0.7)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.6

🗓 2023-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.5...@spectrum-css/tag@5.0.6)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.5

🗓 2023-03-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.4...@spectrum-css/tag@5.0.5)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.4

🗓 2023-02-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.3...@spectrum-css/tag@5.0.4)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.3

🗓 2023-02-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.2...@spectrum-css/tag@5.0.3)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.2

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.1...@spectrum-css/tag@5.0.2)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.1

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@5.0.0...@spectrum-css/tag@5.0.1)

**Note:** Version bump only for package @spectrum-css/tag

## 5.0.0

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@4.0.9...@spectrum-css/tag@5.0.0)

- chore(tokens)!: use latest dependency & fix build error (#1591) ([f2532e7](https://github.com/adobe/spectrum-css/commit/f2532e7)), closes [#1591](https://github.com/adobe/spectrum-css/issues/1591)

### 🛑 BREAKING CHANGES

- uses latest `@adobe/spectrum-tokens` dependency which includes token renames

## 4.0.9

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@4.0.8...@spectrum-css/tag@4.0.9)

**Note:** Version bump only for package @spectrum-css/tag

## 4.0.8

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@4.0.7...@spectrum-css/tag@4.0.8)

**Note:** Version bump only for package @spectrum-css/tag

## 4.0.7

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@4.0.6...@spectrum-css/tag@4.0.7)

**Note:** Version bump only for package @spectrum-css/tag

## 4.0.6

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@4.0.4...@spectrum-css/tag@4.0.6)

**Note:** Version bump only for package @spectrum-css/tag

## 4.0.5

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@4.0.4...@spectrum-css/tag@4.0.5)

**Note:** Version bump only for package @spectrum-css/tag

## 4.0.4

🗓 2023-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@4.0.3...@spectrum-css/tag@4.0.4)

**Note:** Version bump only for package @spectrum-css/tag

## 4.0.3

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@4.0.2...@spectrum-css/tag@4.0.3)

**Note:** Version bump only for package @spectrum-css/tag

## 4.0.2

🗓 2022-12-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@4.0.1...@spectrum-css/tag@4.0.2)

**Note:** Version bump only for package @spectrum-css/tag

## 4.0.1

🗓 2022-12-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@4.0.0...@spectrum-css/tag@4.0.1)

**Note:** Version bump only for package @spectrum-css/tag

## 4.0.0

🗓 2022-12-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@3.3.15...@spectrum-css/tag@4.0.0)

- refactor(tag)!: migrate to core tokens (#1520) ([a9612d1](https://github.com/adobe/spectrum-css/commit/a9612d1)), closes [#1520](https://github.com/adobe/spectrum-css/issues/1520)

### 🛑 BREAKING CHANGES

- migrates tag to core tokens

Co-authored-by: Patrick Fulton <pfulton@adobe.com>

## 3.3.15

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@3.3.14...@spectrum-css/tag@3.3.15)

**Note:** Version bump only for package @spectrum-css/tag

## 3.3.14

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@3.3.13...@spectrum-css/tag@3.3.14)

**Note:** Version bump only for package @spectrum-css/tag

## 3.3.13

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@3.3.12...@spectrum-css/tag@3.3.13)

**Note:** Version bump only for package @spectrum-css/tag

## 3.3.12

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@3.3.11...@spectrum-css/tag@3.3.12)

### 🐛 Bug fixes

- tag WHCM ([2a87aed](https://github.com/adobe/spectrum-css/commit/2a87aed))

## 3.3.11

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@3.3.10...@spectrum-css/tag@3.3.11)

**Note:** Version bump only for package @spectrum-css/tag

## 3.3.10

🗓 2022-04-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@3.3.9...@spectrum-css/tag@3.3.10)

### 🐛 Bug fixes

- stick to a single selector for consistency in tag clearbutton ([2d8261e](https://github.com/adobe/spectrum-css/commit/2d8261e))

## 3.3.9

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@3.3.8...@spectrum-css/tag@3.3.9)

**Note:** Version bump only for package @spectrum-css/tag

## 3.3.8

🗓 2022-03-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@3.3.7...@spectrum-css/tag@3.3.8)

**Note:** Version bump only for package @spectrum-css/tag

## 3.3.7

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@3.3.6...@spectrum-css/tag@3.3.7)

**Note:** Version bump only for package @spectrum-css/tag

## 3.3.6

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@3.3.5...@spectrum-css/tag@3.3.6)

**Note:** Version bump only for package @spectrum-css/tag

## 3.3.5

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@3.3.4...@spectrum-css/tag@3.3.5)

**Note:** Version bump only for package @spectrum-css/tag

## 3.3.4

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@3.3.3...@spectrum-css/tag@3.3.4)

**Note:** Version bump only for package @spectrum-css/tag

## 3.3.3

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@3.3.2...@spectrum-css/tag@3.3.3)

**Note:** Version bump only for package @spectrum-css/tag

## 3.3.2

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@3.3.1...@spectrum-css/tag@3.3.2)

**Note:** Version bump only for package @spectrum-css/tag

## 3.3.1

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@3.3.0...@spectrum-css/tag@3.3.1)

### 🐛 Bug fixes

- add express support to tag ([92355bb](https://github.com/adobe/spectrum-css/commit/92355bb))
- update tag for express WIP ([fe2d8d1](https://github.com/adobe/spectrum-css/commit/fe2d8d1))

## 3.3.0

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@3.1.4...@spectrum-css/tag@3.3.0)

### ✨ Features

- break out ClearButton and LogicButton into their own packages ([3cc0a5f](https://github.com/adobe/spectrum-css/commit/3cc0a5f))

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

## 3.2.0

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@3.2.0-beta.0...@spectrum-css/tag@3.2.0)

**Note:** Version bump only for package @spectrum-css/tag

## 3.1.4

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@3.1.3...@spectrum-css/tag@3.1.4)

**Note:** Version bump only for package @spectrum-css/tag

## 3.1.3

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@3.1.2...@spectrum-css/tag@3.1.3)

**Note:** Version bump only for package @spectrum-css/tag

## 3.1.2

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@3.1.1...@spectrum-css/tag@3.1.2)

**Note:** Version bump only for package @spectrum-css/tag

## 3.1.1

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@3.1.0...@spectrum-css/tag@3.1.1)

**Note:** Version bump only for package @spectrum-css/tag

## 3.1.0

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@3.0.0...@spectrum-css/tag@3.1.0)

### ✨ Features

- make ClearButton build again, unblock CCX ([#1304](https://github.com/adobe/spectrum-css/issues/1304)) ([ae9399a](https://github.com/adobe/spectrum-css/commit/ae9399a))

## 3.0.0

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tag@2.0.0...@spectrum-css/tag@3.0.0)

### 🐛 Bug fixes

- adjusted tag avatar in metadata. fixes [#1239](https://github.com/adobe/spectrum-css/issues/1239) fixes [#693](https://github.com/adobe/spectrum-css/issues/693) ([262a44d](https://github.com/adobe/spectrum-css/commit/262a44d))
- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

- fix!: avatar needs a div wrapper for to support express border overlay ([f54b645](https://github.com/adobe/spectrum-css/commit/f54b645))

### 🛑 BREAKING CHANGES

- for express to support the transparent border overlay, the avatar needs to be wrapped in a div to support pseudo elements.

## 2.0.0

🗓 2021-09-29

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))
