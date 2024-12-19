import { default as Icon } from "@spectrum-css/icon/stories/icon.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { size } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { ButtonGroup } from "./buttongroup.test.js";
import { Template } from "./template.js";

/**
 * A button group is a grouping of buttons whose actions are related to each other.
 */
export default {
	title: "Button group",
	component: "ButtonGroup",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		vertical: {
			name: "Vertical layout",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		items: { table: { disable: true } },
		iconName: {
			...Icon.argTypes.iconName,
			table: { disable: true },
		},
		iconSet: {
			...Icon.argTypes.setName,
			table: { disable: true },
		},
	},
	args: {
		rootClass: "spectrum-ButtonGroup",
		size: "m",
		iconName: undefined,
		vertical: false,
		items: [
			{
				variant: "secondary",
				treatment: "outline",
				label: "No, thanks",

			},
			{
				variant: "secondary",
				treatment: "outline",
				label: "Remind me later",
			},
			{
				variant: "primary",
				treatment: "fill",
				label: "Rate now",
			},
		],
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=13663-6530",
		},
		packageJson,
		metadata,
	},
};

export const Default = ButtonGroup.bind({});
Default.args = {};
Default.tags = ["!autodocs"];

// ********* DOCS ONLY ********* //

/**
 * Default spacing for Medium, Large, and Extra Large t-shirt sizes.
*/
export const Horizontal = Template.bind({});
Horizontal.tags = ["!dev"];
Horizontal.parameters = {
	chromatic: { disableSnapshot: true },
};
Horizontal.args = Default.args;
Horizontal.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Spacing for the Small t-shirt size.
*/
export const HorizontalSmall = Template.bind({});
HorizontalSmall.tags = ["!dev"];
HorizontalSmall.parameters = {
	chromatic: { disableSnapshot: true },
};
HorizontalSmall.args = {
	size: "s"
};
HorizontalSmall.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Default spacing for Medium, Large, and Extra Large t-shirt sizes
*/
export const Vertical = ButtonGroup.bind({});
Vertical.tags = ["!dev"];
Vertical.parameters = {
	chromatic: { disableSnapshot: true },
};
Vertical.args = {
	vertical: true,
};
Vertical.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Spacing for the Small t-shirt size.
*/
export const VerticalSmall = Template.bind({});
VerticalSmall.tags = ["!dev"];
VerticalSmall.parameters = {
	chromatic: { disableSnapshot: true },
};
VerticalSmall.args = {
	vertical: true,
	size: "s"
};
VerticalSmall.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A button group in a disabled state shows that the buttons within the group exist, but are not available in that circumstance. This state can be used to maintain layout continuity and to communicate that a button group may become available later.
*/

export const Disabled = Template.bind({});
Disabled.tags = ["!dev"];
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};
Disabled.args = {
	items: [
		{
			variant: "secondary",
			treatment: "outline",
			label: "Cancel",
			isDisabled: true,
		},
		{
			variant: "primary",
			treatment: "fill",
			label: "Enable",
			isDisabled: true,
		},
	]
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};


// ********* VRT ONLY ********* //
export const WithForcedColors = ButtonGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
