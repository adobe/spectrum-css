import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Dialog } from "@spectrum-css/dialog/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isOpen } from "@spectrum-css/preview/types";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { version } from "../package.json";
import { FixedWidthSourceTemplate, Template, TipPlacementVariants } from "./template";

/**
 * A popover is used to display transient content (menus, options, additional actions, etc.) and appears when clicking/tapping on a source (tools, buttons, etc.).
 * It stands out via its visual style (stroke and drop shadow) and floats on top of the rest of the interface.
 * 
 * - Popover's position and distance to its source should be handled by the implementation. Positioning in Storybook is only for demonstration purposes.
 * - When the `.is-open` class is present, popover is offset from the source by the spacing value defined in `--spectrum-popover-animation-distance`. This
 * offset is done with a CSS transform and animates with a CSS transition. 
 */
export default {
	title: "Popover",
	component: "Popover",
	argTypes: {
		trigger: { table: { disable: true } },
		triggerId: { table: { disable: true } },
		content: { table: { disable: true } },
		nested: { table: { disable: true } },
		isOpen,
		withTip: {
			name: "Show with tip",
			type: { name: "boolean" },
			defaultValue: { summary: "false" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: { type: "boolean" },
			if: { arg: "nested", truthy: false },
		},
		position: {
			name: "Positioning",
			description: "Determines which side the popover is positioned on and where the tip appears. The first position term is the popover's position and the second term is the source's position.",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "select",
			options: [
				"top",
				"top-left",
				"top-right",
				"top-start",
				"top-end",
				"bottom",
				"bottom-left",
				"bottom-right",
				"bottom-start",
				"bottom-end",
				"right",
				"right-bottom",
				"right-top",
				"left",
				"left-bottom",
				"left-top",
				"start",
				"start-top",
				"start-bottom",
				"end",
				"end-top",
				"end-bottom",
			],
			if: { arg: "nested", truthy: false },
		},
	},
	args: {
		rootClass: "spectrum-Popover",
		isOpen: true,
		withTip: false,
		position: "top",
		content: [html`<div style="padding-inline: 8px;">Basic popover text content with some added padding.</div>`],
	},
	parameters: {
		docs: {
			story: {
				height: "300px",
			}
		},
		componentVersion: version,
	},
	decorators: [
		// Add padding for VRT so drop shadows are not cut off.
		(story) => window.isChromatic() ? html`<div style="padding: 32px;">${story()}</div>` : story(),
	],
};

export const Default = Template.bind({});
Default.args = {
	testId: "popover-1",
	id: "popover-1",
	triggerId: "trigger",
	trigger: (passthroughs) => ActionButton({
		isSelected: passthroughs.isOpen,
		label: "Toggle popover",
		id: "trigger",
		...passthroughs,
	}),
	content: [
		(passthroughs) => Menu({
			items: [
				{
					iconName: "Edit",
					label: "Edit",
				},
				{
					iconName: "Copy",
					label: "Copy",
				},
				{
					iconName: "Move",
					label: "Move",
				},
				{
					iconName: "Delete",
					label: "Delete",
				},
			],
			...passthroughs,
		}),
	],
};
// This is excluded from the Docs page because the toggle interactions do not work correctly there.
Default.tags = ["!autodocs"];
Default.parameters = {
	layout: "centered",
};

/**
 * A popover can be nested within another popover.
 */
export const Nested = Template.bind({});
Nested.args = {
	nested: true,
	testId: "popover-nested",
	id: "popover-nested",
	triggerId: "trigger-nested",
	isOpen: true,
	customStyles: {
		"margin-inline-start": "8px",
	},
	trigger: (passthroughs) => ActionButton({
		label: "Source 1",
		id: "trigger-nested",
		...passthroughs,
	}),
	content: [
		() => Menu({
			items: [
				{
					iconName: "Edit",
					label: "Edit",
				},
			],
		}),
		() => Nested({
			position: "right",
			testId: "popover-nested-2",
			id: "popover-nested-2",
			triggerId: "trigger-nested-2",
			isOpen: true,
			customStyles: {
				// @todo This manual test of positioning does not support "Large" scale.
				"margin-inline-start": "73px",
				"margin-block-start": "32px"
			},
			trigger: (passthroughs) => ActionButton({
				label: "Source 2",
				id: "trigger-nested-2",
				...passthroughs,
			}),
			content: [
				() => Menu({
					items: [
						{
							iconName: "Edit",
							label: "Edit",
						},
						{
							iconName: "Copy",
							label: "Copy",
						},
						{
							iconName: "Move",
							label: "Move",
						},
						{
							iconName: "Delete",
							label: "Delete",
						},
					],
				}),
			],
		}),
	],
};
Nested.tags = ["!dev"];

/**
 * Popovers can display different elements within their content area. This example uses the
 * [dialog](?path=/docs/components-dialog--docs) component within the popover.
 */
export const DialogStyle = Template.bind({});
DialogStyle.storyName = "Dialog style content";
DialogStyle.args = {
	withTip: true,
	isOpen: true,
	trigger: () => null,
	content: [
		() => Dialog({
			showModal: false,
			// @todo replace custom class with 'size: "small"' arg when added Dialog control is merged.
			customClasses: ["spectrum-Dialog--small"],
			isDismissable: false,
			heading: "Example heading",
			content: [
				() => Typography({
					semantics: "body",
					size: "m",
					content: [
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
					]
				}),
			],
		}),
	],
};
DialogStyle.tags = ["!dev"];

/**
 * Popover has 22 available positions. Ten of those positions use logical properties. Position classes using
 * the following naming convention: the first term is the popover's position and the second term is its
 * source's position. For example, for the `spectrum-Popover--top-left` class, the popover is positioned at the top and the
 * source is to left.
 * 
 * #### Tip SVG
 * Depending on its position, the tip uses one of two different SVGs.
 * - Top and bottom popover positions use the same SVG. The CSS handles flipping the SVG vertically.
 * - Left, right, start, and end popover positions use the same SVG. The CSS handles flipping the SVG horizontally.
 */
export const Positioning = TipPlacementVariants.bind({});
Positioning.storyName = "Positioning options";
Positioning.args = {
	withTip: true,
	isOpen: true,
	trigger: () => null,
};
Positioning.tags = ["!dev"];

/**
 * #### Default tip positioning
 * - The tip position is centered on the edge for top, bottom, left, right, start, and end positions.
 * - The tip position distance from edge is equal to the popover corner radius for all other positions.
 * 
 * #### Centering the tip with the source
 * In implementations, the tip position can be overridden to center it with the source by setting the
 * custom property `--spectrum-popover-pointer-edge-offset` equal to half the width of the source for
 * top and bottom popovers, or half the height of the source for side popovers. The following 
 * example sets this custom property to `50px` for a source button that is `100px` wide. 
 */
export const TipOffset = FixedWidthSourceTemplate.bind({});
TipOffset.storyName = "Tip positioning and inline offset";
TipOffset.args = {
	withTip: true,
	isOpen: true,
	trigger: () => null,
	content: [
		() => Menu({
			items: [
				{
					iconName: "Edit",
					label: "Example longer menu item",
				},
				{
					iconName: "Copy",
					label: "Copy",
				},
				{
					iconName: "Move",
					label: "Move",
				},
			],
		}),
	],
	customStyles: {
		"--spectrum-popover-pointer-edge-offset": "50px",
	}
};
TipOffset.tags = ["!dev"];

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //
/**
 * By default, popovers do not have a tip. Popovers without a tip should be used when the source has a
 * visually distinct down state, in order to show the connection between the popover and its source.
 * 
 * This example uses the [menu](?path=/docs/components-menu--docs) component within the popover.
 */
export const Standard = Template.bind({});
Standard.storyName = "Default";
Standard.args = {
	...Default.args,
	isOpen: true,
	trigger: () => null,
};
Standard.tags = ["!dev"];
Standard.parameters = {
	docs: {
		story: {
			height: "200px",
		},
	},
	chromatic: { disableSnapshot: true },
};

/**
 * Popovers can have a tip. A tip should be used to help show the connection to its source, in cases
 * where the source does not have a visually distinct down state.
 */
export const StandardWithTip = Template.bind({});
StandardWithTip.storyName = "Default with tip";
StandardWithTip.args = {
	...Default.args,
	withTip: true,
	isOpen: true,
	trigger: () => null,
};
StandardWithTip.tags = ["!dev"];
StandardWithTip.parameters = {
	docs: {
		story: {
			height: "200px",
		},
	},
	chromatic: { disableSnapshot: true },
};