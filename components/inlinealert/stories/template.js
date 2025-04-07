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
	isSubtle = false,
	isBold = false,
	isClosable = false,
} = {}, context = {}) => {
	let iconName;
	switch (variant) {
		case "info":
			iconName = "InfoCircle";
			break;
		case "positive":
			iconName = "CheckmarkCircle";
			break;
		case "notice":
			iconName = "AlertDiamond";
			break;
		case "negative":
		case "closable":
			iconName = "AlertTriangle";
			break;
		default:
			iconName = undefined;
	}

	const iconMarkup =
		typeof iconName !== "undefined"
			? Icon({
				iconName,
				setName: "workflow",
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
				[`${rootClass}--${variant}--${"subtle"}`]: typeof variant !== "undefined" && isSubtle,
				[`${rootClass}--${variant}--${"bold"}`]: typeof variant !== "undefined" && isBold,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(customStyles)}

		>
			<div class="${rootClass}-header">
				${headerText}
				${iconMarkup}
			</div>
			<div class="${rootClass}-content">${text}</div>
			${closableMarkup}
		</div>
	`;
};
