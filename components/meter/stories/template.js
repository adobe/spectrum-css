import { Container } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { capitalize } from "lodash-es";
import { Template as ProgressBar } from "./template.js";

import "../index.css";
import "../themes/spectrum.css";
/* Must be imported last */
import "../themes/express.css";

export const Template = ({
	rootClass = "spectrum-Meter",
	customClasses = [],
	fill,
	size = "s",
	rootClass = "spectrum-Meter",
	staticColor,
	...item
} = {}, context = {}) => {
	return ProgressBar({
		customClasses: [
		    rootClass,
		    typeof size !== "undefined" ? `${rootClass}--size${size.toUpperCase()}` : null,
		    typeof fill !== "undefined" ? `is-${fill}` : null,
		    /*
		     * The `spectrum-Meter--staticWhite` class is not present in the Meter CSS, as it makes use of
		     * `spectrum-ProgressBar--staticWhite`, but having this allows for simpler detection of static
		     * colors when looking at the element using its `rootClass` in our decorators.
		     */
		    typeof staticColor !== "undefined" ? `${rootClass}--static${capitalize(staticColor)}` : null,
		    ...customClasses,
	    ].filter(Boolean),
	    size,
	    staticColor,
	    ...item,
	}, context);
};

/* FillGroup showcases all semantic variants in a single story. */
export const FillGroup = (args, context) => Container({
	withBorder: false,
	withHeading: false,
	content: html`${["info", "positive", "negative", "notice"].map((variant) =>
		Container({
			withBorder: false,
			heading: variant,
			content: Template({...args, fill: variant}, context),
		})
	)}`
});
