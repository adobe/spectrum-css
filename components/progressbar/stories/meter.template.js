import { Template as ProgressBar } from "./template.js";

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
