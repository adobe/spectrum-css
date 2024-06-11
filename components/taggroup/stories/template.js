import { Template as Tag } from "@spectrum-css/tag/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-TagGroup",
	ariaLabel,
	items,
	isRemovable = false,
	customClasses = [],
	customStyles = {},
	...globals
}, context) => html`
	<div
		class=${classMap({
			[rootClass]: true,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		style=${ifDefined(styleMap(customStyles))}
		role="list"
		aria-label=${ifDefined(ariaLabel)}
	>
		${items.map((i) => {
			return Tag({
				...globals,
				...i,
				size: globals.size,
				hasClearButton: isRemovable,
				customClasses: [`${rootClass}-item`],
			}, context);
		})}
	</div>
`;
