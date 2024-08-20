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
	},
	args: {
		rootClass: "spectrum-Divider",
		size: "m",
		vertical: false,
	},
	parameters: {
		componentVersion: version,
	},
};

/**
 * The default size for divider is medium.
 */
export const Default = DividerGroup.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
export const Sizing = (args, context) => Sizes({
	Template,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * When a vertical divider is used inside of a flex container, use `align-self: stretch; block-size: auto;` on the divider.
 */
export const VerticalGroup = (args, context) => Sizes({
	Template,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
VerticalGroup.storyName = "Vertical";
VerticalGroup.tags = ["!dev"];
VerticalGroup.args = {
	vertical: true,
};
VerticalGroup.parameters = {
	chromatic: { disableSnapshot: true },
};

export const StaticWhiteGroup = (args, context) => Sizes({
	Template,
	withHeading: false,
	withBorder: false,
	...args,
}, context);

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

export const StaticBlackGroup = (args, context) => Sizes({
	Template,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
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
