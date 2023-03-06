import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

import "../index.css";
import "../skin.css";

export const Template = ({
  rootClass = "spectrum-Well",
  customClasses = [],
  size = "m",
  // ...globals
}) => {
  return html`
    <span class=${classMap({
      [rootClass]: true,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })}>
      <em>Well done is better than well said.</em>
      <br>
      <strong>Benjamin Franklin</strong>
      <br><br>
      Well said Ben!
    </span>
  `;
}
