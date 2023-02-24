import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

import { Template as Textfield } from "@spectrum-css/textfield/stories/template.js";
import { Template as ActionButton } from '@spectrum-css/actionbutton/stories/template.js';

import "../index.css";
import "../skin.css";

export const Template = ({
  rootClass = "spectrum-Stepper",
  isQuiet = false,
  isFocused = false,
  isKeyboardFocused = false,
  isInvalid = false,
  isDisabled = false,
  customClasses = [],
  id,
  ...globals
}) => {
  return html`
    <div class=${classMap({
      [rootClass]: true,
      [`${rootClass}--quiet`]: isQuiet,
      'is-focused': isFocused,
      'is-keyboardFocused': isKeyboardFocused,
      'is-invalid': isInvalid,
      'is-disabled': isDisabled,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })} id=${ifDefined(id)}>
      ${Textfield({
        ...globals,
        placeholder: "100",
        min: "-2",
        max: "2",
        step: "0.5",
        customClasses: [`${rootClass}-textfield`],
        customInputClasses: [`${rootClass}-input`],
      })}
      <span class="${rootClass}-buttons">
        ${ActionButton({ ...globals, customClasses: [`${rootClass}-stepUp`], iconName: 'ChevronUp75', isDisabled })}
        ${ActionButton({ ...globals, customClasses: [`${rootClass}-stepDown`], iconName: 'ChevronDown75', isDisabled })}
      </span>
    </div>
  `;
};
