import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = (
	{
		rootClass = "spectrum-Breadcrumbs",
		customClasses = [],
		items = [],
		variant = "medium",
		isDragged = false,
		titleHeadingSize,
	} = {},
	context = {},
) => html`
	<nav>
		<ul
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${variant}`]: typeof variant !== "undefined" || variant !== "medium",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
		>
			${items.map((item, idx, arr) => {
				const { label, isDisabled, iconName, iconSet } = item;
				return html` <li
					class=${classMap({
						[`${rootClass}-item`]: true,
						"is-dragged": isDragged && item.isDragged,
					})}
				>
					${when(
						iconName,
						() =>
							ActionButton(
								{
									iconName,
									iconSet,
									isDisabled,
									isQuiet: true,
									customIconClasses: [`${rootClass}-folder`],
									size: {
										medium: "m",
										large: "l",
										multiline: "s",
									}[variant],
								},
								context,
							),
						() =>
							when(
								idx !== arr.length - 1,
								() =>
									html`<div
										class=${classMap({
											[`${rootClass}-itemLink`]: true,
											"is-disabled": isDisabled,
										})}
										aria-disabled=${ifDefined(isDisabled ? "true" : undefined)}
										role="link"
										tabindex=${ifDefined(!isDisabled ? "0" : undefined)}
									>
										${label}
									</div>`,
								() =>
									html`<a class="${rootClass}-itemLink" aria-current="page"
										>${ typeof titleHeadingSize == "undefined" ? label : Typography({
											semantics: "heading",
											size: titleHeadingSize,
											content: [label],
										})}</a
									>`,
							),
					)}
					${when(idx !== arr.length - 1, () =>
						Icon(
							{
								iconName: variant == "multiline" ? "ChevronRight75" : "ChevronRight100",
								setName: "ui",
								customClasses: [`${rootClass}-itemSeparator`],
							},
							context,
						),
					)}
				</li>`;
			})}
		</ul>
	</nav>
`;

/**
 * Displays all preferred sizes for breadcrumb title headings used with the multiline variant.
 * 
 * TODO: make sure of Container() with headings when S2 is in sync with the main branch again. 
 */
export const BreadcrumbTitleHeadings = (args) => html`
	<div style="display: flex; flex-direction: column; gap: 16px;">
		${[undefined, "s", "m", "l", "xl"].map((titleHeadingSize) => html`
			${Typography({
				semantics: "detail",
				size: "s",
				content: [
					typeof titleHeadingSize != "undefined"
						? `Heading size: ${titleHeadingSize}`
						: "Default - no heading element or classes"
				],
				customClasses: ["chromatic-ignore"],
			})}
			${Template({
				...args,
				titleHeadingSize,
			})}
		`)}
	</div>
`;