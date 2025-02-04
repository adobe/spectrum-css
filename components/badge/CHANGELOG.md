# Change Log

## 6.0.1

### Patch Changes

- [#3534](https://github.com/adobe/spectrum-css/pull/3534) [`68e0057`](https://github.com/adobe/spectrum-css/commit/68e00577156cc32b21bfa768dbd2d35d73563b4c) Thanks [@castastrophe](https://github.com/castastrophe)! - Fixes a bug in the content of the `dist/index-theme.css` file.

  Expected `index-theme.css` to include the component selectors with component-level custom properties mapped to the `--system` prefixed ones in order to allow a component to support various contexts.

  Expected output example for the index-theme.css:

  ```
  .spectrum-ActionButton {
   --spectrum-actionbutton-background-color-default: var(--system-action-button-background-color-default);
   --spectrum-actionbutton-background-color-hover: var(--system-action-button-background-color-hover);
  ```

- Updated dependencies [[`68e0057`](https://github.com/adobe/spectrum-css/commit/68e00577156cc32b21bfa768dbd2d35d73563b4c)]:
  - @spectrum-css/icon@9.0.1

## 6.0.0

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6) Thanks [@pfulton](https://github.com/pfulton)! - ## Breaking change

  This major update creates a bridge between the Spectrum 1 (S1) and Spectrum 2 (S2) designs, dubbed "Spectrum 2 Foundations". These do _NOT_ reflect a fully migrated S2 component. This approach allows consumers to swap the appearance of their components between S1, Express, and S2 by leveraging a "system" layer that remaps the necessary component-level tokens to the appropriate token dataset.

  For these components to appear S2, you must load the assets with the `@spectrum-css/tokens` at `v16` or higher.

  For S1 or Express, load assets with the `@spectrum-css/tokens` at `v14.x` or `v15.x`.

  If you are looking to implement a fully S2 design, please explore the `next` tag releases instead of using this foundations release. **This release is used in Spectrum Web Components 1.x**.

  ### Deprecations

  The `metadata` folder containing the `mods.md` and `metadata.json` assets has been removed from source. To find information about the components including what selectors, modifiers, and passthroughs are used, please see the `dist/metadata.json` asset shipped with every component containing CSS.

  The `index-vars.css` asset has been removed in this release as it was previously deprecated and is no longer maintained. Please use the `index.css` or `index-base.css`

  ### File usage

  If you are rendering components and need **only** the S2 Foundations styles, you can make use of the `index.css` asset which contains all the base styles plus the system mappings for S2 Foundations.

  If you are using this version to publish **only** an S1 or Express component, you can use the `index-base.css` plus the desired `themes/(spectrum|express).css` file.

  To render a component that can be easily swapped between the S2 Foundations, S1, or Express contexts, load `index-base.css` with the `index-theme.css` file and leverage the appropriate context classes (`.spectrum--legacy` for S1 and `.spectrum--express` for Express).

### Patch Changes

- Updated dependencies [[`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6), [`3d08cea`](https://github.com/adobe/spectrum-css/commit/3d08cea0f590c8c2de7252677a6b81b8cc206b9a), [`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6)]:
  - @spectrum-css/tokens@16.0.0
  - @spectrum-css/icon@9.0.0

## 5.0.1

### Patch Changes

- [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)! - Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/icon@8.0.1

## 5.0.0

### Major Changes

- [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)! - Remove empty theme references to reduce complexity for components that don't need to define any mappings. This involves removing the source `themes` directories with the empty `spectrum.css` and `express.com` files as well as removing the following empty or unnecessary exports:

  - `index-base.css`
  - `index-theme.css`
  - `themes/spectrum.css`
  - `themes/express.css`

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/icon@8.0.0

## 4.3.0

### Minor Changes

- [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)! - Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/icon@7.2.0

## 4.2.0

### Minor Changes

- [#3265](https://github.com/adobe/spectrum-css/pull/3265) [`31fdc3b`](https://github.com/adobe/spectrum-css/commit/31fdc3b7f9d0a09baf03f8675bbf4b418744db47) Thanks [@cdransf](https://github.com/cdransf)! - Assigns CanvasText to custom property to satisfy linting requirements.

### Patch Changes

- Updated dependencies [[`47f23a7`](https://github.com/adobe/spectrum-css/commit/47f23a762a5c84ffe3c82e7e1b0c4c9d5dc60f86)]:
  - @spectrum-css/tokens@14.5.0

## 4.1.3

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)! - Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/icon@7.1.4

## 4.1.2

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)! - Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/icon@7.1.3

## 4.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/icon@7.1.1

## 4.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/icon@>=7
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="4.0.0"></a>

## 4.0.0

🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.2.5...@spectrum-css/badge@4.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="3.2.5"></a>

## 3.2.5

🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.2.4...@spectrum-css/badge@3.2.5)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.2.4"></a>

## 3.2.4

🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.2.3...@spectrum-css/badge@3.2.4)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.2.3"></a>

## 3.2.3

🗓
2024-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.2.2...@spectrum-css/badge@3.2.3)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.2.2"></a>

## 3.2.2

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.2.1...@spectrum-css/badge@3.2.2)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.2.1"></a>

## 3.2.1

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.2.0"></a>

## 3.2.0

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.1.18...@spectrum-css/badge@3.2.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="3.1.18"></a>

## 3.1.18

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.1.17...@spectrum-css/badge@3.1.18)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.1.17"></a>

## 3.1.17

🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.1.16...@spectrum-css/badge@3.1.17)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.1.16"></a>

## 3.1.16

🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.1.14...@spectrum-css/badge@3.1.16)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.1.15"></a>

## 3.1.15

🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.1.14...@spectrum-css/badge@3.1.15)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.1.14"></a>

## 3.1.14

🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.1.13...@spectrum-css/badge@3.1.14)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.1.13"></a>

## 3.1.13

🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.1.12...@spectrum-css/badge@3.1.13)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.1.12"></a>

## 3.1.12

🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.1.11...@spectrum-css/badge@3.1.12)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.1.11"></a>

## 3.1.11

🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.1.10...@spectrum-css/badge@3.1.11)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.1.10"></a>

## 3.1.10

🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.1.9...@spectrum-css/badge@3.1.10)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.1.9"></a>

## 3.1.9

🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.1.8...@spectrum-css/badge@3.1.9)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.1.8"></a>

## 3.1.8

🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.1.7...@spectrum-css/badge@3.1.8)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.1.7"></a>

## 3.1.7

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.1.6...@spectrum-css/badge@3.1.7)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.1.6"></a>

## 3.1.6

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.1.5...@spectrum-css/badge@3.1.6)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.1.5"></a>

## 3.1.5

🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.1.4...@spectrum-css/badge@3.1.5)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="3.1.4"></a>

## 3.1.4

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.1.3...@spectrum-css/badge@3.1.4)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.1.3"></a>

## 3.1.3

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.1.1...@spectrum-css/badge@3.1.3)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.1.2"></a>

## 3.1.2

🗓
2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.1.1...@spectrum-css/badge@3.1.2)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.1.1"></a>

## 3.1.1

🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.1.0...@spectrum-css/badge@3.1.1)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.1.0"></a>

## 3.1.0

🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.45...@spectrum-css/badge@3.1.0)

### ✨ Features

- **badge,tokens:**add non-semantic colors ([#2077](https://github.com/adobe/spectrum-css/issues/2077))([1bac588](https://github.com/adobe/spectrum-css/commit/1bac588))

<a name="3.0.45"></a>

## 3.0.45

🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.44...@spectrum-css/badge@3.0.45)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.44"></a>

## 3.0.44

🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.43...@spectrum-css/badge@3.0.44)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.43"></a>

## 3.0.43

🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.42...@spectrum-css/badge@3.0.43)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.42"></a>

## 3.0.42

🗓
2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.41...@spectrum-css/badge@3.0.42)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.41"></a>

## 3.0.41

🗓
2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.40...@spectrum-css/badge@3.0.41)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.40"></a>

## 3.0.40

🗓
2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.39...@spectrum-css/badge@3.0.40)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.39"></a>

## 3.0.39

🗓
2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.38...@spectrum-css/badge@3.0.39)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.38"></a>

## 3.0.38

🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.37...@spectrum-css/badge@3.0.38)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.37"></a>

## 3.0.37

🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.36...@spectrum-css/badge@3.0.37)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.36"></a>

## 3.0.36

🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.35...@spectrum-css/badge@3.0.36)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="3.0.35"></a>

## 3.0.35

🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.34...@spectrum-css/badge@3.0.35)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.34"></a>

## 3.0.34

🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.33...@spectrum-css/badge@3.0.34)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.33"></a>

## 3.0.33

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.32...@spectrum-css/badge@3.0.33)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.32"></a>

## 3.0.32

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.31...@spectrum-css/badge@3.0.32)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.31"></a>

## 3.0.31

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.30...@spectrum-css/badge@3.0.31)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.30"></a>

## 3.0.30

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.29...@spectrum-css/badge@3.0.30)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.29"></a>

## 3.0.29

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.28...@spectrum-css/badge@3.0.29)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.28"></a>

## 3.0.28

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.27...@spectrum-css/badge@3.0.28)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.27"></a>

## 3.0.27

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.26...@spectrum-css/badge@3.0.27)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.26"></a>

## 3.0.26

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.25...@spectrum-css/badge@3.0.26)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.25"></a>

## 3.0.25

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.24...@spectrum-css/badge@3.0.25)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.24"></a>

## 3.0.24

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.23...@spectrum-css/badge@3.0.24)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.23"></a>

## 3.0.23

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.22...@spectrum-css/badge@3.0.23)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.22"></a>

## 3.0.22

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.20...@spectrum-css/badge@3.0.22)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.21"></a>

## 3.0.21

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.20...@spectrum-css/badge@3.0.21)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.20"></a>

## 3.0.20

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.19...@spectrum-css/badge@3.0.20)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.19"></a>

## 3.0.19

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.18...@spectrum-css/badge@3.0.19)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.18"></a>

## 3.0.18

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.17...@spectrum-css/badge@3.0.18)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.17"></a>

## 3.0.17

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.16...@spectrum-css/badge@3.0.17)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.16"></a>

## 3.0.16

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.14...@spectrum-css/badge@3.0.16)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.15"></a>

## 3.0.15

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.14...@spectrum-css/badge@3.0.15)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.14"></a>

## 3.0.14

🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.12...@spectrum-css/badge@3.0.14)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.13"></a>

## 3.0.13

🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.12...@spectrum-css/badge@3.0.13)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.12"></a>

## 3.0.12

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.11...@spectrum-css/badge@3.0.12)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.11"></a>

## 3.0.11

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.10...@spectrum-css/badge@3.0.11)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.10"></a>

## 3.0.10

🗓 2023-03-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.9...@spectrum-css/badge@3.0.10)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.9"></a>

## 3.0.9

🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.8...@spectrum-css/badge@3.0.9)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.8"></a>

## 3.0.8

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.7...@spectrum-css/badge@3.0.8)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.7"></a>

## 3.0.7

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.6...@spectrum-css/badge@3.0.7)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.6"></a>

## 3.0.6

🗓 2023-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.5...@spectrum-css/badge@3.0.6)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.5"></a>

## 3.0.5

🗓 2023-03-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.4...@spectrum-css/badge@3.0.5)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.4"></a>

## 3.0.4

🗓 2023-02-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.3...@spectrum-css/badge@3.0.4)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.3"></a>

## 3.0.3

🗓 2023-02-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.2...@spectrum-css/badge@3.0.3)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.2"></a>

## 3.0.2

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.1...@spectrum-css/badge@3.0.2)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.1"></a>

## 3.0.1

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@3.0.0...@spectrum-css/badge@3.0.1)

**Note:** Version bump only for package @spectrum-css/badge

<a name="3.0.0"></a>

## 3.0.0

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@2.0.9...@spectrum-css/badge@3.0.0)

- chore(tokens)!: use latest dependency & fix build error (#1591) ([f2532e7](https://github.com/adobe/spectrum-css/commit/f2532e7)), closes [#1591](https://github.com/adobe/spectrum-css/issues/1591)

### 🛑 BREAKING CHANGES

- uses latest `@adobe/spectrum-tokens` dependency which includes token renames

<a name="2.0.9"></a>

## 2.0.9

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@2.0.8...@spectrum-css/badge@2.0.9)

**Note:** Version bump only for package @spectrum-css/badge

<a name="2.0.8"></a>

## 2.0.8

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@2.0.7...@spectrum-css/badge@2.0.8)

**Note:** Version bump only for package @spectrum-css/badge

<a name="2.0.7"></a>

## 2.0.7

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@2.0.6...@spectrum-css/badge@2.0.7)

**Note:** Version bump only for package @spectrum-css/badge

<a name="2.0.6"></a>

## 2.0.6

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@2.0.4...@spectrum-css/badge@2.0.6)

**Note:** Version bump only for package @spectrum-css/badge

<a name="2.0.5"></a>

## 2.0.5

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@2.0.4...@spectrum-css/badge@2.0.5)

**Note:** Version bump only for package @spectrum-css/badge

<a name="2.0.4"></a>

## 2.0.4

🗓 2023-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@2.0.3...@spectrum-css/badge@2.0.4)

**Note:** Version bump only for package @spectrum-css/badge

<a name="2.0.3"></a>

## 2.0.3

🗓 2022-12-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@2.0.2...@spectrum-css/badge@2.0.3)

**Note:** Version bump only for package @spectrum-css/badge

<a name="2.0.2"></a>

## 2.0.2

🗓 2022-12-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@2.0.1...@spectrum-css/badge@2.0.2)

**Note:** Version bump only for package @spectrum-css/badge

<a name="2.0.1"></a>

## 2.0.1

🗓 2022-11-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@2.0.0...@spectrum-css/badge@2.0.1)

### 🐛 Bug fixes

- resolve missing tokens errors due to name changes ([#1555](https://github.com/adobe/spectrum-css/issues/1555)) ([ddae027](https://github.com/adobe/spectrum-css/commit/ddae027))

<a name="2.0.0"></a>

## 2.0.0

🗓 2022-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.20...@spectrum-css/badge@2.0.0)

- refactor(badge)!: migrate to core tokens (#1494) ([a1ef4a5](https://github.com/adobe/spectrum-css/commit/a1ef4a5)), closes [#1494](https://github.com/adobe/spectrum-css/issues/1494)

### 🛑 BREAKING CHANGES

- migrates badge to core tokens
  Co-authored-by: Patrick Fulton <pfulton@adobe.com>

<a name="1.0.20"></a>

## 1.0.20

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.19...@spectrum-css/badge@1.0.20)

**Note:** Version bump only for package @spectrum-css/badge

<a name="1.0.19"></a>

## 1.0.19

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.18...@spectrum-css/badge@1.0.19)

**Note:** Version bump only for package @spectrum-css/badge

<a name="1.0.18"></a>

## 1.0.18

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.17...@spectrum-css/badge@1.0.18)

**Note:** Version bump only for package @spectrum-css/badge

<a name="1.0.17"></a>

## 1.0.17

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.16...@spectrum-css/badge@1.0.17)

**Note:** Version bump only for package @spectrum-css/badge

<a name="1.0.16"></a>

## 1.0.16

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.15...@spectrum-css/badge@1.0.16)

**Note:** Version bump only for package @spectrum-css/badge

<a name="1.0.15"></a>

## 1.0.15

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.14...@spectrum-css/badge@1.0.15)

**Note:** Version bump only for package @spectrum-css/badge

<a name="1.0.14"></a>

## 1.0.14

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.13...@spectrum-css/badge@1.0.14)

**Note:** Version bump only for package @spectrum-css/badge

<a name="1.0.13"></a>

## 1.0.13

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.12...@spectrum-css/badge@1.0.13)

**Note:** Version bump only for package @spectrum-css/badge

<a name="1.0.12"></a>

## 1.0.12

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.11...@spectrum-css/badge@1.0.12)

**Note:** Version bump only for package @spectrum-css/badge

<a name="1.0.11"></a>

## 1.0.11

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.10...@spectrum-css/badge@1.0.11)

**Note:** Version bump only for package @spectrum-css/badge

<a name="1.0.10"></a>

## 1.0.10

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.9...@spectrum-css/badge@1.0.10)

**Note:** Version bump only for package @spectrum-css/badge

<a name="1.0.9"></a>

## 1.0.9

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.7...@spectrum-css/badge@1.0.9)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

<a name="1.0.8"></a>

## 1.0.8

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.8-beta.0...@spectrum-css/badge@1.0.8)

**Note:** Version bump only for package @spectrum-css/badge

<a name="1.0.8-beta.0"></a>

## 1.0.8-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.7...@spectrum-css/badge@1.0.8-beta.0)

**Note:** Version bump only for package @spectrum-css/badge

<a name="1.0.7"></a>

## 1.0.7

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.6...@spectrum-css/badge@1.0.7)

**Note:** Version bump only for package @spectrum-css/badge

<a name="1.0.6"></a>

## 1.0.6

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.5...@spectrum-css/badge@1.0.6)

**Note:** Version bump only for package @spectrum-css/badge

<a name="1.0.5"></a>

## 1.0.5

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.4...@spectrum-css/badge@1.0.5)

**Note:** Version bump only for package @spectrum-css/badge

<a name="1.0.4"></a>

## 1.0.4

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.3...@spectrum-css/badge@1.0.4)

**Note:** Version bump only for package @spectrum-css/badge

<a name="1.0.3"></a>

## 1.0.3

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.1-alpha.3...@spectrum-css/badge@1.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="1.0.2"></a>

## 1.0.2

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.1-alpha.3...@spectrum-css/badge@1.0.2)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="1.0.1"></a>

## 1.0.1

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.1-alpha.3...@spectrum-css/badge@1.0.1)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="1.0.1-alpha.3"></a>

## 1.0.1-alpha.3

🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.1-alpha.2...@spectrum-css/badge@1.0.1-alpha.3)

**Note:** Version bump only for package @spectrum-css/badge

<a name="1.0.1-alpha.2"></a>

## 1.0.1-alpha.2

🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.1-alpha.1...@spectrum-css/badge@1.0.1-alpha.2)

### 🐛 Bug fixes

- correct Badge YML examples, usage of variables ([7c524fc](https://github.com/adobe/spectrum-css/commit/7c524fc))

<a name="1.0.1-alpha.1"></a>

## 1.0.1-alpha.1

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/badge@1.0.1-alpha.0...@spectrum-css/badge@1.0.1-alpha.1)

**Note:** Version bump only for package @spectrum-css/badge

<a name="1.0.1-alpha.0"></a>

## 1.0.1-alpha.0

🗓 2021-04-27

**Note:** Version bump only for package @spectrum-css/badge

<a name="2.0.10"></a>

## 2.0.10

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/label@2.0.9...@spectrum-css/label@2.0.10)

**Note:** Version bump only for package @spectrum-css/label

<a name="2.0.9"></a>

## 2.0.9

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/label@2.0.8...@spectrum-css/label@2.0.9)

**Note:** Version bump only for package @spectrum-css/label

<a name="2.0.8"></a>

## 2.0.8

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/label@2.0.8-beta.2...@spectrum-css/label@2.0.8)

**Note:** Version bump only for package @spectrum-css/label

<a name="2.0.8-beta.2"></a>

## 2.0.8-beta.2

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/label@2.0.8-beta.1...@spectrum-css/label@2.0.8-beta.2)

**Note:** Version bump only for package @spectrum-css/label

<a name="2.0.8-beta.1"></a>

## 2.0.8-beta.1

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/label@2.0.8-beta.0...@spectrum-css/label@2.0.8-beta.1)

**Note:** Version bump only for package @spectrum-css/label

<a name="2.0.8-beta.0"></a>

## 2.0.8-beta.0

🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/label@2.0.7...@spectrum-css/label@2.0.8-beta.0)

**Note:** Version bump only for package @spectrum-css/label

<a name="2.0.7"></a>

## 2.0.7

🗓 2020-05-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/label@2.0.6...@spectrum-css/label@2.0.7)

**Note:** Version bump only for package @spectrum-css/label

<a name="2.0.6"></a>

## 2.0.6

🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/label@2.0.5...@spectrum-css/label@2.0.6)

**Note:** Version bump only for package @spectrum-css/label

<a name="2.0.5"></a>

## 2.0.5

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/label@2.0.4...@spectrum-css/label@2.0.5)

**Note:** Version bump only for package @spectrum-css/label

<a name="2.0.4"></a>

## 2.0.4

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/label@2.0.3...@spectrum-css/label@2.0.4)

**Note:** Version bump only for package @spectrum-css/label

<a name="2.0.3"></a>

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/label@2.0.2...@spectrum-css/label@2.0.3)

**Note:** Version bump only for package @spectrum-css/label

<a name="2.0.2"></a>

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/label@2.0.1...@spectrum-css/label@2.0.2)

**Note:** Version bump only for package @spectrum-css/label

<a name="2.0.1"></a>

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/label@2.0.0...@spectrum-css/label@2.0.1)

**Note:** Version bump only for package @spectrum-css/label

<a name="2.0.0"></a>

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
