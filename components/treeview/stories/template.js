import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Thumbnail } from "@spectrum-css/thumbnail/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const TreeViewItem = ({
	rootClass = "spectrum-TreeView",
	size = "m",
	type,
	id,
	link,
	label,
	isSelected,
	isDisabled,
	isOpen,
	isDropTarget,
	icon,
	iconSet,
	thumbnail,
	items,
	customClasses = [],
	...globals
}, context) => {
	if (type === "heading") {
		return html`
			<li
				id=${id}
				class=${classMap({
					[`${rootClass}-section`]: true,
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
			>
				<div class="${rootClass}-heading">
					<span class="${rootClass}-itemLabel">${label}</span>
				</div>
				${when(typeof items !== "undefined" && items.length > 0, () =>
					Template({
						...globals,
						items: items,
						size,
						rootClass: "spectrum-TreeView",
						customClasses: ["is-opened"],
					}, context)
				)}
			</li>
		`;
	}

	return html`
		<li
			id=${id}
			class=${classMap({
				[`${rootClass}-item`]: true,
				"is-selected": isSelected,
				"is-disabled": isDisabled,
				"is-open": isOpen,
				"is-drop-target": isDropTarget,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
		>
			<a
				href=${link}
				target="_self"
				class="${rootClass}-itemLink"
				@click=${onclick ??
				function (evt) {
					if (isDisabled || !evt || !evt.target || typeof items === "undefined")
						return;
					evt.preventDefault();
					const closest = evt.target.closest(`.${rootClass}-item`);
					if (!closest) return;
					closest.classList.toggle("is-open");
				}}
			>
				${when(typeof items !== "undefined", () =>
					Icon({
						...globals,
						size,
						setName: "ui",
						iconName: "ChevronRight",
						customClasses: [`${rootClass}-itemIndicator`],
					}, context)
				)}
				${when(icon, () =>
					Icon({
						...globals,
						size,
						iconName: icon,
						setName: iconSet,
						customClasses: [`${rootClass}-itemIcon`],
					}, context)
				)}
				${when(thumbnail, () =>
					Thumbnail({
						...globals,
						...thumbnail,
						size: size == "s"  ? "200"
							: size == "m"  ? "200"
							: size == "l"  ? "400"
							: size == "xl" ? "600"
							: "300",
						isLayer: true,
						isSelected,
						customClasses: [`${rootClass}-itemThumbnail`],
					}, context)
				)}
				<span class=${classMap({
					[`${rootClass}-itemLabel`]: true
				})}>
					${label}
				</span>
			</a>
			${when(typeof items !== "undefined" && items.length > 0, () =>
				Template({
					...globals,
					items: items,
					size,
					rootClass: "spectrum-TreeView",
					customClasses: ["is-opened"],
				}, context)
			)}
		</li>
	`;
};

export const Template = ({
	rootClass = "spectrum-TreeView",
	customClasses = [],
	customStyles = {},
	size = "m",
	variant,
	isQuiet,
	items,
	...globals
}, context) => html`
	<ul
		class=${classMap({
			[rootClass]: true,
			[`${rootClass}--size${size?.toUpperCase()}`]:
				typeof size !== "undefined",
			[`${rootClass}--${variant}`]: typeof variant !== "undefined",
			[`${rootClass}--quiet`]: isQuiet,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		style=${styleMap(customStyles)}
	>
		${repeat(
			items,
			(item) => item.id,
			(item) => TreeViewItem({
				...globals,
				...item,
				size,
			}, context),
		)}
	</ul>
`;
