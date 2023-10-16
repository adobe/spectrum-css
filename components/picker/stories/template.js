import { useArgs } from "@storybook/client-api";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as HelpText } from "@spectrum-css/helptext/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Template as ProgressCircle } from "@spectrum-css/progresscircle/stories/template.js";

import "@spectrum-css/picker";

export const Picker = ({
    rootClass = "spectrum-Picker",
    size = "m",
    labelPosition,
    placeholder,
    isQuiet = false,
    isFocused = false,
    isOpen = false,
    isInvalid = false,
    isLoading = false,
    isDisabled = false,
    customClasses = [],
    customStyles = {},
    iconName = "ChevronDown",
    id,
    ...globals
}) => {
    const [, updateArgs] = useArgs();

    return html`
        <button
            class=${classMap({
                [rootClass]: true,
                [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
                [`${rootClass}--quiet`]: isQuiet,
                [`${rootClass}--sideLabel`]: labelPosition != "top",
                [`is-invalid`]: isInvalid,
                [`is-open`]: isOpen,
                [`is-loading`]: isLoading,
                [`is-focused`]: isFocused,
                ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
            })}
            ?disabled=${isDisabled}
            id=${ifDefined(id)}
            aria-haspopup="listbox"
            style=${ifDefined(styleMap(customStyles))}
            type="button"
            @click=${() => {
                updateArgs({ isOpen: !isOpen });
            }}
        >
            ${placeholder ? html`<span class="${rootClass}-label is-placeholder">${placeholder}</span>` : ""}
            ${isLoading
                ? ProgressCircle({
                      ...globals,
                      size: "s",
                      isIndeterminate: true,
                  })
                : ""}
            ${isInvalid && !isLoading
                ? Icon({
                      ...globals,
                      size,
                      iconName: "Alert",
                      customClasses: [`${rootClass}-validationIcon`],
                  })
                : ""}
            ${Icon({
                ...globals,
                size,
                iconName,
                customClasses: [`${rootClass}-menuIcon`],
            })}
        </button>
    `;
};

export const Template = ({
    rootClass = "spectrum-Picker",
    size = "m",
    label,
    labelPosition = "top",
    placeholder,
    helpText,
    isQuiet = false,
    isFocused = false,
    isOpen = false,
    isInvalid = false,
    isLoading = false,
    isDisabled = false,
    customClasses = [],
    customStyles = {},
    customPopoverStyles = {},
    content = [],
    id,
    ...globals
}) => {
    let iconName = "ChevronDown200";
    switch (size) {
        case "s":
            iconName = "ChevronDown75";
            break;
        case "m":
            iconName = "ChevronDown100";
            break;
        case "xl":
            iconName = "ChevronDown300";
            break;
        default:
            iconName = "ChevronDown200";
    }

    return html`
        ${label
            ? FieldLabel({
                  ...globals,
                  size,
                  label,
                  isDisabled,
                  alignment: labelPosition,
              })
            : ""}
        ${labelPosition == "left"
            ? html`<div style="display: inline-block">
                  ${Picker({
                      ...globals,
                      rootClass,
                      size,
                      placeholder,
                      isQuiet,
                      isFocused,
                      isOpen,
                      isInvalid,
                      isLoading,
                      isDisabled,
                      customClasses,
                      customStyles,
                      content,
                      iconName,
                      labelPosition,
                      id,
                  })}
              </div>`
            : Picker({
                  ...globals,
                  rootClass,
                  size,
                  placeholder,
                  isQuiet,
                  isFocused,
                  isOpen,
                  isInvalid,
                  isLoading,
                  isDisabled,
                  customClasses,
                  customStyles: customStyles,
                  content,
                  iconName,
                  labelPosition,
                  id,
              })}
        ${helpText
            ? HelpText({
                  text: helpText,
                  variant: isInvalid ? "negative" : "neutral",
                  hideIcon: true,
              })
            : ""}
        ${Popover({
            ...globals,
            isOpen: isOpen && !isDisabled,
            withTip: false,
            position: "bottom",
            isQuiet,
            customStyles: customPopoverStyles,
            content,
        })}
    `;
};
