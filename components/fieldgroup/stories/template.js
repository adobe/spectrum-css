import { Template as CheckBox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as HelpText } from "@spectrum-css/helptext/stories/template.js";
import { Container, getRandomId } from "@spectrum-css/preview/decorators";
import { Template as Radio } from "@spectrum-css/radio/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = (
	{
		rootClass = "spectrum-FieldGroup",
		customClasses = [],
		layout = "vertical",
		inputType = "radio",
		name = getRandomId(),
		isReadOnly = false,
		isRequired = false,
		label,
		labelPosition,
		isInvalid,
		helpText,
		items = [],
	} = {},
	context = {},
) => {
	const groupLabelId = getRandomId("group-label");

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${labelPosition}label`]:
					typeof labelPosition !== "undefined",
				[`${rootClass}--${layout}`]: typeof layout !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			role=${inputType == "radio" ? "radiogroup" : "group"}
			aria-invalid=${ifDefined(isInvalid ? "true" : undefined)}
			aria-readonly=${ifDefined(isReadOnly && inputType == "radio" ? "true" : undefined)}
			aria-required=${ifDefined(isRequired ? "true" : undefined)}
			aria-labelledby=${ifDefined(label ? groupLabelId : undefined)}
		>
			${when(label, () =>
				FieldLabel(
					{
						size: "m",
						label,
						isRequired,
						alignment: labelPosition === "side" ? "right" : "top",
						id: groupLabelId,
					},
					context,
				),
			)}
			<div
				class=${classMap({
					[`${rootClass}InputLayout`]: true,
				})}
			>
				${inputType === "radio" ?
					items.map((item, i) =>
						Radio({
							...item,
							isReadOnly,
							isRequired,
							name: `field-group-example-${name}`,
							customClasses: [`${rootClass}-item`],
							...(isReadOnly ? {isChecked: i === 1} : {}),
						}, context))
						: items.map((item, i) =>
						CheckBox({
							...item,
							isReadOnly,
							isRequired,
							customClasses: [`${rootClass}-item`],
							...(isReadOnly ? {isChecked: i === 1} : {}),
						}, context)
				)}
				${when(helpText, () =>
					HelpText(
						{
							size: "m",
							text: helpText,
							variant: isInvalid ? "negative" : "neutral",
						},
						context,
					),
				)}
			</div>
		</div>
	`;
};

/* Displays a radio group and a checkbox group. */
export const InputOptionsFieldGroupTemplate = (args, context) => Container({
	withBorder: false,
	content: html`
		${Container({
			withBorder: false,
			heading: "Radios",
			content: Template({...args}, context),
		})}
		${Container({
			withBorder: false,
			heading: "Checkboxes",
			content: Template({...args, inputType: "checkbox"}, context),
		})}
	`
});

/* Displays all options for required vs. optional indicators. */
export const NecessityIndicatorFieldGroupTemplate = (args, context) => Container({
	withBorder: false,
	content: html`
		${Container({
			withBorder: false,
			heading: "Required (text)",
			content: Template({...args, label: "Field label (required)",}, context),
		})}
		${Container({
			withBorder: false,
			heading: "Required (asterisk)",
			content: Template({...args, isRequired: true,}, context),
		})}
		${Container({
			withBorder: false,
			heading: "Optional",
			content: Template({...args, label: "Field label (optional)", helpText: "",}, context),
		})}
	`
});
