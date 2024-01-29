# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="2.0.0"></a>

## 2.0.0

🗓 2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/postcss-dropunusedvars@1.2.1...postcss-dropunusedvars@2.0.0)

### 🛑 BREAKING CHANGES

Upgrade to PostCSS v8 [bd6c40e](https://github.com/adobe/spectrum-css/commit/bd6c40eb5a4b43df94dff1f325502e5cd08b7f5f)

<a name="1.2.1"></a>

## 1.2.1

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/postcss-dropunusedvars@1.2.1-alpha.0...postcss-dropunusedvars@1.2.1)

**Note:** Version bump only for package postcss-dropunusedvars

<a name="1.2.1-alpha.0"></a>

## 1.2.1-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/postcss-dropunusedvars@1.2.0...postcss-dropunusedvars@1.2.1-alpha.0)

**Note:** Version bump only for package postcss-dropunusedvars

<a name="1.2.0"></a>

# 1.2.0

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/postcss-dropunusedvars@1.1.0...postcss-dropunusedvars@1.2.0)

### ✨ Features

- drop unused vars, even if other vars once referred to them ([772851e](https://github.com/adobe/spectrum-css/commit/772851e))

### 🐛 Bug fixes

- correct PostCSS plugin names ([81ad868](https://github.com/adobe/spectrum-css/commit/81ad868))
- correctly catch usage of fallback vars ([3bccaf5](https://github.com/adobe/spectrum-css/commit/3bccaf5))
- don't remove vars that are ref'd by dead vars but used in props ([4030d40](https://github.com/adobe/spectrum-css/commit/4030d40))

<a name="1.1.0"></a>

# 1.1.0

🗓 2020-12-04

### ✨ Features

- add postcss-dropunusedvars ([85426eb](https://github.com/adobe/spectrum-css/commit/85426eb))
