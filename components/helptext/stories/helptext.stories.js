// Import the component markup template
import { Template } from "./template";

export default {
	title: "Components/Help text",
	description:
		"Help text provides either an informative description or an error message that gives more context about what a user needs to input. It’s commonly used in forms.",
	component: "HelpText",
	argTypes: {
		reducedMotion: { table: { disable: true } },
		text: {
			name: "Text",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				disable: false,
				category: "Component",
			},
			control: { type: "text" },
		},
		variant: {
			name: "Variant",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["neutral", "negative"],
			control: "inline-radio",
		},
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l", "xl"],
			control: "select",
		},
		hideIcon: {
			name: "Hide icon",
			type: { name: "boolean" },
			description: "Help text using the negative variant can have an optional icon.",
			table: {
				type: { summary: "boolean" },
				disable: false,
				category: "Component",
			},
			control: "boolean",
			if: { arg: "variant", eq: "negative" },
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
		customStyles: {
			name: "Custom styles",
			description: "Storybook only styles for testing the story, applied to the parent element.",
			table: {
				type: { summary: "object" },
				category: "Advanced",
			},
			if: { arg: "customStyles" }
		}
	},
	args: {
		rootClass: "spectrum-HelpText",
		text: "Create a password with at least 8 characters.",
		variant: "neutral",
		hideIcon: false,
		isDisabled: false,
		size: "m",
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
Default.storyName = "Neutral";
Default.args = {};

export const Negative = Template.bind({});
Negative.storyName = "Negative";
Negative.args = {
	variant: "negative",
	text: "This is an example with wrapping text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	customStyles: {"max-width": "350px"},
};
