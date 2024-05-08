
import { isDisabled, isFocused, isInvalid, isKeyboardFocused, isLoading, isOpen } from "@spectrum-css/preview/types";

import { Template } from "./template";

import { Template as Menu } from "@spectrum-css/menu/stories/template.js";

/**
 * Comboboxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.
 */
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
				category: "Variant",
			},
			control: "boolean",
		},
		isInvalid,
		isFocused,
		isKeyboardFocused,
		isLoading,
		isDisabled,
		showFieldLabel: {
			name: "Show field label",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Variant",
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
		fieldLabelPosition: {
			name: "Field label position",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["top", "left"],
			control: "select",
			if: { arg: "showFieldLabel", truthy: true },
		},
		content: { table: { disable: true } },
		labelLeft: {
			name: "Field label beside",
			type: { name: "boolean" },
			table: {
				disable: true,
				type: { summary: "boolean" },
				category: "Variant",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Combobox",
		size: "m",
		isOpen: true,
		isQuiet: false,
		isInvalid: false,
		isFocused: false,
		isKeyboardFocused: false,
		isLoading: false,
		isDisabled: false,
		showFieldLabel: false,
		fieldLabelText: "Select location",
		fieldLabelPosition: "top",
		labelLeft: false,
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
			"display": "flex",
			"align-items": "flex-start",
			"gap": "8px",
			"flex-wrap": "wrap",
		}
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
		docs: {
			story: {
				height: "200px"
			}
		},
	},
};

const getOverflowHeight = (size) => {
	switch (size) {
		case "s":
			return "120px";
		case "l":
			return "180px";
		case "xl":
			return "240px";
		default:
			return "150px";
	}
};

const Comboboxes = (args) => {
	if (window.isChromatic()) args.fieldLabelText = "Select location, this label should wrap";
	return Template({
		...args,
		customStyles: {
			"margin-block-end": args.isOpen ? getOverflowHeight(args.size) : undefined,
		},
	});
};

export const Default = Comboboxes.bind({});
Default.args = {};
