import { usesReferences } from "style-dictionary/utils";
import { generateNameArray } from "./helper-functions.js";

/**
 * @description Formats the value of a token for CSS
 * @param {import('style-dictionary').Token} token
 * @param {import('style-dictionary').PlatformConfig} platform
 * @returns {string}
 */
const valueFormatter = (token, platform) => {
	if (!usesReferences(token.original.value)) return token.value;

	const resultAr = token.original.value
		.substring(1, token.original.value.length - 1)
		.split(".");

	if (platform.prefix) resultAr.splice(0, 0, platform.prefix);

	return `var(--${resultAr.join("-")})`;
};

/**
 * The format function to split out the token set data into distinct CSS variables
 * @type {import('style-dictionary/types').FormatFn} format
 */
const format = ({ dictionary, platform, options }) => {
	const resultAr = [];

	dictionary.allTokens.forEach((token) => {
		const name = generateNameArray(token, platform.prefix);
		const value = valueFormatter(token, platform);

		if (!value) return;

		resultAr.push(
      `  --${name.join("-")}: ${value};`
		);
	});

	const selector = options.selector ? options.selector : ":root";

	return `${selector} {\n${resultAr.join("\n")}\n}\n`;
};
format.nested = true;

export default {
	name: "css/sets",
	format,
};
