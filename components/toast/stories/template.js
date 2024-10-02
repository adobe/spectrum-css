import { Template as Button } from "@spectrum-css/button/stories/template.js";
import { Template as CloseButton } from "@spectrum-css/closebutton/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Container, getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Toast",
	message,
	inlineButtonLabel,
	variant,
	customClasses = [],
	customStyles = {},
	id = getRandomId("toast"),
} = {}, context = {}) => {
	let iconName = "Info";
	if (variant === "negative") iconName = "Alert";
	if (variant === "positive") iconName = "CheckmarkCircle";
	if (variant === "neutral") iconName = undefined;

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${variant}`]: typeof variant !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			style=${styleMap(customStyles)}
		>
			${when(variant, () =>
				Icon({
					iconName,
					setName: "workflow",
					size: "m",
					customClasses: [`${rootClass}-typeIcon`],
				}, context)
			)}
			<div class="${rootClass}-body">
				<div class="${rootClass}-content">${message}</div>
				${when(inlineButtonLabel, () =>
					Button({
						variant: "secondary",
						size: "m",
						staticColor: "white",
						treatment: "outline",
						label: inlineButtonLabel,
					}, context)
				)}
			</div>
			<div class="${rootClass}-buttons">
				${CloseButton({
					size: "m",
					staticColor: "white",
					onclick,
				}, context)}
			</div>
		</div>
	`;
};

export const ToastWrapOptions = (args, context ) => Container({
	withBorder: false,
	direction: "column",
	wrapperStyles: {
		columnGap: "12px",
	},
	content: html`
		${Template({
			...args,
			message: "A new version of Lightroom Classic is now available",
			variant: "info",
			inlineButtonLabel: "Update"
		}, context )}
		${Template({
			...args,
			message: "A new version of Lightroom Classic is now available. Use the Update button below to start using the new version.",
			variant: "info",
			inlineButtonLabel: "Update"
		}, context )}
		${Template({
			...args,
			message: "A new version of Lightroom Classic is now available",
			variant: "info",
		}, context )}
		${Template({
			...args,
			message: "An update is available",
			variant: "info",
			customStyles: {
				"max-inline-size": "240px"
			},
		}, context )}`
});

export const ActionTemplate = (args, context ) => Container({
	withBorder: false,
	direction: "column",
	wrapperStyles: {
		columnGap: "12",
	},
	content: html`
		${Template({
			...args,
			message: "All files archived",
			variant: "neutral",
			inlineButtonLabel: "Undo"
		}, context )}
		${Template({
			...args,
			message: "Analysis complete",
			variant: "positive",
			inlineButtonLabel: "View"
		}, context )}
		${Template({
			...args,
			message: "An update is available",
			variant: "info",
			inlineButtonLabel: "Update"
		}, context )}
		${Template({
			...args,
			message: "2 assets missing",
			variant: "negative",
			inlineButtonLabel: "Show"
		}, context )}`
});