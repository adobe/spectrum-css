
import { default as Icon } from "@spectrum-css/icon/stories/icon.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isFocused, isOpen } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { CustomIconTemplate, SizingTemplate, Template } from "./template";

/**
 * The picker button component is used as a dropdown trigger within other components such as [combobox](?path=/docs/components-combobox--docs).
 */
export default {
	title: "Picker button",
	component: "PickerButton",
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
		iconType: {
			name: "Icon",
			type: { name: "string", required: false },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			options: ["ui", "workflow"],
			control: "inline-radio",
		},
		iconName: {
			...Icon.argTypes.iconName,
			if: { arg: "iconType", eq: "workflow" },
		},
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		isOpen: {
			...isOpen,
			if: { arg: "isDisabled", truthy: false }
		},
		isRounded: {
			name: "Rounded",
			description: "Increases the amount of rounding on the rounded corners.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isQuiet: {
			name: "Quiet styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
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
		isFocused: {
			...isFocused,
			if: { arg: "isDisabled", truthy: false }
		},
		position: {
			name: "Position",
			description:
				"Which side the picker button is displayed on. This determines which corners are rounded.",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["right", "left"],
			control: "inline-radio",
		},
	},
	args: {
		rootClass: "spectrum-PickerButton",
		label: undefined,
		size: "m",
		isOpen: false,
		isRounded: false,
		isQuiet: false,
		isDisabled: false,
		isFocused: false,
		iconType: "ui",
		iconName: "ChevronDown",
		position: "right",
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.tags = ["!dev"];
WithLabel.storyName = "With label";
WithLabel.args = {
	label: "Select",
};

export const Disabled = Template.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
	isDisabled: true,
};

export const Quiet = Template.bind({});
Quiet.tags = ["!dev"];
Quiet.args = {
	isQuiet: true,
	label: "All",
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Template.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //
export const Sizing = SizingTemplate.bind({});
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Open = Template.bind({});
Open.tags = ["!dev"];
Open.args = {
	isOpen: true,
};
Open.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * This example uses a custom icon instead of the chevron UI icon.
 */
export const CustomIcon = CustomIconTemplate.bind({});
CustomIcon.storyName = "With custom icon";
CustomIcon.tags = ["!dev"];
CustomIcon.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The `spectrum-PickerButton--rounded` class increases the amount of rounding on the rounded corners.
 */
export const Rounded = Template.bind({});
Rounded.tags = ["!dev"];
Rounded.args = {
	isRounded: true,
};
Rounded.parameters = {
	chromatic: { disableSnapshot: true },
};
