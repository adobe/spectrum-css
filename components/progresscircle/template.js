import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ProgressCircle",
	customClasses = [],
	size = "m",
	overBackground = false,
	isIndeterminate = false,
	addStaticBackground = overBackground,
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

	const componentMarkup = html`
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

	const decoratedMarkup = html`
		<div style="background-color: #0F797D;">${componentMarkup}</div>
	`;

	return overBackground && addStaticBackground ? decoratedMarkup : componentMarkup;
};
