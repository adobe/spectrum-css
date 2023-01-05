import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

// Uncomment if you plan to include an icon
import { Template as IconTemplate } from '../../icon/stories/template.js';

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({ rootClass, size = 'm', customClasses = [] }) => {
  const classList = {
    [rootClass]: true,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
    <table class=${classMap(classList)}>
      <thead class="spectrum-Table-head">
        <tr>
          <th class="spectrum-Table-headCell is-sortable is-sorted-desc" aria-sort="descending" tabindex="0">
            Column Title
            ${IconTemplate({ iconName: 'ArrowDown100', size, customClasses: ['spectrum-Table-sortedIcon'] })}
          </th>
          <th class="spectrum-Table-headCell is-sortable" aria-sort="none">
            Column Title
            ${IconTemplate({ iconName: 'ArrowDown100', size, customClasses: ['spectrum-Table-sortedIcon'] })}
          </th>
          <th class="spectrum-Table-headCell">Column Title</th>
        </tr>
      </thead>
      <tbody class="spectrum-Table-body">
        <tr class="spectrum-Table-row">
          <td class="spectrum-Table-cell" tabindex="0">Row Item Alpha</td>
          <td class="spectrum-Table-cell" tabindex="0">Row Item Alpha</td>
          <td class="spectrum-Table-cell" tabindex="0">Row Item Alpha</td>
        </tr>
        <tr class="spectrum-Table-row">
          <td class="spectrum-Table-cell" tabindex="0">Row Item Bravo</td>
          <td class="spectrum-Table-cell" tabindex="0">Row Item Bravo</td>
          <td class="spectrum-Table-cell" tabindex="0">Row Item Bravo</td>
        </tr>
        <tr class="spectrum-Table-row">
          <td class="spectrum-Table-cell" tabindex="0">Row Item Charlie</td>
          <td class="spectrum-Table-cell" tabindex="0">Row Item Charlie</td>
          <td class="spectrum-Table-cell" tabindex="0">Row Item Charlie</td>
        </tr>
        <tr class="spectrum-Table-row">
          <td class="spectrum-Table-cell" tabindex="0">Row Item Delta</td>
          <td class="spectrum-Table-cell" tabindex="0">Row Item Delta</td>
          <td class="spectrum-Table-cell" tabindex="0">Row Item Delta</td>
        </tr>
        <tr class="spectrum-Table-row">
          <td class="spectrum-Table-cell" tabindex="0">Row Item Echo</td>
          <td class="spectrum-Table-cell" tabindex="0">Row Item Echo</td>
          <td class="spectrum-Table-cell" tabindex="0">Row Item Echo</td>
        </tr>
      </tbody>
    </table>
  `;
}
