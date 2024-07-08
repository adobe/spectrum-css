import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import "../index.css";
import "../themes/express.css";
import "../themes/legacy.css";

export const Template = ({
	rootClass = "spectrum-LogicButton",
	customClasses = [],
	variant = "and",
	isDisabled = false,
}) => html`
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
