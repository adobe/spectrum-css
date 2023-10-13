import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import "@spectrum-css/statuslight";

export const Template = ({ rootClass = "spectrum-StatusLight", size = "m", variant = "info", label }) => {
    return html`
        <div
            class=${classMap({
                [rootClass]: true,
                [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
                [`${rootClass}--${variant}`]: typeof variant !== "undefined",
            })}
        >
            ${label}
        </div>
    `;
};
