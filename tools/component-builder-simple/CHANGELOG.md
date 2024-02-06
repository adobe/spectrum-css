# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="5.0.4"></a>
##5.0.4
🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@5.0.3...@spectrum-css/component-builder-simple@5.0.4)

**Note:** Version bump only for package @spectrum-css/component-builder-simple

<a name="5.0.3"></a>
##5.0.3
🗓
2024-02-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@5.0.2...@spectrum-css/component-builder-simple@5.0.3)

**Note:** Version bump only for package @spectrum-css/component-builder-simple

<a name="5.0.2"></a>
##5.0.2
🗓
2024-02-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@5.0.1...@spectrum-css/component-builder-simple@5.0.2)

**Note:** Version bump only for package @spectrum-css/component-builder-simple

<a name="5.0.1"></a>
##5.0.1
🗓
2024-02-06
<a name="5.0.1-next.0"></a>
##5.0.1-next.0
🗓
2024-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@5.0.0...@spectrum-css/component-builder-simple@5.0.1-next.0)

**Note:** Version bump only for package @spectrum-css/component-builder-simple

<a name="5.0.0"></a>
#5.0.0
🗓
2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@4.2.0...@spectrum-css/component-builder-simple@5.0.0)

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

<a name="4.2.0"></a>
#4.2.0
🗓
2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@4.1.0...@spectrum-css/component-builder-simple@4.2.0)

### ✨ Features

*add postcss-hover-media-feature plugin([d45886c](https://github.com/adobe/spectrum-css/commit/d45886c))*add postcss-hover-media-feature to build([3910325](https://github.com/adobe/spectrum-css/commit/3910325))\*
**component-builder,component-builder-simple:**add at-rule-packer to combine like at-rules([0a83b8c](https://github.com/adobe/spectrum-css/commit/0a83b8c))

<a name="4.1.0"></a>
#4.1.0
🗓
2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@3.0.4...@spectrum-css/component-builder-simple@4.1.0)

### ✨ Features

_migrate build packages to postcss v8 ([#2460](https://github.com/adobe/spectrum-css/issues/2460))([bd6c40e](https://github.com/adobe/spectrum-css/commit/bd6c40e))_
**overlay,commons:**deprecate overlay; migrate references to commons ([#2429](https://github.com/adobe/spectrum-css/issues/2429))([7eecd96](https://github.com/adobe/spectrum-css/commit/7eecd96))

### 🐛 Bug fixes

\*deprecate logical transform plugin ([#2437](https://github.com/adobe/spectrum-css/issues/2437))([ff5dda6](https://github.com/adobe/spectrum-css/commit/ff5dda6))

<a name="4.0.0"></a>

## 4.0.0

🗓
2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@3.0.4...@spectrum-css/component-builder-simple@4.0.0)

### 🛑 BREAKING CHANGES

Migrates PostCSS and all plugins to support PostCSS v8+. This is a breaking change as it requires a major version bump for all packages that depend on PostCSS and a rewrite of all local PostCSS plugins to support the new API.

<a name="3.0.4"></a>
##3.0.4
🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@3.0.3...@spectrum-css/component-builder-simple@3.0.4)

**Note:** Version bump only for package @spectrum-css/component-builder-simple

<a name="3.0.3"></a>
##3.0.3
🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@3.0.2...@spectrum-css/component-builder-simple@3.0.3)

**Note:** Version bump only for package @spectrum-css/component-builder-simple

<a name="3.0.2"></a>
##3.0.2
🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@3.0.1...@spectrum-css/component-builder-simple@3.0.2)

**Note:** Version bump only for package @spectrum-css/component-builder-simple

<a name="3.0.1"></a>
##3.0.1
🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@3.0.0...@spectrum-css/component-builder-simple@3.0.1)

**Note:** Version bump only for package @spectrum-css/component-builder-simple

<a name="3.0.0"></a>
#3.0.0
🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@2.0.17...@spectrum-css/component-builder-simple@3.0.0)

\*feat(vars,expressvars)!: deprecate packages (#2244)([5eb391c](https://github.com/adobe/spectrum-css/commit/5eb391c)), closes[#2244](https://github.com/adobe/spectrum-css/issues/2244)

    	###
    	🛑 BREAKING CHANGES

    		*
    		as no additional changes have been or are planned to be made to

these legacy token packages, these assets no longer need to exist in the monorepo
structure for Spectrum CSS.

<a name="2.0.18"></a>
##2.0.18
🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@2.0.17...@spectrum-css/component-builder-simple@2.0.18)

**Note:** Version bump only for package @spectrum-css/component-builder-simple

<a name="2.0.17"></a>
##2.0.17
🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@2.0.16...@spectrum-css/component-builder-simple@2.0.17)

**Note:** Version bump only for package @spectrum-css/component-builder-simple

<a name="2.0.16"></a>
##2.0.16
🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@2.0.15...@spectrum-css/component-builder-simple@2.0.16)

**Note:** Version bump only for package @spectrum-css/component-builder-simple

<a name="2.0.15"></a>
##2.0.15
🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@2.0.14...@spectrum-css/component-builder-simple@2.0.15)

**Note:** Version bump only for package @spectrum-css/component-builder-simple

<a name="2.0.14"></a>
##2.0.14
🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@2.0.13...@spectrum-css/component-builder-simple@2.0.14)

**Note:** Version bump only for package @spectrum-css/component-builder-simple

<a name="2.0.13"></a>

## 2.0.13

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@2.0.12...@spectrum-css/component-builder-simple@2.0.13)

### 🐛 Bug fixes

- **component-builder-simple:** correct processor function inputs ([2522ddb](https://github.com/adobe/spectrum-css/commit/2522ddb))

<a name="2.0.12"></a>

## 2.0.12

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@2.0.11...@spectrum-css/component-builder-simple@2.0.12)

**Note:** Version bump only for package @spectrum-css/component-builder-simple

<a name="2.0.11"></a>

## 2.0.11

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@2.0.10...@spectrum-css/component-builder-simple@2.0.11)

**Note:** Version bump only for package @spectrum-css/component-builder-simple

<a name="2.0.10"></a>

## 2.0.10

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@2.0.9...@spectrum-css/component-builder-simple@2.0.10)

**Note:** Version bump only for package @spectrum-css/component-builder-simple

<a name="2.0.9"></a>

## 2.0.9

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@2.0.7...@spectrum-css/component-builder-simple@2.0.9)

**Note:** Version bump only for package @spectrum-css/component-builder-simple

<a name="2.0.8"></a>

## 2.0.8

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@2.0.7...@spectrum-css/component-builder-simple@2.0.8)

**Note:** Version bump only for package @spectrum-css/component-builder-simple

<a name="2.0.7"></a>

## 2.0.7

🗓 2023-03-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@2.0.6...@spectrum-css/component-builder-simple@2.0.7)

**Note:** Version bump only for package @spectrum-css/component-builder-simple

<a name="2.0.6"></a>

## 2.0.6

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@2.0.5...@spectrum-css/component-builder-simple@2.0.6)

**Note:** Version bump only for package @spectrum-css/component-builder-simple

<a name="2.0.5"></a>

## 2.0.5

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@2.0.4...@spectrum-css/component-builder-simple@2.0.5)

**Note:** Version bump only for package @spectrum-css/component-builder-simple

<a name="2.0.4"></a>

## 2.0.4

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@2.0.3...@spectrum-css/component-builder-simple@2.0.4)

### 🐛 Bug fixes

- correct RTL issues with SideNav and ActionButton ([#1611](https://github.com/adobe/spectrum-css/issues/1611)) ([54f7093](https://github.com/adobe/spectrum-css/commit/54f7093))

<a name="2.0.3"></a>

## 2.0.3

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@2.0.2...@spectrum-css/component-builder-simple@2.0.3)

**Note:** Version bump only for package @spectrum-css/component-builder-simple

<a name="2.0.2"></a>

## 2.0.2

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@2.0.0...@spectrum-css/component-builder-simple@2.0.2)

**Note:** Version bump only for package @spectrum-css/component-builder-simple

<a name="2.0.1"></a>

## 2.0.1

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@2.0.0...@spectrum-css/component-builder-simple@2.0.1)

**Note:** Version bump only for package @spectrum-css/component-builder-simple

<a name="2.0.0"></a>

# 2.0.0

🗓 2022-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder-simple@1.0.0...@spectrum-css/component-builder-simple@2.0.0)

- chore!: use latest CSS tokens dependency ([ce0a646](https://github.com/adobe/spectrum-css/commit/ce0a646))

### 🛑 BREAKING CHANGES

- moves tokens dependency ahead by two major versions

<a name="1.0.0"></a>

# 1.0.0

🗓 2022-06-16

### ✨ Features

- add simple component builder ([535126b](https://github.com/adobe/spectrum-css/commit/535126b))
- check that all defined tokens are used ([b1471d9](https://github.com/adobe/spectrum-css/commit/b1471d9))
- define --system for completeness, don't ignore usage in builder ([cae6252](https://github.com/adobe/spectrum-css/commit/cae6252))
- drop even more unused plugins ([1dd03fb](https://github.com/adobe/spectrum-css/commit/1dd03fb))
- drop support for IE in AutoPrefixer config, remove useless plugin ([7404880](https://github.com/adobe/spectrum-css/commit/7404880))
- first crack at splitinator ([206f543](https://github.com/adobe/spectrum-css/commit/206f543))
- remove logical fallbacks from simple builder ([382e196](https://github.com/adobe/spectrum-css/commit/382e196))
- split things out, combine things ([3a817bc](https://github.com/adobe/spectrum-css/commit/3a817bc))

### 🐛 Bug fixes

- correct check if all defined variables are used ([57467aa](https://github.com/adobe/spectrum-css/commit/57467aa))
- correct order of compliation, don't complain about --system ([27fc9a4](https://github.com/adobe/spectrum-css/commit/27fc9a4))
- name things right ([9fc6477](https://github.com/adobe/spectrum-css/commit/9fc6477))
- set path correct when concating things ([1a36f68](https://github.com/adobe/spectrum-css/commit/1a36f68))
- tweaks after merging in component-builder-simple ([ec8345a](https://github.com/adobe/spectrum-css/commit/ec8345a))
