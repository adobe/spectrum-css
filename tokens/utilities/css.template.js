import { fileHeader } from "style-dictionary/utils";
import { processCSS } from "../../tasks/component-builder.js";
import { cleanVariableName } from "./utilities.js";

/**
 * @param {string} name
 * @param {string} value
 * @param {Object} [options={}]
 * @param {string} [options.prefix]
 * @param {boolean} [options.deprecated]
 * @param {string} [options.deprecated_comment]
 */
const variableDefinition = (name, value, { prefix, deprecated, deprecated_comment } = {}) => {
	const varName = `--${cleanVariableName(name, prefix)}`;
	if (!deprecated) return `${varName}: ${value};`;

	// Find a string with multiple words joined by a dash
	const captureVarName = deprecated_comment?.match(/(\w+(-\w+)+)/)?.[0];
	const commentVarName = captureVarName ? `--${prefix ? `${prefix}-` : ""}${captureVarName}` : undefined;
	const comment = `/** @deprecated ${varName}${deprecated_comment ? ` -- ${deprecated_comment.replace(captureVarName, commentVarName)}` : ""} */`;
	return [comment, `${varName}: ${value};`].filter(Boolean).join("\n\t");
};

/**
 * Remove prefix because the prefix option for createPropertyFormatter
 * is not the same as the prefix inside header comment
 * @param {FormattingOverrides} [formatting]
 */
function getFormattingCloneWithoutPrefix(formatting) {
	const formattingWithoutPrefix = structuredClone(formatting) ?? {};
	delete formattingWithoutPrefix.prefix;
	return formattingWithoutPrefix;
}

/**
 * @typedef {import('style-dictionary/types').TransformedTokens} TransformedTokens
 * @param {Map<string, TransformedTokens>} layers
 * @param {import('style-dictionary/types').LocalOptions & {
 * 	file: import('style-dictionary/types').File,
 * 	dictionary: import('style-dictionary/types').Dictionary,
 * 	platform: import('style-dictionary/types').PlatformConfig,
 * 	selector: string | string[]
 * }} [options={}]
 * @returns {Promise<string>}
 */
export const cssTemplate = async (layers, options = {}) => {
	// Deconstruct the options object for easier reuse below
	const { file, showFileHeader, formatting, platform = {}, selector = [":root"] } = options;
	const selectors = Array.isArray(selector) ? selector : [selector];

	const header = showFileHeader ? await fileHeader({
		file,
		formatting: getFormattingCloneWithoutPrefix(formatting),
		options,
	}) : "";

	const content = [...layers.entries()].sort((a) => {
		// Force the global layer to be first
		if (a[0] === "global") return -1;
		return 0;
	}).map(([context, layer]) => {
		const variables = [...layer.entries()]
			// Sort entries by name, alphanumerically
			.sort((a, b) => a[0].localeCompare(b[0], "en", { numeric: true }))
			.map(([name, { value, deprecated, deprecated_comment }]) => variableDefinition(name, value, { prefix: platform.prefix, deprecated, deprecated_comment }));

		const items = selectors.map((s) => {
			if (s === ":root" && context !== "dark") return [":root"];
			if (s !== ":root" && context === "core") return [`@scope (${s})`, ":scope"];
			if (context === "dark") return ["@media (prefers-color-scheme: dark)", s];
			if (s !== ":scope" && s !== ":root") return [`${s}--${context}`];
			return [[options.prefix, context].filter(Boolean).join("-"), s];
		}).flat();

		return items.reverse().reduce((previous, currentSelector, index) => {
			const indentation = (formatting?.indentation || "  ").repeat(selectors.length - index);
			return `${indentation}${currentSelector} {\n${previous.split("\n").map((line) => `${indentation}${indentation}${line}`).join("\n")}\n${indentation}}\n`;
		}, variables.join("\n"));
	}).join("\n\n");

	const result = [header, content].filter(Boolean).join("\n") + "\n";

	// Run styles through the css processor, if possible
	if (typeof processCSS === "function") {
		return processCSS(result, undefined, undefined, {
			cwd: platform?.buildPath ?? process.cwd(),
			clean: true,
			map: false,
		}).catch((error) => {
			// eslint-disable-next-line no-console
			if (error) console.log(error);

			return result;
		});
	}

	return result;
};
