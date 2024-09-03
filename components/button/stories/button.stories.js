import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isActive, isDisabled, isFocused, isHovered, isPending, size, staticColor } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { ButtonGroups } from "./button.test.js";
import { ButtonsWithIconOptions, TextOverflowTemplate, TreatmentTemplate } from "./template.js";

/**
 * Buttons allow users to perform an action or to navigate to another page. They have multiple styles for various needs, and are ideal for calling attention to where a user needs to do something in order to move forward in a flow.
 */
export default {
	title: "Button",
	component: "Button",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		iconName: {
			...(IconStories?.argTypes?.iconName ?? {}),
			if: false,
		},
		hideLabel: {
			table: {
				disable: true,
			},
		},
		variant: {
			name: "Variant",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["accent", "negative", "primary", "secondary"],
			control: "select",
		},
		treatment: {
			name: "Treatment",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["fill", "outline"],
			control: "inline-radio",
		},
		isDisabled,
		isHovered,
		isFocused,
		isActive,
		isPending,
		staticColor,
	},
	args: {
		rootClass: "spectrum-Button",
		size: "m",
		label: "Edit",
		treatment: "fill",
		variant: "accent",
		isDisabled: false,
		isPending: false,
		isActive: false,
		isFocused: false,
		isHovered: false,
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Button"],
		},
		packageJson: pkgJson,
	},
	tags: ["!autodocs"],
};

export const Default = ButtonGroups.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const StaticWhite = ButtonGroups.bind({});
StaticWhite.tags = ["!autodocs", "!dev"];
StaticWhite.args = {
	staticColor: "white",
};
StaticWhite.parameters = {
	chromatic: {
		modes: disableDefaultModes
	},
};

export const StaticBlack = ButtonGroups.bind({});
StaticBlack.tags = ["!autodocs", "!dev"];
StaticBlack.args = {
	staticColor: "black",
};
StaticBlack.parameters = {
	chromatic: {
		modes: disableDefaultModes
	},
};

export const WithForcedColors = ButtonGroups.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
WithForcedColors.args = {
	iconName: "Actions",
};

// ********* DOCS ONLY ********* //

/**
 * Buttons come in four different sizes: small, medium, large, and extra large. The medium size is
 * the default and most frequently used option. Use the other sizes sparingly; they should be used
 * to create a hierarchy of importance within the page.
 */
export const Sizing = (args, context) => Sizes({
	Template: ButtonsWithIconOptions,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
Sizing.args = {};
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The accent button communicates strong emphasis and is reserved for encouraging critical
 * actions. In general, only use the emphasized option for the most important action on the page.
 */
export const Accent = ButtonsWithIconOptions.bind({});
Accent.tags = ["!dev"];
Accent.args = {
	variant: "accent",
};
Accent.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The primary button is for medium emphasis. Use it in place of an accent button when the
 * action requires less prominence, or if there are multiple primary actions of the same importance
 * in the same view. Both the fill (default) and outline styles are demonstrated in this example.
 */
export const Primary = TreatmentTemplate.bind({});
Primary.tags = ["!dev"];
Primary.args = {
	variant: "primary",
	treatmentLayout: "stacked",
};
Primary.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The secondary button is for low emphasis. It’s paired with other button types to surface less
 * prominent actions, and should never be the only button in a group. Both the fill (default) and
 * outline styles are demonstrated in this example.
 */
export const Secondary = TreatmentTemplate.bind({});
Secondary.tags = ["!dev"];
Secondary.args = {
	variant: "secondary",
	treatmentLayout: "stacked",
};
Secondary.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The negative button is for emphasizing actions that can be destructive or have negative
 * consequences if taken. Use it sparingly.
 */
export const Negative = ButtonsWithIconOptions.bind({});
Negative.tags = ["!dev"];
Negative.args = {
	variant: "negative",
};
Negative.parameters = {
	chromatic: { disableSnapshot: true },
};

export const StaticWhitePrimary = TreatmentTemplate.bind({});
StaticWhitePrimary.tags = ["!dev"];
StaticWhitePrimary.args = {
	variant: "primary",
	treatmentLayout: "stacked",
	staticColor: "white",
};
StaticWhitePrimary.parameters = {
	chromatic: { disableSnapshot: true },
};

export const StaticWhiteSecondary = TreatmentTemplate.bind({});
StaticWhiteSecondary.tags = ["!dev"];
StaticWhiteSecondary.args = {
	variant: "secondary",
	treatmentLayout: "stacked",
	staticColor: "white",
};
StaticWhiteSecondary.parameters = {
	chromatic: { disableSnapshot: true },
};

export const StaticBlackPrimary = TreatmentTemplate.bind({});
StaticBlackPrimary.tags = ["!dev"];
StaticBlackPrimary.args = {
	variant: "primary",
	treatmentLayout: "stacked",
	staticColor: "black",
};
StaticBlackPrimary.parameters = {
	chromatic: { disableSnapshot: true },
};

export const StaticBlackSecondary = TreatmentTemplate.bind({});
StaticBlackSecondary.tags = ["!dev"];
StaticBlackSecondary.args = {
	variant: "secondary",
	treatmentLayout: "stacked",
	staticColor: "black",
};
StaticBlackSecondary.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The pending button is for indicating that a quick progress action is taking place. In this case, the
 * label and optional icon disappear and a progress circle appears. The progress circle always shows an
 * indeterminate progress. We recommend the use of the `.is-pending` class on the component’s parent
 * container, but there is also an option to use an attribute of `pending` instead. Buttons should have
 * the disabled attribute when the pending state is applied.
 */
export const Pending = TreatmentTemplate.bind({});
Pending.tags = ["!dev"];
Pending.args = {
	variant: "accent",
	isPending: true,
	onclick: () => {},
};
Pending.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A button in a disabled state shows that an action exists, but is not available in that circumstance. 
 * This state can be used to maintain layout continuity and to communicate that an action may become
 * available later.
 */
export const Disabled = TreatmentTemplate.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
	variant: "accent",
	isDisabled: true,
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * When the button text is too long for the horizontal space available, it wraps to form another line. 
 * When there is no icon present, the text is aligned center. When there is an icon present, the text is
 * aligned `start` (left with a writing direction of left-to-right) and the icon remains vertically aligned
 * at the top.
 */
export const WithWrapping = TextOverflowTemplate.bind({});
WithWrapping.tags = ["!dev"];
WithWrapping.storyName = "Text overflow behavior";
WithWrapping.args = {
	variant: "primary",
};
WithWrapping.parameters = {
	chromatic: { disableSnapshot: true },
};
