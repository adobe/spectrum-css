import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Badge",
	size = "m",
	label,
	iconName,
	hideLabel = false,
	variant = "neutral",
	customColor,
	customLayout,
	customClasses = [],
	id,
	...globals
}) => {
	const { express } = globals;

	try {
		if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
		else import(/* webpackPrefetch: true */ "../themes/express.css");
	} catch (e) {
		console.warn(e);
	}

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--${variant}`]: typeof variant !== "undefined",
				[`${rootClass}--${customColor}`]: typeof customColor !== "undefined",
				[`${rootClass}--${customLayout}`]: typeof customLayout !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
		>
			${when(iconName, () =>
				Icon({
					...globals,
					iconName,
					customClasses: [
						...(hideLabel ? [`${rootClass}-icon--no-label`] : []),
						`${rootClass}-icon`,
					],
				})
			)}
			${when(
				!hideLabel || (!label && !variant),
				() => html`<div class="${rootClass}-label">${label ?? variant}</div>`
			)}
		</div>
	`;
};
