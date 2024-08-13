import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { renderContent } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

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
	const { globals = {} } = context;

	if (globals.context === "express") import("../themes/express.css");
	else if (globals.context === "legacy") import("../themes/spectrum.css");

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
