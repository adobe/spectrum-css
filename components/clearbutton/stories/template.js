import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import { Template as Icon } from "../../icon/stories/template.js";

import "../index-base.css";

export const ClearButton = ({
    rootClass = "spectrum-ClearButton",
    customClasses = [],
    isDisabled = false,
    size,
    variant,
    styles = {},
    ...globals
}) => {
    return html`
        <button
            type="reset"
            class=${classMap({
                [rootClass]: true,
                [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
                [`${rootClass}--${variant}`]: typeof variant !== "undefined",
                "is-disabled": isDisabled,
                ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
            })}
            style=${ifDefined(styleMap(styles))}
            ?disabled=${isDisabled}
        >
            <div class="${rootClass}-fill">
                ${Icon({
                    ...globals,
                    size,
                    iconName: "Cross",
                    customClasses: [`${rootClass}-icon`],
                })}
            </div>
        </button>
    `;
};

export const Template = ({
    rootClass = "spectrum-ClearButton",
    customClasses = [],
    isDisabled = false,
    size = "m",
    variant,
    styles = {},
    ...globals
}) => {
    if (typeof variant !== "undefined") {
        return html`
            <div style=${ifDefined(styleMap(styles))}>
                ${ClearButton({
                    rootClass,
                    customClasses,
                    isDisabled,
                    size,
                    variant,
                    globals,
                })}
            </div>
        `;
    }

    return ClearButton({
        rootClass,
        customClasses,
        isDisabled,
        size,
        variant,
        styles,
        globals,
    });
};
