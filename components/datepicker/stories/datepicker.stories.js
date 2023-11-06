import { Template } from "./template";

import { isDisabled, isInvalid, isOpen, isValid } from "@spectrum-css/preview/types/states.js";

import { default as CalendarStories } from "@spectrum-css/calendar/stories/calendar.stories.js";

const ignoreProps = ["rootClass", "isDisabled"];

/** A date picker displays a Text Field input with a button next to it, and can display two Text Fields next to each other for choosing a date range. */
export default {
	title: "Components/Date picker",
	component: "DatePicker",
	argTypes: {
		...Object.entries(CalendarStories.argTypes).reduce((acc, [key]) => {
			if (ignoreProps.includes(key)) return acc;
			return { ...acc, [key]: { table: { disable: true } } };
		}, {}),
		isOpen,
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
			...isValid,
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
			...isInvalid,
			if: { arg: "isValid", truthy: false },
		},
		isDisabled,
		isRequired,
		isReadOnly,
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
		isReadOnly: false,
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

export const Range = Template.bind({});
Range.args = {
	month: "March",
	selectedDay: 1,
	year: 2023,
	lastDay: 3,
	content: [{}],
	isRange: true,
	isOpen: false,
};
