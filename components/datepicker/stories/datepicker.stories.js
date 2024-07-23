import { default as CalendarStories } from "@spectrum-css/calendar/stories/calendar.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isInvalid, isOpen, isValid } from "@spectrum-css/preview/types";
import { html } from "lit";
import { version } from "../package.json";
import { DatePickerGroup, Template } from "./template";

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
	decorators: [
		// Add padding for VRT so drop shadows are not cut off.
		(story) => window.isChromatic() ? html`<div style="padding: 32px; min-height: 450px;">${story()}</div>` : story(),
	],
};

export const Default = DatePickerGroup.bind({});
Default.args = {};

export const Quiet = Template.bind({});
Quiet.tags = ["autodocs", "!dev"];
Quiet.args = {
	isQuiet: true,
};
Quiet.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Range = Template.bind({});
Range.tags = ["autodocs", "!dev"];
Range.args = {
	lastDay: 3,
	isRange: true,
	isOpen: false,
};
Range.parameters = {
	chromatic: { disableSnapshot: true },
	docs: {
		story: {
			height: "50px"
		}
	},
};

// ********* DOCS ONLY ********* //
export const QuietRange = Template.bind({});
QuietRange.tags = ["autodocs", "!dev"];
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

export const Invalid = Template.bind({});
Invalid.tags = ["autodocs", "!dev"];
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

export const QuietInvalid = Template.bind({});
QuietInvalid.tags = ["autodocs", "!dev"];
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


export const ReadOnly = Template.bind({});
ReadOnly.tags = ["autodocs", "!dev"];
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

export const Disabled = Template.bind({});
Disabled.tags = ["autodocs", "!dev"];
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
export const QuietDisabled = Template.bind({});
QuietDisabled.tags = ["autodocs", "!dev"];
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

// ********* VRT ONLY ********* //
export const WithForcedColors = DatePickerGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
