import { fetchDefinition, varToRef } from "./shared-logic.js";

/**
 * Formats the data file for the given platform.
 * @type {import('style-dictionary/types').FormatFn} format
 */
export const format = ({ dictionary, platform }) => {
	const { prefix } = platform;
	let result = {};

	dictionary.allTokens.forEach((token) => {
		if (!token) return;

		const values = fetchDefinition(token, { prefix });
		if (!values || values.length === 0) return;

		values.forEach(({ key, ...data }) => {
			if (key.includes("android")) return;
			result[key] = {
				...(result[key] ?? {}),
				...data,
			};
		});
	});

	function resolveNestedRefs(value, { prefix, result } = {}) {
		if (Object.keys(value).length < 3 && value.ref) {
			const subKey = varToRef(value.ref, prefix);
			let subValue = result[subKey];
			if (subValue) {
				if (Object.keys(subValue).length < 3 && subValue.ref && subValue.prop) {
					subValue = resolveNestedRefs(subValue, { prefix, result });
				}

				Object.entries(subValue).forEach(([k, v]) => {
					if (k === "prop") return;
					if (k === "ref") return;
					value[k] = v;
				});
			}
		}

		return value;
	}

	/**
	 * Sorts two arrays of [key, value] pairs lexicographically by the key.
	 * @param {Array} a - The first array.
	 * @param {Array} b - The second array.
	 * @returns {number} The comparison result.
	 */
	const sortLexically = (a, b) => a[0].localeCompare(b[0]);

	// Sort the result alphabetically by keys
	result = Object.entries(result).sort(sortLexically).reduce((acc, [key, value]) => {
		acc[key] = resolveNestedRefs(value, { prefix, result });
		return acc;
	}, {});

	return JSON.stringify(result, null, 2);
};

format.nested = true;

export default {
	name: "json/sets",
	format,
};
