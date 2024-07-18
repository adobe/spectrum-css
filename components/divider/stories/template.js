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

export const AllDividerSizes = (args, context) => html`
	${["s", "m", "l"].map((size) => html`
		<div style="${styleMap({
			"display": "flex",
			"flex-direction": "column",
			"padding": "16px",
		})}">
			${Typography({
				semantics: "heading",
				size: "s",
					content: [{
						s: "Small",
						m: "Medium (default)",
						l: "Large",
					}[size]],
			})}
			${Template({
					...args,
					size,
			}, context)}
		</div>	
	`)}
`;
