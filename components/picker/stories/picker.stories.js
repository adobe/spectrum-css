import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { version } from "../package.json";

import { WithDividers as MenuStories } from "@spectrum-css/menu/stories/menu.stories.js";
import { Template } from "./template";

/**
 * A picker outlines a set of options for a user.
 */
export default {
	title: "Picker",
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
				category: "Content",
			},
			options: ["top", "left"],
			control: { type: "select" },
		},
		withSwitch: {
			name: "Display with a switch component",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
			if: { arg: "labelPosition", eq: "left" },
		},
		placeholder: {
			name: "Placeholder",
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
		},
		isLoading: {
			name: "Loading",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isInvalid: {
			name: "Invalid input",
			type: { name: "boolean" },
			table: {
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
		placeholder: "Select a country",
		isQuiet: false,
		isKeyboardFocused: false,
		isLoading: false,
		isDisabled: false,
		isInvalid: false,
		isOpen: false,
		withSwitch: false,
		content: [
			() => MenuStories(MenuStories.args)
		],
	},
	parameters: {
		docs: {
			story: {
				height: "300px"
			}
		},
		componentVersion: version,
	},
};


const ChromaticPickerGroup = (args) => html`
	<div style=${styleMap({
		"display": window.isChromatic() ? "grid" : "none",
		"gap": "20px",
	})}>
		<div>
			${Template({
				labelPosition: "top",
				...args,
				isOpen: false,
				placeholder: "Select your country of origin"
			})}
		</div>
		<div>
			${Template({
				labelPosition: "top",
				...args,
				isOpen: false,
				isQuiet: true,
				placeholder: "Select your country of origin"
			})}
		</div>
		<div>
			${Template({
				labelPosition: "top",
				...args,
				isOpen: false,
				isLoading: true,
				placeholder: "Select your country of origin"
			})}
		</div>
		<div>
			${Template({
				labelPosition: "top",
				...args,
				isOpen: false,
				isInvalid: true,
				placeholder: "Select your country of origin"
			})}
		</div>
		<div>
			${Template({
				labelPosition: "top",
				...args,
				isOpen: false,
				isKeyboardFocused: true,
				helpText: "Please select a country",
				placeholder: "Select your country of origin"
			})}
		</div>
		<div>
			${Template({
				labelPosition: "left",
				...args,
				isOpen: false,
				withSwitch: true,
				placeholder: "Select your country of origin"
			})}
		</div>
		<div>
			${Template({
				labelPosition: "left",
				...args,
				isOpen: false,
				withSwitch: true,
				fieldLabelStyle: {"max-width": "90px"},
				label: "Enter country, text should wrap",
				placeholder: "Select your country of origin"
			})}
		</div>
		<div>
			${Template({
					labelPosition: "left",
					...args,
					isOpen: false,
					withSwitch: true,
					placeholder: "Select your contry of origin",
					isQuiet: true,
				})}
		</div>
		<div>
			${Template({
				labelPosition: "left",
				...args,
				isOpen: false,
				withSwitch: true,
				isQuiet: true,
				fieldLabelStyle: {"max-width": "90px"},
				label: "Enter country, text should wrap",
				placeholder: "Select your contry of origin"
			})}
		</div>
	</div>
	<div style=${styleMap({
		"display": window.isChromatic() ? "none" : undefined,
	})}>
		${Template(args)}
	</div>
`;

export const Default = ChromaticPickerGroup.bind({});
Default.args = {};

export const Open = Template.bind({});
Open.args = {
	isOpen: true,
};

export const Express = ChromaticPickerGroup.bind({});
Express.tags = ["vrt-only"];
Express.args = {
	express: true,
};

export const WithForcedColors = ChromaticPickerGroup.bind({});
WithForcedColors.tags = ["vrt-only"];
WithForcedColors.parameters = {
	// Sets the forced-colors media feature for a specific story.
	chromatic: { forcedColors: "active" },
};
WithForcedColors.args = {};
