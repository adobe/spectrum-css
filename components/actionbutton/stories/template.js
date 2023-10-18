/**
 * The Template function is a JavaScript function that generates an HTML button element with various
 * customizable properties and classes.
 * @returns The `Template` function is returning an HTML template that represents a button component.
 * The button has various attributes and classes based on the provided props. It includes an optional
 * icon, label, and event handler for the `onclick` event.
 */
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import { capitalize } from "lodash-es";

import { Template as Icon } from "../../icon/stories/template.js";

import "../index-base.css";

export const Template = ({
    rootClass = "spectrum-ActionButton",
    size = "m",
    iconName,
    label,
    isQuiet = false,
    isSelected = false,
    isEmphasized = false,
    isDisabled = false,
    hasPopup = false,
    hideLabel = false,
    staticColor,
    customClasses = [],
    customIconClasses = [],
    onclick,
    id,
    role,
    ...globals
}) => {
    return html`
        <button
            aria-label=${ifDefined(label)}
            aria-haspopup=${hasPopup ? "true" : "false"}
            aria-pressed=${isSelected ? "true" : "false"}
            class=${classMap({
                [rootClass]: true,
                [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
                [`${rootClass}--quiet`]: isQuiet,
                [`${rootClass}--emphasized`]: isEmphasized,
                [`${rootClass}--static${capitalize(staticColor)}`]: typeof staticColor !== "undefined",
                [`is-disabled`]: isDisabled,
                [`is-selected`]: isSelected,
                ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
            })}
            id=${ifDefined(id)}
            role=${ifDefined(role)}
            ?disabled=${isDisabled}
            @click=${onclick}
        >
            ${when(hasPopup, () =>
                Icon({
                    ...globals,
                    size,
                    iconName: "CornerTriangle100",
                    customClasses: [`${rootClass}-hold`],
                }),
            )}
            ${when(iconName, () =>
                Icon({
                    ...globals,
                    size,
                    iconName,
                    customClasses: [`${rootClass}-icon`, ...customIconClasses],
                }),
            )}
            ${when(label && !hideLabel, () => html`<span class="${rootClass}-label">${label}</span>`)}
        </button>
    `;
};
