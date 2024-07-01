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

export const AllDividerSizes = (args) => html`
	<div>
		<div style="display: flex; flex-direction: column; padding: 16px;">
			${Typography({
				semantics: "heading",
				size: "s",
				content: ["Small"],
			})}
			${Template({
				...args,
				size: "s"
			})}
		</div>
		<div style="display: flex; flex-direction: column; padding: 16px;">
			${Typography({
				semantics: "heading",
				size: "s",
				content: ["Medium (default)"],
			})}
			${Template({
				...args,
				size: "m"
			})}
		</div>
		<div style="display: flex; flex-direction: column; padding: 16px;">
			${Typography({
				semantics: "heading",
				size: "s",
				content: ["Large"],
			})}
			${Template({
				...args,
				size: "l"
			})}
		</div>	
	</div>
`;
