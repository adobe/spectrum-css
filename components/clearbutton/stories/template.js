import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";
import "../themes/spectrum.css";
/* Must be imported last */
import "../themes/express.css";

export const Template = ({
	rootClass = "spectrum-ClearButton",
	isDisabled = false,
	size = "m",
	isQuiet = false,
	staticColor,
	id = getRandomId("clearbutton"),
	customClasses = [],
	customStyles = {},
} = {}, context = {}) => {
	return html`
		<button
			type="reset"
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--quiet`]: isQuiet,
				[`${rootClass}--overBackground`]: staticColor === "white",
				"is-disabled": isDisabled,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			style=${styleMap(customStyles)}
			?disabled=${isDisabled}
		>
			<div class="${rootClass}-fill">
				${Icon({
					size,
					iconName: "Cross",
					setName: "ui",
					customClasses: [`${rootClass}-icon`],
				}, context)}
			</div>
		</button>
	`;
};
