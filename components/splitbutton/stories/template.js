import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import { when } from "lit-html/directives/when.js";

import { Template as Button } from '@spectrum-css/button/stories/template.js';

import "../index.css";

export const Template = ({
  rootClass = "spectrum-SplitButton",
  customClasses = [],
  size = "m",
  variant = "cta",
  iconName = "ChevronDown100",
  position = "left",
  ...globals
}) => {

  return html`
    ${when(position === "right", () =>
      html`
        <div class=${classMap({
          [rootClass]: true,
          ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
        })}>
          ${Button({
            ...globals,
            variant,
            size: "m",
            label: "Split Button",
            customClasses: ["spectrum-SplitButton-action"]
          })}
          ${Button({
            ...globals,
            variant,
            size: "m",
            hideLabel: true,
            iconName,
            isOpen: false,
            customClasses: ["spectrum-SplitButton-trigger"]
          })}
        </div>
      `)}
    ${when(position === "left", () =>
      html`
        <div class=${classMap({
          [rootClass]: true,
          [`${rootClass}--left`]: true,
          ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
        })}>
          ${Button({
            ...globals,
            variant,
            size: "m",
            hideLabel: true,
            iconName,
            customClasses: ["spectrum-SplitButton-trigger"]
          })}
          ${Button({
            ...globals,
            variant,
            size: "m",
            label: "Split Button",
            isOpen: false,
            customClasses: ["spectrum-SplitButton-action"]
          })}
        </div>
      `
    )}
  `;
}
