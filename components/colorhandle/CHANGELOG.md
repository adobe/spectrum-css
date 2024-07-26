# Change Log

## 9.0.0-s2-foundations.10

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`0844aad`](https://github.com/adobe/spectrum-css/commit/0844aadba2fefb844a66370ff6e9b4704f6c1543) Thanks [@pfulton](https://github.com/pfulton)! - Fixes to index.css imports to ensure appropriate system mappings get loaded

### Patch Changes

- Updated dependencies [[`0844aad`](https://github.com/adobe/spectrum-css/commit/0844aadba2fefb844a66370ff6e9b4704f6c1543)]:
  - @spectrum-css/opacitycheckerboard@3.0.0-s2-foundations.10
  - @spectrum-css/colorloupe@6.0.0-s2-foundations.10
  - @spectrum-css/tokens@15.0.0-s2-foundations.10

## 9.0.0-s2-foundations.9

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`84c8721`](https://github.com/adobe/spectrum-css/commit/84c87212ccb37c887225eaff28e84d9f8e608e09) Thanks [@pfulton](https://github.com/pfulton)! - Push out the latest release to the components

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`0a0dace`](https://github.com/adobe/spectrum-css/commit/0a0dacec163234bc73961ef17826cdc33765d9df) Thanks [@pfulton](https://github.com/pfulton)! - Across the board version update to latest build system state

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`681ba47`](https://github.com/adobe/spectrum-css/commit/681ba478c1259d0bbb183670f3188538ec3bee1d) Thanks [@pfulton](https://github.com/pfulton)! - Doing a widespread release on all packages to ensure the latest compiled CSS is published.

- Updated dependencies [[`681ba47`](https://github.com/adobe/spectrum-css/commit/681ba478c1259d0bbb183670f3188538ec3bee1d), [`84c8721`](https://github.com/adobe/spectrum-css/commit/84c87212ccb37c887225eaff28e84d9f8e608e09), [`0a0dace`](https://github.com/adobe/spectrum-css/commit/0a0dacec163234bc73961ef17826cdc33765d9df)]:
  - @spectrum-css/opacitycheckerboard@3.0.0-s2-foundations.9
  - @spectrum-css/colorloupe@6.0.0-s2-foundations.9
  - @spectrum-css/tokens@15.0.0-s2-foundations.9

## 9.0.0-s2-foundations.8

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`2633985`](https://github.com/adobe/spectrum-css/commit/2633985775ef5a8fad929e275e55e99b75b10959) Thanks [@pfulton](https://github.com/pfulton)! - Update system property tooling (splitinator) to leverage the selector parser

### Patch Changes

- Updated dependencies [[`2633985`](https://github.com/adobe/spectrum-css/commit/2633985775ef5a8fad929e275e55e99b75b10959)]:
  - @spectrum-css/opacitycheckerboard@3.0.0-s2-foundations.8
  - @spectrum-css/colorloupe@6.0.0-s2-foundations.8
  - @spectrum-css/tokens@15.0.0-s2-foundations.8

## 9.0.0-s2-foundations.7

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`24a51cc`](https://github.com/adobe/spectrum-css/commit/24a51cc3b682a06a5133c4f5bf72c11a2337ee22) Thanks [@pfulton](https://github.com/pfulton)! - Revert themes asset naming to simplify code review; bug fixes in custom property loading from theme assets

### Patch Changes

- Updated dependencies [[`24a51cc`](https://github.com/adobe/spectrum-css/commit/24a51cc3b682a06a5133c4f5bf72c11a2337ee22)]:
  - @spectrum-css/opacitycheckerboard@3.0.0-s2-foundations.7
  - @spectrum-css/colorloupe@6.0.0-s2-foundations.7
  - @spectrum-css/tokens@15.0.0-s2-foundations.7

## 9.0.0-s2-foundations.6

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`4d88749`](https://github.com/adobe/spectrum-css/commit/4d887492f98f1f505535680bfb0baa06d24460a0) Thanks [@pfulton](https://github.com/pfulton)! - Inject missing tokens into theme files and adjust logic in the splitinator tool to replace nested variable references to the new system mappings

- Updated dependencies [[`130e137`](https://github.com/adobe/spectrum-css/commit/130e1372b223641efe0a3a23c83ff1d01a70bf1d), [`4d88749`](https://github.com/adobe/spectrum-css/commit/4d887492f98f1f505535680bfb0baa06d24460a0)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.6
  - @spectrum-css/opacitycheckerboard@3.0.0-s2-foundations.6
  - @spectrum-css/colorloupe@6.0.0-s2-foundations.6

## 9.0.0-s2-foundations.5

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`de1d39f`](https://github.com/adobe/spectrum-css/commit/de1d39fdedc297032735acf97d0f87b6f2e45f50) Thanks [@pfulton](https://github.com/pfulton)! - Fix to how the system mapped custom property names are generated; adding support for pseudo functions, combinators, and complex selectors

- Updated dependencies [[`de1d39f`](https://github.com/adobe/spectrum-css/commit/de1d39fdedc297032735acf97d0f87b6f2e45f50)]:
  - @spectrum-css/opacitycheckerboard@3.0.0-s2-foundations.5
  - @spectrum-css/colorloupe@6.0.0-s2-foundations.5
  - @spectrum-css/tokens@15.0.0-s2-foundations.5

## 9.0.0-s2-foundations.4

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`485128c`](https://github.com/adobe/spectrum-css/commit/485128ca7947acb064f31e4118044a3f7e3f88b5) Thanks [@pfulton](https://github.com/pfulton)! - Corrects a faulty regex that was negatively affecting compilation of custom properties

- Updated dependencies [[`485128c`](https://github.com/adobe/spectrum-css/commit/485128ca7947acb064f31e4118044a3f7e3f88b5)]:
  - @spectrum-css/opacitycheckerboard@3.0.0-s2-foundations.4
  - @spectrum-css/colorloupe@6.0.0-s2-foundations.4
  - @spectrum-css/tokens@15.0.0-s2-foundations.4

## 9.0.0-s2-foundations.3

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`6b12d37`](https://github.com/adobe/spectrum-css/commit/6b12d375c12b36f387b331fff42b24bc7c3845df) Thanks [@pfulton](https://github.com/pfulton)! - fixes a compilation issue in the tokens dist artifacts

### Patch Changes

- Updated dependencies [[`6b12d37`](https://github.com/adobe/spectrum-css/commit/6b12d375c12b36f387b331fff42b24bc7c3845df)]:
  - @spectrum-css/opacitycheckerboard@3.0.0-s2-foundations.3
  - @spectrum-css/colorloupe@6.0.0-s2-foundations.3
  - @spectrum-css/tokens@15.0.0-s2-foundations.3

## 9.0.0-s2-foundations.2

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`b00388b`](https://github.com/adobe/spectrum-css/commit/b00388b3ab026989f261f7bcdd77699521f45d58) Thanks [@pfulton](https://github.com/pfulton)! - Preserves `themes` folder in `dist` artifacts for easier downstream consumption

### Patch Changes

- Updated dependencies [[`b00388b`](https://github.com/adobe/spectrum-css/commit/b00388b3ab026989f261f7bcdd77699521f45d58)]:
  - @spectrum-css/opacitycheckerboard@3.0.0-s2-foundations.2
  - @spectrum-css/colorloupe@6.0.0-s2-foundations.2
  - @spectrum-css/tokens@15.0.0-s2-foundations.2

## 9.0.0-s2-foundations.1

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`39bbd6c`](https://github.com/adobe/spectrum-css/commit/39bbd6cbb7eac7c71515ef2417554cb115eba00e) Thanks [@pfulton](https://github.com/pfulton)! - Fixes an issue where vars.css was not being populated with the correct values

### Patch Changes

- Updated dependencies [[`39bbd6c`](https://github.com/adobe/spectrum-css/commit/39bbd6cbb7eac7c71515ef2417554cb115eba00e)]:
  - @spectrum-css/opacitycheckerboard@3.0.0-s2-foundations.1
  - @spectrum-css/colorloupe@6.0.0-s2-foundations.1
  - @spectrum-css/tokens@15.0.0-s2-foundations.1

## 9.0.0-s2-foundations.0

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce) Thanks [@pfulton](https://github.com/pfulton)! - S2 colors + grays foundation

### Patch Changes

- Updated dependencies [[`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.0
  - @spectrum-css/colorloupe@6.0.0-s2-foundations.0
  - @spectrum-css/opacitycheckerboard@3.0.0-s2-foundations.0

## 8.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/opacitycheckerboard@2.1.1
  - @spectrum-css/colorloupe@5.1.1

## 8.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/colorloupe@>=5
  - @spectrum-css/opacitycheckerboard@>=2
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="8.0.0"></a>

## 8.0.0

🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@7.1.4...@spectrum-css/colorhandle@8.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="7.1.4"></a>

## 7.1.4

🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@7.1.3...@spectrum-css/colorhandle@7.1.4)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="7.1.3"></a>

## 7.1.3

🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@7.1.2...@spectrum-css/colorhandle@7.1.3)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="7.1.2"></a>

## 7.1.2

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@7.1.1...@spectrum-css/colorhandle@7.1.2)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="7.1.1"></a>

## 7.1.1

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="7.1.0"></a>

## 7.1.0

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@7.0.17...@spectrum-css/colorhandle@7.1.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="7.0.17"></a>

## 7.0.17

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@7.0.16...@spectrum-css/colorhandle@7.0.17)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="7.0.16"></a>

## 7.0.16

🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@7.0.15...@spectrum-css/colorhandle@7.0.16)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="7.0.15"></a>

## 7.0.15

🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@7.0.13...@spectrum-css/colorhandle@7.0.15)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="7.0.14"></a>

## 7.0.14

🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@7.0.13...@spectrum-css/colorhandle@7.0.14)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="7.0.13"></a>

## 7.0.13

🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@7.0.12...@spectrum-css/colorhandle@7.0.13)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="7.0.12"></a>

## 7.0.12

🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@7.0.11...@spectrum-css/colorhandle@7.0.12)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="7.0.11"></a>

## 7.0.11

🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@7.0.10...@spectrum-css/colorhandle@7.0.11)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="7.0.10"></a>

## 7.0.10

🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@7.0.9...@spectrum-css/colorhandle@7.0.10)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="7.0.9"></a>

## 7.0.9

🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@7.0.8...@spectrum-css/colorhandle@7.0.9)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="7.0.8"></a>

## 7.0.8

🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@7.0.7...@spectrum-css/colorhandle@7.0.8)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="7.0.7"></a>

## 7.0.7

🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@7.0.6...@spectrum-css/colorhandle@7.0.7)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="7.0.6"></a>

## 7.0.6

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@7.0.5...@spectrum-css/colorhandle@7.0.6)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="7.0.5"></a>

## 7.0.5

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@7.0.4...@spectrum-css/colorhandle@7.0.5)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="7.0.4"></a>

## 7.0.4

🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@7.0.3...@spectrum-css/colorhandle@7.0.4)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="7.0.3"></a>

## 7.0.3

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@7.0.2...@spectrum-css/colorhandle@7.0.3)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="7.0.2"></a>

## 7.0.2

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@7.0.0...@spectrum-css/colorhandle@7.0.2)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="7.0.1"></a>

## 7.0.1

🗓
2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@7.0.0...@spectrum-css/colorhandle@7.0.1)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="7.0.0"></a>

## 7.0.0

🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@6.1.2...@spectrum-css/colorhandle@7.0.0)

\*refactor(colorhandle)!: replace focus-ring with focus-visible([3ede96d](https://github.com/adobe/spectrum-css/commit/3ede96d))

    	###
    	🛑 BREAKING CHANGES

    		*
    		use focus-visible pseudo class for focus styling

<a name="6.1.2"></a>

## 6.1.2

🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@6.1.1...@spectrum-css/colorhandle@6.1.2)

### 🐛 Bug fixes

- **colorhandle:**updates animation([0dd3b76](https://github.com/adobe/spectrum-css/commit/0dd3b76))

<a name="6.1.1"></a>

## 6.1.1

🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@6.1.0...@spectrum-css/colorhandle@6.1.1)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="6.1.0"></a>

## 6.1.0

🗓
2023-08-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@6.0.2...@spectrum-css/colorhandle@6.1.0)

### ✨ Features

- **colorhandle:**add --mod-colorhandle-hitarea-border-radius([6752132](https://github.com/adobe/spectrum-css/commit/6752132))

<a name="6.0.2"></a>

## 6.0.2

🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@6.0.1...@spectrum-css/colorhandle@6.0.2)

### 🐛 Bug fixes

- **opacitycheckboard:**add to component stories ([#2056](https://github.com/adobe/spectrum-css/issues/2056))([a1411f6](https://github.com/adobe/spectrum-css/commit/a1411f6))

<a name="6.0.1"></a>

## 6.0.1

🗓
2023-07-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@6.0.0...@spectrum-css/colorhandle@6.0.1)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="6.0.0"></a>

## 6.0.0

🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@5.0.15...@spectrum-css/colorhandle@6.0.0)

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

<a name="5.0.15"></a>

## 5.0.15

🗓
2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@5.0.14...@spectrum-css/colorhandle@5.0.15)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="5.0.14"></a>

## 5.0.14

🗓
2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@5.0.13...@spectrum-css/colorhandle@5.0.14)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="5.0.13"></a>

## 5.0.13

🗓
2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@5.0.12...@spectrum-css/colorhandle@5.0.13)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="5.0.12"></a>

## 5.0.12

🗓
2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@5.0.11...@spectrum-css/colorhandle@5.0.12)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="5.0.11"></a>

## 5.0.11

🗓
2023-06-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@5.0.10...@spectrum-css/colorhandle@5.0.11)

### 🐛 Bug fixes

- **colorloupe:**border bug ([#1958](https://github.com/adobe/spectrum-css/issues/1958))([559696f](https://github.com/adobe/spectrum-css/commit/559696f))

<a name="5.0.10"></a>

## 5.0.10

🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@5.0.9...@spectrum-css/colorhandle@5.0.10)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="5.0.9"></a>

## 5.0.9

🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@5.0.8...@spectrum-css/colorhandle@5.0.9)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="5.0.8"></a>

## 5.0.8

🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@5.0.7...@spectrum-css/colorhandle@5.0.8)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="5.0.7"></a>

## 5.0.7

🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@5.0.6...@spectrum-css/colorhandle@5.0.7)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="5.0.6"></a>

## 5.0.6

🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@5.0.5...@spectrum-css/colorhandle@5.0.6)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="5.0.5"></a>

## 5.0.5

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@5.0.4...@spectrum-css/colorhandle@5.0.5)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="5.0.4"></a>

## 5.0.4

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@5.0.3...@spectrum-css/colorhandle@5.0.4)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="5.0.3"></a>

## 5.0.3

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@5.0.2...@spectrum-css/colorhandle@5.0.3)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="5.0.2"></a>

## 5.0.2

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@5.0.1...@spectrum-css/colorhandle@5.0.2)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="5.0.1"></a>

## 5.0.1

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@5.0.0...@spectrum-css/colorhandle@5.0.1)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="5.0.0"></a>

## 5.0.0

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@4.0.11...@spectrum-css/colorhandle@5.0.0)

- chore(colorhandle, colorloupe, tokens)!: remove custom tokens (#1826) ([c41af3a](https://github.com/adobe/spectrum-css/commit/c41af3a)), closes [#1826](https://github.com/adobe/spectrum-css/issues/1826)

### 🛑 BREAKING CHANGES

- removes several Color-component related tokens from `@spectrum-css/tokens`

- chore(colorhandle): remove custom tokens
- chore(colorhandle): remove use of custom tokens
- chore(colorloupe): update tokens for colorloupe
- chore(colorhandle, colorloupe): remove comments

<a name="4.0.11"></a>

## 4.0.11

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@4.0.10...@spectrum-css/colorhandle@4.0.11)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="4.0.10"></a>

## 4.0.10

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@4.0.9...@spectrum-css/colorhandle@4.0.10)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="4.0.9"></a>

## 4.0.9

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@4.0.8...@spectrum-css/colorhandle@4.0.9)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="4.0.8"></a>

## 4.0.8

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@4.0.7...@spectrum-css/colorhandle@4.0.8)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="4.0.7"></a>

## 4.0.7

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@4.0.6...@spectrum-css/colorhandle@4.0.7)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="4.0.6"></a>

## 4.0.6

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@4.0.4...@spectrum-css/colorhandle@4.0.6)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="4.0.5"></a>

## 4.0.5

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@4.0.4...@spectrum-css/colorhandle@4.0.5)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="4.0.4"></a>

## 4.0.4

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@4.0.3...@spectrum-css/colorhandle@4.0.4)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="4.0.3"></a>

## 4.0.3

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@4.0.2...@spectrum-css/colorhandle@4.0.3)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="4.0.2"></a>

## 4.0.2

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@4.0.1...@spectrum-css/colorhandle@4.0.2)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="4.0.1"></a>

## 4.0.1

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@4.0.0...@spectrum-css/colorhandle@4.0.1)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="4.0.0"></a>

## 4.0.0

🗓 2023-04-19 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@4.0.0-beta.2...@spectrum-css/colorhandle@4.0.0)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="4.0.0-beta.2"></a>

## 4.0.0-beta.2

🗓 2023-04-19 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@3.0.6...@spectrum-css/colorhandle@4.0.0-beta.2)

- feat(colorloupe, colorhandle)!: migrate to core tokens (#1753) ([c72f147](https://github.com/adobe/spectrum-css/commit/c72f147)), closes [#1753](https://github.com/adobe/spectrum-css/issues/1753)

### 🛑 BREAKING CHANGES

- migrates both the ColorLoupe and ColorHandle components to `@adobe/spectrum-tokens`

<a name="3.0.6"></a>

## 3.0.6

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@3.0.4...@spectrum-css/colorhandle@3.0.6)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="3.0.5"></a>

## 3.0.5

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@3.0.4...@spectrum-css/colorhandle@3.0.5)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="3.0.4"></a>

## 3.0.4

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@3.0.3...@spectrum-css/colorhandle@3.0.4)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="3.0.3"></a>

## 3.0.3

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@3.0.2...@spectrum-css/colorhandle@3.0.3)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="3.0.2"></a>

## 3.0.2

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@3.0.1...@spectrum-css/colorhandle@3.0.2)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="3.0.1"></a>

## 3.0.1

🗓 2023-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@3.0.0...@spectrum-css/colorhandle@3.0.1)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="3.0.0"></a>

## 3.0.0

🗓 2023-02-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@2.0.16...@spectrum-css/colorhandle@3.0.0)

- feat(colorarea)!: migrate to core tokens (#1623) ([9b3d6fa](https://github.com/adobe/spectrum-css/commit/9b3d6fa)), closes [#1623](https://github.com/adobe/spectrum-css/issues/1623)

### 🛑 BREAKING CHANGES

- migrates ColorArea to core tokens

<a name="2.0.16"></a>

## 2.0.16

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@2.0.15...@spectrum-css/colorhandle@2.0.16)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="2.0.15"></a>

## 2.0.15

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@2.0.14...@spectrum-css/colorhandle@2.0.15)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="2.0.14"></a>

## 2.0.14

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@2.0.13...@spectrum-css/colorhandle@2.0.14)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="2.0.13"></a>

## 2.0.13

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@2.0.12...@spectrum-css/colorhandle@2.0.13)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="2.0.12"></a>

## 2.0.12

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@2.0.11...@spectrum-css/colorhandle@2.0.12)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="2.0.11"></a>

## 2.0.11

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@2.0.9...@spectrum-css/colorhandle@2.0.11)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="2.0.10"></a>

## 2.0.10

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@2.0.9...@spectrum-css/colorhandle@2.0.10)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="2.0.9"></a>

## 2.0.9

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@2.0.8...@spectrum-css/colorhandle@2.0.9)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="2.0.8"></a>

## 2.0.8

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@2.0.7...@spectrum-css/colorhandle@2.0.8)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="2.0.7"></a>

## 2.0.7

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@2.0.6...@spectrum-css/colorhandle@2.0.7)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="2.0.6"></a>

## 2.0.6

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@2.0.5...@spectrum-css/colorhandle@2.0.6)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="2.0.5"></a>

## 2.0.5

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@2.0.4...@spectrum-css/colorhandle@2.0.5)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="2.0.4"></a>

## 2.0.4

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@2.0.3...@spectrum-css/colorhandle@2.0.4)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="2.0.3"></a>

## 2.0.3

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@2.0.2...@spectrum-css/colorhandle@2.0.3)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="2.0.2"></a>

## 2.0.2

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@2.0.1...@spectrum-css/colorhandle@2.0.2)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="2.0.1"></a>

## 2.0.1

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@2.0.0...@spectrum-css/colorhandle@2.0.1)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="2.0.0"></a>

## 2.0.0

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@1.0.13...@spectrum-css/colorhandle@2.0.0)

### ✨ Features

- remove the need to add define hacks ([8c76829](https://github.com/adobe/spectrum-css/commit/8c76829))
- update ColorLoupe and ColorSlider for Express ([490c00a](https://github.com/adobe/spectrum-css/commit/490c00a))
- use --spectrum-picked-color for everything ([62e6469](https://github.com/adobe/spectrum-css/commit/62e6469))

### 🐛 Bug fixes

- correct checkerboard color, stroke around edges of loupe ([c327261](https://github.com/adobe/spectrum-css/commit/c327261))
- give the Spectrum loupe a stroke ([486b079](https://github.com/adobe/spectrum-css/commit/486b079))
- make ColorHandle and ColorSlider use the right checkerboard colors ([f7abb74](https://github.com/adobe/spectrum-css/commit/f7abb74))
- use the correct checkerboard background for Slider and Handle ([cfb2151](https://github.com/adobe/spectrum-css/commit/cfb2151))

### 🛑 BREAKING CHANGES

- You must define --spectrum-picked-color instead of setting background-color

<a name="1.0.13"></a>

## 1.0.13

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@1.0.12...@spectrum-css/colorhandle@1.0.13)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="1.0.12"></a>

## 1.0.12

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@1.0.11...@spectrum-css/colorhandle@1.0.12)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="1.0.11"></a>

## 1.0.11

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@1.0.9...@spectrum-css/colorhandle@1.0.11)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

<a name="1.0.10"></a>

## 1.0.10

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@1.0.10-beta.0...@spectrum-css/colorhandle@1.0.10)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="1.0.10-beta.0"></a>

## 1.0.10-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@1.0.9...@spectrum-css/colorhandle@1.0.10-beta.0)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="1.0.9"></a>

## 1.0.9

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@1.0.8...@spectrum-css/colorhandle@1.0.9)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="1.0.8"></a>

## 1.0.8

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@1.0.7...@spectrum-css/colorhandle@1.0.8)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="1.0.7"></a>

## 1.0.7

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@1.0.6...@spectrum-css/colorhandle@1.0.7)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="1.0.6"></a>

## 1.0.6

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@1.0.5...@spectrum-css/colorhandle@1.0.6)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="1.0.5"></a>

## 1.0.5

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@1.0.3-alpha.3...@spectrum-css/colorhandle@1.0.5)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="1.0.4"></a>

## 1.0.4

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@1.0.3-alpha.3...@spectrum-css/colorhandle@1.0.4)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="1.0.3"></a>

## 1.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@1.0.3-alpha.3...@spectrum-css/colorhandle@1.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="1.0.3-alpha.3"></a>

## 1.0.3-alpha.3

🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@1.0.3-alpha.2...@spectrum-css/colorhandle@1.0.3-alpha.3)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="1.0.3-alpha.2"></a>

## 1.0.3-alpha.2

🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@1.0.3-alpha.1...@spectrum-css/colorhandle@1.0.3-alpha.2)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="1.0.3-alpha.1"></a>

## 1.0.3-alpha.1

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@1.0.3-alpha.0...@spectrum-css/colorhandle@1.0.3-alpha.1)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="1.0.3-alpha.0"></a>

## 1.0.3-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@1.0.2...@spectrum-css/colorhandle@1.0.3-alpha.0)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="1.0.2"></a>

## 1.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@1.0.1...@spectrum-css/colorhandle@1.0.2)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="1.0.1"></a>

## 1.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@1.0.0...@spectrum-css/colorhandle@1.0.1)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="1.0.0"></a>

## 1.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@1.0.0-beta.4...@spectrum-css/colorhandle@1.0.0)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="1.0.0-beta.4"></a>

## 1.0.0-beta.4

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@1.0.0-beta.3...@spectrum-css/colorhandle@1.0.0-beta.4)

### 🐛 Bug fixes

- support high contrast mode in color components ([d4c05cb](https://github.com/adobe/spectrum-css/commit/d4c05cb))

<a name="1.0.0-beta.3"></a>

## 1.0.0-beta.3

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@1.0.0-beta.2...@spectrum-css/colorhandle@1.0.0-beta.3)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="1.0.0-beta.2"></a>

## 1.0.0-beta.2

🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/colorhandle@1.0.0-beta.1...@spectrum-css/colorhandle@1.0.0-beta.2)

**Note:** Version bump only for package @spectrum-css/colorhandle

<a name="1.0.0-beta.1"></a>

## 1.0.0-beta.1

🗓 2020-05-14

### ✨ Features

- Color Handle/Slider/Area/Wheel ([#673](https://github.com/adobe/spectrum-css/issues/673)) ([bcd2bf1](https://github.com/adobe/spectrum-css/commit/bcd2bf1))

### 🐛 Bug fixes

- correct location of variables for ColorHandle checkerboard ([808122f](https://github.com/adobe/spectrum-css/commit/808122f))
