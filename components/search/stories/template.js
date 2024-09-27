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
	isQuiet = false,
	size,
	hasDescription = false,
	description,
} = {}, context = {}) => {
	return html`
		<form
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--quiet`]: isQuiet,
				"is-disabled": isDisabled,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
		>
			${TextField({
				isDisabled,
				isQuiet,
				size,
				customClasses: [`${rootClass}-textfield`],
				iconName: "Magnify",
				type: "search",
				placeholder: "Search",
				name: "search",
				customInputClasses: [`${rootClass}-input`],
				customIconClasses: [`${rootClass}-icon`],
				autocomplete: false,
			}, context)}
			${ClearButton({
					isDisabled,
					size,
					customClasses: [`${rootClass}-clearButton`],
				}, context)}
			${when(hasDescription, () => 
				HelpText({
					text: description,
					size,
					isDisabled
				}, context ))}
		</form>
	`;
};

export const SearchOptions = ({
	...args
}, context = {}) => Container({
	withBorder: false,
	direction: "row",
	wrapperStyles: {
		columnGap: "12px",
	},
	content: html`
		${Template({
			...args,
		}, context)}
		${Template({
			...args,
			isQuiet: true
		}, context)}`
});