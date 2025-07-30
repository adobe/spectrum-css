# Change log

## 11.0.0-next.2

### Major Changes

📝 [#4014](https://github.com/adobe/spectrum-css/pull/4014) [`35c066b`](https://github.com/adobe/spectrum-css/commit/35c066b29c311b1bfcf4507075f13b41222ffc84) Thanks [@castastrophe](https://github.com/castastrophe)!

This update removes the `dir` attribute polyfill (served via a PostCSS transform to compiled assets) as the fallback is no longer necessary. The`dir` attribute support is available in all supported browsers and has been tested to correctly inherit inside web component shadow DOMs. This is a breaking change **only** to those relying on the `dir` attribute being present for styling, however, the `:dir` pseudo will correctly inherit values from their containers. To correctly determine the `dir` value of a node using JavaScript, you can use `getComputedStyle(node).direction`.

## 11.0.0-next.1

### Patch Changes

- Updated dependencies [[`60a156d`](https://github.com/adobe/spectrum-css/commit/60a156d7c0efcc999bc440274bbbbf586beb274b)]:
  - @spectrum-css/tokens@16.1.0-next.0

## 11.0.0-next.0

### Patch Changes

- Updated dependencies [[`a25e0a9`](https://github.com/adobe/spectrum-css/commit/a25e0a99e5a4736ab4e607e00739343101a2633b)]:
  - @spectrum-css/icon@10.0.0-next.0
  - @spectrum-css/actionbutton@8.0.0-next.0
  - @spectrum-css/button@15.0.0-next.0
  - @spectrum-css/textfield@9.0.0-next.0

## 10.1.0

### Minor Changes

📝 [`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee) Thanks [@castastrophe](https://github.com/castastrophe)!

## New feature

Minified and gzipped outputs available for all compiled CSS assets.

### Patch Changes

📝 [#3541](https://github.com/adobe/spectrum-css/pull/3541) [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d) Thanks [@castastrophe](https://github.com/castastrophe)!

Dependency alignment across the project.

- Updated dependencies [[`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee), [`9b108f7`](https://github.com/adobe/spectrum-css/commit/9b108f7e05df1f55ab315dad96736d3ff4757f8c), [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d)]:
  - @spectrum-css/actionbutton@8.0.0
  - @spectrum-css/button@15.0.0
  - @spectrum-css/icon@9.1.0
  - @spectrum-css/textfield@9.0.0
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
  - @spectrum-css/actionbutton@7.0.1
  - @spectrum-css/button@14.0.1
  - @spectrum-css/icon@9.0.1
  - @spectrum-css/textfield@8.0.1

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
  - @spectrum-css/actionbutton@7.0.0
  - @spectrum-css/textfield@8.0.0
  - @spectrum-css/button@14.0.0
  - @spectrum-css/icon@9.0.0

## 9.0.1

### Patch Changes

📝 [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)!

- Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/actionbutton@6.3.1
  - @spectrum-css/textfield@7.4.1
  - @spectrum-css/button@13.6.1
  - @spectrum-css/icon@8.0.1

## 9.0.0

### Major Changes

📝 [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove empty theme references to reduce complexity for components that don't need to define any mappings. This involves removing the source `themes` directories with the empty `spectrum.css` and `express.com` files as well as removing the following empty or unnecessary exports:
  - `index-base.css`
  - `index-theme.css`
  - `themes/spectrum.css`
  - `themes/express.css`

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/button@13.6.0
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/icon@8.0.0
  - @spectrum-css/actionbutton@6.3.0
  - @spectrum-css/textfield@7.4.0

## 8.2.0

### Minor Changes

📝 [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/actionbutton@6.2.0
  - @spectrum-css/textfield@7.3.0
  - @spectrum-css/button@13.5.0
  - @spectrum-css/icon@7.2.0

## 8.1.3

### Patch Changes

📝 [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)!

- Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/actionbutton@6.1.3
  - @spectrum-css/textfield@7.2.3
  - @spectrum-css/button@13.1.3
  - @spectrum-css/icon@7.1.4

## 8.1.2

### Patch Changes

📝 [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)!

- Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/actionbutton@6.1.2
  - @spectrum-css/textfield@7.2.1
  - @spectrum-css/button@13.1.2
  - @spectrum-css/icon@7.1.3

## 8.1.1

### Patch Changes

📝 [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)!

- Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/actionbutton@6.1.1
  - @spectrum-css/textfield@7.1.3
  - @spectrum-css/button@13.1.1
  - @spectrum-css/icon@7.1.1

## 8.1.0

### Minor Changes

📝 [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/actionbutton@>=6
  - @spectrum-css/button@>=13
  - @spectrum-css/icon@>=7
  - @spectrum-css/textfield@>=7
  - @spectrum-css/tokens@>=14

## 8.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@7.1.6...@spectrum-css/pagination@8.0.0)

- feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGE

- Removes component-builder & component-builder-simple for script leveraging postcss
- Imports added to index.css and themes/express.css

## 7.1.6

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@7.1.5...@spectrum-css/pagination@7.1.6)

**Note:** Version bump only for package @spectrum-css/pagination

## 7.1.5

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@7.1.4...@spectrum-css/pagination@7.1.5)

**Note:** Version bump only for package @spectrum-css/pagination

## 7.1.4

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@7.1.3...@spectrum-css/pagination@7.1.4)

**Note:** Version bump only for package @spectrum-css/pagination

## 7.1.3

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-css/pagination

## 7.1.2

🗓 2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@7.1.1...@spectrum-css/pagination@7.1.2)

**Note:** Version bump only for package @spectrum-css/pagination

## 7.1.1

🗓 2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@7.1.0...@spectrum-css/pagination@7.1.1)

### 🐛 Bug fixes

- deprecate logical transform plugin ([#2437](https://github.com/adobe/spectrum-css/issues/2437))([ff5dda6](https://github.com/adobe/spectrum-css/commit/ff5dda6))

## 7.1.0

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@7.0.5...@spectrum-css/pagination@7.1.0)

### ✨ Features

- remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

## 7.0.5

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@7.0.4...@spectrum-css/pagination@7.0.5)

**Note:** Version bump only for package @spectrum-css/pagination

## 7.0.4

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@7.0.3...@spectrum-css/pagination@7.0.4)

**Note:** Version bump only for package @spectrum-css/pagination

## 7.0.3

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@7.0.1...@spectrum-css/pagination@7.0.3)

**Note:** Version bump only for package @spectrum-css/pagination

## 7.0.2

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@7.0.1...@spectrum-css/pagination@7.0.2)

**Note:** Version bump only for package @spectrum-css/pagination

## 7.0.1

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@7.0.0...@spectrum-css/pagination@7.0.1)

**Note:** Version bump only for package @spectrum-css/pagination

## 7.0.0

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.50...@spectrum-css/pagination@7.0.0)

- feat(pagination)!: migrate to spectrum tokens package([f29a74d](https://github.com/adobe/spectrum-css/commit/f29a74d))

### 🛑 BREAKING CHANGES

- Replaces DNA tokens with Spectrum tokens.

Update build to use Spectrum tokens.
Remove skin.css and incorporate its CSS into index.css.

refactor(pagination): styles migration to core tokens

Migration of stylesheet to use Spectrum tokens.

refactor(pagination): remove unused pagebutton class

Remove CSS for .spectrum-Pagination-pageButton which is not used
anywhere in the repo. This removes the need for additions to the custom
tokens.

fix(pagination): correct direction of arrows for right-to-left

When viewing in RTL, the arrows were both facing in the same direction.
This was because they were both setting the same rotation, and one of
the arrows icons already uses a 180 degree rotation.

fix: counter text sizing and t-shirt sizing docs

Disable t-shirt size in Storybook until it is fully supported. To be
supported it will need font sizes for the counter text and probably
changes to the inline margins.

For the counter text, removes spectrum-Body--secondary which doesn't
seem to exist anymore, and applies the appropriate font size (14px
at medium) and line-height tokens.

docs(pagination): add button style pagination to storybook

Add the "Button style" version of Pagination from the docs to Storybook.

## 6.0.50

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.49...@spectrum-css/pagination@6.0.50)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.49

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.48...@spectrum-css/pagination@6.0.49)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.48

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.47...@spectrum-css/pagination@6.0.48)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.47

🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.46...@spectrum-css/pagination@6.0.47)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.46

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.45...@spectrum-css/pagination@6.0.46)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.45

🗓 2023-09-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.44...@spectrum-css/pagination@6.0.45)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.44

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.43...@spectrum-css/pagination@6.0.44)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.43

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.42...@spectrum-css/pagination@6.0.43)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.42

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.41...@spectrum-css/pagination@6.0.42)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.41

🗓 2023-08-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.40...@spectrum-css/pagination@6.0.41)

### 🔙 Reverts

- gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

## 6.0.40

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.39...@spectrum-css/pagination@6.0.40)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.39

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.37...@spectrum-css/pagination@6.0.39)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.38

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.37...@spectrum-css/pagination@6.0.38)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.37

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.36...@spectrum-css/pagination@6.0.37)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.36

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.35...@spectrum-css/pagination@6.0.36)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.35

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.34...@spectrum-css/pagination@6.0.35)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.34

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.33...@spectrum-css/pagination@6.0.34)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.33

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.32...@spectrum-css/pagination@6.0.33)

### 🐛 Bug fixes

- icon sizing in Storybook story templates ([#2037](https://github.com/adobe/spectrum-css/issues/2037))([c90c8a3](https://github.com/adobe/spectrum-css/commit/c90c8a3))

## 6.0.32

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.31...@spectrum-css/pagination@6.0.32)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.31

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.30...@spectrum-css/pagination@6.0.31)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.30

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.29...@spectrum-css/pagination@6.0.30)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.29

🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.28...@spectrum-css/pagination@6.0.29)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.28

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.27...@spectrum-css/pagination@6.0.28)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.27

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.26...@spectrum-css/pagination@6.0.27)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.26

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.25...@spectrum-css/pagination@6.0.26)

### 🐛 Bug fixes

- restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

## 6.0.25

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.24...@spectrum-css/pagination@6.0.25)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.24

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.23...@spectrum-css/pagination@6.0.24)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.23

🗓 2023-05-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.22...@spectrum-css/pagination@6.0.23)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.22

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.21...@spectrum-css/pagination@6.0.22)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.21

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.20...@spectrum-css/pagination@6.0.21)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.20

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.19...@spectrum-css/pagination@6.0.20)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.19

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.18...@spectrum-css/pagination@6.0.19)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.18

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.17...@spectrum-css/pagination@6.0.18)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.17

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.16...@spectrum-css/pagination@6.0.17)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.16

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.15...@spectrum-css/pagination@6.0.16)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.15

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.14...@spectrum-css/pagination@6.0.15)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.14

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.13...@spectrum-css/pagination@6.0.14)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.13

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.12...@spectrum-css/pagination@6.0.13)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.12

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.11...@spectrum-css/pagination@6.0.12)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.11

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.10...@spectrum-css/pagination@6.0.11)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.10

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.9...@spectrum-css/pagination@6.0.10)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.9

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.7...@spectrum-css/pagination@6.0.9)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.8

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.7...@spectrum-css/pagination@6.0.8)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.7

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.6...@spectrum-css/pagination@6.0.7)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.6

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.5...@spectrum-css/pagination@6.0.6)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.5

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.4...@spectrum-css/pagination@6.0.5)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.4

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.3...@spectrum-css/pagination@6.0.4)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.3

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.2...@spectrum-css/pagination@6.0.3)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.2

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.0...@spectrum-css/pagination@6.0.2)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.1

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@6.0.0...@spectrum-css/pagination@6.0.1)

**Note:** Version bump only for package @spectrum-css/pagination

## 6.0.0

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.29...@spectrum-css/pagination@6.0.0)

- fix(tokens)!: rgb transform to split out rgb values from css attributes (#1590) ([b714db4](https://github.com/adobe/spectrum-css/commit/b714db4)), closes [#1590](https://github.com/adobe/spectrum-css/issues/1590)

### 🛑 BREAKING CHANGE

- transforms color tokens to split out their `rgb` values

Co-authored-by: castastrophe <castastrophe@users.noreply.github.com>

## 5.0.29

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.28...@spectrum-css/pagination@5.0.29)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.28

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.27...@spectrum-css/pagination@5.0.28)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.27

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.26...@spectrum-css/pagination@5.0.27)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.26

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.25...@spectrum-css/pagination@5.0.26)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.25

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.24...@spectrum-css/pagination@5.0.25)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.24

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.23...@spectrum-css/pagination@5.0.24)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.23

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.22...@spectrum-css/pagination@5.0.23)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.22

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.21...@spectrum-css/pagination@5.0.22)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.21

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.19...@spectrum-css/pagination@5.0.21)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.20

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.19...@spectrum-css/pagination@5.0.20)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.19

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.18...@spectrum-css/pagination@5.0.19)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.18

🗓 2022-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.16...@spectrum-css/pagination@5.0.18)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.17

🗓 2022-12-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.16...@spectrum-css/pagination@5.0.17)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.16

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.15...@spectrum-css/pagination@5.0.16)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.15

🗓 2022-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.14...@spectrum-css/pagination@5.0.15)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.14

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.13...@spectrum-css/pagination@5.0.14)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.13

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.12...@spectrum-css/pagination@5.0.13)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.12

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.11...@spectrum-css/pagination@5.0.12)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.11

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.10...@spectrum-css/pagination@5.0.11)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.10

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.9...@spectrum-css/pagination@5.0.10)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.9

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.8...@spectrum-css/pagination@5.0.9)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.8

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.7...@spectrum-css/pagination@5.0.8)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.7

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.6...@spectrum-css/pagination@5.0.7)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.6

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.5...@spectrum-css/pagination@5.0.6)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.5

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.4...@spectrum-css/pagination@5.0.5)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.4

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.3...@spectrum-css/pagination@5.0.4)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.3

🗓 2022-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.2...@spectrum-css/pagination@5.0.3)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.2

🗓 2022-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.1...@spectrum-css/pagination@5.0.2)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.1

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@5.0.0...@spectrum-css/pagination@5.0.1)

**Note:** Version bump only for package @spectrum-css/pagination

## 5.0.0

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@3.0.11...@spectrum-css/pagination@5.0.0)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

### 📚 Documentation

- use new Button markup ([886b2cb](https://github.com/adobe/spectrum-css/commit/886b2cb))

### 🛑 BREAKING CHANGE

- Button markup has changed

## 4.0.0

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@3.0.11...@spectrum-css/pagination@4.0.0)

### 📚 Documentation

- use new Button markup ([629bf05](https://github.com/adobe/spectrum-css/commit/629bf05))

### 🛑 BREAKING CHANGE

- Button markup has changed

## 3.0.11

🗓 2021-12-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@3.0.10...@spectrum-css/pagination@3.0.11)

**Note:** Version bump only for package @spectrum-css/pagination

## 3.0.10

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@3.0.9...@spectrum-css/pagination@3.0.10)

**Note:** Version bump only for package @spectrum-css/pagination

## 3.0.9

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@3.0.8...@spectrum-css/pagination@3.0.9)

**Note:** Version bump only for package @spectrum-css/pagination

## 3.0.8

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@3.0.7...@spectrum-css/pagination@3.0.8)

**Note:** Version bump only for package @spectrum-css/pagination

## 3.0.7

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@3.0.6...@spectrum-css/pagination@3.0.7)

**Note:** Version bump only for package @spectrum-css/pagination

## 3.0.6

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@3.0.4...@spectrum-css/pagination@3.0.6)

**Note:** Version bump only for package @spectrum-css/pagination

## 3.0.5

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@3.0.4...@spectrum-css/pagination@3.0.5)

**Note:** Version bump only for package @spectrum-css/pagination

## 3.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@3.0.2...@spectrum-css/pagination@3.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@3.0.1...@spectrum-css/pagination@3.0.2)

**Note:** Version bump only for package @spectrum-css/pagination

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@3.0.0...@spectrum-css/pagination@3.0.1)

**Note:** Version bump only for package @spectrum-css/pagination

## 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@2.0.6...@spectrum-css/pagination@3.0.0)

**Note:** Version bump only for package @spectrum-css/pagination

## 2.0.6

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@2.0.5...@spectrum-css/pagination@2.0.6)

**Note:** Version bump only for package @spectrum-css/pagination

## 2.0.5

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@2.0.4...@spectrum-css/pagination@2.0.5)

**Note:** Version bump only for package @spectrum-css/pagination

## 2.0.4

🗓 2020-01-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@2.0.3...@spectrum-css/pagination@2.0.4)

**Note:** Version bump only for package @spectrum-css/pagination

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@2.0.2...@spectrum-css/pagination@2.0.3)

**Note:** Version bump only for package @spectrum-css/pagination

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@2.0.1...@spectrum-css/pagination@2.0.2)

**Note:** Version bump only for package @spectrum-css/pagination

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pagination@2.0.0...@spectrum-css/pagination@2.0.1)

**Note:** Version bump only for package @spectrum-css/pagination

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
