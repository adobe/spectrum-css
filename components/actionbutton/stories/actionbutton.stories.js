import { ActionButtons, argTypes } from "./index";

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
			type: "migrated",
		},
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
