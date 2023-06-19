import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
// import { ifDefined } from 'lit/directives/if-defined.js';

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "@spectrum-css/clearbutton";

export const Template = ({
	rootClass = "spectrum-ClearButton",
	customClasses = [],
	isDisabled = false,
	size = "m",
	variant,
	...globals
}) => {
	return html`
		<button
			type="reset"
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--${variant}`]: typeof variant !== "undefined",
				"is-disabled": isDisabled,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			?disabled=${isDisabled}
		>
			<div class="${rootClass}-fill">
				${Icon({
					...globals,
					iconName: "Cross100",
					customClasses: [`${rootClass}-icon`],
				})}
			</div>
		</button>
	`;
};
