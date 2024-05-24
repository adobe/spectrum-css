import { Template } from "./template";

/**
 * The color wheel component lets users visually change an individual channel of a color on a circular track.
 */
export default {
	title: "Components/Color wheel",
	component: "ColorWheel",
	argTypes: {
		isDisabled: {
			name: "Disabled",
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
			if: { arg: "isDisabled", truthy: false },
		},
		isWithColorArea: {
			name: "With Color Area",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-ColorWheel",
		isDisabled: false,
		isFocused: false,
		isWithColorArea: false,
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

/**
 * Stories for the MDX "Docs" only.
 */
export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true,
};
Disabled.tags = ["docs-only"];
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

export const WithColorArea = Template.bind({});
WithColorArea.args = {
	isWithColorArea: true,
};
WithColorArea.tags = ["docs-only"];
WithColorArea.parameters = {
	chromatic: { disableSnapshot: true },
};
