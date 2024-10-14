import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isChecked, isDisabled, isEmphasized, isIndeterminate, isInvalid, isReadOnly, size } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { CheckboxGroup } from "./checkbox.test.js";
import { AllVariantsCheckboxGroup, DocsCheckboxGroup, } from "./template.js";

/**
 * Checkboxes allow users to select multiple items from a list of individual items, or mark one individual item as selected.
 *
 * ## Usage notes
 *
 * Checkboxes should not be used on their own. They should always be used within a [field group](/docs/components-field-group--docs). Invalid checkboxes are indicated with an alert [help text](/docs/components-help-text--docs) when included in a Field group.
 *
 * When the label is too long for the horizontal space available, it wraps to form another line.
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
		packageJson,
		metadata,
	},
};

export const Default = CheckboxGroup.bind({});
Default.args = {
	id: "default-checkbox",
};
Default.tags = ["!autodocs"];

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
