import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as Button } from "../../button/stories/template.js";
import { Template as CloseButton } from "../../closebutton/stories/template.js";
import { Template as Icon } from "../../icon/stories/template.js";

import "../index-base.css";

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({
    rootClass = "spectrum-Toast",
    message,
    inlineButtonLabel,
    variant,
    customClasses = [],
    id,
    ...globals
}) => {
    const iconName = variant === "negative" ? "Alert" : variant === "positive" ? "CheckmarkCircle" : "Info";

    return html`
        <div
            class=${classMap({
                [rootClass]: true,
                [`${rootClass}--${variant}`]: typeof variant !== "undefined",
                ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
            })}
            id=${ifDefined(id)}
        >
            ${variant
                ? Icon({
                      ...globals,
                      iconName: ifDefined(iconName),
                      size: "m",
                      customClasses: [`${rootClass}-typeIcon`],
                  })
                : ""}
            <div class="${rootClass}-body">
                <div class="${rootClass}-content">${message}</div>
                ${inlineButtonLabel
                    ? Button({
                          ...globals,
                          variant: "secondary",
                          size: "m",
                          staticColor: "white",
                          treatment: "outline",
                          label: inlineButtonLabel,
                      })
                    : ""}
            </div>
            <div class="${rootClass}-buttons">
                ${CloseButton({
                    ...globals,
                    size: "m",
                    staticColor: "white",
                    onclick,
                })}
            </div>
        </div>
    `;
};
