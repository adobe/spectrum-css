# Change Log

## 2.0.0-s2-foundations.2

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`b00388b`](https://github.com/adobe/spectrum-css/commit/b00388b3ab026989f261f7bcdd77699521f45d58) Thanks [@pfulton](https://github.com/pfulton)! - Preserves `themes` folder in `dist` artifacts for easier downstream consumption

## 2.0.0-s2-foundations.1

### Minor Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`39bbd6c`](https://github.com/adobe/spectrum-css/commit/39bbd6cbb7eac7c71515ef2417554cb115eba00e) Thanks [@pfulton](https://github.com/pfulton)! - Fixes an issue where vars.css was not being populated with the correct values

## 2.0.0-s2-foundations.0

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`5e9953d`](https://github.com/adobe/spectrum-css/commit/5e9953d96806a5d1e769a343cd538e4af81916ce) Thanks [@pfulton](https://github.com/pfulton)! - S2 colors + grays foundation

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="1.1.2"></a>

## 1.1.2

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/ui-icons

<a name="1.1.1"></a>

## 1.1.1

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/ui-icons@1.1.0...@spectrum-css/ui-icons@1.1.1)

**Note:** Version bump only for package @spectrum-css/ui-icons

<a name="1.1.0"></a>

## 1.1.0

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/ui-icons@0.1.0...@spectrum-css/ui-icons@1.1.0)

### ✨ Features

- **ui-icons:**graduate to 1.0 release ([#2366](https://github.com/adobe/spectrum-css/issues/2366))([afd369a](https://github.com/adobe/spectrum-css/commit/afd369a))

<a name="0.1.0"></a>

## 0.1.0

🗓
2023-12-12

\*feat(icon,ui-icons)!: migrate the icon compiler to a distinct package (#2343)([d73d594](https://github.com/adobe/spectrum-css/commit/d73d594)), closes[#2343](https://github.com/adobe/spectrum-css/issues/2343)

    	###
    	🛑 BREAKING CHANGES

    		*
    		 - @spectrum-css/icon will no longer contain SVG assets; it will be a purely CSS package with all SVG assets migrated to the new @spectrum-css/ui-icons package.

- NEW: @spectrum-css/ui-icons package for all SVG icons in the UI set.
