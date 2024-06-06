import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import { Template as ClearButton } from "@spectrum-css/clearbutton/stories/template.js";
import { Template as Picker } from "@spectrum-css/picker/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Template as Textfield } from "@spectrum-css/textfield/stories/template.js";

import { Template as Menu } from "@spectrum-css/menu/stories/template.js";

import "@spectrum-css/searchwithin/dist/index-vars.css";
import "@spectrum-css/searchwithin/dist/vars.css";

/**
 * **This component is deprecated.** Please use a search field with a separate control to filter the search instead.
 */
export default {
	title: "Search within",
	component: "SearchWithin",
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
		rootClass: "spectrum-SearchWithin",
		isOpen: false,
		isQuiet: false,
		size: "m",
		label: "All",
		placeholder: "Search",
		isKeyboardFocused: false,
		isLoading: false,
		isDisabled: false,
		isInvalid: false,
		withSwitch: false,
	},
	parameters: {
		chromatic: { disableSnapshot: true },
		status: {
			type: "deprecated"
		},
	},
};

const Template = ({
	rootClass = "spectrum-SearchWithin",
	customClasses = [],
	customStyles = {},
	isQuiet = false,
	isOpen = false,
	isInvalid = false,
	isLoading = false,
	isDisabled = false,
	withSwitch = false,
	isKeyboardFocused = false,
	size = "m",
	label,
	placeholder,
	...globals
}) => html`
		<!-- Note: Only values that differ in express theme are included -->
	<style>
		.spectrum-SearchWithin {
			--spectrum-alias-input-border-size: var(--spectrum-global-dimension-static-size-10, 1px);
		}
		.spectrum--express .spectrum-SearchWithin {
			--spectrum-alias-input-border-size: var(--spectrum-global-dimension-static-size-25, 2px);
		}
	</style>
	<form
		class=${classMap({
			[rootClass]: true,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		style=${ifDefined(styleMap(customStyles))}
	>
		${Picker({
			...globals,
			size,
			placeholder: label,
			label: undefined,
			isOpen,
			isQuiet,
			isInvalid,
			isLoading,
			isDisabled,
			withSwitch,
			position: "left",
			customClasses: [`${rootClass}-picker`],
		})}
		${Textfield({
			...globals,
			size,
			autocomplete: false,
			name: "search",
			placeholder,
			type: "search",
			customInputClasses: [`${rootClass}-input`],
			isQuiet,
			isInvalid,
			isLoading,
			isDisabled,
			isKeyboardFocused,
		})}
		${ClearButton({
			...globals,
			size,
			customClasses: [`${rootClass}-clearButton`],
		})}
		${Popover({
			...globals,
			isOpen: isOpen,
			withTip: false,
			position: "bottom",
			customStyles: {
				position: "absolute",
				top: "38px",
				left: "0",
			},
			content: [
				Menu({
					...globals,
					items: [
						{ label: "Deselect" },
						{ label: "Select Inverse" },
						{ label: "Feather..." },
						{ label: "Select and Mask..." },
						{ type: "divider" },
						{ label: "Save Selection" },
						{ label: "Make Work Path", isDisabled: true },
					],
				}),
			],
		})}
	</form>
`;

export const Default = Template.bind({});
Default.args = {};
