import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { size } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { ActionGroups } from "./actiongroup.test.js";
/**
 * The action group component is a collection of action buttons.
 */
export default {
	title: "Action group",
	component: "ActionGroup",
	argTypes: {
		areQuiet: ActionButton.argTypes.isQuiet,
		areEmphasized: ActionButton.argTypes.isEmphasized,
		staticColor: ActionButton.argTypes.staticColor,
		content: { table: { disable: true } },
		size: size(["xs", "s", "m", "l", "xl"]),
		vertical: {
			name: "Vertical layout",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		compact: {
			name: "Compact layout",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		justified: {
			name: "Justified",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-ActionGroup",
		size: "m",
		areQuiet: ActionButton.args.isQuiet,
		areEmphasized: ActionButton.args.isEmphasized,
		staticColor: ActionButton.args.staticColor,
		vertical: false,
		compact: false,
		justified: false,
	},
	parameters: {
		actions: {
			handles: [
				...(ActionButton?.parameters?.actions?.handles ?? []),
			],
		},
		componentVersion: version,
	},
};

export const Default = ActionGroups.bind({});
Default.args = {
	content: [
		{
			iconName: "Edit",
			label: "Edit",
		},
		{
			iconName: "Copy",
			label: "Copy",
		},
		{
			iconName: "Delete",
			label: "Delete",
			isSelected: true,
		},
	],
};

// ********* VRT ONLY ********* //
export const WithForcedColors = ActionGroups.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
