import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum-two.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-Tooltip",
	label,
	variant = "neutral",
	placement,
	isOpen = true,
	isFocused = false,
	showOnHover = false,
	customStyles = {},
	customClasses = [],
} = {}, context = {}) => {
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

	if (showOnHover) {
		document.addEventListener("DOMContentLoaded", () => {
			[...document.querySelectorAll(`.${rootClass}`)].forEach(tooltip => {
				tooltip.parentElement?.classList.add("u-tooltip-showOnHover");
			});
		});
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
					setName: "workflow",
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
