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
		if (name[1]?.startsWith("android-")) {
			return;
		}

		resultAr.push(`  --${name.join("-")}: ${value};`);
	});

	const selector = options.selector ? options.selector : ".spectrum";

	return `${selector} {\n${resultAr.join("\n")}\n}\n`;
};
format.nested = true;

export default {
	name: "css/sets",
	format,
};
