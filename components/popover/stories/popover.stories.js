import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";


import isChromatic from "chromatic/isChromatic";

import { Template } from "./template";

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";

export default {
	title: "Components/Popover",
	description:
		"A popover is used to display transient content (menus, options, additional actions etc.) and appears when clicking/tapping on a source (tools, buttons, etc.). It stands out via its visual style (stroke and drop shadow) and floats on top of the rest of the interface.",
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
			if: { arg: 'nested', truthy: false },
		},
		position: {
			name: "Positioning",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "select",
			options: [
				"top",
				"top-start",
				"top-end",
				"bottom",
				"bottom-start",
				"bottom-end",
				"start",
				"start-top",
				"start-bottom",
				"left",
				"left-top",
				"left-bottom",
				"end",
				"end-top",
				"end-bottom",
				"right",
				"right-top",
				"right-bottom",
			],
			if: { arg: 'nested', truthy: false },
		},
	},
	args: {
		rootClass: "spectrum-Popover",
		isOpen: true,
		withTip: false,
		position: "top",
		testId: 'popover-1',
		id: 'popover-1',
		triggerId: 'trigger',
		trigger: (passthroughs) => ActionButton({
			label: "Hop on pop(over)",
			id: 'trigger',
			...passthroughs,
		}),
		content: [
			(passthroughs) => Menu({
				...passthroughs,
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
		customStorybookStyles: {
			flexFlow: "row wrap",
			padding: undefined,
			gap: undefined,
		}
	},
	parameters: {
		layout: 'centered',
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("popover")
				? "migrated"
				: "legacy",
		},
		chromatic: { delay: 2000 },
	},
};

const Popovers = (args) => html`
	${when(isChromatic(), () => html`${[
			"top",
			"top-start",
			"top-end",
			"bottom",
			"bottom-start",
			"bottom-end",
			"start",
			"start-top",
			"start-bottom",
			"left",
			"left-top",
			"left-bottom",
			"end",
			"end-top",
			"end-bottom",
			"right",
			"right-top",
			"right-bottom",
	].map((position, idx) => html`
		<div style=${styleMap({
			display: "flex",
			// block placement
			alignItems: position.startsWith("top") || position.endsWith("-bottom") ? "end" : position.startsWith("bottom") || position.endsWith("-top") ? "start" : "center",
			// inline placement
			justifyContent: position.startsWith("start") || position.startsWith("left") ? "end" : position.startsWith("end") || position.startsWith("right") ? "start" : "center",
			inlineSize: "180px",
			blockSize: "180px",
			padding: "10px",
			border: "1px solid var(--spectrum-gray-200)",
		})}>
			<div style=${styleMap({
				position: "relative",
			})}>
				${Template({
					...args,
					position,
					id: `popover-${idx}`,
					testId: `popover-${idx}`,
					triggerId: `trigger-${idx}`,
					trigger: (passthroughs) => ActionButton({
						label: `${position.split("-").join(" ")}`,
						...passthroughs,
					}),
				})}
			</div>
		</div>
	`)}`, () => html`<div style=${styleMap({ position: "relative" })}>${Template(args)}</div>`
)}`;

export const Default = Popovers.bind({});
Default.args = {};

export const WithTip = Popovers.bind({});
WithTip.args = {
	withTip: true
};

export const Nested = (args) => html`<div style=${styleMap({ position: "relative" })}>${Template(args)}</div>`;
Nested.args = {
	nested: true,
	testId: 'popover-nested',
	id: 'popover-nested',
	triggerId: 'trigger-nested',
	position: "end-top",
	trigger: (passthroughs) => ActionButton({
		...passthroughs,
		label: "Hop on pop(over)",
		id: 'trigger-nested',
	}),
	customStorybookStyles: {
		display: "block",
		position: "relative"
	},
	customStyles: {
		"margin-inline-start": "2px",
		"margin-block-start": "2px"
	},
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
			position: "right-top",
			testId: 'popover-nested-2',
			id: 'popover-nested-2',
			triggerId: "trigger-nested-2",
			isOpen: true,
			customStyles: {
				"margin-inline-start": "2px",
				"margin-block-start": "2px"
			},
			trigger: (passthroughs) => ActionButton({
				label: "Grand-pop(over)",
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

export const Express = Popovers.bind({});
Express.args = { express: true };
