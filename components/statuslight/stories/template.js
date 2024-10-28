import { Container } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-StatusLight",
	size = "m",
	variant = "info",
	label,
	isDisabled,
	customStyles = {},
} = {}) => html`
	<div
		class=${classMap({
			[rootClass]: true,
			[`${rootClass}--size${size?.toUpperCase()}`]:
				typeof size !== "undefined",
			[`${rootClass}--${variant}`]: typeof variant !== "undefined",
			"is-disabled": isDisabled,
		})}
		style=${styleMap(customStyles)}
	>
		${label}
	</div>
`;

// TODO: the accent variant will be removed in S2.
export const SemanticGroup = (args, context) => Container({
	withBorder: false,
	direction: "column",
	content: html`${[
		"accent",
		"neutral",
		"info",
		"negative",
		"notice",
		"positive"].map(variant => Template({...args, variant: variant, label: `${variant.charAt(0).toUpperCase() + variant.slice(1)} status` }, context))
	}`
});

export const NonsemanticGroup = (args, context) => Container({
	withBorder: false,
	direction: "column",
	content: html`${[
		"gray",
		"red",
		"orange",
		"yellow",
		"chartreuse",
		"celery",
		"green",
		"seafoam",
		"cyan",
		"blue",
		"indigo",
		"purple",
		"fuchsia",
		"magenta",].map(variant => Template({...args, variant: variant, label: `${variant.charAt(0).toUpperCase() + variant.slice(1)}`}, context))
	}`
});
