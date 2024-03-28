import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import { Template as ClearButton } from "@spectrum-css/clearbutton/stories/template.js";
import { Template as TextField } from "@spectrum-css/textfield/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Search",
	customClasses = [],
	isDisabled = false,
	isQuiet = false,
	size,
	...globals
}) => {
	const { express } = globals;

	try {
		if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
		else import(/* webpackPrefetch: true */ "../themes/express.css");
	} catch (e) {
		console.warn(e);
	}

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
				...globals,
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
			})}
			${ClearButton({
				...globals,
				isDisabled,
				size,
				customClasses: [`${rootClass}-clearButton`],
			})}
		</form>
	`;
};
