import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ClearButton",
	isDisabled = false,
	size = "m",
	variant,
	id,
	customClasses = [],
	customStyles = {},
	isFocusable = true,
	...globals
}) => {
	const { express } = globals;

	try {
		if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
		else import(/* webpackPrefetch: true */ "../themes/express.css");
	}
	catch (e) {
		console.warn(e);
	}

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
			id=${ifDefined(id)}
			style=${ifDefined(styleMap(customStyles))}
			?disabled=${isDisabled}
			tabindex=${isFocusable ? 0 : -1}
			aria-hidden=${isFocusable}
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
};
