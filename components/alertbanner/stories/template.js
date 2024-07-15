import { Template as Button } from "@spectrum-css/button/stories/template.js";
import { Template as CloseButton } from "@spectrum-css/closebutton/stories/template.js";
import { Template as Divider } from "@spectrum-css/divider/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Variants } from "@spectrum-css/preview/decorators/utilities.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-AlertBanner",
	isOpen = true,
	text,
	variant,
	hasActionButton,
	customClasses = [],
}) => {
	const iconName =
		variant === "negative" ? "Alert" : variant === "info" ? "Info" : "";

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				"is-open": isOpen,
				[`${rootClass}--${variant}`]: typeof variant !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
		>
			<div class="${rootClass}-body">
				<div class="${rootClass}-content">
					${when(iconName, () => Icon({
						iconName,
						customClasses: [`${rootClass}-icon`],
					}))}
					<p class="${rootClass}-text">${text}</p>
				</div>
				${when(hasActionButton, () =>
					Button({
						size: "m",
						staticColor: "white",
						treatment: "outline",
						label: "Action",
					})
				)}
			</div>
			<div class="${rootClass}-end">
				${Divider({
					vertical: true,
					size: "s",
					tag: "div",
				})}
				${CloseButton({
					size: "m",
					staticColor: "white",
					onclick,
				})}
			</div>
		</div>
	`;
};

export const AlertBannerGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Neutral",
		},
		{
			testHeading: "Informational",
			text: "Your trial will expire in 3 days. Once it expires your files will be saved and ready for you to open again once you have purcahsed the software.",
			variant: "info",
			hasActionButton: false,
		},
		{
			testHeading: "Warning",
			text: "Connection interupted. Check your network to continue.",
			variant: "negative",
			hasActionButton: true,
		},
		{
			testHeading: "Closed",
			isOpen: false,
		},
	],
});
