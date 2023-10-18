import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import { capitalize, lowerCase } from "lodash-es";

import { Template as Icon } from "../../icon/stories/template.js";

import "../index-base.css";

export const Template = ({
    rootClass = "spectrum-Button",
    id,
    customClasses = [],
    size = "m",
    label,
    hideLabel = false,
    iconName,
    iconAfterLabel = false,
    variant,
    staticColor,
    treatment,
    onclick,
    isDisabled = false,
    ariaExpanded,
    ariaControls,
    ...globals
}) => {
    return html`
        <button
            class=${classMap({
                [rootClass]: true,
                [`${rootClass}--${treatment}`]: typeof treatment !== "undefined",
                [`${rootClass}--${variant}`]: typeof variant !== "undefined",
                [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
                [`${rootClass}--static${capitalize(lowerCase(staticColor))}`]: typeof staticColor !== "undefined",
                [`${rootClass}--iconOnly`]: hideLabel,
                ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
            })}
            id=${ifDefined(id)}
            ?disabled=${isDisabled}
            @click=${onclick}
            aria-label=${ifDefined(hideLabel ? iconName : undefined)}
            aria-expanded=${ifDefined(ariaExpanded?.toString())}
            aria-controls=${ifDefined(ariaControls)}
        >
            ${when(iconName && !iconAfterLabel, () => Icon({ ...globals, iconName, size }))}
            ${when(label && !hideLabel, () => html`<span class=${`${rootClass}-label`}>${label}</span>`)}
            ${when(iconName && iconAfterLabel, () => Icon({ ...globals, iconName, size }))}
        </button>
    `;
};
