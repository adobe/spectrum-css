# Change log

## 5.0.0-s2-foundations.7

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`a4e0278`](https://github.com/adobe/spectrum-css/commit/a4e0278af07d97b668a73fabcbb18b37411ecb86) Thanks [@pfulton](https://github.com/pfulton)! - Update mdx template to include TaggedReleases and ComponentDetails

## 5.0.0-s2-foundations.6

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`11a0032`](https://github.com/adobe/spectrum-css/commit/11a00323addbf28b9430d27d9cbc5f30bc851b65) Thanks [@pfulton](https://github.com/pfulton)! - Bug fixes to S1 & Express theming across all components

## 5.0.0-s2-foundations.5

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`5546ec6`](https://github.com/adobe/spectrum-css/commit/5546ec6a508eb249ede78031db22ddf5972e5c05) Thanks [@pfulton](https://github.com/pfulton)! - - Accordion: Flatten sizing variables in theme layer
  - ActionButton: Fix typo in variable name "\*-defaul-selectedt"
  - Move out rtl logical transform from theme to index.css for: calendar, pagination, treeview

## 5.0.0-s2-foundations.4

### Patch Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`485128c`](https://github.com/adobe/spectrum-css/commit/485128ca7947acb064f31e4118044a3f7e3f88b5) Thanks [@pfulton](https://github.com/pfulton)! - Corrects a faulty regex that was negatively affecting compilation of custom properties

## 5.0.0-s2-foundations.3

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`6b12d37`](https://github.com/adobe/spectrum-css/commit/6b12d375c12b36f387b331fff42b24bc7c3845df) Thanks [@pfulton](https://github.com/pfulton)! - fixes a compilation issue in the tokens dist artifacts

## 5.0.0-s2-foundations.2

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`b00388b`](https://github.com/adobe/spectrum-css/commit/b00388b3ab026989f261f7bcdd77699521f45d58) Thanks [@pfulton](https://github.com/pfulton)! - Preserves `themes` folder in `dist` artifacts for easier downstream consumption

## 5.0.0-s2-foundations.1

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`39bbd6c`](https://github.com/adobe/spectrum-css/commit/39bbd6cbb7eac7c71515ef2417554cb115eba00e) Thanks [@pfulton](https://github.com/pfulton)! - Fixes an issue where vars.css was not being populated with the correct values

## 5.0.0-s2-foundations.0

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce) Thanks [@pfulton](https://github.com/pfulton)! - S2 colors + grays foundation

## 4.1.0

### Minor Changes

📝 [#3139](https://github.com/adobe/spectrum-css/pull/3139) [`5c8eb7f`](https://github.com/adobe/spectrum-css/commit/5c8eb7f1960fe3a72889dea0c3421c9fbb99d781) Thanks [@castastrophe](https://github.com/castastrophe)!

- Update mdx template to include TaggedReleases and ComponentDetails

## 4.0.2

### Patch Changes

📝 [#2775](https://github.com/adobe/spectrum-css/pull/2775) [`2452637`](https://github.com/adobe/spectrum-css/commit/2452637d1179b9b2b025dafeb5834720712413d7) Thanks [@castastrophe](https://github.com/castastrophe)!

- Dependency minor and patch updates to support new features in tools leveraged

## 4.0.1

### Patch Changes

📝 [#2726](https://github.com/adobe/spectrum-css/pull/2726) [`add5ac2`](https://github.com/adobe/spectrum-css/commit/add5ac24d0cfea2baba4a2ceab8e71f07473797e) Thanks [@castastrophe](https://github.com/castastrophe)!

- The plopfile entry point leveraged a require.resolve in an ES module format without setting up the require functionality first

## 4.0.0

### Major Changes

📝 [#2671](https://github.com/adobe/spectrum-css/pull/2671) [`9130dd9`](https://github.com/adobe/spectrum-css/commit/9130dd9eee61abd4ae6a02c92a333f66bc5afdcf) Thanks [@castastrophe](https://github.com/castastrophe)!

- Support for Node v18 dropped; upgraded to Node v20

## 3.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.1.0...@spectrum-css/generator@3.0.0)

- feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGE

- Removes component-builder & component-builder-simple for script leveraging postcss
- Imports added to index.css and themes/express.css

## 2.1.0

🗓 2024-02-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.20...@spectrum-css/generator@2.1.0)

### ✨ Features

- **preview:** add figma support to storybook [CSS-284] ([#1680](https://github.com/adobe/spectrum-css/issues/1680))([3c6194e](https://github.com/adobe/spectrum-css/commit/3c6194e))

## 2.0.20

🗓 2024-02-06

## 2.0.19

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.18...@spectrum-css/generator@2.0.19)

**Note:** Version bump only for package @spectrum-css/generator

## 2.0.18

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.14...@spectrum-css/generator@2.0.18)

**Note:** Version bump only for package @spectrum-css/generator

## 2.0.17

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.14...@spectrum-css/generator@2.0.17)

**Note:** Version bump only for package @spectrum-css/generator

## 2.0.14

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.13...@spectrum-css/generator@2.0.14)

**Note:** Version bump only for package @spectrum-css/generator

## 2.0.13

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.12...@spectrum-css/generator@2.0.13)

**Note:** Version bump only for package @spectrum-css/generator

## 2.0.12

🗓 2023-07-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.11...@spectrum-css/generator@2.0.12)

**Note:** Version bump only for package @spectrum-css/generator

## 2.0.11

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.10...@spectrum-css/generator@2.0.11)

**Note:** Version bump only for package @spectrum-css/generator

## 2.0.10

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.9...@spectrum-css/generator@2.0.10)

**Note:** Version bump only for package @spectrum-css/generator

## 2.0.9

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.8...@spectrum-css/generator@2.0.9)

- **generator:** restore files to pre-formatted state([189ced1](https://github.com/adobe/spectrum-css/commit/189ced1))

## 2.0.8

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.7...@spectrum-css/generator@2.0.8)

**Note:** Version bump only for package @spectrum-css/generator

## 2.0.7

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.6...@spectrum-css/generator@2.0.7)

**Note:** Version bump only for package @spectrum-css/generator

## 2.0.6

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.5...@spectrum-css/generator@2.0.6)

**Note:** Version bump only for package @spectrum-css/generator

## 2.0.5

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.3...@spectrum-css/generator@2.0.5)

**Note:** Version bump only for package @spectrum-css/generator

## 2.0.4

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.3...@spectrum-css/generator@2.0.4)

**Note:** Version bump only for package @spectrum-css/generator

## 2.0.3

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.2...@spectrum-css/generator@2.0.3)

**Note:** Version bump only for package @spectrum-css/generator

## 2.0.2

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.1...@spectrum-css/generator@2.0.2)

**Note:** Version bump only for package @spectrum-css/generator

## 2.0.1

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@2.0.0...@spectrum-css/generator@2.0.1)

**Note:** Version bump only for package @spectrum-css/generator

## 2.0.0

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@1.0.5...@spectrum-css/generator@2.0.0)

- chore(tokens)!: use latest dependency & fix build error (#1591) ([f2532e7](https://github.com/adobe/spectrum-css/commit/f2532e7)), closes [#1591](https://github.com/adobe/spectrum-css/issues/1591)

### 🛑 BREAKING CHANGE

- uses latest `@adobe/spectrum-tokens` dependency which includes token renames

## 1.0.5

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@1.0.4...@spectrum-css/generator@1.0.5)

**Note:** Version bump only for package @spectrum-css/generator

## 1.0.4

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@1.0.2...@spectrum-css/generator@1.0.4)

**Note:** Version bump only for package @spectrum-css/generator

## 1.0.3

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@1.0.2...@spectrum-css/generator@1.0.3)

**Note:** Version bump only for package @spectrum-css/generator

## 1.0.2

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/generator@1.0.1...@spectrum-css/generator@1.0.2)

**Note:** Version bump only for package @spectrum-css/generator

## 1.0.1

🗓 2023-01-09

**Note:** Version bump only for package @spectrum-css/generator
