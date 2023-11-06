import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";

import "@spectrum-css/fieldgroup";

export const Template = ({
	rootClass = "spectrum-FieldGroup",
	customClasses = [],
	layout,
	labelPosition,
	isInvalid,
}) => html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${labelPosition}label`]:
					typeof labelPosition !== "undefined",
				[`${rootClass}--${layout}`]: typeof layout !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			aria-invalid=${ifDefined(isInvalid ? "true" : undefined)}
		>
			${FieldLabel({
				size: "m",
				text: "Select an option",
				variant: isInvalid ? "negative" : "neutral",
			})}
		</div>
	</div>
`;
