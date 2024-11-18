import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isChecked, isDisabled, isEmphasized, isIndeterminate, isInvalid, isReadOnly, size } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { CheckboxGroup } from "./checkbox.test.js";
import { AllVariantsCheckboxGroup, DocsCheckboxGroup, Template } from "./template.js";

/**
 * Checkboxes allow users to select multiple items from a list of individual items, or mark one individual item as selected.
 *
 * ## Usage notes
 *
 * - Checkboxes should not be used on their own. They should always be used within a [field group](/docs/components-field-group--docs).
 * - Invalid checkboxes are indicated with an alert [help text](/docs/components-help-text--docs) when included in a field group.
 * - For more information about the read-only state, see the [read-only checkboxes](/docs/components-field-group--docs#read-only-checkboxes) section of the field group documentation.
 */
export default {
	title: "Checkbox",
	component: "Checkbox",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		isEmphasized,
		isInvalid,
		isDisabled,
		isChecked,
		isIndeterminate,
		isReadOnly,
	},
	args: {
		rootClass: "spectrum-Checkbox",
		size: "m",
		label: "Checkbox",
		isChecked: false,
		isDisabled: false,
		isEmphasized: false,
		isIndeterminate: false,
		isInvalid: false,
		isReadOnly: false,
	},
	parameters: {
		actions: {
			handles: ["click input[type=\"checkbox\"]"],
		},
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=164-16685",
		},
		packageJson,
		metadata,
	},
};

export const Default = CheckboxGroup.bind({});
Default.args = {
	id: "default-checkbox",
};
Default.tags = ["!autodocs"];

/**
 * Checkboxes can be selected, not selected, or in an indeterminate state. They are in an indeterminate state (shown with a dash icon) when they represent both selected and not selected values.
 *
 * When the label is too long for the horizontal space available, it wraps to form another line.
 */
export const DefaultVariants = AllVariantsCheckboxGroup.bind({});
DefaultVariants.tags = ["!dev"];
DefaultVariants.parameters = {
	chromatic: { disableSnapshot: true }
};
DefaultVariants.storyName = "Default";

export const EmphasizedVariants = AllVariantsCheckboxGroup.bind({});
EmphasizedVariants.args = {
	id: "checkbox-emphasized",
	isEmphasized: true,
};
EmphasizedVariants.tags = ["!dev"];
EmphasizedVariants.parameters = {
	chromatic: { disableSnapshot: true },
};
EmphasizedVariants.storyName = "Emphasized";

export const Sizing = (args, context) => Sizes({
	Template: DocsCheckboxGroup,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
Sizing.args = {};
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The class `is-readOnly` is applied to checkboxes in the read-only state. It's worth noting that `<input type="checkbox">` HTML elements do not have a native `readonly` attribute, and the intended behavior is up to the implementation:
 * - Read-only checkboxes are immutable, i.e. their checked state cannot be changed.
 * - Unlike disabled checkboxes, the checkbox should remain focusable.
 */
export const ReadOnly = Template.bind({});
ReadOnly.storyName = "Read-only";
ReadOnly.args = {
	isReadOnly: true,
};
ReadOnly.tags = ["!dev"];
ReadOnly.parameters = {
	chromatic: { disableSnapshot: true }
};

// ********* VRT ONLY ********* //
export const WithForcedColors = CheckboxGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
