import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({ rootClass, size = 'm', isHorizontal, customClasses = [] }) => {
  const classList = {
    [rootClass]: true,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    [`${rootClass}--horizontal`]: isHorizontal,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  return html`
    <div class=${classMap(classList)}>
      <div class="spectrum-Tabs-item is-selected" tabindex="0">
        <span class="spectrum-Tabs-itemLabel">Tab 1</span>
      </div>
      <div class="spectrum-Tabs-item" tabindex="0">
        <span class="spectrum-Tabs-itemLabel">Tab 2</span>
      </div>
      <div class="spectrum-Tabs-item" tabindex="0">
        <span class="spectrum-Tabs-itemLabel">Tab 3</span>
      </div>
      <div class="spectrum-Tabs-item" tabindex="0">
        <span class="spectrum-Tabs-itemLabel">Tab 4</span>
      </div>
      <div class="spectrum-Tabs-selectionIndicator" style="width: 24px; left: 0px;"></div>
    </div>
  `;
}
