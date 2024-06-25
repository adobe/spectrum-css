# Change Log

## 5.0.0-s2-foundations.2

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`b00388b`](https://github.com/adobe/spectrum-css/commit/b00388b3ab026989f261f7bcdd77699521f45d58) Thanks [@pfulton](https://github.com/pfulton)! - Preserves `themes` folder in `dist` artifacts for easier downstream consumption

## 5.0.0-s2-foundations.1

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`39bbd6c`](https://github.com/adobe/spectrum-css/commit/39bbd6cbb7eac7c71515ef2417554cb115eba00e) Thanks [@pfulton](https://github.com/pfulton)! - Fixes an issue where vars.css was not being populated with the correct values

## 5.0.0-s2-foundations.0

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce) Thanks [@pfulton](https://github.com/pfulton)! - S2 colors + grays foundation

## 4.0.2

### Patch Changes

- [#2775](https://github.com/adobe/spectrum-css/pull/2775) [`2452637`](https://github.com/adobe/spectrum-css/commit/2452637d1179b9b2b025dafeb5834720712413d7) Thanks [@castastrophe](https://github.com/castastrophe)! - Dependency minor and patch updates to support new features in tools leveraged

## 4.0.1

### Patch Changes

- [#2726](https://github.com/adobe/spectrum-css/pull/2726) [`add5ac2`](https://github.com/adobe/spectrum-css/commit/add5ac24d0cfea2baba4a2ceab8e71f07473797e) Thanks [@castastrophe](https://github.com/castastrophe)! - The plopfile entry point leveraged a require.resolve in an ES module format without setting up the require functionality first

## 4.0.0

### Major Changes

- [#2671](https://github.com/adobe/spectrum-css/pull/2671) [`9130dd9`](https://github.com/adobe/spectrum-css/commit/9130dd9eee61abd4ae6a02c92a333f66bc5afdcf) Thanks [@castastrophe](https://github.com/castastrophe)! - Support for Node v18 dropped; upgraded to Node v20

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="3.0.0"></a>

## 3.0.0

🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.1.0...@spectrum-css/generator@3.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="2.1.0"></a>

## 2.1.0

🗓
2024-02-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.20...@spectrum-css/generator@2.1.0)

### ✨ Features

- **preview:**add figma support to storybook [CSS-284] ([#1680](https://github.com/adobe/spectrum-css/issues/1680))([3c6194e](https://github.com/adobe/spectrum-css/commit/3c6194e))

<a name="2.0.20"></a>

## 2.0.20

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/generator

<a name="2.0.19"></a>

## 2.0.19

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.18...@spectrum-css/generator@2.0.19)

**Note:** Version bump only for package @spectrum-css/generator

<a name="2.0.18"></a>

## 2.0.18

🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.14...@spectrum-css/generator@2.0.18)

**Note:** Version bump only for package @spectrum-css/generator

<a name="2.0.17"></a>

## 2.0.17

🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.14...@spectrum-css/generator@2.0.17)

**Note:** Version bump only for package @spectrum-css/generator

<a name="2.0.14"></a>

## 2.0.14

🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.13...@spectrum-css/generator@2.0.14)

**Note:** Version bump only for package @spectrum-css/generator

<a name="2.0.13"></a>

## 2.0.13

🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.12...@spectrum-css/generator@2.0.13)

**Note:** Version bump only for package @spectrum-css/generator

<a name="2.0.12"></a>

## 2.0.12

🗓
2023-07-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.11...@spectrum-css/generator@2.0.12)

**Note:** Version bump only for package @spectrum-css/generator

<a name="2.0.11"></a>

## 2.0.11

🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.10...@spectrum-css/generator@2.0.11)

**Note:** Version bump only for package @spectrum-css/generator

<a name="2.0.10"></a>

## 2.0.10

🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.9...@spectrum-css/generator@2.0.10)

**Note:** Version bump only for package @spectrum-css/generator

<a name="2.0.9"></a>

## 2.0.9

🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.8...@spectrum-css/generator@2.0.9)

### 🐛 Bug fixes

- **generator:**restore files to pre-formatted state([189ced1](https://github.com/adobe/spectrum-css/commit/189ced1))

<a name="2.0.8"></a>

## 2.0.8

🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.7...@spectrum-css/generator@2.0.8)

**Note:** Version bump only for package @spectrum-css/generator

<a name="2.0.7"></a>

## 2.0.7

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.6...@spectrum-css/generator@2.0.7)

**Note:** Version bump only for package @spectrum-css/generator

<a name="2.0.6"></a>

## 2.0.6

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.5...@spectrum-css/generator@2.0.6)

**Note:** Version bump only for package @spectrum-css/generator

<a name="2.0.5"></a>

## 2.0.5

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.3...@spectrum-css/generator@2.0.5)

**Note:** Version bump only for package @spectrum-css/generator

<a name="2.0.4"></a>

## 2.0.4

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.3...@spectrum-css/generator@2.0.4)

**Note:** Version bump only for package @spectrum-css/generator

<a name="2.0.3"></a>

## 2.0.3

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.2...@spectrum-css/generator@2.0.3)

**Note:** Version bump only for package @spectrum-css/generator

<a name="2.0.2"></a>

## 2.0.2

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.1...@spectrum-css/generator@2.0.2)

**Note:** Version bump only for package @spectrum-css/generator

<a name="2.0.1"></a>

## 2.0.1

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.0...@spectrum-css/generator@2.0.1)

**Note:** Version bump only for package @spectrum-css/generator

<a name="2.0.0"></a>

## 2.0.0

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@1.0.5...@spectrum-css/generator@2.0.0)

- chore(tokens)!: use latest dependency & fix build error (#1591) ([f2532e7](https://github.com/adobe/spectrum-css/commit/f2532e7)), closes [#1591](https://github.com/adobe/spectrum-css/issues/1591)

### 🛑 BREAKING CHANGES

- uses latest `@adobe/spectrum-tokens` dependency which includes token renames

<a name="1.0.5"></a>

## 1.0.5

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@1.0.4...@spectrum-css/generator@1.0.5)

**Note:** Version bump only for package @spectrum-css/generator

<a name="1.0.4"></a>

## 1.0.4

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@1.0.2...@spectrum-css/generator@1.0.4)

**Note:** Version bump only for package @spectrum-css/generator

<a name="1.0.3"></a>

## 1.0.3

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@1.0.2...@spectrum-css/generator@1.0.3)

**Note:** Version bump only for package @spectrum-css/generator

<a name="1.0.2"></a>

## 1.0.2

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@1.0.1...@spectrum-css/generator@1.0.2)

**Note:** Version bump only for package @spectrum-css/generator

<a name="1.0.1"></a>

## 1.0.1

🗓 2023-01-09

**Note:** Version bump only for package @spectrum-css/generator
