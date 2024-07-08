import { Variants } from "./template";
import { version } from "../package.json";

/**
 * Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.
 */
export default {
	title: "Tabs",
	component: "Tabs",
	argTypes: {
		content: { table: { disable: true } },
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
		orientation: {
			name: "Orientation",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
				default: "horizontal",
			},
			options: ["horizontal", "vertical", "overflow"],
			control: "select",
			default: "horizontal",
		},
		isQuiet: {
			name: "Quiet",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isEmphasized: {
			name: "Emphasized",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isCompact: {
			name: "Compact",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
			if: { arg: "isQuiet", truthy: true },
		},
		iconOnly: {
			name: "Icon only",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Tabs",
		isQuiet: false,
		isEmphasized: false,
		isCompact: false,
		iconOnly: false,
		content: [
			{
				id: "tab-1",
				label: "Tab 1",
				icon: "Folder",
				isSelected: true,
			},
			{
				id: "tab-2",
				label: "Tab 2",
				icon: "Image",
			},
			{
				id: "tab-3",
				label: "Tab 3",
				icon: "Document",
				isDisabled: true,
			},
		],
	},
	parameters: {
		actions: {
			handles: [".spectrum-Tabs-item"],
		},
		componentVersion: version,
	},
};

export const Default = Variants.bind({});
Default.args = {};

export const Vertical = Variants.bind({});
Vertical.args = {
	orientation: "vertical",
};

export const Overflow = Variants.bind({});
Overflow.args = {
	orientation: "overflow",
};
