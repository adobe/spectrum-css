import ActionButtonStories from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { CalendarGroup } from "./calendar.test.js";
import { Template } from "./template.js";

const months = [...Array(12).keys()].map((key) =>
	new Date(0, key).toLocaleString("en", { month: "long" })
);

/**
 * Calendars display a grid of days in one or more months and allow users to select a single date or a range of dates.
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
		// The date selection controls don't update the story, so they are removed from the table.
		// TODO: We may have to refactor some of the template to create a working controls for the
		// selectable dates.
		selectedDay: {
			name: "Selected date or range start (date)",
			description:
				"Highlight a selected date on the calendar or indicate the start of a date range.",
			type: { name: "number" },
			table: {
				type: { summary: "datetime" },
				category: "Content",
				disable: true,
			},
			control: "date",
			if: { arg: "isDisabled", truthy: false },
		},
		isRangeSelection : {
			name: "Range selection",
			description: "Allow users to select a range of dates.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Content",
				disable: true,
			},
			control: "boolean",
		},
		lastDay: {
			name: "Range end (date)",
			description: "Defines the end of a date range.",
			type: { name: "number" },
			table: {
				type: { summary: "datetime" },
				category: "Content",
				disable: true,
			},
			control: "date",
			if: { arg: "isRangeSelection", truthy: true}
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
			name: "Days of the week",
			description: "Use 3 letter abbreviation for day of week.",
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
		isRangeSelection: false,
	},
	parameters: {
		actions: {
			handles: [
				...(ActionButtonStories.parameters.actions.handles ?? [])
			],
		},
		packageJson,
		metadata,
	},
};

export const Default = CalendarGroup.bind({});
Default.args = {
	month: months[6],
	selectedDay: new Date(2025, 6, 3),
	year: 2025,
};

// ********* DOCS ONLY ********* //
export const AbbreviatedWeekdays = Template.bind({});
AbbreviatedWeekdays.args = {
	...Default.args,
	useDOWAbbrev: true,
};
AbbreviatedWeekdays.tags = ["!dev"];
AbbreviatedWeekdays.parameters = {
	chromatic: { disableSnapshot: true },
};
AbbreviatedWeekdays.storyName = "Abbreviated weekdays";

/**
 * For calendars with a selectable range:

- The `.is-range-start` and `.is-range-selection` classes go on the first day in the selection.
- The `.is-range-end` and `.is-range-selection` classes go on the last day of the selection.
- The `.is-range-selection` class goes on all days in the middle of the selection.
 */
export const RangeSelection = Template.bind({});
RangeSelection.args = {
	isRangeSelection: true,
	month: months[6],
	selectedDay: new Date(2025, 6, 3),
	year: 2025,
	lastDay: new Date(2025, 6, 7),
	isPadded: true,
};
RangeSelection.parameters = {
	chromatic: { disableSnapshot: true },
};
RangeSelection.storyName = "Range selection";

export const Focused = Template.bind({});
Focused.args = {
	...Default.args,
	selectedDay: undefined,
	isFocused: true,
};
Focused.tags = ["!dev"];
Focused.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Disabled = Template.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
	...Default.args,
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
