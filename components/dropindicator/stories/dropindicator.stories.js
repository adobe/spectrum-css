import { disableDefaultModes } from "@spectrum-css/preview/modes";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { DropIndicatorGroup } from "./dropindicator.test.js";
import { DocsDropIndicatorGroup } from "./template.js";

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
		length: {
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
		length: "300px",
	},
	parameters: {
		packageJson,
		metadata,
	},
};

export const Default = DropIndicatorGroup.bind({});
Default.args = {};
Default.tags = ["!autodocs"];

// ********* DOCS ONLY ********* //
export const DefaultGroup = DocsDropIndicatorGroup.bind({});
DefaultGroup.storyName = "Default";
DefaultGroup.tags = ["!dev"];
DefaultGroup.parameters = {
	chromatic: { disableSnapshot: true }
};

// ********* VRT ONLY ********* //
export const WithForcedColors = DropIndicatorGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes,
	},
};
