import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as Icon } from "../../icon/stories/template.js";

import "../index-base.css";

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({
    rootClass = "spectrum-HelpText",
    size = "m",
    isDisabled = false,
    hideIcon = false,
    text,
    variant,
    id,
    customClasses = [],
}) => {
    return html`
        <div
            class=${classMap({
                [rootClass]: true,
                "is-disabled": isDisabled,
                [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
                [`${rootClass}--${variant}`]: typeof variant !== "undefined",
                ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
            })}
            id=${ifDefined(id)}
        >
            ${!hideIcon
                ? Icon({
                      iconName: "Alert",
                      size,
                      customClasses: [`${rootClass}-validationIcon`],
                  })
                : ""}
            <div class=${`${rootClass}-text`}>${text}</div>
        </div>
    `;
};
