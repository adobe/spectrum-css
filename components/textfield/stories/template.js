import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { classMap } from 'lit-html/directives/class-map.js';

export const Template = ({ rootClass, size = 'm', customClasses = [], placeholder, name, value }) => {
  const classList = {
    [rootClass]: true,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
    <div class=${classMap(classList)}>
      <input type="text" placeholder=${ifDefined(placeholder)} name=${name} value=${ifDefined(value)} class="${rootClass}-input">
    </div>
  `;
}
