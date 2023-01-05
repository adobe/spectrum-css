import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({ rootClass, size = 'm', min = 0, max = 100, customClasses = [] }) => {
  const classList = {
    [rootClass]: true,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
    <div class=${classMap(classList)}>
      <div class="${rootClass}-controls">
        <div class="${rootClass}-handle" tabindex="0">
          <input type="range" class="${rootClass}-input" min="${min}" max="${max}" value="${min}">
        </div>
      </div>
    </div>
  `;
}
