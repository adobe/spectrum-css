import { cssTemplate } from "./css.template.js";
import { pushToMap, referenceToVarFunction } from "./utilities.js";

const DEFAULT_SETS = ["light", "desktop"];

/**
 * @param {import('style-dictionary/types').DesignToken} token
 * @param {string} set The context of the set to resolve
 * @param {import('style-dictionary/types').PlatformConfig} [platform={}]
 * @returns {string}
 */
function resolveSetValues(value, set, platform = {}) {
	const { outputReferences = true, outputReferenceFallbacks = true, modifier = false } = platform;
	if (typeof value === "object") {
		// If we're outputing the references, return it in the format of {<token-name>}
		if (outputReferences && typeof value.name !== "undefined") {
			// If we're outputing the references, return it in the format of {<token-name>}
			return referenceToVarFunction(`{${value.name}}`, { prefix: platform.prefix, fallback: outputReferenceFallbacks ? value.value : undefined, modifier });
		}
		else if (!outputReferences && typeof value.value !== "undefined") {
			// If we're not outputing the references, return the value
			return resolveSetValues(value.value, set, platform);
		}
		else if (typeof value.sets !== "undefined") {
			// Check if the value has a sets object
			if (typeof set === "undefined") {
				// Capture the default set value if found, otherwise it gets lost in the forEach loop context
				let capture;

				// Check for default set values
				DEFAULT_SETS.forEach((defaultSet) => {
					if (typeof value.sets[defaultSet] !== "undefined") {
						capture = resolveSetValues(value.sets[defaultSet], set, platform);
					}
				});

				// If a default set value was found, return it
				if (typeof capture !== "undefined") return capture;
			}
			else if (typeof value.sets[set] !== "undefined") {
				return resolveSetValues(value.sets[set], set, platform);
			}
		}
	}

	// If the value is not an object, we can do a minor conversion of the reference to a CSS variable if needed
	return referenceToVarFunction(value, { prefix: platform.prefix, modifier });
}

/**
 * @type {import('style-dictionary/types').Format}
 */
export default {
	name: "css/sets",
	format: async function ({ dictionary, options = {}, file, platform = {} }) {
		let layers = new Map();
		// @todo: this should be a configuration option
		const layerDefinitions = {
			core: [...DEFAULT_SETS, "size-m"],
			dark: ["dark"],
			large: ["mobile"],
		};

		// Iterate over the provided tokens and sort them into buckets based on their set data
		for (const token of [...dictionary.tokenMap.values()]) {
			const set = token.path && token.path.includes("sets") ? token.path[token.path.length - 1] : undefined;
			const prop = token.path[0];
			platform.modifier = token.modifier;

			const value = resolveSetValues(token.value, set, platform);

			// Why would a value not be found?
			if (typeof value === "undefined") continue;

			if (typeof set === "undefined") {
				layers = pushToMap(layers, "core", new Map([[prop, {
					value,
					deprecated: token.deprecated,
					deprecated_comment: token.deprecated_comment,
				}]]));
				continue;
			}

			// Skip wireframe tokens for CSS
			if (set === "wireframe") continue;

			let added = false;
			for (const layer of Object.keys(layerDefinitions)) {
				if (layerDefinitions[layer].includes(set)) {
					layers = pushToMap(layers, layer, new Map([[prop, {
						value,
						deprecated: token.deprecated,
						deprecated_comment: token.deprecated_comment,
					}]]));
					added = true;
					break;
				}
			}

			if (added) continue;
		}

		if (layers.has("dark") && layers.get("dark").size > 0) {
			// Check if any of the dark values match the light values and delete the extra entries from the dark layer
			for (const [darkKey, darkData] of layers.get("dark")) {
				// Get the light value with the same key
				const lightData = layers.get("core")?.get(darkKey) ?? {};

				// So far only 2 edge-cases match this
				if (typeof lightData.value === "undefined") {
					const initial = dictionary.tokenMap.get(`{${darkKey.replace("spectrum-", "")}.sets.light}`);
					if (initial?.original?.value) {
						const originalValue = referenceToVarFunction(initial.original.value, { prefix: platform.prefix, modifier: initial?.original?.modifier });
						if (typeof originalValue === "undefined") continue;

						lightData.value = originalValue;
						lightData.deprecated = initial.original.deprecated;
						lightData.deprecated_comment = initial.original.deprecated_comment;

						// Update the core layer with the new value
						layers.get("core")?.set(darkKey, lightData);
					}

					continue;
				}

				if (lightData?.value === darkData?.value) {
					layers.get("dark")?.delete(darkKey);
					continue;
				}
			}
		}

		return await cssTemplate(layers, {
			...options,
			file,
			dictionary,
			platform,
		});
	},
};
