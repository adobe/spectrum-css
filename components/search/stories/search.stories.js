import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isQuiet, size } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { SearchGroup } from "./search.test.js";
import { SearchOptions, Template } from "./template.js";

/**
 * A search field is used for searching and filtering items.
 * 
 * ## Usage Notes
 * This component contains a single input field with both a magnifying glass icon and a clear (“reset”) button displayed within it. When making use of this component, the clear button should only be displayed when the input has a value.
 */
export default {
	title: "Search",
	component: "Search",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		isQuiet,
		isDisabled,
		hasDescription: {
			name: "Help Text",
			description: "A search field can have help text below the field to give extra context or instruction about what a user should input. The description communicates a hint or helpful information, such as a search’s scope.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
		description: {
			name: "Help text (description)",
			type: { name: "string" },
			control: { type: "text" },
			table: {
				type: { summary: "string" },
				category: "Advanced",
			},
			if: { arg: "hasDescription", eq: true },
		},
	},
	args: {
		rootClass: "spectrum-Search",
		size: "m",
		isQuiet: false,
		isDisabled: false,
		hasDescription: false,
		description: "Example help text. Lorem ipsum dolor sit amet.",
	},
	parameters: {
		actions: {
			handles: [
				"change .spectrum-Search-input",
				"click .spectrum-Search-clearButton",
				"click .spectrum-Search-icon",
			],
		},
		packageJson: pkgJson,
	},
};

export const Default = SearchGroup.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //

export const Disabled = SearchOptions.bind({});
Disabled.args = {
	isDisabled: true,
};

Disabled.tags = ["!dev"];

/**
 * A search field can have [help text](?path=/docs/components-help-text--docs) below the field to give extra context or instruction about what a user should input. The description communicates a hint or helpful information, such as a search’s scope.
 * 
 * When the help text is too long for the available horizontal space, it wraps to form another line.
*/
export const HelpText = SearchGroup.bind({});
HelpText.args = {
	hasDescription: true,
};
HelpText.tags = ["!dev"];

/**
 * A quiet search field can be used when searching isn’t a high priority action on the page. These search fields have no visible background, and this style works best when a clear layout makes the field easy to recognize. Too many quiet components in a small space can be hard to read.
*/
export const Quiet = SearchGroup.bind({});
Quiet.args = {
	isQuiet: true,
};
Quiet.tags = ["!dev"];


/**
 * The medium size is the default and most frequently used option. Use the other sizes sparingly; they should be used to create a hierarchy of importance within the page.
*/
export const Sizing = (args, context) => Sizes({
	Template: Template,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
Sizing.args = {
	hasDescription: true
};
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = SearchGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
