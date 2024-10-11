import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { ColorAreaGroup } from "./colorarea.test.js";
import { Template } from "./template.js";

/**
 * The color area component allows users to visually select two properties of a color simultaneously. It's commonly used together with a color slider or color wheel. Some usage notes:
 * - The `.spectrum-ColorHandle` should be moved with the `transform: translate(x, y)` style property as the sliders are dragged
 * - Set the background style property of `.spectrum-ColorArea-gradient` to the gradient of the colors to be selected
 * - Set the value attribute of `.spectrum-ColorArea-slider[name=x]` to the currently selected x value (i.e. saturation)
 * - Set the value attribute of `.spectrum-ColorArea-slider[name=y]` to the currently selected y value (i.e. value)
 * - Set the value of the ColorHandle component to the selected color
 * - Marshall focus between the saturation and value sliders according to which keys are pressed (up/down for value, left/right for saturation)
 */
export default {
	title: "Color area",
	component: "ColorArea",
	argTypes: {
		customWidth: { table: { disable: true } },
		customHeight: { table: { disable: true } },
		handlePosition: { table: { disable: true } },
		isDisabled,
		isFocused: {
			...isFocused,
			if: { arg: "isDisabled", truthy: false },
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
		rootClass: "spectrum-ColorArea",
		isDisabled: false,
		isFocused: false,
		selectedColor: "rgba(255, 0, 0, 1)",
	},
	parameters: {
		packageJson,
		metadata,
	},
	tags: ["!autodocs"],
};

export const Default = ColorAreaGroup.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
export const CustomSize = Template.bind({});
CustomSize.tags = ["!dev"];
CustomSize.args = {
	customWidth: "80px",
	customHeight: "80px",
};
CustomSize.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Disabled = Template.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
	isDisabled: true,
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = ColorAreaGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
