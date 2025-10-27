import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isIndeterminate, size, staticColor } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { ProgressBarGroup } from "./progressbar.test.js";
import { IndeterminateGroup, Template } from "./template.js";

/**
 * The progress bar component shows the progression of a system operation such as downloading, uploading, processing, etc. in a visual way.
 *
 * ## Values
 * The value is the progress of a system operation (e.g., downloading, uploading, processing) within the progress bar’s range, from the min value to max value. By default, the min value starts at 0 and the max value is set to 100. These values are not applicable when a progress bar is indeterminate.
 *
 * Progress bars can have a value label at the end of the track that gives detailed information about the progress (e.g. "60%" or "2 of 8"). This value label works alongside the label and should not be displayed if the label itself is not displayed. It should also not be displayed if the progress is indeterminate. Similar to the label, the value label is always placed above the track.
 */
export default {
	title: "Progress bar",
	component: "ProgressBar",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		isIndeterminate,
		labelPosition: {
			name: "Label position",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["top", "side"],
			control: "select",
		},
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		value: {
			name: "Percent filled",
			type: { name: "number" },
			table: {
				type: { summary: "number" },
				category: "Content",
			},
			control: { type: "range", min: 0, max: 100,},
			if: { arg: "isIndeterminate", truthy: false },
		},
		showValueLabel: {
			name: "Show value label",
			description: "The value label should not be displayed if the label itself is not displayed.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Content",
			},
			control: { type: "boolean" },
			if: { arg: "isIndeterminate", truthy: false },
		},
		trackFill: { table: { disable: true }},
		progressBarFill: { table: { disable: true }},
		staticColor: {
			...staticColor,
			options: ["white"],
		},
	},
	args: {
		rootClass: "spectrum-ProgressBar",
		size: "m",
		label: "Loading",
		labelPosition: "top",
		value: 0,
		isIndeterminate: false,
		showValueLabel: true,
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=13059-181",
		},
		packageJson,
		metadata,
		status: {
			type: "migrated",
		},
	},
	tags: ["migrated"],
};

/**
 * By default, progress bars are determinate and have a blue fill that shows the progress. This component should have a label at the start of the track that gives context about the operation being performed. In rare cases where context is sufficient and an accessibility expert has reviewed the design, the label could be undefined. These progress bars should still include an “aria-label” or “aria-labelledby” in HTML, depending on the context. The label is always placed above the track.
 *
 * When the label is too long for the available horizontal space, it wraps to form another line. The value is always shown in full and never wraps or truncates.
 */
export const Default = ProgressBarGroup.bind({});
Default.args = {
	value: 50,
};

/**
 * Progress bars come in four different sizes: small, medium, large, and extra-large. The medium size is the default and most frequently used option.
 */
export const Sizing = (args, context) => Sizes({
	Template,
	withBorder: false,
	withHeading: false,
	...args,
}, context);
Sizing.args = Default.args;
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Progress bars can represent either determinate or indeterminate progress. Use a determinate progress bar when progress can be calculated against a specific goal (e.g., downloading a file of a known size). Use an indeterminate progress bar when progress is happening, but the time or effort to completion can’t be determined (e.g., attempting to reconnect to a server).
 */
export const Indeterminate = IndeterminateGroup.bind({});
Indeterminate.args = {
	value: 50,
};
Indeterminate.tags = ["!dev"];
Indeterminate.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * By default, the progress bar has a minimum, maximum, and fixed size. The progress bar may be displayed at a custom width by setting `--mod-progressbar-inline-size` to the desired width. The progress bar below is displayed at `400px` using that modifiable custom property.
 */
export const CustomWidth = Template.bind({});
CustomWidth.storyName = "Custom width";
CustomWidth.args = {
	value: 83,
	customStyles: {
		"--mod-progressbar-inline-size": "400px",
	},
};
CustomWidth.tags = ["!dev"];
CustomWidth.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The example below shows a progress bar without its label.
 */
export const WithoutLabel = Template.bind({});
WithoutLabel.storyName = "Without label";
WithoutLabel.args = {
	label: "",
	value: 50,
	showValueLabel: false,
};
WithoutLabel.tags = ["!dev"];
WithoutLabel.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The example below shows a progress bar without its value label.
 */
export const WithoutValue = Template.bind({});
WithoutValue.storyName = "Without value";
WithoutValue.args = {
	value: 83,
	showValueLabel: false,
};
WithoutValue.tags = ["!dev"];
WithoutValue.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Labels are placed by default on top of the progress bar, but can also be positioned on the side. Side labels are most useful when vertical space is limited.
 */
export const SideLabel = Template.bind({});
SideLabel.storyName = "Side label";
SideLabel.args = {
	labelPosition: "side",
	value: 50,
};
SideLabel.tags = ["!dev"];
SideLabel.parameters = {
	chromatic: { disableSnapshot: true },
};

export const StaticWhite = ProgressBarGroup.bind({});
StaticWhite.storyName = "Static white";
StaticWhite.tags = ["!dev"];
StaticWhite.args = {
	staticColor: "white",
	label: "Loading your fonts, images, and icons",
	value: 50,
};
StaticWhite.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = ProgressBarGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
