import { Template } from "./template";

import { default as Radio } from "@spectrum-css/radio/stories/radio.stories.js";

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
		isInvalid: {
			name: "Invalid",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		items: { table: { disable: true } },
		fieldLabel: { table: { disable: true } },
		helpText: { table: { disable: true } },
		isRequired: { table: { disable: true } },
		isReadOnly: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-FieldGroup",
		layout: "vertical",
		inputType: "radio",
		labelPosition: "top",
		isInvalid: false,
		isRequired: false,
		items: [
			{
				id: "1",
				label: "Kittens",
			},
			{
				id: "2",
				label: "Puppies",
				isChecked: true,
			},
		],
		fieldLabel: "Field Group Label",
		helpText: "Select an option.",
	},
	parameters: {
		actions: {
			handles: [
				...(Radio.parameters?.actions?.handles ?? [])
			],
		},
	},
};

export const Default = Template.bind({});

export const VerticalRadio = Template.bind({});
VerticalRadio.tags = ["docs-only"];
VerticalRadio.args = {
	layout: "vertical",
	inputType: "radio",
};
VerticalRadio.parameters = {
	chromatic: { disableSnapshot: true },
};

export const VerticalCheckbox = Template.bind({});
VerticalCheckbox.tags = ["docs-only"];
VerticalCheckbox.args = {
	layout: "vertical",
	inputType: "checkbox",
};
VerticalCheckbox.parameters = {
	chromatic: { disableSnapshot: true },
};

export const HorizontalRadio = Template.bind({});
HorizontalRadio.tags = ["docs-only"];
HorizontalRadio.args = {
	layout: "horizontal",
	inputType: "radio",
};
HorizontalRadio.parameters = {
	chromatic: { disableSnapshot: true },
};

export const HorizontalCheckbox = Template.bind({});
HorizontalCheckbox.tags = ["docs-only"];
HorizontalCheckbox.args = {
	layout: "horizontal",
	inputType: "checkbox",
};
HorizontalCheckbox.parameters = {
	chromatic: { disableSnapshot: true },
};

export const InvalidRadio = Template.bind({});
InvalidRadio.tags = ["docs-only"];
InvalidRadio.args = {
	layout: "horizontal",
	inputType: "radio",
	isInvalid: true,
};
InvalidRadio.parameters = {
	chromatic: { disableSnapshot: true },
};

export const InvalidCheckbox = Template.bind({});
InvalidCheckbox.tags = ["docs-only"];
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
Required.tags = ["docs-only"];
Required.args = {
	inputType: "radio",
	fieldLabel: "Radio group label (required)"
};
Required.parameters = {
	chromatic: { disableSnapshot: true },
};

export const RequiredAsterisk = Template.bind({});
RequiredAsterisk.tags = ["docs-only"];
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
Optional.tags = ["docs-only"];
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
VerticalSideLabelRadio.tags = ["docs-only"];
VerticalSideLabelRadio.args = {
	labelPosition: "side",
	inputType: "radio",
	layout: "vertical",
};
VerticalSideLabelRadio.parameters = {
	chromatic: { disableSnapshot: true },
};

export const HorizontalSideLabelRadio = Template.bind({});
HorizontalSideLabelRadio.tags = ["docs-only"];
HorizontalSideLabelRadio.args = {
	labelPosition: "side",
	inputType: "radio",
	layout: "horizontal",
};
HorizontalSideLabelRadio.parameters = {
	chromatic: { disableSnapshot: true },
};

export const VerticalSideLabelCheckbox = Template.bind({});
VerticalSideLabelCheckbox.tags = ["docs-only"];
VerticalSideLabelCheckbox.args = {
	labelPosition: "side",
	inputType: "checkbox",
	layout: "vertical",
};
VerticalSideLabelCheckbox.parameters = {
	chromatic: { disableSnapshot: true },
};

export const HorizontalSideLabelCheckbox = Template.bind({});
HorizontalSideLabelCheckbox.tags = ["docs-only"];
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
ReadOnly.tags = ["docs-only"];
ReadOnly.args = {
	isReadOnly: true,
	inputType: "checkbox",
};
ReadOnly.parameters = {
	chromatic: { disableSnapshot: true },
};
