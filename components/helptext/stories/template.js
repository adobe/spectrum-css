import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "@spectrum-css/helptext";

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({
	rootClass = "spectrum-HelpText",
	size = "m",
	isDisabled = false,
	hideIcon = false,
	text,
	variant,
	id,
	customClasses = [],
	...globals
}) => {
	const { express } = globals;

	try {
		if (!express)
			import(
				/* webpackPrefetch: true */ "@spectrum-css/helptext/dist/themes/spectrum.css"
			);
		else
			import(
				/* webpackPrefetch: true */ "@spectrum-css/helptext/dist/themes/express.css"
			);
	} catch (e) {
		console.warn(e);
	}

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				"is-disabled": isDisabled,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--${variant}`]: typeof variant !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
		>
			${!hideIcon
				? Icon({
						iconName: "Alert",
						size,
						customClasses: [`${rootClass}-validationIcon`],
				  })
				: ""}
			<div class=${`${rootClass}-text`}>${text}</div>
		</div>
	`;
};
