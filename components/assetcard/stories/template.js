import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import { useArgs } from "@storybook/client-api";
import { camelCase } from "lodash-es";

import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-AssetCard",
	image,
	exampleImage,
	title,
	headerContent,
	content = [],
	selection = "checkbox",
	isSelected = false,
	isFocused = false,
	isDropTarget = false,
	customClasses = [],
	id,
	...globals
}) => {
	const [, updateArgs] = useArgs();

	if (!image && !exampleImage) {
		console.warn("AssetCard: image is required");
		return html``;
	}

	if (exampleImage) exampleImage = `images/example-card-${exampleImage}.png`;

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${selection}Selection`]:
					typeof selection !== "undefined",
				"is-selected": isSelected,
				"is-focused": isFocused,
				"is-drop-target": isDropTarget,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			@click=${() => {
				updateArgs({ isSelected: !isSelected });
			}}
			tabindex="0"
			role="figure"
		>
			<div class="${rootClass}-assetContainer">
				<img class="${rootClass}-asset" alt="assetcard example image" src="${image ?? exampleImage}" />
				<div class="${rootClass}-selectionOverlay"></div>
			</div>
			${when(
				title,
				() => html`<div class="${rootClass}-header">
					${when(
						title,
						() => html`<div class="${rootClass}-title" id=${camelCase(title)}>${title}</div>`
					)}
					${when(
						headerContent,
						() =>
							html`<div class="${rootClass}-headerContent">
								${headerContent}
							</div>`
					)}
				</div>`
			)}
			${when(
				content,
				() => html`<div class="${rootClass}-content">${content}</div>`
			)}
			<div class="${rootClass}-selectionIndicator">
				${when(
					selection === "checkbox",
					() =>
						Checkbox({
							...globals,
							size: "m",
							isEmphasized: true,
							isChecked: isSelected,
							ariaLabelledby: camelCase(title),
							customClasses: [`${rootClass}-checkbox`],
						}),
					() => html`<div class="${rootClass}-selectionOrder">1</div>`
				)}
			</div>
		</div>
	`;
};
