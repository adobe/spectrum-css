import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";

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
		isHovered: {
			name: "Hovered",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isFocused: {
			name: "Focused",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
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
			description: "Variants that can be used when a button needs to be placed on top of a colored background or a visual.",
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
		status: {
			type: "migrated",
		},
		html: {
			root: "#render-root"
		}
	},
	decorators: [
		(Story, context) => html`
			<style>
				.spectrum-Detail { display: inline-block; }
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

const States = (args) =>
	html` <div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Default"],
			})}
			${Treatment(args)}
		</div>
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Selected"],
			})}
			${Treatment({
				...args,
				isSelected: true,
			})}
		</div>
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Focused"],
			})}
			${Treatment({
				...args,
				isFocused: true,
			})}
		</div>
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Hovered"],
			})}
			${Treatment({
				...args,
				isHovered: true,
			})}
		</div>
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Active"],
			})}
			${Treatment({
				...args,
				isActive: true,
			})}
		</div>
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Disabled"],
			})}
			${Treatment({
				...args,
				isDisabled: true,
			})}
		</div>
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Disabled + selected"],
			})}
			${Treatment({
				...args,
				isSelected: true,
				isDisabled: true,
			})}
		</div>
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Pending"],
			})}
			${Treatment({
				...args,
				isPending: true,
			})}
		</div>`;

const Sizes = (args) =>
	html` ${["s", "m", "l", "xl"].map((size) => {
		return html` <div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: [
					{
						xxs: "Extra-extra-small",
						xs: "Extra-small",
						s: "Small",
						m: "Medium",
						l: "Large",
						xl: "Extra-large",
						xxl: "Extra-extra-large",
					}[size],
				],
			})}
			${Treatment({ ...args, size })}
		</div>`;
	})}`;

const Treatment = (args) =>
	html`
<div
	style=${styleMap({
		display: "flex",
		gap: "10px",
	})}
	id="render-root"
>
	${["fill", "outline"].map((treatment) => CustomButton({ ...args, treatment }))}
</div>`;

const Wrapping = (args) => html`
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
})}`;

const Variants = (args) =>
	html` ${window.isChromatic()
		? html` <div class="spectrum-Typography">
					${Typography({
						semantics: "detail",
						size: "l",
						content: ["Accent"],
					})}
					<div
						style=${styleMap({
							display: "flex",
							flexDirection: "column",
							gap: "10px",
						})}
					>
						${States(args)}
					</div>
				</div>
				<div class="spectrum-Typography">
					${Typography({
						semantics: "detail",
						size: "l",
						content: ["Negative"],
					})}
					<div
						style=${styleMap({
							display: "flex",
							flexDirection: "column",
							gap: "10px",
						})}
					>
						${States({
							...args,
							variant: "negative"
						})}
					</div>
				</div>
				<div class="spectrum-Typography">
					${Typography({
						semantics: "detail",
						size: "l",
						content: ["Primary"],
					})}
					<div
						style=${styleMap({
							display: "flex",
							flexDirection: "column",
							gap: "10px",
						})}
					>
						${States({
							...args,
							variant: "primary"
						})}
					</div>
				</div>
				<div class="spectrum-Typography">
					${Typography({
						semantics: "detail",
						size: "l",
						content: ["Secondary"],
					})}
					<div
						style=${styleMap({
							display: "flex",
							flexDirection: "column",
							gap: "10px",
						})}
					>
						${States({
							...args,
							variant: "secondary"
						})}
					</div>
				</div>
				<div class="spectrum-Typography">
					${Typography({
						semantics: "detail",
						size: "l",
						content: ["Sizing"],
					})}
					<div
						style=${styleMap({
							display: "flex",
							flexDirection: "column",
							gap: "10px",
						})}
					>
						${Sizes(args)}
					</div>
				</div>
				<div class="spectrum-Typography">
					${Typography({
						semantics: "detail",
						size: "l",
						content: ["Wrapping"],
					})}
					<div
						style=${styleMap({
							"display": "flex",
							"flex-direction": "column",
							"gap": "10px",
							"padding": "6px"
						})}
					>
						${Wrapping(args)}
					</div>
				</div>
		` : html`
<div
	style=${styleMap({
		display: "flex",
		gap: "10px",
	})}
	id="render-root"
>${CustomButton(args)}</div>`}`;

export const Default = Variants.bind({});
Default.args = {};

export const StaticWhite = Variants.bind({});
StaticWhite.tags = ["vrt-only"];
StaticWhite.args = {
	staticColor: "white",
};

export const StaticBlack = Variants.bind({});
StaticBlack.tags = ["vrt-only"];
StaticBlack.args = {
	staticColor: "black",
};

export const WithForcedColors = Variants.bind({});
WithForcedColors.tags = ["vrt-only"];
WithForcedColors.parameters = {
	chromatic: { forcedColors: "active" },
};
WithForcedColors.args = {
	iconName: "Actions",
};
