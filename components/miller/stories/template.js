import { Template as AssetList } from "@spectrum-css/assetlist/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-MillerColumns",
	customClasses = [],
	columns = [],
} = {}, context = {}) => {
	const { globals = {} } = context;

	if (globals.context === "express") import("../themes/express.css");
	else if (globals.context === "legacy") import("../themes/spectrum.css");

	if (!columns || !columns.length) {
		console.warn("MillerColumns: Column data is required for rendering.");
	}

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
		>
			${columns.map(({ items }) => {
				return html`
					<div class="${rootClass}-item">
						${AssetList({ items }, context)}
					</div>
				`;
			})}
		</div>
	`;
};
