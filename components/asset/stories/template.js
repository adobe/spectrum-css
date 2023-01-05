import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

// Uncomment if you plan to include an icon
// import { Template as IconTemplate } from '../../icon/stories/template.js';

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({ rootClass, size = 'm', customClasses = [] }) => {
  const classList = {
    [rootClass]: true,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  // const icon = IconTemplate({ iconName: icon, size });

  return html`
    <div class=${classMap(classList)}>
      <img class="spectrum-Asset-image" src="img/example-ava.jpg" style="max-width: 75%; max-height: 75%; object-fit: contain;">
    </div>
  `;
}
