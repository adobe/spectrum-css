# Change Log

## 7.1.2

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/checkbox@9.1.1
  - @spectrum-css/divider@3.1.1
  - @spectrum-css/switch@5.1.1
  - @spectrum-css/icon@7.1.1
  - @spectrum-css/tray@3.1.1

## 7.1.1

### Patch Changes

- [#2740](https://github.com/adobe/spectrum-css/pull/2740) [`c0dd6a4`](https://github.com/adobe/spectrum-css/commit/c0dd6a443b410f37f3dc703d75e11c15519fd93e) Thanks [@jawinn](https://github.com/jawinn)! - Build change to remove the `postcss-preset-env` polyfill for the dist output of `:not` selectors containing multiple selectors, to avoid an unintended increase in specificity, which caused some visual regressions.

## 7.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/checkbox@>=9
  - @spectrum-css/divider@>=3
  - @spectrum-css/icon@>=7
  - @spectrum-css/switch@>=5
  - @spectrum-css/tray@>=3
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="7.0.0"></a>
#7.0.0
🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@6.1.5...@spectrum-css/menu@7.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="6.1.5"></a>
##6.1.5
🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@6.1.4...@spectrum-css/menu@6.1.5)

### 🐛 Bug fixes

- **menu:**disabled color for value text and add disabled stories ([#2579](https://github.com/adobe/spectrum-css/issues/2579))([f0fae60](https://github.com/adobe/spectrum-css/commit/f0fae60))

<a name="6.1.4"></a>
##6.1.4
🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@6.1.3...@spectrum-css/menu@6.1.4)

**Note:** Version bump only for package @spectrum-css/menu

<a name="6.1.3"></a>
##6.1.3
🗓
2024-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@6.1.2...@spectrum-css/menu@6.1.3)

**Note:** Version bump only for package @spectrum-css/menu

<a name="6.1.2"></a>
##6.1.2
🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@6.1.1...@spectrum-css/menu@6.1.2)

**Note:** Version bump only for package @spectrum-css/menu

<a name="6.1.1"></a>
##6.1.1
🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/menu

<a name="6.1.0"></a>
#6.1.0
🗓
2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@6.0.0...@spectrum-css/menu@6.1.0)

### 🐛 Bug fixes

- **menu:**use higher specificity to provide correct styling for disabled states([36e0183](https://github.com/adobe/spectrum-css/commit/36e0183))

<a name="6.0.0"></a>
#6.0.0
🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.2.1...@spectrum-css/menu@6.0.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

\*fix(menu)!: reimplement text truncating (#2299)([9752d02](https://github.com/adobe/spectrum-css/commit/9752d02)), closes[#2299](https://github.com/adobe/spectrum-css/issues/2299)

    	###
    	🛑 BREAKING CHANGES

    		*
    		removes flex-based display, renames classes, reintroduces truncation

Additionally:

- fix(menu): truncating class
- docs(menu): add truncating example
- docs(menu): improve docs
- feat(menu): add truncate example to storybook
- refactor(menu): remove flex from itemLabel
- feat(menu): wip adds truncating to all stories
- refactor(menu): removes uneeded code
- refactor(menu): removes hard coded ellipsis
- docs(menu): improve description
- chore(menu): story indenting
- docs(menu): improve storybook max-width
- refactor(menu): improves story
- docs(menu): adds to migration guide
- fix(menu): post rebase issues

<a name="5.2.1"></a>
##5.2.1
🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.2.0...@spectrum-css/menu@5.2.1)

**Note:** Version bump only for package @spectrum-css/menu

<a name="5.2.0"></a>
#5.2.0
🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.1.5...@spectrum-css/menu@5.2.0)

### ✨ Features

- **menu:**tray submenus([042ec45](https://github.com/adobe/spectrum-css/commit/042ec45))

### 🐛 Bug fixes

- **menu:**updated sizing of tray submenu back icon([3a5aebd](https://github.com/adobe/spectrum-css/commit/3a5aebd))

<a name="5.1.5"></a>
##5.1.5
🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.1.3...@spectrum-css/menu@5.1.5)

**Note:** Version bump only for package @spectrum-css/menu

<a name="5.1.4"></a>
##5.1.4
🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.1.3...@spectrum-css/menu@5.1.4)

**Note:** Version bump only for package @spectrum-css/menu

<a name="5.1.3"></a>
##5.1.3
🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.1.2...@spectrum-css/menu@5.1.3)

**Note:** Version bump only for package @spectrum-css/menu

<a name="5.1.2"></a>
##5.1.2
🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.1.1...@spectrum-css/menu@5.1.2)

### 🐛 Bug fixes

- **menu:**drill-in disabled menu item chevron ([#2199](https://github.com/adobe/spectrum-css/issues/2199))([2dba5d9](https://github.com/adobe/spectrum-css/commit/2dba5d9)), closes[#2176](https://github.com/adobe/spectrum-css/issues/2176)

<a name="5.1.1"></a>
##5.1.1
🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.1.0...@spectrum-css/menu@5.1.1)

**Note:** Version bump only for package @spectrum-css/menu

<a name="5.1.0"></a>
#5.1.0
🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.12...@spectrum-css/menu@5.1.0)

### ✨ Features

- **menu:**add multi-select and switch ([#2152](https://github.com/adobe/spectrum-css/issues/2152))([6e95f44](https://github.com/adobe/spectrum-css/commit/6e95f44))

<a name="5.0.12"></a>
##5.0.12
🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.11...@spectrum-css/menu@5.0.12)

**Note:** Version bump only for package @spectrum-css/menu

<a name="5.0.11"></a>
##5.0.11
🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.10...@spectrum-css/menu@5.0.11)

**Note:** Version bump only for package @spectrum-css/menu

<a name="5.0.10"></a>
##5.0.10
🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.9...@spectrum-css/menu@5.0.10)

**Note:** Version bump only for package @spectrum-css/menu

<a name="5.0.9"></a>
##5.0.9
🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.8...@spectrum-css/menu@5.0.9)

**Note:** Version bump only for package @spectrum-css/menu

<a name="5.0.8"></a>
##5.0.8
🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.7...@spectrum-css/menu@5.0.8)

**Note:** Version bump only for package @spectrum-css/menu

<a name="5.0.7"></a>
##5.0.7
🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.6...@spectrum-css/menu@5.0.7)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="5.0.6"></a>
##5.0.6
🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.5...@spectrum-css/menu@5.0.6)

**Note:** Version bump only for package @spectrum-css/menu

<a name="5.0.5"></a>
##5.0.5
🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.3...@spectrum-css/menu@5.0.5)

**Note:** Version bump only for package @spectrum-css/menu

<a name="5.0.4"></a>
##5.0.4
🗓
2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.3...@spectrum-css/menu@5.0.4)

**Note:** Version bump only for package @spectrum-css/menu

<a name="5.0.3"></a>
##5.0.3
🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.2...@spectrum-css/menu@5.0.3)

**Note:** Version bump only for package @spectrum-css/menu

<a name="5.0.2"></a>
##5.0.2
🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.1...@spectrum-css/menu@5.0.2)

**Note:** Version bump only for package @spectrum-css/menu

<a name="5.0.1"></a>
##5.0.1
🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@5.0.0...@spectrum-css/menu@5.0.1)

**Note:** Version bump only for package @spectrum-css/menu

<a name="5.0.0"></a>
#5.0.0
🗓
2023-08-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.50...@spectrum-css/menu@5.0.0)

### ✨ Features

- **menu:**migrate to spectrum-tokens + add new features ([#1942](https://github.com/adobe/spectrum-css/issues/1942))([d961abd](https://github.com/adobe/spectrum-css/commit/d961abd))

      ###
      🛑 BREAKING CHANGES

      	*
      	**menu:** migrates the Menu to `@adobe/spectrum-tokens`

- feat(menu)!: migrate to spectrum-tokens

- docs(site): update menu usage in the docs site

- fix(menu): use correct guidelines link in docs

- feat(menu): make medium size styles the default

Make .spectrum-Menu--sizeM the default; move its custom properties to
the parent class, and move sizing styles underneath the parent class
custom property definitions.

- fix(menu): set color property where fill is used

Add color declaration wherever there is 'fill', per SWC request. Because
"using fill to set the colour of icons in the menu css isn't
compatible with the way we process our icons, so the icons aren't
colouring properly or changing depending on the state".

- fix(menu): checkmark margin to fix alignment of selected items

Selected menu items with checkmark were shifting 2 pixels as compared
to the non-selected menu items. Looking over the updated design, the
text-to-control-\* tokens are used for the space between the checkmark
and the text.

- fix(menu): section heading top and bottom spacing

When a section heading was above menu items, it previously looked
strange because of the lack of space. The sectionHeading also needs
top and bottom padding.

- fix(menu): organize stories under components category

- feat(menu): simplify cjk style rules

Replace unnecessary CJK style rules with a change to the relevant custom
property values.

- refactor(menu): simplify high contrast mode styles with fixes

* Simplify high contrast mode styles. Less custom properties are needed.
* Fix for hover causing things to disappear on collapsible items. Fix
  may need to be replaced later with one that addresses the regular
  styles for children of menu-item being applied to the nested menu
  items in the collapsible variant.
* Remove skin.css as part of tokens migration. Its rules should already
  be handled now by the index.css.

- feat(menu): create new stories and finalize existing stories

Updates the Menu stories to account for additional variants on the docs
and changes to markup. Adds several new stories.

- fix(menu): update for selected states and keyboard focus

* Use state class naming instead of modifier class naming for
  is-selected and is-selectable.
* Show focus indicator line only with :focus-visible for keyboard focus
* Simplify RTL/LTR change of focus indicator with scalar custom prop

- feat(menu): story for drill-in variant

Add story for drill-in variant. Also makes isSelectable false by default
and change some stories to set it to false to better align with docs
examples.

- fix(menu): use child combinator to limit styles applied for nested

In the collapsible variant, style rules applying to children of a menu
item were also applying to the nested menu child items. This was causing
some issues with high contrast hovers and could also be noticed by
changing a mod like --mod-menu-item-label-content-color-hover and then
hovering over the parent menu item in the collapsible variant (this
would also change the color of all the child menu items).

- docs(menu): remove submenu from drill-in example

The displayed submenu for the drill-in example was not how submenus
should be displayed per the guidelines. They need to be positioned, and
are shown as being within another popover. Showing this adjacent menu
like this could cause some confusion as to its usage; the adjacent menu
was not positioned properly and does not have any separate styles within
the CSS for doing so.

- fix(menu): collapsible - remove extra indentation for sub items

For the collapsible variant:
The child menu items under a parent menu item that contains a workflow
icon should not show extra indentation, otherwise it looks like a
different tier when next to a menu item without an icon. Confirmed
with design team.

All sub-items are now indented to after the chevron and the start of the
parent item text/heading.

- feat(menu): add collapsible story

Add Collapsible story to menu in Storybook, based on example from docs
example.

- feat(menu): add t-shirt sizing to storybook

Add control for t-shirt sizing to menu stories. Adds the size class to
various elements.

- fix(menu): fixes for menu usage in docs site search and popovers

Fixes for several issues with the menu that is displayed in the docs
site search results, and theme/scale/direction popovers.

- Makes the adjacentText classes the default margin, allowing them to
  be removed (which fixes checkbox spacing in theme/scale popovers).
- Fixes extra top and bottom margin appearing in menu for docs
  theme/scale popovers. This was showing user agent values for top and
  bottom margin. In production, they were previously set to a popover
  padding token, which added more space than on the design (popover
  component already has padding).
- Fixes search results menu showing incorrectly because of difference in
  the JS created markup related to section headers.

* chore(menu): manual version increase for beta release

* fix(menu): spacing adjustments including divider inline margin

- Includes spacing on left and right of divider to match the same
  spacing used on left and right of menu item labels and heading.
- Remove extra padding on presentational list items used for section
  header and divider examples.
- Simplify rules for padding on sectionHeading. Default inline padding
  and remove inline padding on collapsible variant.

* feat(menu): use top to checkmark token and handle wrapping text

- Use new spectrum-menu-item-top-to-selected-icon-\* tokens
- Handle alignment of icon and checkmark when text is wrapping, so icons
  are aligned top and not center, and stay in alignment with each other
  with use of new token.
- Updates stories to make sure edge case with selected + icon + wrapping
  text is represented.

* fix(menu): storybook - ensure long text wraps on wide screens

Wrapping text examples need a max-width on the container to ensure that
they are wrapping when stories are viewed at higher resolutions.

Also updates generated mods file.

- refactor(menu): remove two withAdjacentIcon classes

Per PR feedback, these classes appear to be no longer needed as they are
using the same token value.

- chore(menu): new beta release

- fix(menu): remove excess margin from drill-in chevron

Zero out the margin-inline-end for the chevron used at the end
of the drill-in menu items.

- chore(menu): version increase for beta release

- fix(menu): divider margin update and new tokens package version

Update divider margin-block to agree with newly added token for the
divider height. Sets minimum tokens package version to 11.0.2 where this
--spectrum-menu-item-section-divider-height token was added.

- fix(menu): use smaller divider instead of medium

Replace medium divider with small divider in examples and storybook
markup. Updates migration guide to note the change. Removes unnecessary
large divider possibility from CSS, as that should never be used here
according to divider guidelines.

- docs(menu): fix migration guide not appearing and add docs

Fix migration guide section no appearing in docs because it was named
'section' and not 'sections' in the YML.

Adds new standard section about -mod custom properties.

- chore(menu): manual version increase + update tokens dep

<a name="4.0.50"></a>
##4.0.50
🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.49...@spectrum-css/menu@4.0.50)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.49"></a>
##4.0.49
🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.48...@spectrum-css/menu@4.0.49)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.48"></a>
##4.0.48
🗓
2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.47...@spectrum-css/menu@4.0.48)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.47"></a>
##4.0.47
🗓
2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.46...@spectrum-css/menu@4.0.47)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.46"></a>
##4.0.46
🗓
2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.45...@spectrum-css/menu@4.0.46)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.45"></a>
##4.0.45
🗓
2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.44...@spectrum-css/menu@4.0.45)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.44"></a>
##4.0.44
🗓
2023-06-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.43...@spectrum-css/menu@4.0.44)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.43"></a>
##4.0.43
🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.42...@spectrum-css/menu@4.0.43)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.42"></a>
##4.0.42
🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.41...@spectrum-css/menu@4.0.42)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.41"></a>
##4.0.41
🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.40...@spectrum-css/menu@4.0.41)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="4.0.40"></a>
##4.0.40
🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.39...@spectrum-css/menu@4.0.40)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.39"></a>
##4.0.39
🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.38...@spectrum-css/menu@4.0.39)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.38"></a>

## 4.0.38

🗓 2023-05-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.37...@spectrum-css/menu@4.0.38)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.37"></a>

## 4.0.37

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.36...@spectrum-css/menu@4.0.37)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.36"></a>

## 4.0.36

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.35...@spectrum-css/menu@4.0.36)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.35"></a>

## 4.0.35

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.34...@spectrum-css/menu@4.0.35)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.34"></a>

## 4.0.34

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.33...@spectrum-css/menu@4.0.34)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.33"></a>

## 4.0.33

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.32...@spectrum-css/menu@4.0.33)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.32"></a>

## 4.0.32

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.31...@spectrum-css/menu@4.0.32)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.31"></a>

## 4.0.31

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.30...@spectrum-css/menu@4.0.31)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.30"></a>

## 4.0.30

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.29...@spectrum-css/menu@4.0.30)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.29"></a>

## 4.0.29

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.28...@spectrum-css/menu@4.0.29)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.28"></a>

## 4.0.28

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.27...@spectrum-css/menu@4.0.28)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.27"></a>

## 4.0.27

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.26...@spectrum-css/menu@4.0.27)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.26"></a>

## 4.0.26

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.25...@spectrum-css/menu@4.0.26)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.25"></a>

## 4.0.25

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.23...@spectrum-css/menu@4.0.25)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.24"></a>

## 4.0.24

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.23...@spectrum-css/menu@4.0.24)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.23"></a>

## 4.0.23

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.22...@spectrum-css/menu@4.0.23)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.22"></a>

## 4.0.22

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.21...@spectrum-css/menu@4.0.22)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.21"></a>

## 4.0.21

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.20...@spectrum-css/menu@4.0.21)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.20"></a>

## 4.0.20

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.19...@spectrum-css/menu@4.0.20)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.19"></a>

## 4.0.19

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.17...@spectrum-css/menu@4.0.19)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.18"></a>

## 4.0.18

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.17...@spectrum-css/menu@4.0.18)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.17"></a>

## 4.0.17

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.16...@spectrum-css/menu@4.0.17)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.16"></a>

## 4.0.16

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.15...@spectrum-css/menu@4.0.16)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.15"></a>

## 4.0.15

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.14...@spectrum-css/menu@4.0.15)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.14"></a>

## 4.0.14

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.13...@spectrum-css/menu@4.0.14)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.13"></a>

## 4.0.13

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.12...@spectrum-css/menu@4.0.13)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.12"></a>

## 4.0.12

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.11...@spectrum-css/menu@4.0.12)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.11"></a>

## 4.0.11

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.10...@spectrum-css/menu@4.0.11)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.10"></a>

## 4.0.10

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.9...@spectrum-css/menu@4.0.10)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.9"></a>

## 4.0.9

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.8...@spectrum-css/menu@4.0.9)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.8"></a>

## 4.0.8

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.6...@spectrum-css/menu@4.0.8)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.7"></a>

## 4.0.7

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.6...@spectrum-css/menu@4.0.7)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.6"></a>

## 4.0.6

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.5...@spectrum-css/menu@4.0.6)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.5"></a>

## 4.0.5

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.4...@spectrum-css/menu@4.0.5)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.4"></a>

## 4.0.4

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.3...@spectrum-css/menu@4.0.4)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.3"></a>

## 4.0.3

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.2...@spectrum-css/menu@4.0.3)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.2"></a>

## 4.0.2

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.1...@spectrum-css/menu@4.0.2)

### 🐛 Bug fixes

- menu WHCM ([feee3be](https://github.com/adobe/spectrum-css/commit/feee3be))

<a name="4.0.1"></a>

## 4.0.1

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@4.0.0...@spectrum-css/menu@4.0.1)

**Note:** Version bump only for package @spectrum-css/menu

<a name="4.0.0"></a>

# 4.0.0

🗓 2022-04-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.21...@spectrum-css/menu@4.0.0)

### 🐛 Bug fixes

- added margin back for dividers in menu ([e4feb9a](https://github.com/adobe/spectrum-css/commit/e4feb9a))

- fix!: use divider component in menu, closes #1371 ([5c901f1](https://github.com/adobe/spectrum-css/commit/5c901f1)), closes [#1371](https://github.com/adobe/spectrum-css/issues/1371)

### 🛑 BREAKING CHANGES

- Add `.spectrum-Divider` and `spectrum-Divider--sizeM` classes to `spectrum-Menu-divider`

<a name="3.0.21"></a>

## 3.0.21

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.20...@spectrum-css/menu@3.0.21)

**Note:** Version bump only for package @spectrum-css/menu

<a name="3.0.20"></a>

## 3.0.20

🗓 2022-03-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.19...@spectrum-css/menu@3.0.20)

**Note:** Version bump only for package @spectrum-css/menu

<a name="3.0.19"></a>

## 3.0.19

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.18...@spectrum-css/menu@3.0.19)

**Note:** Version bump only for package @spectrum-css/menu

<a name="3.0.18"></a>

## 3.0.18

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.17...@spectrum-css/menu@3.0.18)

**Note:** Version bump only for package @spectrum-css/menu

<a name="3.0.17"></a>

## 3.0.17

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.16...@spectrum-css/menu@3.0.17)

**Note:** Version bump only for package @spectrum-css/menu

<a name="3.0.16"></a>

## 3.0.16

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.15...@spectrum-css/menu@3.0.16)

**Note:** Version bump only for package @spectrum-css/menu

<a name="3.0.15"></a>

## 3.0.15

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.14...@spectrum-css/menu@3.0.15)

**Note:** Version bump only for package @spectrum-css/menu

<a name="3.0.14"></a>

## 3.0.14

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.13...@spectrum-css/menu@3.0.14)

**Note:** Version bump only for package @spectrum-css/menu

<a name="3.0.13"></a>

## 3.0.13

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.12...@spectrum-css/menu@3.0.13)

**Note:** Version bump only for package @spectrum-css/menu

<a name="3.0.12"></a>

## 3.0.12

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.10...@spectrum-css/menu@3.0.12)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

<a name="3.0.11"></a>

## 3.0.11

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.11-beta.0...@spectrum-css/menu@3.0.11)

**Note:** Version bump only for package @spectrum-css/menu

<a name="3.0.11-beta.0"></a>

## 3.0.11-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.10...@spectrum-css/menu@3.0.11-beta.0)

**Note:** Version bump only for package @spectrum-css/menu

<a name="3.0.10"></a>

## 3.0.10

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.9...@spectrum-css/menu@3.0.10)

**Note:** Version bump only for package @spectrum-css/menu

<a name="3.0.9"></a>

## 3.0.9

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.8...@spectrum-css/menu@3.0.9)

**Note:** Version bump only for package @spectrum-css/menu

<a name="3.0.8"></a>

## 3.0.8

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.7...@spectrum-css/menu@3.0.8)

**Note:** Version bump only for package @spectrum-css/menu

<a name="3.0.7"></a>

## 3.0.7

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.6...@spectrum-css/menu@3.0.7)

**Note:** Version bump only for package @spectrum-css/menu

<a name="3.0.6"></a>

## 3.0.6

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.4...@spectrum-css/menu@3.0.6)

**Note:** Version bump only for package @spectrum-css/menu

<a name="3.0.5"></a>

## 3.0.5

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.4...@spectrum-css/menu@3.0.5)

**Note:** Version bump only for package @spectrum-css/menu

<a name="3.0.3"></a>

## 3.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.3-alpha.5...@spectrum-css/menu@3.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="3.0.3-alpha.5"></a>

## 3.0.3-alpha.5

🗓 2021-08-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.3-alpha.4...@spectrum-css/menu@3.0.3-alpha.5)

### 🐛 Bug fixes

- adjust menu item selectable padding again ([034a2df](https://github.com/adobe/spectrum-css/commit/034a2df))

<a name="3.0.3-alpha.4"></a>

## 3.0.3-alpha.4

🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.3-alpha.3...@spectrum-css/menu@3.0.3-alpha.4)

### 🐛 Bug fixes

- added padding to unselected listitem back ([f167013](https://github.com/adobe/spectrum-css/commit/f167013))

<a name="3.0.3-alpha.3"></a>

## 3.0.3-alpha.3

🗓 2021-07-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.3-alpha.2...@spectrum-css/menu@3.0.3-alpha.3)

### 🐛 Bug fixes

- moved menu item selected checkmark back ([1fa03a6](https://github.com/adobe/spectrum-css/commit/1fa03a6))

<a name="3.0.3-alpha.2"></a>

## 3.0.3-alpha.2

🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.3-alpha.1...@spectrum-css/menu@3.0.3-alpha.2)

**Note:** Version bump only for package @spectrum-css/menu

<a name="3.0.3-alpha.1"></a>

## 3.0.3-alpha.1

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.3-alpha.0...@spectrum-css/menu@3.0.3-alpha.1)

### 🐛 Bug fixes

- import scales since padding-left can change according to scale ([c9f0162](https://github.com/adobe/spectrum-css/commit/c9f0162))

<a name="3.0.3-alpha.0"></a>

## 3.0.3-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.2...@spectrum-css/menu@3.0.3-alpha.0)

### 🐛 Bug fixes

- updated progresscircle to use correct t-shirt tokens ([3dbed89](https://github.com/adobe/spectrum-css/commit/3dbed89))

<a name="3.0.2"></a>

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.1...@spectrum-css/menu@3.0.2)

**Note:** Version bump only for package @spectrum-css/menu

<a name="3.0.1"></a>

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.0...@spectrum-css/menu@3.0.1)

**Note:** Version bump only for package @spectrum-css/menu

<a name="3.0.0"></a>

# 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.0-beta.5...@spectrum-css/menu@3.0.0)

**Note:** Version bump only for package @spectrum-css/menu

<a name="3.0.0-beta.5"></a>

# 3.0.0-beta.5

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.0-beta.4...@spectrum-css/menu@3.0.0-beta.5)

### 🐛 Bug fixes

- correct Menu icon gap ([e68bc31](https://github.com/adobe/spectrum-css/commit/e68bc31))
- correct Menu left padding ([1ea92ac](https://github.com/adobe/spectrum-css/commit/1ea92ac))
- make Menu work again ([35d1302](https://github.com/adobe/spectrum-css/commit/35d1302))
- update main, resolved conflicts ([d7880a2](https://github.com/adobe/spectrum-css/commit/d7880a2))

<a name="3.0.0-beta.4"></a>

# 3.0.0-beta.4

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.0-beta.3...@spectrum-css/menu@3.0.0-beta.4)

**Note:** Version bump only for package @spectrum-css/menu

<a name="3.0.0-beta.3"></a>

# 3.0.0-beta.3

🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.0-beta.2...@spectrum-css/menu@3.0.0-beta.3)

### 🐛 Bug fixes

- change workflow icon size to medium for most of the examples ([#962](https://github.com/adobe/spectrum-css/issues/962)) ([db7b8b2](https://github.com/adobe/spectrum-css/commit/db7b8b2))
- replacing deprecated tokens from menu ([6281862](https://github.com/adobe/spectrum-css/commit/6281862))
- wip fix more components ([b74dbb8](https://github.com/adobe/spectrum-css/commit/b74dbb8))

<a name="3.0.0-beta.2"></a>

# 3.0.0-beta.2

🗓 2020-05-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.0-beta.1...@spectrum-css/menu@3.0.0-beta.2)

**Note:** Version bump only for package @spectrum-css/menu

<a name="3.0.0-beta.1"></a>

# 3.0.0-beta.1

🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@3.0.0-beta.0...@spectrum-css/menu@3.0.0-beta.1)

**Note:** Version bump only for package @spectrum-css/menu

<a name="3.0.0-beta.0"></a>

# 3.0.0-beta.0

🗓 2020-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@2.1.5...@spectrum-css/menu@3.0.0-beta.0)

### ✨ Features

- make Menu support RTL ([1d3391b](https://github.com/adobe/spectrum-css/commit/1d3391b))

<a name="2.1.5"></a>

## 2.1.5

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@2.1.4...@spectrum-css/menu@2.1.5)

**Note:** Version bump only for package @spectrum-css/menu

<a name="2.1.4"></a>

## 2.1.4

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@2.1.3...@spectrum-css/menu@2.1.4)

**Note:** Version bump only for package @spectrum-css/menu

<a name="2.1.3"></a>

## 2.1.3

🗓 2020-01-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@2.1.2...@spectrum-css/menu@2.1.3)

### 🐛 Bug fixes

- make Menu items wrap correctly, fixes [#451](https://github.com/adobe/spectrum-css/issues/451) ([#482](https://github.com/adobe/spectrum-css/issues/482)) ([03208af](https://github.com/adobe/spectrum-css/commit/03208af))

<a name="2.1.2"></a>

## 2.1.2

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@2.1.1...@spectrum-css/menu@2.1.2)

### 🐛 Bug fixes

- wrapping on long words in dropdowns, fixes [#451](https://github.com/adobe/spectrum-css/issues/451) ([#452](https://github.com/adobe/spectrum-css/issues/452)) ([8bb2d5b](https://github.com/adobe/spectrum-css/commit/8bb2d5b))

<a name="2.1.1"></a>

## 2.1.1

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@2.1.0...@spectrum-css/menu@2.1.1)

**Note:** Version bump only for package @spectrum-css/menu

<a name="2.1.0"></a>

# 2.1.0

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/menu@2.0.0...@spectrum-css/menu@2.1.0)

### ✨ Features

- add menu icon class, closes [#202](https://github.com/adobe/spectrum-css/issues/202) ([#331](https://github.com/adobe/spectrum-css/issues/331)) ([169940a](https://github.com/adobe/spectrum-css/commit/169940a))

<a name="2.0.0"></a>

# 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
