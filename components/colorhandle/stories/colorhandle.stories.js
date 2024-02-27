// Import the component markup template
import { Template } from "./template";

export default {
	title: "Components/Color handle",
	description:
		"The Color Handle component is used with ColorArea, ColorSlider and ColorWheel as the color selector",
	component: "ColorHandle",
	argTypes: {
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isFocused: {
			name: "Focused",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
			if: { arg: "isDisabled", truthy: false },
		},
	},
	args: {
		rootClass: "spectrum-ColorHandle",
		isDisabled: false,
		isFocused: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("colorhandle") ? "migrated" : "legacy",
			version: process.env.VERSIONS?.["colorhandle"],
		},
	},
};

export const Default = Template.bind({});
Default.args = {};
