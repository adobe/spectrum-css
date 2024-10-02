import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as Fieldgroup } from "@spectrum-css/fieldgroup/stories/template.js";
import { Template as Picker } from "@spectrum-css/picker/stories/template.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { Template as Stepper } from "@spectrum-css/stepper/stories/template.js";
import { Template as TextField } from "@spectrum-css/textfield/stories/template.js";
import { Template } from "./form.template.js";
import pkgJson from "../package.json";
import { FormGroup } from "./form.test.js";

/**
 * The form component is used for aligning multiple inputs and field groups within a form. It provides structure and spacing for your form fields.
 */
export default {
	title: "Form",
	component: "Form",
	argTypes: {
		labelPosition: {
			name: "Label position",
			description: "Position of the field label in relation to the input.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "select",
			options: ["top", "side"],
		},
		fieldLabelAlignment: {
			name: "Field label alignment",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "select",
			options: ["left", "right"],
			if: { arg: "labelPosition", eq: "side" },
		},
		items: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Form",
		labelPosition: "top",
		items: [
			{
				label: "Company title",
				id: "form-example-company",
				content: [
					(passthroughs, context) => TextField({
						...passthroughs,
						multiline: true,
						name: "field",
					}, context),
				],
			}, {
				label: "Email address",
				id: "form-example-email",
				content: [
					(passthroughs, context) => TextField({
						...passthroughs,
						type: "email",
						name: "email",
					}, context),
				],
			}, {
				label: "Country",
				id: "form-example-country",
				content: [
					(passthroughs, context) => Picker({
						...passthroughs,
						placeholder: "Select a country",
						name: "country",
					}, context),
				],
			}, {
				label: "Interest",
				id: "form-example-interests",
				content: [
					(passthroughs, context) => Fieldgroup({
						layout: "horizontal",
						items: [
							Checkbox({
								...passthroughs,
								label: "Kittens",
								customClasses: ["spectrum-FieldGroup-item"],
							}, context),
							Checkbox({
								...passthroughs,
								label: "Puppies",
								customClasses: ["spectrum-FieldGroup-item"],
							}, context),]
					}),
				],
			},{
				label: "Age",
				id: "form-example-amount",
				content: [
					(passthroughs, context) => Stepper({
						...passthroughs,
					}, context),
				]
			}
		],
	},
	parameters: {
		packageJson: pkgJson,
	},
};

/**
 * A stacked layout with the labels above the form fields. The class `.spectrum-Form--labelPosition` is applied to the form itself. You do not need to apply a specific class to the field label because `.spectrum-FieldLabel--left` is applied to each to each [field label](/docs/components-field-label--docs) by default.
 */
export const Default = FormGroup.bind({});
Default.args = {};

/**
 *  A two column layout with left-aligned label text.
 */
export const LeftAlignedSideLabels = Template.bind({});
LeftAlignedSideLabels.args = {
	...Default.args,
	labelPosition: "side",
};
LeftAlignedSideLabels.tags = ["!dev"];
LeftAlignedSideLabels.parameters = {
	chromatic: { disableSnapshot: true },
};
LeftAlignedSideLabels.storyName = "Left-aligned side labels";

/**
 *  A two column layout with right-aligned label text. `.spectrum-FieldLabel--right` is applied to each to each [field label](/docs/components-field-label--docs).
 */
export const RightAlignedSideLabels = Template.bind({});
RightAlignedSideLabels.args = {
	...Default.args,
	labelPosition: "side",
	fieldLabelAlignment: "right",
};
RightAlignedSideLabels.tags = ["!dev"];
RightAlignedSideLabels.parameters = {
	chromatic: { disableSnapshot: true },
};
RightAlignedSideLabels.storyName = "Right-aligned side labels";

// ********* VRT ONLY ********* //
export const WithForcedColors = FormGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
