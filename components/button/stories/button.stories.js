import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { withDownStateDimensionCapture } from "../../../.storybook/decorators";

import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { Template } from "./template";

export default {
	title: "Components/Button",
	description:
		"Buttons allow users to perform an action or to navigate to another page. They have multiple styles for various needs, and are ideal for calling attention to where a user needs to do something in order to move forward in a flow.",
	component: "Button",
	decorators: [withDownStateDimensionCapture('.spectrum-Button:not(:disabled)')],
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
		isPending: {
			name: "Pending",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
			if: { arg: "staticColor", neq: "black" }
		},
		staticColor: {
			name: "Static color",
			description: "Variants that can be used when a button needs to be placed on top of a colored background or a visual.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Advanced",
			},
			options: ["white", "black"],
			control: "select",
		},
		showIconOnlyButton: {
			table: {
				disable: true,
			},
		},
		layout: {
		    name: "Layout",
		    description: "How the buttons align in the preview (Storybook only).",
		    type: { name: "string" },
			table: {
			    type: { summary: "string" },
			    category: "Advanced"
			},
			options: ["stacked","inline"],
			control: "radio"
		},
	},
	args: {
		rootClass: "spectrum-Button",
		size: "m",
		label: "Edit",
		variant: "accent",
		treatment: "fill",
		isDisabled: false,
		isPending: false,
		showIconOnlyButton: true,
		layout: "inline",
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

/**
 * Optional wrapper for each button used within other templates, to assist with the "stacked"
 * layout and the testing of wrapping text.
 */
const ButtonWrap = (layout, content) => {
	const buttonWrapStyles = {
		'margin-block': '15px',
		'max-width': '480px',
	};
	return layout === "stacked" ? html`<div style=${styleMap(buttonWrapStyles)}>${content}</div>` : content;
};

/**
 * Multiple button variations displayed in one story template.
 * Used as the base template for the stories.
 */
const CustomButton = ({
	iconName,
	staticColor,
	layout,
	showIconOnlyButton,
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
			${ButtonWrap(layout, Template({
				...args,
				staticColor,
				iconName: undefined,
			}))}
			${ButtonWrap(layout, Template({
				...args,
				staticColor,
				iconName: undefined,
				treatment: "outline",
			}))}
			${ButtonWrap(layout, Template({
				...args,
				staticColor,
				iconName: iconName ?? "Edit",
			}))}
			${when(showIconOnlyButton, () =>
				ButtonWrap(layout, Template({
					...args,
					staticColor,
					hideLabel: true,
					iconName: iconName ?? "Edit",
				}))
			)}
		</div>
	`;
};

const PendingButton = ({
	staticColor,
	customStyles = {},
	...args
}) => html`
	<div style=${styleMap({
		display: "flex",
		flexDirection: "column",
		gap: ".3rem",
	})}>
		<div>
			${Typography({
				semantics: "heading",
				size: "xxs",
				content: ["Default"],
			})}
			${CustomButton({
				...args,
			})}
		</div>
		<div>
			${Typography({
				semantics: "heading",
				size: "xxs",
				content: ["Static White"],
			})}
			${CustomButton({
				...args,
				staticColor: "white",
			})}
		</div>
	</div>
`;

const ButtonsWithForcedColors = ({
	customStyles = {},
	...args
}) => html`
	<div style=${styleMap({
		display: "flex",
		flexDirection: "column",
		gap: ".3rem",
	})}>
		<div>
			${Typography({
				semantics: "heading",
				size: "xxs",
				content: ["Default"],
			})}
			${CustomButton({
				...args,
				variant: "accent"
			})}
		</div>
		<div>
			${Typography({
				semantics: "heading",
				size: "xxs",
				content: ["Pending State"],
			})}
			${CustomButton({
				...args,
				isDisabled: true,
				isPending: true,
			})}
		</div>
	</div>
`;

/**
 * Wrapping story template, displaying some additional variants for Chromatic.
 */
const WrappingTemplate = ({layout, ...args}) => {
	if (window.isChromatic()) {
		return html`
			${CustomButton({layout, ...args})}
			<div style=${ifDefined(styleMap({ padding: "1rem" }))}>
				${ButtonWrap(layout, Template({
					...args,
					iconName: "Edit",
					treatment: "outline",
				}))}
				${ButtonWrap(layout, Template({
					...args,
					// Uses a UI icon that is smaller than workflow sizing, to test alignment:
					iconName: "Cross100",
				}))}
				${ButtonWrap(layout, Template({
					...args,
					// UI icon that is larger than workflow sizing:
					iconName: "ArrowDown600",
					treatment: "outline",
				}))}
			</div>
		`;
	}
	// Otherwise use the default template.
	return CustomButton({layout, ...args});
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

export const Pending = PendingButton.bind({});
Pending.args = {
	isDisabled: true,
	isPending: true,
};

export const WithForcedColors = ButtonsWithForcedColors.bind({});
WithForcedColors.parameters = {
  chromatic: { forcedColors: "active" },
};
WithForcedColors.args = {
	iconName: "Actions",
};

export const Wrapping = WrappingTemplate.bind({});
Wrapping.storyName = "Wrapping";
Wrapping.args = {
	layout: "stacked",
	showIconOnlyButton: false,
	variant: "accent",
	label: "An example of text overflow behavior within the button component. When the button text is too long for the horizontal space available, it wraps to form another line.",
};
