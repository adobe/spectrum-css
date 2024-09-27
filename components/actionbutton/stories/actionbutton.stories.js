import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isActive, isDisabled, isEmphasized, isFocused, isHovered, isQuiet, isSelected, size, staticColor } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { ActionButtonGroup, ActionButtons } from "./actionbutton.test.js";

/**
 * The action button component represents an action a user can take.
 */
export default {
	title: "Action button",
	component: "ActionButton",
	argTypes: {
		size: size(["xs", "s", "m", "l", "xl"]),
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
		isQuiet,
		isEmphasized,
		isDisabled,
		isSelected,
		isHovered,
		isFocused,
		isActive,
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
		staticColor,
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
		packageJson: pkgJson,
		docs: {
			story: {
				height: "auto",
			},
		}
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
Emphasized.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

export const Quiet = ActionButtons.bind({});
Quiet.tags = ["!dev"];
Quiet.args = {
	label: "More",
	isQuiet: true,
};
Quiet.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

// ********* VRT ONLY ********* //
export const WithForcedColors = ActionButtonGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
