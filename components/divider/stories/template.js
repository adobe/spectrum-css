import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { capitalize, upperCase } from "lodash-es";

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
				[`${rootClass}--static${capitalize(staticColor)}`]:
					typeof staticColor !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap({...customStyles})}
			role="separator"
		/>`;
	}

	return html` <div
		class=${classMap({
			[rootClass]: true,
			[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
			[`${rootClass}--vertical`]: vertical === true,
			[`${rootClass}--static${capitalize(staticColor)}`]:
				typeof staticColor !== "undefined",
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		style=${styleMap({...customStyles})}
		role="separator"
	></div>`;
};
