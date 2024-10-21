import { ArgGrid } from "@spectrum-css/preview/decorators";
import { Template as ProgressBar } from "@spectrum-css/progressbar/stories/template.js";
import { capitalize } from "lodash-es";

import "../index.css";
import "../themes/spectrum.css";
/* Must be imported last */
import "../themes/express.css";

export const Template = ({
	rootClass = "spectrum-Meter",
	customClasses = [],
	fill,
	size = "s",
	staticColor,
	...item
} = {}, context = {}) => {
	return ProgressBar({
		...item,
		customClasses: [
			...customClasses,
			rootClass,
			typeof size !== "undefined" ? `${rootClass}--size${size.toUpperCase()}` : null,
			typeof fill !== "undefined" ? `is-${fill}` : null,
			/*
			 * The `spectrum-Meter--staticWhite` class is not present in the Meter CSS, as it makes use of
			 * `spectrum-ProgressBar--staticWhite`, but having this allows for simpler detection of static
			 * colors when looking at the element using its `rootClass` in our decorators.
			 */
			typeof staticColor !== "undefined" ? `${rootClass}--static${capitalize(staticColor)}` : null,
		].filter(Boolean),
		staticColor,
	}, context);
};

/* FillGroup showcases all semantic variants in a single story. */
export const FillGroup = (args, context) => ArgGrid({
	Template,
	argKey: "fill",
	options: ["info", "positive", "negative", "notice"],
	withBorder: false,
	...args,
}, context);
