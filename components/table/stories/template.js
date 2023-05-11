import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { when } from "lit-html/directives/when.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Checkbox } from '@spectrum-css/checkbox/stories/template.js';
import { Template as Button } from '@spectrum-css/button/stories/template.js';
import { Template as Thumbnail } from '@spectrum-css/thumbnail/stories/template.js';

import "../index.css";

export const TableRowItem = ({
  rootClass = "spectrum-Table",
  cellContent = "Row Item Text",
  showCheckbox = false,
  isSelected = false,
  isSummaryRow = false,
  isSectionHeader = false,
  tableIsEmphasized = true,
  isCollapsible = false,
  isExpanded = false,
  isHidden = false,
  tier,
  isLastTier = false,
  useDivs = false,
  showThumbnails = false,
  ariaControls,
  customClasses = [],
  size = "m",
  id
}) => {
  // Content for a table cell. 
  // Passed in cellContent arg can be string that will be repeated, or an array. 
  const getCellContent = (col) => {
    const content = Array.isArray(cellContent) ? cellContent[col] : cellContent;
    if (showThumbnails) {
      return html`
        ${Thumbnail({ size: "xs" })}
        <span>${content}</span>
      `;
    } else {
      return content;
    }
  }

  if (!useDivs){
    // <TABLE> Markup
    return html`
      <tr
        class=${classMap({
          [`${rootClass}-row`]: true,
          [`${rootClass}-row--summary`]: isSummaryRow,
          [`${rootClass}-row--sectionHeader`]: isSectionHeader,
          [`${rootClass}-row--collapsible`]: isCollapsible,
          ['is-selected']: isSelected,
          ['is-expanded']: isExpanded,
          ['is-last-tier']: isLastTier,
          ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {})
        })}
        id=${ifDefined(id)}
        data-tier=${ifDefined(tier)}
        ?hidden=${isHidden}
      >
        ${when(showCheckbox, () => html`
          <td class="spectrum-Table-cell spectrum-Table-checkboxCell">
            ${Checkbox({
              size,
              isEmphasized: tableIsEmphasized,
              isChecked: isSelected,
              customClasses: [`${rootClass}-checkbox`],
            })}
          </td>`
        )}
        ${isCollapsible 
          ? html`<td class="${rootClass}-cell ${rootClass}-cell--collapsible" tabindex="0">
                  <div class="${rootClass}-collapseInner">
                    ${when(!isLastTier, () => Button({
                        size,
                        iconName: "ChevronRight100",
                        hideLabel: true,
                        customClasses: [`${rootClass}-disclosureIcon`],
                        ariaExpanded: isExpanded,
                        ariaControls,
                      })
                    )}
                    <div class="${rootClass}-cellContent">${getCellContent(0)}</div>
                  </div>
                 </td>`
          : html`<td class="${rootClass}-cell" tabindex="0" colspan=${ifDefined(isSectionHeader ? '3' : undefined)}>${getCellContent(0)}</td>`
        }
        ${when(!isSectionHeader, () => html`
          <td class="${rootClass}-cell" tabindex="0">${getCellContent(1)}</td>
          <td class="${rootClass}-cell" tabindex="0">${getCellContent(2)}</td>`
        )}
      </tr>
    `;
  } else {
    // <DIV> Markup
    return html`
      <div
        role="row"
        class=${classMap({
          [`${rootClass}-row`]: true,
          [`${rootClass}-row--summary`]: isSummaryRow,
          [`${rootClass}-row--sectionHeader`]: isSectionHeader,
          [`is-selected`]: isSelected,
          ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {})
        })}
      >
        ${when(showCheckbox, () => html`
          <div class="spectrum-Table-cell spectrum-Table-checkboxCell" role="gridcell">
            ${Checkbox({
              size,
              isEmphasized: tableIsEmphasized,
              isChecked: isSelected,
              customClasses: [`${rootClass}-checkbox`],
            })}
          </div>`
        )}
        <div class="${rootClass}-cell" role="gridcell" tabindex="0" colspan=${ifDefined(isSectionHeader ? '3' : undefined)}>${cellContent}</div>
        ${when(!isSectionHeader, () => html`
          <div class="${rootClass}-cell" role="gridcell" tabindex="0">${cellContent}</div>
          <div class="${rootClass}-cell" role="gridcell" tabindex="0">${cellContent}</div>`
        )}
      </div>
    `;
  }
}

export const Template = ({
  rootClass = "spectrum-Table",
  size = "m",
  density = "standard",
  isQuiet = false,
  isEmphasized = true,
  useDivs = false,
  showThumbnails = false,
  rowItems = [],
  customClasses = [],
  id,
  ...globals
}) => {
  if (!rowItems || !rowItems.length) return html``;

  const { express } = globals;
  try {
    if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
    else import(/* webpackPrefetch: true */ "../themes/express.css");
  } catch (e) {
    console.warn(e);
  }

  if (!useDivs){
    // <TABLE> Markup
    return html`
      <table
        class=${classMap({
          [rootClass]: true,
          [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
          [`${rootClass}--${density}`]: density !== "standard",
          [`${rootClass}--quiet`]: isQuiet,
          [`${rootClass}--emphasized`]: isEmphasized,
          ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {})
        })}
        id=${ifDefined(id)}
        style="max-width: 800px;"
      >
        <thead class="${rootClass}-head">
          <tr>
            ${when(rowItems.some(item => item.showCheckbox === true), () => html`
              <th class="spectrum-Table-headCell spectrum-Table-checkboxCell">
                ${Checkbox({
                  size,
                  isEmphasized: isEmphasized,
                  isChecked: false,
                  isIndeterminate: true,
                  customClasses: [`${rootClass}-checkbox`],
                })}
              </th>`
            )}
            <th
              class="${rootClass}-headCell is-sortable is-sorted-desc"
              aria-sort="descending"
              tabindex="0"
            >
              ${Icon({
                iconName: "ArrowDown100",
                size,
                customClasses: [`${rootClass}-sortedIcon`],
              })}
              <span>Column Title</span>
              ${Icon({
                iconName: "ChevronDown100",
                size,
                customClasses: [`${rootClass}-menuIcon`],
              })}
            </th>
            <th class="${rootClass}-headCell is-sortable" aria-sort="none">
              ${Icon({
                iconName: "ArrowDown100",
                size,
                customClasses: [`${rootClass}-sortedIcon`],
              })}
              <span>Column Title</span>
            </th>
            <th class="${rootClass}-headCell">Column Title</th>
          </tr>
        </thead>
        <tbody class="${rootClass}-body">
          ${rowItems.map((item) =>
            TableRowItem({
              rootClass,
              size,
              useDivs,
              showThumbnails,
              tableIsEmphasized: isEmphasized,
              ...item
            })
          )}
        </tbody>
      </table>
    `;
  } else {
    // <DIV> Markup
    return html`
      <div
        role="grid"
        class=${classMap({
          [rootClass]: true,
          [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
          [`${rootClass}--${density}`]: density !== "standard",
          [`${rootClass}--quiet`]: isQuiet,
          [`${rootClass}--emphasized`]: isEmphasized,
          ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {})
        })}
        id=${ifDefined(id)}
        style="max-width: 800px"
      >
        <div class="${rootClass}-head" role="row">
          ${when(rowItems.some(item => item.showCheckbox === true), () => html`
            <div 
              class="spectrum-Table-headCell spectrum-Table-checkboxCell" 
              role="columnheader" 
            >
              ${Checkbox({
                size,
                isEmphasized: isEmphasized,
                isChecked: false,
                isIndeterminate: true,
                customClasses: [`${rootClass}-checkbox`],
              })}
            </div>`
          )}
          <div
            class="${rootClass}-headCell is-sortable is-sorted-desc"
            aria-sort="descending"
            tabindex="0"
            role="columnheader"
          >
            ${Icon({
              iconName: "ArrowDown100",
              size,
              customClasses: [`${rootClass}-sortedIcon`],
            })}
            <span>Column Title</span>
            ${Icon({
              iconName: "ChevronDown100",
              size,
              customClasses: [`${rootClass}-menuIcon`],
            })}
          </div>
          <div 
            class="${rootClass}-headCell is-sortable" 
            aria-sort="none" 
            role="columnheader" 
          >
            ${Icon({
              iconName: "ArrowDown100",
              size,
              customClasses: [`${rootClass}-sortedIcon`],
            })}
            <span>Column Title</span>
          </div>
          <div 
            class="${rootClass}-headCell"
            role="columnheader"
          >Column Title</div>
        </div>
        <div class="${rootClass}-body" role="rowgroup">
          ${rowItems.map((item) =>
            TableRowItem({
              rootClass,
              size,
              useDivs,
              tableIsEmphasized: isEmphasized,
              ...item
            })
          )}
        </div>
      </div>
    `;
  }
};
