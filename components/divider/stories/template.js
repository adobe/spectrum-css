import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { capitalize, lowerCase, upperCase } from "lodash-es";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Divider",
	size = "m",
	tag = "hr",
	staticColor,
	vertical = false,
	customClasses = [],
	customStyles = {},
} = {}) => {
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
				"min-block-size": vertical == true ? "20px" : undefined,
				"block-size": vertical ? "auto" : undefined,
				"min-inline-size": !vertical ? "200px" : "var(--spectrum-divider-thickness)",
				"inline-size": !vertical ? "auto" : undefined,
				"align-self": vertical == true ? "stretch" : undefined,
				...customStyles,
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
			"min-block-size": vertical == true ? "20px" : undefined,
			"block-size": vertical == true ? "auto" : undefined,
			"min-inline-size": !vertical ? "200px" : "var(--spectrum-divider-thickness)",
			"inline-size": !vertical ? "auto" : undefined,
			"align-self": vertical == true ? "stretch" : undefined,
			...customStyles,
		})}
		role="separator"
	></div>`;
};
