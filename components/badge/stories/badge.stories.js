import { Sizes } from "@spectrum-css/preview/decorators/utilities.js";
import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { ArgGrid } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { size } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { BadgeGroup } from "./badge.test.js";
import { ContentOptions, Template } from "./template.js";

/**
 * A badge element displays a small amount of color-categorized metadata; ideal for getting a user's attention. Some notes about badge:
 * - Label and icon elements must be nested inside a parent container of class `.spectrum-Badge` in order to achieve the correct layout and wrapping behavior.
 * - The layout of badge is achieved by applying a display of `inline-flex`, allowing badge to display as inline, while the label and/or icon child elements can utilize flexbox for layout.
 */
export default {
	title: "Badge",
	component: "Badge",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		iconName: {
			...(IconStories?.argTypes?.iconName ?? {}),
			if: false,
		},
		iconSet: { table: { disable: true } },
		variant: {
			name: "Variants",
			description: "Changes the badge's background color. The variant list includes both semantic and non-semantic options.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["neutral", "accent", "informative", "positive", "negative", "notice", "gray", "red", "orange", "yellow", "chartreuse", "celery", "green", "seafoam", "cyan", "blue", "indigo", "purple", "fuchsia", "magenta"],
			control: "select",
		},
		fixed: {
			name: "Fixed layout",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Advanced",
			},
			options: ["none", "fixed-inline-start", "fixed-inline-end", "fixed-block-start", "fixed-block-end"],
			control: "select",
		},
	},
	args: {
		rootClass: "spectrum-Badge",
		size: "m",
		variant: "neutral",
		iconSet: "workflow",
		fixed: "none"
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=36806-6551",
		},
		packageJson,
		metadata,
	},
};

/**
 * Badges can contain label, icon, or label and icon. Text wrapping is also included when a `max-inline-size` is applied to the badge.
 */
export const Default = BadgeGroup.bind({});
Default.args = {
	iconName: "Info",
	label: "Badge",
};

// ********* DOCS ONLY ********* //
export const SemanticVariants = (args, context) => ArgGrid({
	Template,
	argKey: "variant",
	options: ["neutral", "accent", "informative", "positive", "negative", "notice"],
	withBorder: false,
	...args,
}, context);
SemanticVariants.args = Default.args;
SemanticVariants.tags = ["!dev"];
SemanticVariants.parameters = {
	chromatic: { disableSnapshot: true },
};
SemanticVariants.storyName = "Semantic";

export const NonSemanticVariants = (args, context) => ArgGrid({
	Template,
	argKey: "variant",
	options: ["gray", "red", "orange", "yellow", "chartreuse", "celery", "green", "seafoam", "cyan", "blue", "indigo", "purple", "fuchsia", "magenta"],
	withBorder: false,
	...args,
}, context);
NonSemanticVariants.args = Default.args;
NonSemanticVariants.tags = ["!dev"];
NonSemanticVariants.parameters = {
	chromatic: { disableSnapshot: true },
};
NonSemanticVariants.storyName = "Non-semantic";

/**
 * Fixed positioning impacts the border radius of the badge component. The border radius is 0 along the fixed edge of the component. The actual component position is not represented on this page.
 */
export const FixedVariants = (args, context) => ArgGrid({
	Template,
	argKey: "fixed",
	options: ["none", "fixed-inline-start", "fixed-inline-end", "fixed-block-start", "fixed-block-end"],
	withBorder: false,
	...args,
}, context);
FixedVariants.args = Default.args;
FixedVariants.tags = ["!dev"];
FixedVariants.parameters = {
	chromatic: { disableSnapshot: true },
};
FixedVariants.storyName = "Fixed-edge";

/**
 * Badge t-shirt sizes correspond to icon sizes.
 */
export const Sizing = (args, context) => Sizes({
	Template: ContentOptions,
	withBorder: false,
	withHeading: false,
	...args,
}, context);
Sizing.args = Default.args;
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};
Sizing.tags = ["!dev"];

// ********* VRT ONLY ********* //
export const WithForcedColors = BadgeGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
