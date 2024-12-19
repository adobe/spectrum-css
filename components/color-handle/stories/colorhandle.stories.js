import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { ColorHandleGroup } from "./colorhandle.test.js";
import { Template } from "./template.js";

/**
 * The color handle component is used with [color area](/docs/components-color-area--docs), [color slider](/docs/components-color-slider--docs) and [color wheel](/docs/components-color-wheel--docs) as the color selector.
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
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=13065-162",
		},
		packageJson,
		metadata,
	},
};

/**
 * Set the `--spectrum-picked-color` custom property to the color value you want to show.
 */
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

/**
 * Nest the [color loupe component](/docs/components-color-loupe--docs) within the color handle markup and apply `.is-open` to the `.spectrum-ColorLoupe` to display the loupe.
 */
export const WithColorLoupe = Template.bind({});
WithColorLoupe.args = {
	isWithColorLoupe: true,
};
WithColorLoupe.tags = ["!dev"];
WithColorLoupe.parameters = {
	chromatic: { disableSnapshot: true },
};
WithColorLoupe.storyName = "With color loupe";

// ********* VRT ONLY ********* //
export const WithForcedColors = ColorHandleGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
