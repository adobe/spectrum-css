import { argTypes, ActionButtons } from "./index";

export default {
	title: "Components/Action button",
	description:
		"The action button component represents an action a user can take.",
	component: "ActionButton",
	argTypes: argTypes,
	args: {
		rootClass: "spectrum-ActionButton",
		size: "m",
		iconName: "More",
		isQuiet: false,
		isEmphasized: false,
		hasPopup: false,
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-ActionButton:not([disabled])"],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("actionbutton")
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

export const Default = ActionButtons.bind({});
Default.args = {};

export const Selected = ActionButtons.bind({});
Selected.args = {
	isSelected: true
};

export const Disabled = ActionButtons.bind({});
Disabled.args = {
	isDisabled: true
};

export const SelectedDisabled = ActionButtons.bind({});
SelectedDisabled.args = {
	isSelected: true,
	isDisabled: true
};

export const Emphasized = ActionButtons.bind({});
Emphasized.args = {
	isEmphasized: true
};

export const SelectedEmphasized = ActionButtons.bind({});
SelectedEmphasized.args = {
	isEmphasized: true,
	isSelected: true
};
