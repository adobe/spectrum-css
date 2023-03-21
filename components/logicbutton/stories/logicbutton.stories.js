// Import the component markup template
import { Template } from "./template";

export default {
	title: "Components/Logic button",
	description:
		"A Logic Button displays an operator within a boolean logic sequence.",
	component: "Logicbutton",
	argTypes: {
		variant: {
			name: "Variant",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["and", "or"],
			control: "inline-radio",
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
	},
	args: {
		rootClass: "spectrum-LogicButton",
		variant: "and",
		isDisabled: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("logicbutton")
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

export const Or = Template.bind({});
Or.args = {
	variant: "or"
};

export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true
};
