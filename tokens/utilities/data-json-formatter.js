import { valueFormatter, varToRef } from "./shared-logic.js";

export const format = ({ dictionary, platform }) => {
	const { prefix } = platform;
	let result = {};

	dictionary.allTokens.forEach((token) => {
		if (!token) return;

		const context = token.attributes?.sets?.[0];

		const values = valueFormatter(token.original?.value ?? token.value, { path: token.path, prefix, context });
		if (!values || values.length === 0) return;

		values.forEach(({ key, ...data }) => {
			if (key.includes("android")) return;
			result[key] = {
				...(result[key] ?? {}),
				...data,
			};
		});
	});

	// Sort the result alphabetically by keys
	result = Object.entries(result).sort().reduce((acc, [key, value]) => {
		if (value.ref && !value.value) {
			const subKey = varToRef(value.ref, prefix);
			const subValue = result[subKey];
			if (subValue) {
				Object.entries(subValue).forEach(([k, v]) => {
					if (["ref", "prop"].includes(k)) return;
					value[k] = v;
				});
			}
		}
		acc[key] = value;
		return acc;
	}, {});

	return JSON.stringify(result, null, 2);
};

format.nested = true;

export default {
	name: "json/sets",
	format,
};
