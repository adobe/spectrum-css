# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="7.0.15"></a>
##7.0.15
🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.14...@spectrum-css/checkbox@7.0.15)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="7.0.14"></a>
##7.0.14
🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.13...@spectrum-css/checkbox@7.0.14)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="7.0.13"></a>
##7.0.13
🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.12...@spectrum-css/checkbox@7.0.13)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="7.0.12"></a>
##7.0.12
🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.11...@spectrum-css/checkbox@7.0.12)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="7.0.11"></a>
##7.0.11
🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.10...@spectrum-css/checkbox@7.0.11)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="7.0.10"></a>
##7.0.10
🗓
2023-09-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.9...@spectrum-css/checkbox@7.0.10)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="7.0.9"></a>
##7.0.9
🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.8...@spectrum-css/checkbox@7.0.9)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="7.0.8"></a>
##7.0.8
🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.7...@spectrum-css/checkbox@7.0.8)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="7.0.7"></a>
##7.0.7
🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.6...@spectrum-css/checkbox@7.0.7)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="7.0.6"></a>
##7.0.6
🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.5...@spectrum-css/checkbox@7.0.6)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="7.0.5"></a>
##7.0.5
🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.3...@spectrum-css/checkbox@7.0.5)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="7.0.4"></a>
##7.0.4
🗓
2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.3...@spectrum-css/checkbox@7.0.4)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="7.0.3"></a>
##7.0.3
🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.2...@spectrum-css/checkbox@7.0.3)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="7.0.2"></a>
##7.0.2
🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.1...@spectrum-css/checkbox@7.0.2)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="7.0.1"></a>
##7.0.1
🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@7.0.0...@spectrum-css/checkbox@7.0.1)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="7.0.0"></a>
#7.0.0
🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.1.10...@spectrum-css/checkbox@7.0.0)

\*feat(checkbox)!: add new color aliases and focus color fixes (#2052)([2a0d3c8](https://github.com/adobe/spectrum-css/commit/2a0d3c8)), closes[#2052](https://github.com/adobe/spectrum-css/issues/2052)

    	###
    	🛑 BREAKING CHANGES

    		*
    		prefers `:focus-visible` to `:focus-ring` & updates colors

Additionally:

- refactor(checkbox): add color alias tokens and fix some colors

* Adds new color alias tokens from CSS-472 and implements them. Tokens
  are moved out of spectrum and express specific css.
* Implemented previously commented out focus token.
* Fix some color related bugs in prod: non-emphasized showing blue
  border on focus and hover instead of grey when unchecked, emphasized
  showing blue border on focus and hover when unchecked, and emphasized
  indeterminate showing grey after click. Sorted some specificity issues
  primarily around some indeterminate default styles overriding when
  they shouldn't.
* Changed old :focus-ring spec to :focus-visible (a find replace for the
  generated .focus-ring class was already being done in the SWC version
  of the component, replacing it with :focus-visble). Checkboxes should
  now show their focus indicator when tabbed into in Storybook.

- fix(checkbox): high contrast mode updates and remove deprecated

Update to match previous WHCM behavior after styles update, and some
needed system color updates noticed while looking at that code.

- Focus color update to match with modified styles.
- 'Background' system color is deprecated; replace with Canvas.
- Default text of label should be CanvasText, it is not on top of a
  background with ButtonFace.
- Focus indicator color custom property was repeated in the same style
  rule, and was using FieldText when not on top of a matching `Field`
  background pair. Replaced with CanvasText as this should be appearing
  on top of default Canvas.

<a name="6.1.10"></a>
##6.1.10
🗓
2023-07-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.1.9...@spectrum-css/checkbox@6.1.10)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.1.9"></a>
##6.1.9
🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.1.8...@spectrum-css/checkbox@6.1.9)

### 🐛 Bug fixes

\*icon sizing in Storybook story templates ([#2037](https://github.com/adobe/spectrum-css/issues/2037))([c90c8a3](https://github.com/adobe/spectrum-css/commit/c90c8a3))

<a name="6.1.8"></a>
##6.1.8
🗓
2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.1.7...@spectrum-css/checkbox@6.1.8)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.1.7"></a>
##6.1.7
🗓
2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.1.6...@spectrum-css/checkbox@6.1.7)

### 🐛 Bug fixes

- **actionbutton:**update action button color tokens ([#1982](https://github.com/adobe/spectrum-css/issues/1982))([95e4353](https://github.com/adobe/spectrum-css/commit/95e4353))\*
  **checkbox:**use language code, not coding language name ([#2005](https://github.com/adobe/spectrum-css/issues/2005))([56c7cfc](https://github.com/adobe/spectrum-css/commit/56c7cfc))

<a name="6.1.6"></a>
##6.1.6
🗓
2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.1.5...@spectrum-css/checkbox@6.1.6)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.1.5"></a>
##6.1.5
🗓
2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.1.4...@spectrum-css/checkbox@6.1.5)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.1.4"></a>
##6.1.4
🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.1.3...@spectrum-css/checkbox@6.1.4)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.1.3"></a>
##6.1.3
🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.1.2...@spectrum-css/checkbox@6.1.3)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.1.2"></a>
##6.1.2
🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.1.1...@spectrum-css/checkbox@6.1.2)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="6.1.1"></a>
##6.1.1
🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.1.0...@spectrum-css/checkbox@6.1.1)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.1.0"></a>
#6.1.0
🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.34...@spectrum-css/checkbox@6.1.0)

### ✨ Features

\*add stylelint ([#1787](https://github.com/adobe/spectrum-css/issues/1787))([a450904](https://github.com/adobe/spectrum-css/commit/a450904))

<a name="6.0.34"></a>

## 6.0.34

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.33...@spectrum-css/checkbox@6.0.34)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.33"></a>

## 6.0.33

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.32...@spectrum-css/checkbox@6.0.33)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.32"></a>

## 6.0.32

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.31...@spectrum-css/checkbox@6.0.32)

### 🐛 Bug fixes

- **checkbox:** rename misspelled mod and add missing mods ([#1882](https://github.com/adobe/spectrum-css/issues/1882)) ([624527a](https://github.com/adobe/spectrum-css/commit/624527a))

<a name="6.0.31"></a>

## 6.0.31

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.30...@spectrum-css/checkbox@6.0.31)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.30"></a>

## 6.0.30

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.29...@spectrum-css/checkbox@6.0.30)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.29"></a>

## 6.0.29

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.28...@spectrum-css/checkbox@6.0.29)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.28"></a>

## 6.0.28

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.27...@spectrum-css/checkbox@6.0.28)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.27"></a>

## 6.0.27

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.26...@spectrum-css/checkbox@6.0.27)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.26"></a>

## 6.0.26

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.25...@spectrum-css/checkbox@6.0.26)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.25"></a>

## 6.0.25

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.24...@spectrum-css/checkbox@6.0.25)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.24"></a>

## 6.0.24

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.23...@spectrum-css/checkbox@6.0.24)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.23"></a>

## 6.0.23

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.22...@spectrum-css/checkbox@6.0.23)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.22"></a>

## 6.0.22

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.20...@spectrum-css/checkbox@6.0.22)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.21"></a>

## 6.0.21

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.20...@spectrum-css/checkbox@6.0.21)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.20"></a>

## 6.0.20

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.19...@spectrum-css/checkbox@6.0.20)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.19"></a>

## 6.0.19

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.18...@spectrum-css/checkbox@6.0.19)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.18"></a>

## 6.0.18

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.17...@spectrum-css/checkbox@6.0.18)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.17"></a>

## 6.0.17

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.16...@spectrum-css/checkbox@6.0.17)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.16"></a>

## 6.0.16

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.14...@spectrum-css/checkbox@6.0.16)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.15"></a>

## 6.0.15

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.14...@spectrum-css/checkbox@6.0.15)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.14"></a>

## 6.0.14

🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.12...@spectrum-css/checkbox@6.0.14)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.13"></a>

## 6.0.13

🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.12...@spectrum-css/checkbox@6.0.13)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.12"></a>

## 6.0.12

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.11...@spectrum-css/checkbox@6.0.12)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.11"></a>

## 6.0.11

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.10...@spectrum-css/checkbox@6.0.11)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.10"></a>

## 6.0.10

🗓 2023-03-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.9...@spectrum-css/checkbox@6.0.10)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.9"></a>

## 6.0.9

🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.8...@spectrum-css/checkbox@6.0.9)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.8"></a>

## 6.0.8

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.7...@spectrum-css/checkbox@6.0.8)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.7"></a>

## 6.0.7

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.6...@spectrum-css/checkbox@6.0.7)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.6"></a>

## 6.0.6

🗓 2023-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.5...@spectrum-css/checkbox@6.0.6)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.5"></a>

## 6.0.5

🗓 2023-03-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.4...@spectrum-css/checkbox@6.0.5)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.4"></a>

## 6.0.4

🗓 2023-02-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.3...@spectrum-css/checkbox@6.0.4)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.3"></a>

## 6.0.3

🗓 2023-02-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.2...@spectrum-css/checkbox@6.0.3)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.2"></a>

## 6.0.2

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.1...@spectrum-css/checkbox@6.0.2)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.1"></a>

## 6.0.1

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@6.0.0...@spectrum-css/checkbox@6.0.1)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="6.0.0"></a>

# 6.0.0

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@5.0.11...@spectrum-css/checkbox@6.0.0)

- chore(tokens)!: use latest dependency & fix build error (#1591) ([f2532e7](https://github.com/adobe/spectrum-css/commit/f2532e7)), closes [#1591](https://github.com/adobe/spectrum-css/issues/1591)

### 🛑 BREAKING CHANGES

- uses latest `@adobe/spectrum-tokens` dependency which includes token renames

<a name="5.0.11"></a>

## 5.0.11

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@5.0.10...@spectrum-css/checkbox@5.0.11)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="5.0.10"></a>

## 5.0.10

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@5.0.9...@spectrum-css/checkbox@5.0.10)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="5.0.9"></a>

## 5.0.9

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@5.0.8...@spectrum-css/checkbox@5.0.9)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="5.0.8"></a>

## 5.0.8

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@5.0.6...@spectrum-css/checkbox@5.0.8)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="5.0.7"></a>

## 5.0.7

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@5.0.6...@spectrum-css/checkbox@5.0.7)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="5.0.6"></a>

## 5.0.6

🗓 2023-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@5.0.5...@spectrum-css/checkbox@5.0.6)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="5.0.5"></a>

## 5.0.5

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@5.0.4...@spectrum-css/checkbox@5.0.5)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="5.0.4"></a>

## 5.0.4

🗓 2022-12-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@5.0.3...@spectrum-css/checkbox@5.0.4)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="5.0.3"></a>

## 5.0.3

🗓 2022-12-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@5.0.2...@spectrum-css/checkbox@5.0.3)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="5.0.2"></a>

## 5.0.2

🗓 2022-11-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@5.0.1...@spectrum-css/checkbox@5.0.2)

### 🐛 Bug fixes

- resolve missing tokens errors due to name changes ([#1555](https://github.com/adobe/spectrum-css/issues/1555)) ([ddae027](https://github.com/adobe/spectrum-css/commit/ddae027))

<a name="5.0.1"></a>

## 5.0.1

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@5.0.0...@spectrum-css/checkbox@5.0.1)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="5.0.0"></a>

# 5.0.0

🗓 2022-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@4.0.2...@spectrum-css/checkbox@5.0.0)

- refactor(checkbox)!: remap core token aliases & rename aliases ([0ccacfe](https://github.com/adobe/spectrum-css/commit/0ccacfe))

### 🛑 BREAKING CHANGES

- remaps existing aliases to new/renamed core token values

- `--spectrum-focus-ring-thickness` renamed to `--spectrum-focus-indicator-thickness`
- `--spectrum-focus-ring-gap` renamed to `--spectrum-focus-indicator-gap`
- `--spectrum-focus-ring-color` renamed to `--spectrum-focus-indicator-color`

<a name="4.0.2"></a>

## 4.0.2

🗓 2022-10-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@4.0.1...@spectrum-css/checkbox@4.0.2)

### 🐛 Bug fixes

- **checkbox:** whcm focus states ([#1527](https://github.com/adobe/spectrum-css/issues/1527)) ([ddca193](https://github.com/adobe/spectrum-css/commit/ddca193))

<a name="4.0.1"></a>

## 4.0.1

🗓 2022-10-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@4.0.0...@spectrum-css/checkbox@4.0.1)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="4.0.0"></a>

# 4.0.0

🗓 2022-10-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.1.3...@spectrum-css/checkbox@4.0.0)

- feat(checkbox)!: migrate checkbox component to core tokens (CSS-99) (#1465) ([20b5917](https://github.com/adobe/spectrum-css/commit/20b5917)), closes [#1465](https://github.com/adobe/spectrum-css/issues/1465)

### 🛑 BREAKING CHANGES

- migrates Checkbox to core tokens

Co-authored-by: Patrick Fulton <pfulton@adobe.com>
Co-authored-by: Garth Braithwaite <garthdb@gmail.com>

<a name="3.1.3"></a>

## 3.1.3

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.1.2...@spectrum-css/checkbox@3.1.3)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.1.2"></a>

## 3.1.2

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.1.1...@spectrum-css/checkbox@3.1.2)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.1.1"></a>

## 3.1.1

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.1.0...@spectrum-css/checkbox@3.1.1)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.1.0"></a>

# 3.1.0

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.19...@spectrum-css/checkbox@3.1.0)

### ✨ Features

- **checkbox:** add styles for `readonly` state ([e37b69a](https://github.com/adobe/spectrum-css/commit/e37b69a))

<a name="3.0.19"></a>

## 3.0.19

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.18...@spectrum-css/checkbox@3.0.19)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.0.18"></a>

## 3.0.18

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.17...@spectrum-css/checkbox@3.0.18)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.0.17"></a>

## 3.0.17

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.16...@spectrum-css/checkbox@3.0.17)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.0.16"></a>

## 3.0.16

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.15...@spectrum-css/checkbox@3.0.16)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.0.15"></a>

## 3.0.15

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.14...@spectrum-css/checkbox@3.0.15)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.0.14"></a>

## 3.0.14

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.13...@spectrum-css/checkbox@3.0.14)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.0.13"></a>

## 3.0.13

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.12...@spectrum-css/checkbox@3.0.13)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.0.12"></a>

## 3.0.12

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.10...@spectrum-css/checkbox@3.0.12)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

<a name="3.0.11"></a>

## 3.0.11

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.11-beta.0...@spectrum-css/checkbox@3.0.11)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.0.11-beta.0"></a>

## 3.0.11-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.10...@spectrum-css/checkbox@3.0.11-beta.0)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.0.10"></a>

## 3.0.10

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.9...@spectrum-css/checkbox@3.0.10)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.0.9"></a>

## 3.0.9

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.8...@spectrum-css/checkbox@3.0.9)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.0.8"></a>

## 3.0.8

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.7...@spectrum-css/checkbox@3.0.8)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.0.7"></a>

## 3.0.7

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.6...@spectrum-css/checkbox@3.0.7)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.0.6"></a>

## 3.0.6

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.4...@spectrum-css/checkbox@3.0.6)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.0.5"></a>

## 3.0.5

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.4...@spectrum-css/checkbox@3.0.5)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.0.3"></a>

## 3.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.3-alpha.3...@spectrum-css/checkbox@3.0.3)

### 🐛 Bug fixes

- adjust the focus outline ([4692cc1](https://github.com/adobe/spectrum-css/commit/4692cc1))
- high contrast mode for checkbox ([b2ed46c](https://github.com/adobe/spectrum-css/commit/b2ed46c))
- more changes to support indeterminate correctly ([ad32c52](https://github.com/adobe/spectrum-css/commit/ad32c52))
- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="3.0.3-alpha.3"></a>

## 3.0.3-alpha.3

🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.3-alpha.2...@spectrum-css/checkbox@3.0.3-alpha.3)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.0.3-alpha.2"></a>

## 3.0.3-alpha.2

🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.3-alpha.1...@spectrum-css/checkbox@3.0.3-alpha.2)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.0.3-alpha.1"></a>

## 3.0.3-alpha.1

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.3-alpha.0...@spectrum-css/checkbox@3.0.3-alpha.1)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.0.3-alpha.0"></a>

## 3.0.3-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.2...@spectrum-css/checkbox@3.0.3-alpha.0)

### 🐛 Bug fixes

- updated focus ring tokens to assume keyboard focus state ([2db4755](https://github.com/adobe/spectrum-css/commit/2db4755))

<a name="3.0.2"></a>

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.1...@spectrum-css/checkbox@3.0.2)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.0.1"></a>

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.0...@spectrum-css/checkbox@3.0.1)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.0.0"></a>

# 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.0-beta.6...@spectrum-css/checkbox@3.0.0)

### ✨ Features

- added t-shirt sizes to checkbox ([f4c59bd](https://github.com/adobe/spectrum-css/commit/f4c59bd)), closes [#951](https://github.com/adobe/spectrum-css/issues/951)

### 🛑 BREAKING CHANGES

- a t-shirt size class is now required for checkbox.

<a name="3.0.0-beta.6"></a>

# 3.0.0-beta.6

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.0-beta.5...@spectrum-css/checkbox@3.0.0-beta.6)

### ✨ Features

- implement Checkbox/Radio emphasized variant, closes [#349](https://github.com/adobe/spectrum-css/issues/349) ([#1057](https://github.com/adobe/spectrum-css/issues/1057)) ([3ac8b31](https://github.com/adobe/spectrum-css/commit/3ac8b31))

### 🐛 Bug fixes

- checkbox top margin ([47944bb](https://github.com/adobe/spectrum-css/commit/47944bb))
- correct Checkbox line-height, it's now component height ([c3f0a16](https://github.com/adobe/spectrum-css/commit/c3f0a16))
- line-height for Checkbox ([01901a3](https://github.com/adobe/spectrum-css/commit/01901a3))
- make Checkbox build again ([7873da0](https://github.com/adobe/spectrum-css/commit/7873da0))
- update main, resolved conflicts ([d7880a2](https://github.com/adobe/spectrum-css/commit/d7880a2))

### 🛑 BREAKING CHANGES

- colors change in a way that may be unexpected

docs: add docs explaining quiet/emphasized Checkbox/Radio

<a name="3.0.0-beta.5"></a>

# 3.0.0-beta.5

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.0-beta.4...@spectrum-css/checkbox@3.0.0-beta.5)

- fix!: updated type sizes to use consistent syntax, related to #972 (#1031) ([1a604c4](https://github.com/adobe/spectrum-css/commit/1a604c4)), closes [#972](https://github.com/adobe/spectrum-css/issues/972) [#1031](https://github.com/adobe/spectrum-css/issues/1031)

### 🛑 BREAKING CHANGES

- all typography sizing classes now have --size* instead of --*, see migration guides

<a name="3.0.0-beta.4"></a>

# 3.0.0-beta.4

🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.0-beta.3...@spectrum-css/checkbox@3.0.0-beta.4)

### 🐛 Bug fixes

- Checkbox and Radio margins, docs, and typography ([#897](https://github.com/adobe/spectrum-css/issues/897)) ([a089ce0](https://github.com/adobe/spectrum-css/commit/a089ce0)), closes [#243](https://github.com/adobe/spectrum-css/issues/243) [#124](https://github.com/adobe/spectrum-css/issues/124) [#707](https://github.com/adobe/spectrum-css/issues/707) [#243](https://github.com/adobe/spectrum-css/issues/243) [#251](https://github.com/adobe/spectrum-css/issues/251)
- high contrast mode for checkboxes. ([#791](https://github.com/adobe/spectrum-css/issues/791)) ([74000c8](https://github.com/adobe/spectrum-css/commit/74000c8)), closes [#786](https://github.com/adobe/spectrum-css/issues/786)
- resolving conflicts with main ([8cafffa](https://github.com/adobe/spectrum-css/commit/8cafffa))
- wip fix more components ([b74dbb8](https://github.com/adobe/spectrum-css/commit/b74dbb8))

- Spectrum tokens 17 Checkbox (#908) ([c8db570](https://github.com/adobe/spectrum-css/commit/c8db570)), closes [#908](https://github.com/adobe/spectrum-css/issues/908)

### 🛑 BREAKING CHANGES

- Checkbox and Radio no longer have margin on their own, must use FieldGroup

- feat: add .spectrum-Example to wrap sub-examples
- The spectrum-FieldGroup--horizontal is now required for horizontal field groups

- feat: remove hit area from Radio/Checkbox
- colors change in a way that may be unexpected

docs: add docs explaining quiet/emphasized Checkbox

- docs: make Quiet/Emphasized information a Migration Guide

<a name="3.0.0-beta.3"></a>

# 3.0.0-beta.3

🗓 2020-06-19 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.0-beta.2...@spectrum-css/checkbox@3.0.0-beta.3)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.0.0-beta.2"></a>

# 3.0.0-beta.2

🗓 2020-05-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.0-beta.1...@spectrum-css/checkbox@3.0.0-beta.2)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.0.0-beta.1"></a>

# 3.0.0-beta.1

🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@3.0.0-beta.0...@spectrum-css/checkbox@3.0.0-beta.1)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="3.0.0-beta.0"></a>

# 3.0.0-beta.0

🗓 2020-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@2.1.0...@spectrum-css/checkbox@3.0.0-beta.0)

### ✨ Features

- make Checkbox support RTL ([df527ae](https://github.com/adobe/spectrum-css/commit/df527ae))

<a name="2.1.0"></a>

# 2.1.0

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@2.0.5...@spectrum-css/checkbox@2.1.0)

### ✨ Features

- halo focus ring, closes [#112](https://github.com/adobe/spectrum-css/issues/112), closes [#573](https://github.com/adobe/spectrum-css/issues/573) ([#603](https://github.com/adobe/spectrum-css/issues/603)) ([d87e9a5](https://github.com/adobe/spectrum-css/commit/d87e9a5)), closes [#619](https://github.com/adobe/spectrum-css/issues/619)

<a name="2.0.5"></a>

## 2.0.5

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@2.0.4...@spectrum-css/checkbox@2.0.5)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="2.0.4"></a>

## 2.0.4

🗓 2020-01-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@2.0.3...@spectrum-css/checkbox@2.0.4)

### 🐛 Bug fixes

- align labels for Radio/Checkbox/Switch/Status light ([#458](https://github.com/adobe/spectrum-css/issues/458)) ([616a1b4](https://github.com/adobe/spectrum-css/commit/616a1b4)), closes [#406](https://github.com/adobe/spectrum-css/issues/406) [#402](https://github.com/adobe/spectrum-css/issues/402) [#403](https://github.com/adobe/spectrum-css/issues/403) [#426](https://github.com/adobe/spectrum-css/issues/426)

<a name="2.0.3"></a>

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@2.0.2...@spectrum-css/checkbox@2.0.3)

### 🐛 Bug fixes

- text alignment in checkbox, radio, and switch ([#412](https://github.com/adobe/spectrum-css/issues/412)) ([e244b4f](https://github.com/adobe/spectrum-css/commit/e244b4f)), closes [#406](https://github.com/adobe/spectrum-css/issues/406) [#402](https://github.com/adobe/spectrum-css/issues/402) [#403](https://github.com/adobe/spectrum-css/issues/403)

<a name="2.0.2"></a>

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@2.0.1...@spectrum-css/checkbox@2.0.2)

**Note:** Version bump only for package @spectrum-css/checkbox

<a name="2.0.1"></a>

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/checkbox@2.0.0...@spectrum-css/checkbox@2.0.1)

### 🐛 Bug fixes

- revert Checkbox/Radio/Switch color change, fixes [#355](https://github.com/adobe/spectrum-css/issues/355) ([#356](https://github.com/adobe/spectrum-css/issues/356)) ([51477e9](https://github.com/adobe/spectrum-css/commit/51477e9))

<a name="2.0.0"></a>

# 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
