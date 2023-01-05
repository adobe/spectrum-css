import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

export const Template = ({ rootClass, size = 'm', isOpen = true, customClasses = [], content = [] }) => {
  const classList = {
    [rootClass]: true,
    'is-open': isOpen,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
    <div class=${classMap(classList)}>
      ${content}
    </div>
  `;
}
