import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import { Template as OpacityCheckerboard } from "@spectrum-css/opacitycheckerboard/stories/template.js";

import "@spectrum-css/swatch";

export const Template = ({
    rootClass = "spectrum-Swatch",
    size = "m",
    customClasses = [],
    styles = { "--spectrum-picked-color": "rgb(174, 216, 230)" },
    id,
    ...globals
}) => {
    return html`
        <div
            class=${classMap({
                [rootClass]: true,
                [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
                ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
            })}
            id=${ifDefined(id)}
            style=${styleMap(styles)}
            tabindex="0"
        >
            ${OpacityCheckerboard({
                ...globals,
                componentOnly: true,
                customClasses: [`${rootClass}-fill`],
            })}
        </div>
    `;
};
