import { Template as Button } from "@spectrum-css/button/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Link } from "@spectrum-css/link/stories/template.js";
import { html, nothing } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { Container } from "@spectrum-css/preview/decorators";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-InLineAlert",
	customClasses = [],
	customStyles = {},
	headerText,
	text,
	variant = "neutral",
	treatment = "default",
	isClosable = false,
	hasLink = false,
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


	const linkMarkup = hasLink ? html`
		<div class="spectrum-InLineAlert-footer">
			${Link({
				url: "#",
				text: "Link",
			})}
		</div>
	` : nothing;

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
				[`${rootClass}--${treatment}`]: treatment !== "default",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(customStyles)}

		>
			<div class="${rootClass}-header">
				${headerText}
				${iconMarkup}
			</div>
			<div class="${rootClass}-content">${text}</div>
			${linkMarkup}
			${closableMarkup}
		</div>
	`;
};

/**
 * Convert provided string to title case
 */
const toTitleCase = (string) => string.replace(/\w\S*/g, text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase());

/**
 * Set the appropriate treatment header text
 */
const setTreatmentHeaderText = (variant, treatment) => `${toTitleCase(variant)} variant with ${treatment !== "default" ? treatment : "outline"} fill`;

export const AlertsWithStyleOptions = ({
	...args
}, context = {}) => Container({
	withBorder: false,
	direction: "row",
	wrapperStyles: {
		columnGap: "12px",
	},
	content: html`
		${Template({
			...args,
			headerText: setTreatmentHeaderText(args.variant, "default"),
		}, context)}
		${Template({
			...args,
			treatment: "subtle",
			headerText: setTreatmentHeaderText(args.variant, "subtle"),
		}, context)}
		${Template({
			...args,
			treatment: "bold",
			headerText: setTreatmentHeaderText(args.variant, "bold"),
		}, context)}
	`,
}, context);
