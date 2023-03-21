import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import { Template } from "./template";

import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";

export default {
	title: "Components/Button",
	description:
		"Buttons allow users to perform an action or to navigate to another page. They have multiple styles for various needs, and are ideal for calling attention to where a user needs to do something in order to move forward in a flow.",
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
			name: "Variant",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["accent", "negative", "primary", "secondary"],
			control: "select",
		},
		treatment: {
			name: "Treatment",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["fill", "outline"],
			control: "inline-radio",
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
		staticColor: {
			name: "Static color",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Advanced",
			},
			options: ["white", "black"],
			control: "select",
		},
	},
	args: {
		rootClass: "spectrum-Button",
		size: "m",
		label: "Edit",
		variant: "accent",
		treatment: "fill",
		isDisabled: false,
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Button"],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("button")
				? "migrated"
				: undefined,
		},
	},
};

const CustomButton = ({
	iconName,
	staticColor,
	customStyles = {},
	...args
}) => {
	return html`
		<div
      		style=${ifDefined(styleMap({
				padding: "1rem",
				backgroundColor: staticColor === "white" ? "rgb(15, 121, 125)" : staticColor === "black" ? "rgb(181, 209, 211)" : undefined,
				...customStyles
			}))}
		>
			${Template({
				...args,
				staticColor,
				iconName: undefined,
			})}
			${Template({
				...args,
				staticColor,
				iconName: undefined,
				treatment: "outline",
			})}
			${Template({
				...args,
				staticColor,
				iconName: iconName ?? "Edit",
			})}
			${Template({
				...args,
				staticColor,
				hideLabel: true,
				iconName: iconName ?? "Edit",
			})}
		</div>
	`;
};

export const Accent = CustomButton.bind({});
Accent.args = {
	variant: "accent",
};

export const Negative = CustomButton.bind({});
Negative.args = {
	variant: "negative",
	iconName: "Delete",
};

export const Primary = CustomButton.bind({});
Primary.args = {
	variant: "primary",
};

export const Secondary = CustomButton.bind({});
Secondary.args = {
	variant: "secondary",
};

export const StaticColorWhite = CustomButton.bind({});
StaticColorWhite.args = {
	staticColor: "white",
};

export const StaticColorBlack = CustomButton.bind({});
StaticColorBlack.args = {
	staticColor: "black",
};

export const Disabled = CustomButton.bind({});
Disabled.args = {
	isDisabled: true,
	iconName: "Actions",
};

export const WithForcedColors = CustomButton.bind({});
WithForcedColors.parameters = {
  chromatic: { forcedColors: "active" },
};
WithForcedColors.args = {
	iconName: "Actions",
};
