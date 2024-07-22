import ActionButtonStories from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { CalendarGroup, Template } from "./template";

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
		isFocused,
	},
	args: {
		rootClass: "spectrum-Calendar",
		padded: false,
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
AbbreviatedWeekdays.tags = ["autodocs", "!dev"];
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
	padded: true,
};
RangeSelection.tags = ["autodocs", "!dev"];
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
Focused.tags = ["autodocs", "!dev"];
Focused.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Disabled = Template.bind({});
Disabled.tags = ["autodocs", "!dev"];
Disabled.args = {
	isDisabled: true
};
Focused.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //

export const WithForcedColors = Default.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
