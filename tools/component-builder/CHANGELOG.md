# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="6.0.0"></a>
#6.0.0
🗓
2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@5.2.0...@spectrum-css/component-builder@6.0.0)

\*refactor(icon)!: tokens migration (#2347)([b63631a](https://github.com/adobe/spectrum-css/commit/b63631a)), closes[#2347](https://github.com/adobe/spectrum-css/issues/2347)

    	###
    	🛑 BREAKING CHANGES

    		*
    		migrate Icon from DNA tokens to Spectrum tokens.

Additionally:

- refactor(icon): migrate css to spectrum tokens

Migrates Icon CSS from using DNA/vars tokens to Spectrum tokens.
Refactors UI Icons to be a little cleaner and not need placeholders.

Icons now change the value of the property "--spectrum-icon-size" to
set their width and height. They also have three additional mods
available for setting the size (both width and height) or the individual
width and height.

- refactor(icon): remove legacy xvar css and plugin for combined icons

* Remove 'xvar' and 'x--' code within UI icon CSS, along with the build
  plugins that were used only for this. This was only only needed
  previously when the build did not allow 'var()' and '--property' here.

* Simplify and better document code used for combined UI icons and the
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

<a name="5.2.0"></a>
#5.2.0
🗓
2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@5.1.0...@spectrum-css/component-builder@5.2.0)

### ✨ Features

*add postcss-hover-media-feature plugin([d45886c](https://github.com/adobe/spectrum-css/commit/d45886c))*add postcss-hover-media-feature to build([3910325](https://github.com/adobe/spectrum-css/commit/3910325))\*
**component-builder,component-builder-simple:**add at-rule-packer to combine like at-rules([0a83b8c](https://github.com/adobe/spectrum-css/commit/0a83b8c))

<a name="5.1.0"></a>
#5.1.0
🗓
2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@4.0.21...@spectrum-css/component-builder@5.1.0)

### ✨ Features

- **asset,cyclebutton,quickaction,site:**deprecate skin.css assets ([#2438](https://github.com/adobe/spectrum-css/issues/2438))([d6de839](https://github.com/adobe/spectrum-css/commit/d6de839))_migrate build packages to postcss v8 ([#2460](https://github.com/adobe/spectrum-css/issues/2460))([bd6c40e](https://github.com/adobe/spectrum-css/commit/bd6c40e))_
  **overlay,commons:**deprecate overlay; migrate references to commons ([#2429](https://github.com/adobe/spectrum-css/issues/2429))([7eecd96](https://github.com/adobe/spectrum-css/commit/7eecd96))

### 🐛 Bug fixes

\*deprecate logical transform plugin ([#2437](https://github.com/adobe/spectrum-css/issues/2437))([ff5dda6](https://github.com/adobe/spectrum-css/commit/ff5dda6))

<a name="5.0.0"></a>

## 5.0.0

🗓
2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@4.0.21...@spectrum-css/component-builder-simple@5.0.0)

### 🛑 BREAKING CHANGES

Migrates PostCSS and all plugins to support PostCSS v8+. This is a breaking change as it requires a major version bump for all packages that depend on PostCSS and a rewrite of all local PostCSS plugins to support the new API.

<a name="4.0.21"></a>
##4.0.21
🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@4.0.20...@spectrum-css/component-builder@4.0.21)

**Note:** Version bump only for package @spectrum-css/component-builder

<a name="4.0.20"></a>
##4.0.20
🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@4.0.19...@spectrum-css/component-builder@4.0.20)

**Note:** Version bump only for package @spectrum-css/component-builder

<a name="4.0.19"></a>
##4.0.19
🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@4.0.18...@spectrum-css/component-builder@4.0.19)

**Note:** Version bump only for package @spectrum-css/component-builder

<a name="4.0.18"></a>
##4.0.18
🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@4.0.14...@spectrum-css/component-builder@4.0.18)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="4.0.17"></a>
##4.0.17
🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@4.0.14...@spectrum-css/component-builder@4.0.17)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="4.0.14"></a>
##4.0.14
🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@4.0.13...@spectrum-css/component-builder@4.0.14)

**Note:** Version bump only for package @spectrum-css/component-builder

<a name="4.0.13"></a>
##4.0.13
🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@4.0.12...@spectrum-css/component-builder@4.0.13)

**Note:** Version bump only for package @spectrum-css/component-builder

<a name="4.0.12"></a>
##4.0.12
🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@4.0.11...@spectrum-css/component-builder@4.0.12)

### 🐛 Bug fixes

\*revert component-builder changes([f77036d](https://github.com/adobe/spectrum-css/commit/f77036d))

<a name="4.0.11"></a>
##4.0.11
🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@4.0.10...@spectrum-css/component-builder@4.0.11)

**Note:** Version bump only for package @spectrum-css/component-builder

<a name="4.0.10"></a>
##4.0.10
🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@4.0.9...@spectrum-css/component-builder@4.0.10)

**Note:** Version bump only for package @spectrum-css/component-builder

<a name="4.0.9"></a>

## 4.0.9

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@4.0.8...@spectrum-css/component-builder@4.0.9)

**Note:** Version bump only for package @spectrum-css/component-builder

<a name="4.0.8"></a>

## 4.0.8

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@4.0.7...@spectrum-css/component-builder@4.0.8)

**Note:** Version bump only for package @spectrum-css/component-builder

<a name="4.0.7"></a>

## 4.0.7

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@4.0.6...@spectrum-css/component-builder@4.0.7)

**Note:** Version bump only for package @spectrum-css/component-builder

<a name="4.0.6"></a>

## 4.0.6

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@4.0.4...@spectrum-css/component-builder@4.0.6)

**Note:** Version bump only for package @spectrum-css/component-builder

<a name="4.0.5"></a>

## 4.0.5

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@4.0.4...@spectrum-css/component-builder@4.0.5)

**Note:** Version bump only for package @spectrum-css/component-builder

<a name="4.0.4"></a>

## 4.0.4

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@4.0.3...@spectrum-css/component-builder@4.0.4)

**Note:** Version bump only for package @spectrum-css/component-builder

<a name="4.0.3"></a>

## 4.0.3

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@4.0.2...@spectrum-css/component-builder@4.0.3)

**Note:** Version bump only for package @spectrum-css/component-builder

<a name="4.0.2"></a>

## 4.0.2

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@4.0.1...@spectrum-css/component-builder@4.0.2)

**Note:** Version bump only for package @spectrum-css/component-builder

<a name="4.0.1"></a>

## 4.0.1

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@4.0.0...@spectrum-css/component-builder@4.0.1)

### 🐛 Bug fixes

- correct RTL issues with SideNav and ActionButton ([#1611](https://github.com/adobe/spectrum-css/issues/1611)) ([54f7093](https://github.com/adobe/spectrum-css/commit/54f7093))

<a name="4.0.0"></a>

# 4.0.0

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@3.2.4...@spectrum-css/component-builder@4.0.0)

- chore(tokens)!: use latest dependency & fix build error (#1591) ([f2532e7](https://github.com/adobe/spectrum-css/commit/f2532e7)), closes [#1591](https://github.com/adobe/spectrum-css/issues/1591)

### 🛑 BREAKING CHANGES

- uses latest `@adobe/spectrum-tokens` dependency which includes token renames

<a name="3.2.4"></a>

## 3.2.4

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@3.2.3...@spectrum-css/component-builder@3.2.4)

**Note:** Version bump only for package @spectrum-css/component-builder

<a name="3.2.3"></a>

## 3.2.3

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@3.2.1...@spectrum-css/component-builder@3.2.3)

**Note:** Version bump only for package @spectrum-css/component-builder

<a name="3.2.2"></a>

## 3.2.2

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@3.2.1...@spectrum-css/component-builder@3.2.2)

**Note:** Version bump only for package @spectrum-css/component-builder

<a name="3.2.1"></a>

## 3.2.1

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@3.2.0...@spectrum-css/component-builder@3.2.1)

### 🐛 Bug fixes

- add missing dependency ([#1427](https://github.com/adobe/spectrum-css/issues/1427)) ([e00de80](https://github.com/adobe/spectrum-css/commit/e00de80))

<a name="3.2.0"></a>

# 3.2.0

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@3.1.2...@spectrum-css/component-builder@3.2.0)

### ✨ Features

- add core tokens ([f603e16](https://github.com/adobe/spectrum-css/commit/f603e16))
- add core tokens ([d0a07a1](https://github.com/adobe/spectrum-css/commit/d0a07a1))
- add simple component builder ([535126b](https://github.com/adobe/spectrum-css/commit/535126b))

<a name="3.1.2"></a>

## 3.1.2

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@3.1.1...@spectrum-css/component-builder@3.1.2)

**Note:** Version bump only for package @spectrum-css/component-builder

<a name="3.1.1"></a>

## 3.1.1

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@3.1.0...@spectrum-css/component-builder@3.1.1)

**Note:** Version bump only for package @spectrum-css/component-builder

<a name="3.1.0"></a>

# 3.1.0

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@3.0.1...@spectrum-css/component-builder@3.1.0)

### ✨ Features

- remove the need to add define hacks ([8c76829](https://github.com/adobe/spectrum-css/commit/8c76829))

<a name="3.0.1"></a>

## 3.0.1

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@3.0.0-alpha.1...@spectrum-css/component-builder@3.0.1)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="3.0.0"></a>

# 3.0.0

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@3.0.0-alpha.1...@spectrum-css/component-builder@3.0.0)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="3.0.0-alpha.1"></a>

# 3.0.0-alpha.1

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@3.0.0-alpha.0...@spectrum-css/component-builder@3.0.0-alpha.1)

**Note:** Version bump only for package @spectrum-css/component-builder

<a name="3.0.0-alpha.0"></a>

# 3.0.0-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@2.0.1...@spectrum-css/component-builder@3.0.0-alpha.0)

### ✨ Features

- updated typography token names to use standardorder ([50145fe](https://github.com/adobe/spectrum-css/commit/50145fe))

### 🛑 BREAKING CHANGES

- realigned classnames

<a name="2.0.1"></a>

## 2.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@2.0.0...@spectrum-css/component-builder@2.0.1)

**Note:** Version bump only for package @spectrum-css/component-builder

<a name="2.0.0"></a>

# 2.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@2.0.0-beta.1...@spectrum-css/component-builder@2.0.0)

**Note:** Version bump only for package @spectrum-css/component-builder

<a name="2.0.0-beta.1"></a>

# 2.0.0-beta.1

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@2.0.0-beta.0...@spectrum-css/component-builder@2.0.0-beta.1)

### ✨ Features

- disable legacy build in output ([f1ef983](https://github.com/adobe/spectrum-css/commit/f1ef983))
- error and warning reporting for variable use ([0460d39](https://github.com/adobe/spectrum-css/commit/0460d39))
- implement t-shirt sizing for Action Button, closes [#936](https://github.com/adobe/spectrum-css/issues/936) ([1a9ecf6](https://github.com/adobe/spectrum-css/commit/1a9ecf6))
- use postcss-dropdupedvars ([46d19ea](https://github.com/adobe/spectrum-css/commit/46d19ea))
- use postcss-dropunusedvars ([955e7e2](https://github.com/adobe/spectrum-css/commit/955e7e2))
- use postcss-remap vars ([807fd8f](https://github.com/adobe/spectrum-css/commit/807fd8f))

### 🐛 Bug fixes

- update main, resolved conflicts ([d7880a2](https://github.com/adobe/spectrum-css/commit/d7880a2))

### 🛑 BREAKING CHANGES

- this completely removes legacy build artifacts and IE 11 support
- .spectrum-ActionButton is no longer part of the button component, use the actionbutton component

<a name="2.0.0-beta.0"></a>

# 2.0.0-beta.0

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@1.2.1-beta.0...@spectrum-css/component-builder@2.0.0-beta.0)

- fix!: updated type sizes to use consistent syntax, related to #972 (#1031) ([1a604c4](https://github.com/adobe/spectrum-css/commit/1a604c4)), closes [#972](https://github.com/adobe/spectrum-css/issues/972) [#1031](https://github.com/adobe/spectrum-css/issues/1031)

### 🛑 BREAKING CHANGES

- all typography sizing classes now have --size* instead of --*, see migration guides

<a name="1.2.1-beta.0"></a>

## 1.2.1-beta.0

🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@1.2.0...@spectrum-css/component-builder@1.2.1-beta.0)

### 🐛 Bug fixes

- wip fix more components ([b74dbb8](https://github.com/adobe/spectrum-css/commit/b74dbb8))

<a name="1.2.0"></a>

# 1.2.0

🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@1.1.0...@spectrum-css/component-builder@1.2.0)

### ✨ Features

- make Typography support RTL ([17abd2b](https://github.com/adobe/spectrum-css/commit/17abd2b))
- support transform: logical rotate(rotation) for RTL ([5bbc8d2](https://github.com/adobe/spectrum-css/commit/5bbc8d2))

### 🐛 Bug fixes

- support multiple selectors in postcss-transform-logical ([3ef1750](https://github.com/adobe/spectrum-css/commit/3ef1750))

<a name="1.1.0"></a>

# 1.1.0

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@1.0.2...@spectrum-css/component-builder@1.1.0)

### ✨ Features

- adding t-shirt sized typography, fixes [#210](https://github.com/adobe/spectrum-css/issues/210), closes [#416](https://github.com/adobe/spectrum-css/issues/416) ([#408](https://github.com/adobe/spectrum-css/issues/408)) ([3921bcb](https://github.com/adobe/spectrum-css/commit/3921bcb)), closes [#523](https://github.com/adobe/spectrum-css/issues/523)

### 🐛 Bug fixes

- fix order of processor includes when doing diff CSS, fixes [#495](https://github.com/adobe/spectrum-css/issues/495) ([0d9f281](https://github.com/adobe/spectrum-css/commit/0d9f281))

<a name="1.0.2"></a>

## 1.0.2

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@1.0.1...@spectrum-css/component-builder@1.0.2)

### 🐛 Bug fixes

- don't try to add fallbacks inside of url(), related to [#223](https://github.com/adobe/spectrum-css/issues/223) ([#424](https://github.com/adobe/spectrum-css/issues/424)) ([0fd90c6](https://github.com/adobe/spectrum-css/commit/0fd90c6))

<a name="1.0.1"></a>

## 1.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@1.0.0...@spectrum-css/component-builder@1.0.1)

### 🐛 Bug fixes

- add missing variables to -unique files, closes [#336](https://github.com/adobe/spectrum-css/issues/336) ([3c9337f](https://github.com/adobe/spectrum-css/commit/3c9337f))

<a name="1.0.0"></a>

# 1.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
- use linked DNA data for CSS variable generation ([0233a53](https://github.com/adobe/spectrum-css/commit/0233a53))
