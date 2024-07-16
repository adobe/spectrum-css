import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { Template as ProgressBar } from "./template.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	customClasses = [],
	fill,
	size = "s",
	...item
}, context) => ProgressBar({
	customClasses: [
		...customClasses,
		"spectrum-Meter",
		typeof size !== "undefined" ? `spectrum-Meter--size${size.toUpperCase()}` : null,
		typeof fill !== "undefined" ? `is-${fill}` : null,
	].filter(Boolean),
	size,
	...item,
}, context);

export const MeterGroup = (args, context) => html`
	<div style=${styleMap({
		"display": window.isChromatic() ? "none" : "contents"
	})}>
		${Template(args, context)}
	</div>
	<div style=${styleMap({
		"display": window.isChromatic() ? "flex" : "none",
		"flex-direction": "column",
		"align-items": "flex-start",
		"gap": "32px",
	})}>
		${[{},
		{
			heading: "Large",
			size: "l",
		},
		{
			heading: "Positive",
			fill: "positive",
		},
		{
			heading: "Negative",
			fill: "negative",
		},
		{
			heading: "Notice",
			fill: "notice",
		},
		{
			heading: "Text overflow",
			fill: "notice",
			label: "Storage space remaining for XYZ user"
		}].map(({ heading, ...item }) => html`
			<div>
				${Typography({
					semantics: "heading",
					size: "xs",
					content: [heading],
				}, context)}
				${Template({
					...args,
					...item,
				}, context)}
			</div>
		`)}
	</div>
`;
