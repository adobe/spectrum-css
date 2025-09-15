# Change log

## 8.0.0-next.4

### Major Changes

📝 [#4014](https://github.com/adobe/spectrum-css/pull/4014) [`35c066b`](https://github.com/adobe/spectrum-css/commit/35c066b29c311b1bfcf4507075f13b41222ffc84) Thanks [@castastrophe](https://github.com/castastrophe)!

This update removes the `dir` attribute polyfill (served via a PostCSS transform to compiled assets) as the fallback is no longer necessary. The`dir` attribute support is available in all supported browsers and has been tested to correctly inherit inside web component shadow DOMs. This is a breaking change **only** to those relying on the `dir` attribute being present for styling, however, the `:dir` pseudo will correctly inherit values from their containers. To correctly determine the `dir` value of a node using JavaScript, you can use `getComputedStyle(node).direction`.

## 8.0.0-next.3

### Patch Changes

📝 [#4044](https://github.com/adobe/spectrum-css/pull/4044) [`b1166bd`](https://github.com/adobe/spectrum-css/commit/b1166bd9e4542b3a665cc95498011a633c56e72a) Thanks [@5t3ph](https://github.com/5t3ph)!

Replace deprecated `word-break: break-word` with `overflow-wrap: break-word` to align with modern CSS standards and improve cross-browser compatibility. This property was deprecated in Chrome 44 (July 2015) in favor of the standardized `overflow-wrap` property.

## 8.0.0-next.2

### Minor Changes

📝 [#3641](https://github.com/adobe/spectrum-css/pull/3641) [`0b730ea`](https://github.com/adobe/spectrum-css/commit/0b730ea73e16b98c4e01c7cc5e67beda8ef77e38) Thanks [@cdransf](https://github.com/cdransf)!

#### S2: restore negative and informative semantic variants

This restores the negative and informative tooltip semantic variant styles, story controls and test cases. Icons have been removed for all variants as they are not present in the specifications provided by design.

##### Restored mods

`--mod-tooltip-background-color-informative`
`--mod-tooltip-background-color-negative"`

## 8.0.0-next.1

### Patch Changes

- Updated dependencies [[`60a156d`](https://github.com/adobe/spectrum-css/commit/60a156d7c0efcc999bc440274bbbbf586beb274b)]:
  - @spectrum-css/tokens@16.1.0-next.0

## 8.0.0-next.0

### Patch Changes

- Updated dependencies [[`a25e0a9`](https://github.com/adobe/spectrum-css/commit/a25e0a99e5a4736ab4e607e00739343101a2633b)]:
  - @spectrum-css/icon@10.0.0-next.0

## 7.2.0

### Minor Changes

📝 [#4218](https://github.com/adobe/spectrum-css/pull/4218) [`2df53f8`](https://github.com/adobe/spectrum-css/commit/2df53f8b9ef6d6a031ca99726aa7f0475443ca03) Thanks [@castastrophe](https://github.com/castastrophe)!

Ensure accurate exports are present for each component. Specifically, adding `themes/*` assets where present and removing`index-*.css` exports where those assets do not exist.

## 7.1.1

### Patch Changes

📝 [#4088](https://github.com/adobe/spectrum-css/pull/4088) [`24d75bf`](https://github.com/adobe/spectrum-css/commit/24d75bfe4d8e627f9d8e019ae379bdd4787712dd) Thanks [@castastrophe](https://github.com/castastrophe)!

Minor linting fix of replacing `rgba` to the `rgb` shorthand syntax.

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

## 6.3.1

### Patch Changes

📝 [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)!

- Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/icon@8.0.1

## 6.3.0

### Minor Changes

📝 [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)!

- Simplify how the `--system` properties are mapped. By updating the logic in the `postcss-add-theming-layer`, we are now shipping cleaner, more readable `--system` property names. These custom properties are documented as _NOT_ a part of the component API so although these result in a change to the custom property names, it does not impact the properties that are in the API and so do not constitute a breaking change. Expect to see no change to how component theming works or any visual regressions as a result of this change.

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/icon@8.0.0

## 6.2.0

### Minor Changes

📝 [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/icon@7.2.0

## 6.1.4

### Patch Changes

📝 [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)!

- Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/icon@7.1.4

## 6.1.3

### Patch Changes

📝 [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)!

- Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/icon@7.1.3

## 6.1.2

### Patch Changes

📝 [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)!

- Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/icon@7.1.1

## 6.1.1

### Patch Changes

📝 [#2736](https://github.com/adobe/spectrum-css/pull/2736) [`68117da`](https://github.com/adobe/spectrum-css/commit/68117da0fc1fabaf1576a082741efe0be9449f61) Thanks [@mdt2](https://github.com/mdt2)!

- fix(tooltip): Left and right placements look correct for RTL

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

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.3.5...@spectrum-css/tooltip@6.0.0)

- feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGE

- Removes component-builder & component-builder-simple for script leveraging postcss
- Imports added to index.css and themes/express.css

## 5.3.5

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.3.4...@spectrum-css/tooltip@5.3.5)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.3.4

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.3.3...@spectrum-css/tooltip@5.3.4)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.3.3

🗓 2024-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.3.2...@spectrum-css/tooltip@5.3.3)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.3.2

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.3.1...@spectrum-css/tooltip@5.3.2)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.3.1

🗓 2024-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.3.0...@spectrum-css/tooltip@5.3.1)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.3.0

🗓 2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.2.0...@spectrum-css/tooltip@5.3.0)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.2.0

🗓 2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.1.22...@spectrum-css/tooltip@5.2.0)

### ✨ Features

_migrate build packages to postcss v8 ([#2460](https://github.com/adobe/spectrum-css/issues/2460))([bd6c40e](https://github.com/adobe/spectrum-css/commit/bd6c40e))_
**overlay,commons:**deprecate overlay; migrate references to commons ([#2429](https://github.com/adobe/spectrum-css/issues/2429))([7eecd96](https://github.com/adobe/spectrum-css/commit/7eecd96))

## 5.1.22

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.1.21...@spectrum-css/tooltip@5.1.22)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.1.21

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.1.20...@spectrum-css/tooltip@5.1.21)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.1.20

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.1.19...@spectrum-css/tooltip@5.1.20)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.1.19

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.1.17...@spectrum-css/tooltip@5.1.19)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.1.18

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.1.17...@spectrum-css/tooltip@5.1.18)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.1.17

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.1.16...@spectrum-css/tooltip@5.1.17)

### 🐛 Bug fixes

- **tooltip:** custom animation distance overrides overlay value([f98b8a1](https://github.com/adobe/spectrum-css/commit/f98b8a1))

## 5.1.16

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.1.15...@spectrum-css/tooltip@5.1.16)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.1.15

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.1.14...@spectrum-css/tooltip@5.1.15)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.1.14

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.1.13...@spectrum-css/tooltip@5.1.14)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.1.13

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.1.12...@spectrum-css/tooltip@5.1.13)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.1.12

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.1.11...@spectrum-css/tooltip@5.1.12)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.1.11

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.1.10...@spectrum-css/tooltip@5.1.11)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.1.10

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.1.9...@spectrum-css/tooltip@5.1.10)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.1.9

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.1.8...@spectrum-css/tooltip@5.1.9)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.1.8

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.1.7...@spectrum-css/tooltip@5.1.8)

### 🔙 Reverts

- gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

## 5.1.7

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.1.6...@spectrum-css/tooltip@5.1.7)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.1.6

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.1.4...@spectrum-css/tooltip@5.1.6)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.1.5

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.1.4...@spectrum-css/tooltip@5.1.5)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.1.4

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.1.3...@spectrum-css/tooltip@5.1.4)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.1.3

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.1.2...@spectrum-css/tooltip@5.1.3)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.1.2

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.1.1...@spectrum-css/tooltip@5.1.2)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.1.1

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.1.0...@spectrum-css/tooltip@5.1.1)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.1.0

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.42...@spectrum-css/tooltip@5.1.0)

### ✨ Features

- **tooltip:** mods list update([33a6a08](https://github.com/adobe/spectrum-css/commit/33a6a08))
- **tooltip:** square tip elements and modified hairline gap fix ([#1939](https://github.com/adobe/spectrum-css/issues/1939))([de33f42](https://github.com/adobe/spectrum-css/commit/de33f42)), closes[#1875](https://github.com/adobe/spectrum-css/issues/1875)

## 5.0.42

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.41...@spectrum-css/tooltip@5.0.42)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.41

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.40...@spectrum-css/tooltip@5.0.41)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.40

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.39...@spectrum-css/tooltip@5.0.40)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.39

🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.38...@spectrum-css/tooltip@5.0.39)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.38

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.37...@spectrum-css/tooltip@5.0.38)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.37

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.36...@spectrum-css/tooltip@5.0.37)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.36

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.35...@spectrum-css/tooltip@5.0.36)

### 🐛 Bug fixes

- restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

## 5.0.35

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.34...@spectrum-css/tooltip@5.0.35)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.34

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.33...@spectrum-css/tooltip@5.0.34)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.33

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.32...@spectrum-css/tooltip@5.0.33)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.32

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.31...@spectrum-css/tooltip@5.0.32)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.31

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.30...@spectrum-css/tooltip@5.0.31)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.30

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.29...@spectrum-css/tooltip@5.0.30)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.29

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.28...@spectrum-css/tooltip@5.0.29)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.28

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.27...@spectrum-css/tooltip@5.0.28)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.27

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.26...@spectrum-css/tooltip@5.0.27)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.26

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.25...@spectrum-css/tooltip@5.0.26)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.25

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.24...@spectrum-css/tooltip@5.0.25)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.24

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.23...@spectrum-css/tooltip@5.0.24)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.23

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.22...@spectrum-css/tooltip@5.0.23)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.22

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.20...@spectrum-css/tooltip@5.0.22)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.21

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.20...@spectrum-css/tooltip@5.0.21)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.20

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.19...@spectrum-css/tooltip@5.0.20)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.19

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.18...@spectrum-css/tooltip@5.0.19)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.18

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.17...@spectrum-css/tooltip@5.0.18)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.17

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.16...@spectrum-css/tooltip@5.0.17)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.16

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.14...@spectrum-css/tooltip@5.0.16)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.15

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.14...@spectrum-css/tooltip@5.0.15)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.14

🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.12...@spectrum-css/tooltip@5.0.14)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.13

🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.12...@spectrum-css/tooltip@5.0.13)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.12

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.11...@spectrum-css/tooltip@5.0.12)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.11

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.10...@spectrum-css/tooltip@5.0.11)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.10

🗓 2023-03-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.9...@spectrum-css/tooltip@5.0.10)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.9

🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.8...@spectrum-css/tooltip@5.0.9)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.8

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.7...@spectrum-css/tooltip@5.0.8)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.7

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.6...@spectrum-css/tooltip@5.0.7)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.6

🗓 2023-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.5...@spectrum-css/tooltip@5.0.6)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.5

🗓 2023-03-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.4...@spectrum-css/tooltip@5.0.5)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.4

🗓 2023-02-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.3...@spectrum-css/tooltip@5.0.4)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.3

🗓 2023-02-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.2...@spectrum-css/tooltip@5.0.3)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.2

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.1...@spectrum-css/tooltip@5.0.2)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.1

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@5.0.0...@spectrum-css/tooltip@5.0.1)

**Note:** Version bump only for package @spectrum-css/tooltip

## 5.0.0

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@4.0.10...@spectrum-css/tooltip@5.0.0)

- chore(tokens)!: use latest dependency & fix build error (#1591) ([f2532e7](https://github.com/adobe/spectrum-css/commit/f2532e7)), closes [#1591](https://github.com/adobe/spectrum-css/issues/1591)

### 🛑 BREAKING CHANGE

- uses latest `@adobe/spectrum-tokens` dependency which includes token renames

## 4.0.10

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@4.0.9...@spectrum-css/tooltip@4.0.10)

**Note:** Version bump only for package @spectrum-css/tooltip

## 4.0.9

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@4.0.8...@spectrum-css/tooltip@4.0.9)

**Note:** Version bump only for package @spectrum-css/tooltip

## 4.0.8

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@4.0.7...@spectrum-css/tooltip@4.0.8)

**Note:** Version bump only for package @spectrum-css/tooltip

## 4.0.7

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@4.0.5...@spectrum-css/tooltip@4.0.7)

**Note:** Version bump only for package @spectrum-css/tooltip

## 4.0.6

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@4.0.5...@spectrum-css/tooltip@4.0.6)

**Note:** Version bump only for package @spectrum-css/tooltip

## 4.0.5

🗓 2023-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@4.0.4...@spectrum-css/tooltip@4.0.5)

**Note:** Version bump only for package @spectrum-css/tooltip

## 4.0.4

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@4.0.3...@spectrum-css/tooltip@4.0.4)

**Note:** Version bump only for package @spectrum-css/tooltip

## 4.0.3

🗓 2022-12-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@4.0.2...@spectrum-css/tooltip@4.0.3)

**Note:** Version bump only for package @spectrum-css/tooltip

## 4.0.2

🗓 2022-12-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@4.0.1...@spectrum-css/tooltip@4.0.2)

### 🐛 Bug fixes

- **tooltip:** update inline padding ([#1561](https://github.com/adobe/spectrum-css/issues/1561)) ([be8d1fb](https://github.com/adobe/spectrum-css/commit/be8d1fb))

## 4.0.1

🗓 2022-12-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@4.0.0...@spectrum-css/tooltip@4.0.1)

**Note:** Version bump only for package @spectrum-css/tooltip

## 4.0.0

🗓 2022-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.1.20...@spectrum-css/tooltip@4.0.0)

- feat(tooltip)!: migrate to core tokens ([2087a67](https://github.com/adobe/spectrum-css/commit/2087a67))

### 🛑 BREAKING CHANGE

- - Migrates Tooltip to core tokens

Co-authored-by: Patrick Fulton <pfulton@adobe.com>

## 3.1.20

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.1.19...@spectrum-css/tooltip@3.1.20)

**Note:** Version bump only for package @spectrum-css/tooltip

## 3.1.19

🗓 2022-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.1.18...@spectrum-css/tooltip@3.1.19)

**Note:** Version bump only for package @spectrum-css/tooltip

## 3.1.18

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.1.17...@spectrum-css/tooltip@3.1.18)

**Note:** Version bump only for package @spectrum-css/tooltip

## 3.1.17

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.1.16...@spectrum-css/tooltip@3.1.17)

**Note:** Version bump only for package @spectrum-css/tooltip

## 3.1.16

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.1.15...@spectrum-css/tooltip@3.1.16)

### 🐛 Bug fixes

- tooltip WHCM ([e6e0a04](https://github.com/adobe/spectrum-css/commit/e6e0a04))

## 3.1.15

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.1.14...@spectrum-css/tooltip@3.1.15)

**Note:** Version bump only for package @spectrum-css/tooltip

## 3.1.14

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.1.13...@spectrum-css/tooltip@3.1.14)

**Note:** Version bump only for package @spectrum-css/tooltip

## 3.1.13

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.1.12...@spectrum-css/tooltip@3.1.13)

**Note:** Version bump only for package @spectrum-css/tooltip

## 3.1.12

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.1.11...@spectrum-css/tooltip@3.1.12)

**Note:** Version bump only for package @spectrum-css/tooltip

## 3.1.11

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.1.10...@spectrum-css/tooltip@3.1.11)

**Note:** Version bump only for package @spectrum-css/tooltip

## 3.1.10

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.1.9...@spectrum-css/tooltip@3.1.10)

**Note:** Version bump only for package @spectrum-css/tooltip

## 3.1.9

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.1.8...@spectrum-css/tooltip@3.1.9)

**Note:** Version bump only for package @spectrum-css/tooltip

## 3.1.8

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.1.7...@spectrum-css/tooltip@3.1.8)

**Note:** Version bump only for package @spectrum-css/tooltip

## 3.1.7

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.1.6...@spectrum-css/tooltip@3.1.7)

**Note:** Version bump only for package @spectrum-css/tooltip

## 3.1.6

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.1.4...@spectrum-css/tooltip@3.1.6)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

## 3.1.5

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.1.4...@spectrum-css/tooltip@3.1.5)

**Note:** Version bump only for package @spectrum-css/tooltip

## 3.1.4

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.1.3...@spectrum-css/tooltip@3.1.4)

**Note:** Version bump only for package @spectrum-css/tooltip

## 3.1.3

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.1.2...@spectrum-css/tooltip@3.1.3)

**Note:** Version bump only for package @spectrum-css/tooltip

## 3.1.2

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.1.1...@spectrum-css/tooltip@3.1.2)

**Note:** Version bump only for package @spectrum-css/tooltip

## 3.1.1

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.1.0...@spectrum-css/tooltip@3.1.1)

**Note:** Version bump only for package @spectrum-css/tooltip

## 3.1.0

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.0.4...@spectrum-css/tooltip@3.1.0)

### ✨ Features

- make ClearButton build again, unblock CCX ([#1304](https://github.com/adobe/spectrum-css/issues/1304)) ([ae9399a](https://github.com/adobe/spectrum-css/commit/ae9399a))

## 3.0.5

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.0.4...@spectrum-css/tooltip@3.0.5)

**Note:** Version bump only for package @spectrum-css/tooltip

## 3.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.0.2...@spectrum-css/tooltip@3.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.0.1...@spectrum-css/tooltip@3.0.2)

**Note:** Version bump only for package @spectrum-css/tooltip

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@3.0.0...@spectrum-css/tooltip@3.0.1)

**Note:** Version bump only for package @spectrum-css/tooltip

## 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@2.0.5...@spectrum-css/tooltip@3.0.0)

**Note:** Version bump only for package @spectrum-css/tooltip

## 2.0.5

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@2.0.4...@spectrum-css/tooltip@2.0.5)

**Note:** Version bump only for package @spectrum-css/tooltip

## 2.0.4

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@2.0.3...@spectrum-css/tooltip@2.0.4)

**Note:** Version bump only for package @spectrum-css/tooltip

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@2.0.2...@spectrum-css/tooltip@2.0.3)

**Note:** Version bump only for package @spectrum-css/tooltip

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@2.0.1...@spectrum-css/tooltip@2.0.2)

**Note:** Version bump only for package @spectrum-css/tooltip

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tooltip@2.0.0...@spectrum-css/tooltip@2.0.1)

**Note:** Version bump only for package @spectrum-css/tooltip

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)

### 🐛 Bug fixes

- **steplist:** [#215](https://github.com/adobe/spectrum-css/issues/215) [Accessibility] include interactive example w/ links ([23b38e4](https://github.com/adobe/spectrum-css/commit/23b38e4))
