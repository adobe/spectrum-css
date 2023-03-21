// Import the component markup template
import { Template } from "./template";

export default {
	title: "Components/Color wheel",
	description:
		"The Color wheel component lets users visually change an individual channel of a color on a circular track.",
	component: "ColorWheel",
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
		rootClass: "spectrum-ColorWheel",
		isDisabled: false,
		isFocused: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("colorwheel")
				? "migrated"
				: undefined,
		},
    // Getting the Figma link: https://help.figma.com/hc/en-us/articles/360045003494-Storybook-and-Figma
    // design: {
    //   type: "figma",
    //   url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
    // },
	},
};

export const Default = Template.bind({});
Default.args = {};
