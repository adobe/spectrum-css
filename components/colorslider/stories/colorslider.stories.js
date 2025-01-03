import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { ColorSliderGroup } from "./colorslider.test.js";
import { Template } from "./template.js";

/**
 * The color slider component lets users visually change an individual channel of a color.
 *
 * ## Usage notes
 * - Set the color of the nested [color handle component](/docs/components-color-handle--docs) to match the color slider’s currently selected color using its custom property, `--spectrum-picked-color`.
- The `.spectrum-ColorHandle` should be moved with `inset-inline-*` (horizontal) or `inset-block-*` (vertical) style properties as the slider is dragged.
 * - Ensure that the min and max attributes of the `.spectrum-ColorSlider-slider` input are set to the corresponding scale (i.e. 0 to 1 for a, 0 to 255 for r, etc.).
 * - Ensure the step attribute of the `.spectrum-ColorSlider-slider` input is set appropriately (i.e. 0.1 for a, s, v or 1 and h, r, etc).
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
};

/**
 * By default, a color slider is horizontal and should be used when vertical space is more limited.  The background style property of `.spectrum-ColorSlider-gradient` can be set to the gradient of the colors to be selected. The CSS will automatically reverse the gradient element horizontally when using a RTL (right-to-left) base direction.
 */
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
/**
 * The vertical orientation is used when horizontal space is more limited.
 */
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

/**
 * Alternatively, implementations can provide an `<img>` element with the gradient desired and apply the `.spectrum-ColorSlider-gradient` class.
 */
export const WithImage = Template.bind({});
WithImage.args = {
	gradientType: "image",
	selectedColor: "#df6a7d",
	colorHandleStyle: {
		"inset-inline-start": "50%",
	},
};
WithImage.storyName = "With image";
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
