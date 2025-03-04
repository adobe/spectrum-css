# Change log

## 8.1.0

### Minor Changes

- [`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee) Thanks [@castastrophe](https://github.com/castastrophe)!

## New feature

Minified and gzipped outputs available for all compiled CSS assets.

### Patch Changes

- [#3541](https://github.com/adobe/spectrum-css/pull/3541) [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d) Thanks [@castastrophe](https://github.com/castastrophe)!

Dependency alignment across the project.

- Updated dependencies [[`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee), [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d)]:
  - @spectrum-css/button@15.0.0
  - @spectrum-css/checkbox@11.0.0
  - @spectrum-css/icon@9.1.0
  - @spectrum-css/thumbnail@9.0.0
  - @spectrum-css/tokens@16.0.1

## 8.0.1

### Patch Changes

- [#3534](https://github.com/adobe/spectrum-css/pull/3534) [`68e0057`](https://github.com/adobe/spectrum-css/commit/68e00577156cc32b21bfa768dbd2d35d73563b4c) Thanks [@castastrophe](https://github.com/castastrophe)!

Fixes a bug in the content of the `dist/index-theme.css` file.

Expected `index-theme.css` to include the component selectors with component-level custom properties mapped to the `--system` prefixed ones in order to allow a component to support various contexts.

Expected output example for the index-theme.css:

```css
.spectrum-ActionButton {
  --spectrum-actionbutton-background-color-default: var(--system-action-button-background-color-default);
  --spectrum-actionbutton-background-color-hover: var(--system-action-button-background-color-hover);
```

- Updated dependencies [[`68e0057`](https://github.com/adobe/spectrum-css/commit/68e00577156cc32b21bfa768dbd2d35d73563b4c)]:
  - @spectrum-css/button@14.0.1
  - @spectrum-css/checkbox@10.0.1
  - @spectrum-css/icon@9.0.1
  - @spectrum-css/thumbnail@8.0.1

## 8.0.0

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6) Thanks [@pfulton](https://github.com/pfulton)!

### 🛑 Breaking change

This major update creates a bridge between the Spectrum 1 (S1) and Spectrum 2 (S2) designs, dubbed "Spectrum 2 Foundations". These do _NOT_ reflect a fully migrated S2 component. This approach allows consumers to swap the appearance of their components between S1, Express, and S2 by leveraging a "system" layer that remaps the necessary component-level tokens to the appropriate token dataset.

For these components to appear S2, you must load the assets with the `@spectrum-css/tokens` at `v16` or higher.

For S1 or Express, load assets with the `@spectrum-css/tokens` at `v14.x` or `v15.x`.

If you are looking to implement a fully S2 design, please explore the `next` tag releases instead of using this foundations release. **This release is used in Spectrum Web Components 1.x**.

### Deprecations

The `metadata` folder containing the `mods.md` and `metadata.json` assets has been removed from source. To find information about the components including what selectors, modifiers, and passthroughs are used, please see the `dist/metadata.json` asset shipped with every component containing CSS.

The `index-vars.css` asset has been removed in this release as it was previously deprecated and is no longer maintained. Please use the `index.css` or `index-base.css`

### File usage

If you are rendering components and need **only** the S2 Foundations styles, you can make use of the `index.css` asset which contains all the base styles plus the system mappings for S2 Foundations.

If you are using this version to publish **only** an S1 or Express component, you can use the `index-base.css` plus the desired `themes/(spectrum|express).css` file.

To render a component that can be easily swapped between the S2 Foundations, S1, or Express contexts, load `index-base.css` with the `index-theme.css` file and leverage the appropriate context classes (`.spectrum--legacy` for S1 and `.spectrum--express` for Express).

### Patch Changes

- Updated dependencies [[`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6), [`3d08cea`](https://github.com/adobe/spectrum-css/commit/3d08cea0f590c8c2de7252677a6b81b8cc206b9a), [`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6)]:
  - @spectrum-css/tokens@16.0.0
  - @spectrum-css/thumbnail@8.0.0
  - @spectrum-css/checkbox@10.0.0
  - @spectrum-css/button@14.0.0
  - @spectrum-css/icon@9.0.0

## 7.0.1

### Patch Changes

- [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)!

- Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/thumbnail@7.0.1
  - @spectrum-css/checkbox@9.3.1
  - @spectrum-css/button@13.6.1
  - @spectrum-css/icon@8.0.1

## 7.0.0

### Major Changes

- [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove empty theme references to reduce complexity for components that don't need to define any mappings. This involves removing the source `themes` directories with the empty `spectrum.css` and `express.com` files as well as removing the following empty or unnecessary exports:

  - `index-base.css`
  - `index-theme.css`
  - `themes/spectrum.css`
  - `themes/express.css`

### Minor Changes

- [#3359](https://github.com/adobe/spectrum-css/pull/3359) [`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b) Thanks [@cdransf](https://github.com/cdransf)!

- This resolves our remaining stylelint issues around undefined tokens, rule order, unused values and color syntax.

  - Updates invalid color syntax from `rgba(N, N, N, N)` to `rgba(N N N / N)`.
  - In cases of duplicate properties, preserves the property that would be applied given current code structure.
  - Updates misnamed tokens to use valid tokens (`table/index.css`).

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/checkbox@9.3.0
  - @spectrum-css/button@13.6.0
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/thumbnail@7.0.0
  - @spectrum-css/icon@8.0.0

## 6.2.0

### Minor Changes

- [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/thumbnail@6.3.0
  - @spectrum-css/checkbox@9.2.0
  - @spectrum-css/button@13.5.0
  - @spectrum-css/icon@7.2.0

## 6.1.4

### Patch Changes

- [#3305](https://github.com/adobe/spectrum-css/pull/3305) [`092aac5`](https://github.com/adobe/spectrum-css/commit/092aac56953f4c02cd5227e3f61c6cb0b2b4e46a) Thanks [@cdransf](https://github.com/cdransf)!

- Move mod declaration to satisfy lint rules. Rename table custom properties to align with lint rules.

## 6.1.3

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)!

- Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/thumbnail@6.1.4
  - @spectrum-css/checkbox@9.1.3
  - @spectrum-css/button@13.1.3
  - @spectrum-css/icon@7.1.4

## 6.1.2

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)!

- Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/thumbnail@6.1.3
  - @spectrum-css/checkbox@9.1.2
  - @spectrum-css/button@13.1.2
  - @spectrum-css/icon@7.1.3

## 6.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)!

- Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/thumbnail@6.1.2
  - @spectrum-css/checkbox@9.1.1
  - @spectrum-css/button@13.1.1
  - @spectrum-css/icon@7.1.1

## 6.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/button@>=13
  - @spectrum-css/checkbox@>=9
  - @spectrum-css/icon@>=7
  - @spectrum-css/thumbnail@>=6
  - @spectrum-css/tokens@>=14

## 6.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.2.5...@spectrum-css/table@6.0.0)

- feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGES

- Removes component-builder & component-builder-simple for script leveraging postcss
- Imports added to index.css and themes/express.css

## 5.2.5

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.2.4...@spectrum-css/table@5.2.5)

**Note:** Version bump only for package @spectrum-css/table

## 5.2.4

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.2.3...@spectrum-css/table@5.2.4)

**Note:** Version bump only for package @spectrum-css/table

## 5.2.3

🗓 2024-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.2.2...@spectrum-css/table@5.2.3)

**Note:** Version bump only for package @spectrum-css/table

## 5.2.2

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.2.1...@spectrum-css/table@5.2.2)

**Note:** Version bump only for package @spectrum-css/table

## 5.2.1

🗓 2024-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.2.0...@spectrum-css/table@5.2.1)

**Note:** Version bump only for package @spectrum-css/table

## 5.2.0

🗓 2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.1.1...@spectrum-css/table@5.2.0)

**Note:** Version bump only for package @spectrum-css/table

## 5.1.1

🗓 2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.1.0...@spectrum-css/table@5.1.1)

### 🐛 Bug fixes

\_deprecate logical transform plugin ([#2437](https://github.com/adobe/spectrum-css/issues/2437))([ff5dda6](https://github.com/adobe/spectrum-css/commit/ff5dda6))

- **table:**replace leftover global color token ([#2415](https://github.com/adobe/spectrum-css/issues/2415))([35ccf25](https://github.com/adobe/spectrum-css/commit/35ccf25))

## 5.1.0

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.0.11...@spectrum-css/table@5.1.0)

### ✨ Features

- remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

## 5.0.11

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.0.10...@spectrum-css/table@5.0.11)

**Note:** Version bump only for package @spectrum-css/table

## 5.0.10

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.0.9...@spectrum-css/table@5.0.10)

**Note:** Version bump only for package @spectrum-css/table

## 5.0.9

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.0.7...@spectrum-css/table@5.0.9)

**Note:** Version bump only for package @spectrum-css/table

## 5.0.8

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.0.7...@spectrum-css/table@5.0.8)

**Note:** Version bump only for package @spectrum-css/table

## 5.0.7

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.0.6...@spectrum-css/table@5.0.7)

**Note:** Version bump only for package @spectrum-css/table

## 5.0.6

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.0.5...@spectrum-css/table@5.0.6)

**Note:** Version bump only for package @spectrum-css/table

## 5.0.5

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.0.4...@spectrum-css/table@5.0.5)

**Note:** Version bump only for package @spectrum-css/table

## 5.0.4

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.0.3...@spectrum-css/table@5.0.4)

**Note:** Version bump only for package @spectrum-css/table

## 5.0.3

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.0.2...@spectrum-css/table@5.0.3)

**Note:** Version bump only for package @spectrum-css/table

## 5.0.2

🗓 2023• 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.0.1...@spectrum-css/table@5.0.2)

**Note:** Version bump only for package @spectrum-css/table

## 5.0.1

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@5.0.0...@spectrum-css/table@5.0.1)

**Note:** Version bump only for package @spectrum-css/table

## 5.0.0

🗓 2023-09-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.73...@spectrum-css/table@5.0.0)

### Migration Guide

#### Sorted icon moved to left side of text

The sorted icon was previously on the right side of the text, but has been moved to the left in the markup. If used on the right side of the text, the spacing between icon and text will be incorrect.

#### Remove whitespace between column title text and sort icon(s)

The column header, when the sort icon or header menu icon is displayed, remove any white space in the HTML markup between the icon and the column title. This ensures that no extra space is created. Also, the column title text is now wrapped in a `<span class="spectrum-Table-columnTitle">` element when the column is sortable.

### 🛑 BREAKING CHANGES

- migrates Table to use `@adobe/spectrum-tokens`

Additionally:

- feat(table): create custom properties - part 1

Create custom properties with tokens from the default "Table" and
"Selection" sections of the design.

- feat(table): use new tokens in styles

- Use new tokens in styles, first pass with regular/default
- Set custom properties for variants + sizes to simplify styles
- Remove repeated %drop-target placeholder selector style rule

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

- Adds new Collapsible variant.
- Puts heading row text into span and adds note to docs.
- Allows optional array of strings for cellContent in Storybook.
- Adds optional props to Button storybook: aria-controls & aria-expanded

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

- Add new thumbnails variant.
- Avoid duplication of divs and table markup in Storybook by including
  a conditional dynamic tag.
- Remove inline flex styles from div example markup.

- refactor(table)!: change div to table display and refactor dropzone

- Changes div-based table to use table display properties, to ensure
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

- Refactors out unnecessary CSS after the previously noted change. No
  longer necessary to handle 'tbody' differently when it is a div.

- Refactors dropzone to fix problems with its overlay. Was able to
  remove the psuedo placeholder entirely. On the existing implementation
  of dropzone row, there is a bug when using the table element; this may
  not have been noticed as the example markup only shows the div version
  and this was not previously in Storybook.

  This also fixes the existing bug where table dropzone will not show
  the blue color across the entire table (scrolling down on existing
  example).

- Adds dropzone to Storybook. Control for table dropzone and row data +
  a new story for row dropzone.

- fix(table): update mods and dropzone outline offset

- Update generated moddable custom properties.
- Remove negative outline offset for dropzone to avoid child cell
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

- feat(table): unique mods for all variants

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

- Active color on rows
- Hover color on selected rows

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

- Adds hover and focus high contrast color styles.
- Changes high contrast colors on section header.
- Addresses high contrast icon colors for various states. Gives them the
  proper foreground given their background, and highlights the header
  icon on hover and focus.

- fix(table): checkboxCell spacing adjustment and freshen up branch

- Fixes spacing with checkboxCells, by switching to margin instead of
  padding. Spacing token is right from the edge of the checkbox, and
  otherwise there is too much extra space from the row's line-height
- Fixes "role" appearing in Storybook markup when it shouldn't.
- Updates to some of the latest devDependencies on main

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

- feat(table): finalize vertical alignment spacing with new tokens

Adjustments to make sure that cells maintain the same padding-block and
vertical alignment within the thumbnail variant. Cells without a
thumbnail in a row with thumbnails needed to align. Also makes
adjustments (a max() calc) around the fact that the disclosure icon can
sometimes be larger than the spacing defined for the thumbnail variant
density + sizing.

- build(table): update tokens version

New snapshot tokens version with one more missing token.

- fix(table): fix sizing token names with densities and whcm supports

- Fix name of tokens for large and extra large with densities
- Include @supports with fallback for usage of SelectedItem and
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

- General cleanup for scrollable.
- Simplify some checkbox box styles.
- Avoid use of 'div' in selector to improve conversion to SWC.

- docs(table): use sentence case in docs

Update docs page to use all sentence case for titles, including for the
requested "Column title". Following the Adobe Grammar & Mechanics UX
writing style.

- docs(table): minor example docs updates

- Clarify some language.
- Make sure all (second) columns marked as sortable are focusable.

- fix(table): adjustments to quiet scrollable

- Finalize quiet scrollable.
- Use sentence case in Storybook as well.

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

## 4.0.73

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.72...@spectrum-css/table@4.0.73)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.72

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.71...@spectrum-css/table@4.0.72)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.71

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.70...@spectrum-css/table@4.0.71)

### 🔙 Reverts

- gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

## 4.0.70

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.69...@spectrum-css/table@4.0.70)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.69

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.67...@spectrum-css/table@4.0.69)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.68

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.67...@spectrum-css/table@4.0.68)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.67

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.66...@spectrum-css/table@4.0.67)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.66

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.65...@spectrum-css/table@4.0.66)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.65

🗓 2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.64...@spectrum-css/table@4.0.65)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.64

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.63...@spectrum-css/table@4.0.64)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.63

🗓 2023-07-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.62...@spectrum-css/table@4.0.63)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.62

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.61...@spectrum-css/table@4.0.62)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.61

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.60...@spectrum-css/table@4.0.61)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.60

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.59...@spectrum-css/table@4.0.60)

- Version bump only for package @spectrum-css/table

## 4.0.59

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.58...@spectrum-css/table@4.0.59)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.58

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.57...@spectrum-css/table@4.0.58)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.57

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.56...@spectrum-css/table@4.0.57)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.56

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.55...@spectrum-css/table@4.0.56)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.55

🗓 2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.54...@spectrum-css/table@4.0.55)

### 🐛 Bug fixes

- restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

## 4.0.54

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.53...@spectrum-css/table@4.0.54)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.53

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.52...@spectrum-css/table@4.0.53)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.52

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.51...@spectrum-css/table@4.0.52)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.51

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.50...@spectrum-css/table@4.0.51)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.50

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.49...@spectrum-css/table@4.0.50)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.49

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.48...@spectrum-css/table@4.0.49)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.48

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.47...@spectrum-css/table@4.0.48)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.47

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.46...@spectrum-css/table@4.0.47)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.46

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.45...@spectrum-css/table@4.0.46)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.45

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.44...@spectrum-css/table@4.0.45)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.44

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.43...@spectrum-css/table@4.0.44)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.43

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.42...@spectrum-css/table@4.0.43)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.42

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.41...@spectrum-css/table@4.0.42)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.41

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.40...@spectrum-css/table@4.0.41)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.40

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.38...@spectrum-css/table@4.0.40)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.39

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.38...@spectrum-css/table@4.0.39)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.38

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.37...@spectrum-css/table@4.0.38)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.37

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.36...@spectrum-css/table@4.0.37)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.36

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.35...@spectrum-css/table@4.0.36)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.35

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.34...@spectrum-css/table@4.0.35)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.34

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.32...@spectrum-css/table@4.0.34)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.33

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.32...@spectrum-css/table@4.0.33)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.32

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.31...@spectrum-css/table@4.0.32)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.31

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.30...@spectrum-css/table@4.0.31)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.30

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.29...@spectrum-css/table@4.0.30)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.29

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.28...@spectrum-css/table@4.0.29)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.28

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.27...@spectrum-css/table@4.0.28)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.27

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.26...@spectrum-css/table@4.0.27)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.26

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.25...@spectrum-css/table@4.0.26)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.25

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.24...@spectrum-css/table@4.0.25)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.24

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.23...@spectrum-css/table@4.0.24)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.23

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.21...@spectrum-css/table@4.0.23)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.22

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.21...@spectrum-css/table@4.0.22)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.21

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.20...@spectrum-css/table@4.0.21)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.20

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.19...@spectrum-css/table@4.0.20)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.19

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.18...@spectrum-css/table@4.0.19)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.18

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.17...@spectrum-css/table@4.0.18)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.17

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.16...@spectrum-css/table@4.0.17)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.16

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.15...@spectrum-css/table@4.0.16)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.15

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.14...@spectrum-css/table@4.0.15)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.14

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.13...@spectrum-css/table@4.0.14)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.13

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.12...@spectrum-css/table@4.0.13)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.12

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.11...@spectrum-css/table@4.0.12)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.11

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.10...@spectrum-css/table@4.0.11)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.10

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.9...@spectrum-css/table@4.0.10)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.9

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.8...@spectrum-css/table@4.0.9)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.8

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.6...@spectrum-css/table@4.0.8)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

## 4.0.7

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.6...@spectrum-css/table@4.0.7)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.6

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.5...@spectrum-css/table@4.0.6)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.5

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.4...@spectrum-css/table@4.0.5)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.4

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.3...@spectrum-css/table@4.0.4)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.3

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.2...@spectrum-css/table@4.0.3)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.2

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.1...@spectrum-css/table@4.0.2)

**Note:** Version bump only for package @spectrum-css/table

## 4.0.1

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@4.0.0...@spectrum-css/table@4.0.1)

**Note:** Version bump only for package @spectrum-css/table

## 3.1.0

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@3.0.2...@spectrum-css/table@3.1.0)

### ✨ Features

- add compact & spacious cell selectors ([b97b222](https://github.com/adobe/spectrum-css/commit/b97b222))

### 🐛 Bug fixes

- update vars & add compact, spacious examples ([c50aaf2](https://github.com/adobe/spectrum-css/commit/c50aaf2))
- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@3.0.1...@spectrum-css/table@3.0.2)

**Note:** Version bump only for package @spectrum-css/table

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@3.0.0...@spectrum-css/table@3.0.1)

### 🐛 Bug fixes

- table row dropzone shows extra blue, fix [#225](https://github.com/adobe/spectrum-css/issues/225) ([421985c](https://github.com/adobe/spectrum-css/commit/421985c))

## 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@3.0.0-beta.6...@spectrum-css/table@3.0.0)

### ✨ Features

- added t-shirt sizes to checkbox ([f4c59bd](https://github.com/adobe/spectrum-css/commit/f4c59bd)), closes [#951](https://github.com/adobe/spectrum-css/issues/951)

### 🛑 BREAKING CHANGES

- a t-shirt size class is now required for checkbox.

## 2.0.6

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@2.0.5...@spectrum-css/table@2.0.6)

**Note:** Version bump only for package @spectrum-css/table

## 2.0.5

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@2.0.4...@spectrum-css/table@2.0.5)

**Note:** Version bump only for package @spectrum-css/table

## 2.0.4

🗓 2020-01-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@2.0.3...@spectrum-css/table@2.0.4)

**Note:** Version bump only for package @spectrum-css/table

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@2.0.2...@spectrum-css/table@2.0.3)

**Note:** Version bump only for package @spectrum-css/table

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@2.0.1...@spectrum-css/table@2.0.2)

**Note:** Version bump only for package @spectrum-css/table

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/table@2.0.0...@spectrum-css/table@2.0.1)

**Note:** Version bump only for package @spectrum-css/table

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
