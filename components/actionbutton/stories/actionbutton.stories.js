import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isActive, isDisabled, isEmphasized, isFocused, isHovered, isQuiet, isSelected, size, staticColor } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { ActionButtonGroup } from "./actionbutton.test.js";
import { ActionButtonsWithIconOptions, IconOnlyOption, TreatmentTemplate } from "./template.js";

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

// ********* DOCS ONLY ********* //

export const Default = ActionButtonGroup.bind({});
Default.args = {};
Default.tags = ["!autodocs"];

/**
 * Action buttons should always have a label, unless they are only using an icon that is universally understood and accessible. They can have an optional icon, but it should not be used for decoration. Use an icon only when necessary and when it has a strong association with the label text.
 *
 * The label can be hidden to create an icon-only action button. If the label is hidden, an icon is required, and the label will appear in a tooltip on hover.
 */

export const Standard = TreatmentTemplate.bind({});
Standard.args = Default.args;
Standard.tags = ["!dev"];
Standard.parameters = {
	chromatic: { disableSnapshot: true },
};

Standard.storyName = "Default";

/**
 * By default, action buttons are not emphasized. This is optimal for when an action button is not the core part of an interface, such as in application panels, where all the visual components are monochrome in order to direct focus to the content.
 *
 * The emphasized action button has a blue background for its selected state in order to provide a visual prominence. This is optimal for when the selection should call attention, such as within a tool bar.
 */

export const Emphasized = TreatmentTemplate.bind({});
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

/**
 * By default, action buttons have a visible background. This style works best in a dense array of controls where the background helps to separate action buttons from the surrounding container, or to give visibility to isolated buttons.

 * Alternatively, quiet action buttons can have no visible background until they’re interacted with. This style works best when a clear layout (vertical stack, table, grid) makes it easy to parse the buttons. Too many quiet components in a small space can be hard to read.
 */

export const Quiet = TreatmentTemplate.bind({});
Quiet.tags = ["!dev"];
Quiet.args = {
	isQuiet: true,
};
Quiet.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

/**
 * An action button can have a hold icon (a small corner triangle). This icon indicates that holding down the action button for a short amount of time can reveal a popover menu, which can be used, for example, to switch between related actions.
 */

export const HoldIcon = IconOnlyOption.bind({});
HoldIcon.tags = ["!dev"];
HoldIcon.parameters = {
	chromatic: {disableSnapshot: true},
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

export const StaticWhiteQuiet = TreatmentTemplate.bind({});
StaticWhiteQuiet.tags = ["!dev"];
StaticWhiteQuiet.args = {
	staticColor: "white",
	isQuiet: true,
};

StaticWhiteQuiet.storyName = "Static white (quiet)";

StaticWhiteQuiet.parameters = {
	chromatic: { disableSnapshot: true }
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

export const StaticBlackQuiet = TreatmentTemplate.bind({});
StaticBlackQuiet.tags = ["!dev"];
StaticBlackQuiet.args = {
	staticColor: "black",
	isQuiet: true,
};

StaticBlackQuiet.storyName = "Static black (quiet)";

StaticBlackQuiet.parameters = {
	chromatic: { disableSnapshot: true }
};

/**
 * Action buttons come in five different sizes: extra-small, small, medium, large, and extra-large. The medium size is the default and most frequently used option. Use the other sizes sparingly; they should be used to create a hierarchy of importance within the page.
 */

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
