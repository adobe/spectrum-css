import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { Template as PickerButton } from "@spectrum-css/pickerbutton/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Template as TextField } from "@spectrum-css/textfield/stories/template.js";

import { useArgs, useGlobals } from "@storybook/preview-api";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Combobox",
	id,
	customClasses = [],
	customStyles = {},
	size = "m",
	isOpen = true,
	isInvalid = false,
	isQuiet = false,
	isDisabled = false,
	showFieldLabel = false,
	fieldLabelText = "Select location",
	labelLeft = false,
	fieldLabelPosition = "top",
	isFocused = false,
	isKeyboardFocused = false,
	isLoading = false,
	selectedDay,
}) => {
	const [, updateArgs] = useArgs();
	const [{ lang }] = useGlobals();

	if (labelLeft) {
		showFieldLabel = true;
		fieldLabelPosition = "left";
	}

	if (selectedDay) selectedDay = new Date(selectedDay).toLocaleDateString({ language: lang });

	/**
	 * @note As there is >1 DOM node being output in parallel,
	 * wrap it in an empty div. This prevents containing layouts like
	 * grid or flex from distorting it.
	 */
	return html`
		<div>
			${when(showFieldLabel, () => FieldLabel({
				size,
				label: fieldLabelText,
				customStyles: { "max-inline-size": "100px"},
				alignment: fieldLabelPosition === "left" ? "left" : undefined,
			}))}
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
					customProgressCircleClasses: [`${rootClass}-progress-circle`],
					placeholder: "Type here this text should truncate",
					name: "field",
					value: selectedDay,
					onclick: function () {
						if (!isOpen) updateArgs({ isOpen: true });
					},
				})}
				${PickerButton({
					customClasses: [
						`${rootClass}-button`,
						... isInvalid ? ["is-invalid"] : [],
					],
					size,
					iconType: "ui",
					iconName: "ChevronDown",
					isQuiet,
					isOpen,
					isFocused,
					isKeyboardFocused,
					isDisabled,
					position: "right",
					onclick: function () {
						updateArgs({ isOpen: !isOpen });
					},
				})}
				${Popover({
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
						}),
					],
				})}
			</div>
		</div>
	`;
};
