import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isEmphasized, isQuiet, size } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { TabsGroups } from "./tabs.test.js";
import { Template } from "./template.js";

/**
 * Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.
 */
export default {
	title: "Tabs",
	component: "Tabs",
	argTypes: {
		content: { table: { disable: true } },
		size: size(["s", "m", "l", "xl"]),
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
		isQuiet,
		isEmphasized,
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

export const Default = TabsGroups.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = TabsGroups.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //
export const Vertical = Template.bind({});
Vertical.tags = ["!dev"];
Vertical.args = {
	orientation: "vertical",
};
Vertical.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

export const Overflow = Template.bind({});
Overflow.tags = ["!dev"];
Overflow.args = {
	orientation: "overflow",
};
Overflow.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};
