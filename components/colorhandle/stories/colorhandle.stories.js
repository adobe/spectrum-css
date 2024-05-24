import { Template } from "./template";

/**
 * The color handle component is used with color area, color slider and color wheel as the color selector.
 */
export default {
	title: "Components/Color handle",
	component: "ColorHandle",
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
		isWithColorLoupe: {
			name: "With color loupe",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-ColorHandle",
		isDisabled: false,
		isFocused: false,
		isWithColorLoupe: false,
	},
	parameters: {
		actions: {
			handles: [],
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

export const WithColorLoupe = Template.bind({});
WithColorLoupe.args = {
	isWithColorLoupe: true,
};
WithColorLoupe.tags = ["docs-only"];
WithColorLoupe.parameters = {
	chromatic: { disableSnapshot: true },
	docs: {
		story: {
			inline: false,
			iframeHeight: 150,
		},
	},
};
