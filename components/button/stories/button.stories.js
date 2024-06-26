import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused } from "@spectrum-css/preview/types";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { version } from "../package.json";
import { ButtonGroups } from "./template";

/**
 * Buttons allow users to perform an action or to navigate to another page. They have multiple styles for various needs, and are ideal for calling attention to where a user needs to do something in order to move forward in a flow.
 */
export default {
	title: "Button",
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
		isDisabled,
		isHovered: {
			name: "Hovered",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isFocused,
		isActive: {
			name: "Active",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
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
			description:
				"Variants that can be used when a button needs to be placed on top of a colored background or a visual.",
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
		treatment: "fill",
		variant: "accent",
		isDisabled: false,
		isPending: false,
		isActive: false,
		isFocused: false,
		isHovered: false,
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Button"],
		},
		componentVersion: version,
	},
	decorators: [
		(Story, context) => html`
			<style>
				.spectrum-Detail {
					display: inline-block;
				}
				.spectrum-Typography > div {
					border: 1px solid var(--spectrum-gray-200);
					border-radius: 4px;
					padding: 0 10px 10px;
					/* Why seafoam? Because it separates it from the component styles. */
					--mod-detail-font-color: var(--spectrum-seafoam-900);
				}
			</style>
			<div
				style=${styleMap({
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					gap: "10px",
					"--mod-detail-margin-end": "6px",
				})}
			>
				${Story(context)}
			</div>
		`,
	],
};

export const Default = ButtonGroups.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const StaticWhite = Default.bind({});
StaticWhite.tags = ["!autodocs", "!dev", "test"];
StaticWhite.args = {
	staticColor: "white",
};
StaticWhite.parameters = {
	chromatic: {
		modes: disableDefaultModes
	},
};

export const StaticBlack = Default.bind({});
StaticBlack.tags = ["!autodocs", "!dev", "test"];
StaticBlack.args = {
	staticColor: "black",
};
StaticBlack.parameters = {
	chromatic: {
		modes: disableDefaultModes
	},
};

export const WithForcedColors = Default.bind({});
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
WithForcedColors.args = {
	iconName: "Actions",
};
