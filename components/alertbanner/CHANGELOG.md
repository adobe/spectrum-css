# Change Log

<<<<<<< HEAD
## 2.3.0
=======
## 3.0.0-s2-foundations.12

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`5546ec6`](https://github.com/adobe/spectrum-css/commit/5546ec6a508eb249ede78031db22ddf5972e5c05) Thanks [@pfulton](https://github.com/pfulton)! - - Accordion: Flatten sizing variables in theme layer
  - ActionButton: Fix typo in variable name "\*-defaul-selectedt"
  - Move out rtl logical transform from theme to index.css for: calendar, pagination, treeview

### Patch Changes

- Updated dependencies [[`5546ec6`](https://github.com/adobe/spectrum-css/commit/5546ec6a508eb249ede78031db22ddf5972e5c05)]:
  - @spectrum-css/closebutton@6.0.0-s2-foundations.12
  - @spectrum-css/divider@4.0.0-s2-foundations.12
  - @spectrum-css/button@14.0.0-s2-foundations.12
  - @spectrum-css/icon@8.0.0-s2-foundations.13
  - @spectrum-css/tokens@15.0.0-s2-foundations.13

## 3.0.0-s2-foundations.11

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`b0862e1`](https://github.com/adobe/spectrum-css/commit/b0862e1a5b95c19443fd919c6baf4b4ea9ba79c1) Thanks [@pfulton](https://github.com/pfulton)! - Updated build to set cssnano to discardUnused: false

### Patch Changes

- Updated dependencies [[`b0862e1`](https://github.com/adobe/spectrum-css/commit/b0862e1a5b95c19443fd919c6baf4b4ea9ba79c1)]:
  - @spectrum-css/closebutton@6.0.0-s2-foundations.11
  - @spectrum-css/divider@4.0.0-s2-foundations.11
  - @spectrum-css/button@14.0.0-s2-foundations.11
  - @spectrum-css/icon@8.0.0-s2-foundations.12
  - @spectrum-css/tokens@15.0.0-s2-foundations.12

## 3.0.0-s2-foundations.10
>>>>>>> ae954b540 (chore: release (s2-foundations) (#2964))

### Minor Changes

- [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)! - Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/closebutton@5.3.0
  - @spectrum-css/divider@3.2.0
  - @spectrum-css/button@13.5.0
  - @spectrum-css/icon@7.2.0

## 2.2.2

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)! - Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/closebutton@5.1.3
  - @spectrum-css/divider@3.1.3
  - @spectrum-css/button@13.1.3
  - @spectrum-css/icon@7.1.4

## 2.2.1

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)! - Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/closebutton@5.1.2
  - @spectrum-css/divider@3.1.2
  - @spectrum-css/button@13.1.2
  - @spectrum-css/icon@7.1.3

## 2.2.0

### Minor Changes

- [#2762](https://github.com/adobe/spectrum-css/pull/2762) [`07eb44e`](https://github.com/adobe/spectrum-css/commit/07eb44ed6d7c067e55106be7f8c4fe917b2a63eb) Thanks [@jawinn](https://github.com/jawinn)! - The alert banner component now occupies all available space until it reaches the maximum allowed width.
  The token previously used for the fixed width, `--spectrum-alert-banner-width`, is now used for the maximum width.
  This includes the additional of a new mod custom property: `--mod-alert-banner-max-inline-size`

## 2.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/closebutton@5.1.1
  - @spectrum-css/divider@3.1.1
  - @spectrum-css/button@13.1.1
  - @spectrum-css/icon@7.1.1

## 2.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/button@>=13
  - @spectrum-css/closebutton@>=5
  - @spectrum-css/divider@>=3
  - @spectrum-css/icon@>=7
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="2.0.0"></a>

## 2.0.0

🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.41...@spectrum-css/alertbanner@2.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="1.1.41"></a>

## 1.1.41

🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.40...@spectrum-css/alertbanner@1.1.41)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.40"></a>

## 1.1.40

🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.39...@spectrum-css/alertbanner@1.1.40)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.39"></a>

## 1.1.39

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.38...@spectrum-css/alertbanner@1.1.39)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.38"></a>

## 1.1.38

🗓
2024-02-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.37...@spectrum-css/alertbanner@1.1.38)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.37"></a>

## 1.1.37

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.36"></a>

## 1.1.36

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.35...@spectrum-css/alertbanner@1.1.36)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.35"></a>

## 1.1.35

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.34...@spectrum-css/alertbanner@1.1.35)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.34"></a>

## 1.1.34

🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.33...@spectrum-css/alertbanner@1.1.34)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.33"></a>

## 1.1.33

🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.31...@spectrum-css/alertbanner@1.1.33)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.32"></a>

## 1.1.32

🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.31...@spectrum-css/alertbanner@1.1.32)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.31"></a>

## 1.1.31

🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.30...@spectrum-css/alertbanner@1.1.31)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.30"></a>

## 1.1.30

🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.29...@spectrum-css/alertbanner@1.1.30)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.29"></a>

## 1.1.29

🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.28...@spectrum-css/alertbanner@1.1.29)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.28"></a>

## 1.1.28

🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.27...@spectrum-css/alertbanner@1.1.28)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.27"></a>

## 1.1.27

🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.26...@spectrum-css/alertbanner@1.1.27)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.26"></a>

## 1.1.26

🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.25...@spectrum-css/alertbanner@1.1.26)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.25"></a>

## 1.1.25

🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.24...@spectrum-css/alertbanner@1.1.25)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.24"></a>

## 1.1.24

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.23...@spectrum-css/alertbanner@1.1.24)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.23"></a>

## 1.1.23

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.22...@spectrum-css/alertbanner@1.1.23)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.22"></a>

## 1.1.22

🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.21...@spectrum-css/alertbanner@1.1.22)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="1.1.21"></a>

## 1.1.21

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.20...@spectrum-css/alertbanner@1.1.21)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.20"></a>

## 1.1.20

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.18...@spectrum-css/alertbanner@1.1.20)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.19"></a>

## 1.1.19

🗓
2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.18...@spectrum-css/alertbanner@1.1.19)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.18"></a>

## 1.1.18

🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.17...@spectrum-css/alertbanner@1.1.18)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.17"></a>

## 1.1.17

🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.16...@spectrum-css/alertbanner@1.1.17)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.16"></a>

## 1.1.16

🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.15...@spectrum-css/alertbanner@1.1.16)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.15"></a>

## 1.1.15

🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.14...@spectrum-css/alertbanner@1.1.15)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.14"></a>

## 1.1.14

🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.13...@spectrum-css/alertbanner@1.1.14)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.13"></a>

## 1.1.13

🗓
2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.12...@spectrum-css/alertbanner@1.1.13)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.12"></a>

## 1.1.12

🗓
2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.11...@spectrum-css/alertbanner@1.1.12)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.11"></a>

## 1.1.11

🗓
2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.10...@spectrum-css/alertbanner@1.1.11)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.10"></a>

## 1.1.10

🗓
2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.9...@spectrum-css/alertbanner@1.1.10)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.9"></a>

## 1.1.9

🗓
2023-06-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.8...@spectrum-css/alertbanner@1.1.9)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.8"></a>

## 1.1.8

🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.7...@spectrum-css/alertbanner@1.1.8)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.7"></a>

## 1.1.7

🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.6...@spectrum-css/alertbanner@1.1.7)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.6"></a>

## 1.1.6

🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.5...@spectrum-css/alertbanner@1.1.6)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="1.1.5"></a>

## 1.1.5

🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.4...@spectrum-css/alertbanner@1.1.5)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.4"></a>

## 1.1.4

🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.3...@spectrum-css/alertbanner@1.1.4)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.3"></a>

## 1.1.3

🗓 2023-05-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.2...@spectrum-css/alertbanner@1.1.3)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.2"></a>

## 1.1.2

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.1...@spectrum-css/alertbanner@1.1.2)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.1"></a>

## 1.1.1

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertbanner@1.1.0...@spectrum-css/alertbanner@1.1.1)

**Note:** Version bump only for package @spectrum-css/alertbanner

<a name="1.1.0"></a>

## 1.1.0

🗓 2023-05-22

### ✨ Features

- **alertbanner:** add AlertBanner component ([#1798](https://github.com/adobe/spectrum-css/issues/1798)) ([1610e7a](https://github.com/adobe/spectrum-css/commit/1610e7a))
