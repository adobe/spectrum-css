import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isFocused, isInvalid, isValid } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { Template } from "./template";
import { TextFieldGroup } from "./textfield.test";

/**
 * Text fields are text boxes that allow users to input custom text entries with a keyboard. Various decorations can be displayed around the field to communicate the entry requirements.
 */
export default {
	title: "Text field",
	component: "TextField",
	argTypes: {
		isValid: {
			...isValid,
			if: { arg: "isInvalid", truthy: false },
		},
		displayLabel: {
			name: "Display field label",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		labelPosition: {
			name: "Label position",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			options: ["top", "side"],
			control: "select",
			if: { arg: "displayLabel", truthy: true },
		},
		labelText: {
			name: "Label text",
			type: { name: "text" },
			table: {
				type: { summary: "text" },
				category: "Component",
			},
			control: "text",
			if: { arg: "displayLabel", truthy: true },
		},
		isInvalid: {
			...isInvalid,
			if: { arg: "isValid", truthy: false },
		},
		isFocused,
		isKeyboardFocused: {
			name: "Keyboard focused",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
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
		isQuiet: {
			name: "Quiet styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		multiline: {
			name: "Multiline",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		grows: {
			name: "Grows",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
			if: { arg: "multiline", truthy: true },
		},
		iconName: {
			table: { disable: true },
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
		isRequired: {
			name: "Required",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isReadOnly: {
			name: "Read only",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isLoading: {
			name: "Loading",
			type: { name: "boolean" },
			table: {
				disable: true,
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		pattern: {
			name: "Pattern",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "text",
		},
		value: {
			table: { disable: true },
		},
	},
	args: {
		rootClass: "spectrum-Textfield",
		isValid: false,
		isInvalid: false,
		isDisabled: false,
		isRequired: false,
		isReadOnly: false,
		isFocused: false,
		isKeyboardFocused: false,
		isLoading: false,
		displayLabel: false,
		labelPosition: "top",
		size: "m",
		multiline: false,
		grows: false,
		isQuiet: false,
		value: "",
	},
	parameters: {
		actions: {
			handles: [
				"click .spectrum-Textfield",
				"focusin .spectrum-Textfield",
				"focusout .spectrum-Textfield"
			],
		},
		componentVersion: version,
	},
};

export const Default = TextFieldGroup.bind({});
Default.args = {
	labelText: "Username",
};

// ********* DOCS ONLY ********* //
export const TextArea = Template.bind({});
TextArea.tags = ["autodocs", "!dev"];
TextArea.args = {
	labelText: "Username",
	multiline: true,
	grows: true,
	value: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
};
TextArea.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
// @todo should this show text field and text area in the same snapshot?
export const WithForcedColors = TextFieldGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
