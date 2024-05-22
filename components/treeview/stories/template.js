import { html, nothing } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Thumbnail } from "@spectrum-css/thumbnail/stories/template.js";

import "../index.css";

const TreeViewItem = ({
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
	indicatorIcon,
	items,
	customClasses = [],
}) => {
	const hasItems = typeof items !== "undefined" && items.length > 0;

	const nestedItems = hasItems ? Template({
		items,
		size,
		rootClass: "spectrum-TreeView",
		customClasses: ["is-opened"],
	}) : nothing;

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
				${nestedItems}
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
				${when(hasItems, () => indicatorIcon)}
				${icon}
				${thumbnail}
				<span class="${rootClass}-itemLabel">${label}</span>
			</a>
			${nestedItems}
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
	const hasItems = typeof items !== "undefined" && items.length > 0;

	if (!hasItems) {
		console.warn("TreeView: items required");
		return html``;
	}

	const indicatorIcon = Icon({
		size,
		setName: "ui",
		iconName: "ChevronRight",
		customClasses: [`${rootClass}-itemIndicator`],
	});

	const icons = items.map((item) => Icon({
		size,
		iconName: item.icon,
		setName: item.iconSet,
		customClasses: [`${rootClass}-itemIcon`],
	}));

	const thumbnails = items.map((item) => item.thumbnail ? Thumbnail({
		...(item.thumbnail),
		size: size == "s"  ? "200"
			: size == "m"  ? "200"
				: size == "l"  ? "400"
					: size == "xl" ? "600"
						: "300",
		isLayer: true,
		customClasses: [`${rootClass}-itemThumbnail`],
	}) : nothing);

	const treeItems = items.map((item, idx) => TreeViewItem({
		...item,
		indicatorIcon,
		icon: icons[idx],
		thumbnail: thumbnails[idx],
		size,
	}));

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
		${repeat(treeItems, (item) => item.id, (_, idx) => treeItems[idx])}
	</ul>
	`;
};
