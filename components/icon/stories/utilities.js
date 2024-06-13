// Imports an array of all icon names in the workflow set
import iconOpts from "@adobe/spectrum-css-workflow-icons";

export const workflowIcons = (iconOpts || []).map((icon) =>
	icon.replace(/\.svg$/, "")
);

/**
 * UI Icons have specific sizes represented by a number.
 * Each size has its own individual file and a CSS class with defined dimensions.
 */
export const uiIconSizes = {
	"Arrow": ["75","100","200","300","400","500","600"],
	"Asterisk": ["75","100","200","300"],
	"Checkmark": ["50","75","100","200","300","400","500","600"],
	"Chevron": ["50","75","100","200","300","400","500"],
	"CornerTriangle": ["75","100","200","300"],
	"Cross": ["75","100","200","300","400","500","600"],
	"Dash": ["50","75","100","200","300","400","500","600"],
	"SingleGripper": [],
	"DoubleGripper": [],
	"TripleGripper": [],
};

/**
 * List of UI icon names, corresponding to files.
 */
export const uiIcons = Object.keys(uiIconSizes);

/**
 * List of all UI icon names for CSS. Chevron and Arrow have directional suffixes
 * for rotating the same base icon, e.g. Arrow becomes ArrowRight, ArrowDown, etc.
 */
export const uiIconsWithDirections = [
	...uiIcons.filter((c) => !["Chevron", "Arrow"].includes(c)),
	"ArrowRight",
	"ArrowLeft",
	"ArrowUp",
	"ArrowDown",
	"ChevronRight",
	"ChevronLeft",
	"ChevronUp",
	"ChevronDown",
];
