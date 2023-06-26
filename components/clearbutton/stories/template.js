import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { styleMap } from "lit-html/directives/style-map.js";
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const ClearButton = ({
	rootClass = "spectrum-ClearButton",
	customClasses = [],
	isDisabled = false,
	size,
	variant,
	styles = {},
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
			style=${ifDefined(styleMap(styles))}
			?disabled=${isDisabled}
		>
			<div class="${rootClass}-fill">
				${Icon({
					...globals,
					size,
					iconName: "Cross",
					customClasses: [`${rootClass}-icon`],
				})}
			</div>
		</button>
	`;
}

export const Template = ({
	rootClass = "spectrum-ClearButton",
	customClasses = [],
	isDisabled = false,
	size = "m",
	variant,
	styles = {},
	...globals
}) => {
	const { express } = globals;

	try {
		if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
		else import(/* webpackPrefetch: true */ "../themes/express.css");
	} catch (e) {
		console.warn(e);
	}
	
	if (typeof variant !== "undefined") {
		return html`
			<div style=${ifDefined(styleMap(styles))}>
				${ClearButton({
					rootClass,
					customClasses,
					isDisabled,
					size,
					variant,
					globals
				})}
			</div>
		`;
	}

	return ClearButton({
		rootClass,
		customClasses,
		isDisabled,
		size,
		variant,
		styles,
		globals
	})
};
