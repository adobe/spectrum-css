import { Template } from "./template";

import { Template as Menu } from "@spectrum-css/menu/stories/template.js";

export default {
	title: "Components/Combobox",
	description:
		"Comboboxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.",
	component: "Combobox",
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
		isOpen: {
			name: "Open",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
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
		isValid: {
			name: "Valid",
			type: { name: "boolean" },
			table: {
				disable: true,
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
			if: { arg: "isInvalid", truthy: false },
		},
		isInvalid: {
			name: "Invalid",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
			if: { arg: "isValid", truthy: false },
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
		isKeyboardFocused: {
			name: "Keyboard Focused",
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
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		showFieldLabel: {
			name: "Show field label",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		fieldLabelText: {
			name: "Field label text",
			type: { name: "text" },
			table: {
				type: { summary: "text" },
				category: "Component",
			},
			control: "text",
			if: { arg: "showFieldLabel", truthy: true },
		},
		content: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Combobox",
		size: "m",
		isOpen: true,
		isQuiet: false,
		isInvalid: false,
		isValid: false,
		isFocused: false,
		isKeyboardFocused: false,
		isLoading: false,
		isDisabled: false,
		showFieldLabel: false,
		fieldLabelText: "Select location",
		content: [
			Menu({
				role: "listbox",
				subrole: "option",
				isSelectable: true,
				items: [
					{
						label: "Ballard",
						isSelected: true,
						isChecked: true,
					},
					{
						label: "Fremont",
					},
					{
						label: "Greenwood",
					},
					{
						type: "divider",
					},
					{
						label: "United States of America",
						isDisabled: true,
					},
				],
			}),
		],
		customStorybookStyles: {
			display: "block"
		}
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("combobox")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};

export const Quiet = Template.bind({});
Quiet.args = {
	isQuiet: true,
	showFieldLabel: true,
	fieldLabelText: "Select location, this label should wrap",
};

export const Express = Template.bind({});
Express.args = { express: true };
