import { default as CalendarStories } from "@spectrum-css/calendar/stories/calendar.stories.js";
import { version } from "../package.json";
import { Template } from "./template";

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
				category: "State",
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
				height: "350px"
			}
		},
		componentVersion: version,
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
Range.parameters = {
	docs: {
		story: {
			height: "50px"
		}
	},
};

export const QuietRange = Template.bind({});
QuietRange.args = {
	lastDay: 3,
	isRange: true,
	isQuiet: true,
	isOpen: false,
};
QuietRange.parameters = {
	chromatic: { disableSnapshot: true },
	docs: {
		story: {
			height: "50px"
		}
	},
};
QuietRange.tags = ["autodocs", "!dev"];

export const Invalid = Template.bind({});
Invalid.args = {
	isInvalid: true,
	isOpen: false,
};
Invalid.parameters = {
	chromatic: { disableSnapshot: true },
	docs: {
		story: {
			height: "50px"
		}
	},
};
Invalid.tags = ["autodocs", "!dev"];

export const QuietInvalid = Template.bind({});
QuietInvalid.args = {
	isInvalid: true,
	isQuiet: true,
	isOpen: false,
};
QuietInvalid.parameters = {
	chromatic: { disableSnapshot: true },
	docs: {
		story: {
			height: "50px"
		}
	},
};
QuietInvalid.tags = ["autodocs", "!dev"];

export const ReadOnly = Template.bind({});
ReadOnly.args = {
	readOnly: true,
};
ReadOnly.parameters = {
	chromatic: { disableSnapshot: true },
	docs: {
		story: {
			height: "50px",
		}
	}
};
ReadOnly.tags = ["autodocs", "!dev"];

export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true,
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
	docs: {
		story: {
			height: "50px",
		}
	}
};
Disabled.tags = ["autodocs", "!dev"];

export const QuietDisabled = Template.bind({});
QuietDisabled.args = {
	isDisabled: true,
	isQuiet: true,
};
QuietDisabled.parameters = {
	chromatic: { disableSnapshot: true },
	docs: {
		story: {
			height: "50px",
		}
	}
};
QuietDisabled.tags = ["autodocs", "!dev"];
