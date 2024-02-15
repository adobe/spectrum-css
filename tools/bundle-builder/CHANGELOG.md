# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="7.0.0"></a>
#7.0.0
🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@6.3.2...@spectrum-css/bundle-builder@7.0.0)

### ♻️ Code refactoring

- **quickaction:**deprecate component; support this in docs ([#2304](https://github.com/adobe/spectrum-css/issues/2304))([84e1ee9](https://github.com/adobe/spectrum-css/commit/84e1ee9))

      ###
      🛑 BREAKING CHANGES

      	*
      	**quickaction:** @spectrum-css/quickaction deprecated

This component has been deprecated. Use an action bar to allow users to perform actions on either a single or multiple items at the same time, instead.

<a name="6.3.2"></a>
##6.3.2
🗓
2024-02-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@6.3.1...@spectrum-css/bundle-builder@6.3.2)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="6.3.1"></a>
##6.3.1
🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="6.3.0"></a>
#6.3.0
🗓
2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@6.2.0...@spectrum-css/bundle-builder@6.3.0)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="6.2.0"></a>
#6.2.0
🗓
2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@6.1.2...@spectrum-css/bundle-builder@6.2.0)

### ✨ Features

\*migrate build packages to postcss v8 ([#2460](https://github.com/adobe/spectrum-css/issues/2460))([bd6c40e](https://github.com/adobe/spectrum-css/commit/bd6c40e))

<a name="6.1.2"></a>
##6.1.2
🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@6.1.1...@spectrum-css/bundle-builder@6.1.2)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="6.1.1"></a>
##6.1.1
🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@6.1.0...@spectrum-css/bundle-builder@6.1.1)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="6.1.0"></a>
#6.1.0
🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@6.0.0...@spectrum-css/bundle-builder@6.1.0)

### ✨ Features

- **ui-icons:**graduate to 1.0 release ([#2366](https://github.com/adobe/spectrum-css/issues/2366))([afd369a](https://github.com/adobe/spectrum-css/commit/afd369a))

<a name="6.0.0"></a>
#6.0.0
🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@5.0.1...@spectrum-css/bundle-builder@6.0.0)

\*feat(icon,ui-icons)!: migrate the icon compiler to a distinct package (#2343)([d73d594](https://github.com/adobe/spectrum-css/commit/d73d594)), closes[#2343](https://github.com/adobe/spectrum-css/issues/2343)

    	###
    	🛑 BREAKING CHANGES

    		*
    		 - @spectrum-css/icon will no longer contain SVG assets; it will be a purely CSS package with all SVG assets migrated to the new @spectrum-css/ui-icons package.

- NEW: @spectrum-css/ui-icons package for all SVG icons in the UI set.

<a name="5.0.1"></a>
##5.0.1
🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@5.0.0...@spectrum-css/bundle-builder@5.0.1)

### 🐛 Bug fixes

\*docs watch unable to find package.json([a6d23b9](https://github.com/adobe/spectrum-css/commit/a6d23b9))

<a name="5.0.0"></a>
#5.0.0
🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@4.0.13...@spectrum-css/bundle-builder@5.0.0)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

\*feat(vars,expressvars)!: deprecate packages (#2244)([5eb391c](https://github.com/adobe/spectrum-css/commit/5eb391c)), closes[#2244](https://github.com/adobe/spectrum-css/issues/2244)

    	###
    	🛑 BREAKING CHANGES

    		*
    		as no additional changes have been or are planned to be made to

these legacy token packages, these assets no longer need to exist in the monorepo
structure for Spectrum CSS.

<a name="4.0.14"></a>
##4.0.14
🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@4.0.13...@spectrum-css/bundle-builder@4.0.14)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="4.0.13"></a>
##4.0.13
🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@4.0.12...@spectrum-css/bundle-builder@4.0.13)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="4.0.12"></a>
##4.0.12
🗓
2023-07-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@4.0.11...@spectrum-css/bundle-builder@4.0.12)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="4.0.11"></a>
##4.0.11
🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@4.0.10...@spectrum-css/bundle-builder@4.0.11)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="4.0.10"></a>
##4.0.10
🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@4.0.9...@spectrum-css/bundle-builder@4.0.10)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="4.0.9"></a>
##4.0.9
🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@4.0.8...@spectrum-css/bundle-builder@4.0.9)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="4.0.8"></a>

## 4.0.8

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@4.0.7...@spectrum-css/bundle-builder@4.0.8)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="4.0.7"></a>

## 4.0.7

🗓 2023-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@4.0.6...@spectrum-css/bundle-builder@4.0.7)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="4.0.6"></a>

## 4.0.6

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@4.0.5...@spectrum-css/bundle-builder@4.0.6)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="4.0.5"></a>

## 4.0.5

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@4.0.4...@spectrum-css/bundle-builder@4.0.5)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="4.0.4"></a>

## 4.0.4

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@4.0.2...@spectrum-css/bundle-builder@4.0.4)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="4.0.3"></a>

## 4.0.3

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@4.0.2...@spectrum-css/bundle-builder@4.0.3)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="4.0.2"></a>

## 4.0.2

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@4.0.1...@spectrum-css/bundle-builder@4.0.2)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="4.0.1"></a>

## 4.0.1

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@4.0.0...@spectrum-css/bundle-builder@4.0.1)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="4.0.0"></a>

# 4.0.0

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@3.4.5...@spectrum-css/bundle-builder@4.0.0)

- fix(tokens)!: rgb transform to split out rgb values from css attributes (#1590) ([b714db4](https://github.com/adobe/spectrum-css/commit/b714db4)), closes [#1590](https://github.com/adobe/spectrum-css/issues/1590)

### 🛑 BREAKING CHANGES

- transforms color tokens to split out their `rgb` values

Co-authored-by: castastrophe <castastrophe@users.noreply.github.com>

<a name="3.4.5"></a>

## 3.4.5

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@3.4.4...@spectrum-css/bundle-builder@3.4.5)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="3.4.4"></a>

## 3.4.4

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@3.4.3...@spectrum-css/bundle-builder@3.4.4)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="3.4.3"></a>

## 3.4.3

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@3.4.1...@spectrum-css/bundle-builder@3.4.3)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="3.4.2"></a>

## 3.4.2

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@3.4.1...@spectrum-css/bundle-builder@3.4.2)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="3.4.1"></a>

## 3.4.1

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@3.4.0...@spectrum-css/bundle-builder@3.4.1)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="3.4.0"></a>

# 3.4.0

🗓 2022-09-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@3.3.1...@spectrum-css/bundle-builder@3.4.0)

### ✨ Features

- adding port customiztion and re-launch for watch ([5c7aeef](https://github.com/adobe/spectrum-css/commit/5c7aeef))
- watch covers components/commons ([5d1b682](https://github.com/adobe/spectrum-css/commit/5d1b682))

### 🐛 Bug fixes

- dev hanging on yaml error and dev opening browser tabs ([fbfc622](https://github.com/adobe/spectrum-css/commit/fbfc622))
- made browser open message more perfect ([dad62eb](https://github.com/adobe/spectrum-css/commit/dad62eb))

<a name="3.3.1"></a>

## 3.3.1

🗓 2022-07-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@3.3.0...@spectrum-css/bundle-builder@3.3.1)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="3.3.0"></a>

# 3.3.0

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@3.2.0...@spectrum-css/bundle-builder@3.3.0)

### ✨ Features

- add core tokens ([d0a07a1](https://github.com/adobe/spectrum-css/commit/d0a07a1))
- add simple component builder ([535126b](https://github.com/adobe/spectrum-css/commit/535126b))

<a name="3.2.0"></a>

# 3.2.0

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@3.0.4...@spectrum-css/bundle-builder@3.2.0)

### ✨ Features

- break out ClearButton and LogicButton into their own packages ([3cc0a5f](https://github.com/adobe/spectrum-css/commit/3cc0a5f))

<a name="3.1.0"></a>

# 3.1.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@3.0.4...@spectrum-css/bundle-builder@3.1.0)

### ✨ Features

- break out ClearButton and LogicButton into their own packages ([a2092ab](https://github.com/adobe/spectrum-css/commit/a2092ab))

<a name="3.0.4"></a>

## 3.0.4

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@3.0.2-alpha.1...@spectrum-css/bundle-builder@3.0.4)

### 🐛 Bug fixes

- actually fail when you fail ([6a49a99](https://github.com/adobe/spectrum-css/commit/6a49a99))
- fetch package publish date from npm registry ([71fd187](https://github.com/adobe/spectrum-css/commit/71fd187))

<a name="3.0.3"></a>

## 3.0.3

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@3.0.2-alpha.1...@spectrum-css/bundle-builder@3.0.3)

### 🐛 Bug fixes

- fetch package publish date from npm registry ([71fd187](https://github.com/adobe/spectrum-css/commit/71fd187))

<a name="3.0.2"></a>

## 3.0.2

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@3.0.2-alpha.1...@spectrum-css/bundle-builder@3.0.2)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="3.0.2-alpha.1"></a>

## 3.0.2-alpha.1

🗓 2021-07-19 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@3.0.2-alpha.0...@spectrum-css/bundle-builder@3.0.2-alpha.1)

### 🐛 Bug fixes

- added expressvars build to release task ([bc447b1](https://github.com/adobe/spectrum-css/commit/bc447b1))

<a name="3.0.2-alpha.0"></a>

## 3.0.2-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@3.0.1...@spectrum-css/bundle-builder@3.0.2-alpha.0)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="3.0.1"></a>

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@3.0.0...@spectrum-css/bundle-builder@3.0.1)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="3.0.0"></a>

# 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@3.0.0-beta.0...@spectrum-css/bundle-builder@3.0.0)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="3.0.0-beta.0"></a>

# 3.0.0-beta.0

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@2.0.2-beta.0...@spectrum-css/bundle-builder@3.0.0-beta.0)

### ✨ Features

- disable legacy build in output ([f1ef983](https://github.com/adobe/spectrum-css/commit/f1ef983))
- error and warning reporting for variable use ([0460d39](https://github.com/adobe/spectrum-css/commit/0460d39))
- support FORCE=true environment variable to allow broken components ([f725a17](https://github.com/adobe/spectrum-css/commit/f725a17))

### 🐛 Bug fixes

- correct usage of ActionButton in site templates ([be0c83a](https://github.com/adobe/spectrum-css/commit/be0c83a))

### 🛑 BREAKING CHANGES

- this completely removes legacy build artifacts and IE 11 support

<a name="2.0.2-beta.0"></a>

## 2.0.2-beta.0

🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@2.0.1...@spectrum-css/bundle-builder@2.0.2-beta.0)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="2.0.1"></a>

## 2.0.1

🗓 2020-06-19 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@2.0.0...@spectrum-css/bundle-builder@2.0.1)

**Note:** Version bump only for package @spectrum-css/bundle-builder

<a name="2.0.0"></a>

# 2.0.0

🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@1.1.0...@spectrum-css/bundle-builder@2.0.0)

### ✨ Features

- remove DecoratedTextfield ([a1017a8](https://github.com/adobe/spectrum-css/commit/a1017a8))

### 🛑 BREAKING CHANGES

- DecoratedTextfield has been removed in favor of Textfield
  docs: don't include DecoratedTextfield anymore

<a name="1.1.0"></a>

# 1.1.0

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@1.0.1...@spectrum-css/bundle-builder@1.1.0)

### ✨ Features

- adding t-shirt sized typography, fixes [#210](https://github.com/adobe/spectrum-css/issues/210), closes [#416](https://github.com/adobe/spectrum-css/issues/416) ([#408](https://github.com/adobe/spectrum-css/issues/408)) ([3921bcb](https://github.com/adobe/spectrum-css/commit/3921bcb)), closes [#523](https://github.com/adobe/spectrum-css/issues/523)

<a name="1.0.1"></a>

## 1.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/bundle-builder@1.0.0...@spectrum-css/bundle-builder@1.0.1)

### 🐛 Bug fixes

- add missing variables to -unique files, closes [#336](https://github.com/adobe/spectrum-css/issues/336) ([3c9337f](https://github.com/adobe/spectrum-css/commit/3c9337f))

<a name="1.0.0"></a>

# 1.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
- use linked DNA data for CSS variable generation ([0233a53](https://github.com/adobe/spectrum-css/commit/0233a53))
