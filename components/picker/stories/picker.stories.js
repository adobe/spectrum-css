import { html } from "lit";

import { Default as MenuStories } from "@spectrum-css/menu/stories/menu.stories.js";

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
};


const ChromaticPickerGroup = (args) => html`
	<div style="display: grid; gap: 20px;">
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
`;

export const Default = ChromaticPickerGroup.bind({});
Default.args = {
	content: [
		() => MenuStories(MenuStories.args)
	],
};

export const Open = Template.bind({});
Open.args = {
	isOpen: true,
	content: [
		() => MenuStories(MenuStories.args)
	],
};

export const WithForcedColors = ChromaticPickerGroup.bind({});
WithForcedColors.tags = ["vrt-only"];
WithForcedColors.parameters = {
	chromatic: { forcedColors: "active" },
};
WithForcedColors.args = {
	content: [
		() => MenuStories(MenuStories.args)
	]
};
