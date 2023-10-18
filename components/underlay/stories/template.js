import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "@spectrum-css/underlay/index-base.css";

export const Template = ({
    rootClass = "spectrum-Underlay",
    customClasses = [],
    style = [],
    content,
    id = "spectrum-underlay",
    isOpen = true,
}) => {
    return html`
        <div
            class=${classMap({
                [rootClass]: true,
                "is-open": isOpen,
                ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
            })}
            id=${ifDefined(id)}
            style=${ifDefined(styleMap(style))}
        >
            ${content}
        </div>
    `;
};
