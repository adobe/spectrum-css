import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({ rootClass, size = 'm', customClasses = [], label }) => {
  const classList = {
    [rootClass]: true,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
    <div class=${classMap(classList)} tabindex="0">
      <span class="spectrum-Tags-itemLabel">${label}</span>
    </div>
  `;
}
