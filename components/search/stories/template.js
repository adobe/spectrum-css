import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

// Uncomment if you plan to include an icon
// import { Template as IconTemplate } from '../../icon/stories/template.js';

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({ size }) => {
  const classList = {};

  let className = 'spectrum-Search';
  classList[className] = true;

  if (size) classList[`${className}--size${size.toUpperCase()}`] = true;

  // const icon = IconTemplate({ iconName: icon, size });

  return html`
    <!-- Component mark-up goes here -->
    <div class=${classMap(classList)}></div>
    <!--
      ## Example markup
      <form class="spectrum-Search">
  <div class="spectrum-Textfield spectrum-Search-textfield">
    <svg class="spectrum-Icon spectrum-Icon--sizeM spectrum-Textfield-icon spectrum-Search-icon" focusable="false" aria-hidden="true">
      <use xlink:href="#spectrum-icon-18-Magnify"></use>
    </svg>
    <input type="search" placeholder="Search" name="search" value="" class="spectrum-Textfield-input spectrum-Search-input" autocomplete="off">
  </div>
  <button type="reset" class="spectrum-ClearButton spectrum-ClearButton--sizeM spectrum-Search-clearButton">
    <div class="spectrum-ClearButton-fill">
      <svg class="spectrum-Icon spectrum-ClearButton-icon spectrum-UIIcon-Cross100" focusable="false" aria-hidden="true">
        <use xlink:href="#spectrum-css-icon-Cross100"></use>
      </svg>
    </div>
  </button>
</form>
    -->
  `;
}
