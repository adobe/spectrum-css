# Change Log

## 6.0.0-s2-foundations.4

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`485128c`](https://github.com/adobe/spectrum-css/commit/485128ca7947acb064f31e4118044a3f7e3f88b5) Thanks [@pfulton](https://github.com/pfulton)! - Corrects a faulty regex that was negatively affecting compilation of custom properties

- Updated dependencies [[`485128c`](https://github.com/adobe/spectrum-css/commit/485128ca7947acb064f31e4118044a3f7e3f88b5)]:
  - @spectrum-css/popover@8.0.0-s2-foundations.4
  - @spectrum-css/icon@8.0.0-s2-foundations.4
  - @spectrum-css/menu@8.0.0-s2-foundations.4
  - @spectrum-css/tokens@15.0.0-s2-foundations.4

## 6.0.0-s2-foundations.3

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`6b12d37`](https://github.com/adobe/spectrum-css/commit/6b12d375c12b36f387b331fff42b24bc7c3845df) Thanks [@pfulton](https://github.com/pfulton)! - fixes a compilation issue in the tokens dist artifacts

### Patch Changes

- Updated dependencies [[`6b12d37`](https://github.com/adobe/spectrum-css/commit/6b12d375c12b36f387b331fff42b24bc7c3845df)]:
  - @spectrum-css/popover@8.0.0-s2-foundations.3
  - @spectrum-css/icon@8.0.0-s2-foundations.3
  - @spectrum-css/menu@8.0.0-s2-foundations.3
  - @spectrum-css/tokens@15.0.0-s2-foundations.3

## 6.0.0-s2-foundations.2

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`b00388b`](https://github.com/adobe/spectrum-css/commit/b00388b3ab026989f261f7bcdd77699521f45d58) Thanks [@pfulton](https://github.com/pfulton)! - Preserves `themes` folder in `dist` artifacts for easier downstream consumption

### Patch Changes

- Updated dependencies [[`b00388b`](https://github.com/adobe/spectrum-css/commit/b00388b3ab026989f261f7bcdd77699521f45d58)]:
  - @spectrum-css/popover@8.0.0-s2-foundations.2
  - @spectrum-css/icon@8.0.0-s2-foundations.2
  - @spectrum-css/menu@8.0.0-s2-foundations.2
  - @spectrum-css/tokens@15.0.0-s2-foundations.2

## 6.0.0-s2-foundations.1

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`39bbd6c`](https://github.com/adobe/spectrum-css/commit/39bbd6cbb7eac7c71515ef2417554cb115eba00e) Thanks [@pfulton](https://github.com/pfulton)! - Fixes an issue where vars.css was not being populated with the correct values

### Patch Changes

- Updated dependencies [[`39bbd6c`](https://github.com/adobe/spectrum-css/commit/39bbd6cbb7eac7c71515ef2417554cb115eba00e)]:
  - @spectrum-css/popover@8.0.0-s2-foundations.1
  - @spectrum-css/icon@8.0.0-s2-foundations.1
  - @spectrum-css/menu@8.0.0-s2-foundations.1
  - @spectrum-css/tokens@15.0.0-s2-foundations.1

## 6.0.0-s2-foundations.0

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce) Thanks [@pfulton](https://github.com/pfulton)! - S2 colors + grays foundation

### Patch Changes

- Updated dependencies [[`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce)]:
  - @spectrum-css/popover@8.0.0-s2-foundations.0
  - @spectrum-css/menu@8.0.0-s2-foundations.0
  - @spectrum-css/tokens@15.0.0-s2-foundations.0
  - @spectrum-css/icon@8.0.0-s2-foundations.0

## 5.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/popover@7.1.2
  - @spectrum-css/icon@7.1.1
  - @spectrum-css/menu@7.1.2

## 5.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/icon@>=7
  - @spectrum-css/menu@>=7
  - @spectrum-css/popover@>=7
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="5.0.0"></a>

## 5.0.0

🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.1.5...@spectrum-css/pickerbutton@5.0.0)

### ✨ Features

\*use storybook v8 ([#2604](https://github.com/adobe/spectrum-css/issues/2604))([166ab23](https://github.com/adobe/spectrum-css/commit/166ab23))

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="4.1.5"></a>

## 4.1.5

🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.1.4...@spectrum-css/pickerbutton@4.1.5)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.1.4"></a>

## 4.1.4

🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.1.3...@spectrum-css/pickerbutton@4.1.4)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.1.3"></a>

## 4.1.3

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.1.2...@spectrum-css/pickerbutton@4.1.3)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.1.2"></a>

## 4.1.2

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.1.1"></a>

## 4.1.1

🗓
2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.1.0...@spectrum-css/pickerbutton@4.1.1)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.1.0"></a>

## 4.1.0

🗓
2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.0.23...@spectrum-css/pickerbutton@4.1.0)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.0.23"></a>

## 4.0.23

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.0.22...@spectrum-css/pickerbutton@4.0.23)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.0.22"></a>

## 4.0.22

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.0.21...@spectrum-css/pickerbutton@4.0.22)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.0.21"></a>

## 4.0.21

🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.0.20...@spectrum-css/pickerbutton@4.0.21)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.0.20"></a>

## 4.0.20

🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.0.18...@spectrum-css/pickerbutton@4.0.20)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.0.19"></a>

## 4.0.19

🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.0.18...@spectrum-css/pickerbutton@4.0.19)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.0.18"></a>

## 4.0.18

🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.0.17...@spectrum-css/pickerbutton@4.0.18)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.0.17"></a>

## 4.0.17

🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.0.16...@spectrum-css/pickerbutton@4.0.17)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.0.16"></a>

## 4.0.16

🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.0.15...@spectrum-css/pickerbutton@4.0.16)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.0.15"></a>

## 4.0.15

🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.0.14...@spectrum-css/pickerbutton@4.0.15)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.0.14"></a>

## 4.0.14

🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.0.13...@spectrum-css/pickerbutton@4.0.14)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.0.13"></a>

## 4.0.13

🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.0.12...@spectrum-css/pickerbutton@4.0.13)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.0.12"></a>

## 4.0.12

🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.0.11...@spectrum-css/pickerbutton@4.0.12)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.0.11"></a>

## 4.0.11

🗓
2023-09-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.0.10...@spectrum-css/pickerbutton@4.0.11)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.0.10"></a>

## 4.0.10

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.0.9...@spectrum-css/pickerbutton@4.0.10)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.0.9"></a>

## 4.0.9

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.0.8...@spectrum-css/pickerbutton@4.0.9)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.0.8"></a>

## 4.0.8

🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.0.7...@spectrum-css/pickerbutton@4.0.8)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="4.0.7"></a>

## 4.0.7

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.0.6...@spectrum-css/pickerbutton@4.0.7)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.0.6"></a>

## 4.0.6

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.0.4...@spectrum-css/pickerbutton@4.0.6)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.0.5"></a>

## 4.0.5

🗓
2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.0.4...@spectrum-css/pickerbutton@4.0.5)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.0.4"></a>

## 4.0.4

🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.0.3...@spectrum-css/pickerbutton@4.0.4)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.0.3"></a>

## 4.0.3

🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.0.2...@spectrum-css/pickerbutton@4.0.3)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.0.2"></a>

## 4.0.2

🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.0.1...@spectrum-css/pickerbutton@4.0.2)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.0.1"></a>

## 4.0.1

🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@4.0.0...@spectrum-css/pickerbutton@4.0.1)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="4.0.0"></a>

## 4.0.0

🗓
2023-07-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.34...@spectrum-css/pickerbutton@4.0.0)

\*feat(pickerbutton)!: migrate to use spectrum tokens (#1940)([ad6051d](https://github.com/adobe/spectrum-css/commit/ad6051d)), closes[#1940](https://github.com/adobe/spectrum-css/issues/1940)

    	###
    	🛑 BREAKING CHANGES

    		*
    		migrates the Picker Button component to use `@adobe/spectrum-tokens`

- feat(pickerbutton)!: update to use tokens

- feat(pickerbutton): updating tokens

- chore(pickerbutton): move css from generated to index

- feat(pickerbutton): updating with tokens

- docs(pickerbutton): update docs html to correct icon sizes

- refactor(pickerbutton): fixing variable names and tokens

- chore(pickerbutton): update story

- chore(pickerbutton): update storybook controls and template

- chore(pickerbutton): adding more storybook stories for express, quiet etc

- fix(pickerbutton): fixing icon color

- chore(pickerbutton): reset yarn file

- chore: reset yarn file

- refactor(pickerbutton): fix button fill padding calculations

- chore(pickerbutton): remove invalid and isKeyboardFocused variants

- chore(pickerbutton): prevent focused and open when disabled

- fix(pickerbutton): fix disabled hover

update mods

- fix(searchwithin): pass through mod for picker button border color

- chore(pickerbutton): bumping up tokens release

- chore(pickerbutton): update token peer dependency

- fix(searchwithin): update searchwithin story to match docs site

use picker instead of pickerbutton
remove extra border

- chore(pickerbutton): manual version increase for beta release

- chore(pickerbutton): remove pickerbutton-generated css

- fix(pickerbutton): remove icononly class and remove padding from uiicononly

removes padding from uiicononly class to allow for larger icons in slots

- fix(pickerbutton): explicitly add box-sizing border-box

- fix(pickerbutton): fix icon size

- chore(pickerbutton): manual version increase for beta release

<a name="3.0.34"></a>

## 3.0.34

🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.33...@spectrum-css/pickerbutton@3.0.34)

### 🐛 Bug fixes

\*icon sizing in Storybook story templates ([#2037](https://github.com/adobe/spectrum-css/issues/2037))([c90c8a3](https://github.com/adobe/spectrum-css/commit/c90c8a3))

<a name="3.0.33"></a>

## 3.0.33

🗓
2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.32...@spectrum-css/pickerbutton@3.0.33)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.32"></a>

## 3.0.32

🗓
2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.31...@spectrum-css/pickerbutton@3.0.32)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.31"></a>

## 3.0.31

🗓
2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.30...@spectrum-css/pickerbutton@3.0.31)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.30"></a>

## 3.0.30

🗓
2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.29...@spectrum-css/pickerbutton@3.0.30)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.29"></a>

## 3.0.29

🗓
2023-06-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.28...@spectrum-css/pickerbutton@3.0.29)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.28"></a>

## 3.0.28

🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.27...@spectrum-css/pickerbutton@3.0.28)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.27"></a>

## 3.0.27

🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.26...@spectrum-css/pickerbutton@3.0.27)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.26"></a>

## 3.0.26

🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.25...@spectrum-css/pickerbutton@3.0.26)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="3.0.25"></a>

## 3.0.25

🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.24...@spectrum-css/pickerbutton@3.0.25)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.24"></a>

## 3.0.24

🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.23...@spectrum-css/pickerbutton@3.0.24)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.23"></a>

## 3.0.23

🗓 2023-05-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.22...@spectrum-css/pickerbutton@3.0.23)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.22"></a>

## 3.0.22

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.21...@spectrum-css/pickerbutton@3.0.22)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.21"></a>

## 3.0.21

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.20...@spectrum-css/pickerbutton@3.0.21)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.20"></a>

## 3.0.20

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.19...@spectrum-css/pickerbutton@3.0.20)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.19"></a>

## 3.0.19

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.18...@spectrum-css/pickerbutton@3.0.19)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.18"></a>

## 3.0.18

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.17...@spectrum-css/pickerbutton@3.0.18)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.17"></a>

## 3.0.17

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.16...@spectrum-css/pickerbutton@3.0.17)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.16"></a>

## 3.0.16

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.15...@spectrum-css/pickerbutton@3.0.16)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.15"></a>

## 3.0.15

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.14...@spectrum-css/pickerbutton@3.0.15)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.14"></a>

## 3.0.14

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.13...@spectrum-css/pickerbutton@3.0.14)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.13"></a>

## 3.0.13

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.12...@spectrum-css/pickerbutton@3.0.13)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.12"></a>

## 3.0.12

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.11...@spectrum-css/pickerbutton@3.0.12)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.11"></a>

## 3.0.11

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.10...@spectrum-css/pickerbutton@3.0.11)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.10"></a>

## 3.0.10

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.8...@spectrum-css/pickerbutton@3.0.10)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.9"></a>

## 3.0.9

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.8...@spectrum-css/pickerbutton@3.0.9)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.8"></a>

## 3.0.8

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.7...@spectrum-css/pickerbutton@3.0.8)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.7"></a>

## 3.0.7

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.6...@spectrum-css/pickerbutton@3.0.7)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.6"></a>

## 3.0.6

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.5...@spectrum-css/pickerbutton@3.0.6)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.5"></a>

## 3.0.5

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.4...@spectrum-css/pickerbutton@3.0.5)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.4"></a>

## 3.0.4

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.2...@spectrum-css/pickerbutton@3.0.4)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.3"></a>

## 3.0.3

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.2...@spectrum-css/pickerbutton@3.0.3)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.2"></a>

## 3.0.2

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.1...@spectrum-css/pickerbutton@3.0.2)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.1"></a>

## 3.0.1

🗓 2023-03-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@3.0.0...@spectrum-css/pickerbutton@3.0.1)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="3.0.0"></a>

## 3.0.0

🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@2.0.12...@spectrum-css/pickerbutton@3.0.0)

- refactor(textfield)!: migrate spectrum tokens (#1544) ([1723f01](https://github.com/adobe/spectrum-css/commit/1723f01)), closes [#1544](https://github.com/adobe/spectrum-css/issues/1544)

### 🛑 BREAKING CHANGES

- migrates textfield to spectrum tokens

* Updates to latest tokens package
* WHCM added
* Focus state and dependency fixes
* Leveraging CSS grid for help text placement and character count

- removes placeholder from stepper inputs

- feat(stepper): add hideStepper control to fix border styling issue
- refactor(stepper): adding native pseudo class styles
- refactor(stepper): add support for invalid textfield styling

<a name="2.0.13-beta.0"></a>

## 2.0.13-beta.0

🗓 2023-03-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@2.0.12...@spectrum-css/pickerbutton@2.0.13-beta.0)

### 🐛 Bug fixes

- **textfield:** remove zero margin from pickerbutton ([42a81b5](https://github.com/adobe/spectrum-css/commit/42a81b5))

<a name="2.0.12"></a>

## 2.0.12

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@2.0.11...@spectrum-css/pickerbutton@2.0.12)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="2.0.11"></a>

## 2.0.11

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@2.0.10...@spectrum-css/pickerbutton@2.0.11)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="2.0.10"></a>

## 2.0.10

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@2.0.9...@spectrum-css/pickerbutton@2.0.10)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="2.0.9"></a>

## 2.0.9

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@2.0.8...@spectrum-css/pickerbutton@2.0.9)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="2.0.8"></a>

## 2.0.8

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@2.0.7...@spectrum-css/pickerbutton@2.0.8)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="2.0.7"></a>

## 2.0.7

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@2.0.6...@spectrum-css/pickerbutton@2.0.7)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="2.0.6"></a>

## 2.0.6

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@2.0.5...@spectrum-css/pickerbutton@2.0.6)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="2.0.5"></a>

## 2.0.5

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@2.0.4...@spectrum-css/pickerbutton@2.0.5)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="2.0.4"></a>

## 2.0.4

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@2.0.2...@spectrum-css/pickerbutton@2.0.4)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="2.0.3"></a>

## 2.0.3

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@2.0.2...@spectrum-css/pickerbutton@2.0.3)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="2.0.2"></a>

## 2.0.2

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@2.0.1...@spectrum-css/pickerbutton@2.0.2)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="2.0.1"></a>

## 2.0.1

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@2.0.0...@spectrum-css/pickerbutton@2.0.1)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="2.0.0"></a>

## 2.0.0

🗓 2022-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@1.1.22...@spectrum-css/pickerbutton@2.0.0)

- refactor(infieldbutton,inputgroup,pickerbutton)!: drop loudness api ([c97d40e](https://github.com/adobe/spectrum-css/commit/c97d40e))
- refactor(pickerbutton)!: replace medium loudness with quiet ([6e87687](https://github.com/adobe/spectrum-css/commit/6e87687))
- refactor(pickerbutton)!: remove loudness levels ([3fc182a](https://github.com/adobe/spectrum-css/commit/3fc182a))

### 🛑 BREAKING CHANGES

- remove high loudness selectors from pickerbutton, apply quiet background color from inputgroup, change loudness api to quiet for infieldbutton
- replaces `medium` loudness with `quiet`
- refactor spectrum-PickerButton--high to use base spectrum-PickerButton styles

<a name="1.1.22"></a>

## 1.1.22

🗓 2022-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@1.1.21...@spectrum-css/pickerbutton@1.1.22)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="1.1.21"></a>

## 1.1.21

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@1.1.19...@spectrum-css/pickerbutton@1.1.21)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="1.1.20"></a>

## 1.1.20

🗓 2022-06-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@1.1.19...@spectrum-css/pickerbutton@1.1.20)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="1.1.19"></a>

## 1.1.19

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@1.1.18...@spectrum-css/pickerbutton@1.1.19)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="1.1.18"></a>

## 1.1.18

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@1.1.17...@spectrum-css/pickerbutton@1.1.18)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="1.1.17"></a>

## 1.1.17

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@1.1.16...@spectrum-css/pickerbutton@1.1.17)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="1.1.16"></a>

## 1.1.16

🗓 2022-04-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@1.1.15...@spectrum-css/pickerbutton@1.1.16)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="1.1.15"></a>

## 1.1.15

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@1.1.14...@spectrum-css/pickerbutton@1.1.15)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="1.1.14"></a>

## 1.1.14

🗓 2022-03-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@1.1.13...@spectrum-css/pickerbutton@1.1.14)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="1.1.13"></a>

## 1.1.13

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@1.1.12...@spectrum-css/pickerbutton@1.1.13)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="1.1.12"></a>

## 1.1.12

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@1.1.11...@spectrum-css/pickerbutton@1.1.12)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="1.1.11"></a>

## 1.1.11

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@1.1.10...@spectrum-css/pickerbutton@1.1.11)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="1.1.10"></a>

## 1.1.10

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@1.1.9...@spectrum-css/pickerbutton@1.1.10)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="1.1.9"></a>

## 1.1.9

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@1.1.8...@spectrum-css/pickerbutton@1.1.9)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="1.1.8"></a>

## 1.1.8

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@1.1.7...@spectrum-css/pickerbutton@1.1.8)

### 🐛 Bug fixes

- correct PickerButton icon sizing, add RTL support, fix rounding ([631cd32](https://github.com/adobe/spectrum-css/commit/631cd32))

<a name="1.1.7"></a>

## 1.1.7

🗓 2022-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@1.1.6...@spectrum-css/pickerbutton@1.1.7)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="1.1.6"></a>

## 1.1.6

🗓 2022-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@1.1.5...@spectrum-css/pickerbutton@1.1.6)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="1.1.5"></a>

## 1.1.5

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@1.1.4...@spectrum-css/pickerbutton@1.1.5)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="1.1.4"></a>

## 1.1.4

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@1.1.2...@spectrum-css/pickerbutton@1.1.4)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

<a name="1.1.3"></a>

## 1.1.3

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@1.1.3-beta.0...@spectrum-css/pickerbutton@1.1.3)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="1.1.3-beta.0"></a>

## 1.1.3-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@1.1.2...@spectrum-css/pickerbutton@1.1.3-beta.0)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="1.1.2"></a>

## 1.1.2

🗓 2021-12-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@1.1.1...@spectrum-css/pickerbutton@1.1.2)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="1.1.1"></a>

## 1.1.1

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/pickerbutton@1.1.0...@spectrum-css/pickerbutton@1.1.1)

**Note:** Version bump only for package @spectrum-css/pickerbutton

<a name="1.1.0"></a>

## 1.1.0

🗓 2021-11-16

### ✨ Features

- add PickerButton ([7d720a6](https://github.com/adobe/spectrum-css/commit/7d720a6))
