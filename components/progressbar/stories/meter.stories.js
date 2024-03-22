// Import the component markup template
import { Template } from "./meter.template.js";

export default {
	title: "Components/Meter",
	description:
		"The meter component is a visual representations of a quantity or an achievement. Their progress is determined by user actions, rather than system actions.",
	component: "ProgressBar",
	argTypes: {
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		value: {
			name: "Percent value for fill",
			type: { name: "number" },
			table: {
				type: { summary: "number" },
				category: "Content",
			},
			control: { type: "range", min: 0, max: 100,},
		},
		meterFill: {
			name: "Meter fill color",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["notice", "positive", "negative", "default"],
			control: "select",
		},
		size: {
			name: "Meter size",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "l"],
			control: "select",
		},
	},
	args: {
		rootClass: "spectrum-ProgressBar",
		label: "Storage Space",
		size: "s",
		value: 50,
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
	items: [
		{
			heading: "Default",
			meterFill: "default",
		},
		{
			heading: "Large",
			meterFill: "default",
			size: "l",
		},
		{
			heading: "Positive",
			meterFill: "positive",
		},
		{
			heading: "Negative",
			meterFill: "negative",
		},
		{
			heading: "Notice",
			meterFill: "notice",
		},
		{
			heading: "Text Overflow",
			meterFill: "notice",
			label: "Storage Space Remaining for XYZ User"
		}
	]
};
