import { default as CalendarStories } from "@spectrum-css/calendar/stories/calendar.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isInvalid, isOpen, isQuiet, isReadOnly, isRequired, isValid } from "@spectrum-css/preview/types";
import { within } from "@storybook/test";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { DatePickerGroup } from "./datepicker.test.js";
import { Template } from "./template.js";

/**
 * A date picker displays a text field input with a button next to it, and can display two text fields next to each other for choosing a date range.
 *
 * ## Usage notes
 * - Date picker uses `.spectrum-PickerButton` instead of a `.spectrum-Picker`.
 * - Workflow icon size is medium. If your markup is still using the small icon, replace `.spectrum-Icon--sizeS` with `.spectrum-Icon--sizeM`.
 */
export default {
	title: "Date picker",
	component: "DatePicker",
	argTypes: {
		...Object.entries(CalendarStories.argTypes).reduce((acc, [key]) => {
			if (["rootClass", "isDisabled"].includes(key)) return acc;
			return { ...acc, [key]: { table: { disable: true } } };
		}, {}),
		isOpen,
		isQuiet,
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
		month: "March",
		selectedDay: 1,
		year: 2023,
		content: [{}],
	},
	parameters: {
		actions: {
			handles: [
				...(CalendarStories.parameters.actions.handles ?? [])
			],
		},
		docs: {
			story: {
				height: "50px"
			}
		},
		packageJson,
		metadata,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Wait for the popover to load
		await canvas.findAllByRole("presentation");
	},
};

export const Default = DatePickerGroup.bind({});
Default.args = {};
Default.parameters = {
	docs: {
		story: {
			height: "300px"
		}
	},
};

// ********* DOCS ONLY ********* //
export const Quiet = Template.bind({});
Quiet.tags = ["!dev"];
Quiet.args = {
	isQuiet: true,
};
Quiet.parameters = {
	chromatic: { disableSnapshot: true },
	docs: {
		story: {
			height: "300px"
		}
	},
};

export const Range = Template.bind({});
Range.tags = ["!dev"];
Range.args = {
	lastDay: 3,
	isRange: true,
	isOpen: false,
};
Range.parameters = {
	chromatic: { disableSnapshot: true },
};

export const QuietRange = Template.bind({});
QuietRange.tags = ["!dev"];
QuietRange.args = {
	lastDay: 3,
	isRange: true,
	isQuiet: true,
	isOpen: false,
};
QuietRange.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Invalid = Template.bind({});
Invalid.tags = ["!dev"];
Invalid.args = {
	isInvalid: true,
	isOpen: false,
};
Invalid.parameters = {
	chromatic: { disableSnapshot: true },
};

export const QuietInvalid = Template.bind({});
QuietInvalid.tags = ["!dev"];
QuietInvalid.args = {
	isInvalid: true,
	isQuiet: true,
	isOpen: false,
};
QuietInvalid.parameters = {
	chromatic: { disableSnapshot: true },
};

export const ReadOnly = Template.bind({});
ReadOnly.tags = ["!dev"];
ReadOnly.args = {
	isReadOnly: true,
};
ReadOnly.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Disabled = Template.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
	isDisabled: true,
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

export const QuietDisabled = Template.bind({});
QuietDisabled.tags = ["!dev"];
QuietDisabled.args = {
	isDisabled: true,
	isQuiet: true,
};
QuietDisabled.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = DatePickerGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
