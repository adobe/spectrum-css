import { html } from 'lit-html';
// import { classMap } from 'lit-html/directives/class-map.js';
// import { ifDefined } from 'lit-html/directives/if-defined.js';

import "../index.css";

export const Template = ({
  rootClass = "spectrum-Tooltip",
  size = "m",
  ...globals
}) => {
  const { express } = globals;

  try {
    if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
    else import(/* webpackPrefetch: true */ "../themes/express.css");
  } catch (e) {
    console.warn(e);
  }

  return html`
    <span class="spectrum-Tooltip spectrum-Tooltip--top is-open">
  <span class="spectrum-Tooltip-label">Label</span>
  <span class="spectrum-Tooltip-tip"></span>
</span>
  `;
}
