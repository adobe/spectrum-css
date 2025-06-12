import { cssTemplate } from "./css.template.js";

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
 * @description Split out the token set data into distinct CSS variables
 * @type {import('style-dictionary/types').FormatFn} format
 */
const format = ({ dictionary, platform }) => {
	/**
	 * @type {Map<string, Map<string, string>>}
	 */
	const layers = new Map();
	const tokenMap = dictionary.tokenMap;

	const combinedTokens = new Map();

	// Iterate over the provided tokens and sort them into buckets based on their set data
	for (const token of [...tokenMap.values()]) {
		const set = token.path.includes("sets") ? token.path?.pop() : undefined;

		if (!combinedTokens.has(token.key)) {
			if (typeof set === "undefined" || !["light", "dark"].includes(set)) {
				combinedTokens.set(token.key, token);
			}
			else {
				console.log({ value: token.value });
				// If token.value has sets object and the light and dark values aren't the same string

			}
		}
		else {
			// const data = combinedTokens.get(token.name) ?? {};
			// const context = data?.context ?? {};

			// if (!context[set]) context[set] = resolveContext(token.value, set);
			// else console.log('Error: duplicate values for the same context', set, context);

			// combinedTokens.set(token.name, {
			// 	...data,
			// 	context,
			// });
		}
	}

	// console.log(combinedTokens);

	for (const [key, token] of [...combinedTokens.entries()]) {
		console.log(key);
		console.log('-----------');
		let value = valueFormatter(token, platform);
		if (!value) continue;

		const darkToken = tokenMap.get(token.key?.replace("light", "dark"));
		if (darkToken) {
			const darkValue = valueFormatter(darkToken, platform);
			if (darkValue && value !== darkValue) {
				value = `light-dark(${value}, ${darkValue})`;
			}
		}

		const results = new Map();

		results.set(token.name, value);
		pushToMap(layers, token.path?.includes("mobile") ? "large" : "global", results);
		console.log('-----------');
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
