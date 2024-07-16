import { Template as Button } from "@spectrum-css/button/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { html, nothing } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-InLineAlert",
	customClasses = [],
	customStyles = {},
	headerText,
	text,
	variant = "neutral",
	isClosable = false,
} = {}, context = {}) => {
	let iconName;
	switch (variant) {
		case "info":
			iconName = "Info";
			break;
		case "positive":
			iconName = "CheckmarkCircle";
			break;
		case "notice":
		case "negative":
		case "closable":
			iconName = "Alert";
			break;
		default:
			iconName = undefined;
	}

	const iconMarkup =
		typeof iconName !== "undefined"
			? Icon({
				iconName,
				customClasses: [`${rootClass}-icon`],
			}, context) : nothing;

	const closableMarkup = isClosable ? html`
		<div class="spectrum-InLineAlert-footer">
			${Button({
				treatment: "outline",
				variant: "primary",
				iconName: false,
				hideLabel: false,
				label: "Ok",
			})}
		</div>
	` : nothing;

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${variant}`]: typeof variant !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(customStyles)}

		>
			<div class="${rootClass}-header">
				${variant.charAt(0).toUpperCase() + variant.slice(1)} ${headerText}
				${iconMarkup}
			</div>
			<div class="${rootClass}-content">${text}</div>
			${closableMarkup}
		</div>
	`;
};
