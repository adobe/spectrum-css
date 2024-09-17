import { Template as Avatar } from "@spectrum-css/avatar/stories/template.js";
import { Template as ClearButton } from "@spectrum-css/clearbutton/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Container, getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Tag",
	size = "m",
	iconName,
	avatarUrl,
	label,
	isSelected = false,
	isEmphasized = false,
	isDisabled = false,
	isInvalid = false,
	hasClearButton = false,
	id = getRandomId("tag"),
	customClasses = [],
	customStyles = {},
} = {}, context = {}) => {
	if(isInvalid) iconName = "Alert";

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				"is-emphasized": isEmphasized,
				"is-disabled": isDisabled,
				"is-invalid": isInvalid,
				"is-selected": isSelected,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			tabindex=${isDisabled ? "-1" : "0"}
			style=${styleMap(customStyles)}
		>
			${when(avatarUrl && !isInvalid, () =>
				Avatar({
					image: avatarUrl,
					size: "50",
				}, context)
			)}
			${when(iconName || isInvalid, () =>
				Icon({
					size,
					iconName,
					setName: "workflow",
					customClasses: [`${rootClass}-itemIcon`],
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
		${Template({
      ...args,
    }, context )}
    ${!args.isInvalid ? 
			Template({
				...args,
				hasIcon: true,
				iconName: "CheckmarkCircle"
			}, context )
			: ""}
    ${Template({
      ...args,
			hasClearButton: true
    }, context )}
		${!args.isInvalid ?
			Template({
      ...args,
				hasAvatar: true,
				avatarUrl: "example-ava.png",
				hasClearButton: true
			}, context )
			: ""}
	`,
});

export const StandardTemplate = (args, context) => Container({
	withBorder: false,
	direction: "row",
	wrapperStyles: {
		rowGap: "12px",
	},
	content: html`${[
		{ isSelected: false, isDisabled: false, heading: "Default" },
		{ isSelected: true, isDisabled: false, heading: "Selected" },
		{ isSelected: false, isDisabled: false, isInvalid: true, heading: "Invalid" },
		{ isSelected: false, isDisabled: true, heading: "Disabled" },
		{ isSelected: true, isDisabled: false, isInvalid: true, heading: "Selected + Invalid" },
		{ isSelected: false, isDisabled: false, isEmphasized: true, heading: "Emphasized" }
	].map(({isSelected, isDisabled, heading, isEmphasized, isInvalid}) => Container({
		withBorder: false,
		heading: heading,
		content: TagsDefaultOptions({
			...args,
			isSelected,
			isDisabled,
			isEmphasized,
			isInvalid
		})
	}, context ))}`
});

export const RemovableTagsOptions = ({
	...args
}, context ) => Container({
	withBorder: false,
	direction: "row",
	wrapperStyles: {
		columnGap: "12px",
	},
	content: html`
    ${!args.isInvalid ? 
			Template({
				...args,
				hasClearButton: true
			}, context )
			: ""}
		${Template({
      ...args,
				hasIcon: true,
				iconName: "CheckmarkCircle",
				hasClearButton: true
			}, context )}
	`,
});

export const RemovableTemplate = (args, context) => Container({
	withBorder: false,
	direction: "row",
	wrapperStyles: {
		rowGap: "12px",
	},
	content: html`${[
		{ isSelected: false, isDisabled: false, heading: "Default" },
		{ isSelected: true, isDisabled: false, heading: "Selected" },
		{ isSelected: false, isDisabled: false, isInvalid: true, heading: "Invalid" },
		{ isSelected: false, isDisabled: true, heading: "Disabled" },
		{ isSelected: true, isDisabled: false, isInvalid: true, heading: "Selected + Invalid" },
	].map(({isSelected, isDisabled, heading, isInvalid}) => Container({
		withBorder: false,
		heading: heading,
		content: RemovableTagsOptions({
			...args,
			isSelected,
			isDisabled,
			isInvalid
		})
	}, context ))}`
});