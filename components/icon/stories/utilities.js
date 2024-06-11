// Imports an array of all icon names in the workflow set
import iconOpts from "@adobe/spectrum-css-workflow-icons";
import uiIconOpts from "@spectrum-css/ui-icons/dist/icons.json";

export const workflowIcons = (iconOpts || []).map((icon) =>
	path.basename(icon, ".svg")
).sort(alphaNumericSort);

export const uiIcons = (uiIconOpts || []).map((icon) =>
	path.basename(icon, ".svg")
).sort(alphaNumericSort);

/**
 * @description A custom alpha-numeric sort
 * @param {string} a
 * @param {string} b
 * @returns number
 */
function alphaNumericSort (a, b) {
	const aSet = a.match(/^([a-z]+)([0-9]+)\.svg$/i);
	const bSet = b.match(/^([a-z]+)([0-9]+)\.svg$/i);
	const aChar = aSet?.[1];
	const bChar = bSet?.[1];

	if (aChar !== bChar) return aChar > bChar ? 1 : -1;

	const aInt = parseInt(aSet?.[2] ?? 0);
	const bInt = parseInt(bSet?.[2] ?? 0);
	return aInt - bInt;
}

/**
 * List of all UI icon names for CSS. Chevron and Arrow have directional suffixes
 * for rotating the same base icon, e.g. Arrow becomes ArrowRight, ArrowDown, etc.
 */
export const uiIconsWithDirections = [
	...uiIcons.filter((c) => !["Chevron", "Arrow"].some(prefix => c.startsWith(prefix))),
	...uiIcons.filter((c) => ["Chevron", "Arrow"].some(prefix => c.startsWith(prefix))).map(i => i.replace(/(Chevron|Arrow)(\d{2,3})/, "$1Right$2")),
	...uiIcons.filter((c) => ["Chevron", "Arrow"].some(prefix => c.startsWith(prefix))).map(i => i.replace(/(Chevron|Arrow)(\d{2,3})/, "$1Left$2")),
	...uiIcons.filter((c) => ["Chevron", "Arrow"].some(prefix => c.startsWith(prefix))).map(i => i.replace(/(Chevron|Arrow)(\d{2,3})/, "$1Up$2")),
	...uiIcons.filter((c) => ["Chevron", "Arrow"].some(prefix => c.startsWith(prefix))).map(i => i.replace(/(Chevron|Arrow)(\d{2,3})/, "$1Down$2")),
].sort(alphaNumericSort);

export const uniqueUiIcons = [
	...new Set(uiIconsWithDirections.map(ui => ui.replace(/\d{2,3}$/, "")))
];
