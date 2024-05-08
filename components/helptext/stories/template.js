import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";


import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-HelpText",
	customClasses = [],
	customStyles = {},
	size = "m",
	isDisabled = false,
	hideIcon = false,
	text,
	variant,
	id,
}) => html`
	<div
		class=${classMap({
			[rootClass]: true,
			"is-disabled": isDisabled,
			[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
			[`${rootClass}--${variant}`]: typeof variant !== "undefined",
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		style=${styleMap(customStyles)}
		id=${ifDefined(id)}
	>
		${when(!hideIcon && variant == "negative", () => Icon({
			iconName: "Alert",
			size,
			customClasses: [`${rootClass}-validationIcon`],
		}))}
		<div class=${`${rootClass}-text`}>${text}</div>
	</div>
`;
