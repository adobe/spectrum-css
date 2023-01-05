import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

export const Template = ({ rootClass, size = 'm', customClasses = [], label }) => {
  const classList = {
    [rootClass]: true,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
    <div class=${classMap(classList)}>
      <input type="checkbox" class="spectrum-Switch-input" id="switch-onoff-0">
      <span class="spectrum-Switch-switch"></span>
      ${label ? html`<label class="spectrum-Switch-label" for="switch-onoff-0">${label}</label>`: ''}
    </div>
  `;
}
