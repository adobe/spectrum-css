import { Template as ProgressBar } from "./template.js";

import "../index.css";

export const Template = ({
	customClasses = [],
	fill,
	size = "s",
	...item
} = {}, context = {}) => ProgressBar({
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

		<!-- The gradient story below supports linear-gradients used by Express. For use cases that require a custom linear-gradient for any --mod-*-{fill} properties, set those custom properties in CSS. -->
		 <div>
			${Typography({
				semantics: "heading",
				size: "s",
				content: ["Gradient support"],
				customClasses: ["chromatic-ignore"],
			}, context)}
			<div style=${styleMap({
				"display": window.isChromatic() ? "flex" : "none",
				"flex-direction": "column",
				"align-items": "flex-start",
				"gap": "32px",
			})}>
				${Template({
					...args,
					trackFill: "linear-gradient(to right, hotpink, orange)",
					progressBarFill: "linear-gradient(to left, teal, purple)",
				}, context)}
			</div>
		</div>
	</div>
`;
