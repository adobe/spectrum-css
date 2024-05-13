import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ProgressBar",
	customClasses = [],
	labelPosition,
	isStaticWhite,
	customWidth,
	isIndeterminate = false,
	label,
	value,
	customStyles = {
		width: customWidth ? `${customWidth}px` : "",
	},
	size = "m",
	...globals
}) => html`
	<div>
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
				[`${rootClass}--${labelPosition}Label`]: typeof labelPosition !== "undefined",
				[`${rootClass}--staticWhite`]: isStaticWhite,
				[`${rootClass}--indeterminate`]: isIndeterminate,
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
				label: isIndeterminate ? "" : `${value}%`,
				alignment: "",
				customClasses: [`${rootClass}-percentage`],
			})}
			<div class="${rootClass}-track">
				<div class="${rootClass}-fill" style="width: ${value}%;"></div>
			</div>
		</div>
	</div>
`;
