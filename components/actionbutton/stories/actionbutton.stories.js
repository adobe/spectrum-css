import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused, isHovered, isSelected } from "@spectrum-css/preview/types";
import { name, version } from "../package.json";
import { ActionButtonGroup, ActionButtons } from "./template";

/**
 * The action button component represents an action a user can take.
 */
export default {
	title: "Action button",
	component: "ActionButton",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["xs", "s", "m", "l", "xl"],
			control: "select",
		},
		iconName: {
			...(IconStories?.argTypes?.iconName ?? {}),
			if: false,
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
		isQuiet: {
			name: "Quiet styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isEmphasized: {
			name: "Emphasized styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
			if: { arg: "isSelected", truthy: true }
		},
		isDisabled,
		isSelected,
		isHovered,
		isFocused,
		isActive: {
			name: "Active",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		hideLabel: {
			name: "Hide label",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
		hasPopup: {
			name: "Has popup",
			description: "If the button triggers a popup action, this should be set to reflect the type of element that pops-up.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Accessibility",
			},
			control: "select",
			options: ["true", "menu", "listbox", "tree", "grid", "dialog", "false"],
		},
		staticColor: {
			name: "Static color",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Advanced",
			},
			options: ["white", "black"],
			control: "select",
		},
	},
	args: {
		rootClass: "spectrum-ActionButton",
		size: "m",
		isQuiet: false,
		isEmphasized: false,
		hasPopup: "false",
		isActive: false,
		isFocused: false,
		isHovered: false,
		isSelected: false,
		isDisabled: false,
		iconName: "More",
		label: "",
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-ActionButton:not([disabled])"],
		},
		componentVersion: version,
		componentPkgName: name,
		componentGuidelinesName: "action-button",
	},
};

export const Default = ActionButtonGroup.bind({});
Default.args = {
	label: "More",
};

export const Emphasized = ActionButtons.bind({});
Emphasized.tags = ["!dev"];
Emphasized.args = {
	label: "More",
	isEmphasized: true,
};

export const Quiet = ActionButtons.bind({});
Quiet.tags = ["!dev"];
Quiet.args = {
	label: "More",
	isQuiet: true,
};

// ********* VRT ONLY ********* //
export const StaticBlack = Default.bind({});
StaticBlack.tags = ["!autodocs", "!dev"];
StaticBlack.args = {
	...Default.args,
	staticColor: "black",
};
StaticBlack.parameters = {
	chromatic: {
		modes: disableDefaultModes
	},
};

export const StaticWhite = Default.bind({});
StaticWhite.tags = ["!autodocs", "!dev"];
StaticWhite.args = {
	...Default.args,
	staticColor: "white",
};
StaticWhite.parameters = {
	chromatic: {
		modes: disableDefaultModes
	},
};

export const WithForcedColors = Default.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
