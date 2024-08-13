import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { Template as PickerButton } from "@spectrum-css/pickerbutton/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { Template as TextField } from "@spectrum-css/textfield/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Combobox",
	id = getRandomId("combobox"),
	testId,
	customClasses = [],
	size = "m",
	isOpen = true,
	isInvalid = false,
	isQuiet = false,
	isDisabled = false,
	showFieldLabel = false,
	fieldLabelText = "Select location",
	fieldLabelPosition = "top",
	isFocused = false,
	isKeyboardFocused = false,
	isLoading = false,
	selectedDay,
} = {}, context = {}) => {
	const { globals = {}, updateArgs } = context;
	const lang = globals.lang ?? "en-US";

	// If selectedDay is a string, convert it to a Date object
	if (typeof selectedDay === "string" && selectedDay.length > 0) {
		selectedDay = new Date(selectedDay).toLocaleDateString({ language: lang });
	}

	const pickerId = getRandomId("picker");

	return html`
		<div>
			${when(showFieldLabel, () =>
				FieldLabel({
					size,
					label: fieldLabelText,
					customStyles: { "max-inline-size": "100px"},
					alignment: fieldLabelPosition === "left" && "left",
				}, context))}
			<div
				class=${classMap({
					[rootClass]: true,
					[`${rootClass}--size${size?.toUpperCase()}`]:
						typeof size !== "undefined",
					"is-open": !isDisabled && isOpen,
					[`${rootClass}--quiet`]: isQuiet,
					"is-invalid": !isDisabled && isInvalid,
					"is-focused": !isDisabled && isFocused,
					"is-keyboardFocused": !isDisabled && isKeyboardFocused,
					"is-loading": isLoading,
					"is-disabled": isDisabled,
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
				id=${ifDefined(id)}
				data-testid=${ifDefined(testId ?? id)}
			>
				${[
					TextField({
						size,
						isQuiet,
						isDisabled,
						isInvalid,
						isFocused,
						isKeyboardFocused,
						customClasses: [
							`${rootClass}-textfield`,
							...(isLoading ? ["is-loading"] : []),
						],
						customInputClasses: [`${rootClass}-input`],
						isLoading,
						customProgressCircleClasses: ["spectrum-Combobox-progress-circle"],
						placeholder: "Type here this text should truncate",
						name: "field",
						value: selectedDay
							? new Date(selectedDay).toLocaleDateString(lang)
							: undefined,
						onclick: function () {
							if (!isOpen) updateArgs({ isOpen: true });
						},
					}, context),
					Popover({
						isOpen: isOpen && !isDisabled,
						withTip: false,
						position: "bottom-right",
						isQuiet,
						triggerId: pickerId,
						trigger: (passthrough) => PickerButton({
							...passthrough,
							customClasses: [
								`${rootClass}-button`,
								... isInvalid ? ["is-invalid"] : [],
							],
							size,
							iconType: "ui",
							iconName: "ChevronDown",
							isQuiet,
							id: pickerId,
							isOpen,
							isFocused,
							isKeyboardFocused,
							isDisabled,
							position: "right",
							onclick: function () {
								updateArgs({ isOpen: !isOpen });
							},
						}, context),
						customStyles: isOpen
							? {
									position: "absolute",
									top: "100%",
									left: "0",
									width: "100%",
							}
							: {},
						content: [
							Menu({
								size,
								items: [
									{
										label: "Ballard",
									},
									{
										label: "Fremont",
									},
									{
										label: "Greenwood",
									},
									{
										label: "United States of America",
										isDisabled: true,
									},
								],
							}, context),
						],
					}, context),
				]}
			</div>
		</div>
	`;
};
