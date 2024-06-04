import { Template } from "./meter.template";

/**
 * The meter component is a visual representations of a quantity or an achievement. Their progress is determined by user actions, rather than system actions.
 */
export default {
	title: "Meter",
	component: "ProgressBar",
	argTypes: {
		items: { table: { disable: true } },
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
		meterFill: "default",
		size: "s",
		value: 50,
	},
	parameters: {
		actions: {
			handles: [],
		},
	},
};

export const Default = Template.bind({});
Default.args = {
	items: [
		{
			heading: "Default",
		},
		{
			heading: "Large",
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
