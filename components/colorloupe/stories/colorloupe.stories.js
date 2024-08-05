import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isOpen } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { ColorLoupeGroup } from "./colorloupe.test";

/**
 * The color loupe component shows the output color that would otherwise be covered by a cursor, stylus, or finger during color selection.
 */
export default {
	title: "Color loupe",
	component: "ColorLoupe",
	argTypes: {
		isOpen,
		isDisabled,
		selectedColor: {
			name: "Selected color",
			type: { name: "string" },
			accept: "hex, rgb, rgba",
			control: "color",
		},
	},
	args: {
		rootClass: "spectrum-ColorLoupe",
		isOpen: true,
		isDisabled: false,
		selectedColor: "rgba(255, 0, 0, 0.5)",
		customStyles: {
			"position": "relative",
			"inset-block-end": "0",
			"inset-inline-end": "0",
		}
	},
	parameters: {
		componentVersion: version,
		docs: {
			story: {
				height: "100px"
			}
		},
	},
};

export const Default = ColorLoupeGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = ColorLoupeGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
