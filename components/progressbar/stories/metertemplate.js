import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ProgressBar",
	customClasses = [],
	color,
	label,
	size = "m",
	...globals
}) => {
	const { express } = globals;

	try {
		if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
		else import(/* webpackPrefetch: true */ "../themes/express.css");
	} catch (e) {
		console.warn(e);
	}

	const fillColor =
		color === "negative" ? "is-negative" :
		color === "positive" ? "is-positive" :
		color === "notice" ? "is-notice" : "";

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				['spectrum-Meter']: true,
				[`spectrum-Meter--size${size?.toUpperCase()}`]:
				typeof size !== "undefined",
				[fillColor]: true,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			value="50"
			role="progressbar"
			aria-valuenow="50"
			aria-valuemin="0"
			aria-valuemax="100"
		>
			${FieldLabel({
				...globals,
				size: `${size}`,
				label: `${label}`,
				alignment: "",
				customClasses: [`${rootClass}-label`],
			})}
			${FieldLabel({
				...globals,
				size: `${size}`,
				label: "50%",
				alignment: "",
				customClasses: [`${rootClass}-percentage`],
			})}
			<div class="${rootClass}-track">
				<div class="${rootClass}-fill" style="width: 50%;"></div>
			</div>
		</div>
	`;
};
