import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { Template as OpacityCheckerboard } from "@spectrum-css/opacitycheckerboard/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Thumbnail",
	size = "500",
	customClasses = [],
	imageURL,
	svg,
	altText,
	isCover,
	isDisabled,
	onclick,
	id,
	isLayer,
	isSelected,
	backgroundColor,
	styles = {
		"background-color": backgroundColor,
	},
	...globals
}) => {

	const checkerboardContentLayer =  html`
		${imageURL
			? html`<img
					class="${rootClass}-image"
					src=${imageURL}
					alt=${altText}
				/>`
			: ""}
	`

	if (isLayer)
		return html`
			<div
				class=${classMap({
					[rootClass]: true,
					[`${rootClass}--cover`]: isCover,
					[`${rootClass}-layer`]: isLayer,
					[`is-selected`]: isSelected,
					[`is-disabled`]: isDisabled,
					[`${rootClass}--size${size}`]: typeof size !== "undefined",
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
				id=${ifDefined(id)}
				@click=${onclick}
			>
				${OpacityCheckerboard({
					...globals,
					componentOnly: true,
					customClasses: [`${rootClass}-layer-inner`],
					content: checkerboardContentLayer,
				})}
			</div>
		`;

	if (backgroundColor)
		return html`
			<div
				class=${classMap({
					[rootClass]: true,
					[`${rootClass}--cover`]: isCover,
					[`${rootClass}-layer`]: isLayer,
					[`is-selected`]: isSelected,
					[`is-disabled`]: isDisabled,
					[`${rootClass}--size${size}`]: typeof size !== "undefined",
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
				id=${ifDefined(id)}
				@click=${onclick}
			>
				<div class="${rootClass}-background" style=${styleMap(styles)}></div>
				<div class="${rootClass}-image-wrapper">
					${imageURL
						? html`<img
								class="${rootClass}-image"
								src=${imageURL}
								alt=${altText}
						  />`
						: ""}
				</div>
			</div>
		`;

	const checkerboardContent = html`
			<div class="${rootClass}-image-wrapper">
			${imageURL
				? html`<img
						class="${rootClass}-image"
						src=${imageURL}
						alt=${altText}
					/>`
				: ""}
			${svg ? html`${svg}` : ""}
		</div>
	`
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--cover`]: isCover,
				[`is-disabled`]: isDisabled,
				[`${rootClass}--size${size}`]: typeof size !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			@click=${onclick}
		>
		${OpacityCheckerboard({
			...globals,
			componentOnly: true,
			customClasses: [`${rootClass}`],
			content: checkerboardContent,
		})}
	`
};
