import { Template } from "./template";

/** The accordion element contains a list of items that can be expanded or collapsed to reveal additional content or information associated with each item. There can be zero expanded items, exactly one expanded item, or more than one item expanded at a time, depending on the configuration. This list of items is defined by child accordion item elements. */
export default {
	title: "Components/Accordion",
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
		disableAll: false,
		items: [
			{
				heading: "Recent",
				content: "Item 1",
				isOpen: true,
				isDisabled: false,
			},
			{
				heading: "Architecture",
				content: "Item 2",
				isOpen: false,
				isDisabled: true,
			},
			{
				heading: "Nature",
				content: "Item 3",
				isOpen: false,
				isDisabled: false,
			},
			{
				heading: "Really long accordion heading according to our predictions",
				content: "Item 4",
				isOpen: false,
				isDisabled: false,
			},
		],
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Accordion-item"],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("accordion")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};
