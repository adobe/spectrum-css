import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isEmphasized, isFocused, isReadOnly, size } from "@spectrum-css/preview/types";
import { Sizes } from "@spectrum-css/preview/decorators";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { RatingGroup } from "./rating.test.js";
import { Template } from "./template.js";

/**
 * The rating component is used to display or collect a user's rating of an item as represented by a number of stars.
 *
 * ### Usage notes
 * - All active stars have the class `is-selected` applied.
 * - The current value (the last active star) has the class `is-currentValue` applied.
 * - When the rating receives focus, the class `is-focused` should be added to the component's root element (`.spectrum-Rating`).
 * - A rating may have a partially filled star. The width and fill of this star is controlled by adding `.is-partial` to the parent `span` with classes of `spectrum-Rating-icon` and `is-selected` and then setting `--mod-rating-icon-fill` to the necessary fill percentage (e.g. `50%`).
 */
export default {
	title: "Rating",
	component: "Rating",
	argTypes: {
		isEmphasized,
		isDisabled,
		isReadOnly,
		isFocused,
		size: size(["s", "m"]),
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
		withTooltip: {
			name: "With Tooltip",
			description:
				"A tooltip indicating whether a user is editing or clearing a rating may be displayed.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Rating",
		isDisabled: false,
		isEmphasized: false,
		isReadOnly: false,
		isFocused: false,
		withTooltip: false,
		size: "m",
		max: 5,
		value: 3,
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=59953-195",
		},
		packageJson,
		metadata,
	},
};

/**
 * An initial value of three is used for the following examples, to demonstrate both active and inactive stars.
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

export const Sizing = (args, context) => Sizes({
	Template,
	withBorder: false,
	withHeading: false,
	...args,
}, context);
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

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

export const Focused = Template.bind({});
Focused.tags = ["!dev"];
Focused.args = {
	isFocused: true,
};
Focused.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * When a selected star is hovered, the color of the star is slightly darker.
 */
export const EmphasizedHovered = Template.bind({});
EmphasizedHovered.tags = ["!dev"];
EmphasizedHovered.args = {
	value: 5,
	isHovered: true,
	isEmphasized: true,
};
EmphasizedHovered.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A tooltip may be displayed to a user indicating whether interacting with the component will clear or edit the rating.
 */
export const WithTooltip = Template.bind({});
WithTooltip.tags = ["!dev"];
WithTooltip.args = {
	withTooltip: true,
};
WithTooltip.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * To implement a partially filled rating star, the star must have the `is-selected` class applied to its parent and the `is-partial` and `spectrum-Rating-starActive` classes applied. The fill can then be adjusted by setting `--mod-rating-icon-fill` to a valid percentage (e.g. 50%).
 */
export const WithPartial = Template.bind({});
WithPartial.tags = ["!dev"];
WithPartial.args = {
	isPartial: true,
	value: 5,
	customStyles: {
		"--mod-rating-icon-fill": "50%"
	}
};
WithPartial.parameters = {
	chromatic: { disableSnapshot: true },
};
