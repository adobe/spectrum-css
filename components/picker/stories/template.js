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
}) => {
	const [, updateArgs] = useArgs();

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
			style=${ifDefined(styleMap(customStyles))}
			type="button"
			@click=${() => {
				updateArgs({ isOpen: !isOpen });
			}}
		>
			<span class="${rootClass}-label is-placeholder">${placeholder}</span>
			${isLoading
				? ProgressCircle({
					size: "s",
					isIndeterminate: true,
				})
				: ""}
			${isInvalid && !isLoading
				? Icon({
					size,
					iconName: "Alert",
					customClasses: [`${rootClass}-validationIcon`],
				})
				: ""}
			${Icon({
				size,
				setName: "ui",
				iconName: "ChevronDown",
				customClasses: [`${rootClass}-menuIcon`],
			})}
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
	customPopoverStyles = {},
	content = [],
	id,
}) => {
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
		${label
			? FieldLabel({
				size,
				label,
				isDisabled,
				customStyles: fieldLabelStyle,
				alignment: labelPosition,
			})
			: ""}
		${labelPosition == "left" ?
			html`<div style="display: inline-block">
				${Picker({
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
					customStyles,
					content,
					iconName,
					labelPosition,
					id,
				})}
			</div>
			`
		:
			Picker({
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
				customStyles,
				content,
				iconName,
				labelPosition,
				id,
			})
		}

		${helpText
			? HelpText({
				text: helpText,
				variant: isInvalid ? "negative" : "neutral",
				hideIcon: true,
			})
			: ""}
		${when(content.length !== 0, () =>
				Popover({
					isOpen: isOpen && !isDisabled,
					withTip: false,
					position: "bottom",
					isQuiet,
					customStyles: customPopoverStyles,
					content,
				})
		)}
		${when(withSwitch, () => Switch({
			size,
			label: "Toggle switch",
			customStyles: {
				"padding-inline-start": "15px"
			}
		}))}
	`;
};
