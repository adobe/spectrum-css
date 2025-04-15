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
	const { selector = ":root" } = options;
	const results = new Map();

	for (const [key, token] of [...dictionary.tokenMap.entries()]) {
		const name = generateNameArray(token, platform.prefix);
		let value = valueFormatter(token, platform);

		if (!name || name[1]?.startsWith("android-")) continue;
		if (!value) continue;

		if (!token.path.includes("sets")) {
			results.set(name.join("-"), value);
			continue;
		}

		const isDark = token.path.includes("dark");
		const isLight = token.path.includes("light");

		if (!isDark && !isLight) {
			results.set(name.join("-"), value);
			continue;
		}

		// Check that an alternate key exists for the dark or light set; if not, we can't use light-dark()
		let altKey = key.replace(/dark|light/g, isDark ? "light" : "dark");
		const useLightDark = altKey ? dictionary.tokenMap.has(altKey) : false;

		if (!useLightDark) {
			results.set(name.join("-"), value);
			continue;
		}
		// skip the dark sets as they are going to be combined with the light ones
		else if (isDark) continue;

		const darkValue = valueFormatter(dictionary.tokenMap.get(altKey), platform);
		results.set(name.join("-"), value !== darkValue ? `light-dark(${value}, ${darkValue})` : value);
	}

	return `${selector} {\n${[...results.entries()].sort().map(([name, value]) => `  --${name}: ${value};`).join("\n")}\n}\n`;
};
format.nested = true;

export default {
	name: "css/sets",
	format,
};
