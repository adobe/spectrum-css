import { html } from "lit";
import { when } from "lit/directives/when.js";

import { isActive, isDisabled, isFocused, isHovered, isSelected } from "@spectrum-css/preview/types";

import { Template } from "./template";

import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";

/**
 * The action button component represents an action a user can take.
 */
export default {
	title: "Components/Action button",
	component: "ActionButton",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["xs", "s", "m", "l", "xl"],
			control: "select",
		},
		iconName: {
			...(IconStories?.argTypes?.iconName ?? {}),
			if: false,
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
		isQuiet: {
			name: "Quiet styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Variant",
			},
			control: "boolean",
		},
		isEmphasized: {
			name: "Emphasized styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Variant",
			},
			control: "boolean",
		},
		isDisabled,
		isSelected,
		isHovered,
		isFocused,
		isActive,
		hideLabel: {
			name: "Hide label",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
		hasPopup: {
			name: "Has popup",
			description: "True if the button triggers a popup action.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
		staticColor: {
			name: "Static color",
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
		rootClass: "spectrum-ActionButton",
		size: "m",
		iconName: "More",
		isQuiet: false,
		isEmphasized: false,
		hasPopup: false,
		isActive: false,
		isFocused: false,
		isHovered: false,
		isSelected: false,
		isDisabled: false,
		customStorybookStyles: {
			"display": "flex",
			"align-items": "flex-start",
			"gap": "20px",
			"flex-wrap": "wrap",
		},
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-ActionButton:not([disabled])"],
		},
		status: {
			type: "migrated",
		},
	},
};

const ActionButtons = (args) => html`
	${Template({
		...args,
		label: "More",
		iconName: undefined,
	})}
	${Template({
		...args,
		label: "More",
	})}
	${Template(args)}
	${Template({
		...args,
		hasPopup: true,
	})}
	<!-- Save truncation for VRTs -->
	${when(window.isChromatic(), () =>
		Template({
			...args,
			label: "Truncate this long content",
			iconName: undefined,
			customStyles: { maxInlineSize: "100px" },
		})
	)}
	${when(window.isChromatic(), () =>
		Template({
			...args,
			label: "Truncate this long content",
			customStyles: { maxInlineSize: "100px" },
		})
	)}`;

export const Default = ActionButtons.bind({});
Default.args = {};

export const WithForcedColors = ActionButtons.bind({});
WithForcedColors.parameters = {
	chromatic: { forcedColors: "active" },
};
