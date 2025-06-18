import { usesReferences } from "style-dictionary/utils";

export const generateNameArray = (token, prefix) => {
	let name = prefix ? [prefix] : [];
	const cleanTokenPath = [];
	for (let i = 0; i < token.path.length; i++) {
		if (token.path[i] === "sets") {
			i++;
		}
		else {
			cleanTokenPath.push(token.path[i]);
		}
	}
	name = name.concat(cleanTokenPath);
	return name;
};

/**
 * @description Formats the value of a token for CSS
 * @param {import('style-dictionary').Token} token
 * @param {import('style-dictionary').PlatformConfig} platform
 * @returns {string[]}
 */
const valueFormatter = (value, prefix) => {
	if (!value) return;

	/* @todo resolve for the new typography objects */
	if (typeof value === "object") {
		return Object.keys(value).map(key => valueFormatter(key, prefix))?.flat();
	}

	if (!usesReferences(value)) return [String(value)];

	const resultAr = String(value).substring(1, value.length - 1).split(".");
	if (prefix) resultAr.splice(0, 0, prefix);

	return [`var(--${resultAr.join("-")})`];
};

/**
 * The format function to split out the token set data into distinct CSS variables
 * @type {import('style-dictionary/types').FormatFn} format
 */
const format = ({ dictionary, platform, options }) => {
	let selector = '.spectrum';
	const context = options.sets?.[0];

	const resultAr = [];

	dictionary.allTokens.forEach((token) => {
		if (!token) return;

		const name = generateNameArray(token, platform.prefix);
		const values = valueFormatter(token.original?.value ?? token.value, platform.prefix);

		if (!values || values.length === 0) return;
		if (name[1]?.startsWith("android-")) {
			return;
		}

		resultAr.push(...values.map(value => `  --${name.join("-")}: ${value};`));
	});

	const mediaQuery = context === 'dark' ? '@media (prefers-color-scheme: dark) {\n' : '';
	if (context && ['desktop', 'light', 'dark'].every(c => context !== c)) selector = `.spectrum--${context === 'mobile' ? 'large' : context}`;

	return `${mediaQuery}${selector} {\n${resultAr.join("\n")}\n}\n${mediaQuery ? '}\n' : ''}`;
};
format.nested = true;

export default {
	name: "css/sets",
	format,
};
