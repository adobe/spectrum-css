import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ProgressBar",
	customClasses = [],
	customStyles = {},
	id,
	label = "Storage Space",
	value,
	fill,
	size = "s",
	...globals
}) => html`
<div
	class=${classMap({
		[rootClass]: true,
		["spectrum-Meter"]: true,
		[`spectrum-Meter--size${size?.toUpperCase()}`]: typeof size !== "undefined",
		[`is-${fill}`]: typeof fill !== "undefined" && fill !== "default",
		...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
	})}
	value=${ifDefined(value ? `${value}%` : undefined)}
	role="progressbar"
	aria-valuenow=${ifDefined(value ? `${value}%` : undefined)}
	aria-valuemin="0"
	aria-valuemax="100"
	id=${ifDefined(id)}
	style=${styleMap(customStyles)}
>
	${FieldLabel({
		...globals,
		size,
		label,
		alignment: undefined,
		customClasses: [`${rootClass}-label`],
	})}
	${FieldLabel({
		...globals,
		size,
		label: `${value}%`,
		alignment: undefined,
		customClasses: [`${rootClass}-percentage`],
	})}
	<div class="${rootClass}-track">
		<div
			class="${rootClass}-fill"
			style=${styleMap({
				width: `${value}%`,
			})}
		></div>
	</div>
</div>`;
