import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { useArgs } from "@storybook/preview-api";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/legacy.css";

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
} = {}, context = {}) => {
	return html`
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
			}, context))}
			${when(
				image,
				() =>
					html`<img src=${image} class="${rootClass}Thumbnail" alt="asset image thumbnail" />`
			)}
			${when(iconName, () =>
				Icon({
					iconName,
					customClasses: [`${rootClass}Thumbnail`],
				}, context)
			)}
			${when(label, () => html`<span class="${rootClass}Label">${label}</span>`)}
			${when(!isSelectable && !isBranch, () =>
				Checkbox({
					size: "m",
					isChecked: isSelected,
					ariaLabelledby,
					id: checkboxId,
					customClasses: [`${rootClass}Selector`],
				}, context))}
			${when(isBranch, () =>
				Icon({
					iconName: "ChevronRight100",
					customClasses: [`${rootClass}ChildIndicator`],
				}, context)
			)}
		</li>
	`;
};

export const Template = ({
	rootClass = "spectrum-AssetList",
	items = [],
	customClasses = [],
	id,
} = {}, context = {}) => {
	const [, updateArgs] = useArgs();

	return html`
		<ul
			class=${classMap({
				[rootClass]: true,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
		>
			${items.map((item) => {
				return AssetListItem({
					rootClass: `${rootClass}-item`,
					onclick: () => {
						if (item.isDisabled) return;
						item.isSelected = !item.isSelected;
						updateArgs({ items });
					},
					...item,
				}, context);
			})}
		</ul>
	`;
};
