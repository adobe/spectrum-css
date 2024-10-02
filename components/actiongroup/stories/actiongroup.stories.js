import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { size } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { ActionGroups } from "./actiongroup.test.js";
import { OverflowOption, TreatmentTemplate } from "./template.js";

/**
 * An action group is a grouping of [action buttons](?path=/docs/components-action-button--docs&globals=testingPreview:!true) that are related to each other.
 */
export default {
	title: "Action group",
	component: "ActionGroup",
	argTypes: {
		areQuiet: ActionButton.argTypes.isQuiet,
		areEmphasized: ActionButton.argTypes.isEmphasized,
		staticColor: ActionButton.argTypes.staticColor,
		content: { table: { disable: true } },
		size: size(["xs", "s", "m", "l", "xl"]),
		vertical: {
			name: "Vertical layout",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		compact: {
			name: "Compact layout",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		justified: {
			name: "Justified",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-ActionGroup",
		size: "m",
		areQuiet: ActionButton.args.isQuiet,
		areEmphasized: ActionButton.args.isEmphasized,
		staticColor: ActionButton.args.staticColor,
		vertical: false,
		compact: false,
		justified: false,
		content: [
			{
				iconName: "Edit",
				iconSet: "workflow",
				label: "Edit",
			},
			{
				iconName: "Copy",
				iconSet: "workflow",
				label: "Copy",
			},
			{
				iconName: "Delete",
				iconSet: "workflow",
				label: "Delete",
				isSelected: true,
			},
		],
	},
	parameters: {
		actions: {
			handles: [
				...(ActionButton?.parameters?.actions?.handles ?? []),
			],
		},
		packageJson: pkgJson,
	},
};

export const Default = ActionGroups.bind({});
Default.tags = ["!autodocs"];
Default.args = {};

// ********* DOCS ONLY ********* //

/**
 * The emphasized action group has a blue background for its selected state in order to provide a visual prominence that meets the accessible color contrast ratio. This is optimal for when the selection should call attention, such as within a tool bar.
*/
export const Emphasized = ActionGroups.bind({});
Emphasized.tags = ["!dev"];
Emphasized.args = {
	areEmphasized: true
};

export const Horizontal = TreatmentTemplate.bind({});
Horizontal.tags = ["!dev"];
Horizontal.args = {};

/**
 * The compact density retains the same font and icon sizes, but has tighter spacing. The action buttons also become connected for non-quiet action groups.
*/
export const HorizontalCompact = TreatmentTemplate.bind({});
HorizontalCompact.tags = ["!dev"];
HorizontalCompact.args = {
	compact: true
};

/**
 * The vertical option should be reserved for when horizontal space is limited.
*/

export const Vertical = TreatmentTemplate.bind({});
Vertical.tags = ["!dev"];
Vertical.args = {
	vertical: true
};

export const VerticalCompact = TreatmentTemplate.bind({});
VerticalCompact.tags = ["!dev"];
VerticalCompact.args = {
	compact: true,
	vertical: true
};

export const HorizontalSizing = (args, context) => Sizes({
	Template: ActionGroups,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
HorizontalSizing.args = {};
HorizontalSizing.tags = ["!dev"];
HorizontalSizing.parameters = {
	chromatic: { disableSnapshot: true },
};

export const VerticalSizing = (args, context) => Sizes({
	Template: ActionGroups,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
VerticalSizing.args = {
	vertical: true
};
VerticalSizing.tags = ["!dev"];
VerticalSizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * When an action group is justified, it takes up the entire available container width, divided equally for each action button that is inside the group.
*/

export const Justified = ActionGroups.bind({});
Justified.tags = ["!dev"];
Justified.args = {
	customStyles: {"width": "300px"},
	justified: true,
	content: [
		{
			iconName: "AlignTop",
			label: "Align Top",
		},
		{
			iconName: "AlignBottom",
			label: "Align Bottom",
		},
	]
};

export const JustifiedIconOnly = ActionGroups.bind({});
JustifiedIconOnly.tags = ["!dev"];
JustifiedIconOnly.args = {
	customStyles: {"width": "300px"},
	justified: true,
	content: [
		{
			iconName: "AlignTop",
			label: "",
		},
		{
			iconName: "AlignBottom",
			label: "",
		},
		{
			iconName: "AlignMiddle",
			label: "",
		},
	]
};

JustifiedIconOnly.storyName = "Justified (icon-only)";

export const JustifiedIconOnlyCompact = ActionGroups.bind({});
JustifiedIconOnlyCompact.tags = ["!dev"];
JustifiedIconOnlyCompact.args = {
	customStyles: {"width": "300px"},
	justified: true,
	compact: true,
	content: [
		{
			iconName: "AlignTop",
			label: "",
		},
		{
			iconName: "AlignBottom",
			label: "",
		},
		{
			iconName: "AlignMiddle",
			label: "",
		},
	]
};

JustifiedIconOnlyCompact.storyName = "Justified (compact, icon-only)";


/**
 * When space is limited in an action group, there are 2 options for the group's overflow behavior: wrap or collapse. By default, an action group is set to wrap, meaning that the action buttons inside the group wrap to form another line. Alternatively, an action group can be set to collapse inside a More (...) action button.
*/
export const Overflow = OverflowOption.bind({});
Overflow.tags = ["!dev"];




// ********* VRT ONLY ********* //
export const WithForcedColors = ActionGroups.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
