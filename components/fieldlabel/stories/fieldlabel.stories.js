import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isRequired, size } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { FieldLabelGroup } from "./fieldlabel.test.js";
import { Template } from "./template.js";

/**
 * The field label component is used along with inputs to display a label for that input.
 */
export default {
	title: "Field label",
	component: "FieldLabel",
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
		alignment: {
			name: "Alignment",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["left", "right"],
			control: "select",
		},
		isDisabled,
		isRequired,
	},
	args: {
		rootClass: "spectrum-FieldLabel",
		size: "m",
		alignment: "left",
		isDisabled: false,
		isRequired: false,
		label: "Label",
	},
	parameters: {
		packageJson,
		metadata,
	},
};

/**
 * By default, a field label has left-aligned text, and is a medium size. For field label text, use a short, catch-all description (1-3 words) of the information that a user needs to provide.
 *
 * The default position of a field label is above an input, but it can alternatively be positioned to the side. Visit the [form component](/docs/components-form--docs) to see examples of the field label with an input.

 */
export const Default = FieldLabelGroup.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
/**
 * Field labels come in four different sizes: small, medium, large, and extra-large. The medium size is the default and most frequently used option with medium-sized inputs. Use the other sizes sparingly; they should be used to create a hierarchy of importance within the page.
 *
 * Both small and medium field labels have the same font size, but different paddings when used as side labels.
 */
export const Sizing = (args, context) => Sizes({
	Template,
	withBorder: false,
	withHeading: false,
	...args,
}, context);
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * To render right-aligned field label text, apply the `.spectrum-FieldLabel--right` class to the field label.
 *
 */
export const RightAligned = Template.bind({});
RightAligned.args = {
	label: "Label",
	alignment: "right",
	customStyles: {
		width: "72px",
	},
};
RightAligned.tags = ["!dev"];
RightAligned.parameters = {
	chromatic: { disableSnapshot: true },
};
RightAligned.storyName = "Right-aligned";

/**
 * Field labels for required inputs can be marked with an asterisk at the end of the label. Optional inputs would then be understood to not have the asterisk. If using the asterisk icon, do not leave any space between the label text and the start of the `<svg>` element in the markup. Extra space should not be added in addition to the inline margin.
 *
 * The field label for a required field can display either the text “(required)”, or an asterisk.
 */
export const Required = Template.bind({});
Required.args = {
	isRequired: true,
};
Required.tags = ["!dev"];
Required.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * When the field label is too long for the available horizontal space, it wraps to form another line.
 */
export const WrappingAndRequired = Template.bind({});
WrappingAndRequired.args = {
	label: "Label example with longer text that will wrap to the next line. And with an asterisk that marks it as required.",
	isRequired: true,
	customStyles: { width: "200px" },
};
WrappingAndRequired.tags = ["!dev"];
WrappingAndRequired.parameters = {
	chromatic: { disableSnapshot: true },
};
WrappingAndRequired.storyName = "Wrapping and required";

export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true,
};
Disabled.tags = ["!dev"];
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = FieldLabelGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
