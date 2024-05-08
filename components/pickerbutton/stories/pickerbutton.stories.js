import { html } from "lit";
import { when } from "lit/directives/when.js";

import { Template } from "./template";

import { isDisabled, isFocused, isOpen } from "@spectrum-css/preview/types";

import { default as Icon } from "@spectrum-css/icon/stories/icon.stories.js";

/**
 * The picker button component is used as a dropdown trigger. See Combobox.
 */
export default {
	title: "Components/Picker button",
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
		isOpen,
		isRounded: {
			name: "Rounded",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Variant",
			},
			control: "boolean",
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
		isDisabled,
		isFocused: {
			...isFocused,
			if: { arg: "isDisabled", truthy: false }
		},
		position: {
			name: "Position",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Variant",
				defaultValue: { summary: "right" },
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
		isKeyboardFocused: false,
		iconType: "ui",
		iconName: "ChevronDown",
		position: "right",
		customStorybookStyles: {
			"display": "flex",
			"align-items": "flex-start",
			"gap": "12px",
			"flex-wrap": "wrap",
		},
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
	},
};

const PickerButtons = (args) => html`
	${Template(args)}
	${when(window.isChromatic(), () => html`
		${Template({
			...args,
			label: "Select",
		})}
		${Template({
			...args,
			position: "left",
			label: "Select",
		})}
		${Template({
			...args,
			label: "Select",
		})}`
	)}
`;

export const Default = PickerButtons.bind({});
Default.args = {};
