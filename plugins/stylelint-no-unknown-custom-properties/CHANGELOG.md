# Change Log

## 2.0.2

### Patch Changes

- [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)! - Update package dependencies.

  Specific to `stylelint-no-unknown-custom-properties`, the assumption that only CSS files will be parsed is removed to allow support for JSON assets as well. Additionally, this package will now evaluate dependencies beyond just `@spectrum-css`.

## 2.0.1

### Patch Changes

- [#3026](https://github.com/adobe/spectrum-css/pull/3026) [`544a803`](https://github.com/adobe/spectrum-css/commit/544a8039e84423a4db3137a0688f27b7812e291f) Thanks [@castastrophe](https://github.com/castastrophe)! - Dependency updates to align with versions used in the parent repository.

## 2.0.0

### Major Changes

- [#2780](https://github.com/adobe/spectrum-css/pull/2780) [`7fea737`](https://github.com/adobe/spectrum-css/commit/7fea7371c810cd150272f8dfd964741250768714) Thanks [@castastrophe](https://github.com/castastrophe)! - Upgrades packages to support Stylelint v16 and leveraging ESM. Drops support for v14 and v15 in this release.

## 1.3.3

### Patch Changes

- [#2775](https://github.com/adobe/spectrum-css/pull/2775) [`2452637`](https://github.com/adobe/spectrum-css/commit/2452637d1179b9b2b025dafeb5834720712413d7) Thanks [@castastrophe](https://github.com/castastrophe)! - Dependency minor and patch updates to support new features in tools leveraged

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="1.3.2"></a>

## 1.3.2

🗓 2024-02-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-tools/stylelint-no-unknown-custom-properties@1.3.1...@spectrum-tools/stylelint-no-unknown-custom-properties@1.3.2)

**Note:** Version bump only for package @spectrum-tools/stylelint-no-unknown-custom-properties

<a name="1.3.1"></a>

## 1.3.1

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-tools/stylelint-no-unknown-custom-properties

<a name="1.3.0"></a>

## 1.3.0

🗓 2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-tools/stylelint-no-unknown-custom-properties@1.2.2...@spectrum-tools/stylelint-no-unknown-custom-properties@1.3.0)

### ✨ Features

\*migrate build packages to postcss v8 ([#2460](https://github.com/adobe/spectrum-css/issues/2460))([bd6c40e](https://github.com/adobe/spectrum-css/commit/bd6c40e))

<a name="1.2.2"></a>

## 1.2.2

🗓 2024-01-16

**Note:** Version bump only for package @spectrum-tools/stylelint-no-unknown-custom-properties

<a name="1.2.1"></a>

## 1.2.1

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/postcss-dropunusedvars@1.2.1-alpha.0...postcss-dropunusedvars@1.2.1)

**Note:** Version bump only for package postcss-dropunusedvars

<a name="1.2.1-alpha.0"></a>

## 1.2.1-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/postcss-dropunusedvars@1.2.0...postcss-dropunusedvars@1.2.1-alpha.0)

**Note:** Version bump only for package postcss-dropunusedvars

<a name="1.2.0"></a>

## 1.2.0

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/postcss-dropunusedvars@1.1.0...postcss-dropunusedvars@1.2.0)

### ✨ Features

- drop unused vars, even if other vars once referred to them ([772851e](https://github.com/adobe/spectrum-css/commit/772851e))

### 🐛 Bug fixes

- correct PostCSS plugin names ([81ad868](https://github.com/adobe/spectrum-css/commit/81ad868))
- correctly catch usage of fallback vars ([3bccaf5](https://github.com/adobe/spectrum-css/commit/3bccaf5))
- don't remove vars that are ref'd by dead vars but used in props ([4030d40](https://github.com/adobe/spectrum-css/commit/4030d40))

<a name="1.1.0"></a>

## 1.1.0

🗓 2020-12-04

### ✨ Features

- add postcss-dropunusedvars ([85426eb](https://github.com/adobe/spectrum-css/commit/85426eb))
