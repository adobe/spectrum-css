# Change Log

## 10.0.1

### Patch Changes

- [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)! - Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/actionbutton@6.3.1
  - @spectrum-css/typography@7.0.1
  - @spectrum-css/checkbox@9.3.1
  - @spectrum-css/asset@6.0.1
  - @spectrum-css/icon@8.0.1

## 10.0.0

### Major Changes

- [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)! - Remove empty theme references to reduce complexity for components that don't need to define any mappings. This involves removing the source `themes` directories with the empty `spectrum.css` and `express.com` files as well as removing the following empty or unnecessary exports:

  - `index-base.css`
  - `index-theme.css`
  - `themes/spectrum.css`
  - `themes/express.css`

### Minor Changes

- [#3359](https://github.com/adobe/spectrum-css/pull/3359) [`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b) Thanks [@cdransf](https://github.com/cdransf)! - This resolves our remaining stylelint issues around undefined tokens, rule order, unused values and color syntax.

  - Updates invalid color syntax from `rgba(N, N, N, N)` to `rgba(N N N / N)`.
  - In cases of duplicate properties, preserves the property that would be applied given current code structure.
  - Updates misnamed tokens to use valid tokens (`table/index.css`).

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/checkbox@9.3.0
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/typography@7.0.0
  - @spectrum-css/asset@6.0.0
  - @spectrum-css/icon@8.0.0
  - @spectrum-css/actionbutton@6.3.0

## 9.3.0

### Minor Changes

- [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)! - Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/actionbutton@6.2.0
  - @spectrum-css/typography@6.2.0
  - @spectrum-css/checkbox@9.2.0
  - @spectrum-css/asset@5.2.0
  - @spectrum-css/icon@7.2.0

## 9.2.0

### Minor Changes

- [#3253](https://github.com/adobe/spectrum-css/pull/3253) [`47f23a7`](https://github.com/adobe/spectrum-css/commit/47f23a762a5c84ffe3c82e7e1b0c4c9d5dc60f86) Thanks [@castastrophe](https://github.com/castastrophe)! - This update removes tokens defined locally that belonged in the global scope. To ensure no regressions, please upgrade your @spectrum-css/tokens package at the same time so you will pick up the component-level definitions now in the global tokens scope. References to `.spectrum--(light|dark|darkest|medium|large)` have been removed.

### Patch Changes

- Updated dependencies [[`47f23a7`](https://github.com/adobe/spectrum-css/commit/47f23a762a5c84ffe3c82e7e1b0c4c9d5dc60f86)]:
  - @spectrum-css/tokens@14.5.0

## 9.1.1

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)! - Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/actionbutton@6.1.3
  - @spectrum-css/typography@6.1.3
  - @spectrum-css/checkbox@9.1.3
  - @spectrum-css/asset@5.1.3
  - @spectrum-css/icon@7.1.4

## 9.1.0

### Minor Changes

- [#3072](https://github.com/adobe/spectrum-css/pull/3072) [`492edbd`](https://github.com/adobe/spectrum-css/commit/492edbd18c469e1694603bb7346fb04577e8bf24) Thanks [@cdransf](https://github.com/cdransf)! - Corrects the issue with the action button in the card by removing the flex property and definition that caused the action button to fill the available space; additionally, justify-content has been set to space-between on the card header to properly horizontally align the action button relative to the card title (at either edge).

## 9.0.1

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)! - Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/actionbutton@6.1.2
  - @spectrum-css/typography@6.1.2
  - @spectrum-css/checkbox@9.1.2
  - @spectrum-css/asset@5.1.2
  - @spectrum-css/icon@7.1.3

## 9.0.0

### Major Changes

- [#2955](https://github.com/adobe/spectrum-css/pull/2955) [`096d949`](https://github.com/adobe/spectrum-css/commit/096d9496a17376552cbee2cb78d0dc809a612e83) Thanks [@jawinn](https://github.com/jawinn)! - BREAKING CHANGE: The card component's default variant now uses the same grey background color behind the cover photo that is used behind the image for the quiet variant. This background was only visible when the image did not take up the entire space. The intended background color of `--spectrum-background-base-color` for non-quiet variants was confirmed by the design team.

  This also provides the existing mod custom property `--mod-card-preview-background-color` for customizing this area behind the image for the default variant.

## 8.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/actionbutton@6.1.1
  - @spectrum-css/typography@6.1.1
  - @spectrum-css/checkbox@9.1.1
  - @spectrum-css/asset@5.1.1
  - @spectrum-css/icon@7.1.1

## 8.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/actionbutton@>=6
  - @spectrum-css/asset@>=5
  - @spectrum-css/checkbox@>=9
  - @spectrum-css/icon@>=7
  - @spectrum-css/tokens@>=14
  - @spectrum-css/typography@>=6

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="8.0.0"></a>

## 8.0.0

🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@7.0.2...@spectrum-css/card@8.0.0)

### ✨ Features

-     **card:**overflow hidden on cover photo for swc implementation ([#2661](https://github.com/adobe/spectrum-css/issues/2661))([adcedb3](https://github.com/adobe/spectrum-css/commit/adcedb3))*use storybook v8 ([#2604](https://github.com/adobe/spectrum-css/issues/2604))([166ab23](https://github.com/adobe/spectrum-css/commit/166ab23))

  \*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

      	###
      	🛑 BREAKING CHANGES

      		*
      		- Removes component-builder & component-builder-simple for script leveraging postcss

* Imports added to index.css and themes/express.css

<a name="7.0.2"></a>

## 7.0.2

🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@7.0.1...@spectrum-css/card@7.0.2)

**Note:** Version bump only for package @spectrum-css/card

<a name="7.0.1"></a>

## 7.0.1

🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@7.0.0...@spectrum-css/card@7.0.1)

**Note:** Version bump only for package @spectrum-css/card

<a name="7.0.0"></a>

## 7.0.0

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.4.1...@spectrum-css/card@7.0.0)

### ♻️ Code refactoring

- **quickaction:**deprecate component; support this in docs ([#2304](https://github.com/adobe/spectrum-css/issues/2304))([84e1ee9](https://github.com/adobe/spectrum-css/commit/84e1ee9))

      ###
      🛑 BREAKING CHANGES

      	*
      	**quickaction:** @spectrum-css/quickaction deprecated

This component has been deprecated. Use an action bar to allow users to perform actions on either a single or multiple items at the same time, instead.

<a name="6.4.1"></a>

## 6.4.1

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/card

<a name="6.4.0"></a>

## 6.4.0

🗓
2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.3.1...@spectrum-css/card@6.4.0)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.3.1"></a>

## 6.3.1

🗓
2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.3.0...@spectrum-css/card@6.3.1)

### 🐛 Bug fixes

- **card:**gap between preview and horizontal card border([f6e972d](https://github.com/adobe/spectrum-css/commit/f6e972d))_
  **card:**rename misnamed instance of background color mod ([#2417](https://github.com/adobe/spectrum-css/issues/2417))([cf44e69](https://github.com/adobe/spectrum-css/commit/cf44e69))_
  **card:**revert misnamed instance of background color mod([80b3b78](https://github.com/adobe/spectrum-css/commit/80b3b78))

<a name="6.3.0"></a>

## 6.3.0

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.2.2...@spectrum-css/card@6.3.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="6.2.2"></a>

## 6.2.2

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.2.1...@spectrum-css/card@6.2.2)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.2.1"></a>

## 6.2.1

🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.2.0...@spectrum-css/card@6.2.1)

### 🐛 Bug fixes

- **card:**focus outline only on keyboard focus([268e3cc](https://github.com/adobe/spectrum-css/commit/268e3cc))

<a name="6.2.0"></a>

## 6.2.0

🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.24...@spectrum-css/card@6.2.0)

### ✨ Features

- **card:**add additional mod properties ([#2279](https://github.com/adobe/spectrum-css/issues/2279))([a290816](https://github.com/adobe/spectrum-css/commit/a290816))

<a name="6.1.0"></a>

## 6.1.0

🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.24...@spectrum-css/card@6.1.0)

### ✨ Features

- **card:**add additional mod properties ([#2279](https://github.com/adobe/spectrum-css/issues/2279))([a290816](https://github.com/adobe/spectrum-css/commit/a290816))

<a name="6.0.24"></a>

## 6.0.24

🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.23...@spectrum-css/card@6.0.24)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.0.23"></a>

## 6.0.23

🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.22...@spectrum-css/card@6.0.23)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.0.22"></a>

## 6.0.22

🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.21...@spectrum-css/card@6.0.22)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.0.21"></a>

## 6.0.21

🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.20...@spectrum-css/card@6.0.21)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.0.20"></a>

## 6.0.20

🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.19...@spectrum-css/card@6.0.20)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.0.19"></a>

## 6.0.19

🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.18...@spectrum-css/card@6.0.19)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.0.18"></a>

## 6.0.18

🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.17...@spectrum-css/card@6.0.18)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.0.17"></a>

## 6.0.17

🗓
2023-09-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.16...@spectrum-css/card@6.0.17)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.0.16"></a>

## 6.0.16

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.15...@spectrum-css/card@6.0.16)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.0.15"></a>

## 6.0.15

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.14...@spectrum-css/card@6.0.15)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.0.14"></a>

## 6.0.14

🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.13...@spectrum-css/card@6.0.14)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.0.13"></a>

## 6.0.13

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.12...@spectrum-css/card@6.0.13)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.0.12"></a>

## 6.0.12

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.10...@spectrum-css/card@6.0.12)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.0.11"></a>

## 6.0.11

🗓
2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.10...@spectrum-css/card@6.0.11)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.0.10"></a>

## 6.0.10

🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.9...@spectrum-css/card@6.0.10)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.0.9"></a>

## 6.0.9

🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.8...@spectrum-css/card@6.0.9)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.0.8"></a>

## 6.0.8

🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.7...@spectrum-css/card@6.0.8)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.0.7"></a>

## 6.0.7

🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.6...@spectrum-css/card@6.0.7)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.0.6"></a>

## 6.0.6

🗓
2023-07-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.5...@spectrum-css/card@6.0.6)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.0.5"></a>

## 6.0.5

🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.4...@spectrum-css/card@6.0.5)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.0.4"></a>

## 6.0.4

🗓
2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.3...@spectrum-css/card@6.0.4)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.0.3"></a>

## 6.0.3

🗓
2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.2...@spectrum-css/card@6.0.3)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.0.2"></a>

## 6.0.2

🗓
2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.1...@spectrum-css/card@6.0.2)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.0.1"></a>

## 6.0.1

🗓
2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@6.0.0...@spectrum-css/card@6.0.1)

**Note:** Version bump only for package @spectrum-css/card

<a name="6.0.0"></a>

## 6.0.0

🗓
2023-06-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.41...@spectrum-css/card@6.0.0)

\*feat(card)!: migrate to use `@adobe/spectrum-tokens` (#1693)([1afc96b](https://github.com/adobe/spectrum-css/commit/1afc96b)), closes[#1693](https://github.com/adobe/spectrum-css/issues/1693)

    	###
    	🛑 BREAKING CHANGES

    		*
    		migrates the Card component to use `@adobe/spectrum-tokens`

<a name="5.0.41"></a>

## 5.0.41

🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.40...@spectrum-css/card@5.0.41)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.40"></a>

## 5.0.40

🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.39...@spectrum-css/card@5.0.40)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.39"></a>

## 5.0.39

🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.38...@spectrum-css/card@5.0.39)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="5.0.38"></a>

## 5.0.38

🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.37...@spectrum-css/card@5.0.38)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.37"></a>

## 5.0.37

🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.36...@spectrum-css/card@5.0.37)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.36"></a>

## 5.0.36

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.35...@spectrum-css/card@5.0.36)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.35"></a>

## 5.0.35

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.34...@spectrum-css/card@5.0.35)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.34"></a>

## 5.0.34

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.33...@spectrum-css/card@5.0.34)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.33"></a>

## 5.0.33

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.32...@spectrum-css/card@5.0.33)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.32"></a>

## 5.0.32

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.31...@spectrum-css/card@5.0.32)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.31"></a>

## 5.0.31

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.30...@spectrum-css/card@5.0.31)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.30"></a>

## 5.0.30

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.29...@spectrum-css/card@5.0.30)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.29"></a>

## 5.0.29

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.28...@spectrum-css/card@5.0.29)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.28"></a>

## 5.0.28

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.27...@spectrum-css/card@5.0.28)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.27"></a>

## 5.0.27

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.26...@spectrum-css/card@5.0.27)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.26"></a>

## 5.0.26

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.25...@spectrum-css/card@5.0.26)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.25"></a>

## 5.0.25

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.24...@spectrum-css/card@5.0.25)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.24"></a>

## 5.0.24

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.23...@spectrum-css/card@5.0.24)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.23"></a>

## 5.0.23

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.21...@spectrum-css/card@5.0.23)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.22"></a>

## 5.0.22

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.21...@spectrum-css/card@5.0.22)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.21"></a>

## 5.0.21

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.20...@spectrum-css/card@5.0.21)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.20"></a>

## 5.0.20

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.19...@spectrum-css/card@5.0.20)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.19"></a>

## 5.0.19

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.18...@spectrum-css/card@5.0.19)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.18"></a>

## 5.0.18

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.17...@spectrum-css/card@5.0.18)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.17"></a>

## 5.0.17

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.16...@spectrum-css/card@5.0.17)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.16"></a>

## 5.0.16

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.14...@spectrum-css/card@5.0.16)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.15"></a>

## 5.0.15

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.14...@spectrum-css/card@5.0.15)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.14"></a>

## 5.0.14

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.13...@spectrum-css/card@5.0.14)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.13"></a>

## 5.0.13

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.12...@spectrum-css/card@5.0.13)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.12"></a>

## 5.0.12

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.11...@spectrum-css/card@5.0.12)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.11"></a>

## 5.0.11

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.10...@spectrum-css/card@5.0.11)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.10"></a>

## 5.0.10

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.9...@spectrum-css/card@5.0.10)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.9"></a>

## 5.0.9

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.8...@spectrum-css/card@5.0.9)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.8"></a>

## 5.0.8

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.7...@spectrum-css/card@5.0.8)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.7"></a>

## 5.0.7

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.6...@spectrum-css/card@5.0.7)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.6"></a>

## 5.0.6

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.5...@spectrum-css/card@5.0.6)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.5"></a>

## 5.0.5

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.3...@spectrum-css/card@5.0.5)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.4"></a>

## 5.0.4

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.3...@spectrum-css/card@5.0.4)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.3"></a>

## 5.0.3

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.2...@spectrum-css/card@5.0.3)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.2"></a>

## 5.0.2

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.1...@spectrum-css/card@5.0.2)

**Note:** Version bump only for package @spectrum-css/card

<a name="5.0.1"></a>

## 5.0.1

🗓 2022-10-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@5.0.0...@spectrum-css/card@5.0.1)

### 🐛 Bug fixes

- **card:** increase content area height when necessary ([9c19416](https://github.com/adobe/spectrum-css/commit/9c19416))

<a name="5.0.0"></a>

## 5.0.0

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.22...@spectrum-css/card@5.0.0)

- feat!: updating to latest ActionButton with new markup ([3eef405](https://github.com/adobe/spectrum-css/commit/3eef405))

### 🛑 BREAKING CHANGES

- ActionButton changes icon markup

<a name="4.0.22"></a>

## 4.0.22

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.21...@spectrum-css/card@4.0.22)

**Note:** Version bump only for package @spectrum-css/card

<a name="4.0.21"></a>

## 4.0.21

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.20...@spectrum-css/card@4.0.21)

**Note:** Version bump only for package @spectrum-css/card

<a name="4.0.20"></a>

## 4.0.20

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.19...@spectrum-css/card@4.0.20)

**Note:** Version bump only for package @spectrum-css/card

<a name="4.0.19"></a>

## 4.0.19

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.18...@spectrum-css/card@4.0.19)

**Note:** Version bump only for package @spectrum-css/card

<a name="4.0.18"></a>

## 4.0.18

🗓 2022-03-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.17...@spectrum-css/card@4.0.18)

**Note:** Version bump only for package @spectrum-css/card

<a name="4.0.17"></a>

## 4.0.17

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.16...@spectrum-css/card@4.0.17)

**Note:** Version bump only for package @spectrum-css/card

<a name="4.0.16"></a>

## 4.0.16

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.15...@spectrum-css/card@4.0.16)

**Note:** Version bump only for package @spectrum-css/card

<a name="4.0.15"></a>

## 4.0.15

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.14...@spectrum-css/card@4.0.15)

**Note:** Version bump only for package @spectrum-css/card

<a name="4.0.14"></a>

## 4.0.14

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.13...@spectrum-css/card@4.0.14)

**Note:** Version bump only for package @spectrum-css/card

<a name="4.0.13"></a>

## 4.0.13

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.12...@spectrum-css/card@4.0.13)

**Note:** Version bump only for package @spectrum-css/card

<a name="4.0.12"></a>

## 4.0.12

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.11...@spectrum-css/card@4.0.12)

**Note:** Version bump only for package @spectrum-css/card

<a name="4.0.11"></a>

## 4.0.11

🗓 2022-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.10...@spectrum-css/card@4.0.11)

**Note:** Version bump only for package @spectrum-css/card

<a name="4.0.10"></a>

## 4.0.10

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.9...@spectrum-css/card@4.0.10)

**Note:** Version bump only for package @spectrum-css/card

<a name="4.0.9"></a>

## 4.0.9

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.7...@spectrum-css/card@4.0.9)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

<a name="4.0.8"></a>

## 4.0.8

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.8-beta.0...@spectrum-css/card@4.0.8)

**Note:** Version bump only for package @spectrum-css/card

<a name="4.0.8-beta.0"></a>

## 4.0.8-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.7...@spectrum-css/card@4.0.8-beta.0)

**Note:** Version bump only for package @spectrum-css/card

<a name="4.0.7"></a>

## 4.0.7

🗓 2021-12-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.6...@spectrum-css/card@4.0.7)

**Note:** Version bump only for package @spectrum-css/card

<a name="4.0.6"></a>

## 4.0.6

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.5...@spectrum-css/card@4.0.6)

**Note:** Version bump only for package @spectrum-css/card

<a name="4.0.5"></a>

## 4.0.5

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.4...@spectrum-css/card@4.0.5)

**Note:** Version bump only for package @spectrum-css/card

<a name="4.0.4"></a>

## 4.0.4

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.3...@spectrum-css/card@4.0.4)

**Note:** Version bump only for package @spectrum-css/card

<a name="4.0.3"></a>

## 4.0.3

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.2...@spectrum-css/card@4.0.3)

**Note:** Version bump only for package @spectrum-css/card

<a name="4.0.2"></a>

## 4.0.2

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.0-alpha.4...@spectrum-css/card@4.0.2)

### 🐛 Bug fixes

- mini card broken in docs site ([40ec3b6](https://github.com/adobe/spectrum-css/commit/40ec3b6)), closes [#1240](https://github.com/adobe/spectrum-css/issues/1240)
- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="4.0.1"></a>

## 4.0.1

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.0-alpha.4...@spectrum-css/card@4.0.1)

### 🐛 Bug fixes

- mini card broken in docs site ([40ec3b6](https://github.com/adobe/spectrum-css/commit/40ec3b6)), closes [#1240](https://github.com/adobe/spectrum-css/issues/1240)
- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="4.0.0"></a>

## 4.0.0

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.0-alpha.4...@spectrum-css/card@4.0.0)

### 🐛 Bug fixes

- mini card broken in docs site ([40ec3b6](https://github.com/adobe/spectrum-css/commit/40ec3b6)), closes [#1240](https://github.com/adobe/spectrum-css/issues/1240)
- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="4.0.0-alpha.4"></a>

## 4.0.0-alpha.4

🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.0-alpha.3...@spectrum-css/card@4.0.0-alpha.4)

**Note:** Version bump only for package @spectrum-css/card

<a name="4.0.0-alpha.3"></a>

## 4.0.0-alpha.3

🗓 2021-07-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.0-alpha.2...@spectrum-css/card@4.0.0-alpha.3)

### 🐛 Bug fixes

- gave card a width to avoid it expanding to full width ([db9c0c7](https://github.com/adobe/spectrum-css/commit/db9c0c7))

### 🛑 BREAKING CHANGES

- with the width being set and a min width, it's like to
  not have the same width as before and will break layout

<a name="4.0.0-alpha.2"></a>

## 4.0.0-alpha.2

🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.0-alpha.1...@spectrum-css/card@4.0.0-alpha.2)

**Note:** Version bump only for package @spectrum-css/card

<a name="4.0.0-alpha.1"></a>

## 4.0.0-alpha.1

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@4.0.0-alpha.0...@spectrum-css/card@4.0.0-alpha.1)

**Note:** Version bump only for package @spectrum-css/card

<a name="4.0.0-alpha.0"></a>

## 4.0.0-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@3.0.2...@spectrum-css/card@4.0.0-alpha.0)

### ♻️ Code refactoring

- changed sized cards to t-shirt sizes ([7fe32e4](https://github.com/adobe/spectrum-css/commit/7fe32e4))

### 🐛 Bug fixes

- switch height to min-height ([594873b](https://github.com/adobe/spectrum-css/commit/594873b))
- updating min-width on card ([f15db2a](https://github.com/adobe/spectrum-css/commit/f15db2a))

### 🛑 BREAKING CHANGES

- .spectrum-Card--small is now .spectrum-Card--sizeS

<a name="3.0.2"></a>

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@3.0.1...@spectrum-css/card@3.0.2)

**Note:** Version bump only for package @spectrum-css/card

<a name="3.0.1"></a>

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@3.0.0...@spectrum-css/card@3.0.1)

**Note:** Version bump only for package @spectrum-css/card

<a name="3.0.0"></a>

## 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@3.0.0-beta.6...@spectrum-css/card@3.0.0)

### ✨ Features

- added t-shirt sizes to checkbox ([f4c59bd](https://github.com/adobe/spectrum-css/commit/f4c59bd)), closes [#951](https://github.com/adobe/spectrum-css/issues/951)

### 🛑 BREAKING CHANGES

- a t-shirt size class is now required for checkbox.

<a name="3.0.0-beta.6"></a>

## 3.0.0-beta.6

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@3.0.0-beta.5...@spectrum-css/card@3.0.0-beta.6)

### ✨ Features

- update to new ActionButton markup ([bacc814](https://github.com/adobe/spectrum-css/commit/bacc814))

### 🐛 Bug fixes

- correct dependencies for FieldButton -> ActionButton change ([29d69f8](https://github.com/adobe/spectrum-css/commit/29d69f8))
- correct icon sizing for small cards ([5b570f4](https://github.com/adobe/spectrum-css/commit/5b570f4))
- update main, resolved conflicts ([d7880a2](https://github.com/adobe/spectrum-css/commit/d7880a2))

### 🛑 BREAKING CHANGES

- .spectrum-Icon--sizeL is now .spectrum-Icon--sizeXXL and will likely be removed later
- .spectrum-ActionButton--sizeM now required for all uses

<a name="3.0.0-beta.5"></a>

## 3.0.0-beta.5

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@3.0.0-beta.4...@spectrum-css/card@3.0.0-beta.5)

- fix!: updated type sizes to use consistent syntax, related to #972 (#1031) ([1a604c4](https://github.com/adobe/spectrum-css/commit/1a604c4)), closes [#972](https://github.com/adobe/spectrum-css/issues/972) [#1031](https://github.com/adobe/spectrum-css/issues/1031)

### 🛑 BREAKING CHANGES

- all typography sizing classes now have --size* instead of --*, see migration guides

<a name="3.0.0-beta.4"></a>

## 3.0.0-beta.4

🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@3.0.0-beta.3...@spectrum-css/card@3.0.0-beta.4)

**Note:** Version bump only for package @spectrum-css/card

<a name="3.0.0-beta.3"></a>

## 3.0.0-beta.3

🗓 2020-06-19 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@3.0.0-beta.2...@spectrum-css/card@3.0.0-beta.3)

**Note:** Version bump only for package @spectrum-css/card

<a name="3.0.0-beta.2"></a>

## 3.0.0-beta.2

🗓 2020-05-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@3.0.0-beta.1...@spectrum-css/card@3.0.0-beta.2)

**Note:** Version bump only for package @spectrum-css/card

<a name="3.0.0-beta.1"></a>

## 3.0.0-beta.1

🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@3.0.0-beta.0...@spectrum-css/card@3.0.0-beta.1)

**Note:** Version bump only for package @spectrum-css/card

<a name="3.0.0-beta.0"></a>

## 3.0.0-beta.0

🗓 2020-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@2.0.6...@spectrum-css/card@3.0.0-beta.0)

### ✨ Features

- make Card support RTL ([6806754](https://github.com/adobe/spectrum-css/commit/6806754))

### 🐛 Bug fixes

- position of Checkbox in Card QuickActions ([7ca2170](https://github.com/adobe/spectrum-css/commit/7ca2170))

<a name="2.0.6"></a>

## 2.0.6

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@2.0.5...@spectrum-css/card@2.0.6)

**Note:** Version bump only for package @spectrum-css/card

<a name="2.0.5"></a>

## 2.0.5

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@2.0.4...@spectrum-css/card@2.0.5)

**Note:** Version bump only for package @spectrum-css/card

<a name="2.0.4"></a>

## 2.0.4

🗓 2020-01-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@2.0.3...@spectrum-css/card@2.0.4)

**Note:** Version bump only for package @spectrum-css/card

<a name="2.0.3"></a>

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@2.0.2...@spectrum-css/card@2.0.3)

**Note:** Version bump only for package @spectrum-css/card

<a name="2.0.2"></a>

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@2.0.1...@spectrum-css/card@2.0.2)

**Note:** Version bump only for package @spectrum-css/card

<a name="2.0.1"></a>

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/card@2.0.0...@spectrum-css/card@2.0.1)

**Note:** Version bump only for package @spectrum-css/card

<a name="2.0.0"></a>

## 2.0.0

🗓 2019-10-08

### ✨ Features

- implement horizontal small card ([d18b02e](https://github.com/adobe/spectrum-css/commit/d18b02e))
- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)

### 🐛 Bug fixes

- don't shrink preview/content when cards are small ([37ce7c5](https://github.com/adobe/spectrum-css/commit/37ce7c5))
- leave Gallery preview card height to the JS ([#283](https://github.com/adobe/spectrum-css/issues/283)) ([083d712](https://github.com/adobe/spectrum-css/commit/083d712))
