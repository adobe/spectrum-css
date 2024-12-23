import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { size } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { BadgeGroup } from "./badge.test.js";
import { PreviewSets } from "./template.js";

const semanticOptions = ["neutral", "accent", "informative", "positive", "negative"];
const nonSemanticOptions = ["gray", "red", "orange", "yellow", "chartreuse", "celery", "green", "seafoam", "cyan", "blue", "indigo", "purple", "fuchsia", "magenta"];
const fixedOptions = ["none", "fixed-inline-start", "fixed-inline-end", "fixed-block-start", "fixed-block-end"];
/**
 * A badge element displays a small amount of color-categorized metadata; ideal for getting a user's attention. Some notes about badge:
 * - Badge t-shirt sizes correspond to icon sizes
 * - Label and icon elements must be nested inside a parent container of class .spectrum-Badge in order to achieve the correct layout and wrapping behavior.
 * - Layout of Badge is applied with a display of `inline-flex`, allowing badge to display as inline while the child elements for the label and icon utilize flexbox for layout.
 * - Fixed positioning impacts the border radius of the badge component
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
			name: "Background color variants",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["neutral", "accent", "informative", "positive", "negative", "gray", "red", "orange", "yellow", "chartreuse", "celery", "green", "seafoam", "cyan", "blue", "indigo", "purple", "fuchsia", "magenta"],
			control: "select",
		},
		fixed: {
			name: "Fixed layout",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Advanced",
			},
			options: fixedOptions,
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
		packageJson,
		metadata,
	},
	tags: ["!autodocs"],
};

export const Default = BadgeGroup.bind({});
Default.args = {
	iconName: "Info",
	label: "Badge",
};

// ********* DOCS ONLY ********* //
export const SemanticVariants = (args, context) => PreviewSets(semanticOptions, args, context);
SemanticVariants.tags = ["!dev"];
SemanticVariants.parameters = {
	chromatic: { disableSnapshot: true },
};

export const NonSemanticVariants = (args, context) => PreviewSets(nonSemanticOptions, args, context);
NonSemanticVariants.tags = ["!dev"];
NonSemanticVariants.parameters = {
	chromatic: { disableSnapshot: true },
};

export const FixedVariants = (args, context) => PreviewSets(fixedOptions, args, context);
FixedVariants.tags = ["!dev"];
FixedVariants.parameters = {
	chromatic: { disableSnapshot: true },
};

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
