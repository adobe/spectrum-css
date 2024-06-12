import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { version } from "../package.json";
import { Template } from "./template";

/**
 * Comboboxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.
 */
export default {
	title: "Combobox",
	component: "Combobox",
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
		isOpen: {
			name: "Open",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
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
		isInvalid: {
			name: "Invalid",
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
			},
			control: "boolean",
		},
		isKeyboardFocused: {
			name: "Keyboard Focused",
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
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		showFieldLabel: {
			name: "Show field label",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		fieldLabelText: {
			name: "Field label text",
			type: { name: "text" },
			table: {
				type: { summary: "text" },
				category: "Component",
			},
			control: "text",
			if: { arg: "showFieldLabel", truthy: true },
		},
		fieldLabelPosition: {
			name: "Field label position",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["top", "left"],
			control: "select",
			if: { arg: "showFieldLabel", truthy: true },
		},
		content: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Combobox",
		size: "m",
		isOpen: true,
		isQuiet: false,
		isInvalid: false,
		isFocused: false,
		isKeyboardFocused: false,
		isLoading: false,
		isDisabled: false,
		showFieldLabel: false,
		fieldLabelText: "Select location",
		content: [
			Menu({
				role: "listbox",
				subrole: "option",
				isSelectable: true,
				items: [
					{
						label: "Ballard",
						isSelected: true,
						isChecked: true,
					},
					{
						label: "Fremont",
					},
					{
						label: "Greenwood",
					},
					{
						type: "divider",
					},
					{
						label: "United States of America",
						isDisabled: true,
					},
				],
			}),
		],
	},
	parameters: {
		docs: {
			story: {
				height: "220px"
			}
		},
		componentVersion: version,
	},
};

const Variants = (args, context) => html`
	<div style=${args.isOpen && "padding-bottom: 160px;"}>
		${Template(args, context)}
	</div>
	<div style=${args.isOpen && "padding-bottom: 160px;"}>
		${Template({
			...args,
			isFocused: true,
		}, context)}
	</div>
	<div style=${args.isOpen && "padding-bottom: 160px;"}>
		${Template({
			...args,
			isKeyboardFocused: true,
		}, context)}
	</div>
	<div style=${args.isOpen && "padding-bottom: 160px;"}>
		${Template({
			...args,
			isDisabled: true,
		}, context)}
	</div>
	<div style=${args.isOpen && "padding-bottom: 160px;"}>
		${Template({
			...args,
			isLoading: true,
		}, context)}
	</div>
	<div style=${args.isOpen && "padding-bottom: 160px;"}>
		${Template({
			...args,
			isInvalid: true,
		}, context)}
	</div>
	<div style=${args.isOpen && "padding-bottom: 160px;"}>
		${Template({
			...args,
			showFieldLabel: true,
			fieldLabelText: "Select location, this label should wrap",
		}, context)}
	</div>
	<div style=${args.isOpen && "padding-bottom: 160px;"}>
		${Template({
			...args,
			showFieldLabel: true,
			fieldLabelText: "Select location, this label should wrap",
			fieldLabelPosition: "left",
		}, context)}
	</div>
`;

const ComboboxGroup = (args, context) => html`
	<div style=${styleMap({
		"display": window.isChromatic() ? "none" : "contents",
	})}>
		${Template(args, context)}
	</div>
	<div style=${styleMap({
		"display": window.isChromatic() ? "contents" : "none",
	})}>
		<div style="display: flex; gap: 16px; flex-direction: column;">
			${Variants({
				...args,
				isOpen: false,
			}, context)}
		</div>
		<div style="display: flex; gap: 16px; flex-direction: column; margin-top: 32px;">
			${Variants(args, context)}
		</div>
	</div>
`;

export const Default = ComboboxGroup.bind({});
Default.args = {};

export const Quiet = ComboboxGroup.bind({});
Quiet.args = {
	isQuiet: true,
};

// ********* DOCS ONLY ********* //
// Standard
export const WithLabel = Template.bind({});
WithLabel.tags = ["docs-only"];
WithLabel.args = {
	showFieldLabel: true,
	fieldLabelText: "Country",
	isOpen: true,
};
WithLabel.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Closed = Template.bind({});
Closed.tags = ["docs-only"];
Closed.args = {
	isOpen: false,
};
Closed.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Invalid = Template.bind({});
Invalid.tags = ["docs-only"];
Invalid.args = {
	isInvalid: true,
};
Invalid.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Loading = Template.bind({});
Loading.tags = ["docs-only"];
Loading.args = {
	isLoading: true,
};
Loading.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Disabled = Template.bind({});
Disabled.tags = ["docs-only"];
Disabled.args = {
	isDisabled: true,
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

// Quiet
export const QuietWithLabel = Template.bind({});
QuietWithLabel.tags = ["docs-only"];
QuietWithLabel.args = {
	showFieldLabel: true,
	fieldLabelText: "Country",
	isQuiet: true,
};
QuietWithLabel.parameters = {
	chromatic: { disableSnapshot: true },
};

export const QuietClosed = Template.bind({});
QuietClosed.tags = ["docs-only"];
QuietClosed.args = {
	isQuiet: true,
	isOpen: false,
};
QuietClosed.parameters = {
	chromatic: { disableSnapshot: true },
};

export const QuietInvalid = Template.bind({});
QuietInvalid.tags = ["docs-only"];
QuietInvalid.args = {
	isQuiet: true,
	isInvalid: true,
};
QuietInvalid.parameters = {
	chromatic: { disableSnapshot: true },
};

export const QuietLoading = Template.bind({});
QuietLoading.tags = ["docs-only"];
QuietLoading.args = {
	isQuiet: true,
	isLoading: true,
};
QuietLoading.parameters = {
	chromatic: { disableSnapshot: true },
};

export const QuietDisabled = Template.bind({});
QuietDisabled.tags = ["docs-only"];
QuietDisabled.args = {
	isQuiet: true,
	isDisabled: true,
};
QuietDisabled.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = ComboboxGroup.bind({});
WithForcedColors.tags = ["vrt-only"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
