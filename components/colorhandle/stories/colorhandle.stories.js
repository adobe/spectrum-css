import { Template } from "./template";

import { isDisabled, isFocused } from "@spectrum-css/preview/types/states.js";

/** The Color Handle component is used with ColorArea, ColorSlider and ColorWheel as the color selector */
export default {
	title: "Components/Color handle",
	component: "ColorHandle",
	argTypes: {
		isDisabled,
		isFocused: {
			...isFocused,
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
			type: process.env.MIGRATED_PACKAGES.includes("colorhandle")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};
