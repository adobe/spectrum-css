import { html } from "lit";
import { when } from "lit/directives/when.js";

import { isDisabled, isFocused, isInvalid, isKeyboardFocused, isLoading, isReadOnly, isRequired, isValid } from "@spectrum-css/preview/types";

import { Template } from "./template";

import { default as Icon } from "@spectrum-css/icon/stories/icon.stories.js";

/**
 * Text fields are text boxes that allow users to input custom text entries with a keyboard. Various decorations can be displayed around the field to communicate the entry requirements.
 */
export default {
	title: "Components/Text field",
	component: "TextField",
	argTypes: {
		isValid,
		displayLabel: {
			name: "Show field label",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Variant",
			},
			control: "boolean",
		},
		labelPosition: {
			name: "Label position",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Variant",
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
				category: "Content",
			},
			control: "text",
			if: { arg: "displayLabel", truthy: true },
		},
		isInvalid,
		isFocused,
		isKeyboardFocused,
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
				category: "Variant",
			},
			control: "boolean",
		},
		multiline: {
			name: "Multiline",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Variant",
			},
			control: "boolean",
		},
		grows: {
			name: "Grows",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Variant",
			},
			control: "boolean",
			if: { arg: "multiline", truthy: true },
		},
		iconName: {
			...(Icon?.argTypes?.iconName ?? {}),
			table: { disable: true },
		},
		isDisabled,
		isRequired,
		isReadOnly,
		isLoading,
		pattern: {
			name: "Validation pattern",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "text",
		},
		value: {
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Internal",
				disable: true,
			},
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
		labelText: "Username",
		size: "m",
		multiline: false,
		grows: false,
		isQuiet: false,
		customStorybookStyles: {
			"display": "flex",
			"align-items": "flex-end",
			"gap": "20px",
			"flex-wrap": "wrap",
		},
	},
	parameters: {
		actions: {
			handles: [
				"click .spectrum-Textfield",
				"focusin .spectrum-Textfield",
				"focusout .spectrum-Textfield"
			],
		},
		status: {
			type: "migrated",
		},
		variants: {
			grows: false,
		},
	},
};

const TextFieldGroup = (args) => html`
	${Template(args)}
	${when(window.isChromatic(), () => html`
		${Template({
			...args,
			labelText: "Username that is really long and wraps onto a second line",
			customStyles: { maxInlineSize: "200px" },
		})}
		${Template({
			...args,
			value: "username@reallylongemail.com",
			customStyles: { maxInlineSize: "200px" },
		})}
		${Template({
			...args,
			value: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
		})}
	`)}
`;

export const Default = TextFieldGroup.bind({});
Default.args = {};
