import { Template as ClearButton } from "@spectrum-css/clearbutton/stories/template.js";
import { Template as TextField } from "@spectrum-css/textfield/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Search",
	customClasses = [],
	isDisabled = false,
	isQuiet = false,
	size,
} = {}, context = {}) => {
	const { globals = {} } = context;

	if (globals.context === "express") import("../themes/express.css");
	else if (globals.context === "legacy") import("../themes/spectrum.css");

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
		</form>
	`;
};
