import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Thumbnail } from "@spectrum-css/thumbnail/stories/template.js";

import "@spectrum-css/treeview";

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
	thumbnail,
	items,
	customClasses = [],
	testId,
}) => {
	if (type === "heading") {
		return html`
			<li
				id=${id}
				data-testid=${ifDefined(testId)}
				class=${classMap({
					[`${rootClass}-section`]: true,
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
			>
				<div class="${rootClass}-heading">
					<span class="${rootClass}-itemLabel">${label}</span>
				</div>
				${typeof items !== "undefined" && items.length > 0
					? Template({
						items,
						size,
						rootClass: "spectrum-TreeView",
						customClasses: ["is-opened"],
					})
					: ""}
			</li>
		`;
	}

	return html`
		<li
			id=${ifDefined(id)}
			data-testid=${ifDefined(testId)}
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
				${when(items, () => Icon({ size, iconName: "ChevronRight", customClasses: [`${rootClass}-itemIndicator`] }))}
				${when(icon, () => Icon({ size, iconName: icon, customClasses: [`${rootClass}-itemIcon`] }))}
				${when(thumbnail, () => Thumbnail({
					...thumbnail,
					size: size == "s"  ? "200"
						: size == "m"  ? "200"
						: size == "l"  ? "400"
						: size == "xl" ? "600"
						: "300",
					isLayer: true,
					isSelected,
					customClasses: [`${rootClass}-itemThumbnail`],
				}))}
				<span class="${rootClass}-itemLabel">${label}</span>
			</a>
			${when(items && items.length > 0, () => Template({ items, size, rootClass: "spectrum-TreeView", customClasses: ["is-opened"] }))}
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
}) => {
	return html`
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
			${repeat(items, (item) => item.id, (item) => TreeViewItem({ ...item, size }))}
		</ul>
	`;
};
