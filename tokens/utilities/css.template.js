import { processCSS } from "../../tasks/component-builder.js";

/**
 * @param {string} name
 * @param {string} value
 * @param {Object} [options={}]
 * @param {import('style-dictionary/types').Dictionary} [options.dictionary]
 * @param {import('style-dictionary/types').PlatformConfig} [options.platform={}]
 */
const variableDefinition = (name, value, { dictionary, platform = {} } = {}) => {
	const token = dictionary.allTokens.find((t) => t.name === name);
	// Find a string with multiple words joined by a dash
	const captureVarName = token?.deprecated_comment?.match(/(\w+-\w+)/)?.[0];
	const comment = token?.deprecated ? `/** @deprecated${token.deprecated_comment ? ` ${token.deprecated_comment.replace(captureVarName, `--${platform.prefix ? `${platform.prefix}-` : ""}${captureVarName}`)}` : ""} */` : "";
	return [comment, `--${name}: ${value};`].filter(Boolean).join("\n\t");
};

/**
 * @typedef {import('style-dictionary/types').TransformedTokens} TransformedTokens
 * @param {Map<string, TransformedTokens>} layers
 * @param {Object} [options={}]
 * @param {import('style-dictionary/types').Dictionary} [options.dictionary]
 * @param {import('style-dictionary/types').PlatformConfig} [options.platform={}]
 * @returns {string}
 */
export const cssTemplate = (layers, { dictionary, platform = {} } = {}) => {
	const styles = [...layers.entries()].sort((a) => {
		// Force the global layer to be first
		if (a[0] === "global") return -1;
		return 0;
	}).map(([layer, results]) => {
		const selector = layer !== "global" ? `.${[...(platform.prefix ? [platform.prefix] : []), layer].join("--")}` : ":root";
		const variableStrings = [...results.entries()]
			// Sort entries by name, alphanumerically
			.sort((a, b) => a[0].localeCompare(b[0], "en", { numeric: true }))
			.map(([name, value]) => variableDefinition(name, value, { dictionary, platform }));

		return `
${selector} {
\t${variableStrings.join("\n\t")}
}`;
	}).join("\n\n");

	// Run styles through the css processor, if possible
	if (typeof processCSS === "function") {
		return processCSS(styles, undefined, undefined, {
			cwd: platform?.buildPath ?? process.cwd(),
			clean: true,
			map: false,
		}).catch((error) => {
			// eslint-disable-next-line no-console
			if (error) console.log(error);

			return styles;
		});
	}

	return styles;
};
