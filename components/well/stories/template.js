import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
// import { ifDefined } from 'lit-html/directives/if-defined.js';

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
      [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })}>
      <em>Well done is better than well said.</em>
      <br>
      <strong>Benjamin Franklin</strong>
      <br><br>
      Well said Ben!
      <span class=${classMap({
          [rootClass]: true,
          [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
        })}>
        <em>Well done is better than well said.</em>
        <br>
        <strong>Benjamin Franklin</strong>
        <br><br>
        Well said Ben!
      </span>
    </span>
  `;
}
