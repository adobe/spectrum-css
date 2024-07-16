import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { camelCase } from "lodash-es";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

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
	customStyles = {},
	id,
	testId,
} = {}, context = {}) => {
	const { updateArgs } = context;

	if (!image && !exampleImage) {
		console.warn("AssetCard: image is required");
		return html``;
	}

	if (exampleImage) exampleImage = `example-card-${exampleImage}.png`;

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
			data-test-id=${ifDefined(testId)}
			style=${styleMap(customStyles)}
			@click=${() => {
				updateArgs({ isSelected: !isSelected });
			}}
			@focusin=${() => {
				updateArgs({ isFocused: true });
			}}
			@focusout=${() => {
				updateArgs({ isFocused: false });
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
							size: "m",
							isEmphasized: true,
							isChecked: isSelected,
							ariaLabelledby: camelCase(title),
							customClasses: [`${rootClass}-checkbox`],
						}, context),
					() => html`<div class="${rootClass}-selectionOrder">1</div>`
				)}
			</div>
		</div>
	`;
};

export const AssetCardGroup = Variants({
	Template,
	testData: [{
		testHeading: "Portrait",
		title: "Portrait asset",
		content: ["Image"],
	},
	{
		testHeading: "Landscape",
		title: "Landscape asset",
		exampleImage: "landscape",
	},
	{
		testHeading: "Square asset",
		title: "Square asset",
		exampleImage: "square",
	},
	{
		testHeading: "Video asset",
		title: "MVI_0123.mp4",
		headerContent: "39:02",
		exampleImage: "square",
	},
	{
		testHeading: "With ordinal",
		title: "Ordered selection",
		selection: "ordered",
		exampleImage: "landscape",
	},
	{
		testHeading: "Highlighted selection",
		title: "Highlight selection",
		selection: "highlight",
	},
	{
		testHeading: "Drop target",
		title: "Drop target",
		selection: "highlight",
		isDropTarget: true,
	}],
	stateData: [{
		testHeading: "Selected",
		isSelected: true,
	}, {
		testHeading: "Focused",
		isFocused: true,
	}]
});
