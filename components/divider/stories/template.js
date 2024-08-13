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
	minDimensionValues,
	customClasses = [],
	customStyles = {},
} = {}, context = {}) => {
	const { globals = {} } = context;

	if (globals.context === "express") import("../themes/express.css");
	else if (globals.context === "legacy") import("../themes/spectrum.css");

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
				"min-inline-size": minDimensionValues && !vertical ? "200px": undefined,
				"min-block-size": minDimensionValues && vertical ? "20px": undefined,
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
			"min-inline-size": minDimensionValues && !vertical ? "200px": undefined,
			"min-block-size": minDimensionValues && vertical ? "20px": undefined,
			...customStyles,
		})}
		role="separator"
	></div>`;
};
