import { Template } from "./template";

import ActionButtonStories from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";

const months = [...Array(12).keys()].map((key) =>
	new Date(0, key).toLocaleString("en", { month: "long" })
);

/**
 * Calendars display a grid of days in one or more months and allow users to select a single date.
 */
export default {
	title: "Components/Calendar",
	component: "Calendar",
	argTypes: {
		reducedMotion: { table: { disable: true } },
		month: {
			name: "Month",
			type: { name: "string", required: true },
			table: {
				type: { summary: "number" },
				category: "Component",
			},
			options: months,
			control: "select",
		},
		selectedDay: {
			name: "Selected date or range start (date)",
			description:
				"Highlight a selected date on the calendar or indicate the start of a date range.",
			type: { name: "number" },
			table: {
				type: { summary: "datetime" },
				category: "Component",
			},
			control: "date",
			if: { arg: "isDisabled", truthy: false },
		},
		lastDay: {
			name: "Range end (date)",
			description: "Defines the end of a date range.",
			type: { name: "number" },
			table: {
				type: { summary: "datetime" },
				category: "Component",
			},
			control: "date",
		},
		year: {
			name: "Year",
			type: { name: "number", required: true },
			table: {
				type: { summary: "number" },
				category: "Component",
			},
			control: "number",
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
		padded: {
			name: "Padded",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
		useDOWAbbrev: {
			name: "Use 3 letter abbreviation for day of week",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
		buttonSize: {
			table: { disable: true },
		},
	},
	args: {
		rootClass: "spectrum-Calendar",
		padded: false,
		isDisabled: false,
		useDOWAbbrev: false,
		buttonSize: ActionButtonStories.args.size,
	},
	parameters: {
		actions: {
			handles: [
				...(ActionButtonStories.parameters.actions.handles ?? [])
			],
		},
		status: {
			type: "migrated",
		},
	},
};

export const Default = Template.bind({});
Default.args = {
	month: months[6],
	selectedDay: new Date(2023, 6, 3),
	year: 2023,
};

export const RangeSelection = Template.bind({});
RangeSelection.args = {
	month: months[6],
	selectedDay: new Date(2023, 6, 3),
	lastDay: new Date(2023, 6, 7),
	year: 2023,
	useDOWAbbrev: true,
	padded: true,
};

export const TodayHighlighted = Template.bind({});
TodayHighlighted.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
	month: months[6],
	selectedDay: new Date(2023, 6, 3),
	year: 2023,
	isDisabled: true
};
