import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { getRandomId, renderContent } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/spectrum.css";
/* Must be imported last */
import "../themes/express.css";

export const AssetListItem = ({
	rootClass = "spectrum-AssetList-item",
	image,
	iconName,
	iconSet = "workflow",
	label,
	checkboxId,
	ariaLabelledby,
	isNavigated = false,
	isSelectable = false,
	isSelected = false,
	isBranch = false,
	onclick = () => {},
} = {}, context = {}) => html`
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
			}, context)
		)}
		${when(image, () => 
			html`<img src=${image} class="${rootClass}Thumbnail" alt="asset image thumbnail" />`
		)}
		${when(iconName, () => 
			Icon({
				iconName,
				setName: iconSet,
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
				setName: "ui",
				customClasses: [`${rootClass}ChildIndicator`],
			}, context)
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
