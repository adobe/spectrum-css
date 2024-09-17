# Change Log

## 6.1.3

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)! - Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

## 6.1.2

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)! - Improve changeset suggestions by using exports instead of files in component packages

## 6.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

## 6.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="6.0.0"></a>

## 6.0.0

🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.1.5...@spectrum-css/typography@6.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="5.1.5"></a>

## 5.1.5

🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.1.4...@spectrum-css/typography@5.1.5)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.1.4"></a>

## 5.1.4

🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.1.3...@spectrum-css/typography@5.1.4)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.1.3"></a>

## 5.1.3

🗓
2024-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.1.2...@spectrum-css/typography@5.1.3)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.1.2"></a>

## 5.1.2

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.1.1...@spectrum-css/typography@5.1.2)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.1.1"></a>

## 5.1.1

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.1.0"></a>

## 5.1.0

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.50...@spectrum-css/typography@5.1.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="5.0.50"></a>

## 5.0.50

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.49...@spectrum-css/typography@5.0.50)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.49"></a>

## 5.0.49

🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.48...@spectrum-css/typography@5.0.49)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.48"></a>

## 5.0.48

🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.46...@spectrum-css/typography@5.0.48)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.47"></a>

## 5.0.47

🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.46...@spectrum-css/typography@5.0.47)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.46"></a>

## 5.0.46

🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.45...@spectrum-css/typography@5.0.46)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.45"></a>

## 5.0.45

🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.44...@spectrum-css/typography@5.0.45)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.44"></a>

## 5.0.44

🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.43...@spectrum-css/typography@5.0.44)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.43"></a>

## 5.0.43

🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.42...@spectrum-css/typography@5.0.43)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.42"></a>

## 5.0.42

🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.41...@spectrum-css/typography@5.0.42)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.41"></a>

## 5.0.41

🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.40...@spectrum-css/typography@5.0.41)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.40"></a>

## 5.0.40

🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.39...@spectrum-css/typography@5.0.40)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.39"></a>

## 5.0.39

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.38...@spectrum-css/typography@5.0.39)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.38"></a>

## 5.0.38

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.37...@spectrum-css/typography@5.0.38)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.37"></a>

## 5.0.37

🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.36...@spectrum-css/typography@5.0.37)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="5.0.36"></a>

## 5.0.36

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.35...@spectrum-css/typography@5.0.36)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.35"></a>

## 5.0.35

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.33...@spectrum-css/typography@5.0.35)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.34"></a>

## 5.0.34

🗓
2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.33...@spectrum-css/typography@5.0.34)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.33"></a>

## 5.0.33

🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.32...@spectrum-css/typography@5.0.33)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.32"></a>

## 5.0.32

🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.31...@spectrum-css/typography@5.0.32)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.31"></a>

## 5.0.31

🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.30...@spectrum-css/typography@5.0.31)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.30"></a>

## 5.0.30

🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.29...@spectrum-css/typography@5.0.30)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.29"></a>

## 5.0.29

🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.28...@spectrum-css/typography@5.0.29)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.28"></a>

## 5.0.28

🗓
2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.27...@spectrum-css/typography@5.0.28)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.27"></a>

## 5.0.27

🗓
2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.26...@spectrum-css/typography@5.0.27)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.26"></a>

## 5.0.26

🗓
2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.25...@spectrum-css/typography@5.0.26)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.25"></a>

## 5.0.25

🗓
2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.24...@spectrum-css/typography@5.0.25)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.24"></a>

## 5.0.24

🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.23...@spectrum-css/typography@5.0.24)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.23"></a>

## 5.0.23

🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.22...@spectrum-css/typography@5.0.23)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.22"></a>

## 5.0.22

🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.21...@spectrum-css/typography@5.0.22)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="5.0.21"></a>

## 5.0.21

🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.20...@spectrum-css/typography@5.0.21)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.20"></a>

## 5.0.20

🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.19...@spectrum-css/typography@5.0.20)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.19"></a>

## 5.0.19

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.18...@spectrum-css/typography@5.0.19)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.18"></a>

## 5.0.18

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.17...@spectrum-css/typography@5.0.18)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.17"></a>

## 5.0.17

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.16...@spectrum-css/typography@5.0.17)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.16"></a>

## 5.0.16

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.15...@spectrum-css/typography@5.0.16)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.15"></a>

## 5.0.15

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.14...@spectrum-css/typography@5.0.15)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.14"></a>

## 5.0.14

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.13...@spectrum-css/typography@5.0.14)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.13"></a>

## 5.0.13

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.12...@spectrum-css/typography@5.0.13)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.12"></a>

## 5.0.12

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.11...@spectrum-css/typography@5.0.12)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.11"></a>

## 5.0.11

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.10...@spectrum-css/typography@5.0.11)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.10"></a>

## 5.0.10

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.9...@spectrum-css/typography@5.0.10)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.9"></a>

## 5.0.9

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.8...@spectrum-css/typography@5.0.9)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.8"></a>

## 5.0.8

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.6...@spectrum-css/typography@5.0.8)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.7"></a>

## 5.0.7

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.6...@spectrum-css/typography@5.0.7)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.6"></a>

## 5.0.6

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.5...@spectrum-css/typography@5.0.6)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.5"></a>

## 5.0.5

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.4...@spectrum-css/typography@5.0.5)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.4"></a>

## 5.0.4

🗓 2023-04-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.3...@spectrum-css/typography@5.0.4)

### 🐛 Bug fixes

- **typography:** reset margins ([2e300ab](https://github.com/adobe/spectrum-css/commit/2e300ab))

<a name="5.0.3"></a>

## 5.0.3

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.2...@spectrum-css/typography@5.0.3)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.2"></a>

## 5.0.2

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.1...@spectrum-css/typography@5.0.2)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.1"></a>

## 5.0.1

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@5.0.0...@spectrum-css/typography@5.0.1)

**Note:** Version bump only for package @spectrum-css/typography

<a name="5.0.0"></a>

## 5.0.0

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.30...@spectrum-css/typography@5.0.0)

- refactor(typography)!: use core tokens (#1557) ([f7fb606](https://github.com/adobe/spectrum-css/commit/f7fb606)), closes [#1557](https://github.com/adobe/spectrum-css/issues/1557)

### 🛑 BREAKING CHANGES

- migrates the Typography component to use `@adobe/spectrum-tokens`

Additionally:

- update heading tokens
- add body tokens
- add core tokens
- add detail tokens
- add `cjk` heading tokens
- add themes files
- heading t-shirt sizes
- move spectrum-Body color to index.css
- remove skin.css
- update heading tokens
  - sans-serif-heading-light
  - serif-heading-light
  - heading
  - heading-heavy

<a name="4.0.31"></a>

## 4.0.31

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.30...@spectrum-css/typography@4.0.31)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.30"></a>

## 4.0.30

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.29...@spectrum-css/typography@4.0.30)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.29"></a>

## 4.0.29

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.28...@spectrum-css/typography@4.0.29)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.28"></a>

## 4.0.28

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.27...@spectrum-css/typography@4.0.28)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.27"></a>

## 4.0.27

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.26...@spectrum-css/typography@4.0.27)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.26"></a>

## 4.0.26

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.25...@spectrum-css/typography@4.0.26)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.25"></a>

## 4.0.25

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.24...@spectrum-css/typography@4.0.25)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.24"></a>

## 4.0.24

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.23...@spectrum-css/typography@4.0.24)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.23"></a>

## 4.0.23

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.21...@spectrum-css/typography@4.0.23)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.22"></a>

## 4.0.22

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.21...@spectrum-css/typography@4.0.22)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.21"></a>

## 4.0.21

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.20...@spectrum-css/typography@4.0.21)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.20"></a>

## 4.0.20

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.19...@spectrum-css/typography@4.0.20)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.19"></a>

## 4.0.19

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.18...@spectrum-css/typography@4.0.19)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.18"></a>

## 4.0.18

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.17...@spectrum-css/typography@4.0.18)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.17"></a>

## 4.0.17

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.16...@spectrum-css/typography@4.0.17)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.16"></a>

## 4.0.16

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.15...@spectrum-css/typography@4.0.16)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.15"></a>

## 4.0.15

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.14...@spectrum-css/typography@4.0.15)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.14"></a>

## 4.0.14

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.13...@spectrum-css/typography@4.0.14)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.13"></a>

## 4.0.13

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.12...@spectrum-css/typography@4.0.13)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.12"></a>

## 4.0.12

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.11...@spectrum-css/typography@4.0.12)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.11"></a>

## 4.0.11

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.10...@spectrum-css/typography@4.0.11)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.10"></a>

## 4.0.10

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.9...@spectrum-css/typography@4.0.10)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.9"></a>

## 4.0.9

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.7...@spectrum-css/typography@4.0.9)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

<a name="4.0.8"></a>

## 4.0.8

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.8-beta.0...@spectrum-css/typography@4.0.8)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.8-beta.0"></a>

## 4.0.8-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.7...@spectrum-css/typography@4.0.8-beta.0)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.7"></a>

## 4.0.7

🗓 2021-12-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.6...@spectrum-css/typography@4.0.7)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.6"></a>

## 4.0.6

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.5...@spectrum-css/typography@4.0.6)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.5"></a>

## 4.0.5

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.4...@spectrum-css/typography@4.0.5)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.4"></a>

## 4.0.4

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.3...@spectrum-css/typography@4.0.4)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.3"></a>

## 4.0.3

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.2...@spectrum-css/typography@4.0.3)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.2"></a>

## 4.0.2

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.0-alpha.3...@spectrum-css/typography@4.0.2)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="4.0.1"></a>

## 4.0.1

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.0-alpha.3...@spectrum-css/typography@4.0.1)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="4.0.0"></a>

## 4.0.0

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.0-alpha.3...@spectrum-css/typography@4.0.0)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="4.0.0-alpha.3"></a>

## 4.0.0-alpha.3

🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.0-alpha.2...@spectrum-css/typography@4.0.0-alpha.3)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.0-alpha.2"></a>

## 4.0.0-alpha.2

🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.0-alpha.1...@spectrum-css/typography@4.0.0-alpha.2)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.0-alpha.1"></a>

## 4.0.0-alpha.1

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@4.0.0-alpha.0...@spectrum-css/typography@4.0.0-alpha.1)

**Note:** Version bump only for package @spectrum-css/typography

<a name="4.0.0-alpha.0"></a>

## 4.0.0-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@3.0.2...@spectrum-css/typography@4.0.0-alpha.0)

### ✨ Features

- updated typography token names to use standardorder ([50145fe](https://github.com/adobe/spectrum-css/commit/50145fe))

### 🛑 BREAKING CHANGES

- realigned classnames

<a name="3.0.2"></a>

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@3.0.1...@spectrum-css/typography@3.0.2)

**Note:** Version bump only for package @spectrum-css/typography

<a name="3.0.1"></a>

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@3.0.0...@spectrum-css/typography@3.0.1)

**Note:** Version bump only for package @spectrum-css/typography

<a name="3.0.0"></a>

## 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@3.0.0-beta.1...@spectrum-css/typography@3.0.0)

**Note:** Version bump only for package @spectrum-css/typography

<a name="3.0.0-beta.1"></a>

## 3.0.0-beta.1

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@3.0.0-beta.0...@spectrum-css/typography@3.0.0-beta.1)

**Note:** Version bump only for package @spectrum-css/typography

<a name="3.0.0-beta.0"></a>

## 3.0.0-beta.0

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@2.1.4-beta.0...@spectrum-css/typography@3.0.0-beta.0)

- fix!: updated type sizes to use consistent syntax, related to #972 (#1031) ([1a604c4](https://github.com/adobe/spectrum-css/commit/1a604c4)), closes [#972](https://github.com/adobe/spectrum-css/issues/972) [#1031](https://github.com/adobe/spectrum-css/issues/1031)

### 🛑 BREAKING CHANGES

- all typography sizing classes now have --size* instead of --*, see migration guides below

  #### Migrating from deprecated Typography

  See the table below to reference what will need to change when migrating to the new Typography API. Cells with a dash indicate the typography style did not exist in the previous API.

  Note that all instances of typography now require the component class in addition to the modifier class. For example, to get a large Heading, you will need the `.spectrum-Heading--sizeL` modifier class as well as the `.spectrum-Heading` component class.

  ##### Heading

  | Deprecated Classname                                      | New Classname                                                          |
  | --------------------------------------------------------- | ---------------------------------------------------------------------- |
  | `~.spectrum-Heading1--display~`                           | `.spectrum-Heading.spectrum-Heading--sizeXXXL`                         |
  | `~.spectrum-Heading1--display.spectrum-Heading1--quiet~`  | `.spectrum-Heading.spectrum-Heading--sizeXXXL.spectrum-Heading--light` |
  | `~.spectrum-Heading1--display.spectrum-Heading1--strong~` | `.spectrum-Heading.spectrum-Heading--sizeXXXL.spectrum-Heading--heavy` |
  | `~.spectrum-Heading2--display~`                           | `.spectrum-Heading.spectrum-Heading--sizeXXL`                          |
  | `~.spectrum-Heading2--display.spectrum-Heading2--quiet~`  | `.spectrum-Heading.spectrum-Heading--sizeXXL.spectrum-Heading--light`  |
  | `~.spectrum-Heading2--display.spectrum-Heading2--strong~` | `.spectrum-Heading.spectrum-Heading--sizeXXL.spectrum-Heading--heavy`  |
  | `~.spectrum-Heading1~`                                    | `.spectrum-Heading.spectrum-Heading--sizeXL`                           |
  | `~.spectrum-Heading1--quiet~`                             | `.spectrum-Heading.spectrum-Heading--sizeXL.spectrum-Heading--light`   |
  | `~.spectrum-Heading1--strong~`                            | `.spectrum-Heading.spectrum-Heading--sizeXL.spectrum-Heading--heavy`   |
  | `~.spectrum-Heading2~`                                    | `.spectrum-Heading.spectrum-Heading--sizeL`                            |
  | `~.spectrum-Heading1--quiet~`                             | `.spectrum-Heading.spectrum-Heading--sizeL.spectrum-Heading--light`    |
  | `~.spectrum-Heading2--strong~`                            | `.spectrum-Heading.spectrum-Heading--sizeL.spectrum-Heading--heavy`    |
  | `~.spectrum-Heading3~`                                    | `.spectrum-Heading.spectrum-Heading--sizeM`                            |
  | `~.spectrum-Heading4~`                                    | `.spectrum-Heading.spectrum-Heading--sizeS`                            |
  | `~.spectrum-Heading5~`                                    | `.spectrum-Heading.spectrum-Heading--sizeXS`                           |
  | `~.spectrum-Heading6~`                                    | `.spectrum-Heading.spectrum-Heading--sizeXXS`                          |

  ##### Body

  | Deprecated Classname | New Classname                            |
  | -------------------- | ---------------------------------------- |
  | -                    | `.spectrum-Body.spectrum-Body--sizeXXXL` |
  | -                    | `.spectrum-Body.spectrum-Body--sizeXXL`  |
  | `~.spectrum-Body1~`  | `.spectrum-Body.spectrum-Body--sizeXL`   |
  | `~.spectrum-Body2~`  | `.spectrum-Body.spectrum-Body--sizeL`    |
  | `~.spectrum-Body3~`  | `.spectrum-Body.spectrum-Body--sizeM`    |
  | `~.spectrum-Body4~`  | `.spectrum-Body.spectrum-Body--sizeS`    |
  | `~.spectrum-Body5~`  | `.spectrum-Body.spectrum-Body--sizeXS`   |

  ##### Detail

  | Deprecated Classname     | New Classname                                     |
  | ------------------------ | ------------------------------------------------- |
  | -                        | `.spectrum-Detail--sizeXL`                        |
  | -                        | `.spectrum-Detail--sizeXL.spectrum-Detail--light` |
  | -                        | `.spectrum-Detail--sizeL`                         |
  | -                        | `.spectrum-Detail--sizeL.spectrum-Detail--light`  |
  | -                        | `.spectrum-Detail--sizeM`                         |
  | -                        | `.spectrum-Detail--sizeM.spectrum-Detail--light`  |
  | `~.spectrum-Subheading~` | `.spectrum-Detail--sizeS`                         |
  | `~.spectrum-Detail~`     | `.spectrum-Detail--sizeS.spectrum-Detail--light`  |

  ##### Code

  | Deprecated Classname | New Classname            |
  | -------------------- | ------------------------ |
  | `~.spectrum-Code-1~` | `.spectrum-Code--sizeXL` |
  | `~.spectrum-Code-2~` | `.spectrum-Code--sizeL`  |
  | `~.spectrum-Code-3~` | `.spectrum-Code--sizeM`  |
  | `~.spectrum-Code-4~` | `.spectrum-Code--sizeS`  |
  | `~.spectrum-Code-5~` | `.spectrum-Code--sizeXS` |

  #### Updating sizing syntax

  To be more consistent with other t-shirt sizing syntax, the Typography components now use the word `size` in the class name syntax.

  ##### Heading

  | Deprecated Classname                       | New Classname                                  |
  | ------------------------------------------ | ---------------------------------------------- |
  | `.spectrum-Heading.spectrum-Heading--XXXL` | `.spectrum-Heading.spectrum-Heading--sizeXXXL` |
  | `.spectrum-Heading.spectrum-Heading--XXL`  | `.spectrum-Heading.spectrum-Heading--sizeXXL`  |
  | `.spectrum-Heading.spectrum-Heading--XL`   | `.spectrum-Heading.spectrum-Heading--sizeXL`   |
  | `.spectrum-Heading.spectrum-Heading--L`    | `.spectrum-Heading.spectrum-Heading--sizeL`    |
  | `.spectrum-Heading.spectrum-Heading--M`    | `.spectrum-Heading.spectrum-Heading--sizeM`    |
  | `.spectrum-Heading.spectrum-Heading--S`    | `.spectrum-Heading.spectrum-Heading--sizeS`    |
  | `.spectrum-Heading.spectrum-Heading--XS`   | `.spectrum-Heading.spectrum-Heading--sizeXS`   |
  | `.spectrum-Heading.spectrum-Heading--XXS`  | `.spectrum-Heading.spectrum-Heading--sizeXXS`  |

  ##### Body

  | Deprecated Classname                 | New Classname                            |
  | ------------------------------------ | ---------------------------------------- |
  | `.spectrum-Body.spectrum-Body--XXXL` | `.spectrum-Body.spectrum-Body--sizeXXXL` |
  | `.spectrum-Body.spectrum-Body--XXL`  | `.spectrum-Body.spectrum-Body--sizeXXL`  |
  | `.spectrum-Body.spectrum-Body--XL`   | `.spectrum-Body.spectrum-Body--sizeXL`   |
  | `.spectrum-Body.spectrum-Body--L`    | `.spectrum-Body.spectrum-Body--sizeL`    |
  | `.spectrum-Body.spectrum-Body--M`    | `.spectrum-Body.spectrum-Body--sizeM`    |
  | `.spectrum-Body.spectrum-Body--S`    | `.spectrum-Body.spectrum-Body--sizeS`    |
  | `.spectrum-Body.spectrum-Body--XS`   | `.spectrum-Body.spectrum-Body--sizeXS`   |
  | `.spectrum-Body.spectrum-Body--XXS`  | `.spectrum-Body.spectrum-Body--sizeXXS`  |

  ##### Detail

  | Deprecated Classname                   | New Classname                              |
  | -------------------------------------- | ------------------------------------------ |
  | `.spectrum-Detail.spectrum-Detail--XL` | `.spectrum-Detail.spectrum-Detail--sizeXL` |
  | `.spectrum-Detail.spectrum-Detail--L`  | `.spectrum-Detail.spectrum-Detail--sizeL`  |
  | `.spectrum-Detail.spectrum-Detail--M`  | `.spectrum-Detail.spectrum-Detail--sizeM`  |
  | `.spectrum-Detail.spectrum-Detail--S`  | `.spectrum-Detail.spectrum-Detail--sizeS`  |

  ##### Code

  | Deprecated Classname                 | New Classname                            |
  | ------------------------------------ | ---------------------------------------- |
  | `.spectrum-Detail.spectrum-Code--XL` | `.spectrum-Detail.spectrum-Code--sizeXL` |
  | `.spectrum-Detail.spectrum-Code--L`  | `.spectrum-Detail.spectrum-Code--sizeL`  |
  | `.spectrum-Detail.spectrum-Code--M`  | `.spectrum-Detail.spectrum-Code--sizeM`  |
  | `.spectrum-Detail.spectrum-Code--S`  | `.spectrum-Detail.spectrum-Code--sizeS`  |
  | `.spectrum-Detail.spectrum-Code--XS` | `.spectrum-Detail.spectrum-Code--sizeXS` |

<a name="2.1.4-beta.0"></a>

## 2.1.4-beta.0

🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@2.1.3...@spectrum-css/typography@2.1.4-beta.0)

### 🐛 Bug fixes

- global typography color added back ([4a2f78f](https://github.com/adobe/spectrum-css/commit/4a2f78f))
- wip fix more components ([b74dbb8](https://github.com/adobe/spectrum-css/commit/b74dbb8))

<a name="2.1.3"></a>

## 2.1.3

🗓 2020-05-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@2.1.2...@spectrum-css/typography@2.1.3)

**Note:** Version bump only for package @spectrum-css/typography

<a name="2.1.2"></a>

## 2.1.2

🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@2.1.1...@spectrum-css/typography@2.1.2)

**Note:** Version bump only for package @spectrum-css/typography

<a name="2.1.1"></a>

## 2.1.1

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@2.1.0...@spectrum-css/typography@2.1.1)

**Note:** Version bump only for package @spectrum-css/typography

<a name="2.1.0"></a>

## 2.1.0

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@2.0.3...@spectrum-css/typography@2.1.0)

### ✨ Features

- adding t-shirt sized typography, fixes [#210](https://github.com/adobe/spectrum-css/issues/210), closes [#416](https://github.com/adobe/spectrum-css/issues/416) ([#408](https://github.com/adobe/spectrum-css/issues/408)) ([3921bcb](https://github.com/adobe/spectrum-css/commit/3921bcb)), closes [#523](https://github.com/adobe/spectrum-css/issues/523)

<a name="2.0.3"></a>

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@2.0.2...@spectrum-css/typography@2.0.3)

**Note:** Version bump only for package @spectrum-css/typography

<a name="2.0.2"></a>

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@2.0.1...@spectrum-css/typography@2.0.2)

**Note:** Version bump only for package @spectrum-css/typography

<a name="2.0.1"></a>

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/typography@2.0.0...@spectrum-css/typography@2.0.1)

**Note:** Version bump only for package @spectrum-css/typography

<a name="2.0.0"></a>

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
