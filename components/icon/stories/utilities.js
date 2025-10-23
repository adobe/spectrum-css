// Import arrays containing data with all icon names in both icon sets.
import workflowIconOpts from "@adobe/spectrum-css-workflow-icons/dist/manifest.json";
import uiIconOpts from "@spectrum-css/ui-icons/dist/icons.json";

/**
 * Clean workflow icon name to strip out unnecessary prefix and postfix text.
 * Also removes file extension if present.
 * Example: "S2_Icon_AlertCircle_20_N" becomes "AlertCircle"
 *
 * @param {string} iconName
 * @returns {string}
 */
export const cleanWorkflowIconName = (iconName) => (
	iconName.replace(/\.svg$/, "").replace(/^S2_Icon_/, "").replace(/_N$/, "").replace(/_20$/, "")
);

/**
 * Clean UI icon name to remove file extension and any unnecessary text.
 *
 * @param {string} iconName
 * @returns {string}
 */
export const cleanUiIconName = (iconName) => (
	iconName.replace(/\.svg$/, "")
);

/**
 * Get the ID of the icon within the sprite sheet.
 *
 * The sprite sheets are single SVG files containing all of the icons in the set, each with a
 * unique ID. The ID can then be used to display the icon elsewhere by referencing the ID
 * within an SVG <use> element.
 *
 * Example of the format of IDs within the different sprite sheets:
 *   ui ID: #spectrum-css-icon-alert-triangle
 *   workflow ID: #icon-spectrum-css-icon-Arrow100
 *
 * @param {string} iconName Icon name (original or cleaned).
 * @param {string} setName Icon set.
 * @returns {string} Icon name with original file name prefix and postfix added.
 */
export const getSpriteSheetName = (iconName, setName) => {
	if (setName == "ui") {
		return "spectrum-css-icon-" + iconName;
	}
	else if (setName == "workflow") {
		// Use cleaned name, without file name prefix/postfix.
		let iconID = cleanWorkflowIconName(iconName);

		// These regexes convert camel case or pascal case strings into kebab-case:
		// -------
		// Matches a lowercase letter or digit followed by an uppercase letter and inserts a hyphen between them.
		// E.g. "AddCircle" becomes "Add-Circle".
		// Digits are included in the first grouping because of the exception of "3D" being "3-d" in the IDs.
		iconID = iconID.replaceAll(/([a-z0-9])([A-Z])/g, "$1-$2");

		// Matches an uppercase sequence followed by an uppercase letter with a lowercase letter.
		// Replacing this separately helps prevent uppercase acronyms like CC and CCW from being split up by dashes.
		iconID = iconID.replaceAll(/([A-Z]+)([A-Z][a-z])/g, "$1-$2");
		// -------

		// Underscores become dashes.
		iconID = iconID.replace("_", "-");

		// All IDs begin with this prefix and are lowercase.
		iconID = "icon-" + iconID.toLowerCase();

		return iconID;
	}
	else {
		console.error("setSpriteSheetName received an invalid setName and could not create the ID.");
		return "";
	}
};

/**
 * Sorted array with all the SVG workflow icon names, cleaned to remove file extension and
 * unnecessary prefix and postfix text. These might look something like "3DAsset".
 *
 * Excludes 22x20 icons, which currently do not match workflow icon sizing.
 */
export const workflowIconsCleaned = (workflowIconOpts?.svg ?? [])
	.filter(iconName => !iconName.includes("22x20"))
	.map(iconName => cleanWorkflowIconName(iconName))
	.sort(alphaNumericSort);

/**
 * Sorted array with all UI icon names, without the file extension.
 */
export const uiIconsCleaned = (uiIconOpts || [])
	.map(iconName => cleanUiIconName(iconName))
	.sort(alphaNumericSort);

/**
 * @description A custom alpha-numeric sort that helps keep the order of the sizing numbers at the end of the string.
 * @param {string} a
 * @param {string} b
 * @returns {number}
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
 * Array of all UI icon names for CSS. Chevron and Arrow have directional suffixes
 * for rotating the same base icon, e.g. Arrow becomes ArrowRight, ArrowDown, etc.
 *
 * @param {string[]} uiIcons Array of icon names.
 * @returns {string[]}
 */
export const getUiIconsWithDirections = (uiIcons) => [
	...uiIcons.filter((c) => !["Chevron", "Arrow"].some(prefix => c.startsWith(prefix))),
	...uiIcons.filter((c) => ["Chevron", "Arrow"].some(prefix => c.startsWith(prefix))).map(i => i.replace(/(Chevron|Arrow)(\d{2,3})/, "$1Right$2")),
	...uiIcons.filter((c) => ["Chevron", "Arrow"].some(prefix => c.startsWith(prefix))).map(i => i.replace(/(Chevron|Arrow)(\d{2,3})/, "$1Left$2")),
	...uiIcons.filter((c) => ["Chevron", "Arrow"].some(prefix => c.startsWith(prefix))).map(i => i.replace(/(Chevron|Arrow)(\d{2,3})/, "$1Up$2")),
	...uiIcons.filter((c) => ["Chevron", "Arrow"].some(prefix => c.startsWith(prefix))).map(i => i.replace(/(Chevron|Arrow)(\d{2,3})/, "$1Down$2")),
].sort(alphaNumericSort);

/**
 * Array of all cleaned UI icon names for CSS. Including sizing numbers and directional suffixes.
 */
export const uiIconsWithDirections = getUiIconsWithDirections(uiIconsCleaned);

/**
 * Array of all unique base UI icon names without their sizing numbers.
 */
export const getUniqueUiIconBaseNames = (uiIcons) => [
	...new Set(uiIcons.map(ui => ui.replace(/\d{2,3}$/, "")))
];

/**
 * Array of all base UI icon names (without sizing numbers) for CSS (including directional suffixes).
 */
export const uniqueUiIconBaseNames = getUniqueUiIconBaseNames(uiIconsWithDirections);

/**
 * Workflow icon sizes. Does not apply to UI icons. Note: XXL is not part of the design
 * spec and may be deprecated in the future.
 */
export const workflowSizes = ["s", "m", "l", "xl"];

/**
 * Create an object where the key is the UI icon name, and the value is an array of
 * strings with every sizing number available.
 *
 * Returns something like the following:
 * {
 *   "Arrow": ['100', '400'],
 *   "Asterisk": ['100', '200', '300'],
 *   ...
 * }
 *
 * @param {string[]} uiIcons Array of all UI icon names.
 * @returns {object}
 */
export const getUiIconSizes = (uiIcons) => {
	let uiIconSizes = {};

	uiIcons.forEach(iconName => {
		// UI icon name without the sizing number at the end.
		const iconNameRoot = iconName.replace(/\d{2,3}$/, "");

		// Sizing number at the end of the icon name (e.g. "100").
		const iconNameSize = iconName.match(/\d{2,3}/g)?.[0];

		// Add to object (with no duplicates).
		uiIconSizes[iconNameRoot] = [
			...new Set([
				...uiIconSizes[iconNameRoot] ?? [],
				...(iconNameSize ? [iconNameSize] : []),
			])
		];
	});

	return uiIconSizes;
};

export const uiIconSizes = getUiIconSizes(uiIconsWithDirections);

/**
 * If UI icon name does not have a sizing number appended, add one to approximate the provided
 * t-shirt sizing for the component, based on the most common mapping.
 *
 * @param {string} uiIconName
 * @param {string} size t-shirt sizing
 * @returns {string} uiIconName with appended default sizing number, if one is not already present.
 */
export const appendUiIconDefaultSizing = (uiIconName, size = "m") => {
	// If icon name already has a size number on the end, no change is needed.
	if (uiIconName.match(/\d{2,3}$/)) {
		return uiIconName;
	}

	return uiIconName + ({
		xs: "50",
		s: "75",
		m: "100",
		l: "200",
		xl: "300",
		xxl: "400",
	}[size] || "100");
};
