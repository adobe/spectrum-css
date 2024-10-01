# Change Log

## 4.0.0-s2-foundations.14

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`57709c0`](https://github.com/adobe/spectrum-css/commit/57709c09f7cfddb67125fa96691ae869ff8840ca) Thanks [@pfulton](https://github.com/pfulton)! - Pull in the corner radii updates for S2

### Patch Changes

- Updated dependencies [[`57709c0`](https://github.com/adobe/spectrum-css/commit/57709c09f7cfddb67125fa96691ae869ff8840ca)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.22

## 4.0.0-s2-foundations.13

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`11a0032`](https://github.com/adobe/spectrum-css/commit/11a00323addbf28b9430d27d9cbc5f30bc851b65) Thanks [@pfulton](https://github.com/pfulton)! - Bug fixes to S1 & Express theming across all components

### Patch Changes

- Updated dependencies [[`11a0032`](https://github.com/adobe/spectrum-css/commit/11a00323addbf28b9430d27d9cbc5f30bc851b65)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.21

## 4.0.0-s2-foundations.12

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`5546ec6`](https://github.com/adobe/spectrum-css/commit/5546ec6a508eb249ede78031db22ddf5972e5c05) Thanks [@pfulton](https://github.com/pfulton)! - - Accordion: Flatten sizing variables in theme layer
  - ActionButton: Fix typo in variable name "\*-defaul-selectedt"
  - Move out rtl logical transform from theme to index.css for: calendar, pagination, treeview

### Patch Changes

- Updated dependencies [[`5546ec6`](https://github.com/adobe/spectrum-css/commit/5546ec6a508eb249ede78031db22ddf5972e5c05)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.13

## 4.0.0-s2-foundations.11

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`b0862e1`](https://github.com/adobe/spectrum-css/commit/b0862e1a5b95c19443fd919c6baf4b4ea9ba79c1) Thanks [@pfulton](https://github.com/pfulton)! - Updated build to set cssnano to discardUnused: false

### Patch Changes

- Updated dependencies [[`b0862e1`](https://github.com/adobe/spectrum-css/commit/b0862e1a5b95c19443fd919c6baf4b4ea9ba79c1)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.12

## 4.0.0-s2-foundations.10

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`0844aad`](https://github.com/adobe/spectrum-css/commit/0844aadba2fefb844a66370ff6e9b4704f6c1543) Thanks [@pfulton](https://github.com/pfulton)! - Fixes to index.css imports to ensure appropriate system mappings get loaded

### Patch Changes

- Updated dependencies [[`0844aad`](https://github.com/adobe/spectrum-css/commit/0844aadba2fefb844a66370ff6e9b4704f6c1543)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.10

## 4.0.0-s2-foundations.9

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`84c8721`](https://github.com/adobe/spectrum-css/commit/84c87212ccb37c887225eaff28e84d9f8e608e09) Thanks [@pfulton](https://github.com/pfulton)! - Push out the latest release to the components

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`0a0dace`](https://github.com/adobe/spectrum-css/commit/0a0dacec163234bc73961ef17826cdc33765d9df) Thanks [@pfulton](https://github.com/pfulton)! - Across the board version update to latest build system state

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`681ba47`](https://github.com/adobe/spectrum-css/commit/681ba478c1259d0bbb183670f3188538ec3bee1d) Thanks [@pfulton](https://github.com/pfulton)! - Doing a widespread release on all packages to ensure the latest compiled CSS is published.

- Updated dependencies [[`681ba47`](https://github.com/adobe/spectrum-css/commit/681ba478c1259d0bbb183670f3188538ec3bee1d), [`84c8721`](https://github.com/adobe/spectrum-css/commit/84c87212ccb37c887225eaff28e84d9f8e608e09), [`0a0dace`](https://github.com/adobe/spectrum-css/commit/0a0dacec163234bc73961ef17826cdc33765d9df)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.9

## 4.0.0-s2-foundations.8

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`2633985`](https://github.com/adobe/spectrum-css/commit/2633985775ef5a8fad929e275e55e99b75b10959) Thanks [@pfulton](https://github.com/pfulton)! - Update system property tooling (splitinator) to leverage the selector parser

### Patch Changes

- Updated dependencies [[`2633985`](https://github.com/adobe/spectrum-css/commit/2633985775ef5a8fad929e275e55e99b75b10959)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.8

## 4.0.0-s2-foundations.7

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`24a51cc`](https://github.com/adobe/spectrum-css/commit/24a51cc3b682a06a5133c4f5bf72c11a2337ee22) Thanks [@pfulton](https://github.com/pfulton)! - Revert themes asset naming to simplify code review; bug fixes in custom property loading from theme assets

### Patch Changes

- Updated dependencies [[`24a51cc`](https://github.com/adobe/spectrum-css/commit/24a51cc3b682a06a5133c4f5bf72c11a2337ee22)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.7

## 4.0.0-s2-foundations.6

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`4d88749`](https://github.com/adobe/spectrum-css/commit/4d887492f98f1f505535680bfb0baa06d24460a0) Thanks [@pfulton](https://github.com/pfulton)! - Inject missing tokens into theme files and adjust logic in the splitinator tool to replace nested variable references to the new system mappings

- Updated dependencies [[`130e137`](https://github.com/adobe/spectrum-css/commit/130e1372b223641efe0a3a23c83ff1d01a70bf1d), [`4d88749`](https://github.com/adobe/spectrum-css/commit/4d887492f98f1f505535680bfb0baa06d24460a0)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.6

## 4.0.0-s2-foundations.5

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`de1d39f`](https://github.com/adobe/spectrum-css/commit/de1d39fdedc297032735acf97d0f87b6f2e45f50) Thanks [@pfulton](https://github.com/pfulton)! - Fix to how the system mapped custom property names are generated; adding support for pseudo functions, combinators, and complex selectors

- Updated dependencies [[`de1d39f`](https://github.com/adobe/spectrum-css/commit/de1d39fdedc297032735acf97d0f87b6f2e45f50)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.5

## 4.0.0-s2-foundations.4

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`485128c`](https://github.com/adobe/spectrum-css/commit/485128ca7947acb064f31e4118044a3f7e3f88b5) Thanks [@pfulton](https://github.com/pfulton)! - Corrects a faulty regex that was negatively affecting compilation of custom properties

- Updated dependencies [[`485128c`](https://github.com/adobe/spectrum-css/commit/485128ca7947acb064f31e4118044a3f7e3f88b5)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.4

## 4.0.0-s2-foundations.3

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`6b12d37`](https://github.com/adobe/spectrum-css/commit/6b12d375c12b36f387b331fff42b24bc7c3845df) Thanks [@pfulton](https://github.com/pfulton)! - fixes a compilation issue in the tokens dist artifacts

### Patch Changes

- Updated dependencies [[`6b12d37`](https://github.com/adobe/spectrum-css/commit/6b12d375c12b36f387b331fff42b24bc7c3845df)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.3

## 4.0.0-s2-foundations.2

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`b00388b`](https://github.com/adobe/spectrum-css/commit/b00388b3ab026989f261f7bcdd77699521f45d58) Thanks [@pfulton](https://github.com/pfulton)! - Preserves `themes` folder in `dist` artifacts for easier downstream consumption

### Patch Changes

- Updated dependencies [[`b00388b`](https://github.com/adobe/spectrum-css/commit/b00388b3ab026989f261f7bcdd77699521f45d58)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.2

## 4.0.0-s2-foundations.1

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`39bbd6c`](https://github.com/adobe/spectrum-css/commit/39bbd6cbb7eac7c71515ef2417554cb115eba00e) Thanks [@pfulton](https://github.com/pfulton)! - Fixes an issue where vars.css was not being populated with the correct values

### Patch Changes

- Updated dependencies [[`39bbd6c`](https://github.com/adobe/spectrum-css/commit/39bbd6cbb7eac7c71515ef2417554cb115eba00e)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.1

## 4.0.0-s2-foundations.0

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce) Thanks [@pfulton](https://github.com/pfulton)! - S2 colors + grays foundation

### Patch Changes

- Updated dependencies [[`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.0

## 3.1.4

### Patch Changes

- [#3286](https://github.com/adobe/spectrum-css/pull/3286) [`3d5c39a`](https://github.com/adobe/spectrum-css/commit/3d5c39ab4b79316563f9659eb4b19afe81f9debf) Thanks [@cdransf](https://github.com/cdransf)! - Resolves lint violations for dial by removing unused properties and moving todo comment into stylelint-disable description.

## 3.1.3

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)! - Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

## 3.1.2

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)! - Improve changeset suggestions by using exports instead of files in component packages

## 3.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

## 3.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="3.0.0"></a>

## 3.0.0

🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@2.2.4...@spectrum-css/dial@3.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="2.2.4"></a>

## 2.2.4

🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@2.2.3...@spectrum-css/dial@2.2.4)

**Note:** Version bump only for package @spectrum-css/dial

<a name="2.2.3"></a>

## 2.2.3

🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@2.2.2...@spectrum-css/dial@2.2.3)

**Note:** Version bump only for package @spectrum-css/dial

<a name="2.2.2"></a>

## 2.2.2

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@2.2.1...@spectrum-css/dial@2.2.2)

**Note:** Version bump only for package @spectrum-css/dial

<a name="2.2.1"></a>

## 2.2.1

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/dial

<a name="2.2.0"></a>

## 2.2.0

🗓
2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@2.1.0...@spectrum-css/dial@2.2.0)

**Note:** Version bump only for package @spectrum-css/dial

<a name="2.1.0"></a>

## 2.1.0

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@2.0.5...@spectrum-css/dial@2.1.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="2.0.5"></a>

## 2.0.5

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@2.0.4...@spectrum-css/dial@2.0.5)

**Note:** Version bump only for package @spectrum-css/dial

<a name="2.0.4"></a>

## 2.0.4

🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@2.0.3...@spectrum-css/dial@2.0.4)

**Note:** Version bump only for package @spectrum-css/dial

<a name="2.0.3"></a>

## 2.0.3

🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@2.0.1...@spectrum-css/dial@2.0.3)

**Note:** Version bump only for package @spectrum-css/dial

<a name="2.0.2"></a>

## 2.0.2

🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@2.0.1...@spectrum-css/dial@2.0.2)

**Note:** Version bump only for package @spectrum-css/dial

<a name="2.0.1"></a>

## 2.0.1

🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@2.0.0...@spectrum-css/dial@2.0.1)

**Note:** Version bump only for package @spectrum-css/dial

<a name="2.0.0"></a>

## 2.0.0

🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.55...@spectrum-css/dial@2.0.0)

\*feat(dial)!: migrate to use `@adobe/spectrum-tokens` (#1971)([f116b7e](https://github.com/adobe/spectrum-css/commit/f116b7e)), closes[#1971](https://github.com/adobe/spectrum-css/issues/1971)

    	###
    	🛑 BREAKING CHANGES

    		*
    		migrates the Dial component to `@adobe/spectrum-tokens`

Additionally:

- chore(dial): begin migrating from old to new tokens

- chore(dial): use latest dependencies

- feat(dial): replace vars with new values

- chore(dial): update to latest deps

- chore(dial): update dependencies

- chore(dial): finish migration

Uses correct colors & removes duplicate properties

- chore(dial): high-contrast fixes

- chore(dial): rename custom properties

- refactor(dial): focus and dragged states and SB controls

- chore(dial): address left margin issue

- chore(dial): address PR feedback

- chore(dial): address PR feedback for disabled state

- refactor(dial): use focus-visible

- chore(dial): remove disabled from tab order

- chore(dial): adds focus-visible

<a name="1.0.55"></a>

## 1.0.55

🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.54...@spectrum-css/dial@1.0.55)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.54"></a>

## 1.0.54

🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.53...@spectrum-css/dial@1.0.54)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="1.0.53"></a>

## 1.0.53

🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.52...@spectrum-css/dial@1.0.53)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.52"></a>

## 1.0.52

🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.51...@spectrum-css/dial@1.0.52)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.51"></a>

## 1.0.51

🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.50...@spectrum-css/dial@1.0.51)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.50"></a>

## 1.0.50

🗓
2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.49...@spectrum-css/dial@1.0.50)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.49"></a>

## 1.0.49

🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.48...@spectrum-css/dial@1.0.49)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.48"></a>

## 1.0.48

🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.47...@spectrum-css/dial@1.0.48)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.47"></a>

## 1.0.47

🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.46...@spectrum-css/dial@1.0.47)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="1.0.46"></a>

## 1.0.46

🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.45...@spectrum-css/dial@1.0.46)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.45"></a>

## 1.0.45

🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.44...@spectrum-css/dial@1.0.45)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.44"></a>

## 1.0.44

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.43...@spectrum-css/dial@1.0.44)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.43"></a>

## 1.0.43

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.42...@spectrum-css/dial@1.0.43)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.42"></a>

## 1.0.42

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.41...@spectrum-css/dial@1.0.42)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.41"></a>

## 1.0.41

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.40...@spectrum-css/dial@1.0.41)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.40"></a>

## 1.0.40

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.38...@spectrum-css/dial@1.0.40)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.39"></a>

## 1.0.39

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.38...@spectrum-css/dial@1.0.39)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.38"></a>

## 1.0.38

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.36...@spectrum-css/dial@1.0.38)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.37"></a>

## 1.0.37

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.36...@spectrum-css/dial@1.0.37)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.36"></a>

## 1.0.36

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.35...@spectrum-css/dial@1.0.36)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.35"></a>

## 1.0.35

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.34...@spectrum-css/dial@1.0.35)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.34"></a>

## 1.0.34

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.33...@spectrum-css/dial@1.0.34)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.33"></a>

## 1.0.33

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.32...@spectrum-css/dial@1.0.33)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.32"></a>

## 1.0.32

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.31...@spectrum-css/dial@1.0.32)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.31"></a>

## 1.0.31

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.30...@spectrum-css/dial@1.0.31)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.30"></a>

## 1.0.30

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.29...@spectrum-css/dial@1.0.30)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.29"></a>

## 1.0.29

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.28...@spectrum-css/dial@1.0.29)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.28"></a>

## 1.0.28

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.27...@spectrum-css/dial@1.0.28)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.27"></a>

## 1.0.27

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.25...@spectrum-css/dial@1.0.27)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.26"></a>

## 1.0.26

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.25...@spectrum-css/dial@1.0.26)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.25"></a>

## 1.0.25

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.24...@spectrum-css/dial@1.0.25)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.24"></a>

## 1.0.24

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.23...@spectrum-css/dial@1.0.24)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.23"></a>

## 1.0.23

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.22...@spectrum-css/dial@1.0.23)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.22"></a>

## 1.0.22

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.21...@spectrum-css/dial@1.0.22)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.21"></a>

## 1.0.21

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.20...@spectrum-css/dial@1.0.21)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.20"></a>

## 1.0.20

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.19...@spectrum-css/dial@1.0.20)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.19"></a>

## 1.0.19

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.18...@spectrum-css/dial@1.0.19)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.18"></a>

## 1.0.18

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.17...@spectrum-css/dial@1.0.18)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.17"></a>

## 1.0.17

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.16...@spectrum-css/dial@1.0.17)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.16"></a>

## 1.0.16

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.15...@spectrum-css/dial@1.0.16)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.15"></a>

## 1.0.15

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.14...@spectrum-css/dial@1.0.15)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.14"></a>

## 1.0.14

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.13...@spectrum-css/dial@1.0.14)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.13"></a>

## 1.0.13

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.12...@spectrum-css/dial@1.0.13)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.12"></a>

## 1.0.12

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.10...@spectrum-css/dial@1.0.12)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

<a name="1.0.11"></a>

## 1.0.11

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.11-beta.0...@spectrum-css/dial@1.0.11)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.11-beta.0"></a>

## 1.0.11-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.10...@spectrum-css/dial@1.0.11-beta.0)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.10"></a>

## 1.0.10

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.9...@spectrum-css/dial@1.0.10)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.9"></a>

## 1.0.9

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.8...@spectrum-css/dial@1.0.9)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.8"></a>

## 1.0.8

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.7...@spectrum-css/dial@1.0.8)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.7"></a>

## 1.0.7

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.6...@spectrum-css/dial@1.0.7)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.6"></a>

## 1.0.6

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.4...@spectrum-css/dial@1.0.6)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.5"></a>

## 1.0.5

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.4...@spectrum-css/dial@1.0.5)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.3"></a>

## 1.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.3-alpha.3...@spectrum-css/dial@1.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="1.0.3-alpha.3"></a>

## 1.0.3-alpha.3

🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.3-alpha.2...@spectrum-css/dial@1.0.3-alpha.3)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.3-alpha.2"></a>

## 1.0.3-alpha.2

🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.3-alpha.1...@spectrum-css/dial@1.0.3-alpha.2)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.3-alpha.1"></a>

## 1.0.3-alpha.1

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.3-alpha.0...@spectrum-css/dial@1.0.3-alpha.1)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.3-alpha.0"></a>

## 1.0.3-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.2...@spectrum-css/dial@1.0.3-alpha.0)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.2"></a>

## 1.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.1...@spectrum-css/dial@1.0.2)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.1"></a>

## 1.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.0...@spectrum-css/dial@1.0.1)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.0"></a>

## 1.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.0-beta.4...@spectrum-css/dial@1.0.0)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.0-beta.4"></a>

## 1.0.0-beta.4

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.0-beta.3...@spectrum-css/dial@1.0.0-beta.4)

### 🐛 Bug fixes

- make Dial build again ([1e6818b](https://github.com/adobe/spectrum-css/commit/1e6818b))

<a name="1.0.0-beta.3"></a>

## 1.0.0-beta.3

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/dial@1.0.0-beta.2...@spectrum-css/dial@1.0.0-beta.3)

**Note:** Version bump only for package @spectrum-css/dial

<a name="1.0.0-beta.2"></a>

## 1.0.0-beta.2

🗓 2020-09-23

**Note:** Version bump only for package @spectrum-css/dial
