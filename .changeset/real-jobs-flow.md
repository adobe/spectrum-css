---
"@spectrum-css/table": minor
---

### S2 table migration (continued)

#### Net-new features

- New sparkline SVGs available for cell content

#### Description of other S2 table work

A new `.spectrum-Table-headCell--alignEnd` class was created to correspond to tables that may have end-aligned numerical data so the head cell follows the text alignment correctly.

Semantically, if a table should enable column sorting, the content of a column's head cell should actually be a button, since it is triggering an action. If the column header cell could trigger a menu, the content of that cell should also be a button. New markup has been included to improve the semantic design of the content of header cells, utilizing button components to signify an action can be triggered, or a menu can be triggered.

In Storybook, new stories have been added to the docs page and the testing grid for Chromatic. These stories include `WithMenuButton`, `WithChartContent`. Documentation has been added for each of these stories, as well as expanded in other stories.

#### Mods

##### Renamed Modifiers

| Old Modifier                   | New modifier                              |
| ------------------------------ | ----------------------------------------- |
| `--mod-table-row-active-color` | `--mod-table-row-background-color-active` |

##### New Modifiers

- `--mod-table-header-font-style`
- `--mod-table-header-icons-color-active`
- `--mod-table-header-icons-color-default`
- `--mod-table-header-icons-color-hover`
- `--mod-table-header-icons-color-key-focus`
- `--mod-table-row-font-family`
- `--mod-table-row-font-style`
- `--mod-table-row-text-color-active`
- `--mod-table-row-text-color-hover`

##### Removed Modifiers

- `--mod-table-header-background-color-quiet`
- `--mod-table-row-background-color-quiet`
