import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { userEvent, within } from "@storybook/testing-library";
import { html } from "lit";
import { when } from "lit/directives/when.js";

import { Template } from "./template";

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Dialog } from "@spectrum-css/dialog/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";

const placementOptions = [
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
];

/**
 * A popover is used to display transient content (menus, options, additional actions etc.) and appears when clicking/tapping on a source (tools, buttons, etc.).
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
		isOpen: {
			name: "Open",
			type: { name: "boolean" },
			table: {
				disable: true,
				type: { summary: "boolean" },
				category: "State",
			},
			control: { type: "boolean" },
		},
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
			description: "Determines which side the popover is positioned on and where the tip appears. The first position term is the popover position and the second term is its source position.",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "select",
			options: placementOptions,
			if: { arg: "nested", truthy: false },
		},
	},
	args: {
		rootClass: "spectrum-Popover",
		isOpen: false,
		withTip: false,
		position: "top",
		testId: "popover-1",
		id: "popover-1",
		triggerId: "trigger",
		trigger: (passthroughs) => ActionButton({
			label: "Toggle popover",
			id: "trigger",
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
	},
	parameters: {
		docs: {
			story: {
				height: "300px",
			}
		},
	},
	decorators: [
		(Story, context) => html`
			<style>
				.spectrum-Detail { display: inline-block; }
				.spectrum-Typography > div {
					/* Why seafoam? Because it separates it from the component styles. */
					--mod-detail-font-color: var(--spectrum-seafoam-900);
				}
			</style>
			<div style="padding: 16px;">${Story(context)}</div>
		`,
	],
};

/**
 * Play function that triggers a click on all buttons within the canvas.
 * Used for initially triggering the appearance of Popover beside the Source button,
 * that includes the positioning logic that happens on click.
 */
const playToggleButtonClick = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	const toggleButtons = canvas.getAllByRole("button");
	for (const button of toggleButtons) {
		if (button && !button?.classList.contains("is-selected")) {
			await userEvent.click(button);
		}
	}
};

/**
 * Template that displays a Popover with every value of the "position" option.
 */
const TipPlacementVariants = (args) => html`
	<div style="display: grid; gap: 32px; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); max-width: 1000px;">
		${placementOptions.map(option => {
			const optionDescription = () => {
				if (option.startsWith("start") || option.startsWith("end"))
					return "Changes side with text direction (like a logical property)";
				if (option.startsWith("left") || option.startsWith("right"))
					return "Text direction does not affect the position";
				return null;
			};

			return html`
				<div class="spectrum-Typography" style="padding-bottom: 12rem;">
					${Typography({
						semantics: "detail",
						size: "l",
						content: [option],
						customClasses: ["chromatic-ignore"],
					})}
					<div>
						${when(optionDescription() !== null, () => html`
							${Typography({
								semantics: "detail",
								size: "s",
								content: [optionDescription()],
								customClasses: ["chromatic-ignore"],
							})}
						`)}
					</div>
					<div style="padding-top: 2rem">
						${Template({
							...args,
							position: option,
							isOpen: true,
							trigger: () => null,
						})}
					</div>
				</div>
			`;
		})}
	</div>
`;

/**
 * Contains a source button with a fixed width, and an always open Popover.
 */
const FixedWidthSourceTemplate = (args) => html`
	${ActionButton({
		label: "Source",
		customStyles: {
			width: "100px",
			display: "block",
		},
	})}
	${Template({
		...args,
		position: "bottom-start",
		isOpen: true,
		trigger: () => null,
	})}
`;

// Stories with toggle button.
// These are excluded from the Docs page because the toggle interactions do not work correctly there.
export const Default = Template.bind({});
Default.play = playToggleButtonClick;
Default.tags = ["!autodocs"];
Default.parameters = {
	layout: "centered",
};

export const WithTip = Template.bind({});
WithTip.storyName = "Default with tip";
WithTip.play = playToggleButtonClick;
WithTip.args = {
	withTip: true,
};
WithTip.tags = ["!autodocs"];
WithTip.parameters = {
	layout: "centered",
	// Tip layouts are already represented in the "Positioning" story.
	chromatic: { disableSnapshot: true },
};

/**
 * A popover can be nested within another popover.
 */
export const Nested = Template.bind({});
Nested.play = playToggleButtonClick;
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

/**
 * By default, popovers do not have a tip. Popovers without a tip should be used when the source has a
 * visually distinct down state, in order to show the connection between the popover and its source.
 * 
 * This example uses the Menu component within the popover.
 */
export const Standard = Template.bind({});
Standard.storyName = "Default";
Standard.args = {
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
};

/**
 * Popovers can have a tip. A tip should be used to help show the connection to its source, in cases
 * where the source does not have a visually distinct down state.
 */
export const StandardWithTip = Template.bind({});
StandardWithTip.storyName = "Default with tip";
StandardWithTip.args = {
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
};

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
 * the following naming convention: the first term is the popover position and the second term is its
 * source position. For example, for the `spectrum-Popover--top-left` class, the popover is to top and the
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
