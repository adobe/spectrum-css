import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-LogicButton",
	customClasses = [],
	variant = "and",
	isDisabled = false,
	isFocused = false,
}) => {
	return html`
		<button
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${variant}`]: typeof variant !== "undefined",
				"is-focused": isFocused,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			aria-disabled=${isDisabled ? "true" : "false"}
			?disabled=${isDisabled}
		>
			${variant
				? variant.charAt(0).toUpperCase() + variant.slice(1)
				: undefined}
		</button>
	`;
};
