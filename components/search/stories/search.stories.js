import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused, isHovered, isKeyboardFocused, size } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { SearchGroup } from "./search.test.js";
import { SearchOptions, Template } from "./template.js";

/**
 * A search field is used for searching and filtering items.
 *
 * ## Usage Notes
 * This component contains a single input field with both a magnifying glass icon and a clear (“reset”) button displayed within it. When making use of this component, the clear button should only be displayed when the input has a value.
 */
export default {
	title: "Search field",
	component: "SearchField",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		isDisabled,
		isHovered,
		showHelpText: {
			name: "Show help text",
			description: "A search field can have help text below the field to give extra context or instruction about what a user should input. The description communicates a hint or helpful information, such as a search’s scope.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Content",
			},
			control: "boolean",
			if: { arg: "isCollapsed", eq: false },
		},
		helpTextLabel: {
			name: "Help text (description)",
			type: { name: "string" },
			table: {
				type: { summary: "boolean" },
				category: "Content",
			},
			control: { type: "text" },
			if: { arg: "showHelpText", eq: true },
		},
		isFocused,
		isKeyboardFocused,
		inputValue: {
			name: "Value",
			description: "When defined, this will set the value of the input, and the clear button will appear within the search field.",
			type: { name: "string" },
			control: { type: "text" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			if: { arg: "isCollapsed", eq: false },
		},
		isCollapsed: {
			name: "Collapsed",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Search",
		size: "m",
		isDisabled: false,
		isFocused: false,
		isHovered: false,
		isKeyboardFocused: false,
		showHelpText: false,
		helpTextLabel: "Help text with a suggestion of what to search for",
		inputValue: "",
		isCollapsed: false,
	},
	parameters: {
		actions: {
			handles: [
				"change .spectrum-Search-input",
				"click .spectrum-Search-clearButton",
				"click .spectrum-Search-icon",
				"click .spectrum-Search-actionButton",
			],
		},
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=13670-229",
		},
		packageJson,
		metadata,
		status: {
			type: "migrated",
		},
	},
	tags: ["migrated"],
};

export const Default = SearchGroup.bind({});
Default.args = {};
Default.tags = ["!autodocs"];

// ********* DOCS ONLY ********* //
/**
 * A search field should include a label and a search icon. In the default state before a search term is input,
 * the label is in regular body text style to meet contrast ratios and to show that this is a field label, not placeholder text.
 * Search fields should also include an aria-label in HTML (depending on the context, “aria-label” or “aria-labelledby”).
 * The width of a search field can be customized appropriately for its context.
 */
export const Standard = SearchOptions.bind({});
Standard.args = {};
Standard.storyName = "Default";
Standard.tags = ["!dev"];

/**
 * A search field in a disabled state shows that a search option exists, but is not available in that circumstance.
 * This can be used to maintain layout continuity and communicate that it may become available later.
 */
export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true,
};
Disabled.tags = ["!dev"];
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A search field can have [help text](/docs/components-help-text--docs) below the field to give extra context or instruction about what a user should input. The description communicates a hint or helpful information, such as a search’s scope.
 *
 * When the help text is too long for the available horizontal space, it wraps to form another line.
*/
export const WithHelpText = SearchGroup.bind({});
WithHelpText.args = {
	showHelpText: true,
};
WithHelpText.tags = ["!dev"];
WithHelpText.parameters = {
	chromatic: { disableSnapshot: true },
};
WithHelpText.storyName = "With help text";

/**
 * The value shows a user’s entered text. When the search field has an input value, [the clear button](/docs/components-clear-button--docs) appears with it. When the entered text is too long for the available horizontal space in the field, the text truncates.
 */
export const WithValue = SearchGroup.bind({});
WithValue.args = {
	inputValue: "What should I search for?",
};
WithValue.tags = ["!dev"];
WithValue.parameters = {
	chromatic: { disableSnapshot: true },
};
WithValue.storyName = "With value and clear button";

/**
 * A search field can be collapsed to show only the search button. This is useful when there is limited space available. It is most commonly used next a filter button to allow users to quickly search and filter content.
 */
export const Collapsed = Template.bind({});
Collapsed.args = {
	isCollapsed: true,
};
Collapsed.tags = ["!dev"];
Collapsed.parameters = {
	chromatic: { disableSnapshot: true },
};

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
	showHelpText: true
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
