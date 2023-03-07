import { html } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { classMap } from "lit-html/directives/class-map.js";

import { Template as Icon } from '@spectrum-css/icon/stories/template.js';

import '../index.css';
import '../skin.css';

export const Template = ({
  rootClass = "spectrum-Textfield",
  size = "m",
  customClasses = [],
  customInputClasses = [],
  customIconClasses = [],
  isInvalid = false,
  isValid = false,
  multiline = false,
  isQuiet = false,
  isFocused = false,
  isDisabled = false,
  isRequired = false,
  isReadOnly = false,
  isKeyboardFocused = false,
  pattern,
  placeholder,
  name,
  iconName,
  value,
  type = "text",
  autocomplete = true,
  onclick,
  ...globals
}) => {

  if (isInvalid) iconName = "Alert";
  else if (isValid) iconName = "Checkmark";

  return html`
    <div class=${classMap({
      [rootClass]: true,
      [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
      [`${rootClass}--multiline`]: multiline,
      [`${rootClass}--quiet`]: isQuiet,
      'is-invalid': isInvalid,
      'is-valid': isValid,
      'is-focused': isFocused,
      'is-keyboardFocused': isFocused,
      'is-disabled': isDisabled,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })}
      @click=${onclick}>
      ${iconName ? Icon({
        ...globals,
        size,
        iconName,
        customClasses: [
          isInvalid || isValid ? `${rootClass}-validationIcon` : `${rootClass}-icon`,
          ...customIconClasses,
        ],
      }) : ""}
      <input
        type=${ifDefined(type)}
        placeholder=${ifDefined(placeholder)}
        name=${ifDefined(name)}
        value=${ifDefined(value)}
        autocomplete=${autocomplete ? undefined : "off"}
        ?required=${isRequired}
        ?disabled=${isDisabled}
        readonly=${ifDefined(isReadOnly ? "readonly" : undefined)}
        pattern=${ifDefined(pattern)}
        class=${classMap({
          [`${rootClass}-input`]: true,
          ...customInputClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
        })}
      />
    </div>
  `;
};
