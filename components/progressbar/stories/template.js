import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Container } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { capitalize } from "lodash-es";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ProgressBar",
	customClasses = [],
	labelPosition,
	staticColor,
	customWidth,
	isIndeterminate = false,
	label,
	value,
	showValueLabel = true,
	trackFill,
	progressBarFill,
	customStyles = {},
	size = "m",
} = {}, context = {}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
				[`${rootClass}--${labelPosition}Label`]: typeof labelPosition !== "undefined",
				[`${rootClass}--static${capitalize(staticColor)}`]: typeof staticColor !== "undefined",
				[`${rootClass}--indeterminate`]: isIndeterminate,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap({
				"width": `${customWidth}px`,
				...customStyles,
				"--mod-progressbar-track-color": trackFill,
				"--mod-progressbar-fill-color": progressBarFill,
			})}
			value=${ifDefined(value ? `${value}%` : undefined)}
			aria-valuenow=${ifDefined(value ? `${value}%` : undefined)}
			role="progressbar"
			aria-valuemin="0"
			aria-valuemax="100"
		>
			${FieldLabel({
				size,
				label,
				customClasses: [`${rootClass}-label`],
			}, context)}
			${FieldLabel({
				size,
				label: isIndeterminate || typeof value === "undefined" || !showValueLabel ? "" : `${value}%`,
				customClasses: [`${rootClass}-percentage`],
			}, context)}

			<div class="${rootClass}-track">
				<div
					class="${rootClass}-fill"
					style=${styleMap({ "inline-size": `${value}%` })}
				></div>
			</div>
		</div>
	`;
};

/* This template shows determinate and indeterminate progress bars  */
export const IndeterminateGroup = (args, context) => Container({
	Template,
	withBorder: false,
	withHeading: false,
	content: html`
		${Container({
			withBorder: false,
			heading: "Determinate",
			content: Template(args, context)
		}, context)}
		${Container({
			withBorder: false,
			heading: "Indeterminate",
			content: Template({ ...args, isIndeterminate: true }, context)
		}, context)}
	`
}, context);
