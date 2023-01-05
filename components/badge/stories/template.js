import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

export const Template = ({ rootClass, size = 'm', label, variant = 'neutral', customClasses = [] }) => {
  const classList = {
    [rootClass]: true,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    [`${rootClass}--${variant}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
    <div class=${classMap(classList)}>
      <div class="${rootClass}-label">${label}</div>
    </div>
  `;
}
