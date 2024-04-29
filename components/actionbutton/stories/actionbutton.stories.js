import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { withDownStateDimensionCapture } from "../../../.storybook/decorators";

import { Template } from "./template";

import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";

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
			if: { arg: "staticColor", truthy: false},
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
		isHovered: { table: { disable: true } },
		isFocused: { table: { disable: true } },
		isActive: { table: { disable: true } },
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
	},
	args: {
		rootClass: "spectrum-ActionButton",
		size: "m",
		iconName: "More",
		isQuiet: false,
		isEmphasized: false,
		hasPopup: false,
		hideLabel: false,
		label: "",
		isActive: false,
		isFocused: false,
		isHovered: false,
		isSelected: false,
		isDisabled: false,
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-ActionButton:not([disabled])"],
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
					padding: 0 1em 1em;
					/* Why seafoam? Because it separates it from the component styles. */
					--mod-detail-font-color: var(--spectrum-seafoam-900);
				}
			</style>
			<div
				style=${styleMap({
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					gap: "1rem",
					"--mod-detail-margin-end": ".3rem",
				})}
			>
				${Story(context)}
			</div>
		`,
		withDownStateDimensionCapture(".spectrum-ActionButton:not(:disabled)")
	],
};

const ActionButtons = (args) => html` <div
	style=${styleMap({
		display: "flex",
		gap: "1rem",
	})}
	id="render-root"
>
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
	)}
</div>`;

const States = (args) =>
	html` <div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Default"],
			})}
			${ActionButtons(args)}
		</div>
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Focused"],
			})}
			${ActionButtons({
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
			${ActionButtons({
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
			${ActionButtons({
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
			${ActionButtons({
				...args,
				isDisabled: true,
			})}
		</div>`;

const Sizes = (args) =>
	html` ${["xs", "s", "m", "l", "xl"].map((size) => {
		return html` <div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: [
					{
						xs: "Extra-small",
						s: "Small",
						m: "Medium",
						l: "Large",
						xl: "Extra-large",
					}[size],
				],
			})}
			${ActionButtons({
				...args,
				size,
			})}
		</div>`;
	})}`;

const Variants = (args) =>
	html` ${window.isChromatic()
		? html` <div class="spectrum-Typography">
					${Typography({
						semantics: "detail",
						size: "l",
						content: ["Standard - not selected"],
					})}
					<div
						style=${styleMap({
							display: "flex",
							flexDirection: "column",
							gap: ".3rem",
						})}
					>
						${States(args)}
					</div>
				</div>
				<div class="spectrum-Typography">
					${Typography({
						semantics: "detail",
						size: "l",
						content: ["Quiet - not selected"],
					})}
					<div
						style=${styleMap({
							display: "flex",
							flexDirection: "column",
							gap: ".3rem",
						})}
					>
						${States({
							...args,
							isQuiet: true,
						})}
					</div>
				</div>
				<div class="spectrum-Typography">
					${Typography({
						semantics: "detail",
						size: "l",
						content: ["Standard and Quiet - Selected"],
					})}
					<div
						style=${styleMap({
							display: "flex",
							flexDirection: "column",
							gap: ".3rem",
						})}
					>
						${States({
							...args,
							isSelected: true
						})}
					</div>
				</div>
				<!-- Static color variants don't have emphasized option -->
				${when(!args.staticColor, () => html`
					<div class="spectrum-Typography">
						${Typography({
							semantics: "detail",
							size: "l",
							content: ["Standard and Quiet - Emphasized Selected"],
						})}
						<div
							style=${styleMap({
								display: "flex",
								flexDirection: "column",
								gap: ".3rem",
							})}
						>
							${States({
								...args,
								isSelected: true,
								isEmphasized: true,
							})}
						</div>
					</div>
				`)}
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
							gap: ".3rem",
						})}
					>
						${Sizes(args)}
					</div>
				</div>`
		: ActionButtons(args)}`;

export const Default = Variants.bind({});
Default.args = {};

export const StaticBlack = Variants.bind({});
StaticBlack.args = {
	staticColor: "black",
};

export const StaticWhite = Variants.bind({});
StaticWhite.args = {
	/* Force dark mode to make typography readable */
	color: "dark",
	staticColor: "white",
};

export const WithForcedColors = Variants.bind({});
WithForcedColors.parameters = {
	chromatic: { forcedColors: "active" },
};
