import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/spectrum.css";
/* Must be imported last */
import "../themes/express.css";

export const Template = ({
	rootClass = "spectrum-Badge",
	size = "m",
	label,
	iconName,
	iconSet = "workflow",
	variant = "neutral",
	fixed,
	customStyles = {},
	customClasses = [],
	id = getRandomId("badge"),
} = {}, context = {}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--${variant}`]: typeof variant !== "undefined",
				[`${rootClass}--${fixed}`]: typeof fixed !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			style=${styleMap(customStyles)}
		>
			${when(iconName, () =>
				Icon({
					iconName,
					setName: iconSet,
					customClasses: [
						...(typeof label === "undefined"
							? [`${rootClass}-icon--no-label`]
							: []),
						`${rootClass}-icon`,
					],
				}, context),
			)}
			${when(label, () => html`<div class="${rootClass}-label">${label}</div>`)}
		</div>
	`;
};
