// Import the component markup template
import { Template } from "./template";

export default {
	title: "Components/Color slider",
	description:
		"The Color slider component lets users visually change an individual channel of a color.",
	component: "ColorSlider",
	argTypes: {
		colorHandleStyle: { table: { disable: true } },
		vertical: { table: { disable: true } },
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
		gradientStops: {
			name: "Gradient stops",
			description:
				"The <linear-color-stop> value of the CSS linear-gradient. Can be multiple stops separated by commas.",
			type: { name: "array" },
			table: { disable: true },
		},
		gradientType: {
			name: "Gradient type",
			description: "The gradient can be defined in the markup using CSS or with an image.",
			options: ["gradient", "image"],
			control: { type: "select" },
			table: { disable: true },
		},
	},
	args: {
		rootClass: "spectrum-ColorSlider",
		isDisabled: false,
		isFocused: false,
		gradientType: "gradient",
		vertical: false,
		gradientStops:
			["rgb(255, 0, 0) 0%", "rgb(255, 255, 0) 17%", "rgb(0, 255, 0) 33%", "rgb(0, 255, 255) 50%", "rgb(0, 0, 255) 67%", "rgb(255, 0, 255) 83%", "rgb(255, 0, 0) 100%"],
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

export const Vertical = Template.bind({});
Vertical.args = {
	vertical: true,
};

export const Alpha = Template.bind({});
Alpha.args = {
	gradientStops: ["rgba(0, 0, 0, 1) 0%", "rgba(0, 0, 0, 0) 100%"],
	colorHandleStyle: {
		"--spectrum-picked-color": "rgba(0, 0, 0, 1)",
	},
};

export const WithImage = Template.bind({});
WithImage.args = {
	gradientType: "image",
	colorHandleStyle: {
		"--spectrum-picked-color": "#df6a7d",
		"inset-inline-start": "50%",
	},
};
WithImage.storyName = "Image";

export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true,
};
