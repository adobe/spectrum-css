import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";

import { Container } from "@spectrum-css/preview/decorators";
import "../index.css";

export const Template = (
	{
		rootClass = "spectrum-InfieldButton",
		customClasses = [],
		size = "m",
		isQuiet,
		iconName = "ChevronDown",
		isDisabled,
		isInvalid,
		isHovered,
		isActive,
		isPaired,
		tabIndex = 0,
	} = {},
	context = {},
) => {
	let iconSize = size === "s" ? "75" : size === "l" ? "200" : size === "xl" ? "300" : "100";

	// TODO: This is a temporary solution to support the iconSet changes in the controls in order to show an "add" workflow icon.
	// TODO: if we update the UI icons to include the correct UI "add" icon, we should be able to just remove all this extra logic.
	const iconMap = {
		ChevronDown: { name: "ChevronDown", set: "ui" },
		Cross: { name: "Cross", set: "ui" },
		Dash: { name: "Dash", set: "ui" },
		Add: { name: "Add", set: "workflow" }
	};

	const selectedIcon = iconMap[iconName] || iconMap.ChevronDown;
	let iconNameWithSize = selectedIcon.set === "ui" ? `${selectedIcon.name}${iconSize}` : selectedIcon.name;

	return isPaired
		? html`
			<div class="${rootClass}-paired">
			<button
					class=${classMap({
						[rootClass]: true,
						[`${rootClass}--size${size?.toUpperCase()}`]:
							typeof size !== "undefined",
						[`${rootClass}--quiet`]: isQuiet,
						"is-invalid": isInvalid,
						"is-hover": isHovered,
						"is-active": isActive,
						...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
					})}
					?disabled=${isDisabled}
					aria-haspopup="listbox"
					type="button"
					tabindex=${tabIndex}
					aria-label="minus"
				>
					<div class="${rootClass}-fill">
						${Icon(
							{
								size,
								iconName: "Dash100",
								setName: "ui",
								customClasses: [`${rootClass}-icon`],
							},
							context,
						)}
					</div>
				</button>
				<button
					class=${classMap({
						[rootClass]: true,
						[`${rootClass}--size${size?.toUpperCase()}`]:
							typeof size !== "undefined",
						[`${rootClass}--quiet`]: isQuiet,
						"is-invalid": isInvalid,
						"is-hover": isHovered,
						"is-active": isActive,
						...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
					})}
					?disabled=${isDisabled}
					aria-haspopup="listbox"
					type="button"
					tabindex=${tabIndex}
					aria-label="add"
				>
					<div class="${rootClass}-fill">
						${Icon(
							{
								size,
								iconName: "Add",
								setName: "workflow",
								customClasses: [`${rootClass}-icon`],
							},
							context,
						)}
					</div>
				</button>
			</div>
			`
		: html`
				<button
					class=${classMap({
						[rootClass]: true,
						[`${rootClass}--size${size?.toUpperCase()}`]:
							typeof size !== "undefined",
						[`${rootClass}--quiet`]: isQuiet,
						"is-invalid": isInvalid,
						"is-hover": isHovered,
						"is-active": isActive,
						...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
					})}
					?disabled=${isDisabled}
					aria-haspopup="listbox"
					type="button"
					tabindex=${tabIndex}
				>
					<div class="${rootClass}-fill">
						${when(iconName, () =>
							Icon(
								{
									size,
									iconName: iconNameWithSize,
									setName: selectedIcon.set,
									customClasses: [`${rootClass}-icon`],
								},
								context,
							),
						)}
					</div>
				</button>
			`;
};

export const InfieldButtonGroupVariant = (args, context) => Container({
	withBorder: false,
	direction: "row",
	content: [
		Container({
			withBorder: false,
			direction: "column",
			heading: "Default",
			content: Template(args, context),
		}),
		Container({
			withBorder: false,
			direction: "column",
			heading: "Disabled",
			content: Template({ ...args, isDisabled: true }, context),
		}),
	]
}, context);

export const InfieldButtonIcons = (args, context) => Container({
	withBorder: false,
	direction: "row",
	content: [
		Template(args, context),
		Template({...args, iconName: "Cross", }, context),
		Template({...args, iconName: "Dash", }, context),
		Template({...args, iconName: "Add", iconSet: "workflow"}, context),
	],
}, context);
