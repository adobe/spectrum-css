# Change Log

## 6.1.3

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)! - Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/opacitycheckerboard@2.1.3
  - @spectrum-css/colorhandle@8.1.3

## 6.1.2

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)! - Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/opacitycheckerboard@2.1.2
  - @spectrum-css/colorhandle@8.1.2

## 6.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/opacitycheckerboard@2.1.1
  - @spectrum-css/colorhandle@8.1.1

## 6.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/colorhandle@>=8
  - @spectrum-css/opacitycheckerboard@>=2
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="6.0.0"></a>

## 6.0.0

🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@5.1.5...@spectrum-css/colorslider@6.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="5.1.5"></a>

## 5.1.5

🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@5.1.4...@spectrum-css/colorslider@5.1.5)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="5.1.4"></a>

## 5.1.4

🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@5.1.3...@spectrum-css/colorslider@5.1.4)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="5.1.3"></a>

## 5.1.3

🗓
2024-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@5.1.2...@spectrum-css/colorslider@5.1.3)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="5.1.2"></a>

## 5.1.2

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@5.1.1...@spectrum-css/colorslider@5.1.2)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="5.1.1"></a>

## 5.1.1

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="5.1.0"></a>

## 5.1.0

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@5.0.14...@spectrum-css/colorslider@5.1.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="5.0.14"></a>

## 5.0.14

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@5.0.13...@spectrum-css/colorslider@5.0.14)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="5.0.13"></a>

## 5.0.13

🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@5.0.12...@spectrum-css/colorslider@5.0.13)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="5.0.12"></a>

## 5.0.12

🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@5.0.10...@spectrum-css/colorslider@5.0.12)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="5.0.11"></a>

## 5.0.11

🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@5.0.10...@spectrum-css/colorslider@5.0.11)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="5.0.10"></a>

## 5.0.10

🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@5.0.9...@spectrum-css/colorslider@5.0.10)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="5.0.9"></a>

## 5.0.9

🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@5.0.8...@spectrum-css/colorslider@5.0.9)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="5.0.8"></a>

## 5.0.8

🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@5.0.7...@spectrum-css/colorslider@5.0.8)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="5.0.7"></a>

## 5.0.7

🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@5.0.6...@spectrum-css/colorslider@5.0.7)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="5.0.6"></a>

## 5.0.6

🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@5.0.5...@spectrum-css/colorslider@5.0.6)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="5.0.5"></a>

## 5.0.5

🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@5.0.4...@spectrum-css/colorslider@5.0.5)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="5.0.4"></a>

## 5.0.4

🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@5.0.3...@spectrum-css/colorslider@5.0.4)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="5.0.3"></a>

## 5.0.3

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@5.0.2...@spectrum-css/colorslider@5.0.3)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="5.0.2"></a>

## 5.0.2

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@5.0.1...@spectrum-css/colorslider@5.0.2)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="5.0.1"></a>

## 5.0.1

🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@5.0.0...@spectrum-css/colorslider@5.0.1)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="5.0.0"></a>

## 5.0.0

🗓
2023-08-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@4.0.9...@spectrum-css/colorslider@5.0.0)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

\*feat(colorslider)!: spectrum tokens migration (#1924)([da345bd](https://github.com/adobe/spectrum-css/commit/da345bd)), closes[#1924](https://github.com/adobe/spectrum-css/issues/1924)

    	###
    	🛑 BREAKING CHANGES

    		*
    		migrates Color Slider to use `@adobe/spectrum-tokens` and the new Opacity Checkerboard

Additionally:

- build(colorslider)!: migrate build to use core tokens
  Migrate dependencies and other build related files to use the new
  @spectrum-css/tokens package.

- refactor(colorslider): convert CSS to use core tokens - wip

* Add new tokens defined in design.
* Use tokens in existing CSS.
* Merge skin.css into index.css.

- feat(colorslider): add story for 'alpha' gradient

Add story that shows the existing variant from the docs, with a
transparent color used in the gradient and checkerboard appearing behind
it. Adds a hidden control to Storybook. This variant needed to be
testable and compared against in Storybook.

- refactor(colorslider): move styles out of hidden placeholder

Removes unnecessary placeholder variable (%) that is only used once.
Clarifies what these "hidden" styles are doing.

- feat(colorslider): finalize css to use new core tokens

* Finalize CSS to use new core tokens.
* Integrates skin.css into index.css.
* Remove "canvas" variant as was done with colorwheel component.
* Replaces some properties with their logical properties.
* Generate mods.

- style(colorslider): prettier and stylelint on colorslider files

Run prettier with automatic changes to colorslider files, to update
formatting to match new changes to linting.

And manually make a few changes after stylelint check.

- fix(colorslider): highcontrast update

Updates colors for high contrast to fix disabled border color being off.
Refactors those colors and uses a local variable for the box-shadow
color.

Change: Uses CanvasText border color in high contrast mode, so
component still shows a border in high contrast mode with a dark
background theme. Border was previously barely visible.

- refactor(colorslider): remove no longer needed colorhandle styles

These styles for the nested ColorHandle appear to be no longer
necessary.

- hit area size (width and height) is available through colorhandle's
  --mod property. The global-dimension-size-300 was equal to the same
  pixel value already set by colorhandle using
  --spectrum-color-control-track-width

- border-radius is set to 100% in colorhandle and there does not appear
  to be any option to support changing this through a mod or SWC options

* fix(colorslider): remove added label and its spacing token

Per discussion with design, the label on the design was meant to serve
more as guidance, and does not need to be a part of the component.

- feat(colorhandle): add --mod-colorhandle-hitarea-border-radius

Add --mod custom property for the border radius of the hit area, so that
other components that use colorhandle can easily customize it
(colorslider sets it to square, not rounded).

- fix(colorslider): keep square hit area on colorhandle with new mod

Keep the square hit area (::after) on the nested colorhandle, which was
defaulting to rounded, using the newly added passthrough for
--mod-colorhandle-hitarea-border-radius

- feat(colorslider): reversed gradient for rtl support and docs update

Use same technique as SWC for reversing the gradient when using a RTL
base direction. The handles were flipping to the other side using the
new logical properties but the gradient was not.

Also updates documentation around this and improves overall docs
explanations. Changes first usage docs bullet point specifying
translateX, as this does not appear to be correct (SWC changes the
inset-inline-start and inset-block-end of the position absolute handle).

Fixes capitalization of component name in a few places to match the
sentence case specified in the Spectrum capitalization guidelines.

- fix(colorslider): update stories and example colors

Update gradient used and use the matching colorhandle background color
for the new Alpha story.

Add new story for the "With Image" example from the docs. This example
also includes the 50% positioned handle, for testing/VRT purposes.

- fix(colorslider): update mod name for checkerboard

Custom property mod had the wrong name.

Co-authored-by: Jennifer Grenier Diaz <jenn.diaz@heysparkbox.com>

- style(colorslider): remove prettier auto formatting

To ease merge and keep to existing style conventions. Changes were made
before prettier auto formatting was reverted.

- feat(colorslider): integrate opacitycheckerboard changes

Integrate new opacitycheckerboard changes that have merged into main.
ColorSlider now uses the opacitycheckerboard component, which is
viewable with the Alpha variant.

Also added a "Disabled" story to Storybook, so that's included in VRTs.

- style(colorhandle): update indentation on addition

Due to mix of tabs and spaces in file.

- feat(opacitycheckerboard): modify stories for use in components

* Modify storybook template so that it can be imported and used by other
  components' stories. Allow passing in content, and excluding the
  storybook testing wrapper markup.
* Moves defaultValue to args, as that syntax has been deprecated in
  newer versions of Storybook:
  https://storybook.js.org/docs/react/api/arg-types#defaultvalue
* Adds a new story with a centered background position mod, and
  clarifies that the arg is changing the mod.

- feat(colorslider): use imported opacitycheckerboard story

Use opacitycheckerboard story in the template for ColorSlider, so the
checkerboard appears in the Alpha variant.

- feat(colorslider): in storybook add focused class to color handle

When isFocused is enabled in Storybook, also add the focused class to
the colorhandle (showing it scaled up). Otherwise focused state in
Storybook has no visual difference.

- chore(colorslider): manual version increase for beta release

- fix(colorslider): inset the box-shadow border

The 'inset' of the box-shadow border had been lost from the skin.css, as
noticed in VRTs.

- chore(colorslider): manual version increase for beta release

- build(colorslider): minimum colorhandle version

Increase minimum version of colorhandle to be the latest release that
includes the addition of --mod-colorhandle-hitarea-border-radius

- build(colorslider): build with latest version of tokens

Update devDependencies to use latest version of tokens package.

- chore(colorslider): manual version increase for beta release

<a name="4.0.9"></a>

## 4.0.9

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@4.0.8...@spectrum-css/colorslider@4.0.9)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="4.0.8"></a>

## 4.0.8

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@4.0.6...@spectrum-css/colorslider@4.0.8)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="4.0.7"></a>

## 4.0.7

🗓
2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@4.0.6...@spectrum-css/colorslider@4.0.7)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="4.0.6"></a>

## 4.0.6

🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@4.0.5...@spectrum-css/colorslider@4.0.6)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="4.0.5"></a>

## 4.0.5

🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@4.0.4...@spectrum-css/colorslider@4.0.5)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="4.0.4"></a>

## 4.0.4

🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@4.0.3...@spectrum-css/colorslider@4.0.4)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="4.0.3"></a>

## 4.0.3

🗓
2023-08-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@4.0.2...@spectrum-css/colorslider@4.0.3)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="4.0.2"></a>

## 4.0.2

🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@4.0.1...@spectrum-css/colorslider@4.0.2)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="4.0.1"></a>

## 4.0.1

🗓
2023-07-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@4.0.0...@spectrum-css/colorslider@4.0.1)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="4.0.0"></a>

## 4.0.0

🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@3.0.23...@spectrum-css/colorslider@4.0.0)

\*feat(opacitycheckerboard)!: new component (#1916)([24e9f06](https://github.com/adobe/spectrum-css/commit/24e9f06)), closes[#1916](https://github.com/adobe/spectrum-css/issues/1916)

    	###
    	🛑 BREAKING CHANGES

    		*
    		creates new Opacity Checkerboard component and uses it within Swatch, Color Handle, Thumbnail, Color Slider.

- chore(opacitycheckerboard): generate new component

- feat(opacitycheckerboard): adds tokens

- feat(opacitycheckerboard): use in swatch

- feat(opacitycheckerboard): use in colorhandle

- feat(opacitycheckerboard): use in colorslider

- feat(opacitycheckerboard): use in thumbnail

- feat(opacitycheckerboard): adds color variant

- feat(opacitycheckerboard): adds stories

- chore(opacitycheckerboard): whcm show checkerboard

- chore(opacitycheckerboard): removes thumbnail border fix

- chore(opacitycheckerboard): address PR feedback

- fix(opacitycheckerboard): removes example classes

- chore(opacitycheckerboard): add mods

- fix(opacitycheckerboard): spelling

- fix(opacitycheckerboard): add inline styling to storybook

- chore(opacitycheckerboard): use stylemaps

- feat(opacitycheckerboard): use in color slider full example

- chore: update yarn.lock file after rebase

<a name="3.0.23"></a>

## 3.0.23

🗓
2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@3.0.22...@spectrum-css/colorslider@3.0.23)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="3.0.22"></a>

## 3.0.22

🗓
2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@3.0.21...@spectrum-css/colorslider@3.0.22)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="3.0.21"></a>

## 3.0.21

🗓
2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@3.0.20...@spectrum-css/colorslider@3.0.21)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="3.0.20"></a>

## 3.0.20

🗓
2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@3.0.19...@spectrum-css/colorslider@3.0.20)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="3.0.19"></a>

## 3.0.19

🗓
2023-06-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@3.0.18...@spectrum-css/colorslider@3.0.19)

### 🐛 Bug fixes

- **colorloupe:**border bug ([#1958](https://github.com/adobe/spectrum-css/issues/1958))([559696f](https://github.com/adobe/spectrum-css/commit/559696f))

<a name="3.0.18"></a>

## 3.0.18

🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@3.0.17...@spectrum-css/colorslider@3.0.18)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="3.0.17"></a>

## 3.0.17

🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@3.0.16...@spectrum-css/colorslider@3.0.17)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="3.0.16"></a>

## 3.0.16

🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@3.0.15...@spectrum-css/colorslider@3.0.16)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="3.0.15"></a>

## 3.0.15

🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@3.0.14...@spectrum-css/colorslider@3.0.15)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="3.0.14"></a>

## 3.0.14

🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@3.0.13...@spectrum-css/colorslider@3.0.14)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="3.0.13"></a>

## 3.0.13

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@3.0.12...@spectrum-css/colorslider@3.0.13)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="3.0.12"></a>

## 3.0.12

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@3.0.11...@spectrum-css/colorslider@3.0.12)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="3.0.11"></a>

## 3.0.11

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@3.0.10...@spectrum-css/colorslider@3.0.11)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="3.0.10"></a>

## 3.0.10

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@3.0.9...@spectrum-css/colorslider@3.0.10)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="3.0.9"></a>

## 3.0.9

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@3.0.8...@spectrum-css/colorslider@3.0.9)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="3.0.8"></a>

## 3.0.8

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@3.0.7...@spectrum-css/colorslider@3.0.8)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="3.0.7"></a>

## 3.0.7

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@3.0.6...@spectrum-css/colorslider@3.0.7)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="3.0.6"></a>

## 3.0.6

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@3.0.5...@spectrum-css/colorslider@3.0.6)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="3.0.5"></a>

## 3.0.5

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@3.0.4...@spectrum-css/colorslider@3.0.5)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="3.0.4"></a>

## 3.0.4

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@3.0.3...@spectrum-css/colorslider@3.0.4)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="3.0.3"></a>

## 3.0.3

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@3.0.2...@spectrum-css/colorslider@3.0.3)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="3.0.2"></a>

## 3.0.2

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@3.0.0...@spectrum-css/colorslider@3.0.2)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="3.0.1"></a>

## 3.0.1

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@3.0.0...@spectrum-css/colorslider@3.0.1)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="3.0.0"></a>

## 3.0.0

🗓 2023-04-19 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.24...@spectrum-css/colorslider@3.0.0)

- feat(colorloupe, colorhandle)!: migrate to core tokens (#1753) ([c72f147](https://github.com/adobe/spectrum-css/commit/c72f147)), closes [#1753](https://github.com/adobe/spectrum-css/issues/1753)

### 🛑 BREAKING CHANGES

- migrates both the ColorLoupe and ColorHandle components to `@adobe/spectrum-tokens`

<a name="2.0.24"></a>

## 2.0.24

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.22...@spectrum-css/colorslider@2.0.24)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="2.0.23"></a>

## 2.0.23

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.22...@spectrum-css/colorslider@2.0.23)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="2.0.22"></a>

## 2.0.22

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.21...@spectrum-css/colorslider@2.0.22)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="2.0.21"></a>

## 2.0.21

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.20...@spectrum-css/colorslider@2.0.21)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="2.0.20"></a>

## 2.0.20

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.19...@spectrum-css/colorslider@2.0.20)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="2.0.19"></a>

## 2.0.19

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.18...@spectrum-css/colorslider@2.0.19)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="2.0.18"></a>

## 2.0.18

🗓 2023-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.17...@spectrum-css/colorslider@2.0.18)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="2.0.17"></a>

## 2.0.17

🗓 2023-02-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.16...@spectrum-css/colorslider@2.0.17)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="2.0.16"></a>

## 2.0.16

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.15...@spectrum-css/colorslider@2.0.16)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="2.0.15"></a>

## 2.0.15

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.14...@spectrum-css/colorslider@2.0.15)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="2.0.14"></a>

## 2.0.14

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.13...@spectrum-css/colorslider@2.0.14)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="2.0.13"></a>

## 2.0.13

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.12...@spectrum-css/colorslider@2.0.13)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="2.0.12"></a>

## 2.0.12

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.11...@spectrum-css/colorslider@2.0.12)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="2.0.11"></a>

## 2.0.11

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.9...@spectrum-css/colorslider@2.0.11)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="2.0.10"></a>

## 2.0.10

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.9...@spectrum-css/colorslider@2.0.10)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="2.0.9"></a>

## 2.0.9

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.8...@spectrum-css/colorslider@2.0.9)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="2.0.8"></a>

## 2.0.8

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.7...@spectrum-css/colorslider@2.0.8)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="2.0.7"></a>

## 2.0.7

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.6...@spectrum-css/colorslider@2.0.7)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="2.0.6"></a>

## 2.0.6

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.5...@spectrum-css/colorslider@2.0.6)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="2.0.5"></a>

## 2.0.5

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.4...@spectrum-css/colorslider@2.0.5)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="2.0.4"></a>

## 2.0.4

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.3...@spectrum-css/colorslider@2.0.4)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="2.0.3"></a>

## 2.0.3

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.2...@spectrum-css/colorslider@2.0.3)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="2.0.2"></a>

## 2.0.2

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.1...@spectrum-css/colorslider@2.0.2)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="2.0.1"></a>

## 2.0.1

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@2.0.0...@spectrum-css/colorslider@2.0.1)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="2.0.0"></a>

## 2.0.0

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@1.0.13...@spectrum-css/colorslider@2.0.0)

### ✨ Features

- remove the need to add define hacks ([8c76829](https://github.com/adobe/spectrum-css/commit/8c76829))
- use --spectrum-picked-color for everything ([62e6469](https://github.com/adobe/spectrum-css/commit/62e6469))

### 🐛 Bug fixes

- give the Spectrum loupe a stroke ([486b079](https://github.com/adobe/spectrum-css/commit/486b079))
- make ColorHandle and ColorSlider use the right checkerboard colors ([f7abb74](https://github.com/adobe/spectrum-css/commit/f7abb74))
- use the correct checkerboard background for Slider and Handle ([cfb2151](https://github.com/adobe/spectrum-css/commit/cfb2151))

### 🛑 BREAKING CHANGES

- You must define --spectrum-picked-color instead of setting background-color

<a name="1.0.13"></a>

## 1.0.13

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@1.0.12...@spectrum-css/colorslider@1.0.13)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="1.0.12"></a>

## 1.0.12

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@1.0.11...@spectrum-css/colorslider@1.0.12)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="1.0.11"></a>

## 1.0.11

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@1.0.9...@spectrum-css/colorslider@1.0.11)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

<a name="1.0.10"></a>

## 1.0.10

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@1.0.10-beta.0...@spectrum-css/colorslider@1.0.10)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="1.0.10-beta.0"></a>

## 1.0.10-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@1.0.9...@spectrum-css/colorslider@1.0.10-beta.0)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="1.0.9"></a>

## 1.0.9

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@1.0.8...@spectrum-css/colorslider@1.0.9)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="1.0.8"></a>

## 1.0.8

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@1.0.7...@spectrum-css/colorslider@1.0.8)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="1.0.7"></a>

## 1.0.7

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@1.0.6...@spectrum-css/colorslider@1.0.7)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="1.0.6"></a>

## 1.0.6

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@1.0.5...@spectrum-css/colorslider@1.0.6)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="1.0.5"></a>

## 1.0.5

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@1.0.3-alpha.3...@spectrum-css/colorslider@1.0.5)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))
- use opacity: 0 and appearance: none of form elements ([14c7fcf](https://github.com/adobe/spectrum-css/commit/14c7fcf))

<a name="1.0.4"></a>

## 1.0.4

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@1.0.3-alpha.3...@spectrum-css/colorslider@1.0.4)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))
- use opacity: 0 and appearance: none of form elements ([14c7fcf](https://github.com/adobe/spectrum-css/commit/14c7fcf))

<a name="1.0.3"></a>

## 1.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@1.0.3-alpha.3...@spectrum-css/colorslider@1.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="1.0.3-alpha.3"></a>

## 1.0.3-alpha.3

🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@1.0.3-alpha.2...@spectrum-css/colorslider@1.0.3-alpha.3)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="1.0.3-alpha.2"></a>

## 1.0.3-alpha.2

🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@1.0.3-alpha.1...@spectrum-css/colorslider@1.0.3-alpha.2)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="1.0.3-alpha.1"></a>

## 1.0.3-alpha.1

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@1.0.3-alpha.0...@spectrum-css/colorslider@1.0.3-alpha.1)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="1.0.3-alpha.0"></a>

## 1.0.3-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@1.0.2...@spectrum-css/colorslider@1.0.3-alpha.0)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="1.0.2"></a>

## 1.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@1.0.1...@spectrum-css/colorslider@1.0.2)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="1.0.1"></a>

## 1.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@1.0.0...@spectrum-css/colorslider@1.0.1)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="1.0.0"></a>

## 1.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@1.0.0-beta.5...@spectrum-css/colorslider@1.0.0)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="1.0.0-beta.5"></a>

## 1.0.0-beta.5

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@1.0.0-beta.4...@spectrum-css/colorslider@1.0.0-beta.5)

### 🐛 Bug fixes

- support high contrast mode in color components ([d4c05cb](https://github.com/adobe/spectrum-css/commit/d4c05cb))

<a name="1.0.0-beta.4"></a>

## 1.0.0-beta.4

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@1.0.0-beta.3...@spectrum-css/colorslider@1.0.0-beta.4)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="1.0.0-beta.3"></a>

## 1.0.0-beta.3

🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@1.0.0-beta.2...@spectrum-css/colorslider@1.0.0-beta.3)

### 🐛 Bug fixes

- wip fix more components ([b74dbb8](https://github.com/adobe/spectrum-css/commit/b74dbb8))

<a name="1.0.0-beta.2"></a>

## 1.0.0-beta.2

🗓 2020-06-19 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorslider@1.0.0-beta.1...@spectrum-css/colorslider@1.0.0-beta.2)

**Note:** Version bump only for package @spectrum-css/colorslider

<a name="1.0.0-beta.1"></a>

## 1.0.0-beta.1

🗓 2020-05-14

### ✨ Features

- Color Handle/Slider/Area/Wheel ([#673](https://github.com/adobe/spectrum-css/issues/673)) ([bcd2bf1](https://github.com/adobe/spectrum-css/commit/bcd2bf1))
