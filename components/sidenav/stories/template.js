import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { repeat } from "lit/directives/repeat.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "@spectrum-css/sidenav";

export const SideNavItem = ({
	rootClass = "spectrum-SideNav",
	link,
	title,
	isSelected,
	isDisabled,
	id,
	icon,
	customClasses = [],
	...globals
}) => {
	return html`
		<li
			id=${id}
			class=${classMap({
				[`${rootClass}-item`]: true,
				"is-selected": isSelected,
				"is-disabled": isDisabled,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
		>
			<a href=${link} class="${rootClass}-itemLink">
				${icon
					? Icon({
							...globals,
							iconName: icon,
							customClasses: [`${rootClass}-itemIcon`],
					  })
					: ""}
				${title}
			</a>
		</li>
	`;
};

export const Template = ({
	rootClass = "spectrum-SideNav",
	customClasses = [],
	variant,
	items = [],
	...globals
}) => {
	return html`
		<nav>
			<ul
				class=${classMap({
					[rootClass]: true,
					[`${rootClass}--${variant}`]: typeof variant !== "undefined",
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
			>
				${repeat(
					items,
					(item) => item.id,
					(item) => {
						if (typeof item.subitems !== "undefined") {
							return html`
								<li
									class=${classMap({
										[`${rootClass}-item`]: true,
										"is-selected": item.isSelected,
										"is-disabled": item.isDisabled,
									})}
								>
									${item.category
										? html`<h2
												class="${rootClass}-heading"
												id="${item.id}-heading"
										  >
												${item.category}
										  </h2>`
										: html`<a href=${item.link} class="${rootClass}-itemLink"
												>${item.title}</a
										  >`}
									<ul
										class=${rootClass}
										aria-labelledby=${ifDefined(item.category)
											? `${item.id}-heading`
											: ""}
									>
										${repeat(
											item.subitems,
											(item) => item.id,
											(item) => {
												return SideNavItem({
													...globals,
													...item,
												});
											}
										)}
									</ul>
								</li>
							`;
						} else {
							return SideNavItem({
								...globals,
								...item,
							});
						}
					}
				)}
			</ul>
		</nav>
	`;
};
