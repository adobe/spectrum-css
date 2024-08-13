import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-LogicButton",
	customClasses = [],
	variant = "and",
	isDisabled = false,
} = {}, context = {}) => {
	const { globals = {} } = context;

	if (globals.context === "express") import("../themes/express.css");
	else if (globals.context === "legacy") import("../themes/spectrum.css");

	return html`
		<button
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${variant}`]: typeof variant !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			aria-disabled=${isDisabled ? "true" : "false"}
			?disabled=${isDisabled}
			type="button"
		>
			${variant
				? variant.charAt(0).toUpperCase() + variant.slice(1)
				: undefined}
		</button>
	`;
};
