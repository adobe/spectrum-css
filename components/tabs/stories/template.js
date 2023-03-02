import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
// import { ifDefined } from 'lit-html/directives/if-defined.js';

import "../index.css";
import "../skin.css";

export const Template = ({
  rootClass = "spectrum-Tabs",
  customClasses = [],
  size = "m",
  // ...globals
}) => {
  return html`
    <div class=${classMap({
      [rootClass]: true,
      [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
      [`${rootClass}--horizontal`]: true,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })}>
      <div class="spectrum-Tabs-item is-selected" tabindex="0">
        <span class="spectrum-Tabs-itemLabel">Tab 1</span>
      </div>
      <div class="spectrum-Tabs-item" tabindex="0">
        <span class="spectrum-Tabs-itemLabel">Tab 2</span>
      </div>
      <div class="spectrum-Tabs-item" tabindex="0">
        <span class="spectrum-Tabs-itemLabel">Tab 3</span>
      </div>
      <div class="spectrum-Tabs-item" tabindex="0">
        <span class="spectrum-Tabs-itemLabel">Tab 4</span>
      </div>
      <div class="spectrum-Tabs-selectionIndicator" style="width: 24px; left: 0px;"></div>
    </div>
  `;
}
