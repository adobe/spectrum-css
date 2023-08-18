import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-CoachMark",
	isQuiet = false,
	withPopover = false,
	variant,
	...globals
}) => {
	return html`
		<div
			class=${classMap({
				[`${rootClass}Indicator`]: true,
				[`${rootClass}Indicator--quiet`]: isQuiet,
				[`${rootClass}Indicator--${variant}`]: variant !== "default",
			})}
			style="display: inline-block;vertical-align: top;"
		>
			<div class="${rootClass}Indicator-ring"></div>
			<div class="${rootClass}Indicator-ring"></div>
			<div class="${rootClass}Indicator-ring"></div>
		</div>
	`;
};
