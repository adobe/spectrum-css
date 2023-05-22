import { html } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { classMap } from "lit-html/directives/class-map.js";
import { styleMap } from "lit-html/directives/style-map.js";
import { useArgs } from "@storybook/client-api";

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
  styles = {},
  ...globals
}) => {
  const [, updateArgs] = useArgs();
  const { express } = globals;

  try {
    if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
    else import(/* webpackPrefetch: true */ "../themes/express.css");
  } catch (e) {
    console.warn(e);
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
        const focusClass = e.target?.classList?.contains('focus-ring') ? { isKeyboardFocused: true } : { isFocused: true };
        updateArgs(focusClass);
      }}
      @focusout=${(e) => {
        const focusClass = e.target?.classList?.contains('focus-ring') ? { isKeyboardFocused: false } : { isFocused: false };
        updateArgs(focusClass);
      }}
    >
      ${iconName ? Icon({
        ...globals,
        size,
        iconName,
        customClasses: [
          !!(isInvalid || isValid) ? `${rootClass}-validationIcon` : `${rootClass}-icon`,
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
