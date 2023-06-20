import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import { lowerCase, capitalize } from "lodash-es";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Button",
	id,
	customClasses = [],
	size = "m",
	label,
	hideLabel = false,
	iconName,
	variant,
	staticColor,
	treatment,
	isDisabled = false,
	...globals
}) => {
	const { express } = globals;
	try {
		if (express) import(/* webpackPrefetch: true */ "../themes/express.css");
		else import(/* webpackPrefetch: true */ "../themes/spectrum.css");
	} catch (e) {
		console.warn(e);
	}

	return html`
		<button
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${treatment}`]: typeof treatment !== "undefined",
				[`${rootClass}--${variant}`]: typeof variant !== "undefined",
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--static${capitalize(lowerCase(staticColor))}`]:
					typeof staticColor !== "undefined",
				[`${rootClass}--iconOnly`]: hideLabel,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			?disabled=${isDisabled}
			aria-label=${hideLabel ? iconName : undefined}
		>
			${when(iconName, () => Icon({ ...globals, iconName, size }))}
			${when(
				label && !hideLabel,
				() => html`<span class=${`${rootClass}-label`}>${label}</span>`
			)}
		</button>
	`;
};
