// Import the component markup template
import { default as Radio } from "@spectrum-css/radio/stories/radio.stories.js";
import { Template } from "./template";

export default {
	title: "Components/Field group",
	description: "The Field group component is...",
	component: "Fieldgroup",
	argTypes: {
		layout: {
			name: "Layout",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["vertical", "horizontal"],
			control: "select",
		},
		labelPosition: {
			name: "Label Position",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["top", "side"],
			control: "select",
		},
		isInvalid: {
			name: "Invalid",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-FieldGroup",
		layout: "vertical",
		labelPosition: "top",
		isInvalid: false,
	},
	parameters: {
		actions: {
			handles: [...Radio.parameters.actions.handles],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("fieldgroup") ? "migrated" : "legacy",
			version: process.env.VERSIONS?.["fieldgroup"],
		},
	},
};

export const Vertical = Template.bind({});
Vertical.args = {
	layout: "vertical",
	isInvalid: true,
	items: [
		{
			id: "1",
			label: "Radio 1",
		},
		{
			id: "2",
			label: "Radio 2",
		},
	],
};

export const Horizontal = Template.bind({});
Horizontal.args = {
	layout: "horizontal",
	isInvalid: true,
	items: [
		{
			id: "1",
			label: "Radio 1",
		},
		{
			id: "2",
			label: "Radio 2",
		},
	],
};
