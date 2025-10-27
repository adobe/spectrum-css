import { html } from "lit";
import { Template } from "./template";

/**
 * The Spectrum CSS background layers is a set of utility classes used to apply Spectrum 2 app framing. Consult [design documentation](https://s2.spectrum.corp.adobe.com/page/background-layers/) for further usage and infomation.
 * Make note of the context when determing the correct class to use.
 *
 * To use these classes:
 *
 * - add background layers as a dependency
 * - Use appropriate class on the element which should display the background layer
 */
export default {
	title: "Background layers",
	description: "The background layers is a series of classes used to style background layers.",
	component: "BackgroundLayers",
	argTypes: {
		environment: {
			name: "Context",
			description: "The context of the background layer",
			control: "select",
			options: ["edit", "browse"],
		},
		layer: {
			name: "Layer",
			description: "The layer of the background layer",
			control: "select",
			options: ["elevated", "layer1", "layer2", "pasteboard"],
			if: {
				arg: "environment",
				equals: "browse",
				options: ["elevated", "layer1", "base"],
			},
		},
	},
	args: {
		rootClass: "spectrum-BackgroundLayers",
		environment: "edit",
		layer: "layer1",
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=36806-6551",
		},
		status: {
			type: "migrated",
		},
	},
	tags: ["migrated", "!dev"]
};

/**
 * Editing context classes:
 *
 * - `spectrum-BackgroundLayers-edit-elevated`
 * - `spectrum-BackgroundLayers-edit-layer2`
 * - `spectrum-BackgroundLayers-edit-layer1`
 * - `spectrum-BackgroundLayers-edit-pasteboard`
 */
export const EditingContext = (args = {}, context = {}) => {
	const spacing = 28;
	const size = 120;
	const minSize = size + spacing * 2;
	return html`
		<div style=${`position: relative; min-block-size: ${minSize}px; min-inline-size: ${minSize}px;`}>
			${Template({
				...args,
				customStyles: { zIndex: 4 },
				layer: "elevated",
			}, context)}
			${Template({
				...args,
				customStyles: { zIndex: 3, insetInlineStart: `${spacing}px`, insetBlockStart: `${spacing}px` },
				layer: "layer2",
			}, context)}
			${Template({
				...args,
				customStyles: { zIndex: 2, insetInlineStart: `${spacing * 2}px`, insetBlockStart: `${spacing * 2}px` },
				layer: "layer1",
			}, context)}
			${Template({
				...args,
				customStyles: { zIndex: 1, insetInlineStart: `${spacing * 3}px`, insetBlockStart: `${spacing * 3}px` },
				layer: "pasteboard",
			}, context)}
		</div>
	`;
};
EditingContext.args = {
	environment: "edit",
};

/**
 * Browsing context classes:
 *
 * - `spectrum-BackgroundLayers-browse-elevated`
 * - `spectrum-BackgroundLayers-browse-layer1`
 * - `spectrum-BackgroundLayers-browse-base`
 */
export const BrowsingContext = (args = {}, context = {}) => {
	const spacing = 28;
	const size = 120;
	const minSize = size + spacing * 2;
	return html`
		<div style=${`position: relative; min-block-size: ${minSize}px; min-inline-size: ${minSize}px;`}>
			${Template({
				...args,
				customStyles: { zIndex: 3 },
				layer: "elevated",
			}, context)}
			${Template({
				...args,
				customStyles: { zIndex: 2, insetInlineStart: `${spacing}px`, insetBlockStart: `${spacing}px` },
				layer: "layer1",
			}, context)}
			${Template({
				...args,
				customStyles: { zIndex: 1, insetInlineStart: `${spacing * 2}px`, insetBlockStart: `${spacing * 2}px` },
				layer: "base",
			}, context)}
		</div>
	`;
};
BrowsingContext.args = {
	environment: "browse",
};
