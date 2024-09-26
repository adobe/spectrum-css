import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Container, getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/spectrum.css";
/* Must be imported last */
import "../themes/express.css";

export const Template = ({
	rootClass = "spectrum-HelpText",
	size = "m",
	isDisabled = false,
	hideIcon = false,
	text,
	variant,
	id = getRandomId("helptext"),
	customClasses = [],
	customStyles = {},
} = {}, context = {}) => {
	return html`
		<div
			class=${classMap({
			[rootClass]: true,
			"is-disabled": isDisabled,
			[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
			[`${rootClass}--${variant}`]: typeof variant !== "undefined",
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(customStyles)}
			id=${ifDefined(id)}
		>
			${when(!hideIcon && variant == "negative", () =>
			Icon(
				{
				iconName: "Alert",
				size,
				customClasses: [`${rootClass}-validationIcon`],
				},
				context
			)
			)}
			<div class=${`${rootClass}-text`}>${text}</div>
		</div>
	`;
};

/**
 * Displays both variants.
 */
export const VariantsTemplate = (args, context) => Container({
	withBorder: false,
	direction: "column",
	content: html`${["neutral", "negative"].map((variant) => 
		Container({
			withBorder: false,
			direction: "column",
			heading: `Variant: ${variant}`,
			containerStyles: {
				rowGap: "8px",
			},
			content: Template({
				...args,
				variant
			}, context),
		})
	)}`,
});

/**
 * Displays options for the negative variant; with and without an icon.
 */
export const NegativeTemplate = (args, context) => Container({
	withBorder: false,
	direction: "column",
	content: html`${[true, false].map((hideIcon) => 
		Container({
			withBorder: false,
			direction: "column",
			heading: hideIcon ? "Without icon" : "With icon",
			containerStyles: {
				rowGap: "8px",
			},
			content: Template({
				...args,
				hideIcon
			}, context),
		})
	)}`,
});
