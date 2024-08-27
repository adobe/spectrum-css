import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isEmphasized, isQuiet, size } from "@spectrum-css/preview/types";
import { Sizes } from "@spectrum-css/preview/decorators";
import pkgJson from "../package.json";
import { TabsGroups } from "./tabs.test.js";
import { Template, QuietGroup, OverflowGroup, VerticalGroup, CompactGroup } from "./template.js";

/**
 * Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.
 * 
 * ## Use icons consistently
 * 
 * Icons are optional, but don’t mix the use of icons in tabs if they are utilized. Navigation controls require a clear spacial relationship to one another, and mixing the use of icons can dramatically impact the visual balance and presence for each tab item.
 * 
 * ## Selected item
 * Only one tab item can be selected at any given time. This property changes an individual tab item’s selected state. This is shown with a selection indicator (a gray-900 line) under or next to the selected tab item.
 * 
 * ## Orientation
 * Tabs can be either horizontal or vertical. By default, tabs are horizontal and should be used when horizontal space is limited.
 * 
 * ## Density
 * Tabs come in 2 densities: regular and compact. 
 */
export default {
	title: "Tabs",
	component: "Tabs",
	argTypes: {
		content: { table: { disable: true } },
		size: size(["s", "m", "l", "xl"]),
		orientation: {
			name: "Orientation",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
				default: "horizontal",
			},
			options: ["horizontal", "vertical", "overflow"],
			control: "select",
			default: "horizontal",
		},
		isQuiet,
		isEmphasized,
		hasRightAlignedTabs: {
			name: "Right-aligned tabs",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
				default: false,
			},
			control: "boolean",
			if: { arg: "orientation", eq: "vertical"},
		},
		useAnchors: {
			name: "Use anchor tags for markup",
			description:
				"Use 'a' elements for all of the tab markup instead of 'div' elements.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isCompact: {
			name: "Compact",
			description: "Compact tabs should never be used without the quiet styles.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
			if: { arg: "isQuiet", truthy: true },
		},
		iconOnly: {
			name: "Icon only",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Tabs",
		isQuiet: false,
		isEmphasized: false,
		isCompact: false,
		iconOnly: false,
		size: "m",
		orientation: "horizontal",
		hasRightAlignedTabs: false,
		useAnchors: false,
		content: [
			{
				id: "tab-1",
				label: "Tab 1",
				icon: "Folder",
				isSelected: true,
			},
			{
				id: "tab-2",
				label: "Tab 2",
				icon: "Image",
			},
			{
				id: "tab-3",
				label: "Tab 3",
				icon: "Document",
				isDisabled: true,
			},
		],
	},
	parameters: {
		actions: {
			handles: [".spectrum-Tabs-item"],
		},
		packageJson: pkgJson,
	},
};

/**
 * Basic, default tab items should have a label for accessibility. If a label isn’t present, it must include an icon and becomes an icon-only tab item.
 * 
 * By default, tabs have a divider that spans across all tab items. This style works as a way to anchor them to the page. These types of tabs are best used at the top of a page, as a top-level navigation.
 * 
 */
export const Default = TabsGroups.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
/**
 * Vertical tabs should be used when horizontal space is more generous and when the list of sections is greater than can be presented to the user in a horizontal format. 
 */
export const Vertical = VerticalGroup.bind({});
Vertical.args = {
	orientation: "vertical",
};
Vertical.tags = ["!dev"];
Vertical.parameters = {
	chromatic: { disableSnapshot: true },
};

export const VerticalRight = Template.bind({});
VerticalRight.args = {
	...Vertical.args, 
	hasRightAlignedTabs: true,
};
VerticalRight.storyName = "Vertical right";
VerticalRight.tags = ["!dev"];
VerticalRight.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * When there are too many tabs to fit horizontally across the viewport, the tabs component can be displayed as a [quiet picker](/docs/components-picker--docs). The example below is non-functional.
 * 
 * When appropriate, you can use alternative methods of overflowing tabs such as horizontal scrolling.
 */
export const Overflow = OverflowGroup.bind({});
Overflow.args = {
	orientation: "overflow",
};
Overflow.tags = ["!dev"];
Overflow.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The medium size is the default and most frequently used option. Use the other sizes sparingly; they should be used to create a hierarchy of importance within the page.
 */
export const Sizing = (args, context) => Sizes({
	Template,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
Sizing.args = {...Default.args};
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Quiet tabs have no visible divider across the tab items apart from the one that shows the selected tab item. These should be used as sub-level navigation or for containers.
 */
export const Quiet = QuietGroup.bind({});
Quiet.args = {
	isQuiet: true,
};
Quiet.tags = ["!dev"];
Quiet.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Compact tabs should never be used without the quiet variation.
 */
export const Compact = CompactGroup.bind({});
Compact.args = {
	isCompact: true,
	isQuiet: true,
};
Compact.tags = ["!dev"];
Compact.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A tab item in a disabled state shows that the tab item exists, but is not available in that circumstance.
 */
export const Disabled = Template.bind({});
Disabled.args = {
	content: [
		{
			id: "tab-1",
			label: "Selected tab",
			icon: "Folder",
			isSelected: true,
		},
		{
			id: "tab-2",
			label: "Disabled tab",
			icon: "Image",
			isDisabled: true,
		},
		{
			id: "tab-3",
			label: "Tab 3",
			icon: "Document",
		},
	],
};
Disabled.tags = ["!dev"];
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Emphasized tabs have blue text for the selected state for visual prominence and to draw more attention to them. This is optimal for when the selection should call attention, such as the main navigation for a website.
 */
export const Emphasized = Template.bind({});
Emphasized.args = {
	isEmphasized: true,
};
Emphasized.tags = ["!dev"];
Emphasized.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Tab items can alternatively be anchor tags (`<a>`) instead of `div` elements to allow for navigation to on-page anchors. Do not use horizontal tabs for this adaptation.
 */
export const Anchors = Template.bind({});
Anchors.storyName = "Tabs with anchors";
Anchors.args = {
	useAnchors: true,
};
Anchors.tags = ["!dev"];
Anchors.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = TabsGroups.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes,
	},
};
