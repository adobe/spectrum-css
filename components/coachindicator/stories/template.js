import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-CoachIndicator",
	isQuiet = false,
	variant,
}) => {
	return html`
		<div
			class=${classMap({
				[`${rootClass}`]: true,
				[`${rootClass}--quiet`]: isQuiet,
				[`${rootClass}--${variant}`]: variant !== "default",
			})}
		>
			<div class="${rootClass}-ring"></div>
			<div class="${rootClass}-ring"></div>
			<div class="${rootClass}-ring"></div>
		</div>
	`;
};
