import spectrum from "@adobe/spectrum-tokens/dist/json/variables.json";
import { useTheme } from "@storybook/theming";

/**
 * A nestable function to search for a token value in the spectrum token data
 *  - If the key doesn't exist, it will log a warning
 *  - If the key has no value or sets, it will log a warning
 *  - If the key has a value, it will return the value
 * @param {Object} data - A required object that contains the token data to be parsed
 * @param {Object} context - An object containing important contextual information
 * @param {string} context.key - The original key of the token being parsed
 * @param {string} context.color - The color context set globally for the page
 * @param {string} context.platform - The platform context set globally for the page
 * @returns {string|void} - The value of the token
 */
function parseData(data, { key, color, platform }) {
	// If nothing exists for that key, report that the key is missing
	if (!data) {
		console.log(`⚠️ Token ${key} can't be found in the spectrum token data`);
		return;
	}

	// Check if the key has a value
	if (data.value) return data.value;

	if (Object.keys(data.sets).length === 0) {
		console.log(`⚠️ Token ${key} has no value or sets`);
		return;
	}

	// Check if one of the contexts is a key in the sets
	if (color in data.sets) {
		return parseData(data.sets[color], { key, color, platform });
	}

	if (platform in data.sets) {
		return parseData(data.sets[platform], { key, color, platform });
	}

	return;
}

/**
 *
 * @param {string} key - The top-level key of the token to be fetched from the spectrum data
 * @param {Object} context - An object containing important contextual information
 * @param {string} context.color - The color context set globally for the page
 * @param {string} context.scale - The platform context set globally for the page
 * @returns {string|undefined} - The value of the token or a fallback value
 */
export function fetchToken(key, fallback = undefined, { color, scale } = {}) {
	if (typeof key !== "string") return fallback;

	// Fetch the theme if it exists; this data exists if wrapped in a ThemeProvider
	const theme = useTheme() ?? {};

	// If the color or scale is not provided, use the theme values or a fallback
	if (typeof color !== "string" && typeof theme.color == "string")
		color = theme.color;
	else if (!color) color = "light";

	if (typeof scale !== "string" && typeof theme.scale == "string")
		scale = theme.scale;
	else if (!scale) scale = "medium";

	// Create a platform context based on the scale (platform used in the token data)
	const platform = scale === "medium" ? "desktop" : "mobile";

	// Check if the spectrum data is available
	if (!spectrum || typeof spectrum !== "object") return fallback;

	return parseData(spectrum[key], { color, platform }) ?? fallback;
}
