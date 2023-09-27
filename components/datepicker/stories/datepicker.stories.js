// Import the component markup template
import { Template } from "./template";

import { default as CalendarStories } from "@spectrum-css/calendar/stories/calendar.stories.js";

const ignoreProps = ["rootClass", "isDisabled"];

// @todo add support for date *range*
export default {
	title: "Components/Date picker",
	description:
		"A date picker displays a Text Field input with a button next to it, and can display two Text Fields next to each other for choosing a date range.",
	component: "DatePicker",
	argTypes: {
		...Object.entries(CalendarStories.argTypes).reduce((acc, [key]) => {
			if (ignoreProps.includes(key)) return acc;
			return { ...acc, [key]: { table: { disable: true } } };
		}, {}),
		isOpen: {
			name: "Open",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isQuiet: {
			name: "Quiet styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isValid: {
			name: "Valid",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
			if: { arg: "isInvalid", truthy: false },
		},
		isInvalid: {
			name: "Invalid",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
			if: { arg: "isValid", truthy: false },
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
		isRequired: {
			name: "Required",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		readOnly: {
			name: "Read only",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
		content: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-DatePicker",
		isOpen: true,
		isQuiet: false,
		isInvalid: false,
		isValid: false,
		isDisabled: false,
		isRequired: false,
		readOnly: false,
	},
	parameters: {
		actions: {
			handles: [...(CalendarStories.parameters.actions.handles ?? [])],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("datepicker")
				? "migrated"
				: undefined,
		},
	},
};

export const Default = Template.bind({});
Default.args = {
	month: "March",
	selectedDay: 1,
	year: 2023,
	content: [{}],
};

export const Quiet = Template.bind({});
Quiet.args = {
	month: "March",
	selectedDay: 1,
	year: 2023,
	content: [{}],
	isQuiet: true,
};