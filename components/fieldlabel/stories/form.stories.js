import { html } from "lit";

import { Template } from "./form.template.js";

/**
 * The form component is used for aligning multiple inputs and field groups within a form.
 */
export default {
	title: "Components/Form",
	component: "Form",
	argTypes: {
		labelsAbove: {
			name: "Labels above",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Form",
		labelsAbove: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
	},
	decorators: [
		(Story, context) => html`<div style="padding: 16px">${Story(context)}</div>`
	],
};

export const Standard = Template.bind({});
Standard.args = {
	labelsAbove: false,
};

export const LabelsAbove = Template.bind({});
LabelsAbove.args = {
	labelsAbove: true,
};
