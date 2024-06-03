import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { Template } from "./template";

/**
 * Tooltips show contextual help or information about specific components when a user hovers or focuses on them.
 */
const placementOptions = [
	"top",
	"top-left",
	"top-right",
	"top-start",
	"top-end",
	"bottom",
	"bottom-left",
	"bottom-right",
	"bottom-start",
	"bottom-end",
	"right",
	"right-bottom",
	"right-top",
	"left",
	"left-bottom",
	"left-top",
	"start",
	"start-top",
	"start-bottom",
	"end",
	"end-top",
	"end-bottom",
];

export default {
	title: "Tooltip",
	component: "Tooltip",
	argTypes: {
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		variant: {
			name: "Variant",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["neutral", "info", "positive", "negative"],
			control: "inline-radio",
		},
		placement: {
			name: "Placement",
			description: "The placement of the tooltip relative to the source. Note that placements that start with Left/Right do not change with text direction, but Start/End placements do.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: placementOptions,
			control: "select",
		},
		isOpen: {
			name: "Open",
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
				disable: true,
			},
			control: "boolean",
			if: { arg: "showOnHover", truthy: true },
		},
		showOnHover: {
			name: "Show tooltip on hover (.u-tooltip-showOnHover &)",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
				disable: true,
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Tooltip",
		isOpen: true,
		isFocused: false,
		showOnHover: false,
		variant: "neutral",
		label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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
					padding: 0 14px 14px;
					/* Why seafoam? Because it separates it from the component styles. */
					--mod-detail-font-color: var(--spectrum-seafoam-900);
				}
			</style>
			<div
				style=${styleMap({
					"display": "flex",
					"flex-direction": "column",
					"align-items": "flex-start",
					"gap": "16px",
					"--mod-detail-margin-end": "4.8px",
				})}
			>
				${Story(context)}
			</div>
		`,
	],
};

const PlacementVariants = (args) => html`
	${window.isChromatic()
		? html`
			${placementOptions.map(option => {
				const optionDescription = () => {
					if (option.startsWith("start") || option.startsWith("end"))
						return "Changes side with text direction (like a logical property)";
					if (option.startsWith("left") || option.startsWith("right"))
						return "Text direction does not effect the position";
					return null;
				};

				return html`
					<div class="spectrum-Typography">
						${Typography({
							semantics: "detail",
							size: "l",
							content: [`${option}`],
						})}
						<div
							style=${styleMap({
									"display": "flex",
									"flex-direction": "column",
									"gap": "4.8px",
								})}
							>
							${when(optionDescription() !== null, () => html`
								${Typography({
									semantics: "detail",
									size: "s",
									content: [`${optionDescription()}`],
								})}
							`)}
							${Template({
								...args,
								placement: option,
							})}
						</div>
					</div>
				`;
			})}`
		: Template(args)
	}
`;

export const Default = PlacementVariants.bind({});
Default.args = {};
