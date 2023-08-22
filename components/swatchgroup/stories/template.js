import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
// import { ifDefined } from 'lit/directives/if-defined.js';

import { lowerCase, capitalize } from "lodash-es";

import "@spectrum-css/swatchgroup";

export const Template = ({
	rootClass = "spectrum-SwatchGroup",
	customClasses = [],
	size = "m",
	density = "regular",
	rounding = "regular",
	swatches = [],
	containerWidth = "250px",
	...globals
}) => {
	const { express } = globals;

	try {
		if (!express)
			import(
				/* webpackPrefetch: true */ "@spectrum-css/swatchgroup/dist/themes/spectrum.css"
			);
		else
			import(
				/* webpackPrefetch: true */ "@spectrum-css/swatchgroup/dist/themes/express.css"
			);
	} catch (e) {
		console.warn(e);
	}

	const swatchRootClass = "spectrum-Swatch";

	const limitedSwatches = swatches.slice(0, 6);
	const swatchesToDisplay =
		typeof rounding !== "undefined" && rounding !== "none"
			? limitedSwatches
			: swatches;

	return html`
		<div style="width: ${containerWidth};">
			<div
				class=${classMap({
					[rootClass]: true,
					[`${rootClass}--${density}`]:
						typeof density !== "undefined" && density !== "regular",
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
			>
				${swatchesToDisplay.map((swatch, index) => {
					return html`
						<div
							tabindex="0"
							style="--spectrum-picked-color: rgba(${swatch.r}, ${swatch.g}, ${swatch.b})"
							class=${classMap({
								[`${swatchRootClass}`]: true,
								[`${swatchRootClass}--size${size?.toUpperCase()}`]:
									typeof size !== "undefined",
								[`${swatchRootClass}--rounding${capitalize(
									lowerCase(rounding)
								)}`]: typeof rounding !== "undefined" && rounding !== "regular",
								[`${swatchRootClass}--lightBorder`]: true,
							})}
						>
							<div class="spectrum-Swatch-fill"></div>
						</div>
					`;
				})}
			</div>
		</div>
	`;
};
