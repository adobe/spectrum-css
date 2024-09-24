import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { size } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { ActionGroups } from "./actiongroup.test.js";
import { TreatmentTemplate } from "./template.js";

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
				label: "Edit",
				iconName: "Edit"
			},
			{
				label: "Copy",
				iconName: "Copy"
			},
			{
				label: "Delete",
				iconName: "Delete",
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

export const Horizontal = TreatmentTemplate.bind({});
Horizontal.tags = ["!dev"];
Horizontal.args = {};

export const HorizontalCompact = TreatmentTemplate.bind({});
HorizontalCompact.tags = ["!dev"];
HorizontalCompact.args = {
	compact: true
};

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
