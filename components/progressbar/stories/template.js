import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
// import { ifDefined } from 'lit-html/directives/if-defined.js';

import "../index.css";

export const Template = ({
  rootClass = "spectrum-ProgressBar",
  customClasses = [],
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
    <div class=${classMap({
      [rootClass]: true,
      [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })} value="50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
      <div class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-ProgressBar-label">Loading</div>
      <div class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-ProgressBar-percentage">50%</div>
      <div class="${rootClass}-track">
        <div class="${rootClass}-fill" style="width: 50%;"></div>
      </div>
    </div>
  `;
}
