import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-PickerButton",
	id = getRandomId("pickerbutton"),
	size = "m",
	label,
	position,
	iconType = "ui",
	iconName = "ChevronDown",
	isDisabled = false,
	isFocused = false,
	isOpen = false,
	isQuiet = false,
	customClasses = [],
	isRounded = false,
	customStyles = {},
	onclick,
} = {}, context = {}) => {
	const { updateArgs } = context;

	return html`
		<button
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--textuiicon`]: label && iconType === "ui",
				[`${rootClass}--uiicononly`]: !label && iconType === "ui",
				[`${rootClass}--icononly`]: !label && iconType !== "ui",
				[`${rootClass}--${position}`]: typeof position !== "undefined",
				[`${rootClass}--rounded`]: isRounded,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				"is-disabled": isDisabled,
				"is-focused": isFocused,
				"is-open": isOpen && !isDisabled,
				[`${rootClass}--quiet`]: isQuiet,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(customStyles)}
			id=${ifDefined(id)}
			aria-haspopup="listbox"
			?disabled=${isDisabled}
			@click=${onclick ??
			function () {
				if (isDisabled) return;
				updateArgs({ isOpen: !isOpen });
			}}
		>
			<div class="${rootClass}-fill">
				${when(label, () => html`
					<span class="${rootClass}-label is-placeholder">
						${label}
					</span>
				`)}
				${Icon({
					setName: iconType,
					iconName: iconName ?? "ChevronDown",
					size,
					customClasses: [`${rootClass}-icon`],
				}, context)}
			</div>
		</button>
	`;
};
