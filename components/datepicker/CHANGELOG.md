# Change Log

## 4.0.0-next.0

### Patch Changes

- Updated dependencies [[`bd934cc`](https://github.com/adobe/spectrum-css/commit/bd934cc9a5a43b2d453710d462a1faaa5046de08)]:
  - @spectrum-css/tokens@14.0.0-next.10
  - @spectrum-css/popover@8.0.0-next.0
  - @spectrum-css/pickerbutton@6.0.0-next.0

## 3.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/calendar@>=5
  - @spectrum-css/pickerbutton@>=5
  - @spectrum-css/popover@>=7
  - @spectrum-css/textfield@>=7
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="3.0.0"></a>
#3.0.0
🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@2.1.4...@spectrum-css/datepicker@3.0.0)

### ✨ Features

\*use storybook v8 ([#2604](https://github.com/adobe/spectrum-css/issues/2604))([166ab23](https://github.com/adobe/spectrum-css/commit/166ab23))

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="2.1.4"></a>
##2.1.4
🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@2.1.3...@spectrum-css/datepicker@2.1.4)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="2.1.3"></a>
##2.1.3
🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@2.1.2...@spectrum-css/datepicker@2.1.3)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="2.1.2"></a>
##2.1.2
🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@2.1.1...@spectrum-css/datepicker@2.1.2)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="2.1.1"></a>
##2.1.1
🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="2.1.0"></a>
#2.1.0
🗓
2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@2.0.5...@spectrum-css/datepicker@2.1.0)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="2.0.5"></a>
##2.0.5
🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@2.0.4...@spectrum-css/datepicker@2.0.5)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="2.0.4"></a>
##2.0.4
🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@2.0.3...@spectrum-css/datepicker@2.0.4)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="2.0.3"></a>
##2.0.3
🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@2.0.2...@spectrum-css/datepicker@2.0.3)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="2.0.2"></a>
##2.0.2
🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@2.0.0...@spectrum-css/datepicker@2.0.2)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="2.0.1"></a>
##2.0.1
🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@2.0.0...@spectrum-css/datepicker@2.0.1)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="2.0.0"></a>
#2.0.0
🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.55...@spectrum-css/datepicker@2.0.0)

\*refactor(datepicker)!: migrate to use spectrum-tokens (#2185)([7de0da2](https://github.com/adobe/spectrum-css/commit/7de0da2)), closes[#2185](https://github.com/adobe/spectrum-css/issues/2185)

    	###
    	🛑 BREAKING CHANGES

    		*
    		migrates DatePicker to use `@adobe/spectrum-tokens`

Additionally:

- chore(datepicker): build changes

- chore(datepicker): use new tokens wip 1

- chore(datepicker): use new tokens and mods

- fix(datepicker): invalid icon overlap

- fix(datepicker): correct package.json

- chore(datepicker): add custom tokens for scale

- fix(datepicker): invalid input padding end

- chore(datepicker): corrects quiet variant widths

- chore(datepicker): refactor index.css

- feat(datepicker): add quiet variant to storybook

- feat(datepicker): adds whcm

- refactor(datepicker): clean up css

- chore(datepicker): use themes file over custom tokens

- chore(datepicker): update popover dependency

- docs(datepicker): add non range invalid to docs

- chore(datepicker): update padding inline for non range

- chore(datepicker): clean up css

- feat(Datepicker): btn border color match input

- chore(datepicker): remove unneeded classes

- feat(datepicker): enabled readonly in storybook

- feat(datepicker): add range to stories

- chore(datepicker): add themes to template

- chore(datepicker): address PR feedback

- chore(datepicker): rename combobox custom property

- chore(datepicker): border radius custom properties

- chore(datepicker): mods updates

- chore(datepicker): remove unneeded custom token

- chore(datepicker): regen mods.md

- fix(datepicker): update package json

- refactor(datepicker): css for invalid icon position

- refactor(datepicker): storybook improvements

- fix(datepicker): add back isValid and isRequired

<a name="1.0.55"></a>
##1.0.55
🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.54...@spectrum-css/datepicker@1.0.55)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.54"></a>
##1.0.54
🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.53...@spectrum-css/datepicker@1.0.54)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.53"></a>
##1.0.53
🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.52...@spectrum-css/datepicker@1.0.53)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.52"></a>
##1.0.52
🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.51...@spectrum-css/datepicker@1.0.52)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.51"></a>
##1.0.51
🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.50...@spectrum-css/datepicker@1.0.51)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.50"></a>
##1.0.50
🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.49...@spectrum-css/datepicker@1.0.50)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.49"></a>
##1.0.49
🗓
2023-09-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.48...@spectrum-css/datepicker@1.0.49)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.48"></a>
##1.0.48
🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.47...@spectrum-css/datepicker@1.0.48)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.47"></a>
##1.0.47
🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.46...@spectrum-css/datepicker@1.0.47)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.46"></a>
##1.0.46
🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.45...@spectrum-css/datepicker@1.0.46)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.45"></a>
##1.0.45
🗓
2023-08-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.44...@spectrum-css/datepicker@1.0.45)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="1.0.44"></a>
##1.0.44
🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.43...@spectrum-css/datepicker@1.0.44)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.43"></a>
##1.0.43
🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.41...@spectrum-css/datepicker@1.0.43)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.42"></a>
##1.0.42
🗓
2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.41...@spectrum-css/datepicker@1.0.42)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.41"></a>
##1.0.41
🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.40...@spectrum-css/datepicker@1.0.41)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.40"></a>
##1.0.40
🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.39...@spectrum-css/datepicker@1.0.40)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.39"></a>
##1.0.39
🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.38...@spectrum-css/datepicker@1.0.39)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.38"></a>
##1.0.38
🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.37...@spectrum-css/datepicker@1.0.38)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.37"></a>
##1.0.37
🗓
2023-07-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.36...@spectrum-css/datepicker@1.0.37)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.36"></a>
##1.0.36
🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.35...@spectrum-css/datepicker@1.0.36)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.35"></a>
##1.0.35
🗓
2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.34...@spectrum-css/datepicker@1.0.35)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.34"></a>
##1.0.34
🗓
2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.33...@spectrum-css/datepicker@1.0.34)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.33"></a>
##1.0.33
🗓
2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.32...@spectrum-css/datepicker@1.0.33)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.32"></a>
##1.0.32
🗓
2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.31...@spectrum-css/datepicker@1.0.32)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.31"></a>
##1.0.31
🗓
2023-06-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.30...@spectrum-css/datepicker@1.0.31)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.30"></a>
##1.0.30
🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.29...@spectrum-css/datepicker@1.0.30)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.29"></a>
##1.0.29
🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.28...@spectrum-css/datepicker@1.0.29)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.28"></a>
##1.0.28
🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.27...@spectrum-css/datepicker@1.0.28)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="1.0.27"></a>
##1.0.27
🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.26...@spectrum-css/datepicker@1.0.27)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.26"></a>
##1.0.26
🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.25...@spectrum-css/datepicker@1.0.26)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.25"></a>

## 1.0.25

🗓 2023-05-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.24...@spectrum-css/datepicker@1.0.25)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.24"></a>

## 1.0.24

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.23...@spectrum-css/datepicker@1.0.24)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.23"></a>

## 1.0.23

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.22...@spectrum-css/datepicker@1.0.23)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.22"></a>

## 1.0.22

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.21...@spectrum-css/datepicker@1.0.22)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.21"></a>

## 1.0.21

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.20...@spectrum-css/datepicker@1.0.21)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.20"></a>

## 1.0.20

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.19...@spectrum-css/datepicker@1.0.20)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.19"></a>

## 1.0.19

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.18...@spectrum-css/datepicker@1.0.19)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.18"></a>

## 1.0.18

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.17...@spectrum-css/datepicker@1.0.18)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.17"></a>

## 1.0.17

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.16...@spectrum-css/datepicker@1.0.17)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.16"></a>

## 1.0.16

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.15...@spectrum-css/datepicker@1.0.16)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.15"></a>

## 1.0.15

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.14...@spectrum-css/datepicker@1.0.15)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.14"></a>

## 1.0.14

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.13...@spectrum-css/datepicker@1.0.14)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.13"></a>

## 1.0.13

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.12...@spectrum-css/datepicker@1.0.13)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.12"></a>

## 1.0.12

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.11...@spectrum-css/datepicker@1.0.12)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.11"></a>

## 1.0.11

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.9...@spectrum-css/datepicker@1.0.11)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.10"></a>

## 1.0.10

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.9...@spectrum-css/datepicker@1.0.10)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.9"></a>

## 1.0.9

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.8...@spectrum-css/datepicker@1.0.9)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.8"></a>

## 1.0.8

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.7...@spectrum-css/datepicker@1.0.8)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.7"></a>

## 1.0.7

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.6...@spectrum-css/datepicker@1.0.7)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.6"></a>

## 1.0.6

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.5...@spectrum-css/datepicker@1.0.6)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.5"></a>

## 1.0.5

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.4...@spectrum-css/datepicker@1.0.5)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.4"></a>

## 1.0.4

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.2...@spectrum-css/datepicker@1.0.4)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.3"></a>

## 1.0.3

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.2...@spectrum-css/datepicker@1.0.3)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.2"></a>

## 1.0.2

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/datepicker@1.0.1...@spectrum-css/datepicker@1.0.2)

**Note:** Version bump only for package @spectrum-css/datepicker

<a name="1.0.1"></a>

## 1.0.1

🗓 2023-03-28

**Note:** Version bump only for package @spectrum-css/datepicker
