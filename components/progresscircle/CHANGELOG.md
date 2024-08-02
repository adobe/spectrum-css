# Change Log

## 3.1.2

### Patch Changes

- [#2842](https://github.com/adobe/spectrum-css/pull/2842) [`4cd3a15`](https://github.com/adobe/spectrum-css/commit/4cd3a15db914b667f5d606388051ecd2cd318134) Thanks [@castastrophe](https://github.com/castastrophe)! - Updated CSSNano plugin to toggle reduceIdent off to prevent invalid abstractions from breaking named grid templates.

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
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.2.3...@spectrum-css/progresscircle@3.0.0)

### 🐛 Bug fixes

-     **button:**pending state width, transition ([#2570](https://github.com/adobe/spectrum-css/issues/2570))([7b67bff](https://github.com/adobe/spectrum-css/commit/7b67bff))

  \*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

      	###
      	🛑 BREAKING CHANGES

      		*
      		- Removes component-builder & component-builder-simple for script leveraging postcss

* Imports added to index.css and themes/express.css

<a name="2.2.3"></a>

## 2.2.3

🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.2.2...@spectrum-css/progresscircle@2.2.3)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.2.2"></a>

## 2.2.2

🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.2.1...@spectrum-css/progresscircle@2.2.2)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.2.1"></a>

## 2.2.1

🗓
2024-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.2.0...@spectrum-css/progresscircle@2.2.1)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.2.0"></a>

## 2.2.0

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.1.1...@spectrum-css/progresscircle@2.2.0)

### ✨ Features

- **button:**pending state([0b82dd9](https://github.com/adobe/spectrum-css/commit/0b82dd9))

<a name="2.1.1"></a>

## 2.1.1

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.1.0"></a>

## 2.1.0

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.75...@spectrum-css/progresscircle@2.1.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="2.0.75"></a>

## 2.0.75

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.74...@spectrum-css/progresscircle@2.0.75)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.74"></a>

## 2.0.74

🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.73...@spectrum-css/progresscircle@2.0.74)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.73"></a>

## 2.0.73

🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.71...@spectrum-css/progresscircle@2.0.73)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.72"></a>

## 2.0.72

🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.71...@spectrum-css/progresscircle@2.0.72)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.71"></a>

## 2.0.71

🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.70...@spectrum-css/progresscircle@2.0.71)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.70"></a>

## 2.0.70

🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.69...@spectrum-css/progresscircle@2.0.70)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.69"></a>

## 2.0.69

🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.68...@spectrum-css/progresscircle@2.0.69)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.68"></a>

## 2.0.68

🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.67...@spectrum-css/progresscircle@2.0.68)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.67"></a>

## 2.0.67

🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.66...@spectrum-css/progresscircle@2.0.67)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.66"></a>

## 2.0.66

🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.65...@spectrum-css/progresscircle@2.0.66)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.65"></a>

## 2.0.65

🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.64...@spectrum-css/progresscircle@2.0.65)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.64"></a>

## 2.0.64

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.63...@spectrum-css/progresscircle@2.0.64)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.63"></a>

## 2.0.63

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.62...@spectrum-css/progresscircle@2.0.63)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.62"></a>

## 2.0.62

🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.61...@spectrum-css/progresscircle@2.0.62)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="2.0.61"></a>

## 2.0.61

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.60...@spectrum-css/progresscircle@2.0.61)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.60"></a>

## 2.0.60

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.58...@spectrum-css/progresscircle@2.0.60)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.59"></a>

## 2.0.59

🗓
2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.58...@spectrum-css/progresscircle@2.0.59)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.58"></a>

## 2.0.58

🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.57...@spectrum-css/progresscircle@2.0.58)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.57"></a>

## 2.0.57

🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.56...@spectrum-css/progresscircle@2.0.57)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.56"></a>

## 2.0.56

🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.55...@spectrum-css/progresscircle@2.0.56)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.55"></a>

## 2.0.55

🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.54...@spectrum-css/progresscircle@2.0.55)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.54"></a>

## 2.0.54

🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.53...@spectrum-css/progresscircle@2.0.54)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.53"></a>

## 2.0.53

🗓
2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.52...@spectrum-css/progresscircle@2.0.53)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.52"></a>

## 2.0.52

🗓
2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.51...@spectrum-css/progresscircle@2.0.52)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.51"></a>

## 2.0.51

🗓
2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.50...@spectrum-css/progresscircle@2.0.51)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.50"></a>

## 2.0.50

🗓
2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.49...@spectrum-css/progresscircle@2.0.50)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.49"></a>

## 2.0.49

🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.48...@spectrum-css/progresscircle@2.0.49)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.48"></a>

## 2.0.48

🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.47...@spectrum-css/progresscircle@2.0.48)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.47"></a>

## 2.0.47

🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.46...@spectrum-css/progresscircle@2.0.47)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="2.0.46"></a>

## 2.0.46

🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.45...@spectrum-css/progresscircle@2.0.46)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.45"></a>

## 2.0.45

🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.44...@spectrum-css/progresscircle@2.0.45)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.44"></a>

## 2.0.44

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.43...@spectrum-css/progresscircle@2.0.44)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.43"></a>

## 2.0.43

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.42...@spectrum-css/progresscircle@2.0.43)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.42"></a>

## 2.0.42

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.41...@spectrum-css/progresscircle@2.0.42)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.41"></a>

## 2.0.41

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.40...@spectrum-css/progresscircle@2.0.41)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.40"></a>

## 2.0.40

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.39...@spectrum-css/progresscircle@2.0.40)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.39"></a>

## 2.0.39

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.38...@spectrum-css/progresscircle@2.0.39)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.38"></a>

## 2.0.38

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.37...@spectrum-css/progresscircle@2.0.38)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.37"></a>

## 2.0.37

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.36...@spectrum-css/progresscircle@2.0.37)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.36"></a>

## 2.0.36

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.35...@spectrum-css/progresscircle@2.0.36)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.35"></a>

## 2.0.35

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.34...@spectrum-css/progresscircle@2.0.35)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.34"></a>

## 2.0.34

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.33...@spectrum-css/progresscircle@2.0.34)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.33"></a>

## 2.0.33

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.31...@spectrum-css/progresscircle@2.0.33)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.32"></a>

## 2.0.32

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.31...@spectrum-css/progresscircle@2.0.32)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.31"></a>

## 2.0.31

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.30...@spectrum-css/progresscircle@2.0.31)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.30"></a>

## 2.0.30

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.29...@spectrum-css/progresscircle@2.0.30)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.29"></a>

## 2.0.29

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.28...@spectrum-css/progresscircle@2.0.29)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.28"></a>

## 2.0.28

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.27...@spectrum-css/progresscircle@2.0.28)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.27"></a>

## 2.0.27

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.25...@spectrum-css/progresscircle@2.0.27)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.26"></a>

## 2.0.26

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.25...@spectrum-css/progresscircle@2.0.26)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.25"></a>

## 2.0.25

🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.23...@spectrum-css/progresscircle@2.0.25)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.24"></a>

## 2.0.24

🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.23...@spectrum-css/progresscircle@2.0.24)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.23"></a>

## 2.0.23

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.22...@spectrum-css/progresscircle@2.0.23)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.22"></a>

## 2.0.22

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.21...@spectrum-css/progresscircle@2.0.22)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.21"></a>

## 2.0.21

🗓 2023-03-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.20...@spectrum-css/progresscircle@2.0.21)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.20"></a>

## 2.0.20

🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.19...@spectrum-css/progresscircle@2.0.20)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.19"></a>

## 2.0.19

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.18...@spectrum-css/progresscircle@2.0.19)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.18"></a>

## 2.0.18

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.17...@spectrum-css/progresscircle@2.0.18)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.17"></a>

## 2.0.17

🗓 2023-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.16...@spectrum-css/progresscircle@2.0.17)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.16"></a>

## 2.0.16

🗓 2023-03-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.15...@spectrum-css/progresscircle@2.0.16)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.15"></a>

## 2.0.15

🗓 2023-02-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.14...@spectrum-css/progresscircle@2.0.15)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.14"></a>

## 2.0.14

🗓 2023-02-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.13...@spectrum-css/progresscircle@2.0.14)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.13"></a>

## 2.0.13

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.12...@spectrum-css/progresscircle@2.0.13)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.12"></a>

## 2.0.12

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.11...@spectrum-css/progresscircle@2.0.12)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.11"></a>

## 2.0.11

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.10...@spectrum-css/progresscircle@2.0.11)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.10"></a>

## 2.0.10

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.9...@spectrum-css/progresscircle@2.0.10)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.9"></a>

## 2.0.9

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.8...@spectrum-css/progresscircle@2.0.9)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.8"></a>

## 2.0.8

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.6...@spectrum-css/progresscircle@2.0.8)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.7"></a>

## 2.0.7

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.6...@spectrum-css/progresscircle@2.0.7)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.6"></a>

## 2.0.6

🗓 2023-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.5...@spectrum-css/progresscircle@2.0.6)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.5"></a>

## 2.0.5

🗓 2022-12-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.4...@spectrum-css/progresscircle@2.0.5)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.4"></a>

## 2.0.4

🗓 2022-12-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.3...@spectrum-css/progresscircle@2.0.4)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.3"></a>

## 2.0.3

🗓 2022-11-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.2...@spectrum-css/progresscircle@2.0.3)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.2"></a>

## 2.0.2

🗓 2022-11-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.1...@spectrum-css/progresscircle@2.0.2)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.1"></a>

## 2.0.1

🗓 2022-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@2.0.0...@spectrum-css/progresscircle@2.0.1)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="2.0.0"></a>

## 2.0.0

🗓 2022-10-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.23...@spectrum-css/progresscircle@2.0.0)

- feat(progresscircle)!: migrate to core tokens ([27fdaea](https://github.com/adobe/spectrum-css/commit/27fdaea))

### 🛑 BREAKING CHANGES

- migrates progress circle to core tokens

Co-authored-by: Patrick Fulton <pfulton@adobe.com>

<a name="1.0.23"></a>

## 1.0.23

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.22...@spectrum-css/progresscircle@1.0.23)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.22"></a>

## 1.0.22

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.21...@spectrum-css/progresscircle@1.0.22)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.21"></a>

## 1.0.21

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.20...@spectrum-css/progresscircle@1.0.21)

### 🐛 Bug fixes

- progresscircle WHCM ([c24e9d8](https://github.com/adobe/spectrum-css/commit/c24e9d8))

<a name="1.0.20"></a>

## 1.0.20

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.19...@spectrum-css/progresscircle@1.0.20)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.19"></a>

## 1.0.19

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.18...@spectrum-css/progresscircle@1.0.19)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.18"></a>

## 1.0.18

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.17...@spectrum-css/progresscircle@1.0.18)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.17"></a>

## 1.0.17

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.16...@spectrum-css/progresscircle@1.0.17)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.16"></a>

## 1.0.16

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.15...@spectrum-css/progresscircle@1.0.16)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.15"></a>

## 1.0.15

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.14...@spectrum-css/progresscircle@1.0.15)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.14"></a>

## 1.0.14

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.13...@spectrum-css/progresscircle@1.0.14)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.13"></a>

## 1.0.13

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.12...@spectrum-css/progresscircle@1.0.13)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.12"></a>

## 1.0.12

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.11...@spectrum-css/progresscircle@1.0.12)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.11"></a>

## 1.0.11

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.9...@spectrum-css/progresscircle@1.0.11)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

<a name="1.0.10"></a>

## 1.0.10

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.10-beta.0...@spectrum-css/progresscircle@1.0.10)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.10-beta.0"></a>

## 1.0.10-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.9...@spectrum-css/progresscircle@1.0.10-beta.0)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.9"></a>

## 1.0.9

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.8...@spectrum-css/progresscircle@1.0.9)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.8"></a>

## 1.0.8

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.7...@spectrum-css/progresscircle@1.0.8)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.7"></a>

## 1.0.7

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.6...@spectrum-css/progresscircle@1.0.7)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.6"></a>

## 1.0.6

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.5...@spectrum-css/progresscircle@1.0.6)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.5"></a>

## 1.0.5

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.3-alpha.3...@spectrum-css/progresscircle@1.0.5)

### 🐛 Bug fixes

- **progresscircle:** force compositing to render in safari ([70c4eff](https://github.com/adobe/spectrum-css/commit/70c4eff))
- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="1.0.4"></a>

## 1.0.4

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.3-alpha.3...@spectrum-css/progresscircle@1.0.4)

### 🐛 Bug fixes

- **progresscircle:** force compositing to render in safari ([70c4eff](https://github.com/adobe/spectrum-css/commit/70c4eff))
- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="1.0.3"></a>

## 1.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.3-alpha.3...@spectrum-css/progresscircle@1.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="1.0.3-alpha.3"></a>

## 1.0.3-alpha.3

🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.3-alpha.2...@spectrum-css/progresscircle@1.0.3-alpha.3)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.3-alpha.2"></a>

## 1.0.3-alpha.2

🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.3-alpha.1...@spectrum-css/progresscircle@1.0.3-alpha.2)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.3-alpha.1"></a>

## 1.0.3-alpha.1

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.3-alpha.0...@spectrum-css/progresscircle@1.0.3-alpha.1)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.3-alpha.0"></a>

## 1.0.3-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.2...@spectrum-css/progresscircle@1.0.3-alpha.0)

### 🐛 Bug fixes

- updated progresscircle to use correct t-shirt tokens ([3dbed89](https://github.com/adobe/spectrum-css/commit/3dbed89))

<a name="1.0.2"></a>

## 1.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.1...@spectrum-css/progresscircle@1.0.2)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.1"></a>

## 1.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.0...@spectrum-css/progresscircle@1.0.1)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.0"></a>

## 1.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.0-beta.3...@spectrum-css/progresscircle@1.0.0)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.0-beta.3"></a>

## 1.0.0-beta.3

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.0-beta.2...@spectrum-css/progresscircle@1.0.0-beta.3)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.0-beta.2"></a>

## 1.0.0-beta.2

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/progresscircle@1.0.0-beta.1...@spectrum-css/progresscircle@1.0.0-beta.2)

**Note:** Version bump only for package @spectrum-css/progresscircle

<a name="1.0.0-beta.1"></a>

## 1.0.0-beta.1

🗓 2020-09-23

### 🐛 Bug fixes

- removed more deprecations ([70dd116](https://github.com/adobe/spectrum-css/commit/70dd116))

<a name="3.0.0-beta.2"></a>

## 3.0.0-beta.2

🗓 2020-05-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/circleloader@3.0.0-beta.1...@spectrum-css/circleloader@3.0.0-beta.2)

**Note:** Version bump only for package @spectrum-css/circleloader

<a name="3.0.0-beta.1"></a>

## 3.0.0-beta.1

🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/circleloader@3.0.0-beta.0...@spectrum-css/circleloader@3.0.0-beta.1)

**Note:** Version bump only for package @spectrum-css/circleloader

<a name="3.0.0-beta.0"></a>

## 3.0.0-beta.0

🗓 2020-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/circleloader@2.0.5...@spectrum-css/circleloader@3.0.0-beta.0)

### ✨ Features

- make Circle Loader support RTL ([f3be212](https://github.com/adobe/spectrum-css/commit/f3be212))

<a name="2.0.5"></a>

## 2.0.5

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/circleloader@2.0.4...@spectrum-css/circleloader@2.0.5)

**Note:** Version bump only for package @spectrum-css/circleloader

<a name="2.0.4"></a>

## 2.0.4

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/circleloader@2.0.3...@spectrum-css/circleloader@2.0.4)

**Note:** Version bump only for package @spectrum-css/circleloader

<a name="2.0.3"></a>

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/circleloader@2.0.2...@spectrum-css/circleloader@2.0.3)

**Note:** Version bump only for package @spectrum-css/circleloader

<a name="2.0.2"></a>

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/circleloader@2.0.1...@spectrum-css/circleloader@2.0.2)

**Note:** Version bump only for package @spectrum-css/circleloader

<a name="2.0.1"></a>

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/circleloader@2.0.0...@spectrum-css/circleloader@2.0.1)

**Note:** Version bump only for package @spectrum-css/circleloader

<a name="2.0.0"></a>

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)

### Migration guide

- **Circle loader component renamed**  
  Circle loader is now known as Progress circle. Replace all `.spectrum-CircleLoader*` classnames with `.spectrum-ProgressCircle*`.
