import { Template } from "./template";

import { isDisabled, isFocused, isInvalid, isKeyboardFocused, isLoading, isOpen, isValid } from "@spectrum-css/preview/types/states.js";

import { Template as Menu } from "@spectrum-css/menu/stories/template.js";

/** Comboboxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query. */
export default {
	title: "Components/Combobox",
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
		isOpen,
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
			...isValid,
			if: { arg: "isInvalid", truthy: false },
		},
		isInvalid: {
			...isInvalid,
			if: { arg: "isValid", truthy: false },
		},
		isFocused,
		isKeyboardFocused,
		isLoading,
		isDisabled,
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
Default.args = {
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
};
