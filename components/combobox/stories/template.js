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

export const Template = ({
	rootClass = "spectrum-Combobox",
	id = getRandomId("combobox"),
	testId,
	customClasses = [],
	customStyles = {},
	size = "m",
	isOpen = true,
	isInvalid = false,
	isDisabled = false,
	isHovered = false,
	isFocused = false,
	isKeyboardFocused = false,
	isLoading = false,
	isReadOnly = false,
	helpText,
	fieldLabelText = "Select location",
	fieldLabelPosition = "top",
	isLabelRequired = false,
	showFieldLabel = false,
	value = "",
	autocomplete = true,
	content = [],
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
				"is-hovered": !isDisabled && isHovered,
				"is-focused": !isDisabled && isFocused,
				"is-keyboardFocused": !isDisabled && isKeyboardFocused,
				"is-loading": isLoading,
				"is-disabled": isDisabled,
				"is-readOnly": isReadOnly,
				[`${rootClass}--sideLabel`]: fieldLabelPosition === "side",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			data-testid=${ifDefined(testId ?? id)}
			style=${styleMap(customStyles)}
			role="combobox"
			aria-expanded=${isOpen}
			aria-haspopup="listbox"
			aria-controls=${`${comboboxId}-popover`}
			aria-owns=${`${comboboxId}-popover`}
			aria-autocomplete=${ifDefined(autocomplete ? "list" : undefined)}
		>
			${when(showFieldLabel, () =>
				FieldLabel({
					size,
					label: fieldLabelText,
					isDisabled,
					customClasses: [`${rootClass}-label`],
					alignment: fieldLabelPosition === "side" && "side",
					isRequired: isLabelRequired,
				}, context)
			)}
			<div class="${rootClass}-content">
				${TextField({
					size,
					isDisabled,
					isInvalid,
					isFocused,
					isHovered,
					isKeyboardFocused,
					customClasses: [
						`${rootClass}-textfield`,
						...(isLoading ? ["is-loading"] : []),
					],
					customInputClasses: [
						`${rootClass}-input`,
						...(autocomplete ? [`${rootClass}-autocomplete`] : [])
					],
					isLoading,
					customInfieldProgressCircleClasses: ["spectrum-Combobox-progress-circle"],
					name: "field",
					isReadOnly,
					value,
					autocomplete: autocomplete ? undefined : "off",
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
					isDisabled: isDisabled || isReadOnly,
					tabindex: "-1",
					onclick: function () {
						updateArgs({
							isOpen: !isOpen,
						});
					},
				}, context)}
			</div>
			${Popover({
				isOpen: isOpen && !isDisabled && !isReadOnly,
				withTip: false,
				position: "bottom-start",
				customClasses: [`${rootClass}-popover`],
				customStyles: {
					"inline-size": size === "s" ? "192px" : size === "l" ? "224px" : size === "xl" ? "240px" : "208px",
				},
				content,
			}, context)}
			${when(helpText, () =>
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

export const HelpTextTemplate = (args, context) => {
	const variants = [
		{
			heading: "Help text",
			args: {...args, helpText: "Choose a topic. Add a new topic by typing it in the field, then selecting 'Enter.'"},
		},
		{
			heading: "Help text with error",
			args: {...args, helpText: "Choose or add at least one topic.", isInvalid: true},
		}
	];

	return Container({
		direction: "row",
		withHeading: false,
		withBorder: false,
		content: html`${variants.map(variant => Container({
			withBorder: false,
			heading: variant.heading,
			containerStyles: {"display": "inline"},
			content: Template({
				...variant.args,
				customStyles: {"margin-top": "8px"}
			}, context)},
		context))}`,
	}, context);
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
