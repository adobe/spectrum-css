import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

// Uncomment if you plan to include an icon
// import { Template as IconTemplate } from '../../icon/stories/template.js';

export const Template = ({ rootClass, size = 'm', content = [], customClasses = [] }) => {
  const classList = {
    [rootClass]: true,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  // const icon = IconTemplate({ iconName: icon, size });

  return html`
    <!-- Component mark-up goes here -->
    <div class=${classMap(classList)}>${content}</div>
  `;
}
