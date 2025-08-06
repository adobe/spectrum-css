import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as ClearButton } from "@spectrum-css/clearbutton/stories/template.js";
import { Template as HelpText } from "@spectrum-css/helptext/stories/template.js";
import { Container } from "@spectrum-css/preview/decorators";
import { Template as TextField } from "@spectrum-css/textfield/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Search",
	customClasses = [],
	isDisabled = false,
	isFocused = false,
	isHovered = false,
	isKeyboardFocused = false,
	inputValue = "",
	size = "m",
	showHelpText = false,
	helpTextLabel = "",
	isCollapsed = false,
} = {}, context = {}) => {
	const { updateArgs } = context;
	return html`
	<form
		class=${classMap({
			[rootClass]: true,
			[`${rootClass}--size${size?.toUpperCase()}`]:
				typeof size !== "undefined" && size !== "m",
			"is-disabled": isDisabled,
			"is-keyboardFocused": isKeyboardFocused,
			"is-collapsed": isCollapsed,
			"is-expanded": !isCollapsed,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		aria-label="Search"
	>
		${when(isCollapsed, () =>
			ActionButton({
				iconName: "Search",
				size,
				customClasses: [
					`${rootClass}-actionButton`,
					isHovered && "is-hover",
					isDisabled && "is-disabled",
				],
				onclick: () => {
					updateArgs({ isCollapsed: !isCollapsed });
				},
			}, context)
		)}
		${when(!isCollapsed, () =>
			TextField({
				isDisabled,
				size,
				customClasses: [
					`${rootClass}-textfield`,
					isFocused && "is-focused",
					isKeyboardFocused && "is-keyboardFocused",
					isHovered && "is-hover"
				],
				iconName: "Search",
				setName: "workflow",
				type: "search",
				placeholder: "Search",
				name: "search",
				customInputClasses: [`${rootClass}-input`],
				customIconClasses: [`${rootClass}-icon`],
				autocomplete: false,
				value: inputValue,
			}, context)
		)}
		${when(inputValue && !isCollapsed, () =>
			ClearButton({
				isDisabled,
				size,
				customClasses: [`${rootClass}-clearButton`],
				isFocusable: false,
			}, context)
		)}
		${when(showHelpText && !isCollapsed, () =>
			HelpText({
				text: helpTextLabel,
				size,
				isDisabled,
			}, context))}
	</form>
`;
};

export const SearchOptions = (args, context) => Container({
	withBorder: false,
	direction: "row",
	wrapperStyles: {
		columnGap: "12px",
	},
	content: html`
		${Container({
			heading: "Default",
			withBorder: false,
			containerStyles: {
				rowGap: "8px",
			},
			content: Template(args, context)
		})}
		${Container({
			heading: "Focused",
			withBorder: false,
			containerStyles: {
				rowGap: "8px",
			},
			content: Template({...args, isFocused: true,}, context)
		})}
		${Container({
			heading: "Keyboard focused",
			withBorder: false,
			containerStyles: {
				rowGap: "8px",
			},
			content: Template({...args, isKeyboardFocused: true,}, context)
		})}
	`
}, context);
