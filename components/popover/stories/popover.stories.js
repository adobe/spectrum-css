import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Dialog } from "@spectrum-css/dialog/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { ArgGrid } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isOpen } from "@spectrum-css/preview/types";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { PopoverGroup } from "./popover.test.js";
import { Template } from "./template.js";

/**
 * A popover is used to display transient content (menus, options, additional actions, etc.) and appears when clicking/tapping on a source (tools, buttons, etc.).
 * It stands out via its visual style (stroke and/or drop shadow) and floats on top of the rest of the interface.
 *
 * ## Usage notes
 * - Popover's position and distance to its source should be handled by the implementation. Positioning in Storybook is only for demonstration purposes.
 * - When the `.is-open` class is present, popover is offset from the source by the spacing value defined in `--spectrum-popover-animation-distance`. This offset is done with a CSS transform and animates with a CSS transition.
 * - There may be cases where a popover has another sibling popover. Implementations can add `margin` styles to the sibling popover, set to `--spectrum-popover-animation-distance`, within their popover position calculations. See [the nested popover story](/docs/components-popover--docs#nested) below for an example.
 */
export default {
	title: "Popover",
	component: "Popover",
	argTypes: {
		trigger: { table: { disable: true } },
		triggerId: { table: { disable: true } },
		content: { table: { disable: true } },
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
		},
		popoverAlignment: { table: { disable: true } },
		customWrapperStyles: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Popover",
		isOpen: true,
		withTip: false,
		position: "bottom",
	},
	parameters: {
		layout: "centered",
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=42086-5684",
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
 * By default, popovers do not have a tip and are positioned at the top. Popovers without a tip should be used when the source has a
 * visually distinct [down state](/docs/foundations-down-state--docs), in order to show the connection between the popover and its source.
 *
 * This example uses the [menu](/docs/components-menu--docs) component within the popover, has a position of `bottom`, and uses a button as the source.
 */
export const Default = PopoverGroup.bind({});
Default.args = {
	trigger: (passthroughs, context) => ActionButton({
		isSelected: true,
		label: "Actions",
		...passthroughs,
	}, context),
	content: [
		(passthroughs, context) => Menu({
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
		}, context),
	],
};

/**
 * A popover can be nested within another popover.
 */
export const Nested = Template.bind({});
Nested.tags = ["!dev"];
Nested.args = {
	position: "end-top",
	isOpen: true,
	trigger: (passthroughs, context) => ActionButton({
		label: "Actions",
		...passthroughs,
	}, context),
	customStyles: {
		"--spectrum-popover-width-override": "0px",
		"--spectrum-popover-height-override": "0px",
	},
	content: [
		(passthroughs, context) => Menu({
			items: [
				{
					iconName: "Edit",
					label: "Edit",
				},
			],
			...passthroughs,
		}, context),
		(passthroughs, context) => Template({
			position: "end-top",
			isOpen: true,
			customStyles: {
				// nested popover spacing so that adjacent `.spectrum-Popover` divs don't "touch"
				"margin": "var(--spectrum-popover-animation-distance)",
			},
			trigger: (passthroughs, context) => ActionButton({
				label: "More actions",
				...passthroughs,
			}, context),
			content: [
				(passthroughs, context) => Menu({
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
				}, context),
			],
			...passthroughs,
		}, context),
	],
};
Nested.parameters = {
	docs: {
		story: {
			height: "250px"
		},

	}
};

// ********* VRT ONLY ********* //
export const WithForcedColors = PopoverGroup.bind({});
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
 * Popovers can have a tip. A tip should be used to help show the connection to its source, in cases
 * where the source does not have a visually distinct down state.
 */
export const WithTip = Template.bind({});
WithTip.storyName = "Default with tip";
WithTip.tags = ["!dev"];
WithTip.args = {
	...Default.args,
	withTip: true,
};
WithTip.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

/**
 * Popovers can display different elements within their content area. This example uses the
 * [dialog](?path=/docs/components-dialog--docs) component within the popover.
 */
// @see https://opensource.adobe.com/spectrum-web-components/components/popover/#dialog-popovers
export const DialogStyle = Template.bind({});
DialogStyle.storyName = "Dialog-style content";
DialogStyle.tags = ["!dev"];
DialogStyle.args = {
	withTip: true,
	isOpen: true,
	trigger: undefined,
	content: [
		(passthroughs, context) => Dialog({
			showModal: false,
			size: "s",
			isDismissible: false,
			heading: "Example heading",
			hasFooter: false,
			footer: [""],
			content: [
				() => Typography({
					semantics: "body",
					size: "m",
					content: [
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
					]
				}),
			],
			...passthroughs,
		}, context),
	],
};
DialogStyle.parameters = {
	layout: "padded",
	chromatic: {
		disableSnapshot: true,
	},
};

/**
 * Popover has 22 available positions. Ten of those positions use logical properties. Position classes using
 * the following naming convention: the first term is the popover's position and the second term is its
 * source's position. For example, for the `spectrum-Popover--top-left` class, the popover is positioned at the top and the
 * source is to the left.
 *
 * #### Tip SVG
 * Depending on its position, the tip uses one of two different SVGs.
 * - Top and bottom popover positions use the same SVG. The CSS handles flipping the SVG vertically.
 * - Left, right, start, and end popover positions use the same SVG. The CSS handles flipping the SVG horizontally.
 */
export const Positioning = (args, context) => ArgGrid({
	Template,
	argKey: "position",
	withBorder: false,
	...args,
}, context);
Positioning.storyName = "Positioning options";
Positioning.args = {
	withTip: true,
	isOpen: true,
	trigger: undefined,
	content: [() => html`<p style="padding: 0 7px; margin: 0; inline-size: 150px;">Basic text content, with some added padding.</p>`],
};
Positioning.tags = ["!dev"];
Positioning.parameters = {
	layout: "padded",
	chromatic: {
		disableSnapshot: true,
	},
};

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
export const TipOffset = Template.bind({});
TipOffset.storyName = "Tip positioning and inline offset";
TipOffset.args = {
	withTip: true,
	isOpen: true,
	position: "bottom-start",
	trigger: (passthroughs, context) => ActionButton({
		...passthroughs,
		label: "Source",
		customStyles: {
			...passthroughs?.customStyles ?? {},
			"min-width": "100px",
		},
	}, context),
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
	customWrapperStyles: {
		"width": "300px",
	},
	customStyles: {
		"--spectrum-popover-pointer-edge-offset": "50px",
	},
};
TipOffset.tags = ["!dev"];
TipOffset.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};
