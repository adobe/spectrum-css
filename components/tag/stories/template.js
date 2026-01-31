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
	size = "s",
	iconName,
	avatarUrl,
	thumbnailUrl,
	label,
	isSelected = false,
	isEmphasized = false,
	isDisabled = false,
	isHovered = false,
	isKeyboardFocused = false,
	isActive = false,
	isReadOnly = false,
	isRemovable = false,
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
				[`${rootClass}--emphasized`]: isEmphasized,
				"is-disabled": isDisabled,
				"is-selected": isSelected,
				"is-hover": isHovered,
				"is-focus-visible": isKeyboardFocused,
				"is-active": isActive,
				"is-readOnly": isReadOnly,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			tabindex=${isDisabled ? "-1" : "0"}
			style=${styleMap(customStyles)}
			@click=${function() {
				if (isReadOnly || isDisabled) return;
				updateArgs({ isSelected: !isSelected });
			}}
		>
			${when(avatarUrl, () =>
				Avatar({
					size: ({
						s: "50",
						m: "75",
						l: "100",
					}[size] || "75"),
					image: avatarUrl,
				}, context)
			)}
			${when(iconName, () =>
				Icon({
					size,
					iconName,
					setName: "workflow",
				}, context)
			)}
			${when(thumbnailUrl, () =>
				Thumbnail({
					size: ({
						s: "50",
						m: "75",
						l: "100",
					}[size] || "75"),
					imageURL: thumbnailUrl,
				}, context)
			)}
			<span class="${rootClass}-itemLabel">${label}</span>
			${when(isRemovable, () =>
				ClearButton({
					size,
					isDisabled,
					isFocusable: false,
					customClasses: [`${rootClass}-clearButton`],
					onclick: (evt) => {
						const button = evt.currentTarget;
						if (!button) return;

						const wrapper = button.closest(`.${rootClass}`);
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
		${args.isRemovable ? "" : Template({
			...args,
			isRemovable: true,
			}, context)}
		${Template({
				...args,
				hasIcon: true,
				iconName: "CheckmarkCircle",
			}, context)}
			${Template({
				...args,
				hasThumbnail: true,
				thumbnailUrl: "example-card-landscape.png",
			}, context)}
		${Template({
			...args,
				hasAvatar: true,
				avatarUrl: "example-ava.png",
			}, context)}`,
}, context);
