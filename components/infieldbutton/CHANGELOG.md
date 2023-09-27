# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="4.0.0"></a>
#4.0.0
🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.14...@spectrum-css/infieldbutton@4.0.0)

\*feat(stepper)!: stepper migrate tokens (#1960)([3a4c217](https://github.com/adobe/spectrum-css/commit/3a4c217)), closes[#1960](https://github.com/adobe/spectrum-css/issues/1960)

    	###
    	🛑 BREAKING CHANGES

    		*
    		migrates Stepper to use `@adobe/spectrum-tokens`

Additionally:

- style(infieldbutton!): begin updating css to tokens

- style(infieldbutton): updating css to tokens

- style(infieldbutton): add color styling and spacing

- style(infieldbutton): disabled colors and quiet colors

- feat(infieldbutton): add icon t shirt sizing

- docs(infieldbutton): update mods and remove unneeded file

- refactor(infieldbutton): fix stylelint errors and remove invalid

- chore(infieldbutton): removing dependency for tokens

- fix(infieldbutton): remove dependency from package json

- fix(infieldbutton): reset yarn file to main

- fix(infieldbutton): fix express border radius

- style(infieldbutton): removed disabled background color change on hover

- docs(infieldbutton): update aria labels and remove icon only example

- refactor(infieldbutton): update to utilize tokens that have express values

- style(stepper): get borders for buttons migrated and working

- style(stepper): add additional stepper button tokens

- style(stepper): fixing express button spacing

- refactor(stepper): clean up css

remove duplicate css and use mods

- docs(stepper): update mods

- chore(stepper): update storybook defaults and remove skin import

- style(stepper): finish invalid and high contrast styling

- fix(stepper): remove border width from padding

- chore(stepper): bump tokens release

- docs(stepper): adding sizing examples

- fix(stepper): fix quiet no-stepper variant from showing border

- fix(icon): updating icon to prevent size overrides

- chore(stepper): fix linter errors

use logical properties
use flex-flow shorthand property
fix max nesting depth

- feat(stepper): use infield button and new small chevron

- fix(stepper): fix express button placement

- chore(stepper): update docs examples to all use infield button

- fix(stepper): update express and quiet styling

- chore(stepper): update storybook stories

- chore(stepper): update story to use number type textfield

- chore(stepper): removing stepUp and stepDown classes

- chore(stepper): remove unused variables

- chore(stepper): manual version increase for beta release

- docs: specify type attribute on button elements

Button elements should specify a type of "button", otherwise they
default to a type of submit if the element happens to be within a form.

- docs(stepper): include value in storybook

Include value to replace the removed placeholder, so visuals with a
value can be compared in VRTs.

- fix(stepper): adjustments for width differences

Using component-height-200 instead of component-height-100 was making
the component too much wider than the original. Now uses the stepper
height token, which is using component-height-100 at medium, and
adjustments for t-shirt sizing. This makes the larger sizes like XL
scale more appropriately in their width as well. Previously the
characters entered in the field would turn to ellipsis after 3 chars at
XL size.

Note: Medium version of component -should- be about 6px wider due to
wider in-field buttons, defined in tokens. Original medium was 72px.

Adjusts usage of some of the width tokens so that usage of
--mod-stepper-width and --mod-stepper-border-width will have the desired
effect.

Also needed to add border width to calc, so that 4 chars appear before
ellipsis at medium size, instead of 3. Was a matter of 1 or 2 pixels.

<a name="3.0.14"></a>
##3.0.14
🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.13...@spectrum-css/infieldbutton@3.0.14)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.13"></a>
##3.0.13
🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.12...@spectrum-css/infieldbutton@3.0.13)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.12"></a>
##3.0.12
🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.11...@spectrum-css/infieldbutton@3.0.12)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.11"></a>
##3.0.11
🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.10...@spectrum-css/infieldbutton@3.0.11)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.10"></a>
##3.0.10
🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.9...@spectrum-css/infieldbutton@3.0.10)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.9"></a>
##3.0.9
🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.8...@spectrum-css/infieldbutton@3.0.9)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.8"></a>
##3.0.8
🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.7...@spectrum-css/infieldbutton@3.0.8)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="3.0.7"></a>
##3.0.7
🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.6...@spectrum-css/infieldbutton@3.0.7)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.6"></a>
##3.0.6
🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.4...@spectrum-css/infieldbutton@3.0.6)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.5"></a>
##3.0.5
🗓
2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.4...@spectrum-css/infieldbutton@3.0.5)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.4"></a>
##3.0.4
🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.3...@spectrum-css/infieldbutton@3.0.4)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.3"></a>
##3.0.3
🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.2...@spectrum-css/infieldbutton@3.0.3)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.2"></a>
##3.0.2
🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.1...@spectrum-css/infieldbutton@3.0.2)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.1"></a>
##3.0.1
🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@3.0.0...@spectrum-css/infieldbutton@3.0.1)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="3.0.0"></a>
#3.0.0
🗓
2023-07-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.27...@spectrum-css/infieldbutton@3.0.0)

\*feat(infieldbutton)!: migrate to spectrum tokens([5198fe0](https://github.com/adobe/spectrum-css/commit/5198fe0))

    	###
    	🛑 BREAKING CHANGES

    		*
    		updates infield button to use `@adobe/spectrum-tokens`

docs(infieldbutton): remove small stacked variant from docs

<a name="2.0.27"></a>
##2.0.27
🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.26...@spectrum-css/infieldbutton@2.0.27)

### 🐛 Bug fixes

\*icon sizing in Storybook story templates ([#2037](https://github.com/adobe/spectrum-css/issues/2037))([c90c8a3](https://github.com/adobe/spectrum-css/commit/c90c8a3))

<a name="2.0.26"></a>
##2.0.26
🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.25...@spectrum-css/infieldbutton@2.0.26)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.25"></a>
##2.0.25
🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.24...@spectrum-css/infieldbutton@2.0.25)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.24"></a>
##2.0.24
🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.23...@spectrum-css/infieldbutton@2.0.24)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="2.0.23"></a>
##2.0.23
🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.22...@spectrum-css/infieldbutton@2.0.23)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.22"></a>
##2.0.22
🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.21...@spectrum-css/infieldbutton@2.0.22)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.21"></a>

## 2.0.21

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.20...@spectrum-css/infieldbutton@2.0.21)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.20"></a>

## 2.0.20

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.19...@spectrum-css/infieldbutton@2.0.20)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.19"></a>

## 2.0.19

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.18...@spectrum-css/infieldbutton@2.0.19)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.18"></a>

## 2.0.18

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.17...@spectrum-css/infieldbutton@2.0.18)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.17"></a>

## 2.0.17

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.15...@spectrum-css/infieldbutton@2.0.17)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.16"></a>

## 2.0.16

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.15...@spectrum-css/infieldbutton@2.0.16)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.15"></a>

## 2.0.15

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.13...@spectrum-css/infieldbutton@2.0.15)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.14"></a>

## 2.0.14

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.13...@spectrum-css/infieldbutton@2.0.14)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.13"></a>

## 2.0.13

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.12...@spectrum-css/infieldbutton@2.0.13)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.12"></a>

## 2.0.12

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.11...@spectrum-css/infieldbutton@2.0.12)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.11"></a>

## 2.0.11

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.10...@spectrum-css/infieldbutton@2.0.11)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.10"></a>

## 2.0.10

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.9...@spectrum-css/infieldbutton@2.0.10)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.9"></a>

## 2.0.9

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.8...@spectrum-css/infieldbutton@2.0.9)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.8"></a>

## 2.0.8

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.7...@spectrum-css/infieldbutton@2.0.8)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.7"></a>

## 2.0.7

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.6...@spectrum-css/infieldbutton@2.0.7)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.6"></a>

## 2.0.6

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.5...@spectrum-css/infieldbutton@2.0.6)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.5"></a>

## 2.0.5

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.4...@spectrum-css/infieldbutton@2.0.5)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.4"></a>

## 2.0.4

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.2...@spectrum-css/infieldbutton@2.0.4)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.3"></a>

## 2.0.3

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.2...@spectrum-css/infieldbutton@2.0.3)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.2"></a>

## 2.0.2

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.1...@spectrum-css/infieldbutton@2.0.2)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.1"></a>

## 2.0.1

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@2.0.0...@spectrum-css/infieldbutton@2.0.1)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="2.0.0"></a>

# 2.0.0

🗓 2022-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@1.1.9...@spectrum-css/infieldbutton@2.0.0)

- refactor(infieldbutton,inputgroup,pickerbutton)!: drop loudness api ([c97d40e](https://github.com/adobe/spectrum-css/commit/c97d40e))

### 🛑 BREAKING CHANGES

- remove high loudness selectors from pickerbutton, apply quiet background color from inputgroup, change loudness api to quiet for infieldbutton

<a name="1.1.9"></a>

## 1.1.9

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@1.1.8...@spectrum-css/infieldbutton@1.1.9)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="1.1.8"></a>

## 1.1.8

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@1.1.7...@spectrum-css/infieldbutton@1.1.8)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="1.1.7"></a>

## 1.1.7

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@1.1.6...@spectrum-css/infieldbutton@1.1.7)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="1.1.6"></a>

## 1.1.6

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@1.1.5...@spectrum-css/infieldbutton@1.1.6)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="1.1.5"></a>

## 1.1.5

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@1.1.4...@spectrum-css/infieldbutton@1.1.5)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="1.1.4"></a>

## 1.1.4

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@1.1.3...@spectrum-css/infieldbutton@1.1.4)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="1.1.3"></a>

## 1.1.3

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@1.1.2...@spectrum-css/infieldbutton@1.1.3)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="1.1.2"></a>

## 1.1.2

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@1.1.1...@spectrum-css/infieldbutton@1.1.2)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="1.1.1"></a>

## 1.1.1

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/infieldbutton@1.1.0...@spectrum-css/infieldbutton@1.1.1)

**Note:** Version bump only for package @spectrum-css/infieldbutton

<a name="1.1.0"></a>

# 1.1.0

🗓 2022-02-16

### ✨ Features

- add InfieldButton component ([6424bf5](https://github.com/adobe/spectrum-css/commit/6424bf5))

### 🐛 Bug fixes

- correct icon positioning, fix RTL support ([de1e55e](https://github.com/adobe/spectrum-css/commit/de1e55e))
