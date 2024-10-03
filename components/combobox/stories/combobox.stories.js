import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused, isInvalid, isKeyboardFocused, isLoading, isOpen, isQuiet, size } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { ComboBoxGroup } from "./combobox.test.js";
import { Template } from "./template.js";

/**
 * Comboboxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.
 */
export default {
	title: "Combobox",
	component: "Combobox",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		isOpen,
		isQuiet,
		isInvalid,
		isFocused,
		isKeyboardFocused,
		isLoading,
		isDisabled,
		showFieldLabel: {
			name: "Show field label",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		fieldLabelText: {
			name: "Field label text",
			type: { name: "text" },
			table: {
				type: { summary: "text" },
				category: "Component",
			},
			control: "text",
			if: { arg: "showFieldLabel", truthy: true },
		},
		fieldLabelPosition: {
			name: "Field label position",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["top", "left"],
			control: "select",
			if: { arg: "showFieldLabel", truthy: true },
		},
		content: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Combobox",
		size: "m",
		isOpen: false,
		isQuiet: false,
		isInvalid: false,
		isFocused: false,
		isKeyboardFocused: false,
		isLoading: false,
		isDisabled: false,
		showFieldLabel: false,
		testId: "combobox",
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=727-2550",
		},
		packageJson: pkgJson,
	},
};

export const Default = ComboBoxGroup.bind({});
Default.args = {
	isOpen: true,
	fieldLabelText: "Select location",
	content: [
		Menu({
			role: "listbox",
			subrole: "option",
			isSelectable: true,
			items: [
				{
					label: "Ballard",
					isSelected: true,
					isChecked: true,
				},
				{
					label: "Fremont",
				},
				{
					label: "Greenwood",
				},
				{
					type: "divider",
				},
				{
					label: "United States of America",
					isDisabled: true,
				},
			],
		}),
	],
};

// ********* DOCS ONLY ********* //
export const WithLabel = Template.bind({});
WithLabel.tags = ["!dev"];
WithLabel.args = {
	showFieldLabel: true,
	fieldLabelText: "Country",
	isOpen: true,
};
WithLabel.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Closed = Template.bind({});
Closed.tags = ["!dev"];
Closed.args = {
	isOpen: false,
};
Closed.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Invalid = Template.bind({});
Invalid.tags = ["!dev"];
Invalid.args = {
	isInvalid: true,
};
Invalid.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Loading = Template.bind({});
Loading.tags = ["!dev"];
Loading.args = {
	isLoading: true,
};
Loading.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Disabled = Template.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
	isDisabled: true,
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

// Quiet
export const Quiet = Template.bind({});
Quiet.tags = ["!dev"];
Quiet.args = {
	isQuiet: true,
};
Quiet.parameters = {
	chromatic: { disableSnapshot: true },
};

export const QuietWithLabel = Template.bind({});
QuietWithLabel.tags = ["!dev"];
QuietWithLabel.args = {
	showFieldLabel: true,
	fieldLabelText: "Country",
	isQuiet: true,
};
QuietWithLabel.parameters = {
	chromatic: { disableSnapshot: true },
};

export const QuietClosed = Template.bind({});
QuietClosed.tags = ["!dev"];
QuietClosed.args = {
	isQuiet: true,
	isOpen: false,
};
QuietClosed.parameters = {
	chromatic: { disableSnapshot: true },
};

export const QuietInvalid = Template.bind({});
QuietInvalid.tags = ["!dev"];
QuietInvalid.args = {
	isQuiet: true,
	isInvalid: true,
};
QuietInvalid.parameters = {
	chromatic: { disableSnapshot: true },
};

export const QuietLoading = Template.bind({});
QuietLoading.tags = ["!dev"];
QuietLoading.args = {
	isQuiet: true,
	isLoading: true,
};
QuietLoading.parameters = {
	chromatic: { disableSnapshot: true },
};

export const QuietDisabled = Template.bind({});
QuietDisabled.tags = ["!dev"];
QuietDisabled.args = {
	isQuiet: true,
	isDisabled: true,
};
QuietDisabled.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = ComboBoxGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
