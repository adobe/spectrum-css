import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isOpen } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { Template } from "./template";

/**
 * The color loupe component shows the output color that would otherwise be covered by a cursor, stylus, or finger during color selection.
 */
export default {
	title: "Color loupe",
	component: "ColorLoupe",
	argTypes: {
		isOpen,
	},
	args: {
		rootClass: "spectrum-ColorLoupe",
		isOpen: true,
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

export const Default = Template.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = Template.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
