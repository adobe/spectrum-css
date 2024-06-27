import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { userEvent, within } from "@storybook/testing-library";
import { html } from "lit";
import { when } from "lit/directives/when.js";

import { Template } from "./template";

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
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
 * A popover is used to display transient content (menus, options, additional actions etc.) and appears when clicking/tapping on a source (tools, buttons, etc.). It stands out via its visual style (stroke and drop shadow) and floats on top of the rest of the interface.
 */
export default {
	title: "Popover",
	component: "Popover",
	argTypes: {
		trigger: { table: { disable: true } },
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
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: { type: "boolean" },
			if: { arg: "nested", truthy: false },
		},
		position: {
			name: "Positioning",
			type: { name: "string" },
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
			label: "Hop on pop(over)",
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
		layout: "centered",
		docs: {
			story: {
				height: "300px"
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
			<div style="padding: 16px">${Story(context)}</div>
		`,
	],
};


const ChromaticTipPlacementVariants = (args) => html`
	${placementOptions.map(option => {
		const optionDescription = () => {
			if (option.startsWith("start") || option.startsWith("end"))
				return "Changes side with text direction (like a logical property)";
			if (option.startsWith("left") || option.startsWith("right"))
				return "Text direction does not affect the position";
			return null;
		};

		return html`
			<div class="spectrum-Typography" style="padding-block-end: 12rem;">
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
				<div style="padding-block-start: 2rem">
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
`;

export const Default = Template.bind({});
Default.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	await userEvent.click(canvas.getByRole("button"));
};
Default.args = {};

export const WithTip = (args) => html`
	${window.isChromatic() ? ChromaticTipPlacementVariants(args) : Template(args)}
`;
WithTip.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	window.isChromatic() ? null : await userEvent.click(canvas.getByRole("button"));
};
WithTip.args = {
	withTip: true,
};

export const Nested = Template.bind({});
Nested.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	await userEvent.click(canvas.getAllByRole("button")[0]);
	await userEvent.click(canvas.getAllByRole("button")[1]);
};
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
		label: "Hop on pop(over)",
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
				"margin-inline-start": "136px",
				"margin-block-start": "32px"
			},
			trigger: (passthroughs) => ActionButton({
				label: "Hop on pop(over) 2",
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
