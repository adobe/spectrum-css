import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as Calendar } from "@spectrum-css/calendar/stories/template.js";
import { Template as TextField } from "@spectrum-css/textfield/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Template as PickerButton } from "@spectrum-css/pickerbutton/stories/template.js";

import { useArgs, useGlobals } from "@storybook/client-api";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-DatePicker",
	id,
	content,
	customClasses = [],
	isOpen = true,
	isInvalid = false,
	isValid = false,
	isQuiet = false,
	isDisabled = false,
	isRequired = false,
	readOnly = false,
	...globals
}) => {
	const [_, updateArgs] = useArgs();
	const [{ lang }] = useGlobals();

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				"is-open": !isDisabled && isOpen,
				[`${rootClass}--quiet`]: isQuiet,
				"is-invalid": !isDisabled && isInvalid,
				"is-valid": !isDisabled && isValid,
				"is-disabled": isDisabled,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			aria-disabled=${isDisabled ? "true" : "false"}
			aria-invalid=${ifDefined(isInvalid && !isDisabled ? "false" : undefined)}
			aria-readonly=${ifDefined(readOnly ? "true" : "false")}
			aria-required=${ifDefined(isRequired ? "true" : "false")}
			aria-haspopup="dialog"
		>
			${[
				TextField({
					...globals,
					size: "m",
					isQuiet,
					isDisabled,
					isValid,
					isInvalid,
					customClasses: [`${rootClass}-textfield`],
					customInputClasses: [`${rootClass}-input`],
					placeholder: "Choose a date",
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
					customClasses: [`${rootClass}-button`],
					size: "m",
					iconType: "workflow",
					iconName: "Calendar",
					isQuiet,
					// @todo this is not added to the button on the website; need to make sure it's not a bug
					// isOpen,
					isInvalid,
					isValid,
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
								width: undefined,
						  }
						: {},
					content: [Calendar(globals)],
				}),
			]}
		</div>
	`;
};
