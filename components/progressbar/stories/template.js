import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

import { capitalize, lowerCase } from "lodash-es";

import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ProgressBar",
	customClasses = [],
	labelPosition,
	staticColor,
	customWidth,
	indeterminate,
	label,
	value,
	customStyles = {},
	size = "m",
	...globals
}) => html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
				[`${rootClass}--${labelPosition}Label`]: typeof labelPosition !== "undefined",
				[`${rootClass}--static${capitalize(lowerCase(staticColor))}`]: typeof staticColor !== "undefined",
				[`${rootClass}--${indeterminate}`]: typeof indeterminate !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap({
				"width": customWidth,
				...customStyles,
			})}
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
	`;
