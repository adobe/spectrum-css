import { html } from "lit";

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
		customStorybookStyles: {
			padding: "1rem"
		},
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Button"],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("button")
				? "migrated"
				: "legacy",
		},
	},
};

const CustomButton = (args) => html`
	${Template({
		...args,
		iconName: undefined,
	})}
	${Template({
		...args,
		iconName: undefined,
		treatment: "outline",
	})}
	${Template({
		...args,
		iconName: args.iconName ?? "Edit",
	})}
	${Template({
		...args,
		hideLabel: true,
		iconName: args.iconName ?? "Edit",
	})}
`;

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

export const Express = CustomButton.bind({});
Express.args = { express: true };
