import { Template as Button } from "@spectrum-css/button/stories/template.js";
import { Template as CloseButton } from "@spectrum-css/closebutton/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

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
