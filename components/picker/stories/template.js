import { html } from "lit-html";
import { useArgs } from "@storybook/client-api";
import { classMap } from "lit-html/directives/class-map.js";

import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Template as ProgressCircle } from "@spectrum-css/progresscircle/stories/template.js";
import { Template as HelpText } from "@spectrum-css/helptext/stories/template.js";

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
					...globals,
					size,
					label,
					isDisabled,
					alignment: labelPosition,
			  })
			: ""}
		<button
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--quiet`]: isQuiet,
				[`is-invalid`]: isInvalid,
				[`is-open`]: isOpen,
				[`is-loading`]: isLoading,
				[`is-focused`]: isFocused,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			?disabled=${isDisabled}
			aria-haspopup="listbox"
			@click=${(e) => {
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
						...globals,
						iconName: "Alert",
						customClasses: [`${rootClass}-validationIcon`],
				  })
				: ""}
			${Icon({
				...globals,
				iconName,
				customClasses: [`${rootClass}-menuIcon`],
			})}
		</button>
		${helpText
			? HelpText({
					text: helpText,
					variant: isInvalid ? "negative" : "neutral",
					hideIcon: true,
			  })
			: ""}
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
