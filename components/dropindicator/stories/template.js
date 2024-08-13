import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-DropIndicator",
	customClasses = [],
	customStyles = {},
	direction = "vertical",
	size = "300px",
} = {}, context = {}) => {
	const { globals = {} } = context;

	if (globals.context === "express") import("../themes/express.css");
	else if (globals.context === "legacy") import("../themes/spectrum.css");

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${direction}`]: typeof direction !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${ifDefined(styleMap({
				"block-size": direction == "vertical" ? size : undefined,
				"inline-size": direction == "horizontal" ? size : undefined,
				...customStyles,
			}))}
		></div>
	`;
};
