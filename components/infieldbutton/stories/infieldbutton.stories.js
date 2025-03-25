import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { uniqueUiIconBaseNames } from "@spectrum-css/icon/stories/utilities.js";
import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isActive, isDisabled, isHovered, isQuiet, size } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { InfieldButtonGroup } from "./infieldbutton.test.js";
import { InfieldButtonGroupVariant, Template } from "./template.js";

/**
 * In-field buttons are used to represent actions within input fields. They’re currently used inside the [combo box,](/docs/components-combobox--docs) number field, and [search field.](/docs/components-search--docs)
 */
export default {
	title: "In-field button",
	component: "InFieldButton",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		isQuiet,
		iconName: {
			...IconStories?.argTypes?.uiIconName ?? {},
			options: uniqueUiIconBaseNames,
			if: false,
			description: "All UI icons have sizes of `s`, `m`, `l`, and `xl` except for `ArrowDown`, `ArrowLeft`, `ArrowRight`, and `ArrowUp` which only have sizes of `m`. `Asterisk` has all sizes except for `s`.",
		},
		isDisabled,
		isActive,
		isHovered,
		isStacked: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-InfieldButton",
		size: "m",
		iconName: "ChevronDown",
		isQuiet: false,
		isDisabled: false,
		isHovered: false,
		isActive: false,
		isStacked: false,
	},
	parameters: {
		packageJson,
		metadata,
	},
};

export const Default = InfieldButtonGroup.bind({});
Default.args = {};
Default.tags = ["!autodocs"];

export const Primary = InfieldButtonGroupVariant.bind({});
Primary.args = {};
Primary.storyName = "Default";
Primary.tags = ["!dev"];
Primary.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The quiet variant is used when the in-field button needs to be less visually prominent since it is used in input fields. This is typically used for search fields to clear the entered value.
*/
export const Quiet = InfieldButtonGroupVariant.bind({});
Quiet.tags = ["!dev"];
Quiet.args = {
	isQuiet: true
};
Quiet.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The stacked variant is used when there are multiple in-field buttons that need to be displayed side by side. This is typically used for number fields to add or subtract a number.
*/

export const Stacked = Template.bind({});
Stacked.tags = ["!dev"];
Stacked.args = {
	isStacked: true,
};
Stacked.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Sizing = (args, context) => Sizes({
	Template,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = InfieldButtonGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
