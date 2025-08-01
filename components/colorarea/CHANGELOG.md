# Change log

## 7.1.0

### Minor Changes

📝 [`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee) Thanks [@castastrophe](https://github.com/castastrophe)!

## New feature

Minified and gzipped outputs available for all compiled CSS assets.

### Patch Changes

📝 [#3541](https://github.com/adobe/spectrum-css/pull/3541) [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d) Thanks [@castastrophe](https://github.com/castastrophe)!

Dependency alignment across the project.

- Updated dependencies [[`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee), [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d)]:
  - @spectrum-css/colorhandle@11.0.0
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
  - @spectrum-css/colorhandle@10.0.1

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
  - @spectrum-css/colorhandle@10.0.0

## 6.0.1

### Patch Changes

📝 [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)!

- Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/colorhandle@9.0.1

## 6.0.0

### Major Changes

📝 [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove empty theme references to reduce complexity for components that don't need to define any mappings. This involves removing the source `themes` directories with the empty `spectrum.css` and `express.com` files as well as removing the following empty or unnecessary exports:
  - `index-base.css`
  - `index-theme.css`
  - `themes/spectrum.css`
  - `themes/express.css`

### Minor Changes

📝 [#3359](https://github.com/adobe/spectrum-css/pull/3359) [`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b) Thanks [@cdransf](https://github.com/cdransf)!

- This resolves our remaining stylelint issues around undefined tokens, rule order, unused values and color syntax.
  - Updates invalid color syntax from `rgba(N, N, N, N)` to `rgba(N N N / N)`.
  - In cases of duplicate properties, preserves the property that would be applied given current code structure.
  - Updates misnamed tokens to use valid tokens (`table/index.css`).

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/colorhandle@9.0.0

## 5.2.0

### Minor Changes

📝 [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/colorhandle@8.2.0

## 5.1.3

### Patch Changes

📝 [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)!

- Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/colorhandle@8.1.3

## 5.1.2

### Patch Changes

📝 [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)!

- Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/colorhandle@8.1.2

## 5.1.1

### Patch Changes

📝 [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)!

- Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/colorhandle@8.1.1

## 5.1.0

### Minor Changes

📝 [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/colorhandle@>=8
  - @spectrum-css/tokens@>=14

## 5.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.1.5...@spectrum-css/colorarea@5.0.0)

- feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGE

- Removes component-builder & component-builder-simple for script leveraging postcss
- Imports added to index.css and themes/express.css

## 4.1.5

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.1.4...@spectrum-css/colorarea@4.1.5)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.1.4

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.1.3...@spectrum-css/colorarea@4.1.4)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.1.3

🗓 2024-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.1.2...@spectrum-css/colorarea@4.1.3)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.1.2

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.1.1...@spectrum-css/colorarea@4.1.2)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.1.1

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.1.0

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.51...@spectrum-css/colorarea@4.1.0)

### ✨ Features

- remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

## 4.0.51

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.50...@spectrum-css/colorarea@4.0.51)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.50

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.49...@spectrum-css/colorarea@4.0.50)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.49

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.47...@spectrum-css/colorarea@4.0.49)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.48

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.47...@spectrum-css/colorarea@4.0.48)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.47

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.46...@spectrum-css/colorarea@4.0.47)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.46

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.45...@spectrum-css/colorarea@4.0.46)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.45

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.44...@spectrum-css/colorarea@4.0.45)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.44

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.43...@spectrum-css/colorarea@4.0.44)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.43

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.42...@spectrum-css/colorarea@4.0.43)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.42

🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.41...@spectrum-css/colorarea@4.0.42)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.41

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.40...@spectrum-css/colorarea@4.0.41)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.40

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.39...@spectrum-css/colorarea@4.0.40)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.39

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.38...@spectrum-css/colorarea@4.0.39)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.38

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.37...@spectrum-css/colorarea@4.0.38)

### 🔙 Reverts

- gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

## 4.0.37

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.36...@spectrum-css/colorarea@4.0.37)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.36

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.34...@spectrum-css/colorarea@4.0.36)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.35

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.34...@spectrum-css/colorarea@4.0.35)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.34

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.33

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.32...@spectrum-css/colorarea@4.0.33)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.32

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.31...@spectrum-css/colorarea@4.0.32)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.31

🗓 2023-08-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.30...@spectrum-css/colorarea@4.0.31)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.30

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.29...@spectrum-css/colorarea@4.0.30)
**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.29

🗓 2023-07-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.28...@spectrum-css/colorarea@4.0.29)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.28

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.27...@spectrum-css/colorarea@4.0.28)

### 🐛 Bug fixes

- **colorarea:** return z-index ([#2041](https://github.com/adobe/spectrum-css/issues/2041))([0980f0d](https://github.com/adobe/spectrum-css/commit/0980f0d))

## 4.0.27

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.26...@spectrum-css/colorarea@4.0.27)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.26

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.25...@spectrum-css/colorarea@4.0.26)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.25

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.24...@spectrum-css/colorarea@4.0.25)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.24

🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.23...@spectrum-css/colorarea@4.0.24)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.23

🗓 2023-06-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.22...@spectrum-css/colorarea@4.0.23)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.22

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.21...@spectrum-css/colorarea@4.0.22)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.21

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.20...@spectrum-css/colorarea@4.0.21)
**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.20

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.19...@spectrum-css/colorarea@4.0.20)

### 🐛 Bug fixes

- restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

## 4.0.19

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.18...@spectrum-css/colorarea@4.0.19)
**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.18

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.17...@spectrum-css/colorarea@4.0.18)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.17

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.16...@spectrum-css/colorarea@4.0.17)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.16

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.15...@spectrum-css/colorarea@4.0.16)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.15

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.14...@spectrum-css/colorarea@4.0.15)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.14

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.13...@spectrum-css/colorarea@4.0.14)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.13

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.12...@spectrum-css/colorarea@4.0.13)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.12

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.11...@spectrum-css/colorarea@4.0.12)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.11

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.10...@spectrum-css/colorarea@4.0.11)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.10

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.9...@spectrum-css/colorarea@4.0.10)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.9

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.8...@spectrum-css/colorarea@4.0.9)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.8

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.7...@spectrum-css/colorarea@4.0.8)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.7

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.6...@spectrum-css/colorarea@4.0.7)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.6

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.4...@spectrum-css/colorarea@4.0.6)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.5

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.4...@spectrum-css/colorarea@4.0.5)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.4

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.3...@spectrum-css/colorarea@4.0.4)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.3

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.2...@spectrum-css/colorarea@4.0.3)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.2

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.1...@spectrum-css/colorarea@4.0.2)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.1

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@4.0.0...@spectrum-css/colorarea@4.0.1)

**Note:** Version bump only for package @spectrum-css/colorarea

## 4.0.0

🗓 2023-04-19 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@3.0.10...@spectrum-css/colorarea@4.0.0)

- feat(colorloupe, colorhandle)!: migrate to core tokens (#1753) ([c72f147](https://github.com/adobe/spectrum-css/commit/c72f147)), closes [#1753](https://github.com/adobe/spectrum-css/issues/1753)

### 🛑 BREAKING CHANGE

- migrates both the ColorLoupe and ColorHandle components to `@adobe/spectrum-tokens`

## 3.0.10

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@3.0.9...@spectrum-css/colorarea@3.0.10)

**Note:** Version bump only for package @spectrum-css/colorarea

## 3.0.9

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@3.0.7...@spectrum-css/colorarea@3.0.9)

**Note:** Version bump only for package @spectrum-css/colorarea

## 3.0.8

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@3.0.7...@spectrum-css/colorarea@3.0.8)

**Note:** Version bump only for package @spectrum-css/colorarea

## 3.0.7

🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@3.0.5...@spectrum-css/colorarea@3.0.7)

**Note:** Version bump only for package @spectrum-css/colorarea

## 3.0.6

🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@3.0.5...@spectrum-css/colorarea@3.0.6)

**Note:** Version bump only for package @spectrum-css/colorarea

## 3.0.5

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@3.0.4...@spectrum-css/colorarea@3.0.5)

**Note:** Version bump only for package @spectrum-css/colorarea

## 3.0.4

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@3.0.3...@spectrum-css/colorarea@3.0.4)

**Note:** Version bump only for package @spectrum-css/colorarea

## 3.0.3

🗓 2023-03-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@3.0.2...@spectrum-css/colorarea@3.0.3)

**Note:** Version bump only for package @spectrum-css/colorarea

## 3.0.2

🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@3.0.1...@spectrum-css/colorarea@3.0.2)

**Note:** Version bump only for package @spectrum-css/colorarea

## 3.0.1

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@3.0.0...@spectrum-css/colorarea@3.0.1)

**Note:** Version bump only for package @spectrum-css/colorarea

## 3.0.0

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@2.0.2...@spectrum-css/colorarea@3.0.0)

- feat(colorwheel)!: migrate to core tokens (#1619) ([f07028d](https://github.com/adobe/spectrum-css/commit/f07028d)), closes [#1619](https://github.com/adobe/spectrum-css/issues/1619)

### 🛑 BREAKING CHANGE

- migrates ColorWheel to use `@adobe/spectrum-tokens`

## 2.0.2

🗓 2023-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@2.0.1...@spectrum-css/colorarea@2.0.2)

**Note:** Version bump only for package @spectrum-css/colorarea

## 2.0.1

🗓 2023-03-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@2.0.0...@spectrum-css/colorarea@2.0.1)

**Note:** Version bump only for package @spectrum-css/colorarea

## 2.0.0

🗓 2023-02-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.30...@spectrum-css/colorarea@2.0.0)

- feat(colorarea)!: migrate to core tokens (#1623) ([9b3d6fa](https://github.com/adobe/spectrum-css/commit/9b3d6fa)), closes [#1623](https://github.com/adobe/spectrum-css/issues/1623)

### 🛑 BREAKING CHANGE

- migrates ColorArea to core tokens

## 1.0.30

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.29...@spectrum-css/colorarea@1.0.30)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.29

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.28...@spectrum-css/colorarea@1.0.29)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.28

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.27...@spectrum-css/colorarea@1.0.28)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.27

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.26...@spectrum-css/colorarea@1.0.27)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.26

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.25...@spectrum-css/colorarea@1.0.26)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.25

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.23...@spectrum-css/colorarea@1.0.25)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.24

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.23...@spectrum-css/colorarea@1.0.24)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.23

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.22...@spectrum-css/colorarea@1.0.23)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.22

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.21...@spectrum-css/colorarea@1.0.22)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.21

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.20...@spectrum-css/colorarea@1.0.21)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.20

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.19...@spectrum-css/colorarea@1.0.20)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.19

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.18...@spectrum-css/colorarea@1.0.19)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.18

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.17...@spectrum-css/colorarea@1.0.18)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.17

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.16...@spectrum-css/colorarea@1.0.17)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.16

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.15...@spectrum-css/colorarea@1.0.16)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.15

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.14...@spectrum-css/colorarea@1.0.15)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.14

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.13...@spectrum-css/colorarea@1.0.14)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.13

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.12...@spectrum-css/colorarea@1.0.13)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.12

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.11...@spectrum-css/colorarea@1.0.12)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.11

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.9...@spectrum-css/colorarea@1.0.11)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

## 1.0.10

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.9...@spectrum-css/colorarea@1.0.10)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.9

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.8...@spectrum-css/colorarea@1.0.9)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.8

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.7...@spectrum-css/colorarea@1.0.8)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.7

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.6...@spectrum-css/colorarea@1.0.7)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.6

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.5...@spectrum-css/colorarea@1.0.6)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.5

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.4...@spectrum-css/colorarea@1.0.5)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))
- use opacity: 0 and appearance: none of form elements ([14c7fcf](https://github.com/adobe/spectrum-css/commit/14c7fcf))

## 1.0.4

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.3...@spectrum-css/colorarea@1.0.4)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))
- use opacity: 0 and appearance: none of form elements ([14c7fcf](https://github.com/adobe/spectrum-css/commit/14c7fcf))

## 1.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.2...@spectrum-css/colorarea@1.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

## 1.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.1...@spectrum-css/colorarea@1.0.2)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorarea@1.0.0...@spectrum-css/colorarea@1.0.1)

**Note:** Version bump only for package @spectrum-css/colorarea

## 1.0.0

🗓 2021-02-02

- Color Handle/Slider/Area/Wheel ([#673](https://github.com/adobe/spectrum-css/issues/673)) ([bcd2bf1](https://github.com/adobe/spectrum-css/commit/bcd2bf1))
- support high contrast mode in color components ([d4c05cb](https://github.com/adobe/spectrum-css/commit/d4c05cb))
