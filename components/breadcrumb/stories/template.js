import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { getRandomId, renderContent } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const BreadcrumbItem = ({
	rootClass = "spectrum-Breadcrumbs",
	id = getRandomId("breadcrumb-item"),
	label,
	isDisabled,
	isDragged,
	iconName,
	iconSet,
	idx = 0,
	totalItems = 1,
} = {}, context = {}) => {
	const isNotLastItem = idx < totalItems - 1;
	return html`
		<li
			class=${classMap({
				[`${rootClass}-item`]: true,
				"is-dragged": isDragged,
			})}
			id=${ifDefined(id)}
		>
			${when(iconName, () =>
				ActionButton({
					iconName,
					iconSet,
					isDisabled,
					isQuiet: true,
					customIconClasses: [`${rootClass}-folder`],
					size: "m",
				}, context)
			)}
			${when(isNotLastItem,
				() => html`
					<div
						class=${classMap({
							[`${rootClass}-itemLink`]: true,
							"is-disabled": isDisabled,
						})}
						aria-disabled=${ifDefined(
							isDisabled ? "true" : undefined,
						)}
						role="link"
						tabindex=${ifDefined(!isDisabled ? "0" : undefined)}
					>
						${label}
					</div>
				`,
				() => html`
					<a class="${rootClass}-itemLink" aria-current="page">
						${label}
					</a>
				`
			)}
			${when(isNotLastItem, () =>
				Icon({
					iconName: "ChevronRight100",
					setName: "ui",
					customClasses: [`${rootClass}-itemSeparator`],
				}, context),
			)}
		</li>
	`;
};

export const Template = ({
	rootClass = "spectrum-Breadcrumbs",
	id = getRandomId("breadcrumbs"),
	customStyles = {},
	customClasses = [],
	items = [],
	variant,
	isDragged = false,
} = {}, context = {}) => {
	return html`
		<nav>
			<ul
				class=${classMap({
					[rootClass]: true,
					[`${rootClass}--${variant}`]: typeof variant !== "undefined",
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
				id=${ifDefined(id)}
				style=${styleMap(customStyles)}
			>
				${renderContent(items, {
					callback: BreadcrumbItem,
					context,
					args: {
						rootClass,
						isDragged,
						totalItems: items.length,
					},
				})}
			</ul>
		</nav>
	`;
};
