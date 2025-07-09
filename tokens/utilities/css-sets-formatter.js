import { valueFormatter } from "./shared-logic.js";

/**
 * The format function to split out the token set data into distinct CSS variables
 * @type {import('style-dictionary/types').FormatFn} format
 */
export const format = ({ dictionary, platform, options }) => {
	const { prefix } = platform;
	let selector = ":root";
	const context = options.sets?.[0];

	const definitions = [];

	dictionary.allTokens.forEach((token) => {
		if (!token) return;

		const values = valueFormatter(token.original?.value ?? token?.value, { path: token.path, prefix });

		if (!values || values.length === 0) return;

		values.forEach(({ key, prop, value, ref, ...sets }) => {
			if (key.includes("android")) return;
			// If there are no default values, check for contextual values
			if (!value) {
				if (context && sets[context]) definitions.push(`${prop}: ${sets[context]};`);
				else if (sets.light) definitions.push(`${prop}: ${sets.light};`);
				else if (sets.desktop) definitions.push(`${prop}: ${sets.desktop};`);
				else if (ref) definitions.push(`${prop}: ${ref};`);
			}
			else definitions.push(`${prop}: ${value};`);
		});
	});

	if (context) {
		switch (context) {
			case "mobile":
				selector = ".spectrum--large";
				break;
			case "desktop":
				selector = ".spectrum--medium";
				break;
			default:
				selector = `.spectrum--${context}`;
		}
	}

	return `${selector} { ${definitions.join(" ")} }`;
};
format.nested = true;

export default {
	name: "css/sets",
	format,
};
