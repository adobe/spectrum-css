import { Template as ProgressCircle } from "./template.js";

export const Template = ({
	customClasses = [],
	rootClass = "spectrum-ProgressCircle--infield",
	size = "m",
	isInField = true,
	...item
} = {}, context = {}) => ProgressCircle({
	customClasses: [
		rootClass,
		...customClasses
	],
	size,
	isInField,
	...item
}, context );

