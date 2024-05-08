import { isInvalid } from "@spectrum-css/preview/types";

import { Template } from "./template";

import { default as FieldLabel } from "@spectrum-css/fieldlabel/stories/fieldlabel.stories.js";
import { default as Radio } from "@spectrum-css/radio/stories/radio.stories.js";

export default {
	title: "Components/Field group",
	component: "FieldGroup",
	argTypes: {
		label: FieldLabel.argTypes.label,
		isHorizontal: {
			name: "Use horizontal layout",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Variant",
			},
			control: "boolean",
		},
		isAsideLabel: {
			name: "Label side position",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Variant",
			},
			control: "boolean",
		},
		isInvalid,
		helpText: {
			name: "Help text",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				disable: false,
				category: "Content",
			},
			control: { type: "text" }
		},
		items: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-FieldGroup",
		isAsideLabel: false,
		isHorizontal: false,
		isInvalid: false,
		label: "Choose your favorite fruit",
		helpText: "Select an option to continue.",
		items: [
			{
				label: "Banana",
				isChecked: true,
				id: "banana",
			},
			{
				label: "Apple",
				id: "apple",
			},
			{
				label: "Orange",
				id: "orange",
			},
		],
	},
	parameters: {
		actions: {
			handles: [
				...Radio.parameters.actions.handles
			],
		},
		status: {
			type: "migrated",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};

export const WithForcedColors = Template.bind({});
WithForcedColors.parameters = {
	chromatic: { forcedColors: "active" },
};
