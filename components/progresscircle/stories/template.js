import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import "@spectrum-css/progresscircle";

export const Template = ({
	rootClass = "spectrum-ProgressCircle",
	customClasses = [],
	size = "m",
	overBackground = false,
	isIndeterminate = false,
}) => {
	let sizeClassName = "medium";
	switch (size) {
		case "s":
			sizeClassName = "small";
			break;
		case "l":
			sizeClassName = "large";
			break;
		default:
			sizeClassName = "medium";
	}

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${sizeClassName}`]: typeof size !== "undefined",
				[`${rootClass}--indeterminate`]: isIndeterminate,
				[`${rootClass}--staticWhite`]: overBackground,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
		>
			<div class="spectrum-ProgressCircle-track"></div>
			<div class="spectrum-ProgressCircle-fills">
				<div class="spectrum-ProgressCircle-fillMask1">
					<div class="spectrum-ProgressCircle-fillSubMask1">
						<div class="spectrum-ProgressCircle-fill"></div>
					</div>
				</div>
				<div class="spectrum-ProgressCircle-fillMask2">
					<div class="spectrum-ProgressCircle-fillSubMask2">
						<div class="spectrum-ProgressCircle-fill"></div>
					</div>
				</div>
			</div>
		</div>
	`;
};
