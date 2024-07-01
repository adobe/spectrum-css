import { html } from "lit";

import { withSizingWrapper } from "@spectrum-css/preview/decorator";
import { Template } from "./template";

/**
 * A radio selector allow users to select a single option from a list of mutually exclusive options. All possible options are exposed up front for users to compare.
 * 
 * Radio buttons should not be used on their own, they should always be used within a [Field group](?path=/docs/components-field-group--docs). Invalid radio buttons are signified by including
 * [Help text](?path=/docs/components-help-text--docs) in a Field group. Sample usage for an [invalid radio state](?path=/docs/components-field-group--docs#invalid) is included in the Field group documentation.
 */
export default {
	title: "Radio",
	component: "Radio",
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
		name: {
			name: "Name",
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
		isChecked: {
			name: "Selected (checked)",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: { type: "boolean" },
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
		isReadOnly: {
			name: "Read Only",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Radio",
		size: "m",
		label: "Label",
		isEmphasized: false,
		isChecked: false,
		isDisabled: false,
		isReadOnly: false,
	},
	parameters: {
		actions: {
			handles: ["click input[type=\"radio\"]"],

		},
	},
};

// ===== Story specific templates ======

// @todo Radio needs more robust coverage of all states, including hover, focus, etc.
const ChromaticGroupTemplate = (args) => html`
	<div style="display: flex; flex-direction: column; align-items: flex-start;">
		${Template({
			...args,
			label: "Default, not selected",
			name: (typeof args.name != "undefined" ? args.name + "-" : "") + "test-1",
		})}
		${Template({
			...args,
			isChecked: true,
			isEmphasized: false,
			label: "Default, selected",
			customStyles: {
				"max-width": "220px",
			},
			name: (typeof args.name != "undefined" ? args.name + "-" : "") + "test-2",
		})}
		${Template({
			...args,
			isChecked: true,
			isEmphasized: true,
			label: "Emphasized, selected",
			customStyles: {
				"max-width": "220px",
			},
			name: (typeof args.name != "undefined" ? args.name + "-" : "") + "test-3",
		})}
		${Template({
			...args,
			isDisabled: true,
			label: "Disabled",
			name: (typeof args.name != "undefined" ? args.name + "-" : "") + "test-4",
		})}
		${Template({
			...args,
			isDisabled: true,
			isReadOnly: true,
			label: "Read-only",
			name: (typeof args.name != "undefined" ? args.name + "-" : "") + "test-5",
		})}
	</div>
`;

const BasicGroupTemplate = (args) => html`
	<div style="display: flex; flex-direction: column; align-items: flex-start;">
		${Template({
			...args,
			label: "Example label",
			id: "radio-1-" + args?.id ?? "default",
			name: "radio-example-" + args?.name ?? "default",
		})}
		${Template({
			...args,
			isChecked: true,
			label: "Inititally selected radio button that has wrapping label text",
			customStyles: {
				"max-width": "220px",
			},
			id: "radio-2-" + args?.id ?? "default",
			name: "radio-example-" + args?.name ?? "default",
		})}
	</div>
`;

// ===== Stories ======

export const Default = (args) => {
	return window.isChromatic() ? ChromaticGroupTemplate(args) : BasicGroupTemplate(args);
};
Default.tags = ["!autodocs"];

export const Standard = BasicGroupTemplate.bind({});
Standard.args = {
	name: "standard",
};
Standard.tags = ["!dev"];

export const Sizing = BasicGroupTemplate.bind({});
Sizing.args = {
	name: "sizing",
};
Sizing.tags = ["!dev"];
Sizing.decorators = [withSizingWrapper];

/**
 * The emphasized option provides a visual prominence for the selected radio button. 
 * It is best for forms, settings, lists or grids of assets, and other situations where a
 * radio button needs to be noticed.
 */
export const Emphasized = BasicGroupTemplate.bind({});
Emphasized.args = {
	isEmphasized: true,
	name: "emphasized",
};
Emphasized.tags = ["!dev"];
Emphasized.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Disabled = BasicGroupTemplate.bind({});
Disabled.args = {
	isDisabled: true,
	name: "disabled",
};
Disabled.tags = ["!dev"];
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A radio group has a read-only option for when it's in the disabled state but still needs to be shown.
 * This allows for content to be copied, but not interacted with or changed.
 * 
 * - Read-only radio buttons are disabled, but not all disabled radio buttons are read-only.
 * - Read-only radio buttons do not have a focus ring, but the button should be focusable.
 */
export const ReadOnly = BasicGroupTemplate.bind({});
ReadOnly.storyName = "Read-only";
ReadOnly.args = {
	isReadOnly: true,
	name: "read-only",
};
ReadOnly.tags = ["!dev"];
ReadOnly.parameters = {
	chromatic: { disableSnapshot: true },
};
