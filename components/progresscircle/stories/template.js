import { getRandomId, Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

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
				[`${rootClass}--staticWhite`]: staticColor === "white",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			style=${styleMap(customStyles)}
			data-testid=${ifDefined(testId)}
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

export const ProgressCircleGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
	],
	stateData: [
		{
			testHeading: "Indeterminate",
			isIndeterminate: true,
		}
	]
});
