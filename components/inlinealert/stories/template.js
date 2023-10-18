import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import { Template as Button } from "../../button/stories/template.js";
import { Template as Icon } from "../../icon/stories/template.js";

import "../index-base.css";

export const Template = ({
    rootClass = "spectrum-InLineAlert",
    customClasses = [],
    headerText,
    text,
    variant = "neutral",
    isClosable = false,
    ...globals
}) => {
    let iconName;
    switch (variant) {
        case "info":
            iconName = "Info";
            break;
        case "positive":
            iconName = "CheckmarkCircle";
            break;
        case "notice":
        case "negative":
        case "closable":
            iconName = "Alert";
            break;
        default:
            iconName = undefined;
    }

    const iconMarkup =
        typeof iconName !== "undefined"
            ? html`
                  ${Icon({
                      ...globals,
                      iconName,
                      customClasses: [`${rootClass}-icon`],
                  })}
              `
            : "";

    const closableMarkup = isClosable
        ? html`
              <div class="spectrum-InLineAlert-footer">
                  ${Button({
                      ...globals,
                      treatment: "outline",
                      variant: "primary",
                      iconName: false,
                      hideLabel: false,
                      label: "Ok",
                  })}
              </div>
          `
        : "";

    return html`
        <div
            class=${classMap({
                [rootClass]: true,
                [`${rootClass}--${variant}`]: typeof variant !== "undefined",
                ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
            })}
        >
            <div class="${rootClass}-header">
                ${variant.charAt(0).toUpperCase() + variant.slice(1)} ${headerText} ${iconMarkup}
            </div>
            <div class="${rootClass}-content">${text}</div>
            ${closableMarkup}
        </div>
    `;
};
