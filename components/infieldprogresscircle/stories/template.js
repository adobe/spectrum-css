import { Template as ProgressCircle } from "@spectrum-css/progresscircle/stories/template.js";
import "../index.css";

export const Template = ({
	customClasses = [],
	rootClass,
	size = "m",
	...item
} = {}, context = {}) => ProgressCircle({
	customClasses: [
		rootClass = "spectrum-InfieldProgresscircle",
		typeof size !== "undefined" ? `${rootClass}--size${size.toUpperCase()}` : null,
		...customClasses
	].filter(Boolean),
	size,
	...item
}, context );

