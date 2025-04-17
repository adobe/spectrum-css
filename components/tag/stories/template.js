import { Template as Avatar } from "@spectrum-css/avatar/stories/template.js";
import { Template as ClearButton } from "@spectrum-css/clearbutton/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Container, getRandomId } from "@spectrum-css/preview/decorators";
import { Template as Thumbnail } from "@spectrum-css/thumbnail/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Tag",
	size = "m",
	iconName = "",
	avatarUrl = "",
	thumbnailUrl = "",
	label = "",
	isSelected = false,
	isEmphasized = false,
	isDisabled = false,
	isHovered = false,
	isFocused = false,
	isActive = false,
	hasClearButton = false,
	id = getRandomId("tag"),
	customClasses = [],
	customStyles = {},
} = {}, context = {}) => {
	const { updateArgs } = context;

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				"is-emphasized": isEmphasized,
				"is-disabled": isDisabled,
				"is-selected": isSelected,
				"is-hover": isHovered,
				"is-focus-visible": isFocused,
				"is-active": isActive,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			tabindex=${isDisabled ? "-1" : "0"}
			style=${styleMap(customStyles)}
			@click=${function() {
				updateArgs({ isSelected: !isSelected });
			}}
			@focusin=${function() {
				updateArgs({ isFocused: true });
			}}
			@focusout=${function() {
				updateArgs({ isFocused: false });
			}}
		>
			${when(avatarUrl, () =>
				Avatar({
					image: avatarUrl,
					size: "50",
				}, context)
			)}
			${when(iconName, () =>
				Icon({
					size,
					iconName,
					setName: "workflow",
					customClasses: [`${rootClass}-itemIcon`],
				}, context)
			)}
			${when(thumbnailUrl, () =>
				Thumbnail({
					image: thumbnailUrl,
					size: "50",
				}, context)
			)}
			<span class="${rootClass}-itemLabel">${label}</span>
			${when(hasClearButton, () =>
				ClearButton({
					size,
					customClasses: [`${rootClass}-clearButton`],
					onclick: (evt) => {
						const el = evt.target;
						if (!el) return;

						const wrapper = el.closest(rootClass);
						wrapper.parentNode.removeChild(wrapper);
					},
				}, context)
			)}
		</div>
	`;
};

export const TagsDefaultOptions = ({
	...args
}, context ) => Container({
	withBorder: false,
	direction: "row",
	wrapperStyles: {
		columnGap: "12px",
	},
	content: html`
		${Template(args, context)}
		${Template({
				...args,
				hasIcon: true,
				iconName: "CheckmarkCircle"
			}, context)}
		${Template({
			...args,
				hasAvatar: true,
				avatarUrl: "example-ava.png",
			}, context)}`,
}, context);

export const SelectedTemplate = (args, context) => Container({
	withBorder: false,
	direction: "row",
	wrapperStyles: {
		rowGap: "12px",
	},
	content: html`${[
		{ isSelected: true, isDisabled: false, heading: "Selected" },
	].map(({isSelected, heading}) => Container({
		withBorder: false,
		heading: heading,
		content: TagsDefaultOptions({
			...args,
			isSelected
		})
	}, context))}`
}, context);
