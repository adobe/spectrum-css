import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import { Template as Button } from "@spectrum-css/button/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-InLineAlert",
	customClasses = [],
	customStyles = {},
	headerText,
	text,
	variant = "neutral",
	isClosable = false,
	...globals
}) => {
	let iconName;
	switch (variant) {
		case "info":
			iconName = "Info";
			break;
		case "positive":
			iconName = "CheckmarkCircle";
			break;
		case "notice":
		case "negative":
		case "closable":
			iconName = "Alert";
			break;
	}

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${variant}`]: typeof variant !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${ifDefined(styleMap(customStyles))}
		>
			<div class="${rootClass}-header">
				${variant.charAt(0).toUpperCase() + variant.slice(1)} ${headerText}
				${when(typeof iconName !== "undefined", () => Icon({
					...globals,
					iconName,
					customClasses: [`${rootClass}-icon`],
				}))}
			</div>
			<div class="${rootClass}-content">${text}</div>
			${when(isClosable, () => html`<div class="${rootClass}-footer">
				${Button({
					...globals,
					treatment: "outline",
					variant: "primary",
					iconName: false,
					hideLabel: false,
					label: "Ok",
				})}
			</div>`)}
		</div>
	`;
};
