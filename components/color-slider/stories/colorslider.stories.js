import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { ColorSliderGroup } from "./colorslider.test.js";
import { Template } from "./template.js";

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
		selectedColor: {
			name: "Selected color",
			description: "The color of the handle.",
			type: { name: "string" },
			accept: "hex, rgb, rgba",
			control: "color",
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
		selectedColor: "rgba(255, 0, 0, 1)",
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=36740-137",
		},
		packageJson,
		metadata,
	},
	tags: ["!autodocs"],
};

export const Default = ColorSliderGroup.bind({});
Default.args = {
	gradientStops:
		["rgb(255, 0, 0) 0%", "rgb(255, 255, 0) 17%", "rgb(0, 255, 0) 33%", "rgb(0, 255, 255) 50%", "rgb(0, 0, 255) 67%", "rgb(255, 0, 255) 83%", "rgb(255, 0, 0) 100%"],
};

// ********* VRT ONLY ********* //
export const WithForcedColors = ColorSliderGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //
export const Vertical = Template.bind({});
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
	selectedColor: "rgba(0, 0, 0, 1)",
};
Alpha.tags = ["!dev"];
Alpha.parameters = {
	chromatic: { disableSnapshot: true },
};

export const WithImage = Template.bind({});
WithImage.args = {
	gradientType: "image",
	selectedColor: "#df6a7d",
	colorHandleStyle: {
		"inset-inline-start": "50%",
	},
};
WithImage.storyName = "Image";
WithImage.tags = ["!dev"];
WithImage.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true,
};
Disabled.tags = ["!dev"];
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};
