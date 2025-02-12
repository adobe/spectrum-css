# Change Log

## 5.0.1

### Patch Changes

- [#3534](https://github.com/adobe/spectrum-css/pull/3534) [`68e0057`](https://github.com/adobe/spectrum-css/commit/68e00577156cc32b21bfa768dbd2d35d73563b4c) Thanks [@castastrophe](https://github.com/castastrophe)!

- Fixes a bug in the content of the `dist/index-theme.css` file.

Expected `index-theme.css` to include the component selectors with component-level custom properties mapped to the `--system` prefixed ones in order to allow a component to support various contexts.

Expected output example for the index-theme.css:

```css
.spectrum-ActionButton {
  --spectrum-actionbutton-background-color-default: var(--system-action-button-background-color-default);
  --spectrum-actionbutton-background-color-hover: var(--system-action-button-background-color-hover);
```

- Updated dependencies [[`68e0057`](https://github.com/adobe/spectrum-css/commit/68e00577156cc32b21bfa768dbd2d35d73563b4c)]:
  - @spectrum-css/button@14.0.1
  - @spectrum-css/dialog@12.0.1
  - @spectrum-css/divider@5.0.1
  - @spectrum-css/icon@9.0.1
  - @spectrum-css/modal@7.0.1

## 5.0.0

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6) Thanks [@pfulton](https://github.com/pfulton)!

- ## Breaking change

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
  - @spectrum-css/divider@5.0.0
  - @spectrum-css/button@14.0.0
  - @spectrum-css/dialog@12.0.0
  - @spectrum-css/modal@7.0.0
  - @spectrum-css/icon@9.0.0

## 4.0.1

### Patch Changes

- [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)!

- Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/divider@4.0.1
  - @spectrum-css/button@13.6.1
  - @spectrum-css/dialog@11.0.1
  - @spectrum-css/modal@6.0.1
  - @spectrum-css/icon@8.0.1

## 4.0.0

### Major Changes

- [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove empty theme references to reduce complexity for components that don't need to define any mappings. This involves removing the source `themes` directories with the empty `spectrum.css` and `express.com` files as well as removing the following empty or unnecessary exports:

  - `index-base.css`
  - `index-theme.css`
  - `themes/spectrum.css`
  - `themes/express.css`

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/button@13.6.0
  - @spectrum-css/modal@6.0.0
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/divider@4.0.0
  - @spectrum-css/dialog@11.0.0
  - @spectrum-css/icon@8.0.0

## 3.2.0

### Minor Changes

- [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/divider@3.2.0
  - @spectrum-css/button@13.5.0
  - @spectrum-css/dialog@10.2.0
  - @spectrum-css/modal@5.2.0
  - @spectrum-css/icon@7.2.0

## 3.1.4

### Patch Changes

- [#3317](https://github.com/adobe/spectrum-css/pull/3317) [`d00030f`](https://github.com/adobe/spectrum-css/commit/d00030f31fa6905e66cc02840747c3f80752f768) Thanks [@cdransf](https://github.com/cdransf)!

- Resolves stylelint violation by adjusting declaration order

## 3.1.3

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)!

- Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/divider@3.1.3
  - @spectrum-css/button@13.1.3
  - @spectrum-css/dialog@10.1.4
  - @spectrum-css/modal@5.1.3
  - @spectrum-css/icon@7.1.4

## 3.1.2

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)!

- Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/divider@3.1.2
  - @spectrum-css/button@13.1.2
  - @spectrum-css/dialog@10.1.3
  - @spectrum-css/modal@5.1.2
  - @spectrum-css/icon@7.1.3

## 3.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)!

- Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/divider@3.1.1
  - @spectrum-css/button@13.1.1
  - @spectrum-css/dialog@10.1.1
  - @spectrum-css/modal@5.1.1
  - @spectrum-css/icon@7.1.1

## 3.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/button@>=13
  - @spectrum-css/dialog@>=10
  - @spectrum-css/divider@>=3
  - @spectrum-css/icon@>=7
  - @spectrum-css/modal@>=5
  - @spectrum-css/tokens@>=14

## 3.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.2.7...@spectrum-css/tray@3.0.0)

- feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGES

- Removes component-builder & component-builder-simple for script leveraging postcss
- Imports added to index.css and themes/express.css

## 2.2.7

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.2.6...@spectrum-css/tray@2.2.7)

**Note:** Version bump only for package @spectrum-css/tray

## 2.2.6

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.2.5...@spectrum-css/tray@2.2.6)

**Note:** Version bump only for package @spectrum-css/tray

## 2.2.5

🗓 2024-02-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.2.4...@spectrum-css/tray@2.2.5)

### 🐛 Bug fixes

- **tray:**full width at portrait orientation ([#2547](https://github.com/adobe/spectrum-css/issues/2547))([c9a79f2](https://github.com/adobe/spectrum-css/commit/c9a79f2))

## 2.2.4

🗓 2024-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.2.3...@spectrum-css/tray@2.2.4)

**Note:** Version bump only for package @spectrum-css/tray

## 2.2.3

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.2.2...@spectrum-css/tray@2.2.3)

**Note:** Version bump only for package @spectrum-css/tray

## 2.2.2

🗓 2024-02-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.2.1...@spectrum-css/tray@2.2.2)

**Note:** Version bump only for package @spectrum-css/tray

## 2.2.1

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-css/tray

## 2.2.0

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.1.22...@spectrum-css/tray@2.2.0)

### ✨ Features

- remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

## 2.1.22

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.1.21...@spectrum-css/tray@2.1.22)

**Note:** Version bump only for package @spectrum-css/tray

## 2.1.21

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.1.20...@spectrum-css/tray@2.1.21)

**Note:** Version bump only for package @spectrum-css/tray

## 2.1.20

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.1.18...@spectrum-css/tray@2.1.20)

**Note:** Version bump only for package @spectrum-css/tray

## 2.1.19

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.1.18...@spectrum-css/tray@2.1.19)

**Note:** Version bump only for package @spectrum-css/tray

## 2.1.18

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.1.17...@spectrum-css/tray@2.1.18)

**Note:** Version bump only for package @spectrum-css/tray

## 2.1.17

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.1.16...@spectrum-css/tray@2.1.17)

**Note:** Version bump only for package @spectrum-css/tray

## 2.1.16

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.1.15...@spectrum-css/tray@2.1.16)

**Note:** Version bump only for package @spectrum-css/tray

## 2.1.15

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.1.14...@spectrum-css/tray@2.1.15)

**Note:** Version bump only for package @spectrum-css/tray

## 2.1.14

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.1.13...@spectrum-css/tray@2.1.14)

**Note:** Version bump only for package @spectrum-css/tray

## 2.1.13

🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.1.12...@spectrum-css/tray@2.1.13)

**Note:** Version bump only for package @spectrum-css/tray

## 2.1.12

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.1.11...@spectrum-css/tray@2.1.12)

**Note:** Version bump only for package @spectrum-css/tray

## 2.1.11

🗓 2023-09-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.1.10...@spectrum-css/tray@2.1.11)

**Note:** Version bump only for package @spectrum-css/tray

## 2.1.10

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.1.9...@spectrum-css/tray@2.1.10)

**Note:** Version bump only for package @spectrum-css/tray

## 2.1.9

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.1.8...@spectrum-css/tray@2.1.9)

**Note:** Version bump only for package @spectrum-css/tray

## 2.1.8

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.1.7...@spectrum-css/tray@2.1.8)

### 🔙 Reverts

- gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

## 2.1.7

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.1.6...@spectrum-css/tray@2.1.7)

**Note:** Version bump only for package @spectrum-css/tray

## 2.1.6

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.1.4...@spectrum-css/tray@2.1.6)

**Note:** Version bump only for package @spectrum-css/tray

## 2.1.5

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.1.4...@spectrum-css/tray@2.1.5)

**Note:** Version bump only for package @spectrum-css/tray

## 2.1.4

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.1.3...@spectrum-css/tray@2.1.4)

**Note:** Version bump only for package @spectrum-css/tray

## 2.1.3

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.1.2...@spectrum-css/tray@2.1.3)

**Note:** Version bump only for package @spectrum-css/tray

## 2.1.2

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.1.1...@spectrum-css/tray@2.1.2)

**Note:** Version bump only for package @spectrum-css/tray

## 2.1.1

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.1.0...@spectrum-css/tray@2.1.1)

**Note:** Version bump only for package @spectrum-css/tray

## 2.1.0

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.57...@spectrum-css/tray@2.1.0)

### ✨ Features

- **tray:**use token for top and bottom edge to content area([ac54820](https://github.com/adobe/spectrum-css/commit/ac54820))

## 2.0.57

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.56...@spectrum-css/tray@2.0.57)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.56

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.55...@spectrum-css/tray@2.0.56)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.55

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.54...@spectrum-css/tray@2.0.55)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.54

🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.53...@spectrum-css/tray@2.0.54)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.53

🗓 2023-06-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.52...@spectrum-css/tray@2.0.53)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.52

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.51...@spectrum-css/tray@2.0.52)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.51

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.50...@spectrum-css/tray@2.0.51)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.50

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.49...@spectrum-css/tray@2.0.50)

### 🐛 Bug fixes

- restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

## 2.0.49

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.48...@spectrum-css/tray@2.0.49)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.48

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.47...@spectrum-css/tray@2.0.48)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.47

🗓 2023-05-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.46...@spectrum-css/tray@2.0.47)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.46

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.45...@spectrum-css/tray@2.0.46)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.45

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.44...@spectrum-css/tray@2.0.45)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.44

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.43...@spectrum-css/tray@2.0.44)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.43

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.42...@spectrum-css/tray@2.0.43)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.42

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.41...@spectrum-css/tray@2.0.42)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.41

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.40...@spectrum-css/tray@2.0.41)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.40

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.39...@spectrum-css/tray@2.0.40)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.39

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.38...@spectrum-css/tray@2.0.39)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.38

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.37...@spectrum-css/tray@2.0.38)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.37

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.36...@spectrum-css/tray@2.0.37)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.36

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.35...@spectrum-css/tray@2.0.36)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.35

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.34...@spectrum-css/tray@2.0.35)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.34

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.32...@spectrum-css/tray@2.0.34)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.33

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.32...@spectrum-css/tray@2.0.33)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.32

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.31...@spectrum-css/tray@2.0.32)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.31

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.30...@spectrum-css/tray@2.0.31)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.30

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.29...@spectrum-css/tray@2.0.30)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.29

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.28...@spectrum-css/tray@2.0.29)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.28

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.26...@spectrum-css/tray@2.0.28)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.27

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.26...@spectrum-css/tray@2.0.27)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.26

🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.24...@spectrum-css/tray@2.0.26)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.25

🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.24...@spectrum-css/tray@2.0.25)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.24

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.23...@spectrum-css/tray@2.0.24)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.23

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.22...@spectrum-css/tray@2.0.23)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.22

🗓 2023-03-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.21...@spectrum-css/tray@2.0.22)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.21

🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.20...@spectrum-css/tray@2.0.21)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.20

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.19...@spectrum-css/tray@2.0.20)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.19

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.18...@spectrum-css/tray@2.0.19)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.18

🗓 2023-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.17...@spectrum-css/tray@2.0.18)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.17

🗓 2023-03-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.16...@spectrum-css/tray@2.0.17)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.16

🗓 2023-02-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.15...@spectrum-css/tray@2.0.16)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.15

🗓 2023-02-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.14...@spectrum-css/tray@2.0.15)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.14

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.13...@spectrum-css/tray@2.0.14)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.13

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.12...@spectrum-css/tray@2.0.13)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.12

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.11...@spectrum-css/tray@2.0.12)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.11

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.10...@spectrum-css/tray@2.0.11)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.10

🗓 2023-01-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.9...@spectrum-css/tray@2.0.10)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.9

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.8...@spectrum-css/tray@2.0.9)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.8

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.7...@spectrum-css/tray@2.0.8)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.7

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.5...@spectrum-css/tray@2.0.7)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.6

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.5...@spectrum-css/tray@2.0.6)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.5

🗓 2023-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.4...@spectrum-css/tray@2.0.5)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.4

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.3...@spectrum-css/tray@2.0.4)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.3

🗓 2022-12-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.2...@spectrum-css/tray@2.0.3)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.2

🗓 2022-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.0...@spectrum-css/tray@2.0.2)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.1

🗓 2022-12-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@2.0.0...@spectrum-css/tray@2.0.1)

**Note:** Version bump only for package @spectrum-css/tray

## 2.0.0

🗓 2022-12-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.31...@spectrum-css/tray@2.0.0)

- feat(tray)!: migrate to core tokens (#1535) ([442c5f6](https://github.com/adobe/spectrum-css/commit/442c5f6)), closes [#1535](https://github.com/adobe/spectrum-css/issues/1535)

### 🛑 BREAKING CHANGES

- migrates the Tray to core tokens

- removes the `375px` breakpoint, which was previously used to apply a `max-width` and border radius to the Tray, and instead this uses an orientation media query to apply these styles when viewport is in landscape orientation or when the width is greater than the height.

Co-authored-by: Patrick Fulton <pfulton@adobe.com>

## 1.0.31

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.30...@spectrum-css/tray@1.0.31)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.30

🗓 2022-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.29...@spectrum-css/tray@1.0.30)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.29

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.27...@spectrum-css/tray@1.0.29)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.28

🗓 2022-06-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.27...@spectrum-css/tray@1.0.28)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.27

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.26...@spectrum-css/tray@1.0.27)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.26

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.25...@spectrum-css/tray@1.0.26)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.25

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.24...@spectrum-css/tray@1.0.25)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.24

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.23...@spectrum-css/tray@1.0.24)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.23

🗓 2022-03-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.22...@spectrum-css/tray@1.0.23)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.22

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.21...@spectrum-css/tray@1.0.22)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.21

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.20...@spectrum-css/tray@1.0.21)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.20

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.19...@spectrum-css/tray@1.0.20)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.19

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.18...@spectrum-css/tray@1.0.19)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.18

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.17...@spectrum-css/tray@1.0.18)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.17

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.16...@spectrum-css/tray@1.0.17)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.16

🗓 2022-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.15...@spectrum-css/tray@1.0.16)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.15

🗓 2022-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.14...@spectrum-css/tray@1.0.15)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.14

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.13...@spectrum-css/tray@1.0.14)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.13

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.11...@spectrum-css/tray@1.0.13)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

## 1.0.12

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.11...@spectrum-css/tray@1.0.12)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.11

🗓 2021-12-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.10...@spectrum-css/tray@1.0.11)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.10

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.9...@spectrum-css/tray@1.0.10)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.9

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.8...@spectrum-css/tray@1.0.9)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.8

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.7...@spectrum-css/tray@1.0.8)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.7

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.6...@spectrum-css/tray@1.0.7)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.6

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.4...@spectrum-css/tray@1.0.6)

### 🐛 Bug fixes

- remove logical property usage from media queries ([cdeb051](https://github.com/adobe/spectrum-css/commit/cdeb051))

## 1.0.5

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.4...@spectrum-css/tray@1.0.5)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.2...@spectrum-css/tray@1.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

## 1.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.1...@spectrum-css/tray@1.0.2)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tray@1.0.0...@spectrum-css/tray@1.0.1)

**Note:** Version bump only for package @spectrum-css/tray

## 1.0.0

🗓 2021-02-02

### ✨ Features

- implement t-shirt sizing for Divider, closes [#972](https://github.com/adobe/spectrum-css/issues/972) ([bb10aa9](https://github.com/adobe/spectrum-css/commit/bb10aa9))

### 🛑 BREAKING CHANGES

- `.spectrum-Divider--size*` is now required
- `.spectrum-Divider--small` is now `.spectrum-Divider--sizeS`, `.spectrum-Divider--medium` is now `.spectrum-Divider--sizeM`, `.spectrum-Divider--large` is now `.spectrum-Divider--sizeL`
