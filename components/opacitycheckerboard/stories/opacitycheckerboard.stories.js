
import { Template } from "./template";

/**
 * Opacity checkerboard is used with other components to highlight opacity.
 */
export default {
	title: "Components/Opacity checkerboard",
	component: "OpacityCheckerboard",
	argTypes: {
		backgroundPosition: {
			name: "Position",
			type: { name: "string" },
			table: {
				category: "Component",
			},
			control: "text",
			description: "Value for <code>--mod-opacity-checkerboard-position</code>. Accepts any valid CSS background-position property value.",
		},
	},
	args: {
		rootClass: "spectrum-OpacityCheckerboard",
		backgroundPosition: "left top",
		customStorybookStyles: {
			"inline-size": "100px",
			"block-size": "100px",
		}
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
Default.args = {
	customStyles: {
		"inline-size": "100%",
		"block-size": "100%"
	}
};

export const CheckerboardPosition = Template.bind({});
CheckerboardPosition.args = {
	backgroundPosition: "center center",
	customStyles: {
		"inline-size": "100%",
		"block-size": "100%"
	}
};
CheckerboardPosition.parameters = {
	docs: {
		description: {
			story:
				"An example of using the <code>--mod-opacity-checkerboard-position</code> custom property to adjust the position of the checkerboard pattern.",
		},
	},
};
