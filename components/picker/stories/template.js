import { useArgs } from "@storybook/client-api";

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

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Picker",
	size = "m",
	label,
	labelPosition = "top",
	placeholder,
	helpText,
	isQuiet = false,
	isFocused = false,
	isOpen = false,
	isInvalid = false,
	isLoading = false,
	isDisabled = false,
	isReadOnly = false,
	customClasses = [],
	customStyles = {},
	customPopoverStyles = {},
	content = [],
	id,
	...globals
}) => {
	const [_, updateArgs] = useArgs();

	const { express } = globals;
	try {
		if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
		else import(/* webpackPrefetch: true */ "../themes/express.css");
	} catch (e) {
		console.warn(e);
	}

	return html`
		${when(label, () => FieldLabel({
			...globals,
			size,
			label,
			isDisabled,
			alignment: labelPosition,
		}))}
		<button
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--quiet`]: isQuiet,
				[`${rootClass}--sideLabel`]: labelPosition != "top",
				[`is-invalid`]: isInvalid,
				[`is-open`]: isOpen,
				[`is-loading`]: isLoading,
				[`is-focused`]: isFocused,
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
			${when(placeholder, () => html`<span class="${rootClass}-label is-placeholder">${placeholder}</span>`)}
			${when(isLoading, () => ProgressCircle({
				size: "s",
				isIndeterminate: true,
			}))}
			${when(isInvalid && !isLoading, () => Icon({
				...globals,
				size,
				iconName: "Alert",
				customClasses: [`${rootClass}-validationIcon`],
			}))}
			${Icon({
				...globals,
				size,
				uiIconName: "ChevronDown",
				customClasses: [`${rootClass}-menuIcon`],
			})}
		</button>
		${when(helpText, () => HelpText({
			text: helpText,
			variant: isInvalid ? "negative" : "neutral",
			hideIcon: true,
		}))}
		${Popover({
			...globals,
			isOpen: isOpen && !isDisabled,
			withTip: false,
			position: "bottom",
			isQuiet,
			customStyles: customPopoverStyles,
			content,
		})}
	`;
};
