import { usesReferences } from "style-dictionary/utils";
import { processCSS } from "../../tasks/component-builder.js";

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
 * The format function to split out the token set data into distinct CSS variables
 * @type {import('style-dictionary/types').FormatFn} format
 */
const format = ({ dictionary, platform }) => {
	const isDefault = (context) => context === "defaults" || context === "light" || context === "medium";

	const layers = new Map();
	for (const [key, token] of [...dictionary.tokenMap.entries()]) {
		const results = new Map();
		const name = generateNameArray(token, platform.prefix);
		let value = valueFormatter(token, platform);

		if (!name || name[1]?.startsWith("android-")) continue;
		if (!value) continue;

		if (!token.path.includes("sets")) {
			results.set(name.join("-"), value);
			pushToMap(layers, "defaults", results);
			continue;
		}

		const sets = token.path.filter((_, idx, array) => array[idx - 1] == "sets");

		const isDark = sets.includes("dark");
		const isLight = sets.includes("light");

		if (!isDark && !isLight) {
			results.set(name.join("-"), value);
			if (sets.includes("mobile")) {
				pushToMap(layers, "large", results);
			}
			else if (sets.includes("desktop")) {
				pushToMap(layers, "defaults", results);
			}
			else {
				pushToMap(layers, "defaults", results);
			}
			continue;
		}

		// Check that an alternate key exists for the dark or light set; if not, we can't use light-dark()
		let altKey = key.replace(/dark|light/g, isDark ? "light" : "dark");
		const useLightDark = altKey ? dictionary.tokenMap.has(altKey) : false;

		if (!useLightDark) {
			results.set(name.join("-"), value);
			pushToMap(layers, "defaults", results);
			continue;
		}
		// skip the dark sets as they are going to be combined with the light ones
		else if (isDark) continue;

		const darkValue = valueFormatter(dictionary.tokenMap.get(altKey), platform);
		results.set(name.join("-"), value !== darkValue ? `light-dark(${value}, ${darkValue})` : value);
		pushToMap(layers, "defaults", results);
	}

	const styles = [...layers.entries()].sort().map(([layer, results]) => `
${!isDefault(layer) ? `@layer ${layer} {` : ""}
:root {
${[...results.entries()].sort().map(([name, value]) => `--${name}: ${value};`).join("\n")}
}
${!isDefault(layer) ? `}` : ""}`).join("\n\n");

	// Run styles through the linter if possible
	return processCSS(styles, undefined, undefined, {
		cwd: platform.buildPath,
		clean: true,
		map: false,
	});
};
format.nested = true;

export default {
	name: "css/sets",
	format,
};
