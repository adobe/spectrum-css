import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

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
	content,
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
	isRequired = false,
	readOnly = false,
	...globals
}) => {
	const [_, updateArgs] = useArgs();
	const [{ lang }] = useGlobals();

	const { express } = globals;

	try {
		if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
		else import(/* webpackPrefetch: true */ "../themes/express.css");
	} catch (e) {
		console.warn(e);
	}

	return html`
		${showFieldLabel ?
			FieldLabel({
				...globals,
				size,
				label: fieldLabelText,
				style: { "max-inline-size": "100px"},
				alignment: fieldLabelPosition === "left" && "left",
			}) : null
		}
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
		>
			${[
				TextField({
					...globals,
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
					value: globals.selectedDay
						? new Date(globals.selectedDay).toLocaleDateString(lang)
						: undefined,
					onclick: function () {
						if (!isOpen) updateArgs({ isOpen: true });
					},
				}),
				PickerButton({
					...globals,
					customClasses: [
						`${rootClass}-button`,
						... isInvalid ? ['is-invalid'] : [],
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
				}),
				Popover({
					...globals,
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
							...globals,
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
				}),
			]}
		</div>
	`;
};
