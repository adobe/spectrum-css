import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ProgressBar",
	customClasses = [],
	labelPosition,
	backgroundColor,
	staticWhite,
	customWidth,
	indeterminate,
	label,
	value,
	customStyles = {
		width: customWidth ? customWidth : "",
	},
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

	return html`
		<div style=${when(staticWhite, () => styleMap({
			backgroundColor,
			width: "400px",
			height: "200px",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "space-around",
		}))}>
			<div
				class=${classMap({
					[rootClass]: true,
					[`${rootClass}--size${size?.toUpperCase()}`]:
						typeof size !== "undefined",
					[`${rootClass}--${labelPosition}Label`]:
						typeof labelPosition !== "undefined",
					[`${rootClass}--${staticWhite}`]: typeof staticWhite !== "undefined",
					[`${rootClass}--${indeterminate}`]:
						typeof indeterminate !== "undefined",
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
				style=${ifDefined(styleMap(customStyles))}
				value="${value}%"
				role="progressbar"
				aria-valuenow="${value}%"
				aria-valuemin="0"
				aria-valuemax="100"
			>
				${FieldLabel({
					...globals,
					size,
					label,
					alignment: "",
					customClasses: [`${rootClass}-label`],
				})}
				${FieldLabel({
					...globals,
					size,
					label: indeterminate ? "" : `${value}%`,
					alignment: "",
					customClasses: [`${rootClass}-percentage`],
				})}
				<div class="${rootClass}-track">
					<div class="${rootClass}-fill" style="width: ${value}%;"></div>
				</div>
			</div>
		</div>
	`;
};
