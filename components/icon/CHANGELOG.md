# Change log

## 9.1.0

### Minor Changes

📝 [`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee) Thanks [@castastrophe](https://github.com/castastrophe)!

## New feature

Minified and gzipped outputs available for all compiled CSS assets.

### Patch Changes

📝 [#3541](https://github.com/adobe/spectrum-css/pull/3541) [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d) Thanks [@castastrophe](https://github.com/castastrophe)!

Dependency alignment across the project.

- Updated dependencies [[`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d)]:
  - @spectrum-css/tokens@16.0.1

## 9.0.1

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

## 9.0.0

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

- Updated dependencies [[`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6), [`3d08cea`](https://github.com/adobe/spectrum-css/commit/3d08cea0f590c8c2de7252677a6b81b8cc206b9a)]:
  - @spectrum-css/tokens@16.0.0

## 8.0.1

### Patch Changes

📝 [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)!

- Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0

## 8.0.0

### Major Changes

📝 [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove empty theme references to reduce complexity for components that don't need to define any mappings. This involves removing the source `themes` directories with the empty `spectrum.css` and `express.com` files as well as removing the following empty or unnecessary exports:
  - `index-base.css`
  - `index-theme.css`
  - `themes/spectrum.css`
  - `themes/express.css`

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b)]:
  - @spectrum-css/tokens@15.1.0

## 7.2.0

### Minor Changes

📝 [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove the storybook assets from the shipped output for components

## 7.1.4

### Patch Changes

📝 [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)!

- Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

## 7.1.3

### Patch Changes

📝 [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)!

- Improve changeset suggestions by using exports instead of files in component packages

## 7.1.2

### Patch Changes

📝 [#2974](https://github.com/adobe/spectrum-css/pull/2974) [`fd00178`](https://github.com/adobe/spectrum-css/commit/fd00178a9196ac79ff30cae21310ff42e7fc5ba3) Thanks [@jawinn](https://github.com/jawinn)!

- Removes legacy normalization CSS for Icon SVGs that changed the overflow property. This is to fix a reported issue with clipping in iOS mobile for Express and Safari for MacOS.
  The original CSS declaration was for Internet Explorer 9/10/11 and could be removed because IE 11 is not supported.

## 7.1.1

### Patch Changes

📝 [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)!

- Leveral local workspace versioning to prevent misalignment

## 7.1.0

### Minor Changes

📝 [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/tokens@>=14

## 7.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@6.0.5...@spectrum-css/icon@7.0.0)

- feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGE

- Removes component-builder & component-builder-simple for script leveraging postcss
- Imports added to index.css and themes/express.css

## 6.0.5

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@6.0.4...@spectrum-css/icon@6.0.5)

**Note:** Version bump only for package @spectrum-css/icon

## 6.0.4

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@6.0.3...@spectrum-css/icon@6.0.4)

**Note:** Version bump only for package @spectrum-css/icon

## 6.0.3

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@6.0.2...@spectrum-css/icon@6.0.3)

**Note:** Version bump only for package @spectrum-css/icon

## 6.0.2

🗓 2024-02-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@6.0.1...@spectrum-css/icon@6.0.2)

**Note:** Version bump only for package @spectrum-css/icon

## 6.0.1

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-css/icon

## 6.0.0

🗓 2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@5.1.0...@spectrum-css/icon@6.0.0)

- refactor(icon)!: tokens migration (#2347)([b63631a](https://github.com/adobe/spectrum-css/commit/b63631a)), closes[#2347](https://github.com/adobe/spectrum-css/issues/2347)

### 🛑 BREAKING CHANGE

- - migrate Icon from DNA tokens to Spectrum tokens.

Additionally:

- refactor(icon): migrate css to spectrum tokens

Migrates Icon CSS from using DNA/vars tokens to Spectrum tokens.
Refactors UI Icons to be a little cleaner and not need placeholders.

Icons now change the value of the property "--spectrum-icon-size" to
set their width and height. They also have three additional mods
available for setting the size (both width and height) or the individual
width and height.

- refactor(icon): remove legacy xvar css and plugin for combined icons

- Remove 'xvar' and 'x--' code within UI icon CSS, along with the build
  plugins that were used only for this. This was only only needed
  previously when the build did not allow 'var()' and '--property' here.

- Simplify and better document code used for combined UI icons and the
  medium/large platform scale. Remove old browser support here that is
  no longer needed with the browsers and features that are currently
  supported by the library. The old fallback to set display inline was
  pre Firefox version 56 [2017].

- refactor(icon): remove gripper icon classes

Removing the gripper icon classes as they were incorrect and not used,
and there are no tokens defined yet to set the actual classes to.

The gripper icon classes used previously were wrong in several ways.
For one, they were using '100' size naming in the classes which are not
currently used or displayed. These icons are without the number size.
The old alias values being applied to them also looked incorrect when
looking at the widths, and the CSS was swapping width for height.

That there is no size applied to these icons was obfuscated by the fact
that the attribute width="10" is being applied to icons in Storybook.

Note: SWC is currently showing these icons with workflow sizing.
These gripper icons do not have size tokens defined yet, but they may be
added in the future "as they are needed"; when these icons start being
used.

- docs(icon): storybook - add kitchen sink style story for chromatic

Cover the various types of icons in a Chromatic only story.
Covers different icon sets, sizes, and color in the VRTs.

- feat(icon): adjust icon sizing custom properties

Make sure we always have custom properties that contains the width and
height, that we can rely upon for CSS calculations. Regardless of
whether the individual dimensions are specified or just the size is
specified (that applies to both dimensions).

- fix(icon): storybook - remove inline width attribute

The icons in Storybook were adding an inline "width" attribute set to
10, which was previously obfuscating issues with sizing. Removes this
attribute and leaves sizing up to CSS.

- feat(icon): support for xs workflow icon size

Added extra small workflow icon size. This has a token, is defined on
some of the design redlines (Action Button), and is currently used in
the Contextual Help component, as seen in the VRT run.

- feat(icon): remove theme files without content

Recent updates to main make it no longer necessary to include empty
theme files for the build to work.

- feat(icon): storybook - use ui icon size numbers

Disables the size control for UI icons and adds each size number to the
list of available UI icon names in Storybook.

UI icons have specific sizing and don't use the t-shirt sizing that
Workflow icons do. They have more size numbers than there are t-shirt
sizes, so they can't be directly mapped to each other. The different
UI icons have different size numbers, so the size numbers can't use a
single control.

- feat(icon): storybook - show all ui icons in chromatic template

Show all UI icons, including number sizing, in the Chromatic template.
Condenses and improves some of the template logic.

- fix(icon): wrong workflow icons appearing for arrow and chevron

Fix bug where the wrong icon was being rendered for workflow arrow and
chevron. These are both icons with names that exist in both icon sets.
There was logic being applied to the workflow icons that should have
only have been applied to the UI icon.

- chore(icon): manual version bump for beta release

- feat(icon): add xxs size for migration and use renamed xxl property

Add XXS size to support existing SWC size. Uses the values from
--spectrum-global-dimension-size-150, as used in SWC's custom icon CSS.

Included comments to note that xxs and xxl are planned to be deprecated
in Spectrum 2, as they are not a part of the design spec.

- chore(icon): set current beta versions already released

- build(icon): minimum tokens version with xxl and xxs sizing

Update required tokens version with a minimum of the latest release that
includes the new custom-vars for the xxl and xxs workflow icon sizes.

## 5.1.0

🗓 2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@5.0.1...@spectrum-css/icon@5.1.0)

### ✨ Features

- **overlay,commons:**deprecate overlay; migrate references to commons ([#2429](https://github.com/adobe/spectrum-css/issues/2429))([7eecd96](https://github.com/adobe/spectrum-css/commit/7eecd96))

## 5.0.1

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@5.0.0...@spectrum-css/icon@5.0.1)

**Note:** Version bump only for package @spectrum-css/icon

## 5.0.0

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@4.0.5...@spectrum-css/icon@5.0.0)

- feat(icon,ui-icons)!: migrate the icon compiler to a distinct package (#2343)([d73d594](https://github.com/adobe/spectrum-css/commit/d73d594)), closes[#2343](https://github.com/adobe/spectrum-css/issues/2343)

### 🛑 BREAKING CHANGE

- @spectrum-css/icon will no longer contain SVG assets; it will be a purely CSS package with all SVG assets migrated to the new @spectrum-css/ui-icons package.

- NEW: @spectrum-css/ui-icons package for all SVG icons in the UI set.

## 4.0.5

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@4.0.3...@spectrum-css/icon@4.0.5)

**Note:** Version bump only for package @spectrum-css/icon

## 4.0.4

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@4.0.3...@spectrum-css/icon@4.0.4)

**Note:** Version bump only for package @spectrum-css/icon

## 4.0.3

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@4.0.2...@spectrum-css/icon@4.0.3)

**Note:** Version bump only for package @spectrum-css/icon

## 4.0.2

🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@4.0.1...@spectrum-css/icon@4.0.2)

### 🔙 Reverts

- gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

## 4.0.1

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@4.0.0...@spectrum-css/icon@4.0.1)

**Note:** Version bump only for package @spectrum-css/icon

## 4.0.0

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.50...@spectrum-css/icon@4.0.0)

- feat(sidenav)!: use spectrum-tokens (#1901)([8851dd9](https://github.com/adobe/spectrum-css/commit/8851dd9)), closes[#1901](https://github.com/adobe/spectrum-css/issues/1901)

### 🛑 BREAKING CHANGE

- Migrates Side Nav to use `@adobe/spectrum-tokens`

Additionally:

- chore(sidenav): initial build changes
- chore(sidenav): add description and migration guide
- chore(sidenav): add highcontrast custom properties
- chore(sidenav): properties rename and organize
- chore(sidenav): add mods
- chore(sidenav): rename and docs
- feat(sidenav): adds all variants to storybook
- fix(sidenav): icon and category story bugs
- feat(sidenav): icon pass through custom properties
- fix(sidenav): custom properties for icon
- fix(sidenav): correct gap usage
- fix(sidenav): dont't use pass through properties for icon
- chore(sidenav): add span to doc site side nav
- feat(sidenav): add icon styling
- chore(sidenav): whcm
- chore(sidenav): use new header tokens
- chore(sidenav): mods auto updates
- fix(sidenav): whcm icon hover
- fix(sidenav): addresses nesting icons in storybook
- feat(sidenav): use new tokens for heading layout
- fix(sidenav): spectrum link
- feat(sidenav): adds in icon variant to storybook
- fix(sidenav): hover on dark
- chore(sidenav): new value for text bottom margin
- chore(sidenav): remove custom tokens
- feat(sidenav): width set to 100%
- fix(sidenav): line height properties
- fix(sidenav): adds padding for focus ring

## 3.0.50

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.49...@spectrum-css/icon@3.0.50)

### 🐛 Bug fixes

- icon sizing in Storybook story templates ([#2037](https://github.com/adobe/spectrum-css/issues/2037))([c90c8a3](https://github.com/adobe/spectrum-css/commit/c90c8a3))

## 3.0.49

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.48...@spectrum-css/icon@3.0.49)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.48

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.47...@spectrum-css/icon@3.0.48)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.47

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.46...@spectrum-css/icon@3.0.47)

### 🐛 Bug fixes

- restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

## 3.0.46

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.45...@spectrum-css/icon@3.0.46)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.45

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.44...@spectrum-css/icon@3.0.45)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.44

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.43...@spectrum-css/icon@3.0.44)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.43

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.42...@spectrum-css/icon@3.0.43)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.42

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.41...@spectrum-css/icon@3.0.42)

### 🐛 Bug fixes

- **icon:** correct storybook icon sizing substitution ([3da3f41](https://github.com/adobe/spectrum-css/commit/3da3f41))

## 3.0.41

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.40...@spectrum-css/icon@3.0.41)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.40

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.38...@spectrum-css/icon@3.0.40)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.39

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.38...@spectrum-css/icon@3.0.39)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.38

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.36...@spectrum-css/icon@3.0.38)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.37

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.36...@spectrum-css/icon@3.0.37)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.36

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.35...@spectrum-css/icon@3.0.36)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.35

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.34...@spectrum-css/icon@3.0.35)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.34

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.33...@spectrum-css/icon@3.0.34)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.33

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.32...@spectrum-css/icon@3.0.33)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.32

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.31...@spectrum-css/icon@3.0.32)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.31

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.30...@spectrum-css/icon@3.0.31)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.30

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.29...@spectrum-css/icon@3.0.30)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.29

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.28...@spectrum-css/icon@3.0.29)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.28

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.27...@spectrum-css/icon@3.0.28)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.27

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.25...@spectrum-css/icon@3.0.27)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.26

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.25...@spectrum-css/icon@3.0.26)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.25

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.24...@spectrum-css/icon@3.0.25)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.24

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.23...@spectrum-css/icon@3.0.24)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.23

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.22...@spectrum-css/icon@3.0.23)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.22

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.21...@spectrum-css/icon@3.0.22)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.21

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.20...@spectrum-css/icon@3.0.21)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.20

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.19...@spectrum-css/icon@3.0.20)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.19

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.18...@spectrum-css/icon@3.0.19)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.18

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.17...@spectrum-css/icon@3.0.18)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.17

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.16...@spectrum-css/icon@3.0.17)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.16

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.15...@spectrum-css/icon@3.0.16)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.15

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.14...@spectrum-css/icon@3.0.15)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.14

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.13...@spectrum-css/icon@3.0.14)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.13

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.12...@spectrum-css/icon@3.0.13)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.12

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.10...@spectrum-css/icon@3.0.12)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

## 3.0.11

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.10...@spectrum-css/icon@3.0.11)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.10

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.9...@spectrum-css/icon@3.0.10)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.9

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.8...@spectrum-css/icon@3.0.9)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.8

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.7...@spectrum-css/icon@3.0.8)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.7

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.6...@spectrum-css/icon@3.0.7)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.6

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.4...@spectrum-css/icon@3.0.6)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.5

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.4...@spectrum-css/icon@3.0.5)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.2...@spectrum-css/icon@3.0.3)

### 🐛 Bug fixes

- make SVG icons adjust to text color ([42c343a](https://github.com/adobe/spectrum-css/commit/42c343a))
- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.1...@spectrum-css/icon@3.0.2)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@3.0.0...@spectrum-css/icon@3.0.1)

**Note:** Version bump only for package @spectrum-css/icon

## 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@2.1.1...@spectrum-css/icon@3.0.0)

### ✨ Features

- remove deprecated icon sizes ([0ea3a53](https://github.com/adobe/spectrum-css/commit/0ea3a53))

### 🐛 Bug fixes

- correct icon sizing for small cards ([5b570f4](https://github.com/adobe/spectrum-css/commit/5b570f4))
- update main, resolved conflicts ([d7880a2](https://github.com/adobe/spectrum-css/commit/d7880a2))

### 🛑 BREAKING CHANGE

- .spectrum-Icon--sizeL is now .spectrum-Icon--sizeXXL and will likely be removed later
- XXS, XS, and XXL icon sizes are no longer supported and have been removed

## 2.1.1

🗓 2020-05-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@2.1.0...@spectrum-css/icon@2.1.1)

**Note:** Version bump only for package @spectrum-css/icon

## 2.1.0

🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@2.0.5...@spectrum-css/icon@2.1.0)

### ✨ Features

- make Icon support RTL ([1e3ce00](https://github.com/adobe/spectrum-css/commit/1e3ce00))

## 2.0.5

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@2.0.4...@spectrum-css/icon@2.0.5)

**Note:** Version bump only for package @spectrum-css/icon

## 2.0.4

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@2.0.3...@spectrum-css/icon@2.0.4)

**Note:** Version bump only for package @spectrum-css/icon

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@2.0.2...@spectrum-css/icon@2.0.3)

**Note:** Version bump only for package @spectrum-css/icon

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@2.0.1...@spectrum-css/icon@2.0.2)

**Note:** Version bump only for package @spectrum-css/icon

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/icon@2.0.0...@spectrum-css/icon@2.0.1)

**Note:** Version bump only for package @spectrum-css/icon

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
