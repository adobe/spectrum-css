import { Template } from "./template";

/**
 * A rating element is used to display or collect a user's rating of an item as represented by a number of stars.
 */
export default {
	title: "Components/Rating",
	component: "Rating",
	argTypes: {
		isEmphasized: {
			name: "Emphasized styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
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
			name: "Read only",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		max: {
			name: "Maximum value",
			type: { name: "number" },
			table: {
				type: { summary: "number" },
				category: "Content",
			},
			control: { type: "number" },
		},
		value: {
			name: "Value",
			type: { name: "number" },
			table: {
				type: { summary: "number" },
				category: "Content",
				disable: true,
			},
			control: { type: "number" },
		},
	},
	args: {
		rootClass: "spectrum-Rating",
		isDisabled: false,
		max: 5,
		value: 3,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
	isReadOnly: true,
};

export const Emphasized = Template.bind({});
Emphasized.args = {
	isEmphasized: true,
};

export const ReadOnlyEmphasized = Template.bind({});
ReadOnlyEmphasized.args = {
	isEmphasized: true,
	isReadOnly: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true,
};

export const Express = Template.bind({});
Express.tags = ["vrt-only"];
Express.args = {
	express: true,
};
