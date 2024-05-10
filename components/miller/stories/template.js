import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import { Template as AssetList } from "@spectrum-css/assetlist/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-MillerColumns",
	customClasses = [],
	columns,
}) => {
	if (!columns) {
		console.warn("MillerColumns: Column data is required for rendering.");
		return html``;
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
						${AssetList({
							items,
						})}
					</div>
				`;
			})}
		</div>
	`;
};
