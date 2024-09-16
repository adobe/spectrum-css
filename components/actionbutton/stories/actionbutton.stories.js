import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isActive, isDisabled, isEmphasized, isFocused, isHovered, isQuiet, isSelected, size, staticColor } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { ActionButtonGroup, ActionButtons } from "./actionbutton.test.js";
import { ActionButtonsWithIconOptions, TreatmentTemplate } from "./template.js";

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
		iconName: "Edit",
		label: "Edit",
		hideLabel: false,
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
Default.args = {};

export const Emphasized = ActionButtons.bind({});
Emphasized.tags = ["!dev"];
Emphasized.args = {
	isEmphasized: true,
	isSelected: true
};
Emphasized.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

export const Disabled = TreatmentTemplate.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
	isDisabled: true,
};

Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Selected = ActionButtons.bind({});
Selected.tags = ["!dev"];
Selected.args = {
	isEmphasized: false,
	isSelected: true
};
Selected.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

export const Quiet = ActionButtons.bind({});
Quiet.tags = ["!dev"];
Quiet.args = {
	isQuiet: true,
};
Quiet.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

export const StaticWhiteDocs = TreatmentTemplate.bind({});
StaticWhiteDocs.tags = ["!dev"];
StaticWhiteDocs.args = {
	staticColor: "white",
};

StaticWhiteDocs.storyName = "Static white";

StaticWhiteDocs.parameters = {
	chromatic: { disableSnapshot: true },
};

export const StaticBlackDocs = TreatmentTemplate.bind({});
StaticBlackDocs.tags = ["!dev"];
StaticBlackDocs.args = {
	staticColor: "black",
};
StaticBlackDocs.storyName = "Static black";

StaticBlackDocs.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Sizing = (args, context) => Sizes({
	Template: ActionButtonsWithIconOptions,
	withHeading: false,
	withBorder: false,
	...args,	
}, context);
Sizing.args = {};
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot:  true },
};


// ********* VRT ONLY ********* //
export const StaticBlack = ActionButtonGroup.bind({});
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

export const StaticWhite = ActionButtonGroup.bind({});
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

export const WithForcedColors = ActionButtonGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
