import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isEmphasized, isKeyboardFocused, isReadOnly } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { RatingGroup } from "./rating.test.js";
import { Template } from "./template.js";

/**
 * The rating component is used to display or collect a user's rating of an item as represented by a number of stars.
 *
 * ### Usage notes
 * - All active stars have the class `is-selected` applied.
 * - The current value (the last active star) has the class `is-currentValue` applied.
* - When the rating receives keyboard focus, the class `.is-keyboardFocused` should be added to the component's root element (`.spectrum-Rating`).
 * - When the rating is hovered, the class `is-hoverSelection` should be added to the `spectrum-Rating-icon` being hovered over.
 */
export default {
	title: "Rating",
	component: "Rating",
	argTypes: {
		isEmphasized,
		isKeyboardFocused,
		isDisabled,
		isReadOnly,
		max: {
			name: "Maximum value",
			description: "The total number of stars. Star ratings should always have 5 available stars. This shouldn't be increased or decreased to fit various containers.",
			type: { name: "number" },
			table: {
				type: { summary: "number" },
				category: "Content",
				disable: true,
			},
			control: { type: "number" },
		},
		value: {
			name: "Value",
			description: "The current rating, represented by the number of selected stars.",
			type: { name: "number" },
			table: {
				type: { summary: "number" },
				category: "Content",
				disable: true,
			},
			control: { type: "number" },
		},
	},
	args: {
		rootClass: "spectrum-Rating",
		isDisabled: false,
		isEmphasized: false,
		isReadOnly: false,
		isKeyboardFocused: false,
		max: 5,
		value: 3,
	},
	parameters: {
		packageJson,
		metadata,
	},
};

/**
 * An initial value of three is used for the following examples, to demonstrate both active and inactive stars.
 * When hovering over a rating component that has a previously entered value, an underline appears under the
 * current selection to provide context.
 */
export const Default = RatingGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = RatingGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //

/**
 * A non-interactive rating.
 */
export const ReadOnly = Template.bind({});
ReadOnly.storyName = "Read-only";
ReadOnly.tags = ["!dev"];
ReadOnly.args = {
	isReadOnly: true,
};
ReadOnly.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Emphasized = Template.bind({});
Emphasized.tags = ["!dev"];
Emphasized.args = {
	isEmphasized: true,
};
Emphasized.parameters = {
	chromatic: { disableSnapshot: true },
};

export const ReadOnlyEmphasized = Template.bind({});
ReadOnlyEmphasized.storyName = "Read-only, emphasized";
ReadOnlyEmphasized.tags = ["!dev"];
ReadOnlyEmphasized.args = {
	isEmphasized: true,
	isReadOnly: true,
};
ReadOnlyEmphasized.parameters = {
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
