import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import "../index.css";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({
  rootClass = "spectrum-FloatingActionButton",
  variant,
  id,
  iconName,
  customClasses = [],
  ...globals
}) => {
  return html`
    <button class=${classMap({
      [rootClass]: true,
      [`${rootClass}--${variant}`]: variant !== undefined,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })} id=${ifDefined(id)}>
      ${Icon(
        {
          ...globals,
          iconName,
          customClasses: [`${rootClass}-icon`]
        }
      )}
    </button>
  `;
}
