import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

import { withDownStateDimensionCapture } from "@spectrum-css/preview/decorators";

import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { Template } from "./template";

/**
 * A picker outlines a set of options for a user.
 */
export default {
	title: "Components/Picker",
	component: "Picker",
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
			description: "The label text that is displayed above or to the side of the Picker. This uses a separate Label component outside of the Picker markup.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		labelPosition: {
			name: "Label position",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["top", "side"],
			control: {
				type: "select",
				labels: {
					side: "side (inline start)",
				},
			},
		},
		helpText: {
			name: "Help text",
			description: "The help text that is displayed below the Picker. This uses a separate Help text component outside of the Picker markup.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		withSwitch: {
			name: "Display Switch component",
			description: "Displays a Switch component after the Picker. This is used for testing the vertical alignment between the side label, Picker, and Switch.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Content",
			},
			control: "boolean",
			if: { arg: "labelPosition", eq: "side" },
		},
		placeholder: {
			name: "Value or placeholder",
			description: "The text within the Picker that represents its current value or placeholder.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		contentIconName: {
			...(IconStories?.argTypes?.iconName ?? {}),
			name: "Icon",
			description: "Optional workflow icon that appears before the value/placeholder text within the picker.",
			if: false,
		},
		isQuiet: {
			name: "Quiet styling",
			description: "An alternative way to display the Picker without a visible background.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
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
		isKeyboardFocused: {
			name: "Keyboard focused",
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
			if: { arg: "isLoading", eq: false },
		},
		isLoading: {
			name: "Loading",
			description: "When in the loading state, a progress circle will display next to the disclosure icon.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
			if: { arg: "isDisabled", eq: false },
		},
		isInvalid: {
			name: "Invalid input",
			description: "When in the invalid state, some styles change on the Picker, and an invalid icon displays next to the disclosure icon.",
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
				disable: true,
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isActive: {
			name: "Active",
			type: { name: "boolean" },
			table: {
				disable: true,
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		content: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Picker",
		size: "m",
		label: "Country",
		helpText: "",
		labelPosition: "top",
		placeholder: "Select a country",
		isQuiet: false,
		isKeyboardFocused: false,
		isLoading: false,
		isDisabled: false,
		isInvalid: false,
		isOpen: false,
		isHovered: false,
		isActive: false,
		withSwitch: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
		docs: {
			story: {
				height: "300px"
			}
		},
	},
	decorators: [
		withDownStateDimensionCapture(".spectrum-Picker:not(:disabled, .is-disabled, .is-loading)"),
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
		},
	],
};

/**
 * Group of Pickers for default, hover, open + hover, open, keyboard focus, and disabled.
 */
const States = ({
	fieldLabelPrefix = "picker",
	...args 
}) => html`
	<div>
		${Typography({
			semantics: "detail",
			size: "s",
			content: ["Default"],
		})}
		${Template({
			...args,
			isOpen: false,
			fieldLabelId: fieldLabelPrefix + "-default",
		})}
	</div>
	<div>
		${Typography({
			semantics: "detail",
			size: "s",
			content: ["Hover"],
		})}
		${Template({
			...args,
			isHovered: true,
			isOpen: false,
			fieldLabelId: fieldLabelPrefix + "-hover",
		})}
	</div>
	<div>
		${Typography({
			semantics: "detail",
			size: "s",
			content: ["Active (down state)"],
		})}
		${Template({
			...args,
			isActive: true,
			isOpen: false,
			fieldLabelId: fieldLabelPrefix + "-active",
		})}
	</div>
	<div>
		${Typography({
			semantics: "detail",
			size: "s",
			content: ["Keyboard Focused"],
		})}
		${Template({
			...args,
			isKeyboardFocused: true,
			isOpen: false,
			fieldLabelId: fieldLabelPrefix + "-key-focused",
		})}
	</div>
	<div>
		${Typography({
			semantics: "detail",
			size: "s",
			content: ["Disabled"],
		})}
		${Template({
			...args,
			isDisabled: true,
			isOpen: false,
			fieldLabelId: fieldLabelPrefix + "-disabled",
		})}
	</div>
	<div>
		${Typography({
			semantics: "detail",
			size: "s",
			content: ["Loading"],
		})}
		${Template({
			...args,
			isLoading: true,
			isOpen: false,
			fieldLabelId: fieldLabelPrefix + "-loading",
		})}
	</div>
	<div style="padding-bottom: 130px;">
		${Typography({
			semantics: "detail",
			size: "s",
			content: ["Open + Hover"],
		})}
		${Template({
			...args,
			isHovered: true,
			isOpen: true,
			fieldLabelId: fieldLabelPrefix + "-open-hover",
		})}
	</div>
	<div style="padding-bottom: 130px;">
		${Typography({
			semantics: "detail",
			size: "s",
			content: ["Open"],
		})}
		${Template({
			...args,
			isOpen: true,
			fieldLabelId: fieldLabelPrefix + "-open",
		})}
	</div>
`;

/**
 * Chromatic only "kitchen sink" containing multiple sections with
 * each state within them.
 */
const ChromaticPickerGroup = (args) => {
	const sectionData = [
		{
			sectionName: "Default",
			componentMarkup: States({
				...args,
				placeholder: "Select country with truncated placeholder text",
				fieldLabelPrefix: "picker",
			}),
		},
		{
			sectionName: "Invalid",
			componentMarkup: States({
				...args,
				isInvalid: true,
				placeholder: "Select country with truncated placeholder text",
				helpText: "Please select a country",
				fieldLabelPrefix: "picker-invalid",
			}),
		},
		{
			sectionName: "Quiet",
			componentMarkup: States({
				...args,
				isQuiet: true,
				helpText: "Please select a country",
				fieldLabelPrefix: "picker-quiet",
			}),
		},
		{
			sectionName: "Quiet + invalid",
			componentMarkup: States({
				...args,
				isQuiet: true,
				isInvalid: true,
				fieldLabelPrefix: "picker-quiet-invalid",
			}),
		},
		{
			sectionName: "Side label: default",
			componentMarkup: States({
				...args,
				labelPosition: "side",
				fieldLabelPrefix: "picker-side-label",
			}),
		},
		{
			sectionName: "Side label: invalid",
			componentMarkup: States({
				...args,
				isInvalid: true,
				labelPosition: "side",
				fieldLabelPrefix: "picker-side-label-invalid",
			}),
		},
		{
			sectionName: "Side label: quiet",
			componentMarkup: States({
				...args,
				isQuiet: true,
				labelPosition: "side",
				fieldLabelPrefix: "picker-side-label-quiet",
			}),
		},
		{
			sectionName: "Side label: quiet + invalid",
			componentMarkup: States({
				...args,
				isQuiet: true,
				isInvalid: true,
				labelPosition: "side",
				fieldLabelPrefix: "picker-side-label-quiet-invalid",
			})
		},
		{
			sectionName: "Alignment with switch and side label",
			componentMarkup: SwitchAndSideLabel(args),
			gridColumns: 2,
		},
		{
			sectionName: "Sizing",
			componentMarkup: Sizing(args),
		},
		{
			sectionName: "Sizing + Quiet",
			componentMarkup: Sizing({
				...args,
				isQuiet: true,
				fieldLabelPrefix: "picker-sizing-quiet",
			}),
		},
		{
			sectionName: "Sizing + Invalid",
			componentMarkup: Sizing({
				...args,
				isInvalid: true,
				placeholder: "Select country with truncated placeholder text",
				fieldLabelPrefix: "picker-sizing-invalid",
			}),
		},
		{
			sectionName: "Sizing + Loading",
			componentMarkup: Sizing({
				...args,
				isLoading: true,
				fieldLabelPrefix: "picker-sizing-loading",
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
					gridTemplateColumns: `repeat(${data?.gridColumns?.toString() ?? "4"}, 1fr)`,
				})}
			>
				${data.componentMarkup}
			</div>
		</div>
	`);
};

/**
 * Examples of side label, Picker, and Switch in a single line.
 * Used for testing vertical alignment.
 */
const SwitchAndSideLabel = (args) => html`
	<div>
		${Typography({
			semantics: "detail",
			size: "s",
			content: ["Default"],
		})}
		${Template({
			...args,
			labelPosition: "side",
			isOpen: false,
			withSwitch: true,
			placeholder: "Select your country of origin",
			fieldLabelId: "with-switch-default",
		})}
	</div>
	<div>
		${Typography({
			semantics: "detail",
			size: "s",
			content: ["Wrapping label text"],
		})}
		${Template({
			...args,
			labelPosition: "side",
			isOpen: false,
			withSwitch: true,
			fieldLabelStyle: {"max-width": "90px"},
			label: "Enter country, text should wrap",
			placeholder: "Select your country of origin",
			fieldLabelId: "with-switch-wrapping",
		})}
	</div>
	<div>
		${Typography({
			semantics: "detail",
			size: "s",
			content: ["Quiet"],
		})}
		${Template({
			...args,
			labelPosition: "side",
			isOpen: false,
			withSwitch: true,
			placeholder: "Select your contry of origin",
			isQuiet: true,
			fieldLabelId: "with-switch-quiet",
		})}
	</div>
	<div>
		${Typography({
			semantics: "detail",
			size: "s",
			content: ["Quiet + wrapping label text"],
		})}
		${Template({
			...args,
			labelPosition: "side",
			isOpen: false,
			withSwitch: true,
			isQuiet: true,
			fieldLabelStyle: {"max-width": "90px"},
			label: "Enter country, text should wrap",
			placeholder: "Select your contry of origin",
			fieldLabelId: "with-switch-quiet-wrapping",
		})}
	</div>
`;

/**
 * Picker displayed at each available size.
 */
const Sizing = ({
	fieldLabelPrefix = "picker-sizing",
	...args
}) => html` 
	${["s","m","l","xl"].map((size) => html`
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: {
					s: "Small",
					m: "Medium",
					l: "Large",
					xl: "Extra-large",
				}[size],
			})}
			${Template({
				...args,
				size,
				isOpen: false,
				fieldLabelId: fieldLabelPrefix + size,
			})}
		</div>`
	)}
	${["s","m","l","xl"].map((size) => html`
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: {
					s: "Small",
					m: "Medium",
					l: "Large",
					xl: "Extra-large",
				}[size] + " - with icon",
			})}
			${Template({
				...args,
				size,
				isOpen: false,
				fieldLabelId: fieldLabelPrefix + size,
				contentIconName: "Image",
			})}
		</div>`
	)}
`;


const popoverMenuItems = [
	{ label: "United States" },
	{ label: "Japan" },
	{ label: "Brazil" },
];

/* Stories */
export const Default = (args) => window.isChromatic() ? ChromaticPickerGroup(args) : Template(args);
Default.args = {
	content: [
		() => Menu({ items: popoverMenuItems })
	],
};

export const WithForcedColors = (args) => window.isChromatic() ? ChromaticPickerGroup(args) : Template(args);
WithForcedColors.parameters = {
	// Sets the forced-colors media feature for a specific story.
	chromatic: { forcedColors: "active" },
};
WithForcedColors.args = {
	content: [
		() => Menu({ items: popoverMenuItems })
	]
};
