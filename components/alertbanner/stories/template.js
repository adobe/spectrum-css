import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";

import { Template as Button } from "@spectrum-css/button/stories/template.js";
import { Template as CloseButton } from "@spectrum-css/closebutton/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-AlertBanner",
	isOpen = true,
	text,
	variant,
	actionButtonText = "Action",
	customClasses = [],
	...globals
}) => {
	const iconName =
		variant === "negative" ? "Alert" : variant === "info" ? "Info" : "";

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				"is-open": isOpen,
				[`${rootClass}--${variant}`]: typeof variant !== "undefined" && variant !== "neutral",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
		>
			<div class="${rootClass}-body">
				<div class="${rootClass}-content">
					${when(iconName, () =>
						Icon({
							...globals,
							iconName,
							customClasses: [`${rootClass}-icon`],
						})
					)}
					<p class="${rootClass}-text">${text}</p>
				</div>
				${when(actionButtonText, () =>
					Button({
						size: "m",
						variant: "staticWhite",
						treatment: "outline",
						label: actionButtonText,
					})
				)}
			</div>
			<div class="${rootClass}-end">
				${CloseButton({
					...globals,
					size: "m",
					staticColor: "white",
					onclick,
				})}
			</div>
		</div>
	`;
};
