import { Template } from "./template";

import { isDisabled, isFocused } from "@spectrum-css/preview/types/states.js";

/** The Color area component allows users to visually select two properties of a color simultaneously. It's commonly used together with a color slider or color wheel. */
export default {
	title: "Components/Color area",
	component: "ColorArea",
	argTypes: {
		customWidth: { table: { disable: true } },
		customHeight: { table: { disable: true } },
		handlePosition: { table: { disable: true } },
		isDisabled,
		isFocused: {
			...isFocused,
			if: { arg: "isDisabled", truthy: false },
		},
	},
	args: {
		rootClass: "spectrum-ColorArea",
		isDisabled: false,
		isFocused: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("colorarea")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};

export const CustomSize = Template.bind({});
CustomSize.args = {
	customWidth: "80px",
	customHeight: "80px",
};
