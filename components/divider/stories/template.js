import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { capitalize, lowerCase, upperCase } from "lodash-es";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Divider",
	size = "m",
	tag = "hr",
	staticColor,
	vertical = false,
	customClasses = [],
}) => {
	if (tag === "hr") {
		return html` <hr
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${upperCase(size)}`]: typeof size !== "undefined",
				[`${rootClass}--vertical`]: vertical === true,
				[`${rootClass}--static${capitalize(lowerCase(staticColor))}`]:
					typeof staticColor !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap({
				"min-height": vertical == true ? "20px" : undefined,
				height: vertical == true ? "auto" : undefined,
				"align-self": vertical == true ? "stretch" : undefined,
			})}
			role="separator"
		/>`;
	}

	return html` <div
		class=${classMap({
			[rootClass]: true,
			[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
			[`${rootClass}--vertical`]: vertical === true,
			[`${rootClass}--static${capitalize(lowerCase(staticColor))}`]:
				typeof staticColor !== "undefined",
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		style=${styleMap({
			"min-height": vertical == true ? "20px" : undefined,
			height: vertical == true ? "auto" : undefined,
			"align-self": vertical == true ? "stretch" : undefined,
		})}
		role="separator"
	></div>`;
};

export const AllDividerSizes = (args, context) => {
	// Color for heading that shows the name of the size. Adjustments for static white and black backgrounds,
	// which don't change with the color context.
	let headingColor = "var(--spectrum-seafoam-900)";
	if (context?.args?.staticColor == "white") { headingColor = "rgb(255, 255, 255)"; }
	if (context?.args?.staticColor == "black") { headingColor = "rgb(0, 0, 0)"; }

	return html`
		${["s", "m", "l"].map((size) => html`
			<div style=${styleMap({
				display: "flex",
				gap: "16px",
				flexDirection: "column",
				alignItems: "flex-start",
				})}
			>
			${Typography({
							semantics: "heading",
							size: "xs",
							content: [{
								s: "Small",
								m: "Medium (default)",
								l: "Large",
							}[size]],
							customClasses: ["chromatic-ignore"],
							customStyles: {
								"white-space": "nowrap",
								"--mod-heading-font-color": headingColor,
							},
						})}
			${Template({
					...args,
					size,
			}, context)}
		`)}
	`;
};
