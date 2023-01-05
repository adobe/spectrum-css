import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

// Uncomment if you plan to include an icon
// import { Template as IconTemplate } from '../../icon/stories/template.js';

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({ size }) => {
  const classList = {};

  let className = 'spectrum-Link';
  classList[className] = true;

  if (size) classList[`${className}--size${size.toUpperCase()}`] = true;

  // const icon = IconTemplate({ iconName: icon, size });

  return html`
    <!-- Component mark-up goes here -->
    <div class=${classMap(classList)}></div>
    <!--
      ## Example markup
      <a href="#" class="spectrum-Link">Link using spectrum-Link</a>
    -->
  `;
}
