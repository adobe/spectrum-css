import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";

import "../index.css";

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({
  rootClass = "spectrum-ContextualHelp",
  size,
  id,
  iconName,
  customClasses = [],
  ...globals
}) => {
  return html`
    <div class=${classMap({
      [rootClass]: true,
      [`${rootClass}--size${size.toUpperCase()}`]: true,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })} id=${ifDefined(id)}>
      ${ActionButton({
        ...globals,
        size,
        iconName
      })}
    </div>
  `;
}
