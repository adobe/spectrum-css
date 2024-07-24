import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = (
	{
		rootClass = "spectrum-InfieldButton",
		customClasses = [],
		size = "m",
		position,
		isQuiet,
		iconName = "Add",
		isDisabled,
		isInvalid,
		isHovered,
		isActive,
		isFocused,
		isStacked,
		tabIndex = 0,
	} = {},
	context = {},
) => {
	return isStacked
		? html`
				<button
					class=${classMap({
						[rootClass]: true,
						[`${rootClass}--size${size?.toUpperCase()}`]:
							typeof size !== "undefined",
						[`${rootClass}--top`]: typeof position !== "undefined",
						[`${rootClass}--quiet`]: isQuiet,
						"is-invalid": isInvalid,
						"is-hover": isHovered,
						"is-active": isActive,
						"is-focus-visible": isFocused,
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
								iconName: "ChevronUp75",
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
						[`${rootClass}--bottom`]: typeof position !== "undefined",
						[`${rootClass}--quiet`]: isQuiet,
						"is-invalid": isInvalid,
						"is-hover": isHovered,
						"is-active": isActive,
						"is-focus-visible": isFocused,
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
								iconName: "ChevronDown75",
								customClasses: [`${rootClass}-icon`],
							},
							context,
						)}
					</div>
				</button>
			`
		: html`
				<button
					class=${classMap({
						[rootClass]: true,
						[`${rootClass}--size${size?.toUpperCase()}`]:
							typeof size !== "undefined",
						[`${rootClass}--${position}`]: typeof position !== "undefined",
						[`${rootClass}--quiet`]: isQuiet,
						"is-invalid": isInvalid,
						"is-hover": isHovered,
						"is-active": isActive,
						"is-focus-visible": isFocused,
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
									iconName,
									customClasses: [`${rootClass}-icon`],
								},
								context,
							),
						)}
					</div>
				</button>
			`;
};

export const InfieldButtonGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Quiet",
			isQuiet: true,
		},
		{
			testHeading: "Position: top",
			position: "top",
		},
		{
			testHeading: "Position: bottom",
			position: "bottom",
		},
		{
			testHeading: "Position: left",
			position: "left",
		},
		{
			testHeading: "Position: right",
			position: "right",
		},
		{
			testHeading: "Stacked",
			isStacked: true,
		},
	],
	stateData: [
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "Hovered",
			isHovered: true,
		},
		{
			testHeading: "Active",
			isActive: true,
		},
		{
			testHeading: "Focused",
			isFocused: true,
		},
		{
			testHeading: "Invalid",
			isInvalid: true,
		},
	],
});
