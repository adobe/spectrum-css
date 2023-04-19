import { html } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { classMap } from "lit-html/directives/class-map.js";
import { styleMap } from "lit-html/directives/style-map.js";

import { Template as Icon } from '@spectrum-css/icon/stories/template.js';
import { Template as ProgressCircle } from '@spectrum-css/progresscircle/stories/template.js';

import '../index.css';

export const Template = ({
  rootClass = "spectrum-Textfield",
  size = "m",
  customClasses = [],
  customInputClasses = [],
  customIconClasses = [],
  customProgressCircleClasses = [],
  isInvalid = false,
  isValid = false,
  multiline = false,
  grows = false,
  isQuiet = false,
  isFocused = false,
  isDisabled = false,
  isRequired = false,
  isReadOnly = false,
  isKeyboardFocused = false,
  isLoading = false,
  pattern,
  placeholder,
  name,
  iconName,
  value,
  type = "text",
  autocomplete = true,
  onclick,
  styles = {
    "--spectrum-textfield-border-color": "rgb(0,0,0)",
    "--spectrum-textfield-border-width": "1px"
  },
  ...globals
}) => {
  function setFocus(textfield, input, focused) {
    const focusClass = input.classList.contains('focus-ring') ? 'is-keyboardFocused' : 'is-focused';
    if (focused) {
        textfield.classList.add(focusClass);
    } else {
        textfield.classList.remove('is-keyboardFocused');
        textfield.classList.remove('is-focused');
    }
  }

  if (isInvalid) iconName = "Alert";
  else if (isValid) iconName = "Checkmark";

  return html`
    <div class=${classMap({
      [rootClass]: true,
      [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
      [`${rootClass}--multiline`]: multiline,
      [`${rootClass}--grows`]: grows,
      [`${rootClass}--quiet`]: isQuiet,
      'is-invalid': isInvalid,
      'is-valid': isValid,
      'is-focused': isFocused,
      'is-keyboardFocused': isKeyboardFocused,
      'is-disabled': isDisabled,
      'is-readOnly': isReadOnly,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })}
      style=${ifDefined(styleMap(styles))}
      @click=${onclick}
      @focusin=${(e) => {
        const textfield = e.target.closest(`.${rootClass}`);
        if (!textfield) return;
        setFocus(textfield, e.target, true);
      }}
      @focusout=${(e) => {
        const textfield = e.target.closest(`.${rootClass}`);
        if (!textfield) return;
        setFocus(textfield, e.target, false);
      }}
    >
      ${iconName ? Icon({
        ...globals,
        size,
        iconName,
        customClasses: [
          isInvalid || isValid ? `${rootClass}-validationIcon` : `${rootClass}-icon`,
          ...customIconClasses,
        ],
      }) : ""}
      ${multiline 
        ? html`
          <textarea
            placeholder=${ifDefined(placeholder)}
            name=${ifDefined(name)}
            .value=${ifDefined(value)}
            autocomplete=${autocomplete ? undefined : "off"}
            ?required=${isRequired}
            ?disabled=${isDisabled}
            ?readonly=${ifDefined(isReadOnly)}
            pattern=${ifDefined(pattern)}
            class=${classMap({
              [`${rootClass}-input`]: true,
              ...customInputClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
            })}
          />`
        : html`
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
          />`
      }
      ${isLoading ? ProgressCircle({ 
        isIndeterminate: true,
        size: 's',
        customClasses: customProgressCircleClasses,
      }) : ""}
    </div>
  `;
};
