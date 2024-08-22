import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as HelpText } from "@spectrum-css/helptext/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { Template as ProgressCircle } from "@spectrum-css/progresscircle/stories/template.js";
import { Template as Switch } from "@spectrum-css/switch/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Picker = ({
	rootClass = "spectrum-Picker",
	size = "m",
	labelPosition,
	placeholder,
	isQuiet = false,
	isKeyboardFocused = false,
	isOpen = false,
	isInvalid = false,
	isLoading = false,
	isDisabled = false,
	customClasses = [],
	customStyles = {},
	onclick,
} = {}, context = {}) => {
	return html`
		<button
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--quiet`]: isQuiet,
				[`${rootClass}--sideLabel`]: labelPosition != "top",
				["is-invalid"]: isInvalid,
				["is-open"]: isOpen,
				["is-loading"]: isLoading,
				["is-keyboardFocused"]: isKeyboardFocused,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			?disabled=${isDisabled}
			aria-haspopup="listbox"
			style=${styleMap(customStyles)}
			type="button"
			@click=${onclick}
		>
			<span class="${rootClass}-label is-placeholder">${placeholder}</span>
			${when(isLoading, () =>
				ProgressCircle({
					size: "s",
					isIndeterminate: true,
				}, context)
			)}
			${when(isInvalid && !isLoading, () =>
				Icon({
					size,
					iconName: "Alert",
					customClasses: [`${rootClass}-validationIcon`],
				}, context)
			)}
			${Icon({
				size,
				setName: "ui",
				iconName: "ChevronDown",
				customClasses: [`${rootClass}-menuIcon`],
			}, context)}
		</button>
	`;
};

export const Template = ({
	rootClass = "spectrum-Picker",
	size = "m",
	label,
	labelPosition = "top",
	placeholder,
	helpText,
	isQuiet = false,
	isKeyboardFocused = false,
	isOpen = false,
	isInvalid = false,
	isLoading = false,
	isDisabled = false,
	isReadOnly = false,
	withSwitch = false,
	fieldLabelStyle = {},
	customClasses = [],
	customStyles = {},
	content = [],
	id = getRandomId("picker"),
} = {}, context = {}) => {
	const { updateArgs } = context;

	let iconName = "ChevronDown200";
	switch (size) {
		case "s":
			iconName = "ChevronDown75";
			break;
		case "m":
			iconName = "ChevronDown100";
			break;
		case "xl":
			iconName = "ChevronDown300";
			break;
		default:
			iconName = "ChevronDown200";
	}

	return html`
		${when(label, () =>
			FieldLabel({
				size,
				label,
				isDisabled,
				customStyles: fieldLabelStyle,
				alignment: labelPosition,
			}, context)
		)}
		${Popover({
			isOpen: isOpen && !isDisabled,
			withTip: false,
			position: "bottom-start",
			trigger: (passthroughs, context) => Picker({
				...passthroughs,
				rootClass,
				size,
				placeholder,
				isQuiet,
				isKeyboardFocused,
				isOpen,
				isInvalid,
				isLoading,
				isDisabled,
				isReadOnly,
				customClasses,
				customStyles: {
					"display": labelPosition == "left" ? "inline-block" : undefined,
					...customStyles,
				},
				content,
				iconName,
				labelPosition,
				id,
				onclick: function() {
					updateArgs({ isOpen: !isOpen });
				},
			}, context),
			content,
		}, context)}
		${when(helpText, () =>
			HelpText({
				text: helpText,
				variant: isInvalid ? "negative" : "neutral",
				hideIcon: true,
			}, context)
		)}
		${when(withSwitch, () => Switch({
			size,
			label: "Toggle switch",
			customStyles: {
				"padding-inline-start": "15px"
			}
		}, context))}
	`;
};
