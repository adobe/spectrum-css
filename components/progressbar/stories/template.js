import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

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
	isMeter,
	meterFill,
	meterSize,
	styles = {
		width: customWidth ? customWidth : "",
	},
	staticWhiteStyles = {
		backgroundColor: backgroundColor,
		width: "400px",
		height: "200px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
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

	const fillColor =
		meterFill === "negative" ? "is-negative" :
		meterFill === "positive" ? "is-positive" :
		meterFill === "notice" ? "is-notice" : "default";

	return html`
		<div style="${staticWhite ? styleMap(staticWhiteStyles) : ""}">
			<div
				class=${classMap({
					[rootClass]: true,
					[`${rootClass}--size${size?.toUpperCase()}`]:
						typeof size !== "undefined" && !isMeter,
					[`${rootClass}--${labelPosition}Label`]:
						typeof labelPosition !== "undefined" && !isMeter,
					[`${rootClass}--${staticWhite}`]: typeof staticWhite !== "undefined",
					["spectrum-Meter"]: isMeter === true,
					[`spectrum-Meter--size${meterSize?.toUpperCase()}`]: meterSize,
					[`${fillColor}`]: fillColor !== "default",
					[`${rootClass}--${indeterminate}`]:
						typeof indeterminate !== "undefined",
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
				style=${styleMap(styles)}
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
					label: indeterminate ? "" : "50%",
					alignment: "",
					customClasses: [`${rootClass}-percentage`],
				})}
				<div class="${rootClass}-track">
					<div class="${rootClass}-fill" style="width: 50%;"></div>
				</div>
			</div>
		</div>
	`;
};
