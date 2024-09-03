import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isSelected, size } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { SwatchGroup } from "./swatch.test.js";

/**
 * A swatch shows a small sample of a fill--such as a color, gradient, texture, or material--that is intended to be applied to an object.
 */
export default {
	title: "Swatch",
	component: "Swatch",
	argTypes: {
		size: size(["xs", "s", "m", "l"]),
		swatchColor: {
			name: "Color",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "color",
		},
		rounding: {
			name: "Rounding",
			type: { name: "string" },
			table: {
				type: { summary: "string", required: true },
				category: "Component",
			},
			options: ["none", "regular", "full"],
			control: "select",
		},
		isDisabled,
		isSelected,
	},
	args: {
		rootClass: "spectrum-Swatch",
		size: "m",
		isSelected: false,
		isDisabled: false,
		rounding: "regular",
		swatchColor: "rgb(174, 216, 230)"
	},
	parameters: {
		packageJson: pkgJson,
	},
};

export const Default = SwatchGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = SwatchGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
