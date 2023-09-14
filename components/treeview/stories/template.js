import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { repeat } from "lit/directives/repeat.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Thumbnail } from "@spectrum-css/thumbnail/stories/template.js";

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
	thumbnail,
	items,
	customClasses = [],
	...globals
}) => {
	if (type === "heading") {
		return html`
			<div class="${rootClass}-heading">
				<span class="${rootClass}-itemLabel">${label}</span>
			</div>
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
				${typeof items !== "undefined"
					? Icon({
							...globals,
							size,
							iconName: "Chevron",
							customClasses: [`${rootClass}-itemIndicator`],
					  })
					: ""}
				${icon
					? Icon({
							...globals,
							size,
							iconName: icon,
							customClasses: [`${rootClass}-itemIcon`],
					  })
					: ""}
				${thumbnail
					? Thumbnail({
							...globals,
							...thumbnail,
							size: "s",
							customClasses: [`${rootClass}-itemThumbnail`],
					  })
					: ""}
				<span class="${rootClass}-itemLabel">${label}</span>
			</a>
			${typeof items !== "undefined"
				? Template({
						...globals,
						items: items,
						size,
						rootClass: "spectrum-TreeView",
						customClasses: ["is-opened"],
				  })
				: ""}
		</li>
	`;
};

export const Template = ({
	rootClass = "spectrum-TreeView",
	customClasses = [],
	size = "m",
	variant,
	isQuiet,
	items,
	...globals
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
		>
			${repeat(
				items,
				(item) => item.id,
				(item) => {
					return TreeViewItem({
						...globals,
						...item,
					});
				}
			)}
		</ul>
	`;
};
