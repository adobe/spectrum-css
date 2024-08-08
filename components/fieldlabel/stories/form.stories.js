import { Template as Picker } from "@spectrum-css/picker/stories/template.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { Template as Stepper } from "@spectrum-css/stepper/stories/template.js";
import { Template as TextField } from "@spectrum-css/textfield/stories/template.js";
import { version } from "../package.json";
import { Template } from "./form.template.js";


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

export const Default = Template.bind({});
Default.args = {
	items: [
		{
			label: "Company title",
			id: "form-example-company",
			content: TextField.bind(null, {
				multiline: true,
				name: "field",
			})
		}, {
			label: "Email address",
			id: "form-example-email",
			content: TextField.bind(null, {
				type: "email",
				name: "email",
			})
		}, {
			label: "Country",
			id: "form-example-country",
			content: Picker.bind(null, {
				placeholder: "Select a country",
				name: "country",
			})
		}, {
			label: "Amount",
			id: "form-example-amount",
			content: Stepper.bind(null, {})
		}
	],
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Template.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
