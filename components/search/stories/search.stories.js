import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { Template } from "./template.js";

export default {
	title: "Components/Search field",
	description:
		"This component contains a single input field with both a magnifying glass icon and a \"reset\" button displayed within it.",
	component: "SearchField",
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
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isFocused: {
			table: { disable: true },
			type: { name: "boolean" },
		},
		isKeyboardFocused: {
			name: "Keyboard Focus",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		inputValue: {
			table: { disable: true },
			type: { name: "string" },
		},
		showHelpText: {
			name: "Show help text",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Content"
			}
		},
		helpTextLabel: {
			name: "Help text label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			if: { arg: "showHelpText", truthy: true },
		}
	},
	args: {
		rootClass: "spectrum-Search",
		isDisabled: false,
		isKeyboardFocused: false,
		showHelpText: false,
		helpTextLabel: "Help text with a suggestion of what to search for",
	},
	parameters: {
		actions: {
			handles: [
				"change .spectrum-Search-input",
				"click .spectrum-Search-clearButton",
				"click .spectrum-Search-icon",
			],
		},
		status: {
			type: "migrated",
		},
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
	],
};

const States = (args) => html`
	${Typography({
		semantics: "detail",
		size: "s",
		content: ["Default"],
	})}
	${Template(args)}
	${Typography({
		semantics: "detail",
		size: "s",
		content: ["With Input Text"],
	})}
	${Template({
		...args,
		inputValue: "Example of long input text"
	})}
	${Typography({
		semantics: "detail",
		size: "s",
		content: ["Focus"],
	})}
	${Template({
		...args,
		isFocused: true,
	})}
	${Typography({
		semantics: "detail",
		size: "s",
		content: ["Keyboard Focus"],
	})}
	${Template({
		...args,
		isKeyboardFocused: true,
	})}
	${Typography({
		semantics: "detail",
		size: "s",
		content: ["Disabled"],
	})}
	${Template({
		...args,
		isDisabled: true,
	})}`;

const Sizes = (args) =>
	html` ${["s", "m", "l", "xl"].map((size) => {
		return html`
			${Typography({
				semantics: "detail",
				size: "s",
				content: [
					{
						s: "Small",
						m: "Medium",
						l: "Large",
						xl: "Extra-large",
					}[size],
				],
			})}
			${Template({
				...args,
				size,
			})}
		`;
	})}`;

const Variants = (args) =>
	html` ${window.isChromatic()
		? html` <div class="spectrum-Typography">
					${Typography({
						semantics: "detail",
						size: "l",
						content: ["Default"],
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
						content: ["Default with Help Text"],
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
							showHelpText: true,
							helpTextLabel: "Help text with a suggestion of what to search for"
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
							gap: ".3rem",
						})}
					>
						${Sizes(args)}
					</div>
				</div>
				<div class="spectrum-Typography">
					${Typography({
						semantics: "detail",
						size: "l",
						content: ["Sizing with Help Text"],
					})}
					<div
						style=${styleMap({
							display: "flex",
							flexDirection: "column",
							gap: ".3rem",
						})}
					>
						${Sizes({
							...args,
							showHelpText: true,
							helpTextLabel: "Help text with a suggestion of what to search for"
						})}
					</div>
				</div>`
		: Template(args)}`;

export const Default = Variants.bind({});
Default.args = {};
