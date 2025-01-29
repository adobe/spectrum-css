// Import arrays containing data with all icon names in both icon sets.
import iconOpts from "@adobe/spectrum-css-workflow-icons/dist/manifest.json";
import uiIconOpts from "@spectrum-css/ui-icons/dist/icons.json";

// Array with all SVG workflow icon names, without the file extension.
export const workflowIcons = (iconOpts?.svg ?? []).map((icon) =>
	icon.replace(/\.svg$/, "")
).sort(alphaNumericSort);

// Array with all UI icon names, without the file extension.
export const uiIcons = (uiIconOpts || []).map((icon) =>
	icon.replace(/\.svg$/, "")
).sort(alphaNumericSort);

/**
 * Clean workflow icon name to strip out unnecessary prefix and postfix text.
 * Example: "S2_Icon_AlertCircle_20_N" becomes "AlertCircle"
 * 
 * @param {string} iconName 
 * @returns {string}
 */
export const cleanWorkflowIcon = (iconName) => (
	iconName.replace(/^S2_Icon_/, "").replace(/_N$/, "").replace(/_20$/, "")
);

/**
 * @description A custom alpha-numeric sort that helps keep the order of the sizing numbers at the end of the string.
 * @param {string} a
 * @param {string} b
 * @returns number
 */
function alphaNumericSort(a, b) {
	const aSet = a.match(/^([a-zA-Z]+)([0-9]+)(\.svg)?$/i);
	const bSet = b.match(/^([a-zA-Z]+)([0-9]+)(\.svg)?$/i);

	// Handle cases where match fails
	if (!aSet || !bSet) return 0;

	// Compare characters at start of string (case-insensitive)
	const aChar = aSet[1].toLowerCase();
	const bChar = bSet[1].toLowerCase();
	if (aChar !== bChar) return aChar > bChar ? 1 : -1;

	// Compare numbers at end of string
	const aInt = parseInt(aSet[2]);
	const bInt = parseInt(bSet[2]);
	return aInt - bInt;
}

/**
 * List of all UI icon names for CSS. Chevron and Arrow have directional suffixes
 * for rotating the same base icon, e.g. Arrow becomes ArrowRight, ArrowDown, etc.
 */
export const getUiIconsWithDirections = (uiIcons) => [
	...uiIcons.filter((c) => !["Chevron", "Arrow"].some(prefix => c.startsWith(prefix))),
	...uiIcons.filter((c) => ["Chevron", "Arrow"].some(prefix => c.startsWith(prefix))).map(i => i.replace(/(Chevron|Arrow)(\d{2,3})/, "$1Right$2")),
	...uiIcons.filter((c) => ["Chevron", "Arrow"].some(prefix => c.startsWith(prefix))).map(i => i.replace(/(Chevron|Arrow)(\d{2,3})/, "$1Left$2")),
	...uiIcons.filter((c) => ["Chevron", "Arrow"].some(prefix => c.startsWith(prefix))).map(i => i.replace(/(Chevron|Arrow)(\d{2,3})/, "$1Up$2")),
	...uiIcons.filter((c) => ["Chevron", "Arrow"].some(prefix => c.startsWith(prefix))).map(i => i.replace(/(Chevron|Arrow)(\d{2,3})/, "$1Down$2")),
].sort(alphaNumericSort);

/**
 * List of all UI icon names for CSS. Including sizing numbers and directional suffixes.
 */
export const uiIconsWithDirections = getUiIconsWithDirections(uiIcons);

/**
 * List of all unique base UI icon names without their sizing numbers.
 */
export const getUniqueUiIconBaseNames = (uiIcons) => [
	...new Set(uiIcons.map(ui => ui.replace(/\d{2,3}$/, "")))
];

/**
 * List of all base UI icon names (without sizing numbers) for CSS (including directional suffixes).
 */
export const uniqueUiIconBaseNames = getUniqueUiIconBaseNames(uiIconsWithDirections);

// Workflow icon sizes. Does not apply to UI icons. Note: XXL is not part of the design spec and may be deprecated in the future. 
export const workflowSizes = ["xs", "s", "m", "l", "xl", "xxl"];

/**
 * Get all icons data (originating from IconsLoader) and clean it up to return usable arrays
 * with the list of icons and their sizes.
 */
export const fetchIconDetails = ({
	icons,
	workflowIcons = [],
	uiIcons = [],
	uiIconSizes = {},
}) => {
	if (!icons || Object.keys(icons).length == 0) {
		// Fetch loaded data if not provided
		if (window.icons) icons = window.icons;
		else {
			return {
				workflowIcons: [],
				uiIcons: [],
				uiIconSizes: {},
				uiIconsWithDirections: [],
			};
		}
	}

	// Clean up loaded icon data. 
	icons = Object.entries(icons).reduce((acc, [setName, data]) => {
		acc[setName] = Object.entries(data).reduce((acc, [iconName, svg]) => {
			// Simplify icon name to just the file name, without the file extension.
			iconName = iconName.split("/").pop().replace(/\.svg$/, "");
			acc[iconName] = svg;

			// Add the icon name to the workflowIcons list if it's from the workflow set.
			if (setName === "workflow") {
				workflowIcons.push(iconName);
			}
			else {
				// Add to array of all UI icons.
				uiIcons.push(iconName);

				// UI icon name without the sizing number at the end.
				const iconNameRoot = iconName.replace(/\d{2,3}$/, "");

				// Sizing number at the end of the icon name (e.g. "100").
				const iconNameSize = iconName.match(/\d{2,3}/g)?.[0];

				// Add to array that associates the root icon name with an array of all available sizes. 
				uiIconSizes[iconNameRoot] = [
					...new Set([
						...uiIconSizes[iconNameRoot] ?? [],
						...(iconNameSize ? [iconNameSize] : []),
					])
				];
			}

			return acc;
		}, {});
		return acc;
	}, {});

	return {
		icons,
		workflowIcons: [...new Set(workflowIcons)],
		uiIcons: [...new Set(uiIcons)],
		uiIconSizes,
		uiIconsWithDirections: [...new Set(getUiIconsWithDirections(uiIcons))],
	};
};