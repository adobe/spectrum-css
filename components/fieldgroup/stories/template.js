import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as HelpText } from "@spectrum-css/helptext/stories/template.js";
import { renderContent, Variants } from "@spectrum-css/preview/decorators";
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
		isReadOnly = false,
		isRequired = false,
		label,
		labelPosition,
		isInvalid,
		helpText,
		items = [],
	} = {},
	context = {},
) => html`
	<div
		class=${classMap({
			[rootClass]: true,
			[`${rootClass}--${labelPosition}label`]:
				typeof labelPosition !== "undefined",
			[`${rootClass}--${layout}`]: typeof layout !== "undefined",
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		aria-invalid=${ifDefined(isInvalid ? "true" : undefined)}
		type=${ifDefined(inputType)}
		aria-readonly=${ifDefined(isReadOnly ? "true" : undefined)}
		aria-required=${ifDefined(isRequired ? "true" : undefined)}
	>
		${when(label, () =>
			FieldLabel(
				{
					size: "m",
					label,
					alignment: labelPosition === "side" ? "right" : "top",
				},
				context,
			),
		)}
		<div
			class=${classMap({
				[`${rootClass}InputLayout`]: true,
			})}
		>
			${renderContent(items, { args: { isReadOnly, isRequired }, context })}
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

export const FieldGroupSet = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Horizontal",
			layout: "horizontal",
			items: [
				(passthroughs, context) => Checkbox({
					...passthroughs,
					id: "apple",
					label: "Apples are best",
					customClasses: ["spectrum-FieldGroup-item"],
				}, context),
				(passthroughs, context) => Checkbox({
					...passthroughs,
					id: "banana",
					label: "Bananas forever",
					customClasses: ["spectrum-FieldGroup-item"],
				}, context),
				(passthroughs, context) => Checkbox({
					...passthroughs,
					id: "cherry",
					label: "Cherries ftw",
					customClasses: ["spectrum-FieldGroup-item"],
				}, context),
			],
		},
		{
			testHeading: "Label position: side",
			label: "Pick one:",
			labelPosition: "side",
			helpText: "Select an option to continue.",
		},
	],
	stateData: [
		{
			testHeading: "Invalid",
			isInvalid: true,
			helpText: "Select an option to continue.",
		},
		{
			testHeading: "Read only",
			isReadOnly: true,
		},
	]
});
