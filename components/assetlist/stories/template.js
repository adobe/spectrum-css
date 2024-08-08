import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { getRandomId, renderContent } from "@spectrum-css/preview/decorators/utilities.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const AssetListItem = ({
	rootClass = "spectrum-AssetList-item",
	image,
	iconName,
	label,
	checkboxId,
	ariaLabelledby,
	isNavigated = false,
	isSelectable = false,
	isSelected = false,
	isBranch = false,
	onclick = () => {},
}) => html`
	<li
		class=${classMap({
			[rootClass]: true,
			"is-selectable": isSelectable,
			"is-selected": isSelected,
			"is-branch": isBranch,
			"is-navigated": isNavigated,
		})}
		@click=${onclick}
		tabindex="0"
	>
		${when(isSelectable, () =>
		Checkbox({
			size: "m",
			isChecked: isSelected,
			ariaLabelledby,
			id: checkboxId,
			customClasses: [`${rootClass}Selector`],
		}))}
		${when(
			image,
			() =>
				html`<img src=${image} class="${rootClass}Thumbnail" alt="asset image thumbnail" />`
		)}
		${when(iconName, () => Icon({ iconName, customClasses: [`${rootClass}Thumbnail`] }))}
		${when(label, () => html`<span class="${rootClass}Label">${label}</span>`)}
		${when(!isSelectable && !isBranch, () =>
			Checkbox({
				size: "m",
				isChecked: isSelected,
				ariaLabelledby,
				id: checkboxId,
				customClasses: [`${rootClass}Selector`],
			}))}
		${when(isBranch, () =>
			Icon({
				iconName: "ChevronRight100",
				customClasses: [`${rootClass}ChildIndicator`],
			})
		)}
	</li>
`;

export const Template = ({
	rootClass = "spectrum-AssetList",
	items = [],
	customClasses = [],
	id = getRandomId("assetlist"),
} = {}, context = {}) => {
	return html`
		<ul
			class=${classMap({
				[rootClass]: true,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
		>
			${renderContent(items, {
				callback: AssetListItem,
				args: {
					rootClass: `${rootClass}-item`,
				},
				context
			})}
		</ul>
	`;
};
