import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({ rootClass, size = 'm', min = 10, max = 20, value = 14, step = 2, customClasses = [] }) => {
  const classList = {
    [rootClass]: true,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
    <div class=${classMap(classList)}>
      <div class="${rootClass}-controls">
        <div class="${rootClass}-track"></div>
        <div class="${rootClass}-handle" style="left: 40%;">
          <input type="range" class="${rootClass}-input" value=${value} step=${step} min=${min} max=${max}>
        </div>
        <div class="${rootClass}-track"></div>
      </div>
    </div>
  `;
}
