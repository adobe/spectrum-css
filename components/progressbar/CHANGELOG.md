# Change log

## 7.0.0-next.4

### Major Changes

📝 [#4014](https://github.com/adobe/spectrum-css/pull/4014) [`35c066b`](https://github.com/adobe/spectrum-css/commit/35c066b29c311b1bfcf4507075f13b41222ffc84) Thanks [@castastrophe](https://github.com/castastrophe)!

This update removes the `dir` attribute polyfill (served via a PostCSS transform to compiled assets) as the fallback is no longer necessary. The`dir` attribute support is available in all supported browsers and has been tested to correctly inherit inside web component shadow DOMs. This is a breaking change **only** to those relying on the `dir` attribute being present for styling, however, the `:dir` pseudo will correctly inherit values from their containers. To correctly determine the `dir` value of a node using JavaScript, you can use `getComputedStyle(node).direction`.

## 7.0.0-next.3

### Major Changes

📝 [#3968](https://github.com/adobe/spectrum-css/pull/3968) [`75e847f`](https://github.com/adobe/spectrum-css/commit/75e847f1ae38a889b43888b3ac19505aadb4e24d) Thanks [@aramos-adobe](https://github.com/aramos-adobe)!

### S2 meter migration with base progress bar updates

This migration updates the meter component and the progress bar component. Both needed the track to have a full corner radius to make the rounded look. The progress bar's HTML template now includes the help text component but it is only used in the meter. Also includes a bug fix for progress bar in order to better support the side label variant.

#### New updates

- Includes `--sizeM` and `--sizeXL` (using progress bar's sizes)
- Includes help text component for more context
- Shares progress bar's field label typography
- Added help text visual test
- Added static black variant

Since the progress bar and meter are now using the same tokens for track thickness in size variants, font size, and spacing, the following mods have been removed from meter but are still able to be used in progress bar:

- `--mod-progressbar-thickness`
- `--mod-progressbar-font-size`
- `--mod-progressbar-spacing-top-to-text`

These mods can continue to be used as before.

#### New mods

- `--mod-meter-help-text-to-progress-bar`

## 7.0.0-next.2

### Minor Changes

- [#3908](https://github.com/adobe/spectrum-css/pull/3908) [`7971c77`](https://github.com/adobe/spectrum-css/commit/7971c7728b88e5e539b9d0974ab805d9ef6338fd) Thanks [@cdransf](https://github.com/cdransf)!

Adjust progressbar styles, story and template to support proper width token and sizes for medium (desktop) and large (mobile) platforms.

- Progress bar and meter now use the same tokens to control their width.
- Progress bar and meter now have a set width regardless of t-shirt size.

#### Removed mods

`--mod-meter-inline-size`

#### New mods

`--mod-progressbar-inline-size`

## 7.0.0-next.1

### Patch Changes

- Updated dependencies [[`60a156d`](https://github.com/adobe/spectrum-css/commit/60a156d7c0efcc999bc440274bbbbf586beb274b)]:
  - @spectrum-css/tokens@16.1.0-next.0

## 7.0.0-next.0

### Patch Changes

- Updated dependencies []:
  - @spectrum-css/fieldlabel@11.0.0-next.0

## 6.1.0

### Minor Changes

📝 [`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee) Thanks [@castastrophe](https://github.com/castastrophe)!

## New feature

Minified and gzipped outputs available for all compiled CSS assets.

### Patch Changes

📝 [#3541](https://github.com/adobe/spectrum-css/pull/3541) [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d) Thanks [@castastrophe](https://github.com/castastrophe)!

Dependency alignment across the project.

- Updated dependencies [[`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee), [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d)]:
  - @spectrum-css/fieldlabel@11.0.0
  - @spectrum-css/tokens@16.0.1

## 6.0.1

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
  - @spectrum-css/fieldlabel@10.0.1

## 6.0.0

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
  - @spectrum-css/fieldlabel@10.0.0

## 5.0.1

### Patch Changes

📝 [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)!

- Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/fieldlabel@9.0.1

## 5.0.0

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
  - @spectrum-css/fieldlabel@9.0.0

## 4.2.0

### Minor Changes

📝 [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/fieldlabel@8.2.0

## 4.1.8

### Patch Changes

📝 [#3291](https://github.com/adobe/spectrum-css/pull/3291) [`6c47b48`](https://github.com/adobe/spectrum-css/commit/6c47b48cdfbd1ad5fc19d913d18901f405b8b211) Thanks [@cdransf](https://github.com/cdransf)!

- Resolves lint violation by removing unused custom property.

## 4.1.7

### Patch Changes

📝 [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)!

- Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/fieldlabel@8.1.3

## 4.1.6

### Patch Changes

📝 [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)!

- Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/fieldlabel@8.1.2

## 4.1.5

### Patch Changes

📝 [#2929](https://github.com/adobe/spectrum-css/pull/2929) [`3c6addd`](https://github.com/adobe/spectrum-css/commit/3c6addd3133f9340bb6472c96fc5c436bb77cb5a) Thanks [@marissahuysentruyt](https://github.com/marissahuysentruyt)!

- Reverts the `background-color` property to `background` to support the use of CSS gradients. Gradient support stories were added to the meter and progress bar components within their Chromatic testing previews to ensure that we continue to support gradients by covering them in our visual regression tests.

## 4.1.4

### Patch Changes

📝 [#2965](https://github.com/adobe/spectrum-css/pull/2965) [`469dfc2`](https://github.com/adobe/spectrum-css/commit/469dfc2b13248ed5fb067e05cc30049d3e43dc90) Thanks [@marissahuysentruyt](https://github.com/marissahuysentruyt)!

- - Enforces the correct static white progress bar fill color when meter is using both the `spectrum-ProgressBar--staticWhite` class and one of the `is-positive`, `is-negative`, or `is-notice` classes.
  - Adds a static white story to meter.

## 4.1.3

### Patch Changes

📝 [#2842](https://github.com/adobe/spectrum-css/pull/2842) [`4cd3a15`](https://github.com/adobe/spectrum-css/commit/4cd3a15db914b667f5d606388051ecd2cd318134) Thanks [@castastrophe](https://github.com/castastrophe)!

- Updated CSSNano plugin to toggle reduceIdent off to prevent invalid abstractions from breaking named grid templates.

## 4.1.2

### Patch Changes

📝 [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)!

- Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/fieldlabel@8.1.1

## 4.1.1

### Patch Changes

📝 [#2754](https://github.com/adobe/spectrum-css/pull/2754) [`dbf1406`](https://github.com/adobe/spectrum-css/commit/dbf1406822be32aa1dbd2864b097853423bf06d8) Thanks [@jawinn](https://github.com/jawinn)!

- Sets the `color` property in parts of some components that were relying on inheriting a color from higher up in the DOM.

## 4.1.0

### Minor Changes

📝 [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/fieldlabel@>=8
  - @spectrum-css/tokens@>=14

## 4.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.1.5...@spectrum-css/progressbar@4.0.0)

- feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGE

- Removes component-builder & component-builder-simple for script leveraging postcss
- Imports added to index.css and themes/express.css

## 3.1.5

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.1.4...@spectrum-css/progressbar@3.1.5)
**Note:** Version bump only for package @spectrum-css/progressbar

## 3.1.4

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.1.3...@spectrum-css/progressbar@3.1.4)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.1.3

🗓 2024-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.1.2...@spectrum-css/progressbar@3.1.3)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.1.2

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.1.1...@spectrum-css/progressbar@3.1.2)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.1.1

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.1.0

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.81...@spectrum-css/progressbar@3.1.0)

### ✨ Features

- remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

## 3.0.81

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.80...@spectrum-css/progressbar@3.0.81)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.80

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.79...@spectrum-css/progressbar@3.0.80)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.79

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.78...@spectrum-css/progressbar@3.0.79)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.78

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.77...@spectrum-css/progressbar@3.0.78)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.77

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.76...@spectrum-css/progressbar@3.0.77)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.76

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.75...@spectrum-css/progressbar@3.0.76)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.75

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.74...@spectrum-css/progressbar@3.0.75)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.74

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.73...@spectrum-css/progressbar@3.0.74)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.73

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.72...@spectrum-css/progressbar@3.0.73)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.72

🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.71...@spectrum-css/progressbar@3.0.72)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.71

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.70...@spectrum-css/progressbar@3.0.71)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.70

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.69...@spectrum-css/progressbar@3.0.70)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.69

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.68...@spectrum-css/progressbar@3.0.69)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.68

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.67...@spectrum-css/progressbar@3.0.68)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.67

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.66...@spectrum-css/progressbar@3.0.67)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.66

🗓 2023-08-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.65...@spectrum-css/progressbar@3.0.66)

### spectrum-Meter class

Meter now uses the class `spectrum-Meter` on the parent `div`.

### 🔙 Reverts

- gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

## 3.0.65

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.64...@spectrum-css/progressbar@3.0.65)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.64

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.62...@spectrum-css/progressbar@3.0.64)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.63

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.62...@spectrum-css/progressbar@3.0.63)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.62

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.61...@spectrum-css/progressbar@3.0.62)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.61

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.60...@spectrum-css/progressbar@3.0.61)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.60

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.59...@spectrum-css/progressbar@3.0.60)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.59

🗓 2023-08-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.58...@spectrum-css/progressbar@3.0.59)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.58

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.57...@spectrum-css/progressbar@3.0.58)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.57

🗓 2023-07-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.56...@spectrum-css/progressbar@3.0.57)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.56

🗓 2023-07-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.55...@spectrum-css/progressbar@3.0.56)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.55

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.54...@spectrum-css/progressbar@3.0.55)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.54

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.53...@spectrum-css/progressbar@3.0.54)

- Version bump only for package @spectrum-css/progressbar

## 3.0.53

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.52...@spectrum-css/progressbar@3.0.53)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.52

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.51...@spectrum-css/progressbar@3.0.52)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.51

🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.50...@spectrum-css/progressbar@3.0.51)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.50

🗓 2023-06-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.49...@spectrum-css/progressbar@3.0.50)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.49

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.48...@spectrum-css/progressbar@3.0.49)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.48

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.47...@spectrum-css/progressbar@3.0.48)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.47

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.46...@spectrum-css/progressbar@3.0.47)

### 🐛 Bug fixes

- restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

## 3.0.46

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.45...@spectrum-css/progressbar@3.0.46)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.45

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.44...@spectrum-css/progressbar@3.0.45)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.44

🗓 2023-05-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.43...@spectrum-css/progressbar@3.0.44)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.43

🗓 2005-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.42...@spectrum-css/progressbar@3.0.43)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.42

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.41...@spectrum-css/progressbar@3.0.42)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.41

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.40...@spectrum-css/progressbar@3.0.41)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.40

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.39...@spectrum-css/progressbar@3.0.40)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.39

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.38...@spectrum-css/progressbar@3.0.39)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.38

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.37...@spectrum-css/progressbar@3.0.38)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.37

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.36...@spectrum-css/progressbar@3.0.37)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.36

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.35...@spectrum-css/progressbar@3.0.36)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.35

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.34...@spectrum-css/progressbar@3.0.35)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.34

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.33...@spectrum-css/progressbar@3.0.34)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.33

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.32...@spectrum-css/progressbar@3.0.33)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.32

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.31...@spectrum-css/progressbar@3.0.32)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.31

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.30...@spectrum-css/progressbar@3.0.31)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.30

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.29...@spectrum-css/progressbar@3.0.30)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.29

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.28...@spectrum-css/progressbar@3.0.29)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.28

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.27...@spectrum-css/progressbar@3.0.28)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.27

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.26...@spectrum-css/progressbar@3.0.27)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.26

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.24...@spectrum-css/progressbar@3.0.26)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.25

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.24...@spectrum-css/progressbar@3.0.25)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.24

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.23...@spectrum-css/progressbar@3.0.24)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.23

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.22...@spectrum-css/progressbar@3.0.23)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.22

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.21...@spectrum-css/progressbar@3.0.22)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.21

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.20...@spectrum-css/progressbar@3.0.21)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.20

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.19...@spectrum-css/progressbar@3.0.20)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.19

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.17...@spectrum-css/progressbar@3.0.19)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.18

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.17...@spectrum-css/progressbar@3.0.18)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.17

🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.15...@spectrum-css/progressbar@3.0.17)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.16

🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.15...@spectrum-css/progressbar@3.0.16)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.15

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.14...@spectrum-css/progressbar@3.0.15)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.14

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.13...@spectrum-css/progressbar@3.0.14)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.13

🗓 2023-03-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.12...@spectrum-css/progressbar@3.0.13)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.12

🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.11...@spectrum-css/progressbar@3.0.12)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.11

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.10...@spectrum-css/progressbar@3.0.11)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.10

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.9...@spectrum-css/progressbar@3.0.10)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.9

🗓 2023-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.8...@spectrum-css/progressbar@3.0.9)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.8

🗓 2023-03-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.7...@spectrum-css/progressbar@3.0.8)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.7

🗓 2023-02-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.6...@spectrum-css/progressbar@3.0.7)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.6

🗓 2023-02-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.5...@spectrum-css/progressbar@3.0.6)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.5

🗓 2023-02-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.4...@spectrum-css/progressbar@3.0.5)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.4

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.3...@spectrum-css/progressbar@3.0.4)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.3

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.2...@spectrum-css/progressbar@3.0.3)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.2

🗓 2023-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.1...@spectrum-css/progressbar@3.0.2)

### 🐛 Bug fixes

- **progressbar:** typo in --mod-progressbar-label-and-value-white variable ([#1599](https://github.com/adobe/spectrum-css/issues/1599)) ([a7c5892](https://github.com/adobe/spectrum-css/commit/a7c5892))

## 3.0.1

🗓 2023-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@3.0.0...@spectrum-css/progressbar@3.0.1)

**Note:** Version bump only for package @spectrum-css/progressbar

## 3.0.0

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@2.0.12...@spectrum-css/progressbar@3.0.0)

- chore(tokens)!: use latest dependency & fix build error (#1591) ([f2532e7](https://github.com/adobe/spectrum-css/commit/f2532e7)), closes [#1591](https://github.com/adobe/spectrum-css/issues/1591)

### 🛑 BREAKING CHANGE

- uses latest `@adobe/spectrum-tokens` dependency which includes token renames

## 2.0.12

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@2.0.11...@spectrum-css/progressbar@2.0.12)

**Note:** Version bump only for package @spectrum-css/progressbar

## 2.0.11

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@2.0.10...@spectrum-css/progressbar@2.0.11)

**Note:** Version bump only for package @spectrum-css/progressbar

## 2.0.10

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@2.0.9...@spectrum-css/progressbar@2.0.10)

**Note:** Version bump only for package @spectrum-css/progressbar

## 2.0.9

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@2.0.7...@spectrum-css/progressbar@2.0.9)

**Note:** Version bump only for package @spectrum-css/progressbar

## 2.0.8

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@2.0.7...@spectrum-css/progressbar@2.0.8)

**Note:** Version bump only for package @spectrum-css/progressbar

## 2.0.7

🗓 2023-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@2.0.6...@spectrum-css/progressbar@2.0.7)

**Note:** Version bump only for package @spectrum-css/progressbar

## 2.0.6

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@2.0.5...@spectrum-css/progressbar@2.0.6)

**Note:** Version bump only for package @spectrum-css/progressbar

## 2.0.5

🗓 2022-12-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@2.0.4...@spectrum-css/progressbar@2.0.5)

**Note:** Version bump only for package @spectrum-css/progressbar

## 2.0.4

🗓 2022-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@2.0.3...@spectrum-css/progressbar@2.0.4)

**Note:** Version bump only for package @spectrum-css/progressbar

## 2.0.3

🗓 2022-12-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@2.0.2...@spectrum-css/progressbar@2.0.3)

**Note:** Version bump only for package @spectrum-css/progressbar

## 2.0.2

🗓 2022-11-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@2.0.1...@spectrum-css/progressbar@2.0.2)

### 🐛 Bug fixes

- resolve missing tokens errors due to name changes ([#1555](https://github.com/adobe/spectrum-css/issues/1555)) ([ddae027](https://github.com/adobe/spectrum-css/commit/ddae027))

## 2.0.1

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@2.0.0...@spectrum-css/progressbar@2.0.1)

**Note:** Version bump only for package @spectrum-css/progressbar

## 2.0.0

🗓 2022-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.33...@spectrum-css/progressbar@2.0.0)

- feat(progressbar)!: migrate progressbar to core tokens (#1493) ([c0fc49f](https://github.com/adobe/spectrum-css/commit/c0fc49f)), closes [#1493](https://github.com/adobe/spectrum-css/issues/1493)

### 🛑 BREAKING CHANGE

- migrate ProgressBar to core tokens
- feat(meter!): meter now only supports sizes S & L

Co-authored-by: Patrick Fulton <pfulton@adobe.com>
Co-authored-by: Bernhard Schmidt <52184321+bernhard-adobe@users.noreply.github.com>

## 1.0.33

🗓 2022-07-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.32...@spectrum-css/progressbar@1.0.33)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.32

🗓 2022-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.31...@spectrum-css/progressbar@1.0.32)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.31

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.29...@spectrum-css/progressbar@1.0.31)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.30

🗓 2022-06-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.29...@spectrum-css/progressbar@1.0.30)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.29

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.28...@spectrum-css/progressbar@1.0.29)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.28

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.27...@spectrum-css/progressbar@1.0.28)

### 🐛 Bug fixes

- progressbar WHCM ([2288a68](https://github.com/adobe/spectrum-css/commit/2288a68))

## 1.0.27

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.26...@spectrum-css/progressbar@1.0.27)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.26

🗓 2022-04-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.25...@spectrum-css/progressbar@1.0.26)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.25

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.24...@spectrum-css/progressbar@1.0.25)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.24

🗓 2022-03-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.23...@spectrum-css/progressbar@1.0.24)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.23

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.22...@spectrum-css/progressbar@1.0.23)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.22

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.21...@spectrum-css/progressbar@1.0.22)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.21

🗓 2022-03-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.20...@spectrum-css/progressbar@1.0.21)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.20

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.19...@spectrum-css/progressbar@1.0.20)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.19

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.18...@spectrum-css/progressbar@1.0.19)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.18

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.17...@spectrum-css/progressbar@1.0.18)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.17

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.16...@spectrum-css/progressbar@1.0.17)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.16

🗓 2022-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.15...@spectrum-css/progressbar@1.0.16)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.15

🗓 2022-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.14...@spectrum-css/progressbar@1.0.15)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.14

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.13...@spectrum-css/progressbar@1.0.14)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.13

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.11...@spectrum-css/progressbar@1.0.13)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

## 1.0.12

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.11...@spectrum-css/progressbar@1.0.12)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.11

🗓 2021-12-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.10...@spectrum-css/progressbar@1.0.11)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.10

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.9...@spectrum-css/progressbar@1.0.10)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.9

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.8...@spectrum-css/progressbar@1.0.9)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.8

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.7...@spectrum-css/progressbar@1.0.8)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.7

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.6...@spectrum-css/progressbar@1.0.7)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.6

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.4...@spectrum-css/progressbar@1.0.6)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.5

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.4...@spectrum-css/progressbar@1.0.5)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.2...@spectrum-css/progressbar@1.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

## 1.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.1...@spectrum-css/progressbar@1.0.2)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progressbar@1.0.0...@spectrum-css/progressbar@1.0.1)

**Note:** Version bump only for package @spectrum-css/progressbar

## 1.0.0

🗓 2021-02-02

**Note:** Version bump only for package @spectrum-css/progressbar
