import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isChecked, isDisabled, isEmphasized, isIndeterminate, isInvalid, isReadOnly, size } from "@spectrum-css/preview/types";
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
		size: size(["s", "m", "l", "xl"]),
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		isEmphasized,
		isInvalid,
		isDisabled,
		isChecked,
		isIndeterminate,
		isReadOnly,
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

const CheckboxGroup = (args) => html`
	<div style="display: flex; flex-direction: column; padding: 16px">
		${Template({
			...args,
			iconName: undefined,
		})}
		${Template({
			...args,
			isChecked: true,
		})}
		${Template({
			...args,
			isIndeterminate: true,
		})}
			${Template({
			...args,
			isDisabled: true,
		})}
		${Template({
			...args,
			label: "Checkbox with wrapping label text",
			customStyles: { "max-inline-size": "100px" },
		})}
	</div>
`;

export const Default = CheckboxGroup.bind({});
Default.args = {
	id: "default-checkbox",
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
