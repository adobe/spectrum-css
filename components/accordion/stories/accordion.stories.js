// Import the component markup template
import { Template } from "./template";

export default {
	title: "Components/Accordion",
	description:
		"The accordion element contains a list of items that can be expanded or collapsed to reveal additional content or information associated with each item. There can be zero expanded items, exactly one expanded item, or more than one item expanded at a time, depending on the configuration. This list of items is defined by child accordion item elements.",
	component: "Accordion",
	argTypes: {
		items: { table: { disable: true } },
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
		disableAll: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		density: {
			name: "Density",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["compact", "regular", "spacious"],
			control: "select",
		},
	},
	args: {
		rootClass: "spectrum-Accordion",
		size: "m",
		density: "regular",
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Accordion-item"],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("accordion")
				? "migrated"
				: undefined,
		},
	},
};

export const Default = Template.bind({});
Default.args = {
	items: new Map([
		[
			"Recent",
			{
				content: "Item 1",
				isOpen: true,
				isDisabled: false,
			},
		],
		[
			"Architecture",
			{
				content: "Item 2",
				isOpen: false,
				isDisabled: true,
			},
		],
		[
			"Nature",
			{
				content: "Item 3",
				isOpen: false,
				isDisabled: false,
			},
		],
		[
			"Really Long Accordion Item According to Our Predictions",
			{
				content: "Item 4",
				isOpen: false,
				isDisabled: false,
			},
		],
	]),
};
