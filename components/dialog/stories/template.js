import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

import { Template as Divider } from '../../divider/stories/template.js';

export const Template = ({ rootClass, heading, size = 'm', content = [], customClasses = [] }) => {
  const classList = {
    [rootClass]: true,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
    <div class=${classMap(classList)} role="dialog" tabindex="-1" aria-modal="true">
      <div class="${rootClass}-grid">${heading ? html`
        <h1 class="${rootClass}-heading">${heading}</h1>
        ${Divider({ size, horizontal: true, customClasses: [`${rootClass}-divider`] })}
      ` : ''}<section class="${rootClass}-content">${content}</section>
      </div>
    </div>
  `;
}
