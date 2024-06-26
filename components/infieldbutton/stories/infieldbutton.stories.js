import { Template } from "./template";

import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";

/**
 * The in-field button component is a button used inside a text field.
 */
export default {
	title: "In-field button",
	component: "InFieldButton",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l", "xl"],
			control: "select"
		},
		isQuiet: {
			name: "Quiet",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean"
		},
		position: {
			name: "Position",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["left", "right", "top", "bottom"],
			control: "select"
		},
		iconName: {
			...IconStories?.argTypes?.iconName ?? {},
			if: false,
		},
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean"
		},
		isStacked: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-InfieldButton",
		size: "m",
		position: "left",
		iconName: "Add",
		isQuiet: false,
		isDisabled: false,
		isStacked: false,
	},
};

export const Default = Template.bind({});
Default.args = {};

export const Start = Template.bind({});
Start.tags = ["docs-only"];
Start.args = {
	position: "left"
};
Start.parameters = {
	chromatic: { disableSnapshot: true },
};

export const End = Template.bind({});
End.tags = ["docs-only"];
End.args = {
	position: "right"
};
End.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Quiet = Template.bind({});
Quiet.args = {
	isQuiet: true
};

export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true
};

export const Stacked = Template.bind({});
Stacked.tags = ["docs-only"];
Stacked.args = {
	isStacked: true,
};
Stacked.parameters = {
	chromatic: { disableSnapshot: true },
};
