import { disableDefaultModes } from "@spectrum-css/preview/modes";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { TabsGroups } from "./tabs.test.js";
import { CompactGroup, OverflowGroup, Template, VerticalGroup } from "./template.js";

/**
 * Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit. Tabs can be either horizontal or vertical.
 *
 * ## Usage notes
 *
 * ### Use icons consistently
 * Icons are optional, but don't mix the use of icons in tabs if they are utilized. Navigation controls require a clear spacial relationship to one another, and mixing the use of icons can dramatically impact the visual balance and presence for each tab item.
 *
 * ### Setting the selected tab item
 * Only one tab item can be selected at any given time. The selected tab item is designated by the `.is-selected` class. A selection indicator line is shown under or next to the selected tab item.
 *
 * ### Quiet tabs
 * The quiet variant has been deprecated for Spectrum 2. By default, all tabs look similar to what was formerly the quiet variant, with no divider spanning across all tab items.
 */

export default {
	title: "Tabs",
	component: "Tabs",
	argTypes: {
		content: { table: { disable: true } },
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
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
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
		labelOnly: {
			name: "Label only",
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
		isCompact: false,
		iconOnly: false,
		labelOnly: false,
		orientation: "horizontal",
		hasRightAlignedTabs: false,
		useAnchors: false,
		content: [
			{
				label: "Tab 1",
				icon: "Folder",
				isSelected: true,
			},
			{
				label: "Tab 2",
				icon: "Image",
			},
			{
				label: "Tab 3",
				icon: "File",
				isDisabled: true,
			},
		],
	},
	parameters: {
		actions: {
			handles: [".spectrum-Tabs-item"],
		},
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=48979-4695",
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
 * #### Labels
 * Basic, default tab items should have a label for accessibility. If a label isn't present, it must include an icon and becomes an icon-only tab item.
 *
 * #### Icons
 * Icons can be displayed in tab items. Icons should only be used in a tab item when absolutely necessary: when adding essential value and having a strong association with the label. Icons should not be used just as decoration. If the tab item does not have a visible label, it must still have a tooltip to disclose the label.
 */
export const Default = TabsGroups.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
/**
 * Vertical tabs should be used when horizontal space is more limited and when the list of sections is greater than can be presented to the user in a horizontal format.
 */
export const Vertical = VerticalGroup.bind({});
Vertical.args = {
	orientation: "vertical",
};
Vertical.tags = ["!dev", "!autodocs"]; // TODO: remove "!autodocs" when vertical tabs are supported in S2
Vertical.parameters = {
	chromatic: { disableSnapshot: true },
};

export const VerticalRight = Template.bind({});
VerticalRight.args = {
	...Vertical.args,
	hasRightAlignedTabs: true,
};
VerticalRight.storyName = "Vertical right";
VerticalRight.tags = ["!dev", "!autodocs"]; // TODO: remove "!autodocs" when vertical tabs are supported in S2
VerticalRight.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * When there are too many tabs to fit horizontally across the viewport, the tabs component can be displayed as a [quiet picker](/docs/components-picker--docs). The example below is non-functional.
 *
 * When appropriate, alternative methods of overflowing tabs such as horizontal scrolling can be used.
 */
export const Overflow = OverflowGroup.bind({});
Overflow.args = {
	orientation: "overflow",
};
Overflow.tags = ["!dev", "!autodocs"]; // TODO: remove "!autodocs" when overflow tabs are supported in S2
Overflow.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * In addition to the default, regular density, tabs also come in a compact density which has tighter spacing.
 */
export const Compact = CompactGroup.bind({});
Compact.storyName = "Density: compact";
Compact.args = {
	isCompact: true,
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
			label: "Selected tab",
			icon: "Folder",
			isSelected: true,
		},
		{
			label: "Disabled tab",
			icon: "Image",
			isDisabled: true,
		},
		{
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
