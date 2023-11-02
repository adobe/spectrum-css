import { Template as OpacityCheckerboard } from "@spectrum-css/opacitycheckerboard/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Thumbnail",
	size = "500",
	imageURL,
	svg,
	altText,
	isCover = false,
	isDisabled = false,
	isFocused = false,
	isLayer = false,
	isSelected = false,
	backgroundColor,
	onclick,
	customClasses = [],
	customStyles = {},
	id,
}) => {

	const image = imageURL ? html`<img class="${rootClass}-image" src=${imageURL} alt=${ifDefined(altText)}/>` : svg ? html`${svg}` : "";

	if (isLayer)
		return html`
			<div
				class=${classMap({
					[rootClass]: true,
					[`${rootClass}--cover`]: isCover,
					[`${rootClass}-layer`]: isLayer,
					[`is-selected`]: isSelected,
					[`is-disabled`]: isDisabled,
					[`is-focused`]: isFocused,
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
					[`is-focused`]: isFocused,
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
				[`${rootClass}-layer`]: isLayer,
				[`is-selected`]: isSelected,
				[`is-disabled`]: isDisabled,
				[`is-focused`]: isFocused,
				[`${rootClass}--size${size}`]: typeof size !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
		style=${ifDefined(styleMap({
			...customStyles,
		}))}
		id=${ifDefined(id)}
		@click=${onclick}
	>
			${when(backgroundColor, () => html`<div class="${rootClass}-background" style=${ifDefined(styleMap({ backgroundColor }))}></div>`)}
			${OpacityCheckerboard({
				rootClass: backgroundColor ? `${rootClass}-image-wrapper` : undefined,
				customClasses: isLayer ? [`${rootClass}-layer-inner`] : !backgroundColor ? [`${rootClass}-image-wrapper`] : [],
				content: image ? [image] : [],
			})}
		</div>
	`
};
