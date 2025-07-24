import path from "path";
import prettier from "prettier";
import { fetchDefinition, varToRef } from "./shared-logic.js";

/**
 * Formats the data file for the given platform.
 * @type {import('style-dictionary/types').FormatFn} format
 */
export const format = ({ dictionary, platform, file, options }) => {
	const { prefix, buildPath } = platform;
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
		if (value.ref && !value.value) {
			const subKey = varToRef(value.ref, prefix);
			let subValue = result[subKey];
			if (subValue) {
				// If the result has only the "ref" and "prop" keys, pass this back through
				if (Object.keys(subValue).length === 2 && subValue.ref && subValue.prop) {
					subValue = resolveNestedRefs(subValue, { prefix, result });
				}

				Object.entries(subValue).forEach(([k, v]) => {
					if (["ref", "prop"].includes(k)) return;
					value[k] = v;
				});
			}
		}

		return value;
	}

	// Sort the result alphabetically by keys
	result = Object.entries(result).reduce((acc, [key, value]) => {
		acc[key] = resolveNestedRefs(value, { prefix, result });
		return acc;
	}, {});

	return prettier.format(JSON.stringify(result, null, 2), { parser: "json", filepath: path.join(buildPath, file.destination) });
};

format.nested = true;

export default {
	name: "json/sets",
	format,
};
