import { Template } from "./template";

import { Template as Menu } from "@spectrum-css/menu/stories/template.js";

export default {
	title: "Components/Picker",
	description: "A picker outlines a set of options for a user.",
	component: "Picker",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l", "xl"],
			control: "select",
		},
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		labelPosition: {
			name: "Label position",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			options: ["top", "left"],
			control: { type: "select" },
		},
		placeholder: {
			name: "Placeholder",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		isQuiet: {
			name: "Quiet styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isOpen: {
			name: "Open",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isFocused: {
			name: "Focused",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isLoading: {
			name: "Loading",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isInvalid: {
			name: "Invalid input",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		content: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Picker",
		size: "m",
		label: "Country",
		placeholder: "Select a country",
		isQuiet: false,
		isLoading: false,
		isDisabled: false,
		isFocused: false,
		isInvalid: false,
		isOpen: false,
		content: [
			Menu.bind(null, {
				items: [
					{ label: "Deselect" },
					{ label: "Select Inverse" },
					{ label: "Feather..." },
					{ label: "Select and Mask..." },
					{ type: "divider" },
					{ label: "Save Selection" },
					{ label: "Make Work Path", isDisabled: true },
				]
			})
		],
		customStorybookStyles: {
			display: "inline-block",
		},
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("picker")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};

export const Open = Template.bind({});
Open.args = {
	isOpen: true,
};

export const SideLabel = Template.bind({});
SideLabel.args = {
	labelPosition: "left",
	placeholder: "Select your state or province"
};

export const Quiet = Template.bind({});
Quiet.args = {
	isQuiet: true,
};

export const Loading = Template.bind({});
Loading.args = {
	isLoading: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
	helpText: "Please select a country",
	isInvalid: true,
};

export const Focused = Template.bind({});
Focused.args = {
	helpText: "Please select a country",
	isFocused: true,
};

export const Express = Template.bind({});
Express.args = { express: true };
