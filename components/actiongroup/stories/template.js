import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import { Template as ActionButton } from "../../actionbutton/stories/template.js";

import "../index-base.css";

export const Template = ({
    rootClass = "spectrum-ActionGroup",
    size = "m",
    areQuiet = false,
    areEmphasized = false,
    vertical = false,
    compact = false,
    justified = false,
    staticColors,
    content = [],
    customClasses = [],
    ...globals
}) => {
    return html`
        <div
            class=${classMap({
                [rootClass]: true,
                [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
                [`${rootClass}--quiet`]: areQuiet,
                [`${rootClass}--vertical`]: vertical,
                [`${rootClass}--compact`]: compact,
                [`${rootClass}--justified`]: justified,
                ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
            })}
        >
            ${content.map((item) => {
                switch (typeof item) {
                    case "object":
                        return ActionButton({
                            ...globals,
                            ...item,
                            size,
                            isQuiet: areQuiet ?? item.isQuiet,
                            isEmphasized: areEmphasized ?? item.isEmphasized,
                            staticColor: staticColors ?? item.staticColor,
                            customClasses: [`${rootClass}-item`],
                        });
                    case "function":
                        return item({
                            ...globals,
                            ...item,
                            size,
                            isQuiet: areQuiet ?? item.isQuiet,
                            isEmphasized: areEmphasized ?? item.isEmphasized,
                            staticColor: staticColors ?? item.staticColor,
                            customClasses: [`${rootClass}-item`],
                        });
                    default:
                        return item;
                }
            })}
        </div>
    `;
};
