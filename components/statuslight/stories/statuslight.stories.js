import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";

import { Template } from "./template";

/**
 * Status lights describe the condition of an entity. They can be used to convey semantic meaning, such as statuses and categories.
 */
export default {
	title: "Components/Status light",
	component: "Statuslight",
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
		variant: {
			name: "Variant",
			description: "Changes the color of the status dot. The variant list includes both semantic and non-semantic options.",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: [
				"info",
				"neutral",
				"positive",
				"notice",
				"negative",
				"yellow",
				"chartreuse",
				"celery",
				"seafoam",
				"cyan",
				"indigo",
				"purple",
				"fuchsia",
				"magenta",
				"gray",
				"red",
				"orange",
				"green",
				"blue",
				"pink",
				"turquoise",
				"cinnamon",
				"brown",
				"silver",
			],
			control: "select",
		},
	},
	args: {
		rootClass: "spectrum-StatusLight",
		size: "m",
		label: "Status",
		variant: "info",
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
		(Story, context) => {
			if (!window.isChromatic()) return Story(context);
			return html`
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
			`;
		}
	],
};

const Sizes = (args) =>
	html` ${["s", "m", "l", "xl"].map((size) => {
		return html`
			<div>
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
					size
				})}
				${when(window.isChromatic(), () =>
					Template({
						...args,
						size,
						label: "Status light label that is long and wraps to the next line",
						customStyles: {"max-width": "150px"}
					})
				)}
			</div>
		`;
	})}`;

const SemanticColors = (args) =>
	html` ${["info", "neutral", "positive", "notice", "negative",].map((variant) => {
		return html`
			<div>
			${Typography({
				semantics: "detail",
				variant: "info",
				content: [
					{
						info: "Informative",
						neutral: "Neutral",
						positive: "Positive",
						notice: "Notice",
						negative: "Negative",
					}[variant],
				],
			})}
			${Template({
				...args,
				variant,
			})}
			</div>
		`;
	})}`;

const NonSemanticColors = (args) =>
	html` ${[
		"yellow",
		"chartreuse",
		"celery",
		"seafoam",
		"cyan",
		"indigo",
		"purple",
		"fuchsia",
		"magenta",
		"gray",
		"red",
		"orange",
		"green",
		"blue",
		"pink",
		"turquoise",
		"cinnamon",
		"brown",
		"silver",
	].map((variant) => {
		return html`
		<div>
			${Typography({
				semantics: "detail",
				variant: "yellow",
				content: [
					{
						yellow: "Yellow",
						chartreuse: "Chartreuse",
						celery: "Celery",
						seafoam: "Seafoam",
						cyan: "Cyan",
						indigo: "Indigo",
						purple: "Purple",
						fuchsia: "Fuchsia",
						magenta: "Magenta",
						gray: "Gray",
						red: "Red",
						orange: "Orange",
						green: "Green",
						blue: "Blue",
						pink: "Pink",
						turquoise: "Turquoise",
						cinnamon: "Cinnamon",
						brown: "Brown",
						silver: "Silver",
					}[variant],
				],
			})}
			${Template({
				...args,
				variant,
			})}
			</div>
		`;
	})}`;

const ChromaticVariants = (args) => {
	const sectionData = [
		{
			sectionName: "Sizes",
			componentMarkup: Sizes({
				...args,
			}),
		},
		{
			sectionName: "Semantic colors",
			componentMarkup: SemanticColors({
				...args,
			}),
		},
		{
			sectionName: "Non-semantic colors",
			componentMarkup: NonSemanticColors({
				...args,
			}),
		},
	];

	return sectionData.map((data) => html`
		<div class="spectrum-Typography">
			${Typography({
				semantics: "detail",
				size: "l",
				content: [data.sectionName],
			})}
			<div
				style=${styleMap({
					display: "grid",
					gap: "1.5rem",
					gridTemplateColumns: "repeat(4, 1fr)",
				})}
			>
				${data.componentMarkup}
			</div>
		</div>
	`);
};

export const Default = (args) => window.isChromatic() ? ChromaticVariants(args) : Template(args);
