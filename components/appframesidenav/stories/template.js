import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Button } from "@spectrum-css/button/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { useArgs } from "@storybook/preview-api";
import { when } from "lit/directives/when.js";

import "@spectrum-css/appframesidenav/index.css";

export const Template = ({
	rootClass = "spectrum-AppFrameSideNav",
	showTopButton = true,
	topButtonText = "Create",
	topButtonWorkflowIconName = "Add",
	items = [],
	isMinimized = false,
	id,
	customClasses = [],
	customStyles = {},
}) => {
	const [, updateArgs] = useArgs();

	const topButtonMarkup = Button({
		variant: "accent",
		label: topButtonText,
		iconName: topButtonWorkflowIconName,
		hideLabel: isMinimized,
		customClasses: ["spectrum-AppFrameSideNav-button"],
	});

	return html`
		<nav
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--minimized`]: isMinimized,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			style=${ifDefined(styleMap(customStyles))}
		>
			${when(showTopButton && topButtonText, () => topButtonMarkup)}
			<ul class="spectrum-AppFrameSideNav-list">
				${(items.length > 0 ? items : defaultSideNavItems).map(navItem =>
					html`<li class=${classMap({
						[`${rootClass}-list-item`]: true,
						[`${rootClass}-list-item--current`]: navItem.isCurrent,
						[`${rootClass}-list-item--endSectionStart`]: navItem.isEndSectionStart,
					})}>
						<a
							class="spectrum-AppFrameSideNav-list-item-link"
							href="#"
							@click=${demoCurrentItemOnClick}
						>
							<span class="spectrum-AppFrameSideNav-list-item-icon">
								${Icon({
									iconName: navItem.workflowIconName,
									setName: "workflow",
								})}
							</span>
							<span class="spectrum-AppFrameSideNav-list-item-label">${navItem.label}</span>
						</a>
					</li>`
				)}
			</ul>
			${ActionButton({
				iconName: isMinimized ? "ChevronDoubleRight" : "ChevronDoubleLeft",
				isQuiet: true,
				hideLabel: true,
				customClasses: [`${rootClass}-expand-button`],
				onclick: () => {
					// Toggle minimized or expanded side nav on click.
					updateArgs?.({ isMinimized: !isMinimized });
				},
			})}
		</nav>
	`;
};

/**
 * Add the "--current" nav item class after click on a nav item, and removes from all other nav items.
 * Used only for Spectrum CSS Storybook demonstration purposes.
 */
const demoCurrentItemOnClick = (e) => {
	e.preventDefault();
	e?.target?.closest(".spectrum-AppFrameSideNav-list")?.querySelectorAll(".spectrum-AppFrameSideNav-list-item")?.forEach(item => {
		item?.classList.remove("spectrum-AppFrameSideNav-list-item--current");
	});
	e?.target?.closest(".spectrum-AppFrameSideNav-list-item")?.classList.add("spectrum-AppFrameSideNav-list-item--current");
};

/**
 * Fallback data for the side navigation items.
 * Array of objects with `label` and `workflowIconName`.
 * Optionally:
 * - `isCurrent` marks the current page.
 * - `isEndSectionBoundary` marks the first nav item that should be aligned at the bottom "end section". This should only be applied to one item.
 */
export const defaultSideNavItems = [
	{
		label: "Home",
		isCurrent: true,
		workflowIconName: "Home",
	},
	{
		label: "Files",
		workflowIconName: "Folder",
	},
	{
		label: "Brands",
		workflowIconName: "Brand",
	},
	{
		label: "Discover",
		workflowIconName: "Discover",
	},
	{
		label: "Schedule",
		workflowIconName: "Calendar",
	},
	{
		label: "Learn",
		workflowIconName: "Lightbulb",
	},
	{
		label: "Plugins",
		workflowIconName: "Plugin",
	},
];
