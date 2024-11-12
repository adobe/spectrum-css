import { Template } from "./infield-progresscirlce.template";
import { default as ProgressCircle } from "./progresscircle.stories";

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
	}
};

export const Default = Template.bind({});
Default.args = {};