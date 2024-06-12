import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { Template } from "./template";

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
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isFocused: {
			name: "Focused",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
			if: { arg: "isDisabled", truthy: false },
		},
	},
	args: {
		rootClass: "spectrum-ColorArea",
		isDisabled: false,
		isFocused: false,
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = Template.bind({});
Default.args = {};

export const CustomSize = Template.bind({});
CustomSize.args = {
	customWidth: "80px",
	customHeight: "80px",
};

// ********* DOCS ONLY ********* //
export const Disabled = Template.bind({});
Disabled.tags = ["docs-only"];
Disabled.args = {
	isDisabled: true,
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Template.bind({});
WithForcedColors.tags = ["vrt-only"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
