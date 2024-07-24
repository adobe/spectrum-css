import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { ColorWheelGroup } from "./colorwheel.test";
import { Template } from "./template";

/**
 * The color wheel component lets users visually change an individual channel of a color on a circular track.
 */
export default {
	title: "Color wheel",
	component: "ColorWheel",
	argTypes: {
		isDisabled,
		isFocused: {
			...isFocused,
			if: { arg: "isDisabled", truthy: false },
		},
		isWithColorArea: {
			name: "With Color Area",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-ColorWheel",
		isDisabled: false,
		isFocused: false,
		isWithColorArea: false,
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = ColorWheelGroup.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
export const Disabled = Template.bind({});
Disabled.tags = ["autodocs", "!dev"];
Disabled.args = {
	isDisabled: true,
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

export const WithColorArea = Template.bind({});
WithColorArea.tags = ["autodocs", "!dev"];
WithColorArea.args = {
	isWithColorArea: true,
};
WithColorArea.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = ColorWheelGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
