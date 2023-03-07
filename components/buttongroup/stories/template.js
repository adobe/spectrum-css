import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
// import { ifDefined } from 'lit-html/directives/if-defined.js';

import { Template as Button } from '@spectrum-css/button/stories/template.js';

import "../index.css";

export const Template = ({
  rootClass = "spectrum-ButtonGroup",
  customClasses = [],
  size = "m",
  items = [],
  vertical = false,
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
    [`${rootClass}--vertical`]: vertical,
    ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
  })}>
      ${items.map((item) => Button({
        ...globals,
        ...item,
        size,
        customClasses: [`${rootClass}-item`],
      }))}
    </div>
  `;
}
