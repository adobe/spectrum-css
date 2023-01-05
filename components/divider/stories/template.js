import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export const Template = ({ rootClass, size = 'm', tag = 'hr', customClasses = [] }) => {
  const classList = {
    [rootClass]: true,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
    ${unsafeHTML(`<${tag} class="${Object.entries(classList).map(([c, isC]) => isC ? c : '' ).join(' ')}" role="separator"></${tag}>`)}
  `;
}
