import { Template as OpacityCheckerboard } from "@spectrum-css/opacitycheckerboard/stories/template.js";
import { getRandomId, Variants } from "@spectrum-css/preview/decorators";
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
	id = getRandomId("thumbnail"),
} = {}, context = {}) => {
	const { updateArgs } = context;

	const image = imageURL ? html`<img class="${rootClass}-image" src=${imageURL} alt=${ifDefined(altText)} />` : svg ? html`${svg}` : "";

	const checkerboardContent = html`
			<div class="${rootClass}-image-wrapper">
			${when(imageURL, () => html`
				<img
					class="${rootClass}-image"
					src=${imageURL}
					alt=${altText}
				/>
			`)}
			${when(svg, () => svg)}
		</div>
	`;

	if (isLayer)
		return html`
			<div
				class=${classMap({
					[rootClass]: true,
					[`${rootClass}--cover`]: isCover,
					[`${rootClass}-layer`]: isLayer,
					["is-selected"]: isSelected,
					["is-disabled"]: isDisabled,
					["is-focused"]: isFocused,
					[`${rootClass}--size${size}`]: typeof size !== "undefined",
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
				id=${ifDefined(id)}
				@click=${onclick}
			>
				${OpacityCheckerboard({
					componentOnly: true,
					customClasses: [`${rootClass}-layer-inner`],
					content: checkerboardContent,
				}, context)}
			</div>
		`;

	if (backgroundColor)
		return html`
			<div
				class=${classMap({
					[rootClass]: true,
					[`${rootClass}--cover`]: isCover,
					[`${rootClass}-layer`]: isLayer,
					["is-selected"]: isSelected,
					["is-disabled"]: isDisabled,
					["is-focused"]: isFocused,
					[`${rootClass}--size${size}`]: typeof size !== "undefined",
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
				id=${ifDefined(id)}
				@click=${onclick}
			>
				<div class="${rootClass}-background" style=${styleMap({backgroundColor})}></div>
				<div class="${rootClass}-image-wrapper">
					${when(imageURL, () => html`
						<img
							class="${rootClass}-image"
							src=${imageURL}
							alt=${altText}
						/>
					`)}
				</div>
			</div>
		`;

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--cover`]: isCover,
				[`${rootClass}-layer`]: isLayer,
				["is-selected"]: isSelected,
				["is-disabled"]: isDisabled,
				["is-focused"]: isFocused,
				[`${rootClass}--size${size}`]: typeof size !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
		style=${styleMap(customStyles)}
		id=${ifDefined(id)}
		@click=${onclick}
		@focusin=${() => {
			updateArgs({ isFocused: true });
		}}
		@focusout=${() => {
			updateArgs({ isFocused: false });
		}}
	>
			${when(backgroundColor, () => html`<div class="${rootClass}-background" style=${ifDefined(styleMap({ backgroundColor }))}></div>`)}
			${OpacityCheckerboard({
				rootClass: backgroundColor ? `${rootClass}-image-wrapper` : undefined,
				customClasses: isLayer ? [`${rootClass}-layer-inner`] : !backgroundColor ? [`${rootClass}-image-wrapper`] : [],
				content: image ? [image] : [],
			}, context)}
		</div>
	`;
};


export const ThumbnailGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default"
		},
		{
			testHeading: "Layer",
			isLayer: true,
			isSelected: false,
		},
		{
			testHeading: "With background",
			backgroundColor: "orange",
		}
	],
	stateData: [
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "Selected",
			isSelected: true,
			// Use the test heading as the key for which stories to apply this state to
			include: ["Layer"],
		}
	]
});
