import { Template as ProgressCircle } from "@spectrum-css/progresscircle/stories/template.js";
import { capitalize } from "lodash-es";
import "../index.css";

export const Template = ({
	customClasses = [],
	rootClass = "spectrum-InfieldProgressCircle",
	size = "m",
	staticColor,
	...item
} = {}, context = {}) => ProgressCircle({
	customClasses: [
		rootClass,
		typeof size !== "undefined" ? `${rootClass}--size${size.toUpperCase()}` : null,
		typeof staticColor !== "undefined" ? `${rootClass}--static${capitalize(staticColor)}` : null,
		...customClasses
	].filter(Boolean),
	size,
	staticColor,
	...item
}, context );
