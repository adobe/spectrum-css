# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="5.0.6"></a>
##5.0.6
🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.0.5...@spectrum-css/table@5.0.6)

**Note:** Version bump only for package @spectrum-css/table

<a name="5.0.5"></a>
##5.0.5
🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.0.4...@spectrum-css/table@5.0.5)

**Note:** Version bump only for package @spectrum-css/table

<a name="5.0.4"></a>
##5.0.4
🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.0.3...@spectrum-css/table@5.0.4)

**Note:** Version bump only for package @spectrum-css/table

<a name="5.0.3"></a>
##5.0.3
🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.0.2...@spectrum-css/table@5.0.3)

**Note:** Version bump only for package @spectrum-css/table

<a name="5.0.2"></a>
##5.0.2
🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.0.1...@spectrum-css/table@5.0.2)

**Note:** Version bump only for package @spectrum-css/table

<a name="5.0.1"></a>
##5.0.1
🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.0.0...@spectrum-css/table@5.0.1)

**Note:** Version bump only for package @spectrum-css/table

<a name="5.0.0"></a>
#5.0.0
🗓
2023-09-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.73...@spectrum-css/table@5.0.0)

\*feat(table)!: migrate to spectrum-tokens, add section header (#1842)([74cd1b4](https://github.com/adobe/spectrum-css/commit/74cd1b4)), closes[#1842](https://github.com/adobe/spectrum-css/issues/1842)

    	###
    	🛑 BREAKING CHANGES

    		*
    		migrates Table to use `@adobe/spectrum-tokens`

Additionally:

- build(table)!: core tokens package change and general setup

- feat(table): create custom properties - part 1

Create custom properties with tokens from the default "Table" and
"Selection" sections of the design.

- feat(table): use new tokens in styles

* Use new tokens in styles, first pass with regular/default
* Set custom properties for variants + sizes to simplify styles
* Remove repeated %drop-target placeholder selector style rule

- refactor(table): remove now unnecessary density variant styles

All of these styles are now replaced by the custom properties defined
at the top of the file for these variants. This greatly simplifies the
CSS. CSS was removed through side-by-side comparison to make sure no
unique styles were lost.

- refactor(table): move skin.css styles into index.css

Migrate skin.css styles into index.css so skin.css can be removed, as
part of the core tokens migration.

- refactor(table): replace undefined tokens

Replacing old tokens with new tokens, to remove almost all undefined
token warnings.

- build(table): wip - use beta version of table tokens

Temporarily use beta version of table tokens. Commit should be dropped
upon finalization / review.

- docs(table): improve documentation and add some examples

Improve documentation for Table. Added descriptions. Added new examples
for disabled multi-select.

- feat(table): add storybook controls for density and quiet

Add storybook controls for the density variants (compact, spacious),
and quiet.

- feat(table): handle various table options in storybook

Splits Table storybook template into the main table Template and a
TableRowItem template, to facilitate showing all of the various options
that appears in the docs examples and on the design.

Adds additional stories.
Adds additional controls.

- feat(table): finalize existing styles, add 'summary row'

Finalize base styles, including marked todo items that needed tokens
that have been added to the latest beta for table tokens.
Including some adjustments after testing.

Adds 'summary row' styles and simplifies some custom properties.

- feat(table): add section row header

Add new 'Section Row Header' feature. The new class can be applied to
table rows. Also adds example to docs.

- refactor(table): storybook refactor with TableRowItem

Refactored table storybook which has a separate TableRowItem and handles
additional component options.

Note: The 'repeat' directive had to be replaced with 'map' because it
was triggering an error "Storybook preview hooks can only be called
inside decorators and story functions" when using the Checkbox
component, due to use of updateArgs in Checkbox, and existing Storybook
issue # 12006.

- feat(table): additional style adjustments

- feat(checkbox): add is-indeterminate option to storybook

Add missing arg/control for is-indeterminate class on checkbox stories.

This displays the checkbox with a dash instead of a check and can
respresent some items being selected (used in the header row of Table).

- refactor(table): move sorting icon to left side of head text

Per design feedback; "the sort icon is always on the left and disclosure
icon on the right". The sort icon was previously on the right side of
the text.

- feat(table): add generated mods

Add list of moddable custom properties (auto generated via command).

- fix(table): fix spacing between checkbox and text

- feat(table): add storybook control for using div markup

Add control to Table storybook to use the div element markup instead of
table element markup, to match the example in the docs.

- feat(table): new collapsible variant and minor adjustments

* Adds new Collapsible variant.
* Puts heading row text into span and adds note to docs.
* Allows optional array of strings for cellContent in Storybook.
* Adds optional props to Button storybook: aria-controls & aria-expanded

- feat(table): add collapsible multi-select story

Add new story to Storybook for Table, that accounts for the collapsible
variant with multi-select checkboxes.

- fix(table): remove extra 2px of padding from section row header

Subtract border width to account for how edge tokens are used after
measuring the height of the section row header on the design (32px).

- feat(table): add thumbnails variant

Add variant that includes the thumbnail component within the table. Adds
to storybook and examples.

- feat(table): thumbnail variant and storybook refactor

* Add new thumbnails variant.
* Avoid duplication of divs and table markup in Storybook by including
  a conditional dynamic tag.
* Remove inline flex styles from div example markup.

- refactor(table)!: change div to table display and refactor dropzone

* Changes div-based table to use table display properties, to ensure
  that it displays the same as the table-based markup. The flex based
  styles incorporated from the example markup have issues with handling
  long content and overflow content. Rows could lose alignment from each
  other because each flow row is not in alignment with the other flex
  rows.

  The only difference from the previous div-based examples is that they
  no longer will show scrollbars when setting a fixed height on the
  parent. This may need to be handled by another wrapper in SWC.

  Using CSS grid is currently a no-go because of the lingering
  accessibility bugs associated with 'display: contents' (and subgrid
  still farther out from browser support).

* Refactors out unnecessary CSS after the previously noted change. No
  longer necessary to handle 'tbody' differently when it is a div.

* Refactors dropzone to fix problems with its overlay. Was able to
  remove the psuedo placeholder entirely. On the existing implementation
  of dropzone row, there is a bug when using the table element; this may
  not have been noticed as the example markup only shows the div version
  and this was not previously in Storybook.

  This also fixes the existing bug where table dropzone will not show
  the blue color across the entire table (scrolling down on existing
  example).

* Adds dropzone to Storybook. Control for table dropzone and row data +
  a new story for row dropzone.

- fix(table): update mods and dropzone outline offset

* Update generated moddable custom properties.
* Remove negative outline offset for dropzone to avoid child cell
  borders showing 1px on top of it.

- feat(table): high contrast mode styles

Styles for forced-colors mode (Windows High Contrast Mode). Includes use
of SelectedItem and SelectedItemText for showing the selected and
dropzone rows in blue. The forced-color-adjust: none was necessary to
add, otherwise the user agent was adding its own extra background color
to cell contents in addition to the cell background color.

Also reorganizes the passthrough mod for thumbnail.

- feat(table): high contrast and tab focus indicator updates

Updates to make sure focus indicator when tabbing through elements is
displaying correctly, normally and in high contrast mode.

- fix(table): top alignment of checkboxes

Align checkboxes top the top of the cell, so they are in alignment when
there is wrapping text in other cells. Previously vertical alignment was
mismatched with middle and vertical. Simplifies some of this overall
vertical alignment and checkbox spacing.

Also makes sure corners are rounded for row dropzone used on the first
and last rows.

- fix(table): move collapsible tier custom property

Move tier custom property to within the --collapsible class. Does not
need to be set for the default row class.

- style(table): remove some commented out styles

- refactor(table): remove size medium style rules

Remove sizeM style rules, as these are unnecessary because they are the
same as the default.

- fix(table): misc pr review fixes including rtl

Fixes

- RTL rotation for disclosure icon
- Remove unnecessary sizeM style rules (same as set by default)
- Move header colors out of sortable (dark theme fix)
- Typo fix for one of the borders
- Change one of the lingering margin properties to its logical property

* feat(table): unique mods for all variants

Technique to include unique custom property mods for the different
variants. By setting a value for the default mod and creating a new mod
when defining its value in the variant custom property definitions.

- fix(table): remove excess border on row

Removes border from table row, which appears to be unnecessary and
adding extra space. The table cells already have the border.

- chore(table): update generated mods list

- feat(table): add mod properties for cursor

Add custom property mods for the value of the 'cursor' property. Regular
rows may not always need to show a pointer.

- feat(table): new hover and active bg colors prototype

* Active color on rows
* Hover color on selected rows

WIP opacities for testing until token is created for these.

- feat(table): new tokens for drop zone variant

Include tokens for drop zone variant, newly included on the design.
It uses two of the same tokens that are used for the actual drop zone
component.

- feat(table): add interactive state tokens for icons

Add new interactive state tokens to icons (sorted, menu, disclosure).
For focus, hover, active, etc. Sorted icon color changes slightly in
some of these states.

Also updates generated mods.

- fix(table): additional high contrast colors update

* Adds hover and focus high contrast color styles.
* Changes high contrast colors on section header.
* Addresses high contrast icon colors for various states. Gives them the
  proper foreground given their background, and highlights the header
  icon on hover and focus.

- fix(table): checkboxCell spacing adjustment and freshen up branch

* Fixes spacing with checkboxCells, by switching to margin instead of
  padding. Spacing token is right from the edge of the checkbox, and
  otherwise there is too much extra space from the row's line-height
* Fixes "role" appearing in Storybook markup when it shouldn't.
* Updates to some of the latest devDependencies on main

- style(table): prettier updates with some manual fixes

Manually run prettier on non-css files, along with manual cleanup fixes
to storybook template as prettier originally left it quite messy and
hard to read.

- fix(table): subtract border size from cell top padding

Subtract size of border from top cell padding and from top margin of
checkbox cell, to match design spec. Also fixes min-height.

- fix(table): add min height for section header row

Adds missing token, and fixes section header row height now that the
min-height works properly.

- build(table): use tokens snapshot release with new table tokens

Use latest 'table' tag containing newly added tokens, to finalize core
tokens migration work.

- feat(table): use new tokens for colors and thumbnail spacing

Use newly released tokens to:

- Replace hardcoded values for hover and active background colors.
- Set thumbnail variant spacing, now with both density + size values.

* feat(table): finalize vertical alignment spacing with new tokens

Adjustments to make sure that cells maintain the same padding-block and
vertical alignment within the thumbnail variant. Cells without a
thumbnail in a row with thumbnails needed to align. Also makes
adjustments (a max() calc) around the fact that the disclosure icon can
sometimes be larger than the spacing defined for the thumbnail variant
density + sizing.

- build(table): update tokens version

New snapshot tokens version with one more missing token.

- fix(table): fix sizing token names with densities and whcm supports

* Fix name of tokens for large and extra large with densities
* Include @supports with fallback for usage of SelectedItem and
  SelectedItemText system colors, because they are fairly new.

- build(table): update tokens package snapshot

Updates tokens package with one fix for color opacity values.

- build(table): use tokens release including table tokens

Replace temporary table tokens snapshot with actual token release that
includes the table tokens (spectrum tokens 10.2.1 / tokens 12.13.0).

Component must use spectrum-css/tokens >=10.2.1

- build(table): update yarn.lock file after main merge

- chore(table): manual version increase for beta release

- feat(table): separate story for summary row instead of default

Remove summary row and selected row from the default story, and create
another story that contains those options. To better match with existing
default and not show optional elements on the default story.

- refactor(table): remove some unnecessary nesting of style rules

Move some style rules outside of .spectrum-Table-body that do not need
that extra specificity since the .spectrum-Table-row is always within
the body. To help facilitate rules translating properly to SWC.

The :not rule was also not necessary for quiet, as the quiet border
radius custom property is already set to zero for quiet (and we want to
allow this to be moddable).

- chore(table): manual version increase for beta release

- feat(table): scrollable wrapper with sticky header

Solution to allow for a scrollable table body while keeping alignment
of table regardless of the length of cell content. Added because current
flex or grid solutions can result in misaligned cells when longer
content is displayed in a cell; especially at smaller screen sizes or
when using more columns. The only current viable solutions involve
manual matching adjustment of widths via JavaScript or with subgrid
(which is not yet ready for production).

This solution:

1. Adds a wrapper element with scrolling overflow that can have a fixed
   height set.
2. Sets the table header to be position sticky.
3. Adds a border around the header and sets a background color on it.

This update also includes:

feat(table): tabindex update for multi-select examples

Allow focus on checkbox instead of both the checkbox and the row, in
examples and Storybook. Matches with behavior in SWC component. Removes
tabindex from rows in multi-select variants with the checkbox cells.

- style(checkbox): fix tabs indentation on additions for indeterminate

- fix(table): cleanup for scrollable and swc

* General cleanup for scrollable.
* Simplify some checkbox box styles.
* Avoid use of 'div' in selector to improve conversion to SWC.

- docs(table): use sentence case in docs

Update docs page to use all sentence case for titles, including for the
requested "Column title". Following the Adobe Grammar & Mechanics UX
writing style.

- docs(table): minor example docs updates

* Clarify some language.
* Make sure all (second) columns marked as sortable are focusable.

- fix(table): adjustments to quiet scrollable

* Finalize quiet scrollable.
* Use sentence case in Storybook as well.

- fix(table): fix existing bug with rounded corners in firefox

Fix existing bug in prod where the background color is showing behind
the rounded corners in Firefox. Due to longstanding Firefox bug 921341.
Issue is most noticeable in Large scale (you can see white appearing in
the corners, instead of transparent).

Adjusts background colors to only apply to the cells, and not rows, to
get around this bug. Keeps the CSS clean by using a local custom
property and changing its value.

- chore(table): manual version increase for beta release

- docs(table): a11y tabfocus adjustments for role table

Remove tabfocus attributes from table cells in static table examples, so
they are not focusable.

To agree with the following regarding aria role 'table': "The cells are
not focusable or selectable, though widgets within individual cells of
the table can be interactive.".

- docs(table): aria improvements for multi-select and selected rows

When rows can be selectable, it's suggested to use role grid instead of
role table, since role table cells shouldn't be focusable or selectable.
Adds aria-multiselectable attribute since multiple can be selected. This
matches markup similar to the React component. It also adds
aria-selected to the selected rows, as brought up in a SWC a11y GitHub
issue.

- fix(table): removal of extra sort icon space caused by whitespace

Whitespace between column title text and the sort icon was creating a
few pixels of extra space. Adjusted markup and migration notes to avoid
space between this markup. Added new class to allow for whitespace
within the text span, and for targetting this element future changes.

- refactor(table): change emphasized bg colors through root property

Change how the background color is changed for emphasized and
non-emphasized so that it adjusts via the custom property values on the
root element. This is to simplify how this variant is set up in SWC.

- fix(table): prevent checkbox cell from growing with full width table

Prevent the checkbox cell from growing larger than its contents when
using a table that is set to 100% width. Noticed when modifying the
Action bar Table example.

- docs(actionbar): update table example markup

Update Table example for Action bar. Action bar should not be nested
within the table markup. It throws off table display, is questionable
from a a11y perspective, and has been confirmed with design that it
should not appear on top.

Also adds missing Guidelines link and updates minimum version of table
to the current beta.

- fix(table): prevent checkbox cell from growing with full width table

- chore(table): beta release 5.0.0-beta.3

- docs(table): storybook - exclude checkbox from summary row

Adjust what markup is rendered in Storybook, to stop the checkbox from
showing in the summary row in the Collapsible mult-select example.

- fix(table): whcm - transparent no longer needed on table cell

Remove declaration for WHCM that sets the table cell background to
transparent. This is no longer needed as the background color is now
set on the cell instead of the row (previous fix for Firefix bug).

<a name="4.0.73"></a>
##4.0.73
🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.72...@spectrum-css/table@4.0.73)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.72"></a>
##4.0.72
🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.71...@spectrum-css/table@4.0.72)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.71"></a>
##4.0.71
🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.70...@spectrum-css/table@4.0.71)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="4.0.70"></a>
##4.0.70
🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.69...@spectrum-css/table@4.0.70)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.69"></a>
##4.0.69
🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.67...@spectrum-css/table@4.0.69)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.68"></a>
##4.0.68
🗓
2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.67...@spectrum-css/table@4.0.68)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.67"></a>
##4.0.67
🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.66...@spectrum-css/table@4.0.67)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.66"></a>
##4.0.66
🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.65...@spectrum-css/table@4.0.66)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.65"></a>
##4.0.65
🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.64...@spectrum-css/table@4.0.65)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.64"></a>
##4.0.64
🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.63...@spectrum-css/table@4.0.64)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.63"></a>
##4.0.63
🗓
2023-07-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.62...@spectrum-css/table@4.0.63)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.62"></a>
##4.0.62
🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.61...@spectrum-css/table@4.0.62)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.61"></a>
##4.0.61
🗓
2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.60...@spectrum-css/table@4.0.61)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.60"></a>
##4.0.60
🗓
2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.59...@spectrum-css/table@4.0.60)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.59"></a>
##4.0.59
🗓
2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.58...@spectrum-css/table@4.0.59)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.58"></a>
##4.0.58
🗓
2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.57...@spectrum-css/table@4.0.58)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.57"></a>
##4.0.57
🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.56...@spectrum-css/table@4.0.57)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.56"></a>
##4.0.56
🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.55...@spectrum-css/table@4.0.56)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.55"></a>
##4.0.55
🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.54...@spectrum-css/table@4.0.55)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="4.0.54"></a>
##4.0.54
🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.53...@spectrum-css/table@4.0.54)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.53"></a>
##4.0.53
🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.52...@spectrum-css/table@4.0.53)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.52"></a>

## 4.0.52

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.51...@spectrum-css/table@4.0.52)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.51"></a>

## 4.0.51

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.50...@spectrum-css/table@4.0.51)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.50"></a>

## 4.0.50

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.49...@spectrum-css/table@4.0.50)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.49"></a>

## 4.0.49

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.48...@spectrum-css/table@4.0.49)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.48"></a>

## 4.0.48

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.47...@spectrum-css/table@4.0.48)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.47"></a>

## 4.0.47

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.46...@spectrum-css/table@4.0.47)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.46"></a>

## 4.0.46

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.45...@spectrum-css/table@4.0.46)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.45"></a>

## 4.0.45

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.44...@spectrum-css/table@4.0.45)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.44"></a>

## 4.0.44

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.43...@spectrum-css/table@4.0.44)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.43"></a>

## 4.0.43

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.42...@spectrum-css/table@4.0.43)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.42"></a>

## 4.0.42

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.41...@spectrum-css/table@4.0.42)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.41"></a>

## 4.0.41

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.40...@spectrum-css/table@4.0.41)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.40"></a>

## 4.0.40

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.38...@spectrum-css/table@4.0.40)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.39"></a>

## 4.0.39

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.38...@spectrum-css/table@4.0.39)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.38"></a>

## 4.0.38

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.37...@spectrum-css/table@4.0.38)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.37"></a>

## 4.0.37

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.36...@spectrum-css/table@4.0.37)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.36"></a>

## 4.0.36

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.35...@spectrum-css/table@4.0.36)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.35"></a>

## 4.0.35

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.34...@spectrum-css/table@4.0.35)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.34"></a>

## 4.0.34

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.32...@spectrum-css/table@4.0.34)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.33"></a>

## 4.0.33

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.32...@spectrum-css/table@4.0.33)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.32"></a>

## 4.0.32

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.31...@spectrum-css/table@4.0.32)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.31"></a>

## 4.0.31

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.30...@spectrum-css/table@4.0.31)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.30"></a>

## 4.0.30

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.29...@spectrum-css/table@4.0.30)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.29"></a>

## 4.0.29

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.28...@spectrum-css/table@4.0.29)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.28"></a>

## 4.0.28

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.27...@spectrum-css/table@4.0.28)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.27"></a>

## 4.0.27

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.26...@spectrum-css/table@4.0.27)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.26"></a>

## 4.0.26

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.25...@spectrum-css/table@4.0.26)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.25"></a>

## 4.0.25

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.24...@spectrum-css/table@4.0.25)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.24"></a>

## 4.0.24

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.23...@spectrum-css/table@4.0.24)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.23"></a>

## 4.0.23

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.21...@spectrum-css/table@4.0.23)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.22"></a>

## 4.0.22

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.21...@spectrum-css/table@4.0.22)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.21"></a>

## 4.0.21

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.20...@spectrum-css/table@4.0.21)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.20"></a>

## 4.0.20

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.19...@spectrum-css/table@4.0.20)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.19"></a>

## 4.0.19

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.18...@spectrum-css/table@4.0.19)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.18"></a>

## 4.0.18

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.17...@spectrum-css/table@4.0.18)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.17"></a>

## 4.0.17

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.16...@spectrum-css/table@4.0.17)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.16"></a>

## 4.0.16

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.15...@spectrum-css/table@4.0.16)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.15"></a>

## 4.0.15

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.14...@spectrum-css/table@4.0.15)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.14"></a>

## 4.0.14

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.13...@spectrum-css/table@4.0.14)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.13"></a>

## 4.0.13

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.12...@spectrum-css/table@4.0.13)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.12"></a>

## 4.0.12

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.11...@spectrum-css/table@4.0.12)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.11"></a>

## 4.0.11

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.10...@spectrum-css/table@4.0.11)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.10"></a>

## 4.0.10

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.9...@spectrum-css/table@4.0.10)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.9"></a>

## 4.0.9

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.8...@spectrum-css/table@4.0.9)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.8"></a>

## 4.0.8

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.6...@spectrum-css/table@4.0.8)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

<a name="4.0.7"></a>

## 4.0.7

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.7-beta.0...@spectrum-css/table@4.0.7)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.7-beta.0"></a>

## 4.0.7-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.6...@spectrum-css/table@4.0.7-beta.0)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.6"></a>

## 4.0.6

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.5...@spectrum-css/table@4.0.6)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.5"></a>

## 4.0.5

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.4...@spectrum-css/table@4.0.5)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.4"></a>

## 4.0.4

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.3...@spectrum-css/table@4.0.4)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.3"></a>

## 4.0.3

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.2...@spectrum-css/table@4.0.3)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.2"></a>

## 4.0.2

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.1...@spectrum-css/table@4.0.2)

**Note:** Version bump only for package @spectrum-css/table

<a name="4.0.1"></a>

## 4.0.1

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.0...@spectrum-css/table@4.0.1)

**Note:** Version bump only for package @spectrum-css/table

<a name="3.1.0"></a>

# 3.1.0

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@3.0.3-alpha.3...@spectrum-css/table@3.1.0)

### ✨ Features

- add compact & spacious cell selectors ([b97b222](https://github.com/adobe/spectrum-css/commit/b97b222))

### 🐛 Bug fixes

- update vars & add compact, spacious examples ([c50aaf2](https://github.com/adobe/spectrum-css/commit/c50aaf2))
- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="3.0.3-alpha.3"></a>

## 3.0.3-alpha.3

🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@3.0.3-alpha.2...@spectrum-css/table@3.0.3-alpha.3)

**Note:** Version bump only for package @spectrum-css/table

<a name="3.0.3-alpha.2"></a>

## 3.0.3-alpha.2

🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@3.0.3-alpha.1...@spectrum-css/table@3.0.3-alpha.2)

### 🐛 Bug fixes

- use renamed aliases ([91f6c04](https://github.com/adobe/spectrum-css/commit/91f6c04))

<a name="3.0.3-alpha.1"></a>

## 3.0.3-alpha.1

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@3.0.3-alpha.0...@spectrum-css/table@3.0.3-alpha.1)

**Note:** Version bump only for package @spectrum-css/table

<a name="3.0.3-alpha.0"></a>

## 3.0.3-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@3.0.2...@spectrum-css/table@3.0.3-alpha.0)

**Note:** Version bump only for package @spectrum-css/table

<a name="3.0.2"></a>

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@3.0.1...@spectrum-css/table@3.0.2)

**Note:** Version bump only for package @spectrum-css/table

<a name="3.0.1"></a>

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@3.0.0...@spectrum-css/table@3.0.1)

### 🐛 Bug fixes

- table row dropzone shows extra blue, fix [#225](https://github.com/adobe/spectrum-css/issues/225) ([421985c](https://github.com/adobe/spectrum-css/commit/421985c))

<a name="3.0.0"></a>

# 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@3.0.0-beta.6...@spectrum-css/table@3.0.0)

### ✨ Features

- added t-shirt sizes to checkbox ([f4c59bd](https://github.com/adobe/spectrum-css/commit/f4c59bd)), closes [#951](https://github.com/adobe/spectrum-css/issues/951)

### 🛑 BREAKING CHANGES

- a t-shirt size class is now required for checkbox.

<a name="3.0.0-beta.6"></a>

# 3.0.0-beta.6

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@3.0.0-beta.5...@spectrum-css/table@3.0.0-beta.6)

### 🐛 Bug fixes

- update main, resolved conflicts ([d7880a2](https://github.com/adobe/spectrum-css/commit/d7880a2))

<a name="3.0.0-beta.5"></a>

# 3.0.0-beta.5

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@3.0.0-beta.4...@spectrum-css/table@3.0.0-beta.5)

**Note:** Version bump only for package @spectrum-css/table

<a name="3.0.0-beta.4"></a>

# 3.0.0-beta.4

🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@3.0.0-beta.3...@spectrum-css/table@3.0.0-beta.4)

### 🐛 Bug fixes

- replaced deprecated tokens from table ([a472666](https://github.com/adobe/spectrum-css/commit/a472666))

<a name="3.0.0-beta.3"></a>

# 3.0.0-beta.3

🗓 2020-06-19 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@3.0.0-beta.2...@spectrum-css/table@3.0.0-beta.3)

**Note:** Version bump only for package @spectrum-css/table

<a name="3.0.0-beta.2"></a>

# 3.0.0-beta.2

🗓 2020-05-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@3.0.0-beta.1...@spectrum-css/table@3.0.0-beta.2)

**Note:** Version bump only for package @spectrum-css/table

<a name="3.0.0-beta.1"></a>

# 3.0.0-beta.1

🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@3.0.0-beta.0...@spectrum-css/table@3.0.0-beta.1)

**Note:** Version bump only for package @spectrum-css/table

<a name="3.0.0-beta.0"></a>

# 3.0.0-beta.0

🗓 2020-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@2.0.6...@spectrum-css/table@3.0.0-beta.0)

### ✨ Features

- make Table support RTL ([b41132e](https://github.com/adobe/spectrum-css/commit/b41132e))

<a name="2.0.6"></a>

## 2.0.6

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@2.0.5...@spectrum-css/table@2.0.6)

**Note:** Version bump only for package @spectrum-css/table

<a name="2.0.5"></a>

## 2.0.5

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@2.0.4...@spectrum-css/table@2.0.5)

**Note:** Version bump only for package @spectrum-css/table

<a name="2.0.4"></a>

## 2.0.4

🗓 2020-01-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@2.0.3...@spectrum-css/table@2.0.4)

**Note:** Version bump only for package @spectrum-css/table

<a name="2.0.3"></a>

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@2.0.2...@spectrum-css/table@2.0.3)

**Note:** Version bump only for package @spectrum-css/table

<a name="2.0.2"></a>

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@2.0.1...@spectrum-css/table@2.0.2)

**Note:** Version bump only for package @spectrum-css/table

<a name="2.0.1"></a>

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@2.0.0...@spectrum-css/table@2.0.1)

**Note:** Version bump only for package @spectrum-css/table

<a name="2.0.0"></a>

# 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
