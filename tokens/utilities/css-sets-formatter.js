import { fetchDefinition } from "./shared-logic.js";

/**
 * The format function to split out the token set data into distinct CSS variables
 * @type {import('style-dictionary/types').FormatFn} format
 */
export const format = ({ dictionary, platform, options }) => {
	const { prefix } = platform;
	let selector = ".spectrum";
	const context = options.sets?.[0];

	const definitions = [];

	dictionary.allTokens.forEach((token) => {
		if (!token) return;

		const values = fetchDefinition(token, { prefix });
		if (!values || values.length === 0) return;

		values.forEach(({ key, prop, value, ref, ...sets }) => {
			if (key.includes("android")) return;

			// If there are no default values, check for contextual values
			if (!value) {
				if (context && sets[context] && sets[context].value) definitions.push(`${prop}: ${sets[context].value};`);
				else if (sets.light && sets.light.value) definitions.push(`${prop}: ${sets.light.value};`);
				else if (sets.desktop && sets.desktop.value) definitions.push(`${prop}: ${sets.desktop.value};`);
				/* @todo: this is where we could use the useReferences option to resolve the value fully */
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
