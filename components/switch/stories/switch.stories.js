import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { Template } from "./template";

export default {
	title: "Components/Switch",
	description:
		"A switch is used to turn an option on or off. Switches allow users to select the state of a single option at a time.",
	component: "Switch",
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
		isEmphasized: {
			name: "Emphasized",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
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
		isChecked: {
			name: "Checked",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
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
	},
	args: {
		rootClass: "spectrum-Switch",
		isDisabled: false,
		isChecked: false,
		isEmphasized: false,
		label: "Switch label",
		size: "m",
	},
	parameters: {
		actions: {
			handles: [],
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
		content: ["Checked"],
	})}
	${Template({
		...args,
		isChecked: true,
	})}
	${Typography({
		semantics: "detail",
		size: "s",
		content: ["Disabled"],
	})}
	${Template({
		...args,
		customStyles: {"max-width": "250px"},
		isDisabled: true,
		label: "Switch unchecked and disabled and so long it wraps to the next line",
	})}
	${Typography({
		semantics: "detail",
		size: "s",
		content: ["Disabled + checked"],
	})}
	${Template({
		...args,
		isChecked: true,
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
						content: ["Emphasized"],
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
							isEmphasized: true,
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
				</div>`
		: Template(args)}`;

export const Default = Variants.bind({});
Default.args = {};
