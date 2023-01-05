import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

import { Template as DialogTemplate } from '../../dialog/stories/template.js';

export const Template = ({ rootClass, isOpen = true, size = 'm', customClasses = ['spectrum-Modal'] }) => {
  const classList = {
    [rootClass]: true,
    'is-open': isOpen,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
    <div class=${classMap(classList)}>
      ${DialogTemplate({ size, heading: 'New Messages', content: 'You have 5 new messages.'})}
    </div>
  `;
}
