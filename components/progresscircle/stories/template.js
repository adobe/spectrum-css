import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import { capitalize } from "lodash-es";

import "../index.css";

export const Template = ({
	id = getRandomId("progress-circle"),
	customStyles = {},
	testId,
	rootClass = "spectrum-ProgressCircle",
	customClasses = [],
	size = "m",
	staticColor,
	isIndeterminate = false,
	value,
}) => {

	let strokeWidth = size === "s" ? 2 : size === "l" ? 4 : 3;

	// SVG strokes are centered, so subtract half the stroke width from the radius to create an inner stroke.
	let radius = `calc(50% - ${strokeWidth / 2}px)`;

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--indeterminate`]: isIndeterminate,
				[`${rootClass}--static${capitalize(staticColor)}`]: typeof staticColor !== "undefined",
				[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined" && size !== "m",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			style=${styleMap(customStyles)}
			data-testid=${ifDefined(testId)}
		>
			<svg fill="none" width="100%" height="100%">
				<circle
					cx="50%"
					cy="50%"
					class="spectrum-ProgressCircle-track"
					r=${radius}
				/>
				<circle
					cx="50%"
					cy="50%"
					r=${radius}
					class="spectrum-ProgressCircle-fill"
					pathLength="100"
					stroke-dasharray="100 200"
					stroke-dashoffset=${100 - value}
					stroke-linecap="round"
				/>
			</svg>
		</div>
	`;
};
