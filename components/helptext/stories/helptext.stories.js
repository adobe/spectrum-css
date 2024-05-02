import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { Template } from "./template";

export default {
	title: "Components/Help text",
	description:
		"Help text provides either an informative description or an error message that gives more context about what a user needs to input. It’s commonly used in forms.",
	component: "HelpText",
	argTypes: {
		reducedMotion: { table: { disable: true } },
		text: {
			name: "Text",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				disable: false,
				category: "Component",
			},
			control: { type: "text" },
		},
		variant: {
			name: "Variant",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["neutral", "negative"],
			control: "inline-radio",
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
		hideIcon: {
			name: "Hide icon",
			type: { name: "boolean" },
			description: "Help text using the negative variant can have an optional icon.",
			table: {
				type: { summary: "boolean" },
				disable: false,
				category: "Component",
			},
			control: "boolean",
			if: { arg: "variant", eq: "negative" },
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
		customStyles: {
			name: "Custom styles",
			description: "Storybook only styles for testing the story, applied to the parent element.",
			table: {
				type: { summary: "object" },
				category: "Advanced",
			},
			if: { arg: "customStyles" }
		}
	},
	args: {
		rootClass: "spectrum-HelpText",
		text: "Create a password with at least 8 characters.",
		variant: "neutral",
		hideIcon: false,
		isDisabled: false,
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

const States = (args) =>
	html` <div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Default"],
			})}
			${Template(args)}
		</div>
		${when(args.variant === "negative", () => html`
			<div>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Option for No Icon"],
				})}
				${Template({
					...args,
					variant: "negative",
					hideIcon: true,
				})}
			</div>
		`)}
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Disabled"],
			})}
			${Template({
				...args,
				isDisabled: true,
			})}
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
						content: ["Neutral"],
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
						content: ["Negative"],
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
							variant: "negative",
							text: "This is an example with wrapping text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
							customStyles: {"max-width": "350px"},
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
						content: ["Sizing - Negative"],
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
							variant: "negative",
						})}
					</div>
				</div>`
		: Template(args)}`;

export const Default = Variants.bind({});
Default.args = {};
