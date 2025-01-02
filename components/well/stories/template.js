import { getRandomId, renderContent } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Well",
	customClasses = [],
	customStyles = {},
	id = getRandomId("well"),
	testId,
	content = [],
} = {}, context = {}) => {
	return html`
		<span
			class=${classMap({
				[rootClass]: true,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(customStyles)}
			id=${ifDefined(id)}
			data-testid=${ifDefined(testId)}
		>
			${renderContent(content, { context })}
		</span>
	`;
};
