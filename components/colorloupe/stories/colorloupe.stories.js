import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isOpen } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { ColorLoupeGroup } from "./colorloupe.test.js";

/**
 * The color loupe component shows the output color that would otherwise be covered by a cursor, stylus, or finger during color selection.
 */
export default {
	title: "Color loupe",
	component: "ColorLoupe",
	argTypes: {
		isOpen,
		isDisabled,
	},
	args: {
		rootClass: "spectrum-ColorLoupe",
		isOpen: true,
		isDisabled: false,
	},
	parameters: {
		chromatic: { diffThreshold: 0.2 },
		docs: {
			story: {
				height: "100px"
			}
		},
		componentVersion: version,
	},
	tags: ["!autodocs"],
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
