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

- Updated dependencies [[`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6), [`3d08cea`](https://github.com/adobe/spectrum-css/commit/3d08cea0f590c8c2de7252677a6b81b8cc206b9a)]:
  - @spectrum-css/tokens@16.0.0

## 5.0.1

### Patch Changes

- [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)! - Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0

## 5.0.0

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

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b)]:
  - @spectrum-css/tokens@15.1.0

## 4.2.0

### Minor Changes

- [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)! - Remove the storybook assets from the shipped output for components

## 4.1.3

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)! - Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

## 4.1.2

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)! - Improve changeset suggestions by using exports instead of files in component packages

## 4.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

## 4.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="4.0.0"></a>

## 4.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@3.3.4...@spectrum-css/logicbutton@4.0.0)

### 🐛 Bug fixes

-     **logicbutton,picker:**add missing commons devDep ([#2631](https://github.com/adobe/spectrum-css/issues/2631))([49057ca](https://github.com/adobe/spectrum-css/commit/49057ca))

  \*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

      	###
      	🛑 BREAKING CHANGES

      		*
      		- Removes component-builder & component-builder-simple for script leveraging postcss

* Imports added to index.css and themes/express.css

<a name="3.3.4"></a>

## 3.3.4

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@3.3.3...@spectrum-css/logicbutton@3.3.4)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="3.3.3"></a>

## 3.3.3

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@3.3.2...@spectrum-css/logicbutton@3.3.3)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="3.3.2"></a>

## 3.3.2

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@3.3.1...@spectrum-css/logicbutton@3.3.2)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="3.3.1"></a>

## 3.3.1

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="3.3.0"></a>

## 3.3.0

🗓 2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@3.2.0...@spectrum-css/logicbutton@3.3.0)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="3.2.0"></a>

## 3.2.0

🗓 2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@3.1.0...@spectrum-css/logicbutton@3.2.0)

### ✨ Features

- **overlay,commons:**deprecate overlay; migrate references to commons ([#2429](https://github.com/adobe/spectrum-css/issues/2429))([7eecd96](https://github.com/adobe/spectrum-css/commit/7eecd96))

### 🐛 Bug fixes

- **commons:**rename and deprecate mods referencing global tokens ([#2423](https://github.com/adobe/spectrum-css/issues/2423))([3a49432](https://github.com/adobe/spectrum-css/commit/3a49432))

<a name="3.1.0"></a>

## 3.1.0

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@3.0.5...@spectrum-css/logicbutton@3.1.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="3.0.5"></a>

## 3.0.5

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@3.0.4...@spectrum-css/logicbutton@3.0.5)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="3.0.4"></a>

## 3.0.4

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@3.0.3...@spectrum-css/logicbutton@3.0.4)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="3.0.3"></a>

## 3.0.3

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@3.0.1...@spectrum-css/logicbutton@3.0.3)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="3.0.2"></a>

## 3.0.2

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@3.0.1...@spectrum-css/logicbutton@3.0.2)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="3.0.1"></a>

## 3.0.1

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@3.0.0...@spectrum-css/logicbutton@3.0.1)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="3.0.0"></a>

## 3.0.0

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@2.0.2...@spectrum-css/logicbutton@3.0.0)

\*feat(logicbutton)!: migrate to use spectrum-tokens (#2175)([f4dc972](https://github.com/adobe/spectrum-css/commit/f4dc972)), closes[#2175](https://github.com/adobe/spectrum-css/issues/2175)[#714](https://github.com/adobe/spectrum-css/issues/714)

### 🛑 BREAKING CHANGES

    		*
    		migrates to use `@adobe/spectrum-tokens`

Additionally:

- chore(logicbutton): update to use tokens

- feat(logicbutton): working on converting css to tokens

- feat(logicbutton): utilize core tokens

- chore(logicbutton): add spectrum and express files, fix unclosed css block

- fix(logicbutton): fix and colors

- chore(logicbutton): add additional stories for or and disabled

- style(logicbutton): update WHCM styling for disabled button

- docs(logicbutton): add spacing for examples

Adds some extra room between the example buttons in the docs site.

<a name="2.0.2"></a>

## 2.0.2

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@2.0.1...@spectrum-css/logicbutton@2.0.2)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="2.0.1"></a>

## 2.0.1

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@2.0.0...@spectrum-css/logicbutton@2.0.1)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="2.0.0"></a>

## 2.0.0

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.36...@spectrum-css/logicbutton@2.0.0)

\*refactor(logicbutton)!: replace focus-ring with focus-visible([1bee468](https://github.com/adobe/spectrum-css/commit/1bee468))

### 🛑 BREAKING CHANGES

    		*
    		use focus-visible psuedo class for focus styling

<a name="1.2.36"></a>

## 1.2.36

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.35...@spectrum-css/logicbutton@1.2.36)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.35"></a>

## 1.2.35

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.34...@spectrum-css/logicbutton@1.2.35)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.34"></a>

## 1.2.34

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.33...@spectrum-css/logicbutton@1.2.34)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.33"></a>

## 1.2.33

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.32...@spectrum-css/logicbutton@1.2.33)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="1.2.32"></a>

## 1.2.32

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.31...@spectrum-css/logicbutton@1.2.32)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.31"></a>

## 1.2.31

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.30...@spectrum-css/logicbutton@1.2.31)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.30"></a>

## 1.2.30

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.29...@spectrum-css/logicbutton@1.2.30)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.29"></a>

## 1.2.29

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.28...@spectrum-css/logicbutton@1.2.29)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.28"></a>

## 1.2.28

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.27...@spectrum-css/logicbutton@1.2.28)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.27"></a>

## 1.2.27

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.26...@spectrum-css/logicbutton@1.2.27)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.26"></a>

## 1.2.26

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.24...@spectrum-css/logicbutton@1.2.26)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.25"></a>

## 1.2.25

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.24...@spectrum-css/logicbutton@1.2.25)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.24"></a>

## 1.2.24

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.22...@spectrum-css/logicbutton@1.2.24)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.23"></a>

## 1.2.23

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.22...@spectrum-css/logicbutton@1.2.23)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.22"></a>

## 1.2.22

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.21...@spectrum-css/logicbutton@1.2.22)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.21"></a>

## 1.2.21

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.20...@spectrum-css/logicbutton@1.2.21)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.20"></a>

## 1.2.20

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.19...@spectrum-css/logicbutton@1.2.20)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.19"></a>

## 1.2.19

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.18...@spectrum-css/logicbutton@1.2.19)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.18"></a>

## 1.2.18

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.17...@spectrum-css/logicbutton@1.2.18)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.17"></a>

## 1.2.17

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.16...@spectrum-css/logicbutton@1.2.17)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.16"></a>

## 1.2.16

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.15...@spectrum-css/logicbutton@1.2.16)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.15"></a>

## 1.2.15

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.14...@spectrum-css/logicbutton@1.2.15)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.14"></a>

## 1.2.14

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.12...@spectrum-css/logicbutton@1.2.14)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.13"></a>

## 1.2.13

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.12...@spectrum-css/logicbutton@1.2.13)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.12"></a>

## 1.2.12

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.11...@spectrum-css/logicbutton@1.2.12)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.11"></a>

## 1.2.11

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.10...@spectrum-css/logicbutton@1.2.11)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.10"></a>

## 1.2.10

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.9...@spectrum-css/logicbutton@1.2.10)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.9"></a>

## 1.2.9

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.8...@spectrum-css/logicbutton@1.2.9)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.8"></a>

## 1.2.8

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.7...@spectrum-css/logicbutton@1.2.8)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.7"></a>

## 1.2.7

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.6...@spectrum-css/logicbutton@1.2.7)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.6"></a>

## 1.2.6

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.5...@spectrum-css/logicbutton@1.2.6)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.5"></a>

## 1.2.5

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.4...@spectrum-css/logicbutton@1.2.5)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.4"></a>

## 1.2.4

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.3...@spectrum-css/logicbutton@1.2.4)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.3"></a>

## 1.2.3

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.2...@spectrum-css/logicbutton@1.2.3)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.2"></a>

## 1.2.2

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.1...@spectrum-css/logicbutton@1.2.2)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.1"></a>

## 1.2.1

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.2.0...@spectrum-css/logicbutton@1.2.1)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.2.0"></a>

## 1.2.0

🗓 2022-01-05

### ✨ Features

- break out ClearButton and LogicButton into their own packages ([3cc0a5f](https://github.com/adobe/spectrum-css/commit/3cc0a5f))

### 🐛 Bug fixes

- logicbutton disabled ([6f4cd25](https://github.com/adobe/spectrum-css/commit/6f4cd25))
- unbreak the build ([d595cad](https://github.com/adobe/spectrum-css/commit/d595cad))
- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

<a name="1.1.0"></a>

## 1.1.0

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/logicbutton@1.1.0-beta.0...@spectrum-css/logicbutton@1.1.0)

**Note:** Version bump only for package @spectrum-css/logicbutton

<a name="1.1.0-beta.0"></a>

## 1.1.0-beta.0

🗓 2021-12-14

### ✨ Features

- break out ClearButton and LogicButton into their own packages ([a2092ab](https://github.com/adobe/spectrum-css/commit/a2092ab))

### 🐛 Bug fixes

- logicbutton disabled ([164ad01](https://github.com/adobe/spectrum-css/commit/164ad01))
- unbreak the build ([123add2](https://github.com/adobe/spectrum-css/commit/123add2))
