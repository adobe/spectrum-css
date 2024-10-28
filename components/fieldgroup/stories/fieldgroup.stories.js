import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isInvalid, isReadOnly, isRequired } from "@spectrum-css/preview/types";
import { default as RadioSettings } from "@spectrum-css/radio/stories/radio.stories.js";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { FieldGroupSet } from "./fieldgroup.test.js";
import { Template } from "./template.js";

/**
 * A field group is a group of fields, usually radios (also known as a radio group) or checkboxes
 * (also known as a checkbox group). A field group is composed of a field label, a group of radio
 * inputs or checkboxes, and an optional help text component. The field label within the field group
 * can be used to mark a field group as optional or required. The field group items other than the
 * label must be wrapped in a nested `div` with `.spectrum-FieldGroupInputLayout` to control their
 * layout separately from the label. Help text may or may not appear below a field group and is
 * necessary when denoting invalid checkbox fields, invalid radio button fields, and required
 * fields. Invalid radio buttons and checkboxes are signified by negative help text.
 */
export default {
	title: "Field group",
	component: "FieldGroup",
	argTypes: {
		label: {
			name: "Label",
			description: "The label for the field group component.",
			type: { name: "string" },
		},
		inputType: {
			name: "Input type",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["checkbox", "radio"],
			control: "select",
		},
		layout: {
			name: "Layout",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["vertical", "horizontal"],
			control: "select",
		},
		labelPosition: {
			name: "Label Position",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["top", "side"],
			control: "select",
		},
		isInvalid,
		items: { table: { disable: true } },
		fieldLabel: { table: { disable: true } },
		helpText: { table: { disable: true } },
		isRequired,
		isReadOnly,
	},
	args: {
		rootClass: "spectrum-FieldGroup",
		inputType: "radio",
		labelPosition: "top",
		layout: "vertical",
		label: "Field group label",
		helpText: "Select an option.",
		items: [
			{
				id: "apple",
				label: "Apples are best",
				customClasses: ["spectrum-FieldGroup-item"],
			},
			{
				id: "banana",
				label: "Bananas forever",
				customClasses: ["spectrum-FieldGroup-item"],
			},
			{
				id: "pear",
				label: "Pears or bust",
				customClasses: ["spectrum-FieldGroup-item"],
			}
		],
		isInvalid: false,
		isRequired: false,
		isReadOnly: false,
	},
	parameters: {
		actions: {
			handles: [
				...(RadioSettings.parameters?.actions?.handles ?? [])
			],
		},
		packageJson,
		metadata,
	},
	tags: ["!autodocs"],
};

export const Default = FieldGroupSet.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = FieldGroupSet.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};


// ********* DOCS ONLY ********* //
export const VerticalRadio = Template.bind({});
VerticalRadio.tags = ["!dev"];
VerticalRadio.args = {
	layout: "vertical",
	inputType: "radio",
};
VerticalRadio.parameters = {
	chromatic: { disableSnapshot: true },
};

export const VerticalCheckbox = Template.bind({});
VerticalCheckbox.tags = ["!dev"];
VerticalCheckbox.args = {
	layout: "vertical",
	inputType: "checkbox",
};
VerticalCheckbox.parameters = {
	chromatic: { disableSnapshot: true },
};

export const HorizontalRadio = Template.bind({});
HorizontalRadio.tags = ["!dev"];
HorizontalRadio.args = {
	layout: "horizontal",
	inputType: "radio",
};
HorizontalRadio.parameters = {
	chromatic: { disableSnapshot: true },
};

export const HorizontalCheckbox = Template.bind({});
HorizontalCheckbox.tags = ["!dev"];
HorizontalCheckbox.args = {
	layout: "horizontal",
	inputType: "checkbox",
};
HorizontalCheckbox.parameters = {
	chromatic: { disableSnapshot: true },
};

export const InvalidRadio = Template.bind({});
InvalidRadio.tags = ["!dev"];
InvalidRadio.args = {
	layout: "horizontal",
	inputType: "radio",
	isInvalid: true,
};
InvalidRadio.parameters = {
	chromatic: { disableSnapshot: true },
};

export const InvalidCheckbox = Template.bind({});
InvalidCheckbox.tags = ["!dev"];
InvalidCheckbox.args = {
	layout: "horizontal",
	inputType: "checkbox",
	isInvalid: true,
};
InvalidCheckbox.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Field groups can be marked as optional or required, depending on the situation.
 *
* If required, the field group must either contain a "(required)" label or an asterisk. If an asterisk is used, help text must explain what the asterisk means.
 */
export const Required = Template.bind({});
Required.tags = ["!dev"];
Required.args = {
	inputType: "radio",
	fieldLabel: "Radio group label (required)"
};
Required.parameters = {
	chromatic: { disableSnapshot: true },
};

export const RequiredAsterisk = Template.bind({});
RequiredAsterisk.tags = ["!dev"];
RequiredAsterisk.args = {
	fieldLabel: "Checkbox group label",
	inputType: "checkbox",
	isRequired: true,
};
RequiredAsterisk.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Optional field groups can be denoted with text added to the end of the label "(optional)" or have no indication at all.
 */
export const Optional = Template.bind({});
Optional.tags = ["!dev"];
Optional.args = {
	fieldLabel: "Checkbox group label (optional)",
	helpText: "",
	inputType: "checkbox",
};
Optional.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The field group label has two layout options: the label can be top aligned with `spectrum-FieldGroup spectrum-FieldGroup--toplabel`, or side aligned with `spectrum-FieldGroup spectrum-FieldGroup--sidelabel`.
 */
export const VerticalSideLabelRadio = Template.bind({});
VerticalSideLabelRadio.tags = ["!dev"];
VerticalSideLabelRadio.args = {
	labelPosition: "side",
	inputType: "radio",
	layout: "vertical",
};
VerticalSideLabelRadio.parameters = {
	chromatic: { disableSnapshot: true },
};

export const HorizontalSideLabelRadio = Template.bind({});
HorizontalSideLabelRadio.tags = ["!dev"];
HorizontalSideLabelRadio.args = {
	labelPosition: "side",
	inputType: "radio",
	layout: "horizontal",
};
HorizontalSideLabelRadio.parameters = {
	chromatic: { disableSnapshot: true },
};

export const VerticalSideLabelCheckbox = Template.bind({});
VerticalSideLabelCheckbox.tags = ["!dev"];
VerticalSideLabelCheckbox.args = {
	labelPosition: "side",
	inputType: "checkbox",
	layout: "vertical",
};
VerticalSideLabelCheckbox.parameters = {
	chromatic: { disableSnapshot: true },
};

export const HorizontalSideLabelCheckbox = Template.bind({});
HorizontalSideLabelCheckbox.tags = ["!dev"];
HorizontalSideLabelCheckbox.args = {
	labelPosition: "side",
	inputType: "checkbox",
	layout: "horizontal",
};
HorizontalSideLabelCheckbox.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A group of read-only checkboxes that have been checked. In U.S. English, use commas to delineate items within read-only checkbox groups. In other languages, use the locale-specific formatting.
 */
export const ReadOnly = Template.bind({});
ReadOnly.tags = ["!dev"];
ReadOnly.args = {
	isReadOnly: true,
	inputType: "checkbox",
};
ReadOnly.parameters = {
	chromatic: { disableSnapshot: true },
};
