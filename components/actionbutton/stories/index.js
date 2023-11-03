import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import { Template } from "./template";

import { default as IconStories } from "@spectrum-css/icon";

export const argTypes = {
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
			category: "Component",
		},
		control: "boolean",
	},
	isEmphasized: {
		name: "Emphasized styling",
		type: { name: "boolean" },
		table: {
			type: { summary: "boolean" },
			category: "Component",
		},
		control: "boolean",
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
	isSelected: {
		name: "Selected",
		type: { name: "boolean" },
		table: {
			type: { summary: "boolean" },
			category: "State",
		},
		control: "boolean",
	},
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
		name: "StaticColor",
		type: { name: "string" },
		table: {
			type: { summary: "string" },
			category: "Advanced",
		},
		options: ["white", "black"],
		control: "select",
	},
};

export const ActionButtons = ({
	staticColor,
	...args
}) => {
	return html`
		<div
      		style=${ifDefined(styleMap({
				padding: "1rem",
				backgroundColor: staticColor === "white" ? "rgb(15, 121, 125)" : staticColor === "black" ? "rgb(181, 209, 211)" : undefined,
			}))}
		>
			${Template({
				...args,
				staticColor,
				label: "More",
				iconName: undefined,
			})}
			${Template({
				...args,
				staticColor,
				label: "More",
			})}
			${Template({
				...args,
				staticColor,
			})}
			${Template({
				...args,
				staticColor,
				hasPopup: true,
			})}
		</div>
	`;
};
