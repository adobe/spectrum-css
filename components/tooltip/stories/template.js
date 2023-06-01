import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { when } from "lit-html/directives/when.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Tooltip",
	label,
	variant = "neutral",
	placement,
	isOpen = true,
	isFocused = false,
	showOnHover = false,
	...globals
}) => {
	const { express } = globals;

	try {
		if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
		else import(/* webpackPrefetch: true */ "../themes/express.css");
	} catch (e) {
		console.warn(e);
	}

	let variantIcon;
	if (variant === "info") {
		variantIcon = "Info";
	} else if (variant === "positive") {
		variantIcon = "CheckmarkCircle";
	} else if (variant === "negative") {
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
			})}
		>
			${when(variantIcon, () =>
				Icon({
					iconName: variantIcon,
					size: "m",
					customClasses: [`${rootClass}-typeIcon`],
				})
			)}
			${when(
				label,
				() => html`<span class="${rootClass}-label">${label}</span>`
			)}
			<span class="${rootClass}-tip"></span>
		</span>
	`;
};
