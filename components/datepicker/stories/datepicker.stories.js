import { Template } from "./template";

import { default as CalendarStories } from "@spectrum-css/calendar/stories/calendar.stories.js";

const ignoreProps = ["rootClass", "isDisabled"];

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
		isDateTimeRange: {
			name: "Date and Time styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
			if: { arg: "isRange", truthy: true },
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
		isRange: { table: {disable: true} },
	},
	args: {
		rootClass: "spectrum-DatePicker",
		isOpen: true,
		isQuiet: false,
		isRange: false,
		isDateTimeRange: false,
		isInvalid: false,
		isValid: false,
		isDisabled: false,
		isRequired: false,
		readOnly: false,
		month: "March",
		selectedDay: 1,
		year: 2023,
	},
	parameters: {
		actions: {
			handles: [...(CalendarStories.parameters.actions.handles ?? [])],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("datepicker")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};

export const Quiet = Template.bind({});
Quiet.args = {
	isQuiet: true,
};

export const Range = Template.bind({});
Range.args = {
	lastDay: 3,
	isRange: true,
	isOpen: false,
};

export const Express = Template.bind({});
Express.args = { express: true };
