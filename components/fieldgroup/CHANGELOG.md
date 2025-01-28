# Change Log

## 6.0.1

### Patch Changes

- [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)! - Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/checkbox@9.3.1
  - @spectrum-css/helptext@6.0.1
  - @spectrum-css/radio@9.5.1

## 6.0.0

### Major Changes

- [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)! - Remove empty theme references to reduce complexity for components that don't need to define any mappings. This involves removing the source `themes` directories with the empty `spectrum.css` and `express.com` files as well as removing the following empty or unnecessary exports:

  - `index-base.css`
  - `index-theme.css`
  - `themes/spectrum.css`
  - `themes/express.css`

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/checkbox@9.3.0
  - @spectrum-css/radio@9.5.0
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/helptext@6.0.0

## 5.3.0

### Minor Changes

- [#3328](https://github.com/adobe/spectrum-css/pull/3328) [`a0486b3`](https://github.com/adobe/spectrum-css/commit/a0486b341581c610ebc9b3acd1837be2b66eb348) Thanks [@jawinn](https://github.com/jawinn)! - The previous display of the read-only state checkboxes did not match up with any guidelines. This update removes the read-only specific styles for checkbox within the fieldgroup component, so that the boxes are still displayed and commas are not appended to the label. This includes the removal of `--spectrum-fieldgroup-readonly-delimiter` as it is no longer needed.

### Patch Changes

- Updated dependencies [[`a0486b3`](https://github.com/adobe/spectrum-css/commit/a0486b341581c610ebc9b3acd1837be2b66eb348)]:
  - @spectrum-css/checkbox@9.2.1

## 5.2.0

### Minor Changes

- [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)! - Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/checkbox@9.2.0
  - @spectrum-css/helptext@5.2.0
  - @spectrum-css/radio@9.4.0

## 5.1.3

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)! - Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/checkbox@9.1.3
  - @spectrum-css/helptext@5.1.3
  - @spectrum-css/radio@9.2.4

## 5.1.2

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)! - Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/checkbox@9.1.2
  - @spectrum-css/helptext@5.1.2
  - @spectrum-css/radio@9.2.3

## 5.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/checkbox@9.1.1
  - @spectrum-css/helptext@5.1.1
  - @spectrum-css/radio@9.2.1

## 5.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/checkbox@>=9
  - @spectrum-css/helptext@>=5
  - @spectrum-css/radio@>=9
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="5.0.0"></a>

## 5.0.0

🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.2.4...@spectrum-css/fieldgroup@5.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="4.2.4"></a>

## 4.2.4

🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.2.3...@spectrum-css/fieldgroup@4.2.4)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.2.3"></a>

## 4.2.3

🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.2.2...@spectrum-css/fieldgroup@4.2.3)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.2.2"></a>

## 4.2.2

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.2.1...@spectrum-css/fieldgroup@4.2.2)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.2.1"></a>

## 4.2.1

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.2.0"></a>

## 4.2.0

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.1.1...@spectrum-css/fieldgroup@4.2.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="4.1.1"></a>

## 4.1.1

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.1.0...@spectrum-css/fieldgroup@4.1.1)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.1.0"></a>

## 4.1.0

🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.80...@spectrum-css/fieldgroup@4.1.0)

### ✨ Features

- **fieldlabel:**form - replace table layout with grid ([#2269](https://github.com/adobe/spectrum-css/issues/2269))([25591fc](https://github.com/adobe/spectrum-css/commit/25591fc)), closes[#2271](https://github.com/adobe/spectrum-css/issues/2271)

<a name="4.0.80"></a>

## 4.0.80

🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.78...@spectrum-css/fieldgroup@4.0.80)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.79"></a>

## 4.0.79

🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.78...@spectrum-css/fieldgroup@4.0.79)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.78"></a>

## 4.0.78

🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.77...@spectrum-css/fieldgroup@4.0.78)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.77"></a>

## 4.0.77

🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.76...@spectrum-css/fieldgroup@4.0.77)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.76"></a>

## 4.0.76

🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.75...@spectrum-css/fieldgroup@4.0.76)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.75"></a>

## 4.0.75

🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.74...@spectrum-css/fieldgroup@4.0.75)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.74"></a>

## 4.0.74

🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.73...@spectrum-css/fieldgroup@4.0.74)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.73"></a>

## 4.0.73

🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.72...@spectrum-css/fieldgroup@4.0.73)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.72"></a>

## 4.0.72

🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.71...@spectrum-css/fieldgroup@4.0.72)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.71"></a>

## 4.0.71

🗓
2023-09-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.70...@spectrum-css/fieldgroup@4.0.71)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.70"></a>

## 4.0.70

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.69...@spectrum-css/fieldgroup@4.0.70)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.69"></a>

## 4.0.69

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.68...@spectrum-css/fieldgroup@4.0.69)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.68"></a>

## 4.0.68

🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.67...@spectrum-css/fieldgroup@4.0.68)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.67"></a>

## 4.0.67

🗓
2023-08-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.66...@spectrum-css/fieldgroup@4.0.67)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="4.0.66"></a>

## 4.0.66

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.65...@spectrum-css/fieldgroup@4.0.66)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.65"></a>

## 4.0.65

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.63...@spectrum-css/fieldgroup@4.0.65)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.64"></a>

## 4.0.64

🗓
2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.63...@spectrum-css/fieldgroup@4.0.64)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.63"></a>

## 4.0.63

🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.62...@spectrum-css/fieldgroup@4.0.63)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.62"></a>

## 4.0.62

🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.61...@spectrum-css/fieldgroup@4.0.62)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.61"></a>

## 4.0.61

🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.60...@spectrum-css/fieldgroup@4.0.61)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.60"></a>

## 4.0.60

🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.59...@spectrum-css/fieldgroup@4.0.60)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.59"></a>

## 4.0.59

🗓
2023-07-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.58...@spectrum-css/fieldgroup@4.0.59)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.58"></a>

## 4.0.58

🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.57...@spectrum-css/fieldgroup@4.0.58)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.57"></a>

## 4.0.57

🗓
2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.56...@spectrum-css/fieldgroup@4.0.57)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.56"></a>

## 4.0.56

🗓
2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.55...@spectrum-css/fieldgroup@4.0.56)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.55"></a>

## 4.0.55

🗓
2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.54...@spectrum-css/fieldgroup@4.0.55)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.54"></a>

## 4.0.54

🗓
2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.53...@spectrum-css/fieldgroup@4.0.54)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.53"></a>

## 4.0.53

🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.52...@spectrum-css/fieldgroup@4.0.53)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.52"></a>

## 4.0.52

🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.51...@spectrum-css/fieldgroup@4.0.52)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.51"></a>

## 4.0.51

🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.50...@spectrum-css/fieldgroup@4.0.51)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="4.0.50"></a>

## 4.0.50

🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.49...@spectrum-css/fieldgroup@4.0.50)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.49"></a>

## 4.0.49

🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.48...@spectrum-css/fieldgroup@4.0.49)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.48"></a>

## 4.0.48

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.47...@spectrum-css/fieldgroup@4.0.48)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.47"></a>

## 4.0.47

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.46...@spectrum-css/fieldgroup@4.0.47)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.46"></a>

## 4.0.46

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.45...@spectrum-css/fieldgroup@4.0.46)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.45"></a>

## 4.0.45

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.44...@spectrum-css/fieldgroup@4.0.45)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.44"></a>

## 4.0.44

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.43...@spectrum-css/fieldgroup@4.0.44)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.43"></a>

## 4.0.43

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.42...@spectrum-css/fieldgroup@4.0.43)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.42"></a>

## 4.0.42

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.41...@spectrum-css/fieldgroup@4.0.42)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.41"></a>

## 4.0.41

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.40...@spectrum-css/fieldgroup@4.0.41)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.40"></a>

## 4.0.40

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.39...@spectrum-css/fieldgroup@4.0.40)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.39"></a>

## 4.0.39

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.38...@spectrum-css/fieldgroup@4.0.39)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.38"></a>

## 4.0.38

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.37...@spectrum-css/fieldgroup@4.0.38)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.37"></a>

## 4.0.37

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.36...@spectrum-css/fieldgroup@4.0.37)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.36"></a>

## 4.0.36

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.34...@spectrum-css/fieldgroup@4.0.36)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.35"></a>

## 4.0.35

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.34...@spectrum-css/fieldgroup@4.0.35)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.34"></a>

## 4.0.34

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.33...@spectrum-css/fieldgroup@4.0.34)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.33"></a>

## 4.0.33

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.32...@spectrum-css/fieldgroup@4.0.33)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.32"></a>

## 4.0.32

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.31...@spectrum-css/fieldgroup@4.0.32)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.31"></a>

## 4.0.31

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.30...@spectrum-css/fieldgroup@4.0.31)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.30"></a>

## 4.0.30

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.28...@spectrum-css/fieldgroup@4.0.30)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.29"></a>

## 4.0.29

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.28...@spectrum-css/fieldgroup@4.0.29)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.28"></a>

## 4.0.28

🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.26...@spectrum-css/fieldgroup@4.0.28)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.27"></a>

## 4.0.27

🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.26...@spectrum-css/fieldgroup@4.0.27)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.26"></a>

## 4.0.26

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.25...@spectrum-css/fieldgroup@4.0.26)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.25"></a>

## 4.0.25

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.24...@spectrum-css/fieldgroup@4.0.25)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.24"></a>

## 4.0.24

🗓 2023-03-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.23...@spectrum-css/fieldgroup@4.0.24)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.23"></a>

## 4.0.23

🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.22...@spectrum-css/fieldgroup@4.0.23)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.22"></a>

## 4.0.22

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.21...@spectrum-css/fieldgroup@4.0.22)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.21"></a>

## 4.0.21

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.20...@spectrum-css/fieldgroup@4.0.21)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.20"></a>

## 4.0.20

🗓 2023-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.19...@spectrum-css/fieldgroup@4.0.20)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.19"></a>

## 4.0.19

🗓 2023-03-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.18...@spectrum-css/fieldgroup@4.0.19)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.18"></a>

## 4.0.18

🗓 2023-02-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.17...@spectrum-css/fieldgroup@4.0.18)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.17"></a>

## 4.0.17

🗓 2023-02-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.16...@spectrum-css/fieldgroup@4.0.17)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.16"></a>

## 4.0.16

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.15...@spectrum-css/fieldgroup@4.0.16)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.15"></a>

## 4.0.15

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.14...@spectrum-css/fieldgroup@4.0.15)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.14"></a>

## 4.0.14

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.13...@spectrum-css/fieldgroup@4.0.14)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.13"></a>

## 4.0.13

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.12...@spectrum-css/fieldgroup@4.0.13)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.12"></a>

## 4.0.12

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.11...@spectrum-css/fieldgroup@4.0.12)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.11"></a>

## 4.0.11

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.10...@spectrum-css/fieldgroup@4.0.11)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.10"></a>

## 4.0.10

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.8...@spectrum-css/fieldgroup@4.0.10)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.9"></a>

## 4.0.9

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.8...@spectrum-css/fieldgroup@4.0.9)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.8"></a>

## 4.0.8

🗓 2023-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.7...@spectrum-css/fieldgroup@4.0.8)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.7"></a>

## 4.0.7

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.6...@spectrum-css/fieldgroup@4.0.7)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.6"></a>

## 4.0.6

🗓 2022-12-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.5...@spectrum-css/fieldgroup@4.0.6)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.5"></a>

## 4.0.5

🗓 2022-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.3...@spectrum-css/fieldgroup@4.0.5)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.4"></a>

## 4.0.4

🗓 2022-12-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.3...@spectrum-css/fieldgroup@4.0.4)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.3"></a>

## 4.0.3

🗓 2022-12-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.2...@spectrum-css/fieldgroup@4.0.3)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.2"></a>

## 4.0.2

🗓 2022-11-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.1...@spectrum-css/fieldgroup@4.0.2)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.1"></a>

## 4.0.1

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@4.0.0...@spectrum-css/fieldgroup@4.0.1)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="4.0.0"></a>

## 4.0.0

🗓 2022-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.1.4...@spectrum-css/fieldgroup@4.0.0)

- feat(fieldgroup)!: migrate to core tokens (#1486) ([17c4795](https://github.com/adobe/spectrum-css/commit/17c4795)), closes [#1486](https://github.com/adobe/spectrum-css/issues/1486)

### 🛑 BREAKING CHANGES

- migrates FieldGroup to core tokens

Co-authored-by: Patrick Fulton <pfulton@adobe.com>

<a name="3.1.4"></a>

## 3.1.4

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.1.3...@spectrum-css/fieldgroup@3.1.4)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.1.3"></a>

## 3.1.3

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.1.2...@spectrum-css/fieldgroup@3.1.3)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.1.2"></a>

## 3.1.2

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.1.1...@spectrum-css/fieldgroup@3.1.2)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.1.1"></a>

## 3.1.1

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.1.0...@spectrum-css/fieldgroup@3.1.1)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.1.0"></a>

## 3.1.0

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.19...@spectrum-css/fieldgroup@3.1.0)

### ✨ Features

- **fieldgroup:** add styles for read-only checkbox group ([33d1d20](https://github.com/adobe/spectrum-css/commit/33d1d20))

<a name="3.0.19"></a>

## 3.0.19

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.18...@spectrum-css/fieldgroup@3.0.19)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.18"></a>

## 3.0.18

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.17...@spectrum-css/fieldgroup@3.0.18)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.17"></a>

## 3.0.17

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.16...@spectrum-css/fieldgroup@3.0.17)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.16"></a>

## 3.0.16

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.15...@spectrum-css/fieldgroup@3.0.16)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.15"></a>

## 3.0.15

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.14...@spectrum-css/fieldgroup@3.0.15)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.14"></a>

## 3.0.14

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.13...@spectrum-css/fieldgroup@3.0.14)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.13"></a>

## 3.0.13

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.12...@spectrum-css/fieldgroup@3.0.13)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.12"></a>

## 3.0.12

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.10...@spectrum-css/fieldgroup@3.0.12)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

<a name="3.0.11"></a>

## 3.0.11

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.11-beta.0...@spectrum-css/fieldgroup@3.0.11)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.11-beta.0"></a>

## 3.0.11-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.10...@spectrum-css/fieldgroup@3.0.11-beta.0)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.10"></a>

## 3.0.10

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.9...@spectrum-css/fieldgroup@3.0.10)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.9"></a>

## 3.0.9

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.8...@spectrum-css/fieldgroup@3.0.9)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.8"></a>

## 3.0.8

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.7...@spectrum-css/fieldgroup@3.0.8)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.7"></a>

## 3.0.7

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.6...@spectrum-css/fieldgroup@3.0.7)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.6"></a>

## 3.0.6

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.4...@spectrum-css/fieldgroup@3.0.6)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.5"></a>

## 3.0.5

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.4...@spectrum-css/fieldgroup@3.0.5)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.3"></a>

## 3.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.3-alpha.3...@spectrum-css/fieldgroup@3.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="3.0.3-alpha.3"></a>

## 3.0.3-alpha.3

🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.3-alpha.2...@spectrum-css/fieldgroup@3.0.3-alpha.3)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.3-alpha.2"></a>

## 3.0.3-alpha.2

🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.3-alpha.1...@spectrum-css/fieldgroup@3.0.3-alpha.2)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.3-alpha.1"></a>

## 3.0.3-alpha.1

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.3-alpha.0...@spectrum-css/fieldgroup@3.0.3-alpha.1)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.3-alpha.0"></a>

## 3.0.3-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.2...@spectrum-css/fieldgroup@3.0.3-alpha.0)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.2"></a>

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.1...@spectrum-css/fieldgroup@3.0.2)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.1"></a>

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.0...@spectrum-css/fieldgroup@3.0.1)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.0"></a>

## 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.0-beta.6...@spectrum-css/fieldgroup@3.0.0)

### ✨ Features

- added t-shirt sizes to checkbox ([f4c59bd](https://github.com/adobe/spectrum-css/commit/f4c59bd)), closes [#951](https://github.com/adobe/spectrum-css/issues/951)

### 🛑 BREAKING CHANGES

- a t-shirt size class is now required for checkbox.

<a name="3.0.0-beta.6"></a>

## 3.0.0-beta.6

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.0-beta.5...@spectrum-css/fieldgroup@3.0.0-beta.6)

### 🐛 Bug fixes

- support content direction sensitive horizontal spacing, fixes [#1050](https://github.com/adobe/spectrum-css/issues/1050) ([#1055](https://github.com/adobe/spectrum-css/issues/1055)) ([d24c17e](https://github.com/adobe/spectrum-css/commit/d24c17e))
- update main, resolved conflicts ([d7880a2](https://github.com/adobe/spectrum-css/commit/d7880a2))

<a name="3.0.0-beta.5"></a>

## 3.0.0-beta.5

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.0-beta.4...@spectrum-css/fieldgroup@3.0.0-beta.5)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.0-beta.4"></a>

## 3.0.0-beta.4

🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.0-beta.3...@spectrum-css/fieldgroup@3.0.0-beta.4)

### 🐛 Bug fixes

- Checkbox and Radio margins, docs, and typography ([#897](https://github.com/adobe/spectrum-css/issues/897)) ([a089ce0](https://github.com/adobe/spectrum-css/commit/a089ce0)), closes [#243](https://github.com/adobe/spectrum-css/issues/243) [#124](https://github.com/adobe/spectrum-css/issues/124) [#707](https://github.com/adobe/spectrum-css/issues/707) [#243](https://github.com/adobe/spectrum-css/issues/243) [#251](https://github.com/adobe/spectrum-css/issues/251)

### 🛑 BREAKING CHANGES

- Checkbox and Radio no longer have margin on their own, must use FieldGroup

- feat: add .spectrum-Example to wrap sub-examples
- The spectrum-FieldGroup--horizontal is now required for horizontal field groups

- feat: remove hit area from Radio/Checkbox

<a name="3.0.0-beta.3"></a>

## 3.0.0-beta.3

🗓 2020-06-19 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.0-beta.2...@spectrum-css/fieldgroup@3.0.0-beta.3)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.0-beta.2"></a>

## 3.0.0-beta.2

🗓 2020-05-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.0-beta.1...@spectrum-css/fieldgroup@3.0.0-beta.2)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.0-beta.1"></a>

## 3.0.0-beta.1

🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@3.0.0-beta.0...@spectrum-css/fieldgroup@3.0.0-beta.1)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="3.0.0-beta.0"></a>

## 3.0.0-beta.0

🗓 2020-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@2.0.6...@spectrum-css/fieldgroup@3.0.0-beta.0)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="2.0.6"></a>

## 2.0.6

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@2.0.5...@spectrum-css/fieldgroup@2.0.6)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="2.0.5"></a>

## 2.0.5

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@2.0.4...@spectrum-css/fieldgroup@2.0.5)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="2.0.4"></a>

## 2.0.4

🗓 2020-01-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@2.0.3...@spectrum-css/fieldgroup@2.0.4)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="2.0.3"></a>

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@2.0.2...@spectrum-css/fieldgroup@2.0.3)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="2.0.2"></a>

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@2.0.1...@spectrum-css/fieldgroup@2.0.2)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="2.0.1"></a>

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/fieldgroup@2.0.0...@spectrum-css/fieldgroup@2.0.1)

**Note:** Version bump only for package @spectrum-css/fieldgroup

<a name="2.0.0"></a>

## 2.0.0

🗓 2019-10-08

### ✨ Features

- let FieldGroup wrap, fixes [#268](https://github.com/adobe/spectrum-css/issues/268) ([#307](https://github.com/adobe/spectrum-css/issues/307)) ([170d964](https://github.com/adobe/spectrum-css/commit/170d964))
- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
