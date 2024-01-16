# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="9.1.0"></a>
#9.1.0
🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@9.0.8...@spectrum-css/treeview@9.1.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="9.0.8"></a>
##9.0.8
🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@9.0.7...@spectrum-css/treeview@9.0.8)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="9.0.7"></a>
##9.0.7
🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@9.0.6...@spectrum-css/treeview@9.0.7)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="9.0.6"></a>
##9.0.6
🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@9.0.4...@spectrum-css/treeview@9.0.6)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="9.0.5"></a>
##9.0.5
🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@9.0.4...@spectrum-css/treeview@9.0.5)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="9.0.4"></a>
##9.0.4
🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@9.0.3...@spectrum-css/treeview@9.0.4)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="9.0.3"></a>
##9.0.3
🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@9.0.2...@spectrum-css/treeview@9.0.3)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="9.0.2"></a>
##9.0.2
🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@9.0.1...@spectrum-css/treeview@9.0.2)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="9.0.1"></a>
##9.0.1
🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@9.0.0...@spectrum-css/treeview@9.0.1)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="9.0.0"></a>
#9.0.0
🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@8.0.1...@spectrum-css/treeview@9.0.0)

\*refactor(treeview)!: migrate to spectrum tokens([525485e](https://github.com/adobe/spectrum-css/commit/525485e)), closes[#1428](https://github.com/adobe/spectrum-css/issues/1428)[#1432](https://github.com/adobe/spectrum-css/issues/1432)

    	###
    	🛑 BREAKING CHANGES

    		*
    		migrate to use `@adobe/spectrum-tokens`

Migrate to use of new Spectrum tokens package, with token values to match
with the previous values through closest available tokens and hardcoded
values.

- Integrate skin.css into index.css
- Replace remapvars with built vars
- Various documentation updates
- Simplify quiet variant styles to be custom property value overrides

Including the following:

fix(treeview): fix minor visual differences and misnamed variable

Note:
The previously named variables for the item padding were all named
incorrectly (values within padding shorthand are top, right, bottom,
left, but variables used were named left, top, right, bottom, so
everything was shifted. The padding right token was the only one with a
value greater than zero and it was actually being assigned to the
padding bottom).

fix(treeview): fix icons disappearing on hover

Icon was appearing behind the ::before pseudo that is currently used
for the hover background color.

<a name="8.0.1"></a>
##8.0.1
🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@8.0.0...@spectrum-css/treeview@8.0.1)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="8.0.0"></a>
#8.0.0
🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@7.0.9...@spectrum-css/treeview@8.0.0)

\*refactor(treeview)!: replace focus-ring with focus-visible([5db0310](https://github.com/adobe/spectrum-css/commit/5db0310))

    	###
    	🛑 BREAKING CHANGES

    		*
    		use focus-visible pseudo class in place of focus-ring

<a name="7.0.9"></a>
##7.0.9
🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@7.0.8...@spectrum-css/treeview@7.0.9)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="7.0.8"></a>
##7.0.8
🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@7.0.7...@spectrum-css/treeview@7.0.8)

### 🐛 Bug fixes

\*icon sizing in Storybook story templates ([#2037](https://github.com/adobe/spectrum-css/issues/2037))([c90c8a3](https://github.com/adobe/spectrum-css/commit/c90c8a3))

<a name="7.0.7"></a>
##7.0.7
🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@7.0.6...@spectrum-css/treeview@7.0.7)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="7.0.6"></a>
##7.0.6
🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@7.0.5...@spectrum-css/treeview@7.0.6)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="7.0.5"></a>
##7.0.5
🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@7.0.4...@spectrum-css/treeview@7.0.5)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="7.0.4"></a>
##7.0.4
🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@7.0.3...@spectrum-css/treeview@7.0.4)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="7.0.3"></a>
##7.0.3
🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@7.0.2...@spectrum-css/treeview@7.0.3)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="7.0.2"></a>

## 7.0.2

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@7.0.1...@spectrum-css/treeview@7.0.2)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="7.0.1"></a>

## 7.0.1

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@7.0.0...@spectrum-css/treeview@7.0.1)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="7.0.0"></a>

# 7.0.0

🗓 2023-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.39...@spectrum-css/treeview@7.0.0)

- feat(thumbnail)!: migrate to spectrum-tokens (#1568) ([9d4ec09](https://github.com/adobe/spectrum-css/commit/9d4ec09)), closes [#1568](https://github.com/adobe/spectrum-css/issues/1568)

### 🛑 BREAKING CHANGES

- migrates the Thumbnail component to the `@adobe/spectrum-tokens` package.

<a name="6.0.39"></a>

## 6.0.39

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.38...@spectrum-css/treeview@6.0.39)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.38"></a>

## 6.0.38

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.37...@spectrum-css/treeview@6.0.38)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.37"></a>

## 6.0.37

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.35...@spectrum-css/treeview@6.0.37)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.36"></a>

## 6.0.36

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.35...@spectrum-css/treeview@6.0.36)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.35"></a>

## 6.0.35

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.33...@spectrum-css/treeview@6.0.35)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.34"></a>

## 6.0.34

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.33...@spectrum-css/treeview@6.0.34)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.33"></a>

## 6.0.33

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.32...@spectrum-css/treeview@6.0.33)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.32"></a>

## 6.0.32

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.31...@spectrum-css/treeview@6.0.32)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.31"></a>

## 6.0.31

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.30...@spectrum-css/treeview@6.0.31)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.30"></a>

## 6.0.30

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.29...@spectrum-css/treeview@6.0.30)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.29"></a>

## 6.0.29

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.28...@spectrum-css/treeview@6.0.29)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.28"></a>

## 6.0.28

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.27...@spectrum-css/treeview@6.0.28)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.27"></a>

## 6.0.27

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.26...@spectrum-css/treeview@6.0.27)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.26"></a>

## 6.0.26

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.25...@spectrum-css/treeview@6.0.26)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.25"></a>

## 6.0.25

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.24...@spectrum-css/treeview@6.0.25)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.24"></a>

## 6.0.24

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.22...@spectrum-css/treeview@6.0.24)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.23"></a>

## 6.0.23

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.22...@spectrum-css/treeview@6.0.23)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.22"></a>

## 6.0.22

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.21...@spectrum-css/treeview@6.0.22)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.21"></a>

## 6.0.21

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.20...@spectrum-css/treeview@6.0.21)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.20"></a>

## 6.0.20

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.19...@spectrum-css/treeview@6.0.20)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.19"></a>

## 6.0.19

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.18...@spectrum-css/treeview@6.0.19)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.18"></a>

## 6.0.18

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.17...@spectrum-css/treeview@6.0.18)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.17"></a>

## 6.0.17

🗓 2022-04-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.16...@spectrum-css/treeview@6.0.17)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.16"></a>

## 6.0.16

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.15...@spectrum-css/treeview@6.0.16)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.15"></a>

## 6.0.15

🗓 2022-03-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.14...@spectrum-css/treeview@6.0.15)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.14"></a>

## 6.0.14

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.13...@spectrum-css/treeview@6.0.14)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.13"></a>

## 6.0.13

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.12...@spectrum-css/treeview@6.0.13)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.12"></a>

## 6.0.12

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.11...@spectrum-css/treeview@6.0.12)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.11"></a>

## 6.0.11

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.10...@spectrum-css/treeview@6.0.11)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.10"></a>

## 6.0.10

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.9...@spectrum-css/treeview@6.0.10)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.9"></a>

## 6.0.9

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.8...@spectrum-css/treeview@6.0.9)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.8"></a>

## 6.0.8

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.7...@spectrum-css/treeview@6.0.8)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.7"></a>

## 6.0.7

🗓 2022-01-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.6...@spectrum-css/treeview@6.0.7)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.6"></a>

## 6.0.6

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.4...@spectrum-css/treeview@6.0.6)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

<a name="6.0.5"></a>

## 6.0.5

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.5-beta.0...@spectrum-css/treeview@6.0.5)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.5-beta.0"></a>

## 6.0.5-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.4...@spectrum-css/treeview@6.0.5-beta.0)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.4"></a>

## 6.0.4

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.3...@spectrum-css/treeview@6.0.4)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.3"></a>

## 6.0.3

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.2...@spectrum-css/treeview@6.0.3)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.2"></a>

## 6.0.2

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.1...@spectrum-css/treeview@6.0.2)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.1"></a>

## 6.0.1

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@6.0.0...@spectrum-css/treeview@6.0.1)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="6.0.0"></a>

# 6.0.0

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@3.0.3-alpha.3...@spectrum-css/treeview@6.0.0)

### 🐛 Bug fixes

- adjusted thumbnail version of treeview; closes [#1276](https://github.com/adobe/spectrum-css/issues/1276) ([e949df5](https://github.com/adobe/spectrum-css/commit/e949df5))
- adjusted tokens for treeview from DSS ([6d9168a](https://github.com/adobe/spectrum-css/commit/6d9168a))
- extra closing parenthesis in treeview component ([99772b9](https://github.com/adobe/spectrum-css/commit/99772b9))
- removed a couple local variables in treeview ([f946e92](https://github.com/adobe/spectrum-css/commit/f946e92))
- removing local vars in treeview ([1d393f6](https://github.com/adobe/spectrum-css/commit/1d393f6))
- update vars & add compact, spacious examples ([c50aaf2](https://github.com/adobe/spectrum-css/commit/c50aaf2))
- update vars & add compact, spacious examples ([dd8caa8](https://github.com/adobe/spectrum-css/commit/dd8caa8))
- updating latest spectrum-tokens ([d35b957](https://github.com/adobe/spectrum-css/commit/d35b957))
- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))
- use updated tokens & resolve treeview build errors ([67f4112](https://github.com/adobe/spectrum-css/commit/67f4112))
- use updated tokens & resolve treeview build errors ([c892536](https://github.com/adobe/spectrum-css/commit/c892536))
- wip, fixed treeview build ([2fc4e66](https://github.com/adobe/spectrum-css/commit/2fc4e66))

### 🛑 BREAKING CHANGES

- t-shirt sizes added.

<a name="5.0.0"></a>

# 5.0.0

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@3.0.3-alpha.3...@spectrum-css/treeview@5.0.0)

### 🐛 Bug fixes

- adjusted thumbnail version of treeview; closes [#1276](https://github.com/adobe/spectrum-css/issues/1276) ([e949df5](https://github.com/adobe/spectrum-css/commit/e949df5))
- adjusted tokens for treeview from DSS ([6d9168a](https://github.com/adobe/spectrum-css/commit/6d9168a))
- extra closing parenthesis in treeview component ([99772b9](https://github.com/adobe/spectrum-css/commit/99772b9))
- removed a couple local variables in treeview ([f946e92](https://github.com/adobe/spectrum-css/commit/f946e92))
- removing local vars in treeview ([1d393f6](https://github.com/adobe/spectrum-css/commit/1d393f6))
- update vars & add compact, spacious examples ([c50aaf2](https://github.com/adobe/spectrum-css/commit/c50aaf2))
- update vars & add compact, spacious examples ([dd8caa8](https://github.com/adobe/spectrum-css/commit/dd8caa8))
- updating latest spectrum-tokens ([d35b957](https://github.com/adobe/spectrum-css/commit/d35b957))
- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))
- use updated tokens & resolve treeview build errors ([67f4112](https://github.com/adobe/spectrum-css/commit/67f4112))
- use updated tokens & resolve treeview build errors ([c892536](https://github.com/adobe/spectrum-css/commit/c892536))
- wip, fixed treeview build ([2fc4e66](https://github.com/adobe/spectrum-css/commit/2fc4e66))

### 🛑 BREAKING CHANGES

- t-shirt sizes added.

<a name="4.0.0"></a>

# 4.0.0

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@3.0.3-alpha.3...@spectrum-css/treeview@4.0.0)

### 🐛 Bug fixes

- adjusted tokens for treeview from DSS ([6d9168a](https://github.com/adobe/spectrum-css/commit/6d9168a))
- removed a couple local variables in treeview ([f946e92](https://github.com/adobe/spectrum-css/commit/f946e92))
- removing local vars in treeview ([1d393f6](https://github.com/adobe/spectrum-css/commit/1d393f6))
- update vars & add compact, spacious examples ([c50aaf2](https://github.com/adobe/spectrum-css/commit/c50aaf2))
- update vars & add compact, spacious examples ([dd8caa8](https://github.com/adobe/spectrum-css/commit/dd8caa8))
- updating latest spectrum-tokens ([d35b957](https://github.com/adobe/spectrum-css/commit/d35b957))
- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))
- use updated tokens & resolve treeview build errors ([67f4112](https://github.com/adobe/spectrum-css/commit/67f4112))
- use updated tokens & resolve treeview build errors ([c892536](https://github.com/adobe/spectrum-css/commit/c892536))
- wip, fixed treeview build ([2fc4e66](https://github.com/adobe/spectrum-css/commit/2fc4e66))

### 🛑 BREAKING CHANGES

- t-shirt sizes added.

<a name="3.0.3-alpha.3"></a>

## 3.0.3-alpha.3

🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@3.0.3-alpha.2...@spectrum-css/treeview@3.0.3-alpha.3)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="3.0.3-alpha.2"></a>

## 3.0.3-alpha.2

🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@3.0.3-alpha.1...@spectrum-css/treeview@3.0.3-alpha.2)

### 🐛 Bug fixes

- **tree-view:** reduce rule specificity for easier customization ([b998abd](https://github.com/adobe/spectrum-css/commit/b998abd))
- use renamed aliases ([91f6c04](https://github.com/adobe/spectrum-css/commit/91f6c04))

<a name="3.0.3-alpha.1"></a>

## 3.0.3-alpha.1

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@3.0.3-alpha.0...@spectrum-css/treeview@3.0.3-alpha.1)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="3.0.3-alpha.0"></a>

## 3.0.3-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@3.0.2...@spectrum-css/treeview@3.0.3-alpha.0)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="3.0.2"></a>

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@3.0.1...@spectrum-css/treeview@3.0.2)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="3.0.1"></a>

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@3.0.0...@spectrum-css/treeview@3.0.1)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="3.0.0"></a>

# 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@3.0.0-beta.6...@spectrum-css/treeview@3.0.0)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="3.0.0-beta.6"></a>

# 3.0.0-beta.6

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@3.0.0-beta.5...@spectrum-css/treeview@3.0.0-beta.6)

### 🐛 Bug fixes

- update main, resolved conflicts ([d7880a2](https://github.com/adobe/spectrum-css/commit/d7880a2))

<a name="3.0.0-beta.5"></a>

# 3.0.0-beta.5

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@3.0.0-beta.4...@spectrum-css/treeview@3.0.0-beta.5)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="3.0.0-beta.4"></a>

# 3.0.0-beta.4

🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@3.0.0-beta.3...@spectrum-css/treeview@3.0.0-beta.4)

### 🐛 Bug fixes

- change workflow icon size to medium for most of the examples ([#962](https://github.com/adobe/spectrum-css/issues/962)) ([db7b8b2](https://github.com/adobe/spectrum-css/commit/db7b8b2))

<a name="3.0.0-beta.3"></a>

# 3.0.0-beta.3

🗓 2020-06-19 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@3.0.0-beta.2...@spectrum-css/treeview@3.0.0-beta.3)

### 🐛 Bug fixes

- correct Treeview icon/text alignment ([#734](https://github.com/adobe/spectrum-css/issues/734)) ([e62419a](https://github.com/adobe/spectrum-css/commit/e62419a))

### 🛑 BREAKING CHANGES

- spectrum-Treeview-icon now required on all non-indicator icons

- feat: implement Quiet and Standalone Treeview

WIP: missing text/icon colors for selected items

fix: implement selected/hover states properly

- .is-drop-target and .is-selected must be placed on the .spectrum-TreeView-item element

- fix: focus states and selected border-width

- docs: make TreeView expand/collapse and selection behave right

- fix: correct naming of icon class

- fix: correct nesting of selected items, icon and text colors

- fix: focus behavior for selected TreeView items

- docs: single select TreeView items on click, multi-select if shift/cmd

- fix: quiet focus border for Treeview

- fix: correct alias references for temporary vars

- feat: add Thumbnail component

- feat: add layers variant to Treeview

- fix: change behavior for landscape images for consistency

show space above and below, fill horizontally

- feat: add background-style cropping for Thumbnails

- feat: support layering images on background in Thumbnail

- fix: properly contain selected/hover boxes

- feat: correct class naming and label truncation in TreeView items
- .spectrum-TreeView-indicator changed to .spectrum-TreeView-itemIndicator
- .spectrum-TreeView-icon changed to .spectrum-TreeView-itemIcon
- .spectrum-TreeView-label required for truncation behavior

- docs: correct widths of TreeView examples

- fix: correct selection behavior for Thumbnail Treeview

- fix: rename --layers to --thumbnail

- feat: implement t-shirt sizing for Thumbnail

- docs: re-organize TreeView docs, change Layers to Thumbnail

- test: add VRT scenario for new component Thumbnail

- docs: trivial fix, don't self-close <use>

- docs: fixup examples for standalone

- docs: add migration guide

Co-authored-by: Jian Liao <jianliao@adobe.com>

<a name="3.0.0-beta.2"></a>

# 3.0.0-beta.2

🗓 2020-05-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@3.0.0-beta.1...@spectrum-css/treeview@3.0.0-beta.2)

### ✨ Features

- add Treeview heading (via RSP V3) ([#601](https://github.com/adobe/spectrum-css/issues/601)) ([5bd34dc](https://github.com/adobe/spectrum-css/commit/5bd34dc))

<a name="3.0.0-beta.1"></a>

# 3.0.0-beta.1

🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@3.0.0-beta.0...@spectrum-css/treeview@3.0.0-beta.1)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="3.0.0-beta.0"></a>

# 3.0.0-beta.0

🗓 2020-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@2.0.6...@spectrum-css/treeview@3.0.0-beta.0)

### ✨ Features

- make Treeview support RTL ([16f7526](https://github.com/adobe/spectrum-css/commit/16f7526))

<a name="2.0.6"></a>

## 2.0.6

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@2.0.5...@spectrum-css/treeview@2.0.6)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="2.0.5"></a>

## 2.0.5

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@2.0.4...@spectrum-css/treeview@2.0.5)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="2.0.4"></a>

## 2.0.4

🗓 2020-01-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@2.0.3...@spectrum-css/treeview@2.0.4)

### 🐛 Bug fixes

- be explicit about Treeview group indicator box model, fixes [#467](https://github.com/adobe/spectrum-css/issues/467) ([32cfd52](https://github.com/adobe/spectrum-css/commit/32cfd52))

<a name="2.0.3"></a>

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@2.0.2...@spectrum-css/treeview@2.0.3)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="2.0.2"></a>

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@2.0.1...@spectrum-css/treeview@2.0.2)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="2.0.1"></a>

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/treeview@2.0.0...@spectrum-css/treeview@2.0.1)

**Note:** Version bump only for package @spectrum-css/treeview

<a name="2.0.0"></a>

# 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
