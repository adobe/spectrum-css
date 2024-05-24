import { Template } from "./template";

import { default as CalendarStories } from "@spectrum-css/calendar/stories/calendar.stories.js";

const ignoreProps = ["rootClass", "isDisabled"];

/**
 * A date picker displays a text field input with a button next to it, and can display two text fields next to each other for choosing a date range.
 */
export default {
	title: "Components/Date picker",
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
	},
	parameters: {
		actions: {
			handles: [
				...(CalendarStories.parameters.actions.handles ?? [])
			],
		},
		docs: {
			story: {
				height: "350px"
			}
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

/**
 * Stories for the MDX "Docs" only.
 */
export const QuietRange = Template.bind({});
QuietRange.args = {
	month: "March",
	selectedDay: 1,
	year: 2023,
	lastDay: 3,
	content: [{}],
	isRange: true,
	isQuiet: true,
	isOpen: false,
};
QuietRange.parameters = {
	chromatic: { disableSnapshot: true },
};
QuietRange.tags = ["docs-only"];

export const ReadOnly = Template.bind({});
ReadOnly.args = {
	readOnly: true,
	month: "March",
	selectedDay: 1,
	year: 2023,
	content: [{}],
};
ReadOnly.parameters = {
	chromatic: { disableSnapshot: true },
	docs: {
		story: {
			height: "60px",
		}
	}
};
ReadOnly.tags = ["docs-only"];

export const Invalid = Template.bind({});
Invalid.args = {
	isInvalid: true,
	month: "March",
	selectedDay: 1,
	year: 2023,
	content: [{}],
	isOpen: false,
};
Invalid.parameters = {
	chromatic: { disableSnapshot: true },
};
Invalid.tags = ["docs-only"];

export const QuietInvalid = Template.bind({});
QuietInvalid.args = {
	isInvalid: true,
	month: "March",
	selectedDay: 1,
	year: 2023,
	content: [{}],
	isQuiet: true,
	isOpen: false,
};
QuietInvalid.parameters = {
	chromatic: { disableSnapshot: true },
};
QuietInvalid.tags = ["docs-only"];


export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true,
	month: "March",
	selectedDay: 1,
	year: 2023,
	content: [{}],
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
	docs: {
		story: {
			height: "60px",
		}
	}
};
Disabled.tags = ["docs-only"];

export const QuietDisabled = Template.bind({});
QuietDisabled.args = {
	isDisabled: true,
	month: "March",
	selectedDay: 1,
	year: 2023,
	content: [{}],
	isQuiet: true,
};
QuietDisabled.parameters = {
	chromatic: { disableSnapshot: true },
	docs: {
		story: {
			height: "60px",
		}
	}
};
QuietDisabled.tags = ["docs-only"];

