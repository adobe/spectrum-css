import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import { repeat } from 'lit-html/directives/repeat.js';

import "../index.css";
import "../skin.css";

export const Template = ({
  rootClass = "spectrum-TreeView",
  customClasses = [],
  size = "m",
  items,
  ...globals
}) => {
  return html`
    <ul class=${classMap({
      [rootClass]: true,
      [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
  })}>
   
  
  </ul>
  `;
}
