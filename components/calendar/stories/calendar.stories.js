import ActionButtonStories from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { CalendarGroup } from "./calendar.test.js";
import { Template } from "./template.js";

const months = [...Array(12).keys()].map((key) =>
	new Date(0, key).toLocaleString("en", { month: "long" })
);

/**
 * Calendars display a grid of days in one or more months and allow users to select a single date.
 */
export default {
	title: "Calendar",
	component: "Calendar",
	argTypes: {
		month: {
			name: "Month",
			type: { name: "string", required: true },
			table: {
				type: { summary: "number" },
				category: "Content",
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
				category: "Content",
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
				category: "Content",
			},
			control: "date",
		},
		year: {
			name: "Year",
			type: { name: "number", required: true },
			table: {
				type: { summary: "number" },
				category: "Content",
			},
			control: "number",
		},
		isDisabled,
		isPadded: {
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
		isFocused,
	},
	args: {
		rootClass: "spectrum-Calendar",
		isPadded: false,
		isDisabled: false,
		isFocused: false,
		useDOWAbbrev: false,
		buttonSize: ActionButtonStories.args.size,
	},
	parameters: {
		actions: {
			handles: [
				...(ActionButtonStories.parameters.actions.handles ?? [])
			],
		},
		componentVersion: version,
	},
	tags: ["!autodocs"],
};

export const Default = CalendarGroup.bind({});
Default.args = {
	month: months[6],
	selectedDay: new Date(2023, 6, 3),
	year: 2023,
};

// ********* DOCS ONLY ********* //
export const AbbreviatedWeekdays = Template.bind({});
AbbreviatedWeekdays.args = {
	useDOWAbbrev: true,
};
AbbreviatedWeekdays.tags = ["!dev"];
AbbreviatedWeekdays.parameters = {
	chromatic: { disableSnapshot: true },
};

export const RangeSelection = Template.bind({});
RangeSelection.args = {
	month: months[6],
	selectedDay: new Date(2023, 6, 3),
	year: 2023,
	lastDay: new Date(2023, 6, 7),
	useDOWAbbrev: true,
	isPadded: true,
};
RangeSelection.tags = ["!dev"];
RangeSelection.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Focused = Template.bind({});
Focused.args = {
	month: undefined,
	selectedDay: undefined,
	year: undefined,
	isFocused: true,
};
Focused.tags = ["!dev"];
Focused.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Disabled = Template.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
	isDisabled: true
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //

export const WithForcedColors = CalendarGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
