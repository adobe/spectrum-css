import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isEmphasized, isFocused, isReadOnly } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { RatingGroup } from "./rating.test.js";
import { Template } from "./template.js";

/**
 * A rating element is used to display or collect a user's rating of an item as represented by a number of stars.
 */
export default {
	title: "Rating",
	component: "Rating",
	argTypes: {
		isEmphasized,
		isFocused,
		isDisabled,
		isReadOnly,
		max: {
			name: "Maximum value",
			type: { name: "number" },
			table: {
				type: { summary: "number" },
				category: "Content",
			},
			control: { type: "number" },
		},
		value: {
			name: "Value",
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
		max: 5,
		value: 3,
	},
	parameters: {
		packageJson: pkgJson,
	},
};

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
export const ReadOnly = Template.bind({});
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
