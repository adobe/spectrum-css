import { html } from "lit";
import { when } from "lit/directives/when.js";

import { Template } from "./template";

export default {
	title: "Components/Accordion",
	description:
		"The accordion element contains a list of items that can be expanded or collapsed to reveal additional content or information associated with each item. There can be zero expanded items, exactly one expanded item, or more than one item expanded at a time, depending on the configuration. This list of items is defined by child accordion item elements.",
	component: "Accordion",
	argTypes: {
		items: { table: { disable: true } },
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l", "xl"],
			control: "select",
		},
		disableAll: {
			name: "Disable all items",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		density: {
			name: "Density",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["compact", "regular", "spacious"],
			control: "select",
		},
	},
	args: {
		rootClass: "spectrum-Accordion",
		size: "m",
		density: "regular",
		disableAll: false,
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Accordion-item"],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("accordion")
				? "migrated"
				: undefined,
		},
	},
};

const AccordionGroup = ({
	customStyles = {},
	...args
}) => {
	return html`
		<div style="display: flex; gap: 2rem;">
			${Template({
				...args,
				items: new Map([
				[
					"Recent",
					{
						content: "Item 1",
						isOpen: true,
						isDisabled: false,
					},
				],
				[
					"Architecture",
					{
						content: "Item 2",
						isOpen: false,
						isDisabled: true,
					},
				],
				[
					"Nature",
					{
						content: "Item 3",
						isOpen: false,
						isDisabled: false,
					},
				],
				[
					"Really Long Accordion Item that should wrap",
					{
						content: "Really long content that should wrap when component has a max or fixed width",
						isOpen: true,
						isDisabled: false,
					},
				],
			]),
			})}
			${when(window.isChromatic(), () =>
				Template({
					...args,
					customStyles: { "max-inline-size": "300px"},
					items: new Map([
					[
						"Recent",
						{
							content: "Item 1",
							isOpen: true,
							isDisabled: false,
						},
					],
					[
						"Architecture",
						{
							content: "Item 2",
							isOpen: false,
							isDisabled: true,
						},
					],
					[
						"Nature",
						{
							content: "Item 3",
							isOpen: false,
							isDisabled: false,
						},
					],
					[
						"Really Long Accordion Item that should wrap",
						{
							content: "Really long content that should wrap when component has a max or fixed width",
							isOpen: true,
							isDisabled: false,
						},
					],
				]),
				})
			)}
			${when(window.isChromatic(), () =>
				Template({
					...args,
					disableAll: true,
					items: new Map([
					[
						"Recent",
						{
							content: "Item 1",
							isOpen: true,
						},
					],
					[
						"Architecture",
						{
							content: "Item 2",
							isOpen: false,
						},
					],
					[
						"Nature",
						{
							content: "Item 3",
							isOpen: false,
						},
					],
					[
						"Really Long Accordion Item that should wrap",
						{
							content: "Really long content that should wrap when component has a max or fixed width",
							isOpen: true,
						},
					],
				]),
				})
			)}
		</div>
	`;
};

export const Default = AccordionGroup.bind({});
Default.args = {};
