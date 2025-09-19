import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { Sizes, withDownStateDimensionCapture } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isActive, isDisabled, isEmphasized, isFocused, isHovered, isOpen, isQuiet, isSelected, size, staticColor } from "@spectrum-css/preview/types";
import { ActionButtonGroup } from "./actionbutton.test.js";
import { ActionButtonsWithIconOptions, IconOnlyOption, Template, TreatmentTemplate } from "./template.js";

// Local assets to render the component styles and structure
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";

/**
 * The action button component represents an action a user can take.
 *
 * ## Usage notes
 *
 * For action buttons that only contain an icon with no label, do not include the element with the `.spectrum-ActionButton-label` class in the markup.
 */
export default {
	title: "Action button",
	component: "ActionButton",
	argTypes: {
		size: size(["xs", "s", "m", "l", "xl"]),
		iconName: {
			...(IconStories?.argTypes?.iconName ?? {}),
			name: "Workflow icon",
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
		isEmphasized: {
			...isEmphasized,
			if: { arg: "staticColor", truthy: false },
		},
		isDisabled,
		isSelected: {
			...isSelected,
			description: "An optional state used when treating the action button as a toggle.",
		},
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
			name: "Has pop-up",
			description: "If the button triggers a pop-up action, this should be set to reflect the type of element that pops-up.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Accessibility",
			},
			control: "select",
			options: ["true", "menu", "listbox", "tree", "grid", "dialog", "false"],
		},
		hasLongPress: {
			name: "Long press",
			description: "If the trigger supports a long-press action which triggers the menu, this should be set to true.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Accessibility",
			},
			control: "boolean",
		},
		isOpen: {
			...isOpen,
			name: "Pop-up is open",
			description: "When the button triggers a pop-up, this should be true when the pop-up is open.",
			if: { arg: "hasPopup", truthy: true },
		},
		staticColor: {
			...staticColor,
			if: { arg: "isEmphasized", truthy: false },
		},
	},
	args: {
		rootClass: "spectrum-ActionButton",
		size: "m",
		isQuiet: false,
		isEmphasized: false,
		hasPopup: "false",
		hasLongPress: false,
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
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=702-2877",
		},
		downState: {
			selectors: [".spectrum-ActionButton:not(:disabled)"],
		},
		packageJson,
		metadata,
		docs: {
			story: {
				height: "auto",
			},
		},
		status: {
			type: "migrated",
		},
	},
	decorators: [
		withDownStateDimensionCapture,
	],
	tags: ["migrated"],
};

export const Default = ActionButtonGroup.bind({});
Default.args = {};
Default.tags = ["!autodocs"];

// ********* DOCS ONLY ********* //
/**
 * Action buttons should always have a label, unless they are only using an icon that is universally understood and accessible. They can have an optional icon, but it should not be used for decoration. Use an icon only when necessary and when it has a strong association with the label text.
 *
 * The label can be hidden to create an icon-only action button. If the label is hidden, an icon is required, and the implementation should show the label with a tooltip on hover.
 *
 * Action buttons can be used as toggles instead of for taking direct action. The optional "selected" state displayed below is used for when the action button is toggleable.
 */
export const Standard = TreatmentTemplate.bind({});
Standard.args = Default.args;
Standard.tags = ["!dev"];
Standard.parameters = {
	chromatic: { disableSnapshot: true },
};
Standard.storyName = "Default";

/**
 * The emphasized action button has a blue background for its selected state in order to provide a visual prominence.
 * This is optimal for when the selection should call attention, such as within a tool bar.
 * For this variant, the `.spectrum-ActionButton--emphasized` class is applied to `.spectrum-ActionButton`.
 */
export const Emphasized = TreatmentTemplate.bind({});
Emphasized.tags = ["!dev"];
Emphasized.args = {
	isEmphasized: true,
};
Emphasized.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

export const EmphasizedQuiet = TreatmentTemplate.bind({});
EmphasizedQuiet.tags = ["!dev"];
EmphasizedQuiet.args = {
	isEmphasized: true,
	isQuiet: true
};
EmphasizedQuiet.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};
EmphasizedQuiet.storyName = "Quiet, emphasized";

/**
 * Quiet action buttons have no visible background until they’re interacted with. This style works best when a clear layout (vertical stack, table, grid) makes it easy to parse the buttons. Too many quiet components in a small space can be hard to read.
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
 * An action button can have a hold icon (a small corner triangle). This icon indicates that holding down the action button for a
 * short amount of time can reveal a [popover](/docs/components-popover--docs) menu, which can be used, for example, to switch
 * between related actions. Note that this popover menu is not demonstrated here—this would be handled by the implementation.
 * Because of the way padding is calculated, the hold icon must be placed before the workflow icon in the markup.
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

/**
 * When an action button needs to be placed on top of a color background or a visual, use the static color
 * option. Use static black on light color or image backgrounds, and static white on dark color or image
 * backgrounds, regardless of the color theme. For more info, see the
 * [design guidelines](https://spectrum.adobe.com/page/action-button/#Static-color).
 *
 * Emphasized is not supported for the static black and static white variants.
 */
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

/**
 * When the action button text is too long for the available horizontal space, it truncates at the end.
 * To demonstrate what this looks like, this example sets a maximum width on the button.
 *
 * Implementations should also reveal the full text on hover, per this component's
 * [design guidelines on text overflow](https://spectrum.adobe.com/page/action-button/#Text-overflow).
 * This is not demonstrated here.
 */
export const TextOverflowBehavior = Template.bind({});
TextOverflowBehavior.tags = ["!dev"];
TextOverflowBehavior.args = {
	label: "This is extra long text that will cause text truncation",
	customStyles: {
		"max-inline-size": "120px",
	},
};
TextOverflowBehavior.parameters = {
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
