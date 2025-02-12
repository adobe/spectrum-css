import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isInvalid, isReadOnly, isRequired } from "@spectrum-css/preview/types";
import { default as RadioSettings } from "@spectrum-css/radio/stories/radio.stories.js";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { FieldGroupSet } from "./fieldgroup.test.js";
import { InputOptionsFieldGroupTemplate, NecessityIndicatorFieldGroupTemplate, Template } from "./template.js";

/**
 * A field group is a group of fields which are usually radios (also known as a radio group) or checkboxes (also known as a checkbox group). It is composed of a [field label](/docs/components-field-label--docs), a group of [radio inputs](/docs/components-radio--docs) or [checkboxes](/docs/components-checkbox--docs), and [an optional help text component](/docs/components-help-text--docs).
 *
 * ## Usage notes
 *
 * - **Markup:** The field group items other than the label must be wrapped in a nested `div` with the `spectrum-FieldGroupInputLayout`
 * class to control their layout separately from the label. The class `spectrum-FieldGroup-item` should also be applied to each checkbox or radio.
 * - **Roles:** For radio groups, the attribute `role="radiogroup"` should be used. For a checkbox group, use `role="group"`.
 * - **Field label:** The field label within the field group can be used to mark a field group as [optional or required](#required-or-optional).
 * - **Help text:** Help text may or may not appear below a field group and is necessary when denoting invalid
 * checkbox fields, invalid radio button fields, and required fields.
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
				label: "Apples are best",
				customClasses: ["spectrum-FieldGroup-item"],
			},
			{
				label: "Bananas forever",
				customClasses: ["spectrum-FieldGroup-item"],
			},
			{
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
};

export const Default = FieldGroupSet.bind({});
Default.args = {};
Default.tags = ["!autodocs"];

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
/**
 * The default field group orientation is vertical. The field label is positioned at the top with the `spectrum-FieldGroup spectrum-FieldGroup--toplabel` classes.
 * */
export const Vertical = InputOptionsFieldGroupTemplate.bind({});
Vertical.tags = ["!dev"];
Vertical.args = Default.args;
Vertical.parameters = {
	chromatic: { disableSnapshot: true },
};
Vertical.storyName = "Default";

/**
 * A horizontal group of fields. Use a horizontal field group when vertical space is limited.
 * */
export const Horizontal = InputOptionsFieldGroupTemplate.bind({});
Horizontal.tags = ["!dev"];
Horizontal.args = {
	layout: "horizontal",
};
Horizontal.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * An invalid group of radio buttons or checkboxes is signified by negative help text.
 */
export const InvalidFieldGroups = InputOptionsFieldGroupTemplate.bind({});
InvalidFieldGroups.tags = ["!dev"];
InvalidFieldGroups.args = {
	isInvalid: true
};
InvalidFieldGroups.parameters = {
	chromatic: { disableSnapshot: true },
};
InvalidFieldGroups.storyName = "Invalid field groups";

/**
 * Field groups can be marked as optional or required, depending on the situation.
 * - If required, the field group must either contain the text "(required)" in its label or an asterisk. If an asterisk is used, help text must explain what the asterisk means.
 * - Optional field groups can be denoted with the text "(optional)" added to the end of the label or have no indication at all.
 */
export const RequiredOptional = NecessityIndicatorFieldGroupTemplate.bind({});
RequiredOptional.tags = ["!dev"];
RequiredOptional.parameters = {
	chromatic: { disableSnapshot: true },
};
RequiredOptional.storyName = "Indicating required or optional";

/**
 * The alternative layout option has side-aligned labels, and can be achieved with `spectrum-FieldGroup spectrum-FieldGroup--sidelabel`.
 */
export const VerticalSideLabels = InputOptionsFieldGroupTemplate.bind({});
VerticalSideLabels.tags = ["!dev"];
VerticalSideLabels.args = {
	labelPosition: "side",
};
VerticalSideLabels.parameters = {
	chromatic: { disableSnapshot: true },
};
VerticalSideLabels.storyName = "Default - with side labels";

export const HorizontalSideLabels = InputOptionsFieldGroupTemplate.bind({});
HorizontalSideLabels.tags = ["!dev"];
HorizontalSideLabels.args = {
	labelPosition: "side",
	layout: "horizontal",
};
HorizontalSideLabels.parameters = {
	chromatic: { disableSnapshot: true },
};
HorizontalSideLabels.storyName = "Horizontal - with side labels";

/**
 * Implementations should include the following behavior for read-only checkboxes:
 * - Read-only checkboxes are immutable, i.e. their checked state cannot be changed.
 * - Unlike disabled checkbox groups, the normally focusable elements of a checkbox group should remain focusable.
 */
export const ReadOnlyCheckbox = Template.bind({});
ReadOnlyCheckbox.tags = ["!dev"];
ReadOnlyCheckbox.args = {
	isReadOnly: true,
	inputType: "checkbox",
	helpText: undefined,
};
ReadOnlyCheckbox.parameters = {
	chromatic: { disableSnapshot: true },
};
ReadOnlyCheckbox.storyName = "Read-only checkbox";

/**
 * A group of read-only radio buttons.
 *
 * Review the individual story for more features of [read-only radio buttons](/docs/components-radio--docs#read-only).
 */
export const ReadOnlyRadio = Template.bind({});
ReadOnlyRadio.tags = ["!dev"];
ReadOnlyRadio.args = {
	isReadOnly: true,
	inputType: "radio"
};
ReadOnlyRadio.parameters = {
	chromatic: { disableSnapshot: true },
};
ReadOnlyRadio.storyName = "Read-only radio";
