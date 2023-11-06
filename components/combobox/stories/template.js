import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { Template as PickerButton } from "@spectrum-css/pickerbutton/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Template as TextField } from "@spectrum-css/textfield/stories/template.js";

import { useArgs, useGlobals } from "@storybook/client-api";

import "@spectrum-css/combobox";

export const Template = ({
	rootClass = "spectrum-Combobox",
	id,
	content,
	customClasses = [],
	size = "m",
	isOpen = true,
	isInvalid = false,
	isValid = false,
	isQuiet = false,
	isDisabled = false,
	isFocused = false,
	isKeyboardFocused = false,
	isLoading = false,
	// isRequired = false,
	// readOnly = false,
	selectedDay,
	testId,
}) => {
	const [_, updateArgs] = useArgs();
	const [{ lang }] = useGlobals();

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				"is-open": !isDisabled && isOpen,
				[`${rootClass}--quiet`]: isQuiet,
				"is-invalid": !isDisabled && isInvalid,
				"is-valid": !isDisabled && isValid,
				"is-focused": !isDisabled && isFocused,
				"is-keyboardFocused": !isDisabled && isKeyboardFocused,
				"is-loading": isLoading,
				"is-disabled": isDisabled,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			data-testid=${ifDefined(testId)}
		>
			${[
				TextField({
					size,
					isQuiet,
					isDisabled,
					isValid,
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
					placeholder: "Type here",
					name: "field",
					value: selectedDay
						? new Date(selectedDay).toLocaleDateString(lang)
						: undefined,
					onclick: function () {
						if (!isOpen) updateArgs({ isOpen: true });
					},
				}),
				PickerButton({
					customClasses: [`${rootClass}-button`],
					size,
					iconType: "workflow",
					iconName: "ChevronDown",
					isQuiet,
					isOpen,
					isInvalid,
					isValid,
					isFocused,
					isKeyboardFocused,
					isDisabled,
					position: "right",
					onclick: function () {
						updateArgs({ isOpen: !isOpen });
					},
				}),
				Popover({
					isOpen: isOpen && !isDisabled,
					withTip: false,
					position: "bottom",
					isQuiet,
					customStyles: isOpen
						? {
								position: "absolute",
								top: "100%",
								left: "0",
								width: "100%",
						  }
						: {},
					content: content ?? [
						Menu({
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
						}),
					],
				}),
			]}
		</div>
	`;
};
