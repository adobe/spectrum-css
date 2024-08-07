import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { OpacityCheckboardGroup } from "./opacitycheckerboard.test";
import { Template } from "./template";

/**
 * Opacity checkerboard is used with other components to highlight opacity.
 */
export default {
	title: "Opacity checkerboard",
	component: "OpacityCheckerboard",
	argTypes: {
		backgroundPosition: {
			name: "Position",
			type: { name: "string" },
			table: {
				category: "Component",
			},
			control: "text",
			description: "Value for <code>--mod-opacity-checkerboard-position</code>. Accepts any valid CSS background-position property value.",
		},
	},
	args: {
		rootClass: "spectrum-OpacityCheckerboard",
		backgroundPosition: "left top",
		customStyles: {
			"inline-size": "100px",
			"block-size": "100px"
		}
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = OpacityCheckboardGroup.bind({});
Default.args = {};

export const CheckerboardPosition = Template.bind({});
CheckerboardPosition.tags = ["autodocs", "!dev"];
CheckerboardPosition.args = {
	backgroundPosition: "center center",
	customStyles: {
		"inline-size": "100px",
		"block-size": "100px"
	}
};
CheckerboardPosition.parameters = {
	docs: {
		description: {
			story:
				"An example of using the <code>--mod-opacity-checkerboard-position</code> custom property to adjust the position of the checkerboard pattern.",
		},
	},
	chromatic: {
		disableSnapshot: true,
	}
};

// ********* VRT ONLY ********* //
export const WithForcedColors = OpacityCheckboardGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
