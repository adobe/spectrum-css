import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { ColorSliderGroup, Template } from "./template";

/**
 * The color slider component lets users visually change an individual channel of a color.
 */
export default {
	title: "Color slider",
	component: "ColorSlider",
	argTypes: {
		colorHandleStyle: { table: { disable: true } },
		vertical: { table: { disable: true } },
		isDisabled,
		isFocused: {
			...isFocused,
			if: { arg: "isDisabled", truthy: false },
		},
		gradientStops: {
			name: "Gradient stops",
			description:
				"The <linear-color-stop> value of the CSS linear-gradient. Can be multiple stops separated by commas.",
			type: { name: "array" },
			table: { disable: true },
		},
		gradientType: {
			name: "Gradient type",
			description: "The gradient can be defined in the markup using CSS or with an image.",
			options: ["gradient", "image"],
			control: { type: "select" },
			table: { disable: true },
		},
	},
	args: {
		rootClass: "spectrum-ColorSlider",
		isDisabled: false,
		isFocused: false,
		gradientType: "gradient",
		vertical: false,
	},
	parameters: {
		componentVersion: version,
	},
	tags: ["!autodocs"],
};

export const Default = ColorSliderGroup.bind({});
Default.args = {
	gradientStops:
		["rgb(255, 0, 0) 0%", "rgb(255, 255, 0) 17%", "rgb(0, 255, 0) 33%", "rgb(0, 255, 255) 50%", "rgb(0, 0, 255) 67%", "rgb(255, 0, 255) 83%", "rgb(255, 0, 0) 100%"],
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //
export const Vertical = Default.bind({});
Vertical.args = {
	vertical: true,
};
Vertical.tags = ["!dev"];
Vertical.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Alpha = Template.bind({});
Alpha.args = {
	gradientStops: ["rgba(0, 0, 0, 1) 0%", "rgba(0, 0, 0, 0) 100%"],
	colorHandleStyle: {
		"--spectrum-picked-color": "rgba(0, 0, 0, 1)",
	},
};
Alpha.tags = ["!dev"];
Alpha.parameters = {
	chromatic: { disableSnapshot: true },
};

export const WithImage = Default.bind({});
WithImage.args = {
	gradientType: "image",
	colorHandleStyle: {
		"--spectrum-picked-color": "#df6a7d",
		"inset-inline-start": "50%",
	},
};
WithImage.storyName = "Image";
WithImage.tags = ["!dev"];
WithImage.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Disabled = Default.bind({});
Disabled.args = {
	isDisabled: true,
};
Disabled.tags = ["!dev"];
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};
