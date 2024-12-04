import { html } from "lit";

import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { styleMap } from "lit/directives/style-map.js";
import { Template } from "./template";

/**
 * The progress bar component shows the progression of a system operation such as downloading, uploading, processing, etc. in a visual way.
 */
export default {
	title: "Progress bar",
	component: "ProgressBar",
	argTypes: {
		customWidth: {
			name: "Custom width",
			description: "A number to adjust the width of the component. Spectrum 2 specifications limit the component width to be between 48px and 768px.",
			type: { name: "number" },
			table: {
				type: { summary: "number" },
				category: "Component",
			},
			control: { type: "range", min: 48, max: 768,},
		},
		isIndeterminate: {
			name: "Indeterminate",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
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
		labelPosition: {
			name: "Label position",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["top", "side"],
			control: "select",
		},
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		value: {
			name: "Percent filled",
			type: { name: "number" },
			table: {
				type: { summary: "number" },
				category: "Content",
			},
			control: { type: "range", min: 0, max: 100,},
			if: { arg: "indeterminate", truthy: false },
		},
		isStaticWhite: {
			name: "Static White",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-ProgressBar",
		size: "m",
		labelPosition: "top",
		label: "Loading",
		value: 50,
		isStaticWhite: false,
		isIndeterminate: false,
		customWidth: 200,
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

const States = (args) =>
	html`
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Default"],
			})}
			${Template(args)}
		</div>
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Side label"],
			})}
			${Template({
				...args,
				labelPosition: "side",
			})}
		</div>
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Indeterminate"],
			})}
			${Template({
				...args,
				isIndeterminate: true,
			})}
		</div>
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Custom width"],
			})}
			${Template({
				...args,
				customWidth: "500px",
			})}
		</div>
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Static white"],
			})}
			<div style=${styleMap({
					background: "var(--spectrum-examples-gradient-static-white)",
					padding: "1rem",
				})}
			>
				${Template({
					...args,
					isStaticWhite: true,
					/* Force dark mode to make typography readable */
					color: "dark",
					label: "Loading your fonts, images, and icons, longwordverylongworddoesntcauseoverflow",
				})}
			</div>
		</div>
	`;

const Sizes = (args) =>
	html` ${["s", "m", "l", "xl"].map((size) => {
		return html` <div>
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
		</div>`;
	})}`;

const Variants = (args) =>
	html` ${window.isChromatic()
		? html` <div class="spectrum-Typography">
					${Typography({
						semantics: "detail",
						size: "l",
						content: ["Standard"],
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
						content: ["Sizing - Side label"],
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
							labelPosition: "side",
						})}
					</div>
				</div>`
		: Template(args)}`;

export const Default = Variants.bind({});
Default.args = {};
