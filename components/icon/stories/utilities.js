import path from "path";

// Imports an array of all icon names in the workflow set
import iconOpts from "@adobe/spectrum-css-workflow-icons";

export const workflowIcons = (iconOpts || []).map((icon) =>
	path.basename(icon, ".svg")
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

/**
 * Retrieve SVG markup from contents of loaded SVG file, pulling from
 * either the set of Workflow icons or UI icons.
 *
 * @param {object}
 * @returns {string} SVG HTML markup
 */
export const fetchIconSVG = ({
	iconName,
	setName = "workflow",
	scale
}) => {
	if (!iconName) return;

	let icon;

	// Check "Workflow icons" first.
	if (setName === "workflow") {
		try {
			icon = require(`@adobe/spectrum-css-workflow-icons/dist/${
				scale !== "medium" ? "24" : "18"
			}/${iconName}.svg?raw`);
			if (icon) return (icon.default ?? icon).trim();
		}
		catch (e) {/* ignore */}
	}

	// Check "UI icons" for icon set if not yet found.
	try {
		icon = require(`@spectrum-css/ui-icons/dist/${
			scale ? scale : "medium"
		}/${iconName}.svg?raw`);
		if (icon) return (icon.default ?? icon).trim();
	}
	catch (e) {/* ignore */}

	return;
};
