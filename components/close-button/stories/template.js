import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Container, getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { capitalize, upperCase } from "lodash-es";

import "../index.css";
import "../themes/spectrum.css";
/* Must be imported last */
import "../themes/express.css";

export const Template = ({
	rootClass = "spectrum-CloseButton",
	size = "m",
	iconSize = "regular",
	label = "Close",
	staticColor,
	isDisabled = false,
	isHovered = false,
	isFocused = false,
	isKeyboardFocused = false,
	customClasses = [],
	id = getRandomId("closebutton"),
	onclick,
} = {}, context = {}) => {
	return html`
		<button
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${upperCase(size)}`]: typeof size !== "undefined",
				[`${rootClass}--static${capitalize(staticColor)}`]: typeof staticColor !== "undefined",
				"is-disabled": isDisabled,
				"is-hover": isHovered,
				"is-focus-visible": isFocused,
				"is-keyboardFocused": isKeyboardFocused,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			aria-label="close"
			id=${ifDefined(id)}
			label=${ifDefined(label)}
			?disabled=${isDisabled}
			@click=${onclick}
		>
			${Icon({
				size,
				iconName: getCloseButtonIconName(size, iconSize),
				setName: "ui",
				customClasses: [`${rootClass}-UIIcon`],
			}, context)}
		</button>
	`;
};

/**
 * Get the cross UI icon name (including sizing scale number), as defined by the design spec.
 */
const getCloseButtonIconName = (size = "m", iconSize = "regular", iconName = "Cross") => {
	// When using the "large" icon size option, the set of icons changes.
	if (iconSize == "large") {
		switch (size) {
			case "s":
				return `${iconName}200`;
			case "l":
				return `${iconName}400`;
			case "xl":
				return `${iconName}500`;
			default:
				return `${iconName}300`;
		}
	}
	// Default, "regular" icon size.
	switch (size) {
		case "s":
			return `${iconName}75`;
		case "l":
			return `${iconName}200`;
		case "xl":
			return `${iconName}300`;
		default:
			return `${iconName}100`;
	}
};

/**
 * Example template that includes both the default and disabled close button
 * for some of the Docs only stories.
 */
export const CloseButtonExample = (args, context) => Container({
	withBorder: false,
	content: html`
		${Container({
			withBorder: false,
			direction: "column",
			heading: "Default",
			content: Template(args, context),
		}, context)}
		${Container({
			withBorder: false,
			direction: "column",
			heading: "Disabled",
			content: Template({
				...args,
				isDisabled: true,
			}, context),
		}, context)}
	`,
}, context);
