import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isInvalid } from "@spectrum-css/preview/types";
import { html } from "lit";
import { version } from "../package.json";
import { Template } from "./template";


/**
 * Checkboxes allow users to select multiple items from a list of individual items, or mark one individual item as selected.
 */
export default {
	title: "Checkbox",
	component: "Checkbox",
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
		isEmphasized: {
			name: "Emphasized styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: { type: "boolean" },
		},
		isInvalid,
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
			control: { type: "boolean" },
		},
		isIndeterminate: {
			name: "Checkbox indeterminate",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isReadOnly: {
			name: "Read only",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Checkbox",
		size: "m",
		label: "Checkbox",
		isChecked: false,
		isDisabled: false,
		isEmphasized: false,
		isIndeterminate: false,
		isInvalid: false,
		isReadOnly: false,
	},
	parameters: {
		actions: {
			handles: ["click input[type=\"checkbox\"]"],
		},
		componentVersion: version,
	},
};

const CheckboxGroup = (args, context) => html`
	<div style="display: flex; flex-direction: column; padding: 16px">
		${Template({
			...args,
			iconName: undefined,
		}, context)}
		${Template({
			...args,
			isChecked: true,
		}, context)}
		${Template({
			...args,
			isIndeterminate: true,
		}, context)}
			${Template({
			...args,
			isDisabled: true,
		}, context)}
		${Template({
			...args,
			label: "Checkbox with wrapping label text",
			customStyles: { "max-inline-size": "100px" },
		}, context)}
	</div>
`;

export const Default = CheckboxGroup.bind({});
Default.args = {
	id: "default-checkbox",
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
