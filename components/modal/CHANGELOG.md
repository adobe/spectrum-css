# Change Log

## 5.1.1-next.0

### Patch Changes

- [#2860](https://github.com/adobe/spectrum-css/pull/2860) [`bd934cc`](https://github.com/adobe/spectrum-css/commit/bd934cc9a5a43b2d453710d462a1faaa5046de08) Thanks [@marissahuysentruyt](https://github.com/marissahuysentruyt)! - Spectrum 2 Standard Dialog Migration

  This is the migration for standard dialog. The Divider component is no longer supported in S2 dialogs. In addition, some new and updated tokens are in place to update dialog corner rounding, font treatments, spacing/padding, and maximum/minimum widths. There were several new elements implemented as well, including optional header and footer content, hero/cover images, checkbox and text-only options in the footer content area.

  The `.spectrum-Dialog--small`, `.spectrum-Dialog--medium`, and `.spectrum-Dialog--large` sizing classes were deprecated and removed from the CSS in favor of the t-shirt sizes. Additionally, the spelling of the `.spectrum-Dialog--dismissable` class was corrected to `.spectrum-Dialog--dismissible`.

  Mod properties are either "new," have been renamed to reflect the respective dialog language, or were removed:

  _New Mods_
  `--mod-standard-dialog-spacing-title-to-header-content`
  `--mod-standard-dialog-spacing-title-to-description`
  `--mod-standard-dialog-header-content-font-size`

  _Renamed Mods_
  `--mod-dialog-confirm-small-width` > `--mod-standard-dialog-max-width-small`
  `--mod-dialog-confirm-medium-width` > `--mod-standard-dialog-max-width`
  `--mod-dialog-confirm-large-width` > `--mod-standard-dialog-max-width-large`
  `--mod-dialog-confirm-border-radius` > `--mod-standard-dialog-border-radius`
  `--mod-dialog-confirm-description-text-size` > `--mod-standard-dialog-description-font-size`
  `--mod-dialog-confirm-description-text-line-height` > `--mod-standard-dialog-description-line-height`
  `--mod-dialog-confirm-description-text-color` > `--mod-standard-dialog-description-text-color`
  `--mod-dialog-confirm-description-font-weight` > `--mod-standard-dialog-description-font-weight`
  `--mod-dialog-heading-font-weight` > `--mod-standard-dialog-heading-font-weight`
  `--mod-dialog-confirm-title-text-line-height` > `--mod-standard-dialog-heading-line-height`
  `--mod-dialog-confirm-title-text-color` > `--mod-standard-dialog-heading-text-color`
  `--mod-dialog-confirm-title-text-size` > `--mod-standard-dialog-heading-font-size`
  `--mod-dialog-confirm-hero-height` > `--mod-standard-dialog-hero-block-size`
  `--mod-dialog-min-inline-size` > `--mod-standard-dialog-min-inline-size`
  `--mod-dialog-confirm-padding-grid` > `--mod-standard-dialog-spacing-grid-padding`
  `--mod-dialog-confirm-footer-padding-top` > `--mod-standard-dialog-spacing-description-to-footer`
  `--mod-dialog-confirm-close-button-padding` > `--mod-standard-dialog-spacing-edge-to-close-button`
  `--mod-dialog-confirm-gap-size` > `--mod-standard-dialog-spacing-footer-to-button-group`

  _Removed Mods_
  `--mod-dialog-confirm-buttongroup-padding-top`
  `--mod-dialog-confirm-close-button-size`
  `--mod-dialog-confirm-description-margin`
  `--mod-dialog-confirm-description-padding`
  `--mod-dialog-confirm-divider-block-spacing-end`
  `--mod-dialog-confirm-divider-block-spacing-start`
  `--mod-dialog-confirm-divider-height`

  Modal and underlay updates

  - Modal component now uses the updated corner rounding.
  - Underlay has an updated comment that addresses the overlay-color/overlay-opacity tokens.

- Updated dependencies [[`bd934cc`](https://github.com/adobe/spectrum-css/commit/bd934cc9a5a43b2d453710d462a1faaa5046de08)]:
  - @spectrum-css/tokens@14.0.0-next.10

## 5.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="5.0.0"></a>
#5.0.0
🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@4.2.6...@spectrum-css/modal@5.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="4.2.6"></a>
##4.2.6
🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@4.2.5...@spectrum-css/modal@4.2.6)

**Note:** Version bump only for package @spectrum-css/modal

<a name="4.2.5"></a>
##4.2.5
🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@4.2.4...@spectrum-css/modal@4.2.5)

**Note:** Version bump only for package @spectrum-css/modal

<a name="4.2.4"></a>
##4.2.4
🗓
2024-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@4.2.3...@spectrum-css/modal@4.2.4)

**Note:** Version bump only for package @spectrum-css/modal

<a name="4.2.3"></a>
##4.2.3
🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@4.2.2...@spectrum-css/modal@4.2.3)

**Note:** Version bump only for package @spectrum-css/modal

<a name="4.2.2"></a>
##4.2.2
🗓
2024-02-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@4.2.1...@spectrum-css/modal@4.2.2)

**Note:** Version bump only for package @spectrum-css/modal

<a name="4.2.1"></a>
##4.2.1
🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/modal

<a name="4.2.0"></a>
#4.2.0
🗓
2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@4.1.0...@spectrum-css/modal@4.2.0)

### ✨ Features

_migrate build packages to postcss v8 ([#2460](https://github.com/adobe/spectrum-css/issues/2460))([bd6c40e](https://github.com/adobe/spectrum-css/commit/bd6c40e))_
**overlay,commons:**deprecate overlay; migrate references to commons ([#2429](https://github.com/adobe/spectrum-css/issues/2429))([7eecd96](https://github.com/adobe/spectrum-css/commit/7eecd96))

<a name="4.1.0"></a>
#4.1.0
🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@4.0.5...@spectrum-css/modal@4.1.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="4.0.5"></a>
##4.0.5
🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@4.0.4...@spectrum-css/modal@4.0.5)

**Note:** Version bump only for package @spectrum-css/modal

<a name="4.0.4"></a>
##4.0.4
🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@4.0.3...@spectrum-css/modal@4.0.4)

**Note:** Version bump only for package @spectrum-css/modal

<a name="4.0.3"></a>
##4.0.3
🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@4.0.1...@spectrum-css/modal@4.0.3)

**Note:** Version bump only for package @spectrum-css/modal

<a name="4.0.2"></a>
##4.0.2
🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@4.0.1...@spectrum-css/modal@4.0.2)

**Note:** Version bump only for package @spectrum-css/modal

<a name="4.0.1"></a>
##4.0.1
🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@4.0.0...@spectrum-css/modal@4.0.1)

**Note:** Version bump only for package @spectrum-css/modal

<a name="4.0.0"></a>
#4.0.0
🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.1.0...@spectrum-css/modal@4.0.0)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

\*feat(modal)!: diy migration (#2164)([0b83f13](https://github.com/adobe/spectrum-css/commit/0b83f13)), closes[#2164](https://github.com/adobe/spectrum-css/issues/2164)

    	###
    	🛑 BREAKING CHANGES

    		*
    		migrates Modal to use `@adobe/spectrum-tokens`

Additionally:

- feat(modal)!: migrate to spectrum tokens

- chore(tokens): add modal custom tokens

chore(modal): fixed indentation index.css

chore(modal): added mod variables

chore(modal): updated package version

chore(modal): updated css to use custom tokens for animation

chore: updated css properties

- docs(modal): regenerate mods

<a name="3.1.0"></a>
#3.1.0
🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.49...@spectrum-css/modal@3.1.0)

### 🐛 Bug fixes

- **modal:**sizing and formatting updates([137b55d](https://github.com/adobe/spectrum-css/commit/137b55d))

<a name="3.0.49"></a>
##3.0.49
🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.48...@spectrum-css/modal@3.0.49)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.48"></a>
##3.0.48
🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.47...@spectrum-css/modal@3.0.48)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.47"></a>
##3.0.47
🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.46...@spectrum-css/modal@3.0.47)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.46"></a>
##3.0.46
🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.45...@spectrum-css/modal@3.0.46)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.45"></a>
##3.0.45
🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.44...@spectrum-css/modal@3.0.45)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="3.0.44"></a>
##3.0.44
🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.43...@spectrum-css/modal@3.0.44)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.43"></a>
##3.0.43
🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.42...@spectrum-css/modal@3.0.43)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.42"></a>

## 3.0.42

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.41...@spectrum-css/modal@3.0.42)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.41"></a>

## 3.0.41

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.40...@spectrum-css/modal@3.0.41)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.40"></a>

## 3.0.40

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.39...@spectrum-css/modal@3.0.40)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.39"></a>

## 3.0.39

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.38...@spectrum-css/modal@3.0.39)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.38"></a>

## 3.0.38

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.36...@spectrum-css/modal@3.0.38)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.37"></a>

## 3.0.37

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.36...@spectrum-css/modal@3.0.37)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.36"></a>

## 3.0.36

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.34...@spectrum-css/modal@3.0.36)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.35"></a>

## 3.0.35

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.34...@spectrum-css/modal@3.0.35)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.34"></a>

## 3.0.34

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.33...@spectrum-css/modal@3.0.34)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.33"></a>

## 3.0.33

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.32...@spectrum-css/modal@3.0.33)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.32"></a>

## 3.0.32

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.31...@spectrum-css/modal@3.0.32)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.31"></a>

## 3.0.31

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.30...@spectrum-css/modal@3.0.31)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.30"></a>

## 3.0.30

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.29...@spectrum-css/modal@3.0.30)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.29"></a>

## 3.0.29

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.28...@spectrum-css/modal@3.0.29)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.28"></a>

## 3.0.28

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.27...@spectrum-css/modal@3.0.28)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.27"></a>

## 3.0.27

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.26...@spectrum-css/modal@3.0.27)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.26"></a>

## 3.0.26

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.24...@spectrum-css/modal@3.0.26)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.25"></a>

## 3.0.25

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.24...@spectrum-css/modal@3.0.25)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.24"></a>

## 3.0.24

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.23...@spectrum-css/modal@3.0.24)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.23"></a>

## 3.0.23

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.21...@spectrum-css/modal@3.0.23)

### 🐛 Bug fixes

- **modal:** prefer correct CSS value for height property ([8d152ef](https://github.com/adobe/spectrum-css/commit/8d152ef))

<a name="3.0.22"></a>

## 3.0.22

🗓 2022-06-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.21...@spectrum-css/modal@3.0.22)

### 🐛 Bug fixes

- **modal:** prefer correct CSS value for height property ([8d152ef](https://github.com/adobe/spectrum-css/commit/8d152ef))

<a name="3.0.21"></a>

## 3.0.21

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.20...@spectrum-css/modal@3.0.21)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.20"></a>

## 3.0.20

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.19...@spectrum-css/modal@3.0.20)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.19"></a>

## 3.0.19

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.18...@spectrum-css/modal@3.0.19)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.18"></a>

## 3.0.18

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.17...@spectrum-css/modal@3.0.18)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.17"></a>

## 3.0.17

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.16...@spectrum-css/modal@3.0.17)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.16"></a>

## 3.0.16

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.15...@spectrum-css/modal@3.0.16)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.15"></a>

## 3.0.15

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.14...@spectrum-css/modal@3.0.15)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.14"></a>

## 3.0.14

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.13...@spectrum-css/modal@3.0.14)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.13"></a>

## 3.0.13

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.12...@spectrum-css/modal@3.0.13)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.12"></a>

## 3.0.12

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.11...@spectrum-css/modal@3.0.12)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.11"></a>

## 3.0.11

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.9...@spectrum-css/modal@3.0.11)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

<a name="3.0.10"></a>

## 3.0.10

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.10-beta.0...@spectrum-css/modal@3.0.10)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.10-beta.0"></a>

## 3.0.10-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.9...@spectrum-css/modal@3.0.10-beta.0)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.9"></a>

## 3.0.9

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.8...@spectrum-css/modal@3.0.9)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.8"></a>

## 3.0.8

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.7...@spectrum-css/modal@3.0.8)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.7"></a>

## 3.0.7

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.6...@spectrum-css/modal@3.0.7)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.6"></a>

## 3.0.6

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.5...@spectrum-css/modal@3.0.6)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.5"></a>

## 3.0.5

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.3-alpha.3...@spectrum-css/modal@3.0.5)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="3.0.4"></a>

## 3.0.4

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.3-alpha.3...@spectrum-css/modal@3.0.4)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="3.0.3"></a>

## 3.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.3-alpha.3...@spectrum-css/modal@3.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="3.0.3-alpha.3"></a>

## 3.0.3-alpha.3

🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.3-alpha.2...@spectrum-css/modal@3.0.3-alpha.3)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.3-alpha.2"></a>

## 3.0.3-alpha.2

🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.3-alpha.1...@spectrum-css/modal@3.0.3-alpha.2)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.3-alpha.1"></a>

## 3.0.3-alpha.1

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.3-alpha.0...@spectrum-css/modal@3.0.3-alpha.1)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.3-alpha.0"></a>

## 3.0.3-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.2...@spectrum-css/modal@3.0.3-alpha.0)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.2"></a>

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.1...@spectrum-css/modal@3.0.2)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.1"></a>

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.0...@spectrum-css/modal@3.0.1)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.0"></a>

# 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.0-beta.3...@spectrum-css/modal@3.0.0)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.0-beta.3"></a>

# 3.0.0-beta.3

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.0-beta.2...@spectrum-css/modal@3.0.0-beta.3)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.0-beta.2"></a>

# 3.0.0-beta.2

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/modal@3.0.0-beta.1...@spectrum-css/modal@3.0.0-beta.2)

**Note:** Version bump only for package @spectrum-css/modal

<a name="3.0.0-beta.1"></a>

# 3.0.0-beta.1

🗓 2020-09-23

### ✨ Features

- RSP V3 Dialog ([#710](https://github.com/adobe/spectrum-css/issues/710)) ([33d6638](https://github.com/adobe/spectrum-css/commit/33d6638)), closes [rsp-v3#517](https://github.com/rsp-v3/issues/517)

### 🐛 Bug fixes

- wip fix more components ([b74dbb8](https://github.com/adobe/spectrum-css/commit/b74dbb8))
