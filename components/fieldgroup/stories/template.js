import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { repeat } from "lit/directives/repeat.js";

import { Template as FieldLabel } from "../../fieldlabel/stories/template.js";
import { Template as HelpText } from "../../helptext/stories/template.js";
import { Template as Radio } from "../../radio/stories/template.js";

import "../index-base.css";

export const Template = ({
    rootClass = "spectrum-FieldGroup",
    customClasses = [],
    layout,
    labelPosition,
    isInvalid,
    items,
    ...globals
}) => {
    return html`
        <div
            class=${classMap({
                [rootClass]: true,
                [`${rootClass}--${labelPosition}label`]: typeof labelPosition !== "undefined",
                [`${rootClass}--${layout}`]: typeof layout !== "undefined",
                ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
            })}
        >
            ${FieldLabel({
                ...globals,
                size: "m",
                label: "Field Group Label",
                alignment: labelPosition === "side" ? "right" : "top",
            })}

            <div class="${rootClass}InputLayout">
                ${repeat(
                    items,
                    (item) => item.id,
                    (item) => {
                        return Radio({
                            ...globals,
                            ...item,
                            customClasses: [`${rootClass}-item`],
                        });
                    },
                )}
                ${HelpText({
                    ...globals,
                    size: "m",
                    text: "Select an option",
                    variant: isInvalid ? "negative" : "neutral",
                })}
            </div>
        </div>
    `;
};
