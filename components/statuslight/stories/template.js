import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
// import { ifDefined } from 'lit-html/directives/if-defined.js';

import "../index.css";

export const Template = ({
  rootClass = "spectrum-StatusLight",
  size = "m",
  variant = "info",
  label,
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
    [`${rootClass}--${variant}`]: typeof variant !== "undefined",
  })}>${label}</div>
  `;
}
