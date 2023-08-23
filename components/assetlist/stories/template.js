import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { useArgs } from "@storybook/client-api";

import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";
import "../skin.css";

export const AssetListItem = ({
	rootClass = "spectrum-AssetList-item",
	image,
	iconName,
	label,
	isNavigated = false,
	isSelectable = false,
	isSelected = false,
	isBranch = false,
	onclick = () => {},
	...globals
}) => {
	return html` <li
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
		${Checkbox({
			...globals,
			size: "m",
			isChecked: isSelected,
			customClasses: [`${rootClass}Selector`],
		})}
		${when(
			image,
			() =>
				html`<img src=${image ?? exampleImage} class="${rootClass}Thumbnail" />`
		)}
		${when(iconName, () =>
			Icon({
				iconName,
				customClasses: [`${rootClass}Thumbnail`],
				...globals,
			})
		)}
		${when(label, () => html`<span class="${rootClass}Label">${label}</span>`)}
		${when(isBranch, () =>
			Icon({
				iconName: "ChevronRight100",
				customClasses: [`${rootClass}ChildIndicator`],
				...globals,
			})
		)}
	</li>`;
};

export const Template = ({
	rootClass = "spectrum-AssetList",
	items = [],
	customClasses = [],
	id,
	...globals
}) => {
	if (!items) return html``;

	const [, updateArgs] = useArgs();

	return html`
		<ul
			class=${classMap({
				[rootClass]: true,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
		>
			${items.map((item, idx) => {
				return AssetListItem({
					rootClass: `${rootClass}-item`,
					onclick: () => {
						if (item.isDisabled) return;
						item.isSelected = !item.isSelected;
						updateArgs({ items });
					},
					...item,
					...globals,
				});
			})}
		</ul>
	`;
};
