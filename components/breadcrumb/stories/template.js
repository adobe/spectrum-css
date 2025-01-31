import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Container } from "@spectrum-css/preview/decorators";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Breadcrumbs",
	customClasses = [],
	items = [],
	size = "m",
	variant,
	isDragged = false,
	titleHeadingSize,
	showTruncatedMenu = false,
	showRootContext = false,
	truncatedMenuIsDisabled = false,
	rootItemText = "Nav root",
} = {}, context = {}) => {
	/**
	 * Build array of breadcrumb items.
	 * - The presence of the root item and truncated menu are dependent upon controls.
	 * - The rest of the items, including the current item, come from the `items` array.
	 */
	const breadcrumbItems = [
		...(showTruncatedMenu == false || showRootContext == true) ? [{
			label: rootItemText,
		}] : [],
		...(showTruncatedMenu == true) ? [{
			iconName: "FolderOpen",
			iconSet: "workflow",
			isDragged: true,
		}] : [],
		...items,
	];

	return html`
		<nav>
			<ul
				class=${classMap({
					[rootClass]: true,
					[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined" && size !== "m",
					[`${rootClass}--${variant}`]: typeof variant !== "undefined",
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
			>
				${breadcrumbItems.map((item, idx, arr) => {
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
										isDisabled: isDisabled || truncatedMenuIsDisabled,
										isQuiet: true,
										customIconClasses: [`${rootClass}-folder`],
										size: variant === "multiline" ? "s" : size,
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
												"is-focus-visible": item.isFocused,
												"is-hover": item.isHovered,
											})}
											aria-disabled=${ifDefined(
												isDisabled ? "true" : undefined,
											)}
											role="link"
											tabindex=${ifDefined(!isDisabled ? "0" : undefined)}
										>
											${label}
										</div>`,
									() =>
										html`<a
												class=${classMap({
													[`${rootClass}-itemLink`]: true,
													"is-hover": item.isHovered,
												})}
												aria-current="page"
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
};

/**
 * Displays all preferred sizes for breadcrumb title headings used with the multiline variant.
 */
export const BreadcrumbTitleHeadings = (args, context) => Container({
	withBorder: false,
	direction: "column",
	wrapperStyles: {
		rowGap: "12px",
	},
	content: html`${[undefined, "s", "m", "l", "xl"].map((titleHeadingSize) => Container({
		withBorder: true,
		heading: typeof titleHeadingSize != "undefined"
			? `Heading size: ${titleHeadingSize}`
			: "Default - no heading element or classes",
		content: Template({
			...args,
			titleHeadingSize,
		})
	}, context))}`,
}, context);
