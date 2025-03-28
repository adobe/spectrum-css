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
		iconSet = "ui",
		isDisabled,
		isInvalid,
		isHovered,
		isActive,
		isStacked,
		tabIndex = 0,
	} = {},
	context = {},
) => {
	let iconSize = size === "s" ? "75" : size === "l" ? "200" : size === "xl" ? "300" : "100";
	let iconNameWithSize = `${iconName}${iconSize}`;
	return isStacked
		? html`
			<div class="${rootClass}-stacked">
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
									setName: iconSet,
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
