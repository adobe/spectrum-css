import { default as Icon } from "@spectrum-css/icon/stories/icon.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { size } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { ButtonGroup } from "./buttongroup.test.js";

/**
 * A grouping of buttons.
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
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = ButtonGroup.bind({});
Default.args = {
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
