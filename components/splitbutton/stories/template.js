import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

import { Template as Button } from '@spectrum-css/button/stories/template.js';

import "../index.css";

export const Template = ({
  rootClass = "spectrum-SplitButton",
  customClasses = [],
  size = "m",
  variant = "cta",
  iconName = "ChevronDown100",
  position = "right",
  ...globals
}) => {

  return html`
    <div class=${classMap({
      [rootClass]: true,
      [`${rootClass}--left`]: typeof position !== "undefined" && position === "left",
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })}>
      ${Button({
        ...globals,
        variant,
        size: "m",
        iconName: position === "right" ? undefined : iconName,
        label: position === "right" ? "Split Button" : undefined,
        hideLabel: position === "right" ? false : true,
        customClasses: position === "right" ? ["spectrum-SplitButton-action"] : ["spectrum-SplitButton-trigger"],
      })}
      ${Button({
        ...globals,
        variant,
        size: "m",
        iconName: position === "right" ? iconName : undefined,
        label: position === "right" ? undefined : "Split Button",
        hideLabel: position === "right" ? true : false,
        customClasses: position === "right" ? ["spectrum-SplitButton-trigger"] : ["spectrum-SplitButton-action"],
      })}
    </div>
  `;
}
