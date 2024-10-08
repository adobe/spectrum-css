import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as HelpText } from "@spectrum-css/helptext/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Container, getRandomId } from "@spectrum-css/preview/decorators";
import { Template as ProgressCircle } from "@spectrum-css/progresscircle/stories/template.js";
import { Template as Switch } from "@spectrum-css/switch/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

/**
 * Template for Picker only (no popover or help text).
 */
export const Picker = ({
	rootClass = "spectrum-Picker",
	size = "m",
	labelPosition,
	placeholder = "",
	currentValue = "",
	isQuiet = false,
	isKeyboardFocused = false,
	showWorkflowIcon = false,
	isOpen = false,
	isInvalid = false,
	isLoading = false,
	isDisabled = false,
	isHovered = false,
	isActive = false,
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
				["is-hover"]: isHovered,
				["is-active"]: isActive,
				["is-keyboardFocused"]: isKeyboardFocused,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			?disabled=${isDisabled}
			aria-haspopup="listbox"
			style=${styleMap(customStyles)}
			type="button"
			@click=${onclick}
		>
			${when(showWorkflowIcon, () =>
				Icon({
					size,
					setName: "workflow",
					iconName: "Image",
					customClasses: [`${rootClass}-icon`],
				}, context)
			)}
			<span
				class=${classMap({
					[`${rootClass}-label`]: true,
					["is-placeholder"]: !currentValue,
				})}
			>${currentValue ? currentValue : placeholder}</span>
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
					setName: "workflow",
					customClasses: [`${rootClass}-validationIcon`],
				}, context)
			)}
			${Icon({
				size,
				setName: "ui",
				iconName: {
					s:  "ChevronDown75",
					m:  "ChevronDown100",
					l:  "ChevronDown200",
					xl: "ChevronDown300",
				}[size ?? "m"],
				customClasses: [`${rootClass}-menuIcon`],
			}, context)}
		</button>
	`;
};

/**
 * Picker template including adjacent popover and help text.
 */
export const Template = ({
	rootClass = "spectrum-Picker",
	size = "m",
	label,
	labelPosition = "top",
	placeholder = "",
	currentValue = "",
	helpText = "",
	isQuiet = false,
	isKeyboardFocused = false,
	showWorkflowIcon = false,
	isOpen = false,
	isInvalid = false,
	isLoading = false,
	isDisabled = false,
	isReadOnly = false,
	isHovered = false,
	isActive = false,
	withSwitch = false,
	fieldLabelStyle = {},
	customClasses = [],
	customStyles = {},
	popoverContent = [],
	id = getRandomId("picker"),
} = {}, context = {}) => {
	const { updateArgs } = context;

	return html`
		${when(label, () =>
			FieldLabel({
				size,
				label,
				isDisabled,
				customStyles: fieldLabelStyle,
				alignment: labelPosition === "side" ? "left" : undefined,
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
				currentValue,
				isQuiet,
				showWorkflowIcon,
				isKeyboardFocused,
				isOpen,
				isInvalid,
				isLoading,
				isDisabled,
				isReadOnly,
				isHovered,
				isActive,
				customClasses,
				customStyles,
				labelPosition,
				id,
				onclick: function() {
					updateArgs({ isOpen: !isOpen });
				},
			}, context),
			content: popoverContent,
		}, context)}
		${when(helpText, () =>
			HelpText({
				text: helpText,
				variant: isInvalid ? "negative" : "neutral",
				hideIcon: true,
			}, context)
		)}
		${when(withSwitch, () =>
			Switch({
				size,
				label: "Toggle switch",
				customStyles: {
					"padding-inline-start": "15px"
				}
			}, context)
		)}
	`;
};

/**
 * Template showing both closed and open versions of the Picker.
 */
export const ClosedAndOpenTemplate = (args, context) => Container({
	withBorder: false,
	content: html`${[false, true].map((isOpen) => 
		Container({
			withBorder: false,
			direction: "column",
			heading: isOpen ? "Open" : "Closed",
			containerStyles: {
				rowGap: "8px",
			},
			// Make sure container flex layout does not misalign sibling elements such as field label in Template()
			wrapperStyles: {
				display: "block",
			},
			content: Template({
				...args,
				isOpen,
			}, context),
		})
	)}`,
});

/**
 * Template for the Disabled docs story.
 */
export const DisabledTemplate = (args, context) => Container({
	withBorder: false,
	content: html`${[false, true].map((isInvalid) => 
		Container({
			withBorder: false,
			direction: "column",
			heading: isInvalid ? "Invalid" : "Default",
			containerStyles: {
				rowGap: "8px",
				overflow: "hidden",
			},
			// Make sure container flex layout does not misalign sibling elements such as field label in Template()
			wrapperStyles: {
				display: "block",
			},
			content: Template({
				...args,
				isInvalid,
			}, context),
		})
	)}`,
});