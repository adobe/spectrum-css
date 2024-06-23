import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Variants } from "@spectrum-css/preview/decorators/utilities.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { capitalize } from "lodash-es";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Tooltip",
	label,
	variant = "neutral",
	placement,
	isOpen = true,
	isFocused = false,
	customStyles = {},
	customClasses = [],
}, context) => {
	let variantIcon;
	if (variant === "info") {
		variantIcon = "Info";
	}
	else if (variant === "positive") {
		variantIcon = "CheckmarkCircle";
	}
	else if (variant === "negative") {
		variantIcon = "Alert";
	}

	return html`
		<span
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${variant}`]:
					typeof variant !== "undefined" && variant !== "neutral",
				[`${rootClass}--${placement}`]: typeof placement !== "undefined",
				"is-open": isOpen,
				"is-focused": isFocused,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(customStyles)}
		>
			${when(variantIcon, () =>
				Icon({
					iconName: variantIcon,
					size: "m",
					customClasses: [`${rootClass}-typeIcon`],
				}, context)
			)}
			${when(label, () => html`
				<span class=${classMap({
					[`${rootClass}-label`]: true
				})}>
					${label}
				</span>
			`)}
			<span class=${classMap({
				[`${rootClass}-tip`]: true
			})}></span>
		</span>
	`;
};

export const PlacementVariants = Variants({
	Template,
	testData: [
		...["neutral", "info", "positive", "negative"].map(variant => ({
			testHeading: capitalize(variant),
			variant,
		})),
		...[
			"top",
			"top-left",
			"top-right",
			"top-start",
			"top-end",
			"bottom",
			"bottom-left",
			"bottom-right",
			"bottom-start",
			"bottom-end",
			"right",
			"right-bottom",
			"right-top",
			"left",
			"left-bottom",
			"left-top",
			"start",
			"start-top",
			"start-bottom",
			"end",
			"end-top",
			"end-bottom",
		].map(placement => ({
			testHeading: capitalize(placement.replace(/-/g, " ")),
			placement,
		})),
	],
	stateData: [{
		testHeading: "Focused",
		isFocused: true,
	}]
});
