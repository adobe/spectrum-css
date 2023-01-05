import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({ rootClass, size = 'm', content = [], customClasses = [] }) => {
  const classList = {
    [rootClass]: true,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
    <!-- Component mark-up goes here -->
    <div class=${classMap(classList)}>${content}</div>
  `;
}
