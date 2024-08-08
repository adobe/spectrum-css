import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { DividerGroup } from "./divider.test.js";

/**
 * Dividers bring clarity to a layout by grouping and dividing content that exists in close proximity. It can also be used to establish rhythm and hierarchy.
 */
export default {
	title: "Divider",
	component: "Divider",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l"],
			control: "select",
		},
		staticColor: {
			name: "Static color",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Advanced",
			},
			options: ["white", "black"],
			control: "select",
		},
		vertical: {
			name: "Vertical",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		tag: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Divider",
		size: "m",
		vertical: false,
		customStyles: {
			"min-inline-size": "200px",
		},
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = DividerGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = DividerGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
