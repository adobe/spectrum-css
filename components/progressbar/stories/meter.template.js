import { Container } from "@spectrum-css/preview/decorators";
import { Template as ProgressBar } from "./template.js";
import { html } from "lit";

import "../index.css";
import "../themes/spectrum.css";
/* Must be imported last */
import "../themes/express.css";

export const Template = ({
	customClasses = [],
	fill,
	size = "s",
	...item
} = {}, context = {}) => {
	return ProgressBar({
		customClasses: [
			...customClasses,
			"spectrum-Meter",
			typeof size !== "undefined" ? `spectrum-Meter--size${size.toUpperCase()}` : null,
			typeof fill !== "undefined" ? `is-${fill}` : null,
		].filter(Boolean),
		size,
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
