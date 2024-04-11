import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import { capitalize, lowerCase } from "lodash-es";

import "@spectrum-css/actionbutton/index.css";

/**
 * @todo load order should not influence the icon size but it is; fix this
*/
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

export const Template = ({
	rootClass = "spectrum-ActionButton",
	size = "m",
	iconName,
	iconSet,
	label,
	isQuiet = false,
	isSelected = false,
	isEmphasized = false,
	isHovered = false,
	isFocused = false,
	isActive = false,
	isDisabled = false,
	hasPopup = false,
	hideLabel = false,
	staticColor,
	customClasses = [],
	customStyles = {},
	customIconClasses = [],
	onclick,
	id,
	testId,
	role,
}) => {
	return html`
		<button
			aria-label=${ifDefined(label)}
			aria-haspopup=${hasPopup ? "true" : "false"}
			aria-pressed=${isSelected ? "true" : "false"}
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--quiet`]: isQuiet,
				[`${rootClass}--emphasized`]: isEmphasized,
				[`${rootClass}--static${capitalize(lowerCase(staticColor))}`]:
					typeof staticColor !== "undefined",
				["is-disabled"]: isDisabled,
				["is-selected"]: isSelected,
				["is-hover"]: isHovered,
				["is-focus-visible"]: isFocused,
				["is-active"]: isActive,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			data-testid=${ifDefined(testId)}
			role=${ifDefined(role)}
			style=${ifDefined(styleMap(customStyles))}
			?disabled=${isDisabled}
			@click=${onclick}
		>
			${when(hasPopup, () =>
				Icon({
					size,
					iconName: "CornerTriangle",
					setName: "ui",
					customClasses: [`${rootClass}-hold`],
				})
			)}
			${when(iconName, () =>
				Icon({
					size,
					iconName,
					setName: iconSet,
					customClasses: [`${rootClass}-icon`, ...customIconClasses],
				})
			)}
			${when(
				label && !hideLabel,
				() => html`<span class="${rootClass}-label">${label}</span>`
			)}
		</button>
	`;
};
