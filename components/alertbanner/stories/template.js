import { Template as Button } from "@spectrum-css/button/stories/template.js";
import { Template as CloseButton } from "@spectrum-css/closebutton/stories/template.js";
import { Template as Divider } from "@spectrum-css/divider/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-AlertBanner",
	isOpen = true,
	text,
	variant,
	hasActionButton,
	customClasses = [],
} = {}, context = {}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				"is-open": isOpen,
				[`${rootClass}--${variant}`]: typeof variant !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
		>
			<div class=${classMap({
				[`${rootClass}-body`]: true
			})}>
				<div class=${classMap({
					[`${rootClass}-content`]: true
				})}>
					${when(
						["negative", "info"].some(type => variant === type),
						() => Icon({
							iconName: variant === "negative" ? "Alert" : "Info",
							customClasses: [`${rootClass}-icon`],
						}, context)
					)}
					${when(text, () => html`
						<p class=${classMap({
							[`${rootClass}-text`]: true
						})}>${text}</p>
					`)}
				</div>
				${when(hasActionButton, () =>
					Button({
						size: "m",
						staticColor: "white",
						treatment: "outline",
						label: "Action",
					}, context)
				)}
			</div>
			<div class=${classMap({
				[`${rootClass}-end`]: true
			})}>
				${Divider({
					vertical: true,
					size: "s",
					tag: "div",
				}, context)}
				${CloseButton({
					size: "m",
					staticColor: "white",
					onclick,
				}, context)}
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
