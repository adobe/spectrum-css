import { Template as Calendar } from "@spectrum-css/calendar/stories/template.js";
import { Template as PickerButton } from "@spectrum-css/pickerbutton/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { Template as TextField } from "@spectrum-css/textfield/stories/template.js";
import { html } from "lit";
import { when } from "lit-html/directives/when.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const DatePicker = ({
	rootClass = "spectrum-DatePicker",
	id = getRandomId("datepicker"),
	customClasses = [],
	isOpen = true,
	isInvalid = false,
	isValid = false,
	isQuiet = false,
	isRange = false,
	isDateTimeRange = false,
	isDisabled = false,
	isRequired = false,
	readOnly = false,
	selectedDay,
	lastDay,
} = {}, context = {}) => {
	const { globals = {}, updateArgs } = context;

	const lang = globals.lang ?? "en-US";

	const triggerId = getRandomId("datepicker-trigger");

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
			aria-disabled=${isDisabled ? "true" : "false"}
			aria-invalid=${ifDefined(isInvalid && !isDisabled ? "false" : undefined)}
			aria-readonly=${ifDefined(readOnly ? "true" : "false")}
			aria-required=${ifDefined(isRequired ? "true" : "false")}
			aria-haspopup="dialog"
		>
			${TextField({
				size: "m",
				isQuiet,
				isDisabled,
				isReadOnly: readOnly,
				isInvalid: !isRange ? isInvalid : undefined,
				customClasses: [`${rootClass}-textfield`],
				customInputClasses: isRange ? [`${rootClass}-input`, `${rootClass}-startField`] : [`${rootClass}-input`],
				placeholder: "Choose a date",
				name: "field",
				id: triggerId,
				value: selectedDay ? new Date(selectedDay).toLocaleDateString(lang) : undefined,
				onclick: function () {
					if (!isOpen) updateArgs({ isOpen: true });
				},
			}, context)}
			${when(isRange, () => html`<div class=${rootClass}-rangeDash></div>`)}
			${when(isRange, () => TextField({
				size: "m",
				isQuiet,
				isDisabled,
				isInvalid,
				isReadOnly: readOnly,
				customClasses: [`${rootClass}-textfield`],
				customInputClasses: [`${rootClass}-input`, `${rootClass}-endField`],
				placeholder: "Choose a date",
				name: "field",
				value: lastDay
					? new Date(lastDay).toLocaleDateString(lang)
					: undefined,
			}, context))}
			${PickerButton({
				customClasses: [`${rootClass}-button`],
				size: "m",
				iconType: "workflow",
				iconName: "Calendar",
				isQuiet,
				customStyles: readOnly ? { "display": "none" } : undefined,
				// @todo this is not added to the button on the website; need to make sure it's not a bug
				// isOpen,
				isInvalid,
				isDisabled,
				position: "right",
				onclick: function () {
					updateArgs({ isOpen: !isOpen });
				},
			}, context)}
		</div>
	`;
};

export const Template = ({
	isOpen = true,
	isQuiet = false,
	isDisabled = false,
	readOnly = false,
	...args
} = {}, context = {}) => {
	return html`
		${Popover({
			isOpen: isOpen && !isDisabled && !readOnly,
			withTip: false,
			position: "bottom-start",
			isQuiet,
			trigger: (passthroughs) => DatePicker({
				...passthroughs,
				isOpen,
				isQuiet,
				isDisabled,
				readOnly,
				...args,
			}, context),
			content: [
				(passthroughs) => Calendar(passthroughs, context)
			],
			// @todo this implementation of calendar does not currently display range selections or selected date on first load
		}, context)}
	`;
};
