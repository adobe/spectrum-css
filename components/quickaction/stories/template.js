import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

// Uncomment if you plan to include an icon
// import { Template as IconTemplate } from '../../icon/stories/template.js';

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({ rootClass, size = 'm', content = [], customClasses = [] }) => {
  const classList = {
    [rootClass]: true,
    [`${rootClass}--size${size.toUpperCase()}`]: true,
    'is-open': isOpen,
    ...customClasses.map((c) => ({ [c]: true })),
  };

  // const icon = IconTemplate({ iconName: icon, size });

  return html`
    <!-- Component mark-up goes here -->
    <div class=${classMap(classList)}>${content}</div>
    <div class="spectrum-QuickActions-overlay" style="padding: 40px;">

        <div class="${classMap(classList)}">
          <button class="spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionButton--quiet">
            <svg class="spectrum-Icon spectrum-Icon--sizeM" focusable="false" aria-hidden="true" aria-label="Edit">
              <use xlink:href="#spectrum-icon-18-Edit" />
            </svg>
          </button>
          <button class="spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionButton--quiet">
            <svg class="spectrum-Icon spectrum-Icon--sizeM" focusable="false" aria-hidden="true" aria-label="Copy">
              <use xlink:href="#spectrum-icon-18-Copy" />
            </svg>
          </button>
          <button class="spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionButton--quiet">
            <svg class="spectrum-Icon spectrum-Icon--sizeM" focusable="false" aria-hidden="true" aria-label="Delete">
              <use xlink:href="#spectrum-icon-18-Delete" />
            </svg>
          </button>
        </div>

      </div>
  `;
}
