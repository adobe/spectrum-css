# Change Log

## 5.2.4

### Patch Changes

- [#3137](https://github.com/adobe/spectrum-css/pull/3137) [`b16a159`](https://github.com/adobe/spectrum-css/commit/b16a159bd8b1456b384f13f51ab0cdb318a692e8) Thanks [@castastrophe](https://github.com/castastrophe)! - `--spectrum-well-border-color` was mapped to the `-rgb` postfixed value which resolves to a raw rgb number but not a valid color.

- Updated dependencies [[`b16a159`](https://github.com/adobe/spectrum-css/commit/b16a159bd8b1456b384f13f51ab0cdb318a692e8)]:
  - @spectrum-css/tokens@14.3.2

## 5.2.3

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)! - Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

## 5.2.2

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)! - Improve changeset suggestions by using exports instead of files in component packages

## 5.2.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

## 5.2.0

### Minor Changes

- [#2754](https://github.com/adobe/spectrum-css/pull/2754) [`dbf1406`](https://github.com/adobe/spectrum-css/commit/dbf1406822be32aa1dbd2864b097853423bf06d8) Thanks [@jawinn](https://github.com/jawinn)! - Sets the `color` property in parts of some components that were relying on inheriting a color from higher up in the DOM.

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
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@4.1.4...@spectrum-css/well@5.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="4.1.4"></a>

## 4.1.4

🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@4.1.3...@spectrum-css/well@4.1.4)

**Note:** Version bump only for package @spectrum-css/well

<a name="4.1.3"></a>

## 4.1.3

🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@4.1.2...@spectrum-css/well@4.1.3)

**Note:** Version bump only for package @spectrum-css/well

<a name="4.1.2"></a>

## 4.1.2

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@4.1.1...@spectrum-css/well@4.1.2)

**Note:** Version bump only for package @spectrum-css/well

<a name="4.1.1"></a>

## 4.1.1

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/well

<a name="4.1.0"></a>

## 4.1.0

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@4.0.10...@spectrum-css/well@4.1.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="4.0.10"></a>

## 4.0.10

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@4.0.9...@spectrum-css/well@4.0.10)

**Note:** Version bump only for package @spectrum-css/well

<a name="4.0.9"></a>

## 4.0.9

🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@4.0.8...@spectrum-css/well@4.0.9)

**Note:** Version bump only for package @spectrum-css/well

<a name="4.0.8"></a>

## 4.0.8

🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@4.0.6...@spectrum-css/well@4.0.8)

**Note:** Version bump only for package @spectrum-css/well

<a name="4.0.7"></a>

## 4.0.7

🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@4.0.6...@spectrum-css/well@4.0.7)

**Note:** Version bump only for package @spectrum-css/well

<a name="4.0.6"></a>

## 4.0.6

🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@4.0.5...@spectrum-css/well@4.0.6)

**Note:** Version bump only for package @spectrum-css/well

<a name="4.0.5"></a>

## 4.0.5

🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@4.0.4...@spectrum-css/well@4.0.5)

**Note:** Version bump only for package @spectrum-css/well

<a name="4.0.4"></a>

## 4.0.4

🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@4.0.3...@spectrum-css/well@4.0.4)

**Note:** Version bump only for package @spectrum-css/well

<a name="4.0.3"></a>

## 4.0.3

🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@4.0.2...@spectrum-css/well@4.0.3)

**Note:** Version bump only for package @spectrum-css/well

<a name="4.0.2"></a>

## 4.0.2

🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@4.0.1...@spectrum-css/well@4.0.2)

**Note:** Version bump only for package @spectrum-css/well

<a name="4.0.1"></a>

## 4.0.1

🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@4.0.0...@spectrum-css/well@4.0.1)

**Note:** Version bump only for package @spectrum-css/well

<a name="4.0.0"></a>

## 4.0.0

🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.49...@spectrum-css/well@4.0.0)

\*feat(well)!: migrate to use spectrum-tokens([b362c23](https://github.com/adobe/spectrum-css/commit/b362c23))

    	###
    	🛑 BREAKING CHANGES

    		*
    		migrates Well to use spectrum-tokens

<a name="3.0.49"></a>

## 3.0.49

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.48...@spectrum-css/well@3.0.49)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="3.0.48"></a>

## 3.0.48

🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.47...@spectrum-css/well@3.0.48)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.47"></a>

## 3.0.47

🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.46...@spectrum-css/well@3.0.47)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.46"></a>

## 3.0.46

🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.45...@spectrum-css/well@3.0.46)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.45"></a>

## 3.0.45

🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.44...@spectrum-css/well@3.0.45)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.44"></a>

## 3.0.44

🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.43...@spectrum-css/well@3.0.44)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="3.0.43"></a>

## 3.0.43

🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.42...@spectrum-css/well@3.0.43)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.42"></a>

## 3.0.42

🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.41...@spectrum-css/well@3.0.42)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.41"></a>

## 3.0.41

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.40...@spectrum-css/well@3.0.41)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.40"></a>

## 3.0.40

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.39...@spectrum-css/well@3.0.40)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.39"></a>

## 3.0.39

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.38...@spectrum-css/well@3.0.39)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.38"></a>

## 3.0.38

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.37...@spectrum-css/well@3.0.38)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.37"></a>

## 3.0.37

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.35...@spectrum-css/well@3.0.37)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.36"></a>

## 3.0.36

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.35...@spectrum-css/well@3.0.36)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.35"></a>

## 3.0.35

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.33...@spectrum-css/well@3.0.35)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.34"></a>

## 3.0.34

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.33...@spectrum-css/well@3.0.34)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.33"></a>

## 3.0.33

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.32...@spectrum-css/well@3.0.33)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.32"></a>

## 3.0.32

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.31...@spectrum-css/well@3.0.32)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.31"></a>

## 3.0.31

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.30...@spectrum-css/well@3.0.31)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.30"></a>

## 3.0.30

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.29...@spectrum-css/well@3.0.30)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.29"></a>

## 3.0.29

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.28...@spectrum-css/well@3.0.29)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.28"></a>

## 3.0.28

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.27...@spectrum-css/well@3.0.28)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.27"></a>

## 3.0.27

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.26...@spectrum-css/well@3.0.27)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.26"></a>

## 3.0.26

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.25...@spectrum-css/well@3.0.26)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.25"></a>

## 3.0.25

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.23...@spectrum-css/well@3.0.25)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.24"></a>

## 3.0.24

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.23...@spectrum-css/well@3.0.24)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.23"></a>

## 3.0.23

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.22...@spectrum-css/well@3.0.23)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.22"></a>

## 3.0.22

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.21...@spectrum-css/well@3.0.22)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.21"></a>

## 3.0.21

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.20...@spectrum-css/well@3.0.21)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.20"></a>

## 3.0.20

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.19...@spectrum-css/well@3.0.20)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.19"></a>

## 3.0.19

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.18...@spectrum-css/well@3.0.19)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.18"></a>

## 3.0.18

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.17...@spectrum-css/well@3.0.18)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.17"></a>

## 3.0.17

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.16...@spectrum-css/well@3.0.17)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.16"></a>

## 3.0.16

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.15...@spectrum-css/well@3.0.16)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.15"></a>

## 3.0.15

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.14...@spectrum-css/well@3.0.15)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.14"></a>

## 3.0.14

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.13...@spectrum-css/well@3.0.14)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.13"></a>

## 3.0.13

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.12...@spectrum-css/well@3.0.13)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.12"></a>

## 3.0.12

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.11...@spectrum-css/well@3.0.12)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.11"></a>

## 3.0.11

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.9...@spectrum-css/well@3.0.11)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

<a name="3.0.10"></a>

## 3.0.10

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.10-beta.0...@spectrum-css/well@3.0.10)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.10-beta.0"></a>

## 3.0.10-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.9...@spectrum-css/well@3.0.10-beta.0)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.9"></a>

## 3.0.9

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.8...@spectrum-css/well@3.0.9)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.8"></a>

## 3.0.8

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.7...@spectrum-css/well@3.0.8)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.7"></a>

## 3.0.7

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.6...@spectrum-css/well@3.0.7)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.6"></a>

## 3.0.6

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.5...@spectrum-css/well@3.0.6)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.5"></a>

## 3.0.5

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.3-alpha.3...@spectrum-css/well@3.0.5)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="3.0.4"></a>

## 3.0.4

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.3-alpha.3...@spectrum-css/well@3.0.4)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="3.0.3"></a>

## 3.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.3-alpha.3...@spectrum-css/well@3.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="3.0.3-alpha.3"></a>

## 3.0.3-alpha.3

🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.3-alpha.2...@spectrum-css/well@3.0.3-alpha.3)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.3-alpha.2"></a>

## 3.0.3-alpha.2

🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.3-alpha.1...@spectrum-css/well@3.0.3-alpha.2)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.3-alpha.1"></a>

## 3.0.3-alpha.1

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.3-alpha.0...@spectrum-css/well@3.0.3-alpha.1)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.3-alpha.0"></a>

## 3.0.3-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.2...@spectrum-css/well@3.0.3-alpha.0)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.2"></a>

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.1...@spectrum-css/well@3.0.2)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.1"></a>

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.0...@spectrum-css/well@3.0.1)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.0"></a>

## 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.0-beta.5...@spectrum-css/well@3.0.0)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.0-beta.5"></a>

## 3.0.0-beta.5

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.0-beta.4...@spectrum-css/well@3.0.0-beta.5)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.0-beta.4"></a>

## 3.0.0-beta.4

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.0-beta.3...@spectrum-css/well@3.0.0-beta.4)

- fix!: updated type sizes to use consistent syntax, related to #972 (#1031) ([1a604c4](https://github.com/adobe/spectrum-css/commit/1a604c4)), closes [#972](https://github.com/adobe/spectrum-css/issues/972) [#1031](https://github.com/adobe/spectrum-css/issues/1031)

### 🛑 BREAKING CHANGES

- all typography sizing classes now have --size* instead of --*, see migration guides

<a name="3.0.0-beta.3"></a>

## 3.0.0-beta.3

🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.0-beta.2...@spectrum-css/well@3.0.0-beta.3)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.0-beta.2"></a>

## 3.0.0-beta.2

🗓 2020-05-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.0-beta.1...@spectrum-css/well@3.0.0-beta.2)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.0-beta.1"></a>

## 3.0.0-beta.1

🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@3.0.0-beta.0...@spectrum-css/well@3.0.0-beta.1)

**Note:** Version bump only for package @spectrum-css/well

<a name="3.0.0-beta.0"></a>

## 3.0.0-beta.0

🗓 2020-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@2.0.5...@spectrum-css/well@3.0.0-beta.0)

### ✨ Features

- make Well support RTL ([96a9a41](https://github.com/adobe/spectrum-css/commit/96a9a41))

<a name="2.0.5"></a>

## 2.0.5

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@2.0.4...@spectrum-css/well@2.0.5)

**Note:** Version bump only for package @spectrum-css/well

<a name="2.0.4"></a>

## 2.0.4

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@2.0.3...@spectrum-css/well@2.0.4)

**Note:** Version bump only for package @spectrum-css/well

<a name="2.0.3"></a>

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@2.0.2...@spectrum-css/well@2.0.3)

### 🐛 Bug fixes

- implement local tokens for Well, fixes [#422](https://github.com/adobe/spectrum-css/issues/422) ([#432](https://github.com/adobe/spectrum-css/issues/432)) ([81109f9](https://github.com/adobe/spectrum-css/commit/81109f9))

<a name="2.0.2"></a>

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@2.0.1...@spectrum-css/well@2.0.2)

**Note:** Version bump only for package @spectrum-css/well

<a name="2.0.1"></a>

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/well@2.0.0...@spectrum-css/well@2.0.1)

**Note:** Version bump only for package @spectrum-css/well

<a name="2.0.0"></a>

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
