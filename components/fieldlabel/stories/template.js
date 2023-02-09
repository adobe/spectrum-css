import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
// import { ifDefined } from 'lit-html/directives/if-definedjs';

import "../index.css";

export const Template = ({
  rootClass = "spectrum-FieldLabel",
  customClasses = [],
  size = "m",
  label,
  ...globals
}) => {
  if (!label) {
    console.warn("FieldLabel: please provide a label for the field label.");
    return html``;
  }

  const { express } = globals;

  try {
    if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
    else import(/* webpackPrefetch: true */ "../themes/express.css");
  } catch (e) {
    console.warn(e);
  }

  return html`
    <label class=${classMap({
      [rootClass]: true,
      [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
  })}>
    ${label}
  </label>
  `;
}
