import { useArgs } from "@storybook/preview-api";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as HelpText } from "@spectrum-css/helptext/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Template as ProgressCircle } from "@spectrum-css/progresscircle/stories/template.js";
import { Template as Switch } from "@spectrum-css/switch/stories/template.js";

import "../index.css";

/**
 * Template for just the Picker. Does not include sibling Label and Help text.
 */
export const Picker = ({
	rootClass = "spectrum-Picker",
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
	...globals
}) => {
	const [, updateArgs] = useArgs();

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
				["is-keyboardFocused"]: isKeyboardFocused,
				["is-hover"]: isHovered,
				["is-active"]: isActive,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			?disabled=${isDisabled}
			aria-haspopup="listbox"
			style=${ifDefined(styleMap(customStyles))}
			type="button"
			@click=${() => {
				if (window.isChromatic()) return;
				updateArgs({ isOpen: !isOpen });
			}}
			aria-labelledby=${ifDefined(ariaLabeledBy)}
		>
			${when(contentIconName, () =>
				Icon({
					...globals,
					iconName: contentIconName,
					size,
					customClasses: ["spectrum-Picker-icon"],
				}))
			}
			<span class="${rootClass}-label is-placeholder">${placeholder}</span>
			${when(isLoading, () =>
				ProgressCircle({
					...globals,
					size: "s",
					isIndeterminate: true,
				})
			)}
			${when(isInvalid && !isLoading, () =>
				Icon({
					...globals,
					size,
					iconName: "Alert",
					customClasses: [`${rootClass}-validationIcon`],
				})
			)}
			${Icon({
				...globals,
				size,
				setName: "ui",
				iconName: disclosureIconName,
				customClasses: [`${rootClass}-menuIcon`],
			})}
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
	helpText,
	isQuiet = false,
	isOpen = false,
	isInvalid = false,
	isDisabled = false,
	isLoading = false,
	withSwitch = false,
	fieldLabelStyle = {},
	fieldLabelId = "default-picker",
	customPopoverStyles = {
		// Demonstrate popover at 100% of the width of the Picker.
		minInlineSize: "100%",
		"--mod-menu-inline-size": "100%",
		// Helps ensure that Popover appears below the Picker, with side labels layout.
		display: "block",
	},
	content = [],
	...globals
}) => {
	const pickerMarkup = Picker({
		...globals,
		size,
		isQuiet,
		isOpen,
		isInvalid,
		isDisabled,
		isLoading,
		content,
		labelPosition,
		ariaLabeledBy: fieldLabelId,
	});

	const popoverMarkup = content.length !== 0 ? Popover({
		isOpen: isOpen && !isDisabled && !isLoading,
		withTip: false,
		position: "bottom",
		isQuiet,
		content,
		size,
		customStyles: customPopoverStyles,
	}) : "";

	const helpTextMarkup = helpText ? HelpText({
		size,
		text: helpText,
		variant: isInvalid ? "negative" : "neutral",
		hideIcon: true,
		isDisabled,
	}) : "";

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
				})
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
				})
			)}
		</div>`;

	// Make sure there is a wrapper around sibling components when using the Chromatic
	// template, so their layout is not affected by the flex and grid layouts used.
	if (window.isChromatic()) {
		return html`<div style="position: relative;">${markup}</div>`;
	}
	return markup;
};
