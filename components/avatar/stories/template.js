import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import "@spectrum-css/avatar/index-base.css";

export const Template = ({
    rootClass = "spectrum-Avatar",
    image = "images/example-ava.png",
    altText,
    isDisabled = false,
    size = "700",
    id,
    customClasses = [],
}) => {
    return html`
        <div
            class=${classMap({
                [rootClass]: true,
                [`${rootClass}--size${size}`]: true,
                "is-disabled": isDisabled,
                ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
            })}
            id=${ifDefined(id)}
        >
            <img class="${rootClass}-image" src=${image} alt=${ifDefined(altText)} />
        </div>
    `;
};
