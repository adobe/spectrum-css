import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { ColorWheelGroup } from "./colorwheel.test.js";
import { Template } from "./template.js";

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
		selectedColor: {
			name: "Selected color",
			description: "The color of the handle.",
			type: { name: "string" },
			accept: "hex, rgb, rgba",
			control: "color",
		},
	},
	args: {
		rootClass: "spectrum-ColorWheel",
		isDisabled: false,
		isFocused: false,
		isWithColorArea: false,
		selectedColor: "rgba(255, 0, 0, 50%)",
	},
	parameters: {
		packageJson,
		metadata,
	},
	tags: ["!autodocs"],
};

export const Default = ColorWheelGroup.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
export const Disabled = Template.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
	isDisabled: true,
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

export const WithColorArea = Template.bind({});
WithColorArea.tags = ["!dev"];
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
