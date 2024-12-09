# Change Log

## 2.1.1-next.0

### Patch Changes

- Updated dependencies [[`bd934cc`](https://github.com/adobe/spectrum-css/commit/bd934cc9a5a43b2d453710d462a1faaa5046de08), [`bd934cc`](https://github.com/adobe/spectrum-css/commit/bd934cc9a5a43b2d453710d462a1faaa5046de08), [`bd934cc`](https://github.com/adobe/spectrum-css/commit/bd934cc9a5a43b2d453710d462a1faaa5046de08)]:
  - @spectrum-css/buttongroup@7.0.0-next.4
  - @spectrum-css/tokens@14.0.0-next.10
  - @spectrum-css/modal@5.1.1-next.0
  - @spectrum-css/underlay@4.1.1-next.0

## 2.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/buttongroup@>=7
  - @spectrum-css/divider@>=3
  - @spectrum-css/icon@>=7
  - @spectrum-css/modal@>=5
  - @spectrum-css/underlay@>=4
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="2.0.0"></a>
#2.0.0
🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertdialog@1.2.4...@spectrum-css/alertdialog@2.0.0)

### ✨ Features

\*use storybook v8 ([#2604](https://github.com/adobe/spectrum-css/issues/2604))([166ab23](https://github.com/adobe/spectrum-css/commit/166ab23))

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="1.2.4"></a>
##1.2.4
🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertdialog@1.2.3...@spectrum-css/alertdialog@1.2.4)

**Note:** Version bump only for package @spectrum-css/alertdialog

<a name="1.2.3"></a>
##1.2.3
🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertdialog@1.2.2...@spectrum-css/alertdialog@1.2.3)

**Note:** Version bump only for package @spectrum-css/alertdialog

<a name="1.2.2"></a>
##1.2.2
🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertdialog@1.2.1...@spectrum-css/alertdialog@1.2.2)

**Note:** Version bump only for package @spectrum-css/alertdialog

<a name="1.2.1"></a>
##1.2.1
🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/alertdialog

<a name="1.2.0"></a>
#1.2.0
🗓
2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertdialog@1.1.0...@spectrum-css/alertdialog@1.2.0)

### ✨ Features

- **overlay,commons:**deprecate overlay; migrate references to commons ([#2429](https://github.com/adobe/spectrum-css/issues/2429))([7eecd96](https://github.com/adobe/spectrum-css/commit/7eecd96))

<a name="1.1.0"></a>
#1.1.0
🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertdialog@1.0.16...@spectrum-css/alertdialog@1.1.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="1.0.16"></a>
##1.0.16
🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertdialog@1.0.15...@spectrum-css/alertdialog@1.0.16)

**Note:** Version bump only for package @spectrum-css/alertdialog

<a name="1.0.15"></a>
##1.0.15
🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertdialog@1.0.14...@spectrum-css/alertdialog@1.0.15)

**Note:** Version bump only for package @spectrum-css/alertdialog

<a name="1.0.14"></a>
##1.0.14
🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertdialog@1.0.12...@spectrum-css/alertdialog@1.0.14)

**Note:** Version bump only for package @spectrum-css/alertdialog

<a name="1.0.13"></a>
##1.0.13
🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertdialog@1.0.12...@spectrum-css/alertdialog@1.0.13)

**Note:** Version bump only for package @spectrum-css/alertdialog

<a name="1.0.12"></a>
##1.0.12
🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertdialog@1.0.11...@spectrum-css/alertdialog@1.0.12)

**Note:** Version bump only for package @spectrum-css/alertdialog

<a name="1.0.11"></a>
##1.0.11
🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertdialog@1.0.10...@spectrum-css/alertdialog@1.0.11)

**Note:** Version bump only for package @spectrum-css/alertdialog

<a name="1.0.10"></a>
##1.0.10
🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertdialog@1.0.9...@spectrum-css/alertdialog@1.0.10)

**Note:** Version bump only for package @spectrum-css/alertdialog

<a name="1.0.9"></a>
##1.0.9
🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertdialog@1.0.8...@spectrum-css/alertdialog@1.0.9)

**Note:** Version bump only for package @spectrum-css/alertdialog

<a name="1.0.8"></a>
##1.0.8
🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertdialog@1.0.7...@spectrum-css/alertdialog@1.0.8)

**Note:** Version bump only for package @spectrum-css/alertdialog

<a name="1.0.7"></a>
##1.0.7
🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertdialog@1.0.6...@spectrum-css/alertdialog@1.0.7)

**Note:** Version bump only for package @spectrum-css/alertdialog

<a name="1.0.6"></a>
##1.0.6
🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertdialog@1.0.5...@spectrum-css/alertdialog@1.0.6)

**Note:** Version bump only for package @spectrum-css/alertdialog

<a name="1.0.5"></a>
##1.0.5
🗓
2023-09-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertdialog@1.0.4...@spectrum-css/alertdialog@1.0.5)

**Note:** Version bump only for package @spectrum-css/alertdialog

<a name="1.0.4"></a>
##1.0.4
🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertdialog@1.0.3...@spectrum-css/alertdialog@1.0.4)

**Note:** Version bump only for package @spectrum-css/alertdialog

<a name="1.0.3"></a>
##1.0.3
🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertdialog@1.0.2...@spectrum-css/alertdialog@1.0.3)

**Note:** Version bump only for package @spectrum-css/alertdialog

<a name="1.0.2"></a>
##1.0.2
🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertdialog@1.0.1...@spectrum-css/alertdialog@1.0.2)

**Note:** Version bump only for package @spectrum-css/alertdialog

<a name="1.0.1"></a>
##1.0.1
🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/alertdialog@1.0.0...@spectrum-css/alertdialog@1.0.1)

**Note:** Version bump only for package @spectrum-css/alertdialog

<a name="1.0.0"></a>
#1.0.0
🗓
2023-08-22

\*feat(alertdialog)!: new component([d6b7286](https://github.com/adobe/spectrum-css/commit/d6b7286))

    	###
    	🛑 BREAKING CHANGES

    		*
    		new alert dialog component added
