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
	variant = "neutral",
	fixed,
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
				[`${rootClass}--${fixed}`]: typeof fixed !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
		>
			${when(iconName, () =>
				Icon({
					...globals,
					iconName,
					customClasses: [
						...(typeof label === "undefined" ? [`${rootClass}-icon--no-label`] : []),
						`${rootClass}-icon`,
					],
				})
			)}
			${when(
				label,
				() => html`<div class="${rootClass}-label">${label}</div>`
			)}
		</div>
	`;
};
