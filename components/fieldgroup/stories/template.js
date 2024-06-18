import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as HelpText } from "@spectrum-css/helptext/stories/template.js";
import { Template as Radio } from "@spectrum-css/radio/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-FieldGroup",
	customClasses = [],
	layout = "vertical",
	labelPosition,
	inputType = "radio",
	isInvalid,
	isReadOnly = false,
	isRequired = false,
	items,
	fieldLabel,
	helpText,
	...globals
}, context) => html`
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
			...globals,
			isRequired,
			size: "m",
			label: fieldLabel,
			alignment: labelPosition === "side" ? "right" : "top",
		}, context)}
		<div class="${rootClass}InputLayout">
			${inputType === "radio" ? items.map((item) =>
					Radio({
						...globals,
						...item,
						isReadOnly,
						name: "field-group-example",
						customClasses: [`${rootClass}-item`],
					}, context)) : items.map((item) =>
					Checkbox({
					...globals,
					...item,
					isReadOnly,
					customClasses: [`${rootClass}-item`],
					}, context))}
			${HelpText({
				...globals,
				size: "m",
				text: helpText,
				variant: isInvalid ? "negative" : "neutral",
			}, context)}
		</div>
	</div>
`;
