import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { Sizes } from "@spectrum-css/preview/decorators";
import { version } from "../package.json";
import { DividerGroup } from "./divider.test.js";
import { Template } from "./template.js";

/**
 * Dividers bring clarity to a layout by grouping and dividing content that exists in close proximity. It can also be used to establish rhythm and hierarchy.
 */
export default {
	title: "Divider",
	component: "Divider",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l"],
			control: "select",
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
		vertical: {
			name: "Vertical",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		tag: { table: { disable: true } },
		minDimensionValues: {table: { disable: true }},
	},
	args: {
		rootClass: "spectrum-Divider",
		size: "s",
		vertical: false,
		minDimensionValues: true,
	},
	parameters: {
		componentVersion: version,
	},
};

/**
 * By default, dividers are horizontal and should be used for separating content vertically. The small divider is the default size. 
 */
export const Default = DividerGroup.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
/**
 * To divide similar components such as table rows, action button groups, and components within a panel, use the default, small divider.
 *
 * The medium divider is used for dividing subsections on a page, or to separate different groupings of components such as panels, rails, etc.
 *
 * Only use the large divider for page titles or section titles.
 */
export const Sizing = (args, context) => Sizes({
	Template,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
Sizing.args = {
	minDimensionValues: true,
};
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The vertical divider is used to separate content horizontally. When a vertical divider is used inside of a flex container, use `align-self: stretch; block-size: 100%;` on the divider.
 */
export const VerticalSizing = (args, context) => Sizes({
	Template,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
VerticalSizing.storyName = "Vertical";
VerticalSizing.tags = ["!dev"];
VerticalSizing.args = {
	vertical: true,
	minDimensionValues: true,
};
VerticalSizing.parameters = {
	chromatic: { disableSnapshot: true },
};

export const StaticWhiteGroup = Default.bind({});
StaticWhiteGroup.storyName = "Static white";
StaticWhiteGroup.tags = ["!dev"];
StaticWhiteGroup.args = {
	staticColor: "white",
};
StaticWhiteGroup.parameters = {
	chromatic: {
		modes: disableDefaultModes,
	},
};

export const StaticBlackGroup = Default.bind({});
StaticBlackGroup.storyName = "Static black";
StaticBlackGroup.tags = ["!dev"];
StaticBlackGroup.args = {
	staticColor: "black",
};
StaticBlackGroup.parameters = {
	chromatic: {
		modes: disableDefaultModes,
	},
};

// ********* VRT ONLY ********* //
export const WithForcedColors = DividerGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
