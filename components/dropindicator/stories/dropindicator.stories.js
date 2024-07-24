import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { DropIndicatorGroup } from "./dropindicator.test";

/**
 * The drop indicator component is used to show the insertion position into a list or table.
 */
export default {
	title: "Drop indicator",
	component: "DropIndicator",
	argTypes: {
		direction: {
			name: "Direction",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["horizontal", "vertical"],
			control: "select",
		},
		size: {
			name: "Size",
			description:
				"Size of the drop indicator, requires a unit be provided; i.e., 200px or 100%.",
			type: { name: "string", required: false },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: { type: "text" },
		},
	},
	args: {
		rootClass: "spectrum-DropIndicator",
		direction: "vertical",
		size: "300px",
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = DropIndicatorGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = DropIndicatorGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
