# Change Log

## 4.0.0-next.0

### Patch Changes

- Updated dependencies [[`bd934cc`](https://github.com/adobe/spectrum-css/commit/bd934cc9a5a43b2d453710d462a1faaa5046de08)]:
  - @spectrum-css/tokens@14.0.0-next.10
  - @spectrum-css/popover@8.0.0-next.0

## 3.3.0

### Minor Changes

- [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)! - Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/actionbutton@6.2.0
  - @spectrum-css/popover@7.2.0
  - @spectrum-css/link@5.2.0

## 3.2.0

### Minor Changes

- [#3253](https://github.com/adobe/spectrum-css/pull/3253) [`47f23a7`](https://github.com/adobe/spectrum-css/commit/47f23a762a5c84ffe3c82e7e1b0c4c9d5dc60f86) Thanks [@castastrophe](https://github.com/castastrophe)! - This update removes tokens defined locally that belonged in the global scope. To ensure no regressions, please upgrade your @spectrum-css/tokens package at the same time so you will pick up the component-level definitions now in the global tokens scope. References to `.spectrum--(light|dark|darkest|medium|large)` have been removed.

### Patch Changes

- Updated dependencies [[`47f23a7`](https://github.com/adobe/spectrum-css/commit/47f23a762a5c84ffe3c82e7e1b0c4c9d5dc60f86)]:
  - @spectrum-css/tokens@14.5.0

## 3.2.0

### Minor Changes

- [#3253](https://github.com/adobe/spectrum-css/pull/3253) [`47f23a7`](https://github.com/adobe/spectrum-css/commit/47f23a762a5c84ffe3c82e7e1b0c4c9d5dc60f86) Thanks [@castastrophe](https://github.com/castastrophe)! - This update removes tokens defined locally that belonged in the global scope. To ensure no regressions, please upgrade your @spectrum-css/tokens package at the same time so you will pick up the component-level definitions now in the global tokens scope. References to `.spectrum--(light|dark|darkest|medium|large)` have been removed.

### Patch Changes

- Updated dependencies [[`47f23a7`](https://github.com/adobe/spectrum-css/commit/47f23a762a5c84ffe3c82e7e1b0c4c9d5dc60f86)]:
  - @spectrum-css/tokens@14.5.0

## 3.1.3

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)! - Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/actionbutton@6.1.3
  - @spectrum-css/popover@7.1.6
  - @spectrum-css/link@5.1.3

## 3.1.2

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)! - Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/actionbutton@6.1.2
  - @spectrum-css/popover@7.1.5
  - @spectrum-css/link@5.1.2

## 3.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/actionbutton@6.1.1
  - @spectrum-css/popover@7.1.2
  - @spectrum-css/link@5.1.1

## 3.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/actionbutton@>=6
  - @spectrum-css/link@>=5
  - @spectrum-css/popover@>=7
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="3.0.0"></a>

## 3.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.1.5...@spectrum-css/contextualhelp@3.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGES

- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="2.1.5"></a>

## 2.1.5

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.1.4...@spectrum-css/contextualhelp@2.1.5)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.1.4"></a>

## 2.1.4

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.1.3...@spectrum-css/contextualhelp@2.1.4)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.1.3"></a>

## 2.1.3

🗓 2024-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.1.2...@spectrum-css/contextualhelp@2.1.3)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.1.2"></a>

## 2.1.2

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.1.1...@spectrum-css/contextualhelp@2.1.2)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.1.1"></a>

## 2.1.1

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.1.0"></a>

## 2.1.0

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.45...@spectrum-css/contextualhelp@2.1.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="2.0.45"></a>

## 2.0.45

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.44...@spectrum-css/contextualhelp@2.0.45)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.44"></a>

## 2.0.44

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.43...@spectrum-css/contextualhelp@2.0.44)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.43"></a>

## 2.0.43

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.41...@spectrum-css/contextualhelp@2.0.43)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.42"></a>

## 2.0.42

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.41...@spectrum-css/contextualhelp@2.0.42)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.41"></a>

## 2.0.41

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.40...@spectrum-css/contextualhelp@2.0.41)

### 🐛 Bug fixes

- **contextualhelp:**use spectrum-tokens var for font-size([7f29eda](https://github.com/adobe/spectrum-css/commit/7f29eda))

<a name="2.0.40"></a>

## 2.0.40

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.39...@spectrum-css/contextualhelp@2.0.40)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.39"></a>

## 2.0.39

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.38...@spectrum-css/contextualhelp@2.0.39)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.38"></a>

## 2.0.38

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.37...@spectrum-css/contextualhelp@2.0.38)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.37"></a>

## 2.0.37

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.36...@spectrum-css/contextualhelp@2.0.37)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.36"></a>

## 2.0.36

🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.35...@spectrum-css/contextualhelp@2.0.36)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.35"></a>

## 2.0.35

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.34...@spectrum-css/contextualhelp@2.0.35)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.34"></a>

## 2.0.34

🗓 2023-09-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.33...@spectrum-css/contextualhelp@2.0.34)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.33"></a>

## 2.0.33

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.32...@spectrum-css/contextualhelp@2.0.33)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.32"></a>

## 2.0.32

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.31...@spectrum-css/contextualhelp@2.0.32)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.31"></a>

## 2.0.31

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.30...@spectrum-css/contextualhelp@2.0.31)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="2.0.30"></a>

## 2.0.30

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.29...@spectrum-css/contextualhelp@2.0.30)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.29"></a>

## 2.0.29

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.27...@spectrum-css/contextualhelp@2.0.29)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.28"></a>

## 2.0.28

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.27...@spectrum-css/contextualhelp@2.0.28)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.27"></a>

## 2.0.27

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.26...@spectrum-css/contextualhelp@2.0.27)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.26"></a>

## 2.0.26

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.25...@spectrum-css/contextualhelp@2.0.26)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.25"></a>

## 2.0.25

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.24...@spectrum-css/contextualhelp@2.0.25)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.24"></a>

## 2.0.24

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.23...@spectrum-css/contextualhelp@2.0.24)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.23"></a>

## 2.0.23

🗓 2023-07-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.22...@spectrum-css/contextualhelp@2.0.23)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.22"></a>

## 2.0.22

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.21...@spectrum-css/contextualhelp@2.0.22)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.21"></a>

## 2.0.21

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.20...@spectrum-css/contextualhelp@2.0.21)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.20"></a>

## 2.0.20

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.19...@spectrum-css/contextualhelp@2.0.20)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.19"></a>

## 2.0.19

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.18...@spectrum-css/contextualhelp@2.0.19)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.18"></a>

## 2.0.18

🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.17...@spectrum-css/contextualhelp@2.0.18)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.17"></a>

## 2.0.17

🗓 2023-06-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.16...@spectrum-css/contextualhelp@2.0.17)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.16"></a>

## 2.0.16

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.15...@spectrum-css/contextualhelp@2.0.16)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.15"></a>

## 2.0.15

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.14...@spectrum-css/contextualhelp@2.0.15)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.14"></a>

## 2.0.14

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.13...@spectrum-css/contextualhelp@2.0.14)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="2.0.13"></a>

## 2.0.13

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.12...@spectrum-css/contextualhelp@2.0.13)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.12"></a>

## 2.0.12

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.11...@spectrum-css/contextualhelp@2.0.12)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.11"></a>

## 2.0.11

🗓 2023-05-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.10...@spectrum-css/contextualhelp@2.0.11)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.10"></a>

## 2.0.10

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.9...@spectrum-css/contextualhelp@2.0.10)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.9"></a>

## 2.0.9

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.8...@spectrum-css/contextualhelp@2.0.9)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.8"></a>

## 2.0.8

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.7...@spectrum-css/contextualhelp@2.0.8)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.7"></a>

## 2.0.7

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.6...@spectrum-css/contextualhelp@2.0.7)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.6"></a>

## 2.0.6

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.5...@spectrum-css/contextualhelp@2.0.6)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.5"></a>

## 2.0.5

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.4...@spectrum-css/contextualhelp@2.0.5)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.4"></a>

## 2.0.4

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.3...@spectrum-css/contextualhelp@2.0.4)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.3"></a>

## 2.0.3

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.2...@spectrum-css/contextualhelp@2.0.3)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.2"></a>

## 2.0.2

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.1...@spectrum-css/contextualhelp@2.0.2)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.1"></a>

## 2.0.1

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@2.0.0...@spectrum-css/contextualhelp@2.0.1)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="2.0.0"></a>

## 2.0.0

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@1.0.13...@spectrum-css/contextualhelp@2.0.0)

- fix(contextualhelp)!: dark mode font color (#1817) ([4e103f1](https://github.com/adobe/spectrum-css/commit/4e103f1)), closes [#1817](https://github.com/adobe/spectrum-css/issues/1817)

### 🛑 BREAKING CHANGES

- removes `--mod-spectrum-contextual-help-title-size`

- fix(contextualhelp): add Heading and Body classes - add spectrum-Heading and spectrum-Body classes to get global colors
- fix(contextualhelp): add tokens for font color
- fix(contextualhelp): remove unneeded clases and update tokens - remove spectrum-Heading and spectrum-Body classes - update tokens to new contextual help specific ones
- fix(contextualhelp): fix button display
- chore(contextualhelp): remove Heading and Body classes from story

<a name="1.0.13"></a>

## 1.0.13

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@1.0.12...@spectrum-css/contextualhelp@1.0.13)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="1.0.12"></a>

## 1.0.12

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@1.0.10...@spectrum-css/contextualhelp@1.0.12)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="1.0.11"></a>

## 1.0.11

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@1.0.10...@spectrum-css/contextualhelp@1.0.11)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="1.0.10"></a>

## 1.0.10

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@1.0.9...@spectrum-css/contextualhelp@1.0.10)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="1.0.9"></a>

## 1.0.9

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@1.0.8...@spectrum-css/contextualhelp@1.0.9)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="1.0.8"></a>

## 1.0.8

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@1.0.7...@spectrum-css/contextualhelp@1.0.8)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="1.0.7"></a>

## 1.0.7

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@1.0.6...@spectrum-css/contextualhelp@1.0.7)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="1.0.6"></a>

## 1.0.6

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@1.0.4...@spectrum-css/contextualhelp@1.0.6)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="1.0.5"></a>

## 1.0.5

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@1.0.4...@spectrum-css/contextualhelp@1.0.5)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="1.0.4"></a>

## 1.0.4

🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@1.0.2...@spectrum-css/contextualhelp@1.0.4)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="1.0.3"></a>

## 1.0.3

🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@1.0.2...@spectrum-css/contextualhelp@1.0.3)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="1.0.2"></a>

## 1.0.2

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@1.0.1...@spectrum-css/contextualhelp@1.0.2)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="1.0.1"></a>

## 1.0.1

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/contextualhelp@1.0.0...@spectrum-css/contextualhelp@1.0.1)

**Note:** Version bump only for package @spectrum-css/contextualhelp

<a name="1.0.0"></a>

## 1.0.0

🗓 2023-03-27

### ✨ Features

- **contextualhelp:** create contextual help component ([#1676](https://github.com/adobe/spectrum-css/issues/1676)) ([fd9edbb](https://github.com/adobe/spectrum-css/commit/fd9edbb))
