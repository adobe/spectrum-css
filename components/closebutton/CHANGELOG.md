# Change Log

## 5.3.0

### Minor Changes

- [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)! - Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/icon@7.2.0

## 5.2.2

### Patch Changes

- [#3270](https://github.com/adobe/spectrum-css/pull/3270) [`008bb34`](https://github.com/adobe/spectrum-css/commit/008bb34a0bbefd1abeb0d37bcdb179811dd9df3c) Thanks [@cdransf](https://github.com/cdransf)! - Removes unnecessary stylelint-disable comments now that rule is disabled in config.

## 5.2.1

### Patch Changes

- [#3250](https://github.com/adobe/spectrum-css/pull/3250) [`2b45928`](https://github.com/adobe/spectrum-css/commit/2b45928b503c9ded173a56da65a32764f2255918) Thanks [@castastrophe](https://github.com/castastrophe)! - CloseButton

  - Remove hardcoded tokens for sizing in favor of component sizing. Remove mapping to height & width separately in favor of using the existing "--spectrum-closebutton-size" property.

## 5.2.2

### Patch Changes

- [#3270](https://github.com/adobe/spectrum-css/pull/3270) [`008bb34`](https://github.com/adobe/spectrum-css/commit/008bb34a0bbefd1abeb0d37bcdb179811dd9df3c) Thanks [@cdransf](https://github.com/cdransf)! - Removes unnecessary stylelint-disable comments now that rule is disabled in config.

## 5.2.1

### Patch Changes

- [#3250](https://github.com/adobe/spectrum-css/pull/3250) [`2b45928`](https://github.com/adobe/spectrum-css/commit/2b45928b503c9ded173a56da65a32764f2255918) Thanks [@castastrophe](https://github.com/castastrophe)! - CloseButton

  - Remove hardcoded tokens for sizing in favor of component sizing. Remove mapping to height & width separately in favor of using the existing "--spectrum-closebutton-size" property.

## 5.2.0

### Minor Changes

- [#3108](https://github.com/adobe/spectrum-css/pull/3108) [`7fedb1f`](https://github.com/adobe/spectrum-css/commit/7fedb1f23bcce5ff1a089b8cfc2649eb273c6d80) Thanks [@castastrophe](https://github.com/castastrophe)! - Currently the t-shirt sizing for Close button is using "spectrum-Closebutton" as a prefix which does not align with the use of "spectrum-CloseButton" (capital B) for the root class. This PR adds sizing classes that use the capital B and labels the lowercase B class as deprecated.

  Expands Close button test coverage to include the hover and focus states.

## 5.1.3

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)! - Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/icon@7.1.4

## 5.1.2

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)! - Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/icon@7.1.3

## 5.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/icon@7.1.1

## 5.1.0

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

<a name="5.0.0"></a>

## 5.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.2.5...@spectrum-css/closebutton@5.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGES

- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="4.2.5"></a>

## 4.2.5

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.2.4...@spectrum-css/closebutton@4.2.5)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="4.2.4"></a>

## 4.2.4

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.2.3...@spectrum-css/closebutton@4.2.4)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="4.2.3"></a>

## 4.2.3

🗓 2024-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.2.2...@spectrum-css/closebutton@4.2.3)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="4.2.2"></a>

## 4.2.2

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.2.1...@spectrum-css/closebutton@4.2.2)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="4.2.1"></a>

## 4.2.1

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="4.2.0"></a>

## 4.2.0

🗓 2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.1.0...@spectrum-css/closebutton@4.2.0)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="4.1.0"></a>

## 4.1.0

🗓 2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.0.18...@spectrum-css/closebutton@4.1.0)

### ✨ Features

- **overlay,commons:**deprecate overlay; migrate references to commons ([#2429](https://github.com/adobe/spectrum-css/issues/2429))([7eecd96](https://github.com/adobe/spectrum-css/commit/7eecd96))

### 🐛 Bug fixes

- **commons:**rename and deprecate mods referencing global tokens ([#2423](https://github.com/adobe/spectrum-css/issues/2423))([3a49432](https://github.com/adobe/spectrum-css/commit/3a49432))

<a name="4.0.18"></a>

## 4.0.18

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.0.17...@spectrum-css/closebutton@4.0.18)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="4.0.17"></a>

## 4.0.17

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.0.16...@spectrum-css/closebutton@4.0.17)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="4.0.16"></a>

## 4.0.16

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.0.15...@spectrum-css/closebutton@4.0.16)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="4.0.15"></a>

## 4.0.15

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.0.13...@spectrum-css/closebutton@4.0.15)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="4.0.14"></a>

## 4.0.14

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.0.13...@spectrum-css/closebutton@4.0.14)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="4.0.13"></a>

## 4.0.13

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.0.12...@spectrum-css/closebutton@4.0.13)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="4.0.12"></a>

## 4.0.12

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.0.11...@spectrum-css/closebutton@4.0.12)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="4.0.11"></a>

## 4.0.11

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.0.10...@spectrum-css/closebutton@4.0.11)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="4.0.10"></a>

## 4.0.10

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.0.9...@spectrum-css/closebutton@4.0.10)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="4.0.9"></a>

## 4.0.9

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.0.8...@spectrum-css/closebutton@4.0.9)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="4.0.8"></a>

## 4.0.8

🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.0.7...@spectrum-css/closebutton@4.0.8)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="4.0.7"></a>

## 4.0.7

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.0.6...@spectrum-css/closebutton@4.0.7)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="4.0.6"></a>

## 4.0.6

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.0.5...@spectrum-css/closebutton@4.0.6)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="4.0.5"></a>

## 4.0.5

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.0.4...@spectrum-css/closebutton@4.0.5)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="4.0.4"></a>

## 4.0.4

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.0.3...@spectrum-css/closebutton@4.0.4)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="4.0.3"></a>

## 4.0.3

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.0.2...@spectrum-css/closebutton@4.0.3)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="4.0.2"></a>

## 4.0.2

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.0.0...@spectrum-css/closebutton@4.0.2)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="4.0.1"></a>

## 4.0.1

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@4.0.0...@spectrum-css/closebutton@4.0.1)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="4.0.0"></a>

## 4.0.0

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.1.14...@spectrum-css/closebutton@4.0.0)

\*refactor(closebutton)!: replace focus-ring with focus-visible([a17183f](https://github.com/adobe/spectrum-css/commit/a17183f))

### 🛑 BREAKING CHANGES

    		*
    		use focus-visible pseudo class for focus styling

remove duplicate focus indicator styling

<a name="3.1.14"></a>

## 3.1.14

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.1.13...@spectrum-css/closebutton@3.1.14)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.1.13"></a>

## 3.1.13

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.1.12...@spectrum-css/closebutton@3.1.13)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.1.12"></a>

## 3.1.12

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.1.11...@spectrum-css/closebutton@3.1.12)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.1.11"></a>

## 3.1.11

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.1.10...@spectrum-css/closebutton@3.1.11)

### 🐛 Bug fixes

\*icon sizing in Storybook story templates ([#2037](https://github.com/adobe/spectrum-css/issues/2037))([c90c8a3](https://github.com/adobe/spectrum-css/commit/c90c8a3))

<a name="3.1.10"></a>

## 3.1.10

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.1.9...@spectrum-css/closebutton@3.1.10)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.1.9"></a>

## 3.1.9

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.1.8...@spectrum-css/closebutton@3.1.9)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.1.8"></a>

## 3.1.8

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.1.7...@spectrum-css/closebutton@3.1.8)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.1.7"></a>

## 3.1.7

🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.1.6...@spectrum-css/closebutton@3.1.7)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.1.6"></a>

## 3.1.6

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.1.5...@spectrum-css/closebutton@3.1.6)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.1.5"></a>

## 3.1.5

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.1.4...@spectrum-css/closebutton@3.1.5)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.1.4"></a>

## 3.1.4

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.1.3...@spectrum-css/closebutton@3.1.4)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="3.1.3"></a>

## 3.1.3

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.1.2...@spectrum-css/closebutton@3.1.3)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.1.2"></a>

## 3.1.2

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.1.1...@spectrum-css/closebutton@3.1.2)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.1.1"></a>

## 3.1.1

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.1.0...@spectrum-css/closebutton@3.1.1)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.1.0"></a>

## 3.1.0

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.43...@spectrum-css/closebutton@3.1.0)

### ✨ Features

- **alertbanner:** add AlertBanner component ([#1798](https://github.com/adobe/spectrum-css/issues/1798)) ([1610e7a](https://github.com/adobe/spectrum-css/commit/1610e7a))

<a name="3.0.43"></a>

## 3.0.43

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.42...@spectrum-css/closebutton@3.0.43)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.42"></a>

## 3.0.42

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.41...@spectrum-css/closebutton@3.0.42)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.41"></a>

## 3.0.41

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.40...@spectrum-css/closebutton@3.0.41)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.40"></a>

## 3.0.40

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.39...@spectrum-css/closebutton@3.0.40)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.39"></a>

## 3.0.39

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.38...@spectrum-css/closebutton@3.0.39)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.38"></a>

## 3.0.38

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.37...@spectrum-css/closebutton@3.0.38)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.37"></a>

## 3.0.37

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.36...@spectrum-css/closebutton@3.0.37)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.36"></a>

## 3.0.36

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.35...@spectrum-css/closebutton@3.0.36)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.35"></a>

## 3.0.35

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.34...@spectrum-css/closebutton@3.0.35)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.34"></a>

## 3.0.34

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.32...@spectrum-css/closebutton@3.0.34)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.33"></a>

## 3.0.33

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.32...@spectrum-css/closebutton@3.0.33)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.32"></a>

## 3.0.32

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.31...@spectrum-css/closebutton@3.0.32)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.31"></a>

## 3.0.31

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.30...@spectrum-css/closebutton@3.0.31)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.30"></a>

## 3.0.30

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.29...@spectrum-css/closebutton@3.0.30)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.29"></a>

## 3.0.29

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.28...@spectrum-css/closebutton@3.0.29)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.28"></a>

## 3.0.28

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.26...@spectrum-css/closebutton@3.0.28)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.27"></a>

## 3.0.27

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.26...@spectrum-css/closebutton@3.0.27)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.26"></a>

## 3.0.26

🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.24...@spectrum-css/closebutton@3.0.26)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.25"></a>

## 3.0.25

🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.24...@spectrum-css/closebutton@3.0.25)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.24"></a>

## 3.0.24

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.23...@spectrum-css/closebutton@3.0.24)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.23"></a>

## 3.0.23

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.22...@spectrum-css/closebutton@3.0.23)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.22"></a>

## 3.0.22

🗓 2023-03-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.21...@spectrum-css/closebutton@3.0.22)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.21"></a>

## 3.0.21

🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.20...@spectrum-css/closebutton@3.0.21)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.20"></a>

## 3.0.20

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.19...@spectrum-css/closebutton@3.0.20)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.19"></a>

## 3.0.19

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.18...@spectrum-css/closebutton@3.0.19)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.18"></a>

## 3.0.18

🗓 2023-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.17...@spectrum-css/closebutton@3.0.18)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.17"></a>

## 3.0.17

🗓 2023-03-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.16...@spectrum-css/closebutton@3.0.17)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.16"></a>

## 3.0.16

🗓 2023-02-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.15...@spectrum-css/closebutton@3.0.16)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.15"></a>

## 3.0.15

🗓 2023-02-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.14...@spectrum-css/closebutton@3.0.15)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.14"></a>

## 3.0.14

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.13...@spectrum-css/closebutton@3.0.14)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.13"></a>

## 3.0.13

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.12...@spectrum-css/closebutton@3.0.13)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.12"></a>

## 3.0.12

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.11...@spectrum-css/closebutton@3.0.12)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.11"></a>

## 3.0.11

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.10...@spectrum-css/closebutton@3.0.11)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.10"></a>

## 3.0.10

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.9...@spectrum-css/closebutton@3.0.10)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.9"></a>

## 3.0.9

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.8...@spectrum-css/closebutton@3.0.9)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.8"></a>

## 3.0.8

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.6...@spectrum-css/closebutton@3.0.8)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.7"></a>

## 3.0.7

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.6...@spectrum-css/closebutton@3.0.7)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.6"></a>

## 3.0.6

🗓 2023-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.5...@spectrum-css/closebutton@3.0.6)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.5"></a>

## 3.0.5

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.4...@spectrum-css/closebutton@3.0.5)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.4"></a>

## 3.0.4

🗓 2022-12-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.3...@spectrum-css/closebutton@3.0.4)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.3"></a>

## 3.0.3

🗓 2022-12-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.2...@spectrum-css/closebutton@3.0.3)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.2"></a>

## 3.0.2

🗓 2022-11-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.1...@spectrum-css/closebutton@3.0.2)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.1"></a>

## 3.0.1

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@3.0.0...@spectrum-css/closebutton@3.0.1)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="3.0.0"></a>

## 3.0.0

🗓 2022-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@2.0.7...@spectrum-css/closebutton@3.0.0)

- refactor(closebutton)!: remap core token aliases & rename aliases ([dc3afde](https://github.com/adobe/spectrum-css/commit/dc3afde))

### 🛑 BREAKING CHANGES

- remaps existing aliases to new/renamed core token values

- `--spectrum-focus-ring-thickness` renamed to `--spectrum-focus-indicator-thickness`
- `--spectrum-focus-ring-gap` renamed to `--spectrum-focus-indicator-gap`
- `--spectrum-focus-ring-color` renamed to `--spectrum-focus-indicator-color`
- `--spectrum-static-white-focus-ring-color` renamed to `--spectrum-static-white-focus-indicator-color`
- `--spectrum-static-black-focus-ring-color` renamed to `--spectrum-static-black-focus-indicator-color`

<a name="2.0.7"></a>

## 2.0.7

🗓 2022-09-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@2.0.6...@spectrum-css/closebutton@2.0.7)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="2.0.6"></a>

## 2.0.6

🗓 2022-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@2.0.5...@spectrum-css/closebutton@2.0.6)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="2.0.5"></a>

## 2.0.5

🗓 2022-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@2.0.4...@spectrum-css/closebutton@2.0.5)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="2.0.4"></a>

## 2.0.4

🗓 2022-09-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@2.0.3...@spectrum-css/closebutton@2.0.4)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="2.0.3"></a>

## 2.0.3

🗓 2022-08-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@2.0.2...@spectrum-css/closebutton@2.0.3)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="2.0.2"></a>

## 2.0.2

🗓 2022-08-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@2.0.1...@spectrum-css/closebutton@2.0.2)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="2.0.1"></a>

## 2.0.1

🗓 2022-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@2.0.0...@spectrum-css/closebutton@2.0.1)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="2.0.0"></a>

## 2.0.0

🗓 2022-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@1.2.13...@spectrum-css/closebutton@2.0.0)

- feat(closebutton)!: migrate closebutton to core tokens (CSS-118) (#1477) ([766f9da](https://github.com/adobe/spectrum-css/commit/766f9da)), closes [#1477](https://github.com/adobe/spectrum-css/issues/1477)

### 🛑 BREAKING CHANGES

- migrates closebutton to core tokens

Co-authored-by: Patrick Fulton <pfulton@adobe.com>

<a name="1.2.13"></a>

## 1.2.13

🗓 2022-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@1.2.12...@spectrum-css/closebutton@1.2.13)

### 🐛 Bug fixes

- **actionbutton, closebutton, picker:** remove `!important` declarations ([a26c212](https://github.com/adobe/spectrum-css/commit/a26c212))

<a name="1.2.12"></a>

## 1.2.12

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@1.2.11...@spectrum-css/closebutton@1.2.12)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="1.2.11"></a>

## 1.2.11

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@1.2.10...@spectrum-css/closebutton@1.2.11)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="1.2.10"></a>

## 1.2.10

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@1.2.9...@spectrum-css/closebutton@1.2.10)

### 🐛 Bug fixes

- closebutton WHCM ([7b61437](https://github.com/adobe/spectrum-css/commit/7b61437))

<a name="1.2.9"></a>

## 1.2.9

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@1.2.8...@spectrum-css/closebutton@1.2.9)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="1.2.8"></a>

## 1.2.8

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@1.2.7...@spectrum-css/closebutton@1.2.8)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="1.2.7"></a>

## 1.2.7

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@1.2.6...@spectrum-css/closebutton@1.2.7)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="1.2.6"></a>

## 1.2.6

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@1.2.5...@spectrum-css/closebutton@1.2.6)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="1.2.5"></a>

## 1.2.5

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@1.2.4...@spectrum-css/closebutton@1.2.5)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="1.2.4"></a>

## 1.2.4

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@1.2.3...@spectrum-css/closebutton@1.2.4)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="1.2.3"></a>

## 1.2.3

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@1.2.2...@spectrum-css/closebutton@1.2.3)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="1.2.2"></a>

## 1.2.2

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@1.2.1...@spectrum-css/closebutton@1.2.2)

### 🐛 Bug fixes

- removed some issues from the generated css for close button ([0b3aee3](https://github.com/adobe/spectrum-css/commit/0b3aee3))

<a name="1.2.1"></a>

## 1.2.1

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/closebutton@1.2.0...@spectrum-css/closebutton@1.2.1)

**Note:** Version bump only for package @spectrum-css/closebutton

<a name="1.2.0"></a>

## 1.2.0

🗓 2022-01-05

### ✨ Features

- add CloseButton ([1e5ac49](https://github.com/adobe/spectrum-css/commit/1e5ac49))
- updating closebutton api docs ([698aee4](https://github.com/adobe/spectrum-css/commit/698aee4))

### 🐛 Bug fixes

- removing clear button inheritance ([8836489](https://github.com/adobe/spectrum-css/commit/8836489))
- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))
- use latest vars package in closebutton ([57f2200](https://github.com/adobe/spectrum-css/commit/57f2200))

<a name="1.1.0"></a>

## 1.1.0

🗓 2022-01-05

### ✨ Features

- add CloseButton ([ff96b80](https://github.com/adobe/spectrum-css/commit/ff96b80))
- updating closebutton api docs ([740c39d](https://github.com/adobe/spectrum-css/commit/740c39d))

### 🐛 Bug fixes

- removing clear button inheritance ([5dc151e](https://github.com/adobe/spectrum-css/commit/5dc151e))
- use latest vars package in closebutton ([5fa6371](https://github.com/adobe/spectrum-css/commit/5fa6371))
