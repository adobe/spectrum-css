import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isActive, isDisabled, isFocused, isHovered, isPending, size, staticColor } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { ButtonGroups } from "./button.test.js";
import { ButtonsWithIconOptions, TextOverflowTemplate, TextWrapTemplate, TreatmentTemplate } from "./template.js";

/**
 * Buttons allow users to perform an action or to navigate to another page. They have multiple styles for various needs, and are ideal for calling attention to where a user needs to do something in order to move forward in a flow.
 *
 * There are four available variants that are used for different levels of emphasis and different
 * types of actions. By default, a button uses the fill style with a solid background. The primary
 * and secondary variants also have an outline option.
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
		noWrap: {
			name: "Disable label wrap",
			description: "Used to keep the button label text on one line. Note that this option is not a part of the design specifications which intend for the label to wrap. Use with care and consideration of this option's overflow behavior and the readability of the button's content.",
			type: { name: "boolean" },
			table: {
				category: "Advanced",
			},
		},
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
		noWrap: false,
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Button"],
		},
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=707-2774",
		},
		packageJson,
		metadata,
	},
};

export const Default = ButtonGroups.bind({});
Default.args = {};
Default.tags = ["!autodocs"];

// ********* VRT ONLY ********* //
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
	iconSet: "workflow",
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

/**
 * When a button needs to be placed on top of a dark color background or a visual, use the static white options. Static color buttons do not change shades or values depending upon the color theme.
 */
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
StaticWhitePrimary.storyName = "Static white - primary";

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
StaticWhiteSecondary.storyName = "Static white - secondary";

/**
 * When a button needs to be placed on top of a light color background or a visual, use the static black options. Static color buttons do not change shades or values depending upon the color theme.
 */
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
StaticBlackPrimary.storyName = "Static black - primary";

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
StaticBlackSecondary.storyName = "Static black - secondary";


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
WithWrapping.storyName = "Text overflow";
WithWrapping.args = {
	variant: "primary",
};
WithWrapping.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The normal behavior for lengthy text in the given horizontal space available is that it will wrap to form another line. By using the `.spectrum-Button--noWrap` class, the lengthy button text will not cause a line break and the width of the button will expand until it reaches its maximum width.
 * Please note: this can cause undesired overflow experiences and to help prevent this, the overflowing text will attempt to hide by showing an ellipsis (...). This is demonstrated in the last two examples below, by constraining the maximum width of the button.
 * This option is not part of the design spec, so please use carefully, with consideration of the overflow behavior and the readability of the button's content.
 * */

export const DisableWrapping = TextWrapTemplate.bind({});
DisableWrapping.tags = ["!dev"];
DisableWrapping.storyName = "Text overflow - disabled text wrap";
DisableWrapping.args = {
	variant: "primary",
};

DisableWrapping.parameters = {
	chromatic: { disableSnapshot: true },
};
