# Change Log

## 6.5.0

### Minor Changes

- [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)! - Simplify how the `--system` properties are mapped. By updating the logic in the `postcss-add-theming-layer`, we are now shipping cleaner, more readable `--system` property names. These custom properties are documented as _NOT_ a part of the component API so although these result in a change to the custom property names, it does not impact the properties that are in the API and so do not constitute a breaking change. Expect to see no change to how component theming works or any visual regressions as a result of this change.

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/icon@8.0.0

## 6.4.0

### Minor Changes

- [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)! - Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/icon@7.2.0

## 6.3.0

### Minor Changes

- [#3258](https://github.com/adobe/spectrum-css/pull/3258) [`db450d8`](https://github.com/adobe/spectrum-css/commit/db450d8679242cffced38793f8c3f4f458240612) Thanks [@cdransf](https://github.com/cdransf)! - Improves the visibility of the clear button disabled variant on static color backgrounds by more closely aligning styles with close button.

  - Adds `.spectrum-ClearButton--staticWhite` to the mod declarations associated with `.spectrum-ClearButton--overBackground` in advance of the latter being deprecated. The same class has been added to the `:focus` declaration for `spectrum-ClearButton--overBackground`.
  - Adds `--spectrum-clear-button-icon-color-disabled: var(--spectrum-disabled-static-white-content-color);` custom property for `.spectrum-ClearButton--staticWhite`.
  - Enables `cursor: pointer` for `.spectrum-ClearButton` when it is not disabled.
  - Disables hover, active, focus and focus-within states for `:disabled` `.spectrum-ClearButton` elements.
  - Adds color styles for `:disabled` and `.is-disabled` `.spectrum-ClearButton` `:disabled` icons.

## 6.2.0

### Minor Changes

- [#3263](https://github.com/adobe/spectrum-css/pull/3263) [`904d5b0`](https://github.com/adobe/spectrum-css/commit/904d5b0eae5cd62dd1346a2443192aec886e613b) Thanks [@cdransf](https://github.com/cdransf)! - Removes undefined leading tokens in mods assignments for clearbutton.

### Patch Changes

- Updated dependencies [[`47f23a7`](https://github.com/adobe/spectrum-css/commit/47f23a762a5c84ffe3c82e7e1b0c4c9d5dc60f86)]:
  - @spectrum-css/tokens@14.5.0

## 6.1.3

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)! - Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/icon@7.1.4

## 6.1.2

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)! - Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/icon@7.1.3

## 6.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/icon@7.1.1

## 6.1.0

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

<a name="6.0.0"></a>

## 6.0.0

🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.1.4...@spectrum-css/clearbutton@6.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="5.1.4"></a>

## 5.1.4

🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.1.3...@spectrum-css/clearbutton@5.1.4)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="5.1.3"></a>

## 5.1.3

🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.1.2...@spectrum-css/clearbutton@5.1.3)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="5.1.2"></a>

## 5.1.2

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.1.1...@spectrum-css/clearbutton@5.1.2)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="5.1.1"></a>

## 5.1.1

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="5.1.0"></a>

## 5.1.0

🗓
2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.16...@spectrum-css/clearbutton@5.1.0)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="5.0.16"></a>

## 5.0.16

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.15...@spectrum-css/clearbutton@5.0.16)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="5.0.15"></a>

## 5.0.15

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.14...@spectrum-css/clearbutton@5.0.15)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="5.0.14"></a>

## 5.0.14

🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.13...@spectrum-css/clearbutton@5.0.14)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="5.0.13"></a>

## 5.0.13

🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.11...@spectrum-css/clearbutton@5.0.13)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="5.0.12"></a>

## 5.0.12

🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.11...@spectrum-css/clearbutton@5.0.12)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="5.0.11"></a>

## 5.0.11

🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.10...@spectrum-css/clearbutton@5.0.11)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="5.0.10"></a>

## 5.0.10

🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.9...@spectrum-css/clearbutton@5.0.10)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="5.0.9"></a>

## 5.0.9

🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.8...@spectrum-css/clearbutton@5.0.9)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="5.0.8"></a>

## 5.0.8

🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.7...@spectrum-css/clearbutton@5.0.8)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="5.0.7"></a>

## 5.0.7

🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.6...@spectrum-css/clearbutton@5.0.7)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="5.0.6"></a>

## 5.0.6

🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.5...@spectrum-css/clearbutton@5.0.6)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="5.0.5"></a>

## 5.0.5

🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.4...@spectrum-css/clearbutton@5.0.5)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="5.0.4"></a>

## 5.0.4

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.3...@spectrum-css/clearbutton@5.0.4)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="5.0.3"></a>

## 5.0.3

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.2...@spectrum-css/clearbutton@5.0.3)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="5.0.2"></a>

## 5.0.2

🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.1...@spectrum-css/clearbutton@5.0.2)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="5.0.1"></a>

## 5.0.1

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@5.0.0...@spectrum-css/clearbutton@5.0.1)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="5.0.0"></a>

## 5.0.0

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@2.0.0...@spectrum-css/clearbutton@5.0.0)

\*refactor(clearbutton)!: migrate tokens (#1943)([495198a](https://github.com/adobe/spectrum-css/commit/495198a)), closes[#1943](https://github.com/adobe/spectrum-css/issues/1943)

    	###
    	🛑 BREAKING CHANGES

    		*
    		migrates clear button to use `@adobe/spectrum-tokens`

- update to use infield button tokens release
- migrate css to use tokens
- add quiet variant and whcm styles
- update storybook to include over background story
- fix icon sizing in story, add cursor pointer
- add aria-labels

<a name="4.0.0"></a>

## 4.0.0

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@2.0.0...@spectrum-css/clearbutton@4.0.0)

- refactor(clearbutton)!: migrate tokens (#1943)([495198a](https://github.com/adobe/spectrum-css/commit/495198a)), closes[#1943](https://github.com/adobe/spectrum-css/issues/1943)

### 🛑 BREAKING CHANGES

- migrates clear button to use `@adobe/spectrum-tokens`
- update to use infield button tokens release
- migrate css to use tokens
- add quiet variant and whcm styles
- update storybook to include over background story
- fix icon sizing in story, add cursor pointer
- add aria-labels

<a name="3.0.0"></a>

## 3.0.0

**Deprecated tag**: exists solely on npm and does not appear in the git repository. This was an accidental release that went out without a build.

<a name="2.0.0"></a>

## 2.0.0

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.38...@spectrum-css/clearbutton@2.0.0)

- refactor(clearbutton)!: replace focus-ring with focus-visible([a4fd637](https://github.com/adobe/spectrum-css/commit/a4fd637))

### 🛑 BREAKING CHANGES

- use native focus-visible pseudo class for focus styling

<a name="1.2.38"></a>

## 1.2.38

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.37...@spectrum-css/clearbutton@1.2.38)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.37"></a>

## 1.2.37

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.36...@spectrum-css/clearbutton@1.2.37)

### 🐛 Bug fixes

- icon sizing in Storybook story templates ([#2037](https://github.com/adobe/spectrum-css/issues/2037))([c90c8a3](https://github.com/adobe/spectrum-css/commit/c90c8a3))

<a name="1.2.36"></a>

## 1.2.36

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.35...@spectrum-css/clearbutton@1.2.36)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.35"></a>

## 1.2.35

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.34...@spectrum-css/clearbutton@1.2.35)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.34"></a>

## 1.2.34

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.33...@spectrum-css/clearbutton@1.2.34)

### 🐛 Bug fixes

- restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="1.2.33"></a>

## 1.2.33

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.32...@spectrum-css/clearbutton@1.2.33)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.32"></a>

## 1.2.32

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.31...@spectrum-css/clearbutton@1.2.32)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.31"></a>

## 1.2.31

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.30...@spectrum-css/clearbutton@1.2.31)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.30"></a>

## 1.2.30

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.29...@spectrum-css/clearbutton@1.2.30)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.29"></a>

## 1.2.29

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.28...@spectrum-css/clearbutton@1.2.29)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.28"></a>

## 1.2.28

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.27...@spectrum-css/clearbutton@1.2.28)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.27"></a>

## 1.2.27

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.25...@spectrum-css/clearbutton@1.2.27)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.26"></a>

## 1.2.26

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.25...@spectrum-css/clearbutton@1.2.26)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.25"></a>

## 1.2.25

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.23...@spectrum-css/clearbutton@1.2.25)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.24"></a>

## 1.2.24

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.23...@spectrum-css/clearbutton@1.2.24)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.23"></a>

## 1.2.23

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.22...@spectrum-css/clearbutton@1.2.23)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.22"></a>

## 1.2.22

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.21...@spectrum-css/clearbutton@1.2.22)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.21"></a>

## 1.2.21

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.20...@spectrum-css/clearbutton@1.2.21)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.20"></a>

## 1.2.20

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.19...@spectrum-css/clearbutton@1.2.20)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.19"></a>

## 1.2.19

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.18...@spectrum-css/clearbutton@1.2.19)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.18"></a>

## 1.2.18

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.17...@spectrum-css/clearbutton@1.2.18)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.17"></a>

## 1.2.17

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.16...@spectrum-css/clearbutton@1.2.17)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.16"></a>

## 1.2.16

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.15...@spectrum-css/clearbutton@1.2.16)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.15"></a>

## 1.2.15

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.13...@spectrum-css/clearbutton@1.2.15)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.14"></a>

## 1.2.14

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.13...@spectrum-css/clearbutton@1.2.14)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.13"></a>

## 1.2.13

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.12...@spectrum-css/clearbutton@1.2.13)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.12"></a>

## 1.2.12

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.11...@spectrum-css/clearbutton@1.2.12)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.11"></a>

## 1.2.11

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.10...@spectrum-css/clearbutton@1.2.11)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.10"></a>

## 1.2.10

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.9...@spectrum-css/clearbutton@1.2.10)

### 🐛 Bug fixes

- clearbutton WHCM ([bc9ccd6](https://github.com/adobe/spectrum-css/commit/bc9ccd6))

<a name="1.2.9"></a>

## 1.2.9

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.8...@spectrum-css/clearbutton@1.2.9)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.8"></a>

## 1.2.8

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.7...@spectrum-css/clearbutton@1.2.8)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.7"></a>

## 1.2.7

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.6...@spectrum-css/clearbutton@1.2.7)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.6"></a>

## 1.2.6

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.5...@spectrum-css/clearbutton@1.2.6)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.5"></a>

## 1.2.5

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.4...@spectrum-css/clearbutton@1.2.5)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.4"></a>

## 1.2.4

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.3...@spectrum-css/clearbutton@1.2.4)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.3"></a>

## 1.2.3

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.2...@spectrum-css/clearbutton@1.2.3)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.2"></a>

## 1.2.2

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.1...@spectrum-css/clearbutton@1.2.2)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.1"></a>

## 1.2.1

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.2.0...@spectrum-css/clearbutton@1.2.1)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.2.0"></a>

## 1.2.0

🗓 2022-01-05

### ✨ Features

- break out ClearButton and LogicButton into their own packages ([3cc0a5f](https://github.com/adobe/spectrum-css/commit/3cc0a5f))

### 🐛 Bug fixes

- unbreak the build ([d595cad](https://github.com/adobe/spectrum-css/commit/d595cad))
- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

<a name="1.1.0"></a>

## 1.1.0

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/clearbutton@1.1.0-beta.0...@spectrum-css/clearbutton@1.1.0)

**Note:** Version bump only for package @spectrum-css/clearbutton

<a name="1.1.0-beta.0"></a>

## 1.1.0-beta.0

🗓 2021-12-14

### ✨ Features

- break out ClearButton and LogicButton into their own packages ([a2092ab](https://github.com/adobe/spectrum-css/commit/a2092ab))

### 🐛 Bug fixes

- unbreak the build ([123add2](https://github.com/adobe/spectrum-css/commit/123add2))
