# Change Log

## 7.1.2

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/clearbutton@6.1.1
  - @spectrum-css/textfield@7.1.3
  - @spectrum-css/icon@7.1.1

## 7.1.1

### Patch Changes

- [#2759](https://github.com/adobe/spectrum-css/pull/2759) [`9652981`](https://github.com/adobe/spectrum-css/commit/965298128a39ec40543f659480559053b33394e2) Thanks [@castastrophe](https://github.com/castastrophe)! - fix: when whitespace normalization is done before stylelint fixes, a few selector optimizations were uncovered.

## 7.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/clearbutton@>=6
  - @spectrum-css/icon@>=7
  - @spectrum-css/textfield@>=7
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="7.0.0"></a>
## 7.0.0
🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.2.4...@spectrum-css/search@7.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="6.2.4"></a>
## 6.2.4
🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.2.3...@spectrum-css/search@6.2.4)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.2.3"></a>
## 6.2.3
🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.2.2...@spectrum-css/search@6.2.3)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.2.2"></a>
## 6.2.2
🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.2.1...@spectrum-css/search@6.2.2)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.2.1"></a>
## 6.2.1
🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/search

<a name="6.2.0"></a>
## 6.2.0
🗓
2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.1.0...@spectrum-css/search@6.2.0)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.1.0"></a>
## 6.1.0
🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.30...@spectrum-css/search@6.1.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="6.0.30"></a>
## 6.0.30
🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.29...@spectrum-css/search@6.0.30)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.29"></a>
## 6.0.29
🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.28...@spectrum-css/search@6.0.29)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.28"></a>
## 6.0.28
🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.26...@spectrum-css/search@6.0.28)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.27"></a>
## 6.0.27
🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.26...@spectrum-css/search@6.0.27)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.26"></a>
## 6.0.26
🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.25...@spectrum-css/search@6.0.26)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.25"></a>
## 6.0.25
🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.24...@spectrum-css/search@6.0.25)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.24"></a>
## 6.0.24
🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.23...@spectrum-css/search@6.0.24)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.23"></a>
## 6.0.23
🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.22...@spectrum-css/search@6.0.23)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.22"></a>
## 6.0.22
🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.21...@spectrum-css/search@6.0.22)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.21"></a>
## 6.0.21
🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.20...@spectrum-css/search@6.0.21)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.20"></a>
## 6.0.20
🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.19...@spectrum-css/search@6.0.20)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.19"></a>
## 6.0.19
🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.18...@spectrum-css/search@6.0.19)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.18"></a>
## 6.0.18
🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.17...@spectrum-css/search@6.0.18)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.17"></a>
## 6.0.17
🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.16...@spectrum-css/search@6.0.17)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.16"></a>
## 6.0.16
🗓
2023-08-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.15...@spectrum-css/search@6.0.16)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="6.0.15"></a>
## 6.0.15
🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.14...@spectrum-css/search@6.0.15)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.14"></a>
## 6.0.14
🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.12...@spectrum-css/search@6.0.14)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.13"></a>
## 6.0.13
🗓
2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.12...@spectrum-css/search@6.0.13)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.12"></a>
## 6.0.12
🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.11...@spectrum-css/search@6.0.12)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.11"></a>
## 6.0.11
🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.10...@spectrum-css/search@6.0.11)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.10"></a>
## 6.0.10
🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.9...@spectrum-css/search@6.0.10)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.9"></a>
## 6.0.9
🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.8...@spectrum-css/search@6.0.9)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.8"></a>
## 6.0.8
🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.7...@spectrum-css/search@6.0.8)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.7"></a>
## 6.0.7
🗓
2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.6...@spectrum-css/search@6.0.7)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.6"></a>
## 6.0.6
🗓
2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.5...@spectrum-css/search@6.0.6)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.5"></a>
## 6.0.5
🗓
2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.4...@spectrum-css/search@6.0.5)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.4"></a>
## 6.0.4
🗓
2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.3...@spectrum-css/search@6.0.4)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.3"></a>
## 6.0.3
🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.2...@spectrum-css/search@6.0.3)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.2"></a>
## 6.0.2
🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.1...@spectrum-css/search@6.0.2)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.1"></a>
## 6.0.1
🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.0...@spectrum-css/search@6.0.1)

**Note:** Version bump only for package @spectrum-css/search

<a name="6.0.0"></a>
## 6.0.0
🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.23...@spectrum-css/search@6.0.0)

\*chore(search)!: core tokens migration (#1761)([b54d8ef](https://github.com/adobe/spectrum-css/commit/b54d8ef)), closes[#1761](https://github.com/adobe/spectrum-css/issues/1761)

    	###
    	🛑 BREAKING CHANGES

    		*
    		migrates Search to use `@adobe/spectrum-tokens`

<a name="5.0.23"></a>
## 5.0.23
🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.22...@spectrum-css/search@5.0.23)

**Note:** Version bump only for package @spectrum-css/search

<a name="5.0.22"></a>

## 5.0.22

🗓 2023-05-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.21...@spectrum-css/search@5.0.22)

**Note:** Version bump only for package @spectrum-css/search

<a name="5.0.21"></a>

## 5.0.21

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.20...@spectrum-css/search@5.0.21)

**Note:** Version bump only for package @spectrum-css/search

<a name="5.0.20"></a>

## 5.0.20

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.19...@spectrum-css/search@5.0.20)

**Note:** Version bump only for package @spectrum-css/search

<a name="5.0.19"></a>

## 5.0.19

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.18...@spectrum-css/search@5.0.19)

**Note:** Version bump only for package @spectrum-css/search

<a name="5.0.18"></a>

## 5.0.18

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.17...@spectrum-css/search@5.0.18)

**Note:** Version bump only for package @spectrum-css/search

<a name="5.0.17"></a>

## 5.0.17

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.16...@spectrum-css/search@5.0.17)

**Note:** Version bump only for package @spectrum-css/search

<a name="5.0.16"></a>

## 5.0.16

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.15...@spectrum-css/search@5.0.16)

**Note:** Version bump only for package @spectrum-css/search

<a name="5.0.15"></a>

## 5.0.15

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.14...@spectrum-css/search@5.0.15)

**Note:** Version bump only for package @spectrum-css/search

<a name="5.0.14"></a>

## 5.0.14

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.13...@spectrum-css/search@5.0.14)

**Note:** Version bump only for package @spectrum-css/search

<a name="5.0.13"></a>

## 5.0.13

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.12...@spectrum-css/search@5.0.13)

**Note:** Version bump only for package @spectrum-css/search

<a name="5.0.12"></a>

## 5.0.12

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.11...@spectrum-css/search@5.0.12)

**Note:** Version bump only for package @spectrum-css/search

<a name="5.0.11"></a>

## 5.0.11

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.10...@spectrum-css/search@5.0.11)

**Note:** Version bump only for package @spectrum-css/search

<a name="5.0.10"></a>

## 5.0.10

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.9...@spectrum-css/search@5.0.10)

**Note:** Version bump only for package @spectrum-css/search

<a name="5.0.9"></a>

## 5.0.9

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.7...@spectrum-css/search@5.0.9)

**Note:** Version bump only for package @spectrum-css/search

<a name="5.0.8"></a>

## 5.0.8

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.7...@spectrum-css/search@5.0.8)

**Note:** Version bump only for package @spectrum-css/search

<a name="5.0.7"></a>

## 5.0.7

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.6...@spectrum-css/search@5.0.7)

**Note:** Version bump only for package @spectrum-css/search

<a name="5.0.6"></a>

## 5.0.6

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.5...@spectrum-css/search@5.0.6)

**Note:** Version bump only for package @spectrum-css/search

<a name="5.0.5"></a>

## 5.0.5

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.4...@spectrum-css/search@5.0.5)

**Note:** Version bump only for package @spectrum-css/search

<a name="5.0.4"></a>

## 5.0.4

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.3...@spectrum-css/search@5.0.4)

**Note:** Version bump only for package @spectrum-css/search

<a name="5.0.3"></a>

## 5.0.3

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.2...@spectrum-css/search@5.0.3)

**Note:** Version bump only for package @spectrum-css/search

<a name="5.0.2"></a>

## 5.0.2

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.0...@spectrum-css/search@5.0.2)

**Note:** Version bump only for package @spectrum-css/search

<a name="5.0.1"></a>

## 5.0.1

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.0...@spectrum-css/search@5.0.1)

**Note:** Version bump only for package @spectrum-css/search

<a name="5.0.0"></a>

## 5.0.0

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.25...@spectrum-css/search@5.0.0)

- fix(tokens)!: rgb transform to split out rgb values from css attributes (#1590) ([b714db4](https://github.com/adobe/spectrum-css/commit/b714db4)), closes [#1590](https://github.com/adobe/spectrum-css/issues/1590)

### 🛑 BREAKING CHANGES

- transforms color tokens to split out their `rgb` values

Co-authored-by: castastrophe <castastrophe@users.noreply.github.com>

<a name="4.2.25"></a>

## 4.2.25

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.24...@spectrum-css/search@4.2.25)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.24"></a>

## 4.2.24

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.23...@spectrum-css/search@4.2.24)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.23"></a>

## 4.2.23

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.22...@spectrum-css/search@4.2.23)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.22"></a>

## 4.2.22

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.21...@spectrum-css/search@4.2.22)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.21"></a>

## 4.2.21

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.20...@spectrum-css/search@4.2.21)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.20"></a>

## 4.2.20

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.19...@spectrum-css/search@4.2.20)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.19"></a>

## 4.2.19

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.18...@spectrum-css/search@4.2.19)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.18"></a>

## 4.2.18

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.17...@spectrum-css/search@4.2.18)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.17"></a>

## 4.2.17

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.15...@spectrum-css/search@4.2.17)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.16"></a>

## 4.2.16

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.15...@spectrum-css/search@4.2.16)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.15"></a>

## 4.2.15

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.14...@spectrum-css/search@4.2.15)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.14"></a>

## 4.2.14

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.13...@spectrum-css/search@4.2.14)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.13"></a>

## 4.2.13

🗓 2022-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.12...@spectrum-css/search@4.2.13)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.12"></a>

## 4.2.12

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.11...@spectrum-css/search@4.2.12)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.11"></a>

## 4.2.11

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.10...@spectrum-css/search@4.2.11)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.10"></a>

## 4.2.10

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.9...@spectrum-css/search@4.2.10)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.9"></a>

## 4.2.9

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.8...@spectrum-css/search@4.2.9)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.8"></a>

## 4.2.8

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.7...@spectrum-css/search@4.2.8)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.7"></a>

## 4.2.7

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.6...@spectrum-css/search@4.2.7)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.6"></a>

## 4.2.6

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.5...@spectrum-css/search@4.2.6)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.5"></a>

## 4.2.5

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.4...@spectrum-css/search@4.2.5)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.4"></a>

## 4.2.4

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.3...@spectrum-css/search@4.2.4)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.3"></a>

## 4.2.3

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.2...@spectrum-css/search@4.2.3)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.2"></a>

## 4.2.2

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.1...@spectrum-css/search@4.2.2)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.1"></a>

## 4.2.1

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.0...@spectrum-css/search@4.2.1)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.2.0"></a>

## 4.2.0

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.0.1...@spectrum-css/search@4.2.0)

### ✨ Features

- break out ClearButton and LogicButton into their own packages ([3cc0a5f](https://github.com/adobe/spectrum-css/commit/3cc0a5f))

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

<a name="4.1.0"></a>

## 4.1.0

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.1.0-beta.0...@spectrum-css/search@4.1.0)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.1.0-beta.0"></a>

## 4.1.0-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.0.1...@spectrum-css/search@4.1.0-beta.0)

### ✨ Features

- break out ClearButton and LogicButton into their own packages ([a2092ab](https://github.com/adobe/spectrum-css/commit/a2092ab))

<a name="4.0.1"></a>

## 4.0.1

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.0.0...@spectrum-css/search@4.0.1)

**Note:** Version bump only for package @spectrum-css/search

<a name="4.0.0"></a>

## 4.0.0

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.1.2...@spectrum-css/search@4.0.0)

### ✨ Features

- make Search use tokens for its Textfield radius to support Express ([785b57f](https://github.com/adobe/spectrum-css/commit/785b57f))

### 🛑 BREAKING CHANGES

- a new classname is required to enable this. See migration guide

<a name="3.1.2"></a>

## 3.1.2

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.1.1...@spectrum-css/search@3.1.2)

**Note:** Version bump only for package @spectrum-css/search

<a name="3.1.1"></a>

## 3.1.1

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.1.0...@spectrum-css/search@3.1.1)

**Note:** Version bump only for package @spectrum-css/search

<a name="3.1.0"></a>

## 3.1.0

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.0.4...@spectrum-css/search@3.1.0)

### ✨ Features

- make ClearButton build again, unblock CCX ([#1304](https://github.com/adobe/spectrum-css/issues/1304)) ([ae9399a](https://github.com/adobe/spectrum-css/commit/ae9399a))

<a name="3.0.5"></a>

## 3.0.5

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.0.4...@spectrum-css/search@3.0.5)

**Note:** Version bump only for package @spectrum-css/search

<a name="3.0.3"></a>

## 3.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.0.3-alpha.5...@spectrum-css/search@3.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="3.0.3-alpha.5"></a>

## 3.0.3-alpha.5

🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.0.3-alpha.4...@spectrum-css/search@3.0.3-alpha.5)

**Note:** Version bump only for package @spectrum-css/search

<a name="3.0.3-alpha.4"></a>

## 3.0.3-alpha.4

🗓 2021-08-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.0.3-alpha.3...@spectrum-css/search@3.0.3-alpha.4)

**Note:** Version bump only for package @spectrum-css/search

<a name="3.0.3-alpha.3"></a>

## 3.0.3-alpha.3

🗓 2021-07-19 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.0.3-alpha.2...@spectrum-css/search@3.0.3-alpha.3)

### 🐛 Bug fixes

- missing validation icon ([613e849](https://github.com/adobe/spectrum-css/commit/613e849))

<a name="3.0.3-alpha.2"></a>

## 3.0.3-alpha.2

🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.0.3-alpha.1...@spectrum-css/search@3.0.3-alpha.2)

### 🐛 Bug fixes

- search quiet clear button positioning ([41a4a13](https://github.com/adobe/spectrum-css/commit/41a4a13))

<a name="3.0.3-alpha.1"></a>

## 3.0.3-alpha.1

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.0.3-alpha.0...@spectrum-css/search@3.0.3-alpha.1)

**Note:** Version bump only for package @spectrum-css/search

<a name="3.0.3-alpha.0"></a>

## 3.0.3-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.0.2...@spectrum-css/search@3.0.3-alpha.0)

**Note:** Version bump only for package @spectrum-css/search

<a name="3.0.2"></a>

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.0.1...@spectrum-css/search@3.0.2)

**Note:** Version bump only for package @spectrum-css/search

<a name="3.0.1"></a>

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.0.0...@spectrum-css/search@3.0.1)

**Note:** Version bump only for package @spectrum-css/search

<a name="3.0.0"></a>

## 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.0.0-beta.7...@spectrum-css/search@3.0.0)

**Note:** Version bump only for package @spectrum-css/search

<a name="3.0.0-beta.7"></a>

## 3.0.0-beta.7

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.0.0-beta.6...@spectrum-css/search@3.0.0-beta.7)

### 🐛 Bug fixes

- make Search build again ([231be73](https://github.com/adobe/spectrum-css/commit/231be73))
- update main, resolved conflicts ([d7880a2](https://github.com/adobe/spectrum-css/commit/d7880a2))

<a name="3.0.0-beta.6"></a>

## 3.0.0-beta.6

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.0.0-beta.5...@spectrum-css/search@3.0.0-beta.6)

**Note:** Version bump only for package @spectrum-css/search

<a name="3.0.0-beta.5"></a>

## 3.0.0-beta.5

🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.0.0-beta.4...@spectrum-css/search@3.0.0-beta.5)

**Note:** Version bump only for package @spectrum-css/search

<a name="3.0.0-beta.4"></a>

## 3.0.0-beta.4

🗓 2020-06-19 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.0.0-beta.3...@spectrum-css/search@3.0.0-beta.4)

**Note:** Version bump only for package @spectrum-css/search

<a name="3.0.0-beta.3"></a>

## 3.0.0-beta.3

🗓 2020-05-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.0.0-beta.2...@spectrum-css/search@3.0.0-beta.3)

**Note:** Version bump only for package @spectrum-css/search

<a name="3.0.0-beta.2"></a>

## 3.0.0-beta.2

🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.0.0-beta.1...@spectrum-css/search@3.0.0-beta.2)

**Note:** Version bump only for package @spectrum-css/search

<a name="3.0.0-beta.1"></a>

## 3.0.0-beta.1

🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.0.0-beta.0...@spectrum-css/search@3.0.0-beta.1)

### ✨ Features

- make Search use new Textfield markup ([fc23c51](https://github.com/adobe/spectrum-css/commit/fc23c51)), closes [#457](https://github.com/adobe/spectrum-css/issues/457)

### 🛑 BREAKING CHANGES

- migrated to next Textfield markup

<a name="3.0.0-beta.0"></a>

## 3.0.0-beta.0

🗓 2020-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@2.0.6...@spectrum-css/search@3.0.0-beta.0)

### ✨ Features

- make Search support RTL ([dea3233](https://github.com/adobe/spectrum-css/commit/dea3233))

<a name="2.0.6"></a>

## 2.0.6

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@2.0.5...@spectrum-css/search@2.0.6)

**Note:** Version bump only for package @spectrum-css/search

<a name="2.0.5"></a>

## 2.0.5

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@2.0.4...@spectrum-css/search@2.0.5)

### 🐛 Bug fixes

- color of disabled Search icon on hover/active/focus ([#483](https://github.com/adobe/spectrum-css/issues/483)) ([a928e3f](https://github.com/adobe/spectrum-css/commit/a928e3f))

<a name="2.0.4"></a>

## 2.0.4

🗓 2020-01-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@2.0.3...@spectrum-css/search@2.0.4)

**Note:** Version bump only for package @spectrum-css/search

<a name="2.0.3"></a>

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@2.0.2...@spectrum-css/search@2.0.3)

### 🐛 Bug fixes

- correct Search icon color on hover/down/focus, fixes [#409](https://github.com/adobe/spectrum-css/issues/409) ([#429](https://github.com/adobe/spectrum-css/issues/429)) ([d63b887](https://github.com/adobe/spectrum-css/commit/d63b887))

<a name="2.0.2"></a>

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@2.0.1...@spectrum-css/search@2.0.2)

**Note:** Version bump only for package @spectrum-css/search

<a name="2.0.1"></a>

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@2.0.0...@spectrum-css/search@2.0.1)

**Note:** Version bump only for package @spectrum-css/search

<a name="2.0.0"></a>

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
