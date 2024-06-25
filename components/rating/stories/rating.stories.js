import { Template } from "./template";

/**
 * A rating element is used to display or collect a user's rating of an item as represented by a number of stars.
 */
export default {
	title: "Rating",
	component: "Rating",
	argTypes: {
		isEmphasized: {
			name: "Emphasized",
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
			name: "Read-only",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		max: {
			name: "Maximum value",
			description: "The total number of stars. Star ratings should always have 5 available stars. This shouldn't be increased or decreased to fit various containers.",
			type: { name: "number" },
			table: {
				type: { summary: "number" },
				category: "Content",
				disable: true,
			},
			control: { type: "number" },
		},
		value: {
			name: "Value",
			description: "The current rating, represented by the number of selected stars.",
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
		isEmphasized: false,
		isReadOnly: false,
		max: 5,
		value: 3,
	},
};

export const Default = Template.bind({});
Default.args = {};

/**
 * A non-interactive rating.
 */
export const ReadOnly = Template.bind({});
ReadOnly.storyName = "Read-only";
ReadOnly.args = {
	isReadOnly: true,
};

export const Emphasized = Template.bind({});
Emphasized.args = {
	isEmphasized: true,
};

export const ReadOnlyEmphasized = Template.bind({});
ReadOnlyEmphasized.storyName = "Read-only, emphasized";
ReadOnlyEmphasized.args = {
	isEmphasized: true,
	isReadOnly: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true,
};

// @todo This VRT only story can be removed when Express is tested via Chromatic modes.
export const Express = Template.bind({});
Express.args = {
	express: true,
};
Express.tags = ["!dev", "!autodocs"];
