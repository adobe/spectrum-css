import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as HelpText } from "@spectrum-css/helptext/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as InfieldProgressCircle } from "@spectrum-css/infieldprogresscircle/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Container, getRandomId } from "@spectrum-css/preview/decorators";
import { Template as Switch } from "@spectrum-css/switch/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

/**
 * Template for just the Picker. Does not include sibling Label and Help text.
 */
export const Picker = ({
	rootClass = "spectrum-Picker",
	id = getRandomId("picker"),
	size = "m",
	labelPosition = "top",
	placeholder,
	contentIconName,
	isQuiet = false,
	isKeyboardFocused = false,
	isOpen = false,
	isInvalid = false,
	isLoading = false,
	isDisabled = false,
	isHovered = false,
	isActive = false,
	ariaLabeledBy,
	customClasses = [],
	customStyles = {},
} = {}, context = {}) => {
	const { updateArgs } = context;

	// Use the chevron from the UI icon set for each size, as defined in the design spec.
	let disclosureIconName = "ChevronDown100";
	if (size == "s") { disclosureIconName = "ChevronDown75"; }
	else if (size == "l") { disclosureIconName = "ChevronDown200"; }
	else if (size == "xl") { disclosureIconName = "ChevronDown300"; }

	return html`
		<button
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--quiet`]: isQuiet,
				[`${rootClass}--sideLabel`]: labelPosition == "side",
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
			id=${id}
			style=${styleMap(customStyles)}
			type="button"
			@click=${function() {
				updateArgs({ isOpen: !isOpen });
			}}
			aria-labelledby=${ifDefined(ariaLabeledBy)}
		>
			${when(contentIconName, () =>
				Icon({
					iconName: contentIconName,
					size,
					customClasses: ["spectrum-Picker-icon"],
				}, context))
			}
			<span class="${rootClass}-label is-placeholder">${placeholder}</span>
			${when(isLoading, () =>
				InfieldProgressCircle({
					size: size,
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
				iconName: disclosureIconName,
				customClasses: [`${rootClass}-menuIcon`],
			}, context)}
		</button>
	`;
};

/**
 * Picker template used along with other sibling components, such as Field label and Help text.
 */
export const Template = ({
	size = "m",
	label,
	labelPosition = "top",
	placeholder,
	helpText,
	isQuiet = false,
	isOpen = false,
	isInvalid = false,
	isDisabled = false,
	isLoading = false,
	withSwitch = false,
	fieldLabelStyle = {},
	fieldLabelId = getRandomId("fieldlabel"),
	customPopoverStyles = {
		// Demonstrate popover at 100% of the width of the Picker.
		minInlineSize: "100%",
		"--mod-menu-inline-size": "100%",
		// Helps ensure that Popover appears below the Picker, with side labels layout.
		display: "block",
	},
	popoverContent = [],
} = {}, context = {}) => {
	const pickerMarkup = Picker({
		size,
		isQuiet,
		isOpen,
		isInvalid,
		isDisabled,
		isLoading,
		placeholder,
		popoverContent,
		labelPosition,
		ariaLabeledBy: fieldLabelId,
	}, context);

	const popoverMarkup = popoverContent.length !== 0 ? Popover({
		isOpen: isOpen && !isDisabled && !isLoading,
		withTip: false,
		position: "bottom-start",
		isQuiet,
		content: popoverContent,
		size,
		customStyles: customPopoverStyles,
		popoverWrapperStyles: {
			"display": "block",
		},
	}, context) : "";

	const helpTextMarkup = helpText ? HelpText({
		size,
		text: helpText,
		variant: isInvalid ? "negative" : "neutral",
		hideIcon: true,
		isDisabled,
	}, context) : "";

	const markup = html`
		<div
			style=${styleMap({
				position: "relative",
				display: "inline-block",
				...(labelPosition == "side") && {
					display: "flex",
					flexWrap: "nowrap",
				}
			})}
		>
			${when(label, () =>
				FieldLabel({
					size,
					label,
					isDisabled,
					style: fieldLabelStyle,
					alignment: labelPosition == "side" ? "left" : undefined,
					id: fieldLabelId,
				}, context)
			)}
			${labelPosition == "side"
				? html`<div style="display: inline-block; position: relative;">${pickerMarkup} ${popoverMarkup} ${helpTextMarkup}</div>`
				: html`${pickerMarkup} ${popoverMarkup} ${helpTextMarkup}`
			}
			${when(withSwitch, () =>
				Switch({
					size,
					label: "Toggle switch",
					id: fieldLabelId + "-switch",
					customStyles: {
						"padding-inline-start": "15px"
					}
				}, context)
			)}
		</div>`;
	return markup;
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
		}, context)
	)}`,
}, context);

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
		}, context)
	)}`,
}, context);
