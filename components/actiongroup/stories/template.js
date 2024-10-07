import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { renderContent } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { capitalize } from "lodash-es";

import "../index.css";
import "../themes/spectrum.css";
/* Must be imported last */
import "../themes/express.css";

export const Template = ({
	rootClass = "spectrum-ActionGroup",
	size = "m",
	areQuiet = false,
	areEmphasized = false,
	vertical = false,
	compact = false,
	justified = false,
	staticColor,
	content = [],
	customClasses = [],
	customStyles = {},
} = {}, context = {}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--quiet`]: areQuiet,
				[`${rootClass}--vertical`]: vertical,
				[`${rootClass}--compact`]: compact,
				[`${rootClass}--justified`]: justified,
				[`${rootClass}--static${capitalize(staticColor)}`]:
					typeof staticColor !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(customStyles)}
		>
			${renderContent(content, {
				callback: ActionButton,
				args: {
					staticColor,
					isQuiet: areQuiet,
					isEmphasized: areEmphasized,
					customClasses: [`${rootClass}-item`],
				},
				context
			})}
		</div>
	`;
};
