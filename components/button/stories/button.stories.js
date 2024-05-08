import { html } from "lit";

import { isActive, isDisabled, isFocused, isHovered } from "@spectrum-css/preview/types";

import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";

import { Template } from "./template";

/**
 * Buttons allow users to perform an action or to navigate to another page. They have multiple styles for various needs, and are ideal for calling attention to where a user needs to do something in order to move forward in a flow.
 */
export default {
	title: "Components/Button",
	component: "Button",
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
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		iconName: {
			...(IconStories?.argTypes?.iconName ?? {}),
			if: false,
		},
		hideLabel: {
			table: {
				disable: true,
			},
		},
		variant: {
			name: "Emphasis",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Variant",
			},
			options: ["accent", "negative", "primary", "secondary"],
			control: "select",
		},
		treatment: {
			name: "Treatment",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Variant",
				defaultValue: { summary: "fill" },
			},
			options: ["fill", "outline"],
			control: "inline-radio",
		},
		isDisabled,
		isHovered,
		isFocused,
		isActive,
		isPending: {
			name: "Pending",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		staticColor: {
			name: "Static color",
			description: "Variants that can be used when a button needs to be placed on top of a colored background or a visual.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Variant",

			},
			options: ["white", "black"],
			control: "select",
		},
	},
	args: {
		rootClass: "spectrum-Button",
		size: "m",
		label: "Edit",
		treatment: "fill",
		variant: "accent",
		isDisabled: false,
		isPending: false,
		isActive: false,
		isFocused: false,
		isHovered: false,
		customStorybookStyles: {
			"display": "flex",
			"align-items": "flex-start",
			"gap": "20px",
			"flex-wrap": "wrap",
		},
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Button"],
		},
		status: {
			type: "migrated",
		},
	},
};

/**
 * Multiple button variations displayed in one story template.
 * Used as the base template for the stories.
 */
const CustomButton = ({
	iconName,
	...args
}) => html`
	${Template({
		...args,
		iconName: undefined,
	})}
	${Template({
		...args,
		iconName: iconName ?? "Edit",
	})}
	${Template({
		...args,
		hideLabel: true,
		iconName: iconName ?? "Edit",
	})}
`;

const WrapButton = (args) => html`
	${Template({
		...args,
		customStyles: {
			"max-inline-size": "480px",
		},
		iconName: "Edit",
		label: "An example of text overflow behavior within the button component. When the button text is too long for the horizontal space available, it wraps to form another line.",
	})}
	${Template({
		...args,
		customStyles: {
			"max-inline-size": "480px",
		},
		// Uses a UI icon that is smaller than workflow sizing, to test alignment:
		iconName: "Cross100",
		label: "An example of text overflow behavior within the button component. When the button text is too long for the horizontal space available, it wraps to form another line.",
	})}
	${Template({
		...args,
		customStyles: {
			"max-inline-size": "480px",
		},
		// UI icon that is larger than workflow sizing:
		iconName: "ArrowDown600",
		label: "An example of text overflow behavior within the button component. When the button text is too long for the horizontal space available, it wraps to form another line.",
	})}
`;

export const Default = CustomButton.bind({});
Default.args = {};

export const TextWrap = WrapButton.bind({});
TextWrap.args = {};

export const WithForcedColors = CustomButton.bind({});
WithForcedColors.args = {
	iconName: "Actions",
};
WithForcedColors.parameters = {
	chromatic: { forcedColors: "active" },
};
