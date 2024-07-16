import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Variants } from "@spectrum-css/preview/decorators";
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
} = {}, context = {}) => {
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
						size,
						setName: "ui",
						iconName: "ChevronRight",
						customClasses: [`${rootClass}-itemIndicator`],
					}, context)
				)}
				${when(icon, () =>
					Icon({
						size,
						iconName: icon,
						setName: iconSet,
						customClasses: [`${rootClass}-itemIcon`],
					}, context)
				)}
				${when(thumbnail, () =>
					Thumbnail({
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
				...item,
				size,
			}, context),
		)}
	</ul>
`;

export const TreeViewGroup = Variants({
	Template,
	testData: [
		{},
		{
			testHeading: "Quiet",
			isQuiet: true,
		},
		{
			testHeading: "Folders and files",
			items: [
				{
					id: "label1",
					label: "Label 1",
					link: "#",
					icon: "Document",
				},
				{
					id: "group1",
					label: "Group 1",
					link: "#",
					isOpen: true,
					isSelected: true,
					icon: "Folder",
					items: [
						{
							id: "label2",
							label: "Label 2",
							link: "#",
							icon: "Document",
						},
						{
							id: "label3",
							label: "Label 3",
							link: "#",
							icon: "Document",
						},
						{
							id: "label4",
							label: "This example has longer text. Per the guidelines, long text will truncate with an ellipsis, and the full text should be available in a tooltip.",
							link: "#",
							icon: "Document",
						},
					],
				},
				{
					id: "group2",
					label: "Group 2",
					link: "#",
					icon: "Folder",
					items: [
						{
							id: "label3",
							label: "Label 3",
							link: "#",
							icon: "Document",
						},
						{
							id: "group3",
							label: "Group 3",
							link: "#",
							icon: "Folder",
							items: [
								{
									id: "label4",
									label: "Label 4",
									link: "#",
									icon: "Document",
								},
							],
						},
					],
				},
			],
		},
		{
			testHeading: "Thumbnails",
			variant: "thumbnail",
			items: [
				{
					id: "group1",
					label: "Group 1",
					link: "#",
					isOpen: true,
					thumbnail: {
						imageURL: "thumbnail.png",
						altText: "Woman crouching",
					},
					items: [
						{
							id: "label2",
							label: "Label 2",
							link: "#",
							isSelected: true,
							thumbnail: {
								imageURL: "thumbnail.png",
								altText: "Woman crouching",
							},
						},
						{
							id: "label3",
							label: "Label 3",
							link: "#",
							thumbnail: {
								imageURL: "flowers.png",
								altText: "Flowers",
							},
						},
					],
				},
			],
		},
		{
			testHeading: "With sections",
			items: [
				{
					type: "heading",
					label: "Section 1",
					items: [
						{
							id: "group1",
							label: "Group 1",
							link: "#",
							isOpen: true,
							items: [
								{
									id: "label2",
									label: "Label 2",
									link: "#",
								},
								{
									id: "label3",
									label: "Label 3",
									link: "#",
								},
							],
						},
					],
				},
				{
					type: "heading",
					label: "Section 2",
					items: [
						{
							id: "label4",
							label: "Label 4",
							link: "#",
						},
					]
				},
			],
		}, {
			testHeading: "With drop target",
			items: [
				{
					id: "label2",
					label: "Label 2",
					link: "#",
					isDropTarget: true,
				},
				{
					id: "label3",
					label: "Label 3",
					link: "#",
				},
			],
		}, {
			testHeading: "Flat markup",
			items: [
				{
					id: "label1",
					label: "Label 1. This example has longer text. Per the guidelines, long text will truncate with an ellipsis, and the full text should be available in a tooltip.",
					link: "#",
					isSelected: true,
				},
				{
					id: "group1",
					label: "Group 1",
					link: "#",
					isOpen: true,
					items: [],
				},
				{
					id: "label2",
					label: "Label 2",
					link: "#",
					isDisabled: true,
					customClasses: ["spectrum-TreeView-item--indent1"],
				},
				{
					id: "label3",
					label: "Label 3",
					link: "#",
					customClasses: ["spectrum-TreeView-item--indent1"],
				},
				{
					id: "label4",
					label: "Label 4",
					link: "#",
				},
				{
					id: "group2",
					label: "Group 2",
					link: "#",
					isOpen: true,
					items: [],
				},
				{
					id: "label5",
					label: "Label 5",
					link: "#",
					customClasses: ["spectrum-TreeView-item--indent1"],
				},
				{
					id: "group3",
					label: "Group 3",
					link: "#",
					isOpen: true,
					items: [],
					customClasses: ["spectrum-TreeView-item--indent1"],
				},
				{
					id: "label6",
					label: "Label 6",
					link: "#",
					customClasses: ["spectrum-TreeView-item--indent2"],
				},
			],
		}, {
			testHeading: "Overflow behavior",
			items: [
				{
					id: "label1",
					label: "Label 1",
					link: "#",
				},
				{
					id: "label1",
					label: "This example has longer text. Per the guidelines, long text will truncate with an ellipsis, and the full text should be available in a tooltip.",
					link: "#",
					isSelected: true,
				},
				{
					id: "label1",
					label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
					link: "#",
				},
			],
			customStyles: {
				maxInlineSize: "600px",
			},
		}
	],
	sizeDirection: "row",
});
