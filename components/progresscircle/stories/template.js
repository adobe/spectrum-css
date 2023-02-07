import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
// import { ifDefined } from 'lit-html/directives/if-definedjs';

import { lowerCase, capitalize } from "lodash-es";

import "../index.css";

export const Template = ({
  rootClass = "spectrum-ProgressCircle",
  customClasses = [],
  size = "medium",
  overBackground,
  ...globals
}) => {
  const { express } = globals;

  try {
    if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
    else import(/* webpackPrefetch: true */ "../themes/express.css");
  } catch (e) {
    console.warn(e);
  }

  const componentMarkup = html`
    <div class=${classMap({
      [rootClass]: true,
      [`${rootClass}--${size}`]: typeof size !== "undefined",
      [`${rootClass}--static${capitalize(lowerCase(overBackground))}`]: typeof overBackground !== "undefined",
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })}>
      <div class="spectrum-ProgressCircle-track"></div>
      <div class="spectrum-ProgressCircle-fills">
        <div class="spectrum-ProgressCircle-fillMask1">
          <div class="spectrum-ProgressCircle-fillSubMask1">
          <div class="spectrum-ProgressCircle-fill"></div>
        </div>
      </div>
      <div class="spectrum-ProgressCircle-fillMask2">
        <div class="spectrum-ProgressCircle-fillSubMask2">
          <div class="spectrum-ProgressCircle-fill"></div>
        </div>
      </div>
    </div>
  `;

  const decoratedMarkup = html`
    <div style="background-color: #0F797D;">
      ${componentMarkup}
    </div>
  `;

  return overBackground !== "default" ? decoratedMarkup : componentMarkup;
}
