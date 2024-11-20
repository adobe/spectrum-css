import { default as ProgressCircle } from "@spectrum-css/progresscircle/stories/progresscircle.stories.js";
import { Template } from "./template.js";

/**
 * In-field progress circles are used in t-shirt size components such as [buttons](/docs/components-button--docs), [combo boxes](/docs/components-combobox--docs), and [pickers](/docs/components-picker--docs). The in-field progress circle can be used in place of an icon or in tight spaces when space is limited both vertically and horizontally.
*/

export default {
	title: "Components/In-field progress circle",
	component: "InfieldProgressCircle",
	argTypes: {
		...ProgressCircle.argTypes,
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l", "xl" ],
			control: "select",
		},
	},
	args: {
		...ProgressCircle.args,
	},
	parameters: {
		...ProgressCircle.parameters
	}
};

export const Default = Template.bind({});
Default.args = {};