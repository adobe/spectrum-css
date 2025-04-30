import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as HelpText } from "@spectrum-css/helptext/stories/template.js";
import { Template as InfieldButton } from "@spectrum-css/infieldbutton/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Container, getRandomId } from "@spectrum-css/preview/decorators";
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
	isDisabled = false,
	isFocused = false,
	isKeyboardFocused = false,
	isLoading = false,
	isReadOnly = false,
	showHelpText = false,
	helpText = "This is a help text",
	fieldLabelText = "Select location",
	fieldLabelPosition = "top",
	isLabelRequired = false,
	showFieldLabel = false,
	value = "",
} = {}, context = {}) => {
	const { updateArgs } = context;
	const comboboxId = id || getRandomId("combobox");

	// Handle click outside of the combobox to close it
	if (typeof window !== "undefined" && isOpen) {
		// Use setTimeout to allow DOM to render first
		setTimeout(() => {
			const comboboxEl = document.getElementById(comboboxId);

			const handleClickOutside = (event) => {
				if (comboboxEl && !comboboxEl.contains(event.target)) {
					updateArgs({ isOpen: false });
					document.removeEventListener("mousedown", handleClickOutside);
				}
			};

			document.addEventListener("mousedown", handleClickOutside);
		}, 0);
	}

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				"is-open": !isDisabled && isOpen,
				"is-invalid": !isDisabled && isInvalid,
				"is-focused": !isDisabled && isFocused,
				"is-keyboardFocused": !isDisabled && isKeyboardFocused,
				"is-loading": isLoading,
				"is-disabled": isDisabled,
				"is-readOnly": isReadOnly,
				[`${rootClass}--sideLabel`]: fieldLabelPosition === "left",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			data-testid=${ifDefined(testId ?? id)}
			style=${styleMap(customStyles)}
		>
		${when(showFieldLabel, () =>
				FieldLabel({
					size,
					label: fieldLabelText,
					isDisabled,
					customClasses: [`${rootClass}-label`],
					alignment: fieldLabelPosition === "left" && "left",
					isRequired: isLabelRequired,
				}, context)
			)}
		<div class="${rootClass}-content">
			${TextField({
					size,
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
					customInfieldProgressCircleClasses: ["spectrum-Combobox-progress-circle"],
					name: "field",
					isReadOnly,
					value,
					onclick: function () {
						if (!isOpen) updateArgs({ isOpen: true });
					},
				}, context)}
				${InfieldButton({
					customClasses: [
						`${rootClass}-button`,
						...(!isDisabled && isOpen ? ["is-open"] : []),
					],
					size,
					id: getRandomId("infieldbutton"),
					isDisabled,
					tabindex: "-1",
					onclick: function () {
						updateArgs({
							isOpen: !isOpen,
						});
					},
				}, context)}
		</div>
		${when(showHelpText, () =>
				HelpText({
					customClasses: [`${rootClass}-helptext`],
					size,
					isDisabled,
					hideIcon: true,
					text: helpText,
					variant: isInvalid ? "negative" : "neutral",
				}, context)
			)}
		</div>
	`;
};

export const Template = ({
	size = "m",
	isOpen = true,
	isDisabled = false,
	isReadOnly = false,
	content = [],
	value = "",
	...args
} = {}, context = {}) => {
	const popoverHeight = size === "s" ? 106 : size === "l" ? 170 : size === "xl" ? 229 : 142; // default value is "m"

	return html`
		<div style=${styleMap({
			// This accounts for the height of the popover when it is open to prevent testing issues
			// and allow docs containers to be the right height
			["margin-block-end"]: !isReadOnly && isOpen && !isDisabled ? `${popoverHeight}px` : undefined,
		})}>

			${[
				Popover({
					isOpen: isOpen && !isDisabled && !isReadOnly,
					withTip: false,
					position: "bottom-start",
					customClasses: [`${args.rootClass}-popover`],
					trigger: (passthrough) => Combobox({
						size,
						isOpen,
						isDisabled,
						isReadOnly,
						value,
						...args,
						...passthrough,
					}, context),
					content,
					popoverWidth: size === "s" ? 140 : size === "l" ? 191 : size === "xl" ? 192 : 166, // default value is "m"
					popoverHeight,
				}, context),
			]}
		</div>
	`;
};

export const VariantGroup = (args, context) => {
	const variants = [
		{
			heading: "Closed",
			args: {...args, isOpen: false},
		},
		{
			heading: "Closed invalid",
			args: {...args, isOpen: false, isInvalid: true},
		},
		{
			heading: "Closed loading",
			args: {...args, isOpen: false, isLoading: true},
		},
		{
			heading: "Closed disabled",
			args: {...args, isOpen: false, isDisabled: true},
		},
		{
			heading: "Open",
			args: {...args},
		},
		{
			heading: "Open with label",
			args: {...args, showFieldLabel: true, fieldLabelText: "Country"},
		},
	];

	return Container({
		direction: "row",
		withHeading: false,
		withBorder: false,
		content: html`${
			variants.map(variant => Container({
				withBorder: false,
				heading: variant.heading,
				containerStyles: {"gap": "8px"},
				content: Template(variant.args, context),
			}, context))
		}`
	}, context);
};
