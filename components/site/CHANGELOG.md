# Change Log

## 6.0.0-s2-foundations.0

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce) Thanks [@pfulton](https://github.com/pfulton)! - S2 colors + grays foundation

### Patch Changes

- Updated dependencies [[`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.0

## 5.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

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

## 5.0.0

🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@4.2.4...@spectrum-css/site@5.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="4.2.4"></a>

## 4.2.4

🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@4.2.3...@spectrum-css/site@4.2.4)

**Note:** Version bump only for package @spectrum-css/site

<a name="4.2.3"></a>

## 4.2.3

🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@4.2.2...@spectrum-css/site@4.2.3)

**Note:** Version bump only for package @spectrum-css/site

<a name="4.2.2"></a>

## 4.2.2

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@4.2.1...@spectrum-css/site@4.2.2)

**Note:** Version bump only for package @spectrum-css/site

<a name="4.2.1"></a>

## 4.2.1

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/site

<a name="4.2.0"></a>

## 4.2.0

🗓
2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@4.1.0...@spectrum-css/site@4.2.0)

**Note:** Version bump only for package @spectrum-css/site

<a name="4.1.0"></a>

## 4.1.0

🗓
2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@4.0.4...@spectrum-css/site@4.1.0)

### ✨ Features

- **asset,cyclebutton,quickaction,site:**deprecate skin.css assets ([#2438](https://github.com/adobe/spectrum-css/issues/2438))([d6de839](https://github.com/adobe/spectrum-css/commit/d6de839))

<a name="4.0.4"></a>

## 4.0.4

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@4.0.3...@spectrum-css/site@4.0.4)

**Note:** Version bump only for package @spectrum-css/site

<a name="4.0.3"></a>

## 4.0.3

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@4.0.2...@spectrum-css/site@4.0.3)

**Note:** Version bump only for package @spectrum-css/site

<a name="4.0.2"></a>

## 4.0.2

🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@4.0.0...@spectrum-css/site@4.0.2)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="4.0.1"></a>

## 4.0.1

🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@4.0.0...@spectrum-css/site@4.0.1)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="4.0.0"></a>

## 4.0.0

🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@3.0.22...@spectrum-css/site@4.0.0)

\*refactor(site)!: replace focus-ring with focus-visible([c3896b2](https://github.com/adobe/spectrum-css/commit/c3896b2))

    	###
    	🛑 BREAKING CHANGES

    		*
    		replace focus-ring with native focus-visible pseudo class

<a name="3.0.22"></a>

## 3.0.22

🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@3.0.21...@spectrum-css/site@3.0.22)

**Note:** Version bump only for package @spectrum-css/site

<a name="3.0.21"></a>

## 3.0.21

🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@3.0.20...@spectrum-css/site@3.0.21)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="3.0.20"></a>

## 3.0.20

🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@3.0.19...@spectrum-css/site@3.0.20)

**Note:** Version bump only for package @spectrum-css/site

<a name="3.0.19"></a>

## 3.0.19

🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@3.0.18...@spectrum-css/site@3.0.19)

**Note:** Version bump only for package @spectrum-css/site

<a name="3.0.18"></a>

## 3.0.18

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@3.0.17...@spectrum-css/site@3.0.18)

**Note:** Version bump only for package @spectrum-css/site

<a name="3.0.17"></a>

## 3.0.17

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@3.0.16...@spectrum-css/site@3.0.17)

**Note:** Version bump only for package @spectrum-css/site

<a name="3.0.16"></a>

## 3.0.16

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@3.0.15...@spectrum-css/site@3.0.16)

**Note:** Version bump only for package @spectrum-css/site

<a name="3.0.15"></a>

## 3.0.15

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@3.0.14...@spectrum-css/site@3.0.15)

**Note:** Version bump only for package @spectrum-css/site

<a name="3.0.14"></a>

## 3.0.14

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@3.0.12...@spectrum-css/site@3.0.14)

**Note:** Version bump only for package @spectrum-css/site

<a name="3.0.13"></a>

## 3.0.13

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@3.0.12...@spectrum-css/site@3.0.13)

**Note:** Version bump only for package @spectrum-css/site

<a name="3.0.12"></a>

## 3.0.12

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@3.0.10...@spectrum-css/site@3.0.12)

**Note:** Version bump only for package @spectrum-css/site

<a name="3.0.11"></a>

## 3.0.11

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@3.0.10...@spectrum-css/site@3.0.11)

**Note:** Version bump only for package @spectrum-css/site

<a name="3.0.10"></a>

## 3.0.10

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@3.0.9...@spectrum-css/site@3.0.10)

**Note:** Version bump only for package @spectrum-css/site

<a name="3.0.9"></a>

## 3.0.9

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@3.0.8...@spectrum-css/site@3.0.9)

**Note:** Version bump only for package @spectrum-css/site

<a name="3.0.8"></a>

## 3.0.8

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@3.0.7...@spectrum-css/site@3.0.8)

**Note:** Version bump only for package @spectrum-css/site

<a name="3.0.7"></a>

## 3.0.7

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@3.0.6...@spectrum-css/site@3.0.7)

**Note:** Version bump only for package @spectrum-css/site

<a name="3.0.6"></a>

## 3.0.6

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@3.0.5...@spectrum-css/site@3.0.6)

**Note:** Version bump only for package @spectrum-css/site

<a name="3.0.5"></a>

## 3.0.5

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@3.0.4...@spectrum-css/site@3.0.5)

**Note:** Version bump only for package @spectrum-css/site

<a name="3.0.4"></a>

## 3.0.4

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@3.0.3...@spectrum-css/site@3.0.4)

**Note:** Version bump only for package @spectrum-css/site

<a name="3.0.3"></a>

## 3.0.3

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@3.0.1...@spectrum-css/site@3.0.3)

**Note:** Version bump only for package @spectrum-css/site

<a name="3.0.2"></a>

## 3.0.2

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@3.0.1...@spectrum-css/site@3.0.2)

**Note:** Version bump only for package @spectrum-css/site

<a name="3.0.1"></a>

## 3.0.1

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@3.0.0...@spectrum-css/site@3.0.1)

**Note:** Version bump only for package @spectrum-css/site

<a name="3.0.0"></a>

## 3.0.0

🗓 2022-09-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.1.13...@spectrum-css/site@3.0.0)

- feat(switch)!: migrating switch to core-tokens (CSS-42, CSS-100) (#1496) ([aab46c3](https://github.com/adobe/spectrum-css/commit/aab46c3)), closes [#1496](https://github.com/adobe/spectrum-css/issues/1496)

### 🛑 BREAKING CHANGES

- migrates Switch to core tokens

Also, adds t-shirt sizes

<a name="2.1.13"></a>

## 2.1.13

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.1.12...@spectrum-css/site@2.1.13)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.1.12"></a>

## 2.1.12

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.1.11...@spectrum-css/site@2.1.12)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.1.11"></a>

## 2.1.11

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.1.10...@spectrum-css/site@2.1.11)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.1.10"></a>

## 2.1.10

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.1.9...@spectrum-css/site@2.1.10)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.1.9"></a>

## 2.1.9

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.1.8...@spectrum-css/site@2.1.9)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.1.8"></a>

## 2.1.8

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.1.7...@spectrum-css/site@2.1.8)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.1.7"></a>

## 2.1.7

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.1.6...@spectrum-css/site@2.1.7)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.1.6"></a>

## 2.1.6

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.1.5...@spectrum-css/site@2.1.6)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.1.5"></a>

## 2.1.5

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.1.4...@spectrum-css/site@2.1.5)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.1.4"></a>

## 2.1.4

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.1.3...@spectrum-css/site@2.1.4)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.1.3"></a>

## 2.1.3

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.1.2...@spectrum-css/site@2.1.3)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.1.2"></a>

## 2.1.2

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.1.0...@spectrum-css/site@2.1.2)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

<a name="2.1.1"></a>

## 2.1.1

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.1.1-beta.0...@spectrum-css/site@2.1.1)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.1.1-beta.0"></a>

## 2.1.1-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.1.0...@spectrum-css/site@2.1.1-beta.0)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.1.0"></a>

## 2.1.0

🗓 2021-12-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.0.9...@spectrum-css/site@2.1.0)

### ✨ Features

- add classes to space examples out ([9182d54](https://github.com/adobe/spectrum-css/commit/9182d54))

<a name="2.0.9"></a>

## 2.0.9

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.0.8...@spectrum-css/site@2.0.9)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.0.8"></a>

## 2.0.8

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.0.7...@spectrum-css/site@2.0.8)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.0.7"></a>

## 2.0.7

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.0.6...@spectrum-css/site@2.0.7)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.0.6"></a>

## 2.0.6

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.0.5...@spectrum-css/site@2.0.6)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.0.5"></a>

## 2.0.5

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.0.3-alpha.3...@spectrum-css/site@2.0.5)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="2.0.4"></a>

## 2.0.4

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.0.3-alpha.3...@spectrum-css/site@2.0.4)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="2.0.3"></a>

## 2.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.0.3-alpha.3...@spectrum-css/site@2.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="2.0.3-alpha.3"></a>

## 2.0.3-alpha.3

🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.0.3-alpha.2...@spectrum-css/site@2.0.3-alpha.3)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.0.3-alpha.2"></a>

## 2.0.3-alpha.2

🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.0.3-alpha.1...@spectrum-css/site@2.0.3-alpha.2)

### 🐛 Bug fixes

- adjusted example margin-bottom for example item ([b1dbd99](https://github.com/adobe/spectrum-css/commit/b1dbd99))
- use renamed aliases ([91f6c04](https://github.com/adobe/spectrum-css/commit/91f6c04))

<a name="2.0.3-alpha.1"></a>

## 2.0.3-alpha.1

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.0.3-alpha.0...@spectrum-css/site@2.0.3-alpha.1)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.0.3-alpha.0"></a>

## 2.0.3-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.0.2...@spectrum-css/site@2.0.3-alpha.0)

### 🐛 Bug fixes

- taggroup to use more dna tokens ([243aad6](https://github.com/adobe/spectrum-css/commit/243aad6))

<a name="2.0.2"></a>

## 2.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.0.1...@spectrum-css/site@2.0.2)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.0.1"></a>

## 2.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.0.0...@spectrum-css/site@2.0.1)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.0.0"></a>

## 2.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.0.0-beta.6...@spectrum-css/site@2.0.0)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.0.0-beta.6"></a>

## 2.0.0-beta.6

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.0.0-beta.5...@spectrum-css/site@2.0.0-beta.6)

### 🐛 Bug fixes

- update main, resolved conflicts ([d7880a2](https://github.com/adobe/spectrum-css/commit/d7880a2))

<a name="2.0.0-beta.5"></a>

## 2.0.0-beta.5

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.0.0-beta.4...@spectrum-css/site@2.0.0-beta.5)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.0.0-beta.4"></a>

## 2.0.0-beta.4

🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.0.0-beta.3...@spectrum-css/site@2.0.0-beta.4)

### ✨ Features

- RSP V3 Dialog ([#710](https://github.com/adobe/spectrum-css/issues/710)) ([33d6638](https://github.com/adobe/spectrum-css/commit/33d6638)), closes [rsp-v3#517](https://github.com/rsp-v3/issues/517)

### 🐛 Bug fixes

- Checkbox and Radio margins, docs, and typography ([#897](https://github.com/adobe/spectrum-css/issues/897)) ([a089ce0](https://github.com/adobe/spectrum-css/commit/a089ce0)), closes [#243](https://github.com/adobe/spectrum-css/issues/243) [#124](https://github.com/adobe/spectrum-css/issues/124) [#707](https://github.com/adobe/spectrum-css/issues/707) [#243](https://github.com/adobe/spectrum-css/issues/243) [#251](https://github.com/adobe/spectrum-css/issues/251)

### 🛑 BREAKING CHANGES

- Checkbox and Radio no longer have margin on their own, must use FieldGroup

- feat: add .spectrum-Example to wrap sub-examples
- The spectrum-FieldGroup--horizontal is now required for horizontal field groups

- feat: remove hit area from Radio/Checkbox

<a name="2.0.0-beta.3"></a>

## 2.0.0-beta.3

🗓 2020-06-19 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.0.0-beta.2...@spectrum-css/site@2.0.0-beta.3)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.0.0-beta.2"></a>

## 2.0.0-beta.2

🗓 2020-05-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.0.0-beta.1...@spectrum-css/site@2.0.0-beta.2)

### ✨ Features

- Color Handle/Slider/Area/Wheel ([#673](https://github.com/adobe/spectrum-css/issues/673)) ([bcd2bf1](https://github.com/adobe/spectrum-css/commit/bcd2bf1))

<a name="2.0.0-beta.1"></a>

## 2.0.0-beta.1

🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@2.0.0-beta.0...@spectrum-css/site@2.0.0-beta.1)

**Note:** Version bump only for package @spectrum-css/site

<a name="2.0.0-beta.0"></a>

## 2.0.0-beta.0

🗓 2020-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@1.1.1...@spectrum-css/site@2.0.0-beta.0)

### ✨ Features

- make Site layout respect RTL ([77b18df](https://github.com/adobe/spectrum-css/commit/77b18df))

<a name="1.1.1"></a>

## 1.1.1

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@1.1.0...@spectrum-css/site@1.1.1)

**Note:** Version bump only for package @spectrum-css/site

<a name="1.1.0"></a>

## 1.1.0

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@1.0.3...@spectrum-css/site@1.1.0)

### ✨ Features

- adding t-shirt sized typography, fixes [#210](https://github.com/adobe/spectrum-css/issues/210), closes [#416](https://github.com/adobe/spectrum-css/issues/416) ([#408](https://github.com/adobe/spectrum-css/issues/408)) ([3921bcb](https://github.com/adobe/spectrum-css/commit/3921bcb)), closes [#523](https://github.com/adobe/spectrum-css/issues/523)

<a name="1.0.3"></a>

## 1.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@1.0.2...@spectrum-css/site@1.0.3)

**Note:** Version bump only for package @spectrum-css/site

<a name="1.0.2"></a>

## 1.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@1.0.1...@spectrum-css/site@1.0.2)

**Note:** Version bump only for package @spectrum-css/site

<a name="1.0.1"></a>

## 1.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/site@1.0.0...@spectrum-css/site@1.0.1)

**Note:** Version bump only for package @spectrum-css/site

<a name="1.0.0"></a>

## 1.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
