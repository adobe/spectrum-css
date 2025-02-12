import { Template as ColorArea } from "@spectrum-css/colorarea/stories/template.js";
import { Template as ColorHandle } from "@spectrum-css/colorhandle/stories/template.js";
import { Container } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ColorWheel",
	customClasses = [],
	isDisabled = false,
	isFocused = false,
	isWithColorArea = false,
	isWithColorLoupe = true,
	colorHandleStyle = {},
	selectedColor = "rgba(255, 0, 0, 50%)",
	customStyles = {},
} = {}, context = {}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				"is-disabled": isDisabled,
				"is-focused": isFocused,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(customStyles)}
		>
			<div class="${rootClass}-inner">
				<div class="${rootClass}-colorarea-container">
				${when(isWithColorArea, () => html`
					${ColorArea({
						isDisabled,
						customStyles: {
							"--mod-colorarea-width": "80px",
							"--mod-colorarea-height": "80px",
						},
						selectedColor,
					}, context)}
				`)}
				</div>
			</div>
			<div class=${classMap({
				[`${rootClass}-wheel`]: true,
				"is-disabled": isDisabled,
			})}></div>
			${ColorHandle({
				isDisabled,
				isFocused,
				customClasses: [`${rootClass}-handle`],
				selectedColor,
				customStyles: colorHandleStyle,
				isWithColorLoupe,
			}, context)}
			<input type="range" class="${rootClass}-slider" aria-label="hue" min="0" max="360" step="">
		</div>
	`;
};

export const SizeTemplate = (args, context = {}) => Container({
	direction: "row",
	wrapperStyles: {},
	content: html`
		${Template({
			...args
		}, context)}
		${Template({
			...args,
			customStyles: {
				"--mod-colorwheel-inline-size": "240px",
				"--mod-colorwheel-block-size": "240px",
				"--mod-colorwheel-track-width": "30px",
				"--mod-colorwheel-path": "\"M 119 119 m -119 0 a 119 119 0 1 0 238 0 a 119 119 0 1 0 -238 0.2 M 119 119 m -91 0 a 91 91 0 1 0 182 0 a 91 91 0 1 0 -182 0\"",
			}
		}, context)}
	`,
});
