import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as Calendar } from "@spectrum-css/calendar/stories/template.js";
import { Template as PickerButton } from "@spectrum-css/pickerbutton/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Template as TextField } from "@spectrum-css/textfield/stories/template.js";

import { useArgs, useGlobals } from "@storybook/client-api";

import "@spectrum-css/datepicker";

export const Template = ({
	rootClass = "spectrum-DatePicker",
	id,
	testId,
	content,
	customClasses = [],
	isOpen = true,
	isInvalid = false,
	isValid = false,
	isQuiet = false,
	isRange = false,
	isDateTimeRange = false,
	isDisabled = false,
	isRequired = false,
	isReadOnly = false,
	selectedDay,
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
		<div
			class=${classMap({
				[rootClass]: true,
				"is-open": !isDisabled && isOpen,
				[`${rootClass}--quiet`]: isQuiet,
				[`${rootClass}--range`]: isRange,
				[`${rootClass}--datetimeRange`]: isDateTimeRange,
				"is-invalid": !isDisabled && isInvalid,
				"is-valid": !isDisabled && isValid,
				"is-disabled": isDisabled,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			data-testid=${ifDefined(testId)}
			aria-disabled=${isDisabled ? "true" : "false"}
			aria-invalid=${ifDefined(isInvalid && !isDisabled ? "false" : undefined)}
			aria-readonly=${ifDefined(isReadOnly ? "true" : "false")}
			aria-required=${ifDefined(isRequired ? "true" : "false")}
			aria-haspopup="dialog"
		>
			${[
				TextField({
					size: "m",
					isQuiet,
					isDisabled,
					isInvalid,
					isReadOnly,
					customClasses: [`${rootClass}-textfield`],
					customInputClasses: [`${rootClass}-input`, `${rootClass}-endField`],
					placeholder: "Choose a date",
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
					size: "m",
					iconType: "workflow",
					iconName: "Calendar",
					isQuiet,
					customStyles: isReadOnly ? {'display': 'none'} : undefined,
					// @todo this is not added to the button on the website; need to make sure it's not a bug
					// isOpen,
					isInvalid,
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
								width: undefined,
						  }
						: {},
					content: content ?? [
						Calendar({})
					],
				}),
			]}
		</div>
	`;
};
