import { usesReferences } from "style-dictionary/utils";
import { cssTemplate } from "./css.template.js";

/**
 * @description Formats the value of a token for CSS
 * @param {import('style-dictionary').Token} token
 * @param {import('style-dictionary').PlatformConfig} [platform={}]
 * @param {boolean} [platform.outputReferences=true]
 * @param {string} [platform.prefix]
 * @param {string} [platform.color="light"]
 * @returns {string}
 */
const valueFormatter = (token, { outputReferences = true, prefix } = {}) => {
	if (
		(!outputReferences && isReference(token)) &&
		typeof token.value !== "object" &&
		// Check the value doesn't use a token reference string
		!(token.value.startsWith("{") && token.value.endsWith("}"))
	) return token.value;

	// If there's a value set for the current color, return the resolved value, otherwise we have to use the token reference
	if (
		(!outputReferences && isReference(token)) &&
		typeof token.value === "object" &&
		token.value.sets?.light
	) {
		return valueFormatter(token.value.sets.light, { outputReferences, prefix });
	}

	// console.log(token.name, token);
	// If the color is light and the token has both light and dark values, return a light-dark() function
	if (
		(token.value.sets?.light?.value && token.value.sets?.dark?.value) &&
		(token.value.sets?.light?.value !== token.value.sets?.dark?.value)
	) {
		console.log(token.name, token.value.sets.light.value, token.value.sets.dark.value);

		return `light-dark(${token.value.sets.light.value}, ${token.value.sets.dark.value})`;
	}

	if (!outputReferences && !isReference(token) && typeof token.value !== "object") {
		// console.log(token.name, token.value);
		return token.value;
	}

	if (outputReferences && token?.original?.value?.toString()?.startsWith("{") && token?.original?.value?.toString()?.endsWith("}")) {
		// If the platform is configured to output references, return the var function
		// with the referenced token name as the value
		const resultAr = token.original?.value
			?.substring(1, token.original.value.length - 1)
			?.split(".");

		if (prefix) resultAr.splice(0, 0, prefix);

		return `var(--${resultAr.join("-")})`;
	}

	// console.log("fallthrough", token.name, token);
	return token.value;
};

/**
 * @description Pushes a value to a map; supports nested maps and arrays
 * @param {Map} map
 * @param {string} key
 * @param {any} value
 * @returns {Map}
 */
const pushToMap = (map, key, value) => {
	if (!map.has(key)) {
		map.set(key, value);
		return map;
	}

	let existing = map.get(key);

	// Check if the value is a Map
	if (value instanceof Map) {
		// Merge the two maps
		for (const [k, v] of value.entries()) {
			existing.set(k, v);
		}
	}
	else if (value instanceof Object) {
		// Merge the two objects
		for (const [k, v] of Object.entries(value)) {
			existing[k] = v;
		}
	}
	else if (Array.isArray(value)) {
		// Merge the two arrays
		existing.push(...value);
	}
	else {
		// If it's a primitive value, just set it
		existing = value;
	}

	map.set(key, existing);
	return map;
};

/**
 * @description Checks if a token is a reference; uses the `usesReferences` utility from Style Dictionary
 * @param {import('style-dictionary').Token} token
 * @returns {boolean}
 */
const isReference = (token) => token?.original?.value ? usesReferences(token.original.value) : false;

/**
 * @description Split out the token set data into distinct CSS variables
 * @type {import('style-dictionary/types').FormatFn} format
 */
const format = ({ dictionary, platform }) => {
	/**
	 * @type {Map<string, Map<string, string>>}
	 */
	const layers = new Map();
	const tokenMap = dictionary.tokenMap;

	// Iterate over the provided tokens and sort them into buckets based on their set data
	for (const token of [...tokenMap.values()]) {
		// Skip tokens that don't have a name
		if (!token.name) continue;
		// Skip the wireframe tokens
		// Skip dark sets as they are going to be combined with the light ones
		if (["wireframe", "dark"].some(context => token.path?.includes(context))) continue;

		let value = valueFormatter(token, platform);
		if (!value) continue;

		const darkToken = tokenMap.get(token.key?.replace("light", "dark"));
		if (darkToken) {
			const darkValue = valueFormatter(darkToken, platform);
			if (darkValue) {
				value = `light-dark(${value}, ${darkValue})`;
			}
		}

		const results = new Map();

		results.set(token.name, value);
		pushToMap(layers, token.path?.includes("mobile") ? "large" : "global", results);
	}

	return cssTemplate(layers, { dictionary, platform });
};

format.nested = true;

/**
 * @type {import('style-dictionary/types').Format}
 */
export default {
	name: "css/sets",
	format,
};
