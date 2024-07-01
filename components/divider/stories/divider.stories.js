import { Template } from "./template";
import { AllDividerSizes } from "./template";

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
};

/**
 * The default size for divider is medium.
 */
export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
	docs: {
		story: {
			height: "auto",
		}
	},
};

/*
 * Stories for the MDX "Docs" only.
 * "storyName" refers to the display name/heading for a component
 */

export const Sizes = AllDividerSizes.bind({});
Sizes.tags = ["autodocs", "!dev"];
Sizes.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * When a vertical divider is used inside of a flex container, use `align-self: stretch; height: auto;` on the divider.
 */
export const VerticalGroup = AllDividerSizes.bind({});
VerticalGroup.storyName = "Vertical";
VerticalGroup.tags = ["autodocs", "!dev"];
VerticalGroup.args = {
	vertical: true,
};
VerticalGroup.parameters = {
	chromatic: { disableSnapshot: true },
};

export const StaticWhiteGroup = AllDividerSizes.bind({});
StaticWhiteGroup.storyName = "Static white";
StaticWhiteGroup.tags = ["autodocs", "!dev"];
StaticWhiteGroup.args = {
	staticColor: "white",
};
StaticWhiteGroup.parameters = {
	chromatic: { disableSnapshot: true },
};

export const StaticBlackGroup = AllDividerSizes.bind({});
StaticBlackGroup.storyName = "Static black";
StaticBlackGroup.tags = ["autodocs", "!dev"];
StaticBlackGroup.args = {
	staticColor: "black",
};
StaticBlackGroup.parameters = {
	chromatic: { disableSnapshot: true },
};
