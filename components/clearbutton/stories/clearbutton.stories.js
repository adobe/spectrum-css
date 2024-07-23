import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { ClearButtonGroup } from "./template";

/**
 * The clear button component is an in-field button used in search and tag.
 */
export default {
	title: "Clear button",
	component: "ClearButton",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l", "xl"],
			control: "select",
		},
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		staticColor: {
			name: "Static color",
			type: { name: "string" },
			table: {
				disable: true,
				type: { summary: "string" },
				category: "Advanced",
			},
			options: ["white"],
			control: "select",
		},
	},
	args: {
		rootClass: "spectrum-ClearButton",
		size: "m",
		isDisabled: false,
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = ClearButtonGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const OverBackground = ClearButtonGroup.bind({});
OverBackground.tags = ["!autodocs", "!dev", "test"];
OverBackground.args = {
	staticColor: "white",
};

export const WithForcedColors = ClearButtonGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
