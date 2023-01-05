import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

export const Template = ({ rootClass, size = 'm', customClasses = [], imageURL, altText }) => {
  const classList = {
    [rootClass]: true,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
    <div class=${classMap(classList)}>
      <img class="${rootClass}-image" src=${imageURL} alt=${altText}>
    </div>
  `;
}
