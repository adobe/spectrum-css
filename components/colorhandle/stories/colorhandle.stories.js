import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { ColorHandleGroup } from "./colorhandle.test.js";
import { Template } from "./template.js";

/**
 * The color handle component is used with color area, color slider and color wheel as the color selector.
 */
export default {
	title: "Color handle",
	component: "ColorHandle",
	argTypes: {
		isDisabled,
		isFocused: {
			...isFocused,
			if: { arg: "isDisabled", truthy: false },
		},
		isWithColorLoupe: {
			name: "With color loupe",
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
		rootClass: "spectrum-ColorHandle",
		isDisabled: false,
		isFocused: false,
		isWithColorLoupe: false,
		selectedColor: "rgba(255 0 0 / 50%)",
		customStyles: {
			"position": "relative",
			"margin": "10px",
		}
	},
	parameters: {
		packageJson: pkgJson,
	},
	tags: ["!autodocs"],
};

export const Default = ColorHandleGroup.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true,
};
Disabled.tags = ["!dev"];
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

export const WithColorLoupe = Template.bind({});
WithColorLoupe.args = {
	isWithColorLoupe: true,
};
WithColorLoupe.tags = ["!dev"];
WithColorLoupe.parameters = {
	chromatic: { disableSnapshot: true },
	docs: {
		story: {
			inline: false,
			height: "150px",
		},
	},
};

// ********* VRT ONLY ********* //
export const WithForcedColors = ColorHandleGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
