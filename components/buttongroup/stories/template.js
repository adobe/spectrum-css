import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
// import { ifDefined } from 'lit/directives/if-defined.js';

import { Template as Button } from "../../button/stories/template.js";

import "../index-base.css";

export const Template = ({
    rootClass = "spectrum-ButtonGroup",
    customClasses = [],
    size = "m",
    items = [],
    vertical = false,
    ...globals
}) => {
    return html`
        <div
            class=${classMap({
                [rootClass]: true,
                [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
                [`${rootClass}--vertical`]: vertical,
                ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
            })}
        >
            ${items.map((item) =>
                Button({
                    ...globals,
                    ...item,
                    size,
                    customClasses: [`${rootClass}-item`],
                }),
            )}
        </div>
    `;
};
