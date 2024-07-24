import { Template as Picker } from "@spectrum-css/picker/stories/template.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { Template as Stepper } from "@spectrum-css/stepper/stories/template.js";
import { Template as TextField } from "@spectrum-css/textfield/stories/template.js";
import { version } from "../package.json";
import { FormGroup } from "./form.test";

/**
 * The form component is used for aligning multiple inputs and field groups within a form.
 */
export default {
	title: "Form",
	component: "Form",
	argTypes: {
		labelsAbove: {
			name: "Labels above",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Form",
		labelsAbove: false,
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = FormGroup.bind({});
Default.args = {
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
			label: "Amount",
			id: "form-example-amount",
			content: [
				(passthroughs, context) => Stepper({
					...passthroughs,
				}, context),
			]
		}
	],
};

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
