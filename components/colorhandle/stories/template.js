import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
// import { ifDefined } from 'lit-html/directives/if-defined.js';

import '../index.css';
import '../skin.css';

export const Template = ({
  rootClass = "spectrum-ColorHandle",
  size = "m",
  customClasses = [],
  // ...globals
}) => {
  return html`
    <div class=${classMap({
    [rootClass]: true,
    [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
    ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
  })}></div>
  `;
}
