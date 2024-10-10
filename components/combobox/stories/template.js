import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { Template as PickerButton } from "@spectrum-css/pickerbutton/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { Template as TextField } from "@spectrum-css/textfield/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

const Combobox = ({
	rootClass = "spectrum-Combobox",
	id = getRandomId("combobox"),
	testId,
	customClasses = [],
	customStyles = {},
	size = "m",
	isOpen = true,
	isInvalid = false,
	isQuiet = false,
	isDisabled = false,
	isFocused = false,
	isKeyboardFocused = false,
	isLoading = false,
	isReadOnly = false,
	selectedDay,
} = {}, context = {}) => {
	const { globals = {}, updateArgs } = context;
	const lang = globals.lang ?? "en-US";

	// If selectedDay is a string, convert it to a Date object
	if (typeof selectedDay === "string" && selectedDay.length > 0) {
		selectedDay = new Date(selectedDay).toLocaleDateString({ language: lang });
	}

	return html`
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
				"is-readOnly": isReadOnly,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			data-testid=${ifDefined(testId ?? id)}
			style=${styleMap(customStyles)}
		>
			${TextField({
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
			}, context)}
			${PickerButton({
				customClasses: [
					`${rootClass}-button`,
					... isInvalid ? ["is-invalid"] : [],
				],
				size,
				iconSet: "ui",
				iconName: "ChevronDown",
				isQuiet,
				id: getRandomId("picker"),
				isOpen,
				isFocused,
				isKeyboardFocused,
				isDisabled,
				position: "right",
				onclick: function () {
					if (!isReadOnly) updateArgs({ isOpen: !isOpen });
				},
			}, context)}
		</div>
	`;
};

export const Template = ({
	size = "m",
	isOpen = true,
	isQuiet = false,
	isDisabled = false,
	showFieldLabel = false,
	isReadOnly = false,
	fieldLabelText = "Select location",
	fieldLabelPosition = "top",
	...args
} = {}, context = {}) => {
	const popoverHeight = size === "s" ? 106 : size === "l" ? 170 : size === "xl" ? 229 : 142; // default value is "m"
	return html`
		<div style=${styleMap({
			// This accounts for the height of the popover when it is open to prevent testing issues
			// and allow docs containers to be the right height
			["margin-block-end"]: !isReadOnly && isOpen && !isDisabled ? `${popoverHeight}px` : undefined,
		})}>
			${when(showFieldLabel, () =>
				FieldLabel({
					size,
					label: fieldLabelText,
					customStyles: { "max-inline-size": "100px"},
					alignment: fieldLabelPosition === "left" && "left",
				}, context)
			)}
			${[
				Popover({
					isOpen: isOpen && !isDisabled && !isReadOnly,
					withTip: false,
					position: "bottom-start",
					isQuiet,
					trigger: (passthrough) => Combobox({
						size,
						isOpen,
						isQuiet,
						isDisabled,
						isReadOnly,
						...args,
						...passthrough,
					}, context),
					content: [
						!isReadOnly && Menu({
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
					popoverWidth: size === "s" ? 140 : size === "l" ? 191 : size === "xl" ? 192 : 166, // default value is "m"
					popoverHeight,
				}, context),
			]}
		</div>
	`;
};
