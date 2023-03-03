import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
// import { ifDefined } from 'lit-html/directives/if-defined.js';

import { Template as AssetList } from '@spectrum-css/assetlist/stories/template.js';

import "../index.css";

export const Template = ({
  rootClass = "spectrum-MillerColumns",
  customClasses = [],
  columns,
  ...globals
}) => {
  if (!columns) {
    console.warn('MillerColumns: Column data is required for rendering.');
    return html``;
  }

  return html`
    <div
      class=${classMap({
        [rootClass]: true,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
    >
      ${columns.map(({items}) => {
        return html`
          <div class="${rootClass}-item">
            ${AssetList({
              ...globals,
              items,
            })}
          </div>
        `;
      })}
    </div>
  `;
}
